---
title: "Bericht: Typ-Eigenschaft"
short-title: Typ
slug: Web/API/Report/type
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die schreibgeschützte Eigenschaft **`type`** der {{domxref("Report")}}
Schnittstelle gibt den Typ des erstellten Berichts zurück, z.B. `deprecation` oder
`intervention`.

## Wert

Ein Zeichenfolge, die den Typ des Berichts darstellt. Derzeit verfügbare Typen sind
`deprecation`, `intervention` und `crash`.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // Loggen Sie den Berichtstyp des ersten Berichts, d.h. "deprecation"
  console.log(firstReport.type);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
