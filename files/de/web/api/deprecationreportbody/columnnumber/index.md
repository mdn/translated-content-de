---
title: "DeprecationReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/DeprecationReportBody/columnNumber
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`columnNumber`** des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces gibt die Spalte in der Quelldatei zurück, in der das veraltete Feature verwendet wurde.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Verbindung mit [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile) und [`DeprecationReportBody.lineNumber`](/de/docs/Web/API/DeprecationReportBody/lineNumber), da sie die Lokalisierung der Spalte in der Datei und Zeile ermöglicht, in der der Fehler aufgetreten ist.

## Wert

Ein Integer oder `null`, wenn die Spalte nicht bekannt ist.

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
