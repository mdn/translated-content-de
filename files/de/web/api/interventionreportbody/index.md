---
title: InterventionReportBody
slug: Web/API/InterventionReportBody
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Das `InterventionReportBody`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Inhalt eines Eingriffsberichts.

Ein Eingriffsbericht wird erstellt, wenn die Verwendung einer Funktion in einem Webdokument vom Browser aus Gründen wie Sicherheit, Leistung oder Benutzerbelästigung blockiert wurde. Beispielsweise wurde ein Skript gestoppt, weil es den Browser erheblich verlangsamt hat, oder die Autoplay-Richtlinie des Browsers hat das Abspielen von Audio ohne eine Benutzerinteraktion blockiert.

Ein Veralterungsbericht wird erstellt, wenn eine veraltete Funktion (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) überwacht wird. Zusätzlich zur Unterstützung dieser API ist es erforderlich, dass Browseranbieter nützliche Eingriffswarnungen für die relevanten Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `InterventionReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben, wenn [`Report.Type`](/de/docs/Web/API/Report/type) `intervention` ist. Das Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

Dieses Interface erbt auch Eigenschaften von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`InterventionReportBody.id`](/de/docs/Web/API/InterventionReportBody/id) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der den Eingriff repräsentiert, der den Bericht erzeugt hat. Dies kann verwendet werden, um Berichte zu gruppieren.
- [`InterventionReportBody.message`](/de/docs/Web/API/InterventionReportBody/message) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Beschreibung des Eingriffs enthält, einschließlich Informationen darüber, wie der Eingriff vermieden werden könnte. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn ein Eingriff vorgenommen wird, falls verfügbar.
- [`InterventionReportBody.sourceFile`](/de/docs/Web/API/InterventionReportBody/sourceFile) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der den Pfad zur Quelldatei enthält, in der der Eingriff stattgefunden hat, falls bekannt, oder `null` andernfalls.
- [`InterventionReportBody.lineNumber`](/de/docs/Web/API/InterventionReportBody/lineNumber) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Zeile in der Quelldatei darstellt, in der der Eingriff stattgefunden hat, falls bekannt, oder `null` andernfalls.
- [`InterventionReportBody.columnNumber`](/de/docs/Web/API/InterventionReportBody/columnNumber) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Spalte in der Quelldatei darstellt, in der der Eingriff stattgefunden hat, falls bekannt, oder `null` andernfalls.

## Instanz-Methoden

Dieses Interface erbt auch Methoden von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`InterventionReportBody.toJSON()`](/de/docs/Web/API/InterventionReportBody/toJSON) {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `InterventionReportBody`-Objekts zurückgibt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Eingriffsberichte zu beobachten, und geben dann Details jeder Eigenschaft des ersten Berichts in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.id);
  console.log(firstReport.body.message);
  console.log(firstReport.body.sourceFile);
  console.log(firstReport.body.lineNumber);
  console.log(firstReport.body.columnNumber);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Die Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
