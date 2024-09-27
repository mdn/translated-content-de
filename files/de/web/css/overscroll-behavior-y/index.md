---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, wie der Browser sich verhält, wenn der vertikale Rand eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-y` Eigenschaft wird als ein Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements, bei dem dieser Wert gesetzt ist, beobachtet. Allerdings tritt keine [Scroll-Folge](/de/docs/Glossary/Scroll_chaining) in benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Folge zu benachbarten Scrollbereichen auf, und das Standardverhalten bei Überlauf beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein zugrunde liegendes Element vertikal scrollt

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
