---
title: SVGAnimatedEnumeration
slug: Web/API/SVGAnimatedEnumeration
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("SVG")}}

Die **`SVGAnimatedEnumeration`**-Schnittstelle beschreibt Attributwerte, die Konstanten aus einer bestimmten Aufzählung sind und animiert werden können.

## Instanz-Eigenschaften

- {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}}
  - : Ein ganzzahliger Wert, der den Basiswert des angegebenen Attributs vor der Anwendung von Animationen darstellt.
- {{domxref("SVGAnimatedEnumeration.animVal", "animVal")}}
  - : Wenn das angegebene Attribut oder die Eigenschaft animiert wird, beinhaltet es den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wird das Attribut oder die Eigenschaft nicht animiert, enthält es denselben Wert wie `baseVal`.

## Instanz-Methoden

Die `SVGAnimatedEnumeration`-Schnittstelle bietet keine spezifischen Methoden.

## Beispiele

In diesem Beispiel wird ein {{SVGElement("clipPath")}}-Element betrachtet: Sein {{SVGAttr("clipPathUnits")}} ist mit einem `SVGAnimatedEnumeration`-Objekt verbunden.

```html
<svg viewBox="0 0 100 100" width="200" height="200">
  <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
    <circle cx="50" cy="50" r="35" />
  </clipPath>

  <!-- Some reference rect to materialized to clip path -->
  <rect id="r1" x="0" y="0" width="45" height="45" />
</svg>
```

Dieses Beispiel holt das Element und loggt den `baseVal` und `animVal` der {{domxref("SVGClipPathElement.clipPathUnits")}}-Eigenschaft. Da keine Animation stattfindet, haben sie denselben Wert.

```js
const clipPathElt = document.getElementById("clip1");
console.log(clipPathElt.clipPathUnits.baseVal); // Protokolliert 1 entsprechend userSpaceOnUse
console.log(clipPathElt.clipPathUnits.animVal); // Protokolliert 1 entsprechend userSpaceOnUse
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
