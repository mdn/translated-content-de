---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`image()`**-[CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} in ähnlicher Weise wie die {{CSSxRef("url_function", "url()")}}-Funktion, jedoch mit zusätzlichen Funktionen wie der Angabe der Direktionalität des Bildes, nur einen Teil dieses Bildes anzuzeigen, der durch ein Medienfragment definiert ist, und einer soliden Farbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS-Funktion `image()` sollte nicht verwechselt werden mit [<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor](/de/docs/Web/API/HTMLImageElement/Image).

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
  - : Die Direktionalität des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}} oder {{CSSxRef("&lt;string&gt;")}}, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine solide Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidi-bewusste Bilder

Der erste, optionale Parameter der `image()`-Notation ist die Direktionalität des Bildes. Wenn er enthalten ist und das Bild auf einem Element mit entgegengesetzter Direktionalität verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Direktionalität weggelassen wird, wird das Bild nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein entscheidender Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifier zu einem Bildquellpfad hinzuzufügen — einen Startpunkt entlang der x- und y-Achse sowie eine Breite und Höhe — um nur einen Teil des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#`-Medienfragment-Syntax benötigt vier durch Kommas getrennte numerische Werte. Die ersten beiden stellen die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Kastens dar. Der dritte Wert ist die Breite des Kastens und der letzte Wert die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimensionen in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) zeigt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können ebenfalls in der `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#`-Medienfragment-Syntax ist 'abwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellaufruf bei Verwendung von `url()` nicht unterbrochen wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentnotation. Dementsprechend, wenn das Fragment innerhalb von `image()` nicht verstanden wird, wird das Bild als ungültig betrachtet.

### Farb-Fallback

Wenn in `image()` zusammen mit Ihren Bildquellen eine Farbe angegeben wird, dient sie als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()`-Funktion, als ob kein Bild enthalten wäre, und erzeugt ein einfarbiges Bild. Ein Anwendungsfall könnte ein dunkles Bild sein, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann für die Lesbarkeit des Vordergrundtextes erforderlich sein, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erstellt ein Farbfeld. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (allgemein semitransparente) Farben über andere Bilder zu legen.

Die Größe des Farbfeldes kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe setzt, um das gesamte Element abzudecken. Sowohl `image(color)` als auch `background-color`-Platzierungen werden durch die {{CSSxRef("background-clip")}}- und {{CSSxRef("background-origin")}}-Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien an. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ansagt und daher nichts an seine Benutzer übermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des Gesamtsinns der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erläuterungen zur Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann helfen, die Barrierefreiheit zu verbessern, indem eine Ausweichfarbe bereitgestellt wird, wenn ein Bild nicht geladen wird. Während dies auch durch die Angabe einer Hintergrundfarbe für jedes Hintergrundbild erreicht werden kann und sollte, ermöglicht es die CSS-`image()`-Funktion, nur Hintergrundfarben hinzuzufügen, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Ausweichfarbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

## Beispiele

### Direktionalitätssensitive Bilder

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

Bei den von links-nach-rechts Listeneinträgen — denjenigen, die `dir="ltr"` auf dem Element selbst gesetzt haben, oder die die Direktionalität von einem Vorfahren oder Standardwert für die Seite erben — wird das Bild unverändert verwendet. Listeneinträge mit `dir="rtl"` auf dem `<li>` gesetzt oder die die rechts-nach-links-Richtung von einem Vorfahren erben, wie Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, zeigen das Aufzählungszeichen auf der rechten Seite, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wäre. Der Text wird ebenfalls von links-nach-rechts angezeigt.

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

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor und zeigt den 16x16 px großen Abschnitt des Sprite-Bildes an, beginnend bei x=32 und y=64.

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

Das obige setzt eine semitransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logo-Bild erschienen, anstatt darüber. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}}-Eigenschaft verhindert haben), wird das Farbfeld nur ein Viertel des Containers abdecken.

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
