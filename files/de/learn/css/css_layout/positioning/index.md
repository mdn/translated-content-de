---
title: Positionierung
slug: Learn/CSS/CSS_layout/Positioning
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

Die Positionierung erlaubt es Ihnen, Elemente aus dem normalen Dokumentfluss herauszunehmen und anders zu verhalten, zum Beispiel indem sie übereinanderliegen oder immer an derselben Stelle im Browser-Viewport bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und wie man sie verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie CSS-Positionierung funktioniert.</td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Wenn möglich, laden Sie eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repo ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) herunter und verwenden Sie diese als Ausgangspunkt.

## Einführung in die Positionierung

Die Positionierung ermöglicht interessante Ergebnisse, indem der normale Dokumentfluss überschrieben wird. Was wäre, wenn Sie die Position einiger Boxen leicht von ihrer Standardflussposition verändern möchten, um ein etwas quirky, unruhiges Gefühl zu geben? Die Positionierung ist Ihr Werkzeug. Oder was wäre, wenn Sie ein UI-Element erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster bleibt, egal wie viel die Seite gescrollt wird? Die Positionierung macht solches Layout-Arbeiten möglich.

Es gibt eine Reihe verschiedener Positionierungsarten, die Sie auf HTML-Elemente anwenden können. Um eine spezifische Art der Positionierung auf ein Element anzuwenden, verwenden wir die {{cssxref("position")}}-Eigenschaft.

## Statische Positionierung

Die statische Positionierung ist die Standardeinstellung, die jedes Element erhält. Es bedeutet einfach "Setzen Sie das Element an seine normale Position im Dokumentfluss — nichts Besonderes zu sehen."

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte einzurichten), fügen Sie zunächst die `class` des `positioned` dem zweiten {{htmlelement("p")}} im HTML hinzu:

```html
<p class="positioned">…</p>
```

Fügen Sie nun die folgende Regel am Ende Ihres CSS hinzu:

```css
.positioned {
  position: static;
  background: yellow;
}
```

Wenn Sie speichern und aktualisieren, werden Sie überhaupt keinen Unterschied feststellen, außer der aktualisierten Hintergrundfarbe des zweiten Absatzes. Das ist in Ordnung — wie bereits erwähnt, ist die statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Positionierung

Die relative Positionierung ist die erste Positionierungsart, die wir uns ansehen werden. Diese ist sehr ähnlich zur statischen Positionierung, außer dass Sie, sobald das positionierte Element seinen Platz im normalen Fluss eingenommen hat, seine endgültige Position ändern können, einschließlich der Möglichkeit, es über andere Elemente auf der Seite zu überlappen. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie an diesem Punkt speichern und aktualisieren, sehen Sie überhaupt keine Veränderung im Ergebnis. Wie ändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären werden.

### Einführung von top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau festzulegen, wohin das positionierte Element verschoben werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen der `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können beliebige [Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) annehmen, die Sie vernünftigerweise erwarten würden: Pixel, mm, rems, %, etc.

Wenn Sie jetzt speichern und aktualisieren, erhalten Sie ein Ergebnis, das in etwa so aussieht:

```html hidden
<h1>Relative positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  Inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" alt="snippet of cloth" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Introducing_top_bottom_left_and_right', '100%', 500) }}

Cool, oder? Ok, das war wahrscheinlich nicht, was Sie erwartet haben. Warum ist es nach unten und nach rechts verschoben, wenn wir _top_ und _left_ angegeben haben? Dies mag kontraintuitiv erscheinen. Sie müssen sich das so vorstellen, dass es eine unsichtbare Kraft gibt, die die angegebene Seite der positionierten Box schiebt und sie in die entgegengesetzte Richtung bewegt. Wenn Sie also beispielsweise `top: 30px;` angeben, schiebt eine Kraft die Oberseite der Box, sodass sie sich um 30px nach unten bewegt.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Positionierung

Absolute Positionierung ergibt sehr unterschiedliche Ergebnisse.

### Setting position: absolute

Ändern wir die Positionsdeklaration in Ihrem Code wie folgt:

```css
position: absolute;
```

Wenn Sie jetzt speichern und aktualisieren, sollten Sie so etwas sehen:

```html hidden
<h1>Absolute positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and we are as tall
  as our child content. Our total width and height is our content + padding +
  border width/height.
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" alt="snippet of cloth" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Setting_position_absolute', '100%', 450) }}

