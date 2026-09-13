---
title: "`line-clamp` CSS property"
short-title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
l10n:
  sourceCommit: a5531a7b1fa30ab1de952ffff619a9830eb1c1a9
---

Die **`line-clamp`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht das Begrenzen der Inhalte eines {{Glossary("block", "Blocks")}} auf die angegebene Anzahl von Zeilen.

> [!NOTE]
> Für die Unterstützung älterer Browser funktioniert die herstellerpräfixierte Eigenschaft `-webkit-line-clamp` nur in Kombination mit der {{cssxref("display")}}-Eigenschaft, die auf `-webkit-box` oder `-webkit-inline-box` eingestellt ist, und der {{cssxref("box-orient", "-webkit-box-orient")}}-Eigenschaft, die auf `vertical` eingestellt ist. Obwohl diese präfixierten Eigenschaften veraltet sind, ist die Abhängigkeit dieser drei Eigenschaften voneinander vollständig spezifiziert und wird weiterhin unterstützt.

In den meisten Fällen möchten Sie auch {{cssxref("overflow")}} auf `hidden` setzen, andernfalls wird der Inhalt nicht abgeschnitten, aber ein Auslassungszeichen wird dennoch nach der angegebenen Anzahl von Zeilen angezeigt.

Bei Anwendung auf Ankerelemente kann die Kürzung in der Mitte des Textes erfolgen, nicht unbedingt am Ende.

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

Diese Eigenschaft wird als einzelner Wert aus der folgenden Liste angegeben:

- `none`
  - : Dieser Wert gibt an, dass der Inhalt nicht eingeschränkt wird.
- {{cssxref("integer")}}
  - : Dieser Wert gibt die Anzahl der Zeilen an, nach denen der Inhalt gekürzt wird. Er muss größer als 0 sein.

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
