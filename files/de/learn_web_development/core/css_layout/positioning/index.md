---
title: Platzierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}

Platzierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentfluss herauszunehmen und sie sich anders verhalten zu lassen, z.B. übereinander zu liegen oder immer an derselben Stelle im Browserfenster zu verbleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Anwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftgestaltung</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten der CSS-Layout</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li><code>static</code>-Positionierung ist die Standardweise, wie Elemente auf der Seite positioniert werden.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Fluss, aber absolute (und fixe/klebrige) Positionierung gibt Elemente vollständig aus dem normalen Fluss heraus, um in einer separaten Ebene zu sitzen.</li>
          <li>Die endgültige Layoutposition kann mithilfe der Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> geändert werden, aber diese haben unterschiedliche Effekte je nach festgelegtem <code>position</code>-Wert.</li>
          <li>Festlegen des Platzierungskontextes eines positionierten Elements durch Positionierung eines übergeordneten Elements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Wenn möglich, holen Sie sich eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repository ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und verwenden Sie diese als Ausgangspunkt.

## Einführung in die Platzierung

Platzierung ermöglicht es uns, interessante Ergebnisse zu erzielen, indem der normale Dokumentfluss außer Kraft gesetzt wird. Was, wenn Sie die Position einiger Kästen leicht von ihrer Standardflussposition ändern möchten, um ein leicht unkonventionelles, zerrüttetes Gefühl zu erzeugen? Platzierung ist Ihr Werkzeug. Oder was, wenn Sie ein UI-Element erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster bleibt, egal wie weit die Seite gescrollt wird? Platzierung macht ein solches Layout möglich.

Es gibt eine Reihe verschiedener Typen der Platzierung, die Sie auf HTML-Elemente anwenden können. Um einen bestimmten Typ der Platzierung auf ein Element anzuwenden, verwenden wir die Eigenschaft {{cssxref("position")}}.

## Statische Platzierung

Statische Platzierung ist der Standard, den jedes Element erhält. Es bedeutet einfach „platzieren Sie das Element an seiner Standardposition im normalen Fluss — nichts Besonderes zu sehen hier.“

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte einzurichten), fügen Sie zuerst eine `class` von `positioned` zum zweiten {{htmlelement("p")}} im HTML hinzu:

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

