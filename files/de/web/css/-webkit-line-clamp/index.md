---
title: "-webkit-line-clamp"
slug: Web/CSS/-webkit-line-clamp
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`-webkit-line-clamp`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht die Begrenzung des Inhalts eines {{Glossary("block")}} auf die angegebene Anzahl von Zeilen.

Sie funktioniert nur in Kombination mit der {{cssxref("display")}}-Eigenschaft, die auf `-webkit-box` oder `-webkit-inline-box` gesetzt ist, und der {{cssxref("box-orient", "-webkit-box-orient")}}-Eigenschaft, die auf `vertical` gesetzt ist. Obwohl sie veraltet sind, ist die Abhängigkeit dieser drei Eigenschaften vollständig spezifiziertes Verhalten und wird weiterhin unterstützt.

In den meisten Fällen möchten Sie auch {{cssxref("overflow")}} auf `hidden` setzen, da ansonsten der Inhalt nicht abgeschnitten wird, aber trotzdem ein Auslassungszeichen nach der angegebenen Anzahl von Zeilen angezeigt wird.

Beim Anwenden auf Ankerelemente kann das Trennen in der Mitte des Textes und nicht unbedingt am Ende erfolgen.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in WebKit implementiert und hat einige Probleme, wie die Abhängigkeit von zwei anderen veralteten Eigenschaften. Sie wurde im [CSS Overflow Module Level 4](https://drafts.csswg.org/css-overflow-4/#propdef--webkit-line-clamp) für die Unterstützung von Legacy-Anwendungen standardisiert. Das CSS Overflow Module Level 4 definiert auch eine {{cssxref("line-clamp")}}-Eigenschaft, die diese Eigenschaft ersetzen und ihre Probleme vermeiden soll. Allerdings werden alle Browser, die `line-clamp` unterstützen, auch `-webkit-line-clamp` aus Kompatibilitätsgründen unterstützen.

## Syntax

```css
/* Schlüsselwortwert */
-webkit-line-clamp: none;

/* <integer>-Werte */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* Globale Werte */
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
  - : Dieser Wert gibt die Anzahl der Zeilen an, nach denen der Inhalt begrenzt wird. Er muss größer als 0 sein.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Kürzen eines Absatzes

#### HTML

```html
<p>
  In diesem Beispiel ist die <code>-webkit-line-clamp</code>-Eigenschaft auf
  <code>3</code> gesetzt, was bedeutet, dass der Text nach drei Zeilen
  abgeschnitten wird. An der Stelle, an der der Text gekürzt wird, wird ein
  Auslassungszeichen angezeigt.
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
