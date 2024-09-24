---
title: font-synthesis-small-caps
slug: Web/CSS/font-synthesis-small-caps
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

Die **`font-synthesis-small-caps`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen anzugeben, ob der Browser einen kleinen Kapselschriftartstil synthetisieren darf, wenn dieser in einer Schriftfamilie fehlt. Kleine Kapitälchen verwenden typischerweise die Form von Großbuchstaben, werden jedoch auf die Größe von Kleinbuchstaben reduziert.

Es ist oft zweckmäßig, die Kurzschreibweiseigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftartsynthetisierungswerte zu steuern.

## Syntax

```css
/* Schlüsselwortwerte */
font-synthesis-small-caps: auto;
font-synthesis-small-caps: none;

/* Globale Werte */
font-synthesis-small-caps: inherit;
font-synthesis-small-caps: initial;
font-synthesis-small-caps: revert;
font-synthesis-small-caps: revert-layer;
font-synthesis-small-caps: unset;
```

### Werte

- `auto`
  - : Gibt an, dass der fehlende Kapselschriftstil bei Bedarf vom Browser synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese des fehlenden Kapselschriftstils durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese des Kapselschriftstils

Dieses Beispiel zeigt das Abschalten der Synthese des Kapselschriftstils durch den Browser in der Schriftart `Montserrat`.

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

- [font-synthesis](/de/docs/Web/CSS/font-synthesis) Kurzschreibweise, [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style), [font-synthesis-weight](/de/docs/Web/CSS/font-synthesis-weight)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-weight")}}
- [CanvasRenderingContext2D: fontVariantCaps property](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
