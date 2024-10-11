---
title: "ErrorEvent: message-Eigenschaft"
short-title: message
slug: Web/API/ErrorEvent/message
l10n:
  sourceCommit: ac29130f454fc961f04bc9133b449771dc2f079e
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`message`**-Eigenschaft des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Interfaces gibt einen String zurück, der eine menschenlesbare Fehlermeldung enthält, die das Problem beschreibt.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log("The error message: " + ev.message);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
