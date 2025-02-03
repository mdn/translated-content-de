---
title: "SVGFEComponentTransferElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEComponentTransferElement/in1
l10n:
  sourceCommit: 74fe56c77b1ddf1537cf7da19ea2ad0b6a12e335
---

{{APIRef("SVG")}}

Die schreibgeschützte **`in1`**-Eigenschaft der [`SVGFEComponentTransferElement`](/de/docs/Web/API/SVGFEComponentTransferElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des angegebenen {{SVGElement("feComponentTransfer")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feComponentTransfer")}}-Elemente in einem Filter definiert, jeweils mit einem unterschiedlichen `in`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feComponentTransfer in="SourceGraphic">
      <feFuncR type="table" tableValues="0 1" />
    </feComponentTransfer>
    <feComponentTransfer in="BackgroundImage">
      <feFuncR type="table" tableValues="0.5 1" />
    </feComponentTransfer>
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#filter1)" />
  <circle cx="100" cy="100" r="50" style="fill:blue;" filter="url(#filter1)" />
</svg>
```

Wir können auf das `in`-Attribut zugreifen:

```js
const componentTransfers = document.querySelectorAll("feComponentTransfer");

console.log(componentTransfers[0].in1.baseVal); // Output: "SourceGraphic"
console.log(componentTransfers[1].in1.baseVal); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
