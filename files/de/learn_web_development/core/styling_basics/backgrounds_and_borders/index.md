---
title: Hintergründe und Ränder
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir einige der kreativen Möglichkeiten untersuchen, die Sie mit CSS-Hintergründen und -Rändern haben. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Ränder oft die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrundstyling — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anhang von Hintergrundbildern.</li>
          <li>Hintergrundverläufe — grundlegendes Konzept und lineare Verläufe (radiale, kegelförmige und wiederholende Verläufe sind fortgeschrittener; tiefgehende Kenntnisse sind zu diesem Zeitpunkt nicht erforderlich.)</li>
          <li>Barrierefreiheitsüberlegungen zu Hintergründen — Sicherstellung eines guten Kontrasts.</li>
          <li>Grundlagen der Ränder — Breite, Stil, Farbe und Kurzschreibweise von Rändern. Randradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value). Eine `background-color` erstreckt sich unterhalb der Inhalts- und Auffüllbox des Elements.

Im Beispiel unten haben wir verschiedene Farbwerte verwendet, um einem Kasten, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben gegen beliebige verfügbare [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)-Werte auszutauschen.

```html live-sample___color
<div class="box">
  <h2>Background Colors</h2>
  <p>Try changing the background <span>colors</span>.</p>
</div>
```

```css live-sample___color
.box {
  padding: 0.3em;
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
span {
  background-color: rgb(255 255 255 / 50%);
}
```

{{EmbedLiveSample("color")}}

## Hintergrundbilder

Die Eigenschaft {{cssxref("background-image")}} ermöglicht das Anzeigen eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Kästen — einer hat ein Hintergrundbild, das größer ist als der Kasten ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Der andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht auf die Größe des Kastens skaliert, sodass nur eine kleine Ecke davon sichtbar ist, während das kleine Bild gekachelt wird, um den Kasten zu füllen.

```html live-sample___background-image
<div class="wrapper">
  <div class="box a"></div>
  <div class="box b"></div>
</div>
```

```css live-sample___background-image
.wrapper {
  display: flex;
}

.box {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}

.a {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
}

.b {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
}
```

{{EmbedLiveSample("background-image")}}

Wenn Sie neben einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.

### Kontrolle der Hintergrundwiederholung

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass sich der Hintergrund wiederholt.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — der Standard; in beide Richtungen wiederholen.
- `space` — so oft wie möglich wiederholen, wobei bei zusätzlichem Platz Raum zwischen den Bildern hinzugefügt wird.
- `round` — ähnlich wie `space`, aber dehnt die Bilder aus, um jeden extra Platz zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Probieren Sie die verschiedenen Werte aus, um zu sehen, welche Auswirkungen sie haben.

```html live-sample___repeat
<div class="box"></div>
```

```css hidden live-sample___repeat
.box {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}
```

```css live-sample___repeat
.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("repeat")}}

### Größe des Hintergrundbildes

Das im anfänglichen Hintergrundbildbeispiel verwendete Bild _balloons.jpg_ ist ein großes Bild, das aufgrund seiner Größe größer als das Element, dessen Hintergrund es ist, beschnitten wurde. In diesem Fall können wir die {{cssxref("background-size")}}-Eigenschaft verwenden, um das Bild an die Größe des Hintergrunds anzupassen.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung anzugeben, oder die folgenden Schlüsselwörter:

- `cover` — der Browser macht das Bild gerade groß genug, damit es den gesamten Boxbereich abdeckt und dabei sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall ist es wahrscheinlich, dass ein Teil des Bildes außerhalb des Kastens endet.
- `contain` — der Browser passt die Größe des Bildes an, damit es in die Box passt. In diesem Fall können Sie Lücken an den Seiten oder oben und unten im Bild haben, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

#### Spielen mit `background-size`

Im Beispiel unten ist das _balloons.jpg_-Bild auf Längeneinheiten eingestellt, damit es in die Box passt. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Passen Sie die Bildgröße kleiner als die Box an und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

```html live-sample___size
<div class="box"></div>
```

```css hidden live-sample___size
.box {
  width: 500px;
  height: 100px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 10px;
}
```

```css live-sample___size
.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-size: 80px 10em;
}
```

{{EmbedLiveSample("size")}}

### Position des Hintergrundbildes

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert ist.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei einzelne Werte an — einen horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der {{cssxref("background-position")}}-Seite an):

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top center;
}
```

Sie können auch {{cssxref("length", "Längen")}} und {{cssxref("percentage", "Prozentsätze")}} verwenden:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert die horizontale Position und der zweite die vertikale Position angibt. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um eine Entfernung von bestimmten Kanten der Box anzugeben. Jedes Wertepaar repräsentiert die Kante der Box, von der entfernt werden soll, und die Größe der Entfernung von dieser Kante. Im folgenden Ausschnitt positionieren wir den Hintergrund `20px` vom `top` und `10px` vom `right`:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

