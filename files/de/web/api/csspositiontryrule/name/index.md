---
title: "CSSPositionTryRule: name-Eigenschaft"
short-title: name
slug: Web/API/CSSPositionTryRule/name
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("CSSOM") }}

Die **`name`** Schreibgeschützte Eigenschaft der [`CSSPositionTryRule`](/de/docs/Web/API/CSSPositionTryRule)-Schnittstelle repräsentiert den Namen der Fallback-Option für das Positionieren, die durch das `@position-try`-Regelwerk mithilfe von {{cssxref("dashed-ident")}} festgelegt wurde.

## Wert

Ein String.

## Beispiele

Das CSS enthält ein `@position-try`-Regelwerk mit dem Namen `--custom-bottom` und drei Deskriptoren.

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
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Überlaufbehandlung: Versuch-Optionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
