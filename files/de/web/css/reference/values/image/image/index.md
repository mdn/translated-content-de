---
title: "`image()` CSS-Funktion"
short-title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{cssxref("image")}} ähnlich der {{CSSxRef("url_function", "url()")}} Funktion, aber mit zusätzlichen Funktionen, einschließlich der Spezifikation der Richtung der Grafik, der Anzeige nur eines Teils des Bildes, der durch ein Medienfragment definiert wird, und der Angabe einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS-`image()`-Funktion sollte nicht mit dem [<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Richtung der Grafik, entweder `ltr` für Links-nach-Rechts oder `rtl` für Rechts-nach-Links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen mit optionalen Bildfragment-Identifikatoren angeben.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Volltonhintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden wird, unterstützt wird oder deklariert wurde.

### Bidirektionale Bewusstheit

Der erste optionale Parameter der `image()`-Notation ist die Richtung der Grafik. Wenn er enthalten ist und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird die Grafik in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird die Grafik nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator hinzuzufügen — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — auf die Bildquelle, um nur einen Abschnitt des Quelldokuments anzuzeigen. Der im Parameter definierte Teil des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (oben links) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Komma getrennte numerische Werte an. Die ersten beiden stellen die X- und Y-Koordinaten für den Anfangspunkt des zu erstellenden Kastens dar. Der dritte Wert ist die Breite des Kastens und der letzte Wert die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können ebenfalls in der `url()`-Notation verwendet werden. Die Syntax des Medienfragments `#xywh=#,#,#,#` ist rückwärtskompatibel, da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und den Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird das Bild als ungültig betrachtet, wenn das Fragment innerhalb von `image()` nicht verstanden wird.

### Farb-Fallback

Wenn in `image()` neben Ihren Bildquellen eine Farbe angegeben wird, dient sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen wird die `image()`-Funktion so gerendert, als ob kein Bild enthalten wäre und ein Volltonbild erzeugt. Als Anwendungsfall kann eine dunkle Grafik als Hintergrund für einige weiße Texte verwendet werden. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordereigentext lesbar ist, wenn das Bild nicht gerendert wird.

Das Weglassen von Bildquellen und das Einbeziehen einer Farbe ist gültig und erzeugt einen Farbmuster. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundgrafiken platziert wird, kann dies verwendet werden, um (in der Regel halbtransparente) Farben über andere Grafiken zu legen.

Die Größe des Farbmusters kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe für das gesamte Element setzt. Sowohl die `image(color)`- als auch die `background-color`-Platzierungen werden von den Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundgrafiken für assistive Technologien. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher den Nutzern nichts vermittelt. Wenn die Grafik Informationen enthält, die für das Verständnis der allgemeinen Zweck der Seite entscheidend sind, ist es besser, sie semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis der Erfolgskriterium 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Dieses Feature kann helfen, die Barrierefreiheit zu verbessern, indem eine Fallback-Farbe bereitgestellt wird, wenn ein Bild nicht geladen wird. Während dies durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild erreicht werden kann und sollte, ermöglicht die CSS-`image()`-Funktion das Hinzufügen, wobei nur Hintergrundfarben hinzugefügt werden, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls eine transparente PNG/GIF/WebP nicht lädt.

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

In den Links-nach-Rechts-Listenelementen — die mit `dir="ltr"` auf dem Element selbst gesetzt oder die Richtung von einem Vorfahren oder Standardwert für die Seite übernehmen — wird die Grafik wie vorgesehen verwendet. Listenelemente mit `dir="rtl"`, die auf dem `<li>` gesetzt oder die Rechts-nach-Links-Richtung von einem Vorfahren übernehmen, z. B. auf Arabisch oder Hebräisch gesetzte Dokumente, werden das Aufzählungszeichen auf der rechten Seite anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wäre. Der Text wird ebenfalls Links-nach-Rechts angezeigt.

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

Wenn der Benutzer über das Feld fährt, wird der Cursor geändert, um den 16x16 px Abschnitt des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

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

Das oben Genannte wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild legen. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logobild erschienen anstelle darüber. Zusätzlich hätte der gesamte Container die gleiche Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}}-Eigenschaft verhindert haben, wird der Farbmuster nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Feature.

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{cssxref("gradient")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{cssxref("cross-fade()")}}
- [CSS-Bilder](/de/docs/Web/CSS/Guides/Images) Modul
