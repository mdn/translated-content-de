---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: 9a3940b0231838338f65ae1c37d5b874439a3d43
---

{{CSSRef}}

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn der horizontale Rand eines Scrollbereichs erreicht wird.

Für eine vollständige Erklärung siehe {{cssxref("overscroll-behavior")}}.

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

Die `overscroll-behavior-x` Eigenschaft wird als ein Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf-Scrolling tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten bei Überlauf-Scrolling (z.B. "Bounce"-Effekte) wird innerhalb des Elements beachtet, in dem dieser Wert gesetzt wird. Es erfolgt jedoch kein {{Glossary("Scroll_chaining", "Scroll Chaining")}} zu benachbarten Scrollbereichen; die darunterliegenden Elemente werden nicht scrollen. Der `contain`-Wert deaktiviert native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Kein Scroll Chaining zu benachbarten Scrollbereichen tritt auf, und das Standardverhalten bei Überlauf-Scrolling wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem einfachen [overscroll-behavior-x Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)), haben wir zwei Block-Elemente, eines innerhalb des anderen. Das äußere Element hat eine große {{cssxref("width")}} eingestellt, sodass die Seite horizontal scrollen wird. Das innere Element hat eine kleine Breite (und {{cssxref("height")}}), sodass es bequem im Ansichtsfenster sitzt, aber sein Inhalt hat eine große `width`, damit es horizontal scrollt.

Standardmäßig, wenn das innere Element gescrollt wird und ein Scroll-Rand erreicht wird, beginnt die ganze Seite zu scrollen, was wahrscheinlich nicht gewollt ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf das innere Element setzen:

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
