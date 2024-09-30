---
title: "InterventionReportBody: message-Eigenschaft"
short-title: message
slug: Web/API/InterventionReportBody/message
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`message`**-Eigenschaft der [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die eine menschenlesbare Beschreibung der Intervention zurückgibt, einschließlich Informationen darüber, wie die Intervention vermieden werden könnte. Diese entspricht in der Regel der Meldung, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine Intervention vorgenommen wird, sofern eine solche verfügbar ist.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) zur Beobachtung von Interventionsberichten und geben dann den Wert von `message` in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.message);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
