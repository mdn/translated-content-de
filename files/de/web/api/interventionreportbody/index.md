---
title: InterventionReportBody
slug: Web/API/InterventionReportBody
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `InterventionReportBody`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Körper eines Interventionsberichts.

Ein Interventionsbericht wird generiert, wenn die Nutzung einer Funktion in einem Webdokument vom Browser aus Gründen wie Sicherheit, Leistung oder Benutzerirritation blockiert wurde. Zum Beispiel wurde ein Skript gestoppt, weil es den Browser erheblich verlangsamte, oder die Autoplay-Richtlinie des Browsers verhinderte, dass Audio ohne eine Benutzerinteraktion abgespielt wird.

Ein Verfallsbericht wird generiert, wenn eine veraltete Funktion (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem {{domxref("ReportingObserver")}} beobachtet wird. Zusätzlich zur Unterstützung dieser API hängt das Erhalten nützlicher Interventionswarnungen davon ab, dass Browseranbieter diese Warnungen für die relevanten Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `InterventionReportBody` wird als Wert von {{domxref("Report.body")}} zurückgegeben, wenn {{domxref("Report.Type")}} `intervention` ist. Das Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

Dieses Interface erbt auch Eigenschaften von {{domxref("ReportBody")}}.

- {{domxref("InterventionReportBody.id")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Intervention darstellt, die den Bericht erstellt hat. Dies kann verwendet werden, um Berichte zu gruppieren.
- {{domxref("InterventionReportBody.message")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der eine menschenlesbare Beschreibung der Intervention enthält, einschließlich Informationen darüber, wie die Intervention vermieden werden könnte. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine Intervention durchgesetzt wird, sofern verfügbar.
- {{domxref("InterventionReportBody.sourceFile")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der den Pfad zur Quelldatei enthält, in der die Intervention aufgetreten ist, falls bekannt, oder `null` andernfalls.
- {{domxref("InterventionReportBody.lineNumber")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Zeile in der Quelldatei darstellt, in der die Intervention aufgetreten ist, falls bekannt, oder `null` andernfalls.
- {{domxref("InterventionReportBody.columnNumber")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein String, der die Spalte in der Quelldatei darstellt, in der die Intervention aufgetreten ist, falls bekannt, oder `null` andernfalls.

## Instanz-Methoden

Dieses Interface erbt auch Methoden von {{domxref("ReportBody")}}.

- {{domxref("InterventionReportBody.toJSON()")}} {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `InterventionReportBody`-Objekts zurückgibt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten, und geben dann die Details jeder Eigenschaft des ersten Berichts in der Konsole aus.

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
