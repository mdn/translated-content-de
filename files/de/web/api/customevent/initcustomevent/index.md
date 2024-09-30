---
title: "CustomEvent: initCustomEvent() Methode"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`**-Methode initialisiert ein [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Objekt.
Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis zu setzen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.
Sobald es ausgelöst wurde, tut es nichts mehr.

> **Note:** **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Stattdessen sollten Sie spezifische Ereigniskonstruktoren verwenden, wie [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
> Die Seite [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) gibt weitere Informationen zur Nutzung dieser Möglichkeiten.

## Syntax

```js-nolint
event.initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis im DOM hoch- oder nicht hochblubbert.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `detail`
  - : Alle Daten, die dem Handler über die Eigenschaft [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail) zur Verfügung stehen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
