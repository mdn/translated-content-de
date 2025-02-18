---
title: Positionierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 179872e1c21ddaba37d4ef9d1187ee5995e0aa45
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}

Die Positionierung ermöglicht es, Elemente aus dem normalen Dokumentenfluss zu entfernen und sie anders verhalten zu lassen, z. B. übereinander zu sitzen oder immer an derselben Stelle im Browser-Viewport zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und wie man sie verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundlagen der CSS-Layout-Konzepte</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li><code>static</code>-Positionierung ist die Standardweise, wie Elemente auf der Seite positioniert werden.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Fluss, aber absolute (und fixe/sticky) Positionierung entfernt Elemente vollständig aus dem normalen Fluss, sodass sie in einer separaten Ebene sitzen.</li>
          <li>Die endgültige Position im Layout kann mit den Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> geändert werden, jedoch haben diese je nach festgelegtem <code>position</code>-Wert unterschiedliche Auswirkungen.</li>
          <li>Festlegung des Positionierungskontextes eines positionierten Elements durch Positionierung eines übergeordneten Elements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Holen Sie sich, wenn möglich, eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repository ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und verwenden Sie diese als Ausgangspunkt.

## Einführung in die Positionierung

Positionierung ermöglicht es uns, interessante Ergebnisse zu erzielen, indem der normale Dokumentenfluss überschrieben wird. Was ist, wenn Sie die Position einiger Boxen leicht von ihrer Standardflussposition ändern möchten, um ein leicht eigenartiges, unregelmäßiges Erscheinungsbild zu erzielen? Die Positionierung ist Ihr Werkzeug. Oder was ist, wenn Sie ein UI-Element erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster sitzt, egal wie stark die Seite nach unten gescrollt wird? Solche Layout-Arbeiten sind mit der Positionierung möglich.

Es gibt verschiedene Arten der Positionierung, die Sie auf HTML-Elemente anwenden können. Um eine bestimmte Art der Positionierung auf ein Element anzuwenden, verwenden wir die {{cssxref("position")}}-Eigenschaft.

## Statische Positionierung

Statische Positionierung ist die Standardeinstellung, die jedes Element erhält. Es bedeutet einfach: „Setzen Sie das Element an seine Standardposition im normalen Fluss – nichts Besonderes zu sehen.“

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte einzurichten), fügen Sie zunächst eine `class` von `positioned` zum zweiten {{htmlelement("p")}} in Ihrem HTML hinzu:

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

