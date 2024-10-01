---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die vertikale Grenze eines scrollbaren Bereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Keyword values */
overscroll-behavior-y: auto; /* default */
overscroll-behavior-y: contain;
overscroll-behavior-y: none;

/* Global values */
overscroll-behavior-y: inherit;
overscroll-behavior-y: initial;
overscroll-behavior-y: revert;
overscroll-behavior-y: revert-layer;
overscroll-behavior-y: unset;
```

Die `overscroll-behavior-y` Eigenschaft wird als ein Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten bei Scrollüberlauf tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Scrollüberlauf (z.B. „Bounce“-Effekte) wird innerhalb des Elements, in dem dieser Wert gesetzt ist, beobachtet. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} in benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browsernavigation, einschließlich der vertikalen "Ziehen-zum-Aktualisieren"-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining in benachbarten Scrollbereichen auf, und das Standardverhalten bei Scrollüberlauf wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element vertikal scrollt

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Siehe {{cssxref("overscroll-behavior")}} für ein vollständiges Beispiel und eine Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#demo)
- Die zugeordneten logischen Eigenschaften: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
