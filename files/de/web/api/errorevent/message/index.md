---
title: "ErrorEvent: message-Eigenschaft"
short-title: message
slug: Web/API/ErrorEvent/message
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`message`**-Eigenschaft des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Interfaces gibt einen String zurück, der eine für Menschen lesbare Fehlermeldung enthält, die das Problem beschreibt.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log(`The error message: ${ev.message}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
