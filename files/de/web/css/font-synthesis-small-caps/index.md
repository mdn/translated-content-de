---
title: font-synthesis-small-caps
slug: Web/CSS/font-synthesis-small-caps
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

Die **`font-synthesis-small-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen festzulegen, ob der Browser eine Small-Caps-Schriftart synthetisieren darf, wenn diese in einer Schriftfamilie fehlt. Small-Caps-Glyphen verwenden in der Regel die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftartensynthesewerte zu steuern.

## Syntax

```css
/* Keyword values */
font-synthesis-small-caps: auto;
font-synthesis-small-caps: none;

/* Global values */
font-synthesis-small-caps: inherit;
font-synthesis-small-caps: initial;
font-synthesis-small-caps: revert;
font-synthesis-small-caps: revert-layer;
font-synthesis-small-caps: unset;
```

### Werte

- `auto`
  - : Gibt an, dass die fehlende Small-Caps-Schriftart bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese der fehlenden Small-Caps-Schriftart durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese von Small-Caps-Schriftarten

Dieses Beispiel zeigt, wie die Synthese der Small-Caps-Schriftart durch den Browser in der `Montserrat`-Schriftart deaktiviert wird.

#### HTML

```html
<p class="english">
  These are the default <span class="small-caps">small-caps</span>,
  <strong>bold</strong>, and <em>oblique</em> typefaces.
</p>

<p class="english no-syn">
  The <span class="small-caps">small-caps</span> typeface is turned off here but
  not the <strong>bold</strong> and <em>oblique</em> typefaces.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.small-caps {
  font-variant: small-caps;
}
.no-syn {
  font-synthesis-small-caps: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of small-caps typeface', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [font-synthesis](/de/docs/Web/CSS/font-synthesis) Shorthand, [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style), [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-weight")}}
- [CanvasRenderingContext2D: fontVariantCaps-Eigenschaft](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
