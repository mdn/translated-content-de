---
title: "AbortSignal: aborted-Eigenschaft"
short-title: aborted
slug: Web/API/AbortSignal/aborted
l10n:
  sourceCommit: 15f0b5552bc9c2ea1f32b0cd5ee840a7d43c887e
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

Die **`aborted`**-Eigenschaft (nur lesbar) gibt einen Wert zurück, der angibt, ob die asynchronen Operationen, mit denen das Signal kommuniziert, abgebrochen sind (`true`) oder nicht (`false`).

## Wert

`true` (abgebrochen) oder `false`

## Beispiele

Im folgenden Beispiel erstellen wir ein neues `AbortController`-Objekt und erhalten dessen [`AbortSignal`](/de/docs/Web/API/AbortSignal) (verfügbar über die `signal`-Eigenschaft). Später überprüfen wir mit der `aborted`-Eigenschaft, ob das Signal abgebrochen wurde, und senden eine entsprechende Meldung an die Konsole.

```js
const controller = new AbortController();
const signal = controller.signal;

// …

if (signal.aborted) {
  console.log("Request has been aborted");
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
