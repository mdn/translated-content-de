---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns einige der kreativen Möglichkeiten ansehen, die Sie mit CSS-Hintergründen und -Rahmen haben. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Styling von Hintergründen — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anhang von Hintergrundbildern.</li>
          <li>Hintergrundverläufe — allgemeines Konzept und lineare Verläufe (radiale, kegelförmige und wiederholte Verläufe sind fortgeschrittener; ein tiefgehendes Wissen ist an dieser Stelle nicht erforderlich.)</li>
          <li>Zugänglichkeitsüberlegungen zu Hintergründen — sorgen Sie für guten Kontrast.</li>
          <li>Grundlagen der Rahmen — Breite, Stil, Farbe und Rahmen-Kurzschreibweise. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe in einem CSS-Element. Die Eigenschaft akzeptiert alle gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter den Inhalts- und Innenabstand-Kasten des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einem Kasten, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben gegen beliebige verfügbare [`<color>`](/de/docs/Web/CSS/color_value)-Werte auszutauschen.

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

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Kästen — einer hat ein Hintergrundbild, das größer ist als der Kasten ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Der andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel demonstriert zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht herunterskaliert, um in den Kasten zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um den Kasten zu füllen.

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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
}

.b {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
}
```

{{EmbedLiveSample("background-image")}}

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt.
Versuchen Sie, eine `background-color`-Eigenschaft zum obigen Beispiel hinzuzufügen, um dies in Aktion zu sehen.

### Kontrolle der Hintergrundwiederholung

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kacheln von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert das Wiederholen des Hintergrunds insgesamt.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standardwert; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich und fügt zusätzliche Leerzeichen zwischen den Bildern hinzu, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, aber streckt die Bilder, um zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Probieren Sie die verschiedenen Werte aus, um die Auswirkungen zu sehen.

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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("repeat")}}

### Größe des Hintergrundbildes

Das _balloons.jpg_-Bild, das im ursprünglichen Hintergrundbildbeispiel verwendet wurde, ist ein großes Bild, das aufgrund seiner größeren Größe als das Element, dessen Hintergrund es ist, beschnitten wurde. In diesem Fall können wir die {{cssxref("background-size")}}-Eigenschaft verwenden, um das Bild an die Hintergrundgröße anzupassen.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte übernehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung anzugeben, oder die folgenden Schlüsselwörter:

- `cover` — der Browser macht das Bild gerade so groß, dass es die Fläche des Kastens vollständig abdeckt, bleibt dabei aber im {{Glossary("aspect_ratio. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb des Kastens gelangen.\n- `contain` — der Browser macht das Bild in der richtigen Größe, um in den Kasten zu passen. In diesem Fall können Sie Lücken an beiden Seiten oder oben und unten des Bildes haben, wenn das Seitenverhältnis des Bildes von dem des Kastens abweicht.\n\n#### Spielen mit `background-size`\n\nIm folgenden Beispiel wurden dem _balloons.jpg_-Bild Längeneinheiten zugewiesen, um es in den Kasten zu passen. Sie können sehen, dass dies das Bild verzerrt hat.\n\nVersuchen Sie Folgendes:\n\n- Ändern der Längeneinheiten, um die Größe des Hintergrunds zu ändern.\n- Entfernen der Längeneinheiten und sehen, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.\n- Das Bild kleiner machen als den Kasten und dann den Wert von `background-repeat` ändern, um das Bild zu wiederholen.\n\n{{Code(\"H\"", "Seitenverhältnis")}}}}

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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-size: 80px 10em;
}
```

{{EmbedLiveSample("size")}}

### Positionierung des Hintergrundbildes

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf dem Kasten erscheint, auf den es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke des Kastens `(0,0)` ist und der Kasten entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei Einzelwerte — einen horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (schauen Sie sich die anderen auf der Seite {{cssxref("background-position")}} an):

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

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um einen Abstand von bestimmten Rändern des Kastens anzugeben. Jedes Paar von Werten stellt die Kante des Kastens dar, von dem aus versetzt wird, und die Größe des Versatzes von dieser Kante. Im folgenden Ausschnitt positionieren wir den Hintergrund `20px` vom `top` und `10px` vom `right`:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu spielen und den Stern im Kasten zu bewegen:

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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  background-position: 120px 1em;
}
```

{{EmbedLiveSample("position")}}

> [!NOTE]
> Die Kurzschreibweise `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die unterschiedlichen Achsenpositionswerte individuell festzulegen.

## Hintergrundverläufe

Ein Verlauf — wenn er für einen Hintergrund verwendet wird — wirkt wie ein Bild und wird auch mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können mehr über die verschiedenen Verlaufsarten und Dinge, die Sie mit ihnen machen können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp erfahren.

Probieren Sie einige andere Verlaufswerte im folgenden Beispiel aus. Wir haben zunächst einen linearen Verlauf, der über den gesamten ersten Kasten gestreckt ist, und einen radialen Verlauf mit fester Größe, der über den zweiten Kasten wiederholt wird.

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

