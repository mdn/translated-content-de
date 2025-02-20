---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: ef53e3fd7444f73901d5859bb8304eb161f9c7e1
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion betrachten wir einige der kreativen Möglichkeiten, die CSS-Hintergründe und -Rahmen bieten. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken — Hintergründe und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.

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
          <li>Grundlegendes Hintergrund-Styling — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Befestigung von Hintergrundbildern.</li>
          <li>Hintergrund-Verläufe — allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind fortgeschrittener; tiefgründiges Wissen ist zu diesem Zeitpunkt nicht erforderlich.)</li>
          <li>Barrierefreiheitsüberlegungen zu Hintergründen — sicherstellen von gutem Kontrast.</li>
          <li>Grundlagen von Rändern — Breite, Stil, Farbe und Rahmen-Kurzform. Radius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS gestalten

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für eine Anzahl von ausführlichen Hintergrund-Eigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, könnte sie aufgrund der Vielzahl an möglichen Werten zunächst schwer verständlich wirken:

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

Später im Tutorial werden wir darauf zurückkommen, wie die Kurzform funktioniert. Zunächst werfen wir jedoch einen Blick auf die verschiedenen Möglichkeiten, die Sie mit Hintergründen in CSS haben, indem wir uns die einzelnen Hintergrund-Eigenschaften ansehen.

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Diese Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter den Inhalts- und Innenabstand-Kasten des Elements.

Im Beispiel unten haben wir verschiedene Farbwerte verwendet, um eine Hintergrundfarbe auf die Box, eine Überschrift und ein {{htmlelement("span")}}-Element hinzuzufügen. Probieren Sie es selbst mit jedem verfügbaren [`<color>`](/de/docs/Web/CSS/color_value)-Wert aus.

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

Die Eigenschaft {{cssxref("background-image")}} ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel verdeutlicht zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, daher sehen wir nur einen kleinen Ausschnitt davon, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, eine `background-color`-Eigenschaft zum obigen Beispiel hinzuzufügen, um dies in Aktion zu sehen.

### Kontrolle der Hintergrund-Wiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kacheln von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert das Wiederholen des Hintergrundes.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standardwert; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich, fügt Zwischenräume zwischen den Bildern hinzu, wenn zusätzlicher Platz vorhanden ist.
- `round` — ähnlich wie `space`, dehnt die Bilder jedoch, um jeden verfügbaren Platz auszufüllen

Probieren Sie diese Werte im Beispiel unten aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Versuchen Sie, die verschiedenen Werte — `repeat-x` und `repeat-y` — auszuprobieren, um ihre Effekte zu sehen.

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

Das _balloons.jpg_-Bild, das im ursprünglichen Hintergrundbild-Beispiel verwendet wurde, ist ein großes Bild, das aufgrund seiner Größe im Vergleich zum Element, dessen Hintergrund es ist, beschnitten wurde. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen kann, um die Größe des Bildes anzupassen, sodass es in den Hintergrund passt.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade so groß, dass es den gesamten Boxbereich abdeckt und dabei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — der Browser passt das Bild so an, dass es in die Box passt. In diesem Fall könnten Sie Lücken an den Seiten oder oben und unten im Bild haben, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten haben wir dem _balloons.jpg_-Bild Längeneinheiten zugewiesen, um es in die Box zu passen. Dies hat das Bild verzerrt.

Probieren Sie Folgendes aus:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
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

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position des Hintergrundbildes auf der Box auszuwählen, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die linke obere Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die gebräuchlichsten `background-position`-Werte bestehen aus zwei Einzelwerten — einem horizontalen Wert, gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der {{cssxref("background-position")}} Seite an):

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert sich auf die horizontale Position oder den Versatz und der zweite auf die vertikale beziehen muss. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine Syntax mit vier Werten verwenden, um einen Abstand von bestimmten Kanten der Box anzuzeigen — die Längeneinheit ist in diesem Fall ein Versatz vom vorhergehenden Wert. Im folgenden CSS positionieren wir den Hintergrund 20px vom oberen Rand und 10px vom rechten Rand:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu experimentieren und den Stern innerhalb der Box zu bewegen:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die Achsenpositionswerte individuell festzulegen.

## Verlaufs-Hintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — verhält sich wie ein Bild und wird ebenfalls durch Verwendung der Eigenschaft {{cssxref("background-image")}} festgelegt.

