---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion sehen wir uns einige kreative Möglichkeiten an, die CSS für Hintergründe und Rahmen bietet. Ob Verläufe, Hintergrundbilder oder abgerundete Ecken: Mit Hintergründen und Rahmen lassen sich viele Gestaltungsaufgaben in CSS lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lesen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und -Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">Größenangaben in CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Gestaltung von Hintergründen – Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Scrollverhalten von Hintergrundbildern.</li>
          <li>Hintergrundverläufe – das grundlegende Konzept und lineare Verläufe (radiale, konische und sich wiederholende Verläufe sind fortgeschrittener; vertiefte Kenntnisse sind an dieser Stelle nicht erforderlich).</li>
          <li>Barrierefreiheit bei Hintergründen – ausreichenden Kontrast sicherstellen.</li>
          <li>Grundlagen von Rahmen – Breite, Stil, Farbe und die Kurzschreibweise für Rahmen. Abgerundete Ecken mit border-radius.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} legt die Hintergrundfarbe eines beliebigen Elements in CSS fest. Sie akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}}-Wert. Eine mit `background-color` festgelegte Hintergrundfarbe erstreckt sich unter dem Inhalts- und dem Innenabstandsbereich des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um der Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe zu geben.

Bearbeiten Sie das Beispiel und ersetzen Sie die angegebenen Farben durch beliebige verfügbare {{cssxref("&lt;color&gt;")}}-Werte.

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

Mit der Eigenschaft {{cssxref("background-image")}} können Sie ein Bild im Hintergrund eines Elements anzeigen. Im folgenden Beispiel gibt es zwei Boxen: Die eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild mit einem einzelnen Stern ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Das Beispiel zeigt zwei Eigenschaften von Hintergrundbildern. Standardmäßig wird das große Bild nicht verkleinert, damit es in die Box passt. Deshalb sehen wir nur einen kleinen Ausschnitt. Das kleine Bild wird dagegen wiederholt, bis es die Box ausfüllt.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt.
Fügen Sie dem obigen Beispiel eine `background-color`-Eigenschaft hinzu, um dies zu sehen.

### Die Wiederholung von Hintergrundbildern steuern

Mit der Eigenschaft {{cssxref("background-repeat")}} steuern Sie, ob und wie Bilder wiederholt werden. Folgende Werte stehen zur Verfügung:

- `no-repeat` – der Hintergrund wird nicht wiederholt.
- `repeat-x` – horizontale Wiederholung.
- `repeat-y` – vertikale Wiederholung.
- `repeat` – die Standardeinstellung; Wiederholung in beide Richtungen.
- `space` – das Bild wird so oft wie möglich wiederholt; überschüssiger Platz wird zwischen den Bildern verteilt.
- `round` – ähnlich wie `space`, aber die Bilder werden gestreckt, um überschüssigen Platz auszufüllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass Sie nur einen Stern sehen. Testen Sie die verschiedenen Werte und beobachten Sie ihre Wirkung.

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

### Die Größe des Hintergrundbildes festlegen

Das Bild _balloons.jpg_ aus dem ersten Beispiel für Hintergrundbilder ist größer als das Element, dessen Hintergrund es bildet, und wird deshalb abgeschnitten. Mit der Eigenschaft {{cssxref("background-size")}} können wir die Größe des Bildes so festlegen, dass es in den Hintergrundbereich passt.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Größe des Bildes in horizontaler und vertikaler Richtung festzulegen. Alternativ können Sie folgende Schlüsselwörter verwenden:

- `cover` – der Browser vergrößert das Bild gerade so weit, dass es den gesamten Boxbereich abdeckt, ohne sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} zu verändern. Dabei liegen wahrscheinlich Teile des Bildes außerhalb der Box.
- `contain` – der Browser passt die Bildgröße so an, dass das gesamte Bild in die Box passt. Wenn sich die Seitenverhältnisse von Bild und Box unterscheiden, können seitlich oder ober- und unterhalb des Bildes Lücken entstehen.

#### `background-size` ausprobieren

