---
title: "ErrorEvent: lineno-Eigenschaft"
short-title: lineno
slug: Web/API/ErrorEvent/lineno
l10n:
  sourceCommit: c51a68c737afbd68787f4450f0c00da2dbdd5317
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`lineno`** des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Interfaces gibt eine Ganzzahl zurück, die die Zeilennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.

## Wert

Eine Ganzzahl.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log("The error occur in line: " + ev.lineno);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
