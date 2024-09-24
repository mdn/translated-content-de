---
title: "ReportBody: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/ReportBody/toJSON
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`toJSON()`**-Methode der {{domxref("ReportBody")}}-Schnittstelle ist ein _Serializer_ und gibt eine JSON-Darstellung des `ReportBody`-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-Objekt, das die Serialisierung des {{domxref("ReportBody")}}-Objekts darstellt.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Eingriffsberichte zu beobachten, und geben dann eine JSON-Darstellung des ersten Eintrags zurück. Der Bericht und somit das zurückgegebene JSON-Objekt werden eine Instanz von {{domxref("InterventionReportBody")}} sein, die von `ReportBody` erbt.

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
