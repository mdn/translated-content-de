---
title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`image-rendering`** [CSS](/de/docs/Web/CSS) Eigenschaft legt einen Bildskalierungsalgorithmus fest. Die Eigenschaft gilt für das Element selbst, für alle in dessen anderen Eigenschaften festgelegten Bilder und für dessen Nachkommen.

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

Der {{Glossary("user_agent", "User Agent")}} skaliert ein Bild, wenn der Seitenautor andere Abmessungen als die natürliche Größe festlegt. Eine Skalierung kann auch aufgrund von Benutzerinteraktionen (Zoom) auftreten. Beispielsweise, wenn die natürliche Größe eines Bildes `100×100px` ist, aber die tatsächlichen Abmessungen `200×200px` (oder `50×50px`) betragen, wird das Bild mit dem durch `image-rendering` angegebenen Algorithmus hoch- oder herunterskaliert. Diese Eigenschaft hat keinen Effekt auf nicht skalierte Bilder.

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

- `auto`
  - : Der Skalierungsalgorithmus ist UA-abhängig. Seit Version 1.9 (Firefox 3.0) verwendet Gecko _bilineares_ Resampling (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der das Erscheinungsbild des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen, die Farben "glätten", akzeptabel, wie z. B. bilineare Interpolation. Dies ist für Bilder wie Fotos gedacht.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie "nächster Nachbar" skaliert, der den Kontrast und die Kanten im Bild bewahrt. Generell für Bilder wie Pixelgrafiken oder Strichzeichnungen gedacht, erfolgt keine Unschärfe oder Farbglättung.
- `pixelated`
  - : Das Bild wird mit dem "nächster Nachbar" oder einem ähnlichen Algorithmus auf das nächste ganze Vielfache der ursprünglichen Bildgröße skaliert, und dann unter Verwendung glatter Interpolation auf die endgültige gewünschte Größe gebracht. Dies soll ein "pixeliges" Aussehen bewahren, ohne Skalierungsartefakte zu erzeugen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der ursprünglichen ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorhanden sind (und von ihrem SVG-Gegenstück {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die Werte `smooth` und `pixelated` definiert.

> [!NOTE]
> Das Modul [CSS Images](/de/docs/Web/CSS/CSS_images) definiert einen `high-quality`-Wert für die `image-rendering`-Eigenschaft, um eine Präferenz für hochqualitative Skalierung bereitzustellen, jedoch wird dies in keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Bildskalierungsalgorithmen

In diesem Beispiel wird ein Bild dreimal wiederholt, wobei jedes Mal ein anderer `image-rendering`-Wert angewendet wird.

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
- [CSS Images](/de/docs/Web/CSS/CSS_images) Modul
- SVG {{SVGAttr("image-rendering")}} Attribut
