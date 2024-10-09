---
title: "DeprecationReportBody: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/DeprecationReportBody/lineNumber
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte **`lineNumber`**-Eigenschaft der [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Schnittstelle gibt die Zeile in der Quelldatei zurück, in der das veraltete Feature verwendet wurde.

> [!NOTE]
> Diese Eigenschaft ist am nützlichsten in Verbindung mit [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile), da sie die Lokalisierung der Zeile in dieser Datei ermöglicht, in der der Fehler auftrat.

## Wert

Eine Ganzzahl oder `null`, wenn die Zeile nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten, und geben dann den Wert von `lineNumber` in der Konsole aus.

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
