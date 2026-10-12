---
title: "`image()`-CSS-Funktion"
short-title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: 3a4e7cc6b2104a8b8e64bfece1924ef065328784
---

Die **`image()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{cssxref("image")}} ähnlich wie die Funktion {{CSSxRef("url_function", "url()")}}. Sie bietet jedoch zusätzliche Möglichkeiten: Sie können die Ausrichtung des Bildes angeben, mithilfe eines Medienfragments nur einen Teil des Bildes anzeigen und eine einfarbige Ersatzdarstellung festlegen, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS-Funktion `image()` darf nicht mit [<code>Image()</code>, dem Konstruktor von <code>HTMLImageElement</code>](/de/docs/Web/API/HTMLImageElement/Image) verwechselt werden.

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
  - : Die Ausrichtung des Bildes: `ltr` für links nach rechts oder `rtl` für rechts nach links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}- oder {{CSSxRef("&lt;string&gt;")}}-Werte, die die Bildquellen angeben, optional mit Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe für einen einfarbigen Hintergrund als Ersatz, falls keine `image-src` gefunden wird, unterstützt wird oder angegeben ist.

### Berücksichtigung der Schreibrichtung

Der erste, optionale Parameter der `image()`-Notation gibt die Ausrichtung des Bildes an. Wenn er angegeben ist und das Bild auf einem Element mit entgegengesetzter Ausrichtung verwendet wird, wird es in horizontalen Schreibmodi horizontal gespiegelt. Wird die Ausrichtung weggelassen, wird das Bild bei einer Änderung der Sprachrichtung nicht gespiegelt.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` besteht darin, dass sich an die Bildquelle ein Medienfragment-Identifikator anhängen lässt. Er gibt einen Startpunkt entlang der X- und Y-Achse sowie eine Breite und Höhe an, sodass nur ein Ausschnitt des Quellbildes angezeigt wird. Der im Parameter definierte Bildausschnitt wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements ist der Ausschnitt des Bildes _myImage.webp_, der bei den Koordinaten 0px, 20px (der oberen linken Ecke) beginnt und 40px breit sowie 60px hoch ist.

Die Medienfragment-Syntax `#xywh=#,#,#,#` verwendet vier durch Kommas getrennte numerische Werte. Die ersten beiden geben die X- und Y-Koordinaten des Startpunkts des zu erstellenden Ausschnitts an. Der dritte Wert gibt dessen Breite und der letzte dessen Höhe an. Standardmäßig sind dies Pixelwerte. Laut der [Definition räumlicher Abmessungen in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) werden auch Prozentwerte unterstützt:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Bildfragmente können auch in der `url()`-Notation verwendet werden. Die Medienfragment-Syntax `#xywh=#,#,#,#` ist „abwärtskompatibel“: Wird ein Medienfragment nicht verstanden, wird es ignoriert, ohne den Quellverweis bei Verwendung mit `url()` ungültig zu machen. Versteht der Browser die Medienfragment-Notation nicht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentnotation. Wird das Fragment innerhalb von `image()` nicht verstanden, gilt das Bild daher als ungültig.

### Ersatzfarbe

Wenn in `image()` neben den Bildquellen eine Farbe angegeben wird, dient sie als Ersatz, falls die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die Funktion `image()` ein einfarbiges Bild, als wäre kein Bild angegeben worden. Stellen Sie sich beispielsweise ein dunkles Bild als Hintergrund für weißen Text vor. Falls das Bild nicht gerendert wird, kann eine dunkle Hintergrundfarbe erforderlich sein, damit der Text lesbar bleibt.

Es ist zulässig, Bildquellen wegzulassen und nur eine Farbe anzugeben. Dadurch entsteht eine Farbfläche. Anders als bei {{CSSxRef("background-color")}}, das unter beziehungsweise hinter allen Hintergrundbildern liegt, lassen sich damit (in der Regel halbtransparente) Farben über anderen Bildern platzieren.

Die Größe der Farbfläche lässt sich mit der Eigenschaft {{CSSxRef("background-size")}} festlegen. Dies unterscheidet sich von `background-color`, das eine Farbe für das gesamte Element festlegt. Die Platzierung sowohl von `image(color)` als auch von `background-color` wird durch die Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen Hilfstechnologien keine besonderen Informationen über Hintergrundbilder bereit. Dies ist vor allem für Screenreader wichtig: Ein Screenreader kündigt ein Hintergrundbild nicht an und vermittelt seinen Nutzern daher keine darin enthaltenen Informationen. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, sollten Sie diese Informationen im Dokument semantisch beschreiben.

- [MDN: WCAG verstehen – Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann die Barrierefreiheit verbessern, indem sie eine Ersatzfarbe bereitstellt, wenn ein Bild nicht geladen werden kann. Zwar kann und sollte für jedes Hintergrundbild auch eine Hintergrundfarbe angegeben werden, doch mit der CSS-Funktion `image()` lässt sich eine Ersatzfarbe gezielt für den Fall festlegen, dass das Bild nicht geladen wird. So können Sie beispielsweise eine Ersatzfarbe für ein transparentes PNG-, GIF- oder WebP-Bild angeben.

## Beispiele

### Bilder, die sich an der Schreibrichtung orientieren

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

Bei Listenelementen mit Schreibrichtung von links nach rechts – sei es durch `dir="ltr"` am Element selbst, durch Vererbung von einem Vorfahren oder durch den Standardwert der Seite – wird das Bild unverändert verwendet. Bei Listenelementen mit `dir="rtl"` am `<li>` oder mit von einem Vorfahren geerbter Schreibrichtung von rechts nach links, etwa in arabisch- oder hebräischsprachigen Dokumenten, erscheint das Aufzählungszeichen rechts und wird horizontal gespiegelt, als wäre `transform: scaleX(-1)` gesetzt. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn der Nutzer den Mauszeiger über das Feld bewegt, ändert sich der Cursor und zeigt den 16 × 16 px großen Ausschnitt des Sprite-Bildes an, der bei x=32 und y=64 beginnt.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Eine Farbe über einem Hintergrundbild platzieren

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

Im obigen Beispiel wird eine halbtransparente schwarze Maske über dem Hintergrundbild mit dem Firefox-Logo platziert. Hätten wir stattdessen die Eigenschaft {{cssxref("background-color")}} verwendet, wäre die Farbe hinter statt über dem Logo erschienen. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe erhalten. Da wir `image()` zusammen mit der Eigenschaft {{CSSxRef("background-size")}} verwendet und mit {{CSSxRef("background-repeat")}} die Wiederholung des Bildes verhindert haben, bedeckt die Farbfläche nur ein Viertel des Containers.

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
