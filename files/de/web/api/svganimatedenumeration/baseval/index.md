---
title: "SVGAnimatedEnumeration: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Schnittstelle enthält den Anfangswert einer SVG-Aufzählung.

## Wert

Ein Integer, der den Anfangswert der Aufzählung enthält.

## Beispiele

Betrachten Sie dieses Code-Snippet mit einem {{SVGElement("clipPath")}}-Element: Sein {{SVGAttr("clipPathUnits")}} ist mit einem [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt verbunden.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Dieses Snippet erhält das Element und protokolliert den `baseVal` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits)-Eigenschaft.

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
