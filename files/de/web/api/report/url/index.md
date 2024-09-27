---
title: "Report: url-Eigenschaft"
short-title: url
slug: Web/API/Report/url
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die schreibgeschützte **`url`**-Eigenschaft der [`Report`](/de/docs/Web/API/Report)-Schnittstelle gibt die URL des Dokuments zurück, das den Bericht erzeugt hat.

## Wert

Ein String, der die URL des Dokuments darstellt, das den Bericht erzeugt hat.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // Log the URL of the document that generated the first report
  // e.g. "https://www.example.com/cats.html"
  console.log(firstReport.url);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
