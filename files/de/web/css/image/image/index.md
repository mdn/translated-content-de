---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich der {{CSSxRef("url_function", "url()")}} Funktion, bietet jedoch zusätzliche Funktionen, einschließlich der Angabe der Richtungsabhängigkeit des Bildes, der Anzeige nur eines Teils des Bildes, der durch ein Medienfragment definiert ist, sowie der Angabe einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS `image()` Funktion sollte nicht mit [<code>Image()</code>, der <code>HTMLImageElement</code> Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Richtungsabhängigkeit des Bildes, entweder `ltr` für linksläufig oder `rtl` für rechtsläufig.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine einfarbige Hintergrundfarbe als Fallback angibt, falls keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Bewusstheit

Der erste, optionale Parameter der `image()` Notation ist die Richtungsabhängigkeit des Bildes. Wenn er enthalten ist und das Bild auf einem Element mit entgegengesetzter Richtungsabhängigkeit verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtungsabhängigkeit weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Fähigkeit, einen Medienfragment-Identifikator — einen Startpunkt entlang der x- und y-Achse zusammen mit einer Breite und Höhe — an die Bildquelle anzuhängen, um nur einen Abschnitt des Quellbilds anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (in der oberen linken Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Rechtecks. Der dritte Wert ist die Breite des Rechtecks, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [räumliche Dimensionendefinition in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist „abwärtskompatibel“, da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellaufruf nicht unterbrochen wird, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird das Bild als ungültig betrachtet, wenn das Fragment in `image()` nicht verstanden wird.

### Farb-Fallback

Wenn eine Farbe in `image()` zusammen mit Ihren Bildquellen angegeben wird, wirkt sie als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als ob kein Bild enthalten wäre, und erzeugt ein einfarbiges Bild. Ein Anwendungsfall könnte ein dunkles Bild sein, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, wenn das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erstellt ein Farbmuster. Im Gegensatz zu der Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (in der Regel halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbmusters kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element abzudecken. Sowohl die Positionierung von `image(color)` als auch `background-color` werden von den Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist insbesondere für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite kritisch sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen von Erfolgskriterium 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Diese Funktion kann helfen, die Barrierefreiheit zu verbessern, indem sie eine Fallback-Farbe bietet, wenn ein Bild nicht geladen werden kann. Während dies durch Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild erfolgen kann und sollte, erlaubt die CSS `image()` Funktion, dass Hintergrundfarben nur dann hinzugefügt werden, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, wenn ein transparentes PNG/GIF/WebP nicht geladen wird.

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

In den von links nach rechts gerichteten Listeneinträgen — diejenigen mit `dir="ltr"`, die auf dem Element selbst gesetzt sind oder die Richtungsabhängigkeit von einem Vorfahren oder Standardwert für die Seite erben — wird das Bild unverändert verwendet. Listeneinträge mit `dir="rtl"`, die auf dem `<li>` gesetzt sind oder die rechts-nach-links-Richtungsabhängigkeit von einem Vorfahren erben, wie beispielsweise Dokumente, die auf Arabisch oder Hebräisch eingestellt sind, werden das Bullet auf der rechten Seite anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird auch von links nach rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Einen Abschnitt des Hintergrundbildes anzeigen

```html
<div class="box">Hover over me. What cursor do you see?</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

Wenn der Benutzer über das Feld fährt, wird der Cursor die 16x16 px große Sektion des Sprite-Bildes anzeigen, die bei x=32 und y=64 beginnt.

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

Das obige Beispiel legt eine halbtransparente schwarze Maske über das Hintergrundbild des Firefox-Logos. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, wäre die Farbe hinter dem Logosymbol anstelle von darüber erschienen. Zusätzlich hätte der gesamte Container die gleiche Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}} Eigenschaft verhindert haben), wird das Farbfeld nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Es gibt keinen Browser, der diese Funktion implementiert.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
