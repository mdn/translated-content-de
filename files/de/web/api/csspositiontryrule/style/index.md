---
title: "CSSPositionTryRule: style Eigenschaft"
short-title: style
slug: Web/API/CSSPositionTryRule/style
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{ APIRef("CSSOM") }}

Die schreibgeschützte **`style`**-Eigenschaft des [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Interfaces gibt ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt zurück, das die in der `@position-try`-Atregel im Körper festgelegten Deklarationen darstellt.

## Wert

Ein [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)-Objekt.

## Beispiele

Das CSS enthält eine `@position-try`-Atregel mit dem Namen `--custom-right` und drei Deskriptoren.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin-top: 10px;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.style.top); // "anchor(bottom)"
console.log(tryOption.style["min-width"]); // "100px"
console.log(tryOption.style.positionArea); // ""; no position-area specified
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Overflow: Try-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
