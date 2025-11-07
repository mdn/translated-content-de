---
title: repeating-conic-gradient()
slug: Web/CSS/Reference/Values/gradient/repeating-conic-gradient
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/Reference/Values/gradient/conic-gradient)), wobei Farbübergänge um einen Mittelpunkt rotieren (anstatt [vom Zentrum aus zu strahlen](/de/docs/Web/CSS/Reference/Values/gradient/repeating-radial-gradient)).

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
  - : Mit dem Schlüsselwort `from` eingeführt und mit einem Winkel als Wert, definiert die Drehung des Verlaufs im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Längen-, Reihenfolge- und Schlüsselwortwerten wie die Eigenschaft [background-position](/de/docs/Web/CSS/Reference/Properties/background-position) definiert die Position das Zentrum des Verlaufs. Wenn es weggelassen wird, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbwert des Farbstopps {{CSSxRef("&lt;color&gt;")}}, gefolgt von einer oder zwei optionalen Stopp-Positionen (einem {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Der letzte Farbwinkel abzüglich des ersten Farbstopps definiert die Größe des sich wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}}-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Farbmittelpunkt des Farbübergangs erreicht werden soll. Wenn es weggelassen wird, ist der Mittelpunkt des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden Kegelverläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispielhafte sich wiederholende Kegelverläufe umfassen Sternenstrahlen. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des Datentyps {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farbstopp einen Farbwinkel größer als 0deg oder kleiner als 360 Grad enthält, wird der Kegelverlauf nicht wiederholt.

Wie bei jedem Verlauf hat ein sich wiederholender Kegelverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe, auf die das `<image>` festgelegt ist, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>` verwendet werden kann. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den Datentyp {{CSSxRef("&lt;color&gt;")}} verwenden.

> [!NOTE]
> Um einen Kegelverlauf ohne Wiederholung zu erstellen, machen Sie den Verlauf zu einer vollständigen 360-Grad-Drehung oder verwenden Sie stattdessen die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verständnis von sich wiederholenden Kegelverläufen

Die Syntax von repeating-conic-gradient ähnelt der der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht wiederholenden Kegelverlauf werden die Farbstopps um einen Verlaufskreis platziert. Wie beim sich wiederholenden radialen Verlauf wird die Größe des sich wiederholenden Abschnitts durch den Winkel des letzten Farbstopps minus dem ersten Farbstopps bestimmt.

![Vergleich der Farbverläufe für sich wiederholende und nicht wiederholende Kegel- und Radialverläufe](repeatingconicgradient.png)

Die oben gezeigten Verläufe sind ein Drittel blau, ein Drittel rot und ein Drittel gelb definiert.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Damit ein wiederholender Verlauf wiederholt wird, definieren wir die ersten und letzten Farbstopps. Wie bei nicht wiederholenden Verläufen wird davon ausgegangen, dass die ersten und letzten Farbstopps 0 und entweder 100% oder 360deg betragen, wenn sie nicht explizit angegeben werden. Wenn diese Werte standardmäßig verwendet werden, beträgt der Wiederholungsbogen 360 Grad und wird daher nicht wiederholt.

Wie beim nicht wiederholenden Kegelverlauf werden die Farbstopps um einen Verlaufskreisbogen platziert — dem Kreisumfang entlang, statt auf der Verlaufslinie, die vom Zentrum des Verlaufs ausgeht. Die Farben wechseln, als würden sie um das Zentrum eines Kreises gedreht, beginnend oben, wenn kein `from <angle>` angegeben ist, und im Uhrzeigersinn für die Größe des Winkels, der den Unterschied zwischen dem größten und kleinsten Farbwinkel ausmacht, dann wiederholt.

Ein sich wiederholender Kegelverlauf wird durch Angabe eines Drehwinkels, des Zentrums des Verlaufs und dann durch Angabe einer Liste von Farbstopps angegeben. Wie bei nicht wiederholenden Kegelverläufen werden die Farbstopps eines sich wiederholenden Kegelverlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten beinhalten `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung. Browser, die sich wiederholende Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation.

Radial- und Kegelverlaufs-Syntax ermöglicht das Positionieren des Verlaufzentrums überall innerhalb oder sogar außerhalb des Bildes. Die Werte für die Position sind ähnlich der Syntax für 2-Wert {{cssxref('background-position')}}.

Der Verlaufskreisbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden, oder 12:00 Uhr. Die Farben des Verlaufs werden durch die gewinkelten Farbstopps, ihre Ausgangspunkte, Endpunkte und die optionalen gewinkelten Farbstopppunkte bestimmt. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen den Farbstopps benachbarter Farben verändert werden.

#### Anpassen von Verläufen

Durch Hinzufügen weiterer gewinkelter Farbstopppunkte auf dem Verlaufskreisbogen können Sie einen sehr angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er in der Mitte zwischen demjenigen platziert, der vor ihm liegt, und demjenigen, der ihm folgt. Wie beim nicht wiederholenden Verlaufspartner, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, werden die Werte 0deg und 360deg sein. Wenn Sie keinen Winkel für beide angeben, erhalten Sie einen nicht wiederholenden Kegelverlauf. Wenn Sie einen anderen als 0 oder 360 Grad für den ersten bzw. letzten angeben, wird der Verlauf auf Basis dieses Wertes wiederholt. Wenn Sie zum Beispiel keinen Winkel für die erste Farbe angeben und 10% auf den letzten Farbwinkelpunkt festlegen, wird der Bogen 10 Mal wiederholt. Der Startpunkt ist vielmehr der erste deklarierte Farbstopp, und der letzte deklarierte Farbstopp ist der letzte Farbwinkelpunkt. Die folgenden zwei Verläufe sind gleichwertig:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig wechseln die Farben reibungslos von der Farbe an einem Farbstopp zu der Farbe am nächsten Farbstopp, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Farbübergangsmittelpunkt zu jedem Punkt zwischen zwei Farbstopps verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo der Übergangshöhepunkt des Farbverlaufs liegen soll.

Wenn zwei oder mehr Farbstopps am selben Ort sind, wird der Übergang eine harte Linie zwischen der ersten und letzten dort deklarierten Farbe sein.

Obwohl Sie verschiedene Winkeleinheiten mischen und kombinieren können, tun Sie dies nicht. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen über Hintergrundbilder für Hilfstechnologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader dessen Vorhandensein nicht ankündigt und daher seinen Benutzern nichts mitteilt. Während es möglich ist, Kuchendiagramme, Schachbretter und andere Effekte mit Kegelverläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher wird das Bild, das durch den Kegelverlauf dargestellt wird, für Screenreader-Benutzer nicht zugänglich sein. Wenn das Bild Informationen enthält, die entscheidend zum Verständnis des Gesamtsinns der Seite beitragen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Erklärung der Leitlinie 1.1](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis der WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weiße Sternenstrahlen

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

### Außerzentrierter Verlauf

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

In diesem Interpolationsbeispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem verwendet und der [Hue](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

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

Das linke Kästchen verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbrad")}} wechselt. Das rechte Kästchen verwendet [längere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen wechselt und dabei durch Grün, Gelb und Orange geht.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Weitere Beispiele für repeating-conic-gradient

Bitte sehen Sie [Themen zu CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Themen zu CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlaufsfunktionen: {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/Reference/Values/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
