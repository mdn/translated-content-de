---
title: line-clamp
slug: Web/CSS/line-clamp
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`line-clamp`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, den Inhalt eines {{Glossary("block", "Block")}}-Elements auf eine angegebene Anzahl von Zeilen zu begrenzen.

> [!NOTE]
> Für die Unterstützung älterer Browser funktioniert die Anbieterpräfix-Eigenschaft `-webkit-line-clamp` nur in Kombination mit der {{cssxref("display")}}-Eigenschaft, die auf `-webkit-box` oder `-webkit-inline-box` gesetzt ist, und der {{cssxref("box-orient", "-webkit-box-orient")}}-Eigenschaft, die auf `vertical` gesetzt ist. Obwohl diese gepraiften Eigenschaften veraltet sind, ist die Ko-Abhängigkeit dieser drei Eigenschaften ein vollständig spezifiziertes Verhalten und wird weiterhin unterstützt.

In den meisten Fällen möchten Sie wahrscheinlich auch {{cssxref("overflow")}} auf `hidden` setzen, andernfalls wird der Inhalt nicht abgeschnitten, aber ein Auslassungszeichen wird dennoch nach der angegebenen Anzahl von Zeilen angezeigt.

Wenn auf Ankerelemente angewendet, kann die Kürzung in der Mitte des Textes erfolgen, nicht unbedingt am Ende.

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
  - : Dieser Wert gibt an, dass der Inhalt nicht begrenzt wird.
- {{cssxref("integer")}}
  - : Dieser Wert gibt die Anzahl der Zeilen an, nach denen der Inhalt abgeschnitten wird. Er muss größer als 0 sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Kürzen eines Absatzes

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
