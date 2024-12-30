---
title: "SVGPatternElement: patternContentUnits-Eigenschaft"
short-title: patternContentUnits
slug: Web/API/SVGPatternElement/patternContentUnits
l10n:
  sourceCommit: c82c597653873328e18fc45ac02f610d8f9bc1a7
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`patternContentUnits`** des [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Interfaces spiegelt das Attribut {{SVGAttr("patternContentUnits")}} des gegebenen {{SVGElement("pattern")}}-Elements wider. Sie gibt das Koordinatensystem für den Musterinhalt an und nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiel

Angenommen, folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern
      id="pattern1"
      width="10"
      height="10"
      patternContentUnits="userSpaceOnUse">
      <circle cx="5" cy="5" r="5" fill="blue" />
    </pattern>
    <pattern
      id="pattern2"
      width="10"
      height="10"
      patternContentUnits="objectBoundingBox">
      <circle cx="5" cy="5" r="5" fill="red" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

Wir können auf das `patternContentUnits`-Attribut zugreifen:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].patternContentUnits.baseVal); // output: 1 (SVGUnitTypes.USERSPACEONUSE)
console.log(patterns[1].patternContentUnits.baseVal); // output: 2 (SVGUnitTypes.OBJECTBOUNDINGBOX)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
- [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)
