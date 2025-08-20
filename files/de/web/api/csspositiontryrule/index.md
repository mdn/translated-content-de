---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("CSSOM")}}

Das **`CSSPositionTryRule`**-Interface beschreibt ein Objekt, das eine {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) repräsentiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPositionTryRule.name`](/de/docs/Web/API/CSSPositionTryRule/name) {{ReadOnlyInline}}
  - : Repräsentiert den Namen der Position-Try-Option, die von der `@position-try` At-Regel mit {{cssxref("dashed-ident")}} spezifiziert wird.
- [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style) {{ReadOnlyInline}}
  - : Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt, das die in der `@position-try` At-Regel festgelegten Deklarationen repräsentiert.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine `@position-try` At-Regel mit einem Namen `--custom-left` und drei Deskriptoren.

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
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Overflow: Try-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
