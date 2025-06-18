---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("CSSOM")}}

Das **`CSSPositionTryDescriptors`**-Interface definiert Eigenschaften, die die Liste von CSS-Deskriptoren darstellen, die im Hauptteil einer {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) gesetzt werden können.

Jeder Deskriptor im Hauptteil der entsprechenden {{cssxref("@position-try")}} At-Regel kann sowohl mit seinem Eigenschaftsnamen in [Klammernotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) als auch mit der camelCase-Version des Eigenschaftsnamens "propertyName" in [Punktnotation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) zugegriffen werden. Sie können zum Beispiel auf die CSS-Eigenschaft "property-name" als `style["property-name"]` oder `style.propertyName` zugreifen, wobei `style` eine Instanz von `CSSPositionTryDescriptors` ist. Eine Eigenschaft mit einem ein-Wort-Namen wie {{cssxref("height")}} kann mit beiden Notationen aufgerufen werden: `style["height"]` oder `style.height`.

> [!NOTE]
> Das [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) Interface repräsentiert eine {{cssxref("@position-try")}} At-Regel, und die [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style) Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen in snake_case (über Klammernotation angesprochen) und camelCase (über Punktnotation angesprochen) repräsentieren jeweils den Wert eines Deskriptors in der entsprechenden `@position-try` At-Regel:

- `align-self` oder `alignSelf`
  - : Ein String, der den Wert eines {{cssxref("align-self")}} Deskriptors darstellt.
- `block-size` oder `blockSize`
  - : Ein String, der den Wert eines {{cssxref("block-size")}} Deskriptors darstellt.
- `bottom`
  - : Ein String, der den Wert eines {{cssxref("bottom")}} Deskriptors darstellt.
- `height`
  - : Ein String, der den Wert eines {{cssxref("height")}} Deskriptors darstellt.
- `inline-size` oder `inlineSize`
  - : Ein String, der den Wert eines {{cssxref("inline-size")}} Deskriptors darstellt.
- `inset`
  - : Ein String, der den Wert eines {{cssxref("inset")}} Deskriptors darstellt.
- `position-area` oder `positionArea`
  - : Ein String, der den Wert eines {{cssxref("position-area")}} Deskriptors darstellt.
- `inset-block` oder `insetBlock`
  - : Ein String, der den Wert eines {{cssxref("inset-block")}} Deskriptors darstellt.
- `inset-block-end` oder `insetBlockEnd`
  - : Ein String, der den Wert eines {{cssxref("inset-block-end")}} Deskriptors darstellt.
- `inset-block-start` oder `insetBlockStart`
  - : Ein String, der den Wert eines {{cssxref("inset-block-start")}} Deskriptors darstellt.
- `inset-inline` oder `insetInline`
  - : Ein String, der den Wert eines {{cssxref("inset-inline")}} Deskriptors darstellt.
- `inset-inline-end` oder `insetInlineEnd`
  - : Ein String, der den Wert eines {{cssxref("inset-inline-end")}} Deskriptors darstellt.
- `inset-inline-start` oder `insetInlineStart`
  - : Ein String, der den Wert eines {{cssxref("inset-inline-start")}} Deskriptors darstellt.
- `justify-self` oder `justifySelf`
  - : Ein String, der den Wert eines {{cssxref("justify-self")}} Deskriptors darstellt.
- `left`
  - : Ein String, der den Wert eines {{cssxref("left")}} Deskriptors darstellt.
- `margin`
  - : Ein String, der den Wert eines {{cssxref("margin")}} Deskriptors darstellt.
- `margin-block` oder `marginBlock`
  - : Ein String, der den Wert eines {{cssxref("margin-block")}} Deskriptors darstellt.
- `margin-block-end` oder `marginBlockEnd`
  - : Ein String, der den Wert eines {{cssxref("margin-block-end")}} Deskriptors darstellt.
- `margin-block-start` oder `marginBlockStart`
  - : Ein String, der den Wert eines {{cssxref("margin-block-start")}} Deskriptors darstellt.
- `margin-bottom` oder `marginBottom`
  - : Ein String, der den Wert eines {{cssxref("margin-bottom")}} Deskriptors darstellt.
- `margin-inline` oder `marginInline`
  - : Ein String, der den Wert eines {{cssxref("margin-inline")}} Deskriptors darstellt.
- `margin-inline-end` oder `marginInlineEnd`
  - : Ein String, der den Wert eines {{cssxref("margin-inline-end")}} Deskriptors darstellt.
- `margin-inline-start` oder `marginInlineStart`
  - : Ein String, der den Wert eines {{cssxref("margin-inline-start")}} Deskriptors darstellt.
- `margin-left` oder `marginLeft`
  - : Ein String, der den Wert eines {{cssxref("margin-left")}} Deskriptors darstellt.
- `margin-right` oder `marginRight`
  - : Ein String, der den Wert eines {{cssxref("margin-right")}} Deskriptors darstellt.
- `margin-top` oder `marginTop`
  - : Ein String, der den Wert eines {{cssxref("margin-top")}} Deskriptors darstellt.
- `max-block-size` oder `maxBlockSize`
  - : Ein String, der den Wert eines {{cssxref("max-block-size")}} Deskriptors darstellt.
- `max-height` oder `maxHeight`
  - : Ein String, der den Wert eines {{cssxref("max-height")}} Deskriptors darstellt.
- `max-inline-size` oder `maxInlineSize`
  - : Ein String, der den Wert eines {{cssxref("max-inline-size")}} Deskriptors darstellt.
- `max-width` oder `maxWidth`
  - : Ein String, der den Wert eines {{cssxref("max-width")}} Deskriptors darstellt.
- `min-block-size` oder `minBlockSize`
  - : Ein String, der den Wert eines {{cssxref("min-block-size")}} Deskriptors darstellt.
- `min-height` oder `minHeight`
  - : Ein String, der den Wert eines {{cssxref("min-height")}} Deskriptors darstellt.
- `min-inline-size` oder `minInlineSize`
  - : Ein String, der den Wert eines {{cssxref("min-inline-size")}} Deskriptors darstellt.
- `min-width` oder `minWidth`
  - : Ein String, der den Wert eines {{cssxref("min-width")}} Deskriptors darstellt.
- `place-self` oder `placeSelf`
  - : Ein String, der den Wert eines {{cssxref("place-self")}} Deskriptors darstellt.
- `position-anchor` oder `positionAnchor`
  - : Ein String, der den Wert eines {{cssxref("position-anchor")}} Deskriptors darstellt.
- `right`
  - : Ein String, der den Wert eines {{cssxref("right")}} Deskriptors darstellt.
- `top`
  - : Ein String, der den Wert eines {{cssxref("top")}} Deskriptors darstellt.
- `width`
  - : Ein String, der den Wert eines {{cssxref("width")}} Deskriptors darstellt.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

Das CSS enthält eine `@position-try` At-Regel mit einem Namen von `--custom-right` und drei Deskriptoren.

```css
@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin: 0 0 0 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.margin); // "0 0 0 10px"
console.log(tryOption.style["position-area"]); // "right"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Überlauf: Versuch-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
