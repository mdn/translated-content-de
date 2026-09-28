---
title: Automatische Platzierung im Grid-Layout
short-title: Automatische Platzierung verwenden
slug: Web/CSS/Guides/Grid_layout/Auto-placement
l10n:
  sourceCommit: d6179808aed77188b778b9fbeaa89097978bc318
---

Das [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) enthält Regeln dafür, was geschieht, wenn Sie ein Grid erstellen und einige oder alle Kindelemente nicht ausdrücklich darin platzieren. Wenn Sie die Platzierung der Inhalte nicht genau steuern müssen, ist diese „automatische Platzierung“ die einfachste Möglichkeit, ein Grid für eine Gruppe von Elementen zu erstellen.

## Standardplatzierung

Wenn Sie für die Elemente keine Platzierung festlegen, ordnen sie sich automatisch im Grid an: In jeder Grid-Zelle wird ein Grid-Element platziert.

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

Wie das obige Beispiel zeigt, ordnen sich die Kindelemente beim Erstellen eines Grids ohne explizite Platzierung selbst an: In jeder Grid-Zelle befindet sich ein Grid-Element, und die Reihenfolge entspricht der im Quellcode. Standardmäßig werden die Elemente zeilenweise angeordnet. Grid platziert zunächst in jeder Zelle der ersten Zeile ein Element. Wenn Sie mit der Eigenschaft {{cssxref("grid-template-rows")}} weitere Zeilen erstellt haben, setzt Grid die Platzierung in diesen Zeilen fort. Reichen die Zeilen im [expliziten Grid](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#implicit_and_explicit_grids) nicht für alle Elemente aus, werden neue _implizite_ Zeilen erstellt.

### Größe der Zeilen im impliziten Grid festlegen

Automatisch erstellte Zeilen im impliziten Grid erhalten standardmäßig eine _automatische Größe_. Das bedeutet, dass sie sich an den enthaltenen Inhalt anpassen, ohne dass ein Überlauf entsteht.

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

### Größe der Zeilen mit minmax() festlegen

Mit der Funktion {{cssxref("minmax")}} können Sie Zeilen erstellen, die eine Mindestgröße haben und bei Bedarf wachsen, um ihren Inhalt aufzunehmen. Dazu setzen Sie `grid-auto-rows` auf einen entsprechenden Wert. Mit `grid-auto-rows: minmax(100px, auto);` legen Sie fest, dass jede Zeile mindestens 100px hoch ist, bei Bedarf aber höher werden kann:

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

### Größe der Zeilen mit einer Track-Liste festlegen

Sie können auch eine Track-Liste angeben, die wiederholt wird. Die folgende Track-Liste erstellt einen ersten impliziten Zeilen-Track mit 100 Pixeln und einen zweiten mit `200px`. Dieses Muster wird fortgesetzt, solange dem impliziten Grid Inhalte hinzugefügt werden.

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

Sie können Grid auch anweisen, Elemente automatisch nach Spalten zu platzieren. Verwenden Sie dazu die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall fügt Grid die Elemente in die Zeilen ein, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Sobald eine Spalte gefüllt ist, wechselt Grid zur nächsten expliziten Spalte oder erstellt einen neuen Spalten-Track im impliziten Grid. Wie implizite Zeilen-Tracks erhalten auch diese Spalten-Tracks automatisch eine passende Größe. Die Größe impliziter Spalten-Tracks können Sie mit {{cssxref("grid-auto-columns")}} steuern. Dies funktioniert genauso wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel besteht das Grid aus drei Zeilen-Tracks mit einer Höhe von jeweils 200px. Mit `grid-auto-flow: column;` legen wir die automatische Platzierung nach Spalten fest. Durch `grid-auto-columns: 300px 100px;` sind die erstellten Spalten abwechselnd `300px` und `100px` breit, bis genügend Spalten-Tracks für alle Elemente vorhanden sind.

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

## Die Reihenfolge automatisch platzierter Elemente

Ein Grid kann Elemente mit unterschiedlichen Platzierungsarten enthalten. Für einige Elemente kann eine bestimmte Position im Grid festgelegt sein, während andere automatisch platziert werden. Wenn die Reihenfolge im Dokument der gewünschten Anordnung im Grid entspricht, müssen Sie möglicherweise nicht für jedes Element eine CSS-Regel zur Platzierung schreiben. Die Spezifikation beschreibt den [Algorithmus zur Platzierung von Grid-Elementen](https://drafts.csswg.org/css-grid/#auto-placement-algo) ausführlich. Für die meisten Anwendungsfälle genügt es jedoch, sich einige Regeln zu merken.

### Durch `order` veränderte Dokumentreihenfolge

Grid platziert Elemente ohne festgelegte Grid-Position in der Reihenfolge, die die Spezifikation als „durch `order` veränderte Dokumentreihenfolge“ bezeichnet. Wenn Sie die Eigenschaft `order` verwendet haben, werden die Elemente also nach deren Werten und nicht nach ihrer DOM-Reihenfolge platziert. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie im Dokumentquelltext stehen.

### Elemente mit Platzierungseigenschaften

Grid platziert zuerst alle Elemente, für die eine Position festgelegt wurde. Im folgenden Beispiel gibt es 12 Grid-Elemente. Element 2 und Element 5 wurden anhand von Grid-Linien platziert. Sie können sehen, wie diese Elemente ihre Position erhalten und die übrigen Elemente anschließend automatisch in den freien Bereichen platziert werden. Automatisch platzierte Elemente können dabei in DOM-Reihenfolge vor ausdrücklich platzierten Elementen angeordnet werden. Ihre Platzierung beginnt nicht erst hinter der Position eines zuvor im DOM stehenden, ausdrücklich platzierten Elements.

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

### Elemente, die sich über mehrere Tracks erstrecken

Sie können Platzierungseigenschaften verwenden und zugleich die automatische Platzierung nutzen. Im nächsten Beispiel erweitern wir das Layout, indem wir die Elemente 1, 5 und 9 (4n+1) sowohl über zwei Zeilen- als auch über zwei Spalten-Tracks erstrecken. Dazu setzen wir die Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} auf `span 2`. Die Startlinie des Elements wird dadurch automatisch bestimmt; von dort aus erstreckt es sich über zwei Tracks.

Sie können sehen, dass dadurch Lücken im Grid entstehen: Trifft Grid bei der automatischen Platzierung auf ein Element, das nicht in den verfügbaren Platz passt, wird es in einer späteren Zeile platziert, in der genügend Platz vorhanden ist.

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

Bisher schreitet Grid bei allen Elementen, die wir nicht ausdrücklich platziert haben, stets vorwärts und behält deren DOM-Reihenfolge bei. Das ist im Allgemeinen erwünscht: Beim Layout eines Formulars sollen beispielsweise Beschriftungen und Felder nicht durcheinandergeraten, nur um eine Lücke zu füllen. Manchmal haben die anzuordnenden Elemente jedoch keine logische Reihenfolge, und wir möchten ein Layout ohne Lücken erstellen.

Setzen Sie dazu die Eigenschaft {{cssxref("grid-auto-flow")}} des Containers auf `dense`. Mit derselben Eigenschaft können Sie die Platzierungsrichtung auf `column` ändern. Wenn Sie mit Spalten arbeiten, geben Sie deshalb beide Werte an: `grid-auto-flow: column dense`.

Grid füllt nun auch zuvor entstandene Lücken. Während es das Grid durchläuft, lässt es zunächst wie zuvor Lücken entstehen. Findet es später ein Element, das in eine solche Lücke passt, platziert es dieses dort, auch wenn es dadurch von der DOM-Reihenfolge abweicht. Wie bei jeder anderen Umordnung im Grid ändert sich dadurch die logische Reihenfolge nicht. Die Tabulatorreihenfolge folgt beispielsweise weiterhin der Dokumentreihenfolge. Im [Leitfaden zu Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) betrachten wir mögliche Probleme für die Barrierefreiheit. Achten Sie darauf, wenn Sie eine solche Abweichung zwischen visueller und Dokumentreihenfolge erzeugen.

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

Die Spezifikation erwähnt auch anonyme Grid-Elemente. Diese entstehen, wenn sich innerhalb eines Grid-Containers Text befindet, der nicht von einem anderen Element umschlossen ist. Im folgenden Beispiel gibt es drei Grid-Elemente, sofern Sie für das übergeordnete Element mit der Klasse `grid` die Eigenschaft `display: grid` festgelegt haben. Das erste ist ein anonymes Element, weil es nicht von Markup umschlossen ist. Es wird immer nach den Regeln der automatischen Platzierung behandelt. Die beiden anderen Grid-Elemente sind jeweils von einem div umschlossen. Sie können automatisch oder mit einer Platzierungsmethode im Grid platziert werden.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da sie nicht gezielt ausgewählt werden können. Wenn Ihr Grid also Text enthält, der nicht von einem Element umschlossen ist, beachten Sie, dass er möglicherweise an einer unerwarteten Stelle erscheint, weil er nach den Regeln der automatischen Platzierung angeordnet wird.

### Anwendungsfälle für die automatische Platzierung

Die automatische Platzierung ist immer dann nützlich, wenn Sie eine Sammlung von Elementen haben. Das können Elemente ohne logische Reihenfolge sein, etwa Fotos in einer Galerie oder Produkte in einer Produktliste. In diesem Fall können Sie den dichten Platzierungsmodus verwenden, um Lücken im Grid zu füllen. In meinem Beispiel einer Bildergalerie gibt es Bilder im Quer- und im Hochformat. Bilder im Querformat mit der Klasse `landscape` erstrecken sich über zwei Spalten-Tracks. Mit `grid-auto-flow: dense` erzeuge ich anschließend ein möglichst lückenloses Grid.

Entfernen Sie probeweise die Zeile `grid-auto-flow: dense`, um zu sehen, wie die Inhalte neu angeordnet werden und Lücken im Layout entstehen.

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

Die automatische Platzierung kann auch beim Layout von Oberflächenelementen mit einer logischen Reihenfolge helfen. Ein Beispiel dafür ist die Definitionsliste im folgenden Beispiel. Die Gestaltung von Definitionslisten ist eine interessante Herausforderung, da sie eine flache Struktur haben: Die zusammengehörigen `dt`- und `dd`-Elemente werden nicht von einem gemeinsamen Element umschlossen. In meinem Beispiel lasse ich die Elemente automatisch platzieren. Mit Klassen lege ich jedoch fest, dass `dt` in Spalte 1 und `dd` in Spalte 2 beginnt. So stehen die Begriffe auf der einen und die Definitionen auf der anderen Seite – unabhängig davon, wie viele es jeweils gibt.

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

Einige Fragen kommen immer wieder auf. Derzeit können wir beispielsweise nicht festlegen, dass unsere Elemente nur in jeder zweiten Zelle des Grids platziert werden. Wenn Sie den vorherigen Leitfaden über benannte Grid-Linien gelesen haben, ist Ihnen vielleicht eine ähnliche Frage in den Sinn gekommen: Lässt sich eine Regel definieren, die Elemente automatisch an der nächsten Linie mit dem Namen „n“ platziert, sodass Grid andere Linien überspringt? Dazu gibt es bereits [einen Eintrag im GitHub-Repository der CSSWG](https://github.com/w3c/csswg-drafts/issues/796). Sie können dort gern eigene Anwendungsfälle ergänzen.

Vielleicht fallen Ihnen weitere Anwendungsfälle für die automatische Platzierung oder andere Aspekte des Grid-Layouts ein. Erstellen Sie dafür einen neuen Issue oder ergänzen Sie einen bestehenden, der Ihren Anwendungsfall abdecken könnte. Das hilft dabei, künftige Versionen der Spezifikation zu verbessern.
