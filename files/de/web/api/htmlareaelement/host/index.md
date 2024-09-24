---
title: "HTMLAreaElement: host-Eigenschaft"
short-title: host
slug: Web/API/HTMLAreaElement/host
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.host`**-Eigenschaft ist ein String, der den Host enthält, also den _Hostname_ und dann, wenn der _Port_ der URL nicht leer ist, ein `':'` und den _Port_ der URL.

## Wert

Ein String.

## Beispiele

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";
// Die Portnummer wird nicht eingeschlossen, da 443 der Standardport des Schemas ist

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{domxref("HTMLAreaElement")}}-Interface, zu dem es gehört.
