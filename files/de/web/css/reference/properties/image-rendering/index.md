---
title: "`image-rendering` CSS property"
short-title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`image-rendering`**-Eigenschaft von [CSS](/de/docs/Web/CSS) legt einen Bildskalierungsalgorithmus fest. Die Eigenschaft gilt für das Element selbst, für alle Bilder, die in seinen anderen Eigenschaften festgelegt sind, sowie für seine Nachfahren.

{{InteractiveExample("CSS Demo: image-rendering")}}

```css interactive-example-choice
image-rendering: auto;
```

```css interactive-example-choice
image-rendering: smooth;
```

```css interactive-example-choice
image-rendering: crisp-edges;
```

```css interactive-example-choice
image-rendering: pixelated;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/lizard.png" />
</section>
```

```css interactive-example
#example-element {
  height: 480px;
  object-fit: cover;
}
```

Der {{Glossary("user_agent", "User-Agent")}} skaliert ein Bild, wenn der Seitenautor Abmessungen angibt, die von der natürlichen Größe abweichen. Skalierung kann auch durch Benutzerinteraktion (Zoomen) erfolgen. Wenn beispielsweise die natürliche Größe eines Bildes `100×100px` ist, seine tatsächlichen Abmessungen jedoch `200×200px` (oder `50×50px`) betragen, dann wird das Bild mit dem durch `image-rendering` angegebenen Algorithmus vergrößert (oder verkleinert) skaliert. Diese Eigenschaft hat keine Auswirkung auf nicht skalierte Bilder.

## Syntax

```css
/* Keyword values */
image-rendering: auto;
image-rendering: smooth;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Global values */
image-rendering: inherit;
image-rendering: initial;
image-rendering: revert;
image-rendering: revert-layer;
image-rendering: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Schlüsselwort-Werte angegeben:

- `auto`
  - : Der Skalierungsalgorithmus ist UA-abhängig. Seit Version 1.9 (Firefox 3.0) verwendet Gecko _bilineare_ Resampling (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der die Erscheinung des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen akzeptabel, die Farben "glätten", wie zum Beispiel die bilineare Interpolation. Dies ist für Bilder wie Fotos gedacht.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie "nächster Nachbar" skaliert, der Kontrast und Kanten im Bild bewahrt. Allgemein vorgesehen für Bilder wie Pixelkunst oder Strichzeichnungen, es tritt keine Unschärfe oder Farbglättung auf.
- `pixelated`
  - : Das Bild wird mit dem "nächster Nachbar"- oder einem ähnlichen Algorithmus auf das nächstgelegene ganzzahlige Vielfache der ursprünglichen Bildgröße skaliert und verwendet dann eine glatte Interpolation, um das Bild auf die endgültig gewünschte Größe zu bringen. Dies soll ein "pixeliertes" Aussehen bewahren, ohne Skalierungsartefakte einzuführen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der ursprünglichen Größe ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorhanden sind (und von ihrem SVG-Gegenstück {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die Werte `smooth` bzw. `pixelated` definiert.

> [!NOTE]
> Das [CSS images](/de/docs/Web/CSS/Guides/Images)-Modul definiert einen `high-quality`-Wert für die `image-rendering`-Eigenschaft, um eine Präferenz für hochwertigere Skalierung anzugeben, jedoch wird dies in keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Bildskalierungsalgorithmen

In diesem Beispiel wird ein Bild viermal wiederholt, wobei jedem ein anderer `image-rendering`-Wert zugewiesen wird.

```html hidden
<div>
  <img
    class="auto"
    alt="A small photo of some white and yellow flower against a leafy green background. The image is about 33% smaller than the size it is being displayed at. This upscaling causes the image to appear blurry, with notable soft edges between objects."
    src="blumen.jpg" />
  <img
    class="smooth"
    alt="The same photo as the previous image, which is also being upscaled the same amount. Browsers that support the smooth value for the image-rendering property display the image with the maximize appearance."
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="The same photo as the previous image, which is also being upscaled the same amount. Browsers that support the pixelated value for the image-rendering property display the image as very pixelated. Individual pixels are clearly visible and edges appear much sharper."
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="The same photo as the previous images, which is also being upscaled the same amount. Browsers that support the crisp-edges value for the image-rendering property display the image as very pixelated. In these examples, there is virtually no perceivable difference between the pixelated and crisp-edges versions."
    src="blumen.jpg" />
</div>
```

```css hidden
img {
  height: 200px;
}
```

#### CSS

```css
.auto {
  image-rendering: auto;
}

.smooth {
  image-rendering: smooth;
}

.pixelated {
  image-rendering: pixelated;
}

.crisp-edges {
  image-rendering: crisp-edges;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_image_scaling_algorithms', 260, 260)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}
- {{cssxref("image-orientation")}}
- {{cssxref("image-resolution")}}
- [CSS images](/de/docs/Web/CSS/Guides/Images) Modul
- SVG {{SVGAttr("image-rendering")}} Attribut
