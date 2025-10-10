---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie die {{CSSxRef("url_function", "url()")}} Funktion, jedoch mit zusätzlicher Funktionalität. Dazu gehört die Angabe der Richtung der Grafik, das Anzeigen eines nur durch ein Medienfragment festgelegten Teils dieser Grafik und das Angeben einer Vollfarbe als Fallback, für den Fall, dass keine der angegebenen Grafiken gerendert werden kann.

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
  - : Die Richtung der Grafik, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Grafikquellen spezifizieren, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine feste Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionales Bewusstsein

Der erste, optionale Parameter der `image()` Notation ist die Bildrichtung. Wenn sie enthalten ist und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schriftmodi horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator hinzuzufügen — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — zur Bildquelle hinzuzufügen, um nur einen Abschnitt des Quellbildes anzuzeigen. Der in der Parameter angegeben Bereich wird zu einem eigenständigen Bild. Die Syntax sieht wie folgt aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei den Koordinaten 0px, 20px (oben links) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Kastens. Der dritte Wert ist die Breite des Kastens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Mediendokumentation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist 'rückwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellaufruf beim Verwenden mit `url()` nicht unterbrochen wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` unterstützen, verstehen auch die Fragment-Notation. Daher wird das Bild als ungültig betrachtet, wenn das Fragment innerhalb von `image()` nicht verstanden wird.

### Farb-Fallback

Wenn in `image()` zusammen mit Ihren Bildquellen eine Farbe angegeben wird, dient diese als Fallback, falls die Bilder ungültig sind und nicht erscheinen. In solchen Fällen rendert die `image()` Funktion, als ob kein Bild enthalten wäre, und erzeugt ein einfarbiges Bild. Betrachten Sie als Anwendungsfall ein dunkles Bild, das als Hintergrund für einen weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar bleibt, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erstellt ein Farbfeld. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (allgemein halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbfeldes kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe setzt, um das gesamte Element zu bedecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden durch die {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigen wird und daher nichts an seine Benutzer vermittelt. Wenn das Bild Informationen enthält, die entscheidend sind, um den gesamten Zweck der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann dazu beitragen, die Barrierefreiheit zu verbessern, indem sie eine Fallback-Farbe bietet, wenn ein Bild nicht geladen wird. Obwohl dies durch Einfügen einer Hintergrundfarbe zu jedem Hintergrundbild erfolgen kann und sollte, ermöglicht die CSS `image()` Funktion, Hintergrundfarben nur dann einzufügen, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe einfügen können, falls ein transparentes PNG/GIF/WebP nicht lädt.

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

In den von links nach rechts gelisteten Elementen – diejenigen, die `dir="ltr"` auf dem Element selbst gesetzt haben oder die Richtung von einem Vorfahren oder vom Standardwert für die Seite erben – wird das Bild wie vorgesehen verwendet. Listenelemente mit `dir="rtl"`, das auf dem `<li>` oder von einem Vorfahren geerbten Rechts-nach-Links-Richtung gesetzt ist, z. B. Dokumente, die auf Arabisch oder Hebräisch eingestellt sind, werden den Aufzählungspunkt rechts angezeigt bekommen, horizontal gespiegelt, als ob `transform: scaleX(-1)` eingestellt worden wäre. Der Text wird auch von links nach rechts angezeigt.

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

Wenn der Benutzer den Mauszeiger über das Kästchen bewegt, ändert sich der Cursor, um den 16x16 px Abschnitt des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

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

Das obige Beispiel wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild legen. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, wäre die Farbe hinter dem Logo-Bild anstatt darüber erschienen. Darüber hinaus hätte der gesamte Container die gleiche Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und das Bild daran gehindert, sich mit der {{CSSxRef("background-repeat")}}-Eigenschaft zu wiederholen), wird das Farbfeld nur ein Viertel des Containers bedecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
- [CSS Bilder](/de/docs/Web/CSS/CSS_images) Modul
