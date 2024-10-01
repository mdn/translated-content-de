---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>`-Datentyp kann durch eines der folgenden dargestellt werden:

- Ein Bild, das durch den {{cssxref("url_value", "&lt;url&gt;")}}-Datentyp angegeben ist.
- Ein {{CSSxRef("&lt;gradient&gt;")}}-Datentyp.
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}}-Funktion.
- Ein Bild, Bildfragment oder einfarbiger Bereich, definiert durch die {{CSSxRef("image/image","image()")}}-Funktion.
- Eine Mischung aus zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}}-Funktion.
- Eine Auswahl von Bildern, die basierend auf der Auflösung gewählt werden, definiert durch die {{CSSxRef("image/image-set","image-set()")}}-Funktion.
- Generiert von einem [paint worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}}-Funktion.

## Beschreibung

CSS kann die folgenden Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Dimensionen_ (eine natürliche Größe), wie ein JPEG, PNG oder anderes [Rasterformat](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehreren intrinsischen Dimensionen_, die in mehreren Versionen in einer einzigen Datei existieren, wie einige .ico-Formate. (In diesem Fall sind die intrinsischen Dimensionen die des Bildes mit der größten Fläche und das {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das dem umgebenden Container am ähnlichsten ist.)
- Bilder ohne intrinsische Dimensionen, aber mit einem _intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie ein SVG oder anderes [Vektorformat](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder mit _weder intrinsischen Dimensionen noch einem intrinsischen Seitenverhältnis_, wie ein CSS-Gradient.

CSS bestimmt die _konkrete Größe_ eines Objekts anhand von (1) seinen _intrinsischen Dimensionen_; (2) seiner _festgelegten Größe_, definiert durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}} oder {{CSSxRef("background-size")}}; und (3) seiner _Standardgröße_, die durch die Art der Eigenschaft bestimmt wird, bei der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                              | Standardgröße des Objekts                                                                                                                   |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                                | Die Größe des Hintergrundpositionierungsbereichs des Elements                                                                               |
| {{CSSxRef("list-style-image")}}                                                                | Die Größe eines `1em`-Zeichens                                                                                                              |
| {{CSSxRef("border-image-source")}}                                                             | Die Größe des Randbildbereichs des Elements                                                                                                 |
| {{CSSxRef("cursor")}}                                                                          | Die vom Browser definierte Größe, die der üblichen Cursorgröße auf dem System des Clients entspricht                                        |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                                                           |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                                                           |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                                                           |
| {{CSSxRef("symbols", "symbols()")}} für @counter-style                                         | Gefährdete Funktion. Wenn unterstützt, die vom Browser definierte Größe, die der üblichen Cursorgröße auf dem System des Clients entspricht |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein 300px × 150px großes Rechteck                                                                                                           |

Die konkrete Größe des Objekts wird mit dem folgenden Algorithmus berechnet:

- Wenn die festgelegte Größe _sowohl die Breite als auch die Höhe definiert_, werden diese Werte als konkrete Größe des Objekts verwendet.
- Wenn die festgelegte Größe _nur die Breite oder nur die Höhe definiert_, wird der fehlende Wert mithilfe des intrinsischen Verhältnisses, falls vorhanden, den intrinsischen Dimensionen, falls der festgelegte Wert passt, oder der Standardgröße des Objekts für diesen fehlenden Wert bestimmt.
- Wenn die festgelegte Größe _weder die Breite noch die Höhe definiert_, wird die konkrete Größe des Objekts so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bildes entspricht, ohne die Standardgröße des Objekts in irgendeiner Dimension zu überschreiten. Hat das Bild kein intrinsisches Seitenverhältnis, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es sich bezieht; hat auch dieses Objekt keines, werden die fehlende Breite oder Höhe aus der Standardgröße des Objekts übernommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp bei jeder Eigenschaft. Siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Barrierefreiheit

Browser liefern keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht meldet und daher nichts an seine Benutzer weitergibt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gültige Bilder

```css example-good
url(test.jpg)               /* A <url>, as long as test.jpg is an actual image */
linear-gradient(blue, red)  /* A <gradient> */
element(#realid)            /* A part of the webpage, referenced with the element() function,
                               if "realid" is an existing ID on the page */
image(ltr 'arrow.png#xywh=0,0,16,16', red)
                            /* A section 16x16 section of <url>, starting from the top, left of the original
                               image as long as arrow.png is a supported image, otherwise a solid
                               red swatch. If language is rtl, the image will be horizontally flipped. */
cross-fade(20% url(twenty.png), url(eighty.png))
                            /* cross faded images, with twenty being 20% opaque
                               and eighty being 80% opaque. */
image-set('test.jpg' 1x, 'test-2x.jpg' 2x)
                            /* a selection of images with varying resolutions */
```

### Ungültige Bilder

```css example-bad
nourl.jpg            /* An image file must be defined using the url() function. */
url(report.pdf)      /* A file pointed to by the url() function must be an image. */
element(#fakeid)     /* An element ID must be an existing ID on the page. */
image(z.jpg#xy=0,0)  /* The spatial fragment must be written in the format of xywh=#,#,#,# */
image-set('cat.jpg' 1x, 'dog.jpg' 1x) /* every image in an image set must have a different resolution */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("element","element()")}}
- {{CSSxRef("image/image", "image()")}}
- {{CSSxRef("image/image-set","image-set()")}}
- {{CSSxRef("cross-fade","cross-fade()")}}
