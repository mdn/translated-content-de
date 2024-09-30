---
title: "AbortSignal: abort Ereignis"
short-title: abort
slug: Web/API/AbortSignal/abort_event
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`abort`** Ereignis des [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird ausgelöst, wenn die zugehörige Anforderung abgebrochen wird, d.h. unter Verwendung von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener('abort', (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

In den folgenden Code-Snippets erstellen wir ein neues `AbortController`-Objekt und erhalten dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) (verfügbar über die `signal`-Eigenschaft). Später prüfen wir, ob das Signal abgebrochen wurde, indem wir eine Ereignis-Handler-Eigenschaft verwenden.

Sie können das `abort`-Ereignis mit einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode erkennen:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

Oder verwenden Sie die `onabort`-Ereignis-Handler-Eigenschaft:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.onabort = () => {
  console.log("Request aborted");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
