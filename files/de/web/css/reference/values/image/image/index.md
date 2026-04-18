---
title: "`image()` CSS-Funktion"
short-title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{cssxref("image")}} ähnlich wie die {{CSSxRef("url_function", "url()")}} Funktion, bietet jedoch zusätzliche Funktionalitäten, einschließlich der Spezifikation der Bildrichtung, der Anzeige nur eines Teils des Bildes, der durch ein Medienfragment definiert wird, und der Angabe einer Vollfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

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
  - : Die Richtung des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine feste Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Wahrnehmung

Der erste, optionale Parameter der `image()` Notation ist die Richtungsangabe des Bildes. Wenn angegeben und das Bild in einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator — einen Startpunkt entlang der x- und y-Achse sowie eine Breite und Höhe — an die Bildquelle anzuhängen, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei den Koordinaten 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte an. Die ersten beiden Werte stellen die X- und Y-Koordinaten für den Startpunkt des Gebildes kästchens dar. Der dritte Wert ist die Breite des Kastens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist 'rückwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und die Quellangabe nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragmente-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird das Bild als ungültig angesehen, wenn das Fragment innerhalb `image()` nicht verstanden wird.

### Farb-Fallback

Wenn in `image()` neben Ihren Bildquellen eine Farbe angegeben wird, fungiert sie als Fallback, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion so, als wäre kein Bild enthalten, und erzeugt ein Vollfarbenbild. Ein Anwendungsfall besteht darin, ein dunkles Bild als Hintergrund für weißen Text zu verwenden. Eine dunkle Hintergrundfarbe könnte erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erzeugt ein Farbfeld. Anders als bei Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (in der Regel halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbfelds kann mit der {{CSSxRef("background-size")}} Eigenschaft eingestellt werden. Dies unterscheidet sich von der `background-color`, welche eine Farbe festlegt, die das gesamte Element abdeckt. Sowohl die Platzierung von `image(color)` als auch `background-color` werden durch die {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader nicht auf seine Anwesenheit hinweist und daher nichts den Benutzern vermittelt. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgs-Kriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann helfen, die Barrierefreiheit zu verbessern, indem eine Fallback-Farbe bereitgestellt wird, wenn ein Bild nicht geladen werden kann. Obwohl dies durch die Einbeziehung einer Hintergrundfarbe auf jedem Hintergrundbild erfolgen sollte, ermöglicht die CSS `image()` Funktion, nur Hintergrundfarben hinzuzufügen, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, sollte ein transparentes PNG/GIF/WebP nicht laden.

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

In den von links nach rechts ausgerichteten Listenelementen — solche mit `dir="ltr"` auf dem Element selbst gesetzt oder die die Richtung von einem Vorfahren oder dem Standardwert der Seite erben — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` auf dem `<li>` gesetzt oder die die rechts-nach-links-Richtung von einem Vorfahren erben, wie Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, haben die Aufzählung auf der rechten Seite, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wäre. Der Text wird ebenfalls links-nach-rechts angezeigt.

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

Wenn der Benutzer über das Kästchen schwebt, ändert sich der Cursor und zeigt den 16x16 px Abschnitt des Sprite-Bildes, der bei x=32 und y=64 beginnt.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Über ein Hintergrundbild Farbe legen

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

Das oben Genannte legt eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, hätte die Farbe hinter dem Logobild statt darüber erschienen. Zusätzlich hätte der gesamte Container die gleiche Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Bild daran gehindert haben, sich mit der {{CSSxRef("background-repeat")}} Eigenschaft zu wiederholen), wird das Farbfeld nur ein Viertel des Containers abdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{cssxref("gradient")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{cssxref("cross-fade()")}}
- [CSS Bilder](/de/docs/Web/CSS/Guides/Images) Modul
