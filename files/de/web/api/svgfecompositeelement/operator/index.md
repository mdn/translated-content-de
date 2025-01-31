---
title: "SVGFECompositeElement: operator Eigenschaft"
short-title: operator
slug: Web/API/SVGFECompositeElement/operator
l10n:
  sourceCommit: e63d38e8ca98cb2705d2feb35cfaf316fd7c97e2
---

{{APIRef("SVG")}}

Die schreibgeschützte **`operator`**-Eigenschaft des [`SVGFECompositeElement`](/de/docs/Web/API/SVGFECompositeElement)-Interfaces spiegelt das {{SVGAttr("operator")}}-Attribut des angegebenen {{SVGElement("feComposite")}}-Elements wider.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

Verwendung von `out`, `in` und `over` Operatoren im {{SVGElement("feComposite")}}-Element.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="filter1">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="200"
      x="-70"
      y="10" />
    <feComposite in2="SourceGraphic" operator="out" />
  </filter>
  <filter id="filter2">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="120"
      x="30"
      y="10" />
    <feComposite in2="SourceGraphic" operator="in" />
    <feComposite in2="SourceGraphic" operator="over" />
  </filter>
  <filter id="filter3">
    <feImage
      href="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
      width="140"
      x="80"
      y="10" />
    <feComposite
      in2="SourceGraphic"
      operator="arithmetic"
      k1="0.1"
      k2="0.2"
      k3="0.3"
      k4="0.4" />
  </filter>
  <circle cx="30" cy="50" r="30" filter="url(#filter1)" />
  <circle cx="90" cy="50" r="30" filter="url(#filter2)" />
  <circle cx="150" cy="50" r="30" filter="url(#filter3)" />
</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
