---
title: "HTMLInputElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLInputElement/width
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("HTML DOM")}}

Die **`width`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Interfaces gibt die Breite eines Steuerungselements an. Sie spiegelt das `width`-Attribut des {{htmlelement("input")}}-Elements wider.

Die `width`-Eigenschaft ist nur für den Typ [`image`](/de/docs/Web/HTML/Reference/Elements/input/image) gültig. Sie definiert die bevorzugte horizontale Größe der Bildschaltfläche in Pixel. Der Eigenschaftswert ist die Breite der [content-box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) der gerenderten Schaltfläche. CSS-Boxmodell-Eigenschaften, die die Größe des Steuerungselements beeinflussen, haben Vorrang.

Wenn keine `width` gesetzt ist und keine CSS-Breiten-Eigenschaften das Steuerungselement beeinflussen, wird die `width` die intrinsische Breite des Bildes sein. Wenn das Bild nicht geladen wurde, wird der Wert die maximale intrinsische Breite des `alt`-Textes sein. Die `width` wird `0` sein, wenn die Breite nicht bekannt ist; wenn keine `width` gesetzt ist, keine CSS-Dimensionen gelten, kein Bild geladen ist und entweder der Wert des [`alt`](/de/docs/Web/API/HTMLInputElement/alt) leer ist oder kein `src` gesetzt ist.

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
- [CSS-Box-Model](/de/docs/Web/CSS/CSS_box_sizing) Modul
