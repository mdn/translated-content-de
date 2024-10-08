---
title: "DeprecationReportBody: sourceFile-Eigenschaft"
short-title: sourceFile
slug: Web/API/DeprecationReportBody/sourceFile
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`sourceFile`** der [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Schnittstelle gibt den Pfad zur Quelldatei zurück, in der das veraltete Feature verwendet wurde.

> [!NOTE]
> Diese Eigenschaft kann zusammen mit [`DeprecationReportBody.lineNumber`](/de/docs/Web/API/DeprecationReportBody/lineNumber) und [`DeprecationReportBody.columnNumber`](/de/docs/Web/API/DeprecationReportBody/columnNumber) verwendet werden, um die Spalte und Zeile in der Datei zu lokalisieren, in der der Fehler aufgetreten ist.

## Wert

Ein String oder `null`, wenn der Pfad nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Deprecation-Reports zu beobachten und geben dann den Wert von `sourceFile` in der Konsole aus.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.sourceFile);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
