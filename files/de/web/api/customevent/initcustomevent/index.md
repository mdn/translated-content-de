---
title: "CustomEvent: initCustomEvent()-Methode"
short-title: initCustomEvent()
slug: Web/API/CustomEvent/initCustomEvent
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}{{Deprecated_header}}{{AvailableInWorkers}}

Die **`CustomEvent.initCustomEvent()`**-Methode initialisiert ein [`CustomEvent`](/de/docs/Web/API/CustomEvent)-Objekt.
Wenn das Ereignis bereits ausgelöst wurde, tut diese Methode nichts.

Ereignisse, die auf diese Weise initialisiert werden, müssen mit der Methode [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) erstellt worden sein.
Diese Methode muss aufgerufen werden, um das Ereignis festzulegen, bevor es mit [`EventTarget.dispatchEvent()`](/de/docs/Web/API/EventTarget/dispatchEvent) ausgelöst wird.
Sobald es ausgelöst wurde, hat sie keine weitere Funktion.

> **Hinweis:** **Verwenden Sie diese Methode nicht mehr, da sie veraltet ist.**
>
> Anstelle der Nutzung dieser Funktion, verwenden Sie spezifische Ereignis-Konstruktoren, wie [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
> Die Seite über das [Erstellen und Auslösen von Ereignissen](/de/docs/Web/Events/Creating_and_triggering_events) bietet weitere Informationen, wie diese verwendet werden.

## Syntax

```js-nolint
initCustomEvent(type, canBubble, cancelable, detail)
```

### Parameter

- `type`
  - : Ein String, der den Namen des Ereignisses enthält.
- `canBubble`
  - : Ein boolescher Wert, der angibt, ob das Ereignis durch das DOM blubbern kann oder nicht.
- `cancelable`
  - : Ein boolescher Wert, der angibt, ob das Ereignis abgebrochen werden kann.
- `detail`
  - : Beliebige Daten, die dem Handler über die [`CustomEvent.detail`](/de/docs/Web/API/CustomEvent/detail)-Eigenschaft zur Verfügung stehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- Der Konstruktor, der anstelle dieser veralteten Methode verwendet werden sollte: [`CustomEvent()`](/de/docs/Web/API/CustomEvent/CustomEvent).
