---
title: Positionierung
slug: Learn_web_development/Core/CSS_layout/Positioning
l10n:
  sourceCommit: 1a2a5b56a689b441ebf3be91b90f15746c5a5a01
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}

Mit Positionierung können Sie Elemente aus dem normalen Dokumentfluss herausnehmen und ihr Verhalten verändern. Beispielsweise können sie übereinanderliegen oder unabhängig vom Scrollen immer an derselben Stelle im Browser-Viewport bleiben. Dieser Artikel erläutert die verschiedenen Werte von {{cssxref("position")}} und ihre Verwendung.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a href="/de/docs/Learn_web_development/Core/Structuring_content"
          >Inhalte mit HTML strukturieren</a
        >,
        <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen der CSS-Gestaltung</a>,
        <a href="/de/docs/Learn_web_development/Core/Text_styling/Fundamentals">Grundlagen der Text- und Schriftgestaltung</a>,
        Vertrautheit mit den <a href="/de/docs/Learn_web_development/Core/CSS_layout/Introduction">Grundkonzepten des CSS-Layouts</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die Positionierung mit <code>static</code> ist die Standardmethode zur Positionierung von Elementen auf der Seite.</li>
          <li>Relativ positionierte Elemente bleiben im normalen Dokumentfluss. Die absolute Positionierung (sowie die Positionierung mit <code>fixed</code> oder <code>sticky</code>) nimmt Elemente dagegen vollständig aus dem normalen Dokumentfluss heraus und platziert sie auf einer separaten Ebene.</li>
          <li>Die endgültige Position im Layout lässt sich mit den Eigenschaften <code>top</code>, <code>bottom</code>, <code>left</code> und <code>right</code> verändern. Deren Wirkung hängt jedoch vom festgelegten Wert für <code>position</code> ab.</li>
          <li>Der Positionierungskontext eines positionierten Elements wird festgelegt, indem ein Vorfahrenelement positioniert wird.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Die Übungen durcharbeiten

Wir möchten, dass Sie die folgenden Übungen auf Ihrem lokalen Computer durchführen. Erstellen Sie zunächst eine neue HTML-Datei auf Ihrem System und fügen Sie den folgenden Inhalt ein:

