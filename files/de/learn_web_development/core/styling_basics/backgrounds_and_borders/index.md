---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: b64538dc77e9a6181b882bd54bdbb307c1430ba8
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werfen wir einen Blick auf einige kreative Dinge, die Sie mit CSS-Hintergründen und Rahmen tun können. Von der Verwendung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken bis hin zu komplexeren Designs; Hintergründe und Rahmen bieten die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Styling von Hintergründen – Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anheftung von Hintergrundbildern.</li>
          <li>Hintergrund-Farbverläufe – allgemeines Konzept und lineare Farbverläufe (radiale, kegelförmige und sich wiederholende Farbverläufe sind fortgeschrittener; tiefgehendes Wissen ist an diesem Punkt nicht erforderlich).</li>
          <li>Barrierefreiheit von Hintergründen – Gewährleistung eines guten Kontrasts.</li>
          <li>Grundlagen von Rahmen – Breite, Stil, Farbe und Kurznotation für Rahmen. Border-Radius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergründe mit CSS stylen

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für eine Reihe von Hintergrund-Langform-Eigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie auf eine komplexe Hintergrund-Eigenschaft in einem Stylesheet stoßen, mag sie zunächst schwer verständlich sein, da viele Werte gleichzeitig angegeben werden können:

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurznotation funktioniert. Zuerst werfen wir jedoch einen Blick darauf, welche Möglichkeiten es gibt, Hintergründe in CSS zu gestalten, indem wir uns die einzelnen Hintergrundeigenschaften ansehen.

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} legt die Hintergrundfarbe eines beliebigen Elements in CSS fest. Diese Eigenschaft akzeptiert alle gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color`-Eigenschaft erstreckt sich unterhalb des Inhalts und des Polsterungsbereichs (Padding Box) eines Elements.

Im Beispiel unten haben wir verschiedene Farbwerte verwendet, um eine Hintergrundfarbe für eine Box, eine Überschrift und ein {{htmlelement("span")}}-Element hinzuzufügen.
Probieren Sie es selbst aus, indem Sie einen beliebigen verfügbaren [`<color>`](/de/docs/Web/CSS/color_value)-Wert verwenden.

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

Die Eigenschaft {{cssxref("background-image")}} ermöglicht das Anzeigen eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen – eine enthält ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere enthält ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Verhaltensweisen von Hintergrundbildern. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur einen kleinen Ausschnitt davon sehen. Das kleine Bild hingegen wird gekachelt, um die Box zu füllen.

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

Wenn Sie neben einem Hintergrundbild auch eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Fügen Sie dem obigen Beispiel eine `background-color`-Eigenschaft hinzu, um das in Aktion zu sehen.

### Steuerung der Hintergrund-Wiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat`: verhindert, dass der Hintergrund überhaupt wiederholt wird.
- `repeat-x`: wiederholt das Bild horizontal.
- `repeat-y`: wiederholt das Bild vertikal.
- `repeat`: Standard; wiederholt in beide Richtungen.
- `space`: wiederholt so oft wie möglich und fügt Abstände zwischen den Bildern hinzu, wenn zusätzlicher Platz verfügbar ist.
- `round`: ähnlich wie `space`, jedoch werden die Bilder gestreckt, um den zusätzlichen Platz zu füllen.

Probieren Sie diese Werte im Beispiel unten aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Testen Sie die verschiedenen Werte – `repeat-x` und `repeat-y` – und schauen Sie, wie sie das Ergebnis beeinflussen.

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

### Hintergrundbildgröße festlegen

Das Bild _balloons.jpg_ aus dem ursprünglichen Hintergrundbild-Beispiel ist ein großes Bild, das beschnitten wurde, da es größer als das Element ist, für das es als Hintergrundbild dient. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte akzeptieren kann, um das Bild an die Boxgröße anzupassen.

Es können auch Schlüsselwörter verwendet werden:

- `cover`: Der Browser vergrößert das Bild so, dass es die Box vollständig abdeckt, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} erhalten bleibt. Dabei wird vermutlich ein Teil des Bildes außerhalb der Box landen.
- `contain`: Der Browser sorgt dafür, dass das Bild in die Box hineinpasst. In diesem Fall können auf beiden Seiten oder oben und unten der Box Lücken entstehen, wenn das Seitenverhältnis des Bildes nicht mit dem der Box übereinstimmt.

