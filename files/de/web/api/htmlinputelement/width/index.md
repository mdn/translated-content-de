---
title: "HTMLInputElement: width Eigenschaft"
short-title: width
slug: Web/API/HTMLInputElement/width
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft der {{DOMxRef("HTMLInputElement")}} Schnittstelle gibt die Breite eines Steuerelements an. Sie spiegelt das `width`-Attribut des {{htmlelement("input")}}-Elements wider.

Die `width`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Element/input/image) gültig. Sie definiert die bevorzugte horizontale Größe der Bildschaltfläche in Pixeln. Der Eigenschaftswert ist die Breite der [content-box](/de/docs/Web/CSS/box-edge#content-box) der gerenderten Schaltfläche. CSS-Boxmodell-Eigenschaften, die die Größe des Steuerelements beeinflussen, haben Vorrang.

Wenn keine `width` gesetzt und keine CSS-Breiteigenschaften auf das Steuerelement angewendet werden, wird die `width` die intrinsische Breite des Bildes sein. Falls das Bild nicht geladen wurde, wird der Wert die maximale intrinsische Breite des `alt`-Textes sein. Die `width` wird `0` sein, wenn die Breite nicht bekannt ist; wenn keine `width` gesetzt ist, keine CSS-Dimensionen angewendet werden, kein Bild geladen wurde und entweder der Wert des {{DOMxRef("HTMLInputElement.alt", "alt")}} ein leerer String ist oder kein `src` gesetzt ist.

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

- {{DOMxRef("HTMLInputElement.height")}}
- {{DOMxRef("HTMLInputElement.src")}}
- {{DOMxRef("HTMLInputElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS {{CSSXRef("inline-size")}} Eigenschaft
- CSS {{CSSXRef("width")}} Eigenschaft
- CSS {{CSSXRef("aspect-ratio")}} Eigenschaft
- [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_sizing) Modul
