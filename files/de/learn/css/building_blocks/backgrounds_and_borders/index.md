---
title: Hintergründe und Rahmen
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

In dieser Lektion werfen wir einen Blick auf einige kreative Möglichkeiten, die Sie mit CSS-Hintergründen und Rahmen umsetzen können. Vom Hinzufügen von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Rahmen die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Arbeit mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">Erste Schritte mit CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen, wie man den Hintergrund und den Rahmen von Boxen gestaltet.</td>
    </tr>
  </tbody>
</table>

## Hintergründe in CSS gestalten

Die CSS-{{cssxref("background")}}-Eigenschaft ist eine Kurzform für eine Reihe von Hintergrund-Langformen, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrund-Eigenschaft in einem Stylesheet entdecken, könnte sie zunächst etwas schwer verständlich erscheinen, da viele Werte gleichzeitig übergeben werden können:

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber lassen Sie uns zuerst die verschiedenen Dinge betrachten, die Sie mit Hintergründen in CSS machen können, indem wir uns die einzelnen Hintergrundeigenschaften ansehen.

### Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe für jedes Element in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter dem Inhalt und dem Padding-Bereich des Elements.

Im Beispiel unten haben wir verschiedene Farbwerte genutzt, um der Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.
Probieren Sie dies selbst aus, indem Sie beliebige verfügbare [`<color>`](/de/docs/Web/CSS/color_value) nutzen.

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

Die {{cssxref("background-image")}}-Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer ist als die Box ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt ist, um die Box zu füllen.

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
Versuchen Sie, eine `background-color`-Eigenschaft zum obigen Beispiel hinzuzufügen, um dies in Aktion zu sehen.

#### Kontrolle über die Wiederholung des Hintergrunds

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert das Wiederholen des Hintergrunds insgesamt.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — der Standardwert; in beide Richtungen wiederholen.
- `space` — so oft wie möglich wiederholen, dabei bei verfügbarem zusätzlichen Platz den verfügbaren Raum zwischen den Bildern ausfüllen.
- `round` — ähnlich wie `space`, jedoch wird das Bild gestreckt, um jeden zusätzlichen Platz zu füllen.

Probieren Sie diese Werte im Beispiel unten aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie verschiedene Werte wie `repeat-x` und `repeat-y` aus, um deren Effekte zu sehen.

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

#### Das Hintergrundbild skalieren

Das _balloons.jpg_-Bild, das im ursprünglichen Hintergrundbildbeispiel verwendet wird, ist ein großes Bild, das aufgrund seiner größeren Größe als das Element, dessen Hintergrund es ist, abgeschnitten wurde. In diesem Fall könnten wir die {{cssxref("background-size")}}-Eigenschaft verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen kann, um die Größe des Bildes anzupassen, damit es in den Hintergrund passt.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser vergrößert das Bild gerade genug, damit es den gesamten Boxbereich vollständig abdeckt, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} erhalten bleibt. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb der Box enden.
- `contain` — der Browser passt die Bildgröße an, um es in die Box einzupassen. In diesem Fall können auf beiden Seiten oder oben und unten des Bildes Lücken entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im Beispiel unten wurde das _balloons.jpg_-Bild mit Längeneinheiten innerhalb der Box skaliert. Sie können sehen, dass das Bild dadurch verzerrt wurde.

Versuchen Sie Folgendes.

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

#### Positionierung des Hintergrundbildes

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box wird entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die häufigsten `background-position`-Werte nehmen zwei Einzelwerte — einen horizontalen Wert, gefolgt von einem vertikalen Wert.

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen. In diesem Fall muss der erste Wert die horizontale Position oder Versatz, und der zweite die vertikale sein. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Längeneinheit ist in diesem Fall ein Versatz von dem Wert, der ihr vorausgeht. So positionieren wir im folgenden CSS den Hintergrund 20px vom oberen und 10px vom rechten Rand:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Achsenpositionswerte individuell festzulegen.

### Verlaufs-Hintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — wirkt genauso wie ein Bild und wird ebenfalls mit der {{cssxref("background-image")}}-Eigenschaft festgelegt.

Sie können mehr über die verschiedenen Arten von Verläufen und die Dinge, die Sie mit ihnen machen können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, ist die Verwendung eines der vielen CSS-Verlaufs-Generatoren, die im Internet verfügbar sind, wie z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

Probieren Sie einige verschiedene Verläufe im folgenden Beispiel aus. In den beiden Boxen haben wir jeweils einen linearen Verlauf, der über die gesamte Box gezogen wird, und einen radialen Verlauf mit fester Größe, der daher wiederholt wird.

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

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an und trennen jeden mit einem Komma.

