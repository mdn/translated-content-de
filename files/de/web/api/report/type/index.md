---
title: "Report: type-Eigenschaft"
short-title: type
slug: Web/API/Report/type
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`type`**-Schreibgeschützte Eigenschaft der [`Report`](/de/docs/Web/API/Report)-Schnittstelle gibt den Typ des generierten Berichts zurück, z. B. `deprecation` oder `intervention`.

## Wert

Ein String, der den Typ des Berichts darstellt. Derzeit sind die verfügbaren Typen `deprecation`, `intervention` und `crash`.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // Log the first report's report type, i.e. "deprecation"
  console.log(firstReport.type);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
