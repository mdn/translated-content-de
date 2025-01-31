---
title: "SVGFECompositeElement: k2-Eigenschaft"
short-title: k2
slug: Web/API/SVGFECompositeElement/k2
l10n:
  sourceCommit: e63d38e8ca98cb2705d2feb35cfaf316fd7c97e2
---

{{APIRef("SVG")}}

Die **`k2`**-Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("k2")}}-Attribut des gegebenen {{SVGElement("feComposite")}}-Elements widerspiegelt.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feComposite")}}-Elemente in einem Filter definiert, jedes mit einem anderen `k2`-Attribut.

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

Wir können auf das `k2`-Attribut zugreifen:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].k2.baseVal); // output: 0.2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
