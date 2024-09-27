---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
l10n:
  sourceCommit: 12d435505853b709d2d0e2d896023e6802669eff
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSPositionTryRule`**-Schnittstelle beschreibt ein Objekt, das eine {{cssxref("@position-try")}} [at-rule](/de/docs/Web/CSS/At-rule) repräsentiert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

- [`CSSPositionTryRule.name`](/de/docs/Web/API/CSSPositionTryRule/name) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Namen der Position-Try-Option, die durch die {{cssxref("dashed-ident")}} des `@position-try` At-Rules angegeben wird.
- [`CSSPositionTryRule.style`](/de/docs/Web/API/CSSPositionTryRule/style) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors) Objekt, das die im Körper des `@position-try` At-Rules festgelegten Deklarationen repräsentiert.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von ihrem Vorfahren [`CSSRule`](/de/docs/Web/API/CSSRule)._

## Beispiele

Das CSS enthält ein `@position-try` At-Rule mit einem Namen von `--custom-left` und drei Deskriptoren.

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
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Überlauf: Versuch-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
