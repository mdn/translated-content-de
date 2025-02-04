---
title: line-clamp
slug: Web/CSS/line-clamp
l10n:
  sourceCommit: 58f017d3bc8f78a9469055f1a7f7f3f5befa4447
---

{{CSSRef}}

Die **`line-clamp`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, den Inhalt eines {{Glossary("block", "blocks")}} auf die angegebene Anzahl von Zeilen zu begrenzen.

> [!NOTE]
> Für die Unterstützung älterer Browser funktioniert die Anbieter-präfixierte Eigenschaft `-webkit-line-clamp` nur in Kombination mit der {{cssxref("display")}} Eigenschaft, die auf `-webkit-box` oder `-webkit-inline-box` gesetzt ist, und der {{cssxref("box-orient", "-webkit-box-orient")}} Eigenschaft, die auf `vertical` gesetzt ist. Obwohl diese präfixierten Eigenschaften veraltet sind, ist die Abhängigkeit dieser drei Eigenschaften ein vollständig spezifiziertes Verhalten und wird weiterhin unterstützt.

In den meisten Fällen möchten Sie auch {{cssxref("overflow")}} auf `hidden` setzen, andernfalls wird der Inhalt nicht abgeschnitten, aber es wird trotzdem ein Auslassungszeichen nach der angegebenen Anzahl von Zeilen angezeigt.

Wenn es auf Ankerelemente angewendet wird, kann die Verkürzung in der Mitte des Textes auftreten, nicht unbedingt am Ende.

## Syntax

```css
/* Keyword value */
line-clamp: none;

/* <integer> values */
line-clamp: 3;
line-clamp: 10;

/* Global values */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### Werte

- `none`
  - : Dieser Wert gibt an, dass der Inhalt nicht abgeschnitten wird.
- {{cssxref("integer")}}
  - : Dieser Wert gibt die Anzahl der Zeilen an, nach denen der Inhalt abgeschnitten wird. Dieser muss größer als 0 sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verkürzen eines Absatzes

#### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to
  <code>3</code>, which means the text is clamped after three lines. An ellipsis
  will be shown at the point where the text is clamped.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### Ergebnis

{{EmbedLiveSample("Truncating_a_paragraph", "100%", "130")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Line Clampin' (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
