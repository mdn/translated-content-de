---
title: "AbortSignal: reason-Eigenschaft"
short-title: reason
slug: Web/API/AbortSignal/reason
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`reason`**-Eigenschaft (nur lesbar) gibt einen JavaScript-Wert zurück, der den Abbruchgrund angibt.

Die Eigenschaft ist `undefined`, wenn das Signal nicht abgebrochen wurde.
Sie kann auf einen bestimmten Wert gesetzt werden, wenn das Signal abgebrochen wird, indem [`AbortController.abort()`](/de/docs/Web/API/AbortController/abort) oder [`AbortSignal.abort()`](/de/docs/Web/API/AbortSignal/abort_static) verwendet wird.
Wenn sie nicht explizit in diesen Methoden gesetzt wird, ist der Standardwert "AbortError" [`DOMException`](/de/docs/Web/API/DOMException).

## Wert

Ein JavaScript-Wert, der den Abbruchgrund angibt, oder `undefined`, wenn nicht abgebrochen.

## Beispiele

Im folgenden Schnipsel erstellen wir ein neues `AbortController`-Objekt und erhalten dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) (verfügbar über die `signal`-Eigenschaft).
Später überprüfen wir mit der `aborted`-Eigenschaft, ob das Signal abgebrochen wurde, und loggen den Abbruchstatus und Grund in die Konsole.

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

- [Fetch-API](/de/docs/Web/API/Fetch_API)
