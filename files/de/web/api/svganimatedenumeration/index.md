---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("SVG")}}

Das **`SVGAnimatedEnumeration`** Interface beschreibt Attributwerte, die Konstanten aus einer bestimmten Enumeration sind und animiert werden können.

Ab SVG 2 spiegeln sowohl `baseVal` als auch `animVal` den nicht-animierten Wert des Attributs wider. Die erlaubten Werte seiner Eigenschaften hängen vom zugehörigen Attribut ab.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal)
  - : Ein Integer, der den Basiswert des gegebenen Attributs vor Anwendung von Animationen darstellt.
- [`animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal) {{ReadOnlyInline}}
  - : Dies ist das gleiche wie [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal) in SVG 2.

## Instanz-Methoden

Das `SVGAnimatedEnumeration` Interface stellt keine spezifischen Methoden bereit.

## Beispiele

## Grundlegende Verwendung

Betrachten Sie diesen Codeausschnitt mit einem {{SVGElement("clipPath")}} Element: Sein {{SVGAttr("clipPathUnits")}} ist mit einem `SVGAnimatedEnumeration` Objekt verknüpft.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Das folgende JavaScript greift das Element ab und gibt die `baseVal` und `animVal` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits) Eigenschaft aus. Diese Werte sollten identisch sein.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
console.log(clipPathElt.clipPathUnits.animVal); // Logs 1 that correspond to userSpaceOnUse
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
