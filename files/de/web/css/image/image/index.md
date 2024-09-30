---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich der {{CSSxRef("url_function", "url()")}}-Funktion, bietet jedoch zusätzliche Funktionalitäten wie das Festlegen der Bildrichtung, das Anzeigen nur eines Teils des Bildes, der durch ein Medienfragment definiert ist, und das Festlegen einer Volltonfarbe als Fallback, falls keines der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS `image()` Funktion sollte nicht mit {{DOMxRef("HTMLImageElement/Image", '<code>Image()</code>, dem <code>HTMLImageElement</code> Konstruktor', '', 1)}} verwechselt werden.

## Syntax

{{CSSSyntax}}

wo:

- `image-tags` {{optional_inline}}
  - : Die Richtung des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen angeben, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die einen festen Hintergrund darstellt, der als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Wahrnehmung

Der erste, optionale Parameter der `image()`-Notation ist die Richtung des Bildes. Wenn er enthalten ist und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wesentlicher Unterschied zwischen `url()` und `image()` ist die Möglichkeit, einen Medienfragment-Identifikator hinzuzufügen - einen Ausgangspunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe - zur Bildquelle, um nur einen Abschnitt des Ausgangsbildes anzuzeigen. Der im Parameter definierte Abschnitt des Bildes wird zu einem eigenständigen Bild. Die Syntax sieht folgendermaßen aus:

```css
background-image: image("myimage.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Abschnitt des Bildes _myImage.webp_ sein, der bei der Koordinate 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die Medienfragment-Syntax `#xywh=#,#,#,#` nimmt vier durch Komma getrennte numerische Werte. Die ersten beiden stehen für die X- und Y-Koordinaten für den Ausgangspunkt des zu erstellenden Kastens. Der dritte Wert ist die Breite des Kastens, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [räumliche Dimensionsdefinition in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) zeigt an, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* results in a 320x240 image at x=160 and y=120 */
xywh=pixel:160,120,320,240  /* results in a 320x240 image at x=160 and y=120 */
xywh=percent:25,25,50,50    /* results in a 50%x50% image at x=25% and y=25% */
```

Die Bildfragmente können auch in der `url()`-Notation verwendet werden. Die Medienfragment-Syntax `#xywh=#,#,#,#` ist 'abwärtskompatibel', da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und den Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragmente-Syntax nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragment-Notation. Daher wird das Bild als ungültig angesehen, wenn das Fragment innerhalb von `image()` nicht verstanden wird.

### Farbfallback

Wenn in `image()` zusammen mit Ihren Bildquellen eine Farbe angegeben wird, dient sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()`-Funktion, als ob kein Bild enthalten wäre, und erzeugt ein Volltonfarbbild. Als Anwendungsfall könnte man sich ein dunkles Bild vorstellen, das als Hintergrund für weißen Text verwendet wird. Eine dunkle Hintergrundfarbe kann erforderlich sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht rendert.

Das Weglassen von Bildquellen bei gleichzeitigem Einschluss einer Farbe ist gültig und erzeugt eine Farbprobe. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (im Allgemeinen halbtransparente) Farben über andere Bilder zu legen.

Die Größe der Farbprobe kann mit der {{CSSxRef("background-size")}}-Eigenschaft festgelegt werden. Dies unterscheidet sich von der `background-color`, die eine Farbe festlegt, die das gesamte Element abdeckt. Die Platzierungen von `image(color)` und `background-color` werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}}-Eigenschaften beeinflusst.

## Barrierefreiheit

Browser bieten der unterstützenden Technologie keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Screenreader wichtig, da ein Screenreader weder deren Existenz ankündigt noch dessen Nutzern etwas vermittelt. Wenn das Bild Informationen enthält, die entscheidend sind, um den Gesamtzweck der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Diese Funktion kann dazu beitragen, die Barrierefreiheit zu verbessern, indem sie eine Fallback-Farbe bereitstellt, wenn ein Bild nicht geladen werden kann. Während dies durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild geschehen kann und sollte, ermöglicht die CSS `image()` Funktion das Hinzufügen von Hintergrundfarben, wenn ein Bild nicht geladen wird. Sie können also eine Fallback-Farbe hinzufügen, wenn ein transparentes PNG/GIF/WebP nicht geladen wird.

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

In den von links nach rechts verlaufenden Listenelementen — denjenigen mit `dir="ltr"` auf dem Element selbst gesetzt oder diese Richtung von einem Vorfahren oder dem Standardwert für die Seite ererbt — wird das Bild unverändert verwendet. Listenelemente mit `dir="rtl"` auf dem `<li>` gesetzt oder die die Richtung von rechts nach links von einem Vorfahren erben, wie z. B. Dokumente, die auf Arabisch oder Hebräisch gesetzt sind, werden das Aufzählungszeichen auf der rechten Seite horizontal gespiegelt anzeigen, als ob `transform: scaleX(-1)` gesetzt worden wäre. Der Text wird ebenfalls von links nach rechts angezeigt.

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

Wenn der Benutzer über das Feld schwebt, ändert sich der Cursor und zeigt den 16x16 px großen Abschnitt des Sprite-Bildes an, beginnend bei x=32 und y=64.

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

Das obige Beispiel legt eine halbtransparente schwarze Maske über das Hintergrundbild des Firefox-Logos. Hätten wir stattdessen die {{cssxref("background-color")}}-Eigenschaft verwendet, wäre die Farbe hinter dem Logo-Bild erschienen, anstatt darüber. Außerdem hätte der gesamte Container dieselbe Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}}-Eigenschaft verwendeten (und verhinderten, dass sich das Bild mit der {{CSSxRef("background-repeat")}}-Eigenschaft wiederholt), wird die Farbprobe nur ein Viertel des Containers abdecken.

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
