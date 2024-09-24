---
title: image()
slug: Web/CSS/image/image
l10n:
  sourceCommit: 5178e1e7c9edf0c9c652275ae62f090042ce2422
---

{{CSSRef}}

Die **`image()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert ein {{CSSxRef("&lt;image&gt;")}} ähnlich wie die {{CSSxRef("url_function", "url()")}} Funktion, bietet aber zusätzliche Funktionen wie die Angabe der Richtung der Bilder, das Anzeigen nur eines Teils des Bildes definiert durch ein Medienfragment und das Festlegen einer Volltonfarbe als Fallback, falls keiner der angegebenen Bilder gerendert werden kann.

> [!NOTE]
> Die CSS `image()` Funktion sollte nicht verwechselt werden mit {{DOMxRef("HTMLImageElement/Image", '<code>Image()</code>, der <code>HTMLImageElement</code> Konstruktor', '', 1)}}.

## Syntax

{{CSSSyntax}}

wo:

- `image-tags` {{optional_inline}}
  - : Die Richtung des Bildes, entweder `ltr` für links-nach-rechts oder `rtl` für rechts-nach-links.
- `image-src` {{Optional_Inline}}
  - : Null oder mehr {{cssxref("url_value", "&lt;url&gt;")}}s oder {{CSSxRef("&lt;string&gt;")}}s, die die Bildquellen spezifizieren, mit optionalen Bildfragment-Identifikatoren.
- `color` {{optional_inline}}
  - : Eine Farbe, die eine feste Hintergrundfarbe angibt, die als Fallback verwendet wird, wenn keine `image-src` gefunden, unterstützt oder deklariert wird.

### Bidirektionale Bewusstheit

Der erste, optionale Parameter der `image()` Notation ist die Richtung des Bildes. Wenn dieser enthalten ist und das Bild auf einem Element mit entgegengesetzter Richtung verwendet wird, wird das Bild in horizontalen Schreibrichtungen horizontal gespiegelt. Wenn die Richtung weggelassen wird, wird das Bild nicht gespiegelt, wenn sich die Sprachrichtung ändert.

### Bildfragmente

Ein wichtiger Unterschied zwischen `url()` und `image()` ist die Fähigkeit, einen Medienfragment-Identifikator hinzuzufügen — einen Startpunkt entlang der x- und y-Achse, zusammen mit einer Breite und Höhe — zur Bildquelle, um nur einen Abschnitt des Quellbildes anzuzeigen. Der im Parameter definierte Bildabschnitt wird zu einem eigenständigen Bild. Die Syntax sieht so aus:

```css
background-image: image("myimage.webp#xywh=0,20,40,60");
```

Das Hintergrundbild des Elements wird der Teil des Bildes _myImage.webp_ sein, der bei den Koordinaten 0px, 20px (die obere linke Ecke) beginnt und 40px breit und 60px hoch ist.

Die `#xywh=#,#,#,#` Medienfragment-Syntax nimmt vier durch Kommas getrennte numerische Werte an. Die ersten beiden stehen für die X- und Y-Koordinaten für den Startpunkt des zu erstellenden Rechtecks. Der dritte Wert ist die Breite des Rechtecks, und der letzte Wert ist die Höhe. Standardmäßig sind dies Pixelwerte. Die [Definition der räumlichen Dimension in der Medienspezifikation](https://www.w3.org/TR/media-frags/#naming-space) zeigt an, dass auch Prozentsätze unterstützt werden:

```css
xywh=160,120,320,240        /* ergibt ein 320x240 Bild bei x=160 und y=120 */
xywh=pixel:160,120,320,240  /* ergibt ein 320x240 Bild bei x=160 und y=120 */
xywh=percent:25,25,50,50    /* ergibt ein 50%x50% Bild bei x=25% und y=25% */
```

Die Bildfragmente können auch in `url()` Notation verwendet werden. Die `#xywh=#,#,#,#` Medienfragment-Syntax ist "abwärtskompatibel", da ein Medienfragment ignoriert wird, wenn es nicht verstanden wird, und die Quellaufruf nicht unterbricht, wenn es mit `url()` verwendet wird. Wenn der Browser die Medienfragment-Notation nicht versteht, ignoriert er das Fragment und zeigt das gesamte Bild an.

Browser, die `image()` verstehen, verstehen auch die Fragmentnotation. Daher wird das Bild, wenn das Fragment innerhalb von `image()` nicht verstanden wird, als ungültig betrachtet.

### Farbfallback

