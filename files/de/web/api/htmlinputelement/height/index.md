---
title: "HTMLInputElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLInputElement/height
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces spezifiziert die Höhe eines Steuerelements. Sie spiegelt das Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/input#height) des {{htmlelement("input")}}-Elements wider.

Die `height`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gültig. Sie definiert die vertikale Dimension des Bildbuttons in Pixeln. Wenn CSS-Größeneigenschaften auf das Steuerelement angewendet werden, ist der Wert die Höhe des Inhaltsbereichs des gerenderten Steuerelements, nicht der Wert des `height`-Attributs. Wenn keine `height` gesetzt ist und CSS die Größe des Steuerelements nicht beeinflusst, wird die `height` die intrinsische Höhe des Bildes sein. Wenn das Bild nicht geladen wurde, ist der Wert die Höhe des `alt`-Textes. Die `height` wird `0` sein, wenn die Höhe nicht bekannt ist; wenn keine `height` gesetzt ist, CSS die Höhe nicht beeinflusst, das Bild nicht geladen wurde und entweder der Wert des [`alt`](/de/docs/Web/API/HTMLInputElement/alt) ein leerer String ist oder kein `src` gesetzt ist.

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
- CSS-{{CSSXRef("inline-size")}}-Eigenschaft
- CSS-{{CSSXRef("height")}}-Eigenschaft
- CSS-{{CSSXRef("aspect-ratio")}}-Eigenschaft
- [CSS-Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing)-Modul
