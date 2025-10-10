---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>`-Datentyp kann durch eines der folgenden dargestellt werden:

- Ein Bild, gekennzeichnet durch den {{cssxref("url_value", "&lt;url&gt;")}}-Datentyp
- Ein {{CSSxRef("&lt;gradient&gt;")}}-Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}}-Funktion
- Ein Bild, Bildfragment oder solider Farbfleck, definiert durch die {{CSSxRef("image/image","image()")}}-Funktion
- Eine Mischung aus zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}}-Funktion.
- Eine Auswahl von Bildern, die basierend auf der Auflösung gewählt werden, definiert durch die {{CSSxRef("image/image-set","image-set()")}}-Funktion.
- Generiert von einem [paint worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}}-Funktion.

## Beschreibung

CSS kann die folgenden Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Dimensionen_ (eine natürliche Größe), wie ein JPEG, PNG oder andere [Rasterformate](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehrfachen intrinsischen Dimensionen_, die in mehreren Versionen in einer einzigen Datei existieren, wie einige .ico-Formate. (In diesem Fall sind die intrinsischen Dimensionen diejenigen des Bildes mit der größten Fläche und dem am meisten dem umgebenden Kasten ähnlichen {{Glossary("aspect_ratio", "Seitenverhältnis")}}.)
- Bilder ohne intrinsische Dimensionen, aber mit einem _intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie ein SVG oder andere [Vektorformate](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder ohne _intrinsische Dimensionen_ und ohne ein intrinsisches Seitenverhältnis, wie ein CSS-Gradient.

CSS bestimmt die _konkrete Größe_ eines Objekts durch (1) seine _intrinsischen Dimensionen_; (2) seine _definierte Größe_, festgelegt durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}} oder {{CSSxRef("background-size")}}; und (3) seine _Standardgröße_, die durch die Art der Eigenschaft bestimmt wird, mit der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                              | Standardgröße des Objekts                                                                                                                          |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                                | Die Größe des Hintergrundpositionierungsbereichs des Elements                                                                                      |
| {{CSSxRef("list-style-image")}}                                                                | Die Größe eines `1em`-Zeichens                                                                                                                     |
| {{CSSxRef("border-image-source")}}                                                             | Die Größe des Bereichs des Randbildes des Elements                                                                                                 |
| {{CSSxRef("cursor")}}                                                                          | Die vom Browser definierte Größe, die mit der üblichen Cursorgröße auf dem System des Clients übereinstimmt                                        |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                                                                  |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                                                                  |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                                                                  |
| {{CSSxRef("symbols", "symbols()")}} für @counter-style                                         | Gefährdetes Feature. Wenn unterstützt, die vom Browser definierte Größe, die mit der üblichen Cursorgröße auf dem System des Clients übereinstimmt |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein 300px × 150px Rechteck                                                                                                                         |

Die konkrete Größe des Objekts wird mit dem folgenden Algorithmus berechnet:

- Wenn die definierte Größe _sowohl die Breite als auch die Höhe_ festlegt, werden diese Werte als konkrete Größe des Objekts verwendet.
- Wenn die definierte Größe _nur die Breite oder nur die Höhe_ festlegt, wird der fehlende Wert anhand des intrinsischen Verhältnisses, falls vorhanden, der intrinsischen Dimensionen, wenn der definierte Wert übereinstimmt, oder der Standardgröße des Objekts für diesen fehlenden Wert bestimmt.
- Wenn die definierte Größe _weder die Breite noch die Höhe_ festlegt, wird die konkrete Größe des Objekts so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bildes entspricht, ohne jedoch die Standardgröße des Objekts in einer Dimension zu überschreiten. Wenn das Bild kein intrinsisches Seitenverhältnis hat, wird das intrinsische Seitenverhältnis des Objekts, auf das es angewendet wird, verwendet; wenn dieses Objekt keines hat, werden die fehlende Breite oder Höhe aus der Standardgröße des Objekts genommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp auf jeder Eigenschaft. Siehe den Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Barrierefreiheit

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies ist vor allem für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und somit nichts an seine Benutzer vermittelt. Wenn das Bild Informationen enthält, die wesentlich für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gültige Bilder

```css example-good
url("test.jpg")               /* A <url>, as long as test.jpg is an actual image */
linear-gradient(blue, red)  /* A <gradient> */
element(#real-id)            /* A part of the webpage, referenced with the element() function,
                               if "real-id" is an existing ID on the page */
image(ltr "arrow.png#xywh=0,0,16,16", red)
                            /* A section 16x16 section of <url>, starting from the top, left of the original
                               image as long as arrow.png is a supported image, otherwise a solid
                               red swatch. If language is rtl, the image will be horizontally flipped. */
cross-fade(20% url("twenty.png"), url("eighty.png"))
                            /* cross faded images, with twenty being 20% opaque
                               and eighty being 80% opaque. */
image-set("test.jpg' 1x, 'test-2x.jpg" 2x)
                            /* a selection of images with varying resolutions */
```

### Ungültige Bilder

```css example-bad
"no-url.jpg"           /* An image file must be defined using the url() function. */
url("report.pdf")      /* A file pointed to by the url() function must be an image. */
element(#fakeid)     /* An element ID must be an existing ID on the page. */
image(z.jpg#xy=0,0)  /* The spatial fragment must be written in the format of xywh=#,#,#,# */
image-set("cat.jpg" 1x, "dog.jpg" 1x) /* every image in an image set must have a different resolution */
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
