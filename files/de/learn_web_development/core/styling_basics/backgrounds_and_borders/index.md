---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rahmen tun können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Stylingfragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größenänderung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrundstyling — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anhang von Hintergrundbildern.</li>
          <li>Hintergrundverläufe — allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholte Verläufe sind fortgeschrittener; tiefgehendes Wissen ist an dieser Stelle nicht erforderlich.)</li>
          <li>Barrierefreiheitserwägungen von Hintergründen — sicherstellen, dass ein guter Kontrast vorhanden ist.</li>
          <li>Grundlagen von Rahmen — Breite, Stil, Farbe und Rahmenkurzschrift. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS stylen

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzschrift für eine Reihe von Hintergrund-Eigenschaften in Langform, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, könnte es zunächst schwierig erscheinen, diese zu verstehen, da so viele Werte auf einmal übergeben werden können:

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzschrift funktioniert, aber lassen Sie uns zuerst einen Blick darauf werfen, welche verschiedenen Dinge Sie mit Hintergründen in CSS tun können, indem wir uns die einzelnen Hintergrund-Eigenschaften ansehen.

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb des Inhalts- und Polsterungsbereichs des Elements.

Im Beispiel unten haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen. Probieren Sie es selbst aus, indem Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Wert verwenden.

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

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen – eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

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

Wenn Sie zu einem Hintergrundbild auch eine Hintergrundfarbe angeben, dann wird das Bild über der Farbe angezeigt. Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.

### Hintergrund-Wiederholung kontrollieren

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund überhaupt wiederholt wird.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standard; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich und fügt zusätzlichen Platz zwischen den Bildern hinzu, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, aber streckt die Bilder, um zusätzlichen Platz zu füllen

Probieren Sie diese Werte im Beispiel unten aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte — `repeat-x` und `repeat-y` — aus, um ihre Effekte zu sehen.

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

### Hintergrundbildgröße anpassen

Das _balloons.jpg_ Bild, das im ursprünglichen Beispiel für Hintergrundbilder verwendet wurde, ist ein großes Bild, das zugeschnitten wurde, weil es größer ist als das Element, von dem es ein Hintergrund ist. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}} oder {{cssxref("percentage")}} Werte akzeptiert, um das Bild in die Hintergrunddarstellung einzufügen.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser wird das Bild gerade groß genug machen, sodass es den gesamten Box-Bereich abdeckt, während es sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} behält. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb der Box enden.
- `contain` — der Browser wird das Bild in der richtigen Größe machen, um es in die Box einzufügen. In diesem Fall könnten Sie Lücken an beiden Seiten oder oben und unten des Bildes haben, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten hat das _balloons.jpg_ Bild Längeneinheiten, die es in der Box einfassen. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner ist als die Box, können Sie den Wert der `background-repeat`-Eigenschaft ändern, um das Bild zu wiederholen.

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

### Hintergrund-Bildpositionierung

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position zu wählen, in der das Hintergrundbild auf der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die am häufigsten genutzten `background-position` Werte nehmen zwei einzelne Werte an — einen horizontalen Wert gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der {{cssxref("background-position")}} Seite an):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}} und {{cssxref("percentage", "Prozentsätze")}}:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert die horizontale Position oder den Versatz betrifft und der zweite die vertikale. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Box-Kanten anzugeben — die Längeneinheit ist in diesem Fall ein Versatz von dem Wert, der ihr vorhergeht. So positionieren wir im folgenden CSS den Hintergrund 20px vom oberen Rand und 10px vom rechten Rand:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Verwenden Sie das Beispiel unten, um mit diesen Werten zu spielen und den Stern innerhalb der Box zu bewegen:

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
> Die Kurzschrift `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Achsenpositionswerte individuell festzulegen.

## Verlaufshintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — funktioniert genauso wie ein Bild und wird auch mit der Eigenschaft {{cssxref("background-image")}} gesetzt.

Sie können mehr über die verschiedenen Arten von Verläufen und die Dinge, die Sie mit ihnen tun können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, besteht darin, einen der vielen CSS-Verlaufsgeneratoren zu verwenden, die im Internet verfügbar sind, z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn generiert.

Probieren Sie einige verschiedene Verläufe im Beispiel unten aus. In den beiden Boxen haben wir einen linearen Verlauf, der sich über die ganze Box erstreckt, und einen radialen Verlauf mit einer festgelegten Größe, der sich daher wiederholt.

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

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an, wobei Sie jeden mit einem Komma trennen.

Wenn Sie dies tun, könnten Sie Hintergrundbilder haben, die sich gegenseitig überlagern. Die Hintergründe werden in Schichten mit dem zuletzt genannten Hintergrundbild am unteren Ende des Stapels angelegt, wobei jedes vorherige Bild über dem folgt, das im Code folgt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*` Eigenschaften können auch kommaseparierte Werte auf die gleiche Weise haben wie `background-image`:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird den Werten in derselben Position in den anderen Eigenschaften zugeordnet. Oben wird beispielsweise `image1`'s `background-repeat` Wert `no-repeat` sein. Aber was passiert, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass sich die kleineren Zahlen von Werten zyklisch wiederholen — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie wieder zyklisch verwendet — `image3` wird der erste Positionswert zugewiesen, und `image4` der zweite Positionswert.

