---
title: overscroll-behavior-y
slug: Web/CSS/overscroll-behavior-y
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overscroll-behavior-y`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Verhalten des Browsers fest, wenn der vertikale Rand eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-y`-Eigenschaft wird als Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Scroll-Überlaufverhalten tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Scroll-Überlaufverhalten (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} bei benachbarten Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung zu benachbarten Scrollbereichen auf, und das standardmäßige Scroll-Überlaufverhalten wird verhindert.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
