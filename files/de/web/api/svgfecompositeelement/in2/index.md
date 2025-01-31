---
title: "SVGFECompositeElement: in2-Eigenschaft"
short-title: in2
slug: Web/API/SVGFECompositeElement/in2
l10n:
  sourceCommit: e63d38e8ca98cb2705d2feb35cfaf316fd7c97e2
---

{{APIRef("SVG")}}

Die **`in2`** schreibgeschützte Eigenschaft des [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Interfaces spiegelt das {{SVGAttr("in2")}}-Attribut des angegebenen {{SVGElement("feComposite")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel sind zwei {{SVGElement("feComposite")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in2`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="200" />
    <feComposite in2="SourceAlpha" operator="over" />
    <feComposite in2="SourceAlpha" operator="in" />
  </filter>
  <circle cx="50" cy="50" r="30" filter="url(#filter1)" />
</svg>
```

Wir können auf das `in2`-Attribut zugreifen:

```js
const composites = document.querySelectorAll("feComposite");

console.log(composites[0].in2.baseVal); // output: "SourceAlpha"
console.log(composites[1].in2.baseVal); // output: "SourceAlpha"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
