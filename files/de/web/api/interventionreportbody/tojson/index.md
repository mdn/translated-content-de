---
title: "InterventionReportBody: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/InterventionReportBody/toJSON
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode der [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Schnittstelle ist ein _Serializer_ und gibt eine JSON-Darstellung des `InterventionReportBody`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Objekts ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.toJSON());
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