Verwenden Sie das Beispiel unten, um mit diesen Werten zu experimentieren und den Stern innerhalb des Kastens zu bewegen:

```html live-sample___position
<div class="box"></div>
```

```css hidden live-sample___position
.box {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}
```

```css live-sample___position
.box {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  background-position: 120px 1em;
}
```

{{EmbedLiveSample("position")}}

> [!NOTE]
> Die Kurzschreibweise `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Achsenpositionswerte einzeln festzulegen.

## Gradient-Hintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — verhält sich wie ein Bild und wird auch über die {{cssxref("background-image")}}-Eigenschaft eingestellt.

Sie können auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient) Datentyp mehr über die verschiedenen Arten von Verlaufswerten und die Dinge, die Sie damit tun können, erfahren.

Probieren Sie einige verschiedene Verlaufswerte im folgenden Beispiel aus. Anfangs haben wir einen linearen Verlauf, der über die gesamte erste Box gespannt ist, und einen radialen Verlauf mit fester Größe, der sich über die zweite Box wiederholt.

```html live-sample___gradients
<div class="wrapper">
  <div class="box a"></div>
  <div class="box b"></div>
</div>
```

```css live-sample___gradients
.wrapper {
  display: flex;
}

.box {
  width: 400px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}

.a {
  background-image: linear-gradient(
    105deg,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
}

.b {
  background-image: radial-gradient(
    circle,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
  background-size: 100px 50px;
}
```

{{EmbedLiveSample("gradients")}}

> [!NOTE]
> Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, ist die Verwendung eines der vielen im Web verfügbaren CSS-Verlaufsgeneratoren, wie z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode, der ihn generiert, kopieren und einfügen.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzigen Deklaration anzugeben. Sie tun dies, indem Sie mehrere `background-image`-Werte durch Kommas getrennt angeben.

Wenn Sie dies tun, können Sie am Ende Hintergrundbilder übereinander haben. Die Hintergründe werden mit dem zuletzt aufgeführten Hintergrundbild unten im Stapel geschichtet, und jedes vorherige Bild stapelt sich auf dem, das ihm im Code folgt.

> [!NOTE]
> Verläufe können problemlos mit normalen Hintergrundbildern gemischt werden.

Die anderen `background-*` Eigenschaften können ebenfalls kommagetrennte Werte enthalten, genau wie `background-image`:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird mit den Werten in der gleichen Position in den anderen Eigenschaften übereinstimmen. Oben zum Beispiel wird der `background-repeat`-Wert von `image1` `no-repeat` sein. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Wertanzahlen haben? Die Antwort ist, dass sich die kleinere Anzahl von Werten zyklisch wiederholt — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann kehren sie zurück — `image3` erhält den ersten Positionswert und `image4` erhält den zweiten Positionswert.

### Spielen mit mehreren Hintergrundbildern

Lassen Sie uns spielen. Das Beispiel unten enthält zwei Hintergrundbilder. Versuchen Sie, das Beispiel wie folgt zu bearbeiten:

- Um die Schichtreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder zu ändern.
- Fügen Sie einige andere `background-*` Eigenschaften hinzu, um die Position, Größe oder Wiederholungswert der Bilder zu ändern.
- Versuchen Sie, einen Verlauf als drittes `background-image` hinzuzufügen.

```html live-sample___multiple-background-image
<div class="wrapper">
  <div class="box"></div>
</div>
```

```css live-sample___multiple-background-image
.wrapper {
  display: flex;
}

.box {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}

.box {
  background-image:
    url("https://mdn.github.io/shared-assets/images/examples/star.png"),
    url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
}
```

{{EmbedLiveSample("multiple-background-image")}}

## Hintergrund-Anhang

Eine weitere Option, die wir für Hintergründe haben, ist die Angabe, wie sie scrollen, wenn der Inhalt gescrollt wird. Dies wird durch die {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Tatsächlich ist der Hintergrund auf die gleiche Position auf der Seite fixiert, sodass er scrollt, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Ansichtsfenster fixiert wird, sodass es beim Scrollen der Seite oder des Inhalts von Elementen nicht scrollt. Es bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund auf das Element, auf dem es eingestellt ist, sodass beim Scrollen des Elements der Hintergrund mit scrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur eine Wirkung, wenn es Inhalt gibt, der gescrollt werden kann. Wir haben eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — werfen Sie einen Blick auf [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (sehen Sie sich auch [den Quellcode an](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier).

## Verwendung der Hintergrund-Kurzschreibweise

Sie werden oft sehen, dass Hintergründe mithilfe der {{cssxref("background")}}-Kurzschreibweise angegeben werden, mit der Sie alle verschiedenen Eigenschaften auf einmal festlegen können.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im Beispiel unten haben wir einen Verlauf mit Größe und Position, dann ein Bild mit `no-repeat` und einer Position und dann eine Farbe.

Es gibt einige Regeln, die befolgt werden müssen, wenn Sie Werte für bildhintergrund-Kurzschreibweisen schreiben, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` angegeben werden, getrennt durch das `/`-Zeichen, so wie hier: `center/80%`.

Werfen Sie einen Blick auf die MDN-Seite für {{cssxref("background")}}, um mehr über die Syntax zu erfahren.

```html live-sample___background
<div class="box"></div>
```

```css live-sample___background
.box {
  width: 500px;
  height: 300px;
  padding: 0.5em;
  background:
    linear-gradient(
        105deg,
        rgb(255 255 255 / 20%) 39%,
        rgb(51 56 57 / 100%) 96%
      )
      center center / 400px 200px no-repeat,
    url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
      center no-repeat,
    rebeccapurple;
}
```

{{EmbedLiveSample("background", "", "320px")}}

## Überlegungen zur Barrierefreiheit mit Hintergründen

Wenn Sie Text über ein Hintergrundbild oder eine Farbe legen, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit Textinhalten darüber bereitstellen, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text lesbar zu machen, wenn das Bild nicht geladen wird.

Bildschirmschoner können Hintergrundbilder nicht parsen; daher sollten sie rein dekorativ sein. Wichtige Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Ränder

Beim Lernen über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Ränder die Größe unseres Kastens beeinflussen. In dieser Lektion schauen wir uns an, wie man Ränder kreativ nutzen kann.

Typischerweise, wenn wir einem Element mit CSS Ränder hinzufügen, verwenden wir die {{cssxref("border")}}-Kurzschreibweise, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/Reference/Values/line-style) des Randes auf allen vier Seiten einer Box in einer Erklärung festzulegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante der Box ansprechen, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die individuellen Eigenschaften umfassen die {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}} Kurzschreibweise-Eigenschaften:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt auch Langschreibweisen für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese top, right, bottom und left border properties haben auch zugeordnete [_logische_ Rand-Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links, oder von oben nach unten). Sie können darüber in [Umgang mit verschiedenen Textausrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Spielen mit Rändern

Es gibt eine Vielzahl von Stilen, die Sie für Ränder verwenden können. Im Beispiel unten haben wir zwei verschiedene Randstile für die Box und zwei verschiedene Randstile für die Überschrift verwendet. Spielen Sie mit dem Randstil, der Breite und der Farbe, um zu sehen, wie Ränder funktionieren.

```html live-sample___borders
<div class="box">
  <h2>Borders</h2>
  <p>Try changing the borders.</p>
</div>
```

```css live-sample___borders
* {
  padding: 0.2em;
}
.box {
  width: 500px;
  background-color: #567895;
  border: 5px solid #0b385f;
  border-bottom-style: dashed;
  color: white;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", "200px")}}

## Abgerundete Ecken

Sie können abgerundete Ecken zu einer Box hinzufügen, indem Sie die {{cssxref("border-radius")}}-Eigenschaft und die zugehörigen Langschreibaneigenschaften für jede Ecke der Box verwenden. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In den meisten Fällen geben Sie nur einen Wert an, der dann für beide verwendet wird.

Beispielsweise, um allen vier Ecken einer Box einen `10px`-Radius zu geben:

```css
.box {
  border-radius: 10px;
}
```

Oder um der oberen rechten Ecke einen horizontalen Radius von `1em` und einen vertikalen Radius von `10%` zu geben:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den obigen Rand-Eigenschaften haben diese border-radius Eigenschaften auch zugeordnete [_logische_ border-radius Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties).

### Spielen mit border-radius

Wir haben alle vier Ecken im Beispiel unten festgelegt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckenwerte für Sie auszugeben.

```html live-sample___corners
<div class="box">
  <h2>Borders</h2>
  <p>Try changing the borders.</p>
</div>
```

```css live-sample___corners
.box {
  width: 500px;
  height: 110px;
  padding: 0.5em;
  border: 10px solid rebeccapurple;
  border-radius: 1em;
  border-top-right-radius: 10% 30%;
}
```

{{EmbedLiveSample("corners")}}

## Zusammenfassung

Sie sehen, dass es ziemlich viel Arbeit erfordert, einem Kasten einen Hintergrund oder einen Rand hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie das Verständnis und das Wissen über Hintergrund- und Rand-Styling behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
