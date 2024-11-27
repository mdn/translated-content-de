---
title: font-synthesis-position
slug: Web/CSS/font-synthesis-position
l10n:
  sourceCommit: c1fd7dc9410c14ec9e00b3ec35b7b94d43296389
---

{{CSSRef}}{{SeeCompatTable}}

Die **`font-synthesis-position`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen zu spezifizieren, ob ein Browser fehlende "Position"-Schriftschnitte wie Tief- und Hochstellung innerhalb einer Schriftfamilie synthetisieren darf, während {{cssxref("font-variant-position")}} verwendet wird, um die Positionen festzulegen.

Die **`font-synthesis-position`**-Eigenschaft hat keine Auswirkung, wenn die {{htmlelement("sup")}} und {{htmlelement("sub")}} Elemente verwendet werden.

Es ist oft praktisch, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftschnitt-Synthese-Werte zu steuern.

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
  - : Gibt an, dass ein fehlender Positions-Schriftschnitt bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese eines fehlenden Positions-Schriftschnitts durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese von Positions-Schriftarten

Dieses Beispiel zeigt, wie die Synthese der hochgestellten und tiefgestellten Schriftschnitte durch den Browser in der `Montserrat`-Schriftart ausgeschaltet wird.

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

- {{cssxref("font-synthesis")}} Kurzschreibweise, {{cssxref("font-synthesis-style")}}, {{cssxref("font-synthesis-weight")}}
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-weight")}}
