---
title: Hintergründe und Rahmen
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
l10n:
  sourceCommit: 198d4613e48ec627c860551526131f363f244d36
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In dieser Lektion werfen wir einen Blick auf einige der kreativen Dinge, die Sie mit CSS-Hintergründen und Rahmen tun können. Von der Hinzufügung von Farbverläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Stilfragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man den Hintergrund und den Rahmen von Boxen stylt.</td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS stylen

Die CSS-{{cssxref("background")}}-Eigenschaft ist eine Kurzform für eine Reihe von Hintergrundeigenschaften in Langform, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrundeigenschaft in einem Stylesheet entdecken, könnte es auf den ersten Blick etwas schwer verständlich sein, da so viele Werte auf einmal übergeben werden können:

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

Später im Tutorial werden wir darauf zurückkommen, wie die Kurzform funktioniert, aber zunächst sehen wir uns die verschiedenen Möglichkeiten an, die Sie mit Hintergründen in CSS haben, indem wir die einzelnen Hintergrundeigenschaften betrachten.

### Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color`-Eigenschaft erstreckt sich unterhalb des Inhalts und des Padding-Bereichs des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um der Box, einer Überschrift, und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen. Probieren Sie es selbst aus, indem Sie einen beliebigen verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Wert verwenden.

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

### Hintergrundbilder

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht es, ein Bild im Hintergrund eines Elements anzuzeigen. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, so dass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie eine Hintergrundfarbe zusätzlich zu einem Hintergrundbild angeben, wird das Bild über der Farbe angezeigt. Versuchen Sie, eine `background-color`-Eigenschaft im obigen Beispiel hinzuzufügen, um dies in Aktion zu sehen.

#### Steuerung der Wiederholung von Hintergrundbildern

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund sich wiederholt.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standardwert; wiederholt in beiden Richtungen.
- `space` — wiederholt so oft wie möglich und fügt zusätzlichen Raum zwischen den Bildern hinzu, wenn Platz vorhanden ist.
- `round` — ähnlich wie `space`, aber streckt die Bilder, um zusätzlichen Raum zu füllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Testen Sie die unterschiedlichen Werte — `repeat-x` und `repeat-y` — um deren Auswirkungen zu sehen.

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

#### Größe des Hintergrundbildes

Das _balloons.jpg_-Bild, das im ursprünglichen Hintergrundbild-Beispiel verwendet wurde, ist ein großes Bild, das aufgrund der größeren Größe als das Element, dessen Hintergrund es ist, zugeschnitten wurde. In diesem Fall könnten wir die {{cssxref("background-size")}}-Eigenschaft verwenden, die {{cssxref("length")}} oder {{cssxref("percentage")}} Werte annehmen kann, um die Bildgröße an die Hintergrundgröße anzupassen.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild gerade so groß, dass es den gesamten Boxbereich abdeckt und dabei sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb der Box landen.
- `contain` — der Browser macht das Bild in der Größe passend für die Box. In diesem Fall können auf beiden Seiten oder oben und unten des Bildes Lücken entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten hat das _balloons.jpg_-Bild Längeneinheiten zugewiesen bekommen, um es in der Box zu skalieren. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes.

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

#### Positionierung des Hintergrundbildes

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es, die Position auszuwählen, an der das Hintergrundbild auf der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die gängigsten `background-position`-Werte nehmen zwei einzelne Werte an — einen horizontalen Wert, gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (lesen Sie die anderen auf der {{cssxref("background-position")}}-Seite nach):

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert sich auf die horizontale Position oder den Versatz beziehen muss und der zweite auf die vertikale. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Längeneinheit ist in diesem Fall ein Versatz vom vorhergehenden Wert. In dem unten stehenden CSS positionieren wir den Hintergrund 20px vom oberen Rand und 10px vom rechten Rand:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es ermöglichen, die unterschiedlichen Achsenpositionswerte einzeln festzulegen.

### Hintergrund-Verläufe

Ein Verlauf — wenn er für einen Hintergrund verwendet wird — verhält sich genau wie ein Bild und wird ebenfalls mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können mehr über die verschiedenen Arten von Verläufen und die Dinge, die Sie mit ihnen tun können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient)-Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Verläufen zu experimentieren, ist die Verwendung eines der vielen CSS-Verlaufsgeneratoren, die im Internet verfügbar sind, wie z.B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn generiert.

Probieren Sie einige verschiedene Verläufe im folgenden Beispiel aus. In den beiden Boxen haben wir einen linearen Verlauf, der über die gesamte Box gestreckt ist, und einen radialen Verlauf mit einer festgelegten Größe, der daher wiederholt wird.

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

### Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image` Werte in einem einzigen Eigenschaftswert an, wobei jeder Wert durch ein Komma getrennt wird.

Wenn Sie dies tun, können Sie am Ende übereinander liegende Hintergrundbilder haben. Die Hintergründe werden mit dem zuletzt angegebenen Hintergrundbild ganz unten im Stapel und jedem vorherigen Bild oben auf dem folgenden Bild in der Reihenfolge des Codes gestapelt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls kommagetrennte Werte auf die gleiche Weise wie `background-image` haben:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird den Werten an der jeweiligen Position in den anderen Eigenschaften zugeordnet. Im obigen Beispiel wird `image1`'s `background-repeat`-Wert `no-repeat` sein. Was passiert jedoch, wenn unterschiedliche Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die kleinere Anzahl von Werten wiederholt wird — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten zwei Positionswerte werden auf die ersten zwei Bilder angewendet, dann wird von vorne begonnen — `image3` erhält den ersten Positionswert und `image4` erhält den zweiten Positionswert.

Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, das erste Hintergrundbild in der Liste zu ändern. Oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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

### Hintergrund-Anhang

Eine weitere Option, die wir für Hintergründe verfügbar haben, ist die Angabe, wie sie beim Scrollen des Inhalts scrollen. Dies wird mit der {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund ist in derselben Position auf der Seite fixiert, scrollt also, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements am Anzeigefenster fixiert wird, sodass er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an dem Element, auf dem er festgelegt ist, sodass beim Scrollen des Elements auch der Hintergrund scrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur eine Wirkung, wenn es Inhalt zum Scrollen gibt. Wir haben eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch den [Quellcode hier](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) an).

### Verwenden der Kurzform-Eigenschaft für den Hintergrund

Wie zu Beginn dieser Lektion erwähnt, sehen Sie häufig, dass Hintergründe mit der {{cssxref("background")}}-Eigenschaft angegeben werden. Diese Kurzform ermöglicht es, alle verschiedenen Eigenschaften gleichzeitig festzulegen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und Position, dann einen Bildhintergrund mit `no-repeat` und einer Position und schließlich eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Hintergrund-Kurzformwerten beachtet werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` unter Verwendung des '/'-Zeichens eingeschlossen werden, so: `center/80%`.

Schauen Sie sich die MDN-Seite für {{cssxref("background")}} an, um alle Überlegungen zu sehen.

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

### Barrierefreiheitserwägungen bei Hintergründen

Beim Platzieren von Text über einem Hintergrundbild oder -farbe sollten Sie darauf achten, dass Sie ausreichend [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben und wenn Text über diesem Bild platziert wird, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text lesbar zu machen, wenn das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht analysieren; daher sollten sie rein dekorativ sein. Jeder wichtige Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Erlernen des Boxmodells haben wir herausgefunden, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion betrachten wir, wie man Rahmen kreativ einsetzt. Typischerweise, wenn wir einem Element mit CSS Rahmen hinzufügen, verwenden wir eine Kurzform-Eigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

Wir können einen Rahmen für alle vier Seiten einer Box mit {{cssxref("border")}} festlegen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante der Box anvisieren, beispielsweise:

```css
.box {
  border-top: 1px solid black;
}
```

Die einzelnen Eigenschaften beinhalten die Kurzformeigenschaften für {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

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
> Diese oberen, rechten, unteren und linken Rahmeneigenschaften haben auch zugeordnete [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z.B. links-nach-rechts oder rechts-nach-links Text oder oben-nach-unten). Wir werden diese im nächsten Abschnitt erkunden, der das [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) behandelt.

Es gibt verschiedene Stile, die Sie für Rahmen verwenden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

### Abgerundete Ecken

Abgerundete Ecken an einer Box werden durch die {{cssxref("border-radius")}}-Eigenschaft und zugehörige Langformen erzielt, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

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
> Wie bei den obigen Rahmeneigenschaften haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im Beispiel unten festgelegt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Werfen Sie einen Blick auf die Eigenschaftsseite für {{cssxref("border-radius")}}, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckwerte für Sie auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weiterführende Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Wir haben hier ziemlich viel abgedeckt, und Sie können sehen, dass es einiges gibt, um einem Kasten einen Hintergrund oder einen Rahmen hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Fast jede Seite auf MDN enthält Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir herausfinden, wie der Schreibmodus Ihres Dokuments mit Ihrem CSS interagiert. Was passiert, wenn der Text nicht von links nach rechts fließt?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
