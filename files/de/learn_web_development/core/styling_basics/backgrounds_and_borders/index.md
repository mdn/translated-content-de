---
title: Hintergründe und Ränder
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir einige der kreativen Dinge betrachten, die Sie mit CSS-Hintergründen und Rändern tun können. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken sind Hintergründe und Ränder die Antwort auf viele Styling-Fragen in CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
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
          <li>Größe, Wiederholung, Position und Anhaftung von Hintergrundbildern.</li>
          <li>Hintergrundverläufe — allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind fortgeschrittener; tiefgehendes Wissen ist in diesem Stadium nicht erforderlich.)</li>
          <li>Barrierefreiheit von Hintergründen — sicherstellen eines guten Kontrasts.</li>
          <li>Grundlagen der Ränder — Breite, Stil, Farbe und Rand-Abkürzung. Radius der Ränder für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}} Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Die Eigenschaft akzeptiert jeden gültigen [`<color>`](/de/docs/Web/CSS/color_value). Eine `background-color` erstreckt sich unter dem Inhalt und dem Padding-Bereich des Elements.

Im untenstehenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie das Beispiel zu bearbeiten und die angegebenen Farben mit beliebigen verfügbaren [`<color>`](/de/docs/Web/CSS/color_value) Werten auszutauschen.

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

Die {{cssxref("background-image")}} Eigenschaft ermöglicht die Anzeige eines Bildes im Hintergrund eines Elements. Im Beispiel unten haben wir zwei Boxen — eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild eines einzelnen Sterns ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Dieses Beispiel zeigt zwei Dinge über Hintergrundbilder. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, weshalb wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie neben einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt.
Versuchen Sie, im obigen Beispiel eine `background-color` Eigenschaft hinzuzufügen, um das in Aktion zu sehen.

### Kontrolle der Hintergrund-Wiederholung

Die {{cssxref("background-repeat")}} Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund insgesamt wiederholt wird.
- `repeat-x` — horizontal wiederholen.
- `repeat-y` — vertikal wiederholen.
- `repeat` — die Standardeinstellung; wiederholt in beiden Richtungen.
- `space` — so oft wie möglich wiederholen und bei vorhandenem zusätzlichen Platz Räume zwischen den Bildern hinzufügen.
- `round` — ähnlich wie `space`, streckt jedoch die Bilder, um jeden zusätzlichen Raum auszufüllen.

Probieren Sie diese Werte im untenstehenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Versuchen Sie die verschiedenen Werte, um zu sehen, welche Effekte sie haben.

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

### Größenanpassung des Hintergrundbildes

Das im ursprünglichen Hintergrundbilder-Beispiel verwendete _balloons.jpg_ ist ein großes Bild, das aufgrund seiner Größe größer als das Element, in dem es sich befindet, beschnitten wurde. In diesem Fall können wir die {{cssxref("background-size")}} Eigenschaft verwenden, um das Bild so anzupassen, dass es innerhalb des Hintergrunds passt.

`background-size` kann zwei {{cssxref("length")}} oder {{cssxref("percentage")}} Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung anzugeben, oder die folgenden Schlüsselwörter:

- `cover` — Der Browser macht das Bild gerade groß genug, damit es den gesamten Box-Bereich vollständig abdeckt, wobei das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird ein Teil des Bildes wahrscheinlich außerhalb der Box enden.
- `contain` — Der Browser macht das Bild in der richtigen Größe, um in die Box zu passen. In diesem Fall können Lücken auf beiden Seiten oder oben und unten des Bildes entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

#### Experimentieren mit `background-size`

Im untenstehenden Beispiel wurden der _balloons.jpg_ Bildgrößen mit Länge-Einheiten festgelegt, um es in die Box einzupassen. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie folgendes:

