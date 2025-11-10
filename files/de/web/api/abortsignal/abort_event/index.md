---
title: "AbortSignal: abort-Ereignis"
short-title: abort
slug: Web/API/AbortSignal/abort_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`abort`**-Ereignis des [`AbortSignal`](/de/docs/Web/API/AbortSignal) wird ausgelöst, wenn die zugehörige Anfrage abgebrochen wird, d.h. unter Verwendung von [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beispiele

In den folgenden Code-Snippets erstellen wir ein neues `AbortController`-Objekt und erhalten dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) (verfügbar über die Eigenschaft `signal`). Später überprüfen wir, ob das Signal über eine Event-Handler-Eigenschaft abgebrochen wurde.

Sie können das `abort`-Ereignis mithilfe einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode erkennen:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

Oder verwenden Sie die `onabort`-Event-Handler-Eigenschaft:

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