Wenn Sie speichern und aktualisieren, sehen Sie keinen Unterschied, außer die aktualisierte Hintergrundfarbe des zweiten Absatzes. Das ist in Ordnung — wie zuvor gesagt, statische Platzierung ist das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live auf [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Platzierung

Relative Platzierung ist der erste Positionstyp, den wir uns ansehen werden. Dies ist sehr ähnlich zur statischen Platzierung, außer dass, sobald das positionierte Element seinen Platz im normalen Fluss eingenommen hat, Sie seine endgültige Position ändern können, einschließlich der Überlappung anderer Elemente auf der Seite. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie an diesem Punkt speichern und aktualisieren, werden Sie keine Veränderung im Ergebnis sehen. Wie ändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären werden.

### Einführung in top, bottom, left und right

Die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau anzugeben, wohin das positionierte Element verschoben werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen zur `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können jede [Einheit](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) annehmen, die Sie vernünftigerweise erwarten würden: Pixel, mm, rems, %, etc.

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

Cool, oder? Okay, das war wahrscheinlich nicht das, was Sie erwartet haben. Warum hat es sich nach unten und rechts bewegt, wenn wir _top_ und _left_ angegeben haben? Das mag kontraintuitiv erscheinen. Sie müssen es sich so vorstellen, als gäbe es eine unsichtbare Kraft, die die angegebene Seite des positionierten Kästchens schiebt und es in die entgegengesetzte Richtung bewegt. Wenn Sie zum Beispiel `top: 30px;` angeben, ist es so, als würde eine Kraft die Oberseite des Kästchens schieben und es um 30px nach unten bewegen.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live auf [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Platzierung

Absolute Platzierung bringt sehr unterschiedliche Ergebnisse.

### Einstellung von position: absolute

Versuchen wir, die Deklaration der Position in Ihrem Code wie folgt zu ändern:

```css
position: absolute;
```

Wenn Sie jetzt speichern und aktualisieren, sollten Sie etwas in dieser Art sehen:

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

Beachten Sie zunächst, dass die Lücke, wo das positionierte Element im Dokumentfluss sein sollte, nicht mehr vorhanden ist — die ersten und dritten Elemente sind zusammengeschlossen, als ob es nicht mehr existiert! Nun, in gewisser Weise ist das wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentfluss. Stattdessen sitzt es auf einer eigenen Ebene, getrennt von allem anderen. Dies ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Features erstellen können, die das Layout anderer Elemente auf der Seite nicht stören. Zum Beispiel Popup-Informationskästen, Steuerungsmenüs, Roll-over-Panels, UI-Features, die überall auf der Seite gezogen und abgelegt werden können, und so weiter.

Zweitens beachten Sie, dass sich die Position des Elements geändert hat. Dies liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei absoluter Platzierung anders verhalten. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentflusses zu positionieren, geben sie den Abstand an, den das Element von jeder Seite des enthaltenden Elements haben sollte. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des **enthaltenden Elements** entfernt sitzen soll (dem **ersten enthaltenden Block**, in diesem Fall, siehe unten) und 30px von links.

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, um Elemente bei Bedarf zu vergrößern. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihre positionierten Elemente zu setzen und sehen Sie, was passiert! Setzen Sie es danach wieder zurück...

> [!NOTE]
> Ja, Ränder beeinflussen immer noch positionierte Elemente. Randkollapierung jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live auf [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Platzierungskontexte

Welches Element ist das „enthaltende Element“ eines absolut positionierten Elements? Dies hängt sehr stark vom `position`-Eigenschaftswert der Vorfahren des positionierten Elements ab.

Wenn keine Vorfahrelemente ihre Positionseigenschaft ausdrücklich definiert haben, dann haben standardmäßig alle Vorfahrelemente eine statische Position. Das Ergebnis ist, dass das absolut positionierte Element im **ersten enthaltenden Block** enthalten sein wird. Der erste enthaltende Block hat die Abmessungen des Ansichtsfensters und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum ursprünglichen Ansichtsfenster positioniert.

Das positionierte Element ist im HTML-Quellcode innerhalb des {{htmlelement("body")}} verschachtelt, wird aber im endgültigen Layout 30px von den oberen und linken Rändern der Seite entfernt positioniert. Wir können den **Platzierungskontext** ändern, d.h. welches Element das absolut positionierte Element relativ positioniert wird. Dies geschieht durch Einstellung der Positionierung auf einem der Vorfahren des Elements: auf einem der Elemente, in das es verschachtelt ist (Sie können es nicht relativ zu einem Element positionieren, in das es nicht verschachtelt ist). Um dies zu sehen, fügen Sie die folgende Deklaration zu Ihrer `body`-Regel hinzu:

```css
position: relative;
```

Dies sollte das folgende Ergebnis ergeben:

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

Das positionierte Element sitzt jetzt relativ zum {{htmlelement("body")}}-Element.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live auf [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in den z-index

All diese absolute Positionierung macht Spaß, aber es gibt noch eine weitere Funktion, die wir noch nicht in Betracht gezogen haben. Wenn Elemente anfangen sich zu überlappen, was bestimmt, welche Elemente über anderen erscheinen und welche unter anderen erscheinen? In dem bisher gesehenen Beispiel haben wir nur ein positioniertes Element im Platzierungskontext, und es erscheint ganz oben, da positionierte Elemente den nicht positionierten Elementen überlegen sind. Was passiert, wenn wir mehr als eines haben?

Versuchen Sie, folgendes in Ihr CSS zu ergänzen, um auch den ersten Absatz absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An dieser Stelle werden Sie sehen, dass der erste Absatz lime-grün gefärbt und aus dem Dokumentenfluss herausgenommen wurde und etwas oberhalb von seinem ursprünglichen Platz positioniert ist. Er wird auch unter dem ursprünglichen `.positioned`-Absatz überlagert, wo die beiden sich überschneiden. Das liegt daran, dass der `.positioned`-Absatz der zweite Absatz in der Quellreihenfolge ist, und positionierte Elemente, die später in der Quellreihenfolge sind, gewinnen über positionierte Elemente, die früher in der Quellreihenfolge sind.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die {{cssxref("z-index")}}-Eigenschaft verwenden. "z-index" bezieht sich auf die z-Achse. Sie erinnern sich vielleicht aus früheren Punkten im Kurs, wo wir besprachen, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um die Positionierung für Dinge wie Hintergrundbilder und Schattenversätze zu berechnen. Für Sprachen, die von links nach rechts laufen, ist (0,0) oben links auf der Seite (oder dem Element), und die x- und y-Achse verlaufen nach rechts und nach unten auf der Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms zu Ihrem Gesicht (oder was auch immer Sie gerne vor dem Bildschirm haben) verläuft. {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse liegen; positive Werte bewegen sie höher im Stapel, negative Werte bewegen sie weiter nach unten im Stapel. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie, die folgende Deklaration zu Ihrer `p:nth-of-type(1)`-Regel hinzuzufügen:

```css
z-index: 1;
```

Sie sollten nun sehen, dass der limettenfarbene Absatz oben ist:

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

Beachten Sie, dass `z-index` nur indexlos Zahlenwerte akzeptiert; Sie können nicht angeben, dass Sie möchten, dass ein Element 23 Pixel auf der Z-Achse nach oben geht — so funktioniert das nicht. Höhere Werte gehen über niedrigere Werte und es bleibt Ihnen überlassen, welche Werte Sie verwenden. Das Verwenden von Werten von 2 oder 3 würde denselben Effekt erzielen wie Werte von 300 oder 40000.

> [!NOTE]
> Sie können ein Beispiel dazu live auf [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Fixierte Platzierung

Schauen wir uns nun die fixierte Platzierung an. Diese funktioniert genauso wie die absolute Platzierung, mit einem wichtigen Unterschied: Während absolute Platzierung ein Element relativ zu seinem nächstgelegenen positionierten Vorfahren fixiert (dem ersten enthaltenden Block, wenn es keinen gibt), fixiert **fixierte Platzierung** ein Element relativ zum sichtbaren Teil des Ansichtsfensters. Dies bedeutet, dass Sie nützliche UI-Elemente erstellen können, die an Ort und Stelle fixiert sind, wie z.B. persistente Navigationsmenüs, die immer sichtbar sind, egal wie weit die Seite gescrollt wird.

Lassen Sie uns ein einfaches Beispiel erstellen, um zu zeigen, was wir meinen. Löschen Sie zuerst die bestehenden `p:nth-of-type(1)` und `.positioned`-Regeln aus Ihrem CSS.

Aktualisieren Sie nun die `body`-Regel, um die `position: relative;`-Deklaration zu entfernen und eine feste Höhe hinzuzufügen, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Nun geben wir dem {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element `position: fixed;` und lassen es am oberen Rand des Ansichtsfensters sitzen. Fügen Sie folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` ist erforderlich, um es an den oberen Rand des Bildschirms zu kleben. Wir geben der Überschrift dieselbe Breite wie der Inhaltsbereich und dann einen weißen Hintergrund und etwas Padding und Margin, damit der Inhalt nicht darunter sichtbar wird.

Wenn Sie speichern und aktualisieren, sehen Sie einen lustigen kleinen Effekt, bei dem die Überschrift fixiert bleibt — der Inhalt scheint nach oben zu scrollen und darunter zu verschwinden. Beachten Sie jedoch, dass einige Inhalte zunächst unter der Überschrift abgeschnitten werden. Dies liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentenfluss erscheint, sodass der Rest des Inhalts bis ganz nach oben verschoben wird. Wir können dies verbessern, indem wir die Absätze ein wenig nach unten verschieben. Wir können dies tun, indem wir dem ersten Absatz etwas oberen Rand setzen. Fügen Sie dies nun hinzu:

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
> Sie können ein Beispiel dazu live auf [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Klebrige Platzierung

Es gibt einen weiteren Positionswert namens `position: sticky`, der etwas neuer ist als die anderen. Dies ist im Grunde eine Mischung aus relativer und fixierter Position. Es ermöglicht einem positionierten Element, so zu handeln, als ob es relativ positioniert wäre, bis es zu einem bestimmten Schwellenwert gescrollt wird (z. B. 10px vom oberen Rand des Ansichtsfensters), ab dem es fixiert wird.

### Einfaches Beispiel

Klebrige Platzierung kann verwendet werden, um beispielsweise eine Navigationsleiste zu erstellen, die mit der Seite scrollt, bis zu einem bestimmten Punkt und dann oben auf der Seite klebt.

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

Ein interessanter und häufiger Gebrauch von `position: sticky` ist die Erstellung einer scrollenden Indexseite, bei der verschiedene Überschriften oben auf der Seite haften bleiben, wenn sie diese erreichen. Das Markup für ein solches Beispiel könnte so aussehen:

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

Das CSS könnte wie folgt aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir nun `position: sticky` auf das {{htmlelement("dt")}}-Element anwenden, zusammen mit einem {{cssxref("top")}}-Wert von 0, werden unterstützende Browser die Überschriften oben im Ansichtsfenster kleben, wenn sie diese Position erreichen. Jede nachfolgende Überschrift wird dann die vorherige ersetzen, wenn sie nach oben zu dieser Position scrollt.

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

Klebrige Elemente sind relativ zu dem nächsten Vorfahren, der einen "Scrollmechanismus" hat, hast, was durch die [overflow](/de/docs/Web/CSS/overflow)-Eigenschaft seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können dieses Beispiel live auf [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) sehen ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Position_skills).

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß beim Spielen mit der Basisplatzierung. Während es keine ideale Methode für die Verwendung in gesamten Layouts ist, gibt es viele spezifische Ziele, für die es geeignet ist. Als nächstes schauen wir uns Flexbox an.

## Siehe auch

- Der {{cssxref("position")}}-Eigenschaftsreferenz.
- [Praktische Platzierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), für einige nützlichere Ideen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}
