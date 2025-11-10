---
title: "HTMLInputElement: alpha-Eigenschaft"
short-title: alpha
slug: Web/API/HTMLInputElement/alpha
l10n:
  sourceCommit: 6d4ac4a04fd5c01adc690b9c95de3d9261570212
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

Die **`alpha`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle spiegelt das Attribut [`alpha`](/de/docs/Web/HTML/Reference/Elements/input/color#alpha) des {{htmlelement("input")}}-Elements wider, das angibt, ob die Alpha-Komponente der CSS-Farbe vom Endbenutzer manipuliert werden kann und nicht vollständig undurchsichtig sein muss. Sie ist nur für [Farb](/de/docs/Web/HTML/Reference/Elements/input/color)-Steuerelemente relevant.

## Wert

Ein boolescher Wert.

## Beispiele

```html
<input id="color-picker" type="color" alpha />
```

```js
const colorInput = document.getElementById("color-picker");

if (colorInput.alpha) {
  // Color values contain an alpha component
} else {
  // We have fully opaque color values
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<input type="color">`](/de/docs/Web/HTML/Reference/Elements/input/color)
