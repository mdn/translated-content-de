---
title: Erstellen und Auslösen von Ereignissen
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

Dieser Artikel zeigt, wie DOM-Ereignisse erstellt und ausgelöst werden. Solche Ereignisse werden üblicherweise als **synthetische Ereignisse** bezeichnet, im Gegensatz zu den Ereignissen, die vom Browser selbst ausgelöst werden.

## Erstellen benutzerdefinierter Ereignisse

Ereignisse können mit dem [`Event`](/de/docs/Web/API/Event)-Konstruktor wie folgt erstellt werden:

```js
const event = new Event("build");

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// Dispatch the event.
elem.dispatchEvent(event);
```

Das obige Codebeispiel verwendet die Methode [EventTarget.dispatchEvent()](/de/docs/Web/API/EventTarget/dispatchEvent).

Dieser Konstruktor wird in den meisten modernen Browsern unterstützt. Für einen ausführlicheren Ansatz siehe [die altmodische Methode](#the_old-fashioned-way) unten.

### Hinzufügen benutzerdefinierter Daten – CustomEvent()

Um dem Ereignisobjekt mehr Daten hinzuzufügen, gibt es die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übermitteln.
Zum Beispiel könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht es Ihnen dann, auf die zusätzlichen Daten im Ereignislistener zuzugreifen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Die altmodische Methode

Der ältere Ansatz zur Erstellung von Ereignissen verwendet von Java inspirierte APIs. Das folgende Beispiel zeigt die Verwendung von [`document.createEvent()`](/de/docs/Web/API/Document/createEvent):

```js
// Create the event.
const event = document.createEvent("Event");

// Define that the event name is 'build'.
event.initEvent("build");

// Listen for the event.
elem.addEventListener(
  "build",
  (e) => {
    // e.target matches elem
  },
  false,
);

// target can be any Element or other EventTarget.
elem.dispatchEvent(event);
```

### Ereignis-Bubbling

Es ist oft wünschenswert, ein Ereignis von einem Kindelement auszulösen und es von einem übergeordneten Element erfassen zu lassen; optional mit Daten:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Create a new event, allow bubbling, and provide any data you want to pass to the "detail" property
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// The form element listens for the custom "awesome" event and then consoles the output of the passed text() method
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// As the user types, the textarea inside the form dispatches/triggers the event to fire, and uses itself as the starting point
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Ereignisse dynamisch erstellen und auslösen

Elemente können auf Ereignisse hören, die noch nicht erstellt wurden:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // Create and dispatch/trigger an event on the fly
  // Note: Optionally, we've also leveraged the "function expression" (instead of the "arrow function expression") so "this" will represent the element
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Auslösen eingebauter Ereignisse

Dieses Beispiel demonstriert das Simulieren eines Klicks (d.h. das programmgesteuerte Generieren eines Klickereignisses) auf ein Kontrollkästchen mithilfe von DOM-Methoden. [Beispiel in Aktion ansehen.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // A handler called preventDefault.
    alert("cancelled");
  } else {
    // None of the handlers called preventDefault.
    alert("not cancelled");
  }
}
```

## Siehe auch

- [CustomEvent()](/de/docs/Web/API/CustomEvent/CustomEvent)
- [`document.createEvent()`](/de/docs/Web/API/Document/createEvent)
- [`Event.initEvent()`](/de/docs/Web/API/Event/initEvent)
- [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent)
- [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events/Event_handlers">Ereignis-Handler (Übersicht)</a></li>
    <li><a href="/de/docs/Web/Events">Ereignis-Referenz</a></li>
  </ol>
</section>