Im folgenden Beispiel wurde die Größe von _balloons.jpg_ mit Längenangaben so festgelegt, dass das Bild in die Box passt. Sie können sehen, dass das Bild dadurch verzerrt wurde.

Probieren Sie Folgendes aus:

- Ändern Sie die Längenangaben, um die Größe des Hintergrundbildes anzupassen.
- Entfernen Sie die Längenangaben und beobachten Sie, was bei `background-size: cover` oder `background-size: contain` passiert.
- Machen Sie das Bild kleiner als die Box und ändern Sie anschließend den Wert von `background-repeat`, um das Bild zu wiederholen.

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

### Das Hintergrundbild positionieren

Mit der Eigenschaft {{cssxref("background-position")}} legen Sie fest, an welcher Stelle in der Box das Hintergrundbild erscheint. Dabei wird ein Koordinatensystem verwendet, dessen Ursprung `(0,0)` in der oberen linken Ecke der Box liegt. Die Position wird entlang der horizontalen (`x`) und vertikalen (`y`) Achse angegeben.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gebräuchlichste Form von `background-position` verwendet zwei Werte: zuerst einen horizontalen, dann einen vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (weitere finden Sie auf der Seite zu {{cssxref("background-position")}}):

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top center;
}
```

Sie können auch {{cssxref("length", "Längenangaben")}} und {{cssxref("percentage", "Prozentwerte")}} verwenden:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Schlüsselwörter lassen sich außerdem mit Längenangaben oder Prozentwerten kombinieren. Dabei bezieht sich der erste Wert auf die horizontale und der zweite auf die vertikale Position. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie mit einer Syntax aus vier Werten einen Abstand zu bestimmten Kanten der Box angeben. Jedes Wertepaar bezeichnet die Kante, von der aus gemessen wird, und den Abstand zu dieser Kante. Im folgenden Ausschnitt positionieren wir den Hintergrund `20px` von `top` und `10px` von `right` entfernt:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### `background-position` ausprobieren

Probieren Sie diese Werte im folgenden Beispiel aus und verschieben Sie den Stern innerhalb der Box:

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
> Die Kurzschreibweise `background-position` wird anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet, mit denen sich die Positionen auf den einzelnen Achsen getrennt festlegen lassen.

## Hintergrundverläufe

Ein Verlauf verhält sich als Hintergrund wie ein Bild und wird ebenfalls mit der Eigenschaft {{cssxref("background-image")}} festgelegt.

Auf der MDN-Seite zum Datentyp {{cssxref("gradient")}} erfahren Sie mehr über die verschiedenen Arten von Verläufen und ihre Möglichkeiten.

Probieren Sie im folgenden Beispiel verschiedene Verlaufswerte aus. Anfangs ist ein linearer Verlauf über die gesamte erste Box gestreckt. In der zweiten Box wird ein radialer Verlauf mit festgelegter Größe wiederholt.

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
> Eine Möglichkeit, mit Verläufen zu experimentieren, bieten die zahlreichen CSS-Verlaufsgeneratoren im Web, etwa [CSSGradient.io](https://cssgradient.io/). Dort können Sie einen Verlauf erstellen und den dafür erzeugten Quellcode kopieren und einfügen.

## Mehrere Hintergrundbilder

Sie können auch mehrere Hintergrundbilder in einer einzigen Deklaration angeben. Dazu trennen Sie mehrere `background-image`-Werte durch Kommas.

Dabei können sich die Hintergrundbilder überlappen. Das zuletzt aufgeführte Hintergrundbild liegt ganz unten im Stapel. Jedes davor aufgeführte Bild liegt über dem Bild, das im Code darauf folgt.

> [!NOTE]
> Verläufe lassen sich problemlos mit gewöhnlichen Hintergrundbildern kombinieren.

Auch die anderen `background-*`-Eigenschaften können, genau wie `background-image`, durch Kommas getrennte Werte enthalten:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert einer Eigenschaft wird dem Wert an derselben Position in den anderen Eigenschaften zugeordnet. Im obigen Beispiel erhält `image1` für `background-repeat` den Wert `no-repeat`. Was passiert aber, wenn die Eigenschaften unterschiedlich viele Werte haben? Die kürzeren Wertelisten werden wiederholt: Im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei `background-position`-Werte. Die ersten beiden Positionswerte gelten für die ersten beiden Bilder. Danach beginnt die Zuordnung erneut: `image3` erhält den ersten und `image4` den zweiten Positionswert.

### Mehrere Hintergrundbilder ausprobieren

Probieren Sie es aus. Das folgende Beispiel enthält zwei Hintergrundbilder. Bearbeiten Sie es wie folgt:

- Vertauschen Sie die Reihenfolge der Hintergrundbilder in der Liste, um die Stapelreihenfolge zu sehen.
- Fügen Sie weitere `background-*`-Eigenschaften hinzu, um Position, Größe oder Wiederholung der Bilder zu ändern.
- Fügen Sie als drittes `background-image` einen Verlauf hinzu.

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

## Scrollverhalten von Hintergründen

Eine weitere Einstellung für Hintergründe bestimmt, wie sie sich beim Scrollen des Inhalts verhalten. Dies steuern Sie mit der Eigenschaft {{cssxref("background-attachment")}}, die folgende Werte annehmen kann:

- `scroll`: Der Hintergrund des Elements bewegt sich mit, wenn die Seite gescrollt wird. Wird dagegen der Inhalt des Elements gescrollt, bewegt sich der Hintergrund nicht. Er bleibt also an derselben Position auf der Seite und bewegt sich beim Scrollen der Seite mit.
- `fixed`: Der Hintergrund eines Elements ist am Viewport fixiert und bewegt sich weder beim Scrollen der Seite noch beim Scrollen des Elementinhalts. Er bleibt immer an derselben Stelle auf dem Bildschirm.
- `local`: Der Hintergrund ist am Inhalt des Elements ausgerichtet. Wenn Sie das Element scrollen, bewegt sich der Hintergrund mit dem Inhalt.

Die Eigenschaft {{cssxref("background-attachment")}} wirkt sich nur aus, wenn Inhalt gescrollt werden kann. Deshalb haben wir ein Beispiel erstellt, das die Unterschiede zwischen den drei Werten zeigt:

```html hidden live-sample___background-attachment
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

