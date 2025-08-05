---
title: <image>
slug: Web/CSS/image
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Der **`<image>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert ein zweidimensionales Bild.

## Syntax

Der `<image>` Datentyp kann durch Folgendes dargestellt werden:

- Ein Bild, das durch den {{cssxref("url_value", "&lt;url&gt;")}} Datentyp beschrieben wird
- Ein {{CSSxRef("&lt;gradient&gt;")}} Datentyp
- Ein Teil der Webseite, definiert durch die {{CSSxRef("element","element()")}} Funktion
- Ein Bild, Bildausschnitt oder einfarbiger Farbabschnitt, definiert durch die {{CSSxRef("image/image","image()")}} Funktion
- Eine Überblendung von zwei oder mehr Bildern, definiert durch die {{CSSxRef("cross-fade","cross-fade()")}} Funktion.
- Eine Auswahl von Bildern, basierend auf Auflösung, definiert durch die {{CSSxRef("image/image-set","image-set()")}} Funktion.
- Generiert von einem [paint worklet](/de/docs/Web/API/CSS_Painting_API) mit der {{CSSxRef("image/paint","paint()")}} Funktion.

## Beschreibung

CSS kann die folgenden Arten von Bildern handhaben:

- Bilder mit _intrinsischen Abmessungen_ (einer natürlichen Größe), wie ein JPEG, PNG oder andere [Rasterformate](https://en.wikipedia.org/wiki/Raster_graphics).
- Bilder mit _mehrfachen intrinsischen Abmessungen_, die in mehreren Versionen innerhalb einer einzigen Datei vorhanden sind, wie einige .ico Formate. (In diesem Fall sind die intrinsischen Abmessungen die des größten Bildes mit dem am ähnlichsten zum umgebenden Rahmen passenden {{Glossary("aspect_ratio", "Seitenverhältnis")}}).
- Bilder ohne intrinsische Abmessungen, aber mit einem _intrinsischen Seitenverhältnis_ zwischen Breite und Höhe, wie ein SVG oder ein anderes [Vektorformat](https://en.wikipedia.org/wiki/Vector_graphics).
- Bilder mit _weder intrinsischen Abmessungen noch einem intrinsischen Seitenverhältnis_, wie ein CSS-Gradient.

CSS bestimmt die _konkrete Größe_ eines Objekts durch (1) seine _intrinsischen Abmessungen_; (2) seine _spezifizierte Größe_, definiert durch CSS-Eigenschaften wie {{CSSxRef("width")}}, {{CSSxRef("height")}} oder {{CSSxRef("background-size")}}; und (3) seine _Standardgröße_, bestimmt durch die Art der Eigenschaft, für die das Bild verwendet wird:

| Art des Objekts (CSS-Eigenschaft)                                                              | Standardgröße des Objekts                                                                              |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{CSSxRef("background-image")}}                                                                | Die Größe des Hintergrundpositionierungsbereichs des Elements                                          |
| {{CSSxRef("list-style-image")}}                                                                | Die Größe eines `1em` Zeichens                                                                         |
| {{CSSxRef("border-image-source")}}                                                             | Die Größe des Rahmenbildbereichs des Elements                                                          |
| {{CSSxRef("cursor")}}                                                                          | Die browserdefinierte Größe, die zur üblichen Cursorgröße auf dem System des Clients passt             |
| {{CSSxRef("mask-image")}}                                                                      | ?                                                                                                      |
| {{CSSxRef("shape-outside")}}                                                                   | ?                                                                                                      |
| {{CSSxRef("mask-border-source")}}                                                              | ?                                                                                                      |
| {{CSSxRef("symbols", "symbols()")}} für @counter-style                                         | Gefährdetes Merkmal. Wenn unterstützt, die browserdefinierte Größe, die zur üblichen Cursorgröße passt |
| {{CSSxRef("content")}} für ein Pseudo-Element ({{CSSxRef("::after")}}/{{CSSxRef("::before")}}) | Ein 300px × 150px Rechteck                                                                             |

Die konkrete Objektgröße wird mithilfe des folgenden Algorithmus berechnet:

- Wenn die spezifizierte Größe _sowohl die Breite als auch die Höhe_ definiert, werden diese Werte als konkrete Objektgröße verwendet.
- Wenn die spezifizierte Größe _nur die Breite oder nur die Höhe_ definiert, wird der fehlende Wert mithilfe des intrinsischen Verhältnisses bestimmt, falls vorhanden, den intrinsischen Abmessungen, falls der spezifizierte Wert passt, oder der Standardgröße des fehlenden Wertes.
- Wenn die spezifizierte Größe _weder die Breite noch die Höhe_ definiert, wird die konkrete Objektgröße so berechnet, dass sie dem intrinsischen Seitenverhältnis des Bildes entspricht, aber ohne die Standardgröße in einer Dimension zu überschreiten. Wenn das Bild kein intrinsisches Seitenverhältnis hat, wird das intrinsische Seitenverhältnis des Objekts verwendet, auf das es angewendet wird; wenn dieses Objekt keines hat, werden die fehlenden Breite oder Höhe von der Standardgröße genommen.

> [!NOTE]
> Nicht alle Browser unterstützen jeden Bildtyp bei jeder Eigenschaft. Siehe den [Browser-Kompatibilitätsabschnitt](#browser-kompatibilität) für Details.

## Barrierefreiheit

Browser bieten assistiven Technologien keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit seinen Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
