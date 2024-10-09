---
title: "DeprecationReportBody: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/DeprecationReportBody/toJSON
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`toJSON()`**-Methode des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces ist ein _Serializer_ und gibt eine JSON-Darstellung des `InterventionReportBody`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Objekts ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Abwertungsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück.

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
