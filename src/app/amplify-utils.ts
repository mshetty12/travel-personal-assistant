import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

export const amplifyClient = generateClient<Schema>();

import { configureAutoTrack } from 'aws-amplify/analytics';

configureAutoTrack({
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // REQUIRED, the event type, it's one of 'event', 'pageView' or 'session'
  type: 'session',
  // OPTIONAL, additional options for the tracked event.
  options: {
    // OPTIONAL, the attributes of the event
    attributes: {
      customizableField: 'attr'
    },
    // OPTIONAL, the event name. By default, this is 'pageView'
    eventName: 'pageView',

    // OPTIONAL, the type of app under tracking. By default, this is 'multiPageApp'.
    // You will need to change it to 'singlePage' if your app is a single-page app like React
    appType: 'multiPageApp',

    // OPTIONAL, provide the URL for the event.
    urlProvider:  () => {
      // the default function
      return window.location.origin + window.location.pathname;
    }
  }
});
