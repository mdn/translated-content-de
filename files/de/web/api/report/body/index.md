---
title: "Report: body-Eigenschaft"
short-title: body
slug: Web/API/Report/body
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`body`**-Eigenschaft des [`Report`](/de/docs/Web/API/Report)-Interfaces gibt den Hauptteil des Berichts zurück, der ein `ReportBody`-Objekt enthält, das die detaillierten Berichtsinformationen beinhaltet.

## Wert

Ein `ReportBody`-Objekt, das die detaillierten Berichtsinformationen enthält. Abhängig davon, welchen `type` der [`Report`](/de/docs/Web/API/Report) hat, wird das zurückgegebene Objekt tatsächlich ein [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody), [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) oder [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody) sein. Diese erben alle von der Basis-Klasse `ReportBody` — studieren Sie ihre Referenzseiten für weitere Informationen darüber, welche spezifischen Berichtskörper-Typen enthalten.

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
