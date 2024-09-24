---
title: "InterventionReportBody: message-Eigenschaft"
short-title: message
slug: Web/API/InterventionReportBody/message
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`message`** des {{domxref("InterventionReportBody")}}-Interfaces liefert eine lesbare Beschreibung der Intervention, einschließlich Informationen darüber, wie die Intervention vermieden werden könnte. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine Intervention vorgenommen wird, falls eine verfügbar ist.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten, und geben dann den Wert von `message` in die Konsole aus.

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
