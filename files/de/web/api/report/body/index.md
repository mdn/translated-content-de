---
title: "Bericht: body-Eigenschaft"
short-title: body
slug: Web/API/Report/body
l10n:
  sourceCommit: c99afd3cafe73c93831bd73ad1dac285c3c713b1
---

{{APIRef("Reporting API")}}

Die **`body`** schreibgeschützte Eigenschaft des {{domxref("Report")}}
Interfaces gibt den Inhalt des Berichts zurück, welcher ein `ReportBody`-Objekt
ist, das die detaillierten Berichtsinformationen enthält.

## Wert

Ein `ReportBody`-Objekt, das die detaillierten Berichtsinformationen enthält. Je nachdem,
welcher `type` der {{domxref("Report")}} ist, wird das zurückgegebene Objekt tatsächlich ein
{{domxref("DeprecationReportBody")}}, {{domxref("InterventionReportBody")}} oder
{{domxref("CSPViolationReportBody")}} sein.
Alle erben von der Basisklasse `ReportBody` — studieren Sie deren Referenzseiten für weitere Informationen darüber, was die speziellen Berichtskörpertypen enthalten.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // Loggen Sie den Berichtskörper des ersten Berichts, d.h. ein DeprecationReportBody-Objekt
  console.log(firstReport.body);
}, options);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
