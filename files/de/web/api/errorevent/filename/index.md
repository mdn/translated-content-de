---
title: "ErrorEvent: filename-Eigenschaft"
short-title: filename
slug: Web/API/ErrorEvent/filename
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`filename`**-Eigenschaft des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Interfaces gibt einen String zurück, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log(`The error occur in file: ${ev.filename}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
