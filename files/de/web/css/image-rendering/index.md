---
title: image-rendering
slug: Web/CSS/image-rendering
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`image-rendering`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) legt einen Bildskalierungsalgorithmus fest. Die Eigenschaft gilt für das Element selbst, für alle Bilder, die in seinen anderen Eigenschaften festgelegt sind, und für seine Nachkommen.

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

Der [User-Agent](/de/docs/Glossary/user_agent) skaliert ein Bild, wenn der Seitenautor andere Dimensionen als seine natürliche Größe angibt. Eine Skalierung kann auch durch Benutzerinteraktionen (Zoom) auftreten. Wenn zum Beispiel die natürliche Größe eines Bildes `100×100px` beträgt, aber seine tatsächlichen Abmessungen `200×200px` (oder `50×50px`) sind, wird das Bild mit dem durch `image-rendering` festgelegten Algorithmus hoch- oder herunterskaliert. Diese Eigenschaft hat keinen Einfluss auf nicht skalierte Bilder.

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
  - : Der Skalierungsalgorithmus ist UA-abhängig. Seit Version 1.9 (Firefox 3.0) verwendet Gecko _bilineare_ Resampling (hohe Qualität).
- `smooth`
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der das Erscheinungsbild des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen, die Farben "glätten" akzeptabel, wie die bilineare Interpolation. Dies ist für Bilder wie Fotos vorgesehen.
- `high-quality`
  - : Identisch mit `smooth`, jedoch mit einer Präferenz für eine qualitativ hochwertigere Skalierung. Wenn Systemressourcen begrenzt sind, sollten Bilder mit `high-quality` Vorrang haben gegenüber solchen mit anderen Werten, wenn in Betracht gezogen wird, welche Bilder in der Qualität herabgesetzt werden sollen und in welchem Ausmaß.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie "nächster Nachbar" skaliert, der Kontrast und Kanten im Bild bewahrt. Allgemein für Bilder wie Pixelkunst oder Strichzeichnungen vorgesehen, tritt keine Unschärfe oder Farbglättung auf.
- `pixelated`
  - : Das Bild wird mit dem Algorithmus "nächster Nachbar" oder einem ähnlichen Algorithmus auf das nächste ganzzahlige Vielfache der ursprünglichen Bildgröße skaliert und verwendet dann eine glatte Interpolation, um das Bild auf die endgültige gewünschte Größe zu bringen. Dies soll ein "pixeliertes" Aussehen bewahren, ohne Skalierungsartefakte einzuführen, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der ursprünglichen ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorkommen (und vom SVG-Gegenstück {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die `smooth`- und `pixelated`-Werte definiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen von Bildskalierungsalgorithmen

In diesem Beispiel wird ein Bild dreimal wiederholt, wobei jeweils ein anderer `image-rendering`-Wert angewendet wird.

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
