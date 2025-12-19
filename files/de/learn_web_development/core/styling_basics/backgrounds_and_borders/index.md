---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion werden wir uns einige der kreativen Dinge ansehen, die man mit CSS-Hintergründen und -Rahmen machen kann. Von der Hinzufügung von Verläufen, Hintergrundbildern und abgerundeten Ecken: Hintergründe und Rahmen sind die Antwort auf viele Styling-Fragen in CSS.

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
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Grundlegendes Hintergrundstyling — Farben und Bilder.</li>
          <li>Hintergrundbildgröße, Wiederholung, Position und Anhang.</li>
          <li>Hintergrundverläufe — allgemeines Konzept und lineare Verläufe (radiale, konische und wiederholende Verläufe sind komplexer; tiefere Kenntnisse sind auf diesem Niveau nicht erforderlich.)</li>
          <li>Überlegungen zur Zugänglichkeit von Hintergründen — Sicherstellen eines guten Kontrasts.</li>
          <li>Grundlagen der Rahmen — Breite, Stil, Farbe und Rahmen-Kurzschrift. Rahmenradius für abgerundete Ecken.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die {{cssxref("background-color")}}-Eigenschaft definiert die Hintergrundfarbe eines beliebigen Elements in CSS. Diese Eigenschaft akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}}. Eine `background-color` erstreckt sich unterhalb des Inhalts- und Padding-Bereichs eines Elements.

Im Beispiel unten haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe hinzuzufügen.

Versuchen Sie, das Beispiel zu bearbeiten und die angegebenen Farben mit beliebigen verfügbaren {{cssxref("&lt;color&gt;")}}-Werten auszutauschen.

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

Dieses Beispiel zeigt zwei Merkmale von Hintergrundbildern. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen, sodass wir nur eine kleine Ecke davon sehen, während das kleine Bild gekachelt wird, um die Box zu füllen.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, dann wird das Bild über der Farbe angezeigt. Versuchen Sie, eine `background-color`-Eigenschaft zum obigen Beispiel hinzuzufügen, um das in Aktion zu sehen.

### Steuerung der Hintergrundwiederholung

Die {{cssxref("background-repeat")}}-Eigenschaft wird verwendet, um das Kachelverhalten von Bildern zu steuern. Die verfügbaren Werte sind:

- `no-repeat` — verhindert, dass der Hintergrund überhaupt wiederholt wird.
- `repeat-x` — wiederholt horizontal.
- `repeat-y` — wiederholt vertikal.
- `repeat` — der Standard; wiederholt in beide Richtungen.
- `space` — wiederholt so oft wie möglich, fügt jedoch zwischen den Bildern Platz hinzu, wenn zusätzlicher Platz verfügbar ist.
- `round` — ähnlich wie `space`, dehnt jedoch die Bilder aus, um zusätzlichen Platz zu füllen.

Probieren Sie diese Werte im untenstehenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen werden. Testen Sie die verschiedenen Werte, um deren Auswirkungen zu sehen.

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

Das zuerst genutzte Hintergrundbild _balloons.jpg_ ist ein großes Bild, das aufgrund seiner Größe im Verhältnis zum Element beschnitten wurde. In diesem Fall können wir die {{cssxref("background-size")}}-Eigenschaft verwenden, um die Größe des Bildes an die Hintergrundgröße anzupassen.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte zur Angabe der Bildgröße in horizontaler und vertikaler Richtung annehmen oder die folgenden Schlüsselwörter:

