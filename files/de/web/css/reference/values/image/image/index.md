---
title: "`image()` CSS-Funktion"
short-title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{cssxref("image")}} ähnlich der Funktion {{CSSxRef("url_function", "url()")}}, bietet jedoch zusätzliche Funktionalitäten wie die Angabe der Richtung der Abbildung, das Anzeigen eines nur durch ein Medienfragment definierten Teils der Abbildung sowie das Festlegen einer Volltonfarbe als Fallback für den Fall, dass keine der angegebenen Abbildungen gerendert werden kann.

> [!NOTE]
> Die CSS-Funktion `image()` sollte nicht mit dem [<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Richtung der Abbildung, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen mit optionalen Bildfragment-Identifikatoren angeben.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Volltonhintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bewusstsein der bidirektionalen Darstellung

Der erste, optionale Parameter der `image()`-Notation ist die Richtung der Abbildung. Wenn sie angegeben wird und die Abbildung auf einem Element mit entgegengesetzter Richtung verwendet wird, wird die Abbildung in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird die Abbildung nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator – einen Startpunkt entlang der x- und y-Achse sowie eine Breite und Höhe – an die Bildquelle anzuhängen, um nur einen Abschnitt der Quellabbildung anzuzeigen. Der im Parameter definierte Abschnitt der Abbildung wird zu einer eigenständigen Abbildung. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der an der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die Medienfragment-Syntax `#xywh=#,#,#,#` besteht aus vier durch Komma getrennten numerischen Werten. Die ersten beiden stellen die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Rahmens dar. Der dritte Wert ist die Breite des Rahmens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medien-Spezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()`-Notation verwendet werden. Die Medienfragment-Syntax `#xywh=#,#,#,#` ist "rückwärtskompatibel", da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und den Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragmente-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird, wenn das Fragment innerhalb von `image()` nicht verstanden wird, das Bild als ungültig angesehen.

### Farb-Fallback

Wenn in `image()` neben Ihren Bildquellen eine Farbe angegeben wird, dient sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen wird die `image()`-Funktion gerendert, als ob kein Bild enthalten wäre, und erzeugt ein Volltonbild. Als Anwendungsfall könnte ein dunkles Bild als Hintergrund für weißen Text verwendet werden. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar bleibt, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen, während eine Farbe angegeben wird, ist gültig und erzeugt eine Farbprobe. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (meist halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbprobe kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von `background-color`, die eine Farbe festlegt, um das gesamte Element abzudecken. Sowohl die Platzierung von `image(color)` als auch `background-color` werden durch die {{CSSxRef("background-clip")}}- und {{CSSxRef("background-origin")}}-Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist insbesondere für Bildschirmleser wichtig, da ein Bildschirmleser deren Vorhandensein nicht ankündigt und daher seinen Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Erklärung der Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann die Barrierefreiheit verbessern, indem sie eine Fallback-Farbe bietet, wenn ein Bild nicht geladen werden kann. Während dies durch das Einschließen einer Hintergrundfarbe bei jedem Hintergrundbild erfolgen kann und sollte, ermöglicht die CSS-Funktion `image()`, lediglich Hintergrundfarben hinzuzufügen, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht geladen wird.

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

In den von links-nach-rechts ausgerichteten Listenelementen – denen mit `dir="ltr"` direkt am Element oder geerbter Richtung von einem Vorfahren oder dem Standardwert für die Seite – wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"`, die am `<li>` festgelegt sind oder die rechts-nach-links-Ausrichtung von einem Vorfahren erben, wie etwa Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden das Aufzählungszeichen rechts anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird ebenfalls von links nach rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Abschnitt des Hintergrundbildes anzeigen

```html
<div class="box">Hover over me. What cursor do you see?</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor, um den 16x16 px großen Abschnitt des Sprites-Bildes anzuzeigen, der bei x=32 und y=64 beginnt.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Farbe über einem Hintergrundbild platzieren

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

Oben wird eine halbtransparente schwarze Maske über das Hintergrundbild des Firefox-Logos gelegt. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logobild anstelle von darüber erschienen. Zusätzlich hätte der gesamte Container die gleiche Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}}-Eigenschaft verhindert haben), wird die Farbprobe nur ein Viertel des Containers bedecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit wird diese Funktion von keinem Browser unterstützt.

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{cssxref("gradient")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{cssxref("cross-fade()")}}
- [CSS Images](/de/docs/Web/CSS/Guides/Images) Modul
