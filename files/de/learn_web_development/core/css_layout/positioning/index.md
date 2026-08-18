---
title: Positionierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 1b7c3c1e03f14c3878e4d8518b0f1a89bedfdc9c
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}

Positionierung erlaubt es Ihnen, Elemente aus dem normalen Dokumentenfluss herauszunehmen und sie anders verhalten zu lassen, beispielsweise übereinander liegend oder immer an derselben Stelle im Browser-Viewport verbleibend. Dieser Artikel erklärt die unterschiedlichen {{cssxref("position")}}-Werte und deren Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">CSS Styling-Grundlagen</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlegende Text- und Schriftstile</a>,
        Vertrautheit mit <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">grundlegenden Konzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li><code>static</code> Positionierung ist der Standard, wie Elemente auf der Seite positioniert werden.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Fluss, während absolute (und fixe/klebende) Positionierung Elemente vollständig aus dem normalen Fluss herausnimmt, um in einer separaten Ebene zu sitzen.</li>
          <li>Die endgültige Position im Layout kann mit den Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> modifiziert werden, jedoch haben diese je nach eingestelltem <code>position</code>-Wert unterschiedliche Effekte.</li>
          <li>Setzen des Positionierungskontexts eines positionierten Elements durch das Positionieren eines Vorfahrelements.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Durcharbeiten der Übungen

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Um zu beginnen, erstellen Sie eine neue HTML-Datei auf Ihrem lokalen System und fügen Sie den folgenden Inhalt hinzu:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Positioning example</title>

    <style>
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
    </style>
  </head>
  <body>
    <h1>Basic document flow</h1>

    <p>
      I am a basic block level element. My adjacent block level elements sit on
      new lines below me.
    </p>

    <p>
      By default we span 100% of the width of our parent element, and our height
      is as tall as our child content. Our total width and height is our content
      + padding + border width/height.
    </p>

    <p>
      We are separated by our margins. Because of margin collapsing, we are
      separated by the width of one of our margins, not both.
    </p>

    <p>
      inline elements <span>like this one</span> and <span>this one</span> sit
      on the same line as one another, and adjacent text nodes, if there is
      space on the same line. Overflowing inline elements
      <span
        >wrap onto a new line if possible — like this one containing text</span
      >, or just go on to a new line if not, much like this image will do:
      <img
        src="https://mdn.github.io/shared-assets/images/examples/long.jpg"
        alt="a wide but short section of a photo of several fabrics" />
    </p>
  </body>
</html>
```

## Einführung in die Positionierung

Mit Positionierung können wir interessante Ergebnisse erzielen, indem wir den normalen Dokumentenfluss überschreiben. Was ist, wenn Sie die Position einiger Boxen leicht von ihrer Standardflussposition ändern möchten, um ein leicht schrulliges, gestresstes Gefühl zu vermitteln? Positionierung ist Ihr Werkzeug. Oder was, wenn Sie ein UI-Element erstellen möchten, das über anderen Teilen der Seite schwebt und/oder immer an derselben Stelle innerhalb des Browserfensters sitzt, egal wie viel auf der Seite gescrollt wird? Positionierung macht solches Layout-Arbeiten möglich.

Es gibt verschiedene Arten der Positionierung, die Sie auf HTML-Elemente anwenden können. Um eine spezifische Art der Positionierung auf ein Element anzuwenden, verwenden wir die Eigenschaft {{cssxref("position")}}.

## Statische Positionierung

Statische Positionierung ist der Standard, den jedes Element erhält. Es bedeutet einfach "setze das Element in seine Standardposition im normalen Fluss — nichts Besonderes zu sehen hier."

Um dies zu sehen (und Ihr Beispiel für zukünftige Abschnitte vorzubereiten), fügen Sie zuerst die `class` von `positioned` zum zweiten {{htmlelement("p")}} im HTML hinzu:

```html
<p class="positioned">…</p>
```

Fügen Sie nun die folgende Regel am Ende Ihres CSS hinzu:

```html hidden live-sample___static
<h1>Static positioning</h1>

