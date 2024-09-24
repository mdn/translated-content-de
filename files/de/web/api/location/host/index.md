---
title: "Location: host-Eigenschaft"
short-title: host
slug: Web/API/Location/host
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`host`**-Eigenschaft der {{domxref("Location")}}-Schnittstelle ist ein String, der den Host enthält, also den _Hostname_ und dann, wenn der _Port_ der URL nicht leer ist, einen `':'` und den _Port_ der URL.

## Wert

Ein String.

## Beispiele

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");

anchor.href = "https://developer.mozilla.org:443/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");
// Die Portnummer ist nicht enthalten, weil 443 der Standardport des Schemas ist

anchor.href = "https://developer.mozilla.org:4097/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org:4097");
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
