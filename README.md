### Event propagation, capturing, bubbling and once

The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.

To catch an event on the capturing phase, we need to set the handler capture option to true.

There are two possible values of the capture option:

If it’s false (default), then the handler is set on the bubbling phase.
If it’s true, then the handler is set on the capturing phase.

The bubbling principle is simple.

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

A click on the third div first runs on itself, then on its immediate ancestor, then on the second ancestor etc.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.

The most deeply nested element that caused the event is called a target element, accessible as event.target.

Note the differences from this (=event.currentTarget):

event.target – is the “target” element that initiated the event, it doesn’t change through the bubbling process.
this – is the “current” element, the one that has a currently running handler on it.

Any handler may decide that the event has been fully processed and stop the bubbling.

The method for it is event.stopPropagation().

Once set to true unbinds the event after it happens for the first time.