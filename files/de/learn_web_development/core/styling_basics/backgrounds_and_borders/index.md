---
title: Hintergründe und Ränder
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir einen Blick auf einige kreative Möglichkeiten werfen, die Sie mit CSS-Hintergründen und -Rändern umsetzen können. Von der Hinzufügung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Ränder die Antwort auf viele Stilfragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (siehe
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
          <li>Größe, Wiederholung, Position und Anhang von Hintergrundbildern.</li>
          <li>Hintergrundverläufe — grundlegendes Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind fortgeschrittener; gründliches Wissen ist an diesem Punkt nicht erforderlich.)</li>
          <li>Barrierefreiheit bei Hintergründen — gute Kontraste sicherstellen.</li>
          <li>Grundlagen der Ränder — Breite, Stil, Farbe und Rand-Kurzschreibweise. Borderradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe für jedes Element in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unterhalb des Inhalts- und Padding-Bereichs des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben mit verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Werten auszutauschen.

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

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur einen kleinen Teil davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt.
Versuchen Sie, dem obigen Beispiel eine `background-color`-Eigenschaft hinzuzufügen, um das in Aktion zu sehen.

### Steuerung der Hintergrundwiederholung

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert jegliche Wiederholung des Hintergrunds.
- `repeat-x` — Wiederholung horizontal.
- `repeat-y` — Wiederholung vertikal.
- `repeat` — der Standard; Wiederholung in beide Richtungen.
- `space` — Wiederholung so oft wie möglich, Hinzufügen von Leerstellen zwischen den Bildern, wenn zusätzlicher Platz vorhanden ist.
- `round` — ähnlich wie `space`, aber dehnt die Bilder aus, um zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Testen Sie die verschiedenen Werte, um ihre Effekte zu sehen.

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

### Die Größe des Hintergrundbildes

Das Bild _balloons.jpg_, das im ursprünglichen Hintergrundbildbeispiel verwendet wurde, ist ein großes Bild, das abgeschnitten wurde, weil es größer ist als das Element, dessen Hintergrund es ist. In diesem Fall können wir die {{cssxref("background-size")}}-Eigenschaft verwenden, um die Größe des Bildes an den Hintergrund anzupassen.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung zu spezifizieren, oder die folgenden Schlüsselwörter:

- `cover` — Der Browser macht das Bild gerade groß genug, um den gesamten Boxbereich zu bedecken, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb der Box enden.
- `contain` — Der Browser passt das Bild so an, dass es in die Box passt. In diesem Fall können Lücken an den Seiten oder oben und unten entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

#### Spielen mit `background-size`

Im folgenden Beispiel hat das Bild _balloons.jpg_ Längeneinheiten, um es passend in die Box einzufügen. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu ändern.
- Entfernen Sie die Längeneinheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Verkleinern Sie das Bild kleiner als die Box und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

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

### Positionieren des Hintergrundbildes

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf der Box erscheint. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gebräuchlichsten `background-position`-Werte nehmen zwei Einzelwerte an — einen horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der {{cssxref("background-position")}}-Seite an):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Sie können auch {{cssxref("length", "Längen")}} und {{cssxref("percentage", "Prozentangaben")}} verwenden:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentangaben mischen, in diesem Fall bezieht sich der erste Wert auf die horizontale Position und der zweite auf die vertikale Position. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben. Jedes Wertepaar repräsentiert die Kante der Box, von der der Abstand genommen wird, und die Größe des Abstands von dieser Kante. Im folgenden Ausschnitt positionieren wir den Hintergrund `20px` vom `top` und `10px` vom `right` entfernt:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spielen mit `background-position`

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
> Der Kurzbefehl `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, mit denen Sie die unterschiedlichen Achsenpositionen einzeln festlegen können.

## Verlaufs-Hintergründe

Ein Farbverlauf — wenn er für einen Hintergrund verwendet wird — wirkt genauso wie ein Bild und wird ebenfalls mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp mehr über die verschiedenen Arten von Farbverlaufwerten und deren Verwendungsmöglichkeiten erfahren.

Probieren Sie einige verschiedene Farbverlaufswerte im folgenden Beispiel aus. Zunächst haben wir einen linearen Verlauf, der über die gesamte erste Box gespannt ist, und einen radialen Verlauf mit fester Größe, der über die zweite Box wiederholt wird.

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
> Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, ist die Verwendung eines der vielen im Web verfügbaren CSS-Verlaufs-Generatoren, wie zum Beispiel [CSSGradient.io](https://cssgradient.io/). Sie können einen Farbverlauf erstellen und den Quellcode, der ihn erzeugt, kopieren und einfügen.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzigen Deklaration anzugeben. Dies tun Sie, indem Sie mehrere `background-image`-Werte durch Kommas getrennt angeben.

Wenn Sie dies tun, können Sie am Ende Hintergrundbilder haben, die sich überlappen. Die Hintergründe werden mit dem zuletzt aufgeführten Hintergrundbild unten im Stapel geschichtet, und jedes vorherige Bild überlagert das folgende in der Reihenfolge, in der es im Code erscheint.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*` Eigenschaften können ebenfalls durch Kommas getrennte Werte auf die gleiche Weise wie `background-image` annehmen:

