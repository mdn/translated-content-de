---
title: "NamedNodeMap: length-Eigenschaft"
short-title: length
slug: Web/API/NamedNodeMap/length
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte **`length`**-Eigenschaft des {{domxref("NamedNodeMap")}}-Interfaces
ist die Anzahl der im Map gespeicherten Objekte.

## Wert

Eine Zahl, die die Anzahl der Objekte im Map enthält

## Beispiel

```html
<pre zero="test" one="test" two="test"></pre>
```

```js
const pre = document.querySelector("pre");
const attrMap = pre.attributes;
pre.textContent = `The 'test' attribute contains ${attrMap.length} attributes.\n`;
```

{{EmbedLiveSample("Example", "100%", 20)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
