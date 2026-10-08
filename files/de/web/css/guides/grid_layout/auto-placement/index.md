---
title: Automatische Platzierung im Grid-Layout
short-title: Automatische Platzierung verwenden
slug: Web/CSS/Guides/Grid_layout/Auto-placement
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

Das [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) enthält Regeln dafür, was geschieht, wenn Sie ein Grid erstellen und einige oder alle untergeordneten Elemente nicht ausdrücklich darin platzieren. Wenn Sie die Platzierung der Inhalte nicht genau steuern müssen, ist diese „automatische Platzierung“ die einfachste Möglichkeit, ein Grid für eine Gruppe von Elementen zu erstellen.

## Standardmäßige Platzierung

Wenn Sie für die Elemente keine Platzierungsangaben machen, ordnen sie sich automatisch im Grid an: In jeder Grid-Zelle wird ein Grid-Element platziert.

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{EmbedLiveSample('Default_placement')}}

## Standardregeln für die automatische Platzierung

Wie Sie im obigen Beispiel sehen, ordnen sich die untergeordneten Elemente eines Grids ohne explizite Platzierung in der Reihenfolge des Quellcodes an, jeweils ein Grid-Element pro Grid-Zelle. Standardmäßig erfolgt die Anordnung zeilenweise. Das Grid platziert in jeder Zelle der ersten Zeile ein Element. Wenn Sie mit der Eigenschaft {{cssxref("grid-template-rows")}} weitere Zeilen definiert haben, setzt das Grid die Platzierung in diesen Zeilen fort. Reichen die Zeilen des [expliziten Grids](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#implicit_and_explicit_grids) nicht für alle Elemente aus, werden neue _implizite_ Zeilen erstellt.

### Größe von Zeilen im impliziten Grid festlegen

Automatisch erstellte Zeilen im impliziten Grid sind standardmäßig _automatisch dimensioniert_. Das bedeutet, dass sie sich an ihren Inhalt anpassen, ohne dass ein Überlauf entsteht.

Die Größe dieser Zeilen können Sie mit der Eigenschaft {{cssxref("grid-auto-rows")}} steuern. Um beispielsweise alle Zeilen 100px hoch zu machen, können Sie `grid-auto-rows: 100px;` verwenden:

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
}
```

{{EmbedLiveSample('Sizing_rows_in_the_implicit_grid', '500', '230')}}

### Zeilengröße mit minmax() festlegen

Mit der Funktion {{cssxref("minmax")}} können Sie Zeilen mit einer Mindestgröße erstellen, die bei Bedarf mit ihrem Inhalt wachsen, wenn die Funktion als Wert für `grid-auto-rows` verwendet wird. Mit `grid-auto-rows: minmax(100px, auto);` legen wir fest, dass jede Zeile mindestens 100px hoch ist, aber bei Bedarf höher werden kann:

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>
    Four <br />This cell <br />Has extra <br />content. <br />Max is auto
    <br />so the row expands.
  </div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample('Sizing_rows_using_minmax', '500', '300')}}

### Zeilengröße mit einer Track-Liste festlegen

Sie können auch eine Track-Liste angeben. Diese wird wiederholt. Die folgende Track-Liste erstellt einen ersten impliziten Zeilen-Track mit einer Höhe von 100 Pixeln und einen zweiten mit einer Höhe von `200px`. Dieses Muster wird fortgesetzt, solange dem impliziten Grid Inhalte hinzugefügt werden.

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 100px 200px;
}
```

{{EmbedLiveSample('Sizing_rows_using_a_track_listing', '500', '450')}}

### Automatische Platzierung nach Spalten

Sie können das Grid Elemente auch spaltenweise automatisch platzieren lassen. Verwenden Sie dazu die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall fügt das Grid Elemente in die Zeilen ein, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Sobald eine Spalte gefüllt ist, wechselt es zur nächsten expliziten Spalte oder erstellt einen neuen Spalten-Track im impliziten Grid. Wie implizite Zeilen-Tracks werden diese Spalten-Tracks automatisch dimensioniert. Ihre Größe können Sie mit {{cssxref("grid-auto-columns")}} steuern. Das funktioniert genauso wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel hat das Grid drei Zeilen-Tracks mit einer Höhe von jeweils 200px. Mit `grid-auto-flow: column;` legen wir fest, dass die automatische Platzierung spaltenweise erfolgt. Durch `grid-auto-columns: 300px 100px;` sind die erstellten Spalten abwechselnd `300px` und `100px` breit, bis genügend Spalten-Tracks für alle Elemente vorhanden sind.

```css
.wrapper {
  display: grid;
  grid-template-rows: repeat(3, 200px);
  gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
}
```

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{EmbedLiveSample('Auto-placement_by_column', '500', '650')}}

## Reihenfolge automatisch platzierter Elemente

