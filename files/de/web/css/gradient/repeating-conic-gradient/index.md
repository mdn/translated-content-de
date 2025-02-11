---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{CSSRef}}

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erzeugt ein Bild, das aus einem sich wiederholenden Farbverlauf (anstatt eines [einzelnen Farbverlaufs](/de/docs/Web/CSS/gradient/conic-gradient)) besteht, wobei die Farbverläufe um einen Mittelpunkt rotieren (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Wird durch das Schlüsselwort `from` eingeleitet und nimmt einen Winkel als Wert, der die Rotation des Farbverlaufs im Uhrzeigersinn bestimmt.
- `<position>`
  - : Verwendet dieselben Längen-, Reihenfolgen- und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position). Die Position definiert das Zentrum des Farbverlaufs. Wenn sie ausgelassen wird, ist der Standardwert `center`, was bedeutet, dass der Farbverlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbpunkt mit einem {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Farbverlaufs). Der Winkel zwischen dem letzten und dem ersten Farbpunkt definiert die Größe des sich wiederholenden Farbverlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolationshinweis")}}, der definiert, wie sich der Farbverlauf zwischen benachbarten Farbpunkten entwickelt. Die Länge definiert den Punkt zwischen zwei Farbstopps, an dem der Farbverlauf die Mitte des Farbumschlags erreichen sollte. Wird dieser Wert nicht angegeben, liegt die Mitte des Farbumschlags genau zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden Kegelfarbverläufen folgt denselben Regeln wie [Farbstopps in linearen Farbverläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für wiederholende Kegelfarbverläufe umfassen Sternexplosionen. Das Ergebnis der Funktion `repeating-conic-gradient()` ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, einer speziellen Art von {{CSSxRef("&lt;image&gt;")}}.

Wenn weder der erste noch der letzte Farbpunkt einen Winkel größer als 0° oder kleiner als 360° enthalten, wird der Kegelfarbverlauf nicht wiederholt.

Wie jeder Farbverlauf hat auch ein sich wiederholender Kegelfarbverlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description), d. h., er besitzt keine natürliche oder bevorzugte Größe oder ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, auf die das `<image>` gesetzt ist, falls diese von der Größe des Elements abweicht.

