---
title: "HTMLAnchorElement: host-Eigenschaft"
short-title: host
slug: Web/API/HTMLAnchorElement/host
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAnchorElement.host`**-Eigenschaft ist ein
String, der den Host enthält, das ist der _Hostname_, und dann, wenn der _Port_ der URL nicht leer ist, ein `':'`, sowie den _Port_ der URL.

## Wert

Ein String.

## Beispiele

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";

anchor.href = "https://developer.mozilla.org:443/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org";
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/HTMLAnchorElement";
anchor.host === "developer.mozilla.org:4097";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) Schnittstelle, zu der es gehört.
