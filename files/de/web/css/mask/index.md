---
title: mask
slug: Web/CSS/mask
l10n:
  sourceCommit: 64d85b74ce1cce6a24ae8979da4f3f4a01a47229
---

{{CSSRef}}

Die **`mask`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem sie das Bild an bestimmten Stellen maskiert oder ausschneidet.

> [!NOTE]
> Neben den unten aufgeführten Eigenschaften setzt das `mask` Shorthand auch {{cssxref("mask-border")}} auf seinen Initialwert zurück. Es wird daher empfohlen, das `mask` Shorthand zu verwenden, anstatt andere Shorthands oder die einzelnen Eigenschaften zu nutzen, um alle Maskeneinstellungen früher in der Kaskade zu überschreiben. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wurde, um den neuen Stilen Platz zu machen.

## Bestandteileigenschaften

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
  - : Legt die Maskenbildquelle fest. Siehe {{cssxref("mask-image")}}.
- `<masking-mode>`
  - : Legt den Maskierungsmodus des Maskenbildes fest. Siehe {{cssxref("mask-mode")}}.
- `<position>`
  - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
- `<bg-size>`
  - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
- `<repeat-style>`
  - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
- `<geometry-box>`
  - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, setzt er sowohl {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}}. Wenn zwei `<geometry-box>`-Werte vorhanden sind, setzt der erste {{cssxref("mask-origin")}} und der zweite {{cssxref("mask-clip")}}.
- `<geometry-box> | no-clip`
  - : Legt das Gebiet fest, das von dem Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
- `<compositing-operator>`
  - : Legt die Kompositionsoperation fest, die auf der aktuellen Maskenschicht verwendet wird. Siehe {{cssxref("mask-composite")}}.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskierung eines Bildes

```css
.target {
  mask: url(#c1) luminance;
}

.another-target {
  mask: url(resources.svg#c1) 50px 30px/10px 10px repeat-x exclude;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-path")}}
- {{CSSxRef("filter")}}
- SVG-Attribut {{SVGAttr("mask")}}
- [CSS Shapes, Clipping und Masking – und wie sie zu verwenden sind](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [SVG-Effekte auf HTML-Inhalt anwenden](/de/docs/Web/SVG/Applying_SVG_effects_to_HTML_content)
