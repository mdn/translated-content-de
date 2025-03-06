---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rahmen machen können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Stilfragen in CSS.

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
          <li>Grundlegende Hintergrundgestaltung – Farben und Bilder.</li>
          <li>Hintergrundbildgröße, Wiederholung, Position und Anhaftung.</li>
          <li>Hintergrundverläufe – allgemeines Konzept und lineare Verläufe (radiale, konische und sich wiederholende Verläufe sind fortgeschrittener; tiefgehendes Wissen ist in diesem Stadium nicht erforderlich.)</li>
          <li>Barrierefreiheit von Hintergründen – gute Kontraste sicherstellen.</li>
          <li>Rahmen-Grundlagen – Breite, Stil, Farbe und Rahmenkurzform. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS stylen

Die CSS-{{cssxref("background")}}-Eigenschaft ist eine Kurzform für eine Reihe von Hintergrundlangform-Eigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie auf eine komplexe Hintergrundeigenschaft in einem Stylesheet stoßen, kann es zunächst schwierig wirken, diese zu verstehen, da so viele Werte auf einmal übergeben werden können:

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber lassen Sie uns zuerst einen Blick auf die verschiedenen Dinge werfen, die Sie mit Hintergründen in CSS machen können, indem wir die einzelnen Hintergrundeigenschaften durchgehen.

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb des Inhalts- und Auffüllungsrahmens des Elements.

Im untenstehenden Beispiel haben wir verschiedene Farbwerte verwendet, um eine Hintergrundfarbe auf die Box, eine Überschrift und ein {{htmlelement("span")}}-Element hinzuzufügen.
Probieren Sie es selbst aus, indem Sie einen beliebigen verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Wert verwenden.

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

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im untenstehenden Beispiel haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild vor der Farbe angezeigt.
Fügen Sie dem obigen Beispiel eine `background-color`-Eigenschaft hinzu, um dies in Aktion zu sehen.

### Steuerung der Hintergrundwiederholung

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund überhaupt wiederholt wird.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standard; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich, fügt Zwischenräume zwischen den Bildern hinzu, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, dehnt jedoch die Bilder aus, um den verfügbaren zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte aus — `repeat-x` und `repeat-y` — um ihre Effekte zu sehen.

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

Das im ersten Hintergrundbildbeispiel verwendete Bild _balloons.jpg_ ist ein großes Bild, das aufgrund seiner Größe größer als das Element ist, in dem es sich hintergründet befindet, beschnitten wurde. In diesem Fall könnten Sie die {{cssxref("background-size")}}-Eigenschaft verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen kann, um die Größe des Bildes zu ändern, damit es in den Hintergrund passt.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade groß genug, sodass es den Boxbereich vollständig abdeckt, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — der Browser macht das Bild in der richtigen Größe, um in die Box zu passen. In diesem Fall können Lücken an den Seiten oder oben und unten des Bildes verbleiben, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im folgenden Beispiel wurde das _balloons.jpg_-Bild auf Größenmaßeinheiten eingestellt, um es innerhalb der Box zu platzieren. Sie können sehen, dass das Bild verzerrt wurde.

Probieren Sie Folgendes:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner ist als die Box, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

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

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position auszuwählen, an der das Hintergrundbild in der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem sich die obere linke Ecke der Box an der Position `(0,0)` befindet, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die gebräuchlichsten Werte für `background-position` nehmen zwei Einzelwerte an — einen horizontalen, gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der Seite {{cssxref("background-position")}} an):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}}, und {{cssxref("percentage", "Prozentwerte")}}:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert in diesem Fall die horizontale Position oder der Versatz und der zweite vertikal sein muss. Beispielsweise:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Längeneinheit ist in diesem Fall ein Versatz von dem Wert, der ihr vorangeht. Im folgenden CSS positionieren wir den Hintergrund 20px vom oberen Rand und 10px vom rechten Rand:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu spielen und den Stern innerhalb der Box zu bewegen:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die Positionswerte der verschiedenen Achsen einzeln festzulegen.

## Verlaufende Hintergründe