```css
background-image:
  url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird mit den Werten in der gleichen Position in den anderen Eigenschaften abgeglichen. Oben zum Beispiel wird der `background-repeat`-Wert von `image1` `no-repeat` sein. Aber was passiert, wenn unterschiedliche Eigenschaften unterschiedliche Anzahl von Werten haben? Die Antwort ist, dass die kleineren Zahlen von Werten zyklisch verwendet werden — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten zwei Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie wieder von vorne verwendet — `image3` erhält den ersten Positionswert und `image4` den zweiten.

### Arbeiten mit mehreren Hintergrundbildern

Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Bearbeiten Sie das Beispiel wie folgt:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, welches Hintergrundbild zuerst in der Liste erscheint, zu ändern.
- Fügen Sie einige andere `background-*`-Eigenschaften hinzu, um die Position, Größe oder den Wiederholungswert der Bilder zu ändern.
- Versuchen Sie, einen Farbverlauf als drittes `background-image` hinzuzufügen.

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

## Hintergrundanhang

Eine weitere Option, die wir für Hintergründe haben, ist die Angabe, wie sie beim Scrollen des Inhalts scrollen. Dies wird mit der {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements beim Scrollen der Seite scrollt. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Tatsächlich ist der Hintergrund fest mit derselben Position auf der Seite verbunden, sodass er beim Scrollen der Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Ansichtsfenster befestigt ist, damit er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: befestigt den Hintergrund an dem Element, auf dem er gesetzt ist, sodass, wenn Sie das Element scrollen, der Hintergrund mit ihm scrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur dann eine Auswirkung, wenn es Inhalt zum Scrollen gibt, daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — sehen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch [den Quellcode hier](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) an).

## Verwendung der Kurzform der Hintergrund-Eigenschaft

Sie werden oft sehen, dass Hintergründe mit der {{cssxref("background")}}-Kurzform-Eigenschaft spezifiziert werden, die es Ihnen ermöglicht, alle verschiedenen Eigenschaften gleichzeitig festzulegen.

Wenn mehrere Hintergründe verwendet werden, müssen Sie alle Eigenschaften des ersten Hintergrunds angeben und dann nach einem Komma Ihren nächsten Hintergrund hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit Größe und Position, dann ein Bildhintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Hintergrund-Kurzformwerten befolgt werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das `/`-Zeichen, so: `center/80%`.

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
    url(https://mdn.github.io/shared-assets/images/examples/big-star.png) center
      no-repeat,
    rebeccapurple;
}
```

{{EmbedLiveSample("background", "", "320px")}}

## Barrierefreiheitserwägungen bei Hintergründen

Wenn Sie Text auf einen Hintergrund mit Bild oder Farbe setzen, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit darüber liegendem Text angeben, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text lesbar zu machen, falls das Bild nicht geladen wird.

Bildschirmschreiber können Hintergrundbilder nicht analysieren; daher sollten sie rein dekorativ sein. Alle wichtigen Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Ränder

Beim Erlernen des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Ränder die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Ränder kreativ verwenden kann.

Typischerweise verwenden wir bei der Hinzufügung von Rändern zu einem Element mit CSS die {{cssxref("border")}}-Kurzform-Eigenschaft, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Randes an allen vier Seiten einer Box in einer Deklaration festzulegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können einen Rand der Box gezielt ansprechen, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften umfassen die {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}} Kurzform-Eigenschaften:

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
> Diese oberen, rechten, unteren und linken Rand-Eigenschaften haben auch zugeordnete [_logische_ Rand-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z. B. Links-nach-rechts oder Rechts-nach-links Text, oder oben-nach-unten). Sie können darüber in [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Arbeiten mit Rändern

Es gibt eine Vielzahl von Stilen, die Sie für Ränder verwenden können. Im folgenden Beispiel haben wir zwei verschiedene Randstile für die Box und zwei verschiedene Randstile für die Überschrift verwendet. Experimentieren Sie mit dem Randstil, der Breite und der Farbe, um zu sehen, wie Ränder funktionieren.

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

Sie können einer Box mit der {{cssxref("border-radius")}}-Eigenschaft und den zugehörigen Langformen, die sich auf jede Ecke der Box beziehen, abgerundete Ecken hinzufügen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius definiert und der zweite den vertikalen Radius. In vielen Fällen geben Sie nur einen Wert an, der für beide verwendet wird.

Zum Beispiel, um allen vier Ecken einer Box einen Radius von `10px` zu geben:

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
> Wie bei den obigen Rand-Eigenschaften haben diese border-radius-Eigenschaften auch zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

### Arbeiten mit Borderradius

Im folgenden Beispiel haben wir alle vier Ecken festgelegt und dann die Werte für die obere rechte Ecke geändert, um sie unterschiedlich zu gestalten. Sie können mit den Werten experimentieren, um die Ecken zu ändern. Auf der Eigenschaftsseite von {{cssxref("border-radius")}} sehen Sie die verfügbaren Syntaxoptionen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen abgerundete Eckwerte auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders).

## Zusammenfassung

Sie sehen, dass es ziemlich viel gibt, wenn Sie einem Kasten einen Hintergrund oder einen Rand hinzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Merkmale erfahren möchten. Auf fast jeder Seite auf MDN gibt es Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufs lernen, das bestimmt, was passiert, wenn zu viel Inhalt vorhanden ist, um in ein Element zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
