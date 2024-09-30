---
title: "DeprecationReportBody: id-Eigenschaft"
short-title: id
slug: Web/API/DeprecationReportBody/id
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`id`** des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces gibt einen String zurück, der das Feature oder die API darstellt, das veraltet ist. Dies kann verwendet werden, um verwandte Berichte zu gruppieren oder zu zählen.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten, und geben dann den Wert von `id` in der Konsole aus.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.id);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
