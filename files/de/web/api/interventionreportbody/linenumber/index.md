---
title: "InterventionReportBody: lineNumber-Eigenschaft"
short-title: lineNumber
slug: Web/API/InterventionReportBody/lineNumber
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`lineNumber`** der {{domxref("InterventionReportBody")}}-Schnittstelle gibt die Zeile in der Quelldatei zurück, in der die Intervention aufgetreten ist.

> [!NOTE]
> Diese Eigenschaft ist besonders nützlich in Verbindung mit {{domxref("InterventionReportBody.sourceFile")}}, da sie die Lokalisierung der Zeile in dieser Datei, in der die Funktion verwendet wird, ermöglicht.

## Wert

Ein Integer oder `null`, wenn die Zeile nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten, und geben dann den Wert von `lineNumber` auf der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile); // die Quelldatei
  console.log(firstReport.body.lineNumber); // die Zeile in dieser Datei
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
