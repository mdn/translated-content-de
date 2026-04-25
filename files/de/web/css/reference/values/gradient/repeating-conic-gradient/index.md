---
title: "`repeating-conic-gradient()` CSS Funktion"
short-title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt aus einem [einzelnen Verlauf](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient)), bei dem Farbübergänge um einen Mittelpunkt rotiert werden (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

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
  with shorter hue interpolation method */
repeating-conic-gradient(in hsl shorter hue, red, blue 90deg, green 180deg)
```

### Werte

- {{cssxref("angle")}}
  - : Vor dem Schlüsselwort `from` und mit einem Winkel als Wert versehen, definiert die Rotation des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleichen Längen-, Reihenfolge- und Schlüsselwortwerte wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position), um das Zentrum des Verlaufs zu bestimmen. Wenn ausgelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farb-Stopp mit {{CSSxRef("&lt;color&gt;")}}-Wert, gefolgt von einer oder zwei optionalen Stopp-Positionen (ein {{cssxref("angle")}} entlang der Kreisachse des Verlaufs). Der letzte Farb-Stopp minus dem Winkel des ersten Farb-Stopps bestimmt die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}}Hinweis, der definiert, wie der Verlauf zwischen angrenzenden Farbstopps fortschreitet. Die Länge bestimmt, an welchem Punkt zwischen zwei Farbstopps die Gradientenfarbe den Mittelpunkt des Farbübergangs erreichen soll. Wenn ausgelassen, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in wiederholenden Kegelverläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispielhafte wiederholende Kegelverläufe umfassen Sterneneffekte. Das Ergebnis der Funktion `repeating-conic-gradient()` ist ein Objekt des Datentyps {{cssxref("gradient")}}, welches eine besondere Art von {{cssxref("image")}} ist.

Wenn weder der erste noch der letzte Farb-Stopp einen Farbstoppswinkel größer als 0 Grad bzw. kleiner als 360 Grad enthalten, wird der Kegelverlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender Kegelverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe oder bevorzugtes Verhältnis. Seine konkrete Größe wird die Größe des Elements annehmen, auf das es angewendet wird, oder die Größe, die das `<image>` hat, wenn es auf etwas anderes als die Größe des Elements eingestellt ist.

Da `<gradient>`s zum `<image>`-Datentyp gehören, können sie nur dort verwendet werden, wo `<image>` verwendet werden kann. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}}-Datentyp nutzen.

> [!NOTE]
> Um einen Kegelverlauf zu erstellen, der sich nicht wiederholt, machen Sie den Verlauf zu einer vollständigen 360-Grad-Drehung, oder verwenden Sie stattdessen die Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}}.

### Verständnis der sich wiederholenden Kegelverläufe

Die Syntax von `repeating-conic-gradient` ist ähnlich der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Ähnlich wie der nicht-wiederholende Kegelverlauf, werden die Farbstopps um einen Verlaufsbogen platziert. Wie beim sich wiederholenden radialen Verlauf wird die Größe des sich wiederholenden Abschnitts durch den ersten Farb-Stopp minus dem Winkel des letzten Farb-Stopps bestimmt.

![Vergleich der Farbstopps für sich wiederholende und nicht-wiederholende Kegel- und Radialverläufe](repeatingconicgradient.png)

Die oben dargestellten Verläufe sind als ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Für einen wiederholenden Verlauf definieren wir den ersten und den letzten Farb-Stopp. Wie bei nicht-wiederholenden Verläufen wird angenommen, dass die ersten und letzten Farbstopps 0 bzw. entweder 100% oder 360 Grad sind, wenn sie nicht explizit angegeben sind. Bei diesen Standardwerten beträgt der Wiederholungsbogen 360 Grad und wiederholt sich daher nicht.

Wie der nicht-wiederholende Kegelverlauf werden die Farbstopps um einen Verlaufsbogen platziert – den Umfang eines Kreises, anstatt auf der Verlaufsachse, die vom Zentrum des Verlaufs ausgeht. Die Farben ändern sich, als ob sie um das Zentrum eines Kreises herumgedreht würden, beginnend oben, wenn kein `from <angle>` erklärt wird, und im Uhrzeigersinn mit der Größe des Winkels, der die Differenz zwischen dem größten und kleinsten Farbwinkel ist, dann wiederholen.

Ein sich wiederholender Kegelverlauf wird spezifiziert durch Angabe eines Rotationswinkels, des Zentrums des Verlaufs und dann durch die Angabe einer Liste von Farbstopps. Wie bei nicht-wiederholenden Kegelverläufen werden die Farbstopps eines sich wiederholenden Kegelverlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradianten, `rad` für Radianten und `turn` für Umrundungen. Es gibt 360 Grad, 400 Gradianten, 2π Radianten und 1 Umrundung in einem Kreis. Browser, die sich wiederholende Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entspricht, aber dies ist nicht in der Spezifikation enthalten.

Die Syntax für radiale und kegelverläufe ermöglicht es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-wertige {{cssxref('background-position')}}.

Der Verlaufsbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die angewinkelten Farbstopps, ihre Startpunkte, Endpunkte und, dazwischen, optionale angewinkelte Farbstopppunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen benachbarten Farben-Farbstopps verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer angewinkelter Farbstopppunkte auf dem Verlaufsbogen können Sie eine hochgradig angepasste Übergangszone zwischen mehreren Farben schaffen. Eine Position eines Farbstopps kann explizit durch Nutzung eines {{cssxref("angle")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er auf halbem Weg zwischen dem Vorgänger und dem Nachfolger platziert. Wie beim nicht-wiederholenden Farbengradienten wird, wenn Sie keinen Winkel für den ersten oder letzten Farb-Stopp angeben, der Wert 0 Grad und 360 Grad betragen. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht-wiederholenden Kegelverlauf. Wenn Sie einen anderen Winkel als 0 oder 360 Grad für den ersten oder letzten Farb-Stopp angeben, wird der Verlauf basierend auf diesem Wert wiederholt. Zum Beispiel, wenn Sie keinen Winkel für die erste Farbe angeben und 10 % für den letzten Farb-Stopp angeben, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Ausgangspunkt der erste deklarierte Farb-Stopp und der letzte Farb-Stopp ist der Winkel des zuletzt deklarierten Farb-Stops. Die folgenden beiden Verläufe sind äquivalent:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig ändern sich die Farben sanft von der Farbe bei einem Farbstopp zur Farbe beim nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben den Mittelpunkt des Farbübergangs darstellt. Sie können diesen Mittelpunkt des Farbübergangs an jeden Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo die Mitte des Farbübergangs sein soll.

Wenn zwei oder mehr Farbstopps an derselben Stelle liegen, wird der Übergang eine harte Linie zwischen den zuerst und zuletzt an dieser Stelle erklärten Farben sein.

Während Sie verschiedene Winkelmaße mischen und kombinieren können, sollten Sie dies nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser stellen assistiven Technologien keine speziellen Informationen zu Hintergrundbildern zur Verfügung. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und daher nichts an seine Benutzer übermittelt. Während es möglich ist, Kuchendiagramme, Schachbretter und andere Effekte mit Kegelverläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das Bild, das durch den Kegelverlauf repräsentiert wird, für Benutzer von Screenreadern nicht zugänglich sein. Wenn das Bild Informationen enthält, die für das Verständnis des gesamten Zwecks der Seite entscheidend sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verstehen von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weißer Sterneneffekt

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

{{EmbedLiveSample("Schwarz-weißer Sterneneffekt", 220, 220)}}

### Außerzentraler Verlauf

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

{{EmbedLiveSample("Außerzentraler Verlauf", 220, 220)}}

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl)-Farbensystem verwendet und der [Farbton](/de/docs/Web/CSS/Reference/Values/hue) interpoliert.

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

Die Box auf der linken Seite verwendet eine [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen des {{Glossary("Color_wheel", "Farbkreises")}} wechselt. Die Box auf der rechten Seite verwendet eine [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolieren mit Farbton", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie unter [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
