---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die Sie mit CSS-Hintergründen und -Rahmen machen können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken – Hintergründe und Rahmen sind die Antwort auf viele Stylingfragen in CSS.

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
          <li>Hintergrundbildgröße, Wiederholung, Position und Anhang.</li>
          <li>Hintergrundverläufe — allgemeines Konzept und lineare Verläufe (radiale, konische und sich wiederholende Verläufe sind fortgeschrittener; ein tiefgehendes Wissen ist zu diesem Zeitpunkt nicht erforderlich.)</li>
          <li>Barrierefreiheitsaspekte von Hintergründen — sicherstellen eines guten Kontrasts.</li>
          <li>Grundlagen von Rahmen — Breite, Stil, Farbe und Rahmen-Kurzform. Radius des Rahmens für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jede gültige {{cssxref("&lt;color&gt;")}}. Eine `background-color` erstreckt sich unterhalb des Inhalts- und Auffüllkastens des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einem Kasten, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben mit anderen verfügbaren {{cssxref("&lt;color&gt;")}}-Werten zu tauschen.

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

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im folgenden Beispiel haben wir zwei Kästen — einer hat ein Hintergrundbild, das größer ist als der Kasten ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Der andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in den Kasten zu passen, daher sehen wir nur eine kleine Ecke davon, während das kleine Bild gekachelt wird, um den Kasten zu füllen.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, eine `background-color`-Eigenschaft zum obigen Beispiel hinzuzufügen, um dies in Aktion zu sehen.

### Steuerung der Hintergrundwiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass sich der Hintergrund überhaupt wiederholt.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — der Standard; in beide Richtungen wiederholen.
- `space` — so oft wie möglich wiederholen, dabei Platz zwischen den Bildern hinzufügen, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, jedoch werden die Bilder gedehnt, um jeden zusätzlichen Platz zu füllen

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

### Die Größe des Hintergrundbildes

Das _balloons.jpg_ Bild, das im ersten Beispiel für das Hintergrundbild verwendet wird, ist ein großes Bild, das aufgrund seiner Größe größer als das Element zugeschnitten wurde, dessen Hintergrund es ist. In diesem Fall können wir die Eigenschaft {{cssxref("background-size")}} verwenden, um das Bild so zu dimensionieren, dass es in den Hintergrund passt.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung anzugeben, oder die folgenden Schlüsselwörter:

- `cover` — Der Browser sorgt dafür, dass das Bild gerade so groß ist, dass es den gesamten Kastenbereich bedeckt, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb des Kastens enden.
- `contain` — Der Browser passt die Größe des Bildes so an, dass es in den Kasten passt. In diesem Fall können Lücken auf beiden Seiten oder oben und unten des Bildes entstehen, wenn das Seitenverhältnis des Bildes von dem des Kastens abweicht.

#### Spielen mit `background-size`

Im folgenden Beispiel hat das _balloons.jpg_ Bild Längeneinheiten, die gesetzt sind, damit es in den Kasten passt. Dies hat das Bild verzerrt.

Probieren Sie Folgendes aus:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds anzupassen.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Dimensionieren Sie das Bild kleiner als den Kasten und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

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

