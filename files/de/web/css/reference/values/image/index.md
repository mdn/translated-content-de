---
title: <image>
slug: Web/CSS/Reference/Values/image
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>`-Datentyp kann auf eine der folgenden Arten dargestellt werden:

- Ein Bild, das durch den {{cssxref("url_value", "&lt;url&gt;")}} Datentyp angegeben wird
- Ein {{CSSxRef("&lt;gradient&gt;")}} Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}} Funktion
- Ein Bild, Bildabschnitt oder eine feste Farbfläche, definiert durch die {{CSSxRef("image/image","image()")}} Funktion
- Eine Mischung aus zwei oder mehr Bildern definiert durch die {{CSSxRef("cross-fade","cross-fade()")}} Funktion.
- Eine Auswahl von Bildern, basierend auf der Auflösung gewählt, definiert durch die {{CSSxRef("image/image-set","image-set()")}} Funktion.
- Generiert durch ein [Paint Worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}} Funktion.

## Beschreibung

CSS kann die folgenden Arten von Bildern verarbeiten:

- Bilder mit _intrinsischen Maßen_ (einer natürlichen Größe), wie JPEG, PNG oder andere [Rasterformate](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehreren intrinsischen Maßen_, die in mehreren Versionen innerhalb einer einzigen Datei vorliegen, wie einige .ico-Formate. (In diesem Fall sind die intrinsischen Maße die des Bildes mit der größten Fläche und das {{Glossary("aspect_ratio", "Seitenverhältnis")}}, das dem umgebenden Kasten am ähnlichsten ist.)
- Bilder ohne intrinsische Maße, aber mit einem _intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie SVG oder andere [Vektorformate](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder ohne _intrinsische Maße und ohne intrinsisches Seitenverhältnis_, wie ein CSS-Gradient.

CSS bestimmt die _konkrete Größe_ eines Objekts unter Verwendung von (1) seinen _intrinsischen Maßen_; (2) seiner _spezifizierten Größe_, definiert durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}}, oder {{CSSxRef("background-size")}}; und (3) seiner _Standardgröße_, bestimmt durch die Art der Eigenschaft, mit der das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                              | Standardgröße des Objekts                                                                                   |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| {{CSSxRef("background-image")}}                                                                | Die Größe des Hintergrundpositionierungsbereichs des Elements                                               |
| {{CSSxRef("list-style-image")}}                                                                | Die Größe eines `1em`-Zeichens                                                                              |
| {{CSSxRef("border-image-source")}}                                                             | Die Größe des Randbildbereichs des Elements                                                                 |
| {{CSSxRef("cursor")}}                                                                          | Die browserdefinierte Größe, die der üblichen Cursorgröße auf dem System des Benutzers entspricht           |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                           |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                           |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                           |
| {{CSSxRef("symbols", "symbols()")}} für @counter-style                                         | Gefährdete Funktion. Wenn unterstützt, die browserdefinierte Größe, die der üblichen Cursorgröße entspricht |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein Rechteck von 300px × 150px                                                                              |

Die konkrete Objektgröße wird nach dem folgenden Algorithmus berechnet:

- Wenn die spezifizierte Größe _sowohl die Breite als auch die Höhe_ definiert, werden diese Werte als konkrete Objektgröße verwendet.
- Wenn die spezifizierte Größe _nur die Breite oder nur die Höhe_ definiert, wird der fehlende Wert anhand des intrinsischen Verhältnisses bestimmt, sofern vorhanden, der intrinsischen Maße, wenn der spezifizierte Wert übereinstimmt, oder der Standardgröße des Objekts für diesen fehlenden Wert.
- Wenn die spezifizierte Größe _weder die Breite noch die Höhe_ definiert, wird die konkrete Objektgröße so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bildes entspricht, ohne jedoch die Standardgröße des Objekts in einer Dimension zu überschreiten. Wenn das Bild kein intrinsisches Seitenverhältnis hat, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es zutrifft; wenn dieses Objekt keines hat, werden die fehlende Breite oder Höhe aus der Standardgröße des Objekts genommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp auf jeder Eigenschaft. Siehe den [Abschnitt zur Browser-Kompatibilität](#browser-kompatibilität) für Details.

## Barrierefreiheit

Browser stellen assistiven Technologien keine speziellen Informationen zu Hintergrundbildern bereit. Das ist vor allem für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und daher den Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
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
