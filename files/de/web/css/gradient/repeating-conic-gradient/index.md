---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem wiederholenden Verlauf besteht (statt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)) mit Farbübergängen, die um einen Mittelpunkt gedreht werden (statt [vom Zentrum auszustrahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Geht dem `from`-Schlüsselwort voraus und nimmt einen Winkel als Wert an, der die Rotation des Verlaufs im Uhrzeigersinn definiert.
- `<position>`
  - : Mit denselben Längen-, Reihenfolge- und Schlüsselwortwerten wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position) definiert die Position das Zentrum des Verlaufs. Wenn weggelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stopp's {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farb-Stopp minus der Winkel des ersten Farb-Stopps definiert die Größe des wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farb-Stops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farb-Stops der Verlauf die Mitte des Farbübergangs erreichen soll. Wird er weggelassen, ist die Mitte des Farbübergangs die Mitte zwischen zwei Farb-Stops.

> [!NOTE]
> Das Rendern von Farb-Stops in wiederholenden Kegelschnitten verläuft nach denselben Regeln wie [Farb-Stops in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für wiederholende Kegelschnitt-Verläufe sind Sternexplosionen. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welcher eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farb-Stopp einen Farb-Stopp-Winkel größer als 0 Grad oder kleiner als 360 Grad enthält, wird der Kegelschnitt-Verlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein wiederholender Kegelschnitt-Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe Wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe, auf die das `<image>` gesetzt ist, wenn es auf etwas anderes gesetzt ist als die Elementgröße.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen Kegelschnitt-Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Drehung oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion stattdessen.

### Verständnis von wiederholenden Kegelschnitt-Verläufen

Die Syntax für wiederholende Kegelschnitt-Verläufe ist ähnlich der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei nicht wiederholenden Kegelschnitt-Verläufen werden die Farb-Stops entlang eines Verlaufsbogens platziert. Wie beim wiederholenden Radial-Verlauf, ist die Größe des wiederholenden Abschnitts der erste Farb-Stopp abgezogen vom Winkel des letzten Farb-Stopps.

![Vergleich der Farb-Stops für wiederholende und nicht wiederholende Kegel- und Radial-Verläufe](repeatingconicgradient.png)

Die oben genannten Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein wiederholender Verlauf sich wiederholt, definieren wir die ersten und letzten Farb-Stops. Wie bei nicht wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farb-Stops 0 und entweder 100% oder 360 Grad sind, wenn sie nicht ausdrücklich deklariert werden. Wenn sie auf diese Werte zurückfallen, ist der wiederholende Bogen 360 Grad, und daher wird er nicht wiederholt.

Wie bei nicht wiederholenden Kegelschnitt-Verläufen werden die Farb-Stops entlang eines Verlaufsbogens platziert – dem Umfang eines Kreises, und nicht entlang der Verlauslinie, die vom Zentrum des Verlaufs ausgeht. Die Farben wechseln, als ob sie sich um das Zentrum eines Kreises drehen, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen dem größten und kleinsten Farbwinkel ist, und dann wiederholt werden.

Ein wiederholender Kegelschnitt-Verlauf wird durch die Angabe eines Rotationswinkels, des Zentrums des Verlaufs und der Angabe einer Liste von Farb-Stops spezifiziert. Wie bei nicht wiederholenden Kegelschnitt-Verläufen werden die Farb-Stops eines wiederholenden Kegelschnitt-Verlaufs mit einem {{cssxref('angle')}} spezifiziert. Einheiten umfassen `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Es gibt 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung in einem Kreis. Browser, die wiederholende Kegelschnitt-Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Die Syntax für Radial- und Kegelschnitt-Verläufe ermöglicht es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich zur Syntax für 2-Wert {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die abgewinkelten Farb-Stops, ihre Anfangspunkte, Endpunkte und, dazwischen, durch optionale abgewinkelte Farb-Stopp-Punkte bestimmt. Die Übergänge zwischen Farben können mit Farbhilfen zwischen den Farb-Stops der benachbarten Farben verändert werden.

#### Anpassung von Verläufen

Indem Sie mehr abgewinkelte Farb-Stopp-Punkte auf dem Verlaufsbogen hinzufügen, können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erzeugen. Die Position eines Farb-Stops kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie die Position eines Farb-Stops nicht angeben, wird es in der Mitte zwischen dem, das ihm vorausgeht, und dem, das ihm folgt, platziert. Wie bei der nicht wiederholten Verlaufsgegenstück, wenn Sie keinen Winkel für den ersten oder letzten Farb-Stopp angeben, sind die Werte 0 Grad und 360 Grad. Wenn Sie keinen Winkel für entweder deklarieren, erhalten Sie einen nicht wiederholenden Kegelschnitt-Verlauf. Wenn Sie einen nicht 0 oder 360 Grad-Wert für den ersten bzw. letzten angeben, wird der Verlauf auf Grundlage dieses Wertes wiederholt. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10% beim letzten Farb-Stopp deklarieren, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farb-Stopp, und der letzte Farb-Stopp ist der zuletzt deklarierte Farb-Stopp-Winkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben sanft von der Farbe an einem Farb-Stopp zur Farbe am nachfolgenden Farb-Stopp, wobei der Mittelpunkt zwischen den Farben der Haltepunkt des Farbwechsels ist. Sie können diesen Farbübergangspunkt durch Hinzufügen eines Farbhints an irgendeinen Punkt zwischen zwei Farb-Stops verschieben, der angibt, wo die Mitte des Farbwechsels sein soll.

Wenn zwei oder mehr Farb-Stops an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten Farben, die an dieser Stelle deklariert sind.

Während Sie verschiedene Winkeleinheiten mischen und anpassen können, sollten Sie dies nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen über Hintergrundbilder für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, denn ein Bildschirmlesegerät wird seine Anwesenheit nicht ankündigen und daher nichts an seine Benutzer vermitteln. Während es möglich ist, Kuchendiagramme, Schachbrettmuster und andere Effekte mit Kegelschnitt-Verläufen zu erstellen, bietet CSS keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das Bild, das durch den Kegelschnitt-Verlauf repräsentiert wird, für Benutzer von Bildschirmlesegeräten nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN-Verständnis von WCAG, Leitlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weiße Sternexplosion

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

Das Kästchen links verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem der kürzere Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} verwendet wird. Das Kästchen rechts verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau wechselt, indem der längere Bogen passiert wird, der durch Grün, Gelb und Orange führt.

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
