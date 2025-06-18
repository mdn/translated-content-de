---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("CSSOM")}}

Die **`CSSPositionTryRule`** Schnittstelle beschreibt ein Objekt, das eine {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) darstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Vorgänger [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPositionTryRule.name`](/de/docs/Web/API/CSSPositionTryRule/name) {{ReadOnlyInline}}
  - : Repräsentiert den Namen der Position-Try-Option, die durch die `@position-try` At-Regel's {{cssxref("dashed-ident")}} spezifiziert wird.
- [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style) {{ReadOnlyInline}}
  - : Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) Objekt, das die in der `@position-try` At-Regel festgelegten Deklarationen darstellt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorgänger [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält eine `@position-try` At-Regel mit dem Namen `--custom-left` und drei Deskriptoren.

```css
@position-try --custom-left {
  position-area: left;
  width: 20%;
  max-width: 200px;
  margin: 0 10px 0 0;
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
- [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Overflows: Try-Optionen und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
