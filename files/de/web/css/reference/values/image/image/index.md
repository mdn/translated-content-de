---
title: CSS-Funktion `image()`
short-title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

Die **`image()`**-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) von [CSS](/de/docs/Web/CSS) definiert ein {{cssxref("image")}} ähnlich wie die Funktion {{CSSxRef("url_function", "url()")}}. Sie bietet jedoch zusätzliche Möglichkeiten: Sie können die Richtung des Bildes festlegen, mithilfe eines Medienfragments nur einen Ausschnitt des Bildes anzeigen und eine einfarbige Ersatzdarstellung angeben, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS-Funktion `image()` ist nicht mit [<code>Image()</code>, dem Konstruktor von <code>HTMLImageElement</code>](/de/docs/Web/API/HTMLImageElement/Image), zu verwechseln.

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
  - : Die Richtung des Bildes: `ltr` für links nach rechts oder `rtl` für rechts nach links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}- oder {{CSSxRef("&lt;string&gt;")}}-Werte, die die Bildquellen angeben, optional mit Bildfragmentbezeichnern.
- `color` {{optional_inline}}
  - : Eine Farbe, die als einfarbiger Hintergrund verwendet wird, falls keine `image-src` gefunden wird, unterstützt wird oder angegeben ist.

### Berücksichtigung der Schreibrichtung

Der erste, optionale Parameter der `image()`-Notation gibt die Richtung des Bildes an. Ist er angegeben und wird das Bild auf einem Element mit entgegengesetzter Schreibrichtung verwendet, wird es bei horizontalen Schreibmodi horizontal gespiegelt. Wird die Richtung nicht angegeben, wird das Bild bei einer Änderung der Schreibrichtung nicht gespiegelt.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` besteht darin, dass der Bildquelle ein Medienfragmentbezeichner hinzugefügt werden kann. Dieser legt einen Startpunkt auf der x- und y-Achse sowie eine Breite und Höhe fest, sodass nur ein Ausschnitt des Quellbildes angezeigt wird. Der im Parameter definierte Ausschnitt wird zu einem eigenständigen Bild. Die Syntax sieht so aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements ist der Ausschnitt aus _myImage.webp_, der bei den Koordinaten 0px, 20px beginnt – an seiner linken oberen Ecke – und 40px breit sowie 60px hoch ist.

Die Medienfragmentsyntax `#xywh=#,#,#,#` verwendet vier durch Kommas getrennte Zahlenwerte. Die ersten beiden geben die X- und Y-Koordinaten des Startpunkts des zu erstellenden Ausschnitts an. Der dritte Wert ist seine Breite, der letzte seine Höhe. Standardmäßig sind diese Werte Pixelangaben. Laut der [Definition räumlicher Dimensionen in der Medienfragment-Spezifikation](https://www.w3.org/TR/media-frags/#naming-space) sollen auch Prozentangaben unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Bildfragmente können auch in der `url()`-Notation verwendet werden. Die Medienfragmentsyntax `#xywh=#,#,#,#` ist „abwärtskompatibel“: Wird ein Medienfragment nicht verstanden, wird es ignoriert, ohne dass die Quellenangabe bei Verwendung mit `url()` ungültig wird. Versteht der Browser die Medienfragmentnotation nicht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentnotation. Wird das Fragment innerhalb von `image()` nicht verstanden, gilt das Bild daher als ungültig.

### Ersatzfarbe

Wird in `image()` neben den Bildquellen eine Farbe angegeben, dient sie als Ersatz, wenn die Bilder ungültig sind und nicht angezeigt werden. In diesem Fall rendert die Funktion `image()` ein einfarbiges Bild, als wäre kein Bild angegeben worden. Stellen Sie sich beispielsweise ein dunkles Bild als Hintergrund für weißen Text vor. Falls das Bild nicht gerendert wird, kann eine dunkle Hintergrundfarbe erforderlich sein, damit der Text lesbar bleibt.

Es ist zulässig, die Bildquellen wegzulassen und nur eine Farbe anzugeben. Dadurch entsteht eine einfarbige Fläche. Anders als bei {{CSSxRef("background-color")}}, das unter beziehungsweise hinter allen Hintergrundbildern liegt, können so Farben – üblicherweise halbtransparent – über andere Bilder gelegt werden.

Die Größe der Farbfläche lässt sich mit der Eigenschaft {{CSSxRef("background-size")}} festlegen. Das unterscheidet sich von `background-color`, das die Farbe auf das gesamte Element anwendet. Die Platzierung sowohl von `image(color)` als auch von `background-color` wird durch die Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen Hilfstechnologien keine besonderen Informationen über Hintergrundbilder bereit. Das ist vor allem für Screenreader wichtig: Sie kündigen ein Hintergrundbild nicht an und vermitteln ihren Nutzern daher keine darin enthaltenen Informationen. Enthält das Bild Informationen, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, sollten Sie diese stattdessen semantisch im Dokument beschreiben.

- [MDN: WCAG verstehen – Erläuterungen zu Leitlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C: WCAG 2.0 verstehen](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann die Barrierefreiheit verbessern, indem sie eine Ersatzfarbe bereitstellt, wenn ein Bild nicht geladen werden kann. Zwar kann und sollte dafür bei jedem Hintergrundbild auch eine Hintergrundfarbe angegeben werden, doch mit der CSS-Funktion `image()` lässt sich eine Ersatzfarbe festlegen, die nur dann erscheint, wenn das Bild nicht geladen wird. Das ist beispielsweise für transparente PNG-, GIF- oder WebP-Bilder nützlich.

## Beispiele

### Bilder, die auf die Schreibrichtung reagieren

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

Bei Listenelementen mit Schreibrichtung von links nach rechts wird das Bild unverändert verwendet. Das gilt für Elemente, bei denen `dir="ltr"` direkt gesetzt ist, sowie für solche, die diese Schreibrichtung von einem übergeordneten Element oder vom Standardwert der Seite übernehmen. Bei Listenelementen, bei denen `dir="rtl"` auf dem `<li>` gesetzt ist oder die die Schreibrichtung von rechts nach links von einem übergeordneten Element übernehmen – etwa in arabisch- oder hebräischsprachigen Dokumenten –, erscheint das Aufzählungszeichen rechts und wird horizontal gespiegelt, als wäre `transform: scaleX(-1)` gesetzt. Der Text wird ebenfalls von links nach rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Einen Ausschnitt des Hintergrundbildes anzeigen

```html
<div class="box">Hover over me. What cursor do you see?</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16"), auto;
}
```

Wenn die nutzende Person den Mauszeiger über das Feld bewegt, ändert sich der Cursor und zeigt den 16 × 16 px großen Ausschnitt des Sprite-Bildes, der bei x=32 und y=64 beginnt.

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

Dadurch wird eine halbtransparente schwarze Maske über das Hintergrundbild mit dem Firefox-Logo gelegt. Hätten wir stattdessen die Eigenschaft {{cssxref("background-color")}} verwendet, würde die Farbe hinter dem Logo und nicht darüber erscheinen. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe. Da wir `image()` zusammen mit der Eigenschaft {{CSSxRef("background-size")}} verwenden und mit {{CSSxRef("background-repeat")}} verhindern, dass sich das Bild wiederholt, bedeckt die Farbfläche nur ein Viertel des Containers.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Derzeit unterstützt kein Browser diese Funktion.

## Siehe auch

- {{cssxref("image")}}
- {{cssxref("element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{cssxref("gradient")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{cssxref("cross-fade()")}}
- Modul [CSS-Bilder](/de/docs/Web/CSS/Guides/Images)
