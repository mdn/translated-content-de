---
title: "Report: body-Eigenschaft"
short-title: body
slug: Web/API/Report/body
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{APIRef("Reporting API")}}

Die **`body`**-Eigenschaft der [`Report`](https://developer.mozilla.org/de/docs/Web/API/Report)-Schnittstelle, welche nur-lesen ist, gibt den Hauptteil des Berichts zurück, der ein `ReportBody`-Objekt mit den detaillierten Berichtsinformationen enthält.

## Wert

Ein `ReportBody`-Objekt, das die detaillierten Berichtsinformationen enthält. Abhängig davon, welchen `type` der [`Report`](https://developer.mozilla.org/de/docs/Web/API/Report) hat, wird das zurückgegebene Objekt tatsächlich ein
[`DeprecationReportBody`](https://developer.mozilla.org/de/docs/Web/API/DeprecationReportBody), [`InterventionReportBody`](https://developer.mozilla.org/de/docs/Web/API/InterventionReportBody) oder
[`CSPViolationReportBody`](https://developer.mozilla.org/de/docs/Web/API/CSPViolationReportBody) sein.
Diese alle erben von der Basisklasse `ReportBody` — studieren Sie ihre Referenzseiten für weitere Informationen darüber, was die speziellen Berichts-Haupttypen enthalten.

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

- [Reporting API](https://developer.mozilla.org/de/docs/Web/API/Reporting_API)
