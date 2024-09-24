---
title: "DeprecationReportBody: toJSON() Methode"
short-title: toJSON()
slug: Web/API/DeprecationReportBody/toJSON
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`toJSON()`** Methode des {{domxref("DeprecationReportBody")}}-Interfaces ist ein _Serializer_ und gibt eine JSON-Darstellung des `InterventionReportBody`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des {{domxref("DeprecationReportBody")}}-Objekts darstellt.

## Beispiele

In diesem Beispiel erstellen wir eine neue {{domxref("ReportingObserver")}}, um Veraltungsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.toJSON());
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
