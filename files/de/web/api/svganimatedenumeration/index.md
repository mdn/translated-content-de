---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("SVG")}}

Die **`SVGAnimatedEnumeration`**-Schnittstelle beschreibt Attributwerte, die Konstanten aus einer bestimmten Enumeration sind und animiert werden können.

## Instanzeigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal)
  - : Ein Ganzzahlwert, der den Basiswert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- [`animVal`](/de/docs/Web/API/SVGAnimatedEnumeration/animVal)
  - : Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält es den gleichen Wert wie `baseVal`.

## Instanzmethoden

Die `SVGAnimatedEnumeration`-Schnittstelle bietet keine spezifischen Methoden.

## Beispiele

Betrachten Sie diesen Ausschnitt mit einem {{SVGElement("clipPath")}} Element: Sein {{SVGAttr("clipPathUnits")}} ist mit einem `SVGAnimatedEnumeration`-Objekt verknüpft.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Dieser Ausschnitt ruft das Element ab und protokolliert den `baseVal` und `animVal` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits)-Eigenschaft. Da keine Animation stattfindet, haben sie den gleichen Wert.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Logs 1 that correspond to userSpaceOnUse
console.log(clipPathElt.clipPathUnits.animVal); // Logs 1 that correspond to userSpaceOnUse
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
