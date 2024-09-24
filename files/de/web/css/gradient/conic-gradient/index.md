---
title: konischer Verlauf (conic-gradient())
slug: Web/CSS/gradient/conic-gradient
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) erstellt ein Bild, das aus einem Verlauf mit Farbverläufen besteht, die um einen Mittelpunkt rotieren (anstatt vom Mittelpunkt aus zu strahlen). Beispielkonische Verläufe umfassen Tortendiagramme und {{glossary("color wheel", "Farbräder")}}. Das Ergebnis der `conic-gradient()`-Funktion ist ein Objekt vom Datentyp {{CSSxRef("&lt;gradient&gt;")}}, welches eine spezielle Art von {{CSSxRef("&lt;image&gt;")}} darstellt.

{{EmbedInteractiveExample("pages/css/function-conic-gradient.html")}}

## Syntax

```css
/* Ein um 45 Grad gedrehter konischer Verlauf,
   beginnend mit Blau und endend mit Rot */
conic-gradient(from 45deg, blue, red)

/* Eine bläuliche lila Box: Der Verlauf geht von Blau zu Rot,
   aber nur das untere rechte Quadrant ist sichtbar,
   da der Mittelpunkt des konischen Verlaufs oben links ist */
conic-gradient(from 90deg at 0 0, blue, red)

/* Interpolation im polaren Farbraum
   mit längerer Farbton-Interpolation */
conic-gradient(in hsl longer hue, red, blue, green, red)

/* Farbrad */
conic-gradient(
  hsl(360 100% 50%),
  hsl(315 100% 50%),
  hsl(270 100% 50%),
  hsl(225 100% 50%),
  hsl(180 100% 50%),
  hsl(135 100% 50%),
  hsl(90 100% 50%),
  hsl(45 100% 50%),
  hsl(0 100% 50%)
)
```

### Werte

- {{CSSxRef("&lt;angle&gt;")}}
  - : Vorangestellt durch den Begriff `from`, und mit einem Winkel als Wert, definiert die Gradientenrotation im Uhrzeigersinn.
