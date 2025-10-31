---
title: font-synthesis-small-caps
slug: Web/CSS/Reference/Properties/font-synthesis-small-caps
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`font-synthesis-small-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, festzulegen, ob der Browser einen Small-Caps-Schriftgrad synthetisieren darf, wenn dieser in einer Schriftfamilie fehlt. Small-Caps-Glyphen verwenden typischerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.

Es ist oft praktisch, die Kurzschreibweiseigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftgrad-Synthesewerte zu steuern.

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
  - : Gibt an, dass der fehlende Small-Caps-Schriftgrad bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese des fehlenden Small-Caps-Schriftgrads durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese von Small-Caps-Schriftgrad

Dieses Beispiel zeigt, wie die Synthese des Small-Caps-Schriftgrads durch den Browser bei der Schrift `Montserrat` deaktiviert wird.

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
@import "https://fonts.googleapis.com/css2?family=Montserrat&display=swap";

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

- [font-synthesis](/de/docs/Web/CSS/Reference/Properties/font-synthesis) Kurzform, [font-synthesis-style](/de/docs/Web/CSS/Reference/Properties/font-synthesis-style), [font-synthesis-weight](/de/docs/Web/CSS/Reference/Properties/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-weight")}}
- [CanvasRenderingContext2D: fontVariantCaps property](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