Im Beispiel unten hat das Bild _balloons.jpg_ Längeneinheiten, die seine Größe innerhalb der Box definieren. Sie sehen, dass das Bild dadurch verzerrt ist.

Probieren Sie Folgendes aus:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrundes zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Falls Ihr Bild kleiner als die Box ist, ändern Sie den Wert von `background-repeat`, um das Bild zu wiederholen.

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

Die Eigenschaft {{cssxref("background-position")}} erlaubt es, die Position des Hintergrundbildes auf der Box zu bestimmen, auf die es angewendet wird. Dies erfolgt durch ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Position wird entlang der horizontalen (`x`) bzw. vertikalen (`y`) Achse angegeben.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gängigsten Werte für `background-position` verwenden zwei Einzelwerte – einen horizontalen Wert gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (die anderen finden Sie auf der {{cssxref("background-position")}}-Seite):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}}, sowie {{cssxref("percentage", "Prozentsätze")}}:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwörter mit Längen oder Prozentsätzen mixen. Der erste Wert muss sich auf die horizontale Position oder den Versatz beziehen, der zweite auf die vertikale. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Des Weiteren kann eine 4-Werte-Syntax verwendet werden, um Abstände von bestimmten Kanten der Box zu definieren. Die Längeneinheit gibt hier einen Versatz von dem ihr vorangehenden Wert an. Im folgenden CSS positionieren wir den Hintergrund 20px von oben und 10px von rechts:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Experimentieren Sie im Beispiel unten mit diesen Werten, um den Stern innerhalb der Box zu verschieben:

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
> Die Kurzschrift `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es ermöglichen, die Werte der unterschiedlichen Achsenpositionen einzeln festzulegen.

## Hintergrund-Farbverläufe

Ein Farbverlauf – wenn er als Hintergrund verwendet wird – verhält sich wie ein Bild und wird ebenfalls mit der Eigenschaft {{cssxref("background-image")}} festgelegt.

Mehr über die verschiedenen Arten von Farbverläufen und deren möglichen Anwendungen erfahren Sie auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp. Eine unterhaltsame Möglichkeit, mit Farbverläufen zu experimentieren, ist die Verwendung eines der vielen CSS-Farbverlaufs-Generatoren im Internet, wie z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und dann den erzeugten Quellcode kopieren und einfügen.

Probieren Sie unterschiedliche Farbverläufe im Beispiel unten aus. In den beiden Boxen haben wir jeweils einen linearen Farbverlauf, der sich über die gesamte Box erstreckt, und einen radialen Farbverlauf mit einer festgelegten Größe, der sich daher wiederholt.

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

Es ist ebenfalls möglich, mehrere Hintergrundbilder zu verwenden – hierzu geben Sie mehrere `background-image`-Werte an, die durch ein Komma voneinander getrennt sind.

Wenn Sie dies tun, können Hintergrundbilder übereinander liegen. Die Hintergründe werden so gestapelt, dass das zuletzt angegebene Hintergrundbild unten liegt, während jedes vorherige Bild darüber geschichtet wird.

> [!NOTE]
> Farbverläufe können problemlos mit regulären Hintergrundbildern kombiniert werden.

Die anderen `background-*` Eigenschaften können ebenso Komma-getrennte Werte verwenden wie `background-image`:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften korrespondiert mit den Werten an der gleichen Position in den anderen Eigenschaften. Oben hat beispielsweise `image1` den Wert `no-repeat` für `background-repeat`. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedlich viele Werte haben? Die Antwort lautet, dass kürzere Listen von Werten wiederholt werden – im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei Werte für `background-position`. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet und dann erneut auf `image3` und `image4`.

Im Beispiel unten sind zwei Hintergrundbilder enthalten. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder in der Liste zu ändern. Oder experimentieren Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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

## Hintergrund-Anheftung

Eine weitere Option für Hintergründe ist die Festlegung ihrer Scroll-Verhaltens bei Seiten- oder Elementüberlauf. Dies wird mit der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements beim Scrollen der Seite mitscrollt. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund bleibt somit auf derselben Position der Seite, während diese gescrollt wird.
- `fixed`: lässt den Hintergrund eines Elements am Anzeigebereich haften, sodass er beim Scrollen der Seite oder des Inhalts nicht bewegt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund am Element selbst, sodass der Hintergrund mit diesem gescrollt wird.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur eine Wirkung, wenn es Inhalte gibt, die gescrollt werden können. Um die Unterschiede zwischen den drei Werten zu zeigen, sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (ebenfalls [sehen Sie den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier ein).

## Verwendung der Kurzbeschreibung der Hintergrund-Eigenschaft

Wie zu Beginn dieser Lektion erwähnt, werden Hintergründe oft mit der Kurzbeschreibung {{cssxref("background")}} angegeben. Diese Kurzform ermöglicht es, alle verschiedenen Eigenschaften gleichzeitig festzulegen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und danach den nächsten Hintergrund mit einem Komma hinzufügen. Im Beispiel unten haben wir einen Verlauf mit einer Größe und Position, dann einen Bildhintergrund mit `no-repeat` und einer Position, und schließlich eine Farbe.

Beim Schreiben von Kurzbeschreibungen für Hintergrundbilder sind einige Regeln zu beachten, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` eingefügt werden, getrennt durch einen '/'-Zeichen, wie folgt: `center/80%`.

