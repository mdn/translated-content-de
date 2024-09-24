---
title: "InterventionReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/InterventionReportBody/sourceFile
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte **`sourceFile`**-Eigenschaft des {{domxref("InterventionReportBody")}}-Interfaces gibt den Pfad zur Quelldatei zurück, in der die Intervention aufgetreten ist.

> [!NOTE]
> Diese Eigenschaft kann zusammen mit {{domxref("InterventionReportBody.lineNumber")}} und {{domxref("InterventionReportBody.columnNumber")}} verwendet werden, um die Spalte und Zeile in der Datei zu lokalisieren, in der die Funktion verwendet wird.

## Wert

Ein String oder `null`, wenn der Pfad nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten. Dann drucken wir den Wert von `sourceFile` in der Konsole aus.

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
