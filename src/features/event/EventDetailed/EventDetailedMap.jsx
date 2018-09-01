import React from "react";
import { Segment, Icon } from "semantic-ui-react";
import GoogleMapReact from 'google-map-react';
import { PLACES_API_KEY } from "../../../app/common/keys/appid";

const Marker = () => <Icon name="marker" size="big" color="red" />

const EventDetailedMap = ({ lat, lng }) => {
  const center = [lat, lng];
  const zoom = 14;
  return (
    <Segment attached="bottom" style={{padding: 0}}>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: PLACES_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
};

export default EventDetailedMap;
