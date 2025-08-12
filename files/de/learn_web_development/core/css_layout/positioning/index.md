---
title: Positionierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 2a4d705a12d76ee17e013f8a50007fd25029e0fc
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}

Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentfluss herauszunehmen und anders zu verhalten, zum Beispiel übereinander zu liegen oder immer an derselben Stelle im Browserfenster zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}} Werte und wie man sie verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content">Strukturierung von Inhalten mit HTML</a>,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftartenstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten der CSS-Layout</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li><code>static</code> Positionierung ist die Standardweise, wie Elemente auf der Seite positioniert werden.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Fluss, aber absolute (und fixierte/sticky) Positionierung nimmt Elemente vollständig aus dem normalen Fluss, um in einer separaten Ebene zu sitzen.</li>
          <li>Die endgültige Position im Layout kann mit den Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> geändert werden, aber diese haben unterschiedliche Effekte, abhängig vom festgelegten <code>position</code> Wert.</li>
          <li>Festlegen des Positionierungskontexts eines positionierten Elements durch Positionierung eines Vorfahrenelements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Wenn möglich, holen Sie sich eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repo ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und verwenden diese als Ausgangspunkt.

## Einführung in die Positionierung

Die Positionierung ermöglicht es uns, interessante Ergebnisse zu erzielen, indem der normale Dokumentfluss überschrieben wird. Was, wenn Sie die Position einiger Boxen von ihrer Standardflussposition leicht ändern möchten, um ein etwas skurriles, unruhiges Gefühl zu erzeugen? Die Positionierung ist Ihr Werkzeug. Oder was, wenn Sie ein Benutzeroberflächenelement erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster bleibt, egal wie weit die Seite gescrollt wird? Die Positionierung ermöglicht solche Layout-Arbeiten.

Es gibt eine Reihe verschiedener Positionierungsarten, die Sie auf HTML-Elemente anwenden können. Um eine bestimmte Art der Positionierung auf ein Element anzuwenden, verwenden wir die {{cssxref("position")}} Eigenschaft.

## Statische Positionierung

Statische Positionierung ist die Standardeinstellung, die jedes Element erhält. Es bedeutet einfach: "Stellen Sie das Element in seine Standardposition im normalen Fluss — nichts Besonderes hier."

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte vorzubereiten), fügen Sie zuerst dem zweiten {{htmlelement("p")}} im HTML eine `class` von `positioned` hinzu:

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