Ein Grid kann sowohl explizit als auch automatisch platzierte Elemente enthalten. Einige Elemente haben möglicherweise eine festgelegte Position im Grid, während andere automatisch platziert werden. Wenn die Dokumentreihenfolge der gewünschten Anordnung im Grid entspricht, müssen Sie möglicherweise nicht für jedes Element eine CSS-Regel zur Platzierung schreiben. Die Spezifikation beschreibt den [Algorithmus zur Platzierung von Grid-Elementen](https://drafts.csswg.org/css-grid/#auto-placement-algo) ausführlich. Für die meisten Anwendungsfälle genügt es jedoch, einige Regeln zu kennen.

### Durch `order` veränderte Dokumentreihenfolge

Das Grid platziert Elemente ohne festgelegte Grid-Position in der Reihenfolge, die die Spezifikation als „durch `order` veränderte Dokumentreihenfolge“ bezeichnet. Das bedeutet: Wenn Sie die Eigenschaft `order` verwendet haben, werden die Elemente entsprechend diesem Wert platziert und nicht in ihrer DOM-Reihenfolge. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie im Quellcode des Dokuments stehen.

### Elemente mit Platzierungseigenschaften

Zuerst platziert das Grid alle Elemente, für die eine Position festgelegt wurde. Im folgenden Beispiel gibt es 12 Grid-Elemente. Element 2 und Element 5 wurden anhand von Grid-Linien platziert. Sie können sehen, wo diese Elemente angeordnet werden und wie die übrigen Elemente anschließend automatisch in den freien Bereichen platziert werden. Automatisch platzierte Elemente, die in der DOM-Reihenfolge vor einem explizit platzierten Element stehen, werden nicht erst nach dessen Position angeordnet.

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample('Items_with_placement_properties', '500', '500')}}

### Elemente, die mehrere Tracks überspannen

Sie können Platzierungseigenschaften verwenden und gleichzeitig die automatische Platzierung nutzen. Im nächsten Beispiel habe ich das Layout so erweitert, dass die Elemente 1, 5 und 9 (4n+1) sowohl über zwei Zeilen- als auch über zwei Spalten-Tracks reichen. Dazu setze ich die Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} auf `span 2`. Dadurch wird die Startlinie des Elements automatisch bestimmt, während sich das Element bis zu einer Endlinie erstreckt, die zwei Tracks entfernt liegt.

Sie können sehen, dass dadurch Lücken im Grid entstehen. Wenn ein automatisch zu platzierendes Element nicht in den verfügbaren Platz passt, setzt das Grid die Platzierung in der nächsten Zeile fort, bis es einen passenden Bereich findet.

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
}
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample('Deal_with_items_that_span_tracks', '500', '800')}}

### Lücken füllen

Bislang geht das Grid bei allen Elementen, die wir nicht ausdrücklich platziert haben, stets vorwärts und behält dabei die DOM-Reihenfolge bei. Das ist in der Regel erwünscht: Wenn Sie beispielsweise ein Formular gestalten, sollen Beschriftungen und Eingabefelder nicht durcheinandergeraten, nur um eine Lücke zu füllen. Manchmal ordnen wir jedoch Elemente ohne logische Reihenfolge an und möchten ein Layout ohne Lücken erstellen.

Setzen Sie dazu die Eigenschaft {{cssxref("grid-auto-flow")}} für den Container auf `dense`. Mit derselben Eigenschaft ändern Sie auch die Platzierungsrichtung zu `column`. Für eine spaltenweise Platzierung verwenden Sie daher beide Werte: `grid-auto-flow: column dense`.

Damit füllt das Grid nun auch zuvor entstandene Lücken. Während es die Elemente platziert, entstehen zunächst wie zuvor Lücken. Findet es später ein Element, das in eine frühere Lücke passt, platziert es dieses dort außerhalb der DOM-Reihenfolge. Wie bei jeder anderen Umordnung im Grid ändert sich dadurch die logische Reihenfolge nicht. Die Tab-Reihenfolge folgt beispielsweise weiterhin der Dokumentreihenfolge. Auf mögliche Probleme bei der Barrierefreiheit von Grid-Layouts gehen wir im [Leitfaden zu Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) ein. Seien Sie vorsichtig, wenn Sie die visuelle Reihenfolge von der Dokumentreihenfolge abweichen lassen.

```css hidden
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven</div>
  <div>Twelve</div>
</div>
```

```css
.wrapper div:nth-child(4n + 1) {
  grid-column-end: span 2;
  grid-row-end: span 2;
  background-color: #ffa94d;
}
.wrapper div:nth-child(2) {
  grid-column: 3;
  grid-row: 2 / 4;
}
.wrapper div:nth-child(5) {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 100px;
  gap: 10px;
  grid-auto-flow: dense;
}
```

{{EmbedLiveSample('Filling_in_the_gaps', '500', '680')}}

### Anonyme Grid-Elemente

Die Spezifikation erwähnt anonyme Grid-Elemente. Diese entstehen, wenn ein Textabschnitt direkt im Grid-Container steht, ohne von einem anderen Element umschlossen zu sein. Im folgenden Beispiel gibt es drei Grid-Elemente, sofern Sie für das übergeordnete Element mit der Klasse `grid` den Wert `display: grid` festgelegt haben. Das erste ist ein anonymes Element, da es nicht von einem HTML-Element umschlossen ist. Es wird immer nach den Regeln der automatischen Platzierung behandelt. Die beiden anderen Grid-Elemente sind jeweils von einem div-Element umschlossen. Sie können automatisch platziert oder mit einer Platzierungsmethode im Grid positioniert werden.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, weil sie nicht gezielt angesprochen werden können. Wenn sich also aus irgendeinem Grund Text ohne umschließendes Element in Ihrem Grid befindet, beachten Sie, dass er an einer unerwarteten Stelle erscheinen kann, da er nach den Regeln der automatischen Platzierung angeordnet wird.

