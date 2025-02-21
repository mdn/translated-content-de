---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie die {{CSSxRef("url_function", "url()")}} Funktion, jedoch mit zusätzlicher Funktionalität, einschließlich der Angabe der Bildrichtung, dem Anzeigen nur eines Teils des Bildes, der durch ein Medienfragment definiert ist, sowie der Spezifizierung einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

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
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s zur Angabe der Bildquellen, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Volltonhintergrundfarbe angibt, die als Fallback verwendet wird, falls kein `image-src` gefunden, unterstützt oder deklariert wird.

### Bewusstsein für Bidirektionalität

Der erste, optionale Parameter der `image()` Notation ist die Richtung des Bildes. Wenn enthalten und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibmodi horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Fähigkeit, einen Medienfragment-Identifikator hinzuzufügen — einen Startpunkt entlang der X- und Y-Achse, zusammen mit einer Breite und einer Höhe — an die Bildquelle, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht so aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei den Koordinaten 0px, 20px (von der oberen linken Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte. Die ersten beiden sind die X- und Y-Koordinaten für den Startpunkt des Kastens, der erstellt wird. Der dritte Wert ist die Breite des Kastens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) zeigt, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist 'rückwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und die Quellaufrufe nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird, wenn das Fragment innerhalb von `image()` nicht verstanden wird, das Bild als ungültig angesehen.

### Farb-Fallback

Wenn in `image()` neben Ihren Bildquellen eine Farbe angegeben ist, dient sie als Fallback, falls die Bilder ungültig sind und nicht erscheinen. In solchen Fällen rendert die `image()` Funktion so, als ob kein Bild enthalten wäre, und erzeugt ein Volltonfarben-Bild. Ein Anwendungsfall ist, wenn ein dunkles Bild als Hintergrund für einen weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht rendert.

Das Auslassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erzeugt eine Farbmusterfläche. Anders als bei der Deklarierung eines {{CSSxRef("background-color")}}, der unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (generell halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbmusterfläche kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von `background-color`, die eine Farbe zur Abdeckung des gesamten Elements setzt. Beide `image(color)` und `background-color` Platzierungen werden von den Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät seine Präsenz nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann dazu beitragen, die Zugänglichkeit zu verbessern, indem sie eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen werden kann. Während dies durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild getan werden kann und sollte, ermöglicht die CSS `image()` Funktion das Hinzufügen von Hintergrundfarben nur, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

## Beispiele

### Richtungsempfindliche Bilder

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

In den links-nach-rechts Listenpunkten — bei denen `dir="ltr"` auf dem Element selbst gesetzt oder die Richtung von einem Vorfahren oder dem Standardwert für die Seite geerbt wurde — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` auf dem `<li>` gesetzt oder die rechts-nach-links Richtung von einem Vorfahren erben, wie Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden das Aufzählungszeichen auf der rechten Seite anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wurde. Der Text wird ebenfalls links-nach-rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Anzeige eines Abschnitts des Hintergrundbildes

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

### Platzierung von Farbe auf einem Hintergrundbild

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

Die obigen Code-Beispiele legen eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir die {{CSSxRef("background-color")}} Eigenschaft verwendet, würde die Farbe hinter dem Logobild anstatt darüber erscheinen. Zudem hätte der gesamte Container dieselbe Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}} Eigenschaft verhindert haben), wird das Farbmuster nur ein Viertel des Containers abdecken.

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
