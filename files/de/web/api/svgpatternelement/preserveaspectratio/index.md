---
title: "SVGPatternElement: preserveAspectRatio-Eigenschaft"
short-title: preserveAspectRatio
slug: Web/API/SVGPatternElement/preserveAspectRatio
l10n:
  sourceCommit: 44ace0bbd59cf14fb0b215eaa91a9a52bbb5e6b6
---

{{APIRef("SVG")}}

Die **`preserveAspectRatio`**-Eigenschaft der [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("preserveAspectRatio")}}-Attribut des gegebenen Elements widerspiegelt. Sie definiert, wie der Inhalt des Musters in den gegebenen Raum skaliert werden soll, wobei das Seitenverhältnis beibehalten wird.

## Wert

Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt.

## Beispiel

Für das folgende SVG können Sie die `preserveAspectRatio`-Eigenschaft nutzen, um das Skalierungsverhalten des Muster-Elements abzurufen:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <pattern
      id="pattern1"
      width="10"
      height="10"
      preserveAspectRatio="xMidYMid meet">
      <circle cx="5" cy="5" r="5" fill="blue" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
</svg>
```

Wir können auf das `preserveAspectRatio`-Attribut zugreifen:

```js
const pattern = document.querySelector("pattern");

console.log(pattern.preserveAspectRatio.baseVal); // output: SVGPreserveAspectRatio {align: 1, meetOrSlice: 1}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("preserveAspectRatio")}}
