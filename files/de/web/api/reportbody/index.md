---
title: ReportBody
slug: Web/API/ReportBody
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Das **`ReportBody`**-Interface der [Reporting-API](/de/docs/Web/API/Reporting_API) repräsentiert den Körper eines Berichts. Einzelne Berichtstypen erben von diesem Interface und fügen spezifische Attribute hinzu, die für den jeweiligen Bericht relevant sind.

### Berichte, die von `ReportBody` erben

- [`CSPViolationReportBody`](/de/docs/Web/API/CSPViolationReportBody)
- [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)
- [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)

Eine Instanz von `ReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben. Das Interface besitzt keinen Konstruktor.

## Instanzmethoden

- [`ReportBody.toJSON()`](/de/docs/Web/API/ReportBody/toJSON) {{deprecated_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `ReportBody`-Objekts zurückgibt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zur Beobachtung von Intervention Reports. Das [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interface erbt von `ReportBody`.

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
