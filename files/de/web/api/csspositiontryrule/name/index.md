---
title: "CSSPositionTryRule: Eigenschaft name"
short-title: name
slug: Web/API/CSSPositionTryRule/name
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("CSSOM") }}

Die **`name`**-Eigenschaft der [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Namen der Fallback-Option für Positionsversuche darstellt, die durch die `@position-try`-At-Regel mit der {{cssxref("dashed-ident")}} angegeben ist.

## Wert

Ein String.

## Beispiele

Das CSS beinhaltet eine `@position-try`-At-Regel mit dem Namen `--custom-bottom` und drei Deskriptoren.

```css
@position-try --custom-bottom {
  top: anchor(bottom);
  min-width: 100px;
  margin: 10px 0 0 0;
}
```

```js
const myRules = document.styleSheets[0].cssRules;
const tryOption = myRules[0]; // a CSSPositionTryRule
console.log(tryOption.name); // "--custom-bottom"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionTryDescriptors`](/de/docs/Web/API/CSSPositionTryDescriptors)
- {{cssxref("@position-try")}}
- {{cssxref("position-try-fallbacks")}}
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Überlauf: Versuchsoptionen und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