- Ändern Sie die Länge-Einheiten, die zur Änderung der Hintergrundgröße verwendet werden.
- Entfernen Sie die Länge-Einheiten und sehen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Skalieren Sie das Bild kleiner als die Box und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

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
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-size: 80px 10em;
}
```

{{EmbedLiveSample("size")}}

### Positionierung des Hintergrundbildes

Die {{cssxref("background-position")}} Eigenschaft ermöglicht es Ihnen, die Position des Hintergrundbildes auf der Box, auf die es angewendet wird, zu wählen. Dies verwendet ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achse positioniert wird.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die am häufigsten verwendeten `background-position` Werte nehmen zwei individuelle Werte an — einen horizontalen Wert, gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der {{cssxref("background-position")}} Seite an):

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

Sie können auch Schlüsselwortwerte mit Längen oder Prozentsätzen mischen, wobei der erste Wert die horizontale Position und der zweite die vertikale Position betrifft. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine 4-Wert-Syntax verwenden, um einen Abstand von bestimmten Rändern der Box anzugeben. Jedes Wertepaar repräsentiert den Rand der Box, von dem aus abgesetzt wird, und die Größe des Abstands von diesem Rand. Im untenstehenden Schnipsel positionieren wir den Hintergrund `20px` vom `top` und `10px` vom `right`:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Experimentieren mit `background-position`

Verwenden Sie das untenstehende Beispiel, um mit diesen Werten zu experimentieren und den Stern innerhalb der Box zu bewegen:

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
> Anstelle der {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} Eigenschaften, die Ihnen ermöglichen, die verschiedenen Achsenpositionswerte einzeln festzulegen, wird die Abkürzung `background-position` verwendet.

## Verlaufs-Hintergründe

Ein Verlauf – wenn er für einen Hintergrund verwendet wird – verhält sich wie ein Bild und wird auch über die {{cssxref("background-image")}} Eigenschaft eingestellt.

Sie können sich die verschiedenen Arten des Verlaufswertes und Dinge, die Sie damit tun können, auf der MDN-Seite für den [`<gradient>`](/de/docs/Web/CSS/gradient) Datentyp ansehen.

Probieren Sie einige verschiedene Verlaufswerte im untenstehenden Beispiel. Anfangs haben wir einen linearen Verlauf, der über die ganze erste Box gestreckt ist, und einen radialen Verlauf mit einer festgelegten Größe, der über die zweite Box wiederholt wird.

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
> Eine unterhaltsame Möglichkeit, mit Verläufen herumzuspielen, ist die Verwendung eines der vielen im Web verfügbaren CSS-Verlaufs-Generatoren, wie z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode, der ihn generiert, kopieren und einfügen.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzigen Deklaration anzugeben. Dies tun Sie, indem Sie mehrere `background-image` Werte angeben, die durch Kommas getrennt sind.

Wenn Sie dies tun, können sich Hintergrundbilder überlappen. Die Hintergründe werden so geschichtet, dass das zuletzt angegebene Hintergrundbild unten im Stapel liegt und jedes vorherige Bild über dem folgenden im Code gestapelt wird.

> [!NOTE]
> Verläufe können fröhlich mit regulären Hintergrundbildern gemischt werden.

Auch die anderen `background-*` Eigenschaften können in gleicher Weise wie `background-image` kommagetrennte Werte haben:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften wird mit den Werten in derselben Position in den anderen Eigenschaften übereinstimmen. Im obenstehenden Beispiel wird z. B. `image1`'s `background-repeat` Wert `no-repeat` sein. Was passiert jedoch, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die kleineren Anzahlen von Werten zirkulieren – im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann zirkulieren sie wieder zurück – `image3` wird der erste Positionswert gegeben und `image4` wird der zweite Positionswert gegeben.

### Experimentieren mit mehreren Hintergrundbildern

Lass uns spielen. Das untenstehende Beispiel enthält zwei Hintergrundbilder. Versuchen Sie, das Beispiel wie folgt zu bearbeiten:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge, in der die Hintergrundbilder in der Liste erscheinen, zu ändern.
- Fügen Sie einige andere `background-*` Eigenschaften hinzu, um die Position, Größe oder den Wiederholungswert der Bilder zu ändern.
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

## Hintergrund-Anhaftung

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Spezifizierung, wie sie scrollen, wenn der Inhalt scrollt. Dies wird mittels der {{cssxref("background-attachment")}} Eigenschaft gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements scrollt, wenn die Seite gescrollt wird. Wenn der Elementinhalt gescrollt wird, bewegt sich der Hintergrund nicht. Effektiv ist der Hintergrund an derselben Position auf der Seite fixiert, sodass er scrollt, wenn die Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements an den Ansichtsbereich (Viewport) fixiert wird, sodass er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf dem er eingestellt ist, sodass wenn Sie das Element scrollen, der Hintergrund mit scrollt.

Die {{cssxref("background-attachment")}} Eigenschaft hat nur eine Wirkung, wenn es Inhalte gibt, die gescrollt werden können. Wir haben eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) an (siehe auch [den Quellcode](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier).

## Verwendung der Hintergrund-Abkürzungseigenschaft

Sie werden oft sehen, dass Hintergründe mithilfe der {{cssxref("background")}} Abkürzungseigenschaft spezifiziert werden, die es Ihnen ermöglicht, alle verschiedenen Eigenschaften auf einmal einzustellen.

Wenn mehrere Hintergründe verwendet werden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben und dann den nächsten Hintergrund nach einem Komma hinzufügen. Im untenstehenden Beispiel haben wir einen Verlauf mit Größe und Position, dann einen Hintergrund mit einem Bild mit `no-repeat` und einer Position, dann eine Farbe.

Es gibt einige Regeln, die beim Schreiben von Hintergrund-Abkürzungswerten beachtet werden müssen, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` enthalten sein, getrennt durch das `/` Zeichen, so: `center/80%`.

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

