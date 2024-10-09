---
title: "DeprecationReportBody: message-Eigenschaft"
short-title: message
slug: Web/API/DeprecationReportBody/message
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`message`** des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces gibt eine für Menschen lesbare Beschreibung der Veraltung zurück. Diese stimmt in der Regel mit der Nachricht überein, die ein Browser in seiner DevTools-Konsole bezüglich eines veralteten Features anzeigt.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten, und geben dann den Wert von `message` in der Konsole aus.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.message);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
