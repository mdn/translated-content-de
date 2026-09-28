---
title: Hintergründe und Rahmen
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: b7e9f482c51817d3a885e26092f8219fd0d9d278
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

In dieser Lektion sehen wir uns einige der kreativen Möglichkeiten an, die CSS-Hintergründe und -Rahmen bieten. Ob Farbverläufe, Hintergrundbilder oder abgerundete Ecken: Mit Hintergründen und Rahmen lassen sich viele Gestaltungsaufgaben in CSS lösen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lesen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units">CSS-Werte und -Einheiten</a>, <a href="/de/docs/Learn_web_development/Core/Styling_basics/Sizing">CSS-Größenangaben</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Grundlegende Gestaltung von Hintergründen – Farben und Bilder.</li>
          <li>Größe, Wiederholung, Position und Scrollverhalten von Hintergrundbildern.</li>
          <li>Hintergrundverläufe – das allgemeine Konzept und lineare Verläufe (radiale, konische und sich wiederholende Verläufe sind fortgeschrittener; vertiefte Kenntnisse sind an dieser Stelle nicht erforderlich).</li>
          <li>Barrierefreiheit bei Hintergründen – ausreichenden Kontrast sicherstellen.</li>
          <li>Grundlagen von Rahmen – Breite, Stil, Farbe und Kurzschreibweise für Rahmen. Ecken mit einem Rahmenradius abrunden.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Hintergrundfarben

Die Eigenschaft {{cssxref("background-color")}} legt die Hintergrundfarbe eines beliebigen Elements in CSS fest. Sie akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}}-Wert. Ein `background-color` erstreckt sich unter dem Inhaltsbereich und dem Innenabstand des Elements.

Im folgenden Beispiel haben wir verschiedene Farbwerte verwendet, um einer Box, einer Überschrift und einem {{htmlelement("span")}}-Element eine Hintergrundfarbe zu geben.

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

Mit der Eigenschaft {{cssxref("background-image")}} können Sie ein Bild im Hintergrund eines Elements anzeigen. Im folgenden Beispiel gibt es zwei Boxen: Eine hat ein Hintergrundbild, das größer als die Box ist ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)). Die andere hat ein kleines Bild mit einem einzelnen Stern ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Das Beispiel zeigt zwei Eigenschaften von Hintergrundbildern. Standardmäßig wird das große Bild nicht verkleinert, um in die Box zu passen. Deshalb sehen wir nur einen kleinen Ausschnitt davon. Das kleine Bild hingegen wird wiederholt, bis es die Box ausfüllt.

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

Wenn Sie zusätzlich zu einem Hintergrundbild eine Hintergrundfarbe angeben, wird das Bild über der Farbe angezeigt. Fügen Sie dem obigen Beispiel eine `background-color`-Eigenschaft hinzu, um dies zu sehen.

### Die Wiederholung des Hintergrunds steuern

Mit der Eigenschaft {{cssxref("background-repeat")}} steuern Sie, wie Bilder wiederholt werden. Folgende Werte stehen zur Verfügung:

- `no-repeat` – verhindert, dass sich der Hintergrund wiederholt.
- `repeat-x` – wiederholt das Bild horizontal.
- `repeat-y` – wiederholt das Bild vertikal.
- `repeat` – der Standardwert; wiederholt das Bild in beide Richtungen.
- `space` – wiederholt das Bild so oft wie möglich und fügt bei verbleibendem Platz Abstände zwischen den Bildern ein.
- `round` – ähnelt `space`, dehnt die Bilder jedoch, um verbleibenden Platz auszufüllen.

Probieren Sie diese Werte im folgenden Beispiel aus. Wir haben den Wert auf `no-repeat` gesetzt, sodass nur ein Stern zu sehen ist. Testen Sie die verschiedenen Werte und beobachten Sie ihre Wirkung.

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

### Die Größe des Hintergrundbilds festlegen

Das im ersten Beispiel verwendete Bild _balloons.jpg_ ist größer als das Element, dessen Hintergrund es bildet. Deshalb wird es beschnitten. In diesem Fall können wir mit der Eigenschaft {{cssxref("background-size")}} die Größe des Bilds so festlegen, dass es in den Hintergrundbereich passt.