## Überlegungen zur Barrierefreiheit bei Hintergründen

Beim Platzieren von Text auf einem Hintergrundbild oder einer Farbe sollten Sie darauf achten, dass Sie genug [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit Textinhalten darüber spezifizieren, sollten Sie auch eine `background-color` angeben, die den Text lesbar macht, wenn das Bild nicht geladen wird.

Bildschirmleser können Hintergrundbilder nicht interpretieren; sie sollten daher rein dekorativ sein. Alle wichtigen Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrund enthalten sein.

## Ränder

Beim Lernen über das [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Ränder die Größe unserer Box beeinflussen. In dieser Lektion werden wir untersuchen, wie man Ränder kreativ verwendet.

Typischerweise verwenden wir beim Hinzufügen von Rändern zu einem Element mit CSS die {{cssxref("border")}} Abkürzungseigenschaft, um die Farbe, die Breite und [Stil](/de/docs/Web/CSS/line-style) des Randes auf allen vier Seiten einer Box in einer Deklaration festzulegen:

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

Die individuellen Eigenschaften umfassen die {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}} Abkürzungseigenschaften:

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
> Diese oberen, rechten, unteren und linken Rand-Eigenschaften haben auch gemappte [_logische_ Rand-Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties), die mit der Schreibrichtung des Dokuments zusammenhängen (z. B. von links nach rechts oder von rechts nach links Text, oder von oben nach unten). Sie können darüber in [Umgang mit verschiedenen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Experimentieren mit Rändern

Es gibt eine Vielzahl von Stilen, die Sie für Ränder verwenden können. Im untenstehenden Beispiel haben wir zwei verschiedene Randstile für die Box und zwei verschiedene Randstile für die Überschrift verwendet. Spielen Sie mit dem Randstil, der Breite und der Farbe, um zu sehen, wie Ränder funktionieren.

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

Sie können einer Box abgerundete Ecken mithilfe der {{cssxref("border-radius")}} Eigenschaft und der zugehörigen Langhands hinzufügen, die sich auf jede Ecke der Box beziehen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In vielen Fällen geben Sie nur einen Wert ein, der für beide verwendet wird.

Zum Beispiel, um allen vier Ecken einer Box einen `10px` Radius zu geben:

```css
.box {
  border-radius: 10px;
}
```

Oder um der oberen rechten Ecke einen horizontalen Radius von `1em` und einen vertikalen von `10%` zu geben:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den oben genannten Randeigenschaften haben auch diese border-radius Eigenschaften gemappte [_logische_ border-radius Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values#properties).

### Experimentieren mit dem Radius der Ränder

Wir haben im untenstehenden Beispiel alle vier Ecken eingestellt und dann die Werte für die obere rechte Ecke geändert, um sie unterschiedlich zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Werfen Sie einen Blick auf die Eigenschaftsseite von {{cssxref("border-radius")}}, um die verfügbaren Syntax-Optionen zu sehen. Der [border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um Werte für abgerundete Ecken für Sie auszugeben.

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

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Hintergründe und Ränder](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders).

## Zusammenfassung

Sie können sehen, dass es ziemlich viel dazu gibt, einen Hintergrund oder einen Rand zu einer Box hinzuzufügen. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier diskutierten Features herausfinden möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie spielen können, um Ihr Wissen zu vertiefen.

Im nächsten Artikel werden wir mehr über das Konzept des Überlaufs lernen, das bestimmt, was passiert, wenn zu viel Inhalt vorhanden ist, um in eine Elementbox zu passen.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Overflow", "Learn_web_development/Core/Styling_basics")}}
