---
title: "SVGAnimatedEnumeration: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der {{domxref("SVGAnimatedEnumeration")}}-Schnittstelle enthält den anfänglichen Wert einer SVG-Aufzählung.

## Wert

Ein Integer, der den anfänglichen Wert der Aufzählung enthält.

## Beispiele

Betrachten Sie diesen Ausschnitt mit einem {{SVGElement("clipPath")}}-Element: Sein {{SVGAttr("clipPathUnits")}} ist mit einem {{domxref("SVGAnimatedEnumeration")}}-Objekt verknüpft.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Dieses Snippet holt das Element und gibt den `baseVal` der {{domxref("SVGClipPathElement.clipPathUnits")}}-Eigenschaft aus.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Gibt 1 aus, was "userSpaceOnUse" entspricht
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SVGAnimatedEnumeration.animVal")}}
