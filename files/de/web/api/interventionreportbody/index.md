---
title: InterventionReportBody
slug: Web/API/InterventionReportBody
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `InterventionReportBody`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Inhalt eines Interventionsberichts.

Ein Interventionsbericht wird erstellt, wenn die Nutzung einer Funktion in einem Webdokument vom Browser aus Gründen wie Sicherheit, Leistung oder Benutzerbelästigung blockiert wurde. Zum Beispiel wurde ein Skript gestoppt, weil es den Browser erheblich verlangsamte, oder die Autoplay-Richtlinie des Browsers blockierte das Abspielen von Audio ohne eine Benutzergeste, die es auslöste.

Ein Deprecation-Bericht wird erstellt, wenn eine veraltete Funktion (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet wird. Neben der Unterstützung dieser API hängt das Erhalten nützlicher Interventionswarnungen davon ab, dass Browser-Anbieter diese Warnungen für die relevanten Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `InterventionReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben, wenn [`Report.Type`](/de/docs/Web/API/Report/Type) `intervention` ist. Das Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

Dieses Interface erbt auch Eigenschaften von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`InterventionReportBody.id`](/de/docs/Web/API/InterventionReportBody/id) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Intervention darstellt, die den Bericht erzeugt hat. Dies kann verwendet werden, um Berichte zu gruppieren.
- [`InterventionReportBody.message`](/de/docs/Web/API/InterventionReportBody/message) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String mit einer für Menschen lesbaren Beschreibung der Intervention, einschließlich Informationen, wie die Intervention vermieden werden könnte. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine Intervention erfolgt, sofern eine verfügbar ist.
- [`InterventionReportBody.sourceFile`](/de/docs/Web/API/InterventionReportBody/sourceFile) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String mit dem Pfad zur Quelldatei, in der die Intervention auftrat, falls bekannt, oder `null` sonst.
- [`InterventionReportBody.lineNumber`](/de/docs/Web/API/InterventionReportBody/lineNumber) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Zeile in der Quelldatei repräsentiert, in der die Intervention auftrat, falls bekannt, oder `null` sonst.
- [`InterventionReportBody.columnNumber`](/de/docs/Web/API/InterventionReportBody/columnNumber) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Spalte in der Quelldatei repräsentiert, in der die Intervention auftrat, falls bekannt, oder `null` sonst.

## Instanz-Methoden

Dieses Interface erbt auch Methoden von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`InterventionReportBody.toJSON()`](/de/docs/Web/API/InterventionReportBody/toJSON) {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `InterventionReportBody`-Objekts zurückgibt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten und dann Details jeder Eigenschaft des ersten Berichts in der Konsole auszugeben.

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
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
