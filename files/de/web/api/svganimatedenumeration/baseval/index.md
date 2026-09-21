---
title: "SVGAnimatedEnumeration: Eigenschaft baseVal"
short-title: baseVal
slug: Web/API/SVGAnimatedEnumeration/baseVal
l10n:
  sourceCommit: 3a839eeed13a60d34db1d39a5ce1594050d56ab0
---

{{APIRef("SVG")}}

Die Eigenschaft **`baseVal`** der Schnittstelle [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) stellt den Wert einer SVG-Aufzählung dar.

## Wert

Eine Ganzzahl, die den Basiswert der Aufzählung darstellt.
Dies ist der nicht animierte Inhaltswert des entsprechenden Attributs.

Die zulässigen Werte hängen von dem Attribut ab, das widergespiegelt wird.

## Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft auf eine Konstante gesetzt wird, die nicht zur Menge der definierten Aufzählungen gehört, oder auf `0`, was den Wert „unbekanntes Attribut“ darstellt.

## Beispiele

### Grundlegende Verwendung

Betrachten Sie dieses Snippet mit einem {{SVGElement("clipPath")}}-Element: Sein {{SVGAttr("clipPathUnits")}} ist einem [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt zugeordnet.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Das folgende JavaScript ruft das Element ab und protokolliert den `baseVal` der Eigenschaft [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits).

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
