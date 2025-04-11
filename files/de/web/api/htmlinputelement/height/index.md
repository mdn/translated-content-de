---
title: "HTMLInputElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLInputElement/height
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die Höhe eines Steuerelements an. Sie spiegelt das Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/input#height) des {{htmlelement("input")}}-Elements wider.

Die `height`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gültig. Sie definiert die vertikale Dimension des Bildbuttons in Pixel. Wenn CSS-Größeneigenschaften auf das Steuerelement angewendet werden, ist der Wert die Höhe des Inhaltsbereichs des gerenderten Steuerelements und nicht der Wert des `height`-Attributs. Wenn keine `height` eingestellt ist und CSS die Größe des Steuerelements nicht beeinflusst, ist die `height` die intrinsische Höhe des Bildes. Wenn das Bild nicht geladen wurde, ist der Wert die Höhe des `alt`-Textes. Die `height` wird `0` sein, wenn die Höhe nicht bekannt ist; wenn keine `height` gesetzt ist, CSS die Höhe nicht beeinflusst, das Bild nicht geladen wurde und entweder der Wert des [`alt`](/de/docs/Web/API/HTMLInputElement/alt) leer ist oder kein `src` gesetzt ist.

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
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul
