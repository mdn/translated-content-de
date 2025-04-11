---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie die {{CSSxRef("url_function", "url()")}}-Funktion, bietet jedoch zusätzliche Funktionalitäten wie das Festlegen der Bildrichtung, das Anzeigen nur eines Teils dieses Bildes, der durch ein Medienfragment definiert ist, und das Festlegen einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS `image()` Funktion sollte nicht mit [<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Richtung des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragmentkennzeichnungen.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine feste Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Sensibilität

Der erste, optionale Parameter der `image()` Notation ist die Richtung des Bildes. Wird dieser Parameter angegeben, und das Bild auf einem Element mit entgegengesetzter Richtung verwendet, wird das Bild horizontal in Schreibmodi mit horizontaler Ausrichtung gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifier hinzuzufügen — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — zur Bildquelle, um nur einen Abschnitt des Quellbildes anzuzeigen. Der in dem Parameter definierte Ausschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht so aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#`-Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte an. Die ersten beiden stellen die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Kastens dar. Der dritte Wert ist die Breite des Kastens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimensionen in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können ebenfalls in der `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#`-Medienfragment-Syntax ist 'abwärtskompatibel' in dem Sinne, dass ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und den Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird, wenn das Fragment innerhalb von `image()` nicht verstanden wird, das Bild als ungültig betrachtet.

### Farbfallback

Wenn in `image()` zusammen mit Ihren Bildquellen eine Farbe angegeben ist, fungiert sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als ob kein Bild enthalten wäre und erzeugt ein Volltonfarbbild. Betrachten Sie als Anwendungsfall ein dunkles Bild, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe könnte benötigt werden, damit der Vordergrundtext lesbar ist, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erzeugt einen Farbblock. Anders als bei der Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (allgemein halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbblocks kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element zu bedecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten assistiven Technologien keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigt und daher seinen Nutzern nichts vermittelt. Wenn das Bild wesentliche Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgs Kriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Dieses Feature kann zur Verbesserung der Zugänglichkeit beitragen, indem es eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen wird. Dies kann und sollte durch Einfügen einer Hintergrundfarbe auf jedem Hintergrundbild erfolgen. Die CSS `image()`-Funktion ermöglicht es, Hintergrundfarben nur dann hinzuzufügen, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, wenn ein transparentes PNG/GIF/WebP nicht geladen wird.

## Beispiele

### Bilder mit Richtungssensitivität

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

In den links-nach-rechts-Listenelementen — also denen, bei denen `dir="ltr"` auf dem Element selbst festgelegt ist oder die die Richtung von einem Vorfahren oder Standardwert für die Seite erben — wird das Bild unverändert verwendet. Listenelemente, bei denen `dir="rtl"` auf dem `<li>` festgelegt ist oder die die rechts-nach-links-Richtung von einem Vorfahren erben, wie etwa Dokumente in Arabisch oder Hebräisch, werden den Aufzählungspunkt rechts anzeigen und horizontal spiegeln, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird ebenfalls links-nach-rechts angezeigt.

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

Wenn der Benutzer über das Feld schwebt, ändert sich der Cursor, um den 16x16 px Abschnitt des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

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

Das obige Beispiel legt eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logo-Bild erschienen, anstatt darüber. Außerdem hätte der gesamte Container die gleiche Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}}-Eigenschaft verhindert haben), wird der Farbblock nur ein Viertel des Containers bedecken.

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
