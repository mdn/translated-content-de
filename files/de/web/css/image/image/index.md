---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich der {{CSSxRef("url_function", "url()")}}-Funktion, jedoch mit zusätzlicher Funktionalität. Dazu gehört das Festlegen der Richtung der Grafik, das Anzeigen eines nur durch ein Medienfragment definierten Teils der Grafik und das Angeben einer Volltonfarbe als Fallback, falls keiner der angegebenen Grafiken gerendert werden kann.

> [!NOTE]
> Die CSS-`image()`-Funktion sollte nicht mit {{DOMxRef("HTMLImageElement/Image", '<code>Image()</code>, dem <code>HTMLImageElement</code>-Konstruktor', '', 1)}} verwechselt werden.

## Syntax

{{CSSSyntax}}

wobei:

- `image-tags` {{optional_inline}}
  - : Die Richtung der Grafik, entweder `ltr` für von links nach rechts oder `rtl` für von rechts nach links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Grafiquellen angeben, mit optionalen Grafikfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine Vollton-Hintergrundfarbe angibt, die als Fallback verwendet wird, falls keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bewusstsein für Bidirektionalität

Der erste, optionale Parameter der `image()`-Notation ist die Richtung der Grafik. Wenn dieser enthalten ist und die Grafik auf einem Element mit entgegengesetzter Richtung verwendet wird, wird die Grafik in horizontalen Schreibmodi horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird die Grafik nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Grafikfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Fähigkeit, einen Medienfragment-Identifikator hinzuzufügen — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — zur Grafiquelle, um nur einen Abschnitt der Quellgrafik anzuzeigen. Der Abschnitt der Grafik, der im Parameter definiert ist, wird zu einer eigenständigen Grafik. Die Syntax sieht wie folgt aus:

```css
background-image: image("myimage.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil der Grafik _myImage.webp_ sein, der am Koordinatenpunkt 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#`-Medienfragment-Syntax nimmt vier durch Komma getrennte numerische Werte. Die ersten beiden repräsentieren die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Kastens. Der dritte Wert ist die Breite des Kastens und der letzte Wert ist die Höhe. Standardmäßig handelt es sich um Pixelwerte. Die [räumliche Dimensionen-Definition in der Media-Spezifikation](https://www.w3.org/TR/media-frags/#naming-space) gibt an, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Grafikfragmente können auch in `url()`-Notation verwendet werden. Die `#xywh=#,#,#,#`-Medienfragment-Syntax ist „abwärtskompatibel“, indem ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und der Quellaufruf nicht unterbrochen wird, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragmente und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentnotation. Wenn das Fragment innerhalb `image()` nicht verstanden wird, gilt die Grafik als ungültig.

### Farb-Fallback

Wenn in `image()` eine Farbe zusammen mit Ihren Grafiquellen angegeben wird, fungiert sie als Fallback, wenn die Grafiken ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()`-Funktion, als ob keine Grafik enthalten wäre, und erzeugt ein einfarbiges Bild. Als Anwendungsfall kann man sich ein dunkles Bild vorstellen, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht gerendert wird.

Das Auslassen von Grafiquellen und das Einschließen einer Farbe ist gültig und erzeugt eine Farbschattierung. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundgrafiken platziert wird, kann dies (allgemein halbtransparente) Farben über anderen Grafiken platzieren.

Die Größe der Farbschattierung kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, um das gesamte Element zu bedecken. Sowohl `image(color)` als auch `background-color`-Platzierungen werden von den {{CSSxRef("background-clip")}}- und {{CSSxRef("background-origin")}}-Eigenschaften beeinflusst.

## Barrierefreiheit

Browser bieten assistiven Technologien keine besonderen Informationen über Hintergrundbilder. Dies ist hauptsächlich für Bildschirmleser wichtig, da ein Bildschirmleser seine Existenz nicht ankündigt und daher nichts an seine Benutzer weitergeben wird. Wenn die Grafik Informationen enthält, die zum Verständnis des Gesamtsinns der Seite erforderlich sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung zum Erfolgskriterium 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Dieses Merkmal kann dazu beitragen, die Barrierefreiheit zu verbessern, indem es eine Fallback-Farbe bereitstellt, wenn eine Grafik nicht geladen wird. Während dies erreicht und getan werden kann, indem eine Hintergrundfarbe auf jedes Hintergrundbild angewendet wird, ermöglicht die CSS-`image()`-Funktion das Hinzufügen von Hintergrundfarben nur, wenn eine Grafik nicht geladen wird, was bedeutet, dass Sie eine Fallback-Farbe hinzufügen können, wenn eine transparente PNG-/GIF-/WebP-Grafik nicht geladen wird.

## Beispiele

### Richtungsabhängige Grafiken

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

In den von links nach rechts ausgerichteten Listenelementen - diejenigen, die `dir="ltr"` auf dem Element selbst gesetzt haben oder die Richtung von einem Vorfahren oder Standardwert für die Seite erben - wird die Grafik wie ist verwendet. Listenelemente mit `dir="rtl"`, die auf dem `<li>` gesetzt ist oder die von einem Vorfahren die von rechts nach links gerichtete Richtung erben, wie z.B. Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, lassen das Aufzählungszeichen rechts erscheinen, horizontal gespiegelt, als ob `transform: scaleX(-1)` gesetzt wäre. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn der Benutzer über das Feld fährt, ändert sich der Cursor, um den 16x16 px großen Bereich des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Eine Farbe über ein Hintergrundbild legen

```css hidden
.quarterlogo {
  height: 200px;
  width: 200px;
  border: 1px solid;
}
```

```css
.quarterlogo {
  background-image: image(rgb(0 0 0 / 25%)), url("firefox.png");
  background-size: 25%;
  background-repeat: no-repeat;
}
```

```html
<div class="quarterlogo">
  If supported, a quarter of this div has a darkened logo
</div>
```

Das oben Gezeigte wird eine halbtransparente schwarze Maske über das Hintergrundbild des Firefox-Logos legen. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logo-Bild statt darüber erschienen. Zusätzlich hätte der gesamte Container dieselbe Hintergrundfarbe gehabt. Weil wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendet haben (und das Bild daran gehindert haben, sich mit der {{CSSxRef("background-repeat")}}-Eigenschaft zu wiederholen), deckt die Farbschattierung nur ein Viertel des Containers ab.

{{EmbedLiveSample("Putting_color_on_top_of_a_background_image", "100%", 220)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("&lt;image&gt;")}}
- {{CSSxRef("element", "element()")}}
- {{cssxref("url_value", "&lt;url&gt;")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("image/image-set", "image-set()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
