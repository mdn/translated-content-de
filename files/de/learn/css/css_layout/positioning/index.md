---
title: Positioning
slug: Learn/CSS/CSS_layout/Positioning
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}

Durch die Positionierung können Sie Elemente aus dem normalen Dokumentenfluss nehmen und sie anders verhalten lassen, beispielsweise indem sie übereinanderliegen oder immer an derselben Stelle innerhalb des Browser-Viewports bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und ein Verständnis davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Lernen, wie die CSS-Positionierung funktioniert.</td>
    </tr>
  </tbody>
</table>

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Falls möglich, holen Sie sich eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repo ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und verwenden Sie diese als Ausgangspunkt.

## Einführung in die Positionierung

Durch die Positionierung können wir interessante Ergebnisse erzielen, indem wir den normalen Dokumentenfluss überschreiben. Was, wenn Sie die Position einiger Boxen von ihrer Standardflussposition leicht ändern möchten, um ein leicht schrulliges, distressend wirkendes Gefühl zu erzeugen? Die Positionierung ist Ihr Werkzeug. Oder was, wenn Sie ein UI-Element erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle im Browserfenster sitzt, egal wie viel die Seite gescrollt wird? Positionierung macht ein solches Layout möglich.

Es gibt verschiedene Arten der Positionierung, die Sie auf HTML-Elemente anwenden können. Um eine bestimmte Art der Positionierung auf einem Element zu aktivieren, verwenden wir die {{cssxref("position")}}-Eigenschaft.

## Statische Positionierung

Statische Positionierung ist der Standard, den jedes Element erhält. Es bedeutet einfach: "Setze das Element in seine normale Position im Dokumentenfluss – nichts Besonderes hier."

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte vorzubereiten), fügen Sie zuerst dem zweiten {{htmlelement("p")}} im HTML eine `class` von `positioned` hinzu:

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

Wenn Sie speichern und aktualisieren, werden Sie keinen Unterschied sehen, außer der aktualisierten Hintergrundfarbe des zweiten Absatzes. Das ist in Ordnung – wie wir bereits gesagt haben, ist statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live unter [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)) sehen.

## Relative Positionierung

