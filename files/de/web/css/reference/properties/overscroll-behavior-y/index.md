---
title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overscroll-behavior-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die vertikale Grenze eines Scrollbereichs erreicht wird.

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

Die Eigenschaft `overscroll-behavior-y` wird als ein Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten für Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten für Überlauf beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert festgelegt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} in benachbarten Scroll-Bereichen auf; die darunter liegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen "Pull-to-refresh"-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung zu benachbarten Scroll-Bereichen auf, und das Standardverhalten für Überlauf beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunter liegendes Element vertikal scrollt

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

Siehe {{cssxref("overscroll-behavior")}} für ein vollständiges Beispiel und Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) module