- `cover` — der Browser vergrößert das Bild gerade so weit, dass es die Box vollständig bedeckt, während das {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehalten wird. In diesem Fall wird wahrscheinlich ein Teil des Bildes außerhalb der Box enden.
- `contain` — der Browser sorgt dafür, dass das Bild die passende Größe hat, um in die Box zu passen. In diesem Fall könnten auf beiden Seiten oder oben und unten des Bildes Lücken entstehen, wenn das Seitenverhältnis des Bildes von dem der Box abweicht.

#### Spiel mit `background-size`

Im Beispiel unten wurde dem _balloons.jpg_ Bild Längeneinheiten zugewiesen, damit es in die Box passt. Sie können sehen, dass dies das Bild verzerrt hat.

Versuchen Sie Folgendes:

- Ändern Sie die verwendeten Längeneinheiten, um die Größe des Hintergrunds zu verändern.
- Entfernen Sie die Längeneinheiten und testen Sie, was passiert, wenn Sie `background-size: cover` oder `background-size: contain` verwenden.
- Verkleinern Sie das Bild auf eine Größe kleiner als die Box und ändern Sie dann den Wert von `background-repeat`, um das Bild zu wiederholen.

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

Die {{cssxref("background-position")}}-Eigenschaft ermöglicht es Ihnen, die Position zu wählen, an der das Hintergrundbild auf der Box, auf die es angewendet wird, erscheint. Dies nutzt ein Koordinatensystem, bei dem die obere linke Ecke der Box `(0,0)` ist, und die Box entlang der horizontalen (`x`) und vertikalen (`y`) Achsen positioniert ist.

> [!NOTE]
> Der Standardwert für `background-position` ist `(0,0)`.

Die gebräuchlichsten `background-position`-Werte bestehen aus zwei einzelnen Werten — einem horizontalen Wert gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (sehen Sie sich die anderen auf der Seite für {{cssxref("background-position")}} an):

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

Sie können auch Schlüsselwert und Längen- oder Prozentsätze mischen, wobei sich der erste Wert auf die horizontale Position und der zweite auf die vertikale Position bezieht. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie auch eine Vier-Wert-Syntax verwenden, um einen Abstand von bestimmten Kanten der Box anzugeben. Jedes Wertepaar stellt die Boxkante dar, von der aus gemessen wird, und die Größe des Offsets von dieser Kante. Im untenstehenden Snippet positionieren wir den Hintergrund `20px` vom `top` und `10px` von der `right` entfernt:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Spiel mit `background-position`

Verwenden Sie das untenstehende Beispiel, um mit diesen Werten herumzuspielen und den Stern innerhalb der Box zu bewegen:

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
> Die Kurzschrift `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, die es Ihnen ermöglichen, die verschiedenen Achsenpositionswerte individuell einzustellen.

## Hintergrundverläufe

Ein Verlauf — wenn er als Hintergrund verwendet wird — verhält sich wie ein Bild und wird ebenfalls mit der {{cssxref("background-image")}}-Eigenschaft gesetzt.

Auf der MDN-Seite für den {{cssxref("gradient")}}-Datentyp können Sie mehr über die verschiedenen Arten von Verlaufswerten und die Möglichkeiten, die Sie damit haben, erfahren.

Probieren Sie einige verschiedene Verlaufswerte im untenstehenden Beispiel aus. Zuerst haben wir einen linearen Verlauf, der sich über die gesamte erste Box erstreckt, und einen radialen Verlauf mit einer festgelegten Größe, der sich im zweiten Kasten wiederholt.

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
> Ein unterhaltsamer Weg, um mit Verläufen zu spielen, ist die Nutzung eines der vielen online verfügbaren CSS-Verlaufs-Generatoren, wie z. B. [CSSGradient.io](https://cssgradient.io/). Sie können einen Verlauf erstellen und den Quellcode kopieren und einfügen, der ihn erzeugt.

## Mehrere Hintergrundbilder

Es ist auch möglich, mehrere Hintergrundbilder in einer einzigen Deklaration anzugeben. Sie tun dies, indem Sie mehrere `background-image` Werte durch Kommas getrennt angeben.

Wenn Sie dies tun, können Sie mehrere Hintergrundbilder übereinander liegen haben. Die Hintergründe werden so gestapelt, dass das zuletzt angegebene Hintergrundbild unten im Stapel liegt, und jedes vorherige Bild auf dem folgt, was im Code danach kommt.

> [!NOTE]
> Verläufe können problemlos mit normalen Hintergrundbildern gemischt werden.

Die anderen `background-*` Eigenschaften können ebenfalls kommagetrennte Werte haben, genau wie `background-image`:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert der verschiedenen Eigenschaften passt zu den Werten in derselben Position in den anderen Eigenschaften. Oben wird zum Beispiel `image1` der `background-repeat` Wert `no-repeat` zugewiesen. Aber was passiert, wenn verschiedene Eigenschaften unterschiedliche Anzahlen von Werten haben? Die Antwort ist, dass die geringere Anzahl von Werten zyklisch verwendet werden — im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position` Werte. Die ersten beiden Positionswerte werden auf die ersten beiden Bilder angewendet, dann wird zurückgegangen — `image3` wird der erste Positionswert zugewiesen, und `image4` der zweite Positionswert.

### Spiel mit mehreren Hintergrundbildern

Lassen Sie uns spielen. Das untenstehende Beispiel enthält zwei Hintergrundbilder. Versuchen Sie, das Beispiel folgendermaßen zu bearbeiten:

- Um die Stapelreihenfolge zu demonstrieren, versuchen Sie, die Reihenfolge zu ändern, in der die Hintergrundbilder in der Liste erscheinen.
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

## Hintergrundanhang

Eine weitere Option, die wir für Hintergründe zur Verfügung haben, ist die Festlegung, wie sie gescrollt werden, wenn der Inhalt scrollt. Dies wird durch die {{cssxref("background-attachment")}}-Eigenschaft gesteuert, die die folgenden Werte annehmen kann:

- `scroll`: bewirkt, dass der Hintergrund des Elements gescrollt wird, wenn die Seite gescrollt wird. Wenn der Inhalt des Elements gescrollt wird, bewegt sich der Hintergrund nicht. Der Hintergrund ist sozusagen auf die gleiche Position der Seite fixiert, sodass er beim Scrollen der Seite scrollt.
- `fixed`: bewirkt, dass der Hintergrund eines Elements fixiert im Ansichtsfenster bleibt, sodass er nicht scrollt, wenn die Seite oder der Elementinhalt gescrollt wird. Er bleibt immer an derselben Position auf dem Bildschirm.
- `local`: fixiert den Hintergrund an das Element, auf das er gesetzt ist, sodass der Hintergrund mit dem Element scrollt, wenn es gescrollt wird.

Die {{cssxref("background-attachment")}}-Eigenschaft hat nur Auswirkung, wenn es Inhalt gibt, der gescrollt werden kann. Wir haben eine Demo erstellt, um die Unterschiede zwischen den drei Werten zu demonstrieren — schauen Sie sich [background-attachment.html](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (auch den [Quellcode ansehen](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds) hier).

## Verwendung der Hintergrund-Kurzform

Häufig werden Hintergründe mit der {{cssxref("background")}}-Kurzform-Eigenschaft angegeben, mit der Sie alle verschiedenen Eigenschaften auf einmal festlegen können.

Wenn Sie mehrere Hintergründe verwenden, müssen Sie alle Eigenschaften für den ersten Hintergrund angeben, dann Ihren nächsten Hintergrund nach einem Komma hinzufügen. Im untenstehenden Beispiel haben wir einen Verlauf mit Größe und Position, dann ein Hintergrundbild mit `no-repeat` und einer Position, gefolgt von einer Farbe.

Es gibt ein paar Regeln, die beachtet werden müssen, wenn Sie Hintergrundbild-Kurzformwerte schreiben, zum Beispiel:

- Eine `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur direkt nach `background-position` enthalten sein, getrennt durch das `/`-Zeichen, so: `center/80%`.

Sehen Sie sich die MDN-Seite für {{cssxref("background")}} an, um mehr über die Syntax zu erfahren.

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

## Überlegungen zur Zugänglichkeit mit Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie darauf achten, dass Sie genügend [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) haben, damit der Text für Ihre Besucher lesbar ist. Wenn Sie ein Bild mit Textinhalt darüber spezifizieren, sollten Sie auch eine `background-color` angeben, die es dem Text ermöglicht, lesbar zu sein, wenn das Bild nicht geladen wird.

Bildschirmleser können Hintergrundbilder nicht einlesen; deshalb sollten sie rein dekorativ sein. Alle wichtigen Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrundbild enthalten sein.

## Rahmen

Beim Lernen über das [Boxmodell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir entdeckt, wie Rahmen die Größe unserer Box beeinflussen. In dieser Lektion schauen wir uns an, wie man Rahmen kreativ verwendet.

Typischerweise, wenn wir einem Element mit CSS Rahmen hinzufügen, verwenden wir die {{cssxref("border")}}-Kurzform-Eigenschaft, um die Farbe, Breite und den [Stil](/de/docs/Web/CSS/Reference/Values/line-style) des Rahmens an allen vier Seiten einer Box in einer Deklaration festzulegen:

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

Die einzelnen Eigenschaften beinhalten die {{cssxref("border-width")}}, {{cssxref("border-style")}}, und {{cssxref("border-color")}}-Kurzform-Eigenschaften:

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
> Diese Oben-, Rechts-, Unten- und Links-Rahmeneigenschaften haben auch zugehörige [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties), die sich auf die Schreibrichtung des Dokuments beziehen (z. B. von links nach rechts oder von rechts nach links Text, oder von oben nach unten). Sie können darüber in [Umgang mit unterschiedlichen Schreibrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions) lesen.

### Spiel mit Rahmen

Es gibt eine Vielzahl von Stilen, die Sie für Rahmen verwenden können. Im Beispiel unten haben wir zwei verschiedene Rahmenstile für die Box und zwei verschiedene Rahmenstile für die Überschrift verwendet. Spielen Sie mit Stil, Breite und Farbe der Rahmen, um zu sehen, wie Rahmen funktionieren.

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

Sie können einer Box mit der {{cssxref("border-radius")}}-Eigenschaft und zugehörigen Langformen, die sich auf jede Ecke der Box beziehen, abgerundete Ecken hinzufügen. Zwei Längen oder Prozentsätze können als Wert verwendet werden, wobei der erste Wert den horizontalen Radius und der zweite den vertikalen Radius definiert. In den meisten Fällen geben Sie nur einen Wert ein, der für beides verwendet wird.

Um allen vier Ecken einer Box beispielsweise einen `10px` Radius zu geben:

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
> Wie bei den oben genannten Rahmeneigenschaften haben auch diese border-radius-Eigenschaften zugehörige [_logische_ border-radius Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties).

### Spiel mit dem border-radius

Wir haben alle vier Ecken im Beispiel unten gesetzt und dann die Werte für die obere rechte Ecke geändert, um sie unterschiedlich zu machen. Sie können mit den Werten spielen, um die Ecken zu ändern. Sehen Sie sich die Eigenschaftsseite für {{cssxref("border-radius")}} an, um die verfügbaren Syntaxoptionen zu sehen. Der [border-radius Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator) kann verwendet werden, um abgerundete Eckwerte für Sie auszugeben.

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

Sie sehen, dass es einiges zu beachten gibt, wenn man einem Kasten einen Hintergrund oder einen Rahmen hinzufügt. Erkunden Sie die verschiedenen Eigenschaftsseiten, wenn Sie mehr über eines der hier besprochenen Merkmale erfahren möchten. Fast jede Seite auf MDN hat Beispiele, mit denen Sie Ihre Kenntnisse spielerisch erweitern können.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir Ihnen über Hintergrund und Rahmen-Styling bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
