---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir einige der kreativen Möglichkeiten betrachten, die Sie mit CSS-Hintergründen und -Rahmen haben. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu Hintergründen und Rahmen, die viele Fragen zur Gestaltung in CSS beantworten können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und -Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrund-Styling – Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anhaftung von Hintergrundbildern.</li>
          <li>Hintergrundverläufe – allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind fortgeschrittener; tiefgehendes Wissen ist in diesem Stadium nicht erforderlich.)</li>
          <li>Barrierefreiheit von Hintergründen – sicherstellen, dass ein guter Kontrast besteht.</li>
          <li>Grundlagen von Rahmen – Breite, Stil, Farbe und Rahmen-Kurzschrift. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value). Eine `background-color` erstreckt sich unterhalb der Inhalts- und Auffüllungsbox des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben mit verfügbaren [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Werten zu tauschen.

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

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Boxen – eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt.
Versuchen Sie, eine `background-color`-Eigenschaft zum obigen Beispiel hinzuzufügen, um dies in Aktion zu sehen.

### Hintergrund-Wiederholung steuern

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund sich überhaupt wiederholt.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — der Standard; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich und fügt Platz zwischen den Bildern hinzu, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, streckt jedoch die Bilder, um zusätzlichen Platz auszufüllen

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte aus, um zu sehen, welche Auswirkungen sie haben.

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

### Die Hintergrundgröße anpassen

Das inital verwendete _balloons.jpg_-Bild im Hintergrundbild-Beispiel ist ein großes Bild, das aufgrund seiner größeren Größe als das Element, dessen Hintergrund es ist, beschnitten wurde. In diesem Fall können wir die {{cssxref("background-size")}}-Eigenschaft verwenden, um das Bild an den Hintergrund anzupassen.

`background-size` kann zwei {{cssxref("length")}} oder {{cssxref("percentage")}} Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung zu spezifizieren, oder die folgenden Schlüsselwörter:

- `cover` — der Browser wird das Bild gerade so groß machen, dass es den Boxbereich vollständig abdeckt, dabei jedoch das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — der Browser wird das Bild so anpassen, dass es in die Box passt. In diesem Fall können Sie mit Lücken auf beiden Seiten oder oben und unten im Bild enden, wenn das Seitenverhältnis des Bildes anders ist als das der Box.

#### Spielen mit `background-size`

Im folgenden Beispiel haben wir die Length-Einheiten des _balloons.jpg_-Bildes so festgelegt, dass es in die Box passt. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Length-Einheiten, um die Größe des Hintergrundes zu ändern.
- Entfernen Sie die Length-Einheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Verkleinern Sie das Bild kleiner als die Box und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

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

### Das Hintergrundbild positionieren

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf der Box erscheinen soll, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gängigsten `background-position`-Werte nehmen zwei Einzelwerte an – einen horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie die anderen auf der {{cssxref("background-position")}}-Seite nach):

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert die horizontale Position und der zweite die vertikale Position betrifft. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um eine Entfernung von bestimmten Kanten der Box anzugeben. Jedes Paar von Werten repräsentiert die Kante der Box, von der es versetzt werden soll, und die Größe des Versatzes von dieser Kante. Im unten stehenden Snippet positionieren wir den Hintergrund `20px` von `oben` und `10px` von `rechts`:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

Verwenden Sie das Beispiel unten, um mit diesen Werten herumzuspielen und den Stern innerhalb der Box zu verschieben:

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
> Die Kurzschrift `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Achsenpositionswerte individuell festzulegen.

## Verlaufs-Hintergründe

Ein Verlauf – wenn er als Hintergrund verwendet wird – wirkt wie ein Bild und wird auch mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können auf der MDN-Seite über den [`<gradient>`](/de/docs/Web/CSS/Reference/Values/gradient)-Datentyp mehr über die verschiedenen Arten von Verlaufswerten und deren Anwendungsmöglichkeiten erfahren.

Probieren Sie einige verschiedene Verlaufswerte im folgenden Beispiel aus. Zunächst haben wir einen linearen Verlauf, der über die gesamte erste Box gestreckt ist, und einen radialen Verlauf mit festgelegter Größe, der über die zweite Box hinweg wiederholt wird.

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
> Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, ist die Verwendung eines der vielen CSS-Verlaufsgeneratoren im Web, wie zum Beispiel [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

## Mehrere Hintergrundbilder

Es ist auch möglich, in einer einzigen Deklaration mehrere Hintergrundbilder anzugeben. Sie tun dies, indem Sie mehrere `background-image`-Werte angeben, die durch Kommas getrennt sind.

Wenn Sie dies tun, kann es vorkommen, dass sich Hintergrundbilder überlappen. Die Hintergründe werden so übereinandergeschichtet, dass das zuletzt aufgeführte Hintergrundbild am unteren Ende des Stapels liegt und jedes vorherige Bild sich auf dem folgenden in dem Code stapelt.

> [!NOTE]
> Verläufe können glücklich mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*` Eigenschaften können auch mit kommagetrennten Werten auf die gleiche Weise wie `background-image` verwendet werden:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften stimmt mit den Werten in der gleichen Position in den anderen Eigenschaften überein. Zum Beispiel wird im obigen Beispiel `image1`'s `background-repeat` Wert `no-repeat` sein. Was passiert, wenn verschiedene Eigenschaften eine unterschiedliche Anzahl an Werten haben? Die Antwort ist, dass die kleineren Zahlen an Werten sich zyklisch wiederholen – im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie zyklisch wiederholt – `image3` erhält den ersten Positionswert, und `image4` erhält den zweiten Positionswert.

