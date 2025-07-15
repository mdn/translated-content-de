---
title: font-synthesis-small-caps
slug: Web/CSS/font-synthesis-small-caps
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`font-synthesis-small-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es Ihnen, anzugeben, ob der Browser eine Kleinbuchstaben-Schriftart bei Fehlen in einer Schriftfamilie synthetisieren darf oder nicht. Kleinbuchstaben-Glyphen verwenden normalerweise die Form von Großbuchstaben, sind jedoch auf die Größe von Kleinbuchstaben reduziert.

Es ist oft bequem, die Kurzform-Eigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Werte der Schriftartensynthese zu steuern.

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
  - : Gibt an, dass der fehlende Kleinbuchstaben-Schriftstil bei Bedarf vom Browser synthetisiert werden kann.
- `none`
  - : Gibt an, dass die Synthese des fehlenden Kleinbuchstaben-Schriftstils durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivierung der Synthese des Kleinbuchstaben-Schriftstils

Dieses Beispiel zeigt, wie die Synthese des Kleinbuchstaben-Schriftstils durch den Browser in der `Montserrat`-Schrift deaktiviert wird.

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

- [font-synthesis](/de/docs/Web/CSS/font-synthesis) Kurzform, [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style), [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-weight")}}
- [CanvasRenderingContext2D: fontVariantCaps property](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
