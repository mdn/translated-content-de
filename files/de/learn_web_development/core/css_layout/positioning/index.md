---
title: Positionierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}

Die Positionierung ermöglicht es Ihnen, Elemente aus dem normalen Dokumentfluss zu entfernen und sie anders zu verhalten, zum Beispiel übereinander zu legen oder immer an derselben Stelle im Browser-Fenster zu bleiben. Dieser Artikel erklärt die verschiedenen {{cssxref("position")}}-Werte und deren Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Strukturierung von Inhalten mit HTML</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegendes Text- und Schriftstyling</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden CSS-Layout-Konzepten</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li><code>static</code>-Positionierung ist die Standardweise, wie Elemente auf der Seite positioniert werden.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Fluss, aber absolute (und feste/stickige) Positionierung entzieht Elemente komplett dem normalen Fluss, sodass sie in einer separaten Schicht liegen.</li>
          <li>Die endgültige Layout-Position kann mit den Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> modifiziert werden, aber diese haben je nach eingestelltem <code>position</code>-Wert unterschiedliche Effekte.</li>
          <li>Festlegen des Positionierungskontextes eines positionierten Elements durch die Positionierung eines übergeordneten Elements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Wir empfehlen Ihnen, die folgenden Übungen auf Ihrem lokalen Computer durchzuführen. Falls möglich, holen Sie sich eine Kopie von [`0_basic-flow.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/0_basic-flow.html) aus unserem GitHub-Repository ([Quellcode hier](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/0_basic-flow.html)) und nutzen Sie diese als Ausgangspunkt.

## Einführung in die Positionierung

Positionierung ermöglicht uns interessante Ergebnisse zu erzielen, indem der normale Dokumentfluss überschrieben wird. Was, wenn Sie die Position einiger Boxen leicht von ihrer Standardflussposition ändern möchten, um ein leicht quirliges, unruhiges Gefühl zu erzeugen? Positionierung ist Ihr Werkzeug. Oder was, wenn Sie ein UI-Element erstellen möchten, das über den oberen Teil anderer Seitenbereiche schwebt und/oder immer an derselben Stelle im Browserfenster sitzt, egal wie weit die Seite gescrollt wird? Positionierung macht ein solches Layout möglich.

Es gibt eine Reihe von verschiedenen Arten der Positionierung, die Sie auf HTML-Elemente anwenden können. Um eine spezifische Art von Positionierung auf ein Element anzuwenden, verwenden wir die {{cssxref("position")}}-Eigenschaft.

## Statische Positionierung

Statische Positionierung ist der Standard, den jedes Element erhält. Es bedeutet einfach "setze das Element an seine Standardposition im normalen Fluss — nichts Besonderes zu sehen hier."

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte vorzubereiten), fügen Sie zuerst eine `class` von `positioned` zu dem zweiten {{htmlelement("p")}} im HTML hinzu:

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

Wenn Sie speichern und aktualisieren, sehen Sie überhaupt keinen Unterschied, außer für die aktualisierte Hintergrundfarbe des zweiten Absatzes. Das ist in Ordnung — wie wir schon sagten, ist die statische Positionierung das Standardverhalten!

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`1_static-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/1_static-positioning.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/1_static-positioning.html)).

## Relative Positionierung

