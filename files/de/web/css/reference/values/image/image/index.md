---
title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie die {{CSSxRef("url_function", "url()")}} Funktion, jedoch mit erweiterter Funktionalität, einschließlich der Angabe der Richtung des Bildes, des Anzeigens nur eines Teils dieses Bildes, der durch ein Medienfragment definiert ist, und der Spezifikation einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

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
image(rgb(0 0 255 / 0.5)), url("bg-image.png");
```

### Werte

- `image-tags` {{optional_inline}}
  - : Die Richtung des Bildes, entweder `ltr` für von links nach rechts oder `rtl` für von rechts nach links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen mit optionalen Bildfragment-Identifikatoren angeben.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Volltonfarbe angibt, die als Fallback verwendet werden soll, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Bewusstheit

Der erste, optionale Parameter der `image()` Notation ist die Richtung des Bildes. Wenn er enthalten ist und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung nicht angegeben ist, wird das Bild nicht gespiegelt, wenn die Sprache gewechselt wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator hinzuzufügen – einen Startpunkt entlang der x- und y-Achse sowie eine Breite und Höhe – zur Bildquelle, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei den Koordinaten 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax verwendet vier durch Kommas getrennte numerische Werte. Die ersten beiden stellen die X- und Y-Koordinaten für den Startpunkt der erstellten Box dar. Der dritte Wert ist die Breite der Box, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [räumliche Dimensionen-Definition in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) deutet darauf hin, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist "rückwärtskompatibel", da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und die Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragmente-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Wenn das Fragment innerhalb von `image()` nicht verstanden wird, wird das Bild als ungültig betrachtet.

### Farb-Fallback

Wenn in `image()` zusammen mit Ihren Bildquellen eine Farbe angegeben ist, fungiert diese als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als wäre kein Bild enthalten, und erzeugt ein Volltonfarbbild. Ein Anwendungsfall ist ein dunkles Bild, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erstellt ein Farbfeld. Im Unterschied zur Deklaration von {{CSSxRef("background-color")}}, das unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (allgemein halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbfeldes kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element abzudecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten assistiver Technologie keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Bildschirmleser wichtig, da ein Bildschirmleser seine Existenz nicht ankündigt und somit den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des allgemeinen Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann dazu beitragen, die Zugänglichkeit zu verbessern, indem sie eine Ersatzfarbe bereitstellt, wenn ein Bild nicht geladen wird. Während dies durch die Aufnahme einer Hintergrundfarbe auf jedem Hintergrundbild erreicht werden kann und sollte, ermöglicht die CSS `image()` Funktion das Hinzufügen einer Ersatzfarbe, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

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

In den von links nach rechts verlaufenden Listenelementen – jenen mit `dir="ltr"` auf dem Element selbst gesetzt oder die Richtung von einem Vorfahren oder dem Standardwert für die Seite erben – wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` setzen auf dem `<li>` oder die Rechts-nach-Links-Richtung von einem Vorfahren erben, wie Dokumente auf Arabisch oder Hebräisch, werden die Kugel auf der rechten Seite anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn der Benutzer über das Feld schwebt, ändert sich der Cursor und zeigt den 16x16 px Abschnitt des Sprites-Bildes an, beginnend bei x=32 und y=64.

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

Das obige Beispiel legt eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, wäre die Farbe hinter dem Logobild erschienen und nicht darüber. Außerdem hätte der gesamte Container die gleiche Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft (und die Wiederholung des Bildes mit der {{CSSxRef("background-repeat")}} Eigenschaft verhindert haben, wird das Farbfeld nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützt kein Browser diese Funktion.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
- [CSS Bilder](/de/docs/Web/CSS/Guides/Images) Modul
