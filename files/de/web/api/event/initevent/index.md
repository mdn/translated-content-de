---
title: "Event: initEvent() Methode"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`Event.initEvent()`** Methode wird verwendet, um den Wert eines [`event`](/de/docs/Web/API/Event) zu initialisieren, das mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt wurde.

Events, die auf diese Weise initialisiert werden, müssen mit der
[`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) Methode erstellt worden sein. Diese Methode muss aufgerufen werden, um das Event zu setzen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Sobald es ausgelöst wurde, hat es keine Wirkung mehr.

> [!NOTE]
> _Verwenden Sie diese Methode nicht mehr, da sie veraltet ist._
> Verwenden Sie stattdessen spezifische Event-Konstruktoren, wie [`Event()`](/de/docs/Web/API/Event/Event).
> Der Abschnitt über das [Erstellen und Auslösen von Events](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) gibt weitere Informationen zur Nutzung dieser.

## Syntax

```js-nolint
initEvent(type, bubbles, cancelable)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Events definiert.
- `bubbles`
  - : Ein boolescher Wert, der entscheidet, ob das Event die Eventkette nach oben wandern soll oder nicht. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert an.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Event abgebrochen werden kann. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert an.

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
elem.addEventListener("click", (e) => {
  // e.target matches elem
});

elem.dispatchEvent(event);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden soll:
  [`Event()`](/de/docs/Web/API/Event/Event). Um spezifischere Event-Schnittstellen als `Event` zu erstellen, verwenden Sie den Konstruktor, der für die gewünschte Event-Schnittstelle definiert ist.
