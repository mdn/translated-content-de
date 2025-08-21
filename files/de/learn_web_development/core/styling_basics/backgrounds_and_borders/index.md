---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werfen wir einen Blick auf einige kreative Dinge, die Sie mit CSS-Hintergründen und -Rahmen machen können. Von der Hinzufügung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken - Hintergründe und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und -Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrund-Styling — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anhang von Hintergrundbildern.</li>
          <li>Hintergrundverläufe — allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind fortgeschrittener; eingehende Kenntnisse sind in diesem Stadium nicht erforderlich.)</li>
          <li>Barrierefreiheit von Hintergründen — sorgen Sie für guten Kontrast.</li>
          <li>Grundlagen von Rahmen — Breite, Stil, Farbe und Rahmen-Kurzschreibweise. Radius des Rahmens für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb des Inhalts- und des Padding-Kastens des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben durch beliebige verfügbare [`<color>`](/de/docs/Web/CSS/color_value)-Werte zu ersetzen.

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

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht es, ein Bild im Hintergrund eines Elements anzuzeigen. Im folgenden Beispiel haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel demonstriert zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur einen kleinen Teil davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, der oben genannten Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.

### Steuerung der Hintergrundwiederholung

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert die Wiederholung des Hintergrunds.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — der Standard; in beide Richtungen wiederholen.
- `space` — so oft wie möglich wiederholen, zusätzlichen Raum zwischen den Bildern hinzufügen, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, aber die Bilder werden gestreckt, um zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte aus, um ihre Effekte zu sehen.

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

### Größe des Hintergrundbilds

Das _balloons.jpg_-Bild, das im anfänglichen Hintergrundbild-Beispiel verwendet wird, ist ein großes Bild, das abgeschnitten wurde, weil es größer ist als das Element, dessen Hintergrund es bildet. In diesem Fall können wir die {{cssxref("background-size")}}-Eigenschaft verwenden, um das Bild in den Hintergrund einzupassen.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung anzugeben, oder die folgenden Schlüsselwörter:

- `cover` — Der Browser wird das Bild nur so groß machen, dass es den Boxbereich vollständig abdeckt und dabei sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — Der Browser wird das Bild so anpassen, dass es in die Box passt. In diesem Fall können Lücken an den Seiten oder oben und unten des Bildes entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

#### Spielen mit `background-size`

Im folgenden Beispiel hat das _balloons.jpg_-Bild Längeseinheiten, um es in die Box einzupassen. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Längeseinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeseinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Ändern Sie die Bildgröße kleiner als die Box und ändern Sie den Wert von `background-repeat`, um das Bild zu wiederholen.

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

### Positionierung des Hintergrundbilds

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, in der das Hintergrundbild auf der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei Einzelwerte — einen horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der Seite {{cssxref("background-position")}} an):

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert die horizontale Position und der zweite die vertikale Position bezeichnet. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben. Jedes Wertepaar repräsentiert die Kante der Box, von der aus abgesetzt wird, und die Größe des Versatzes von dieser Kante. Im folgenden Snippet positionieren wir den Hintergrund `20px` von `oben` und `10px` von `rechts`:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu spielen und den Stern innerhalb der Box zu bewegen:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Positionswerte der Achsen einzeln festzulegen.

## Gradient-Hintergründe

Ein Gradient — wenn er als Hintergrund verwendet wird — wirkt wie ein Bild und wird auch mit der {{cssxref("background-image")}}-Eigenschaft gesetzt.

Sie können auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp mehr über die verschiedenen Arten von Gradient-Werten und ihre Möglichkeiten erfahren.

Probieren Sie einige unterschiedliche Gradient-Werte im folgenden Beispiel aus. Anfangs haben wir einen linearen Gradient, der über die gesamte erste Box gestreckt ist, und einen radialen Gradient mit fester Größe, der über die zweite Box wiederholt wird.

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
> Eine unterhaltsame Möglichkeit, mit Gradienten zu spielen, ist die Nutzung eines der vielen im Web verfügbaren CSS-Gradient-Generatoren, wie z.B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Gradient erstellen und den Quellcode, der ihn erzeugt, kopieren und einfügen.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzelnen Deklaration anzugeben. Dies tun Sie, indem Sie mehrere `background-image`-Werte durch Kommata getrennt spezifizieren.

Wenn Sie dies tun, können Hintergrundbilder übereinanderliegen. Die Hintergründe werden so geschichtet, dass das zuletzt aufgeführte Hintergrundbild unten im Stapel liegt und jedes vorherige Bild auf dem folgt, was ihm im Code folgt.

