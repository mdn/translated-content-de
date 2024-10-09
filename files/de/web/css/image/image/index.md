---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich der {{CSSxRef("url_function", "url()")}} Funktion, jedoch mit zusätzlicher Funktionalität, einschließlich der Angabe der Richtung des Bildes, der Anzeige nur eines Teils dieses Bildes, der durch ein Medienfragment definiert ist, und der Angabe einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS `image()` Funktion sollte nicht mit {{DOMxRef("HTMLImageElement/Image", '<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor', '', 1)}} verwechselt werden.

## Syntax

{{CSSSyntax}}

wobei:

- `image-tags` {{optional_inline}}
  - : Die Richtung des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Vollton-Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Bewusstheit

Der erste, optionale Parameter der `image()`-Notation ist die Richtung des Bildes. Wenn er enthalten ist und das Bild in einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — an die Bildquelle anzuhängen, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements ist der Teil des Bildes _myImage.webp_, der bei den Koordinaten 0px, 20px (die oberste linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte an. Die ersten beiden stellen die X- und Y-Koordinaten für den Ausgangspunkt der zu erstellenden Box dar. Der dritte Wert ist die Breite der Box, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimensionen in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist 'rückwärtskompatibel', sodass ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellenaufruf bei Verwendung mit `url()` nicht fehlschlägt. Wenn der Browser die Medienfragmentsyntax nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentsyntax. Daher gilt das Bild als ungültig, wenn das Fragment innerhalb von `image()` nicht verstanden wird.

### Farb-Fallback

Wenn eine Farbe in `image()` zusammen mit den Bildquellen angegeben wird, dient sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als wäre kein Bild enthalten, und erzeugt ein Volltonfarbenbild. Als Anwendungsfall kann ein dunkles Bild als Hintergrund für weißen Text verwendet werden. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht gerendert wird.

Das Auslassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erzeugt eine Farbfläche. Anders als die Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (im Allgemeinen halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbfläche kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element abzudecken. Sowohl die Platzierungen von `image(color)` als auch `background-color` werden von den Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Barrierefreiheit

Browser bieten assistiven Technologien keine speziellen Informationen zu Hintergrundbildern. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Dieses Feature kann dazu beitragen, die Barrierefreiheit zu verbessern, indem es eine Fallback-Farbe bietet, wenn ein Bild nicht geladen werden kann. Während dies durch das Einschließen einer Hintergrundfarbe für jedes Hintergrundbild getan werden kann und sollte, ermöglicht die CSS `image()` Funktion das Hinzufügen von Hintergrundfarben, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

## Beispiele

### Richtungsabhängige Bilder

```html
<ul>
  <li dir="ltr">Bullet is a right facing arrow on the left</li>
  <li dir="rtl">Bullet is the same arrow, flipped to point left.</li>
</ul>
```

```css
ul {
  list-style-image: image(ltr "rightarrow.png");
}
```

In den von links nach rechts gerichteten Listeneinträgen — bei denen `dir="ltr"` auf dem Element selbst gesetzt ist oder die die Richtung von einem Vorfahren oder dem Standardwert der Seite erben — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"`, die auf dem `<li>` gesetzt sind oder von einem Vorfahren die Rechts-nach-Links-Richtung erben, wie bei Dokumenten in Arabisch oder Hebräisch, werden das Bullet-Punkt rechts anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird ebenfalls von links nach rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Abschnitt des Hintergrundbildes anzeigen

```html
<div class="box">Hover over me. What cursor do you see?</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor und zeigt den 16x16 px Abschnitt des Sprite-Bildes an, beginnend bei x=32 und y=64.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Farbe auf ein Hintergrundbild legen

```css hidden
.quarter-logo {
  height: 200px;
  width: 200px;
  border: 1px solid;
}
```

```css
.quarter-logo {
  background-image: image(rgb(0 0 0 / 25%)), url("firefox.png");
  background-size: 25%;
  background-repeat: no-repeat;
}
```

```html
<div class="quarter-logo">
  If supported, a quarter of this div has a darkened logo
</div>
```

Das obige Beispiel legt eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, würde die Farbe hinter dem Logo-Bild erscheinen, anstatt darüber. Außerdem hätte der gesamte Container die gleiche Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}} Eigenschaft verhindert haben), wird die Farbfläche nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
