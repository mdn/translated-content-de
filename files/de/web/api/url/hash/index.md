---
title: "URL: hash-Eigenschaft"
short-title: hash
slug: Web/API/URL/hash
l10n:
  sourceCommit: a2847ff3788f224ffb4cdf05cb0139e07fde7533
---

{{ APIRef("URL API") }} {{AvailableInWorkers}}

Die **`hash`**-Eigenschaft der {{domxref("URL")}}-Schnittstelle ist ein String, der ein `'#'` gefolgt vom Fragmentbezeichner der URL enthält.

Das Fragment ist nicht {{Glossary("Percent-encoding", "percent-codiert")}}. Wenn die URL keinen Fragmentbezeichner hat, enthält diese Eigenschaft einen leeren String — `""`.

## Wert

Ein String.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/de/docs/Web/API/URL/href#examples",
);
console.log(url.hash); // '#examples'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("URL")}}-Schnittstelle, zu der sie gehört.
