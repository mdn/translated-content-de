---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: ef472690cc383fc77d7aa53ddec036b5efa3b526
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns einige der kreativen Möglichkeiten ansehen, die Sie mit CSS-Hintergründen und Rahmen umsetzen können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken – Hintergründe und Rahmen sind die Antwort auf viele Stilfragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlagen der HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Hintergrundgestaltung — Farben und Bilder.</li>
          <li>Hintergrundbildgröße, Wiederholung, Position und Befestigung.</li>
          <li>Hintergrundverläufe — Allgemeines Konzept und lineare Verläufe (radiale, konische und sich wiederholende Verläufe sind fortgeschrittener; eingehende Kenntnisse sind in diesem Stadium nicht erforderlich.)</li>
          <li>Barrierefreiheitsüberlegungen zu Hintergründen — für guten Kontrast sorgen.</li>
          <li>Grundlagen von Rahmen — Breite, Stil, Farbe und Rahmen-Kurzform. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergründe mit CSS gestalten

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für eine Reihe von längeren Hintergrund-Eigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, kann es zunächst schwierig erscheinen zu verstehen, da so viele Werte gleichzeitig übergeben werden können:

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgb(255 255 255 / 20%) 39%,
        rgb(51 56 57 / 100%) 96%
      )
      center center / 400px 200px no-repeat,
    url(image.png) center no-repeat,
    rebeccapurple;
}
```

Auf die Funktionsweise der Kurzform werden wir später im Tutorial zurückkommen, aber werfen wir zunächst einen Blick auf die verschiedenen Dinge, die Sie mit Hintergründen in CSS machen können, indem wir uns die einzelnen Hintergrundeigenschaften ansehen.

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe für jedes Element in CSS. Diese Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb des Inhalts- und des Polsterbereichs des Elements.

Im unten stehenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen. Probieren Sie es selbst aus, und verwenden Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value)-Wert.

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

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzigen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, daher sehen wir nur einen kleinen Teil davon, während das kleine Bild gekachelt ist, um die Box zu füllen.

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
  border: 1px solid #ccc;
  margin: 20px;
}

.a {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
}

.b {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png);
}
```

{{EmbedLiveSample("background-image")}}

Wenn Sie eine Hintergrundfarbe zusätzlich zu einem Hintergrundbild angeben, wird das Bild auf der Farbe angezeigt.
Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um zu sehen, wie das funktioniert.

### Steuerung der Hintergrundwiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass sich der Hintergrund überhaupt wiederholt.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standard; wiederholt sich in beide Richtungen.
- `space` — wiederholt so oft wie möglich, wobei zusätzlicher Platz zwischen den Bildern hinzugefügt wird, wenn zusätzlicher Raum zur Verfügung steht.
- `round` — ähnlich wie `space`, dehnt jedoch die Bilder aus, um jeden zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte aus — `repeat-x` und `repeat-y` — um ihre Auswirkungen zu sehen.

```html live-sample___repeat
<div class="box"></div>
```

```css hidden live-sample___repeat
.box {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}
```

