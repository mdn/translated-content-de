---
title: "SVGFEGaussianBlurElement: edgeMode-Eigenschaft"
short-title: edgeMode
slug: Web/API/SVGFEGaussianBlurElement/edgeMode
l10n:
  sourceCommit: fcae10dc7577ef8ae93c0ec36d43b35fb301f0f9
---

{{APIRef("SVG")}}

Die schreibgeschützte **`edgeMode`**-Eigenschaft des [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Interfaces bestimmt, welche Farbwerte verwendet werden, wenn der Weichzeichner Pixel außerhalb des Randes des Eingabebildes abtasten muss. Sie spiegelt das {{SVGAttr("edgeMode")}}-Attribut des angegebenen {{SVGElement("feGaussianBlur")}}-Elements wider.

Ihr Wert ist einer der `SVG_EDGEMODE_*` Konstanten, die im [`SVGFEGaussianBlurElement`](/de/docs/Web/API/SVGFEGaussianBlurElement)-Interface definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts enthält einen der folgenden Werte:

- `0`
  - : Entspricht `SVG_EDGEMODE_UNKNOWN`, was bedeutet, dass das {{SVGAttr("edgeMode")}}-Attribut einen anderen Wert als die vordefinierten Schlüsselwörter hat.
- `1`
  - : Entspricht `SVG_EDGEMODE_DUPLICATE`, was bedeutet, dass das Eingabebild entlang jeder seiner Grenzen nach Bedarf erweitert wird, indem die Farbwerte am gegebenen Rand des Eingabebildes dupliziert werden.
- `2`
  - : Entspricht `SVG_EDGEMODE_WRAP`, was bedeutet, dass das Eingabebild durch die Farbwerte vom gegenüberliegenden Rand des Bildes erweitert wird.
- `3`
  - : Entspricht `SVG_EDGEMODE_NONE`, was bedeutet, dass das Eingabebild mit Pixelwerten von null für die R-, G-, B- und A-Kanäle erweitert wird.

## Beispiele

### Zugriff auf die `edgeMode`-Eigenschaft

```html
<svg
  viewBox="0 0 200 200"
  width="300"
  height="300"
  xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="blur-filter">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="160"
    height="160"
    fill="rebeccapurple"
    filter="url(#blur-filter)" />
</svg>
<output></output>
```

```css hidden
body {
  font-family: system-ui;
}

output {
  display: block;
  font: inherit;
  white-space: pre;
}
```

Wir können auf die `edgeMode`-Eigenschaft zugreifen, um den aktuellen Wert zu lesen:

```js
const gaussianBlur = document.querySelector("feGaussianBlur");
const log = document.querySelector("output");

if (gaussianBlur.edgeMode) {
  // Default edgeMode for feGaussianBlur is "none" (3)
  log.textContent = `edgeMode.baseVal: ${gaussianBlur.edgeMode.baseVal}`;
} else {
  log.textContent = "edgeMode is not supported in this browser";
}
```

{{EmbedLiveSample("Examples", "", "320")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("edgeMode")}}
- [`SVGFEConvolveMatrixElement.edgeMode`](/de/docs/Web/API/SVGFEConvolveMatrixElement/edgeMode)
