---
title: "ReportBody: toJSON() Methode"
short-title: toJSON()
slug: Web/API/ReportBody/toJSON
l10n:
  sourceCommit: 3b1efe57f3b22a97acb9db335f2848c90cdfe40e
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{deprecated_header}}

Die **`toJSON()`** Methode des [`ReportBody`](/de/docs/Web/API/ReportBody)-Interfaces ist ein _Serializer_ und gibt eine JSON-Darstellung des `ReportBody`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des [`ReportBody`](/de/docs/Web/API/ReportBody)-Objekts darstellt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück. Der Bericht und somit das zurückgegebene JSON-Objekt wird eine Instanz von [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody) sein, das von `ReportBody` erbt.

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
