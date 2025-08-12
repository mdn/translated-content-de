---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion schauen wir uns einige kreative Möglichkeiten an, die Sie mit CSS-Hintergründen und -Rahmen umsetzen können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken – Hintergründe und Rahmen sind die Antwort auf viele Stylingfragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrundstyling – Farben und Bilder.</li>
          <li>Hintergrundbildgröße, Wiederholung, Position und Anhang.</li>
          <li>Hintergrundverläufe – allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind fortgeschrittener und in diesem Stadium ist ein tiefes Verständnis nicht erforderlich.)</li>
          <li>Barrierefreiheitsaspekte von Hintergründen – stellen Sie einen guten Kontrast sicher.</li>
          <li>Rahmen-Grundlagen – Breite, Stil, Farbe und Rahmen-Kurzschreibweise. Radius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter dem Inhalts- und dem Auffüllungsrahmen des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben mit beliebigen verfügbaren [`<color>`](/de/docs/Web/CSS/color_value)-Werten auszutauschen.

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

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Boxen – eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, daher sehen wir nur eine kleine Ecke davon, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie eine Hintergrundfarbe zusätzlich zu einem Hintergrundbild angeben, wird das Bild über der Farbe angezeigt.
Versuchen Sie, im obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.

### Steuerung der Hintergrundwiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` – verhindert die gesamte Wiederholung des Hintergrunds.
- `repeat-x` – Wiederholung horizontal.
- `repeat-y` – Wiederholung vertikal.
- `repeat` – die Standardeinstellung; Wiederholung in beide Richtungen.
- `space` – so oft wie möglich wiederholen, Platz zwischen den Bildern hinzufügen, wenn zusätzlicher Raum verfügbar ist.
- `round` – ähnlich wie `space`, jedoch werden die Bilder gestreckt, um den zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Testen Sie die verschiedenen Werte, um zu sehen, welche Auswirkungen sie haben.

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

Das _balloons.jpg_-Bild, das im ursprünglichen Hintergrundbildbeispiel verwendet wurde, ist ein großes Bild, das abgeschnitten wurde, weil es größer ist als das Element, dessen Hintergrund es ist. In diesem Fall können wir die Eigenschaft {{cssxref("background-size")}} verwenden, um das Bild an die Hintergrundgröße anzupassen.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung anzugeben, oder die folgenden Schlüsselwörter:

- `cover` – der Browser macht das Bild gerade groß genug, damit es den Boxbereich vollständig abdeckt, während es sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall befindet sich wahrscheinlich ein Teil des Bildes außerhalb der Box.
- `contain` – der Browser passt das Bild in der Größe so an, dass es in die Box passt. In diesem Fall können Lücken an den Seiten oder oben und unten im Bild entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

#### Spielen mit `background-size`

Im folgenden Beispiel hat das _balloons.jpg_-Bild Längeneinheiten erhalten, um es in die Box zu passen. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Ändern Sie das Bild kleiner als die Box, und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

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

### Positionierung des Hintergrundbildes

Mit der Eigenschaft {{cssxref("background-position")}} können Sie die Position des Hintergrundbildes auf der Box wählen, auf die es angewendet wird. Dabei wird ein Koordinatensystem verwendet, in welchem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`)- und der vertikalen (`y`)-Achse positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die gebräuchlichsten `background-position`-Werte nehmen zwei individuelle Werte an – einen horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die weiteren Schlüsselwörter auf der Seite {{cssxref("background-position")}} an):

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

Sie können auch Schlüsselwörter mit Längen oder Prozentsätzen mischen; dabei bezieht sich der erste Wert auf die horizontale Position und der zweite auf die vertikale Position. Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine Syntax mit 4 Werten verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben. Jedes Wertpaar repräsentiert die Kante der Box, von der der Abstand festgelegt wird, und die Größe des Abstands von dieser Kante. Im untenstehenden Code-Snippet positionieren wir den Hintergrund `20px` vom `top` und `10px` vom `right` entfernt:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

Verwenden Sie das Beispiel unten, um mit diesen Werten zu experimentieren und den Stern innerhalb der Box zu verschieben:

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
> Die Kurzschreibweise `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es ermöglichen, die unterschiedlichen Achsenpositionswerte einzeln festzulegen.

## Hintergrundverläufe

Ein Verlauf – wenn er für einen Hintergrund verwendet wird – verhält sich wie ein Bild und wird ebenfalls durch die Verwendung der Eigenschaft {{cssxref("background-image")}} festgelegt.

Sie können auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp mehr über die verschiedenen Arten von Verlaufswerten und die Dinge, die Sie damit tun können, erfahren.

