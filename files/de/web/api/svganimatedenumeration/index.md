---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
l10n:
  sourceCommit: 73f93cb9449dc42059d2f8835338e8674b3d8bdd
---

{{APIRef("SVG")}}

Das **`SVGAnimatedEnumeration`** Interface beschreibt Attributwerte, die Konstanten aus einer bestimmten Aufzählung sind und animiert werden können.

Seit SVG 2 spiegeln sowohl `baseVal` als auch `animVal` den nicht animierten Wert des Attributs wider.
Die erlaubten Werte seiner Eigenschaften hängen vom zugehörigen Attribut ab.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal)
  - : Ein Ganzzahlwert, der den Basiswert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- [`animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal) {{ReadOnlyInline}}
  - : Dies entspricht in SVG 2 dem [`baseVal`](#baseval).

## Instanz-Methoden

Das `SVGAnimatedEnumeration`-Interface stellt keine spezifischen Methoden zur Verfügung.

## Beispiele

## Grundlegende Verwendung

Betrachten Sie diesen Ausschnitt mit einem {{SVGElement("clipPath")}}-Element: Sein Attribut {{SVGAttr("clipPathUnits")}} ist mit einem `SVGAnimatedEnumeration`-Objekt verknüpft.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Der folgende JavaScript-Code erhält das Element und protokolliert die `baseVal` und `animVal` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits)-Eigenschaft.
Diese Werte sollten identisch sein.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
console.log(clipPathElt.clipPathUnits.animVal); // Logs 1 that correspond to userSpaceOnUse
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
