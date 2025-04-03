---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir einige der kreativen Dinge betrachten, die Sie mit CSS-Hintergründen und Rahmen machen können. Von Gradienten, Hintergrundbildern bis hin zu abgerundeten Ecken – Hintergründe und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Maßeinheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größenbestimmung</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Hintergrundgestaltung — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Befestigung des Hintergrundbildes.</li>
          <li>Hintergrundgradienten — allgemeines Konzept und lineare Gradienten (radiale, konische und sich wiederholende Gradienten sind fortgeschrittener; tiefgehendes Wissen ist in diesem Stadium nicht erforderlich.)</li>
          <li>Barrierefreiheitsüberlegungen bei Hintergründen — für guten Kontrast sorgen.</li>
          <li>Grundlagen der Rahmen — Breite, Stil, Farbe und Rahmenkurzform. Radius des Rahmens für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS gestalten

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für eine Reihe von Langform-Hintergrundeigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, mag sie zunächst schwer verständlich erscheinen, da viele Werte gleichzeitig übergeben werden können:

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

Wir werden später im Tutorial auf die Funktionsweise der Kurzform zurückkommen, aber lassen Sie uns zunächst die verschiedenen Dinge betrachten, die Sie mit Hintergründen in CSS tun können, indem wir die einzelnen Hintergrund-Eigenschaften ansehen.

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe für jedes Element in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb des Inhalts- und des Polsterkastens des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einem Kasten, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen. Probieren Sie es selbst aus, indem Sie jeden verfügbaren [`<color>`](/de/docs/Web/CSS/color_value)-Wert verwenden.

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

Dieses Beispiel demonstriert zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in den Kasten zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um den Kasten zu füllen.

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

Wenn Sie neben einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um dies in Aktion zu sehen.

### Steuerung der Hintergrund-Wiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bilder zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund überhaupt wiederholt wird.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — Standard; in beide Richtungen wiederholen.
- `space` — so oft wie möglich wiederholen und bei zusätzlichem Platz Raum zwischen den Bildern hinzufügen.
- `round` — ähnlich wie `space`, dehnt aber die Bilder aus, um jeden zusätzlichen Platz zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Probieren Sie die verschiedenen Werte — `repeat-x` und `repeat-y` — aus, um deren Wirkung zu sehen.

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

Das in dem ursprünglichen Hintergrundbilder-Beispiel verwendete Bild _balloons.jpg_ ist ein großes Bild, das aufgrund seiner Größe größer als das Element ist, dessen Hintergrund es ist. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte akzeptiert, um die Größe des Bildes anzupassen, damit es in den Hintergrund passt.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser wird das Bild so vergrößern, dass es die Kastenfläche vollständig abdeckt und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb des Kastens enden.
- `contain` — der Browser wird das Bild auf die richtige Größe bringen, um in den Kasten zu passen. In diesem Fall könnten Lücken an den Seiten oder oben und unten entstehen, wenn das Seitenverhältnis des Bildes anders als das des Kastens ist.

Im folgenden Beispiel sind im Bild _balloons.jpg_ Längeneinheiten gesetzt, um es im Kasten in der Größe anzupassen. Sie können sehen, dass das Bild dadurch verzerrt wurde.

Versuchen Sie folgendes:

- Ändern Sie die Längeneinheiten, um die Größe des Hintergrundes zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Wenn Ihr Bild kleiner als der Kasten ist, können Sie den Wert von `background-repeat` ändern, um das Bild zu wiederholen.

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

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position festzulegen, an der das Hintergrundbild im Kasten erscheint, auf das es angewandt wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke des Kastens `(0,0)` ist und der Kasten entlang der horizontalen (`x`)- und vertikalen (`y`)-Achsen positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gängigsten Werte für `background-position` haben zwei individuelle Werte — einen horizontalen Wert gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der Seite {{cssxref("background-position")}} an):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Sowie {{cssxref("length", "Längen")}} und {{cssxref("percentage", "Prozentsätze")}}:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert die horizontale Position oder Verschiebung und der zweite die vertikale angibt. Beispielsweise:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine Vier-Werte-Syntax verwenden, um einen Abstand von bestimmten Kastenrändern anzugeben — die Längeneinheit ist in diesem Fall eine Verschiebung von dem Wert, der davor steht. Im folgenden CSS positionieren wir den Hintergrund 20px vom oberen Rand und 10px vom rechten Rand:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu experimentieren und den Stern im Kasten zu bewegen:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die Werte der verschiedenen Achsenpositionen individuell zu setzen.

## Verlaufshintergründe

Ein Verlauf — wenn als Hintergrund verwendet — verhält sich wie ein Bild und wird ebenfalls mit der Eigenschaft {{cssxref("background-image")}} gesetzt.

