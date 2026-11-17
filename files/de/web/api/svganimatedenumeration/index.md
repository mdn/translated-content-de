---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
l10n:
  sourceCommit: 7d55f113b5a05afe6ada6bb9b76bd3b0458f077d
---

{{APIRef("SVG")}}

Die **`SVGAnimatedEnumeration`**-Schnittstelle beschreibt Attributwerte, die Konstanten aus einer bestimmten Enumeration sind und animiert werden können.

Ab SVG 2 geben sowohl `baseVal` als auch `animVal` den nicht animierten Wert des Attributs wieder.
Die zulässigen Werte ihrer Eigenschaften hängen vom zugehörigen Attribut ab.

## Instanzeigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal)
  - : Eine Ganzzahl, die den Basiswert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- [`animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal) {{ReadOnlyInline}}
  - : In SVG 2 ist dieser Wert derselbe wie [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal).

## Instanzmethoden

Die `SVGAnimatedEnumeration`-Schnittstelle stellt keine eigenen Methoden bereit.

## Beispiele

### Grundlegende Verwendung

Betrachten Sie diesen Ausschnitt mit einem {{SVGElement("clipPath")}}-Element: Sein {{SVGAttr("clipPathUnits")}}-Attribut ist mit einem `SVGAnimatedEnumeration`-Objekt verknüpft.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Das folgende JavaScript ruft das Element ab und gibt `baseVal` und `animVal` der Eigenschaft [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits) aus.
Diese Werte sollten gleich sein.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
console.log(clipPathElt.clipPathUnits.animVal); // Logs 1 that correspond to userSpaceOnUse
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
