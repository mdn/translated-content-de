---
title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt fest, welches Verhalten der Browser zeigt, wenn die horizontale Grenze eines Scrollbereichs erreicht wird.

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

Die Eigenschaft `overscroll-behavior-x` wird als ein Schlüsselwort aus der untenstehenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf beim Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert festgelegt ist. Es tritt jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining zu benachbarten Scrollbereichen auf, und das Standardverhalten bei Überlauf beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem [overscroll-behavior-x-Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei Block-Elemente, eines innerhalb des anderen. Das äußere Element hat eine große {{cssxref("width")}}, damit die Seite horizontal scrollt. Das innere Element hat eine kleine Breite (und {{cssxref("height")}}), sodass es bequem im Ansichtsfenster sitzt, aber sein Inhalt hat eine große `width`, sodass es horizontal scrollen wird.

Standardmäßig, wenn das innere Element gescrollt wird und eine Scrollgrenze erreicht ist, beginnt die gesamte Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf dem inneren Element festlegen:

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
- [CSS-Überscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
