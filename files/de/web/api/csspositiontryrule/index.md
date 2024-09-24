---
title: CSSPositionTryRule
slug: Web/API/CSSPositionTryRule
l10n:
  sourceCommit: 12d435505853b709d2d0e2d896023e6802669eff
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die **`CSSPositionTryRule`** Schnittstelle beschreibt ein Objekt, das eine {{cssxref("@position-try")}} [At-Regel](/de/docs/Web/CSS/At-rule) darstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Vorfahren {{domxref("CSSRule")}}._

- {{domxref("CSSPositionTryRule.name")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Namen der Position Try-Option, die von der `@position-try` At-Regel durch das {{cssxref("dashed-ident")}} angegeben wird.
- {{domxref("CSSPositionTryRule.style")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein {{domxref("CSSPositionTryDescriptors")}} Objekt, das die Deklarationen repräsentiert, die im Body der `@position-try` At-Regel gesetzt wurden.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Vorfahren {{domxref("CSSRule")}}._

## Beispiele

Das CSS enthält eine `@position-try` At-Regel mit einem Namen `--custom-left` und drei Deskriptoren.

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

- {{DOMxRef("CSSPositionTryDescriptors")}}
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Overflow: Try-Optionen und bedingtem Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
