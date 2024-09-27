---
title: mask
slug: Web/CSS/mask
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`mask`**-[CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem sie das Bild an bestimmten Punkten maskiert oder ausschneidet.

> [!NOTE]
> Neben den unten aufgeführten Eigenschaften setzt die `mask`-Kurzform auch {{cssxref("mask-border")}} auf ihren Anfangswert zurück. Es wird daher empfohlen, die `mask`-Kurzform anstelle anderer Kurzformen oder der einzelnen Eigenschaften zu verwenden, um alle Maskeneinstellungen, die früher in der Kaskade vorgenommen wurden, zu überschreiben. Dies stellt sicher, dass auch `mask-border` zurückgesetzt wurde, sodass die neuen Stile wirksam werden können.

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`mask-clip`](/de/docs/Web/CSS/mask-clip)
- [`mask-composite`](/de/docs/Web/CSS/mask-composite)
- [`mask-image`](/de/docs/Web/CSS/mask-image)
- [`mask-mode`](/de/docs/Web/CSS/mask-mode)
- [`mask-origin`](/de/docs/Web/CSS/mask-origin)
- [`mask-position`](/de/docs/Web/CSS/mask-position)
- [`mask-repeat`](/de/docs/Web/CSS/mask-repeat)
- [`mask-size`](/de/docs/Web/CSS/mask-size)

## Syntax

```css
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* Pixel image used as mask */
mask: url(masks.svg#star); /* Element within SVG graphic used as mask */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Element within SVG graphic used as luminance mask */
mask: url(masks.svg#star) 40px 20px; /* Element within SVG graphic used as mask positioned 40px from the top and 20px from the left */
mask: url(masks.svg#star) 0 0/50px 50px; /* Element within SVG graphic used as mask with a width and height of 50px */
mask: url(masks.svg#star) repeat-x; /* Element within SVG graphic used as horizontally repeated mask */
mask: url(masks.svg#star) stroke-box; /* Element within SVG graphic used as mask extending to the box enclosed by the stroke */
mask: url(masks.svg#star) exclude; /* Element within SVG graphic used as mask and combined with background using non-overlapping parts */

/* Global values */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;

/* Multiple masks */
mask:
  url(masks.svg#star) left / 16px repeat-y,
  /* Element within SVG graphic is used as a mask on the left-hand side with a width of 16px */
    url(masks.svg#circle) right / 16px repeat-y; /* Element within SVG graphic is used as a mask on the right-hand side with a width of 16px */
```

### Werte

- `<mask-reference>`
  - : Legt die Quellbildquelle der Maske fest. Siehe {{cssxref("mask-image")}}.
- `<masking-mode>`
  - : Legt den Maskierungsmodus für das Maskenbild fest. Siehe {{cssxref("mask-mode")}}.
- `<position>`
  - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
- `<bg-size>`
  - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
- `<repeat-style>`
  - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
- `<geometry-box>`
  - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, legt er sowohl {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}} fest. Bei zwei `<geometry-box>`-Werten legt der erste {{cssxref("mask-origin")}} und der zweite {{cssxref("mask-clip")}} fest.
- `<geometry-box> | no-clip`
  - : Legt den Bereich fest, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
- `<compositing-operator>`
  - : Legt die auf die aktuelle Maskenebene angewandte Kompositionsoperation fest. Siehe {{cssxref("mask-composite")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Grafik maskieren

```css
.target {
  mask: url(#c1) luminance;
}

.anothertarget {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [CSS Shapes, Clipping und Maskierung – und wie man sie verwendet](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
- [SVG](/de/docs/Web/SVG)
