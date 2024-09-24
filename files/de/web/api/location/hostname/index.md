---
title: "Location: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/Location/hostname
l10n:
  sourceCommit: b68a1e071ee203718f5a6300472b820bc3a71885
---

{{ApiRef("URL API")}}

Die **`hostname`**-Eigenschaft der {{domxref("Location")}}-Schnittstelle ist ein String, der den {{glossary("domain name", "Domänennamen")}} der URL enthält.

## Wert

Ein String.

## Beispiele

```js
console.log(window.location.hostname);
// developer.mozilla.org

const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/";
console.log(anchor.hostname === "developer.mozilla.org");
// Die Portnummer ist nicht in hostname enthalten
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
