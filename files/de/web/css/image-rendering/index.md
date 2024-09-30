---
title: image-rendering
slug: Web/CSS/image-rendering
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`image-rendering`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt einen Bildskalierungsalgorithmus fest. Die Eigenschaft gilt für ein Element selbst, für alle Bilder, die in dessen anderen Eigenschaften festgelegt sind, und für seine Nachkommen.

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

Der [User Agent](/de/docs/Glossary/user_agent) skaliert ein Bild, wenn der Seitenautor Abmessungen angibt, die von der natürlichen Größe abweichen. Skalierung kann auch aufgrund von Benutzerinteraktionen (z. B. Zoomen) stattfinden. Zum Beispiel, wenn die natürliche Größe eines Bildes `100×100px` beträgt, aber die tatsächlichen Abmessungen `200×200px` (oder `50×50px`) sind, wird das Bild mit dem durch `image-rendering` festgelegten Algorithmus hoch- oder herunterskaliert. Diese Eigenschaft hat keine Auswirkung auf nicht skalierte Bilder.

## Syntax

```css
/* Keyword values */
image-rendering: auto;
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
  - : Der Skalierungsalgorithmus ist UA-abhängig. Seit Version 1.9 (Firefox 3.0) verwendet Gecko eine _bilineare_ Resampling-Methode (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der die Erscheinung des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen akzeptabel, die Farben "glätten", wie etwa die bilineare Interpolation. Dies ist für Bilder gedacht, wie z. B. Fotos.
- `high-quality`
  - : Identisch mit `smooth`, aber mit einer Vorliebe für eine qualitativ hochwertigere Skalierung. Wenn die Systemressourcen eingeschränkt sind, sollten Bilder mit `high-quality` gegenüber denen mit jedem anderen Wert priorisiert werden, wenn es darum geht, welche Bilder in ihrer Qualität zu verschlechtern sind und in welchem Maße.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie "nächster Nachbar" skaliert, der Kontrast und Kanten im Bild erhält. Generell für Bilder wie Pixelgrafiken oder Zeichnungen ohne Verwischung oder Farbeglättung gedacht.
- `pixelated`
  - : Das Bild wird mit dem Algorithmus "nächster Nachbar" oder einem ähnlichen auf das nächste ganzzahlige Vielfache der Originalgröße skaliert und verwendet dann eine glatte Interpolation, um das Bild auf die endgültige gewünschte Größe zu bringen. Dies dient dazu, einen "verpixelten" Look zu bewahren, ohne Skalierungsartefakte einzuführen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der Originalgröße ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf und aus dem SVG-Gegenstück {{SVGAttr("image-rendering")}} stammen, sind als Synonyme für die Werte `smooth` und `pixelated` definiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Bildskalierungsalgorithmen

In diesem Beispiel wird ein Bild dreimal wiederholt, wobei für jedes ein anderer `image-rendering`-Wert angewendet wird.

```html hidden
<div>
  <img
    class="auto"
    alt="A small photo of some white and yellow flower against a leafy green background. The image is about 33% smaller than the size it is being displayed at. This upscaling causes the image to appear blurry, with notable soft edges between objects."
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
