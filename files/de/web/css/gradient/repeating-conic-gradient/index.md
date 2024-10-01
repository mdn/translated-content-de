---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), mit Farbübergängen, die um einen Mittelpunkt herum rotieren (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Vorangestellt durch den Schlüsselbegriff `from` und unter Verwendung eines Winkels als Wert, wird die Gradientenrotation im Uhrzeigersinn definiert.
- `<position>`
  - : Unter Verwendung derselben Länge, Reihenfolge und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position) definiert die Position das Zentrum des Gradienten. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}}-Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Gradienten). Der letzte Farbstop minus dem Winkel des ersten Farbstopps definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein Hinweis zur {{Glossary("interpolation", "Interpolation")}}, der definiert, wie der Gradient zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Gradient die Mitte des Farbübergangs erreichen soll. Wenn sie weggelassen wird, liegt der Mittelpunkt des Farbübergangs zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von [Farbstopps in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt denselben Regeln wie Farbstopps in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe sind Strahlenkränze. Das Ergebnis der `repeating-conic-gradient()`-Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art des {{CSSxRef("&lt;image&gt;")}} Datentyps ist.

Wenn weder der erste noch der letzte Farbstop einen Farbstopwinkel größer als 0 Grad bzw. kleiner als 360 Grad einbezieht, wiederholt sich der konische Verlauf nicht.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe passt sich an die Größe des Elements an, auf das er angewendet wird, oder an die Größe, die für das `<image>` festgelegt wurde, falls es auf eine andere als die Elementgröße eingestellt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollständigen 360-Grad-Drehung oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion stattdessen.

### Verständnis sich wiederholender konischer Verläufe

Die Syntax von repeating-conic-gradient ähnelt der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht wiederholenden konischen Verlauf werden die Farbstopps um einen Gradientenbogen herum platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der Winkel des letzten Farbstopps minus dem ersten.

![Vergleich der Farbstops für sich wiederholende und nicht wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die oben genannten Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit sich ein sich wiederholender Verlauf wiederholt, definieren wir die ersten und letzten Farbstopps. Wie bei nicht wiederholenden Verläufen wird bei Annahme der Voreinstellungen der erste und letzte Farbstop als 0 und entweder 100% oder 360 Grad angenommen, wenn sie nicht explizit angegeben sind. Beim Standardwert von diesen Werten ist der sich wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie der nicht wiederholende konische Verlauf werden die Farbstopps um einen Gradientenbogen herum platziert — den Umfang eines Kreises, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Die Farben ändern sich, als ob sie um das Zentrum eines Kreises kreisen würden, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der der Unterschied zwischen dem größten und kleinsten Farbwinkel ist, dann wiederholend.

Ein sich wiederholender konischer Verlauf wird spezifiziert, indem ein Rotationswinkel angezeigt, das Zentrum des Verlaufs und anschließend eine Liste von Farbstopps angegeben werden. Wie bei nicht wiederholenden konischen Verläufen werden die Farbstopps eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Zu den Einheiten gehören `deg` für Grad, `grad` für Gon, `rad` für Radianten und `turn` für Drehungen. Es gibt 360 Grad, 400 Gon, 2π Radianten und 1 Drehung in einem Kreis. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Radiale und konische Verlaufssyntax ermöglichen es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert {{cssxref('background-position')}}.

Der Gradientenbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die angewinkelten Farbstopps, ihre Startpunkte, Endpunkte und optional in deren Mitte befindliche angewinkelte Farbstoppunkte bestimmt. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen benachbarten Farbstops verändert werden.

#### Anpassen von Verläufen

Durch das Hinzufügen von mehr angewinkelten Farbstoppunkten auf dem Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Standort eines Farbstopps nicht spezifizieren, wird er auf halbem Weg zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wie beim Gegenstück des nicht wiederholenden Verlaufs, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, sind die Werte 0 Grad und 360 Grad. Wenn Sie keinen Winkel für einen der beiden angeben, erhalten Sie einen nicht wiederholenden konischen Verlauf. Wenn Sie einen nicht 0 oder 360 Grad für den ersten oder letzten Farbstopp entsprechend angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Wenn Sie beispielsweise keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstop angeben, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste angegebene Farbstop, und der letzte Farbstop ist der letzte angegebene Winkel für den Farbstop. Die folgenden beiden Verläufe sind gleich:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben glatt von der Farbe an einem Farbstopp zur Farbe am nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt zwischen dem Farbwechsel ist. Sie können diesen Farbwechselmittelpunkt an einen beliebigen Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo die Mitte des Farbwechsels sein soll.

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, ist der Übergang eine harte Linie zwischen der ersten und der letzten an dieser Stelle deklarierten Farbe.

Während Sie verschiedene Winkeleinheiten mischen können, tun Sie es nicht. Dies erschwert das Lesen von CSS.

### Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten Assistenztechnologien keine speziellen Informationen zu Hintergrundbildern. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und daher nichts an seine Benutzer vermitteln wird. Während es möglich ist, Kuchendiagramme, Schachbrettmuster und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, Alternativtext zuzuweisen, und daher wird das Bild, das durch den konischen Verlauf dargestellt wird, nicht für Screenreader-Benutzer zugänglich sein. Wenn das Bild Informationen enthält, die für das Verstehen des übergeordneten Zwecks der Seite unerlässlich sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

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
  background-image: repeating-conic-gradient(#fff 0 9deg, #000 9deg 18deg);
}
```

{{EmbedLiveSample("Black_and_white_starburst", 220, 220)}}

### Verlauf, der nicht zentriert ist

Dieser Verlauf wiederholt sich 18 Mal, da wir jedoch nur die rechte Hälfte sehen, sehen wir nur 9 Wiederholungen.

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

### Interpolation mit Farbtönen

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und der [Hue](/de/docs/Web/CSS/hue) wird interpoliert.

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

Das Kästchen auf der linken Seite verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} übergeht. Das Kästchen auf der rechten Seite verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS gradients](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Weitere Verlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
