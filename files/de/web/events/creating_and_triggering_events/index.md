---
title: Erstellen und Auslösen von Ereignissen
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

Dieser Artikel demonstriert, wie DOM-Ereignisse erstellt und ausgelöst werden. Solche Ereignisse werden üblicherweise als **synthetische Ereignisse** bezeichnet, im Gegensatz zu den Ereignissen, die vom Browser selbst ausgelöst werden.

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

Um dem Ereignisobjekt mehr Daten hinzuzufügen, existiert die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle und die **detail**-Eigenschaft kann genutzt werden, um benutzerdefinierte Daten zu übergeben.
Das Ereignis könnte beispielsweise wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht dann den Zugriff auf die zusätzlichen Daten im Ereignislistener:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Hinzufügen benutzerdefinierter Daten – Unterklassen von Event

Die [`Event`](/de/docs/Web/API/Event)-Schnittstelle kann auch unterklassifiziert werden. Dies ist besonders nützlich für die Wiederverwendung, für kompliziertere benutzerdefinierte Daten oder sogar, um Methoden zum Ereignis hinzuzufügen.

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

Die zusätzlichen Daten können dann in den Ereignislistenern mithilfe der benutzerdefinierten Eigenschaften abgerufen werden:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.buildTime}`);
}
```

### Ereignis-Bubbling

Es ist oft wünschenswert, ein Ereignis von einem Kindelement auszulösen und einen Vorfahren es auffangen zu lassen; optional mit Daten:

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

### Dynamisches Erstellen und Auslösen von Ereignissen

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

Dieses Beispiel zeigt, wie ein Klick simuliert wird (also programmatisch ein Klickereignis erzeugt) auf einer Checkbox mithilfe von DOM-Methoden. [Sehen Sie sich das Beispiel in Aktion an.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
    <li><a href="/de/docs/Web/Events/Creating_and_triggering_events">Erstellen und Auslösen von Ereignissen</a></li>
    <li><a href="/de/docs/Web/Events/Event_handlers">Ereignis-Handler (Übersicht)</a></li>
  </ol>
</section>