<p>
  I am a basic block level element. My adjacent block level elements sit on new
  lines below me.
</p>

<p class="positioned">
  By default we span 100% of the width of our parent element, and our are as
  tall as our child content. Our total width and height is our content + padding
  + border width/height.
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
    alt="a wide but short section of a photo of several fabrics" />
</p>
```

```css hidden live-sample___static live-sample___relative live-sample___absolute
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
```

```css live-sample___static
.positioned {
  position: static;
  background: yellow;
}
```

Wenn Sie speichern und aktualisieren, sehen Sie keinen Unterschied, außer der aktualisierten Hintergrundfarbe des zweiten Absatzes. Das Beispiel sollte so aussehen:

{{embedlivesample("static", "100%", 500)}}

Das ist in Ordnung — wie wir zuvor gesagt haben, ist statische Positionierung das Standardverhalten!

## Relative Positionierung

Relative Positionierung ist der erste Positionstyp, den wir uns anschauen werden. Dieser ist sehr ähnlich zur statischen Positionierung, außer dass Sie, sobald das positionierte Element seinen Platz im normalen Fluss eingenommen hat, dessen endgültige Position modifizieren können, einschließlich des Überlappens anderer Elemente auf der Seite. Aktualisieren Sie die `position`-Deklaration in Ihrem Code:

```css
.positioned {
  position: relative;
  background: yellow;
}
```

Wenn Sie an dieser Stelle speichern und aktualisieren, sehen Sie keine Änderung im Ergebnis. Wie modifizieren Sie also die Position des Elements? Sie müssen die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, die wir im nächsten Abschnitt erklären werden.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau festzulegen, wohin das positionierte Element verschoben werden soll. Um dies auszuprobieren, fügen Sie folgende Deklarationen zur `.positioned`-Regel in Ihrem CSS hinzu:

```css live-sample___relative
.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

> [!NOTE]
> Die Werte dieser Eigenschaften können jede [Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) annehmen, die Sie vernünftigerweise erwarten können: Pixel, mm, rems, %, etc.

Wenn Sie nun speichern und aktualisieren, erhalten Sie ein Ergebnis wie dieses:

```html hidden live-sample___relative
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

{{embedlivesample("relative", "100%", 500)}}

Cool, oder? Ok, das war wahrscheinlich nicht das, was Sie erwartet haben. Warum hat es sich nach unten und rechts bewegt, obwohl wir _oben_ und _links_ angegeben haben? Das mag kontraintuitiv erscheinen. Sie müssen sich das so vorstellen, als ob es eine unsichtbare Kraft gibt, die die angegebene Seite der positionierten Box drückt und sie in die entgegengesetzte Richtung bewegt. Wenn Sie also beispielsweise `top: 30px;` angeben, ist es, als ob eine Kraft die Oberseite der Box drückt, wodurch sie um `30px` nach unten verschoben wird.

## Absolute Positionierung

Absolute Positionierung bringt sehr unterschiedliche Ergebnisse.

### Festlegen von position: absolute

Versuchen wir, die Positionsdeklaration in Ihrem Code wie folgt zu ändern:

```css live-sample___absolute
.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

Wenn Sie jetzt speichern und aktualisieren, sollten Sie etwas wie folgt sehen:

