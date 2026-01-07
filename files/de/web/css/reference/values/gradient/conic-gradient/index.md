---
title: conic-gradient()
slug: Web/CSS/Reference/Values/gradient/conic-gradient
l10n:
  sourceCommit: 59dc266f4b684a8c1c1353f1ea4689c5f516c0fd
---

Die **`conic-gradient()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) erstellt ein Bild bestehend aus einem Farbverlauf mit Farbübergängen, die um einen Mittelpunkt herum gedreht sind (anstatt vom Zentrum aus zu strahlen). Beispielhaft für kegelförmige Farbverläufe sind Tortendiagramme und {{Glossary("color_wheel", "Farbkreise")}}. Das Ergebnis der `conic-gradient()` Funktion ist ein Objekt des {{cssxref("gradient")}} Datentyps, welcher eine besondere Art von {{cssxref("image")}} ist.

{{InteractiveExample("CSS Demo: conic-gradient()")}}

```css interactive-example-choice
background: conic-gradient(red, orange, yellow, green, blue);
```

```css interactive-example-choice
background: conic-gradient(
  from 0.25turn at 50% 30%,
  #f69d3c,
  10deg,
  #3f87a6,
  350deg,
  #ebf8e1
);
```

```css interactive-example-choice
background: conic-gradient(from 3.1416rad at 10% 50%, #e66465, #9198e5);
```

```css interactive-example-choice
background: conic-gradient(
  red 6deg,
  orange 6deg 18deg,
  yellow 18deg 45deg,
  green 45deg 110deg,
  blue 110deg 200deg,
  purple 200deg
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
/* A gradient with a single color of red */
conic-gradient(red)

/* A conic gradient rotated 45 degrees,
   starting blue and finishing red */
conic-gradient(from 45deg, blue, red)

/* A bluish purple box: the gradient goes from blue to red,
   but only the bottom right quadrant is visible, as the
   center of the conic gradient is at the top left corner */
conic-gradient(from 90deg at 0 0, blue, red)

/* Interpolation in polar color space
  with longer hue interpolation method */
conic-gradient(in hsl longer hue, red, blue, green, red)

/* Color wheel */
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

- {{cssxref("angle")}}
  - : Durch den Schlüsselbegriff `from` eingeleitet und einen Winkel als Wert nehmend, definiert die Rotation des Gradienten im Uhrzeigersinn.
- `<position>`
  - : Verwendet dieselbe Längen-, Reihenfolge- und Schlüsselwortwerte wie die {{cssxref("background-position")}} Eigenschaft, der `position` Wert definiert das Zentrum des Gradienten. Wenn nicht spezifiziert, ist der Standardwert für `position` `center`, was bedeutet, dass der Gradient zentriert wird.
- `<angular-color-stop>`
  - : Ein Farbstop mit einem {{CSSxRef("&lt;color&gt;")}} Wert, gefolgt von ein oder zwei optionalen Stopppositionen (ein {{cssxref("angle")}} entlang der Umfangsachse des Gradienten).
- `<color-hint>`
  - : Ein {{Glossary("interpolation", "Interpolations")}} Hinweis, der definiert, wie der Gradient zwischen benachbarten Farbstops fortschreitet. Die Länge definiert, an welchem Punkt zwischen zwei Farbstops der Gradient die Mitte des Farbübergangs erreichen soll. Wenn weggelassen, ist die Mitte des Farbübergangs der Mittelpunkt zwischen zwei Farbstops.

> [!NOTE]
> Die Darstellung von Farbstops in kegelförmigen Gradienten folgt denselben Regeln wie [Farbstops in linearen Gradienten](/de/docs/Web/CSS/Reference/Values/gradient/linear-gradient#composition_of_a_linear_gradient).

## Beschreibung

Wie bei jedem Farbverlauf hat ein kegelförmiger Farbverlauf [keine intrinsischen Maße](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird, oder der Größe des `<image>`, falls dies auf etwas anderes als die Elementgröße eingestellt ist.

Um einen kegelförmigen Farbverlauf zu erstellen, der sich wiederholt, um eine 360 Grad-Drehung zu füllen, verwenden Sie stattdessen die Funktion {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}.

Da `<gradient>`s zum `<image>` Datentyp gehören, können sie nur dort verwendet werden, wo `<image>`s verwendet werden können. Aus diesem Grund funktioniert `conic-gradient()` nicht auf {{CSSxRef("background-color")}} und anderen Eigenschaften, die den {{CSSxRef("&lt;color&gt;")}} Datentyp verwenden.

> [!NOTE]
> Warum wird es "konischer" Gradient genannt? Wenn die Farbstops auf einer Seite viel heller sind als auf der anderen, kann es wie ein Kegel von oben aussehen.

### Zusammensetzung eines konischen Gradienten

Die Konic-Gradient-Syntax ist ähnlich der radialen Gradient-Syntax, aber die Farbstops sind um einen Gradientenbogen, den Umfang eines Kreises, platziert, anstatt auf der Gradientenlinie, die vom Zentrum des Gradienten ausgeht. Bei konischen Verläufen ändern sich die Farben, als ob sie um die Mitte eines Kreises gedreht würden, beginnend von oben und im Uhrzeigersinn verlaufend. In einem radialen Verlauf ändern sich die Farben vom Zentrum einer Ellipse nach außen, in alle Richtungen.

![Farbstopps entlang des Umfangs eines kegelförmigen Gradienten und der Achse eines radialen Gradienten.](screenshot_2018-11-29_21.09.19.png)

Ein kegelförmiger Farbverlauf wird durch Angabe eines Rotationswinkels, des Zentrums des Farbverlaufs und dann durch Angabe einer Liste von Farbstopps spezifiziert. Anders als bei linearen und radialen Verläufen, deren Farbstops durch Angabe einer {{cssxref("length")}} platziert werden, werden die Farbstops eines kegelförmigen Farbverlaufs mit einem [Angle](/de/docs/Web/CSS/Reference/Values/angle) angegeben. Einheiten umfassen `deg` für Grad, `grad` für Gradian, `rad` für Radiant, und `turn` für Umdrehungen. Ein Kreis hat 360 Grad, 400 Gradian, 2π Radianten und 1 Umdrehung. Browser, die kegelförmige Farbverläufe unterstützen, akzeptieren auch Prozentwerte, wobei 100 % 360 Grad entsprechen, dies ist jedoch nicht in der Spezifikation.

Ähnlich wie bei radialen Verlaufsfarben bietet die konische Gradientensyntax die Möglichkeit, das Zentrum des Gradienten überall innerhalb oder sogar außerhalb des Bildes zu positionieren. Die Werte für die Position sind ähnlich der Syntax für 2-Wert-Hintergrundposition.

Der Gradientbogen ist der Umfang des Gradienten. Der _Anfangspunkt_ des Gradienten oder Bogens ist Norden oder 12:00 Uhr. Der Verlauf wird dann durch den _from_ Winkel gedreht. Die Farben des Verlaufs werden durch die angewinkelten Farbstops, ihre Startpunkte, Endpunkte und dazwischen sowie optionale angewinkelte Farbstopppunkte bestimmt. Die Übergänge zwischen den Farben können mit Farbhinweisen zwischen benachbarten Farben und ihren Farbstops verändert werden.

#### Anpassung von Verläufen

Durch Hinzufügen weiterer angewinkelter Farbstoppunkte zum Gradientenbogen können Sie einen hochgradig angepassten Übergang zwischen mehreren Farben erzeugen. Eine Farbstoppposition kann explizit durch die Verwendung eines {{cssxref("angle")}} definiert werden. Wenn Sie die Position eines Farbstopps nicht angeben, wird sie auf halbem Weg zwischen dem vorhergehenden und dem folgenden Punkt platziert. Wenn Sie keinen Winkel für den ersten oder letzten Farbstop angeben, sind deren Werte 0deg bzw. 360deg. Die folgenden zwei Farbverläufe sind gleichwertig:

```css
conic-gradient(red, orange, yellow, green, blue);
conic-gradient(red 0deg, orange 90deg, yellow 180deg, green 270deg, blue 360deg);
```

Standardmäßig geht der Farbübergang sanft von der Farbe an einem Farbstop zu der Farbe am nachfolgenden Farbstop über, wobei der Mittelpunkt zwischen den Farben der halbe Wegpunkt zwischen dem Farbwechsel ist. Sie können diesen Farbwechsel-Mittelpunkt an jeden Punkt zwischen zwei Farbstops verschieben, indem Sie einen Farbhinweis hinzufügen, der angibt, wo die Mitte des Farbwechsels sein sollte. Der folgende Verlauf ist von Anfang an bis zur 10%-Marke einheitlich rot, wechselt von Rot zu Blau über 80 % der Umdrehung, wobei die letzten 10 % einheitlich blau sind. Der Mittelpunkt der Änderung von Rot zu Blau befindet sich jedoch an der 20%-Marke statt bei der 50%-Marke, die ohne den 80grad oder 20%-Farbhinweis erfolgt wäre.

```css
conic-gradient(red 40grad, 80grad, blue 360grad);
```

Wenn zwei oder mehr Farbstops an derselben Position sind, wird der Übergang eine harte Linie zwischen der ersten und letzten an dieser Position deklarierten Farbe sein. Um kegelförmige Verläufe zur Erstellung von Tortendiagrammen zu verwenden — was NICHT der richtige Weg ist, um Tortendiagramme als Hintergrundbilder zu erstellen, da Hintergrundbilder nicht zugänglich sind — verwenden Sie harte Farbstops, bei denen die Farbstopwinkel für zwei benachbarte Farbstops gleich sind. Am einfachsten ist es, mehrere Positionsfarbstops zu verwenden. Die folgenden beiden Deklarationen sind gleichwertig:

```css
conic-gradient(white 0.09turn, #bbbbbb 0.09turn, #bbbbbb 0.27turn, #666666 0.27turn, #666666 0.54turn, black 0.54turn);
conic-gradient(white 0turn 0.09turn, #bbbbbb 0.09turn 0.27turn, #666666 0.27turn 0.54turn, black 0.54turn 1turn);
```

Farbstops sollten in aufsteigender Reihenfolge aufgelistet werden. Nachfolgende Farbstops mit niedrigeren Werten überschreiben den Wert des vorherigen Farbstops und erzeugen einen harten Übergang. Der folgende Verlauf wechselt an der 30%-Marke von Rot zu Gelb und dann von Gelb zu Blau über 35% des Gradienten:

```css
conic-gradient(red .8rad, yellow .6rad, blue 1.3rad);
```

Es gibt weitere Effekte, die Sie mit kegelförmigen Verläufen erzeugen können. Seltsamerweise gehört ein Schachbrett zu ihnen. Durch das Erstellen von Quadranten mit einem oben links und unten rechts weißen Quadrant und unten links und oben rechts schwarzen Quadranten sowie durch das Wiederholen des Verlaufs 16 Mal (vier Mal quer und vier Mal nach unten) können Sie ein Schachbrett erzeugen.

```css
conic-gradient(white 90deg, black 0.25turn 0.5turn, white calc(pi * 1rad) calc(pi * 1.5rad), black 300grad);
background-size: 25% 25%;
```

Und ja, Sie können verschiedene Winkeleinheiten mischen und kombinieren, aber tun Sie es nicht. Das obige ist schwer zu lesen.

## Formale Syntax

{{csssyntax}}

## Barrierefreiheit

Browser liefern keine speziellen Informationen über Hintergrundbilder an Hilfstechnologien. Dies ist vor allem für Screenreader wichtig, da ein Screenreader seine Präsenz nicht ankündigt und daher nichts an seine Benutzer übermittelt. Obwohl es möglich ist, mit kegelförmigen Verläufen Tortendiagramme, Schachbretter und andere Effekte zu erstellen, bieten CSS-Bilder keine native Möglichkeit, alternativen Text zuzuweisen, und daher ist das durch den kegelförmigen Farbverlauf dargestellte Bild für Screenreader-Benutzer nicht zugänglich. Wenn das Bild Informationen enthält, die kritisch für das Verständnis des Gesamtsinhalts der Seite sind, ist es besser, es semantisch im Dokument zu beschreiben.

- [MDN Verständnis der WCAG, Richtlinien 1.1 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Verständnis des Erfolgs-Kriterium 1.1.1 | W3C Verständnis WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

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
  background-image: conic-gradient(from 40deg, white, black);
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

Dieses Beispiel verwendet Mehrfach-Positionen-Farbstops, wobei benachbarte Farben denselben Farbstopwert haben, was einen gestreiften Effekt erzeugt.

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
      white 0.25turn,
      black 0.25turn 0.5turn,
      white 0.5turn 0.75turn,
      black 0.75turn
    )
    top left / 25% 25% repeat;
  border: 1px solid;
}
```

{{EmbedLiveSample("Checkerboard", 120, 120)}}

### Interpolieren mit Hue

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

In diesem Beispiel wird das [hsl](/de/docs/Web/CSS/Reference/Values/color_value/hsl) Farbsystem zur Interpolation verwendet und [hue](/de/docs/Web/CSS/Reference/Values/hue) wird interpoliert.

```css
.shorter {
  background-image: conic-gradient(in hsl shorter hue, red, blue);
}

.longer {
  background-image: conic-gradient(in hsl longer hue, red, blue);
}
```

Der Kasten links verwendet [kürzere Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#shorter), was bedeutet, dass die Farbe direkt vom Rot zum Blau über den kürzeren Bogen auf dem {{Glossary("Color_wheel", "Farbkreis")}} geht. Der Kasten rechts verwendet [lange Interpolation](/de/docs/Web/CSS/Reference/Values/hue-interpolation-method#longer), was bedeutet, dass die Farbe von Rot zu Blau über den längeren Bogen geht und dabei Grün, Gelb und Orange durchquert.

{{EmbedLiveSample("Interpolating with hue", 240, 200)}}

### Mehr kegelförmige Verlauf-Beispiele

Bitte sehen Sie [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients) für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Andere Gradient-Funktionen: {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}, {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("hue-interpolation-method")}}
- {{cssxref("color-interpolation-method")}}
- {{cssxref("image")}}
- {{cssxref("image/image","image()")}}
- {{cssxref("element()")}}
- {{cssxref("image/image-set","image-set()")}}
- {{cssxref("cross-fade()")}}
