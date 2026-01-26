---
title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{cssxref("image")}} auf ähnliche Weise wie die {{CSSxRef("url_function", "url()")}} Funktion, jedoch mit zusätzlicher Funktionalität, einschließlich der Angabe der Bildrichtungen, der Anzeige nur eines Teils dieses Bildes, der durch ein Medien-Fragment definiert ist, und der Angabe einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

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
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bild-Fragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Volltonfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Sensitivität

Der erste, optionale Parameter der `image()` Notation ist die Richtung des Bildes. Wenn dieser inkludiert ist und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn die Sprachrichtung geändert wird.

### Bild-Fragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medien-Fragment-Identifikator hinzuzufügen – einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe – zur Bildquelle, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medien-Fragment-Syntax nimmt vier kommagetrennte Zahlenwerte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Rahmens. Der dritte Wert ist die Breite des Rahmens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bild-Fragmente können auch in der `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medien-Fragment-Syntax ist 'rückwärtskompatibel', da ein Medien-Fragment ignoriert wird, wenn es nicht verstanden wird, und den Quellaufruf bei Verwendung mit `url()` nicht unterbricht. Wenn der Browser die Notation für Medien-Fragmente nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird das Bild, wenn das Fragment innerhalb von `image()` nicht verstanden wird, als ungültig betrachtet.

### Farb-Fallback

Wenn eine Farbe in `image()` zusammen mit Ihren Bildquellen angegeben wird, fungiert sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als ob kein Bild inkludiert wäre, ein Vollton-Farbbild. Ein Anwendungsfall wäre ein dunkles Bild, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht rendert.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist gültig und erzeugt ein Farbmuster. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (im Allgemeinen halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbmusters kann mit der {{CSSxRef("background-size")}} Eigenschaft eingestellt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element zu bedecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologie. Dies ist hauptsächlich für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher den Benutzern nichts vermittelt. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, es im Dokument semantisch zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Dieses Merkmal kann helfen, die Barrierefreiheit zu verbessern, indem eine Fallback-Farbe bereitgestellt wird, wenn ein Bild nicht geladen werden kann. Während dies durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild geschehen kann und sollte, ermöglicht es die CSS `image()` Funktion, nur Hintergrundfarben hinzuzufügen, falls ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht lädt.

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

In den links-nach-rechts Listeneinträgen – diejenigen mit `dir="ltr"` auf dem Element selbst oder die die Richtung von einem Vorfahren oder dem Standardwert für die Seite erben – wird das Bild unverändert verwendet. Listeneinträge mit `dir="rtl"` auf dem `<li>` oder die die rechts-nach-links Richtung von einem Vorfahren erben, wie z.B. Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden das Symbol rechts anzeigen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wäre. Der Text wird ebenfalls links-nach-rechts angezeigt.

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

Das oben Gezeigte wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild legen. Hätten wir stattdessen die {{cssxref("background-color")}} Eigenschaft verwendet, wäre die Farbe hinter dem Logo-Bild anstatt darüber erschienen. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und verhindert haben, dass das Bild mit der {{CSSxRef("background-repeat")}} Eigenschaft wiederholt wird), wird das Farbmuster nur ein Viertel des Containers bedecken.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützen keine Browser dieses Merkmal.

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{cssxref("gradient")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{cssxref("cross-fade()")}}
- [CSS Bilder](/de/docs/Web/CSS/Guides/Images) Modul
