---
title: image-rendering
slug: Web/CSS/image-rendering
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`image-rendering`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt einen Bildskalierungsalgorithmus fest. Die Eigenschaft gilt für das Element selbst, für alle Bilder, die in seinen anderen Eigenschaften festgelegt sind, und für seine Nachkommen.

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

Der {{Glossary("user_agent", "User Agent")}} wird ein Bild skalieren, wenn der Seitenautor Abmessungen angibt, die von der natürlichen Größe abweichen. Skalierung kann auch durch Benutzerinteraktion (Zoomen) erfolgen. Zum Beispiel, wenn die natürliche Größe eines Bildes `100×100px` ist, aber seine tatsächlichen Abmessungen `200×200px` (oder `50×50px`) betragen, dann wird das Bild unter Verwendung des durch `image-rendering` festgelegten Algorithmus hoch- oder herunterskaliert. Diese Eigenschaft hat keinen Effekt auf nicht skalierte Bilder.

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
  - : Der Skalierungsalgorithmus ist vom UA abhängig. Seit Version 1.9 (Firefox 3.0) verwendet Gecko _bilineare_ Neuberechnung (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der das Erscheinungsbild des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen, die Farben "glätten", akzeptabel, wie bilineare Interpolation. Dies ist für Bilder wie Fotos gedacht.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie "Nearest Neighbor" skaliert, der den Kontrast und die Kanten im Bild erhält. Allgemein für Bilder wie Pixelkunst oder Linienzeichnungen gedacht; es erfolgt kein Verwischen oder Farbglättung.
- `pixelated`
  - : Das Bild wird mit dem "Nearest Neighbor" oder einem ähnlichen Algorithmus auf den nächsten ganzzahligen Vielfachen der ursprünglichen Bildgröße skaliert und dann mit glatter Interpolation auf die endgültige gewünschte Größe gebracht. Dies soll ein "pixeliges" Aussehen bewahren, ohne Skalierungsartefakte einzuführen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der ursprünglichen ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorhanden waren (und vom SVG-Gegenstück {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die Werte `smooth` und `pixelated` definiert.

> [!NOTE]
> Das [CSS images](/de/docs/Web/CSS/CSS_images)-Modul definiert einen `high-quality`-Wert für die `image-rendering`-Eigenschaft, um eine Präferenz für hochwertigere Skalierung bereitzustellen; dies wird jedoch in keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bildskalierungsalgorithmen festlegen

In diesem Beispiel wird ein Bild dreimal wiederholt, wobei jedem eine andere `image-rendering`-Wert zugewiesen wird.

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