Wenn Sie speichern und aktualisieren, werden Sie keinen Unterschied sehen, außer der aktualisierten Hintergrundfarbe des 2. Absatzes. Das ist in Ordnung — wie wir vorher gesagt haben, ist statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können sich das Beispiel zu diesem Zeitpunkt live unter [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Positionierung

Relative Positionierung ist die erste Positionierungsart, die wir uns ansehen werden. Diese ist sehr ähnlich zur statischen Positionierung, mit der Ausnahme, dass Sie die endgültige Position des positionierten Elements ändern können, sobald es seinen Platz im normalen Fluss eingenommen hat, auch indem es andere Elemente auf der Seite überlagert. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie jetzt speichern und aktualisieren, sehen Sie keinerlei Änderung im Ergebnis. Wie ändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären werden.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau anzugeben, wohin das positionierte Element verschoben werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen der `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können jede [Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) annehmen, die Sie vernünftigerweise erwarten: Pixel, mm, rems, %, usw.

Wenn Sie jetzt speichern und aktualisieren, erhalten Sie ein Ergebnis, das etwa so aussieht:

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
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="snippet of cloth" />
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

Cool, oder? Okay, das war wahrscheinlich nicht das, was Sie erwartet hatten. Warum hat es sich nach unten und rechts bewegt, obwohl wir _top_ und _left_ angegeben haben? Das mag kontraintuitiv erscheinen. Sie müssen sich das so vorstellen, als ob eine unsichtbare Kraft die angegebene Seite der positionierten Box schiebt und sie in die entgegengesetzte Richtung bewegt. Wenn Sie zum Beispiel `top: 30px;` angeben, ist es, als ob eine Kraft die Oberseite der Box herunterdrückt, was dazu führt, dass sie sich um 30px nach unten bewegt.

> [!NOTE]
> Sie können sich das Beispiel zu diesem Zeitpunkt live unter [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Positionierung

Absolute Positionierung bringt ganz andere Ergebnisse.

### Position: absolute setzen

Versuchen Sie, die Position-Deklaration in Ihrem Code wie folgt zu ändern:

```css
position: absolute;
```

Wenn Sie jetzt speichern und aktualisieren, sehen Sie etwa Folgendes:

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
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="snippet of cloth" />
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

Beachten Sie zunächst, dass die Lücke, an der das positionierte Element im Dokumentfluss hätte sein sollen, nicht mehr vorhanden ist — die ersten und dritten Elemente sind zusammengeschrumpft, als ob es nicht mehr existiert! Nun, in gewisser Weise ist das wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentfluss. Stattdessen sitzt es auf einer eigenen Ebene, getrennt von allem anderen. Dies ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Features erstellen können, die das Layout anderer Elemente auf der Seite nicht stören, z. B. Popup-Informationsboxen, Steuerungsmenüs, Roll-over-Panels, UI-Features, die überall auf der Seite hin- und hergezogen werden können, und dergleichen.

Zweitens beachten Sie, dass sich die Position des Elements geändert hat. Dies liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} auf andere Weise mit absoluter Positionierung funktionieren. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentflusses zu positionieren, geben sie die Entfernung an, die das Element von jeder Seite des enthaltenen Elements haben soll. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des **enthaltenen Elements** (in diesem Fall der **initiale umschließende Block**, siehe unten) und 30px vom linken Rand sitzen sollte.

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} verwenden, um Elemente bei Bedarf zu vergrößern. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihre positionierten Elemente zu setzen und zu sehen, was passiert! Setzen Sie es danach wieder zurück …

> [!NOTE]
> Ja, Ränder wirken sich immer noch auf positionierte Elemente aus. Margin-Collapsing jedoch nicht.

> [!NOTE]
> Sie können sich das Beispiel zu diesem Zeitpunkt live unter [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Positionierungskontexte

Welches Element ist das "enthaltende Element" eines absolut positionierten Elements? Dies hängt stark vom `position` Eigenschaftswert der Vorfahren des positionierten Elements ab.

Wenn keine Vorfahrenelemente ihre Positionseigenschaft explizit definiert haben, werden alle Vorfahrenelemente standardmäßig eine statische Position haben. Das Ergebnis ist, dass das absolut positionierte Element im **initialen umschließenden Block** enthalten sein wird. Der initiale umschließende Block hat die Dimensionen des Ansichtsfensters und ist auch der Block, der das {{htmlelement("html")}} Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}} Elements angezeigt und relativ zum initialen Ansichtsfenster positioniert.

Das positionierte Element ist im HTML-Quelltext innerhalb des {{htmlelement("body")}} verschachtelt, aber im endgültigen Layout ist es 30px von den oberen und linken Seiten der Seite entfernt. Wir können den **Positionierungskontext** ändern, also welches Element das absolut positionierte Element relativ positioniert wird. Dies erfolgt durch Setzen der Positionierung auf einem der Vorfahrenelemente des Elements: auf eines der Elemente, in denen es verschachtelt ist (Sie können es nicht relativ zu einem Element positionieren, in dem es nicht verschachtelt ist). Um dies zu sehen, fügen Sie die folgende Deklaration zu Ihrer `body` Regel hinzu:

```css
position: relative;
```

Dies sollte folgendes Ergebnis bringen:

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
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="snippet of cloth" />
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

Das positionierte Element befindet sich nun relativ zum {{htmlelement("body")}} Element.

> [!NOTE]
> Sie können sich das Beispiel zu diesem Zeitpunkt live unter [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in z-index

All diese absolute Positionierung ist ein Spaß, aber es gibt noch ein weiteres Feature, das wir noch nicht betrachtet haben. Wenn sich Elemente überlappen, was bestimmt, welche Elemente über anderen erscheinen und welche darunter? In dem Beispiel, das wir bisher gesehen haben, haben wir nur ein positioniertes Element im Positionierungskontext und es erscheint oben, da positionierte Elemente nicht positionierten Elementen überlegen sind. Was ist, wenn wir mehr als eines haben?

Versuchen Sie, das folgende zu Ihrem CSS hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt sehen Sie den ersten Absatz in Limettengrün, aus dem Dokumentfluss bewegt, und etwas oberhalb der Stelle positioniert, an der er ursprünglich war. Er ist auch unter dem ursprünglichen `.positioned` Absatz gestapelt, wo sich die beiden überlappen. Dies liegt daran, dass `.positioned` der zweite Absatz in der Quellreihenfolge ist und später im Code platzierte positionierte Elemente früher im Code platzierten positionierten Elementen überlegen sind.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie mit der {{cssxref("z-index")}} Eigenschaft. "z-index" bezieht sich auf die z-Achse. Sie erinnern sich vielleicht aus früheren Punkten des Kurses, bei denen wir diskutiert haben, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um die Positionierung für Dinge wie Hintergrundbilder und Drop-Shadow-Offests zu berechnen. Für Sprachen, die von links nach rechts laufen, ist (0,0) oben links auf der Seite (oder dem Element), und die x- und y-Achsen verlaufen nach rechts und nach unten auf der Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms zu Ihrem Gesicht verläuft (oder was auch immer Sie vor dem Bildschirm haben möchten). {{cssxref("z-index")}} Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie höher in den Stapel, negative Werte bewegen sie tiefer in den Stapel. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie die folgende Deklaration zu Ihrer `p:nth-of-type(1)` Regel hinzuzufügen:

```css
z-index: 1;
```

Sie sollten nun den limettengrünen Absatz oben sehen:

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
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="snippet of cloth" />
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

Beachten Sie, dass `z-index` nur indizierte Werte ohne Einheiten akzeptiert; Sie können nicht angeben, dass Sie möchten, dass ein Element 23 Pixel in der Z-Achse höher ist — das funktioniert nicht so. Höhere Werte gehen über niedrigere Werte, und es liegt an Ihnen, welche Werte Sie verwenden. Die Verwendung von Werten von 2 oder 3 würde den gleichen Effekt haben wie Werte von 300 oder 40000.

> [!NOTE]
> Sie können sich ein Beispiel dafür live unter [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Fixierte Positionierung

Schauen wir uns nun die fixierte Positionierung an. Diese funktioniert genau wie die absolute Positionierung, mit einem wichtigen Unterschied: Während die absolute Positionierung ein Element relativ zu seinem nächstgelegenen positionierten Vorfahren fixiert (der initiale umschließende Block, wenn es keinen gibt), fixiert die **fixierte Positionierung** ein Element relativ zum sichtbaren Teil des Ansichtsfensters. Dies bedeutet, dass Sie nützliche UI-Elemente erstellen können, die fest positioniert sind, wie z. B. permanente Navigationsmenüs, die immer sichtbar bleiben, egal wie weit die Seite gescrollt wird.

Lasst uns ein einfaches Beispiel zusammenstellen, um zu zeigen, was wir meinen. Löschen Sie zunächst die vorhandenen `p:nth-of-type(1)` und `.positioned` Regeln aus Ihrem CSS.

Aktualisieren Sie jetzt die `body` Regel, um die `position: relative;` Deklaration zu entfernen und eine feste Höhe hinzuzufügen, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Nun geben wir dem {{htmlelement("Heading_Elements", "&lt;h1>")}} Element `position: fixed;` und lassen es oben im Ansichtsfenster sitzen. Fügen Sie die folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` ist erforderlich, um es am oberen Rand des Bildschirms zu fixieren. Wir geben der Überschrift die gleiche Breite wie die Inhalts-Spalte, dann einen weißen Hintergrund und etwas Padding und Margin, damit der Inhalt nicht darunter sichtbar ist.

Wenn Sie speichern und aktualisieren, sehen Sie einen kleinen Effekt, dass die Überschrift fixiert bleibt – der Inhalt scheint nach oben zu scrollen und unter ihr zu verschwinden. Aber beachten Sie, dass ein Teil des Inhalts zunächst unter der Überschrift abgeschnitten ist. Dies liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentfluss erscheint, sodass der Rest des Inhalts nach oben an den oberen Rand verschoben wird. Wir könnten dies verbessern, indem wir die Absätze ein wenig nach unten verschieben. Wir können das tun, indem wir am ersten Absatz ein oberes Margin setzen. Fügen Sie dies jetzt hinzu:

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
  <img
    src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
    alt="snippet of cloth" />
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
> Sie können sich ein Beispiel dafür live unter [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Sticky Positionierung

Es gibt einen anderen verfügbaren Positionswert namens `position: sticky`, der etwas neuer ist als die anderen. Dies ist im Wesentlichen eine Hybridform zwischen relativer und fixierter Positionierung. Es ermöglicht einem positionierten Element, sich so zu verhalten, als ob es relativ positioniert ist, bis es zu einem bestimmten Schwellenwert gescrollt wird (z. B. 10px vom oberen Rand des Ansichtsfensters), nach dem es fixiert wird.

### Einfaches Beispiel

Sticky Positionierung kann verwendet werden, um beispielsweise eine Navigationsleiste zu erzeugen, die mit der Seite scrollt, bis zu einem bestimmten Punkt, und dann oben an der Seite klebt.

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

### Scrollende Index

Ein interessanter und häufiger Gebrauch von `position: sticky` ist, eine scrollende Indexseite zu erstellen, bei der verschiedene Überschriften oben an der Seite haften, wenn sie diese erreichen. Das Markup für ein solches Beispiel könnte so aussehen:

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

Das CSS könnte wie folgt aussehen. Im normalen Fluss werden die {{htmlelement("dt")}} Elemente mit dem Inhalt scrollen. Wenn wir den {{htmlelement("dt")}} Element `position: sticky` hinzufügen, zusammen mit einem {{cssxref("top")}} Wert von 0, werden unterstützende Browser die Überschriften oben im Ansichtsfenster fixieren, sobald sie diese Position erreichen. Jede nachfolgende Überschrift wird dann die vorherige ersetzen, wenn sie zu dieser Position hochscrollt.

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
  height: 880px;
  margin: 0 auto;
}
```

{{ EmbedLiveSample('Scrolling_index', '100%', 200) }}

Sticky-Elemente sind "sticky" im Verhältnis zu dem nächstgelegenen Vorfahren mit einem "Scrollmechanismus", der durch die [overflow](/de/docs/Web/CSS/overflow) Eigenschaft seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können sich dieses Beispiel live unter [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Zusammenfassung

Ich bin sicher, dass Sie Spaß daran hatten, mit der grundlegenden Positionierung zu spielen. Auch wenn es keine ideale Methode ist, um gesamte Layouts zu verwenden, gibt es viele spezifische Ziele, für die es sich eignet.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und behalten haben.

## Siehe auch

- Die {{cssxref("position")}} Eigenschaftsreferenz.
- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) für weitere nützliche Ideen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}
