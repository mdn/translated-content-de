---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>`-Datentyp kann durch Folgendes dargestellt werden:

- Ein Bild, das durch den {{cssxref("url_value", "&lt;url&gt;")}}-Datentyp angegeben wird
- Ein {{CSSxRef("&lt;gradient&gt;")}}-Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}}-Funktion
- Ein Bild, ein Bildfragment oder ein einfarbiger Bereich, definiert durch die {{CSSxRef("image/image","image()")}}-Funktion
- Eine Mischung aus zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}}-Funktion
- Eine Auswahl von Bildern basierend auf der Auflösung, definiert durch die {{CSSxRef("image/image-set","image-set()")}}-Funktion
- Generiert durch ein [Paint-Worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}}-Funktion

## Beschreibung

CSS kann die folgenden Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Dimensionen_ (einer natürlichen Größe), wie JPEG, PNG oder andere [Rasterformate](https://de.wikipedia.org/wiki/Rastergrafik).
- Bilder mit _mehreren intrinsischen Dimensionen_, die in mehreren Versionen in einer einzigen Datei existieren, wie einige .ico-Formate. (In diesem Fall sind die intrinsischen Dimensionen die des Bildes mit der größten Fläche und dem {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das dem enthaltenden Rahmen am ähnlichsten ist.)
- Bilder ohne intrinsische Dimensionen, aber mit _einem intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie SVGs oder andere [Vektorformate](https://de.wikipedia.org/wiki/Vektorgrafik).
- Bilder mit _weder intrinsischen Dimensionen noch einem intrinsischen Seitenverhältnis_, wie ein CSS-Gradient.

CSS bestimmt die _konkrete Größe_ eines Objekts anhand von (1) seinen _intrinsischen Dimensionen_; (2) seiner definierten Größe, festgelegt durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}} oder {{CSSxRef("background-size")}}; und (3) seiner _Standardgröße_, die durch die Art der Eigenschaft bestimmt wird, mit der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                              | Standardgröße des Objekts                                                                                                              |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                                | Die Größe des Hintergrundpositionierungsbereichs des Elements                                                                          |
| {{CSSxRef("list-style-image")}}                                                                | Die Größe eines Zeichens von `1em`                                                                                                     |
| {{CSSxRef("border-image-source")}}                                                             | Die Größe des Rahmenbildbereichs des Elements                                                                                          |
| {{CSSxRef("cursor")}}                                                                          | Die vom Browser definierte Größe, die der üblichen Cursorgröße auf dem System des Clients entspricht                                   |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                                                      |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                                                      |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                                                      |
| {{CSSxRef("symbols", "symbols()")}} für @counter-style                                         | Risikofeature. Falls unterstützt, die vom Browser definierte Größe, die der üblichen Cursorgröße auf dem System des Clients entspricht |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein Rechteck von 300px × 150px                                                                                                         |

Die konkrete Objektgröße wird durch den folgenden Algorithmus berechnet:

- Wenn die angegebene Größe _sowohl die Breite als auch die Höhe_ definiert, werden diese Werte als konkrete Objektgröße verwendet.
- Wenn die angegebene Größe _nur die Breite oder nur die Höhe_ definiert, wird der fehlende Wert unter Verwendung des intrinsischen Seitenverhältnisses, falls vorhanden, der intrinsischen Dimensionen, wenn der angegebene Wert übereinstimmt, oder der Standardgröße des Objekts für den fehlenden Wert bestimmt.
- Wenn die angegebene Größe _weder die Breite noch die Höhe_ definiert, wird die konkrete Objektgröße so berechnet, dass sie mit dem intrinsischen Seitenverhältnis des Bildes übereinstimmt, ohne jedoch die Standardgröße des Objekts in einer Dimension zu überschreiten. Falls das Bild kein intrinsisches Seitenverhältnis aufweist, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es angewendet wird; falls dieses Objekt keines hat, wird die fehlende Breite oder Höhe aus der Standardgröße des Objekts übernommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp bei jeder Eigenschaft. Details finden Sie im Abschnitt [Browser-Kompatibilität](#browser-kompatibilität).

## Barrierefreiheit

Browser liefern keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader das Vorhandensein nicht ankündigt und den Nutzern daher nichts übermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Zwecks der Seite entscheidend sind, sollte dies besser semantisch im Dokument beschrieben werden.

- [MDN Verständnis von WCAG, Erläuterungen zu Leitlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
