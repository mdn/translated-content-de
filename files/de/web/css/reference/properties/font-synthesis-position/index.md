---
title: "`font-synthesis-position` CSS property"
short-title: font-synthesis-position
slug: Web/CSS/Reference/Properties/font-synthesis-position
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

{{SeeCompatTable}}

Die **`font-synthesis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Ihnen, festzulegen, ob ein Browser die „Position“-Schriftarten für Tief- und Hochstellungen synthetisieren darf, wenn diese in einer Schriftfamilie fehlen, während Sie {{cssxref("font-variant-position")}} verwenden, um die Positionen festzulegen.

Die **`font-synthesis-position`** Eigenschaft hat keine Auswirkung bei der Verwendung der {{htmlelement("sup")}} und {{htmlelement("sub")}} Elemente.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Werte der Schrifttyp-Synthese zu steuern.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Gibt an, dass eine fehlende Positionsschriftart bei Bedarf vom Browser synthetisiert werden kann.
- `none`
  - : Gibt an, dass die Synthese einer fehlenden Positionsschriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese von Positionsschriftarten

Dieses Beispiel zeigt, wie die Synthese der hoch- und tiefgestellten Schriftarten im Browser bei der Schriftart `Montserrat` deaktiviert wird.

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
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

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

- {{cssxref("font-synthesis")}} Kurzschreibweise, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
