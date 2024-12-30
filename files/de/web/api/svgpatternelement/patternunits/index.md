---
title: "SVGPatternElement: patternUnits-Eigenschaft"
short-title: patternUnits
slug: Web/API/SVGPatternElement/patternUnits
l10n:
  sourceCommit: c82c597653873328e18fc45ac02f610d8f9bc1a7
---

{{APIRef("SVG")}}

Die **`patternUnits`** schreibgeschützte Eigenschaft der [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Schnittstelle spiegelt das {{SVGAttr("patternUnits")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements wider. Sie legt das Koordinatensystem für den Inhalt des Musters fest und nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiel

Für folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pattern1" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="5" cy="5" r="5" fill="blue" />
    </pattern>
    <pattern
      id="pattern2"
      width="10"
      height="10"
      patternUnits="objectBoundingBox">
      <circle cx="5" cy="5" r="5" fill="red" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

Können wir auf das `patternUnits`-Attribut zugreifen:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].patternUnits.baseVal); // output: 1 (SVGUnitTypes.USERSPACEONUSE)
console.log(patterns[1].patternUnits.baseVal); // output: 2 (SVGUnitTypes.OBJECTBOUNDINGBOX)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
- [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes)