Probieren Sie einige verschiedene Verlaufswerte im folgenden Beispiel aus. Zunächst haben wir einen linearen Verlauf, der über die gesamte erste Box gespannt ist, und einen radialen Verlauf mit einer festgelegten Größe, der über die zweite Box wiederholt wird.

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
> Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, ist die Verwendung eines der vielen CSS-Verlaufsgeneratoren im Internet, wie [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzelnen Deklaration anzugeben. Dies geschieht, indem mehrere `background-image`-Werte, getrennt durch Kommata, angegeben werden.

Wenn Sie dies tun, kann es passieren, dass sich Hintergrundbilder überlappen. Die Hintergründe werden mit dem zuletzt aufgelisteten Hintergrundbild am unteren der Stapelreihe gestapelt, und jedes vorherige Bild wird auf das folgende in dem Code gelegt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Auch die anderen `background-*`-Eigenschaften können wie `background-image` kommagetrennte Werte haben:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird an die Werte der gleichen Position in den anderen Eigenschaften angepasst. Oben hat beispielsweise `image1` den `background-repeat`-Wert `no-repeat`. Aber was passiert, wenn unterschiedliche Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die geringeren Anzahlen von Werten zyklisch werden – im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie erneut durchlaufen – `image3` wird der erste Positionswert zugewiesen, und `image4` wird der zweite Positionswert zugewiesen.

### Spielen mit mehreren Hintergrundbildern

Lassen Sie uns spielen. Das Beispiel unten enthält zwei Hintergrundbilder. Versuchen Sie, das Beispiel folgendermaßen zu bearbeiten:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, das zuerst in der Liste angegebene Hintergrundbild zu ändern.
- Fügen Sie einige andere `background-*`-Eigenschaften hinzu, um die Position, Größe oder den Wiederholwert der Bilder zu ändern.
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

Eine weitere Option, die wir für Hintergründe haben, ist die Angabe, wie sie scrollen, wenn der Inhalt scrollt. Dies wird durch die Eigenschaft {{cssxref("background-attachment")}} gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. In Wirklichkeit ist der Hintergrund auf die gleiche Position auf der Seite fixiert, sodass er beim Scrollen der Seite scrollt.
- `fixed`: lässt den Hintergrund eines Elements am Viewport fixiert, sodass er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund auf das Element, auf dem es gesetzt ist, sodass beim Scrollen des Elements der Hintergrund mit diesem scrollt.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur dann Auswirkungen, wenn es scrollbaren Inhalt gibt. Wir haben eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren – sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (auch [den Quellcode hier ansehen](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds)).

## Verwendung der Hintergrund-Kurzschreibweise

Sie werden häufig sehen, dass Hintergründe mithilfe der Kurzschreibweise {{cssxref("background")}} angegeben werden, mit der Sie alle verschiedenen Eigenschaften auf einmal einstellen können.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund spezifizieren und dann nach einem Komma Ihren nächsten Hintergrund hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und einer Position, dann ein Bild mit `no-repeat` und einer Position und schließlich eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Hintergrund-Kurzschriftwerten befolgt werden müssen, zum Beispiel:

- Ein `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein und muss mit dem `/`-Zeichen getrennt werden, so: `center/80%`.

Werfen Sie einen Blick auf die MDN-Seite für {{cssxref("background")}}, um mehr darüber zu erfahren, wie die Syntax aufgebaut ist.

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

## Barrierefreiheitsüberlegungen mit Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass Sie ausreichend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit Textinhalten darauf angeben, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text zu lesen, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht analysieren; daher sollten sie rein dekorativ sein. Jeglicher wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Ränder

Beim Lernen über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Ränder die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Ränder kreativ einsetzen kann.

Typischerweise verwenden wir, wenn wir Ränder zu einem Element mit CSS hinzufügen, die Eigenschaft {{cssxref("border")}} in Kurzschrift, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Randes auf allen vier Seiten einer Box in einer Deklaration festzulegen:

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

Die einzelnen Eigenschaften umfassen die Kurzschreibweise {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt auch Langschreibweiseigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Randeigenschaften haben auch zugeordnete [_logische_ Randeigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z.B. Links-nach-Rechts oder Rechts-nach-Links-Text, oder von oben nach unten). Sie können darüber in [handhabung unterschiedlicher Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Spielen mit Rahmen

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Rahmenstile für die Box und zwei unterschiedliche Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

Sie können einer Box mit der Eigenschaft {{cssxref("border-radius")}} und den zugehörigen Langformen abgerundete Ecken hinzufügen, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius definiert und der zweite den vertikalen Radius. In vielen Fällen geben Sie nur einen Wert an, der für beide verwendet wird.

Beispielsweise, um allen vier Ecken einer Box einen `10px` Radius zu geben:

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
> Wie bei den Randeigenschaften oben haben auch diese Border-Radius-Eigenschaften zugeordnete [_logische_ Border-Radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

### Spielen mit Border-Radius

Wir haben im folgenden Beispiel alle vier Ecken eingestellt und dann die Werte für die obere rechte Ecke geändert, um sie unterschiedlich zu gestalten. Sie können mit den Werten spielen, um die Ecken zu ändern. Sehen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [Border-Radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen abgerundete Eckwerte auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – sehen Sie [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders).

## Zusammenfassung

Sie sehen, dass es ziemlich viel gibt, wenn es darum geht, einem Kasten einen Hintergrund oder einen Rahmen hinzuzufügen. Erforschen Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Themen erfahren möchten. Fast jede Seite auf MDN enthält Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel lernen wir mehr über das Konzept des Überlaufs, das regelt, was passiert, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