Sie können mehr über die verschiedenen Arten von Verläufen und die Dinge, die Sie damit tun können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, ist die Verwendung eines der vielen im Internet verfügbaren CSS-Verlaufs-Generatoren, wie zum Beispiel [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode, der ihn erzeugt, kopieren und einfügen.

Probieren Sie einige verschiedene Verläufe im Beispiel unten aus. In den beiden Boxen haben wir jeweils einen linearen Verlauf, der sich über die gesamte Box erstreckt, und einen radialen Verlauf mit einer festgelegten Größe, der sich daher wiederholt.

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

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an und trennen jeden Wert mit einem Komma.

Wenn Sie dies tun, können sich die Hintergrundbilder überlappen. Die Hintergründe werden mit dem zuletzt aufgeführten Hintergrundbild am unteren Ende des Stapels geschichtet, und jedes vorhergehende Bild wird oben auf dem folgenden Bild im Code gestapelt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können auch Werte mit Komma-Trennung auf die gleiche Weise wie `background-image` haben:

```css
background-image:
  url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird den Werten in der gleichen Position in den anderen Eigenschaften zugeordnet. Im obigen Beispiel wird beispielsweise der `background-repeat`-Wert von `image1` `no-repeat` sein. Was passiert jedoch, wenn unterschiedliche Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort lautet, dass die kleineren Zahlen von Werten zyklisch verwendet werden — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie wieder zyklisch verwendet — `image3` erhält den ersten Positionswert und `image4` den zweiten.

Lassen Sie uns spielen. Das Beispiel unten enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, das erste Hintergrundbild in der Liste zu wechseln. Oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder die Wiederholungswerte zu ändern.

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

## Hintergrund-Befestigung

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Festlegung, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mit der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Im Effekt ist der Hintergrund an derselben Position auf der Seite fixiert, sodass er scrollt, während die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an der Ansicht fixiert ist, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an dem Element, auf das er angewendet wurde, sodass beim Scrollen des Elements der Hintergrund mit scrollt.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur dann eine Wirkung, wenn Inhalt zum Scrollen vorhanden ist. Wir haben eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

## Verwendung der Kurzform-Eigenschaft für Hintergründe

Wie zu Beginn dieser Lektion erwähnt, sehen Sie häufig, dass Hintergründe mithilfe der Eigenschaft {{cssxref("background")}} angegeben werden. Diese Kurzform ermöglicht es, alle verschiedenen Eigenschaften auf einmal festzulegen.

Bei Verwendung mehrerer Hintergründe müssen Sie alle Eigenschaften für den ersten Hintergrund angeben, dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im Beispiel unten haben wir einen Verlauf mit einer Größe und Position, dann ein Bild als Hintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die bei der Schreibung von Hintergrund-Kurzformwerten befolgt werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` eingeschlossen sein, getrennt durch das '/'-Zeichen, wie folgt: `center/80%`.

Werfen Sie einen Blick auf die MDN-Seite für {{cssxref("background")}}, um all die Überlegungen zu sehen.

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

## Barrierefreiheitsüberlegungen zu Hintergründen

Wenn Sie Text auf ein Hintergrundbild oder eine Farbe legen, sollten Sie darauf achten, dass genügend [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) vorhanden ist, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben, und wenn Text über diesem Bild platziert wird, sollten Sie auch eine `background-color` angeben, die den Text lesbar macht, falls das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht parsen; daher sollten sie rein dekorativ sein. Wichtige Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Lernen über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unseres Kastens beeinflussen. In dieser Lektion werden wir uns ansehen, wie Rahmen kreativ eingesetzt werden können. Normalerweise fügen wir einem Element mit CSS Rahmen hinzu, indem wir eine Kurzform-Eigenschaft verwenden, die die Farbe, Breite und [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

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

Die individuellen Eigenschaften beinhalten die Kurzformen {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt ausführliche Eigenschaften für die Breite, den Stil und die Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmen-Eigenschaften haben auch zugeordnete [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links schreiben, oder von oben nach unten). Wir werden diese im Unterricht über [den Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) erkunden.

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

Abgerundete Ecken an einer Box werden mit der Eigenschaft {{cssxref("border-radius")}} und den zugehörigen Langformen erreicht, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der sowohl für den horizontalen als auch für den vertikalen Wert verwendet wird.

Zum Beispiel, um alle vier Ecken einer Box mit einem 10px-Radius abzurunden:

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
> Wie bei den oben erwähnten Rahmen-Eigenschaften haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im Beispiel unten festgelegt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten experimentieren, um die Ecken zu ändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen Werte für abgerundete Ecken auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Sie sehen, dass es ziemlich viel zu beachten gibt, wenn man einem Kasten einen Hintergrund oder einen Rahmen hinzufügt. Erforschen Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Fast jede Seite auf MDN enthält Beispiele, mit denen Sie Ihr Wissen erweitern können.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufs erfahren, das regelt, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Elementkastens zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
