---
title: "HTMLInputElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLInputElement/height
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die Höhe eines Steuerelements an. Sie spiegelt das `{{htmlelement("input")}}`-Element-Attribut [`height`](/de/docs/Web/HTML/Element/input#height) wider.

Die `height`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Element/input/image) gültig. Sie definiert die vertikale Dimension des Bildbuttons in Pixeln. Wenn CSS-Größeneigenschaften auf das Steuerelement angewendet werden, ist der Wert die Höhe des Inhaltsbereichs des gerenderten Steuerelements, nicht der Wert des `height`-Attributs. Wenn keine `height` festgelegt ist und CSS keine Auswirkungen auf die Größe des Steuerelements hat, ist die `height` die intrinsische Höhe des Bildes. Wenn das Bild nicht geladen wurde, ist der Wert die Höhe des `alt`-Texts. Die `height` wird `0` sein, wenn die Höhe nicht bekannt ist; wenn keine `height` festgelegt ist, CSS keine Auswirkungen auf die Höhe hat, das Bild nicht geladen wurde und entweder der Wert des [`alt`](/de/docs/Web/API/HTMLInputElement/alt) ein leerer String ist oder kein `src` eingestellt ist.

## Wert

Eine Zahl.

## Beispiele

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.width`](/de/docs/Web/API/HTMLInputElement/width)
- [`HTMLInputElement.src`](/de/docs/Web/API/HTMLInputElement/src)
- [`HTMLInputElement.alt`](/de/docs/Web/API/HTMLInputElement/alt)
- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS {{CSSXRef("inline-size")}}-Eigenschaft
- CSS {{CSSXRef("height")}}-Eigenschaft
- CSS {{CSSXRef("aspect-ratio")}}-Eigenschaft
- [CSS-Box-Size](/de/docs/Web/CSS/CSS_box_sizing)-Modul
