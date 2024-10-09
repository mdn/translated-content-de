---
title: "ReportBody: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/ReportBody/toJSON
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`toJSON()`**-Methode der [`ReportBody`](/de/docs/Web/API/ReportBody)-Schnittstelle ist ein _Serializer_ und liefert eine JSON-Darstellung des `ReportBody`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`ReportBody`](/de/docs/Web/API/ReportBody)-Objekts darstellt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Eingriffsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück. Der Bericht und somit das zurückgegebene JSON-Objekt wird eine Instanz von [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) sein, die von `ReportBody` erbt.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  console.log(firstReport.toJSON());
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
