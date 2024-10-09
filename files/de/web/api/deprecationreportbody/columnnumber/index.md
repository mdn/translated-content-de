---
title: "DeprecationReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/DeprecationReportBody/columnNumber
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`columnNumber`** der [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Schnittstelle gibt die Zeile in der Quelldatei zurück, in der das veraltete Merkmal verwendet wurde.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich zusammen mit [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile) und [`DeprecationReportBody.lineNumber`](/de/docs/Web/API/DeprecationReportBody/lineNumber), da sie die Position der Spalte in dieser Datei und Zeile angibt, in der der Fehler aufgetreten ist.

## Wert

Eine Ganzzahl oder `null`, wenn die Spalte nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten, und geben dann den Wert von `columnNumber` in der Konsole aus.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile); // the source file
  console.log(firstReport.body.lineNumber); // the line in that file
  console.log(firstReport.body.columnNumber); // the column in that file.
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
