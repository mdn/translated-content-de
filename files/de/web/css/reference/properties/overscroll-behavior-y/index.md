---
title: "`overscroll-behavior-y` CSS property"
short-title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overscroll-behavior-y`**-Eigenschaft [CSS](/de/docs/Web/CSS) legt fest, wie sich der Browser verhält, wenn die vertikale Grenze eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-y`-Eigenschaft wird als Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Überlaufverhalten beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Überlaufverhalten beim Scrollen (z.B. "Bounce"-Effekte) tritt innerhalb des Elements auf, bei dem dieser Wert festgelegt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert die native Browsernavigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining in benachbarten Scrollbereichen auf, und das standardmäßige Überlaufverhalten beim Scrollen wird verhindert.

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
- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
