---
title: "HTMLAreaElement: host-Eigenschaft"
short-title: host
slug: Web/API/HTMLAreaElement/host
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ApiRef("HTML DOM")}}

Die **`HTMLAreaElement.host`**-Eigenschaft ist ein
String, der den Host enthält, das heißt den _hostname_ und dann,
falls der _port_ der URL nicht leer ist, ein `':'` und den _port_
der URL.

## Wert

Ein String.

## Beispiele

```js
const area = document.createElement("area");

area.href = "https://developer.mozilla.org/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";

area.href = "https://developer.mozilla.org:443/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org";
// The port number is not included because 443 is the scheme's default port

area.href = "https://developer.mozilla.org:4097/en-US/HTMLAreaElement";
area.host === "developer.mozilla.org:4097";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)-Interface, zu dem es gehört.
