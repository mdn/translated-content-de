---
title: image-rendering
slug: Web/CSS/image-rendering
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`image-rendering`**-[CSS](/de/docs/Web/CSS)-Eigenschaft setzt einen Algorithmus zur Bildskalierung. Die Eigenschaft gilt für ein Element selbst, für alle Bilder, die in seinen anderen Eigenschaften festgelegt sind, und für seine Nachkommen.

{{EmbedInteractiveExample("pages/css/image-rendering.html")}}

Der {{Glossary("user agent")}} wird ein Bild skalieren, wenn der Seitenautor Dimensionen angibt, die von seiner natürlichen Größe abweichen. Skalierung kann auch durch Benutzerinteraktion (Zoomen) auftreten. Beispielsweise, wenn die natürliche Größe eines Bildes `100×100px` beträgt, aber seine tatsächlichen Abmessungen `200×200px` (oder `50×50px`) sind, dann wird das Bild mit dem durch `image-rendering` angegebenen Algorithmus hoch- (oder herunter-)skaliert. Diese Eigenschaft hat keine Wirkung auf nicht skalierte Bilder.

## Syntax

```css
/* Schlüsselwortwerte */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Globale Werte */
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
  - : Das Bild sollte mit einem Algorithmus skaliert werden, der die Erscheinung des Bildes maximiert. Insbesondere sind Skalierungsalgorithmen, die Farben "glätten," akzeptabel, wie z.B. bilineare Interpolation. Dies ist für Bilder wie Fotos gedacht.
- `high-quality`
  - : Identisch mit `smooth`, aber mit einer Präferenz für eine qualitativ hochwertigere Skalierung. Wenn Systemressourcen knapp sind, sollten Bilder mit `high-quality` gegenüber denen mit jedem anderen Wert priorisiert werden, wenn es darum geht, welche Bilder in ihrer Qualität herabgesetzt und in welchem Maße dies erfolgt.
- `crisp-edges`
  - : Das Bild wird mit einem Algorithmus wie „nächster Nachbar“ skaliert, der Kontrast und Kanten im Bild bewahrt. Generell gedacht für Bilder wie Pixelgrafiken oder Linienzeichnungen, tritt keine Unschärfe oder Farbabstufung auf.
- `pixelated`
  - : Das Bild wird mit dem „nächster Nachbar“ oder einem ähnlichen Algorithmus auf das nächste ganzzahlige Vielfache der ursprünglichen Bildgröße skaliert und dann mit glatter Interpolation auf die endgültige gewünschte Größe gebracht. Dies ist gedacht, um ein "pixeliges" Aussehen ohne Skalierungsartefakte zu bewahren, wenn die hochskalierte Auflösung kein ganzzahliges Vielfaches der ursprünglichen ist.

> [!NOTE]
> Die Werte `optimizeQuality` und `optimizeSpeed`, die in einem frühen Entwurf vorhanden sind (und aus ihrem SVG-Pendant {{SVGAttr("image-rendering")}} stammen), sind als Synonyme für die Werte `smooth` bzw. `pixelated` definiert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung von Bildskalierungsalgorithmen

In diesem Beispiel wird ein Bild dreimal wiederholt, wobei jedes Mal ein anderer `image-rendering`-Wert angewendet wird.

```html hidden
<div>
  <img
    class="auto"
    alt="Ein kleines Foto von einigen weißen und gelben Blumen vor einem blättrigen grünen Hintergrund. Das Bild ist etwa 33 % kleiner als die Größe, in der es angezeigt wird. Diese Hochskalierung lässt das Bild verschwommen erscheinen, mit bemerkenswert weichen Kanten zwischen den Objekten."
    src="blumen.jpg" />
  <img
    class="pixelated"
    alt="Dasselbe Foto wie das vorherige Bild, das ebenfalls in gleichem Maße hochskaliert ist. Browser, die den pixelated-Wert für die image-rendering-Eigenschaft unterstützen, zeigen das Bild als sehr pixelig an. Einzelne Pixel sind deutlich sichtbar und Kanten erscheinen viel schärfer."
    src="blumen.jpg" />
  <img
    class="crisp-edges"
    alt="Dasselbe Foto wie die vorherigen Bilder, das ebenfalls in gleichem Maße hochskaliert ist. Browser, die den crisp-edges-Wert für die image-rendering-Eigenschaft unterstützen, zeigen das Bild als sehr pixelig an. In diesen Beispielen gibt es praktisch keinen wahrnehmbaren Unterschied zwischen den pixelated- und crisp-edges-Versionen."
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
- [CSS Bilder](/de/docs/Web/CSS/CSS_images) Modul
- SVG {{SVGAttr("image-rendering")}} Attribut
