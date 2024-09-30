---
title: CSSPositionTryDescriptors
slug: Web/API/CSSPositionTryDescriptors
l10n:
  sourceCommit: bd8dbe863a306cf7114752bd936d012524b13517
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSPositionTryDescriptors`**-Schnittstelle definiert Eigenschaften, die die Liste der CSS-Deskriptoren repräsentieren, die im Körper einer {{cssxref("@position-try")}} [at-rule](/de/docs/Web/CSS/At-rule) festgelegt werden können.

Jeder Deskriptor im Körper der entsprechenden {{cssxref("@position-try")}}-At-Regel kann entweder mit seinem Eigenschaftsnamen in der [Klammernotation](/de/docs/Learn/JavaScript/Objects/Basics#bracket_notation) oder der camelCase-Version des Eigenschaftennamens "propertyName" in der [Punktnotation](/de/docs/Learn/JavaScript/Objects/Basics#dot_notation) aufgerufen werden. Zum Beispiel können Sie auf die CSS-Eigenschaft "property-name" als `style["property-name"]` oder `style.propertyName` zugreifen, wobei `style` eine Instanz von `CSSPositionTryDescriptors` ist. Eine Eigenschaft mit einem einwortigen Namen wie {{cssxref("height")}} kann mit beiden Notationen aufgerufen werden: `style["height"]` oder `style.height`.

> [!NOTE]
> Die [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle repräsentiert eine {{cssxref("@position-try")}}-At-Regel, und die [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style)-Eigenschaft ist eine Instanz dieses Objekts.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

Die folgenden Eigenschaftsnamen, in snake-case (Zugriff über Klammernotation) und camel-case (Zugriff über Punktnotation), repräsentieren jeweils den Wert eines Deskriptors in der entsprechenden `@position-try`-At-Regel:

- `align-self` oder `alignSelf` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("align-self")}}-Deskriptors repräsentiert.
- `block-size` oder `blockSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("block-size")}}-Deskriptors repräsentiert.
- `bottom` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("bottom")}}-Deskriptors repräsentiert.
- `height` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("height")}}-Deskriptors repräsentiert.
- `inline-size` oder `inlineSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inline-size")}}-Deskriptors repräsentiert.
- `inset` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset")}}-Deskriptors repräsentiert.
- `position-area` oder `positionArea` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("position-area")}}-Deskriptors repräsentiert.
- `inset-block` oder `insetBlock` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-block")}}-Deskriptors repräsentiert.
- `inset-block-end` oder `insetBlockEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-block-end")}}-Deskriptors repräsentiert.
- `inset-block-start` oder `insetBlockStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-block-start")}}-Deskriptors repräsentiert.
- `inset-inline` oder `insetInline` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-inline")}}-Deskriptors repräsentiert.
- `inset-inline-end` oder `insetInlineEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-inline-end")}}-Deskriptors repräsentiert.
- `inset-inline-start` oder `insetInlineStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("inset-inline-start")}}-Deskriptors repräsentiert.
- `justify-self` oder `justifySelf` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("justify-self")}}-Deskriptors repräsentiert.
- `left` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("left")}}-Deskriptors repräsentiert.
- `margin` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin")}}-Deskriptors repräsentiert.
- `margin-block` oder `marginBlock` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-block")}}-Deskriptors repräsentiert.
- `margin-block-end` oder `marginBlockEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-block-end")}}-Deskriptors repräsentiert.
- `margin-block-start` oder `marginBlockStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-block-start")}}-Deskriptors repräsentiert.
- `margin-bottom` oder `marginBottom` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-bottom")}}-Deskriptors repräsentiert.
- `margin-inline` oder `marginInline` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-inline")}}-Deskriptors repräsentiert.
- `margin-inline-end` oder `marginInlineEnd` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-inline-end")}}-Deskriptors repräsentiert.
- `margin-inline-start` oder `marginInlineStart` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-inline-start")}}-Deskriptors repräsentiert.
- `margin-left` oder `marginLeft` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-left")}}-Deskriptors repräsentiert.
- `margin-right` oder `marginRight` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-right")}}-Deskriptors repräsentiert.
- `margin-top` oder `marginTop` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("margin-top")}}-Deskriptors repräsentiert.
- `max-block-size` oder `maxBlockSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-block-size")}}-Deskriptors repräsentiert.
- `max-height` oder `maxHeight` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-height")}}-Deskriptors repräsentiert.
- `max-inline-size` oder `maxInlineSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-inline-size")}}-Deskriptors repräsentiert.
- `max-width` oder `maxWidth` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("max-width")}}-Deskriptors repräsentiert.
- `min-block-size` oder `minBlockSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-block-size")}}-Deskriptors repräsentiert.
- `min-height` oder `minHeight` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-height")}}-Deskriptors repräsentiert.
- `min-inline-size` oder `minInlineSize` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-inline-size")}}-Deskriptors repräsentiert.
- `min-width` oder `minWidth` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("min-width")}}-Deskriptors repräsentiert.
- `place-self` oder `placeSelf` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("place-self")}}-Deskriptors repräsentiert.
- `position-anchor` oder `positionAnchor` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("position-anchor")}}-Deskriptors repräsentiert.
- `right` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("right")}}-Deskriptors repräsentiert.
- `top` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("top")}}-Deskriptors repräsentiert.
- `width` {{experimental_inline}}
  - : Ein String, der den Wert eines {{cssxref("width")}}-Deskriptors repräsentiert.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration)._

## Beispiele

Die CSS umfasst eine `@position-try`-At-Regel mit dem Namen `--custom-right` und drei Deskriptoren.

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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Überlauf: try-Optionen und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
