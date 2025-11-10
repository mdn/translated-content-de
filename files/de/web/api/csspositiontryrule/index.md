---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM")}}

Das **`CSSPositionTryRule`**-Interface beschreibt ein Objekt, das eine {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) repräsentiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPositionTryRule.name`](/de/docs/Web/API/CSSPositionTryRule/name) {{ReadOnlyInline}}
  - : Repräsentiert den Namen der Position Try-Option, die durch die `@position-try` At-Regel's {{cssxref("dashed-ident")}} angegeben wird.
- [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style) {{ReadOnlyInline}}
  - : Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt, das die Deklarationen darstellt, die im Körper der `@position-try` At-Regel festgelegt sind.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine `@position-try` At-Regel mit einem Namen von `--custom-left` und drei Deskriptoren.

```css
@position-try --custom-left {
  position-area: left;
  width: 20%;
  max-width: 200px;
  margin-right: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption); // "[object CSSPositionTryRule]"
console.log(tryOption.name); // "--custom-left"
console.log(tryOption.style); // "[object CSSPositionTryDescriptors]"
console.log(tryOption.style.maxWidth); // "200px"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Umgang mit Überlauf: Try-Optionen und bedingtes Verstecken](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
