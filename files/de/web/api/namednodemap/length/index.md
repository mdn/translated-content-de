---
title: "NamedNodeMap: length-Eigenschaft"
short-title: length
slug: Web/API/NamedNodeMap/length
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("DOM")}}

Die schreibgeschützte **`length`**-Eigenschaft des [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Interfaces
ist die Anzahl der Objekte, die in der Map gespeichert sind.

## Wert

Eine Zahl, die die Anzahl der Objekte in der Map enthält

## Beispiel

```html
<pre class="foo" id="bar" contenteditable></pre>
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
