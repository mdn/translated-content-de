---
title: "`overscroll-behavior-x` CSS property"
short-title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn die horizontale Begrenzung eines scrollbaren Bereichs erreicht wird.

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

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Das Standardverhalten bei Überlauf beim Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf beim Scrollen (z. B. "Bounce"-Effekte) wird innerhalb des Elements, bei dem dieser Wert gesetzt ist, beobachtet. Dennoch tritt kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} in benachbarten scrollbaren Bereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es erfolgt kein Scroll Chaining zu benachbarten scrollbaren Bereichen, und das Standardverhalten bei Überlauf beim Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem [overscroll-behavior-x Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (sehen Sie auch den [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)), haben wir zwei Block-Elementkästen, einen im anderen. Der äußere Kasten hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollt. Der innere Kasten hat eine kleine Breite (und {{cssxref("height")}}) eingestellt, sodass er bequem im Ansichtsfenster sitzt, aber sein Inhalt hat eine große `width`, sodass er horizontal scrollt.

Standardmäßig, wenn der innere Kasten gescrollt wird und eine Scrollgrenze erreicht ist, fängt die ganze Seite an zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf den inneren Kasten setzen:

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
- [CSS Overscroll-Verhalten](/de/docs/Web/CSS/Guides/Overscroll_behavior) Modul
