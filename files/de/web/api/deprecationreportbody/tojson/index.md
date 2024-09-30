---
title: "DeprecationReportBody: toJSON() Methode"
short-title: toJSON()
slug: Web/API/DeprecationReportBody/toJSON
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`toJSON()`** Methode der [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody) Schnittstelle ist ein _Serializer_ und gibt eine JSON-Darstellung des `InterventionReportBody` Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody) Objekts darstellt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsmeldungen zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück.

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
