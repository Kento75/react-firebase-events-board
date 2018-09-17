# Database Setting

## Cloud FireStore
Rules

```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
    }
    // allow users to write to their own profiles
    match /users/{userId} {
      allow read: if request.auth.uid != null;
      allow write: if request.auth.uid == userId;
      match /{allSubcollections=**} {
        allow read;
        allow write: if request.auth.uid == userId;
      }
    }
    match /events/{eventId} {
      allow read;
      allow create: if request.auth.uid != null;
      allow write: if request.auth.uid != null
        && (('attendees.' + request.auth.uid) in request.writeFields);
      allow update: if resource.data.hostUid == request.auth.uid;
    }
    match /event_attendee/{allDocs=**} {
      allow read, write: if request.auth.uid != null;
    }
    match /activity/{allDocs=**} {
      allow list: if request.query.limit <= 5;
    }
  }
}
```

