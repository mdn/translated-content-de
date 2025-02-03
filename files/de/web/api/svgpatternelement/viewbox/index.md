---
title: "SVGPatternElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGPatternElement/viewBox
l10n:
  sourceCommit: 44ace0bbd59cf14fb0b215eaa91a9a52bbb5e6b6
---

{{APIRef("SVG")}}

Die **`viewBox`**-Schreibgeschützte-Eigenschaft des [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement) Interface spiegelt das {{SVGAttr("viewBox")}} Attribut des angegebenen Elements wider. Sie repräsentiert die `x`, `y`, `width` und `height` Werte, die den Bereich definieren, der für die `viewBox` des Musters verwendet werden soll.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect) Objekt.

## Beispiel

Angenommen, das folgende SVG, wir können die `viewBox`-Eigenschaft verwenden, um die Dimensionen der `viewBox` für das Muster-Element abzurufen:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pattern1" width="10" height="10" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="25" fill="blue" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
</svg>
```

Wir können das `viewBox`-Attribut abrufen:

```js
const pattern = document.querySelector("pattern");

console.log(pattern.viewBox.baseVal); // output: DOMRect {x: 0, y: 0, width: 50, height: 50}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("viewBox")}}
