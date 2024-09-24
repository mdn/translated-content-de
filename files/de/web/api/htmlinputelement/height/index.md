---
title: "HTMLInputElement: height-Eigenschaft"
short-title: height
slug: Web/API/HTMLInputElement/height
l10n:
  sourceCommit: a242996610e5a3335fcd0c5ee3c84d5543b9b8dd
---

{{APIRef("HTML DOM")}}

Die **`height`**-Eigenschaft des {{DOMxRef("HTMLInputElement")}}-Interfaces legt die Höhe eines Steuerelements fest. Sie spiegelt das [`height`](/de/docs/Web/HTML/Element/input#height)-Attribut des {{htmlelement("input")}}-Elements wider.

Die `height`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Element/input/image) gültig. Sie definiert die vertikale Dimension des Bildbuttons in Pixeln. Wenn CSS-Größenangaben auf das Steuerelement angewendet werden, ist der Wert die Höhe des Inhaltsbereichs des gerenderten Steuerelements und nicht der Wert des `height`-Attributs. Wenn keine `height` festgelegt ist und CSS die Größe des Steuerelements nicht beeinflusst, entspricht die `height` der intrinsischen Höhe des Bildes. Wenn das Bild nicht geladen wurde, entspricht der Wert der Höhe des `alt`-Textes. Die `height` wird `0` sein, wenn die Höhe nicht bekannt ist; wenn keine `height` gesetzt ist, CSS die Höhe nicht beeinflusst, das Bild nicht geladen wurde und entweder der Wert von {{DOMxRef("HTMLInputElement.alt", "alt")}} der leere String ist oder kein `src` gesetzt ist.

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

- {{DOMxRef("HTMLInputElement.width")}}
- {{DOMxRef("HTMLInputElement.src")}}
- {{DOMxRef("HTMLInputElement.alt")}}
- {{DOMXref("HTMLButtonElement")}}
- {{HTMLElement("button")}}
- {{HTMLElement("input")}}
- {{HTMLElement("img")}}
- CSS-{{CSSXRef("inline-size")}}-Eigenschaft
- CSS-{{CSSXRef("height")}}-Eigenschaft
- CSS-{{CSSXRef("aspect-ratio")}}-Eigenschaft
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_sizing) Modul