### Die Position des Hintergrundbildes

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf dem Kasten erscheint, auf den es angewendet wird. Dazu wird ein Koordinatensystem verwendet, bei dem die obere linke Ecke des Kastens `(0,0)` ist und der Kasten entlang der horizontalen (`x`)- und vertikalen (`y`)-Achsen positioniert ist.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gebräuchlichsten `background-position`-Werte nehmen zwei Einzelwerte an — einen horizontalen Wert, gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sie können die anderen auf der {{cssxref("background-position")}}-Seite nachschlagen):

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei sich der erste Wert auf die horizontale Position und der zweite auf die vertikale Position bezieht. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten des Kastens anzugeben. Jedes Wertepaar repräsentiert die Kante des Kastens, von der abgesetzt wird, und die Größe der Abweichung von dieser Kante. Im folgenden Snippet positionieren wir den Hintergrund `20px` vom `top` und `10px` vom `right`:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu experimentieren und den Stern innerhalb des Kastens zu bewegen:

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
> Die Kurzform `background-position` wird statt {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es ermöglichen, die unterschiedlichen Achsenpositionswerte individuell festzulegen.

## Verlaufs-Hintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — funktioniert wie ein Bild und wird ebenfalls mithilfe der Eigenschaft {{cssxref("background-image")}} festgelegt.

Sie können auf der MDN-Seite für den {{cssxref("gradient")}}-Datentyp Informationen über die verschiedenen Arten von Verlaufswerten und deren Verwendung finden.

Probieren Sie im folgenden Beispiel einige verschiedene Verlaufswerte aus. Anfänglich haben wir einen linearen Verlauf, der über das ganze erste Feld gestreckt ist, und einen radialen Verlauf mit fester Größe, der sich über das zweite Feld wiederholt.

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
> Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, besteht darin, einen der vielen im Web verfügbaren CSS-Verlaufsgeneratoren wie [CSSGradient.io](https://cssgradient.io/) zu verwenden. Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

## Mehrfache Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzigen Deklaration anzugeben. Dies geschieht, indem Sie mehrere `background-image`-Werte mit Kommas getrennt auflisten.

Wenn Sie dies tun, können Sie am Ende überlappende Hintergrundbilder haben. Die Hintergründe werden dabei so gestapelt, dass das zuletzt aufgelistete Hintergrundbild unten im Stapel ist und jedes vorherige Bild auf dem darauffolgenden gestapelt wird.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls mit Komma getrennte Werte auf die gleiche Weise wie `background-image` haben:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften korrespondiert mit dem Wert in der entsprechenden Position in den anderen Eigenschaften. Im obigen Beispiel wird der `background-repeat`-Wert von `image1` `no-repeat` sein. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass sich die kleinere Anzahl von Werten zyklisch wiederholt — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann wird es sich wiederholen — `image3` erhält den ersten Positionswert und `image4` den zweiten Positionswert.

### Spielen mit mehreren Hintergrundbildern

Lassen Sie uns spielen. Das folgende Beispiel beinhaltet zwei Hintergrundbilder. Versuchen Sie, das Beispiel folgendermaßen zu bearbeiten:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder in der Liste zu ändern.
- Fügen Sie einige andere `background-*`-Eigenschaften hinzu, um die Position, Größe oder Wiederholungswerte der Bilder zu ändern.
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

Eine weitere Option, die wir für Hintergründe haben, ist die Festlegung, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mit der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund ist also in der Tat an die gleiche Position auf der Seite gebunden und scrollt, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an den Ansichtsbereich gebunden ist, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Er bleibt immer an der gleichen Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf dem er gesetzt ist, sodass der Hintergrund mit diesem scrollt, wenn Sie das Element scrollen.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur dann eine Auswirkung, wenn es Inhalt zum Scrollen gibt, daher haben wir ein Demo erstellt, das die Unterschiede zwischen den drei Werten zeigt:

```html hidden live-sample___background-atachment
<section>
  <article class="scroll">
    <p>
      <code>background-attachment: scroll</code> causes the element's background
      to be fixed to the page, so that it scrolls when the page is scrolled. If
      the element content is scrolled, the background does not move.
    </p>

    <pre></pre>
  </article>

  <article class="fixed">
    <p>
      <code>background-attachment: fixed</code> causes an element's background
      to be fixed to the viewport, so that it doesn't scroll when the page or
      element content is scrolled. It will always remain in the same position on
      the screen.
    </p>

    <pre></pre>
  </article>

  <article class="local">
    <p>
      <code>background-attachment: local</code> causes an element's background
      to be fixed to the actual element itself. When the page is scrolled, the
      element's background will move along with it only if the element does so.
      When the element's content is scrolled, the background will scroll along
      with it.
    </p>

    <pre></pre>
  </article>
</section>
```

```css hidden live-sample___background-atachment
html,
body {
  margin: 0;
  padding: 0;
}

h1 {
  margin-top: 0;
}

body {
  padding: 1em;
}

html {
  background-color: yellow;
  font-family: sans-serif;
}

body {
  height: 2000px;
}

p {
  padding: 10px;
  color: white;
  background: rgba(0, 0, 0, 0.3);
}

section {
  display: flex;
  gap: 10px;
}

article {
  flex: 1;
  height: 300px;
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg);
  background-size: 400px 400px;
  background-repeat: no-repeat;
  background-position: top center;
  padding: 1%;
  overflow: auto;
}

article pre {
  height: 800px;
}

.fixed {
  background-attachment: fixed;
}

.scroll {
  background-attachment: scroll;
}

.local {
  background-attachment: local;
}
```

{{embedlivesample("background-attachment", "100%", 350)}}

Versuchen Sie, das gesamte eingebettete Beispiel und dann die einzelnen Container zu scrollen, und beobachten Sie die Unterschiede im Verhalten der Containerhintergründe.

## Verwendung der Hintergrund-Kurzform-Eigenschaft

Sie werden oft sehen, dass Hintergründe mit der {{cssxref("background")}}-Kurzform-Eigenschaft angegeben werden, die es ermöglicht, alle verschiedenen Eigenschaften auf einmal festzulegen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und Position, dann ein Bildhintergrund mit `no-repeat` und einer Position, gefolgt von einer Farbe.

Es gibt ein paar Regeln, die beim Schreiben von Hintergrundbild-Kurzform-Werten beachtet werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` angegeben werden, getrennt durch das `/` Zeichen, wie folgt: `center/80%`.

Schauen Sie sich die MDN-Seite für {{cssxref("background")}} an, um mehr über die Syntax zu erfahren.

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

## Barrierefreiheitsaspekte bei Hintergründen

Wenn Sie Text über ein Hintergrundbild oder eine Hintergrundfarbe legen, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit Textinhalt darauf verwenden, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text lesbar zu machen, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht interpretieren; daher sollten sie rein dekorativ sein. Jeglicher wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Erlernen des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir gelernt, wie Rahmen die Größe unseres Kastens beeinflussen. In dieser Lektion schauen wir uns an, wie Rahmen kreativ eingesetzt werden können.

Typischerweise, wenn wir einem Element mit CSS Rahmen hinzufügen, verwenden wir die {{cssxref("border")}}-Kurzform-Eigenschaft, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/Reference/Values/line-style) des Rahmens auf allen vier Seiten eines Kastens in einer Deklaration festzulegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante des Kastens anpeilen, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die Kurzform-Eigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt auch Langform-Eigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oben, rechts, unten und links Rahmen-Eigenschaften haben auch zugeordnete [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links Text, oder von oben nach unten). Sie können darüber in der Suche nach [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Spielen mit Rahmen

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Rahmenstile für den Kasten und zwei verschiedene Rahmenstile für die Überschrift verwendet. Experimentieren Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

Sie können einem Kasten abgerundete Ecken hinzufügen, indem Sie die Eigenschaft {{cssxref("border-radius")}} und die zugehörigen Langform verwenden, die sich auf jede Ecke des Kastens beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius definiert und der zweite den vertikalen Radius. In vielen Fällen geben Sie nur einen Wert an, der für beide verwendet wird.

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
> Wie bei den oben genannten Rahmen-Eigenschaften haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties).

### Spielen mit dem border-radius

Wir haben alle vier Ecken im Beispiel unten eingestellt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten experimentieren, um die Ecken zu ändern. Werfen Sie einen Blick auf die Eigenschaftsseite für {{cssxref("border-radius")}}, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckenwerte für Sie auszugeben.

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

Sie sehen, dass es einiges ist, einen Hintergrund oder einen Rahmen zu einem Kasten hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Merkmale erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie interagieren können, um Ihr Wissen zu erweitern.

Im nächsten Artikel geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über Hintergrund- und Rahmenstyling verstanden und verinnerlicht haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
