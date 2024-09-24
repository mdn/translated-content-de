---
title: "Bericht: url-Eigenschaft"
short-title: url
slug: Web/API/Report/url
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Reporting API")}}

Die **`url`**-Eigenschaft des {{domxref("Report")}}-Interfaces ist schreibgeschützt und gibt die URL des Dokuments zurück, das den Bericht erzeugt hat.

## Wert

Ein String, der die URL des Dokuments darstellt, das den Bericht erzeugt hat.

## Beispiele

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver(([firstReport], observer) => {
  // URL des Dokuments protokollieren, das den ersten Bericht erzeugt hat
  // z.B. "https://www.example.com/cats.html"
  console.log(firstReport.url);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
