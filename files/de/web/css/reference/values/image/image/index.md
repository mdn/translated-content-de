---
title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`image()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie die Funktion {{CSSxRef("url_function", "url()")}}, bietet jedoch zusätzliche Funktionalitäten, einschließlich der Angabe der Ausrichtung des Bildes, des Anzeigens nur eines Teils dieses Bildes, der durch ein Medienfragment definiert wird, und der Angabe einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS-`image()`-Funktion sollte nicht mit [<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Ausrichtung des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine solide Hintergrundfarbe angibt, die als Fallback verwendet werden soll, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bewusstsein für Bidirektionalität

Der erste optionale Parameter der `image()`-Notation ist die Ausrichtung des Bildes. Wenn sie angegeben ist und das Bild auf einem Element mit entgegengesetzter Ausrichtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Ausrichtung weggelassen wird, wird das Bild nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Fähigkeit, einen Medienfragment-Identifikator — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — an die Bildquelle anzuhängen, um nur einen Ausschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Bildausschnitt wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements ist der Teil des Bildes _myImage.webp_, der an der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#`-Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Kastens. Der dritte Wert ist die Breite des Kastens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#`-Medienfragment-Syntax ist "rückwärts kompatibel", da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und den Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragmente-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird, wenn das Fragment innerhalb von `image()` nicht verstanden wird, das Bild als ungültig angesehen.

### Farb-Fallback

Wenn in `image()` zusammen mit Ihren Bildquellen eine Farbe angegeben ist, fungiert sie als Fallback, wenn die Bilder ungültig sind und nicht erscheinen. In solchen Fällen wird die `image()`-Funktion so gezeichnet, als wäre kein Bild enthalten, und erzeugt ein einfarbiges Bild. Als Anwendungsfall könnten Sie ein dunkles Bild als Hintergrund für weißen Text verwenden. Eine dunkle Hintergrundfarbe könnte erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht wiedergegeben wird.

Das Auslassen von Bildquellen, während eine Farbe angegeben wird, ist gültig und erzeugt eine Farbfahne. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (allgemein halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbfahne kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element zu überdecken. Sowohl `image(color)`-als auch `background-color`-Platzierungen werden durch die {{CSSxRef("background-clip")}}- und {{CSSxRef("background-origin")}}-Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser geben assistiven Technologien keine speziellen Informationen über Hintergrundbilder. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und daher seinen Nutzern nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Erklärung zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung zum Erfolgskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann die Barrierefreiheit verbessern, indem sie eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen wird. Während dies durch das Einbinden einer Hintergrundfarbe bei jedem Hintergrundbild geschehen kann und sollte, ermöglicht die CSS-`image()`-Funktion das Hinzufügen von Hintergrundfarben nur, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, sollte ein transparentes PNG/GIF/WebP nicht geladen werden.

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

In den links-nach-rechts-Listelementen — jenen mit `dir="ltr"` auf dem Element selbst gesetzt oder die die Richtung von einem Vorfahren oder dem Standardwert für die Seite erben — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"`, die auf dem `<li>` gesetzt sind oder die rechts-nach-links-Richtung von einem Vorfahren erben, wie Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden die Kugel rechts, horizontal gespiegelt anzeigen, als wäre `transform: scaleX(-1)` gesetzt. Der Text wird auch links-nach-rechts angezeigt.

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

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor, um den 16x16 px großen Abschnitt des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

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

Das oben Genannte wird eine halbtransparente schwarze Maske über das Hintergrundbild des Firefox-Logos legen. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, würde die Farbe hinter dem Logo erscheinen, anstatt darüber. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und verhindert haben, dass sich das Bild mit der {{CSSxRef("background-repeat")}}-Eigenschaft wiederholt), wird die Farbfahne nur ein Viertel des Containers überdecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser diese Funktion.

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
- [CSS images](/de/docs/Web/CSS/CSS_images) Modul
