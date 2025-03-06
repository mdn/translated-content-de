---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie die {{CSSxRef("url_function", "url()")}} Funktion, jedoch mit erweiterter Funktionalität, einschließlich der Festlegung der Direktionalität des Bildes, des Anzeigen nur eines Teils des Bildes, der durch ein Medienfragment definiert ist, und der Angabe einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS `image()` Funktion sollte nicht mit [<code>Image()</code>, dem <code>HTMLImageElement</code> Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

## Syntax

```css-nolint
/* Basic usage */
image("image1.jpg");
image(url("image2.jpg"));

/* Bidi-sensitive Images */
image(ltr "image1.jpg");
image(rtl "image1.jpg");

/* Image Fallbacks */
image("image1.jpg", black);

/* Image Fragments */
image("image1.jpg#xywh=40,0,20,20");

/* Solid-color Images */
image(rgba(0,0,255,.5)), url("bg-image.png");
```

### Werte

- `image-tags` {{optional_inline}}
  - : Die Direktionalität des Bildes, entweder `ltr` (von links nach rechts) oder `rtl` (von rechts nach links).
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine vollflächige Hintergrundfarbe als Fallback angibt, falls kein `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionales Bewusstsein

Der erste, optionale Parameter der `image()` Notation ist die Direktionalität des Bildes. Wenn er enthalten ist und das Bild auf einem Element mit entgegengesetzter Direktionalität verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Direktionalität weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator hinzuzufügen – einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe – um nur einen Abschnitt des Quellbildes anzuzeigen. Der Abschnitt des Bildes, der im Parameter definiert wird, wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der an der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte an. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Rahmens. Der dritte Wert ist die Breite des Rahmens, und der letzte Wert ist die Höhe. Standardmäßig handelt es sich um Pixelwerte. Die [Definition der räumlichen Dimensionen in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist 'abwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird und der Quellaufruf bei Verwendung mit `url()` nicht unterbrochen wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird das Bild als ungültig angesehen, wenn das Fragment innerhalb von `image()` nicht verstanden wird.

### Farben-Fallback

Wenn eine Farbe in `image()` zusammen mit Ihren Bildquellen angegeben wird, fungiert sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen wird die `image()` Funktion so gerendert, als wäre kein Bild enthalten, und erzeugt ein Vollfarbenbild. Ein Anwendungsfall könnte ein dunkles Bild sein, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe könnte erforderlich sein, damit der Vordergrundtext lesbar ist, wenn das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erstellt eine Farbtafel. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (allgemein halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbtafel kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe setzt, um das gesamte Element zu bedecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden durch die {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist insbesondere für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Dieses Feature kann helfen, die Barrierefreiheit zu verbessern, indem es eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen wird. Während dies durch das Einschließen einer Hintergrundfarbe auf jedem Hintergrundbild erledigt werden kann und sollte, ermöglicht die CSS `image()` Funktion das Hinzufügen von Hintergrundfarben, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

## Beispiele

### Direktionalitätsempfindliche Bilder

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

In den von links nach rechts gerichteten Listenelementen — solchen, die `dir="ltr"` auf dem Element selbst gesetzt haben oder die Direktionalität von einem Vorfahren oder Standardwert für die Seite erben — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` auf dem `<li>` gesetzt oder die von einem Vorfahren die von rechts nach links gerichtete Direktionalität erben, wie Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden das Aufzählungszeichen auf der rechten Seite haben, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird auch von links nach rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Anzeigen eines Abschnitts des Hintergrundbildes

```html
<div class="box">Hover over me. What cursor do you see?</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor, um den 16x16 px Abschnitt des Sprite-Bildes anzuzeigen, der bei x=32 und y=64 beginnt.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Farbe über ein Hintergrundbild legen

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

Das Obige wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild legen. Hätten wir die {{cssxref("background-color")}} Eigenschaft stattdessen verwendet, wäre die Farbe hinter dem Logo-Bild erschienen, anstatt darüber. Außerdem hätte der gesamte Container die gleiche Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und verhindert haben, dass das Bild mit der {{CSSxRef("background-repeat")}} Eigenschaft wiederholt wird, wird der Farbfleck nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der dieses Feature implementiert.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
