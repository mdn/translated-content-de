---
title: "DeprecationReportBody: message-Eigenschaft"
short-title: message
slug: Web/API/DeprecationReportBody/message
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte **`message`**-Eigenschaft des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces gibt eine lesbare Beschreibung der Veraltung zurück. Dies entspricht in der Regel der Nachricht, die ein Browser in seiner DevTools-Konsole bezüglich eines veralteten Features anzeigt.

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