> [!NOTE]
> Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, ist die Nutzung eines der vielen im Web verfügbaren CSS-Verlaufs-Generatoren, wie [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn generiert.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzigen Deklaration anzugeben. Sie tun dies, indem Sie mehrere `background-image`-Werte angeben, die durch Kommas getrennt sind.

Wenn Sie dies tun, können Sie letztendlich überlappende Hintergrundbilder erhalten. Die Hintergründe werden geschichtet, wobei das zuletzt gelistete Hintergrundbild unten im Stapel steht, und jedes vorherige Bild über dem darauffolgenden in der Reihenfolge im Code gestapelt wird.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls kommagetrennte Werte haben, genauso wie `background-image`:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften stimmt mit den Werten in der gleichen Position in den anderen Eigenschaften überein. Oben zum Beispiel wird der `background-repeat`-Wert von `image1` `no-repeat` sein. Was passiert jedoch, wenn unterschiedliche Eigenschaften unterschiedliche Zahlen von Werten haben? Die Antwort ist, dass die kleineren Zahlen von Werten sich wiederholen — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet und dann wiederholen sie sich erneut — `image3` wird der erste Positionswert zugeordnet und `image4` wird der zweite Positionswert zugeordnet.

### Spielen mit mehreren Hintergrundbildern

Lasst uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Versuchen Sie, das Beispiel wie folgt zu bearbeiten:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder zu wechseln.
- Fügen Sie einige andere `background-*`-Eigenschaften hinzu, um die Position, Größe oder den Wiederholungswert der Bilder zu ändern.
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
  border: 1px solid #ccc;
  margin: 20px;
}

.box {
  background-image:
    url("https://mdn.github.io/shared-assets/images/examples/star.png"),
    url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
}
```

{{EmbedLiveSample("multiple-background-image")}}

## Hintergrundanhang

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist zu bestimmen, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mit der {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die folgende Werte haben kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Tatsächlich ist der Hintergrund an derselben Position auf der Seite fixiert, sodass er mit der Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an das Ansichtsfenster fixiert wird, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Er bleibt immer in derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf dem es gesetzt ist, sodass es scrollt, wenn Sie das Element scrollen.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur dann eine Wirkung, wenn es Inhalte gibt, die gescrollt werden können, deshalb haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

## Verwendung der Kurzschreibweise für den Hintergrund

Sie werden häufig sehen, dass Hintergründe mit der {{cssxref("background")}}-Kurzschreibweise angegeben werden, mit der Sie alle verschiedenen Eigenschaften auf einmal festlegen können.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und einer Position, dann einen Bildhintergrund mit `no-repeat` und einer Position und schließlich eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Kurzschreibwerten für Hintergrundbilder befolgt werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` aufgenommen werden, getrennt durch das `/`-Zeichen, so: `center/80%`.

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

## Zugänglichkeitsüberlegungen bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass Sie genug [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher gut lesbar ist. Wenn Sie ein Bild mit Textinhalt darüber angeben, sollten Sie auch eine `background-color` angeben, die den Text gut lesbar macht, falls das Bild nicht geladen wird.

Screenreader können keine Hintergrundbilder analysieren; daher sollten diese rein dekorativ sein. Jegliche wichtigen Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Erlernen des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unseres Kastens beeinflussen. In dieser Lektion werden wir uns ansehen, wie Rahmen kreativ verwendet werden können.

Typischerweise, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir die {{cssxref("border")}}-Kurzschreibweise, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens auf allen vier Seiten eines Kastens in einer Deklaration festzulegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante des Kastens anvisieren, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}-Kurzschreibweisen:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt auch Langschreibweisen für Breite, Stil, und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmeneigenschaften haben auch zugehörige [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links, oder von oben nach unten). Sie können darüber in [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Spielen mit Rahmen

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Rahmenstile für den Kasten und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

Sie können einem Kasten mit der {{cssxref("border-radius")}}-Eigenschaft und den zugehörigen Langschreibweisen, die sich auf jede Ecke des Kastens beziehen, abgerundete Ecken hinzufügen. Zwei Längen oder Prozentsätze können als Werte verwendet werden, wobei der erste Wert den horizontalen Radius definiert und der zweite Wert den vertikalen Radius. In vielen Fällen werden Sie nur einen Wert einfügen, der für beide verwendet wird.

Zum Beispiel, um allen vier Ecken eines Kastens einen `10px`-Radius zu geben:

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
> Wie bei den oben genannten Rahmeneigenschaften haben auch diese border-radius-Eigenschaften zugehörige [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

### Spielen mit Rahmenradius

Wir haben alle vier Ecken im folgenden Beispiel gesetzt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten spielen, um die Ecken zu verändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckwerte für Sie zu erstellen.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders).

## Zusammenfassung

Sie können sehen, dass es ziemlich viel zu beachten gibt, um einem Kasten einen Hintergrund oder einen Rahmen hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier behandelten Features erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel erfahren wir mehr über das Konzept des Überlaufs, das regelt, was passiert, wenn zu viel Inhalt vorhanden ist, um in einen Elementkasten zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
