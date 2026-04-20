---
title: "`<image>` CSS-Typ"
short-title: <image>
slug: Web/CSS/Reference/Values/image
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt ein zweidimensionales Bild dar.

## Syntax

Der `<image>`-Datentyp kann durch eines der folgenden Elemente dargestellt werden:

- Ein Bild, das durch den {{cssxref("url_value", "&lt;url&gt;")}}-Datentyp angegeben wird
- Ein {{cssxref("gradient")}}-Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}}-Funktion
- Ein Bild, Bildausschnitt oder einfarbiger Farbfleck, definiert durch die {{CSSxRef("image/image","image()")}}-Funktion
- Eine Mischung aus zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}}-Funktion.
- Eine Auswahl von Bildern, die basierend auf der Auflösung ausgewählt wird, definiert durch die {{CSSxRef("image/image-set","image-set()")}}-Funktion.
- Generiert durch ein [Paint-Worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}}-Funktion.

## Beschreibung

CSS kann die folgenden Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Abmessungen_ (einer natürlichen Größe), wie ein JPEG, PNG oder ein anderes [Rasterformat](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehrfachen intrinsischen Abmessungen_, die in mehreren Versionen in einer einzigen Datei existieren, wie einige .ico-Formate. (In diesem Fall sind die intrinsischen Abmessungen die des bildgrößten Bereichs und das {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das dem umgebenden Kasten am ähnlichsten ist.)
- Bilder ohne intrinsische Abmessungen, aber mit einem _intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie ein SVG oder ein anderes [Vektorformat](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder ohne _intrinsische Abmessungen oder ein intrinsisches Seitenverhältnis_, wie ein CSS-Gradient.

### Konkrete Größe

CSS bestimmt die _konkrete Größe_ eines Objekts anhand von (1) seinen _intrinsischen Abmessungen_; (2) seiner _angegebenen Größe_, definiert durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}}, oder {{CSSxRef("background-size")}}; und (3) seiner _Standardgröße_, die durch die Art der Eigenschaft bestimmt wird, bei der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                              | Standardobjektgröße                                                                                                                    |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                                | Die Größe des Hintergrundpositionierungsbereichs des Elements                                                                          |
| {{CSSxRef("list-style-image")}}                                                                | Die Größe eines `1em` Zeichens                                                                                                         |
| {{CSSxRef("border-image-source")}}                                                             | Die Größe des Rahmenbildbereichs des Elements                                                                                          |
| {{CSSxRef("cursor")}}                                                                          | Die vom Browser definierte Größe, die der üblichen Zeigergröße auf dem System des Clients entspricht                                   |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                                                      |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                                                      |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                                                      |
| {{cssxref("symbols()")}} für @counter-style                                                    | Risiko-Feature. Wenn unterstützt, die vom Browser definierte Größe, die der üblichen Zeigergröße auf dem System des Clients entspricht |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein 300px × 150px Rechteck                                                                                                             |

Die konkrete Objektgröße wird mit folgendem Algorithmus berechnet:

- Wenn die angegebene Größe _sowohl die Breite als auch die Höhe_ definiert, werden diese Werte als konkrete Objektgröße verwendet.
- Wenn die angegebene Größe _nur die Breite oder nur die Höhe_ definiert, wird der fehlende Wert unter Verwendung des intrinsischen Verhältnisses bestimmt, falls vorhanden, der intrinsischen Abmessungen, wenn der angegebene Wert übereinstimmt, oder der Standardobjektgröße für diesen fehlenden Wert.
- Wenn die angegebene Größe _weder die Breite noch die Höhe_ definiert, wird die konkrete Objektgröße so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bildes entspricht, ohne die Standardobjektgröße in einer Dimension zu überschreiten. Wenn das Bild kein intrinsisches Seitenverhältnis hat, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es angewendet wird; wenn dieses Objekt keines hat, werden die fehlende Breite oder Höhe von der Standardobjektgröße übernommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp bei jeder Eigenschaft. Siehe die [Browser-Kompatibilitätssektion](#browser-kompatibilität) für Details.

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für assistive Technologien. Dies ist vor allem für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigen wird und somit seinen Benutzern nichts vermitteln kann. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verstehen von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

- {{cssxref("gradient")}}
- {{CSSxRef("element","element()")}}
- {{CSSxRef("image/image", "image()")}}
- {{CSSxRef("image/image-set","image-set()")}}
- {{CSSxRef("cross-fade","cross-fade()")}}
