---
title: color-contrast()
slug: Web/CSS/color_value/color-contrast
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}{{SeeCompatTable}}

Die funktionale Notation **`color-contrast()`** nimmt einen {{cssxref("color_value","Farbwert")}} und vergleicht ihn mit einer Liste anderer {{cssxref("color_value","Farbwerte")}}, indem sie den mit dem höchsten Kontrast aus der Liste auswählt.

## Syntax

```css
color-contrast(wheat vs tan, sienna, #d2691e)
color-contrast(#008080 vs olive, var(--myColor), #d2691e)
```

### Werte

Funktionale Notation: `color-contrast(color vs color-list)`

- `color`

  - : Jeder gültige {{CSSXref("&lt;color&gt;")}}.

- `vs`

  - : Ein literales Token als Bestandteil der Syntax.

- `color-list`

  - : Eine durch Kommata getrennte Liste von mindestens zwei Farbwerten, die mit dem ersten Wert verglichen werden sollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color_value", "&lt;color>")}} Datentyp
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [`prefers-contrast`](/de/docs/Web/CSS/@media/prefers-contrast) und [`prefers-color-scheme`](/de/docs/Web/CSS/@media/prefers-color-scheme) {{cssxref("@media")}} Funktionen
- [`contrast()`](/de/docs/Web/CSS/filter-function/contrast)
- [WCAG: Farbkontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)
- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) und {{cssxref("var")}}
