---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
l10n:
  sourceCommit: b1bc04e2aedcaa50c55fb54686fb7855fdcbfc4e
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient)), mit Farbüberblendungen, die um einen Mittelpunkt rotiert sind (anstatt [vom Zentrum ausstrahlen](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

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
  with shorter hue interpolation method */
repeating-conic-gradient(in hsl shorter hue, red, blue 90deg, green 180deg)
```

### Werte

- {{cssxref("angle")}}
  - : Wird dem Schlüsselwort `from` vorangestellt und nimmt einen Winkel als Wert, definiert die Gradientenrotation im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position), die Position definiert das Zentrum des Gradienten. Wird dies ausgelassen, ist der Standardwert `center`, was bedeutet, dass der Gradienten zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen, (ein {{cssxref("angle")}} entlang der Kreisachse des Gradienten). Der letzte Farb-Stopp minus der Winkel des ersten Farbstopps definiert die Größe des sich wiederholenden Gradienten.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Gradientenverlauf zwischen benachbarten Farbstops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops die Übergangsmitte der Farbe erreicht werden sollte. Wird dies ausgelassen, ist die Mitte der Farbüberblendung der Mittelpunkt zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von Farbstops in sich wiederholenden Kegelverläufen folgt den gleichen Regeln wie [Farbstops in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende Kegelverläufe sind Strahlenkranz-Designs. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des {{cssxref("gradient")}} Datentyps, der eine spezielle Art von {{cssxref("image")}} ist.

Wenn weder der erste noch der letzte Farbstopp einen Farbstop-Winkel größer als 0 Grad oder weniger als 360 Grad enthält, wird der Kegelverlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender Kegelverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat weder eine natürliche oder bevorzugte Größe noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das es angewendet wird, oder der Größe, die das `<image>` gesetzt wird, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp verwenden.

> [!NOTE]
> Um einen Kegelverlauf zu erstellen, der sich nicht wiederholt, erstellen Sie den Verlauf als vollständige 360 Grad Rotation oder verwenden Sie die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis von sich wiederholenden Kegelverläufen

Die Syntax von repeating-conic-gradient ähnelt der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei dem nicht wiederholten Kegelverlauf werden die Farbstops um einen Verlaufkreis herum platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farbstopp abzüglich des Winkels des letzten Farbstopps.

![Vergleich der Farbstops für sich wiederholende und nicht wiederholende Kegel- und Radialverläufe](repeatingconicgradient.png)

Die oben dargestellten Verläufe sind als ein Drittel Blau, ein Drittel Rot und ein Drittel Gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Um einen wiederholbaren Verlauf zu erreichen, definieren wir die ersten und letzten Farbstops. Wie bei nicht wiederholten Verläufen wird angenommen, dass die ersten und letzten Farbstops 0 und entweder 100% oder 360 Grad sind, wenn sie nicht explizit angegeben werden. Bei diesen Standardwerten beträgt der wiederholte Bogen 360 Grad und wird daher nicht wiederholt.

Wie beim nicht wiederholten Kegelverlauf werden die Farbstops um einen Verlaufbogen – den Umfang eines Kreises – herum platziert und nicht entlang der Verlaufslinie, die vom Zentrum des Verlaufs ausgeht. Die Farben werden übergeblendet, als ob sie um das Zentrum eines Kreises gesponnen wären, beginnend an der Spitze, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen dem größten und kleinsten Farbwinkel ist, dann wiederholt.

Ein sich wiederholender Kegelverlauf wird definiert, indem ein Drehwinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstops angegeben werden. Wie bei nicht wiederholten Kegelverläufen werden die Farbstops eines sich wiederholenden Kegelverlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten schließen `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umläufe ein. Ein Kreis hat 360 Grad, 400 Gradienten, 2π Radianten und 1 Umlauf. Browser, die wiederholte Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Die Syntax für radiale und Kegelverläufe ermöglicht das Positionieren des Zentrums des Verlaufs überall innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position ähneln der Syntax für 2-Wert {{cssxref('background-position')}}.

Der Verlaufbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die gewinkelten Farbstops bestimmt, ihre Startpunkte, Endpunkte und, dazwischen, optionale gewinkelte Farbstopp-Punkte. Die Übergänge zwischen Farben können mit Farbhints zwischen benachbarten Farben-Farbstops geändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer gewinkelter Farbstopp-Punkte auf dem Verlaufbogen können Sie einen individuelleren Übergang zwischen mehreren Farben erstellen. Eine Position eines Farbstopps kann explizit durch die Verwendung eines {{cssxref("angle")}} definiert werden. Wenn Sie den Standort eines Farbstopps nicht angeben, wird er auf halbem Weg zwischen dem vorhergehenden und dem nachfolgenden platziert. Wie das nicht wiederholende Verlauf-Gegenstück werden, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, die Werte 0° und 360° sein. Wenn Sie keinen Winkel für einen von beiden angeben, erhalten Sie einen nicht wiederholenden Kegelverlauf. Wenn Sie für den ersten oder letzten bzw. nicht 0 oder 360 Grad angeben, wird der Verlauf auf der Basis dieses Wertes wiederholt. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstopp deklarieren, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbstopp und der letzte Farbstopp ist der letzte deklarierte Farbwinkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbstopp zur Farbe am darauffolgenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der Halbpunkt zwischen dem Farbübergang ist. Sie können diesen Mittelpunkt des Farbübergangs zu jedem Punkt zwischen zwei Farbstops bewegen, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte des Farbübergangs sein soll.

Wenn zwei oder mehr Farbstops an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt deklarierten Farbe an diesem Ort sein.

Während Sie verschiedene Winkeleinheiten mischen und kombinieren können, tun Sie dies nicht. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien bereit. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät dessen Existenz nicht ankündigen und daher seinen Benutzern nichts vermitteln wird. Obwohl es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit Kegelverläufen zu erstellen, bieten CSS-Bilder keinen nativen Weg, um alternativen Text zuzuweisen, weshalb das Bild, das durch den Kegelverlauf dargestellt wird, für Benutzer von Bildschirmlesegeräten nicht zugänglich ist. Wenn das Bild Informationen enthält, die wichtig sind, um den Gesamtzweck der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weißer Strahlenkranz

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

### Verschobener Verlauf

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

In diesem Beispiel zur Interpolation wird das [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbmodell verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das linke Feld verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Das rechte Feld verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, der durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

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
