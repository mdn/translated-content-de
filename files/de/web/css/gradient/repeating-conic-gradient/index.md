---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), mit Farbübergängen, die sich um einen Mittelpunkt drehen (anstatt von der Mitte [auszustrahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Gefolgt vom Schlüsselbegriff `from`, definiert es den Grad der Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mit den gleichen Längen-, Ordnungs- und Schlüsselbegriffswerten wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position) definiert die Position das Zentrum des Verlaufs. Wenn es weggelassen wird, lautet der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farb-Stop-Winkel minus dem ersten Farb-Stop-Winkel definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert den Punkt zwischen zwei Farbstopps, an dem der Farbverlauf die Mitte des Farbübergangs erreichen soll. Wenn er weggelassen wird, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Das Rendering von Farbstopps in sich wiederholenden Kegelschnitten folgt den gleichen Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe sind Strahlenbündel. Das Ergebnis der `repeating-conic-gradient()`-Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine besondere Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farb-Stop einen Farbstopp-Winkel größer als 0 Grad oder kleiner als 360 Grad enthalten, wird der konische Verlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, die das `<image>` erhält, wenn diese anders als die Elementgröße festgelegt ist.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} nutzen.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollständigen Rotation von 360 Grad oder verwenden Sie stattdessen die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis von sich wiederholenden konischen Verläufen

Die Syntax des sich wiederholenden konischen Verlaufs ist ähnlich der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht sich wiederholenden konischen Verlauf werden die Farbstopps um einen Verlaufsbogen platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farb-Stop subtrahiert vom Winkel des letzten Farb-Stops.

![Vergleich der Farbstopps für sich wiederholende und nicht sich wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die obigen Verläufe sind als jeweils ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein sich wiederholender Verlauf wiederholt wird, definieren wir den ersten und letzten Farb-Stop. Wie in nicht sich wiederholenden Verläufen wird davon ausgegangen, dass die ersten und letzten Farb-Stopps 0 und entweder 100 % oder 360 Grad betragen, wenn sie nicht explizit angegeben werden. Beim Standardwert der ersten und letzten Farbstopps ergibt sich ein wiederholender Bogen von 360 Grad, der sich daher nicht wiederholt.

Wie beim nicht sich wiederholenden konischen Verlauf werden die Farbstopps um einen Verlaufsbogen herum platziert – entlang des Umfangs eines Kreises und nicht entlang der Verlaufslinie, die vom Zentrum des Verlaufs ausgeht. Die Farben wechseln, als ob sie um die Mitte eines Kreises gedreht würden, beginnend oben, wenn `from <angle>` nicht erklärt ist, und im Uhrzeigersinn entsprechend der Größe des Winkels, der die Differenz zwischen dem größten und kleinsten Farbwinkel ist, dann in Wiederholung.

Ein sich wiederholender konischer Verlauf wird angegeben, indem ein Drehwinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps angegeben wird. Wie bei nicht sich wiederholenden konischen Verläufen werden die Farbeinschübe eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradians, `rad` für Radiant und `turn` für Umdrehungen. In einem Kreis gibt es 360 Grad, 400 Gradians, 2π Radiant und 1 Umdrehung. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100 % 360 Grad entsprechen, aber dies ist nicht Teil der Spezifikation.

Die Syntax der radialen und konischen Verläufe ermöglicht es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Werte {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die geneigten Farbeinschübe, ihre Anfangs-, Endpunkte und optional geneigte Farbe-insertionspunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen den Farbeinschüben benachbarter Farben verändert werden.

#### Anpassung von Verläufen

Durch das Hinzufügen von mehr geneigten Farb-Einsatzpunkten auf dem Verlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbeinschubs kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbeinschubs nicht angeben, befindet er sich auf halbem Weg zwischen dem, der ihm vorausgeht, und dem, der ihm folgt. Wie bei dem nicht sich wiederholenden Verlaufgegenstück, wenn Sie keinen Winkel für den ersten oder letzten Farbeinschub angeben, werden die Werte 0 Grad und 360 Grad sein. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht sich wiederholenden konischen Verlauf. Wenn Sie keinen 0- oder 360-Grad-Winkel für den ersten bzw. letzten angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Wenn Sie beispielsweise keinen Winkel für die erste Farbe angeben und 10 % für den letzten Farbeinschub festlegen, wird der Bogen 10 Mal wiederholt. Der Anfangspunkt ist der erste deklarierte Farbeinschub, und der letzte Farbeinschub ist der letzte deklarierte Farbeinschubwinkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farbeinschub zur Farbe am nachfolgenden Farbeinschub, wobei der Mittelpunkt zwischen den Farben der halbe Weg des Farbübergangs ist. Sie können diesen Mittelteil des Farbwechsels an einen beliebigen Punkt zwischen zwei Farbeinschüben verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo sich der Mittelteil des Farbübergangs befinden soll.

Wenn zwei oder mehr Farbeinschübe am gleichen Ort sind, wird der Übergang eine harte Linie zwischen der ersten und der letzten an diesem Ort deklarierten Farbe sein.

Obwohl Sie verschiedene Winkeleinheiten mischen können, sollten Sie dies nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für unterstützende Technologie. Dies ist vor allem für Screenreader wichtig, da ein Screenreader ihre Anwesenheit nicht ankündigen wird und daher nichts für seine Benutzer vermittelt. Obwohl es möglich ist, Kreisdiagramme, Schachbrettmuster und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des übergeordneten Zwecks der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Erklärung der Richtlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-Weiß-Sternstrahl

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das linke Feld verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt vom Rot ins Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das rechte Feld verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe vom Rot ins Blau über den längeren Bogen wechselt und dabei durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie sich [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlausfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
