---
title: "InterventionReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/InterventionReportBody/columnNumber
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`columnNumber`** der [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Schnittstelle gibt die Spalte in der Quelldatei zurück, in der die Intervention aufgetreten ist.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Verbindung mit [`InterventionReportBody.sourceFile`](/de/docs/Web/API/InterventionReportBody/sourceFile) und [`InterventionReportBody.lineNumber`](/de/docs/Web/API/InterventionReportBody/lineNumber), da sie die Bestimmung der Spaltenposition in dieser Datei und Zeile ermöglicht, wo das Feature verwendet wird.

## Wert

Ein Ganzzahlwert oder `null`, wenn die Spalte nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und geben dann den Wert von `columnNumber` in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
  console.log(firstReport.body.columnNumber); // the column in that file.
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