Relative Positionierung ist die erste Art der Positionierung, die wir uns ansehen werden. Diese ist der statischen Positionierung sehr ähnlich, mit dem Unterschied, dass Sie, nachdem das positionierte Element seinen Platz im normalen Fluss eingenommen hat, seine endgültige Position modifizieren können, einschließlich des Überlagerns anderer Elemente auf der Seite. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
position: relative;
```

Wenn Sie an diesem Punkt speichern und aktualisieren, sehen Sie im Ergebnis überhaupt keine Änderung. Wie modifizieren Sie die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau festzulegen, wohin das positionierte Element verschoben werden soll. Um dies auszuprobieren, fügen Sie die folgenden Deklarationen der `.positioned`-Regel in Ihrem CSS hinzu:

```css
top: 30px;
left: 30px;
```

> [!NOTE]
> Die Werte dieser Eigenschaften können alle [Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) verwenden, die Sie vernünftigerweise erwarten: Pixel, mm, rem, %, etc.

Wenn Sie nun speichern und aktualisieren, erhalten Sie ein Ergebnis wie dieses:

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

Cool, oder? Okay, wahrscheinlich war das nicht, was Sie erwartet haben. Warum hat es sich nach unten und rechts bewegt, obwohl wir _top_ und _left_ angegeben haben? Das mag kontraintuitiv erscheinen. Sie müssen sich vorstellen, dass eine unsichtbare Kraft die angegebene Seite der positionierten Box drückt und sie in die entgegengesetzte Richtung bewegt. Wenn Sie also `top: 30px;` angeben, ist es, als würde eine Kraft die Oberseite der Box nach unten um 30px drücken.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`2_relative-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/2_relative-positioning.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/2_relative-positioning.html)).

## Absolute Positionierung

Absolute Positionierung bringt sehr unterschiedliche Ergebnisse.

### Festlegen von position: absolute

Ändern Sie die Positionierungsdeklaration in Ihrem Code folgendermaßen:

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

Beachten Sie zuerst, dass die Lücke, wo das positionierte Element im Dokumentfluss sein sollte, nicht mehr vorhanden ist — die ersten und dritten Elemente haben sich so geschlossen, als ob es nicht mehr existieren würde! Nun, in gewisser Weise ist das wahr. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentfluss. Stattdessen liegt es in einer separaten Ebene von allem anderen. Dies ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Features erstellen können, die das Layout anderer Elemente auf der Seite nicht stören. Zum Beispiel Popup-Informationsboxen, Steuermenüs, Rollover-Panels, UI-Features, die überall auf der Seite gezogen und abgelegt werden können, und so weiter.

Zweitens bemerken Sie, dass sich die Position des Elements geändert hat. Das liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei absoluter Positionierung auf andere Weise wirken. Anstatt das Element basierend auf seiner relativen Position im normalen Dokumentfluss zu positionieren, geben sie an, wie weit das Element von jeder Seite des umgebenden Elements sein soll. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des **umgebenden Elements** (in diesem Fall dem **initialen Umgebungsblock**; siehe unten) und 30px vom linken Rand entfernt sitzen soll.

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}}, und {{cssxref("right")}} verwenden, um Elemente zu vergrößern oder zu verkleinern, wenn nötig. Probieren Sie `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihren positionierten Elementen aus und schauen Sie, was passiert! Stellen Sie danach alles wieder zurück…

> [!NOTE]
> Ja, Ränder wirken sich weiterhin auf positionierte Elemente aus. Eine Margenkollapsierung jedoch nicht.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`3_absolute-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/3_absolute-positioning.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/3_absolute-positioning.html)).

### Positionierungskontexte

Welches Element ist das "umgebende Element" eines absolut positionierten Elements? Dies hängt sehr stark vom Wert der `position`-Eigenschaft der Vorfahren des positionierten Elements ab.

Wenn keine Vorfahrelemente ihre Positions-Eigenschaft explizit definiert haben, haben standardmäßig alle Vorfahrelemente eine statische Position. Das Ergebnis davon ist, dass das absolut positionierte Element im **initialen Umgebungsblock** enthalten ist. Der initiale Umgebungsblock hat die Abmessungen des Viewports und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum initialen Viewport positioniert.

Das positionierte Element ist im HTML-Code innerhalb des {{htmlelement("body")}} verschachtelt, aber im endgültigen Layout befindet es sich 30px von den oberen und linken Rändern der Seite entfernt. Wir können den **Positionierungskontext** ändern, das heißt, zu welchem Element das absolut positionierte Element relativ positioniert ist. Dies wird erreicht, indem die Position eines der Vorfahren des Elements gesetzt wird: zu einem der Elemente, in dem es verschachtelt ist (Sie können es nicht relativ zu einem Element positionieren, in dem es nicht verschachtelt ist). Um dies zu sehen, fügen Sie die folgende Deklaration Ihrer `body`-Regel hinzu:

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

