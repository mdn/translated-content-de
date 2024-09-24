---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Verhalten des Browsers fest, wenn der horizontale Rand eines Scrollbereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine vollständige Erklärung.

## Syntax

```css
/* Schlüsselwort-Werte */
overscroll-behavior-x: auto; /* Standard */
overscroll-behavior-x: contain;
overscroll-behavior-x: none;

/* Globale Werte */
overscroll-behavior-x: inherit;
overscroll-behavior-x: initial;
overscroll-behavior-x: revert;
overscroll-behavior-x: revert-layer;
overscroll-behavior-x: unset;
```

Die `overscroll-behavior-x` Eigenschaft wird durch ein Schlüsselwort festgelegt, das aus der unten stehenden Liste ausgewählt wird.

### Werte

- `auto`
  - : Das Standardverhalten des Scroll-Overflows tritt wie gewohnt auf.
- `contain`
  - : Das Standardverhalten des Scroll-Overflows (z. B. "Bounce"-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert festgelegt ist. Es tritt jedoch keine {{Glossary("Scroll_chaining", "Scroll-Verkettung")}} in benachbarten Scrollbereichen auf; die darunterliegenden Elemente scrollen nicht. Der Wert `contain` deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt keine Scroll-Verkettung in benachbarten Scrollbereichen auf, und das Standardverhalten des Scroll-Overflows wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern, dass ein darunterliegendes Element horizontal scrollt

In unserem einfachen [Beispiel zu overscroll-behavior-x](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch den [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei Block-Level-Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} eingestellt, sodass die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) eingestellt, sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große `width`, sodass sie horizontal scrollt.

Standardmäßig wird die ganze Seite beginnen zu scrollen, wenn die inneren Box gescrollt wird und eine Scroll-Grenze erreicht ist, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf der inneren Box setzen:

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

- [Nehmen Sie die Kontrolle über Ihr Scrollen: Anpassung von Pull-to-Refresh und Überlauf-Effekten](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)
- Die zugeordneten logischen Eigenschaften: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