`background-size` kann zwei {{cssxref("length")}}- oder {{cssxref("percentage")}}-Werte annehmen, um die Bildgröße in horizontaler und vertikaler Richtung festzulegen, oder eines der folgenden Schlüsselwörter:

- `cover` – der Browser vergrößert das Bild gerade so weit, dass es den gesamten Boxbereich abdeckt und dabei sein {{Glossary("aspect_ratio", "Seitenverhältnis")}} beibehält. Dabei liegt wahrscheinlich ein Teil des Bilds außerhalb der Box.
- `contain` – der Browser passt die Bildgröße so an, dass das Bild vollständig in die Box passt. Wenn sich das Seitenverhältnis des Bilds von dem der Box unterscheidet, können dabei an den Seiten oder oben und unten Lücken entstehen.

#### Mit `background-size` experimentieren

Im folgenden Beispiel wurden für _balloons.jpg_ Längenwerte festgelegt, damit das Bild in die Box passt. Sie sehen, dass das Bild dadurch verzerrt wird.

Probieren Sie Folgendes aus:

- Ändern Sie die verwendeten Längenwerte, um die Größe des Hintergrundbilds anzupassen.
- Entfernen Sie die Längenwerte und beobachten Sie, was bei `background-size: cover` oder `background-size: contain` geschieht.
- Legen Sie das Bild kleiner als die Box fest und ändern Sie dann den Wert von `background-repeat`, damit das Bild wiederholt wird.

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

Mit der Eigenschaft {{cssxref("background-position")}} bestimmen Sie, an welcher Stelle der Box das Hintergrundbild erscheint. Dafür wird ein Koordinatensystem verwendet, in dem die obere linke Ecke der Box `(0,0)` ist. Die Position wird entlang der horizontalen (`x`) und vertikalen (`y`) Achse angegeben.

> [!NOTE]
> Der Standardwert von `background-position` ist `(0,0)`.