Wenn eine Farbe in `image()` zusammen mit den Bildquellen angegeben wird, dient sie als Fallback, wenn die Bilder ungültig sind und nicht angezeigt werden. In solchen Fällen rendert die `image()` Funktion, als wäre kein Bild enthalten, und erzeugt ein Volltonfarbenbild. Als Anwendungsfall könnte ein dunkles Bild als Hintergrund für weißen Text verwendet werden. Eine dunkle Hintergrundfarbe könnte nötig sein, damit der Vordergrundtext lesbar ist, falls das Bild nicht gerendert wird.

Das Weglassen von Bildquellen bei gleichzeitiger Angabe einer Farbe ist zulässig und erzeugt eine Farbfelder. Im Gegensatz zur Deklaration einer {{CSSxRef("background-color")}}, die unter oder hinter allen Hintergrundbildern platziert wird, kann dies verwendet werden, um (in der Regel halbtransparente) Farben über andere Bilder zu legen.

Die Größe des Farbfeldes kann mit der {{CSSxRef("background-size")}} Eigenschaft festgelegt werden. Dies unterscheidet sich von `background-color`, die eine Farbe festlegt, um das gesamte Element zu bedecken. Sowohl `image(color)` als auch `background-color` Platzierungen werden von den {{CSSxRef("background-clip")}} und {{CSSxRef("background-origin")}} Eigenschaften beeinflusst.

## Barrierefreiheit

Browser bieten keine spezielle Information zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät seine Präsenz nicht ankündigt und seinen Benutzern daher nichts vermittelt. Wenn das Bild Informationen enthält, die zum Verständnis des gesamten Zwecks der Seite kritisch sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgs-Kriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

Dieses Feature kann helfen, die Barrierefreiheit zu verbessern, indem eine Fallbackfarbe bereitgestellt wird, wenn ein Bild nicht geladen werden kann. Während dies und sollte durch das Hinzufügen einer Hintergrundfarbe zu jedem Hintergrundbild erfolgen, ermöglicht die CSS `image()` Funktion, Hintergrundfarben nur dann hinzuzufügen, wenn ein Bild nicht geladen wird, was bedeutet, dass Sie eine Fallbackfarbe hinzufügen können, falls ein transparentes PNG/GIF/WebP nicht lädt.

## Beispiele

### Richtungsabhängige Bilder

```html
<ul>
  <li dir="ltr">Bullet ist ein nach rechts zeigender Pfeil auf der linken Seite</li>
  <li dir="rtl">Bullet ist derselbe Pfeil, gespiegelt, um nach links zu zeigen.</li>
</ul>
```

```css
ul {
  list-style-image: image(ltr "rightarrow.png");
}
```

In den links-nach-rechts Listenpunkten — diejenigen mit `dir="ltr"` auf dem Element selbst gesetzt oder die die Richtung von einem Vorfahren oder dem Standardwert für die Seite erben — wird das Bild unverändert verwendet. Listenpunkte mit `dir="rtl"` auf dem `<li>` gesetzt oder die die rechts-nach-links Richtung von einem Vorfahren erben, wie z.B. Dokumente, die auf Arabisch oder Hebräisch eingestellt sind, zeigen das Bullet auf der rechten Seite, horizontal gespiegelt, als ob `transform: scaleX(-1)` eingestellt worden wäre. Der Text wird auch links-nach-rechts angezeigt.

{{EmbedLiveSample("Directionally-sensitive_images", "100%", 200)}}

### Anzeigen eines Abschnitts des Hintergrundbildes

```html
<div class="box">Hover über mich. Was für einen Cursor sehen Sie?</div>
```

```css
.box:hover {
  cursor: image("sprite.png#xywh=32,64,16,16");
}
```

Wenn der Benutzer über das Feld schwebt, ändert sich der Cursor, um den 16x16 px Abschnitt des Sprite-Bildes anzuzeigen, beginnend bei x=32 und y=64.

{{EmbedLiveSample("Displaying_a_section_of_the_background_image", "100%", 100)}}

### Legen einer Farbe über ein Hintergrundbild

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
  Wenn unterstützt, hat ein Viertel dieses div ein abgedunkeltes Logo
</div>
```

Das obige wird eine halbtransparente schwarze Maske über das Firefox-Logo-Hintergrundbild legen. Hätten wir die {{cssxref("background-color")}} Eigenschaft stattdessen verwendet, hätte die Farbe hinter dem Logo-Bild erschienen, anstatt darüber. Darüber hinaus hätte das gesamte Container denselben Hintergrundfarbe gehabt. Da wir `image()` zusammen mit der {{CSSxRef("background-size")}} Eigenschaft verwendet haben (und das Wiederholen des Bildes mit der {{CSSxRef("background-repeat")}} Eigenschaft verhindert haben), deckt das Farbfeld nur ein Viertel des Containers ab.

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
