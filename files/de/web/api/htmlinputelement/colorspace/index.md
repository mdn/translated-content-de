---
title: "HTMLInputElement: colorSpace-Eigenschaft"
short-title: colorSpace
slug: Web/API/HTMLInputElement/colorSpace
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`colorSpace`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle spiegelt das `\<input>`-Elementattribut [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace) wider, das angibt, ob der {{Glossary("color_space", "Farbraum")}} der serialisierten CSS-Farbe `sRGB` (Standard) oder `display-p3` ist. Es ist nur in Bezug auf [color](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelemente relevant.

## Wert

Ein String, der den Wert des [`colorspace`](/de/docs/Web/HTML/Reference/Elements/input/color#colorspace)-Attributs enthält.

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
