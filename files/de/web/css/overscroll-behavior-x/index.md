---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt das Verhalten des Browsers fest, wenn die horizontale Grenze eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-x`-Eigenschaft wird als ein Schlüsselwort angegeben, das aus der untenstehenden Werteliste ausgewählt wird.

### Werte

- `auto`
  - : Das standardmäßige Overflow-Scroll-Verhalten tritt normal auf.
- `contain`
  - : Das standardmäßige Overflow-Scroll-Verhalten (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert gesetzt ist. Auf benachbarten Scrollbereichen tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} auf; die darunterliegenden Elemente scrollen nicht. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Kein Scroll-Chaining tritt auf benachbarte Scrollbereiche auf, und das standardmäßige Overflow-Scroll-Verhalten wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem [overscroll-behavior-x Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollen wird. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) gesetzt, sodass sie bequem im Viewport sitzt, aber ihr Inhalt hat eine große `width`, sodass sie horizontal scrollen wird.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht ist, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf die innere Box festlegen:

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
- [CSS overscroll behavior](/de/docs/Web/CSS/CSS_overscroll_behavior) Modul
