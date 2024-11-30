---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 36197e9ff8f503d40729889367fe1ad76d2f3640
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), bei dem Farbverläufe um einen Mittelpunkt gedreht werden (anstatt vom Mittelpunkt aus [zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

{{EmbedInteractiveExample("pages/css/function-repeating-conic-gradient.html")}}

## Syntax

```css
/* Starburst: a blue on blue starburst: the gradient
   is a starburst of lighter and darker blue,
   centered in the upper left quadrant,
   offset by 3degrees so there is no up/down straight line */
repeating-conic-gradient(
  from 3deg at 25% 25%,
  hsl(200 100% 50%) 0deg 15deg,
  hsl(200 100% 60%) 10deg 30deg
)

/* Interpolation in polar color space
  with longer hue interpolation method */
repeating-conic-gradient(in hsl shorter hue, red, blue 90deg, green 180deg)
```

### Werte

- {{CSSxRef("&lt;angle&gt;")}}
  - : Gefolgt vom Schlüsselwort `from` und mit einem Winkel als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mithilfe derselben Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position) wird die Position des Zentrums des Verlaufs definiert. Wenn ausgelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbpunkt mit einem {{{CSSxRef("&lt;color&gt;")}}} Wert, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farbpunkt minus dem Winkel des ersten Farbpunktes definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie sich der Verlauf zwischen benachbarten Farbstopps entwickelt. Die Länge definiert, zu welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe den Mittelpunkt des Farbwechsels erreichen sollte. Wenn ausgelassen, ist der Mittelpunkt des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in wiederholenden Kegelverläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiel für wiederholende Kegelverläufe sind Lichtstrahlen. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt vom Datentyp {{CSSxRef("&lt;gradient&gt;")}}, das eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder die ersten noch die letzten Farbstopps einen Farbstop-Winkel größer als 0deg bzw. kleiner als 360 Grad enthalten, wird der Kegelverlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender Kegelverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe, auf die das `<image>` gesetzt wurde, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen Kegelverlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Drehung oder verwenden Sie stattdessen die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis von sich wiederholenden Kegelverläufen

Die Syntax des sich wiederholenden Kegelverlaufs ist ähnlich der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie der nicht wiederholende Kegelverlauf werden die Farbstopps um einen Verlaufsbogen platziert. Wie bei dem wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farbpunkt, subtrahiert vom Winkel des letzten Farbpunktes.

![Vergleich der Farbstopps für sich wiederholende und nicht wiederholende Kegel- und Radialverläufe](repeatingconicgradient.png)

Die obigen Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein sich wiederholender Verlauf wiederholt, definieren wir die ersten und letzten Farbstopps. Wie bei nicht wiederholenden Verläufen werden die ersten und letzten Farbstopps als 0 und entweder 100% oder 360deg angenommen, wenn nicht explizit angegeben. Wenn diese Werte standardmäßig gesetzt werden, beträgt der wiederholte Bogen 360 Grad und wird daher nicht wiederholt.

Wie bei dem nicht wiederholenden Kegelverlauf werden die Farbstopps um einen Verlaufsbogen - den Umfang eines Kreises - und nicht auf der Verlaufsachse platziert, die vom Zentrum des Verlaufs ausgeht. Die Farben wechseln, als würden sie um das Zentrum eines Kreises gedreht, beginnend oben, wenn kein `from <angle>` deklariert wird, im Uhrzeigersinn in der Größe des Winkels, der der Unterschied zwischen dem größten und kleinsten Farbwinkel ist, und dann im Verlauf wiederholend.

Ein sich wiederholender Kegelverlauf wird angegeben, indem ein Rotationswinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstops angegeben werden. Wie bei nicht wiederholenden Kegelverläufen werden die Farbstopps eines sich wiederholenden Kegelverlaufs mit einem {{cssxref('angle')}} definiert. Einheiten beinhalten `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Gradienten, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die wiederholende Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, jedoch ist dies nicht in der Spezifikation enthalten.

Die Radial- und Kegelverlaufs-Syntax ermöglicht die Positionierung des Zentrums des Verlaufs überall innerhalb oder sogar außerhalb des Bildes. Die Werte für die Positionierung sind ähnlich der Syntax für 2-Werte {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die geneigten Farbstopps, ihre Startpunkte, Endpunkte und, dazwischen, fakultativ geneigte Farbstoppunkte bestimmt. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen benachbarten Farben veränderte werden.

#### Anpassen von Verläufen

Indem Sie mehr geneigte Farbstopppunkte auf dem Verlaufsbogen hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopppunktes kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopppunktes nicht angeben, wird er zur Hälfte zwischen dem davor und dem danach platziert. Wie beim nicht wiederholenden Verlaufspendant, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, liegen die Werte bei 0deg und 360deg. Wenn Sie für keinen einen Winkel angeben, erhalten Sie einen nicht wiederholten Kegelverlauf. Wenn Sie für den ersten und letzten bzw. ersten oder letzten einen nicht 0- oder 360-Grad-Winkel angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10% beim letzten Farbstopp deklarieren, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbstopp und der letzte Farbstopp der zuletzt deklarierte Farbstoppwinkel. Die folgenden beiden Verläufe sind äquivalent:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbpunkt zur Farbe am nachfolgenden Farbpunkt, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbwechsels ist. Sie können diesen Farbwechsel-Mittelpunkt an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbwechsels liegen soll.

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein.

Obwohl Sie verschiedene Winkeleinheiten mischen können, tun Sie es nicht. Es macht CSS schwer lesbar.

### Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist insbesondere für Screenreader wichtig, da ein Screenreader seine Präsenz nicht ankündigen wird und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortengrafiken, Schachbretter und andere Effekte mit Kegelverläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen, und daher ist das Bild, das durch den Kegelverlauf dargestellt wird, für Bildschirmleser nicht zugänglich. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Erklärungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Schwarzer und weißer Lichtstrahlen-Verlauf

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}
```

{{EmbedLiveSample("Black_and_white_starburst", 220, 220)}}

### Exzentrischer Verlauf

Dieser Verlauf wiederholt sich 18-mal, aber da wir nur die rechte Hälfte sehen, sehen wir nur 9 Wiederholungen.

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: repeating-conic-gradient(
    from 3deg at 25% 25%,
    green,
    blue 2deg 5deg,
    green,
    yellow 15deg 18deg,
    green 20deg
  );
}
```

{{EmbedLiveSample("Off-centered_gradient", 220, 220)}}

### Interpolation mit Farbton

```html hidden
<div class="shorter"></div>
<div class="longer"></div>
```

```css hidden
div {
  display: inline-block;
  margin-top: 1rem;
  width: 45vw;
  height: 80vh;
}

.shorter::before {
  content: "shorter hue";
  display: block;
  margin-top: -1rem;
}

.longer::before {
  content: "longer hue";
  display: block;
  margin-top: -1rem;
}
```

In diesem Beispiel für die Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: repeating-conic-gradient(
    in hsl shorter hue,
    red,
    blue 180deg
  );
}

.longer {
  background-image: repeating-conic-gradient(
    in hsl longer hue,
    red,
    blue 180deg
  );
}
```

Das Feld links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} geht. Das Feld rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und durch Grüntöne, Gelbtöne und Orangetöne verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele zu repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
