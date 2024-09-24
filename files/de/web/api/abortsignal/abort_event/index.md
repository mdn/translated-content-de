---
title: "AbortSignal: abort Ereignis"
short-title: abort
slug: Web/API/AbortSignal/abort_event
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Das **`abort`** Ereignis des {{domxref("AbortSignal")}} wird ausgelöst, wenn die zugehörige Anfrage abgebrochen wird, z.B. durch die Verwendung von {{domxref("AbortController.abort()")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener('abort', (event) => { })

onabort = (event) => { }
```

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne hinzugefügte Eigenschaften.

## Beispiele

In den folgenden Code-Schnipseln erstellen wir ein neues `AbortController`-Objekt und erhalten dessen {{domxref("AbortSignal")}} (verfügbar über die `signal`-Eigenschaft). Später prüfen wir, ob das Signal über eine Ereignishandler-Eigenschaft abgebrochen wurde.

Sie können das `abort` Ereignis mit einer [`addEventListener`](/de/docs/Web/API/EventTarget/addEventListener)-Methode erfassen:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Request aborted");
});
```

Oder verwenden Sie die `onabort`-Ereignishandler-Eigenschaft:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.onabort = () => {
  console.log("Request aborted");
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
