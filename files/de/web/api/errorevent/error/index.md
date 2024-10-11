---
title: "ErrorEvent: error-Eigenschaft"
short-title: error
slug: Web/API/ErrorEvent/error
l10n:
  sourceCommit: 1442d92e737ee5ab7a5041abc292f9d61da94a73
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`error`** schreibgeschützte Eigenschaft der [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Schnittstelle gibt einen JavaScript-Wert zurück, wie z.B. ein {{jsxref("Error")}} oder [`DOMException`](/de/docs/Web/API/DOMException), der den mit diesem Ereignis verbundenen Fehler darstellt.

## Wert

Jeder gültige JavaScript-Wert.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log("The error instance: " + ev.error);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
