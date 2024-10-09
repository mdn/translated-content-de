---
title: "InterventionReportBody: message-Eigenschaft"
short-title: message
slug: Web/API/InterventionReportBody/message
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte **`message`**-Eigenschaft der [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Schnittstelle liefert eine menschenlesbare Beschreibung der Intervention, einschließlich Informationen darüber, wie die Intervention vermieden werden könnte. Dies entspricht in der Regel der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine Intervention verhängt wird, sofern eine verfügbar ist.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten und dann den Wert von `message` in der Konsole auszugeben.

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
