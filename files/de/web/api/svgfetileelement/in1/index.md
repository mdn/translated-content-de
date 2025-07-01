---
title: "SVGFETileElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFETileElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`** unveränderliche Eigenschaft des [`SVGFETileElement`](/de/docs/Web/API/SVGFETileElement)-Interfaces spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feTile")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `in`-Eigenschaft des `feTile`-Elements

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="tileFilter">
      <!-- Tiles the SourceGraphic -->
      <feTile in="SourceGraphic" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="hotpink"
    filter="url(#tileFilter)" />
</svg>
```

Wir können auf das `in`-Attribut des `feTile`-Elements zugreifen.

```js
// Select the feTile element
const tileElement = document.querySelector("feTile");

// Access the in1 property
console.log(tileElement.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