Wenn Sie speichern und aktualisieren, sehen Sie überhaupt keinen Unterschied, außer der aktualisierten Hintergrundfarbe des zweiten Absatzes. Das ist in Ordnung — wie wir zuvor gesagt haben, ist die statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live unter [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Positionierung

Die relative Positionierung ist die erste Art der Positionierung, die wir uns ansehen. Dies ist der statischen Positionierung sehr ähnlich, außer dass Sie die endgültige Position des positionierten Elements ändern können, sobald es seinen Platz im normalen Fluss eingenommen hat, einschließlich der Möglichkeit, es mit anderen Elementen auf der Seite zu überlappen. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie speichern und aktualisieren, sehen Sie zunächst keine Änderung am Ergebnis. Wie ändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären werden.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau anzugeben, wohin das positionierte Element bewegt werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen zur `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können jede [Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) annehmen, die Sie vernünftigerweise erwarten können: Pixel, mm, rem, %, usw.

Wenn Sie jetzt speichern und aktualisieren, erhalten Sie ein Ergebnis wie dieses:

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

Cool, oder? Ok, das war wahrscheinlich nicht, was Sie erwartet haben. Warum hat es nach unten und rechts verschoben, obwohl wir _top_ und _left_ angegeben haben? Dies mag kontraintuitiv erscheinen. Sie müssen sich dies so vorstellen, als gäbe es eine unsichtbare Kraft, die die angegebene Seite der positionierten Box drückt, wodurch sie sich in die entgegengesetzte Richtung bewegt. Wenn Sie also beispielsweise `top: 30px;` angeben, wird die Oberseite der Box durch eine Kraft nach unten um 30px gedrückt.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live unter [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Positionierung

Absolute Positionierung bringt sehr unterschiedliche Ergebnisse.

### Einstellung von position: absolute

Versuchen wir, die Positionsdeklaration in Ihrem Code wie folgt zu ändern:

```css
position: absolute;
```

Wenn Sie jetzt speichern und aktualisieren, sollten Sie etwas wie folgt sehen:

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

Beachten Sie zuerst, dass die Lücke, in der sich das positionierte Element im Dokumentenfluss befinden sollte, nicht mehr vorhanden ist — das erste und das dritte Element sind zusammengeschoben, als ob es nicht mehr existiert! In gewisser Weise ist dies wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentenfluss. Stattdessen befindet es sich auf einer eigenen Ebene, getrennt von allem anderen. Das ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Funktionen erstellen können, die das Layout anderer Elemente auf der Seite nicht beeinträchtigen. Zum Beispiel Popup-Informationsboxen, Steuermenüs, Rollover-Panels, UI-Funktionen, die überall auf der Seite hin und her verschoben werden können, und so weiter.

Zweitens hat sich die Position des Elements geändert. Dies liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei absoluter Positionierung anders funktionieren. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentenflusses zu positionieren, geben sie den Abstand an, den das Element von jeder Seite des enthaltenden Elements haben soll. In diesem Fall geben wir an, dass das absolut positionierte Element 30px vom oberen Rand des **enthaltenden Elements** (in diesem Fall der **initiale enthaltende Block**, siehe unten) und 30px vom linken Rand entfernt sitzen soll.

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, um Elemente bei Bedarf zu dimensionieren. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihre positionierten Elemente anzuwenden und sehen Sie, was passiert! Setzen Sie es danach wieder zurück …

> [!NOTE]
> Ja, Margins wirken sich noch immer auf positionierte Elemente aus. Margin Collapsing jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live unter [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Positionierungskontexte

Welches Element ist das "enthaltende Element" eines absolut positionierten Elements? Dies hängt stark vom `position`-Eigenschaftswert der Vorfahren des positionierten Elements ab.

Wenn keine Vorfahren-Elemente ihre Positions-Eigenschaft explizit definiert haben, haben standardmäßig alle Vorfahren-Elemente eine statische Position. Das Ergebnis ist, dass das absolut positionierte Element im **initialen enthaltenden Block** enthalten sein wird. Der initiale enthaltende Block hat die Dimensionen des Viewports und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum initialen Viewport positioniert.

Das positionierte Element ist im HTML-Quellcode innerhalb des {{htmlelement("body")}} verschachtelt, wird jedoch im endgültigen Layout 30px von den oberen und linken Rändern der Seite entfernt positioniert. Wir können den **Positionierungskontext** ändern, d.h. welches Element das absolut positionierte Element relativ positioniert. Dies erfolgt durch das Setzen der Positionierung auf eines der Vorfahren-Elemente: zu einem der Elemente, in die es verschachtelt ist (es kann nicht relativ zu einem Element positioniert werden, in das es nicht verschachtelt ist). Um dies zu sehen, fügen Sie die folgende Deklaration zur Regel Ihres `body` hinzu:

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

Das positionierte Element sitzt nun relativ zum {{htmlelement("body")}}-Element.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live unter [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in z-index

All diese absolute Positionierung macht Spaß, aber es gibt eine weitere Funktion, die wir noch nicht berücksichtigt haben. Wenn Elemente beginnen, sich zu überlappen, was bestimmt dann, welche Elemente über anderen erscheinen und welche unter anderen? In dem Beispiel, das wir bisher gesehen haben, gibt es nur ein positioniertes Element im Positionierungskontext, und es erscheint oben, da positionierte Elemente gegenüber nicht positionierten Elementen bevorzugt werden. Was passiert, wenn es mehr als eins gibt?

Versuchen Sie, Ihrem CSS Folgendes hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt werden Sie sehen, wie der erste Absatz limonengrün eingefärbt wurde, aus dem Dokumentenfluss entfernt wurde und etwas über dem ursprünglichen Ort positioniert wurde. Es wird jedoch auch unter dem ursprünglichen `.positioned`-Absatz platziert, wo sich die beiden überlappen. Dies liegt daran, dass der `.positioned`-Absatz der zweite Absatz in der Quellreihenfolge ist, und positionierte Elemente, die später in der Quellreihenfolge auftreten, bevorzugt werden.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die {{cssxref("z-index")}}-Eigenschaft verwenden. „z-index“ ist ein Verweis auf die z-Achse. Sie erinnern sich vielleicht an frühere Punkte im Kurs, an denen wir besprachen, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um die Positionierung für Dinge wie Hintergrundbilder und Drop-Shadow-Versätze zu berechnen. Für Sprachen, die von links nach rechts laufen, liegt (0,0) oben links auf der Seite (oder dem Element), und die x- und y-Achsen laufen nach rechts und unten durch die Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms auf Ihr Gesicht (oder etwas anderes vor dem Bildschirm) zuläuft. {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie weiter nach oben im Stapel, negative Werte weiter nach unten. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie, der Regel `p:nth-of-type(1)` die folgende Deklaration hinzuzufügen:

```css
z-index: 1;
```

Sie sollten nun sehen, dass der limonengrüne Absatz oben ist:

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

Beachten Sie, dass `z-index` nur indexierte Werte ohne Einheit akzeptiert; Sie können nicht angeben, dass ein Element 23 Pixel auf der Z-Achse nach oben verschoben werden soll — so funktioniert das nicht. Höhere Werte gehen über niedrigere Werte, und es liegt an Ihnen, welche Werte Sie verwenden. Werte von 2 oder 3 würden denselben Effekt wie Werte von 300 oder 40000 erzielen.

> [!NOTE]
> Sie können ein Beispiel hierzu live unter [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Fixe Positionierung

Schauen wir uns nun die fixe Positionierung an. Diese funktioniert auf genau dieselbe Weise wie die absolute Positionierung, mit einem entscheidenden Unterschied: Während absolute Positionierung ein Element relativ zum nächstgelegenen positionierten Vorfahren (dem initialen enthaltenden Block, wenn keiner vorhanden ist) fixiert, fixiert **fixe Positionierung** ein Element relativ zum sichtbaren Bereich des Viewports. Das bedeutet, dass Sie nützliche UI-Elemente erstellen können, die fixiert bleiben, wie z. B. stets sichtbare Navigationsmenüs, unabhängig davon, wie stark die Seite gescrollt wird.

Erstellen wir ein einfaches Beispiel, um zu zeigen, was wir meinen. Entfernen Sie zunächst die vorhandenen Regeln `p:nth-of-type(1)` und `.positioned` aus Ihrem CSS.

Aktualisieren Sie nun die Regel für `body`, um die Deklaration `position: relative;` zu entfernen und eine feste Höhe hinzuzufügen, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Nun werden wir das {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element auf `position: fixed;` setzen und es oben im Viewport fixieren. Fügen Sie die folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` ist notwendig, um es am oberen Rand des Bildschirms zu fixieren. Wir geben der Überschrift dieselbe Breite wie der Inhaltskolumne sowie einen weißen Hintergrund und einige Padding- und Margin-Werte, sodass der Inhalt nicht darunter sichtbar wird.

Wenn Sie speichern und aktualisieren, sehen Sie einen kleinen Effekt, bei dem die Überschrift fixiert bleibt — der Inhalt scheint hochzuscrollen und darunter zu verschwinden. Beachten Sie jedoch, wie ein Teil des Inhalts zunächst unter der Überschrift abgeschnitten ist. Dies liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentenfluss erscheint, sodass der Rest des Inhalts nach oben verschoben wird. Wir könnten dies verbessern, indem wir die Absätze alle etwas nach unten verschieben. Dies können wir tun, indem wir einen oberen Rand für den ersten Absatz setzen. Fügen Sie dies nun hinzu:

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
> Sie können ein Beispiel hierfür live unter [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ansehen ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Sticky Positionierung

Es gibt einen weiteren Wert für die Positionierung namens `position: sticky`, der etwas neuer als die anderen ist. Dies ist im Grunde eine Kombination aus relativer und fixer Positionierung. Es erlaubt einem positionierten Element, sich wie ein relativ positioniertes Element zu verhalten, bis es an einen bestimmten Schwellenwert gescrollt wird (z. B. 10px vom oberen Rand des Viewports), wonach es fixiert wird.

### Einfaches Beispiel

Sticky-Positionierung kann beispielsweise verwendet werden, um eine Navigationsleiste zu erstellen, die mit der Seite scrollt, bis zu einem bestimmten Punkt, und dann am oberen Rand der Seite fixiert bleibt.

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

### Scroll-Index

Ein interessanter und häufiger Anwendungsfall für `position: sticky` ist die Erstellung einer Scroll-Index-Seite, bei der verschiedene Überschriften am oberen Rand der Seite haften, wenn sie ihn erreichen. Das Markup für ein solches Beispiel könnte folgendermaßen aussehen:

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

Das CSS könnte wie folgt aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir `position: sticky` zum {{htmlelement("dt")}}-Element hinzufügen, zusammen mit einem {{cssxref("top")}}-Wert von 0, haften die Überschriften in unterstützenden Browsern am oberen Rand des Viewports, sobald sie diese Position erreichen. Jede nachfolgende Überschrift ersetzt dann die vorherige, wenn sie an diese Position scrollt.

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

Sticky-Elemente sind "klebrig" relativ zu dem nächstgelegenen Vorfahren mit einem "Scrolling-Mechanismus", der durch die [overflow](/de/docs/Web/CSS/overflow)-Eigenschaft seiner Vorfahren bestimmt wird.

> [!NOTE]
> Dieses Beispiel kann live unter [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) angezeigt werden ([Quellcode anzeigen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige zusätzliche Tests, um zu prüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Position_skills).

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß daran, mit grundlegender Positionierung zu experimentieren. Obwohl es keine ideale Methode für komplette Layouts ist, gibt es viele spezifische Zwecke, für die sie geeignet ist. Als Nächstes werden wir uns mit Flexbox befassen.

## Siehe auch

- Die {{cssxref("position")}}-Eigenschaftsreferenz.
- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) für einige weitere nützliche Ideen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}