Das positionierte Element sitzt jetzt relativ zum {{htmlelement("body")}}-Element.

> [!NOTE]
> Sie können das Beispiel an diesem Punkt live sehen unter [`4_positioning-context.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/4_positioning-context.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/4_positioning-context.html)).

### Einführung in z-index

All diese absolute Positionierung macht Spaß, aber es gibt ein weiteres Feature, das wir noch nicht betrachtet haben. Wenn Elemente anfangen, sich zu überlappen, was bestimmt dann, welche Elemente über anderen erscheinen und welche darunter erscheinen? In dem Beispiel, das wir bisher gesehen haben, haben wir nur ein positioniertes Element im Positionierungskontext, und es erscheint oben, da positionierte Elemente über nicht positionierten Elementen stehen. Was passiert, wenn wir mehr als eines haben?

Versuchen Sie, das Folgende zu Ihrem CSS hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt sehen Sie den ersten Absatz in Lindenfarbe gefärbt, aus dem Dokumentenfluss genommen und etwas oberhalb seiner ursprünglichen Position positioniert. Er ist auch unter dem ursprünglichen `.positioned`-Absatz gestapelt, wo sich die beiden überschneiden. Das liegt daran, dass der `.positioned`-Absatz der zweite Absatz in der Quellreihenfolge ist und positionierte Elemente, die später in der Quellreihenfolge erscheinen, über den früher in der Quelle stehenden positionierten Elementen stehen.

Können Sie die Stapelreihenfolge ändern? Ja, Sie können dies mit der {{cssxref("z-index")}}-Eigenschaft tun. "z-index" bezieht sich auf die z-Achse. Sie erinnern sich vielleicht aus früheren Abschnitten des Kurses, wo wir diskutierten, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um Positionen für Dinge wie Hintergrundbilder und Schlagschattenversätze zu bestimmen. Für Sprachen, die von links nach rechts laufen, befindet sich (0,0) oben links auf der Seite (oder dem Element), und die x- und y-Achsen verlaufen nach rechts und unten auf der Seite.

Webseiten haben auch eine z-Achse: eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms in Richtung Gesicht verläuft (oder was auch immer Sie sonst gerne vor dem Bildschirm haben). {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie höher in den Stapel, negative Werte nach unten. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 entspricht.

Um die Stapelreihenfolge zu ändern, versuchen Sie, die folgende Deklaration zu Ihrer `p:nth-of-type(1)`-Regel hinzuzufügen:

```css
z-index: 1;
```

Sie sollten nun den Limetten-Absatz oben sehen:

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

Beachten Sie, dass `z-index` nur indexbezogene Werte ohne Einheit akzeptiert; Sie können nicht angeben, dass Sie ein Element 23 Pixel auf der Z-Achse nach oben haben möchten — so funktioniert es nicht. Höhere Werte gehen über niedrigere Werte, und es liegt bei Ihnen, welche Werte Sie verwenden. Die Verwendung von Werten von 2 oder 3 hätte denselben Effekt wie Werte von 300 oder 40000.

> [!NOTE]
> Sie können ein Beispiel hierfür live sehen unter [`5_z-index.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/5_z-index.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/5_z-index.html)).

## Feste Positionierung

Betrachten wir nun die feste Positionierung. Diese funktioniert auf genau dieselbe Weise wie die absolute Positionierung, mit einem entscheidenden Unterschied: Während die absolute Positionierung ein Element relativ zu seinem nächstgelegenen positionierten Vorfahren (dem initialen Umgebungsblock, wenn es keinen gibt) an Ort und Stelle fixiert, fixiert die **feste Positionierung** ein Element relativ zum sichtbaren Teil des Viewports. Das bedeutet, dass Sie nützliche UI-Elemente an Ort und Stelle fixieren können, wie z. B. persistente Navigationsmenüs, die unabhängig vom Scrollen der Seite immer sichtbar bleiben.

Erstellen wir ein einfaches Beispiel, um zu zeigen, was wir meinen. Löschen Sie zunächst die bestehenden `p:nth-of-type(1)` und `.positioned`-Regeln in Ihrem CSS.

