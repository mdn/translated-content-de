---
title: "Location: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/Location/hostname
l10n:
  sourceCommit: b68a1e071ee203718f5a6300472b820bc3a71885
---

{{ApiRef("URL API")}}

Die **`hostname`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der den [Domainnamen](/de/docs/Glossary/domain_name) der URL enthält.

## Wert

Ein String.

## Beispiele

```js
console.log(window.location.hostname);
// developer.mozilla.org

const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/";
console.log(anchor.hostname === "developer.mozilla.org");
// The port number is not included in hostname
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
