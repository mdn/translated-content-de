---
title: "ErrorEvent: colno-Eigenschaft"
short-title: colno
slug: Web/API/ErrorEvent/colno
l10n:
  sourceCommit: 5021b506f3879b6f3131b763c4bc76b6d39baafa
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`colno`** des [`ErrorEvent`](/de/docs/Web/API/ErrorEvent) Schnittstelle gibt eine Ganzzahl zurück, die die Spaltennummer der Skriptdatei enthält, in der der Fehler aufgetreten ist.

## Wert

Eine Ganzzahl.

## Beispiele

```js
window.addEventListener("error", (ev) => {
  console.log("The error occur in column: " + ev.colno);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
