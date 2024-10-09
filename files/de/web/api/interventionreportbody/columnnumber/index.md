---
title: "InterventionReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/InterventionReportBody/columnNumber
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`columnNumber`** des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interfaces gibt die Zeile in der Quelldatei zurück, in der die Maßnahme stattgefunden hat.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Kombination mit [`InterventionReportBody.sourceFile`](/de/docs/Web/API/InterventionReportBody/sourceFile) und [`InterventionReportBody.lineNumber`](/de/docs/Web/API/InterventionReportBody/lineNumber), da sie es ermöglicht, die Stelle in der Datei und Zeile zu lokalisieren, in der die Funktion verwendet wird.

## Wert

Ein Integer oder `null`, wenn die Spalte nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten und drucken dann den Wert von `columnNumber` in die Konsole.

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
