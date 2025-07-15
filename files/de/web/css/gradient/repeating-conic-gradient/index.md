---
title: repeating-conic-gradient()
slug: Web/CSS/gradient/repeating-conic-gradient
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`repeating-conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) erstellt ein Bild, das aus einem sich wiederholenden Verlauf besteht (anstatt eines [einzelnen Verlaufs](/de/docs/Web/CSS/gradient/conic-gradient)), mit Farbübergängen, die um einen Mittelpunkt rotieren (anstatt [vom Zentrum auszustrahlen](/de/docs/Web/CSS/gradient/repeating-radial-gradient)).

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
  - : Durch den `from` Schlüsselbegriff eingeleitet und mit einem Winkel als Wert, definiert die Gradientendrehung im Uhrzeigersinn.
- `<position>`
  - : Mit denselben Längen-, Reihenfolge- und Schlüsselbegriffwerten wie die Eigenschaft [background-position](/de/docs/Web/CSS/background-position), definiert die Position das Zentrum des Verlaufs. Wenn weggelassen, ist der Standardwert `center`, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein {{CSSxRef("&lt;color&gt;")}} Wert eines Farbstopps, gefolgt von ein oder zwei optionalen Stopp-Positionen, (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs). Die Differenz zwischen dem letzten und dem ersten Farbstopp-Winkel definiert die Größe des wiederholenden Verlaufs.
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations-")}} Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstopps fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstopps der Verlauf die Mitte des Farbübergangs erreichen sollte. Wenn weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstopps.

> [!NOTE]
> Die Darstellung von Farbstopps in sich wiederholenden Kegelverläufen folgt denselben Regeln wie [Farbstopps in linearen Verläufen](/de/docs/Web/CSS/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Beispielhafte sich wiederholende Kegelverläufe beinhalten Sternexplosionen. Das Ergebnis der `repeating-conic-gradient()` Funktion ist ein Objekt des {{CSSxRef("&lt;gradient&gt;")}} Datentyps, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} ist.

Wenn weder der erste noch der letzte Farbstopp einen Winkel über 0 Grad oder unter 360 Grad beinhalten, wird der Kegelverlauf sich nicht wiederholen.

Wie bei jedem Verlauf hat ein sich wiederholender Kegelverlauf [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat weder eine natürliche oder bevorzugte Größe, noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe, die das `<image>` erhält, wenn sie anders als die Elementgröße festgelegt ist.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s eingesetzt werden können. Aus diesem Grund funktioniert `repeating-conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Um einen Kegelverlauf zu erstellen, der sich nicht wiederholt, erstellen Sie den Verlauf als vollständige 360-Grad-Drehung oder verwenden Sie die {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion.

### Verstehen von sich wiederholenden Kegelverläufen

Die Syntax für sich wiederholende Kegelverläufe ähnelt der von {{cssxref("gradient/conic-gradient", "conic-gradient()")}} und {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}. Wie beim nicht wiederholten Kegelverlauf werden die Farbstopps um einen Verlaufbogen platziert. Wie beim wiederholten radialen Verlauf ist die Größe des wiederholten Abschnitts der erste Farbstopp abgezogen von dem Winkel des letzten Farbstopps.

![Vergleich der Farbstopps für wiederholende und nicht-wiederholende Kegel- und Radialverläufe](repeatingconicgradient.png)

Die oben genannten Verläufe sind jeweils ein Drittel blau, ein Drittel rot und ein Drittel gelb.

```css
repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, blue 60deg 90deg);

repeating-radial-gradient(red 0 8%, yellow 8% 16%, blue 16% 24%);

conic-gradient(red 120deg, yellow 120deg 240deg, blue 240deg);

radial-gradient(red 33%, yellow 33% 66%, blue 66%);
```

Um einen sich wiederholenden Verlauf zu erzeugen, definieren wir die ersten und letzten Farbstopps. Wie bei nicht-wiederholenden Verläufen wird davon ausgegangen, dass die ersten und letzten Farbstopps 0 und entweder 100% oder 360deg sind, wenn sie nicht explizit deklariert werden. Wenn auf diese Werte standardisiert wird, ist der wiederholende Bogen 360 Grad lang und wird daher nicht wiederholt.

Wie der nicht-wiederholende Kegelverlauf werden die Farbstopps um einen Verlaufbogen platziert – den Umfang eines Kreises, anstatt entlang der Verlaufslinie, die vom Zentrum des Verlaufs entspringt. Die Farben ändern sich, als ob sie um das Zentrum eines Kreises gedreht würden, beginnend oben, wenn kein `from <angle>` deklariert ist, und im Uhrzeigersinn für die Größe des Winkels, der die Differenz zwischen dem größten und dem kleinsten Farbwinkel ist, und dann wiederholend.

Ein sich wiederholender Kegelverlauf wird spezifiziert, indem ein Drehwinkel, das Zentrum des Verlaufs und dann eine Liste von Farbstopps angegeben werden. Wie bei nicht-wiederholenden Kegelverläufen werden die Farbstopps eines sich wiederholenden Kegelverlaufs mit einem {{cssxref('angle')}} angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Drehungen. Ein Kreis hat 360 Grad, 400 Gradienten, 2π Radianten und 1 Drehung. Browser, die sich wiederholende Kegelverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% 360 Grad entsprechen, aber dies ist nicht in der Spezifikation enthalten.

Die Syntax für Radial- und Kegelverläufe ermöglicht es, das Zentrum des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position ähneln der Syntax für 2-Werte {{cssxref('background-position')}}.

Der Verlaufbogen ist Teil des Umfangs des Verlaufs. 0 Grad ist Norden oder 12:00 Uhr. Die Farben des Verlaufs werden durch die abgewinkelten Farbstopps bestimmt, ihre Start-, Endpunkte und dazwischenliegende optionale abgewinkelte Farbstopp-Punkte. Die Übergänge zwischen Farben können mit Farbhinweisen zwischen benachbarten Farbstopps angepasst werden.

#### Anpassen von Verläufen

Durch das Hinzufügen weiterer abgewinkelter Farbstopp-Punkte auf dem Verlaufbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erstellen. Die Position eines Farbstopps kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstopps nicht angeben, wird er in der Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wie das nicht-wiederholte Verlaufspendant, wenn Sie keinen Winkel für den ersten oder letzten Farbstopp angeben, werden die Werte 0deg und 360deg sein. Wenn Sie für einen nicht 0 oder 360 Grad für den ersten bzw. letzten bekannt geben, wird der Verlauf basierend auf diesem Wert wiederholt. Zum Beispiel, wenn Sie für die erste Farbe keinen Winkel angeben und 10% am letzten Farbstopp angeben, wird der Bogen 10 Mal wiederholt. Vielmehr ist der Startpunkt der erste deklarierte Farbstopp und der letzte Farbstopp der letzte deklarierte Farbwinkel. Die folgenden beiden Verläufe sind identisch:

```css
repeating-conic-gradient(red, orange, yellow, green, blue 50%);
repeating-conic-gradient(from -45deg, red 45deg, orange, yellow, green, blue 225deg)
```

Standardmäßig gehen Farben nahtlos vom Farbton an einem Farbstopp zum Farbton am nachfolgenden Farbstopp über, wobei der Mittelpunkt zwischen den Farben der Mittelpunkt des Farbübergangs ist. Sie können diesen Farbübergangsmittelpunkt durch Hinzufügen eines Farbhinweises auf jeden Punkt zwischen zwei Farbstopps verschieben, der angibt, wo die Mitte des Farbübergangs sein sollte.

Wenn zwei oder mehr Farbstopps an derselben Stelle sind, wird der Übergang eine harte Linie zwischen der zuerst und zuletzt an diesem Ort deklarierten Farben sein.

Obwohl Sie verschiedene Winkeleinheiten mischen und anpassen können, sollten Sie dies nicht tun. Es macht CSS schwer lesbar.

## Formale Syntax

{{CSSSyntax}}

## Zugänglichkeit

Browser bieten keine speziellen Informationen zu Hintergrundbildern für unterstützende Technologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Anwesenheit nicht ankündigt und somit nichts an seine Benutzer weitergibt. Obwohl es möglich ist, Kreisdiagramme, Schachbrettmuster und andere Effekte mit Kegelverläufen zu erstellen, bietet CSS keine native Möglichkeit, alternativen Text zuzuweisen, und das Bild, das durch den Kegelverlauf dargestellt wird, ist für Screenreader-Benutzer nicht zugänglich. Wenn das Bild Informationen enthält, die entscheidend sind, um den gesamten Zweck der Seite zu verstehen, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis von WCAG, Richtlinie 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgskriteriums 1.1.1 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

## Beispiele

### Schwarz-weißer Sternenburst

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

{{EmbedLiveSample("Schwarz-weißer Sternenburst", 220, 220)}}

### Außerhalb-Zentrierten Verlauf

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

{{EmbedLiveSample("Außerhalb-Zentrierter Verlauf", 220, 220)}}

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

Das Kästchen links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von rot zu blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Das Kästchen rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von rot zu blau über den längeren Bogen geht, wobei sie durch Grün, Gelb und Orange verläuft.

{{EmbedLiveSample("Interpolation mit Farbton", 240, 200)}}

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
