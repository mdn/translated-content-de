---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die horizontale Grenze eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-x` Eigenschaft wird als Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das standardmäßige Überlaufverhalten beim Scrollen tritt normal auf.
- `contain`
  - : Das standardmäßige Überlaufverhalten beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements, in dem dieser Wert gesetzt ist, beobachtet. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung in benachbarte Scrollbereiche auf, und das standardmäßige Überlaufverhalten beim Scrollen wird verhindert.

## Formelle Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem [Overscroll-Behavior-x-Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollen wird. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}), sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große `width`, sodass er horizontal scrollen wird.

Standardmäßig beginnt die ganze Seite zu scrollen, wenn die innere Box gescrollt wird und eine Scroll-Grenze erreicht ist, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf die innere Box setzen:

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
