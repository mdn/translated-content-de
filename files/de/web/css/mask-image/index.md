---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenebene für ein Element verwendet wird. Standardmäßig wird der Alphakanal des Maskenbildes mit dem Alphakanal des Elements multipliziert. Dies kann mit der {{cssxref("mask-mode")}} Eigenschaft gesteuert werden.

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

  - : Dieses Schlüsselwort wird als transparente schwarze Bildebene interpretiert.

- `<mask-source>`

  - : Ein {{cssxref("url_value", "&lt;url&gt;")}} Verweis zu einer {{SVGElement("mask")}} oder zu einem CSS-Bild.

    > [!NOTE]
    > Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden aufgrund der [CORS](/de/docs/Glossary/CORS) Richtlinie akzeptiert. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenebene verwendet wird.

In den folgenden Fällen wird die Maske als transparente schwarze Bildebene gezählt:

- das Maskenbild ist leer (Breite oder Höhe gleich null)
- das Maskenbild kann nicht heruntergeladen werden
- das Maskenbildformat wird vom Browser nicht unterstützt
- das Maskenbild existiert nicht
- der Maskenwert verweist nicht auf ein Maskenbild

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Maskenbildes mit einer URL und einem Verlauf

```html
<div class="masked"></div>
```

```css
.masked {
  width: 200px;
  height: 200px;
  mask-repeat: no-repeat;
  mask-size: 100%;

  background: red;
  mask-image: url(star.svg), radial-gradient(transparent 50%, black);
}
```

{{EmbedLiveSample("Festlegen eines Maskenbildes mit einer URL", "100%", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Maskierung in CSS](https://css-tricks.com/clipping-masking-css/)
- [Effekte auf Bilder mit der CSS-Eigenschaft mask-image anwenden](https://web.dev/articles/css-masking)
