---
title: "`overscroll-behavior-x` CSS property"
short-title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Verhalten des Browsers fest, wenn der horizontale Rand eines Scrollbereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Keyword values */
overscroll-behavior-x: auto; /* default */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Global values */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

Die `overscroll-behavior-x`-Eigenschaft wird als ein Schlüsselwort aus der unten stehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Scrollüberlaufverhalten tritt wie gewohnt auf.
- `contain`
  - : Standardmäßiges Scrollüberlaufverhalten (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browsernavigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll Chaining zu benachbarten Scrollbereichen auf, und das standardmäßige Scrollüberlaufverhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern des horizontalen Scrollens eines darunterliegenden Elements

In unserem [Beispiel zu overscroll-behavior-x](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei Block-Elemente, eines im anderen. Das äußere Element hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollt. Das innere Element hat eine kleine Breite (und {{cssxref("height")}}) gesetzt, sodass es bequem im Ansichtsbereich sitzt, aber sein Inhalt hat eine große `width`, sodass er horizontal scrollt.

Standardmäßig beginnt die ganze Seite zu scrollen, wenn das innere Element gescrollt wird und eine Scrollgrenze erreicht wird, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf dem inneren Element setzen:

```css
main > div {
  height: 300px;
  width: 500px;
  overflow: auto;
  position: relative;
  top: 100px;
  left: 100px;
  overscroll-behavior-x: contain;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("overscroll-behavior")}}
- {{cssxref("overscroll-behavior-y")}}
- {{cssxref("overscroll-behavior-inline")}}
- {{cssxref("overscroll-behavior-block")}}
- [CSS overscroll behavior](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
