---
title: "`image()`-CSS-Funktion"
short-title: image()
slug: Web/CSS/Reference/Values/image/image
l10n:
  sourceCommit: d78544a841b0e266a6efc169c044573f5e0b4e7d
---

Die **`image()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert ein {{cssxref("image")}}, ähnlich wie die Funktion {{CSSxRef("url_function", "url()")}}. Sie bietet jedoch zusätzliche Möglichkeiten: Sie können die Ausrichtung des Bildes angeben, mithilfe eines Medienfragments nur einen Ausschnitt anzeigen und eine einfarbige Ersatzdarstellung festlegen, falls keines der angegebenen Bilder gerendert werden kann.

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
  - : Die Ausrichtung des Bildes: `ltr` für von links nach rechts oder `rtl` für von rechts nach links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}- oder {{CSSxRef("&lt;string&gt;")}}-Werte, die die Bildquellen angeben, optional mit Bildfragmentkennungen.
- `color` {{optional_inline}}
  - : Eine Farbe, die als einfarbiger Ersatz verwendet wird, wenn keine `image-src` gefunden, unterstützt oder angegeben wird.

### Berücksichtigung der Schreibrichtung

Der erste, optionale Parameter der `image()`-Notation gibt die Ausrichtung des Bildes an. Ist er vorhanden und wird das Bild auf einem Element mit entgegengesetzter Schreibrichtung verwendet, wird es in horizontalen Schreibmodi horizontal gespiegelt. Wird die Ausrichtung weggelassen, wird das Bild bei einer Änderung der Sprachrichtung nicht gespiegelt.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` besteht darin, dass Sie der Bildquelle eine Medienfragmentkennung hinzufügen können. Sie legt einen Startpunkt auf der x- und y-Achse sowie eine Breite und Höhe fest, sodass nur ein Ausschnitt des Quellbildes angezeigt wird. Der durch den Parameter definierte Ausschnitt wird zu einem eigenständigen Bild. Die Syntax sieht so aus:

```css
background-image: image("my-image.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements ist der Ausschnitt aus _myImage.webp_, der bei den Koordinaten 0px, 20px (seiner oberen linken Ecke) beginnt, 40px breit und 60px hoch ist.

Die Medienfragmentsyntax `#xywh=#,#,#,#` nimmt vier durch Kommas getrennte numerische Werte entgegen. Die ersten beiden geben die X- und Y-Koordinaten des Startpunkts des Ausschnitts an. Der dritte Wert ist seine Breite, der letzte seine Höhe. Standardmäßig sind dies Pixelwerte. Laut der [Definition räumlicher Dimensionen in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) sollen auch Prozentangaben unterstützt werden:

```plain
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Bildfragmente können auch in der `url()`-Notation verwendet werden. Die Medienfragmentsyntax `#xywh=#,#,#,#` ist „abwärtskompatibel“: Wird ein Medienfragment nicht verstanden, wird es ignoriert, ohne den Quellenaufruf mit `url()` ungültig zu machen. Versteht der Browser die Medienfragmentnotation nicht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentnotation. Wird das Fragment innerhalb von `image()` nicht verstanden, gilt das Bild daher als ungültig.

### Ersatzfarbe

Wenn Sie in `image()` neben den Bildquellen eine Farbe angeben, dient sie als Ersatz, falls die Bilder ungültig sind und nicht angezeigt werden. In diesem Fall rendert die Funktion `image()` ein einfarbiges Bild, als wäre kein Bild angegeben worden. Ein Anwendungsfall ist ein dunkles Bild als Hintergrund für weißen Text: Wird das Bild nicht gerendert, kann eine dunkle Hintergrundfarbe nötig sein, damit der Text lesbar bleibt.

Es ist zulässig, eine Farbe ohne Bildquellen anzugeben. Dadurch entsteht eine einfarbige Fläche. Anders als eine Angabe mit {{CSSxRef("background-color")}}, die unter beziehungsweise hinter allen Hintergrundbildern liegt, lässt sich diese Fläche verwenden, um Farben – in der Regel halbtransparent – über andere Bilder zu legen.

Die Größe der Farbfläche lässt sich mit der Eigenschaft {{CSSxRef("background-size")}} festlegen. Das unterscheidet sie von `background-color`, das eine Farbe für das gesamte Element festlegt. Die Platzierung sowohl von `image(color)` als auch von `background-color` wird durch die Eigenschaften {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} beeinflusst.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen Hilfstechnologien keine besonderen Informationen über Hintergrundbilder bereit. Das ist vor allem für Screenreader wichtig: Sie kündigen ein Hintergrundbild nicht an und vermitteln ihren Nutzern daher keine darin enthaltenen Informationen. Enthält das Bild Informationen, die für das Verständnis des übergeordneten Zwecks der Seite wesentlich sind, sollten Sie diese im Dokument semantisch beschreiben.

- [MDN: Erläuterungen zu WCAG-Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erfolgskriterium 1.1.1 verstehen | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

Diese Funktion kann die Barrierefreiheit verbessern, indem sie eine Ersatzfarbe bereitstellt, wenn ein Bild nicht geladen wird. Zwar lässt sich – und sollte – für jedes Hintergrundbild auch eine Hintergrundfarbe festlegen. Mit der CSS-Funktion `image()` können Sie jedoch eine Farbe angeben, die nur dann als Ersatz erscheint, wenn das Bild nicht geladen wird. So können Sie auch für ein transparentes PNG-, GIF- oder WebP-Bild eine Ersatzfarbe vorsehen.

## Beispiele

### Von der Schreibrichtung abhängige Bilder

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

Bei Listeneinträgen mit Schreibrichtung von links nach rechts – weil `dir="ltr"` auf dem Element selbst gesetzt ist oder die Schreibrichtung von einem Vorfahren beziehungsweise dem Standardwert der Seite geerbt wird – wird das Bild unverändert verwendet. Bei Listeneinträgen, für die `dir="rtl"` auf dem `<li>` gesetzt ist oder die Schreibrichtung von rechts nach links von einem Vorfahren geerbt wird, etwa in arabisch- oder hebräischsprachigen Dokumenten, erscheint das Aufzählungszeichen rechts und wird horizontal gespiegelt, als wäre `transform: scaleX(-1)` gesetzt. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn Sie den Mauszeiger über die Box bewegen, ändert sich der Cursor und zeigt einen 16 × 16 px großen Ausschnitt des Sprite-Bildes, beginnend bei x=32 und y=64.

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

Im obigen Beispiel wird eine halbtransparente schwarze Maske über das Firefox-Logo als Hintergrundbild gelegt. Hätten wir stattdessen die Eigenschaft {{cssxref("background-color")}} verwendet, wäre die Farbe hinter dem Logo statt darüber erschienen. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe erhalten. Da wir `image()` zusammen mit der Eigenschaft {{CSSxRef("background-size")}} verwendet und die Wiederholung des Bildes mit der Eigenschaft {{CSSxRef("background-repeat")}} verhindert haben, bedeckt die Farbfläche nur ein Viertel des Containers.

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
