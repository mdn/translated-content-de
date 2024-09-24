---
title: "Event: initEvent() Methode"
short-title: initEvent()
slug: Web/API/Event/initEvent
l10n:
  sourceCommit: e4cc8b707a1056c14a6316079798b95cb39b725f
---

{{APIRef("DOM")}}{{deprecated_header}}{{AvailableInWorkers}}

Die **`Event.initEvent()`** Methode wird verwendet, um den Wert eines mit {{domxref("Document.createEvent()")}} erstellten {{domxref("event")}} zu initialisieren.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode {{domxref("Document.createEvent()")}} erstellt worden sein. Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit {{domxref("EventTarget.dispatchEvent()")}} ausgelöst wird. Einmal ausgelöst, hat sie keine Wirkung mehr.

> **Note:** _Verwenden Sie diese Methode nicht mehr, da sie veraltet ist._
> Stattdessen sollten Sie spezifische Ereignis-Konstruktoren verwenden, wie etwa {{domxref("Event.Event", "Event()")}}.
> Die Seite [Erstellen und Auslösen von Events](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen, wie diese zu verwenden sind.

## Syntax

```js-nolint
event.initEvent(type, bubbles, cancelable)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses definiert.
- `bubbles`
  - : Ein boolescher Wert, der entscheidet, ob das Ereignis in der Ereigniskette nach oben steigen soll oder nicht. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft {{domxref("Event.bubbles")}} ihren Wert zurück.
- `cancelable`
  - : Ein boolescher Wert, der definiert, ob das Ereignis abgebrochen werden kann. Einmal gesetzt, gibt die schreibgeschützte Eigenschaft {{domxref("Event.cancelable")}} ihren Wert zurück.

### Rückgabewert

Keiner.

## Beispiel

```js
// Erstellen Sie das Ereignis.
const event = document.createEvent("Event");

// Erstellen Sie ein Klick-Ereignis, das nach oben steigt und
// nicht abgebrochen werden kann
event.initEvent("click", true, false);

// Hören Sie auf das Ereignis.
elem.addEventListener(
  "click",
  (e) => {
    // e.target entspricht elem
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
  {{domxref("Event.Event", "Event()")}}. Um spezifischere Ereignis-Interfaces als `Event` zu erstellen, verwenden Sie den für das gewünschte Ereignis-Interface definierten Konstruktor.