Da `<gradient>`s zum Datentyp `<image>` gehören, können sie nur dort verwendet werden, wo `<image>`s eingesetzt werden können. Daher funktioniert `repeating-conic-gradient()` nicht mit {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen nicht wiederholenden Kegelfarbverlauf zu erstellen, machen Sie den Farbverlauf zu einer vollständigen 360°-Drehung oder verwenden Sie die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis von sich wiederholenden Kegelfarbverläufen

Die Syntax von `repeating-conic-gradient` ähnelt der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht-wiederholenden Kegelfarbverlauf werden die Farbstopps um einen Kreisabschnitt platziert. Wie beim wiederholenden radialen Farbverlauf wird die Größe des wiederholenden Bereichs durch den Unterschied zwischen dem ersten und letzten Farbstopppunkt bestimmt.

![Vergleich der Farbstopps für wiederholende und nicht-wiederholende Kegel- und radiale Farbverläufe](repeatingconicgradient.png)

Die oben gezeigten Farbverläufe sind als jeweils ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein wiederholender Farbverlauf funktioniert, definieren wir den ersten und den letzten Farbstopppunkt. Wie bei nicht-wiederholenden Farbverläufen werden der erste und der letzte Farbpunkt als 0 und entweder 100 % oder 360° angenommen, wenn sie nicht explizit angegeben werden. Wenn diese Werte verwendet werden, ist der sich wiederholende Bogen 360°, und wiederholt sich daher nicht.

Wie beim nicht-wiederholenden Kegelfarbverlauf befinden sich die Farbstopps um einen Kreisabschnitt – der Umfang eines Kreises – anstatt auf der Linie des Farbverlaufs, die vom Zentrum des Farbverlaufs ausgeht. Die Farben wechseln, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der durch den Unterschied zwischen dem größten und dem kleinsten Farbwinkel definiert ist, bevor sie sich wiederholen.

Ein wiederholender Kegelfarbverlauf wird durch Angabe eines Rotationswinkels, des Zentrums des Farbverlaufs und einer Liste von Farbstopppunkten spezifiziert. Wie bei nicht-wiederholenden Kegelfarbverläufen werden die Farbstopps eines wiederholenden Kegelfarbverlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradianten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis umfasst 360 Grad, 400 Gradianten, 2π Radianten und 1 Umdrehung. Browser, die wiederholende Kegelfarbverläufe unterstützen, akzeptieren auch Prozentangaben, wobei 100 % 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Die Syntax für radiale und kegelförmige Farbverläufe erlaubt es, das Zentrum des Farbverlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind denen der 2-Wert-Syntax von {{cssxref('background-position')}} ähnlich.

Der Farbverlaufsbogen ist ein Teil des Umfangs des Farbverlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Farbverlaufs werden bestimmt durch die Winkel der Farbstopps, ihre Ausgangspunkte, Endpunkte und die optionalen dazwischenliegenden Farbstopps. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen benachbarten Farbstopps angepasst werden.

#### Anpassung von Farbverläufen

Durch Hinzufügen weiterer Farbstopppunkte mit verschiedenen Winkeln auf dem Farbverlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch einen {{CSSxRef("&lt;angle&gt;")}}-Wert definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird er auf halben Weg zwischen dem vorherigen und dem nächsten platziert. Wie beim nicht-wiederholenden Gegenstück gilt: Wenn Sie keinen Winkel für den ersten oder letzten Farbpunkt angeben, lauten die Werte 0° und 360°. Wenn Sie keinen Winkel für einen von beiden angeben, erhalten Sie einen nicht-wiederholenden Kegelfarbverlauf. Wenn Sie hingegen für den ersten oder letzten Punkt einen Winkel von nicht 0° oder 360° angeben, wiederholt sich der Farbverlauf auf Basis dieses Werts. Zum Beispiel: Wenn Sie keinen Winkel für die erste Farbe angeben und 10 % für den letzten Farbpunkt, wiederholt sich der Bogen 10 Mal. Der Startpunkt ist der zuerst angegebene Farbpunkt, und der letzte Farbpunkt basiert auf dem zuletzt angegebenen Farbwinkel. Die folgenden zwei Farbverläufe sind äquivalent:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben fließend von der Farbe eines Farbstopps zu der des nächsten Farbstopps, wobei der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen den Farbstopps ist. Sie können diesen Übergangsmittelpunkt an jede beliebige Stelle zwischen zwei Farbstopps durch Hinzufügen eines Farbhints bewegen, der angibt, wo der Mittelpunkt des Farbübergangs sein soll.

Wenn zwei oder mehr Farbstopps an derselben Position liegen, wird der Übergang eine scharfe Linie zwischen der zuerst und zuletzt festgelegten Farbe an dieser Position.

Obwohl Sie verschiedene Winkelmaße mischen können, tun Sie dies besser nicht. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten assistiven Technologien keine speziellen Informationen zu Hintergrundbildern. Dies ist besonders für Screenreader relevant, da ein Screenreader die Präsenz solcher Bilder nicht ankündigt und daher den Nutzern keine Information darüber vermittelt. Während es möglich ist, mit Kegelfarbverläufen Tortendiagramme, Schachbrettmuster und andere Effekte zu erstellen, bietet CSS für Bilder keine native Möglichkeit, Alternativtexte zuzuweisen. Daher sind die in einem Kegelfarbverlauf dargestellten Bilder für Nutzer eines Screenreaders nicht zugänglich. Wenn das Bild Informationen enthält, die wichtig sind, um die beabsichtigte Bedeutung der Seite zu verstehen, ist es besser, diese semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Leitfaden 1.1 Erklärungen](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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

### Nicht zentrierter Farbverlauf

Dieser Farbverlauf wiederholt sich 18 Mal, aber da wir nur die rechte Hälfte sehen, sehen wir nur 9 Wiederholungen.

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

In diesem Beispiel zur Interpolation wird das [HSL-Farbsystem](/de/docs/Web/CSS/color_value/hsl) verwendet, um den [Hue-Farbton](/de/docs/Web/CSS/hue) zu interpolieren.

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

Die linke Box verwendet die [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau wechselt, indem sie den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} nutzt. Die rechte Box verwendet die [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei Grün-, Gelb- und Orangetöne durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Weitere Farbverlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
