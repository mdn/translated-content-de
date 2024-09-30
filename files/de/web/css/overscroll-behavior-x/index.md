---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-x`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt das Verhalten des Browsers fest, wenn der horizontale Rand eines scrollbaren Bereichs erreicht wird.

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

Die Eigenschaft `overscroll-behavior-x` wird als ein Schlüsselwort aus der unten stehenden Werteliste angegeben.

### Werte

- `auto`
  - : Das standardmäßige Verhalten bei Überlauf-Scrollen tritt wie gewohnt auf.
- `contain`
  - : Das standardmäßige Verhalten bei Überlauf-Scrollen (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, in dem dieser Wert eingestellt ist. Es tritt jedoch kein [Scroll Chaining](/de/docs/Glossary/Scroll_chaining) zu benachbarten scrollbaren Bereichen auf; die zugrunde liegenden Elemente werden nicht gescrollt. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll Chaining zu benachbarten scrollbaren Bereichen auf, und das standardmäßige Verhalten bei Überlauf-Scrollen wird verhindert.

## Formal Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Das horizontale Scrollen eines darunterliegenden Elements verhindern

In unserem einfachen [Beispiel für overscroll-behavior-x](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)), haben wir zwei Block-Level-Boxen, eine in der anderen. Die äußere Box hat eine große {{cssxref("width")}}-Angabe, sodass die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}), sodass sie bequem im Sichtfenster sitzt, aber ihr Inhalt hat eine große `width`, sodass sie horizontal scrollt.

Normalerweise beginnt der gesamte Bildschirm zu scrollen, wenn die innere Box gescrollt wird und eine Scroll-Grenze erreicht ist, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf der inneren Box setzen:

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

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)
- Die zugeordneten logischen Eigenschaften: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
