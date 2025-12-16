---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt aus einem [einzelnen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient)), mit Farbverläufen, die um einen Mittelpunkt gedreht werden (anstatt [vom Zentrum ausstrahlen](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

{{InteractiveExample("CSS Demo: repeating-conic-gradient()")}}

```css interactive-example-choice
background: repeating-conic-gradient(red 0%, yellow 15%, red 33%);
```

```css interactive-example-choice
background: repeating-conic-gradient(
  from 45deg at 10% 50%,
  brown 0deg 10deg,
  darkgoldenrod 10deg 20deg,
  chocolate 20deg 30deg
);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

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

- {{cssxref("angle")}}
  - : Eingeleitet durch das Schlüsselwort `from` und nimmt einen Winkel als Wert ein. Er definiert die Gradientenrotation im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen-, Reihenfolge- und Schlüsselwort-Werte wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position), wobei die Position das Zentrum des Gradienten definiert. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen, (ein {{cssxref("angle")}} entlang der Umfangsachse des Gradienten). Der letzte Farbstopwinkel minus des ersten Definiert die Größe des sich wiederholenden Gradienten.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops die Verlaufsfarbe die Mitte des Farbübergangs erreichen sollte. Wenn sie weggelassen wird, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von Farbstops in wiederholenden konischen Verläufen folgt den gleichen Regeln wie [Farbverlaufsstops in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe umfassen Strahlenbüsche. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{cssxref("gradient")}}, welcher eine spezielle Art von {{cssxref("image")}} ist.

Wenn weder der erste noch der letzte Farbstop einen Farbstopwinkel größer als 0deg oder weniger als 360 Grad respektive enthält, wird der konische Verlauf sich nicht wiederholen.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er sich bezieht, oder der Größe, auf die das `<image>` gesetzt wird, sofern es auf etwas anderes als die Elementgröße gesetzt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen nicht wiederholenden konischen Verlauf zu erzeugen, erstellen Sie den Verlauf mit einer vollen 360-Grad-Rotation oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verständnis von sich wiederholenden konischen Verläufen

Die Syntax für den sich wiederholenden konischen Verlauf ähnelt der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim sich nicht wiederholenden konischen Verlauf werden die Farbstops auf einem Gradientenbogen platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farbstop, der vom Winkel des letzten Farbstopps subtrahiert wird.

![Vergleich der Farbstops für sich wiederholende und nicht wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die obigen Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Um einen sich wiederholenden Verlauf zu erzeugen, definieren wir die ersten und letzten Farbstops. Wie bei nicht wiederholenden Verläufen werden die ersten und letzten Farbstops angenommen, 0 bzw. entweder 100% oder 360deg zu sein, wenn sie nicht explizit deklariert sind. Wenn sie auf diese Werte voreingestellt sind, beträgt der sich wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie beim nicht wiederholenden konischen Verlauf werden die Farbstops um einen Gradientenbogen platziert — den Umfang eines Kreises, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Die Farben wechseln, als ob sie um das Zentrum eines Kreises gedreht werden, beginnend oben, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen dem größten und dem kleinsten Farbwinkel ist und sich dann wiederholt.

Ein sich wiederholender konischer Verlauf wird durch Angabe eines Rotationswinkels, des Mittelpunkts des Gradienten und dann durch Angabe einer Liste von Farbstops spezifiziert. Wie bei nicht wiederholenden konischen Verläufen werden die Farbstops eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Neugrad, `rad` für Radiant und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Neugrad, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% gleich 360 Grad sind, aber dies ist nicht in der Spezifikation enthalten.

Die Syntax für radiale und konische Verläufe bietet die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert {{cssxref('background-position')}}.

Der Gradientenbogen ist Teil des Umfangs des Gradienten. 0 Grad ist Norden, oder 12:00 Uhr. Die Farben des Verlaufs werden durch die angewinkelten Farbstops, ihre Startpunkte, Endpunkte und, dazwischen, und optionale angewinkelte Farbstoppunkte bestimmt. Die Übergänge zwischen Farben können mit Farbhints zwischen benachbarten Farbstopps verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer angewinkelter Farbstoppunkte auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{cssxref("angle")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er in der Mitte zwischen dem davor liegenden und dem darauf folgenden platziert. Wie beim nicht wiederholten Verlaufspartner, wenn Sie keinen Winkel für den ersten oder letzten Farbstop angeben, werden die Werte 0deg und 360deg sein. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht wiederholenden konischen Verlauf. Wenn Sie einen Wert ungleich 0 oder 360 Grad für den ersten oder letzten angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Beispielsweise, wenn Sie keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstop deklarieren, wird der Bogen 10-mal wiederholt. Vielmehr ist der Startpunkt der zuerst deklarierte Farbstop und der letzte Farbstop ist der zuletzt deklarierte Farbstopwinkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig verlaufen die Farben sanft von der Farbe an einem Farbstop zur Farbe am folgenden Farbstop, wobei der Mittelpunkt zwischen den Farben die Mitte des Farbübergangs ist. Sie können diesen Mittelpunkt des Farbübergangs auf jeden Punkt zwischen zwei Farbstops verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte des Farbübergangs sein sollte.

Wenn zwei oder mehr Farbstops an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt an dieser Stelle deklarierten Farbe sein.

Obwohl Sie verschiedene Winkeleinheiten mischen und kombinieren können, tun Sie es nicht. Es macht das CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser geben keine besonderen Informationen über Hintergrundbilder an assistive Technologien weiter. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit nichts an seine Benutzer übermittelt. Während es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, gibt es in CSS-Bildern keinen nativen Weg, um alternativen Text zuzuweisen, und daher wird das von dem konischen Verlauf dargestellte Bild für Benutzer von Screenreadern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite kritisch sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-Weiß-Strahlenkranz

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
  background-image: repeating-conic-gradient(white 0 9deg, black 9deg 18deg);
}
```

{{EmbedLiveSample("Black_and_white_starburst", 220, 220)}}

### Nicht zentrierter Verlauf

Dieser Verlauf wiederholt sich 18 Mal, aber da wir nur die rechte Hälfte sehen, sehen wir nur 9 Wiederholungen.

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem genutzt und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

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

Die Box links verwendet die [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} wechselt. Die Box rechts verwendet die [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
