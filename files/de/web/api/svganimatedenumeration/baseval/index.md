---
title: "SVGAnimatedEnumeration: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

{{APIRef("SVG")}}

Die **`baseVal`**-Eigenschaft der [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Schnittstelle repräsentiert den Wert einer SVG-Enumeration.

## Wert

Ein Integer, der den Basiswert der Enumeration darstellt.
Dies ist der nicht-animierte Inhaltswert des entsprechenden Attributs.

Die zulässigen Werte hängen vom Attribut ab, das reflektiert wird.

## Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Konstante gesetzt wird, die nicht in der Menge der definierten Enumerationen enthalten ist, oder auf `0`, was den Wert "unbekanntes Attribut" darstellt.

## Beispiele

### Grundlegende Verwendung

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

Das folgende JavaScript holt das Element und gibt den `baseVal` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits)-Eigenschaft aus.

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