```html hidden live-sample___absolute
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

{{embedlivesample("absolute", "100%", 420)}}

Beachten Sie zunächst, dass die Lücke, wo sich das positionierte Element im Dokumentenfluss befinden sollte, nicht mehr vorhanden ist — die ersten und dritten Elemente sind zusammengekommen, als ob es nicht mehr existiert! In gewisser Weise stimmt das. Ein absolut positioniertes Element existiert nicht mehr im normalen Dokumentenfluss. Stattdessen sitzt es auf einer eigenen Ebene, die von allem anderen getrennt ist. Das ist sehr nützlich: Es bedeutet, dass wir isolierte UI-Funktionen erstellen können, die das Layout anderer Elemente auf der Seite nicht beeinträchtigen. Beispielweise Popup-Informationsboxen, Steuerungsmenüs, Überlappen- oder Rollfenster, UI-Funktionen, die an jede Stelle auf der Seite gezogen und abgelegt werden können, und so weiter.

Zweitens bemerken Sie, dass sich die Position des Elements geändert hat. Das liegt daran, dass {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei der absoluten Position anders verhalten. Anstatt das Element basierend auf seiner relativen Position innerhalb des normalen Dokumentenflusses zu positionieren, geben sie den Abstand an, den das Element von jedem Rand des enthaltenen Elements haben soll. In diesem Fall sagen wir, dass das absolut positionierte Element 30px vom oberen Rand des **enthaltenden Elements** (des **ursprünglichen enthaltenen Blocks**, in diesem Fall siehe unten) und 30px vom linken Rand entfernt sitzen soll.

> [!NOTE]
> Sie können {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} verwenden, um Elemente zu skalieren, wenn Sie dies benötigen. Versuchen Sie, `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` auf Ihre positionierten Elemente anzuwenden und sehen Sie, was passiert! Setzen Sie die Änderungen danach wieder zurück...

> [!NOTE]
> Ja, Margins beeinflussen weiterhin positionierte Elemente. Margin-Collapsing tut dies jedoch nicht.

### Positionierungskontexte

Welches Element ist das "enthaltende Element" eines absolut positionierten Elements? Dies hängt stark vom `position`-Eigenschaftswert der Vorfahren des positionierten Elements ab.

Wenn keine Vorfahrenelemente ihre Positionseigenschaft explizit definiert haben, dann haben standardmäßig alle Vorfahrenelemente eine statische Position. Das Ergebnis davon ist, dass das absolut positionierte Element im **ursprünglichen enthaltenen Block** enthalten sein wird. Der ursprüngliche enthaltene Block hat die Dimensionen des Viewports und ist auch der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten, das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum ursprünglichen Viewport positioniert.

Das positionierte Element ist im HTML-Quellcode innerhalb des {{htmlelement("body")}}-Elements verschachtelt, aber im endgültigen Layout befindet es sich 30px von den oberen und linken Kanten der Seite entfernt.

Wir können den **Positionierungskontext** ändern, d.h. festlegen, relativ zu welchem Element das absolut positionierte Element positioniert wird. Dies wird erreicht, indem eine Positionierung auf einen der Vorfahren des Elements gesetzt wird (die Elemente, in die es verschachtelt ist; Sie können es nicht relativ zu einem Element positionieren, in dem es nicht verschachtelt ist). Um dies zu sehen, aktualisieren Sie Ihre `body`-Regel, um `position: relative` darauf zu setzen:

```css
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}
```

Das sollte das folgende Ergebnis liefern:

```html hidden live-sample___contexts
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

