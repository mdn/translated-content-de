---
title: "SVGAnimatedEnumeration: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft des [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Interfaces enthält den Anfangswert einer SVG-Enumeration.

## Wert

Ein Integer, der den Anfangswert der Enumeration enthält

## Beispiele

Betrachten Sie dieses Snippet mit einem {{SVGElement("clipPath")}}-Element: Sein {{SVGAttr("clipPathUnits")}} ist mit einem [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt verknüpft.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Dieses Snippet holt das Element und protokolliert den `baseVal` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits)-Eigenschaft.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration.animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal)
