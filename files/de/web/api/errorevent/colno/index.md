---
title: "ErrorEvent: colno-Eigenschaft"
short-title: colno
slug: Web/API/ErrorEvent/colno
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte **`colno`**-Eigenschaft der [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)-Schnittstelle gibt eine ganze Zahl zurück, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.

## Wert

Eine ganze Zahl.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log(`The error occur in column: ${ev.colno}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
