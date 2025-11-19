---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient)) mit Farbübergängen, die um einen Mittelpunkt rotieren (anstatt [vom Zentrum ausstrahlen](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

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
  - : Mit dem Schlüsselwort `from` eingeleitet und ein Winkelwert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position); die Position definiert das Zentrum des Verlaufs. Wenn weggelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stoppwert {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Achse des Umfangs des Verlaufs). Der letzte Farb-Stopp minus des Winkels des ersten Farb-Stopps definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farb-Stopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farb-Stopps die Verlauf-Farbe den Mittelpunkt des Farbübergangs erreichen soll. Wird weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farb-Stopps.

> [!NOTE]
> Die Darstellung von Farb-Stopps in sich wiederholenden konischen Verläufen folgt denselben Regeln wie [Farb-Stopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe umfassen Strahlenbündel. Das Ergebnis der Funktion `repeating-conic-gradient()` ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder die ersten noch die letzten Farb-Stopps einen Farb-Stopp-Winkel größer als 0deg oder kleiner als 360 Grad enthalten, wird der konische Verlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe, auf die das `<image>` gesetzt ist, wenn es auf etwas anderes als die Größe des Elements gesetzt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht in {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Drehung, oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion stattdessen.

### Verständnis von sich wiederholenden konischen Verläufen

Die Syntax für sich wiederholende konische Verläufe ähnelt der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei dem sich nicht wiederholenden konischen Verlauf werden die Farb-Stopps um einen Verlaufsbogen platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farb-Stopp, abzüglich des Winkels des letzten Farb-Stopps.

![Vergleich der Farb-Stopps für sich wiederholende und sich nicht wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die obigen Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein sich wiederholender Verlauf tatsächlich wiederholt wird, definieren wir die ersten und letzten Farb-Stopps. Wie in nicht wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farb-Stopps 0 und entweder 100% oder 360deg sind, wenn sie nicht explizit deklariert werden. Bei diesen Standardwerten ist der sich wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie beim nicht wiederholenden konischen Verlauf werden die Farb-Stopps um einen Verlaufsbogen platziert — den Umfang eines Kreises, anstatt auf der Verlaufslinie, die vom Zentrum des Verlaufs ausgeht. Die Farben ändern sich so, als ob sie um das Zentrum eines Kreises gedreht werden, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der der Unterschied zwischen dem größten und kleinsten Farbwinkel ist, und dann sich wiederholt.

Ein sich wiederholender konischer Verlauf wird angegeben, indem ein Rotationswinkel, das Zentrum des Verlaufs, und dann eine Liste von Farb-Stopps spezifiziert werden. Wie bei nicht wiederholenden konischen Verläufen werden die Farb-Stopps eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radiale und `turn` für Umdrehungen. Ein Kreis umfasst 360 Grad, 400 Gradient, 2π Radiale und 1 Umdrehung. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entspricht, aber dies ist nicht in der Spezifikation.

Die Syntax für radiale und konische Verläufe ermöglicht es, das Zentrum des Verlaufs überall im oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Positionierung sind der Syntax für die 2-Wert {{cssxref('background-position')}} ähnlich.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die gewinkelten Farb-Stopps, ihre Startpunkte, Endpunkte und, dazwischen, optionale gewinkelte Farb-Stopp-Punkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhilfen zwischen den Farb-Stopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen von mehr gewinkelten Farb-Stopp-Punkten auf dem Verlaufsbogen können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farb-Stopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Lage eines Farb-Stopps nicht angeben, wird er in der Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wie bei dem nicht wiederholenden Verlauf werden, wenn Sie keinen Winkel für den ersten oder letzten Farb-Stopp angeben, die Werte 0deg und 360deg sein. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen sich nicht wiederholenden konischen Verlauf. Wenn Sie bei dem ersten oder dem letzten einen anderen als 0 oder 360 Grad angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10% für den letzten Farb-Stopp festlegen, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farb-Stopp und der letzte Farb-Stopp ist der Winkel des letzten deklarierten Farb-Stopps. Die folgenden zwei Verläufe sind äquivalent:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig ändern sich die Farben nahtlos von der Farbe bei einem Farb-Stopp zur Farbe beim nächsten Farb-Stopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Farbübergangsmittelpunkt an jeden Punkt zwischen zwei Farb-Stopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbübergangs sein soll.

Wenn zwei oder mehr Farb-Stopps an derselben Position sind, wird der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Position deklarierten Farbe sein.

Obwohl Sie unterschiedliche Winkeltypen mischen und anpassen können, sollten Sie dies nicht tun. Das macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen assistierenden Technologien keine besonderen Informationen zu Hintergrundbildern bereit. Dies ist primär für Bildschirmlesegeräte wichtig, da ein Bildschirmleser dessen Vorhandensein nicht ansagt und daher nichts an seine Benutzer weitergibt. Obwohl es möglich ist, Torten-Diagramme, Schachbrettmuster und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Bildschirmlesegeräte nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-Weiß-Stern

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

### Interpolieren mit Farbton

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet, und [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das Kästchen links benutzt [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau geht, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Das Kästchen rechts benutzt [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen geht, durchläuft Grün, Gelb und Orange.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
