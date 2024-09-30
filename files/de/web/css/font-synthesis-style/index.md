---
title: font-synthesis-style
slug: Web/CSS/font-synthesis-style
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

Die **`font-synthesis-style`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen zu spezifizieren, ob der Browser den oblique Schriftschnitt synthetisieren darf, wenn er in einer Schriftfamilie fehlt.

Es ist oft bequem, die Kurzschreibweise {{cssxref("font-synthesis")}} zu verwenden, um alle Typenschnitt-Synthesewerte zu steuern.

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
  - : Gibt an, dass der fehlende oblique Schriftschnitt bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass das Synthetisieren des fehlenden oblique Schriftschnitts durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese des obliquen Schriftschnitts

Dieses Beispiel zeigt, wie die Synthese des obliquen Schriftschnitts durch den Browser in der `Montserrat` Schriftart deaktiviert wird.

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
