---
title: overscroll-behavior-x
slug: Web/CSS/Reference/Properties/overscroll-behavior-x
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn der horizontale Rand eines Scrollbereichs erreicht wird.

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

Die `overscroll-behavior-x` Eigenschaft wird als Schlüsselwort angegeben, das aus der untenstehenden Liste von Werten ausgewählt wird.

### Werte

- `auto`
  - : Das Standardverhalten bei Überlauf-Scrollen tritt wie gewohnt auf.
- `contain`
  - : Standardverhalten bei Überlauf-Scrollen (z.B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert gesetzt ist. Es findet jedoch kein {{Glossary("Scroll_chaining", "Scroll-Chaining")}} auf benachbarte Scrollbereiche statt; die darunterliegenden Elemente werden nicht scrollen. Der Wert `contain` deaktiviert die native Browsenavigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es findet kein Scroll-Chaining zu benachbarten Scrollbereichen statt und das Standardverhalten bei Überlauf-Scrollen wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem [overscroll-behavior-x Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, damit die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) gesetzt, damit sie bequem im Viewport sitzt, aber ihr Inhalt hat eine große `width`, sodass sie horizontal scrollt.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scroll-Grenze erreicht wird, beginnt die ganze Seite zu scrollen, was wahrscheinlich nicht erwünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf der inneren Box setzen:

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