### Anwendungsfälle für die automatische Platzierung

Die automatische Platzierung ist immer dann nützlich, wenn Sie eine Sammlung von Elementen haben. Dazu können Elemente ohne logische Reihenfolge gehören, etwa Fotos in einer Galerie oder Produkte in einer Produktliste. In diesem Fall können Sie den dichten Platzierungsmodus verwenden, um Lücken im Grid zu füllen. In meinem Beispiel einer Bildergalerie gibt es Bilder im Quer- und im Hochformat. Bilder im Querformat mit der Klasse `landscape` erstrecken sich über zwei Spalten-Tracks. Anschließend verwende ich `grid-auto-flow: dense`, um ein dicht gefülltes Grid zu erstellen.

Entfernen Sie versuchsweise die Zeile `grid-auto-flow: dense`, um zu sehen, wie die Inhalte neu angeordnet werden und Lücken im Layout entstehen.

```html live-sample___autoplacement
<ul class="wrapper">
  <li>
    <img
      alt="A colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Three hot air balloons against a clear sky, as seen from the ground"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Three hot air balloons against a clear sky, as seen from the ground"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li class="landscape">
    <img
      alt="Three hot air balloons against a clear sky, as seen from the ground"
      src="https://mdn.github.io/shared-assets/images/examples/balloons-small.jpg" />
  </li>
  <li>
    <img
      alt="A colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
  <li>
    <img
      alt="A colorful hot air balloon against a clear sky"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </li>
</ul>
```

```css hidden live-sample___autoplacement
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  list-style: none;
  margin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wrapper li {
  border: 1px solid #cccccc;
}

.wrapper li img {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
```

```css live-sample___autoplacement
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, 1fr));
  gap: 10px;
  grid-auto-flow: dense;
}

.wrapper li.landscape {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("autoplacement", "", "500px")}}

Die automatische Platzierung kann Ihnen auch dabei helfen, Oberflächenelemente mit einer logischen Reihenfolge anzuordnen. Ein Beispiel dafür ist die Definitionsliste im nächsten Beispiel. Definitionslisten stellen bei der Gestaltung eine interessante Herausforderung dar: Sie haben eine flache Struktur, in der die Gruppen aus `dt`- und `dd`-Elementen nicht von einem gemeinsamen Element umschlossen sind. In meinem Beispiel lasse ich die Elemente automatisch platzieren. Zusätzlich verwende ich Klassen, durch die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 beginnt. So stehen Begriffe auf der einen und Definitionen auf der anderen Seite – unabhängig davon, wie viele es jeweils gibt.

```css hidden live-sample___use-cases-for-auto-placement
body {
  font: 1.2em sans-serif;
}
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html live-sample___use-cases-for-auto-placement
<div class="wrapper">
  <dl>
    <dt>Mammals</dt>
    <dd>Cat</dd>
    <dd>Dog</dd>
    <dd>Mouse</dd>
    <dt>Birds</dt>
    <dd>Pied Wagtail</dd>
    <dd>Owl</dd>
    <dt>Fish</dt>
    <dd>Guppy</dd>
  </dl>
</div>
```

```css live-sample___use-cases-for-auto-placement
dl {
  display: grid;
  grid-template-columns: auto 1fr;
  max-width: 300px;
  margin: 1em;
  line-height: 1.4;
}
dt {
  grid-column: 1;
  font-weight: bold;
}
dd {
  grid-column: 2;
}
```

{{EmbedLiveSample('use-cases-for-auto-placement', '500', '230')}}

## Was ist mit der automatischen Platzierung (noch) nicht möglich?

Einige Fragen tauchen immer wieder auf. Derzeit können wir beispielsweise nicht jedes zweite Feld des Grids gezielt mit Elementen belegen. Wenn Sie den vorherigen Leitfaden über benannte Linien im Grid gelesen haben, ist Ihnen möglicherweise schon eine verwandte Frage in den Sinn gekommen: Könnte man eine Regel definieren, die besagt „Platziere Elemente automatisch an der nächsten Linie namens `n`“, sodass das Grid andere Linien überspringt? Dazu gibt es [bereits ein Issue](https://github.com/w3c/csswg-drafts/issues/796) im GitHub-Repository der CSSWG. Sie können dort gern eigene Anwendungsfälle ergänzen.

Vielleicht fallen Ihnen auch eigene Anwendungsfälle für die automatische Platzierung oder andere Teile des Grid-Layouts ein. Erstellen Sie dafür ein Issue oder ergänzen Sie ein bestehendes Issue, das Ihren Anwendungsfall abdecken könnte. So tragen Sie dazu bei, künftige Versionen der Spezifikation zu verbessern.
