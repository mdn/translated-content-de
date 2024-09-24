---
title: "InterventionReportBody: columnNumber-Eigenschaft"
short-title: columnNumber
slug: Web/API/InterventionReportBody/columnNumber
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`columnNumber`** der {{domxref("InterventionReportBody")}}-Schnittstelle gibt die Linie in der Quelldatei zurück, in der die Intervention stattgefunden hat.

> [!NOTE]
> Diese Eigenschaft ist am nützlichsten in Kombination mit {{domxref("InterventionReportBody.sourceFile")}} und {{domxref("InterventionReportBody.lineNumber")}}, da sie die Lokalisierung der Spalte in dieser Datei und Linie ermöglicht, in der die Funktion genutzt wird.

## Wert

Ein Integer oder `null`, wenn die Spalte nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten, und geben dann den Wert von `columnNumber` in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.sourceFile); // die Quelldatei
  console.log(firstReport.body.lineNumber); // die Linie in dieser Datei
  console.log(firstReport.body.columnNumber); // die Spalte in dieser Datei.
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