### Spielen mit mehreren Hintergrundbildern

Lassen Sie uns spielen. Das Beispiel unten enthält zwei Hintergrundbilder. Versuchen Sie, das Beispiel wie folgt zu bearbeiten:

- Wechseln Sie die Reihenfolge der Hintergrundbilder, um die Stapelreihenfolge zu demonstrieren.
- Fügen Sie einige andere `background-*` Eigenschaften hinzu, um die Position, Größe oder den Wiederholungswert der Bilder zu ändern.
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

## Hintergrund-Befestigung

Eine weitere Option, die wir bei Hintergründen haben, ist festzulegen, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mit der {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Im Grunde ist der Hintergrund an derselben Position auf der Seite fixiert, sodass er scrollt, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements fest im Ansichtsfenster verankert ist, sodass er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund auf das Element, auf dem es gesetzt ist, sodass der Hintergrund mit dem Element scrollt, wenn Sie es scrollen.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur eine Wirkung, wenn es Inhalte zum Scrollen gibt, daher haben wir ein Demo gemacht, um die Unterschiede zwischen den drei Werten zu demonstrieren – schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier).

## Die Background-Kurzschrift-Eigenschaft verwenden

Sie werden oft sehen, dass Hintergründe mithilfe der {{cssxref("background")}}-Kurzschreibweise spezifiziert werden, die es Ihnen ermöglicht, alle verschiedenen Eigenschaften auf einmal einzustellen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und Position, dann ein Hintergrundbild mit `no-repeat` und einer Position und dann eine Farbe.

Es gibt ein paar Regeln, die beim Schreiben von Background-Kurzschriftwerten beachtet werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` aufgenommen werden, getrennt durch das `/`-Zeichen, so: `center/80%`.

Schauen Sie sich die MDN-Seite zu {{cssxref("background")}} an, um mehr über die Syntax zu erfahren.

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

## Barrierefreiheitserwägungen mit Hintergründen

Wenn Sie Text über einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text lesbar ist. Beim Festlegen eines Bildes mit Textinhalt darüber sollten Sie auch eine `background-color` angeben, die es ermöglicht, dass der Text lesbar ist, wenn das Bild nicht geladen wird.

Bildschirmschutzgeräte können keine Hintergrundbilder parsen; daher sollten sie rein dekorativ sein. Jeder wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Lernen über das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir herausgefunden, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Rahmen kreativ verwenden kann.

Normalerweise verwenden wir, wenn wir Rahmen zu einem Element mit CSS hinzufügen, die {{cssxref("border")}}-Kurzschreibweise, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/Reference/Values/line-style) des Rahmens auf allen vier Seiten einer Box in einer Erklärung festzulegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante der Box anvisieren, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die individuellen Eigenschaften umfassen die Kurzschreibweisen {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

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
> Diese oberen, rechten, unteren und linken Rahmen-Eigenschaften haben auch gemappte [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z.B. links-nach-rechts oder rechts-nach-links Text, oder oben-nach-unten). Sie können darüber in [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Spielen mit Rahmen

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

Sie können einer Box abgerundete Ecken hinzufügen, indem Sie die {{cssxref("border-radius")}}-Eigenschaft und die zugehörigen Langschreibweisen verwenden, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

Um beispielsweise allen vier Ecken einer Box einen Radius von `10px` zu geben:

```css
.box {
  border-radius: 10px;
}
```

Oder um die obere rechte Ecke mit einem horizontalen Radius von `1em` und einem vertikalen Radius von `10%` zu versehen:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den Rahmen-Eigenschaften oben haben auch diese border-radius-Eigenschaften gemappte [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

### Spielen mit dem Rahmenradius

Wir haben im untenstehenden Beispiel alle vier Ecken festgelegt und dann die Werte für die obere rechte Ecke verändert, um sie anders zu machen. Sie können die Werte ändern, um die Ecken zu verändern. Schauen Sie sich die Eigenschaftsseite von {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen abgerundete Eckwerte auszugeben.

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

Sie sehen, es gibt eine ganze Menge zum Hinzufügen eines Hintergrunds oder eines Rahmens zu einer Box. Erkunden Sie die unterschiedlichen Eigenschaftsseiten, wenn Sie mehr über eine der hier besprochenen Funktionen erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen über Hintergrund- und Rahmen-Gestaltung verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
