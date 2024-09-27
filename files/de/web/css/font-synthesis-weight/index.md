---
title: font-synthesis-weight
slug: Web/CSS/font-synthesis-weight
l10n:
  sourceCommit: 28368ab728eed206d9069f5ba5b889e990ff810c
---

{{CSSRef}}

Die **`font-synthesis-weight`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, festzulegen, ob der Browser den fetten Schriftschnitt synthetisieren darf, wenn dieser in einer Schriftfamilie fehlt.

Es ist oft praktisch, die Kurzform-Eigenschaft {{cssxref("font-synthesis")}} zu verwenden, um alle Schriftabschnitts-Synthese-Werte zu steuern.

## Syntax

```css
/* Keyword values */
font-synthesis-weight: auto;
font-synthesis-weight: none;

/* Global values */
font-synthesis-weight: inherit;
font-synthesis-weight: initial;
font-synthesis-weight: revert;
font-synthesis-weight: revert-layer;
font-synthesis-weight: unset;
```

### Werte

- `auto`
  - : Gibt an, dass der fehlende fette Schriftschnitt vom Browser bei Bedarf synthetisiert werden darf.
- `none`
  - : Gibt an, dass die Synthese des fehlenden fetten Schriftschnitts durch den Browser nicht erlaubt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deaktivieren der Synthese des fetten Schriftschnitts

Dieses Beispiel zeigt, wie die Synthese des fetten Schriftschnitts durch den Browser in der Schriftart `Montserrat` deaktiviert wird.

#### HTML

```html
<p class="english">
  This is the default <strong>bold typeface</strong> and
  <em>oblique typeface</em>.
</p>

<p class="english no-syn">
  The <strong>bold typeface</strong> is turned off here but not the
  <em>oblique typeface</em>.
</p>
```

#### CSS

```css
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.english {
  font-family: "Montserrat", sans-serif;
}
.no-syn {
  font-synthesis-weight: none;
}
```

#### Ergebnis

{{EmbedLiveSample('Disabling synthesis of bold typeface', '', '100')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [font-synthesis](/de/docs/Web/CSS/font-synthesis) Kurzform, [font-synthesis-small-caps](/de/docs/Web/CSS/font-synthesis-small-caps), [font-synthesis-style](/de/docs/Web/CSS/font-synthesis-style)
- {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}
