---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erzeugt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)) mit Farbverläufen, die um einen Mittelpunkt rotiert sind (anstatt [vom Zentrum auszustrahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Gefolgt vom `from`-Schlüsselbegriff und mit einem Winkel als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselben Längen-, Reihenfolgen- und Schlüsselbegriffswerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position), wobei die Position das Zentrum des Verlaufs definiert. Wenn weggelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert ist.
- `<angular-color-stop>`
  - : Ein Farb-Stopp mit einem {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (eine {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farb-Stopp minus dem ersten Farb-Stopp-Winkel definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Verlauf die Mitte des Farbwechsels erreichen sollte. Wenn weggelassen, ist die Mitte des Farbwechsels der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispielhafte sich wiederholende konische Verläufe umfassen Sternenstrahlen. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, der eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Weder der erste noch der letzte Farbstopp darf einen Farbstopp-Winkel größer als 0 Grad bzw. kleiner als 360 Grad enthalten, ansonsten wird der konische Verlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, sofern sie auf etwas anderes als die Größe des Elements eingestellt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Drehung oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verständnis von sich wiederholenden konischen Verläufen

Die Syntax von `repeating-conic-gradient` ähnelt der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei den nicht wiederholenden konischen Verläufen werden die Farbstopps um einen Verlauf-Bogen platziert. Wie der wiederholende Radialverlauf ergibt die Subtraktion des Winkels des letzten Farbstopps vom Winkel des ersten Farbstopps die Größe des wiederholenden Abschnitts.

![Vergleich der Farbstopps für sich wiederholende und nicht wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die oben genannten Verläufe werden als ein Drittel Blau, ein Drittel Rot und ein Drittel Gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein wiederholender Verlauf wiederholt wird, definieren wir die ersten und letzten Farbstopps. Wie bei nicht wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farbstopps 0 und entweder 100% oder 360 Grad betragen, wenn nicht explizit deklariert. Wenn diese Werte als Standard verwendet werden, beträgt der wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie der nicht wiederholende konische Verlauf werden die Farbstopps um einen Verlauf-Bogen platziert - den Umfang eines Kreises - anstatt auf der Verlaufslinie, die vom Zentrum des Verlaufs ausgeht. Die Farben wechseln, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der der Unterschied zwischen dem größten und kleinsten Farbwinkel ist, der dann wiederholt wird.

Ein sich wiederholender konischer Verlauf wird spezifiziert, indem ein Rotationswinkel, das Zentrum des Verlaufs, und dann eine Liste von Farbstopps angegeben werden. Wie bei nicht wiederholenden konischen Verläufen werden die Farbstopps eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber das ist nicht in der Spezifikation.

Radiale und konische Verlaufssyntax bieten die Möglichkeit, das Zentrum des Verlaufs an jedem beliebigen Ort innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Positionierung ähneln der Syntax für 2-Wert-{{cssxref('background-position')}}.

Der Verlauf-Bogen ist Teil des Umfangs des Verlaufs. 0 Grad sind im Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die angewinkelt positionierten Farbstopps bestimmt, durch ihre Start- und Endpunkte, und dazwischen durch optionale angewinkelte Farbstopp-Punkte. Die Übergänge zwischen den Farben können mit Farbhints zwischen den benachbarten Farbstopps verändert werden.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer angewinkelter Farbstopp-Punkte auf dem Verlauf-Bogen können Sie einen sehr angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit definiert werden, indem ein {{CSSxRef("&lt;angle&gt;")}} verwendet wird. Wenn Sie die Position eines Farbstopps nicht angeben, wird dieser in der Mitte zwischen dem davor liegenden und dem danach liegenden platziert. Wie beim nicht wiederholenden Verlaufgegenstück, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, sind die Werte 0 Grad und 360 Grad. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht wiederholenden konischen Verlauf. Wenn Sie einen Winkel von nicht 0 oder 360 Grad für den ersten oder letzten angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Wenn Sie beispielsweise keinen Winkel für die erste Farbe angeben und 10% auf dem letzten Farbstopp angeben, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbstopp und der letzte Farbstopp ist der letzte deklarierte Farbstopp-Winkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig erfolgt der Farbwechsel sanft von der Farbe bei einem Farbstopp zur Farbe beim nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt zwischen dem Farbwechsel ist. Sie können diesen Farbwechsel-Mittelpunkt an einen beliebigen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhint hinzufügen, der angibt, wo die Mitte des Farbwechsels sein soll.

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Stelle deklarierten Farbe sein.

Obwohl Sie unterschiedliche Winkeleinheiten mischen und zusammenstellen können, sollten Sie dies vermeiden. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist in erster Linie für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ansagen würde und daher seinen Benutzern nichts übermitteln würde. Während es möglich ist, mit konischen Verläufen Tortendiagramme, Schachbrettmuster und andere Effekte zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weiß Strahlen

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

### Außerhalb-zentrierter Verlauf

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

In diesem Beispiel für Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbensystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das Kästchen links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Das Kästchen rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau wechselt, indem der längere Bogen verwendet wird, der durch Grüntöne, Gelbtöne und Orangetöne verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für wiederholte konische Verläufe

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
