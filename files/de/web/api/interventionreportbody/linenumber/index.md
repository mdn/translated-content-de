---
title: "InterventionReportBody: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/InterventionReportBody/lineNumber
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`lineNumber`** des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interfaces gibt die Zeile in der Quelldatei zurück, in der die Intervention aufgetreten ist.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Kombination mit [`InterventionReportBody.sourceFile`](/de/docs/Web/API/InterventionReportBody/sourceFile), da sie ermöglicht, die Zeile in dieser Datei zu lokalisieren, in der das Feature verwendet wird.

## Wert

Ein Integer oder `null`, wenn die Zeile nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Eingriffsberichte zu beobachten, und geben dann den Wert von `lineNumber` in der Konsole aus.

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
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
