---
title: Erstellen und Auslösen von Ereignissen
slug: Web/Events/Creating_and_triggering_events
l10n:
  sourceCommit: 0c163056cfe83fba519b757f15d2e20f83eddaff
---

Dieser Artikel zeigt, wie Sie DOM-Ereignisse erstellen und auslösen können. Solche Ereignisse werden üblicherweise als **synthetische Ereignisse** bezeichnet, im Gegensatz zu den Ereignissen, die vom Browser selbst ausgelöst werden.

## Erstellen von benutzerdefinierten Ereignissen

Ereignisse können mit dem [`Event`](/de/docs/Web/API/Event)-Konstruktor wie folgt erstellt werden:

```js
const event = new Event("build");

// Hören Sie auf das Ereignis.
elem.addEventListener(
  "build",
  (e) => {
    /* … */
  },
  false,
);

// Lösen Sie das Ereignis aus.
elem.dispatchEvent(event);
```

Das obige Code-Beispiel verwendet die Methode [EventTarget.dispatchEvent()](/de/docs/Web/API/EventTarget/dispatchEvent).

Dieser Konstruktor wird in den meisten modernen Browsern unterstützt. Für einen umfangreicheren Ansatz lesen Sie weiter unten [die altmodische Methode](#die_altmodische_methode).

### Hinzufügen benutzerdefinierter Daten – CustomEvent()

Um mehr Daten an das Ereignisobjekt hinzuzufügen, existiert die [CustomEvent](/de/docs/Web/API/CustomEvent)-Schnittstelle und die **detail**-Eigenschaft kann verwendet werden, um benutzerdefinierte Daten zu übergeben.
Zum Beispiel könnte das Ereignis wie folgt erstellt werden:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Dies ermöglicht dann den Zugriff auf die zusätzlichen Daten im Ereignis-Listener:

```js
function eventHandler(e) {
  console.log(`The time is: ${e.detail}`);
}
```

### Die altmodische Methode

Der ältere Ansatz zur Erstellung von Ereignissen verwendet APIs, die von Java inspiriert sind. Das Folgende zeigt ein Beispiel mit {{domxref("document.createEvent()")}}:

```js
// Erstellen Sie das Ereignis.
const event = document.createEvent("Event");

// Definieren Sie, dass der Ereignisname 'build' ist.
event.initEvent("build", true, true);

// Hören Sie auf das Ereignis.
elem.addEventListener(
  "build",
  (e) => {
    // e.target entspricht elem
  },
  false,
);

// target kann ein beliebiges Element oder ein anderes EventTarget sein.
elem.dispatchEvent(event);
```

### Ereignis-Bubbling

Oftmals ist es wünschenswert, ein Ereignis aus einem Kind-Element auszulösen und von einem Vorfahren auffangen zu lassen; optional mit Daten:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Erstellen Sie ein neues Ereignis, erlauben Sie Bubbling und übergeben Sie beliebige Daten, die Sie an die "detail"-Eigenschaft übergeben möchten
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// Das Formelement hört auf das benutzerdefinierte "awesome"-Ereignis und gibt dann die Ausgabe der übergebenen text()-Methode in die Konsole aus
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// Während der Benutzer tippt, löst das Textarea-Element innerhalb des Formulars das Ereignis aus und nutzt sich selbst als Ausgangspunkt
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
  // Erstellen und Auslösen/Auslösen eines Ereignisses im Handumdrehen
  // Hinweis: Optional haben wir auch den "function expression" (anstelle des "arrow function expression") genutzt, sodass "this" das Element repräsentiert
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Auslösen integrierter Ereignisse

Dieses Beispiel demonstriert das Simulieren eines Klicks (d. h. das programmgesteuerte Erzeugen eines Klickereignisses) auf ein Kontrollkästchen unter Verwendung von DOM-Methoden. [Sehen Sie sich das Beispiel in Aktion an.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

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
    // Ein Handler hat preventDefault aufgerufen.
    alert("cancelled");
  } else {
    // Keiner der Handler hat preventDefault aufgerufen.
    alert("not cancelled");
  }
}
```

## Siehe auch

- [CustomEvent()](/de/docs/Web/API/CustomEvent/CustomEvent)
- {{domxref("document.createEvent()")}}
- {{domxref("Event.initEvent()")}}
- {{domxref("EventTarget.dispatchEvent()")}}
- {{domxref("EventTarget.addEventListener()")}}

<section id="Quick_links">
  <ol>
    <li><a href="/de/docs/Learn/JavaScript/Building_blocks/Events">Einführung in Ereignisse</a></li>
    <li><a href="/de/docs/Web/Events/Event_handlers">Ereignis-Handler (Überblick)</a></li>
    <li><a href="/de/docs/Web/Events">Ereignisreferenz</a></li>
  </ol>
</section>
