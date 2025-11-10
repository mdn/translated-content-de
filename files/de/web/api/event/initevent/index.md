---
title: "Event: initEvent() Methode"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("DOM")}}{{deprecated_header}}{{AvailableInWorkers}}

Die **`Event.initEvent()`**-Methode wird verwendet, um den Wert eines [`event`](/de/docs/Web/API/Event) zu initialisieren, der mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt wurde.

Ereignisse, die auf diese Weise initialisiert wurden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, hat sie keine Wirkung mehr.

> [!NOTE]
> _Verwenden Sie diese Methode nicht mehr, da sie veraltet ist._
> Stattdessen sollten Sie spezifische Ereigniskonstruktoren wie [`Event()`](/de/docs/Web/API/Event/Event) verwenden. Der Abschnitt über das [Erstellen und Auslösen von Ereignissen](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) bietet mehr Informationen über den Einsatz dieser Methoden.

## Syntax

```js-nolint
initEvent(type, bubbles, cancelable)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `bubbles`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis die Ereigniskette hinauf wandern soll oder nicht. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert an.
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

- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte:
  [`Event()`](/de/docs/Web/API/Event/Event). Um spezifischere Ereignis-Interfaces als `Event` zu erstellen, verwenden Sie den für das gewünschte Ereignis-Interface definierten Konstruktor.
