---
title: "Event: initEvent() Methode"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("DOM")}}{{deprecated_header}}{{AvailableInWorkers}}

Die **`Event.initEvent()`** Methode wird verwendet, um den Wert eines [`event`](/de/docs/Web/API/Event) zu initialisieren, das mit [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt wurde.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird. Einmal ausgelöst, hat sie keine Funktion mehr.

> [!NOTE] > _Verwenden Sie diese Methode nicht mehr, da sie veraltet ist._
> Stattdessen sollten Sie spezifische Ereignis-Konstruktoren wie [`Event()`](/de/docs/Web/API/Event/Event) verwenden.
> Die Seite über das [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) gibt weitere Informationen zur Verwendung dieser.

## Syntax

```js-nolint
initEvent(type, bubbles, cancelable)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `bubbles`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis in der Ereigniskette aufsteigen soll oder nicht. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.bubbles`](/de/docs/Web/API/Event/bubbles) ihren Wert zurück.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann. Einmal festgelegt, gibt die schreibgeschützte Eigenschaft [`Event.cancelable`](/de/docs/Web/API/Event/cancelable) ihren Wert zurück.

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

- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte:
  [`Event()`](/de/docs/Web/API/Event/Event). Um spezifischere Ereignis-Interfaces als `Event` zu erstellen, verwenden Sie den für das gewünschte Ereignis-Interface definierten Konstruktor.
