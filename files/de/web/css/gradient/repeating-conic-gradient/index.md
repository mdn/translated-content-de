---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), mit Farbübergängen, die um einen Mittelpunkt rotiert werden (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Wird durch das Schlüsselwort `from` gefolgt und nimmt einen Winkel als Wert an, der die Rotation des Verlaufs im Uhrzeigersinn definiert.
- `<position>`
  - : Verwendet dieselbe Länge, Reihenfolge und Schlüsselwortwerte wie die [background-position](/de/docs/Web/CSS/background-position)-Eigenschaft. Die Position definiert den Mittelpunkt des Verlaufs. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farb-Stopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfassungsachse des Verlaufs). Der letzte Farb-Stopp minus der Winkel des ersten Farb-Stopps definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolation")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert den Punkt zwischen zwei Farbstopps, an dem der Verlauf die Mitte des Farbübergangs erreichen sollte. Wenn weggelassen, ist der Übergangspunkt die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in wiederholenden konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiel für wiederholende konische Verläufe sind z.B. Strahlenmuster. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder die ersten noch die letzten Farbstopps einen Farbwinkel größer als 0° oder kleiner als 360° haben, wird der konische Verlauf nicht wiederholt.

Wie jeder Verlauf hat auch ein sich wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, die das `<image>` hat, wenn diese anders als die des Elements festgelegt ist.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen nicht-wiederkehrenden konischen Verlauf zu erstellen, machen Sie den Verlauf zu einer vollen 360 Grad Drehung oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verständnis von sich wiederholenden konischen Verläufen

Die Syntax von repeating-conic-gradient ist ähnlich der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht-wiederholenden konischen Verlauf werden die Farb-Stopps um einen Verlaufsbogen platziert. Wie beim wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farb-Stopp abzüglich des Winkels des letzten Farb-Stopps.

![Vergleich der Farbstopps bei wiederholenden und nicht-wiederholenden konischen und radialen Verläufen](repeatingconicgradient.png)

Die oben genannten Verläufe sind definiert als jeweils ein Drittel blau, ein Drittel rot und ein Drittel gelb.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein wiederholender Verlauf sich wiederholt, definieren wir die ersten und letzten Farbstopps. Wie bei nicht-wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farbstopps 0 und entweder 100% oder 360° sind, wenn nicht explizit deklariert. Wenn diese Werte als Standard verwendet werden, ist der wiederkehrende Bogen 360 Grad und wiederholt sich daher nicht.

Wie der nicht-wiederkehrende konische Verlauf werden die Farbstopps um einen Verlaufsbogen herum platziert — den Umfang eines Kreises — und nicht auf der von der Mitte des Verlaufs ausgehenden Verlaufsachse. Die Farben gehen scheinbar vom Zentrum eines Kreises aus, beginnend oben, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen dem größten und dem kleinsten Farbwinkel ist, und wiederholen sich dann.

Ein sich wiederholender konischer Verlauf wird angegeben, indem ein Rotationswinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps spezifiziert werden. Wie bei nicht-wiederkehrenden konischen Verläufen werden die Farb-Stopps eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Gradianten, `rad` für Radianten und `turn` für Umdrehungen. In einem Kreis gibt es 360 Grad, 400 Gradianen, 2π Radianten und 1 Umdrehung. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Die Syntax für radiale und konische Verläufe ermöglicht es, das Zentrum des Verlaufs an jeder Stelle innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für Werte mit zwei Werten bei {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die gewinkelten Farb-Stops, ihre Startpunkte, Endpunkte und dazwischen sowie optionale gewinkelte Farb-Stopp-Punkte bestimmt. Die Übergänge zwischen den Farben können mit Farbindikationen zwischen benachbarten Farben-Farb-Stops verändert werden.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer gewinkelter Farb-Stopp-Punkte auf dem Verlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farb-Stopps kann explizit durch ein {{CSSxRef("&lt;angle&gt;")}} angegeben werden. Wenn Sie die Position eines Farb-Stopps nicht angeben, wird dieser auf halbem Weg zwischen dem vorhergehenden und dem folgenden platziert. Wie das nicht-wiederkehrende Verlaufsgegenstück, wenn Sie keinen Winkel für den ersten oder letzten Farb-Stopp angeben, werden die Werte 0° und 360° sein. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht-wiederkehrenden konischen Verlauf. Wenn Sie einen Winkel ungleich 0 oder 360 Grad für den ersten bzw. letzten angeben, wiederholt sich der Verlauf basierend auf diesem Wert. Wenn Sie zum Beispiel keinen Winkel für die erste Farbe angeben und 10% für den letzten Farb-Stopp deklarieren, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farb-Stopp, und der letzte Farb-Stopp ist der letzte deklarierte Farb-Stopp-Winkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig gleichen sich die Farben sanft von der Farbe eines Farb-Stopps bis zur Farbe des nachfolgenden Farb-Stops aus, wobei der Mittelwert zwischen den Farben der Mittelpunkt zwischen dem Farbübergang ist. Sie können diesen Übergangspunkt an einen beliebigen Punkt zwischen zwei Farb-Stopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbübergangs sein sollte.

Wenn zwei oder mehr Farb-Stops an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen den ersten und letzten an dieser Stelle deklarierten Farben sein.

Während Sie verschiedene Winkeleinheiten mischen und abgleichen können, sollten Sie dies nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen keine besonderen Informationen zu Hintergrundbildern zur Verfügung, um unterstützenden Technologien zu helfen. Dies ist vor allem für Bildschirmleser wichtig, da ein Sprachsynthesizer seine Anwesenheit nicht ankündigt und daher nichts an seine Nutzer weitergibt. Auch wenn es möglich ist, mit konischen Verläufen Kreisdiagramme, Schachbrettmuster und andere Effekte zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Benutzer von Bildschirmlesern unzugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weiß Strahlenmuster

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

### Abseits zentrierter Verlauf

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das Feld links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau übergeht, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Das Feld rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot nach blau geht, indem der längere Bogen genutzt wird, der durch grüne, gelbe und orange Farben führt.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

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
