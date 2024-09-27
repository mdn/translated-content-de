---
title: "InterventionReportBody: id-Eigenschaft"
short-title: id
slug: Web/API/InterventionReportBody/id
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interfaces gibt einen String zurück, der die Intervention identifiziert, die den Bericht generiert hat. Dies kann verwendet werden, um Berichte zu gruppieren.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und geben dann den Wert von `id` in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.id);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