Lassen Sie uns spielen. Das Beispiel unten umfasst zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, welches Hintergrundbild zuerst in der Liste kommt. Oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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

## Hintergrund-Befestigung

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Festlegung, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mit der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements scrollt, bewegt sich der Hintergrund nicht. Tatsächlich wird der Hintergrund an der gleichen Position auf der Seite fixiert, sodass er scrollt, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an das Anzeigefenster fixiert wird, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements scrollt. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an dem Element, für das er festgelegt ist, sodass der Hintergrund scrollt, wenn Sie das Element scrollen.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur dann eine Wirkung, wenn es Inhalt gibt, der gescrollt werden kann, daher haben wir ein Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (auch [sehen Sie sich hier den Quellcode an](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds)).

## Die Kurzschrift-Eigenschaft "background" verwenden

Wie zu Beginn dieser Lektion erwähnt, werden Sie häufig sehen, dass Hintergründe mit der Eigenschaft {{cssxref("background")}} angegeben werden. Diese Kurzschrift lässt Sie alle verschiedenen Eigenschaften auf einmal setzen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im Beispiel unten haben wir einen Verlauf mit einer Größe und Position, dann ein Bild im Hintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die befolgt werden müssen, wenn Sie Hintergrundbild-Kurzschriftwerte schreiben, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert der `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das '/' Zeichen, so: `center/80%`.

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

## Barrierefreiheitserwägungen mit Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Farbe platzieren, sollten Sie darauf achten, dass ein ausreichender [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) vorhanden ist, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben und Text über diesem Bild platziert wird, sollten Sie auch eine `background-color` angeben, die den Text lesbar macht, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht analysieren; sie sollten daher rein dekorativ sein. Jeglicher wichtiger Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Erlernen des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Rahmen kreativ verwendet. Typischerweise, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir eine Kurzschrift-Eigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} setzen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante der Box gezielt ansprechen, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die Kurzschrift-Eigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

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
> Diese oberen, rechten, unteren und linken Rand-Eigenschaften haben auch zugeordnete [_logische_ Rand-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schriftmodus des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links Text, oder von oben nach unten). Wir werden diese im nächsten Unterricht erkunden, der das [Handhaben unterschiedlicher Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) behandelt.

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

Das Abrunden von Ecken einer Box wird erreicht, indem die Eigenschaft {{cssxref("border-radius")}} und die zugehörigen Langformen verwendet werden, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius definiert und der zweite den vertikalen Radius. In vielen Fällen geben Sie nur einen Wert an, der für beide verwendet wird.

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
> Wie bei den oben genannten Rahmen-Eigenschaften haben auch diese border-radius Eigenschaften zugeordnete [_logische_ border-radius Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im Beispiel unten gesetzt und dann die Werte für die obere rechte Ecke geändert, um es unterschiedlich zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Werte für abgerundete Ecken für Sie auszugeben.

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

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihr Können: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Sie sehen, dass es einiges zu beachten gibt, wenn man einem Rahmen oder einer Box einen Hintergrund hinzufügen möchte. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Merkmale herausfinden möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu verbessern.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufs lernen, das regelt, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Elementfeld zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
