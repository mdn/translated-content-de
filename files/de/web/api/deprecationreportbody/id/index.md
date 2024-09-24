---
title: "DeprecationReportBody: id-Eigenschaft"
short-title: id
slug: Web/API/DeprecationReportBody/id
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`id`**-Eigenschaft der {{domxref("DeprecationReportBody")}}-Schnittstelle gibt eine Zeichenkette zurück, die das veraltete Feature oder die API darstellt. Dies kann verwendet werden, um verwandte Berichte zu gruppieren oder zu zählen.

## Wert

Eine Zeichenkette.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Veraltungsberichte zu beobachten, und geben dann den Wert von `id` in der Konsole aus.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.id);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