Relative Positionierung ist die erste Art der Positionierung, die wir uns ansehen werden. Dies ist sehr ähnlich zur statischen Positionierung, außer dass sobald das positionierte Element seinen Platz im normalen Fluss eingenommen hat, Sie seine Endposition ändern können, einschließlich des Überlappens anderer Elemente auf der Seite. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie an diesem Punkt speichern und aktualisieren, werden Sie zunächst keine Veränderung im Ergebnis sehen. Wie ändern Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erläutern werden.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau anzugeben, wohin das positionierte Element bewegt werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen zur `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können jede [Einheit](/de/docs/Learn/CSS/Building_blocks/Values_and_units) verwenden, die Sie vernünftigerweise erwarten: Pixel, mm, rems, %, etc.

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

Cool, oder? Nun, das war wahrscheinlich nicht das, was Sie erwartet haben. Warum ist es nach unten und rechts verschoben, wenn wir _top_ und _left_ spezifiziert haben? Das mag kontraintuitiv erscheinen. Sie müssen sich vorstellen, dass es eine unsichtbare Kraft gibt, die die spezifizierte Seite der positionierten Box schiebt und sie in die entgegengesetzte Richtung bewegt. Wenn Sie beispielsweise `top: 30px;` angeben, ist es, als würde eine Kraft die Oberseite der Box nach unten bewegen und dabei in 30px nach unten verschieben.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live unter [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)) sehen.

## Absolute Positionierung

Absolute Positionierung liefert sehr unterschiedliche Ergebnisse.

### Position: Absolute setzen

Lassen Sie uns versuchen, die Positionserklärung in Ihrem Code wie folgt zu ändern:

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

Beachten Sie zuerst, dass die Lücke, wo das positionierte Element im Dokumentenfluss sein sollte, nicht mehr vorhanden ist — die ersten und dritten Elemente sind zusammengekommen, als ob es nicht mehr existiert! Nun, in gewisser Weise ist das wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentenfluss. Stattdessen sitzt es auf seiner eigenen Ebene getrennt von allem anderen. Dies ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Funktionen erstellen können, die das Layout anderer Elemente auf der Seite nicht behindern. Beispielsweise Popup-Informationsboxen, Steuerungsmenüs, Hoverpanels, UI-Features, die überall auf der Seite gezogen und platziert werden können usw.

Zweitens, beachten Sie, dass sich die Position des Elements geändert hat. Dies liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} auf andere Weise mit absoluter Positionierung verhalten. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentenflusses zu positionieren, geben sie den Abstand an, den das Element von jeder Seite des umschließenden Elements haben sollte. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des "umschließenden Elements" und 30px von der linken Seite sitzen sollte. (In diesem Fall ist das "umschließende Element" der **initiale umschließende Block**. Siehe den Abschnitt unten für weitere Informationen)

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, um Elemente zu skalieren, wenn Sie müssen. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihre positionierten Elemente zu setzen, und sehen Sie, was passiert! Stellen Sie es danach wieder zurück...

> [!NOTE]
> Ja, Abstände beeinflussen weiterhin positionierte Elemente. Margin-Collapsing jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live unter [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)) sehen.

### Positionierungskontexte

Welches Element ist das "umschließende Element" eines absolut positionierten Elements? Dies hängt stark von der Positionseigenschaft der Vorfahren des positionierten Elements ab (siehe [Identifizieren des umschließenden Blocks](/de/docs/Web/CSS/Containing_block#identifying_the_containing_block)).

Wenn keine Vorfahrenelemente ihre Positionseigenschaft explizit definiert haben, haben standardmäßig alle Vorfahrenelemente eine statische Position. Das Ergebnis ist, dass das absolut positionierte Element im **initialen umschließenden Block** enthalten sein wird. Der initiale umschließende Block hat die Dimensionen des Viewports und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum anfänglichen Viewport positioniert.

Das positionierte Element ist im HTML-Quelltext innerhalb des {{htmlelement("body")}}-Elements verschachtelt, aber im endgültigen Layout ist es 30px von den oberen und linken Rändern der Seite entfernt. Wir können den **Positionierungskontext** ändern, d.h., zu welchem Element das absolut positionierte Element relativ positioniert wird. Dies wird erreicht, indem die Positionierung auf einem der Vorfahrenelemente gesetzt wird: zu einem der Elemente, in das es verschachtelt ist (Sie können es nicht relativ zu einem Element außerhalb schaffen, in dem es nicht verschachtelt ist). Um dies zu sehen, fügen Sie die folgende Deklaration in Ihre `body`-Regel ein:

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

Das positionierte Element sitzt jetzt relativ zum {{htmlelement("body")}}-Element.

> [!NOTE]
> Sie können das Beispiel an dieser Stelle live unter [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)) sehen.

### Einführung in z-index

All diese absolute Positionierung ist ein großer Spaß, aber es gibt noch ein weiteres Merkmal, das wir noch nicht betrachtet haben. Wenn Elemente zu überlappen beginnen, was bestimmt, welche Elemente über anderen erscheinen und welche darunter? Im bisherigen Beispiel haben wir nur ein positioniertes Element im Positionierungskontext, und es erscheint oben, da positionierte Elemente gegenüber nichtpositionierten Elementen gewinnen. Was ist, wenn wir mehr als eines haben?

Versuchen Sie, das folgende zu Ihrem CSS hinzuzufügen, um auch den ersten Absatz absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt werden Sie den ersten Absatz in Limettengrün gefärbt sehen, der aus dem Dokumentenfluss herausbewegt und etwas oberhalb seiner ursprünglichen Position platziert wird. Es ist auch gestapelt unterhalb des ursprünglichen `.positioned`-Absatzes, wo sie sich überlagern. Dies liegt daran, dass der `.positioned`-Absatz der zweite Absatz in der Quellreihenfolge ist und positionierte Elemente später in der Quellreihenfolge gegenüber früheren gewinnen.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die {{cssxref("z-index")}}-Eigenschaft verwenden. "z-index" bezieht sich auf die z-Achse. Sie könnten sich aus früheren Punkten im Kurs erinnern, dass wir Webseiten mit horizontalen (x-Achse) und vertikalen (y-Achse) Koordinaten betrachteten, um beispielsweise die Positionierung für Hintergrundbilder und Schattenversätze zu berechnen. Bei Sprachen, die von links nach rechts laufen, ist (0,0) oben links auf der Seite (oder Element) und die x- und y-Achsen verlaufen nach rechts und unten auf der Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms in Richtung Ihres Gesichts verläuft (oder was immer Sie vor dem Bildschirm haben möchten). {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie höher im Stapel, negative Werte tiefer im Stapel. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie, die folgende Deklaration in Ihre `p:nth-of-type(1)`-Regel hinzuzufügen:

```css
z-index: 1;
```

Nun sollten Sie den Limettenabsatz oben sehen:

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

Beachten Sie, dass `z-index` nur einheitslose Indexwerte akzeptiert; Sie können nicht angeben, dass Sie möchten, dass ein Element 23 Pixel auf der Z-Achse nach oben verläuft — so funktioniert das nicht. Höhere Werte gehen über niedrigere und es liegt an Ihnen, welche Werte Sie verwenden. Werte von 2 oder 3 würden den gleichen Effekt haben wie Werte von 300 oder 40000.

> [!NOTE]
> Sie können ein Beispiel dafür live unter [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)) sehen.

## Fixierte Positionierung

Lassen Sie uns jetzt die feste Positionierung betrachten. Diese funktioniert in genau gleicher Weise wie die absolute Positionierung, mit einem wesentlichen Unterschied: während die absolute Positionierung ein Element relativ zu seinem nächsten positionierten Vorfahren (dem initialen umschließenden Block, wenn keiner vorhanden ist) an Ort und Stelle fixiert, fixiert die **feste Positionierung** normalerweise ein Element relativ zum sichtbaren Bereich des Viewports an Ort und Stelle. (Eine Ausnahme tritt auf, wenn einer der Vorfahren des Elements ein fixiertes, umschließendes Block ist, weil seine [transform-Eigenschaft](/de/docs/Web/CSS/transform) einen anderen Wert als _none_ hat.) Das bedeutet, dass Sie nützliche UI-Objekte erstellen können, die an Ort und Stelle sind, wie z.B. permanente Navigationsmenüs, die immer sichtbar sind, egal wie viel die Seite gescrollt wird.

Lassen Sie uns ein einfaches Beispiel erstellen, um zu zeigen, was wir meinen. Löschen Sie zuerst die bestehenden `p:nth-of-type(1)` und `.positioned`-Regeln aus Ihrem CSS.

Aktualisieren Sie jetzt die `body`-Regel, um die Deklaration `position: relative;` zu entfernen und eine feste Höhe hinzuzufügen, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Nun werden wir dem {{htmlelement("Heading_Elements", "h1")}}-Element `position: fixed;` zuweisen und es oben im Viewport platzieren. Fügen Sie die folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` ist erforderlich, um es oben auf dem Bildschirm zu halten. Wir geben der Überschrift die gleiche Breite wie die Inhaltskolonne und dann einen weißen Hintergrund sowie etwas Padding und Margin, damit der Inhalt nicht darunter sichtbar ist.

