---
title: "ErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/ErrorEvent/error
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`error`**-Eigenschaft der [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Schnittstelle (nur lesbar) gibt einen JavaScript-Wert zurück, wie ein {{jsxref("Error")}} oder [`DOMException`](/de/docs/Web/API/DOMException), der den mit diesem Ereignis verbundenen Fehler darstellt.

## Wert

Jeder gültige JavaScript-Wert.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log(`The error instance: ${ev.error}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
