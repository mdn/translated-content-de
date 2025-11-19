---
title: ReportBody
slug: Web/API/ReportBody
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`ReportBody`**-Schnittstelle der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Körper eines Berichts. Einzelne Berichtstypen erben von dieser Schnittstelle und fügen spezifische Attribute hinzu, die für den jeweiligen Bericht relevant sind.

Die folgenden Schnittstellen erben von `ReportBody`:

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)

Eine Instanz von `ReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben. Die Schnittstelle hat keinen Konstruktor.

## Instanzmethoden

- [`ReportBody.toJSON()`](/de/docs/Web/API/ReportBody/toJSON) {{deprecated_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `ReportBody`-Objekts zurückgibt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten. Die Schnittstelle [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) erbt von `ReportBody`.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  console.log(firstReport.type); // intervention
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
