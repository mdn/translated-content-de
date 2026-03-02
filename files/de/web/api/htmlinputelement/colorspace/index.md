---
title: "HTMLInputElement: colorSpace-Eigenschaft"
short-title: colorSpace
slug: Web/API/HTMLInputElement/colorSpace
l10n:
  sourceCommit: de5b557883e8eff2514f0fe6eeb180db782575b1
---

{{APIRef("HTML DOM")}}

Die **`colorSpace`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces spiegelt das `colorspace`-Attribut des {{HTMLElement("input")}}-Elements wider, das angibt, ob der {{Glossary("color_space", "Farbraum")}} der serialisierten CSS-Farbe `sRGB` (Standard) oder `display-p3` ist. Es ist nur für [Farb](/de/docs/Web/HTML/Reference/Elements/input/color)kontrollen relevant.

## Wert

Ein String, der den Wert des `colorspace`-Attributs enthält.

## Beispiele

### Farbräume abrufen und festlegen

```html
<input id="color-picker" type="color" colorspace="display-p3" alpha />
```

```js
const colorInput = document.getElementById("color-picker");
console.log(colorInput.colorSpace); // "display-p3"
colorInput.colorSpace = "limited-srgb"; // convert to srgb
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
