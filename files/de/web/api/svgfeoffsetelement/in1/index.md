---
title: "SVGFEOffsetElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEOffsetElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`**-Eigenschaft der [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feOffset")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf das `in`-Attribut des `<feOffset>`-Elements

In diesem Beispiel greifen wir auf den Wert des `in`-Attributs des `<feOffset>`-Elements zu, indem wir die `in1`-Eigenschaft der `SVGFEOffsetElement`-Schnittstelle verwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offsetFilter">
      <!-- Applies an offset to the SourceGraphic -->
      <feOffset in="SourceGraphic" dx="10" dy="10" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="lightblue"
    filter="url(#offsetFilter)" />
</svg>
```

Wir können auf das `in`-Attribut des `feOffset`-Elements zugreifen.

```js
// Select the feOffset element
const offsetElement = document.querySelector("feOffset");

// Access the in1 property
console.log(offsetElement.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
