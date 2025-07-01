---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie die {{CSSxRef("url_function", "url()")}} Funktion, bietet jedoch zusätzliche Funktionalitäten, wie das Festlegen der Richtung des Bildes, das Anzeigen nur eines Teils des Bildes, der durch ein Media-Fragment definiert ist, und das Angeben einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

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
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen spezifizieren, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Vollton-Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Zwei-Wege-Bewusstsein

Der erste, optionale Parameter der `image()` Notation ist die Richtung des Bildes. Wenn er enthalten ist und das Bild auf einem Element mit entgegen gesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibmodi horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Media-Fragment-Identifikator hinzuzufügen — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — zur Bildquelle, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Abschnitt des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (der oberen linken Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Media-Fragment-Syntax enthält vier durch Kommas getrennte numerische Werte. Die ersten beiden stehen für die X- und Y-Koordinaten des Startpunkts des zu erstellenden Rechtecks. Der dritte Wert ist die Breite des Rechtecks, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Media-Spezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Media-Fragment-Syntax ist 'rückwärtskompatibel', da ein Media-Fragment ignoriert wird, wenn es nicht verstanden wird, und die Quellaufruf nicht bricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Media-Fragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Wird das Fragment innerhalb von `image()` nicht verstanden, wird das Bild als ungültig betrachtet.

### Farb-Fallback

Wenn in `image()` zusammen mit den Bildquellen eine Farbe angegeben wird, dient sie als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als ob kein Bild enthalten wäre, und erzeugt ein Volltonbild. Ein Anwendungsfall ist beispielsweise ein dunkles Bild, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe könnte erforderlich sein, damit der Vordergrundtext lesbar bleibt, wenn das Bild nicht gerendert wird.

Das Auslassen von Bildquellen bei gleichzeitigem Hinzufügen einer Farbe ist gültig und erzeugt eine Farbfelder. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (in der Regel halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbfelds kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element abzudecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten Technologien für Barrierefreiheit keine speziellen Informationen zu Hintergrundbildern. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit den Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtsinns der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann zur Verbesserung der Barrierefreiheit beitragen, indem sie eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen werden kann. Obwohl dies durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild geschehen kann und sollte, ermöglicht die CSS `image()` Funktion, nur dann Hintergrundfarben einzuschließen, wenn ein Bild nicht geladen werden kann, was bedeutet, dass Sie eine Ausweichfarbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

## Beispiele

### Richtungssensitive Bilder

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

In den von links nach rechts orientierten Listenelementen – diejenigen, die `dir="ltr"` auf dem Element selbst oder durch Vererbung der Richtung von einem Vorfahren oder dem Standardwert für die Seite haben – wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` auf dem `<li>` oder durch Vererbung der von rechts nach links Orientierung von einem Vorfahren, wie z. B. Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden das Aufzählungszeichen von rechts angezeigt, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor, um den 16x16 px Abschnitt des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Eine Farbe über ein Hintergrundbild legen

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

Durch obige Einstellungen wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild gelegt. Hätten wir die {{cssxref("background-color")}} Eigenschaft verwendet, würde die Farbe hinter dem Logo-Bild statt darüber erscheinen. Zusätzlich hätte der gesamte Container die gleiche Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Wiederholen des Bildes verhindert haben mit der {{CSSxRef("background-repeat")}} Eigenschaft), wird das Farbfeld nur ein Viertel des Containers abdecken.

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