Aktualisieren Sie nun die `body`-Regel, um die Deklaration `position: relative;` zu entfernen und fügen Sie eine feste Höhe hinzu, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Nun werden wir dem {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element `position: fixed;` zuweisen und es am oberen Rand des Viewports platzieren. Fügen Sie die folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` ist erforderlich, um es am oberen Bildschirmrand zu fixieren. Wir geben der Überschrift dieselbe Breite wie der Inhalte-Spalte und dann einen weißen Hintergrund sowie etwas Padding und Margin, sodass der Inhalt nicht darunter sichtbar ist.

Wenn Sie speichern und aktualisieren, sehen Sie einen lustigen kleinen Effekt, bei dem die Überschrift fixiert bleibt — der Inhalt scheint unter ihr hinaufzuscrollen und zu verschwinden. Beachten Sie aber, dass ein Teil des Inhalts anfangs unter der Überschrift abgeschnitten ist. Das liegt daran, dass die fixierte Überschrift nicht mehr im Dokumentenfluss erscheint, sodass der Rest des Inhalts nach oben rutscht. Wir könnten dies verbessern, indem wir die Absätze alle ein wenig nach unten verschieben. Dies können wir durch Einstellen eines oberen Margins auf dem ersten Absatz tun. Fügen Sie dies jetzt hinzu:

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
> Sie können ein Beispiel hierfür live sehen unter [`6_fixed-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/6_fixed-positioning.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/6_fixed-positioning.html)).

## Sticky Positionierung

Es gibt einen weiteren Positionswert namens `position: sticky`, der etwas neuer ist als die anderen. Dies ist im Wesentlichen ein Hybrid zwischen relativer und fester Positionierung. Es erlaubt einem positionierten Element, sich so zu verhalten, als ob es relativ positioniert wäre, bis zu einem bestimmten Schwellenwert (z. B. 10px vom oberen Rand des Viewports), nach dem es fixiert wird.

### Einfaches Beispiel

Sticky Positionierung kann verwendet werden, um z. B. dafür zu sorgen, dass eine Navigationsleiste mit der Seite scrollt, bis zu einem bestimmten Punkt und dann oben auf der Seite haftet.

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

Eine interessante und verbreitete Verwendung von `position: sticky` ist die Erstellung einer Scroll-Index-Seite, bei der verschiedene Überschriften oben auf der Seite haften bleiben, wenn sie sie erreichen. Der Code für ein solches Beispiel könnte so aussehen:

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

Das CSS könnte folgendermaßen aussehen: Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir `position: sticky` zum {{htmlelement("dt")}}-Element hinzufügen, zusammen mit einem {{cssxref("top")}}-Wert von 0, werden die unterstützenden Browser die Überschriften an die obere Kante des Viewports haften, wenn sie diese Position erreichen. Jeder nachfolgende Header ersetzt dann den vorherigen, wenn er diese Position errollt.

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

Sticky-Elemente sind „sticky“ relativ zum nächsten Vorfahren mit einem „Scrolling-Mechanismus“, der durch die [overflow](/de/docs/Web/CSS/overflow)-Eigenschaft seiner Vorfahren bestimmt wird.

> [!NOTE]
> Sie können dieses Beispiel live sehen unter [`7_sticky-positioning.html`](https://mdn.github.io/learning-area/css/css-layout/positioning/7_sticky-positioning.html) ([Siehe Quellcode](https://github.com/mdn/learning-area/blob/main/css/css-layout/positioning/7_sticky-positioning.html)).

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Test_your_skills/Position).

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß beim Spielen mit der grundlegenden Positionierung. Während es keine ideale Methode für gesamte Layouts ist, gibt es viele spezifische Ziele, für die es geeignet ist. Als Nächstes werden wir uns Flexbox ansehen.

## Siehe auch

- Die {{cssxref("position")}}-Eigenschaften-Referenz.
- [Praktische Beispiele zur Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), für einige weitere nützliche Ideen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Floats", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}
