---
title: "DeprecationReportBody: Nachricht-Eigenschaft"
short-title: Nachricht
slug: Web/API/DeprecationReportBody/message
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`message`** schreibgeschützte Eigenschaft des {{domxref("DeprecationReportBody")}}-Interfaces gibt eine menschenlesbare Beschreibung der Veraltung zurück. Diese entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole in Bezug auf ein veraltetes Feature anzeigt.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Veraltungsberichte zu beobachten, und drucken dann den Wert von `message` in die Konsole.

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

## Kompatibilität mit Browsern

{{Compat}}
