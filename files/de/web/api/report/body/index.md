---
title: "Report: body-Eigenschaft"
short-title: body
slug: Web/API/Report/body
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{APIRef("Reporting API")}}

Die **`body`** schreibgeschützte Eigenschaft des [`Report`](/de/docs/Web/API/Report)-Interfaces gibt den Inhalt des Berichts zurück, der ein `ReportBody`-Objekt ist und die detaillierten Berichts-Informationen enthält.

## Wert

Ein `ReportBody`-Objekt, das die detaillierten Berichts-Informationen enthält. Abhängig davon, welcher `type` der [`Report`](/de/docs/Web/API/Report) ist, wird das zurückgegebene Objekt tatsächlich ein [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody), [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) oder [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) sein. Diese alle erben von der grundlegenden `ReportBody`-Klasse — studieren Sie deren Referenzseiten, um mehr über den Inhalt der spezifischen Berichtskörpertypen zu erfahren.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // Log the first report's report body, i.e. a DeprecationReportBody object
  console.log(firstReport.body);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