```css hidden live-sample___contexts live-sample___z-index
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

{{embedlivesample("contexts", "100%", 420)}}

Das positionierte Element sitzt nun relativ zum {{htmlelement("body")}}-Element.

### Einführung in z-index

All diese absolute Positionierung macht Spaß, aber es gibt ein weiteres Feature, das wir noch nicht betrachtet haben. Wenn Elemente beginnen zu überlappen, was bestimmt, welche Elemente über anderen erscheinen und welche darunter? In dem Beispiel, das wir bisher gesehen haben, haben wir nur ein positioniertes Element im Positionierungskontext, und es erscheint ganz oben, da positionierte Elemente über nicht positionierten gewinnen. Was passiert, wenn wir mehr als eines haben?

Versuchen Sie, folgendes zu Ihrem CSS hinzuzufügen, um den ersten Absatz ebenfalls absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

An diesem Punkt sehen Sie, dass der erste, limonengrüne Absatz aus dem Dokumentenfluss entfernt und etwas oberhalb der Stelle positioniert ist, an der er ursprünglich war. Er ist auch darunter gestapelt, wo der ursprüngliche `.positioned`-Absatz überlappt. Das liegt daran, dass der `.positioned`-Absatz der zweite Absatz in der Quellreihenfolge ist, und positionierte Elemente, die später in der Quellreihenfolge kommen, gewinnen über positionierte Elemente, die früher kommen.

Können Sie die Stapelreihenfolge ändern? Ja, das können Sie, indem Sie die Eigenschaft {{cssxref("z-index")}} verwenden. "z-index" bezieht sich auf die z-Achse. Sie erinnern sich vielleicht aus vorherigen Punkten im Kurs, in denen wir besprochen haben, dass Webseiten horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwenden, um die Positionierung für Dinge wie Hintergrundbilder und Schlagschattenversätze zu berechnen. Für Sprachen, die von links nach rechts laufen, befindet sich (0,0) in der oberen linken Ecke der Seite (oder des Elements), und die x- und y-Achsen verlaufen nach rechts und nach unten auf der Seite.

Webseiten haben auch eine z-Achse: Eine imaginäre Linie, die von der Oberfläche Ihres Bildschirms auf Ihr Gesicht zu verläuft (oder was auch immer Sie gerne vor dem Bildschirm haben). {{cssxref("z-index")}}-Werte beeinflussen, wo positionierte Elemente auf dieser Achse sitzen; positive Werte bewegen sie höher in den Stapel, negative Werte bewegen sie niedriger. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was effektiv 0 ist.

Um die Stapelreihenfolge zu ändern, versuchen Sie die `z-index: 1`-Deklaration zu Ihrer `p:nth-of-type(1)`-Regel hinzuzufügen:

```css live-sample___z-index
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

Jetzt sollten Sie den limonengrünen Absatz oben sehen:

```html hidden live-sample___z-index
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

{{embedlivesample("z-index", "100%", 350)}}

Beachten Sie, dass `z-index` nur ungerahmte Indexwerte akzeptiert; Sie können nicht angeben, dass Sie möchten, dass ein Element 23 Pixel die Z-Achse hoch geht — es funktioniert nicht so. Höhere Werte werden über niedrigeren Werten liegen, und es liegt bei Ihnen, welche Werte Sie verwenden. Die Verwendung von Werten von 2 und 3 wird denselben Effekt haben wie Werte von 300 und 40000.

## Fixe Positionierung

Schauen wir uns nun die fixe Positionierung an. Diese arbeitet genau auf dieselbe Weise wie absolute Positionierung, mit einem wesentlichen Unterschied: während absolute Positionierung ein Element an seinem Platz relativ zu seinem nächsten positionierten Vorfahren (dem ursprünglichen enthaltenen Block, wenn es keinen gibt) fest fixiert, fixiert **fixe Positionierung** ein Element an seinem Platz relativ zum sichtbaren Teil des Viewports. Das bedeutet, dass Sie nützliche UI-Elemente erstellen können, die fest an ihrem Platz sind, wie z.B. persistente Navigationsmenüs, die immer sichtbar sind, egal wie weit die Seite scrollt.

Lassen Sie uns ein einfaches Beispiel zusammenstellen, um zu zeigen, was wir meinen. Löschen Sie zuerst die vorhandenen `p:nth-of-type(1)` und `.positioned` Regeln aus Ihrem CSS.

Aktualisieren Sie jetzt die `body`-Regel, um die `position: relative;`-Deklaration zu entfernen und fügen Sie eine feste Höhe hinzu, wie folgt:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Nun werden wir dem {{htmlelement("Heading_Elements", "&lt;h1>")}}-Element eine `position: fixed;`-Deklaration geben und es oben im Viewport positionieren. Fügen Sie folgende Regel zu Ihrem CSS hinzu:

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

Das `top: 0;` wird benötigt, um es am oberen Bildschirmrand zu fixieren. Wir geben der Überschrift die gleiche Breite wie der Inhaltsbereich und einen weißen Hintergrund sowie etwas Padding und Margin, damit der Inhalt nicht darunter sichtbar wird.

Wenn Sie speichern und aktualisieren, sehen Sie einen unterhaltsamen kleinen Effekt, dass die Überschrift fix bleibt — der Inhalt scheint nach oben zu scrollen und darunter zu verschwinden. Beachten Sie jedoch, dass ein Teil des Inhalts zunächst unter der Überschrift abgeschnitten ist. Das liegt daran, dass die positionierte Überschrift nicht mehr im Dokumentenfluss erscheint, so dass der restliche Inhalt nach oben zum Bildschirmrand verschoben wird.

Wir können das verbessern, indem wir die Absätze etwas nach unten verschieben. Setzen Sie einen oberen Rand auf den ersten Absatz, wie folgt:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Jetzt sollten Sie das folgende Beispiel gerendert sehen:

```html hidden live-sample___fixed
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

