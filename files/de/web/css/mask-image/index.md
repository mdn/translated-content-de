---
title: mask-image
slug: Web/CSS/mask-image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`mask-image`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Bild fest, das als Maskenschicht für ein Element verwendet wird. Standardmäßig wird der Alphakanal des Maskenbildes mit dem Alphakanal des Elements multipliziert. Dies kann mit der {{cssxref("mask-mode")}} Eigenschaft gesteuert werden.

## Syntax

```css
/* Schlüsselwortwert */
mask-image: none;

/* <mask-source> Wert */
mask-image: url(masks.svg#mask1);

/* <image> Werte */
mask-image: linear-gradient(rgb(0 0 0 / 100%), transparent);
mask-image: image(url(mask.png), skyblue);

/* Mehrere Werte */
mask-image: image(url(mask.png), skyblue),
  linear-gradient(rgb(0 0 0 / 100%), transparent);

/* Globale Werte */
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
    > Nur Bildquellen, die über HTTP- und HTTPS-Protokolle bereitgestellt werden, werden gemäß der [CORS](/de/docs/Glossary/CORS) Richtlinie akzeptiert. Lokal bereitgestellte Bilder, einschließlich relativer oder absoluter `file://` Protokolle, werden nicht akzeptiert. Um URL-Bildquellen lokal zu testen, [richten Sie einen lokalen Server ein](/de/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection#localhost).

- {{cssxref("&lt;image&gt;")}}
  - : Ein Bildwert, der als Maskenbildschicht verwendet wird.

In den folgenden Fällen wird die Maske als transparente schwarze Bildschicht gezählt:

- das Maskenbild ist leer (null Breite oder null Höhe)
- das Maskenbild wird nicht heruntergeladen
- das Maskenbildformat wird vom Browser nicht unterstützt
- das Maskenbild existiert nicht
- der Maskenwert weist nicht auf ein Maskenbild

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Maskenbild mit einer URL und einem Verlauf festlegen

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

{{EmbedLiveSample("Ein Maskenbild mit einer URL festlegen", "100%", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Clipping und Masking in CSS](https://css-tricks.com/clipping-masking-css/)
- [Effekte auf Bilder anwenden mit der CSS-Eigenschaft mask-image](https://web.dev/articles/css-masking)