Wenn Sie dies tun, können Sie am Ende Hintergrundbilder haben, die sich überschneiden. Die Hintergründe werden in Schichten gestapelt, wobei das zuletzt angegebene Hintergrundbild am unteren Ende des Stapels liegt, und jedes vorherige Bild über dem folgenden im Code gestapelt wird.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können auch wie `background-image` durch Kommas getrennte Werte haben:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird mit den Werten an derselben Position in den anderen Eigenschaften abgeglichen. Im Beispiel oben wird beispielsweise der `background-repeat`-Wert von `image1` `no-repeat` sein. Aber was passiert, wenn verschiedene Eigenschaften unterschiedlich viele Werte haben? Die Antwort ist, dass sich die kleineren Zahlen von Werten wiederholen — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann werden sie wieder von vorne wiederholt — `image3` erhält den ersten Positionswert, und `image4` erhält den zweiten Positionswert.

Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, welches Hintergrundbild zuerst in der Liste erscheint, zu ändern. Oder spielen Sie mit den anderen Eigenschaften, um die Position, Größe oder Wiederholungswerte zu ändern.

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

Eine weitere Option, die wir für Hintergründe haben, ist die Spezifizierung, wie sie scrollen, wenn der Inhalt scrollt. Dies wird über die {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements mit der Seite scrollt. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Im Effekt wird der Hintergrund an derselben Position auf der Seite fixiert, sodass er scrollt, während die Seite scrollt.
- `fixed`: fixiert den Hintergrund des Elements so, dass er beim Scrollen der Seite oder des Elementinhalts nicht scrollt. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund auf das Element, auf dem er eingestellt ist, sodass beim Scrollen des Elements der Hintergrund mit diesem scrollt.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur Auswirkungen, wenn es Inhalt gibt, der gescrollt werden kann. Deshalb haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu veranschaulichen — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich hier auch den [Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) an).

### Verwendung der Hintergrund-Kurznotation

Wie am Anfang dieser Lektion erwähnt, werden Sie oft sehen, dass Hintergründe mittels der {{cssxref("background")}}-Eigenschaft angegeben werden. Diese Kurzform ermöglicht es Ihnen, alle verschiedenen Eigenschaften auf einmal festzulegen.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und Position, dann ein Bild-Hintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt ein paar Regeln, die beim Schreiben von Hintergrund-Kurzwerthaltungen beachtet werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` inklusive des Zeichens '/' enthalten sein, so: `center/80%`.

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

### Barrierefreiheitserwägungen bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder -farbe platzieren, sollten Sie darauf achten, dass Sie genug [Kontrast](/de/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild festlegen und wenn Text über diesem Bild platziert wird, sollten Sie auch eine `background-color` angeben, die den Text lesbar macht, wenn das Bild nicht geladen wird.

Bildschrimleser können Hintergrundbilder nicht parsen; daher sollten diese rein dekorativ sein. Wichtigere Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten.

## Rahmen

Beim Lernen über das Boxmodell haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion werden wir uns ansehen, wie man Rahmen kreativ verwenden kann. Typischerweise, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir eine Kurzform, die die Farbe, Breite und den [Style](/de/docs/Web/CSS/line-style) des Rahmens in einer Zeile CSS festlegt.

Wir können mit {{cssxref("border")}} einen Rand für alle vier Seiten einer Box festlegen:

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

Die einzelnen Eigenschaften beinhalten die {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}} Kurzformeigenschaften:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Es gibt Langformeigenschaften für Breite, Style und Farbe für jede der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Diese oberen, rechten, unteren und linken Randeigenschaften habe auch gemappte [_logische_ Randeigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf den Schreibmodus des Dokuments beziehen (z. B. links-nach-rechts oder rechts-nach-links-Text, oder oben-nach-unten). Diese werden wir in der nächsten Lektion erkunden, die sich mit dem [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) beschäftigt.

Es gibt eine Vielzahl von Styles, die Sie für Rahmen verwenden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit dem Rahmenstil, der Breite und der Farbe, um zu sehen, wie Rahmen funktionieren.

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

Das Abrunden von Ecken einer Box wird durch die {{cssxref("border-radius")}}-Eigenschaft und die dazugehörigen Langformen erreicht, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen werden Sie nur einen Wert übergeben, der dann für beide verwendet wird.

Zum Beispiel, um alle vier Ecken einer Box mit einem 10px Radius zu versehen:

```css
.box {
  border-radius: 10px;
}
```

Oder um der oberen rechten Ecke einen horizontalen Radius von `1em` und einen vertikalen Radius von 10% zu geben:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den Randeigenschaften oben, haben auch diese border-radius-Eigenschaften gemappte [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im folgenden Beispiel festgelegt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu gestalten. Sie können mit den Werten spielen, um die Ecken zu ändern. Sehen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Ihnen Werte für abgerundete Ecken auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn/CSS/Building_blocks/Test_your_skills_backgrounds_and_borders).

## Zusammenfassung

Wir haben hier sehr viel behandelt, und Sie können sehen, dass das Hinzufügen eines Hintergrunds oder eines Rahmens zu einer Box viele Aspekte haben kann. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier diskutierten Features erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie Ihr Wissen erweitern können.

Im nächsten Artikel werden wir erfahren, wie der Schreibmodus Ihres Dokuments mit Ihrem CSS interagiert. Was passiert, wenn der Text nicht von links nach rechts fließt?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