```html
<!doctype html>
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

Durch Positionierung können wir interessante Ergebnisse erzielen, indem wir den normalen Dokumentfluss außer Kraft setzen. Vielleicht möchten Sie einige Boxen leicht von ihrer Standardposition im Dokumentfluss verschieben, um ein etwas ungewöhnliches, unregelmäßiges Erscheinungsbild zu erzeugen? Dafür eignet sich die Positionierung. Oder Sie möchten ein UI-Element erstellen, das über anderen Teilen der Seite schwebt und/oder unabhängig davon, wie weit die Seite gescrollt wird, immer an derselben Stelle im Browserfenster bleibt? Auch solche Layouts ermöglicht die Positionierung.

Für HTML-Elemente gibt es verschiedene Arten der Positionierung. Um eine bestimmte Art für ein Element zu aktivieren, verwenden wir die Eigenschaft {{cssxref("position")}}.

## Statische Positionierung

Die statische Positionierung ist der Standard für jedes Element. Sie bedeutet lediglich: „Platziere das Element an seiner Standardposition im normalen Dokumentfluss – hier gibt es nichts Besonderes zu sehen.“

Um dies zu sehen (und das Beispiel für die folgenden Abschnitte vorzubereiten), fügen Sie zunächst dem zweiten {{htmlelement("p")}}-Element im HTML die `class` `positioned` hinzu:

```html
<p class="positioned">…</p>
```

Fügen Sie nun die folgende Regel am Ende Ihres CSS ein:

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

Wenn Sie speichern und die Seite neu laden, sehen Sie außer der geänderten Hintergrundfarbe des zweiten Absatzes keinen Unterschied. Das Beispiel sollte so aussehen:

{{embedlivesample("static", "100%", 500)}}

Das ist erwartungsgemäß – wie bereits erwähnt, ist die statische Positionierung das Standardverhalten!

## Relative Positionierung

Die relative Positionierung ist die erste Positionierungsart, die wir uns näher ansehen. Sie ähnelt der statischen Positionierung sehr. Nachdem das positionierte Element seinen Platz im normalen Dokumentfluss eingenommen hat, können Sie jedoch seine endgültige Position verändern und es beispielsweise mit anderen Elementen auf der Seite überlappen lassen. Ändern Sie die `position`-Deklaration in Ihrem Code wie folgt:

```css
.positioned {
  position: relative;
  background: yellow;
}
```

Wenn Sie jetzt speichern und die Seite neu laden, sehen Sie zunächst überhaupt keine Veränderung. Wie ändern Sie also die Position des Elements? Dazu benötigen Sie die Eigenschaften {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}}, die wir im nächsten Abschnitt erläutern.

### Einführung in top, bottom, left und right

{{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} werden zusammen mit {{cssxref("position")}} verwendet, um genau festzulegen, wohin ein positioniertes Element verschoben werden soll. Fügen Sie zum Ausprobieren die folgenden Deklarationen zur `.positioned`-Regel in Ihrem CSS hinzu:

```css live-sample___relative
.positioned {
  position: relative;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

> [!NOTE]
> Die Werte dieser Eigenschaften können alle [Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) verwenden, die Sie üblicherweise erwarten würden: Pixel, mm, rem, % usw.

Wenn Sie jetzt speichern und die Seite neu laden, erhalten Sie ungefähr dieses Ergebnis:

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

Interessant, oder? Vermutlich haben Sie aber etwas anderes erwartet. Warum wurde das Element nach unten und rechts verschoben, obwohl wir _top_ und _left_ angegeben haben? Das wirkt möglicherweise widersprüchlich. Stellen Sie es sich so vor, als würde eine unsichtbare Kraft gegen die angegebene Seite der positionierten Box drücken und sie dadurch in die entgegengesetzte Richtung bewegen. Wenn Sie beispielsweise `top: 30px;` angeben, ist es, als würde eine Kraft gegen die Oberseite der Box drücken und sie um `30px` nach unten verschieben.

## Absolute Positionierung

Die absolute Positionierung führt zu ganz anderen Ergebnissen.

### position: absolute festlegen

Ändern Sie die Positionierungsdeklaration in Ihrem Code wie folgt:

```css live-sample___absolute
.positioned {
  position: absolute;
  background: yellow;
  top: 30px;
  left: 30px;
}
```

Wenn Sie jetzt speichern und die Seite neu laden, sollten Sie ungefähr Folgendes sehen:

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

Beachten Sie zunächst, dass die Lücke, die das positionierte Element im Dokumentfluss einnehmen sollte, nicht mehr vorhanden ist – das erste und das dritte Element sind zusammengerückt, als gäbe es das zweite nicht mehr! In gewisser Weise stimmt das auch. Ein absolut positioniertes Element befindet sich nicht mehr im normalen Dokumentfluss. Stattdessen liegt es auf einer eigenen Ebene, getrennt von allen anderen Elementen. Das ist sehr nützlich: So können wir eigenständige UI-Funktionen erstellen, die das Layout der übrigen Seitenelemente nicht beeinflussen. Beispiele sind Popup-Infoboxen, Steuerungsmenüs, beim Darüberfahren eingeblendete Bereiche und UI-Elemente, die sich per Drag-and-Drop an eine beliebige Stelle der Seite ziehen lassen.

Beachten Sie außerdem, dass sich die Position des Elements geändert hat. Der Grund ist, dass sich {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} bei absoluter Positionierung anders verhalten. Statt das Element anhand seiner relativen Position im normalen Dokumentfluss zu platzieren, legen sie seinen Abstand zu den jeweiligen Seiten des umschließenden Elements fest. In diesem Fall geben wir an, dass das absolut positionierte Element 30px von der Oberkante des **umschließenden Elements** (hier des **initialen umschließenden Blocks**, siehe unten) und 30px von dessen linker Kante entfernt sein soll.

> [!NOTE]
> Mit {{cssxref("top")}}, {{cssxref("bottom")}}, {{cssxref("left")}} und {{cssxref("right")}} können Sie bei Bedarf auch die Größe von Elementen verändern. Setzen Sie für Ihre positionierten Elemente testweise `top: 0; bottom: 0; left: 0; right: 0;` und `margin: 0;` und sehen Sie sich an, was passiert! Setzen Sie die Werte anschließend wieder zurück …

> [!NOTE]
> Ja, Außenabstände wirken sich weiterhin auf positionierte Elemente aus. Ein Zusammenfallen von Außenabständen findet jedoch nicht statt.

### Positionierungskontexte

Welches Element ist das „umschließende Element“ eines absolut positionierten Elements? Das hängt wesentlich vom Wert der Eigenschaft `position` seiner Vorfahrenelemente ab.

Wenn für kein Vorfahrenelement die Eigenschaft `position` ausdrücklich festgelegt ist, sind standardmäßig alle Vorfahrenelemente statisch positioniert. Dadurch wird das absolut positionierte Element vom **initialen umschließenden Block** umschlossen. Dieser hat die Abmessungen des Viewports und ist zugleich der Block, der das {{htmlelement("html")}}-Element enthält. Mit anderen Worten: Das absolut positionierte Element wird außerhalb des {{htmlelement("html")}}-Elements angezeigt und relativ zum ursprünglichen Viewport positioniert.

Im HTML-Quelltext ist das positionierte Element innerhalb des {{htmlelement("body")}}-Elements verschachtelt. Im fertigen Layout ist es jedoch jeweils 30px vom oberen und linken Rand der Seite entfernt.

Wir können den **Positionierungskontext** ändern – also festlegen, relativ zu welchem Element das absolut positionierte Element platziert wird. Dazu positionieren wir eines seiner Vorfahrenelemente (also eines der Elemente, in denen es verschachtelt ist; relativ zu einem Element, in dem es nicht verschachtelt ist, können Sie es nicht positionieren). Um das auszuprobieren, ergänzen Sie Ihre `body`-Regel um `position: relative`:

```css
body {
  width: 500px;
  margin: 0 auto;
  position: relative;
}
```

Das sollte zu folgendem Ergebnis führen:

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

Das positionierte Element liegt nun relativ zum {{htmlelement("body")}}-Element.

### Einführung in z-index

Die absolute Positionierung bietet viele Möglichkeiten, aber eine weitere Funktion haben wir noch nicht betrachtet. Wenn sich Elemente überlappen, was bestimmt dann, welche Elemente vor und welche hinter anderen erscheinen? Im bisherigen Beispiel gibt es nur ein positioniertes Element im Positionierungskontext. Es erscheint oben, weil positionierte Elemente vor nicht positionierten Elementen angezeigt werden. Was passiert aber, wenn es mehrere gibt?

Fügen Sie Folgendes zu Ihrem CSS hinzu, um auch den ersten Absatz absolut zu positionieren:

```css
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
```

Nun sehen Sie, dass der erste Absatz limettengrün eingefärbt, aus dem Dokumentfluss genommen und etwas oberhalb seiner ursprünglichen Position platziert wurde. Dort, wo sich die beiden Absätze überlappen, liegt er außerdem hinter dem ursprünglichen `.positioned`-Absatz. Das liegt daran, dass der `.positioned`-Absatz in der Quelltextreihenfolge an zweiter Stelle steht: Später im Quelltext stehende positionierte Elemente erscheinen vor früher stehenden positionierten Elementen.

Können Sie die Stapelreihenfolge ändern? Ja, mit der Eigenschaft {{cssxref("z-index")}}. „z-index“ bezieht sich auf die z-Achse. Vielleicht erinnern Sie sich daran, dass wir an früherer Stelle des Kurses horizontale (x-Achse) und vertikale (y-Achse) Koordinaten verwendet haben, um beispielsweise Hintergrundbilder zu positionieren und Schatten zu versetzen. Bei von links nach rechts geschriebenen Sprachen liegt (0,0) oben links auf der Seite (oder im Element). Die x-Achse verläuft von dort nach rechts, die y-Achse nach unten.

Webseiten haben außerdem eine z-Achse: eine gedachte Linie, die von der Bildschirmoberfläche auf Ihr Gesicht zu verläuft (oder auf etwas anderes, das sich vor dem Bildschirm befindet). Werte von {{cssxref("z-index")}} beeinflussen, wo positionierte Elemente auf dieser Achse liegen. Positive Werte verschieben sie im Stapel nach vorn, negative Werte nach hinten. Standardmäßig haben alle positionierten Elemente einen `z-index` von `auto`, was praktisch 0 entspricht.

Um die Stapelreihenfolge zu ändern, fügen Sie Ihrer `p:nth-of-type(1)`-Regel die Deklaration `z-index: 1` hinzu:

```css live-sample___z-index
p:nth-of-type(1) {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
  z-index: 1;
}
```

Nun sollte der limettengrüne Absatz oben erscheinen:

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

Beachten Sie, dass `z-index` nur Indexwerte ohne Einheit akzeptiert. Sie können nicht festlegen, dass ein Element auf der Z-Achse 23 Pixel weiter vorn liegen soll – so funktioniert diese Eigenschaft nicht. Höhere Werte erscheinen vor niedrigeren; welche Werte Sie verwenden, bleibt Ihnen überlassen. Die Werte 2 und 3 erzielen denselben Effekt wie 300 und 40000.

## Fixierte Positionierung

Sehen wir uns nun die fixierte Positionierung an. Sie funktioniert genauso wie die absolute Positionierung, mit einem entscheidenden Unterschied: Während die absolute Positionierung ein Element relativ zu seinem nächstgelegenen positionierten Vorfahren fixiert (oder relativ zum initialen umschließenden Block, falls es keinen solchen Vorfahren gibt), fixiert die **fixierte Positionierung** ein Element relativ zum sichtbaren Bereich des Viewports. So können Sie nützliche UI-Elemente erstellen, die an Ort und Stelle bleiben – etwa dauerhaft sichtbare Navigationsmenüs, unabhängig davon, wie weit die Seite gescrollt wird.

Ein einfaches Beispiel verdeutlicht, was gemeint ist. Löschen Sie zunächst die vorhandenen Regeln `p:nth-of-type(1)` und `.positioned` aus Ihrem CSS.

Entfernen Sie anschließend die Deklaration `position: relative;` aus der `body`-Regel und legen Sie wie folgt eine feste Höhe fest:

```css
body {
  width: 500px;
  height: 1400px;
  margin: 0 auto;
}
```

Als Nächstes geben wir dem Element {{htmlelement("Heading_Elements", "&lt;h1>")}} die Deklaration `position: fixed;` und platzieren es am oberen Rand des Viewports. Fügen Sie Ihrem CSS die folgende Regel hinzu:

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

`top: 0;` ist erforderlich, damit die Überschrift am oberen Bildschirmrand bleibt. Wir geben ihr dieselbe Breite wie der Inhaltsspalte sowie einen weißen Hintergrund und etwas Innen- und Außenabstand, damit der darunterliegende Inhalt nicht sichtbar ist.

Wenn Sie speichern und die Seite neu laden, sehen Sie einen interessanten Effekt: Die Überschrift bleibt stehen, während der Inhalt scheinbar nach oben scrollt und darunter verschwindet. Beachten Sie aber, dass anfangs ein Teil des Inhalts unter der Überschrift verdeckt ist. Das liegt daran, dass sich die positionierte Überschrift nicht mehr im Dokumentfluss befindet und der übrige Inhalt deshalb nach oben rückt.

Wir können das verbessern, indem wir die Absätze etwas nach unten verschieben. Legen Sie dafür wie folgt einen oberen Außenabstand für den ersten Absatz fest:

```css
p:nth-of-type(1) {
  margin-top: 60px;
}
```

Nun sollten Sie das folgende gerenderte Beispiel sehen:

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

## Sticky-Positionierung

Es gibt noch einen weiteren Wert für `position`: `position: sticky`. Er ist etwas neuer als die anderen. Im Grunde kombiniert er relative und fixierte Positionierung. Ein so positioniertes Element verhält sich zunächst wie ein relativ positioniertes Element. Sobald es beim Scrollen jedoch einen bestimmten Schwellenwert erreicht (beispielsweise 10px vom oberen Rand des Viewports entfernt), bleibt es dort stehen.

### Einfaches Beispiel

Mit Sticky-Positionierung können Sie beispielsweise erreichen, dass eine Navigationsleiste zunächst mit der Seite scrollt und ab einem bestimmten Punkt am oberen Seitenrand stehen bleibt.

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

### Scrollendes Verzeichnis

Eine interessante und häufige Anwendung von `position: sticky` ist eine scrollende Verzeichnisseite, auf der verschiedene Überschriften am oberen Seitenrand stehen bleiben, sobald sie ihn erreichen. Das Markup für ein solches Beispiel könnte so aussehen:

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

Das CSS sähe wie folgt aus. Im normalen Dokumentfluss scrollen die {{htmlelement("dt")}}-Elemente mit dem Inhalt. Wenn wir dem {{htmlelement("dt")}}-Element `position: sticky` und einen {{cssxref("top")}}-Wert von `0` geben, bleiben die Überschriften am oberen Rand des Viewports stehen, sobald sie ihn erreichen. Jede nachfolgende Überschrift ersetzt dann die vorherige, wenn sie beim Scrollen diese Position erreicht.

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

Sticky-Elemente sind relativ zum nächstgelegenen Vorfahren mit einem „Scrollmechanismus“ fixiert. Ob ein solcher Mechanismus vorliegt, wird durch die Eigenschaft [overflow](/de/docs/Web/CSS/Reference/Properties/overflow) der Vorfahren bestimmt.

## Zusammenfassung

Ich hoffe, das Experimentieren mit den Grundlagen der Positionierung hat Ihnen Spaß gemacht. Für vollständige Layouts ist sie zwar nicht die ideale Methode, für viele konkrete Aufgaben eignet sie sich jedoch gut.

Im nächsten Artikel finden Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie diese Informationen verstanden und behalten haben.

## Siehe auch

- Die Referenz zur Eigenschaft {{cssxref("position")}}.
- [Praktische Beispiele zur Positionierung](/de/docs/Learn_web_development/Core/CSS_layout/Practical_positioning_examples) mit weiteren nützlichen Anregungen.

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Test_your_skills/Floats", "Learn_web_development/Core/CSS_layout/Test_your_skills/Position", "Learn_web_development/Core/CSS_layout")}}