Schauen Sie sich die MDN-Seite zu {{cssxref("background")}} an, um alle Überlegungen zu sehen.

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

## Barrierefreiheit von Hintergründen beachten

Wenn Text über einem Hintergrundbild oder einer Hintergrundfarbe platziert wird, sollte darauf geachtet werden, dass ausreichend [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) vorhanden ist, um die Lesbarkeit für Ihre Besucher sicherzustellen. Wenn Sie ein Bild angeben und sich Text über diesem Bild befindet, sollten Sie ebenfalls eine `background-color` angeben, sodass der Text lesbar bleibt, wenn das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht interpretieren; daher sollten sie rein dekorativ sein. Jeglicher wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrundbild enthalten sein.

## Rahmen

Bei der Auseinandersetzung mit dem [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir erfahren, wie Rahmen die Größe einer Box beeinflussen. In dieser Lektion werden wir uns anschauen, wie Rahmen kreativ genutzt werden können. Typischerweise verwenden wir beim Hinzufügen von Rahmen zu einem Element mit CSS eine Kurzbeschreibung, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

Mit {{cssxref("border")}} können wir einen Rahmen für alle vier Seiten einer Box festlegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können gezielt eine Seite der Box ansteuern, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die Kurzformen {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt Langformen für die Breite, den Stil und die Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese top-, right-, bottom- und left-Rahmeneigenschaften haben auch zugeordnete [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z. B. links-nach-rechts oder rechts-nach-links Text, oder oben-nach-unten). Wir werden diese im nächsten Abschnitt behandeln, der [den Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) umfasst.

Es gibt eine Vielzahl von Stilen, die für Rahmen verwendet werden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Experimentieren Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

Das Abrunden von Ecken einer Box wird mit der Eigenschaft {{cssxref("border-radius")}} und den zugehörigen Langformen erreicht, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In den meisten Fällen geben Sie nur einen Wert an, der dann für beide verwendet wird.

Beispielsweise kann man alle vier Ecken einer Box mit einem Radius von 10px abrunden:

```css
.box {
  border-radius: 10px;
}
```

Oder die obere rechte Ecke mit horizontalem Radius `1em` und vertikalem Radius 10% abrunden:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den Rahmen-Eigenschaften oben haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben im unten stehenden Beispiel alle vier Ecken definiert und dann die Werte für die obere rechte Ecke geändert, um sie abzuheben. Experimentieren Sie mit den Werten, um die Ecken zu verändern. Schauen Sie sich die Eigenschaftsseite zu {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu entdecken. Mit dem [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) können Sie Werte für abgerundete Ecken generieren.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie die Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Wissen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Sie können erkennen, dass das Hinzufügen eines Hintergrunds oder eines Rahmens zu einer Box zahlreiche Möglichkeiten bietet. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Nahezu jede Seite auf MDN hat Beispiele, mit denen Sie Ihr Wissen vertiefen können.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufs erfahren, das bestimmt, was passiert, wenn es zu viel Inhalt gibt, um in eine Elementbox zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
