---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSPositionTryDescriptors`**-Schnittstelle definiert Eigenschaften, die die Liste von CSS-Deskriptoren darstellen, die im Body einer {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/At-rule) gesetzt werden können.

Jeder Deskriptor im Body der entsprechenden {{cssxref("@position-try")}} At-Regel kann entweder mit seinem Eigenschaftsnamen in [Bracket-Notation](/de/docs/Learn/JavaScript/Objects/Basics#bracket_notation) oder der CamelCase-Version des Eigenschaftennamens "propertyName" in [Punkt-Notation](/de/docs/Learn/JavaScript/Objects/Basics#dot_notation) abgerufen werden. Zum Beispiel können Sie auf die CSS-Eigenschaft "property-name" als `style["property-name"]` oder `style.propertyName` zugreifen, wobei `style` eine Instanz von `CSSPositionTryDescriptors` ist. Eine Eigenschaft mit einem ein-Wort-Namen wie {{cssxref("height")}} kann mit beiden Notationen abgerufen werden: `style["height"]` oder `style.height`.

> [!NOTE]
> Die {{domxref("CSSPositionTryRule")}}-Schnittstelle repräsentiert eine {{cssxref("@position-try")}} At-Regel, und die {{domxref("CSSPositionTryRule.style")}} Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSStyleDeclaration")}}._

Die folgenden Eigenschaftsnamen, in snake_case (über Bracket-Notation abgerufen) und CamelCase (über Punkt-Notation abgerufen), repräsentieren jeweils den Wert eines Deskriptors in der entsprechenden `@position-try` At-Regel:

- `align-self` oder `alignSelf` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("align-self")}}-Deskriptors darstellt.
- `block-size` oder `blockSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("block-size")}}-Deskriptors darstellt.
- `bottom` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("bottom")}}-Deskriptors darstellt.
- `height` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("height")}}-Deskriptors darstellt.
- `inline-size` oder `inlineSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inline-size")}}-Deskriptors darstellt.
- `inset` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset")}}-Deskriptors darstellt.
- `position-area` oder `positionArea` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("position-area")}}-Deskriptors darstellt.
- `inset-block` oder `insetBlock` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-block")}}-Deskriptors darstellt.
- `inset-block-end` oder `insetBlockEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-block-end")}}-Deskriptors darstellt.
- `inset-block-start` oder `insetBlockStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-block-start")}}-Deskriptors darstellt.
- `inset-inline` oder `insetInline` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-inline")}}-Deskriptors darstellt.
- `inset-inline-end` oder `insetInlineEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-inline-end")}}-Deskriptors darstellt.
- `inset-inline-start` oder `insetInlineStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-inline-start")}}-Deskriptors darstellt.
- `justify-self` oder `justifySelf` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("justify-self")}}-Deskriptors darstellt.
- `left` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("left")}}-Deskriptors darstellt.
- `margin` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin")}}-Deskriptors darstellt.
- `margin-block` oder `marginBlock` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-block")}}-Deskriptors darstellt.
- `margin-block-end` oder `marginBlockEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-block-end")}}-Deskriptors darstellt.
- `margin-block-start` oder `marginBlockStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-block-start")}}-Deskriptors darstellt.
- `margin-bottom` oder `marginBottom` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-bottom")}}-Deskriptors darstellt.
- `margin-inline` oder `marginInline` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-inline")}}-Deskriptors darstellt.
- `margin-inline-end` oder `marginInlineEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-inline-end")}}-Deskriptors darstellt.
- `margin-inline-start` oder `marginInlineStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-inline-start")}}-Deskriptors darstellt.
- `margin-left` oder `marginLeft` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-left")}}-Deskriptors darstellt.
- `margin-right` oder `marginRight` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-right")}}-Deskriptors darstellt.
- `margin-top` oder `marginTop` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-top")}}-Deskriptors darstellt.
- `max-block-size` oder `maxBlockSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-block-size")}}-Deskriptors darstellt.
- `max-height` oder `maxHeight` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-height")}}-Deskriptors darstellt.
- `max-inline-size` oder `maxInlineSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-inline-size")}}-Deskriptors darstellt.
- `max-width` oder `maxWidth` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-width")}}-Deskriptors darstellt.
- `min-block-size` oder `minBlockSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-block-size")}}-Deskriptors darstellt.
- `min-height` oder `minHeight` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-height")}}-Deskriptors darstellt.
- `min-inline-size` oder `minInlineSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-inline-size")}}-Deskriptors darstellt.
- `min-width` oder `minWidth` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-width")}}-Deskriptors darstellt.
- `place-self` oder `placeSelf` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("place-self")}}-Deskriptors darstellt.
- `position-anchor` oder `positionAnchor` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("position-anchor")}}-Deskriptors darstellt.
- `right` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("right")}}-Deskriptors darstellt.
- `top` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("top")}}-Deskriptors darstellt.
- `width` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("width")}}-Deskriptors darstellt.

## Instanzen-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren {{domxref("CSSStyleDeclaration")}}._

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("CSSPositionTryRule")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Overflow: Try-Optionen und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
