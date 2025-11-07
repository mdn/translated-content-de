---
title: overscroll-behavior-y
slug: Web/CSS/Reference/Properties/overscroll-behavior-y
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overscroll-behavior-y`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn der vertikale Rand eines Scrollbereichs erreicht wird.

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

Die Eigenschaft `overscroll-behavior-y` wird als Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `auto`
  - : Das Standardverhalten für das Überlauf-Scrolling tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten für das Überlauf-Scrolling (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, wo dieser Wert festgelegt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} in benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente werden nicht gescrollt. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Swipe-Navigation.
- `none`
  - : Es tritt kein Scroll Chaining zu benachbarten Scrollbereichen auf und das Standardverhalten für das Überlauf-Scrolling wird verhindert.

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
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
