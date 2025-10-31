---
title: Positionierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}

Mit der Positionierung können Sie Elemente aus dem normalen Dokumentenfluss herausnehmen und anders verhalten, zum Beispiel übereinander liegen oder immer an derselben Stelle im Browserfenster bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und wie man sie verwendet.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS-Grundlagen zum Styling</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten von CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li><code>static</code> Positionierung ist die Standardweise, wie Elemente auf der Seite positioniert werden.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Fluss, während absolute (und feste/klebrige) Positionierung Elemente vollständig aus dem normalen Fluss herausnimmt, um sie in einer separaten Schicht zu platzieren.</li>
          <li>Die endgültige Layoutposition kann mit den Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> verändert werden, allerdings haben diese unterschiedliche Auswirkungen, je nachdem welcher <code>position</code>-Wert gesetzt ist.</li>
          <li>Festlegen des Positionierungskontextes eines positionierten Elements durch Positionierung eines übergeordneten Elements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Rechner durchführen. Falls möglich, holen Sie sich eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repository ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und verwenden Sie diese als Ausgangspunkt.

## Einführung in die Positionierung

Mit der Positionierung können wir interessante Ergebnisse erzielen, indem wir den normalen Dokumentenfluss überschreiben. Was, wenn Sie die Position einiger Boxen leicht von ihrer Standardflussposition verändern möchten, um ein leicht skurriles, lässiges Gefühl zu erzeugen? Die Positionierung ist Ihr Werkzeug. Oder was, wenn Sie ein UI-Element erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster sitzt, egal wie weit die Seite gescrollt wird? Die Positionierung macht solches Layoutarbeiten möglich.

Es gibt mehrere verschiedene Arten der Positionierung, die Sie auf HTML-Elemente anwenden können. Um eine spezifische Art der Positionierung auf einem Element aktiv zu machen, verwenden wir die {{cssxref("position")}}-Eigenschaft.

## Statische Positionierung

Statische Positionierung ist die Standardpositionierung, die jedes Element erhält. Es bedeutet einfach "Setze das Element an seine Standardposition im normalen Fluss — nichts Besonderes zu sehen."

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte vorzubereiten), fügen Sie zuerst die `class` von `positioned` zum zweiten {{htmlelement("p")}} im HTML hinzu:

```html
<p class="positioned">…</p>
```

Fügen Sie nun die folgende Regel unten in Ihrem CSS hinzu:

```css
.positioned {
  position: static;
  background: yellow;
}
```

