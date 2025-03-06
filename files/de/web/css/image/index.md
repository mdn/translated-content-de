---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>`-Datentyp kann mit einem der folgenden Elemente dargestellt werden:

- Ein Bild, das durch den {{cssxref("url_value", "&lt;url&gt;")}} Datentyp bezeichnet wird
- Ein {{CSSxRef("&lt;gradient&gt;")}} Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}} Funktion
- Ein Bild, Bildfragment oder einfarbiger Farbabschnitt, definiert durch die {{CSSxRef("image/image","image()")}} Funktion
- Eine Mischung aus zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}} Funktion
- Eine Auswahl von Bildern basierend auf der Auflösung, definiert durch die {{CSSxRef("image/image-set","image-set()")}} Funktion
- Generiert durch einen [paint worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}} Funktion.

## Beschreibung

CSS kann folgende Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Dimensionen_ (eine natürliche Größe), wie JPEG, PNG oder andere [Rasterformate](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehreren intrinsischen Dimensionen_, die in mehreren Versionen innerhalb einer einzigen Datei existieren, wie einige .ico-Formate. (In diesem Fall sind die intrinsischen Dimensionen die des bildflächengrößten Bilds und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} am ähnlichsten der umgebenden Box.)
- Bilder ohne intrinsische Dimensionen, aber mit _einem intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie SVG oder andere [Vektorformate](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder mit _weder intrinsischen Dimensionen noch einem intrinsischen Seitenverhältnis_, wie ein CSS-Gradient.

CSS bestimmt die _konkrete Größe_ eines Objekts durch (1) seine _intrinsischen Dimensionen_; (2) seine _spezifizierte Größe_, definiert durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}} oder {{CSSxRef("background-size")}}; und (3) seine _Standardgröße_, bestimmt durch die Art der Eigenschaft, mit der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                             | Standardgröße des Objekts                                                                                                                   |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                               | Die Größe des Hintergrundpositionierungsbereichs des Elements                                                                               |
| {{CSSxRef("list-style-image")}}                                                               | Die Größe eines `1em` Zeichens                                                                                                              |
| {{CSSxRef("border-image-source")}}                                                            | Die Größe des Rahmenbildbereichs des Elements                                                                                               |
| {{CSSxRef("cursor")}}                                                                         | Die vom Browser definierte Größe, die der üblichen Zeigergröße auf dem System des Clients entspricht                                        |
| {{CSSxRef("mask-image")}}                                                                     | ?                                                                                                                                           |
| {{CSSxRef("shape-outside")}}                                                                  | ?                                                                                                                                           |
| {{CSSxRef("mask-border-source")}}                                                             | ?                                                                                                                                           |
| {{CSSxRef("symbols", "symbols()")}} for @counter-style                                        | Gefährdete Funktion. Wenn unterstützt, die vom Browser definierte Größe, die der üblichen Zeigergröße auf dem System des Clients entspricht |
| {{CSSxRef("content")}} für ein Pseudoelement ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein Rechteck von 300px × 150px                                                                                                              |

Die konkrete Größe eines Objekts wird durch den folgenden Algorithmus berechnet:

- Wenn die spezifizierte Größe _sowohl die Breite als auch die Höhe_ definiert, werden diese Werte als konkrete Größe des Objekts verwendet.
- Wenn die spezifizierte Größe _nur die Breite oder nur die Höhe_ definiert, wird der fehlende Wert durch das intrinsische Verhältnis bestimmt, falls vorhanden, die intrinsischen Dimensionen, wenn der spezifizierte Wert übereinstimmt, oder die Standardgröße des Objekts für diesen fehlenden Wert.
- Wenn die spezifizierte Größe _weder die Breite noch die Höhe_ definiert, wird die konkrete Größe des Objekts so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bilds entspricht, aber ohne die Standardgröße des Objekts in irgendeiner Dimension zu überschreiten. Wenn das Bild kein intrinsisches Seitenverhältnis hat, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es angewendet wird; falls auch dieses keines hat, werden die fehlende Breite oder Höhe aus der Standardgröße des Objekts entnommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp in jeder Eigenschaft. Siehe den Abschnitt [Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien an. Dies ist besonders für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigt und daher den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtzwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Gültige Bilder

```css example-good
url(test.jpg)               /* A <url>, as long as test.jpg is an actual image */
linear-gradient(blue, red)  /* A <gradient> */
element(#real-id)            /* A part of the webpage, referenced with the element() function,
                               if "real-id" is an existing ID on the page */
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
no-url.jpg           /* An image file must be defined using the url() function. */
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
