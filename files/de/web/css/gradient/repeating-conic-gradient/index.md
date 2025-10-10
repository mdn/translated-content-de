---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) erzeugt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), wobei Farbverläufe um einen Mittelpunkt rotieren (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Vorangestellt durch das Schlüsselwort `from` und unter Verwendung eines Winkels als Wert, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Längen, Reihenfolgen und Schlüsselwortwerten wie die [background-position](/de/docs/Web/CSS/background-position)-Eigenschaft, definiert die Position das Zentrum des Verlaufs. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Der Wert eines Farbstopps' {{CSSxRef("&lt;color&gt;")}}, gefolgt von einem oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farbpunkt minus der erste Farbpunktwinkel definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Farbverlauf den Mittelpunkt des Farbwechsels erreichen sollte. Wird sie ausgelassen, befindet sich der Mittelpunkt des Farbwechsels in der Mitte zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden konischen Verläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe sind sternähnliche Muster. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, das eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farbpunkt einen Farbstoppwinkel größer als 0 Grad oder kleiner als 360 Grad enthält, wird der konische Verlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, die das `<image>` hat, wenn es auf etwas anderes als die Elementgröße eingestellt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, erstellen Sie den Verlauf als vollständige 360-Grad-Drehung oder verwenden Sie stattdessen die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständigung von sich wiederholenden konischen Verläufen

Die Syntax des sich wiederholenden konischen Verlaufs ist ähnlich der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie bei einem nicht wiederholenden konischen Verlauf werden die Farbstopps um einen Verlaufsbogen herum platziert. Wie beim sich wiederholenden radialen Verlauf ist die Größe des sich wiederholenden Abschnitts der erste Farbstopp, der vom Winkel des letzten Farbstopps subtrahiert wird.

![Vergleich der Farbstopps für sich wiederholende und nicht wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die obigen Verläufe sind als jeweils ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein sich wiederholender Verlauf wiederholt wird, definieren wir den ersten und letzten Farbstopp. Wie bei nicht wiederholenden Verläufen wird davon ausgegangen, dass die ersten und letzten Farbstopps 0 und entweder 100 % oder 360 Grad betragen, wenn sie nicht explizit angegeben werden. Wenn diese Werte standardmäßig verwendet werden, beträgt der Wiederholungsbogen 360 Grad und wiederholt sich daher nicht.

Wie bei einem nicht wiederholenden konischen Verlauf werden die Farbstopps um einen Verlaufsbogen platziert - den Umfang eines Kreises, anstatt auf der Linie des Verlaufs, die vom Zentrum des Verlaufs ausgeht. Die Farben verlaufen, als ob sie um das Zentrum eines Kreises herum gedreht würden, beginnend oben, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der der Unterschied zwischen dem größten und kleinsten Farbwinkel ist, und dann wiederholt.

Ein sich wiederholender konischer Verlauf wird definiert, indem ein Rotationswinkel, das Zentrum des Verlaufs und anschließend eine Liste von Farbstopps angegeben werden. Wie bei nicht wiederholenden konischen Verläufen werden die Farbstopps eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten beinhalten `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100 % 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation enthalten.

Die Syntax von radialen und konischen Verläufen erlaubt es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für die 2-Werte {{cssxref('background-position')}}.

Der Verlaufsbogen ist ein Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die schrägen Farbstopps, ihre Startpunkte, Endpunkte und dazwischen gelegene optionale schrägste Punkt definiert. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen den Farbstopppunkten benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer schräger Farbstopppunkte zum Verlaufsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er in der Mitte zwischen dem vorherigen und dem folgenden platziert. Wie beim nicht wiederholenden Verlaufgegenstück geben nicht spezifizierte Winkel für den ersten oder letzten Farbstopp die Werte 0 Grad und 360 Grad an. Wenn Sie keinen Winkel für den ersten oder letzten angeben, erhalten Sie einen nicht wiederholenden konischen Verlauf. Wenn Sie für den ersten oder letzten einen anderen als 0 oder 360 Grad angeben, wiederholt sich der Verlauf basierend auf diesem Wert. Wenn Sie beispielsweise keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstopp deklarieren, wird der Bogen 10 Mal wiederholt. Der Ausgangspunkt ist der zuerst deklarierte Farbstopp, und der letzte Farbstopp ist der zuletzt deklarierte Farbstoppwinkel. Die folgenden beiden Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig laufen die Farben sanft vom Farbton an einem Farbstopp zum Farbton am nächsten Farbstopp über, wobei der Mittelpunkt zwischen den Farben den halben Wegpunkt zwischen dem Farbverlauf bildet. Sie können diesen Mittelpunkt des Farbverlaufs an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Mittelteil des Farbverlaufs sein sollte.

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt deklarierten Farbe an dieser Position sein.

Auch wenn Sie verschiedene Winkelmaße mischen und kombinieren können, sollten Sie das besser nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser liefern keine speziellen Informationen über Hintergrundbilder an unterstützende Technologien. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät seine Anwesenheit nicht ankündigt und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbrettmuster und andere Effekte mit konischen Verläufen zu erstellen, bietet CSS-Bilder keine native Möglichkeit, Alternativtexte zuzuweisen, und daher wird das Bild, das durch den konischen Verlauf dargestellt wird, nicht für Bildschirmlesebenutzer zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend für das Verständnis des gesamten Zwecks der Seite sind, ist es besser, dies semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verstehen des Erfolgs Kriteriums 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weißes Sternmuster

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

### Zentriert-versetzter Verlauf

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

### Interpoliert mit Farbton

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

Das linke Kästchen verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen am {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Das rechte Kästchen verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen, durch Grün, Gelb und Orange wechselt.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für mehr Beispiele.

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
