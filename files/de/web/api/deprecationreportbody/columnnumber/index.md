---
title: "DeprecationReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/DeprecationReportBody/columnNumber
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`columnNumber`**-Schreibgeschützte Eigenschaft des {{domxref("DeprecationReportBody")}}-Interfaces gibt die Spalte in der Quelldatei zurück, in der das veraltete Feature verwendet wurde.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Kombination mit {{domxref("DeprecationReportBody.sourceFile")}} und {{domxref("DeprecationReportBody.lineNumber")}}, da sie die Lokalisierung der Spalte in der entsprechenden Datei und Zeile ermöglicht, in der der Fehler aufgetreten ist.

## Wert

Ein Integer oder `null`, wenn die Spalte nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Veraltungsmeldungen zu beobachten, und geben anschließend den Wert von `columnNumber` in der Konsole aus.

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
