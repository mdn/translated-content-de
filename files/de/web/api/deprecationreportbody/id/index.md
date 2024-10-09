---
title: "DeprecationReportBody: id-Eigenschaft"
short-title: id
slug: Web/API/DeprecationReportBody/id
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`id`** des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interface gibt einen String zurück, der das veraltete Feature oder die API darstellt. Dies kann verwendet werden, um verwandte Berichte zu gruppieren oder zu zählen.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten, und drucken dann den Wert von `id` in die Konsole.

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