> [!NOTE]
> Gradienten können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls kommagetrennte Werte in derselben Form wie `background-image` haben:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften passt zu den Werten an derselben Position in den anderen Eigenschaften. Oben, zum Beispiel, wird `image1` den `background-repeat`-Wert `no-repeat` haben. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die kleinere Anzahl von Werten zyklisch verwendet wird — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die beiden ersten Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie erneut durchlaufen — `image3` wird den ersten Positionswert erhalten und `image4` den zweiten Positionswert.

### Spielen mit mehreren Hintergrundbildern

Lasst uns spielen. Im folgenden Beispiel sind zwei Hintergrundbilder enthalten. Bearbeiten Sie das Beispiel wie folgt:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, das zuerst in der Liste aufgeführte Hintergrundbild umzustellen.
- Fügen Sie einige andere `background-*`-Eigenschaften hinzu, um die Position, Größe oder Wiederholungswert der Bilder zu ändern.
- Versuchen Sie, einen Gradient als drittes `background-image` hinzuzufügen.

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

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Angabe, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mit der {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements beim Blättern der Seite scrollt. Wenn der Inhaltelement gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund ist effektiv an dieselbe Position auf der Seite fixiert, sodass er beim Blättern der Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an das Ansichtsfenster fixiert wird, sodass er beim Blättern der Seite oder des Inhaltselements nicht scrollt. Er bleibt immer in derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf das er gesetzt ist, sodass beim Scrollen des Elements der Hintergrund mit ihm scrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur eine Wirkung, wenn es Inhalt zum Scrollen gibt, daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — werfen Sie einen Blick auf [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (auch [sehen Sie sich den Quellcode an](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier).

## Verwendung der Kurzeigenschaft für Hintergründe

Häufig werden Hintergründe unter Verwendung der {{cssxref("background")}}-Kurzeigenschaft angegeben, die es Ihnen ermöglicht, alle verschiedenen Eigenschaften auf einmal zu setzen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Gradient mit Größe und Position, dann einen Bildhintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Kurzschreibweise-Werten für Hintergrundbilder befolgt werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` aufgenommen werden und mit dem `/`-Zeichen getrennt sein, so: `center/80%`.

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

## Barrierefreiheitserwägungen mit Hintergründen

Wenn Text auf einem Hintergrundbild oder einer Hintergrundfarbe platziert wird, sollten Sie darauf achten, dass genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) vorhanden ist, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit Textinhalt oben darauf angeben, sollten Sie auch eine `background-color` angeben, die es erlaubt, dass der Text lesbar ist, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht analysieren; daher sollten diese rein dekorativ sein. Jeglicher wichtiger Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten.

## Rahmen

Beim Lernen über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unseres Kastens beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Rahmen kreativ einsetzt.

Typischerweise verwenden wir beim Hinzufügen von Rahmen zu einem Element mit CSS die {{cssxref("border")}}-Kurzschreibweise, um die Farbe, Breite und [Stil](/de/docs/Web/CSS/line-style) des Rahmens an allen vier Seiten einer Box in einer Deklaration zu setzen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir zielen auf eine Kante der Box ab, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die individuellen Eigenschaften umfassen die Kurzschreibweisen {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

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
> Diese oberen, rechten, unteren und linken Rahmen-Eigenschaften haben auch zugeordnete [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf das Schreibmodus des Dokuments beziehen (z.B. von links-nach-rechts oder rechts-nach-links Text, oder von oben-nach-unten). Sie können über diese im [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

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

Sie können abgerundete Ecken zu einer Box hinzufügen, indem Sie die {{cssxref("border-radius")}}-Eigenschaft und die zugehörigen Langformen verwenden, die sich auf jede Ecke der Box beziehen. Zwei Längen- oder Prozentwerte können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen wird nur ein Wert übergeben, der für beide verwendet wird.

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
> Wie bei den Rahmeneigenschaften oben haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

### Spielen mit border-radius

Wir haben im folgenden Beispiel alle vier Ecken gesetzt und dann die Werte für die obere rechte Ecke verändert, um sie anders zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Werfen Sie einen Blick auf die Eigenschaftsseite von {{cssxref("border-radius")}}, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckwerte für Sie auszugeben.

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

Sie sehen, dass es viel zu beachten gibt, wenn man einer Box einen Hintergrund oder einen Rahmen hinzufügt. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eine der hier besprochenen Funktionen erfahren möchten. Auf fast jeder Seite auf MDN gibt es Beispiele, mit denen Sie experimentieren können, um Ihr Wissen zu erweitern.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen zur Hintergründe- und Rahmen-Stilierung verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
