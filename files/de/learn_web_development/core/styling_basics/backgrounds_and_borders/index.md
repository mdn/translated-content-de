---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werfen wir einen Blick auf einige der kreativen Dinge, die Sie mit CSS-Hintergründen und Rahmen machen können. Von der Hinzufügung von Verlaufsfarben, Hintergrundbildern und abgerundeten Ecken über Hintergründe und Rahmen sind sie die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studium von
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlagen der HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größen</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrund-Styling — Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Anheftung von Hintergrundbildern.</li>
          <li>Verlaufsfarben im Hintergrund — allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind komplexer; tiefgehendes Wissen ist zu diesem Zeitpunkt nicht erforderlich.)</li>
          <li>Barrierefreiheit von Hintergründen — ein guter Kontrast sicherstellen.</li>
          <li>Grundlagen von Rahmen — Breite, Stil, Farbe und Rahmen-Kurzform. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Styling von Hintergründen in CSS

Die CSS-Eigenschaft {{cssxref("background")}} ist eine Kurzform für mehrere Hintergrund-Langform-Eigenschaften, die wir in dieser Lektion kennenlernen werden. Wenn Sie eine komplexe Hintergrundeigenschaft in einem Stylesheet entdecken, kann sie zunächst schwer verständlich erscheinen, da so viele Werte gleichzeitig übergeben werden können:

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

