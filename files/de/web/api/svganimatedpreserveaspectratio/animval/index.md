---
title: "SVGAnimatedPreserveAspectRatio: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedPreserveAspectRatio/animVal
l10n:
  sourceCommit: 4f5fffdcb6ab78d736c69185f9575e8553e7d070
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`animVal`** der Schnittstelle [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio) repräsentiert den Wert des {{SVGAttr("preserveAspectRatio")}}-Attributs eines SVG-Elements, nachdem Animationen oder Transformationen angewendet wurden.

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

Dieses Beispiel definiert ein `<image>`-Element, das sein `preserveAspectRatio`-Attribut animiert. Die Animation läuft einmal und setzt das `fill`-Attribut auf `"freeze"`, sodass die Wirkung der Animation nach dem Ende der Animation bestehen bleibt.

Wir führen den folgenden Code sofort aus, wenn die Seite geladen wird:

```js
const image = document.querySelector("#myImage");
const baseVal = image.preserveAspectRatio.baseVal;
const animVal = image.preserveAspectRatio.animVal;

console.log(baseVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
console.log(animVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
```

Wenn wir die Werte von `animVal.meetOrSlice` und `baseVal.meetOrSlice` erneut protokollieren, nachdem die Animation beendet ist, werden wir Folgendes sehen:

```js
console.log(baseVal.meetOrSlice); // Output: 1 (SVG_MEETORSLICE_MEET)
console.log(animVal.meetOrSlice); // Output: 2 (SVG_MEETORSLICE_SLICE)
```

Beachten Sie, dass, wenn wir `fill` auf `"remove"` setzen (oder `fill` vollständig entfernen, da `"remove"` der Standard ist), die Animationseffekte entfernt werden, wenn die Animation abgeschlossen ist, und `animVal.meetOrSlice` dann auf `1` zurückgesetzt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)
- [`SVGElement`](/de/docs/Web/API/SVGElement)
