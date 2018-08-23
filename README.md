##What is FLUX?

Flux is an architecture for creating data layers in JavaScript applications. It was designed at Facebook along with the React view library. It places a focus on creating explicit and understandable update paths for your application's data, which makes tracing changes during development simpler and makes bugs easier to track down and fix.


##Sample flux diagram
http://fluxxor.com/images/flux-simple.png

Flux eschews this design in favor of a one-way data flow. All user interactions within a view call an action creator, which causes an action event to be emitted from a singleton dispatcher. The dispatcher is a single-point-of-emission for all actions in a flux application. The action is sent from the dispatcher to stores, which update themselves in response to the action.

The flow doesn't change significantly for additional stores or views. The dispatcher simply sends every action to all the stores in the application. Note that it does not contain knowledge about how to actually update the stores—the stores themselves contain this business logic. Each store is responsible for a domain of the application, and only update themselves in response to actions.

When a store updates, it emits a change event. In many React applications, special views (known sometimes as "controller-views") are responsible for watching for this change event, reading the stores' new data, and passing that data through properties to child views. It's not uncommon in a React application for a store change event to trigger a re-render of the top-level view, effectively re-rendering the entire view hierarchy (which React handles in an efficient manner). This completely avoids complex bugs and performance problems that can arise out of trying to watch for specific property changes on models and modifying parts of views only slightly.
