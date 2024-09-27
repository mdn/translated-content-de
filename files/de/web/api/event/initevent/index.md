---
title: "Event: Methode initEvent()"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("DOM")}}{{deprecated_header}}{{AvailableInWorkers}}

Die Methode **`Event.initEvent()`** wird verwendet, um den Wert eines mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellten [`Event`](/de/docs/Web/API/Event) zu initialisieren.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgesendet wird. Sobald es ausgesendet ist, tut es nichts mehr.

> **Note:** _Verwenden Sie diese Methode nicht mehr, da sie veraltet ist._
> Stattdessen sollten Sie spezifische Ereignis-Konstruktoren wie [`Event()`](/de/docs/Web/API/Event/Event) verwenden.
> Die Seite [Ereignisse erstellen und auslösen](/de/docs/Web/Events/Creating_and_triggering_events) bietet mehr Informationen über den Weg, diese zu nutzen.

## Syntax

```js-nolint
event.initEvent(type, bubbles, cancelable)
```

### Parameter

- `type`
  - : Ein Zeichenfolgenwert, der den Typ des Ereignisses definiert.
- `bubbles`
  - : Ein boolescher Wert, der bestimmt, ob das Ereignis durch die
    Ereigniskette nach oben weitergegeben werden soll oder nicht. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert wieder.
- `cancelable`
  - : Ein boolescher Wert, der festlegt, ob das Ereignis abgebrochen werden kann. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert wieder.

### Rückgabewert

Keiner.

## Beispiel

```js
// Create the event.
const event = document.createEvent("Event");

// Create a click event that bubbles up and
// cannot be canceled
event.initEvent("click", true, false);

// Listen for the event.
elem.addEventListener(
  "click",
  (e) => {
    // e.target matches elem
  },
  false,
);

elem.dispatchEvent(event);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Den Konstruktor, den Sie anstelle dieser veralteten Methode verwenden sollten:
  [`Event()`](/de/docs/Web/API/Event/Event). Um spezifischere Ereignisschnittstellen als `Event` zu erstellen, verwenden Sie den für die gewünschte Ereignisschnittstelle definierten Konstruktor.
