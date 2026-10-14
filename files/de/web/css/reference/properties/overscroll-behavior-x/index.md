---
title: "`overscroll-behavior-x` CSS property"
short-title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: 151d527b2d48812d732cb4f3fdffa0737682e684
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`overscroll-behavior-x`** legt fest, wie sich der Browser verhält, wenn die horizontale Grenze eines scrollbaren Bereichs erreicht wird.

Eine ausführliche Erklärung finden Sie unter {{cssxref("overscroll-behavior")}}.

## Syntax

```css
/* Keyword values */
overscroll-behavior-x: auto; /* default */
overscroll-behavior-x: chain;
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Global values */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

### Werte

Für diese Eigenschaft wird einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Ermöglicht das Standardverhalten an einer Scrollgrenze. Das Scrollen kann in einem anderen Scrollcontainer fortgesetzt werden.
- `chain`
  - : Ermöglicht das Scrollen über den Scrollcontainer hinaus, verhindert aber Abpralleffekte beim Overscrolling.
- `contain`
  - : Verhindert das Scrollen über den Scrollcontainer hinaus. Abpralleffekte können weiterhin auftreten.
- `none`
  - : Verhindert das Scrollen über den Scrollcontainer hinaus sowie Abpralleffekte beim Overscrolling.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Horizontales Scrollen eines darunterliegenden Elements verhindern

In unserem [Beispiel zu overscroll-behavior-x](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) befinden sich zwei Block-Boxen ineinander. Für die äußere Box ist eine große {{cssxref("width")}} festgelegt, sodass die Seite horizontal gescrollt werden kann. Für die innere Box sind eine geringe Breite (und {{cssxref("height")}}) festgelegt, sodass sie problemlos in den Viewport passt. Ihr Inhalt hat jedoch eine große `width`, sodass die innere Box horizontal gescrollt werden kann.

Wenn die innere Box gescrollt wird und eine Scrollgrenze erreicht, beginnt standardmäßig die gesamte Seite zu scrollen. Das ist wahrscheinlich nicht erwünscht. Um dies zu verhindern, können Sie für die innere Box `overscroll-behavior-x: contain` festlegen:

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
- Modul [CSS-Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior)
