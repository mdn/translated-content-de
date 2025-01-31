---
title: "SVGFECompositeElement: k1-Eigenschaft"
short-title: k1
slug: Web/API/SVGFECompositeElement/k1
l10n:
  sourceCommit: e63d38e8ca98cb2705d2feb35cfaf316fd7c97e2
---

{{APIRef("SVG")}}

Die schreibgeschützte **`k1`**-Eigenschaft des [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Interfaces spiegelt das {{SVGAttr("k1")}}-Attribut des gegebenen {{SVGElement("feComposite")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feComposite")}}-Elemente in einem Filter definiert, jedes mit einem anderen `k1`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="140"
      x="30"
      y="10" />
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="0.1"
      k2="0.2"
      k3="0.3"
      k4="0.4" />
  </filter>
  <circle cx="100" cy="50" r="30" filter="url(#filter1)" />
</svg>
```

Wir können auf das `k1`-Attribut zugreifen:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].k1.baseVal); // output: 0.1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