Zunächst einmal beachten Sie, dass die Lücke, in der das positionierte Element im Dokumentfluss sein sollte, nicht mehr vorhanden ist — die ersten und dritten Elemente sind zusammengerückt, als ob es nicht mehr existiert! Nun, auf eine Weise stimmt das. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentfluss. Stattdessen sitzt es auf seiner eigenen Ebene, getrennt von allem anderen. Das ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Features erstellen können, die sich nicht in das Layout anderer Elemente auf der Seite einmischen. Zum Beispiel Popup-Informationskästen, Steuerungsmenüs, Roll-over-Panels, UI-Funktionen, die überall auf der Seite gezogen und abgelegt werden können, und so weiter.

Zweitens beachten Sie, dass sich die Position des Elements geändert hat. Dies liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei absoluter Positionierung anders funktionieren. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentflusses zu positionieren, geben sie den Abstand an, den das Element von jeder Seite des umgebenden Elements haben soll. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des "umgebenden Elements" und 30px von der linken Seite entfernt sein soll. (In diesem Fall ist das "umgebende Element" der **anfängliche Begrenzungsblock**. Siehe den Abschnitt unten für mehr Informationen)

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} verwenden, um Elemente bei Bedarf zu skalieren. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihren positionierten Elementen zu setzen und beobachten Sie, was passiert! Setzen Sie es danach wieder zurück…

> [!NOTE]
> Ja, Margen wirken sich immer noch auf positionierte Elemente aus. Margen-Kollaps tut es jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Positionierungs-Kontexte

Welches Element ist das "umgebende Element" eines absolut positionierten Elements? Dies hängt stark von der Positions-Property der Vorfahren des positionierten Elements ab (siehe [Identifizierung des umgebenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block)).

Wenn keine Vorfahren-Elemente ihre Positions-Property explizit definiert haben, haben standardmäßig alle Vorfahren-Elemente eine statische Position. Das Ergebnis davon ist, dass das absolut positionierte Element im **anfänglichen Begrenzungsblock** enthalten wird. Der anfängliche Begrenzungsblock hat die Maße des Viewports und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum anfänglichen Viewport positioniert.

Das positionierte Element ist im HTML-Quelltext innerhalb des {{htmlelement("body")}} verschachtelt, aber im endgültigen Layout ist es 30px von den oberen und linken Rändern der Seite entfernt. Wir können den **Positionierungskontext** ändern, das heißt, welches Element das absolut positionierte Element relativ positioniert wird. Dies geschieht, indem man eine Positionierung auf einem der Vorfahren des Elements einstellt: auf einem der Elemente, in die es verschachtelt ist (man kann es nicht relativ zu einem Element positionieren, in das es nicht verschachtelt ist). Um dies zu sehen, fügen Sie die folgende Deklaration zu Ihrer `body`-Regel hinzu:

```css
position: relative;
```

Dies sollte das folgende Ergebnis liefern:

```html hidden
<h1>Positioning context</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" alt="snippet of cloth" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Positioning_contexts', '100%', 420) }}

Das positionierte Element sitzt nun relativ zum {{htmlelement("body")}}-Element.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in den z-index

All diese absolute Positionierung macht Spaß, aber es gibt noch ein weiteres Feature, das wir noch nicht betrachtet haben. Wenn Elemente sich zu überlappen beginnen, was bestimmt, welche Elemente über anderen erscheinen und welche unter anderen? In dem Beispiel, das wir bisher gesehen haben, haben wir nur ein positioniertes Element im Positionierungskontext, und es erscheint oben, da positionierte Elemente gegenüber nicht positionierten Elementen bevorzugt werden. Was passiert, wenn wir mehr als eins haben?

Versuchen Sie, das Folgende zu Ihrem CSS hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt sehen Sie den ersten Absatz in Limettenfarbe, aus dem Dokumentfluss heraus verschoben und etwas über dem Ort positioniert, an dem er ursprünglich war. Er ist auch unter dem ursprünglichen `.positioned`-Absatz gestapelt, wo sich die beiden überlappen. Das liegt daran, dass der `.positioned`-Absatz der zweite Absatz in der Quellreihenfolge ist und später in der Quellreihenfolge positionierte Elemente über früher positionierten Elementen liegen.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die Eigenschaft {{cssxref("z-index")}} verwenden. "z-index" bezieht sich auf die z-Achse. Sie erinnern sich wahrscheinlich aus früheren Punkten im Kurs, wo wir diskutiert haben, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um Positionierungen für Dinge wie Hintergrundbilder und Schlagschatten(offsets) zu ermitteln. Für Sprachen, die von links nach rechts laufen, ist (0,0) oben links auf der Seite (oder dem Element) und die x- und y-Achsen verlaufen nach rechts und nach unten auf der Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms zu Ihrem Gesicht hin verläuft (oder was auch immer Sie gerne vor dem Bildschirm haben). {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie höher im Stapel, negative Werte bewegen sie tiefer im Stapel. Standardmäßig haben positionierte Elemente alle einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie, die folgende Deklaration zu Ihrer `p:nth-of-type(1)`-Regel hinzuzufügen:

```css
z-index: 1;
```

Sie sollten jetzt den limettengrünen Absatz oben sehen:

```html hidden
<h1>z-index</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  Now I'm absolutely positioned relative to the
  <code>&lt;body&gt;</code> element, not the <code>&lt;html&gt;</code> element!
