---
title: "HTMLInputElement: width Eigenschaft"
short-title: width
slug: Web/API/HTMLInputElement/width
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die Breite eines Steuerelements an. Sie spiegelt das [`width`](/de/docs/Web/HTML/Reference/Elements/input#width)-Attribut des {{htmlelement("input")}} Elements wider.

Die `width`-Eigenschaft ist nur für den [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) Typ gültig. Sie definiert die bevorzugte horizontale Größe des Bild-Buttons in Pixeln. Der Wert der Eigenschaft ist die Breite der [content-box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des gerenderten Buttons. CSS Box-Modell-Eigenschaften, die die Größe des Steuerungselements beeinflussen, haben Vorrang.

Wenn keine `width`-Eigenschaft festgelegt ist und keine CSS-Breiten-Eigenschaften auf das Steuerelement wirken, wird die `width` die intrinsische Breite des Bildes sein. Wenn das Bild nicht geladen wurde, wird der Wert die maximale intrinsische Breite des `alt`-Textes sein. Die `width` wird `0` sein, wenn die Breite nicht bekannt ist; wenn keine `width` festgelegt ist, keine CSS-Dimensionen gelten, kein Bild geladen ist, und entweder der Wert des [`alt`](/de/docs/Web/API/HTMLInputElement/alt) eine leere Zeichenkette ist oder kein `src` festgelegt wurde.

## Wert

Eine Zahl.

## Beispiele

```js
const inputElement = document.getElementById("imageButton");
console.log(inputElement.width);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLInputElement.height`](/de/docs/Web/API/HTMLInputElement/height)
- [`HTMLInputElement.src`](/de/docs/Web/API/HTMLInputElement/src)
- [`HTMLInputElement.alt`](/de/docs/Web/API/HTMLInputElement/alt)
- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS {{CSSXRef("inline-size")}} Eigenschaft
- CSS {{CSSXRef("width")}} Eigenschaft
- CSS {{CSSXRef("aspect-ratio")}} Eigenschaft
- [CSS Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
