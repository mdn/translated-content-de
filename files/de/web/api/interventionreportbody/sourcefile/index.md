---
title: "InterventionReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/InterventionReportBody/sourceFile
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`sourceFile`** des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interfaces gibt den Pfad zur Quelldatei zurück, in der die Intervention auftrat.

> [!NOTE]
> Diese Eigenschaft kann zusammen mit [`InterventionReportBody.lineNumber`](/de/docs/Web/API/InterventionReportBody/lineNumber) und [`InterventionReportBody.columnNumber`](/de/docs/Web/API/InterventionReportBody/columnNumber) verwendet werden, um die Spalte und Zeile in der Datei zu bestimmen, in der das Feature verwendet wird.

## Wert

Ein String oder `null`, wenn der Pfad unbekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und geben dann den Wert von `sourceFile` in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
