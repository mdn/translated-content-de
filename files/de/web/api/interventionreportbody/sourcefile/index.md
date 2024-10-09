---
title: "InterventionReportBody: sourceFile Eigenschaft"
short-title: sourceFile
slug: Web/API/InterventionReportBody/sourceFile
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`sourceFile`** des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interfaces gibt den Pfad zur Quelldatei zurück, in der die Intervention aufgetreten ist.

> [!NOTE]
> Diese Eigenschaft kann zusammen mit [`InterventionReportBody.lineNumber`](/de/docs/Web/API/InterventionReportBody/lineNumber) und [`InterventionReportBody.columnNumber`](/de/docs/Web/API/InterventionReportBody/columnNumber) verwendet werden, um die Spalte und Zeile in der Datei zu finden, in der die Funktion verwendet wird.

## Wert

Ein String oder `null`, wenn der Pfad nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und drucken dann den Wert von `sourceFile` in die Konsole.

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
