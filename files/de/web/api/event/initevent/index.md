---
title: "Event: initEvent() Methode"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef("DOM")}}{{deprecated_header}}{{AvailableInWorkers}}

Die **`Event.initEvent()`** Methode wird verwendet, um den Wert eines [`event`](/de/docs/Web/API/Event) zu initialisieren, das mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt wurde.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) weitergeleitet wird. Nach der Weiterleitung hat sie keine Wirkung mehr.

> [!NOTE]
> _Verwenden Sie diese Methode nicht mehr, da sie veraltet ist._
> Stattdessen sollten Sie spezifische Ereigniskonstruktoren wie [`Event()`](/de/docs/Web/API/Event/Event) verwenden. Der Abschnitt über [Erstellen und Weiterleiten von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) bietet weitere Informationen zur Nutzung dieser.

## Syntax

```js-nolint
initEvent(type, bubbles, cancelable)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `bubbles`
  - : Ein boolescher Wert, der festlegt, ob das Ereignis in der Ereigniskette hochblubbern soll oder nicht. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert an.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert an.

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

- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden soll:
  [`Event()`](/de/docs/Web/API/Event/Event). Um spezifischere Ereignis-Interfaces als `Event` zu erstellen, verwenden Sie den Konstruktor, der für das gewünschte Ereignis-Interface definiert ist.
