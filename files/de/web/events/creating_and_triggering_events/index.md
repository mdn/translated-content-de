---
title: Erstellen und Auslösen von Events
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: 67e109a23d67c4138e36bd03abe7f9a6500eb5c3
---

Dieser Artikel zeigt, wie DOM-Events erstellt und ausgelöst werden. Solche Events werden häufig als **synthetische Events** bezeichnet, im Gegensatz zu den Events, die vom Browser selbst ausgelöst werden.

## Erstellen benutzerdefinierter Events

Events können mit dem [`Event`](/de/docs/Web/API/Event)-Konstruktor wie folgt erstellt werden:

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

### Hinzufügen benutzerdefinierter Daten – CustomEvent()

Um dem Event-Objekt zusätzliche Daten hinzuzufügen, existiert die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle, und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übergeben. Beispielsweise könnte das Event wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht es Ihnen dann, auf die zusätzlichen Daten im Event-Listener zuzugreifen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Hinzufügen benutzerdefinierter Daten – Subclassing von Event

Die [`Event`](/de/docs/Web/API/Event)-Schnittstelle kann auch unterklassifiziert werden. Dies ist besonders nützlich für die Wiederverwendung, für komplexere benutzerdefinierte Daten oder sogar zum Hinzufügen von Methoden zum Event.

```js
class BuildEvent extends Event {
  #buildTime;

  constructor(buildTime) {
    super("build");
    this.#buildTime = buildTime;
  }

  get buildTime() {
    return this.#buildTime;
  }
}
```

Das obige Codebeispiel definiert eine `BuildEvent`-Klasse mit einer schreibgeschützten Eigenschaft und einem festen Event-Typ.

Das Event könnte dann wie folgt erstellt werden:

```js
const event = new BuildEvent(elem.dataset.time);
```

Die zusätzlichen Daten können dann in den Event-Listenern über die benutzerdefinierten Eigenschaften abgerufen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Event-Bubbling

Es ist oft wünschenswert, ein Event von einem Kindelement auszulösen und einen Vorfahren es abfangen zu lassen; optional mit Daten:

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

### Dynamisches Erstellen und Auslösen von Events

Elemente können auf Events hören, die noch nicht erstellt wurden:

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

## Auslösen von eingebauten Events

Dieses Beispiel demonstriert das Simulieren eines Klicks (d.h. das programmgesteuerte Generieren eines Klick-Events) auf ein Kontrollkästchen mithilfe von DOM-Methoden. [Sehen Sie sich das Beispiel in Aktion an.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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
    <li><a href="/de/docs/Learn_web_development/Core/Scripting/Events">Einführung in Events</a></li>
    <li><a href="/de/docs/Web/Events/Event_handlers">Event-Handler (Übersicht)</a></li>
    <li><a href="/de/docs/Web/Events">Event-Referenz</a></li>
  </ol>
</section>