</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" alt="snippet of cloth" />
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}

p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

{{ EmbedLiveSample('Introducing_z-index', '100%', 400) }}

Beachten Sie, dass `z-index` nur indizierte Werte ohne Einheiten akzeptiert; Sie können nicht angeben, dass ein Element 23 Pixel auf der z-Achse nach oben verschoben werden soll – so funktioniert das nicht. Höhere Werte gehen über niedrigere Werte, und es liegt bei Ihnen, welche Werte Sie verwenden. Werte von 2 oder 3 würden den gleichen Effekt haben wie Werte von 300 oder 40000.

> [!NOTE]
> Sie können ein Beispiel dafür live sehen unter [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Feste Positionierung

Betrachten wir jetzt die feste Positionierung. Diese funktioniert genau so wie die absolute Positionierung, mit einem wesentlichen Unterschied: Während die absolute Positionierung ein Element relativ zu seinem nächsten positionierten Vorfahren (dem anfänglichen Begrenzungsblock, wenn es keinen gibt) fixiert, fixiert die **feste Positionierung** ein Element in der Regel relativ zum sichtbaren Teil des Viewports. (Eine Ausnahme tritt auf, wenn einer der Vorfahren des Elements ein fester Begrenzungsblock ist, weil seine [transform-Eigenschaft](/de/docs/Web/CSS/transform) einen anderen Wert als _none_ hat.) Dies bedeutet, dass Sie nützliche UI-Elemente erstellen können, die an Ort und Stelle fixiert sind, wie z.B. persistente Navigationsmenüs, die immer sichtbar sind, unabhängig davon, wie viel die Seite gescrollt wird.

Lassen Sie uns ein einfaches Beispiel zusammenstellen, um zu zeigen, was wir meinen. Löschen Sie zunächst die bestehenden `p:nth-of-type(1)` und `.positioned`-Regeln aus Ihrem CSS.

Aktualisieren Sie nun die `body`-Regel, um die `position: relative;`-Deklaration zu entfernen und eine feste Höhe hinzuzufügen, so:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Jetzt werden wir dem {{htmlelement("Heading_Elements", "h1")}}-Element `position: fixed;` geben und es am oberen Rand des Viewports platzieren. Fügen Sie die folgende Regel zu Ihrem CSS hinzu:

```css
h1 {
  position: fixed;
  top: 0;
  width: 500px;
  margin-top: 0;
  background: white;
  padding: 10px;
}
```

Das `top: 0;` ist erforderlich, um es oben am Bildschirm zu fixieren. Wir geben der Überschrift die gleiche Breite wie die Inhaltsspalte und dann einen weißen Hintergrund und etwas Polsterung und Rand, damit der Inhalt nicht darunter sichtbar ist.

Wenn Sie speichern und aktualisieren, sehen Sie einen kleinen Effekt, bei dem die Überschrift fixiert bleibt — der Inhalt scheint nach oben zu scrollen und darunter zu verschwinden. Beachten Sie jedoch, dass ein Teil des Inhalts anfänglich unter der Überschrift abgeschnitten ist. Dies liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentfluss erscheint, sodass der Rest des Inhalts nach oben zum oberen Rand verschoben wird. Wir könnten dies verbessern, indem wir die Absätze alle ein wenig nach unten verschieben. Wir können dies tun, indem wir etwas oberen Rand auf den ersten Absatz setzen. Fügen Sie dies jetzt hinzu:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Sie sollten nun das fertige Beispiel sehen:

```html hidden
<h1>Fixed positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">I'm not positioned any more.</p>

<p>
  We are separated by our margins. Because of margin collapsing, we are
  separated by the width of one of our margins, not both.
</p>

<p>
  Inline elements <span>like this one</span> and <span>this one</span> sit on
  the same line as one another, and adjacent text nodes, if there is space on
  the same line. Overflowing inline elements
  <span>wrap onto a new line if possible — like this one containing text</span>,
  or just go on to a new line if not, much like this image will do:
  <img src="long.jpg" alt="snippet of cloth" />
</p>
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}

p {
  background: aqua;
  border: 3px solid blue;
  padding: 10px;
  margin: 10px;
}

span {
  background: red;
  border: 1px solid black;
}

h1 {
  position: fixed;
  top: 0px;
  width: 500px;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('Fixed_positioning', '100%', 400) }}

> [!NOTE]
> Sie können ein Beispiel dafür live sehen unter [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Sticky Positionierung

Es gibt einen weiteren Positionswert namens `position: sticky`, der etwas neuer als die anderen ist. Dies ist im Grunde ein Hybrid zwischen relativer und fester Position. Er ermöglicht es einem positionierten Element, wie ein relativ positioniertes Element zu fungieren, bis es zu einem bestimmten Schwellenwert gescrollt wird (z.B. 10px vom oberen Rand des Viewports entfernt), wonach es fest wird.

### Einfaches Beispiel

Sticky Positionierung kann beispielsweise verwendet werden, um eine Navigationsleiste mit der Seite scrollen zu lassen, bis zu einem bestimmten Punkt, und dann am oberen Rand der Seite zu haften.

```html hidden
<h1>Sticky positioning</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Sticky</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Basic_example', '100%', 200) }}

### Scrollindex

Ein interessantes und häufiges Anwendungsbeispiel für `position: sticky` ist das Erstellen einer Scrollindex-Seite, bei der verschiedene Überschriften an der Oberseite der Seite kleben bleiben, wenn sie diese erreichen. Das Markup für ein solches Beispiel könnte folgendermaßen aussehen:

```html
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

Das CSS könnte wie folgt aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir `position: sticky` zum {{htmlelement("dt")}}-Element hinzufügen, zusammen mit einem {{cssxref("top")}}-Wert von 0, haften unterstützende Browser die Überschriften an den oberen Rand des Viewports, wenn sie diese Position erreichen. Jede nachfolgende Überschrift ersetzt dann die vorherige, wenn sie zu dieser Position scrollt.

```css
dt {
  background-color: black;
  color: white;
  padding: 10px;
  position: sticky;
  top: 0;
  left: 0;
  margin: 1em 0;
}
```

```css hidden
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

```html hidden
<h1>Sticky positioning</h1>

<dl>
  <dt>A</dt>
  <dd>Apple</dd>
  <dd>Ant</dd>
  <dd>Altimeter</dd>
  <dd>Airplane</dd>
  <dt>B</dt>
  <dd>Bird</dd>
  <dd>Buzzard</dd>
  <dd>Bee</dd>
  <dd>Banana</dd>
  <dd>Beanstalk</dd>
  <dt>C</dt>
  <dd>Calculator</dd>
  <dd>Cane</dd>
  <dd>Camera</dd>
  <dd>Camel</dd>
  <dt>D</dt>
  <dd>Duck</dd>
  <dd>Dime</dd>
  <dd>Dipstick</dd>
  <dd>Drone</dd>
  <dt>E</dt>
  <dd>Egg</dd>
  <dd>Elephant</dd>
  <dd>Egret</dd>
</dl>
```

{{ EmbedLiveSample('Scrolling_index', '100%', 200) }}

Sticky-Elemente sind "sticky" relativ zur nächsten Vorfahren mit einem "Scrollmechanismus", der durch die [overflow-Eigenschaft](/de/docs/Web/CSS/overflow) seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können dieses Beispiel live sehen unter [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie sich diese Informationen gemerkt haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Positioning](/de/docs/Learn/CSS/CSS_layout/Position_skills).

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß beim Spielen mit grundlegender Positionierung. Auch wenn es nicht die ideale Methode für das gesamte Layout ist, gibt es viele spezifische Ziele, für die es geeignet ist.

## Siehe auch

- Die {{cssxref("position")}} Property Reference.
- [Praktische Positionierungsbeispiele](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples), für einige weitere nützliche Ideen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}
