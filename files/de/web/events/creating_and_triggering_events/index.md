---
title: Erstellen und Auslösen von Ereignissen
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: 95e0fbb78a16450188753d0b53ca02a9fbd2a641
---

Dieser Artikel demonstriert, wie DOM-Ereignisse erstellt und ausgelöst werden. Solche Ereignisse werden im Allgemeinen als **synthetische Ereignisse** bezeichnet, im Gegensatz zu den Ereignissen, die vom Browser selbst ausgelöst werden.

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

### Hinzufügen benutzerdefinierter Daten – CustomEvent()

Um dem Ereignisobjekt mehr Daten hinzuzufügen, existiert das [CustomEvent](/de/docs/Web/API/CustomEvent)-Interface und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übergeben. Zum Beispiel könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht Ihnen dann, die zusätzlichen Daten im Ereignis-Listener zuzugreifen:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Hinzufügen benutzerdefinierter Daten – Event subclassen

Das [`Event`](/de/docs/Web/API/Event)-Interface kann auch subclassed werden. Dies ist besonders nützlich für die Wiederverwendung oder für komplexere benutzerdefinierte Daten, oder sogar das Hinzufügen von Methoden zum Ereignis.

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

Das obige Codebeispiel definiert eine `BuildEvent`-Klasse mit einer schreibgeschützten Eigenschaft und einem festen Ereignistyp.

Das Ereignis könnte dann wie folgt erstellt werden:

```js
const event = new BuildEvent(elem.dataset.time);
```

Die zusätzlichen Daten können dann in den Ereignis-Listenern durch die benutzerdefinierten Eigenschaften zugegriffen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Ereignis-Bubbling

Es ist oft wünschenswert, ein Ereignis von einem Kindelement auszulösen und es von einem Vorfahren abfangen zu lassen; optional mit Daten:

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

### Erstellen und Auslösen von Ereignissen dynamisch

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

## Auslösen von eingebauten Ereignissen

Dieses Beispiel zeigt die Simulation eines Klicks (d.h. programmatisches Generieren eines Klickereignisses) auf einer Checkbox mithilfe von DOM-Methoden. [Beispiel in Aktion ansehen.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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
