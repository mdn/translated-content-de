---
title: font-synthesis-style
slug: Web/CSS/font-synthesis-style
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

Die **`font-synthesis-style`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, festzulegen, ob der Browser die schrägen Schriftarten synthetisieren darf, wenn sie in einer Schriftfamilie fehlen.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Werte der Schriftartensynthese zu steuern.

## Syntax

```css
/* Keyword values */
font-synthesis-style: auto;
font-synthesis-style: none;

/* Global values */
font-synthesis-style: inherit;
font-synthesis-style: initial;
font-synthesis-style: revert;
font-synthesis-style: revert-layer;
font-synthesis-style: unset;
```

### Werte

- `auto`
  - : Gibt an, dass die fehlende schräge Schriftart bei Bedarf vom Browser synthetisiert werden kann.
- `none`
  - : Gibt an, dass die Synthetisierung der fehlenden schrägen Schriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese von schrägen Schriftarten

Dieses Beispiel zeigt, wie die Synthese der schrägen Schriftart durch den Browser in der `Montserrat` Schriftart deaktiviert wird.

#### HTML

```html
<p class="english">
  This is the default <em>oblique typeface</em> and
  <strong>bold typeface</strong>.
</p>

<p class="english no-syn">
  The <em>oblique typeface</em> is turned off here but not the
  <strong>bold typeface</strong>.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-style: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [font-synthesis](/de/docs/Web/CSS/font-synthesis) Kurzschreibweise, [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
