---
title: "Bericht: type-Eigenschaft"
short-title: type
slug: Web/API/Report/type
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft des [`Report`](/de/docs/Web/API/Report)
Interfaces gibt den Typ des generierten Berichts zurück, z. B. `deprecation` oder
`intervention`.

## Wert

Ein String, der den Typ des Berichts repräsentiert. Derzeit verfügbare Typen sind
`deprecation`, `intervention` und `crash`.

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
