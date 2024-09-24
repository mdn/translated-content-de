---
title: "AbortSignal: reason-Eigenschaft"
short-title: reason
slug: Web/API/AbortSignal/reason
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`reason`** gibt einen JavaScript-Wert zurück, der den Abbruchgrund angibt.

Die Eigenschaft ist `undefined`, wenn das Signal nicht abgebrochen wurde. Sie kann auf einen bestimmten Wert gesetzt werden, wenn das Signal mittels {{domxref("AbortController.abort()")}} oder {{domxref("AbortSignal/abort_static", "AbortSignal.abort()")}} abgebrochen wird. Wenn in diesen Methoden kein Wert explizit gesetzt wird, ist der Standard "AbortError" {{domxref("DOMException")}}.

## Wert

Ein JavaScript-Wert, der den Abbruchgrund angibt, oder `undefined`, falls nicht abgebrochen wurde.

## Beispiele

Im folgenden Beispiel erstellen wir ein neues `AbortController`-Objekt und erhalten dessen {{domxref("AbortSignal")}} (verfügbar über die `signal`-Eigenschaft).
Später prüfen wir mit der `aborted`-Eigenschaft, ob das Signal abgebrochen wurde, und protokollieren den Abbruchstatus und den Grund in der Konsole.

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  if (signal.reason) {
    console.log(`Request aborted with reason: ${signal.reason}`);
  } else {
    console.log("Request aborted but no reason was given.");
  }
} else {
  console.log("Request not aborted");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetch API](/de/docs/Web/API/Fetch_API)