```css live-sample___repeat
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png);
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("repeat")}}

### Größe des Hintergrundbildes

Das in unserem ersten Beispiel für Hintergrundbilder verwendete Bild _balloons.jpg_ ist ein großes Bild, das aufgrund seiner Größe im Vergleich zum Element, das es als Hintergrund hat, beschnitten wurde. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die sowohl {{cssxref("length")}} als auch {{cssxref("percentage")}}-Werte akzeptiert, um die Größe des Bildes zu ändern, damit es in den Hintergrund passt.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade groß genug, damit es den gesamten Boxbereich abdeckt, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — der Browser macht das Bild passend, um in die Box zu passen. In diesem Fall können Lücken an den Seiten oder oben und unten des Bildes entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten wurde das Bild _balloons.jpg_ mit Längeneinheiten versehen, um es in die Box zu passen. Sie sehen, dass dies das Bild verzerrt hat.

Probieren Sie Folgendes:

- Ändern Sie die Längeneinheiten, die zur Änderung der Größe des Hintergrunds verwendet werden.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner als die Box ist, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

```html live-sample___size
<div class="box"></div>
```

```css hidden live-sample___size
.box {
  width: 500px;
  height: 100px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 10px;
}
```

```css live-sample___size
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/balloons.jpg);
  background-repeat: no-repeat;
  background-size: 80px 10em;
}
```

{{EmbedLiveSample("size")}}

### Positionierung des Hintergrundbildes

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf der Box erscheinen soll, auf die es angewendet wird. Dies nutzt ein Koordinatensystem, bei dem die linke obere Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und der vertikalen (`y`) Achse positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gängigsten `background-position`-Werte nehmen zwei einzelne Werte an — einen horizontalen Wert gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der {{cssxref("background-position")}}-Seite an):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}}, und {{cssxref("percentage", "Prozentsätze")}}:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert sich auf die horizontale Position oder den Versatz beziehen muss und der zweite Wert auf die vertikale. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um einen Abstand von bestimmten Rändern der Box anzugeben — die Längeneinheit ist in diesem Fall ein Versatz von dem Wert, der vor ihr steht. Im unten stehenden CSS positionieren wir den Hintergrund 20px von der Oberseite und 10px von der rechten Seite:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Nutzen Sie das Beispiel unten, um mit diesen Werten zu spielen und den Stern innerhalb der Box zu bewegen:

```html live-sample___position
<div class="box"></div>
```

```css hidden live-sample___position
.box {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #ccc;
  margin: 20px;
}
```

```css live-sample___position
.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png);
  background-repeat: no-repeat;
  background-position: 120px 1em;
}
```

{{EmbedLiveSample("position")}}

> [!NOTE]
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Achsenpositionswerte individuell festzulegen.

## Verlaufs-Hintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — funktioniert genauso wie ein Bild und wird ebenfalls durch die Verwendung der {{cssxref("background-image")}}-Eigenschaft gesetzt.

Sie können mehr über die verschiedenen Arten von Verläufen und die Dinge, die Sie mit ihnen tun können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp lesen. Ein unterhaltsamer Weg, mit Verläufen zu spielen, ist die Verwendung eines der vielen online verfügbaren CSS-Gradientengeneratoren, wie zum Beispiel [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn generiert.

Probieren Sie einige verschiedene Verläufe im Beispiel unten aus. In den beiden Boxen haben wir einen linearen Verlauf, der über die gesamte Box gestreckt ist, und einen radialen Verlauf mit einer festgelegten Größe, der sich daher wiederholt.

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
  border: 1px solid #ccc;
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

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an und trennen jeden Wert durch ein Komma.

Wenn Sie dies tun, können Sie Hintergrundbilder haben, die sich überlappen. Die Hintergründe werden in Schichten gelegt, wobei das zuletzt aufgeführte Hintergrundbild unten im Stapel liegt und jedes vorherige Bild über dem folgt, das ihm im Code folgt.

> [!NOTE]
> Verläufe können problemlos mit normalen Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können auf die gleiche Weise wie `background-image` kommagetrennte Werte haben:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften entspricht den Werten in der gleichen Position in den anderen Eigenschaften. Oben zum Beispiel wird `image1` den `background-repeat`-Wert `no-repeat` haben. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass sich die geringere Zahl von Werten zyklisch wiederholt — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden den ersten beiden Bildern zugewiesen, dann werden sie sich wiederholen — `image3` erhält den ersten Positionswert, und `image4` erhält den zweiten Positionswert.

Lassen Sie uns spielen. Das Beispiel unten enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, das erste Hintergrundbild in der Liste zu wechseln. Oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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
  border: 1px solid #ccc;
  margin: 20px;
}

.box {
  background-image: url(https://mdn.github.io/shared-assets/images/examples/star.png),
    url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}
```

