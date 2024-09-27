---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`repeating-conic-gradient()`**-[CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)) mit Farbüberblendungen besteht, die um einen Mittelpunkt gedreht sind (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Vorangestellt durch den Schlüsselbegriff `from` und mit einem Winkel als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mithilfe derselben Längen-, Reihenfolgen- und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position) definiert die Position das Zentrum des Verlaufs. Wenn weggelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbhaltepunkt mit dem Wert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Haltepunktpositionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farbhaltepunkt abzüglich des Winkels des ersten Farbhaltepunktes definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein [Interpolations](/de/docs/Glossar/Interpolation)hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbhaltepunkten verläuft. Die Länge definiert den Punkt zwischen zwei Farbhaltepunkten, an dem der Farbverlauf die Mitte des Farbübergangs erreichen soll. Wenn weggelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbhaltepunkten.

> [!NOTE]
> Die Darstellung von [Farbhaltepunkten in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt denselben Regeln wie Farbhaltepunkte in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Beispiele für sich wiederholende kegelförmige Verläufe sind Sternenmuster. Das Ergebnis der Funktion `repeating-conic-gradient()` ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, der eine besondere Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

Wenn weder der erste noch der letzte Farbhaltepunkt einen Farbhaltepunktwinkel größer als 0° oder weniger als 360 Grad aufweisen, wird der Kegelverlauf nicht wiederholt.

Wie jeder Verlauf hat auch ein sich wiederholender kegelförmiger Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, auf die das `<image>` eingestellt ist, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Da `<gradient>`s dem `<image>`-Datentyp angehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}Datentyp verwenden.

> [!NOTE]
> Um einen kegelförmigen Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Drehung oder verwenden Sie stattdessen die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis der sich wiederholenden kegelförmigen Verläufe

Die Syntax für sich wiederholende kegelförmige Verläufe ist der {{cssxref("gradient/conic-gradient", "conic-gradient()")}}- und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}-Syntax ähnlich. Wie bei einem nicht sich wiederholenden kegelförmigen Verlauf werden die Farbhaltepunkt rund um einen Verlaufsbogen platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farbhaltepunkt abzüglich des Winkels des letzten Farbhaltepunktes.

![Vergleich der Farbhaltepunkte für sich wiederholende und nicht sich wiederholende kegelförmige und radiale Verläufe](repeatingconicgradient.png)

Die oben definierten Verläufe sind zu einem Drittel blau, zu einem Drittel rot und zu einem Drittel gelb.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit sich ein Verlauf wiederholt, müssen wir die ersten und letzten Farbhaltepunkte definieren. Wie bei nicht sich wiederholenden Verläufen werden die ersten und letzten Farbhaltepunkt standardmäßig als 0 und entweder 100% oder 360° angenommen, wenn diese nicht explizit angegeben werden. Wenn auf diese Werte zurückgegriffen wird, beträgt der wiederholende Bogen 360 Grad und wiederholt sich daher nicht.

Wie bei einem nicht sich wiederholenden kegelförmigen Verlauf werden die Farbhaltepunkt rund um einen Verlaufsbogen platziert – den Umfang eines Kreises, anstatt sich auf der Verlaufsgerade von der Mitte des Verlaufs aus zu befinden. Die Farben ändern sich, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der den Unterschied zwischen dem größten und dem kleinsten Farbwinkel darstellt, und dann wiederholend.

Ein sich wiederholender kegelförmiger Verlauf wird angegeben, indem ein Rotationswinkel angegeben wird, das Zentrum des Verlaufs und dann eine Liste von Farbhaltepunkten spezifiziert werden. Wie bei nicht sich wiederholenden kegelförmigen Verläufen werden die Farbhaltepunkt eines sich wiederholenden kegelförmigen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radiant und `turn` für Umdrehungen. Ein Kreis enthält 360 Grad, 400 Gradienten, 2π Radiant und 1 Umdrehung. Browser, die sich wiederholende kegelförmige Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Die Syntax für radiale und kegelförmige Verläufe ermöglicht das Positionieren des Verlaufszentrums an beliebiger Stelle innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich der Syntax für 2-Werte {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die angewinkelten Farbhaltepunkt, ihre Startpunkte, Endpunkte und, dazwischen liegende und optionale, angewinkelte Farbhaltepunktpunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbehinweisen zwischen den Farbhaltepunkten benachbarter Farben verändert werden.

#### Anpassung der Verläufe

Durch Hinzufügen weiterer angewinkelter Farbhaltepunktpunkte auf dem Verlaufsbogen können Sie einen individuell angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbhaltepunktes kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Standort eines Farbhaltepunktes nicht angeben, wird er auf halbem Weg zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wie bei dem nicht sich wiederholenden Verlaufselement, wenn Sie keinen Winkel für den ersten oder letzten Farbhaltepunkt angeben, betragen die Werte 0° und 360°. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht sich wiederholenden kegelförmigen Verlauf. Wenn Sie einen anderen Wert als 0 oder 360 Grad für den ersten bzw. letzten angeben, wird der Verlauf anhand dieses Wertes wiederholt. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben, und 10% für den letzten Farbhaltepunkt deklarieren, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbhaltepunkt, und der letzte Farbhaltepunkt ist der letzte deklarierte Farbhaltepunktwinkel. Die folgenden zwei Verläufe sind äquivalent:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig ändern sich die Farben reibungslos vom Farbhaltepunkt einer Farbe zum Farbhaltepunkt der nächsten Farbe, wobei der Mittelpunkt zwischen den Farben die Hälfte des Farbübergangs ist. Sie können diesen Mittpunkt des Farbübergangs an einen beliebigen Punkt zwischen zwei Farbhaltepunkten verschieben, indem Sie einen Farbehinweis hinzufügen, der angibt, wo der Mittelpunkt des Farbübergangs liegen soll.

Wenn zwei oder mehr Farbhaltepunkt an derselben Position sind, ist die Übergangslinie der erste und letzte deklarierte Farbpunkt dieser Position.

Obwohl Sie verschiedene Winkelmaße mischen und kombinieren können, sollten Sie dies nicht tun. Es macht das CSS schwer lesbar.

### Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine besonderen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist hauptsächlich für Bildschirmleser wichtig, da ein Bildschirmleser seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit kegelförmigen Verläufen zu erstellen, bietet CSS keine native Möglichkeit, alternativen Text zuzuweisen. Daher wird das durch den kegelförmigen Verlauf dargestellte Bild für Benutzer von Bildschirmlesern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Schwarz-Weiß-Sternenmuster

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

### Außerhalb des Zentrums liegender Verlauf

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

In diesem Beispiel für Interpolation wird das [HSL](/de/docs/Web/CSS/color_value/hsl)-Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/hue) interpoliert.

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

Die Box links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem sie den kürzeren Bogen auf dem [Farbkreis](/de/docs/Glossary/Color_wheel) verwendet. Die Box rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau wechselt, indem sie den längeren Bogen verwendet, der durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauffunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
