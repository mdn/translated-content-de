---
title: "ErrorEvent: filename-Eigenschaft"
short-title: filename
slug: Web/API/ErrorEvent/filename
l10n:
  sourceCommit: 7d6ffd01f66c97c089dc559a636516b932af5ad5
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`filename`**-Eigenschaft des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Interfaces gibt einen String zurück, der den Namen der Skriptdatei enthält, in der der Fehler aufgetreten ist.

## Wert

Ein String.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log("The error occur in file: " + ev.filename);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
