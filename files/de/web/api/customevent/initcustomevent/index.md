---
title: "CustomEvent: initCustomEvent() Methode"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`**-Methode initialisiert ein [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Objekt.
Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.
Sobald es ausgelöst wurde, macht es nichts mehr.

> [!NOTE]
> **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Anstatt diese Funktion zu verwenden, sollten spezielle Ereignis-Konstruktoren wie [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent) verwendet werden.
> Die Seite über [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) gibt weitere Informationen darüber, wie diese zu verwenden sind.

## Syntax

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis im DOM aufsteigt oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `detail`
  - : Beliebige Daten, die dem Handler über die [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail)-Eigenschaft zur Verfügung stehen.

### Rückgabewert

Keiner (`undefined`).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
