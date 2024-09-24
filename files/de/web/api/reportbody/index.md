---
title: ReportBody
slug: Web/API/ReportBody
l10n:
  sourceCommit: 930683b0618a36a5bb497cfaedced2f4de767889
---

{{APIRef("Reporting API")}}

Das **`ReportBody`**-Interface der {{domxref('Reporting API','','',' ')}} repräsentiert den Körper eines Berichts. Einzelne Berichtstypen erben von diesem Interface und fügen spezifische Attribute hinzu, die für den jeweiligen Bericht relevant sind.

### Berichte, die von `ReportBody` erben

- {{domxref("CSPViolationReportBody")}}
- {{domxref("DeprecationReportBody")}}
- {{domxref("InterventionReportBody")}}

Eine Instanz von `ReportBody` wird als Wert von {{domxref("Report.body")}} zurückgegeben. Das Interface hat keinen Konstruktor.

## Instanzmethoden

- {{domxref("ReportBody.toJSON()")}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `ReportBody`-Objekts zurückgibt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten. Das {{domxref("InterventionReportBody")}}-Interface erbt von `ReportBody`.

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
