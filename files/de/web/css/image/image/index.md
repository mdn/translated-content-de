---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} auf ähnliche Weise wie die {{CSSxRef("url_function", "url()")}} Funktion, aber mit zusätzlichen Funktionalitäten, einschließlich der Festlegung der Richtungsabhängigkeit des Bildes, der Anzeige nur eines Teils des Bildes, der durch ein Medienfragment definiert ist, und der Festlegung einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder wiedergegeben werden kann.

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
image(rgb(0 0 255 / 0.5)), url("bg-image.png");
```

### Werte

- `image-tags` {{optional_inline}}
  - : Die Richtungsabhängigkeit des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Volltonhintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder erklärt wird.

### Bewusstsein für Bidirektionalität

Der erste, optionale Parameter der `image()`-Notation ist die Richtungsabhängigkeit des Bildes. Wenn er angegeben wird und das Bild auf einem Element mit entgegengesetzter Richtungsabhängigkeit verwendet wird, wird das Bild in horizontalen Schreibmodi horizontal gespiegelt. Wenn die Richtungsabhängigkeit weggelassen wird, wird das Bild nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator hinzuzufügen – einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe – zur Bildquelle, um nur einen Teil des Quellbildes anzuzeigen. Der im Parameter definierte Bildabschnitt wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der an der Koordinate 0px, 20px (in der oberen linken Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des Box, die erstellt wird. Der dritte Wert ist die Breite der Box und der letzte Wert die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definitionsspezifikation der räumlichen Dimension im Medienkontext](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist 'rückwärtskompatibel', sodass ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellanruf nicht unterbrochen wird, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird, wenn das Fragment in `image()` nicht verstanden wird, das Bild als ungültig betrachtet.

### Fallback-Farbe

Wenn in `image()` zusammen mit den Bildquellen eine Farbe angegeben wird, fungiert diese als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()`-Funktion, als ob kein Bild enthalten wäre, und erzeugt ein Vollton-Farb-Bild. Ein Anwendungsfall könnte ein dunkles Bild sein, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht angezeigt wird.

Das Weglassen von Bildquellen bei Angabe einer Farbe ist gültig und erzeugt eine Farbfläche. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dieser verwendet werden, um (in der Regel halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbfläche kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies ist anders als die `background-color`, die eine Farbe auf das gesamte Element festlegt. Sowohl `image(color)` als auch `background-color` Platzierungen werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern zur Unterstützung von Technologie. Dies ist insbesondere für Bildschirmleser wichtig, da ein Bildschirmleser deren Vorhandensein nicht ankündigt und somit seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtziels der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann dazu beitragen, die Barrierefreiheit zu verbessern, indem eine Fallback-Farbe bereitgestellt wird, wenn ein Bild nicht geladen werden kann. Während dies durch das Einfügen einer Hintergrundfarbe bei jedem Hintergrundbild geschehen kann und sollte, ermöglicht die CSS `image()` Funktion das Hinzufügen von Hintergrundfarben nur dann, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

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

In den von links-nach-rechts Listenelementen — diejenigen mit `dir="ltr"` auf dem Element selbst oder die die Richtungsabhängigkeit von einem Vorfahren oder dem Standardwert der Seite erben — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` auf `<li>` gesetzt oder die die rechts-nach-links Richtungsabhängigkeit von einem Vorfahren erben, wie Dokumente, die auf Arabisch oder Hebräisch eingestellt sind, zeigen die Kugel auf der rechten Seite, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wäre. Der Text wird auch von links-nach-rechts angezeigt.

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

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor so, dass der 16x16 px Abschnitt des Sprite-Bildes angezeigt wird, beginnend bei x=32 und y=64.

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

Das obige Beispiel legt eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, wäre die Farbe hinter dem Logobild statt darüber erschienen. Außerdem hätte der gesamte Container die gleiche Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}} Eigenschaft verhindert haben), wird die Farbfläche nur einen Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
- [CSS images](/de/docs/Web/CSS/CSS_images) Modul