- `<position>`
  - : Verwendet die gleichen Längen-, Reihenfolge- und Schlüsselwortwerte wie die [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaft. Der `position`-Wert definiert das Zentrum des Verlaufs. Ist keine Position angegeben, wird standardmäßig `center` verwendet, was bedeutet, dass der Verlauf zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbstopwert {{CSSxRef("&lt;color&gt;")}}, gefolgt von ein oder zwei optionalen Stopp-Positionen (ein {{CSSxRef("&lt;angle&gt;")}} entlang der Umfangsachse des Verlaufs).
- `<color-hint>`
  - : Ein {{Glossary("interpolation")}}-Hinweis, der definiert, wie der Verlauf zwischen benachbarten Farbstops verläuft. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops die Farbveränderung zur Mitte des Farbverlaufs gelangen soll. Wird weggelassen, ist der Mittelpunkt des Farbverlaufs die Mitte zwischen zwei Farbstops.

> [!NOTE]
> Das Rendern von [Farbstops in CSS-Verläufen](#gradient_with_multiple_color_stops) folgt denselben Regeln wie Farbstops in [SVG-Verläufen](/de/docs/Web/SVG/Tutorial/Gradients).

## Beschreibung

Wie bei jedem Verlauf hat ein konischer Verlauf [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe oder ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird, oder der Größe des `<image>`, wenn es auf etwas anderes als die Elementgröße gesetzt ist.

Um einen konischen Verlauf zu erstellen, der sich wiederholt, um eine 360-Grad-Rotation zu füllen, verwenden Sie die {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion stattdessen.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht bei {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es "konischer" Verlauf genannt? Wenn die Farbstops auf einer Seite viel heller sind als auf der anderen, kann es von oben wie ein Kegel aussehen.

### Zusammensetzung eines konischen Verlaufs

Die Syntax von conic-gradient ist ähnlich der von radial-gradient, aber die Farbstops werden um einen Verlaufsbogen, den Umfang eines Kreises, herum platziert, anstatt entlang der Verlaufsachse, die vom Mittelpunkt des Verlaufs ausgeht. Bei konischen Verläufen ändern sich die Farben so, als ob sie um den Mittelpunkt eines Kreises herum gedreht würden, beginnend oben und im Uhrzeigersinn rotierend. In einem radialen Verlauf ändern sich die Farben vom Mittelpunkt einer Ellipse nach außen in alle Richtungen.

![Farbverlässe entlang des Umfangs eines konischen Verlaufs und der Achse eines radialen Verlaufs.](screenshot_2018-11-29_21.09.19.png)

Ein konischer Verlauf wird durch die Angabe eines Rotationswinkels, des Mittelpunkts des Verlaufs und einer Liste von Farbstops angegeben. Im Gegensatz zu linearen und radialen Verläufen, deren Farbstops durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstops eines konischen Verlaufs mit einem [angle](/de/docs/Web/CSS/angle) angegeben. Einheiten sind `deg` für Grad, `grad` für Gradienten, `rad` für Radianten und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gon, 2π Radianten und 1 Umdrehung. Browser, die konische Verläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100% gleich 360 Grad sind, dies ist jedoch nicht in der Spezifikation enthalten.

Ähnlich wie bei radialen Verläufen bietet die Syntax von konischen Verläufen die Möglichkeit, den Mittelpunkt des Verlaufs überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Werte Hintergrundpositionen.

Der Verlaufsbogen ist der Umfang des Verlaufs. Der _Startpunkt_ des Verlaufs oder Bogens ist Norden oder 12:00 Uhr mittags. Der Verlauf wird dann durch den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die gewinkelten Farbstops, ihre Startpunkte, Endpunkte und dazwischen liegenden optionalen gewinkelten Farbstop-Punkte bestimmt. Die Übergänge zwischen den Farben können durch Farbhints zwischen den Farbstops der benachbarten Farben verändert werden.

#### Anpassen von Verläufen

Durch das Hinzufügen weiterer gewinkelter Farbstopp-Punkte zum Verlaufsbogen können Sie eine individuell anpassbare Übergänge zwischen mehreren Farben erstellen. Die Position eines Farbstoppes kann explizit durch die Verwendung eines {{CSSxRef("&lt;angle&gt;")}} definiert werden. Wenn Sie den Ort eines Farbstoppes nicht spezifizieren, wird er in der Mitte zwischen dem, der ihm vorausgeht, und dem, der ihm folgt, platziert. Wenn Sie für den ersten oder letzten Farbstopp keinen Winkel angeben, sind ihre Werte standardmäßig 0deg bzw. 360deg. Die folgenden beiden Verläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig gehen die Farben glatt von der Farbe eines Farbstoppes zur Farbe des darauffolgenden Farbstoppes über, wobei der Mittelpunkt zwischen den Farben die Mitte des Farbverlaufs ist. Sie können diesen Farbverlauf-Mittelpunkt an jeden Punkt zwischen zwei Farbstops verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo die Mitte des Farbverlaufs sein sollte. Der folgende Verlauf ist von Beginn bis zur 10%-Marke voll rot, wechselt dann über 80% der Umdrehung von Rot zu Blau, wobei die letzten 10% voll blau sind. Der Mittelpunkt des Farbwechsels von Rot zu Blau liegt jedoch bei der 20%-Marke anstelle der 50%-Marke, wie es ohne den 80grad oder 20% Farbhinweis geschehen wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstops an der gleichen Stelle liegen, wird der Übergang eine harte Linie zwischen der ersten und letzten an diesem Ort deklarierten Farbe sein. Um konische Verläufe zu verwenden, um Tortendiagramme zu erstellen – was NICHT der richtige Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind – verwenden Sie harte Farbstops, bei denen die Winkel der Farbstops für zwei nebeneinanderliegende Farbstops gleich sind. Der einfachste Weg dies zu erreichen ist, mehrere Positions-Farbstops zu verwenden. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(#fff 0.09turn, #bbb 0.09turn, #bbb 0.27turn, #666 0.27turn, #666 0.54turn, #000 0.54turn);
conic-gradient(#fff 0turn 0.09turn, #bbb 0.09turn 0.27turn, #666 0.27turn 0.54turn, #000 0.54turn 1turn);
```

Farbstops sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstops mit niedrigerem Wert überschreiben den Wert des vorherigen Farbstopp und erzeugen einen harten Übergang. Der folgende Beispiel wechselt bei 30% von Rot zu Gelb und dann über 35% des Verlaufs von Gelb zu Blau:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt weitere Effekte, die Sie mit konischen Verläufen erstellen können. Seltsamerweise ist ein Schachbrett einer davon. Indem Sie Quadranten mit einem weißen oberen linken und unteren rechten Quadranten und schwarzen unteren linken und oberen rechten Quadranten erzeugen und dann den Verlauf 16 Mal (vier Mal horizontal und vier Mal vertikal) wiederholen, können Sie ein Schachbrett erstellen.

```css
conic-gradient(#fff 90deg, #000 0.25turn 0.5turn, #fff 1rad 1.5rad, #000 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und anpassen, aber tun Sie es nicht. Das obige Beispiel ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser bieten keine speziellen Informationen zu Hintergrundbildern, die assistiven Technologien helfen könnten. Dies ist hauptsächlich für Bildschirmlesegeräte wichtig, da ein Bildschirmlesegerät dessen Vorhandensein nicht ankündigt und somit dem Benutzer nichts mitteilt. Obwohl es möglich ist, Tortendiagramme, Schachbretter und andere Effekte mit konischen Verläufen zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und somit wird das von dem konischen Verlauf dargestellte Bild für Benutzer von Bildschirmlesegeräten nicht zugänglich sein. Wenn das Bild für das Verständnis des Gesamtzwecks der Seite kritisch ist, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Understanding WCAG, Guideline 1.1 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Beispiele

### Verlauf bei 40 Grad

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background-image: conic-gradient(from 40deg, #fff, #000);
}
```

{{EmbedLiveSample("Gradient_at_40-degrees", 120, 120)}}

### Nicht zentrierter Verlauf

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(from 0deg at 0% 25%, blue, green, yellow 180deg);
}
```

{{EmbedLiveSample("Off-centered_gradient", 120, 120)}}

### Verlauf Tortendiagramm

Dieses Beispiel verwendet Farbstopps mit mehreren Positionen, wobei benachbarte Farben denselben Farbwert haben, was einen Streifeneffekt erzeugt.

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(red 36deg, orange 36deg 170deg, yellow 170deg);
  border-radius: 50%;
}
```

{{EmbedLiveSample("Gradient_pie-chart", 120, 120)}}

### Schachbrett

```css hidden
div {
  width: 100px;
  height: 100px;
}
```

```html hidden
<div></div>
```

```css
div {
  background: conic-gradient(
      #fff 0.25turn,
      #000 0.25turn 0.5turn,
      #fff 0.5turn 0.75turn,
      #000 0.75turn
    )
    top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Checkerboard", 120, 120)}}

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

In diesem Beispiel zur Interpolation wird das [hsl](/de/docs/Web/CSS/color_value/hsl) Farbsystem verwendet und [hue](/de/docs/Web/CSS/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Die Box links verwendet [kürzere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt von Rot zu Blau über den kürzeren Bogen auf dem [Farbrad](/de/docs/Glossary/Color_wheel) geht. Die Box rechts verwendet [längere Interpolation](/de/docs/Web/CSS/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und dabei Grüntöne, Gelbtöne und Orangetöne durchläuft.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr konische Verlauf-Beispiele

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Andere Verlauf-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- [`<hue-interpolation-method>`](/de/docs/Web/CSS/hue-interpolation-method)
- [`<color-interpolation-method>`](/de/docs/Web/CSS/color-interpolation-method)
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element", "element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade", "cross-fade()")}}
