---
title: "Location: host-Eigenschaft"
short-title: host
slug: Web/API/Location/host
l10n:
  sourceCommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ApiRef("Location")}}

Die **`host`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der den Host enthält, also den _hostname_, und dann, falls der _port_ der URL nicht leer ist, einen `':'`, gefolgt vom _port_ der URL.

## Wert

Ein String.

## Beispiele

```js
const anchor = document.createElement("a");

anchor.href = "https://developer.mozilla.org/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");

anchor.href = "https://developer.mozilla.org:443/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org");
// The port number is not included because 443 is the scheme's default port

anchor.href = "https://developer.mozilla.org:4097/en-US/Location.host";
console.log(anchor.host === "developer.mozilla.org:4097");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
