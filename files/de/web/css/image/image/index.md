---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie die {{CSSxRef("url_function", "url()")}}-Funktion, jedoch mit zusätzlicher Funktionalität. Dazu gehören die Festlegung der Direktionalität des Bildes, das Anzeigen eines bestimmten Abschnitts des Bildes, der durch ein Medienfragment definiert ist, sowie das Festlegen einer Volltonfarbe als Fallback, falls keiner der angegebenen Bildquellen gerendert werden kann.

> [!NOTE]
> Die CSS-`image()`-Funktion darf nicht mit [<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Direktionalität des Bildes, entweder `ltr` für Links-nach-Rechts oder `rtl` für Rechts-nach-Links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}, die die Bildquellen spezifizieren, einschließlich optionaler Bildfragment-IDs.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Vollton-Hintergrundfarbe als Fallback angibt, falls keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Sensibilität

Der erste, optionale Parameter der `image()`-Notation ist die Direktionalität des Bildes. Wenn sie angegeben wird und das Bild auf einem Element mit entgegengesetzter Direktionalität eingesetzt wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Direktionalität weggelassen wird, wird das Bild nicht gespiegelt, selbst wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein Hauptunterschied zwischen `url()` und `image()` ist die Möglichkeit, eine Medienfragment-ID hinzuzufügen – ein Startpunkt entlang der x- und y-Achse sowie eine Breite und Höhe –, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter spezifizierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht wie folgt aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Abschnitt des Bildes _myImage.webp_ sein, der an den Koordinaten 0px, 20px (die obere linke Ecke) beginnt und 40px breit sowie 60px hoch ist.

Die `#xywh=#,#,#,#`-Medienfragment-Syntax umfasst vier durch Kommas getrennte numerische Werte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Ausgangspunkt des zu erstellenden Rechtecks. Der dritte Wert ist die Breite des Rechtecks und der letzte Wert die Höhe. Standardmäßig handelt es sich hierbei um Pixelwerte. Die [Definition der räumlichen Dimensionen in der Medien-Spezifikation](https://www.w3.org/TR/media-frags/#naming-space) zeigt, dass auch Prozentwerte unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Bildfragmente können auch in der `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#`-Medienfragment-Syntax ist 'abwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellaufruf bei Verwendung mit `url()` nicht unterbrochen wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` unterstützen, verstehen auch die Fragment-Notation. Wenn das Fragment innerhalb von `image()` nicht verstanden wird, gilt das Bild als ungültig.

### Farb-Fallback

Wenn in `image()` zusammen mit den Bildquellen eine Farbe angegeben wird, dient diese als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen wird die `image()`-Funktion so gerendert, als ob kein Bild enthalten wäre, und erzeugt ein Vollton-Farb-Bild. Ein Anwendungsfall könnte ein dunkles Bild sein, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe könnte benötigt werden, damit der Text im Vordergrund lesbar ist, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erzeugt eine Farbfläche. Anders als die Deklaration von {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (im Allgemeinen halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbfläche kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von `background-color`, das eine Farbe für das gesamte Element setzt. Sowohl `image(color)` als auch die `background-color`-Platzierungen werden von den Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies betrifft hauptsächlich Screenreader, da ein Screenreader deren Vorhandensein nicht ankündigt und somit nichts an seine Benutzer überträgt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Zwecks der Seite sind, sollte es semantisch im Dokument beschrieben werden.

- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann helfen, die Barrierefreiheit zu verbessern, indem sie eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen wird. Dies sollte und kann auch durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild geschehen. Die CSS-`image()`-Funktion ermöglicht es jedoch, Hintergrundfarben nur dann einzufügen, wenn ein Bild nicht geladen wird. Das bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

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

In den Listenelementen, die von links nach rechts geschrieben werden — jene mit `dir="ltr"`, die auf dem Element selbst gesetzt sind oder die Direktionalität von einem Vorfahren oder dem Standardwert der Seite erben — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl`, die am `<li>` gesetzt sind oder die Rechts-nach-Links-Direktionalität von einem Vorfahren erben, wie z. B. Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden die Aufzählungspunkte rechts anzeigen und dabei horizontal spiegeln, als wäre `transform: scaleX(-1)` gesetzt. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn der Benutzer mit der Maus über das Kästchen fährt, wird der Cursor den 16x16 px großen Abschnitt des Sprite-Bildes anzeigen, beginnend bei x=32 und y=64.

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

Das obige wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild legen. Hätten wir die {{CSSxRef("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logobild statt darüber erschienen. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe gehabt. Durch die Verwendung von `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft (und durch das Verhindern des Wiederholens des Bildes mit der Eigenschaft {{CSSxRef("background-repeat")}}) wird die Farbfläche nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Kein Browser implementiert diese Funktion.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
