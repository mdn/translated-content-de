---
title: "SVGAnimatedPreserveAspectRatio: baseVal-Eigenschaft"
short-title: baseVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/baseVal
l10n:
  sourceCommit: 4f5fffdcb6ab78d736c69185f9575e8553e7d070
---

{{APIRef("SVG")}}

Die **`baseVal`**-Schreibgeschützte Eigenschaft der [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Schnittstelle repräsentiert den Basiswert (nicht animiert) des {{SVGAttr("preserveAspectRatio")}}-Attributs eines SVG-Elements.

## Wert

Ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)-Objekt.

## Beispiele

Betrachten Sie das folgende SVG:

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <image
    id="myImage"
    href="crows.jpg"
    width="50"
    height="50"
    preserveAspectRatio="xMinYMin meet">
    <animate
      attributeName="preserveAspectRatio"
      from="xMinYMin meet"
      to="xMaxYMax slice"
      dur="5s"
      fill="freeze"
      repeatCount="1" />
  </image>
</svg>
```

Dieses Beispiel definiert ein `<image>`-Element, das sein `preserveAspectRatio`-Attribut animiert. Die Animation läuft einmal und setzt das `fill`-Attribut auf `"freeze"`, sodass der Effekt der Animation nach dem Abschluss der Animation beibehalten wird.

Wir führen den folgenden Code sofort aus, wenn die Seite geladen wird:

```js
const image = document.querySelector("#myImage");
const baseVal = image.preserveAspectRatio.baseVal;
const animVal = image.preserveAspectRatio.animVal;

console.log(baseVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
console.log(animVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
```

Wenn wir die Werte von `animVal.meetOrSlice` und `baseVal.meetOrSlice` erneut protokollieren, nachdem die Animation abgeschlossen ist, sehen wir Folgendes:

```js
console.log(baseVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
console.log(animVal.meetOrSlice); // Output: 2 (SVG_MEETORSLICE_SLICE)
```

Beachten Sie, dass wenn wir `fill` auf `"remove"` setzen (oder `fill` ganz entfernen, da `"remove"` der Standard ist), die Animationseffekte entfernt werden, wenn die Animation abgeschlossen ist, und `animVal.meetOrSlice` dann wieder auf `1` zurückgeht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