{{EmbedLiveSample("multiple-background-image")}}

## Hintergrundbefestigung

Eine weitere Option, die uns für Hintergründe zur Verfügung steht, ist die Festlegung, wie sie scrollen, wenn der Inhalt scrollt. Dies wird durch die Verwendung der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Tatsächlich ist der Hintergrund an dieselbe Position auf der Seite fixiert, sodass er sich mit der Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an das Ansichtsfenster fixiert ist, sodass er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, bei dem er eingestellt ist, sodass beim Scrollen des Elements der Hintergrund mitscrollt.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur eine Wirkung, wenn Inhalt zum Scrollen vorhanden ist, daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu veranschaulichen — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

## Verwendung der Kurzform-Eigenschaft für Hintergrund

Wie zu Beginn dieser Lektion erwähnt, sehen Sie oft Hintergründe, die mit der {{cssxref("background")}}-Eigenschaft angegeben sind. Diese Kurzform ermöglicht es Ihnen, alle verschiedenen Eigenschaften auf einmal einzustellen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im Beispiel unten haben wir einen Verlauf mit Größe und Position, dann ein Bildhintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die beachtet werden müssen, wenn Kurzformwerte für Hintergrundbilder geschrieben werden, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das '/' Zeichen, so: `center/80%`.

Werfen Sie einen Blick auf die MDN-Seite für {{cssxref("background")}}, um alle Überlegungen zu sehen.

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
    url(https://mdn.github.io/shared-assets/images/examples/big-star.png) center
      no-repeat,
    rebeccapurple;
}
```

{{EmbedLiveSample("background", "", "320px")}}

## Barrierefreiheitsüberlegungen bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer -farbe platzieren, sollten Sie darauf achten, dass Sie genug [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben und Text darauf platziert werden soll, sollten Sie auch eine `background-color` angeben, die es ermöglicht, dass der Text lesbar ist, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht interpretieren; daher sollten sie rein dekorativ sein. Alle wichtigen Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten.

## Rahmen

Beim Lernen über das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion schauen wir uns an, wie Rahmen kreativ genutzt werden können. Typischerweise, wenn wir einem Element mit CSS Rahmen hinzufügen, verwenden wir eine Kurzform-Eigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} festlegen:

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

Die einzelnen Eigenschaften umfassen die Kurzform-Eigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt lang ausgeschriebene Eigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmen-Eigenschaften haben auch zugeordnete [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links, oder von oben nach unten). Wir werden diese im nächsten Artikel erkunden, der sich mit [der Handhabung unterschiedlicher Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) befasst.

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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
  color: #fff;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", "200px")}}

## Abgerundete Ecken

Das Abrunden von Ecken einer Box wird durch die Eigenschaft {{cssxref("border-radius")}} und deren zugehörige Langformen erreicht, die sich auf jede Ecke der Box beziehen. Es können zwei Längen oder Prozentsätze als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

Zum Beispiel, um alle vier Ecken einer Box mit einem Radius von 10px zu versehen:

```css
.box {
  border-radius: 10px;
}
```

Oder um die obere rechte Ecke mit einem horizontalen Radius von `1em` und einem vertikalen Radius von 10% zu versehen:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den oben genannten Rahmeneigenschaften haben diese border-radius-Eigenschaften auch zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im Beispiel unten eingestellt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen gerundete Eckwerte zu geben.

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

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Sie können sehen, dass es ziemlich viel zu beachten gibt, wenn Sie einem Box-Element einen Hintergrund oder Rahmen hinzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über einige der hier besprochenen Funktionen erfahren möchten. Fast jede Seite auf MDN enthält Beispiele, mit denen Sie spielen können, um Ihr Wissen zu vertiefen.

Im nächsten Artikel lernen wir mehr über das Konzept der Überfüllung, das regelt, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Element zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
