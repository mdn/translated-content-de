---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("CSSOM")}}

Das **`CSSPositionTryDescriptors`** Interface definiert Eigenschaften, die die Liste der CSS-Deskriptoren darstellen, die im Hauptteil einer {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) gesetzt werden können.

Jeder Deskriptor im Hauptteil der entsprechenden {{cssxref("@position-try")}} At-Regel kann entweder über seinen Eigenschaftsnamen in [Bracket-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#bracket_notation) oder über die Camel-Case-Version des Eigenschaftsnamens "propertyName" in [Punkt-Notation](/de/docs/Learn_web_development/Core/Scripting/Object_basics#dot_notation) zugegriffen werden. Zum Beispiel können Sie auf die CSS-Eigenschaft "property-name" als `style["property-name"]` oder `style.propertyName` zugreifen, wobei `style` eine Instanz von `CSSPositionTryDescriptors` ist. Eine Eigenschaft mit einem einwortigen Namen wie {{cssxref("height")}} kann mit beiden Notationen angesprochen werden: `style["height"]` oder `style.height`.

> [!NOTE]
> Das [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule) Interface repräsentiert eine {{cssxref("@position-try")}} At-Regel, und die [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style) Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen, in Snake-Case (zugänglich mit Bracket-Notation) und Camel-Case (zugänglich mit Punkt-Notation), repräsentieren jeweils den Wert eines Deskriptors in der entsprechenden `@position-try` At-Regel:

- `align-self` oder `alignSelf`
  - : Ein String, der den Wert eines {{cssxref("align-self")}} Deskriptors repräsentiert.
- `block-size` oder `blockSize`
  - : Ein String, der den Wert eines {{cssxref("block-size")}} Deskriptors repräsentiert.
- `bottom`
  - : Ein String, der den Wert eines {{cssxref("bottom")}} Deskriptors repräsentiert.
- `height`
  - : Ein String, der den Wert eines {{cssxref("height")}} Deskriptors repräsentiert.
- `inline-size` oder `inlineSize`
  - : Ein String, der den Wert eines {{cssxref("inline-size")}} Deskriptors repräsentiert.
- `inset`
  - : Ein String, der den Wert eines {{cssxref("inset")}} Deskriptors repräsentiert.
- `position-area` oder `positionArea`
  - : Ein String, der den Wert eines {{cssxref("position-area")}} Deskriptors repräsentiert.
- `inset-block` oder `insetBlock`
  - : Ein String, der den Wert eines {{cssxref("inset-block")}} Deskriptors repräsentiert.
- `inset-block-end` oder `insetBlockEnd`
  - : Ein String, der den Wert eines {{cssxref("inset-block-end")}} Deskriptors repräsentiert.
- `inset-block-start` oder `insetBlockStart`
  - : Ein String, der den Wert eines {{cssxref("inset-block-start")}} Deskriptors repräsentiert.
- `inset-inline` oder `insetInline`
  - : Ein String, der den Wert eines {{cssxref("inset-inline")}} Deskriptors repräsentiert.
- `inset-inline-end` oder `insetInlineEnd`
  - : Ein String, der den Wert eines {{cssxref("inset-inline-end")}} Deskriptors repräsentiert.
- `inset-inline-start` oder `insetInlineStart`
  - : Ein String, der den Wert eines {{cssxref("inset-inline-start")}} Deskriptors repräsentiert.
- `justify-self` oder `justifySelf`
  - : Ein String, der den Wert eines {{cssxref("justify-self")}} Deskriptors repräsentiert.
- `left`
  - : Ein String, der den Wert eines {{cssxref("left")}} Deskriptors repräsentiert.
- `margin`
  - : Ein String, der den Wert eines {{cssxref("margin")}} Deskriptors repräsentiert.
- `margin-block` oder `marginBlock`
  - : Ein String, der den Wert eines {{cssxref("margin-block")}} Deskriptors repräsentiert.
- `margin-block-end` oder `marginBlockEnd`
  - : Ein String, der den Wert eines {{cssxref("margin-block-end")}} Deskriptors repräsentiert.
- `margin-block-start` oder `marginBlockStart`
  - : Ein String, der den Wert eines {{cssxref("margin-block-start")}} Deskriptors repräsentiert.
- `margin-bottom` oder `marginBottom`
  - : Ein String, der den Wert eines {{cssxref("margin-bottom")}} Deskriptors repräsentiert.
- `margin-inline` oder `marginInline`
  - : Ein String, der den Wert eines {{cssxref("margin-inline")}} Deskriptors repräsentiert.
- `margin-inline-end` oder `marginInlineEnd`
  - : Ein String, der den Wert eines {{cssxref("margin-inline-end")}} Deskriptors repräsentiert.
- `margin-inline-start` oder `marginInlineStart`
  - : Ein String, der den Wert eines {{cssxref("margin-inline-start")}} Deskriptors repräsentiert.
- `margin-left` oder `marginLeft`
  - : Ein String, der den Wert eines {{cssxref("margin-left")}} Deskriptors repräsentiert.
- `margin-right` oder `marginRight`
  - : Ein String, der den Wert eines {{cssxref("margin-right")}} Deskriptors repräsentiert.
- `margin-top` oder `marginTop`
  - : Ein String, der den Wert eines {{cssxref("margin-top")}} Deskriptors repräsentiert.
- `max-block-size` oder `maxBlockSize`
  - : Ein String, der den Wert eines {{cssxref("max-block-size")}} Deskriptors repräsentiert.
- `max-height` oder `maxHeight`
  - : Ein String, der den Wert eines {{cssxref("max-height")}} Deskriptors repräsentiert.
- `max-inline-size` oder `maxInlineSize`
  - : Ein String, der den Wert eines {{cssxref("max-inline-size")}} Deskriptors repräsentiert.
- `max-width` oder `maxWidth`
  - : Ein String, der den Wert eines {{cssxref("max-width")}} Deskriptors repräsentiert.
- `min-block-size` oder `minBlockSize`
  - : Ein String, der den Wert eines {{cssxref("min-block-size")}} Deskriptors repräsentiert.
- `min-height` oder `minHeight`
  - : Ein String, der den Wert eines {{cssxref("min-height")}} Deskriptors repräsentiert.
- `min-inline-size` oder `minInlineSize`
  - : Ein String, der den Wert eines {{cssxref("min-inline-size")}} Deskriptors repräsentiert.
- `min-width` oder `minWidth`
  - : Ein String, der den Wert eines {{cssxref("min-width")}} Deskriptors repräsentiert.
- `place-self` oder `placeSelf`
  - : Ein String, der den Wert eines {{cssxref("place-self")}} Deskriptors repräsentiert.
- `position-anchor` oder `positionAnchor`
  - : Ein String, der den Wert eines {{cssxref("position-anchor")}} Deskriptors repräsentiert.
- `right`
  - : Ein String, der den Wert eines {{cssxref("right")}} Deskriptors repräsentiert.
- `top`
  - : Ein String, der den Wert eines {{cssxref("top")}} Deskriptors repräsentiert.
- `width`
  - : Ein String, der den Wert eines {{cssxref("width")}} Deskriptors repräsentiert.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

Das CSS enthält eine `@position-try` At-Regel mit einem Namen `--custom-right` und drei Deskriptoren.

```css
@position-try --custom-right {
  position-area: right;
  width: 100px;
  margin-left: 10px;
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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [CSS-Anker-Positionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Überlaufverwaltung: Versuch-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
