---
title: "`image-rendering` CSS property"
short-title: image-rendering
slug: Web/CSS/Reference/Properties/image-rendering
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`image-rendering`** legt einen Algorithmus für die Bildskalierung fest. Die Eigenschaft gilt für ein Element selbst, für alle Bilder, die in seinen anderen Eigenschaften festgelegt sind, sowie für seine Nachfahren.

Der {{Glossary("user_agent", "User Agent")}} skaliert ein Bild, wenn der Seitenautor andere Abmessungen als dessen natürliche Größe angibt. Eine Skalierung kann auch durch Benutzerinteraktion (Zoomen) erfolgen. Wenn beispielsweise die natürliche Größe eines Bildes `100×100px`_,_ beträgt, seine tatsächlichen Abmessungen jedoch `200×200px` (oder `50×50px`) sind, wird das Bild mithilfe des durch `image-rendering` angegebenen Algorithmus hochskaliert (oder herunterskaliert). Diese Eigenschaft hat keine Auswirkung auf nicht skalierte Bilder.

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

Diese Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `auto`
  - : Der Skalierungsalgorithmus ist vom UA abhängig. Seit Version 1.9 (Firefox 3.0) verwendet Gecko _bilineares_ Resampling (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der das Erscheinungsbild des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen akzeptabel, die Farben „glätten“, etwa bilineare Interpolation. Dies ist für Bilder wie Fotos vorgesehen.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie „nearest neighbor“ skaliert, der Kontrast und Kanten im Bild bewahrt. Im Allgemeinen für Bilder wie Pixel Art oder Strichzeichnungen vorgesehen; es erfolgt keine Unschärfe oder Farbglättung.
- `pixelated`
  - : Das Bild wird mit dem Algorithmus „nearest neighbor“ oder einem ähnlichen Algorithmus auf das nächstgelegene ganzzahlige Vielfache der ursprünglichen Bildgröße skaliert und verwendet anschließend eine glatte Interpolation, um das Bild auf die endgültig gewünschte Größe zu bringen. Dies soll ein „pixeliges“ Aussehen bewahren, ohne Skalierungsartefakte einzuführen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches des Originals ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorhanden waren (und von ihrem SVG-Gegenstück {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die Werte `smooth` beziehungsweise `pixelated` definiert.

> [!NOTE]
> Das Modul [CSS images](/de/docs/Web/CSS/Guides/Images) definiert einen Wert `high-quality` für die Eigenschaft `image-rendering`, um eine Präferenz für eine höherwertige Skalierung bereitzustellen. Dieser wird jedoch von keinem Browser unterstützt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Algorithmen für die Bildskalierung festlegen

In diesem Beispiel wird ein Bild viermal wiederholt, wobei auf jedes ein anderer Wert von `image-rendering` angewendet wird.

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
- Modul [CSS images](/de/docs/Web/CSS/Guides/Images)
- SVG-Attribut {{SVGAttr("image-rendering")}}