Die gebräuchlichsten Werte für `background-position` bestehen aus zwei Einzelwerten: einem horizontalen, gefolgt von einem vertikalen Wert. Sie können Schlüsselwörter wie `top` und `right` verwenden (weitere finden Sie auf der Seite zu {{cssxref("background-position")}}):

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top center;
}
```

Sie können auch {{cssxref("length", "Längenwerte")}} und {{cssxref("percentage", "Prozentwerte")}} verwenden:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Außerdem können Sie Schlüsselwörter mit Längen- oder Prozentwerten kombinieren. Dabei bezieht sich der erste Wert auf die horizontale und der zweite auf die vertikale Position. Zum Beispiel:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Schließlich können Sie mit einer Syntax aus vier Werten den Abstand zu bestimmten Kanten der Box angeben. Jedes Wertepaar bezeichnet eine Kante der Box und den Abstand zu dieser Kante. Im folgenden Codeausschnitt positionieren wir den Hintergrund `20px` von `top` und `10px` von `right` entfernt:

```css
.box {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Mit `background-position` experimentieren

Probieren Sie im folgenden Beispiel diese Werte aus und verschieben Sie den Stern innerhalb der Box:

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
> Hier wird die Kurzschreibweise `background-position` anstelle von {{cssxref("background-position-x")}} und {{cssxref("background-position-y")}} verwendet. Mit den beiden anderen Eigenschaften können Sie die Position für jede Achse einzeln festlegen.

## Farbverläufe als Hintergrund

Ein Farbverlauf verhält sich als Hintergrund genauso wie ein Bild und wird ebenfalls mit der Eigenschaft {{cssxref("background-image")}} festgelegt.

Auf der MDN-Seite zum Datentyp {{cssxref("gradient")}} erfahren Sie mehr über die verschiedenen Arten von Farbverläufen und ihre Möglichkeiten.

Probieren Sie im folgenden Beispiel verschiedene Farbverläufe aus. Anfangs ist in der ersten Box ein linearer Farbverlauf zu sehen, der sich über die gesamte Box erstreckt. In der zweiten Box wird ein radialer Farbverlauf mit festgelegter Größe wiederholt.

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
> Eine unterhaltsame Möglichkeit, mit Farbverläufen zu experimentieren, bieten die zahlreichen CSS-Generatoren im Web, beispielsweise [CSSGradient.io](https://cssgradient.io/). Dort können Sie einen Farbverlauf erstellen und den zugehörigen Quellcode kopieren.

## Mehrere Hintergrundbilder

Sie können auch mehrere Hintergrundbilder in einer einzigen Deklaration angeben. Dazu geben Sie mehrere `background-image`-Werte an, die durch Kommas getrennt sind.

Dabei können sich die Hintergrundbilder überlappen. Das zuletzt aufgeführte Hintergrundbild liegt ganz unten im Stapel. Jedes davor aufgeführte Bild liegt über dem Bild, das im Code auf es folgt.

> [!NOTE]
> Farbverläufe lassen sich problemlos mit gewöhnlichen Hintergrundbildern kombinieren.

Auch die anderen `background-*`-Eigenschaften können wie `background-image` durch Kommas getrennte Werte enthalten:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Jeder Wert einer Eigenschaft wird dem Wert an derselben Position in den anderen Eigenschaften zugeordnet. Im obigen Beispiel erhält `image1` für `background-repeat` den Wert `no-repeat`. Was geschieht aber, wenn die Eigenschaften unterschiedlich viele Werte haben? Dann werden die kürzeren Wertelisten wiederholt: Im obigen Beispiel gibt es vier Hintergrundbilder, aber nur zwei Werte für `background-position`. Die ersten beiden Positionswerte werden den ersten beiden Bildern zugewiesen. Anschließend beginnt die Zuordnung wieder von vorn: `image3` erhält den ersten und `image4` den zweiten Positionswert.

### Mit mehreren Hintergrundbildern experimentieren

Probieren wir es aus. Das folgende Beispiel enthält zwei Hintergrundbilder. Bearbeiten Sie es wie folgt:

- Vertauschen Sie die Reihenfolge der Hintergrundbilder in der Liste, um zu sehen, wie sie übereinandergelegt werden.
- Fügen Sie weitere `background-*`-Eigenschaften hinzu, um Position, Größe oder Wiederholung der Bilder zu ändern.
- Fügen Sie als drittes `background-image` einen Farbverlauf hinzu.

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

## Scrollverhalten des Hintergrunds

Eine weitere Möglichkeit besteht darin, festzulegen, wie sich Hintergründe beim Scrollen des Inhalts verhalten. Dies steuern Sie mit der Eigenschaft {{cssxref("background-attachment")}}, die folgende Werte annehmen kann:

- `scroll`: Der Hintergrund des Elements scrollt mit, wenn die Seite gescrollt wird. Wird der Inhalt des Elements gescrollt, bewegt sich der Hintergrund nicht. Der Hintergrund bleibt also an derselben Position auf der Seite und scrollt mit der Seite mit.
- `fixed`: Der Hintergrund eines Elements bleibt relativ zum Viewport fixiert. Er scrollt weder mit der Seite noch mit dem Inhalt des Elements und bleibt auf dem Bildschirm stets an derselben Position.
- `local`: Der Hintergrund ist an das Element gebunden. Wenn Sie innerhalb des Elements scrollen, scrollt der Hintergrund mit.

Die Eigenschaft {{cssxref("background-attachment")}} wirkt sich nur aus, wenn Inhalt zum Scrollen vorhanden ist. Deshalb haben wir ein Beispiel erstellt, das die Unterschiede zwischen den drei Werten zeigt:

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

Scrollen Sie zuerst das gesamte eingebettete Beispiel und danach die einzelnen Container. Achten Sie darauf, wie sich die Hintergründe der Container jeweils verhalten.

## Die Kurzschreibweise für Hintergründe verwenden

Hintergründe werden häufig mit der Kurzschreibweise {{cssxref("background")}} angegeben. Damit können Sie alle zugehörigen Eigenschaften auf einmal festlegen.

Wenn Sie mehrere Hintergründe verwenden, geben Sie zuerst alle Eigenschaften für den ersten Hintergrund an und fügen nach einem Komma den nächsten Hintergrund hinzu. Im folgenden Beispiel haben wir zuerst einen Farbverlauf mit Größe und Position, dann einen Bildhintergrund mit `no-repeat` und einer Position und schließlich eine Farbe.

Beim Schreiben der Kurzschreibweise für Hintergrundbilder sind einige Regeln zu beachten, zum Beispiel:

- Ein `background-color` darf nur nach dem letzten Komma angegeben werden.
- Der Wert von `background-size` darf nur unmittelbar nach `background-position` stehen, getrennt durch das Zeichen `/`, beispielsweise so: `center/80%`.

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

Wenn Sie Text über einem Hintergrundbild oder einer Hintergrundfarbe platzieren, sollten Sie auf ausreichenden [Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) achten, damit der Text für Ihre Besucher gut lesbar ist. Wenn Sie ein Bild mit darüberliegendem Text verwenden, sollten Sie zusätzlich eine `background-color` festlegen, bei der der Text auch dann lesbar bleibt, wenn das Bild nicht geladen wird.

Screenreader können Hintergrundbilder nicht auswerten. Deshalb sollten diese rein dekorativ sein. Wichtige Inhalte sollten Teil der HTML-Seite sein und nicht in einem Hintergrundbild stehen.

## Rahmen

Beim Kennenlernen des [Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) haben wir gesehen, wie Rahmen die Größe einer Box beeinflussen. In dieser Lektion sehen wir uns an, wie Sie Rahmen kreativ einsetzen können.

Wenn wir einem Element mit CSS einen Rahmen hinzufügen, verwenden wir üblicherweise die Kurzschreibweise {{cssxref("border")}}. Damit legen wir Farbe, Breite und [Stil](/de/docs/Web/CSS/Reference/Values/line-style) des Rahmens für alle vier Seiten einer Box in einer einzigen Deklaration fest:

```css
.box {
  border: 1px solid black;
}
```

Wir können auch gezielt eine Seite der Box ansprechen, zum Beispiel:

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

Außerdem gibt es Langschreibweisen für Breite, Stil und Farbe jeder der vier Seiten:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Für diese Rahmeneigenschaften für oben, rechts, unten und links gibt es auch entsprechende [_logische_ Rahmeneigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties). Sie richten sich nach der Schreibrichtung des Dokuments, beispielsweise danach, ob Text von links nach rechts, von rechts nach links oder von oben nach unten verläuft. Mehr dazu erfahren Sie unter [Umgang mit verschiedenen Textrichtungen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

### Mit Rahmen experimentieren

Für Rahmen stehen verschiedene Stile zur Verfügung. Im folgenden Beispiel haben wir für die Box und die Überschrift jeweils zwei unterschiedliche Rahmenstile verwendet. Ändern Sie Stil, Breite und Farbe, um zu sehen, wie Rahmen funktionieren.

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

Mit der Eigenschaft {{cssxref("border-radius")}} und den zugehörigen Langschreibweisen für die einzelnen Ecken können Sie die Ecken einer Box abrunden. Als Wert können zwei Längen- oder Prozentwerte verwendet werden: Der erste bestimmt den horizontalen Radius, der zweite den vertikalen Radius. Häufig genügt ein einzelner Wert, der dann für beide Radien gilt.

So geben Sie beispielsweise allen vier Ecken einer Box einen Radius von `10px`:

```css
.box {
  border-radius: 10px;
}
```

Und so geben Sie der oberen rechten Ecke einen horizontalen Radius von `1em` und einen vertikalen Radius von `10%`:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Wie für die oben genannten Rahmeneigenschaften gibt es auch für die border-radius-Eigenschaften entsprechende [_logische_ border-radius-Eigenschaften](/de/docs/Web/CSS/Guides/Logical_properties_and_values#properties).

### Mit abgerundeten Ecken experimentieren

Im folgenden Beispiel haben wir zunächst alle vier Ecken festgelegt und dann die Werte für die obere rechte Ecke geändert, damit sie sich von den anderen unterscheidet. Ändern Sie die Werte, um die Ecken anzupassen. Auf der Eigenschaftsseite zu {{cssxref("border-radius")}} finden Sie die verfügbaren Syntaxvarianten. Mit dem [border-radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator) können Sie Werte für abgerundete Ecken erzeugen lassen.

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

Wie Sie sehen, gibt es bei Hintergründen und Rahmen für eine Box einiges zu beachten. Wenn Sie mehr über eine der hier besprochenen Funktionen erfahren möchten, sehen Sie sich die jeweiligen Eigenschaftsseiten an. Fast jede MDN-Seite bietet Beispiele zum Ausprobieren, mit denen Sie Ihr Wissen vertiefen können.

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen zur Gestaltung von Hintergründen und Rahmen verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