Sie können mehr über die verschiedenen Arten von Verläufen und die Dinge, die Sie mit ihnen machen können, auf der MDN-Seite zum [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp lesen. Eine lustige Möglichkeit, mit Verläufen zu experimentieren, ist die Nutzung eines der vielen verfügbaren CSS-Verlaufsgeneratoren im Internet, wie [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn generiert.

Probieren Sie im folgenden Beispiel verschiedene Verläufe aus. In den beiden Kästen haben wir jeweils einen linearen Verlauf, der über den gesamten Kasten gestreckt wird, und einen radialen Verlauf mit einer festgelegten Größe, der sich daher wiederholt.

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

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an, indem Sie jeden Wert mit einem Komma trennen.

Dabei können Hintergrundbilder übereinander liegen. Die Hintergründe werden mit dem zuletzt aufgeführten Hintergrundbild unten im Stapel angeordnet, und jedes vorherige Bild stapelt sich auf demjenigen, das im Code darauf folgt.

> [!NOTE]
> Verläufe können problemlos mit normalen Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls durch Kommas getrennte Werte auf die gleiche Weise wie `background-image` haben:

```css
background-image:
  url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften stimmt mit den Werten in derselben Position in den anderen Eigenschaften überein. In obigem Beispiel wird `image1` der `background-repeat`-Wert `no-repeat` zugeordnet. Was geschieht jedoch, wenn unterschiedliche Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die geringere Werteanzahl zyklisch verwendet wird — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten zwei Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie wieder von vorne durchlaufen — `image3` wird der erste Positionswert zugewiesen und `image4` der zweite Positionswert.

Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder in der Liste zu ändern. Oder experimentieren Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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

## Hintergrund-Anhang

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Angabe, wie sie sich beim Scrollen des Inhalts verhalten. Dies wird mit der Eigenschaft {{cssxref("background-attachment")}} gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund eines Elements beim Scrollen der Seite scrollt. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. In der Wirkung ist der Hintergrund an derselben Position auf der Seite fixiert, sodass er sich bewegt, wenn die Seite gescrollt wird.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Ansichtsfenster fixiert wird, sodass er beim Scrollen der Seite oder des Elementinhalts nicht scrollt. Er bleibt immer in derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf das es gesetzt ist, sodass beim Scrollen des Elements der Hintergrund mitscrollt.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur eine Auswirkung, wenn es Inhalt zum Scrollen gibt. Daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch den [Quellcode hier](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) an).

## Verwendung der Kurzformeigenschaft für den Hintergrund

Wie zu Beginn dieser Lektion erwähnt, werden Sie häufig Hintergründe sehen, die mit der Eigenschaft {{cssxref("background")}} spezifiziert werden. Diese Kurzform erlaubt es Ihnen, alle verschiedenen Eigenschaften auf einmal festzulegen.

Bei Verwendung mehrerer Hintergründe müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann den nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit Größe und Position, dann ein Bild als Hintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Kurzformwerten für Hintergrundbilder befolgt werden müssen, z.B.:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` hinzugefügt werden, getrennt durch das '/'-Zeichen, so: `center/80%`.

Sehen Sie sich die MDN-Seite zu {{cssxref("background")}} an, um alle Überlegungen zu sehen.

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

Wenn Sie Text auf einem Hintergrundbild oder einer Farbe platzieren, sollten Sie darauf achten, dass Sie ausreichend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn ein Bild angegeben wird und Text darauf platziert wird, sollten Sie außerdem eine `background-color` angeben, die es ermöglicht, dass der Text lesbar ist, falls das Bild nicht geladen wird.

Bildschirmlesegeräte können Hintergrundbilder nicht analysieren; daher sollten sie rein dekorativ sein. Jeder wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten.

## Rahmen

Beim Lernen über das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unseres Kastens beeinflussen. In dieser Lektion werden wir untersuchen, wie Rahmen kreativ genutzt werden können. Normalerweise, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir eine Kurzform-Eigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer CSS-Zeile setzt.

Wir können einen Rahmen für alle vier Seiten eines Kastens mit {{cssxref("border")}} setzen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Seite des Kastens gezielt ansprechen, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die individuellen Eigenschaften umfassen die Kurzformeigenschaften {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt Langformeigenschaften für Breite, Stil und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Rahmen-Eigenschaften haben auch zugeordnete [_logische_ Rahmen-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z.B. links-nach-rechts oder rechts-nach-links Text, oder oben-nach-unten). Wir werden diese in der Lektion über das [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) erkunden.

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
  color: #fff;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", "200px")}}

## Abgerundete Ecken

Das Abrunden von Ecken auf einem Kasten wird mit der Eigenschaft {{cssxref("border-radius")}} erreicht und den zugehörigen Langformen, die sich auf jede Ecke des Kastens beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert an, der für beide verwendet wird.

Zum Beispiel, um alle vier Ecken eines Kastens mit einem Radius von 10px zu versehen:

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
> Wie bei den Rahmen-Eigenschaften oben, haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ Rahmenradius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben im folgenden Beispiel alle vier Ecken gesetzt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu gestalten. Sie können mit den Werten spielen, um die Ecken zu ändern. Sehen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann genutzt werden, um abgerundete Ecken-Werte für Sie auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Sie sehen, dass es einiges braucht, um einem Kasten einen Hintergrund oder einen Rahmen hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier diskutierten Funktionen erfahren möchten. Fast jede Seite auf MDN enthält Beispiele zum Ausprobieren, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufs lernen, das bestimmt, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Element-Kasten zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
