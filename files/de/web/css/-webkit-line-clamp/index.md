---
title: "-webkit-line-clamp"
slug: Web/CSS/-webkit-line-clamp
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`-webkit-line-clamp`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, den Inhalt eines {{Glossary("block", "Blocks")}} auf die angegebene Anzahl von Zeilen zu begrenzen.

Sie funktioniert nur in Kombination mit der {{cssxref("display")}} Eigenschaft, die auf `-webkit-box` oder `-webkit-inline-box` gesetzt ist, und der {{cssxref("box-orient", "-webkit-box-orient")}} Eigenschaft, die auf `vertical` gesetzt ist. Trotz ihres veralteten Status ist die gegenseitige Abhängigkeit dieser drei Eigenschaften vollständig spezifiziert und wird weiterhin unterstützt.

In den meisten Fällen möchten Sie auch {{cssxref("overflow")}} auf `hidden` setzen, da sonst der Inhalt nicht abgeschnitten wird, aber ein Auslassungszeichen dennoch nach der angegebenen Anzahl von Zeilen angezeigt wird.

Wenn sie auf Ankerelemente angewendet wird, kann das Abschneiden in der Mitte des Textes erfolgen, nicht unbedingt am Ende.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in WebKit implementiert und hat einige Probleme, wie zum Beispiel die Abhängigkeit von zwei anderen älteren Eigenschaften. Sie wurde im [CSS Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef--webkit-line-clamp) für Legacy-Unterstützung standardisiert. Das CSS Overflow Module Level 4 definiert auch eine {{cssxref("line-clamp")}} Eigenschaft, die diese Eigenschaft ersetzen und ihre Probleme vermeiden soll. Alle Browser, die `line-clamp` unterstützen, werden jedoch auch `-webkit-line-clamp` aus Kompatibilitätsgründen unterstützen.

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
  - : Dieser Wert gibt an, dass der Inhalt nicht abgeschnitten wird.
- {{cssxref("integer")}}
  - : Dieser Wert gibt die Anzahl der Zeilen an, nach denen der Inhalt abgeschnitten wird. Es muss größer als 0 sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Abschneiden eines Absatzes

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