Wir werden später im Tutorial darauf zurückkommen, wie die Kurzform funktioniert, aber zuerst schauen wir uns die verschiedenen Dinge an, die Sie mit Hintergründen in CSS machen können, indem wir die einzelnen Hintergrundeigenschaften betrachten.

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} definiert die Hintergrundfarbe jedes Elements in CSS. Die Eigenschaft akzeptiert jede gültige [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter dem Inhalt und dem Padding-Bereich des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte genutzt, um einem Kasten, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.
Probieren Sie dies selbst aus, indem Sie einen beliebigen verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Wert verwenden.

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

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in den Kasten zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um den Kasten zu füllen.

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

Wenn Sie neben einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt.
Fügen Sie dem obigen Beispiel eine `background-color` Eigenschaft hinzu, um dies in Aktion zu sehen.

### Steuerung der Hintergrund-Wiederholung

Die Eigenschaft {{cssxref("background-repeat")}} wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — stoppt die Hintergrundwiederholung vollständig.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — die Standardeinstellung; in beide Richtungen wiederholen.
- `space` — so oft wie möglich wiederholen, wobei zusätzlicher Platz zwischen den Bildern eingefügt wird, wenn zusätzlicher Platz zur Verfügung steht.
- `round` — ähnlich wie `space`, jedoch werden die Bilder gestreckt, um den zusätzlichen Platz zu füllen.

Probieren Sie diese Werte in dem folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Probieren Sie die verschiedenen Werte — `repeat-x` und `repeat-y` — aus, um deren Effekte zu sehen.

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

### Anpassen der Größe des Hintergrundbildes

Das in dem Beispiel für Hintergrundbilder verwendete Bild _balloons.jpg_ ist ein großes Bild, das auf Grund seiner Größe in der Box beschnitten wurde. In diesem Fall könnten wir die Eigenschaft {{cssxref("background-size")}} verwenden, die {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte akzeptiert, um das Bild so zu skalieren, dass es in den Hintergrund passt.

Sie können auch Schlüsselwörter verwenden:

- `cover` — der Browser macht das Bild groß genug, damit es den Boxbereich vollständig abdeckt und dabei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb der Box landen.
- `contain` — der Browser macht das Bild groß genug, um in die Box zu passen. In diesem Fall könnten Lücken an den Seiten oder oben und unten des Bildes entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

Im folgenden Beispiel wurde die Länge des _balloons.jpg_-Bildes so eingestellt, dass es in die Box passt. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

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

### Positionierung des Hintergrundbildes

Die Eigenschaft {{cssxref("background-position")}} ermöglicht es Ihnen, die Position festzulegen, an der das Hintergrundbild innerhalb der Box erscheint, auf die es angewendet wird. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert wird.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die am häufigsten verwendeten `background-position`-Werte bestehen aus zwei einzelnen Werten — einem horizontalen Wert, gefolgt von einem vertikalen Wert.

Sie können Schlüsselwörter wie `top` und `right` verwenden (siehe die anderen auf der {{cssxref("background-position")}}-Seite):

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

Und {{cssxref("length", "Längen")}} sowie {{cssxref("percentage", "Prozentsätze")}}:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei in diesem Fall der erste Wert die horizontale Position oder Verschiebung angibt und der zweite die vertikale. Zum Beispiel:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Werte-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben — die Länge in diesem Fall ist eine Verschiebung von dem vorausgehenden Wert. Im folgenden CSS positionieren wir den Hintergrund 20px von oben und 10px von rechts:

```css
.box {
  background-image: url(image.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

Verwenden Sie das folgende Beispiel, um mit diesen Werten zu spielen und den Stern innerhalb der Box zu bewegen:

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
> Die Kurzform `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es ermöglichen, die Positionen der verschiedenen Achsen individuell festzulegen.

## Verlaufs-Hintergründe

Ein Verlauf — wenn er als Hintergrund verwendet wird — verhält sich wie ein Bild und wird ebenfalls durch die Eigenschaft {{cssxref("background-image")}} festgelegt.

Sie können mehr über die verschiedenen Arten von Verläufen und Dinge, die Sie mit ihnen tun können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp lesen. Eine unterhaltsame Möglichkeit, mit Verläufen zu spielen, ist die Verwendung eines der vielen im Web verfügbaren CSS-Verlaufs-Generatoren, wie z.B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

Probieren Sie einige unterschiedliche Verläufe im folgenden Beispiel aus. In den beiden Boxen befindet sich ein linearer Verlauf, der über die gesamte Box gestreckt ist, und ein radialer Verlauf mit einer festgelegten Größe, der sich daher wiederholt.

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

Es ist auch möglich, mehrere Hintergrundbilder zu haben — Sie geben mehrere `background-image`-Werte in einem einzigen Eigenschaftswert an, wobei jeder mit einem Komma getrennt wird.

Wenn Sie dies tun, können sich die Hintergrundbilder überlappen. Die Hintergründe werden in der Reihenfolge von oben nach unten gestapelt, wobei das zuletzt angegebene Hintergrundbild unten im Stapel liegt und jedes vorherige Bild über dem folgenden im Code liegt.

> [!NOTE]
> Verläufe können problemlos mit regulären Hintergrundbildern gemischt werden.

Die anderen `background-*`-Eigenschaften können ebenfalls kommagetrennte Werte haben, genau wie `background-image`:

```css
background-image:
  url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird den Werten in derselben Position in den anderen Eigenschaften zugeordnet. Oben zum Beispiel wird `image1` den `background-repeat` Wert `no-repeat` haben. Aber was passiert, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die kleinere Anzahl der Werte wiederholt wird — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann beginnt der Zyklus von vorne — `image3` wird der erste Positionswert und `image4` der zweite Positionswert zugewiesen.

Lassen Sie uns spielen. Das folgende Beispiel enthält zwei Hintergrundbilder. Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge der Hintergrundbilder in der Liste zu ändern oder mit den anderen Eigenschaften zu spielen, um Position, Größe oder Wiederholungswerte zu ändern.

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

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Angabe, wie sie scrollen, wenn der Inhalt scrollt. Dies wird durch die Eigenschaft {{cssxref("background-attachment")}} gesteuert, die folgende Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements mitgescrollt wird, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund ist also an derselben Position auf der Seite fixiert, sodass er beim Scrollen der Seite gescrollt wird.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an das Ansichtsfenster fixiert wird, sodass er nicht scrollt, wenn die Seite oder der Inhalt des Elements gescrollt wird. Er verbleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf dem er gesetzt ist, sodass beim Scrollen des Elements der Hintergrund mit ihm gescrollt wird.

Die Eigenschaft {{cssxref("background-attachment")}} hat nur dann Auswirkungen, wenn es Inhalt gibt, der gescrollt werden kann. Daher haben wir eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (sehen Sie sich auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier an).

## Verwendung der background-Kurzform-Eigenschaft

Wie am Anfang dieser Lektion erwähnt, werden Hintergründe oft mit der Eigenschaft {{cssxref("background")}} angegeben. Diese Kurzform ermöglicht es Ihnen, alle verschiedenen Eigenschaften auf einmal festzulegen.

Wenn mehrere Hintergründe verwendet werden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben, dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im folgenden Beispiel haben wir einen Verlauf mit einer Größe und Position, dann einen Bildhintergrund mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Kurzformen für Hintergrundbilder beachtet werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert der `background-size` darf nur unmittelbar nach der `background-position` angegeben werden, getrennt durch das '/' Zeichen, so: `center/80%`.

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

## Barrierefreiheit Überlegungen bei Hintergründen

Wenn Text auf einem Hintergrundbild oder einer Farbe platziert wird, sollten Sie darauf achten, dass genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) vorhanden ist, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild angeben und Text darauf gesetzt wird, sollten Sie auch eine `background-color` angeben, die es ermöglicht, den Text lesbar zu halten, wenn das Bild nicht geladen wird.

Bildschirmleser können Hintergrundbilder nicht parsen; daher sollten diese rein dekorativ sein. Jeglicher wichtiger Inhalt sollte Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Rahmen

Beim Lernen über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unseres Kastens beeinflussen. In dieser Lektion werden wir sehen, wie man Rahmen kreativ verwenden kann. Typischerweise, wenn wir Rahmen zu einem Element mit CSS hinzufügen, verwenden wir eine Kurzform-Eigenschaft, die die Farbe, Breite und den [Stil](/de/docs/Web/CSS/line-style) des Rahmens in einer CSS-Zeile festlegt.

Wir können einem Elementrahmen für alle vier Seiten einen Rahmen mit {{cssxref("border")}} setzen:

```css
.box {
  border: 1px solid black;
}
```

Oder wir können eine Kante des Rahmens anvisieren, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Die individuellen Eigenschaften umfassen die Kurzformen {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

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
> Diese oberen, rechten, unteren und linken Rahmeneigenschaften haben auch zugeordnete [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links geschrieben, oder von oben nach unten). Wir werden diese im Abschnitt über den [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) erkunden.

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
  color: #fff;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", "200px")}}

## Abgerundete Ecken

Das Abrunden von Ecken an einer Box wird durch die Eigenschaft {{cssxref("border-radius")}} und zugehörige Langform-Eigenschaften erreicht, die sich auf jede Ecke der Box beziehen. Als Wert können zwei Längen oder Prozentsätze verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert an, der dann für beide verwendet wird.

Beispielsweise, um allen vier Ecken einer Box einen Radius von 10px zu geben:

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
> Wie bei den oben genannten Rahmeneigenschaften haben auch diese border-radius-Eigenschaften zugeordnete [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

Wir haben alle vier Ecken im folgenden Beispiel festgelegt und dann die Werte für die obere rechte Ecke geändert, um sie anders zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Schauen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Ecken-Werte für Sie auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Rahmen](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders).

## Zusammenfassung

Sie sehen, dass es eine Menge Möglichkeiten gibt, einem Kasten einen Hintergrund oder einen Rahmen hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Features erfahren möchten. Fast jede Seite auf MDN enthält Beispiele, mit denen Sie spielen können, um Ihr Wissen zu erweitern.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufens erfahren, das regelt, was passiert, wenn es zu viele Inhalte gibt, um in ein Elementfeld zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