```css hidden live-sample___fixed
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
  margin-top: 0;
  background: white;
  padding: 10px;
}

p:nth-of-type(1) {
  margin-top: 60px;
}
```

{{ EmbedLiveSample('fixed', '100%', 400) }}

## Klebende Positionierung

Es gibt einen weiteren Positionswert namens `position: sticky`, der etwas neuer als die anderen ist. Das ist im Wesentlichen ein Hybrid zwischen relativer und fixer Position. Es erlaubt einem positionierten Element, so zu wirken, als ob es relativ positioniert wäre, bis es eine gewisse Schwelle überschreitet (z.B. 10px vom oberen Rand des Viewports), nach der es fixiert wird.

### Einfaches Beispiel

Klebende Positionierung kann beispielsweise verwendet werden, um eine Navigationsleiste mit der Seite scrollen zu lassen, bis zu einem bestimmten Punkt, und dann am oberen Rand der Seite kleben zu bleiben.

```html hidden live-sample___basic-sticky
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

```css hidden live-sample___basic-sticky
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

```css live-sample___basic-sticky
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('basic-sticky', '100%', 200) }}

### Scrollender Index

Eine interessante und häufige Anwendung von `position: sticky` ist es, eine scrollende Indexseite zu erstellen, bei der verschiedene Überschriften am oberen Rand der Seite kleben, wenn sie diese erreichen. Die Markup-Struktur für ein solches Beispiel könnte folgendermaßen aussehen:

```html live-sample___sticky-scrolling-index
<h1>Sticky scrolling index</h1>

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

Das CSS würde wie folgt aussehen. Im normalen Fluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir den {{htmlelement("dt")}}-Elementen `position: sticky` und einen {{cssxref("top")}}-Wert von `0` hinzufügen, bleiben die Überschriften am oberen Rand des Viewports kleben, wenn sie diesen erreichen. Jede nachfolgende Überschrift ersetzt dann die vorherige, wenn sie bis zu dieser Position nach oben scrollt.

```css live-sample___sticky-scrolling-index
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

```css hidden live-sample___sticky-scrolling-index
body {
  width: 500px;
  height: 880px;
  margin: 0 auto;
}
```

{{ EmbedLiveSample('sticky-scrolling-index', '100%', 200) }}

Klebende Elemente sind "klebend" relativ zum nächsten Vorfahren mit einem "Scrollmechanismus", der durch die Eigenschaft [overflow](/de/docs/Web/CSS/Reference/Properties/overflow) seiner Vorfahren bestimmt wird.

## Zusammenfassung

Ich bin sicher, Sie hatten Spaß beim Spielen mit grundlegender Positionierung. Während es keine ideale Methode ist, um komplette Layouts zu erstellen, gibt es viele spezifische Ziele, für die es geeignet ist.

Im nächsten Artikel geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie alle diese Informationen verstanden und behalten haben.

## Siehe auch

- Die {{cssxref("position")}}-Eigenschaftsreferenz.
- [Praktische Positionierungsbeispiele](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples), für einige weitere nützliche Ideen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}
