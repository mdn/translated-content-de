---
title: "DeprecationReportBody: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/DeprecationReportBody/lineNumber
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`lineNumber`** der Schnittstelle {{domxref("DeprecationReportBody")}} gibt die Zeile in der Quelldatei zurück, in der das veraltete Feature verwendet wurde.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Verbindung mit {{domxref("DeprecationReportBody.sourceFile")}}, da sie das Auffinden der Zeile in dieser Datei ermöglicht, in der der Fehler aufgetreten ist.

## Wert

Ein Integer oder `null`, wenn die Zeile nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Veraltungsmeldungen zu beobachten, und geben dann den Wert von `lineNumber` in der Konsole aus.

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