Ein Farbverlauf – wenn er für einen Hintergrund verwendet wird – verhält sich genau wie ein Bild und wird ebenfalls mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können mehr über die verschiedenen Arten von Farbverläufen und die Dinge, die Sie mit ihnen machen können, auf der MDN-Seite für den Datentyp [`<gradient>`](/de/docs/Web/CSS/gradient) lesen. Ein unterhaltsamer Weg, um mit Verläufen zu spielen, besteht darin, einen der vielen CSS-Verlaufs-Generatoren im Web zu verwenden, wie [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

Probieren Sie einige verschiedene Verläufe im folgenden Beispiel aus. In den beiden Boxen haben wir jeweils einen linearen Verlauf, der über die ganze Box gestreckt ist, und einen radialen Verlauf mit einer festgelegten Größe, der sich deshalb wiederholt.

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

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an, wobei jedes durch ein Komma getrennt ist.

Wenn Sie dies tun, können Hintergrundbilder einander überlappen. Die Hintergründe werden in einer Schicht geordnet, wobei das zuletzt aufgeführte Hintergrundbild unten im Stapel liegt, und jedes vorherige Bild oben auf dem nachfolgenden im Code gestapelt wird.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können auch kommagetrennte Werte in der gleichen Weise wie `background-image` haben:

```css
background-image:
  url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird den Werten an der gleichen Position in den anderen Eigenschaften zugeordnet. Im obigen Beispiel wird beispielsweise der `background-repeat`-Wert von `image1` `no-repeat` sein. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Wertanzahlen haben? Die Antwort ist, dass die kleineren Zahlen von Werten in den Zyklus übernommen werden — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten zwei Positionswerte werden auf die ersten zwei Bilder angewendet, dann werden sie wiederholt — `image3` erhält den ersten Positionswert und `image4` den zweiten Wert.

Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Schichtordnung zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder zu wechseln, oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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
  background-image:
    url(https://mdn.github.io/shared-assets/images/examples/star.png),
    url(https://mdn.github.io/shared-assets/images/examples/big-star.png);
}
```

{{EmbedLiveSample("multiple-background-image")}}

## Hintergrundbefestigung

Eine weitere Option, die wir für Hintergründe haben, ist die Festlegung, wie sie scrollen sollen, wenn der Inhalt scrollt. Dies wird durch die {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Tatsächlich ist der Hintergrund in der gleichen Position auf der Seite fixiert, sodass er sich beim Scrollen der Seite bewegt.
- `fixed`: sorgt dafür, dass der Hintergrund eines Elements am Ansichtsfenster fixiert ist, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Er bleibt immer in der gleichen Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an dem Element, auf das er eingestellt ist, sodass, wenn Sie das Element scrollen, der Hintergrund mitrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur dann eine Wirkung, wenn es Inhalt zum Scrollen gibt, daher haben wir ein Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren – sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

## Verwendung der Kurzform-Eigenschaft für den Hintergrund

Wie am Anfang dieser Lektion erwähnt, werden Sie oft Backgrounds sehen, die mit der Kurzform-Eigenschaft {{cssxref("background")}} spezifiziert sind. Diese Kurzform erlaubt es Ihnen, alle verschiedenen Eigenschaften auf einmal festzulegen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit Größe und Position, dann ein Bild-Hintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die eingehalten werden müssen, wenn Sie Hintergrundbild-Kurzform-Werte schreiben, z.B.:

- Eine `background-color`-Angabe darf nur nach dem letzten Komma vorkommen.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das '/'-Zeichen, wie folgt: `center/80%`.

Sehen Sie sich die MDN-Seite für {{cssxref("background")}} an, um alle Überlegungen zu sehen.

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

## Barrierefreiheit bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben und Text über diesem Bild platziert wird, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text lesbar zu machen, falls das Bild nicht geladen wird.

Bildschirmleseprogramme können Hintergrundbilder nicht interpretieren; daher sollten sie rein dekorativ sein. Jegliche wichtigen Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Lernen über das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns anschauen, wie man Rahmen kreativ nutzt. Typischerweise, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir eine Kurzform-Eigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} festlegen:

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

Die Einzelnen Eigenschaften umfassen die Kurzform-Eigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt Langform-Eigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese Rand-Eigenschaften oben, rechts, unten und links haben auch abgebildete [_logische_ Randeigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z. B. links-nach-rechts oder rechts-nach-links Text oder von oben nach unten). Wir werden diese in der Lektion über [den Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) erkunden.

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
  color: #fff;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", "200px")}}

## Abgerundete Ecken

Abgerundete Ecken an einer Box werden durch die Verwendung der {{cssxref("border-radius")}}-Eigenschaft und der dazugehörigen Langformen erreicht, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

Beispielsweise, um allen vier Ecken einer Box einen Radius von 10px zu geben:

```css
.box {
  border-radius: 10px;
}
```

Oder, um der oberen rechten Ecke einen horizontalen Radius von `1em` und einem vertikalen Radius von 10% zu geben:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den obigen Rand-Eigenschaften, haben auch diese border-radius-Eigenschaften abgebildete [_logische_ Randradius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im folgenden Beispiel gesetzt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu gestalten. Sie können mit den Werten spielen, um die Ecken zu ändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um für Sie abgerundete Werte zu erzeugen.

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

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitergehen – sehen Sie [Testen Sie Ihr Wissen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Sie können sehen, dass es einiges zu beachten gibt, wenn Sie einen Hintergrund oder Rahmen zu einer Box hinzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir mehr über das Konzept der Überläufe erfahren, das regelt, was passiert, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