```css hidden live-sample___background-attachment
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
  background: rgb(0 0 0 / 0.3);
}

section {
  display: flex;
  gap: 10px;
}

article {
  flex: 1;
  height: 300px;
  background-color: rgb(0 0 0 / 0.5);
  background-image: url("https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg");
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

Scrollen Sie zunächst das gesamte eingebettete Beispiel und dann die einzelnen Container. Beobachten Sie, wie sich deren Hintergründe unterschiedlich verhalten.

## Die Kurzschreibweise für Hintergründe verwenden

Häufig werden Hintergründe mit der Kurzschreibweise {{cssxref("background")}} festgelegt. Damit können Sie alle zugehörigen Eigenschaften auf einmal angeben.

Wenn Sie mehrere Hintergründe verwenden, geben Sie zunächst alle Eigenschaften für den ersten Hintergrund an und fügen nach einem Komma den nächsten hinzu. Im folgenden Beispiel verwenden wir zuerst einen Verlauf mit Größe und Position, dann ein Hintergrundbild mit `no-repeat` und einer Position und schließlich eine Farbe.

Beim Schreiben der Kurzschreibweise für Hintergründe sind einige Regeln zu beachten, zum Beispiel:

- `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` stehen, getrennt durch `/`, zum Beispiel: `center/80%`.

Weitere Informationen zur Syntax finden Sie auf der MDN-Seite zu {{cssxref("background")}}.

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

## Barrierefreiheit bei Hintergründen

Wenn Sie Text auf einem Hintergrundbild oder einer Hintergrundfarbe platzieren, achten Sie auf ausreichenden [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast), damit Ihre Besucher den Text gut lesen können. Wenn Sie ein Bild mit darüberliegendem Text verwenden, sollten Sie zusätzlich eine `background-color` festlegen, die den Text auch dann lesbar macht, wenn das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht auswerten. Deshalb sollten diese rein dekorativ sein. Wichtige Inhalte müssen Teil der HTML-Seite sein und dürfen nicht ausschließlich in einem Hintergrundbild enthalten sein.

## Rahmen

Bei der Beschäftigung mit dem [Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir gesehen, wie Rahmen die Größe einer Box beeinflussen. In dieser Lektion betrachten wir, wie sich Rahmen kreativ einsetzen lassen.

Wenn wir einem Element mit CSS einen Rahmen hinzufügen, verwenden wir üblicherweise die Kurzschreibweise {{cssxref("border")}}, um Farbe, Breite und [Stil](/de/docs/Web/CSS/Reference/Values/line-style) des Rahmens an allen vier Seiten der Box in einer Deklaration festzulegen:

```css
.box {
  border: 1px solid black;
}
```

Wir können aber auch gezielt eine Seite der Box gestalten, zum Beispiel:

```css
.box {
  border-top: 1px solid black;
}
```

Zu den einzelnen Eigenschaften gehören die Kurzschreibweisen {{cssxref("border-width")}}, {{cssxref("border-style")}} und {{cssxref("border-color")}}:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Außerdem gibt es für Breite, Stil und Farbe jeder der vier Seiten eigene Eigenschaften:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Für diese Eigenschaften der oberen, rechten, unteren und linken Rahmenseite gibt es auch entsprechende [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties). Sie richten sich nach der Schreibrichtung des Dokuments, etwa von links nach rechts, von rechts nach links oder von oben nach unten. Mehr dazu erfahren Sie unter [Umgang mit unterschiedlichen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

### Rahmen ausprobieren

Für Rahmen stehen verschiedene Stile zur Verfügung. Im folgenden Beispiel verwenden wir zwei unterschiedliche Rahmenstile für die Box und zwei für die Überschrift. Experimentieren Sie mit Stil, Breite und Farbe, um zu sehen, wie Rahmen funktionieren.

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

Mit der Eigenschaft {{cssxref("border-radius")}} und den zugehörigen Eigenschaften für einzelne Ecken können Sie die Ecken einer Box abrunden. Als Wert können Sie zwei Längenangaben oder Prozentwerte verwenden: Der erste Wert bestimmt den horizontalen Radius, der zweite den vertikalen. Häufig genügt ein einzelner Wert, der dann für beide Radien verwendet wird.

Um beispielsweise allen vier Ecken einer Box einen Radius von `10px` zu geben:

```css
.box {
  border-radius: 10px;
}
```

Oder um für die obere rechte Ecke einen horizontalen Radius von `1em` und einen vertikalen Radius von `10%` festzulegen:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie bei den Rahmeneigenschaften oben gibt es auch für diese border-radius-Eigenschaften entsprechende [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties).

### Eckenradien ausprobieren

Im folgenden Beispiel haben wir alle vier Ecken festgelegt und anschließend die Werte für die obere rechte Ecke geändert, damit sie sich von den anderen unterscheidet. Experimentieren Sie mit den Werten, um die Ecken zu verändern. Die verfügbaren Syntaxoptionen finden Sie auf der Seite zur Eigenschaft {{cssxref("border-radius")}}. Mit dem [Generator für border-radius](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator) können Sie Werte für abgerundete Ecken erzeugen.

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

Wie Sie sehen, gibt es beim Hinzufügen eines Hintergrunds oder Rahmens zu einer Box einiges zu beachten. Wenn Sie mehr über eine der hier besprochenen Funktionen erfahren möchten, sehen Sie sich die Seiten der einzelnen Eigenschaften an. Fast jede MDN-Seite enthält Beispiele, mit denen Sie experimentieren und Ihr Wissen vertiefen können.

Im nächsten Artikel finden Sie Aufgaben, mit denen Sie überprüfen können, wie gut Sie die Informationen zur Gestaltung von Hintergründen und Rahmen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
