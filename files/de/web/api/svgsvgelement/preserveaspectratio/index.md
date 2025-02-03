---
title: "SVGSVGElement: preserveAspectRatio-Eigenschaft"
short-title: preserveAspectRatio
slug: Web/API/SVGSVGElement/preserveAspectRatio
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die **`preserveAspectRatio`** schreibgeschützte Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle spiegelt das Attribut {{SVGAttr("preserveAspectRatio")}} des gegebenen Elements wider. Sie definiert, wie der Inhalt des SVG-Elements skaliert werden soll, um in den gegebenen Raum zu passen, wobei das Seitenverhältnis beibehalten wird.

## Wert

Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt.

## Beispiel

Bei folgendem SVG können wir die `preserveAspectRatio`-Eigenschaft verwenden, um das Skalierungsverhalten des SVG-Elements abzurufen:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

Wir können auf das `preserveAspectRatio`-Attribut zugreifen:

```js
const svgElement = document.querySelector("svg");

console.log(svgElement.preserveAspectRatio.baseVal); // output: SVGPreserveAspectRatio {align: 1, meetOrSlice: 1}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("preserveAspectRatio")}}
