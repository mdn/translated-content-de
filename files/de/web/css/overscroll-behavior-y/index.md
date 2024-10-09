---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`overscroll-behavior-y`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt das Verhalten des Browsers fest, wenn der vertikale Rand eines Scrollbereichs erreicht wird.

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

Die Eigenschaft `overscroll-behavior-y` wird als ein Schlüsselwort angegeben, das aus der folgenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Standardverhalten bei Bildlaufüberlauf tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Bildlaufüberlauf (z. B. "Bounce"-Effekte) wird innerhalb des Elements beachtet, in dem dieser Wert festgelegt ist. Allerdings tritt keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bei benachbarten Scrollbereichen auf; die darunterliegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen "Pull-to-Refresh"-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung zu benachbarten Scrollbereichen auf, und das Standardverhalten bei Bildlaufüberlauf wird verhindert.

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

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-x")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Module
