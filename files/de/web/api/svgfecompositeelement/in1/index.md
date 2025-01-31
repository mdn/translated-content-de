---
title: "SVGFECompositeElement: Eigenschaft in1"
short-title: in1
slug: Web/API/SVGFECompositeElement/in1
l10n:
  sourceCommit: e63d38e8ca98cb2705d2feb35cfaf316fd7c97e2
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft der [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des angegebenen {{SVGElement("feComposite")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feComposite")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="200" />
    <feComposite in="SourceGraphic" operator="over" />
    <feComposite in="SourceGraphic" operator="in" />
  </filter>
  <circle cx="50" cy="50" r="30" filter="url(#filter1)" />
</svg>
```

Wir können auf das `in`-Attribut zugreifen:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].in1.baseVal); // output: "SourceGraphic"
console.log(composites[1].in1.baseVal); // output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
