---
title: overscroll-behavior-x
slug: Web/CSS/overscroll-behavior-x
l10n:
  sourceCommit: aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{CSSRef}}

Die **`overscroll-behavior-x`** [CSS](/de/docs/Web/CSS) Eigenschaft bestimmt das Verhalten des Browsers, wenn die horizontale Grenze eines Scrollbereichs erreicht wird.

Siehe {{cssxref("overscroll-behavior")}} für eine umfassende Erklärung.

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

Die `overscroll-behavior-x` Eigenschaft wird als Schlüsselwort aus der folgenden Liste von Werten angegeben.

### Werte

- `auto`
  - : Das Standardverhalten für Scroll-Überlauf tritt wie gewohnt auf.
- `contain`
  - : Standardverhalten für Scroll-Überlauf (z.B. „Bounce“-Effekte) wird innerhalb des Elements beobachtet, bei dem dieser Wert gesetzt ist. Es tritt jedoch kein [Scroll-Chaining](/de/docs/Glossary/Scroll_chaining) bei benachbarten Scrollbereichen auf; die zugrunde liegenden Elemente werden nicht scrollen. Der `contain` Wert deaktiviert die native Browser-Navigation, einschließlich der vertikalen Pull-to-Refresh-Geste und der horizontalen Wischnavigation.
- `none`
  - : Es tritt kein Scroll-Chaining bei benachbarten Scrollbereichen auf, und das Standardverhalten für Scroll-Überlauf wird verhindert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verhindern des horizontalen Scrollens eines zugrunde liegenden Elements

In unserem einfachen [overscroll-behavior-x Beispiel](https://mdn.github.io/css-examples/overscroll-behavior/overscroll-behavior-x) (siehe auch [Quellcode](https://github.com/mdn/css-examples/blob/main/overscroll-behavior/overscroll-behavior-x.html)) haben wir zwei block-level Boxen, eine innerhalb der anderen. Die äußere Box hat eine große {{cssxref("width")}} gesetzt, sodass die Seite horizontal scrollt. Die innere Box hat eine kleine Breite (und {{cssxref("height")}}) gesetzt, sodass sie bequem im Ansichtsfenster sitzt, aber ihr Inhalt hat eine große `width`, sodass sie horizontal scrollt.

Standardmäßig, wenn die innere Box gescrollt wird und eine Scroll-Grenze erreicht ist, beginnt die ganze Seite zu scrollen, was wahrscheinlich nicht gewünscht ist. Um dies zu vermeiden, können Sie `overscroll-behavior-x: contain` auf die innere Box setzen:

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

- [Übernehmen Sie die Kontrolle über Ihren Scroll: Anpassung von Pull-to-Refresh und Überlaufeffekten](https://developer.chrome.com/blog/overscroll-behavior/#full-demo)
- Die zugeordneten logischen Eigenschaften: {{cssxref("overscroll-behavior-inline")}}, {{cssxref("overscroll-behavior-block")}}
