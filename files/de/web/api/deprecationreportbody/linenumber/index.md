---
title: "DeprecationReportBody: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/DeprecationReportBody/lineNumber
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`lineNumber`** des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces gibt die Zeile in der Quellcode-Datei zurück, in der das veraltete Feature verwendet wurde.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Verbindung mit [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile), da sie die Lokalisierung der Zeile in dieser Datei, in der der Fehler aufgetreten ist, ermöglicht.

## Wert

Ein ganzzahliger Wert oder `null`, wenn die Zeile nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Verwendungsberichte zu überwachen, und geben dann den Wert von `lineNumber` in der Konsole aus.

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
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
