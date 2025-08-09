---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt einem [einzelnen Verlauf](/de/docs/Web/CSS/gradient/conic-gradient)) mit Farbübergängen, die um einen Mittelpunkt rotieren (anstatt [vom Zentrum auszustrahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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

- {{CSSxRef("&lt;angle&gt;")}}
  - : Angegeben durch das Schlüsselwort `from`, gefolgt von einem Winkel als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position), die Position definiert das Zentrum des Verlaufs. Wenn ausgelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfanguachse des Verlaufs). Der letzte Farbstopp minus der erste Farbstopp-Winkel definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps die Verlaufsfarbe den Mittelpunkt des Farbübergangs erreichen sollte. Wird sie weggelassen, ist der Mittelpunkt des Farbverlaufs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden kegelförmigen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende Kegelverläufe umfassen Sternexplosionen. Das Ergebnis der `repeating-conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farbstopp einen Farbstopp-Winkel größer als 0 Grad oder kleiner als 360 Grad aufweist, wird der Kegelverlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender Kegelverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat weder eine natürliche noch bevorzugte Größe oder ein bevorzugtes Seitenverhältnis. Seine konkrete Größe wird die Größe des Elements annehmen, auf das er angewendet wird, oder die Größe des `<image>`, wenn sie anders als die Größe des Elements festgelegt ist.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen Kegelverlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Drehung oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}}-Funktion stattdessen.

### Verständnis von sich wiederholenden Kegelverläufen

Die Syntax von repeating-conic-gradient ähnelt der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht wiederholenden Kegelverlauf werden die Farbstopps um einen Bogen des Verlaufs platziert. Wie beim wiederholenden Radialverlauf ist die Größe des sich wiederholenden Abschnitts der erste Farbstopp abzüglich des Winkels des letzten Farbstopps.

![Vergleich der Farbstopps für wiederholende und nicht wiederholende Kegel- und Radialverläufe](repeatingconicgradient.png)

Die oben genannten Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein wiederholender Verlauf wiederholt wird, definieren wir den ersten und letzten Farbstopp. Wie bei nicht wiederholenden Verläufen wird davon ausgegangen, dass der erste und letzte Farbstopp 0 und entweder 100% oder 360 Grad beträgt, wenn nicht explizit deklariert. Wenn die Standartwerte verwendet werden, ist der wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie beim nicht wiederholenden Kegelverlauf werden die Farbstopps um einen Verlaufsbogen platziert — den Umfang eines Kreises, anstatt auf der Verlauflinie, die vom Zentrum des Verlaufs ausgeht. Die Farben wechseln, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend an der Spitze, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen den größten und kleinsten Farbwinkel darstellt, dann wiederholend.

Ein sich wiederholender Kegelverlauf wird durch Angabe eines Rotationswinkels, des Mittelpunkts des Verlaufs und dann Angabe einer Liste von Farbstopps spezifiziert. Wie nicht wiederholende Kegelverläufe werden die Farbstopps eines wiederholenden Kegelverlaufs mit einem {{cssxref('angle')}} spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die wiederholende Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber das ist nicht in der Spezifikation.

Die Syntax für Radial- und Kegelverläufe ermöglicht es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bilds zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die angewinkelten Farbstopps, ihre Startpunkte, Endpunkte und zwischen ihnen, und optional geneigten Farbstopp-Punkten bestimmt. Die Übergänge zwischen den Farben können mit Farbhints zwischen den benachbarten Farben der Farbstopps verändert werden.

#### Anpassen von Verläufen

Durch das Hinzufügen weiterer gekippten Farbstopp-Punkte auf dem Verlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit definiert werden, indem ein {{CSSxRef("&lt;angle&gt;")}} verwendet wird. Wenn Sie den Ort eines Farbstopps nicht spezifizieren, wird er genau zwischen dem vorhergehenden und dem folgenden platziert. Wie bei ihrem nicht wiederholenden Verlaufsäquivalent, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, lauten die Werte 0 Grad und 360 Grad. Wenn Sie für beide keinen Winkel angeben, erhalten Sie einen nicht wiederholenden Kegelverlauf. Wenn Sie für den ersten oder letzten einen anderen Wert als 0 oder 360 Grad angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Wenn Sie beispielsweise keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstopp angeben, wird der Bogen 10 Mal wiederholt. Der Startpunkt ist der erste deklarierte Farbstopp, und der letzte Farbstopp ist der letzte deklarierte Farbstopp-Winkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln Farben sanft von der Farbe an einem Farbstopp zur Farbe am folgenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der halbe Punkt zwischen dem Farbübergang ist. Sie können diesen Mittepunkt des Farbübergangs an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte des Farbübergangs sein soll.

Wenn zwei oder mehr Farbstopps am selben Ort sind, wird der Übergang eine harte Linie zwischen den ersten und letzten, an diesem Ort deklarierten Farben sein.

Obwohl Sie verschiedene Winkeleinheiten mischen und anpassen können, sollten Sie das nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien zur Verfügung. Das ist vor allem für Bildschirmleseprogramme wichtig, da diese seine Anwesenheit nicht ankündigen und daher nichts an ihre Nutzer weitergeben. Während es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit Kegelverläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen, und das von dem Kegelverlauf dargestellte Bild wird daher für Bildschirmleser-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weißes Sternexplosion

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das Kästchen auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das Kästchen auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen geht und dabei durch Grün-, Gelb- und Orangetöne wandert.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele zu repeating-conic-gradient

Bitte lesen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

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
