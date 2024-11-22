---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Standardmäßig wird der Alphakanal des Maskenbildes mit dem Alphakanal des Elements multipliziert. Dies kann mit der {{cssxref("mask-mode")}} Eigenschaft gesteuert werden.

## Syntax

```css
/* Keyword value */
mask-image: none;

/* <mask-source> value */
mask-image: url(masks.svg#mask1);

/* <image> values */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
mask-image: image(url(mask.png), skyblue);

/* Multiple values */
mask-image: image(url(mask.png), skyblue),
  linear-gradient(rgb(0 0 0 / 100%), transparent);

/* Global values */
mask-image: inherit;
mask-image: initial;
mask-image: revert;
mask-image: revert-layer;
mask-image: unset;
```

### Werte

- `none`

  - : Dieses Schlüsselwort wird als transparente schwarze Bildschicht interpretiert.

- `<mask-source>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis auf eine {{SVGElement("mask")}} oder auf ein CSS-Bild.

    > [!NOTE]
    > Aufgrund der {{Glossary("CORS", "CORS")}}-Richtlinie werden nur Bildquellen akzeptiert, die über HTTP- und HTTPS-Protokolle bereitgestellt werden. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert. Um URL-Bildquellen lokal zu testen, richten Sie [einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

In den folgenden Fällen wird die Maske als transparente schwarze Bildschicht gezählt:

- das Maskenbild ist leer (Breite oder Höhe ist null)
- das Maskenbild kann nicht heruntergeladen werden
- das Maskenbildformat wird vom Browser nicht unterstützt
- das Maskenbild existiert nicht
- der Maskenwert zeigt nicht auf ein Maskenbild

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen eines Maskenbildes mit einer URL und einem Verlauf

```html live-sample___mask-image-example
<div class="masked"></div>
```

```css live-sample___mask-image-example
.masked {
  width: 200px;
  height: 200px;
  mask-repeat: no-repeat;
  mask-size: 100%;

  background: red;
  mask-image: url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg),
    radial-gradient(transparent 50%, black);
}
```

{{EmbedLiveSample("mask-image-example", "100%", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
- [Effekte auf Bilder anwenden mit der CSS-Eigenschaft `mask-image`](https://web.dev/articles/css-masking)
