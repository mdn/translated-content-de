---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem sich wiederholenden Gradienten besteht (im Gegensatz zu einem [einzelnen Gradienten](/de/docs/Web/CSS/gradient/conic-gradient)), wobei Farbverläufe um einen Mittelpunkt herum gedreht werden (anstatt von der Mitte aus [ausgestrahlt zu werden](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Eingeleitet durch das Schlüsselwort `from` und unter Angabe eines Winkels als Wert, definiert die Drehung des Gradienten im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Längen-, Ordnungs- und Schlüsselwortwerten wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position), definiert die Position den Mittelpunkt des Gradienten. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbpunkt-Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopp-Positionen (einem {{CSSxRef("&lt;angle&gt;")}} entlang der Umkreisachse des Gradienten). Der letzte Farbpunkt minus dem Winkel des ersten Farbpunktes definiert die Größe des sich wiederholenden Gradienten.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie sich der Gradient zwischen benachbarten Farbverläufen entwickelt. Die Länge definiert den Punkt zwischen zwei Farbverläufen, an dem die Gradientfarbe den Mittelpunkt des Farbverlaufs erreichen sollte. Wird er nicht angegeben, ist der Mittelpunkt des Farbverlaufs der Mittelpunkt zwischen zwei Farbverläufen.

> [!NOTE]
> Die Darstellung von Farbverläufen in sich wiederholenden Kegelschnitten folgt denselben Regeln wie [Farbverläufe in linearen Gradienten](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende Kegelschnitte umfassen explodierende Sterne. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farbverlauf einen Winkel größer als 0deg oder weniger als 360 Grad jeweils umfasst, wird der Kegelgradient nicht wiederholt.

Wie bei jedem Gradienten hat ein sich wiederholender Kegelgradient [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe, auf die das `<image>` eingestellt ist, wenn diese von der Größe des Elements abweicht.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen Kegelverlauf zu erstellen, der sich nicht wiederholt, machen Sie den Gradienten eine volle 360-Grad-Drehung oder verwenden Sie stattdessen die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verständnis von sich wiederholenden Kegelschnitten

Die Syntax für sich wiederholende Kegelschnitte ähnelt der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie der nicht wiederholende Kegelgradient werden die Farbverläufe um einen Gradientenbogen herum platziert. Wie beim sich wiederholenden radialen Gradienten ist die Größe des sich wiederholenden Abschnitts der erste Farbverlauf minus dem Winkel des letzten Farbverlaufs.

![Vergleich der Farbverläufe für sich wiederholende und nicht wiederholende Kegel- und Radialgradienten](repeatingconicgradient.png)

Die oben genannten Gradienten sind als zu einem Drittel blau, zu einem Drittel rot und zu einem Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Um einen sich wiederholenden Gradienten zu wiederholen, definieren wir die ersten und letzten Farbverläufe. Wie bei nicht sich wiederholenden Gradienten wird angenommen, dass die ersten und letzten Farbverläufe 0 und entweder 100% oder 360deg betragen, wenn sie nicht explizit angegeben werden. Wenn diese Werte als Standard verwendet werden, ist der wiederholbare Bogen 360 Grad und wiederholt sich daher nicht.

Wie beim nicht wiederholenden Kegelgradienten werden die Farbverläufe um einen Gradientenbogen herum platziert — den Umfang eines Kreises, statt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Die Farben wechseln, als ob sie um den Mittelpunkt eines Kreises gedreht werden, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der der Unterschied zwischen dem größten und kleinsten Farbwinkel ist, dann wiederholt.

Ein sich wiederholender Kegelgradient wird durch Angabe eines Drehwinkels, des Zentrums des Gradienten und anschließend durch Angabe einer Liste von Farbverläufen spezifiziert. Wie bei nicht sich wiederholenden Kegelgradienten werden die Farbverläufe eines sich wiederholenden Kegelgradienten mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Gradienten, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die sich wiederholende Kegelgradienten unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Radiale und kegelförmige Gradientsyntax bietet die Möglichkeit, das Zentrum des Gradienten überall innerhalb oder sogar außerhalb des Bildes zu platzieren. Die Werte für die Position sind ähnlich wie die Syntax für 2-Wert-{{cssxref('background-position')}}.

Der Gradientenbogen ist Teil des Umfangs des Gradienten. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Gradienten werden durch die geneigten Farbverläufe bestimmt, ihre Startpunkte, Endpunkte, und dazwischen und optionale geneigte Farbverlaufspunkte. Die Übergänge zwischen den Farben können mit Farbhilfen zwischen den Farbverläufen benachbarter Farben verändert werden.

#### Anpassen von Gradienten

Indem Sie mehr geneigte Farbverlaufspunkte auf dem Gradientenbogen hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbverlaufs kann explizit durch ein {{CSSxRef("&lt;angle&gt;")}} festgelegt werden. Wenn Sie die Position eines Farbverlaufs nicht angeben, wird er in der Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wie sein nicht wiederholender Gradientpedant, wenn Sie keinen Winkel für den ersten oder letzten Farbverlauf angeben, werden die Werte 0deg und 360deg sein. Wenn Sie keinen Winkel für eines von beiden angeben, erhalten Sie einen nicht wiederholenden Kegelgradienten. Wenn Sie für den ersten oder letzten Winkel keinen 0 oder 360 Grad angeben, wird der Gradientenbogen basierend auf diesem Wert wiederholt. Wenn Sie beispielsweise keinen Winkel für die erste Farbe angeben und 10% beim letzten Farbverlauf angeben, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbverlauf, und der letzte Farbverlauf ist der letzte deklarierte Farbverlaufwinkel. Die folgenden zwei Gradienten sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig verlaufen die Farben von der Farbe an einem Farbverlaufspunkt bis zur Farbe am nächsten Farbverlaufspunkt sanft, wobei der Mittelpunkt zwischen den Farben der halbe Weg zwischen dem Farbverlauf ist. Sie können diesen Farbverlaufs-Mittelpunkt zu einem beliebigen Punkt zwischen zwei Farbverläufen verschieben, indem Sie eine Farbhilfe hinzufügen, die angibt, wo sich der Mittelpunkt des Farbverlaufs befinden soll.

Wenn zwei oder mehr Farbverläufe an derselben Position sind, wird der Übergang eine harte Linie zwischen den ersten und letzten an dieser Stelle angegebenen Farben.

Während Sie verschiedene Winkeleinheiten mischen und kombinieren können, sollten Sie dies vermeiden. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader nicht auf deren Vorhandensein hinweist und somit nichts an die Benutzer weitergibt. Obwohl es möglich ist, Kuchendiagramme, Schachbrettmuster und andere Effekte mit Kegelgradienten zu erstellen, bietet CSS-Bilder keine native Möglichkeit, alternativen Text zuzuordnen, und daher wird das Bild, das durch den Kegelgradienten dargestellt wird, für Benutzer von Screenreadern nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend sind, um den allgemeinen Zweck der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Schwarze und weiße Strahlen

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

### Nicht-zentrierter Verlauf

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) wird interpoliert.

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

Die Box auf der linken Seite verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verläuft. Die Box auf der rechten Seite verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft und durch Grüns, Gelbs und Oranges geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