Wenn Sie speichern und aktualisieren, sehen Sie keinen Unterschied außer der aktualisierten Hintergrundfarbe des zweiten Absatzes. Das ist in Ordnung — wie bereits erwähnt, ist die statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live sehen bei [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Positionierung

Relative Positionierung ist der erste Positionstyp, den wir uns ansehen werden. Dies ist der statischen Positionierung sehr ähnlich, außer dass, sobald das positionierte Element seinen Platz im normalen Fluss eingenommen hat, Sie dann seine endgültige Position ändern können, einschließlich des Überlappens anderer Elemente auf der Seite. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie an dieser Stelle speichern und aktualisieren, werden Sie keine Änderung im Ergebnis sehen. Wie verändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau anzugeben, wohin das positionierte Element bewegt werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen zur `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können jede [Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) annehmen, die Sie sinnvollerweise erwarten würden: Pixel, mm, rems, %, usw.

Wenn Sie nun speichern und aktualisieren, erhalten Sie ein Ergebnis, das in etwa so aussieht:

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

Cool, oder? Ok, das war wahrscheinlich nicht das, was Sie erwartet haben. Warum hat es sich nach unten und rechts bewegt, wenn wir _top_ und _left_ angegeben haben? Dies mag kontraintuitiv erscheinen. Sie müssen es sich so vorstellen, als ob eine unsichtbare Kraft die angegebene Seite des positionierten Elements drückt und es in die entgegengesetzte Richtung bewegt. Wenn Sie also z.B. `top: 30px;` angeben, ist es so, als ob eine Kraft den oberen Rand des Elements drückt, wodurch es um 30px nach unten bewegt wird.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live sehen bei [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Positionierung

Absolute Positionierung führt zu sehr unterschiedlichen Ergebnissen.

### Position: absolute setzen

Versuchen wir, die Position-Deklaration in Ihrem Code wie folgt zu ändern:

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

Beachten Sie zuerst, dass die Lücke, in der sich das positionierte Element im Dokumentenfluss befinden sollte, nicht mehr vorhanden ist — die ersten und dritten Elemente sind zusammengewachsen, als ob es nicht mehr existiert! In gewisser Weise ist das wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentenfluss. Stattdessen befindet es sich in einer eigenen Schicht, getrennt von allem anderen. Das ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Features erstellen können, die das Layout anderer Elemente auf der Seite nicht stören. Zum Beispiel Popup-Informationsboxen, Steuerungsmenüs, Überrollpanel, UI-Features, die beliebig auf der Seite verschoben werden können, und so weiter.

Zweitens, beachten Sie, dass sich die Position des Elements geändert hat. Dies liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei absoluter Positionierung anders funktionieren. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentenflusses zu positionieren, geben sie den Abstand an, den das Element von jeder Seite des umgebenden Elements haben soll. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des **umgebenden Elements** (dem **initialen umgebenden Block**, in diesem Fall, siehe unten) und 30px von links sitzen soll.

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, um Elemente bei Bedarf zu skalieren. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` für Ihre positionierten Elemente zu setzen und sehen Sie was passiert! Setzen Sie es danach wieder zurück…

> [!NOTE]
> Ja, Margen beeinflussen immer noch positionierte Elemente. Margin-Collapsing jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live sehen bei [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Positionierungskontexte

Welches Element ist das "umgebende Element" eines absolut positionierten Elements? Dies hängt sehr stark vom `position`-Eigenschaftswert der Vorfahren des positionierten Elements ab.

Wenn keine Vorfahrenelemente ihre Positionseigenschaft explizit definiert haben, haben standardmäßig alle Vorfahrenelemente eine statische Position. Das Ergebnis davon ist, dass das absolut positionierte Element im **initialen umgebenden Block** enthalten sein wird. Der initiale umgebende Block hat die Abmessungen des Ansichtsfensters und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten: Das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum initialen Ansichtsfenster positioniert.

Das positionierte Element ist im HTML-Quelltext innerhalb des {{htmlelement("body")}} eingebettet, aber im endgültigen Layout ist es 30px von den oberen und linken Rändern der Seite entfernt. Wir können den **Positionierungskontext**, das heißt, welches Element das absolut positionierte Element relativ zu seiner Position positioniert ist, ändern. Dies geschieht, indem einer der Vorfahrenelemente eine Positionseinstellung zugewiesen wird: einem der Elemente, in die es eingebettet ist (Sie können ein Element nicht relativ zu einem Element positionieren, in das es nicht eingebettet ist). Um dies zu sehen, fügen Sie die folgende Deklaration zu Ihrer `body`-Regel hinzu:

```css
position: relative;
```

Dies sollte folgendes Ergebnis liefern:

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

Das positionierte Element befindet sich nun relativ zum {{htmlelement("body")}}-Element.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live sehen bei [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in z-index

All diese absolute Positionierung macht Spaß, aber es gibt noch ein weiteres Feature, das wir noch nicht berücksichtigt haben. Wenn Elemente sich überlappen, was bestimmt, welche Elemente über anderen erscheinen und welche unter anderen erscheinen? In dem Beispiel, das wir bisher gesehen haben, haben wir nur ein positioniertes Element im Positionierungskontext und es erscheint oben, da positionierte Elemente über unpositionierten Elementen gewinnen. Was passiert, wenn wir mehr als eines haben?

Versuchen Sie, das folgende zu Ihrem CSS hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An dieser Stelle sehen Sie den ersten Absatz in Lime gefärbt, aus dem Dokumentenfluss bewegt und etwas oberhalb seiner ursprünglichen Position positioniert. Es wird auch unter dem ursprünglichen `.positioned`-Absatz gestapelt, wo sich die beiden überlappen. Das liegt daran, dass der `.positioned`-Absatz der zweite Absatz im Quelltext ist und positionierte Elemente, die später im Quelltext erscheinen, über positionierten Elementen gewinnen, die früher im Quelltext erscheinen.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die {{cssxref("z-index")}}-Eigenschaft verwenden. "z-index" ist ein Verweis auf die z-Achse. Sie erinnern sich vielleicht aus früheren Punkten im Kurs, wo wir besprochen haben, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um die Positionierung für Dinge wie Hintergrundbilder und Schattenabstände zu berechnen. Für Sprachen, die von links nach rechts laufen, ist (0,0) oben links auf der Seite (oder Element) und die x- und y-Achsen laufen nach rechts und nach unten auf der Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms zu Ihrem Gesicht verläuft (oder was auch immer Sie sonst gerne vor dem Bildschirm haben). {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse liegen; positive Werte bewegen sie höher in den Stapel, negative Werte bewegen sie niedriger im Stapel. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie, die folgende Deklaration zu Ihrer `p:nth-of-type(1)`-Regel hinzuzufügen:

```css
z-index: 1;
```

Sie sollten nun sehen, dass der limefarbene Absatz oben ist:

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

Beachten Sie, dass `z-index` nur indexbasierte Werte akzeptiert; Sie können nicht spezifizieren, dass Sie ein Element 23 Pixel entlang der Z-Achse verschieben möchten — so funktioniert das nicht. Höhere Werte gehen über niedrigere Werte und es liegt an Ihnen, welche Werte Sie verwenden. Die Verwendung von Werten von 2 oder 3 würde den gleichen Effekt haben wie Werte von 300 oder 40000.

> [!NOTE]
> Sie können ein Beispiel hierfür live sehen bei [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Feste Positionierung

Betrachten wir nun die feste Positionierung. Diese funktioniert genauso wie die absolute Positionierung, mit einem entscheidenden Unterschied: Während die absolute Positionierung ein Element an einen festen Ort relativ zu seinem nächstgelegenen positionierten Vorfahren (dem initialen umgebenden Block, wenn es keinen gibt) fixiert, fixiert die **feste Positionierung** ein Element an einem festen Ort relativ zum sichtbaren Teil des Ansichtsfensters. Dies bedeutet, dass Sie nützliche UI-Elemente erstellen können, die an Ort und Stelle fixiert sind, wie z.B. persistente Navigationsmenüs, die immer sichtbar sind, egal wie weit die Seite gescrollt wird.

Erstellen wir ein einfaches Beispiel, um zu zeigen, was wir meinen. Zuerst löschen Sie die vorhandenen `p:nth-of-type(1)` und `.positioned`-Regeln aus Ihrem CSS.

Aktualisieren Sie nun die `body`-Regel, um die Deklaration `position: relative;` zu entfernen und eine feste Höhe hinzuzufügen, z.B.:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Jetzt geben wir dem {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element `position: fixed;` und lassen es am oberen Rand des Ansichtsfensters sitzen. Fügen Sie die folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` ist erforderlich, damit es am oberen Bildschirmrand haftet. Wir geben der Überschrift die gleiche Breite wie die Inhalts-Spalte und dann einen weißen Hintergrund sowie etwas Innen- und Außenabstand, damit der Inhalt nicht unter ihr sichtbar ist.

Wenn Sie speichern und aktualisieren, sehen Sie einen lustigen kleinen Effekt, dass die Überschrift fest bleibt — der Inhalt scheint nach oben zu scrollen und darunter zu verschwinden. Aber beachten Sie, dass einige der Inhalte anfangs unter der Überschrift abgeschnitten sind. Das liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentenfluss erscheint, sodass der Rest des Inhalts nach oben zum Rand bewegt. Wir könnten dies verbessern, indem wir die Absätze ein wenig nach unten verschieben. Das können wir tun, indem wir einen oberen Rand beim ersten Absatz setzen. Fügen Sie dies jetzt hinzu:

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
> Sie können ein Beispiel hierfür live sehen bei [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Klebrige Positionierung

Es gibt einen weiteren Positionswert, der `position: sticky` genannt wird und etwas neuer ist als die anderen. Dies ist im Wesentlichen eine Mischung aus relativer und fester Positionierung. Er ermöglicht es einem positionierten Element, sich so zu verhalten, als wäre es relativ positioniert, bis es zu einem bestimmten Schwellenwert gescrollt wird (z.B. 10px vom oberen Rand des Ansichtsfensters), ab dem es fixiert wird.

### Grundlegendes Beispiel

Klebrige Positionierung kann beispielsweise verwendet werden, um eine Navigationsleiste mitscrollen zu lassen, bis zu einem bestimmten Punkt und dann am oberen Ende der Seite haften zu bleiben.

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

Ein interessanter und häufiger Einsatz von `position: sticky` besteht darin, eine scrollende Indexseite zu erstellen, auf der verschiedene Überschriften am oberen Rand der Seite haften. Das Markup für ein solches Beispiel könnte so aussehen:

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

Das CSS könnte wie folgt aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir den {{htmlelement("dt")}}-Elementen `position: sticky` hinzufügen, zusammen mit einem {{cssxref("top")}}-Wert von 0, werden die Überschriften in unterstützten Browsern oben im Ansichtsfenster haften, wenn sie diese Position erreichen. Jede nachfolgende Überschrift wird dann die vorherige ersetzen, wenn sie nach oben zu dieser Position scrollt.

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

Klebrige Elemente sind relativ "sticky" zum nächsten Vorfahren mit einem "scrolling mechanism", der durch die [overflow](/de/docs/Web/CSS/Reference/Properties/overflow)-Eigenschaft seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können dieses Beispiel live sehen bei [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß beim Spielen mit grundlegender Positionierung. Während es keine ideale Methode für vollständige Layouts ist, gibt es viele spezifische Ziele, für die es geeignet ist.

Im nächsten Artikel werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie all diese Informationen verstanden und beibehalten haben.

## Siehe auch

- Die {{cssxref("position")}}-Eigenschaftsreferenz.
- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), für einige nützlichere Ideen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}
