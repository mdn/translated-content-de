---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erzeugt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient)), bei dem Farbverläufe um einen Mittelpunkt rotieren (anstatt [vom Mittelpunkt auszustrahlen](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

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
  - : Vorangestellt durch den `from` Schlüsselbegriff und einen Winkel als seinen Wert einnehmend, definiert die Rotation des Verlaufs in Uhrzeigerrichtung.
- `<position>`
  - : Mit denselben Längen-, Reihenfolge- und Schlüsselwerten wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position), definiert die Position das Zentrum des Verlaufs. Wenn sie weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Der {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farb-Stopp minus dem Winkel des ersten Farbstopps definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops der Verlauf die Mitte des Farbwechsels erreichen sollte. Wenn sie weggelassen wird, ist die Mitte des Farbwechsels die Mitte zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von Farbstops in sich wiederholenden konischen Verläufen folgt denselben Regeln wie [Farbstops in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispiele für sich wiederholende konische Verläufe sind Strahlenkränze. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farb-Stopp einen Farb-Stopp-Winkel größer als 0 Grad oder kleiner als 360 Grad umfasst, wird der konische Verlauf nicht wiederholen.

Wie bei jedem Verlauf hat ein sich wiederholender konischer Verlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description), d.h. er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe passt sich der Größe des Elements an, auf das es angewendet wird, oder der Größe, die das `<image>` gesetzt wurde, falls es auf etwas anderes als die Größe des Elements gesetzt wurde.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen konischen Verlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollen 360-Grad-Rotation, oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion stattdessen.

### Verständnis von sich wiederholenden konischen Verläufen

Die Syntax von repeating-conic-gradient ist ähnlich der Syntax von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie der nicht-wiederholende konische Verlauf werden die Farbstops um einen Verlaufungsbogen platziert. Wie der sich wiederholende radiale Verlauf ist die Größe des wiederholenden Abschnitts der Winkel des ersten Farbstopps abgezogen vom Winkel des letzten Farbstopps.

![Vergleich der Farbstops für sich wiederholende und nicht-wiederholende konische und radiale Verläufe](repeatingconicgradient.png)

Die oben genannten Verläufe sind als zu einem Drittel blau, zu einem Drittel rot und zu einem Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein sich wiederholender Verlauf sich wiederholt, definieren wir die ersten und letzten Farbstops. Wie bei nicht-wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farbstops 0 und entweder 100% oder 360 Grad sind, wenn sie nicht explizit deklariert werden. Wenn man sich auf diese Werte standardmäßig verlässt, ist der wiederholende Bogen 360 Grad und daher wird er nicht wiederholt.

Wie der nicht-wiederholende konische Verlauf werden die Farbstops um einen Verlaufungsbogen platziert - der Umfang eines Kreises, anstatt auf der Verlaufslinie, die aus dem Zentrum des Verlaufs herausragt. Die Farben wechseln, als ob sie um das Zentrum eines Kreises gedreht werden, beginnend an der Spitze, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen dem größten und kleinsten Farbwinkel ist, dann wiederholend.

Ein sich wiederholender konischer Verlauf wird spezifiziert durch die Angabe eines Rotationswinkels, des Zentrums des Verlaufs, und dann die Angabe einer Liste von Farbstops. Wie bei nicht-wiederholenden konischen Verläufen werden die Farbstops eines sich wiederholenden konischen Verlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten schließen ein `deg` für Grad, `grad` für Graden, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Graden, 2π Radianten und 1 Umdrehung. Browser, die sich wiederholende konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Radiale und konische Verlaufssyntax bietet die Möglichkeit, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Werte-{{cssxref('background-position')}}.

Der Verlaufungsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die abgewinkelten Farbstops bestimmt, ihre Startpunkte, Endpunkte und, dazwischen, und optionale abgewinkelte Farbstopp-Punkte. Die Übergänge zwischen Farben können mit Farbhints zwischen benachbarten Farben Farbstops verändert werden.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer abgewinkelter Farbstopp-Punkte auf dem Verlaufungsbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er auf halbem Weg zwischen dem platziert, der ihm vorausgeht und dem, der ihm folgt. Wie bei der nicht-wiederholenden Verlaufsvariante, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, werden die Werte 0 Grad und 360 Grad sein. Wenn Sie für keinen einen Winkel angeben, erhalten Sie einen sich nicht wiederholenden konischen Verlauf. Wenn Sie außer 0 oder 360 Grad einen Winkel für den ersten oder letzten Farbstopps respektive angeben, wird sich der Verlauf auf der Grundlage dieses Wertes wiederholen. Beispielsweise, wenn Sie keinen Winkel für die erste Farbe angeben und 10% für den letzten Farbstopp deklarieren, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Ausgangspunkt der erste deklarierte Farbstopp, und der letzte Farbstopp ist der zuletzt deklarierte Farbstoppwinkel. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig ändern sich die Farben nahtlos von der Farbe an einem Farbstopp zu der Farbe am angrenzenden Farbstopp, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt der Farbänderung ist. Sie können diesen Farbänderung-Mittelpunkt an jeden Punkt zwischen zwei Farbstops verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo die Mitte des Farbwechsels sein sollte.

Wenn zwei oder mehr Farbstops an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der ersten und letzten angegebenen Farbe an diesem Standort sein.

Obwohl Sie verschiedene Winkeleinheiten mischen und kombinieren können, tun Sie es nicht. Es macht CSS schwer zu lesen.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologie. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigen wird und daher seinen Benutzern nichts vermittelt. Obwohl es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das durch den konischen Verlauf dargestellte Bild für Benutzer von Screenreadern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des Gesamtzwecks der Seite wichtig sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Erklärung des Erfolgskriteriums 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
  background-image: repeating-conic-gradient(white 0 9deg, black 9deg 18deg);
}
```

{{EmbedLiveSample("Black_and_white_starburst", 220, 220)}}

### Außerhalb zentrierter Verlauf

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

In diesem Beispiel der Interpolation wird das [HSL](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das Feld links verwendet eine [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} wechselt. Das Feld rechts verwendet eine [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt, der durch Grün, Gelb und Orange führt.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte schauen Sie sich [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
