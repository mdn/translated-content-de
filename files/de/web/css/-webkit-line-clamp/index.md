---
title: "-webkit-line-clamp"
slug: Web/CSS/-webkit-line-clamp
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`-webkit-line-clamp`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht das Begrenzen des Inhalts eines [Block](/de/docs/Glossary/block) auf die angegebene Anzahl von Zeilen.

Sie funktioniert nur in Kombination mit der {{cssxref("display")}} Eigenschaft, die auf `-webkit-box` oder `-webkit-inline-box` eingestellt ist, und der {{cssxref("box-orient", "-webkit-box-orient")}} Eigenschaft, die auf `vertical` gesetzt ist. Trotz ihrer Veralterung ist die Abhängigkeit dieser drei Eigenschaften vollständig spezifiziert und wird weiterhin unterstützt.

In den meisten Fällen sollten Sie auch {{cssxref("overflow")}} auf `hidden` setzen, da ansonsten der Inhalt nicht abgeschnitten wird, aber ein Ellipse nach der festgelegten Anzahl von Zeilen angezeigt wird.

Wenn sie auf Ankerelemente angewendet wird, kann die Trunkierung in der Mitte des Textes erfolgen, nicht unbedingt am Ende.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in WebKit implementiert und weist einige Probleme auf, wie zum Beispiel die Abhängigkeit von zwei weiteren veralteten Eigenschaften. Sie wurde im [CSS Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef--webkit-line-clamp) für die Unterstützung älterer Versionen standardisiert. Das CSS Overflow Module Level 4 definiert auch eine {{cssxref("line-clamp")}} Eigenschaft, die dazu gedacht ist, diese Eigenschaft zu ersetzen und ihre Probleme zu vermeiden. Allerdings unterstützen alle Browser, die `line-clamp` unterstützen, aus Kompatibilitätsgründen auch `-webkit-line-clamp`.

## Syntax

```css
/* Keyword value */
-webkit-line-clamp: none;

/* <integer> values */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* Global values */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: revert;
-webkit-line-clamp: revert-layer;
-webkit-line-clamp: unset;
```

### Werte

- `none`
  - : Dieser Wert gibt an, dass der Inhalt nicht begrenzt wird.
- {{cssxref("integer")}}
  - : Dieser Wert legt die Anzahl der Zeilen fest, nach denen der Inhalt begrenzt wird. Er muss größer als 0 sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Einen Absatz kürzen

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
- {{cssxref("line-clamp")}}