Wenn Sie speichern und aktualisieren, werden Sie einen kleinen Effekt sehen, bei dem die Überschrift fixiert bleibt — der Inhalt scheint nach oben zu scrollen und darunter zu verschwinden. Beachten Sie jedoch, wie ein Teil des Inhalts anfangs unterkippt wird. Dies liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentenfluss erscheint, sodass der Rest des Inhalts bis ganz nach oben bewegt wird. Wir könnten das verbessern, indem wir die Absätze ein wenig nach unten verschieben. Wir können dies tun, indem wir einen oberen Abstand beim ersten Absatz setzen. Fügen Sie dies jetzt hinzu:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Nun sollten Sie das fertige Beispiel sehen:

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
> Sie können ein Beispiel dafür live unter [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)) sehen.

## Sticky Positionierung

Es gibt einen weiteren Positionswert namens `position: sticky`, der etwas neuer ist als die anderen. Dies ist im Grunde eine Mischung zwischen relativer und fester Positionierung. Es erlaubt einem positionierten Element, so zu agieren, als wäre es relativ positioniert, bis zu einem bestimmten Schwellenwert (z.B. 10px vom oberen Rand des Viewports), wonach es fixiert wird.

### Einfaches Beispiel

Sticky-Positionierung kann beispielsweise verwendet werden, um eine Navigationsleiste zu erstellen, die mit der Seite scrollt, bis zu einem bestimmten Punkt, und dann oben auf der Seite klebt.

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

### Scroll-Indizierung

Ein interessanter und häufiger Gebrauch von `position: sticky` ist die Schaffung einer scrollenden Index-Seite, auf der verschiedene Überschriften oben auf der Seite haften, wenn sie diese erreichen. Das Markup für ein solches Beispiel könnte so aussehen:

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

Das CSS könnte wie folgt aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir `position: sticky` zum {{htmlelement("dt")}}-Element hinzufügen, zusammen mit einem {{cssxref("top")}}-Wert von 0, werden unterstützende Browser die Überschriften oben im viewport haften lassen, wenn sie diese Position erreichen. Jede nachfolgende Überschrift ersetzt dann die vorherige, wenn sie an diese Position rollt.

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

Sticky-Elemente sind "sticky" relativ zum nächsten Vorfahren mit einem "scrollenden Mechanismus", der durch die Eigenschaft [overflow](/de/docs/Web/CSS/overflow) seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können dieses Beispiel live unter [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ([Quellcode ansehen](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)) sehen.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Positionierung](/de/docs/Learn/CSS/CSS_layout/Position_skills).

## Zusammenfassung

Ich bin sicher, dass Sie Spaß hatten, mit der Grundpositionierung zu spielen. Während es keine ideale Methode für vollständige Layouts ist, gibt es viele spezifische Ziele, für die sie geeignet ist.

## Siehe auch

- Das {{cssxref("position")}}-Eigenschafts-Referenz.
- [Praktische Positionierungsbeispiele](/de/docs/Learn/CSS/CSS_layout/Practical_positioning_examples), für einige weitere nützliche Ideen.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Floats", "Learn/CSS/CSS_layout/Multiple-column_Layout", "Learn/CSS/CSS_layout")}}
