---
title: "Bericht: url-Eigenschaft"
short-title: url
slug: Web/API/Report/url
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Die **`url`** schreibgeschützte Eigenschaft des [`Report`](/de/docs/Web/API/Report)-Interfaces gibt die URL des Dokuments zurück, das den Bericht generiert hat.

## Wert

Ein String, der die URL des Dokuments darstellt, das den Bericht generiert hat.

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
