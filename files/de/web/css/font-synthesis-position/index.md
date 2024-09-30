---
title: font-synthesis-position
slug: Web/CSS/font-synthesis-position
l10n:
  sourceCommit: a6cac9db700637ac004a3608a7b5003c1c0ef8f8
---

{{CSSRef}}

Die **`font-synthesis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen festzulegen, ob ein Browser die Tief- und Hochstellungsschriftarten synthetisieren darf, wenn sie in einer Schriftfamilie fehlen, während {{cssxref("font-variant-position")}} zum Festlegen der Positionen verwendet wird.

Die **`font-synthesis-position`** Eigenschaft hat keine Wirkung bei der Verwendung der {{htmlelement("sup")}} und {{htmlelement("sub")}} Elemente.

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftart-Synthese-Werte zu steuern.

## Syntax

```css
/* Keyword values */
font-synthesis-position: auto;
font-synthesis-position: none;

/* Global values */
font-synthesis-position: inherit;
font-synthesis-position: initial;
font-synthesis-position: revert;
font-synthesis-position: revert-layer;
font-synthesis-position: unset;
```

### Werte

- `auto`
  - : Gibt an, dass eine fehlende Positionsschriftart bei Bedarf vom Browser synthetisiert werden kann.
- `none`
  - : Gibt an, dass die Synthese einer fehlenden Positionsschriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese von Positionsschriftarten

Dieses Beispiel zeigt die Deaktivierung der Synthese von Hoch- und Tiefstellungsschriftarten durch den Browser in der `Montserrat`-Schrift.

#### HTML

```html
<p>
  These are the default position <span class="super">superscript</span>,
  position <span class="sub">subscript</span>, <strong>bold</strong> and
  <em>oblique</em> typefaces.
</p>

<p class="no-syn">
  The positions <span class="super">superscript</span> and
  <span class="sub">subscript</span> typeface is turned off here but not the
  <strong>bold</strong> and <em>oblique</em> typefaces (on browsers that support
  <code>font-synthesis-position</code>).
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}
.super {
  font-variant-position: super;
}
.sub {
  font-variant-position: sub;
}
.no-syn {
  font-synthesis-position: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of position typeface', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-synthesis")}} Kurzform, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
