---
title: image-rendering
slug: Web/CSS/image-rendering
l10n:
  sourceCommit: 2a88f593fc1c4bc2fffb81d8cd8eaa4a5afff8e6
---

{{CSSRef}}

Die **`image-rendering`**-Eigenschaft von [CSS](/de/docs/Web/CSS) setzt einen Algorithmus zur Bildskalierung. Die Eigenschaft gilt für das Element selbst, für alle in seinen anderen Eigenschaften gesetzten Bilder und für seine Nachkommen.

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

Der {{Glossary("user_agent", "User Agent")}} skaliert ein Bild, wenn der Seitenautor Abmessungen angibt, die von seiner natürlichen Größe abweichen. Skalierung kann auch durch Benutzerinteraktionen (z.B. Zoomen) erfolgen. Zum Beispiel, wenn die natürliche Größe eines Bildes `100×100px` beträgt, aber seine tatsächlichen Abmessungen `200×200px` (oder `50×50px`) sind, wird das Bild mithilfe des durch `image-rendering` angegebenen Algorithmus hoch- oder herunterskaliert. Diese Eigenschaft hat keinen Effekt auf nicht skalierte Bilder.

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
  - : Der Skalierungsalgorithmus ist UA-abhängig. Ab Version 1.9 (Firefox 3.0) verwendet Gecko eine _bilineare_ Resampling-Methode (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der das Erscheinungsbild des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen akzeptabel, die Farben "glätten", wie bilineare Interpolation. Dies ist für Bilder wie Fotos gedacht.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie "nächster Nachbar" skaliert, der Kontrast und Kanten im Bild erhält. Allgemein gedacht für Bilder wie Pixelkunst oder Liniendarstellungen, ohne Verwischung oder Farbschmierung.
- `pixelated`
  - : Das Bild wird mit dem "nächster Nachbar"-Algorithmus oder einem ähnlichen auf die nächste ganze Vielfache der ursprünglichen Bildgröße skaliert und dann mit glatter Interpolation auf die endgültige gewünschte Größe gebracht. Dies soll ein "verpixelt" Aussehen bewahren, ohne Skalierungsartefakte einzuführen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der ursprünglichen ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorhanden sind (und von ihrem SVG-Pendant {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die Werte `smooth` bzw. `pixelated` definiert.

> [!NOTE]
> Das [CSS images](/de/docs/Web/CSS/CSS_images)-Modul definiert einen `high-quality`-Wert für die `image-rendering`-Eigenschaft, um eine Präferenz für höherwertige Skalierung bereitzustellen. Dieser wird jedoch in keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Bildskalierungsalgorithmen

In diesem Beispiel wird ein Bild dreimal wiederholt, wobei jedem ein anderer `image-rendering`-Wert zugewiesen wird.

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
- [CSS images](/de/docs/Web/CSS/CSS_images) Modul
- SVG {{SVGAttr("image-rendering")}} Attribut
