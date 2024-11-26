---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 8e2465af7cac389b70e83d54eeb288448f2ae08d
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), mit Farbverläufen, die um einen Mittelpunkt rotieren (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Vorangestellt vom Schlüsselwort `from`, definiert es durch einen Winkel den Grad der Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleichen Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position). Die Position definiert das Zentrum des Verlaufs. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Kreisachse des Verlaufs). Der letzte Farbstopp minus dem Winkeln des ersten Farbstopps definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstops verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops der mittlere Punkt des Farbverlaufs erreicht werden sollte. Wenn er weggelassen wird, liegt der mittlere Punkt des Farbverlaufs zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von Farbstops in sich wiederholenden konischen Verläufen folgt den gleichen Regeln wie [Farbstops in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe umfassen Sternexplosionen. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, eine besondere Art von {{CSSxRef("&lt;image&gt;")}}.

Wenn weder die ersten noch die letzten Farbstops einen Farbstop-Winkel größer als 0 Grad oder kleiner als 360 Grad respektive enthalten, wird der konische Verlauf nicht wiederholt.

Wie jeder Verlauf hat ein wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, die das `<image>` erhält, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>` verwendet werden kann. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, gestalten Sie den Verlauf mit einer vollen Drehung von 360 Grad oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verständnis der sich wiederholenden konischen Verläufe

Die Syntax für `repeating-conic-gradient` ist ähnlich wie die von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei dem nicht wiederholenden konischen Verlauf werden die Farbstops um einen Bogen des Verlaufs platziert. Wie beim sich wiederholenden radialen Verlauf wird die Größe des sich wiederholenden Abschnitts durch den ersten Farbstopp abzüglich des Winkels des letzten Farbstopps definiert.

![Vergleich der Farbstops für sich wiederholende und nicht wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die obigen Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Um einen sich wiederholenden Verlauf zu erzeugen, definieren wir die ersten und letzten Farbstops. Wie bei nicht wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farbstops 0 und entweder 100% oder 360 Grad betragen, wenn sie nicht explizit deklariert wurden. Wenn sie auf diese Werte standardmäßig gesetzt sind, beträgt der wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie bei dem nicht wiederholenden konischen Verlauf sind die Farbstops um einen Verlaufsbogen - den Umfang eines Kreises - herum angeordnet, anstatt sich auf der vom Zentrum des Verlaufs ausgehenden Gradientenlinie zu befinden. Die Farben verändern sich, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben, wenn kein `from <angle>` angegeben wurde, und im Uhrzeigersinn für den Winkel, der die Differenz zwischen dem größten und kleinsten Farbwinkel ist, dann sich wiederholend.

Ein sich wiederholender konischer Verlauf wird spezifiziert durch die Angabe eines Drehwinkels, des Zentrums des Verlaufs, und dann die Angabe einer Liste von Farbstops. Wie bei den nicht wiederholenden konischen Verläufen werden die Farbstops eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradianen, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gradianen, 2π Radianten und 1 Umdrehung. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Radiale und konische Verlaufssyntax ermöglicht es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Positionierung sind ähnlich der Syntax für zwei Werte bei {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist im Norden oder 12 Uhr. Die Farben des Verlaufs werden durch die geneigten Farbstops bestimmt, ihre Ausgangs-, Endpunkte und, dazwischen, und optionale geneigte Farbstoppunkte. Die Übergänge zwischen Farben können mit Hinweisen zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch das Hinzufügen weiterer geneigter Farbstoppunkte auf dem Verlaufsbogen können Sie einen stark angepassten Übergang zwischen mehreren Farben erstellen. Eine Farbstopp-Position kann explizit durch einen {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er zur Hälfte zwischen dem vorherigen und dem nächsten platziert. Wie das nicht wiederholende Verlaufsgegenstück, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, betragen die Werte 0 Grad und 360 Grad. Wenn Sie keinen Winkel für einen von beiden angeben, erhalten Sie einen nicht wiederholenden konischen Verlauf. Wenn Sie respektive 0 oder 360 Grad für den ersten oder letzten angeben, wiederholt der Verlauf sich basierend auf diesem Wert. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstopp deklarieren, wird der Bogen sich 10 Mal wiederholen. Der Startpunkt ist der erste deklarierte Farbstopp, und der letzte Farbstopp ist der letzte deklarierte Farbstopp-Winkel. Die folgenden beiden Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig verlaufen die Farben reibungslos von der Farbe eines Farbstopps zur Farbe des anschließenden Farbstopps, wobei der Mittelpunkt zwischen den Farben der Halbwegpunkt der Farbveränderung bildet. Sie können diesen Farbänderungsmittelpunkt an jede Stelle zwischen zwei Farbstops verlegen, indem Sie einen Hinweis hinzufügen, der angibt, wo der Mittelpunkt der Farbänderung sein sollte.

Wenn zwei oder mehr Farbstops an derselben Stelle vorhanden sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt deklarierten Farbe an diesem Ort sein.

Obwohl Sie verschiedene Winkel-Einheiten mischen können, sollten Sie dies nicht tun. Es erschwert das Lesen von CSS.

### Formale Syntax

{{csssyntax}}

## Zugänglichkeit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich wichtig für Bildschirmleseprogramme, da ein Bildschirmleser die Anwesenheit nicht ankündigt und daher nichts seinen Benutzern vermittelt. Während es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Methode zur Zuweisung von Alternativtext, und daher wird das Bild, das durch den konischen Verlauf dargestellt wird, für Benutzer von Bildschirmleseprogrammen nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis der Gesamtaussage der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verstehen der WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgs-Kriteriums 1.1.1 | W3C Verstehen der WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Schwarz-Weiß-Sternexplosion

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

Das Feld links verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Das Feld rechts verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen verläuft, der durch Grüntöne, Gelb- und Orangetöne führt.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Weitere Verlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
