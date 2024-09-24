---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>` Datentyp kann mit einem der folgenden dargestellt werden:

- Ein Bild, angegeben durch den {{cssxref("url_value", "&lt;url&gt;")}} Datentyp
- Ein {{CSSxRef("&lt;gradient&gt;")}} Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}} Funktion
- Ein Bild, Bildfragment oder farbiger Bereich, definiert durch die {{CSSxRef("image/image","image()")}} Funktion
- Eine Mischung aus zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}} Funktion
- Eine Auswahl von Bildern, die basierend auf der Auflösung gewählt werden, definiert durch die {{CSSxRef("image/image-set","image-set()")}} Funktion
- Erzeugt durch ein [Paint Worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}} Funktion

## Beschreibung

CSS kann die folgenden Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Dimensionen_ (eine natürliche Größe), wie JPEG, PNG oder andere [Rasterformate](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehreren intrinsischen Dimensionen_, die in mehreren Versionen in einer einzigen Datei existieren, wie einige .ico Formate. (In diesem Fall sind die intrinsischen Dimensionen die des Bildes, das in der Fläche am größten und im {{glossary("Seitenverhältnis")}} dem umgebenden Block am ähnlichsten ist.)
- Bilder ohne intrinsische Dimensionen, aber mit einem _intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie ein SVG oder andere [Vektorformate](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder mit _weder intrinsischen Dimensionen noch einem intrinsischen Seitenverhältnis_, wie ein CSS-Gradient.

CSS bestimmt die _konkreten Abmessungen_ eines Objekts durch (1) seine _intrinsischen Dimensionen_; (2) seine _angestrebte Größe_, die durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}} oder {{CSSxRef("background-size")}} definiert ist; und (3) seine _Standardgröße_, die durch die Art der Eigenschaft bestimmt wird, mit der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                             | Standardgröße des Objekts                                                                                     |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                              | Die Größe des Hintergrundpositionierungsbereichs des Elements                                                |
| {{CSSxRef("list-style-image")}}                                                              | Die Größe eines `1em` Zeichens                                                                              |
| {{CSSxRef("border-image-source")}}                                                           | Die Größe des Randbildbereichs des Elements                                                                 |
| {{CSSxRef("cursor")}}                                                                        | Die vom Browser definierte Größe, die der üblichen Cursorgröße auf dem System des Kunden entspricht           |
| {{CSSxRef("mask-image")}}                                                                    | ?                                                                                                           |
| {{CSSxRef("shape-outside")}}                                                                 | ?                                                                                                           |
| {{CSSxRef("mask-border-source")}}                                                            | ?                                                                                                           |
| {{CSSxRef("symbols", "symbols()")}} für @counter-style                                      | Gefährdete Funktion. Falls unterstützt, entspricht die vom Browser definierte Größe der üblichen Cursorgröße auf dem System des Benutzers.   |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein 300px × 150px Rechteck                                                                                  |

Die konkreten Objektmaße werden mit dem folgenden Algorithmus berechnet:

- Wenn die spezifizierte Größe _sowohl die Breite als auch die Höhe_ definiert, werden diese Werte als konkrete Objektgröße verwendet.
- Wenn die spezifizierte Größe _nur die Breite oder nur die Höhe_ definiert, wird der fehlende Wert bestimmt, indem das intrinsische Verhältnis verwendet wird, falls vorhanden, die intrinsischen Dimensionen, wenn der spezifizierte Wert übereinstimmt, oder die Standardgröße des Objekts für diesen fehlenden Wert.
- Wenn die spezifizierte Größe _weder die Breite noch die Höhe_ definiert, wird die konkrete Objektgröße so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bildes entspricht, ohne die Standardgröße des Objekts in einer Dimension zu überschreiten. Wenn das Bild kein intrinsisches Seitenverhältnis hat, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es angewendet wird; hat dieses Objekt keines, wird die fehlende Breite oder Höhe aus der Standardgröße des Objekts übernommen.

> [!NOTE]
> Nicht alle Browser unterstützen alle Bildtypen in jeder Eigenschaft. Details finden Sie im [Browser-Kompatibilitätsabschnitt](#browser-kompatibilität).

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader ihre Anwesenheit nicht ankündigen wird und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des allgemeinen Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis der Erfolgskriterien 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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
