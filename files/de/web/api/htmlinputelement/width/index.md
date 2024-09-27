---
title: "HTMLInputElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLInputElement/width
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die Breite eines Steuerelements an. Sie spiegelt das [`width`](/de/docs/Web/HTML/Element/input#width)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `width`-Eigenschaft ist nur für den [`image`](/de/docs/Web/HTML/Element/input/image)-Typ gültig. Sie definiert die bevorzugte horizontale Größe der Bildschaltfläche in Pixeln. Der Wert der Eigenschaft ist die Breite des [content-box](/de/docs/Web/CSS/box-edge#content-box) der gerenderten Schaltfläche. CSS-Boxmodell-Eigenschaften, die die Größe des Steuerelements beeinflussen, haben Vorrang.

Wenn keine `width` gesetzt ist und keine CSS-Breiteneigenschaften das Steuerelement beeinflussen, wird die `width` die intrinsische Breite des Bildes sein. Sollte das Bild nicht geladen werden, ist der Wert die maximale intrinsische Breite des `alt`-Textes. Die `width` wird `0` sein, wenn die Breite unbekannt ist; wenn keine `width` gesetzt ist, keine CSS-Dimensionen gelten, kein Bild geladen ist und entweder der Wert des [`alt`](/de/docs/Web/API/HTMLInputElement/alt) der leere String ist oder kein `src` gesetzt ist.

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
- [CSS Box Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
