---
title: Automatische Platzierung in Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: 607096ddf4ce72c5c3e510f1c6ca014dd6d732fc
---

{{CSSRef}}

[CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/) enthält Regeln, die steuern, was passiert, wenn Sie ein Raster erstellen und einige oder alle Kind-Elemente im Raster nicht explizit platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung des Inhalts benötigen, ist diese "automatische Platzierung" die einfachste Methode, ein Raster für eine Reihe von Elementen zu erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich automatisch im Raster, wobei ein Rasterelement in jeder Rasterzelle platziert wird.

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

Wie Sie im obigen Beispiel sehen können, werden Kinder-Elemente, wenn Sie ein Raster erstellen, ohne Elemente zu platzieren, automatisch layoutet, und zwar in Quellcode-Reihenfolge mit jeweils einem Rasterelement in jeder Rasterzelle. Der Standardfluss ist, die Elemente zeilenweise zu arrangieren. Das Raster legt ein Element in jede Zelle der ersten Zeile. Wenn Sie zusätzliche Zeilen mit der Eigenschaft {{cssxref("grid-template-rows")}} erstellt haben, wird das Raster die Elemente in diesen Zeilen weiter platzieren. Wenn das Raster nicht genug Zeilen im [expliziten Raster](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größenanpassung von Zeilen im impliziten Raster

Der Standard für automatisch im impliziten Raster erstellte Zeilen ist, dass sie _automatisch skaliert_ werden. Das bedeutet, dass sie sich so anpassen, dass sie den hinzugefügten Inhalt ohne Überlauf enthalten.

Die Größe dieser Zeilen kann mit der Eigenschaft {{cssxref("grid-auto-rows")}} gesteuert werden. Um beispielsweise alle Zeilen auf eine Höhe von 100px festzulegen, können Sie `grid-auto-rows: 100px;` verwenden:

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

### Größenanpassung von Zeilen mit minmax()

Die {{cssxref("minmax")}}-Funktion ermöglicht es, Zeilen mit einer Mindestgröße zu erstellen, die je nach Bedarf erweitert werden können, wenn sie als Wert für `grid-auto-rows` gesetzt werden. Wenn zum Beispiel `grid-auto-rows: minmax(100px, auto);` festgelegt wird, wird jede Zeile mindestens 100px hoch sein und gleichzeitig so hoch werden können, wie es sein muss, um den Inhalt aufzunehmen:

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

### Größenanpassung von Zeilen mit einer Track-Liste

Es ist auch möglich, eine Track-Liste zu verwenden. Diese wird wiederholt. Die folgende Track-Liste erstellt einen anfänglichen impliziten Raster-Track von 100 Pixeln und einen zweiten von `200px`. Dies wird fortgesetzt, solange Inhalt zum impliziten Raster hinzugefügt wird.

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

### Automatische Platzierung nach Spalte

Sie können auch das Raster anweisen, Elemente spaltenweise automatisch zu platzieren, indem Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column` verwenden. In diesem Fall fügt das Raster Elemente in die Reihen ein, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Sobald eine Spalte gefüllt ist, wechselt das Raster zur nächsten expliziten Spalte oder erstellt eine neue Spalten-Spur im impliziten Raster. Wie bei impliziten Reihen-Spuren werden diese Spalten-Spuren automatisch skaliert. Die Größe impliziter Spalten-Spuren kann mit {{cssxref("grid-auto-columns")}} gesteuert werden. Dies funktioniert genauso wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Raster mit drei 200 Pixel hohen Reihen-Tracks. Wir deklarieren `grid-auto-flow: column;`, um die automatische Platzierung nach Spalte festzulegen. Mit `grid-auto-columns: 300px 100px;` alternieren die erstellten Spalten-Spuren zwischen einer Breite von `300px` und `100px`, bis genügend Spuren vorhanden sind, um alle Elemente aufzunehmen.

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

Ein Raster kann eine Mischung aus platzierten und automatisch platzierten Elementen enthalten. Einige der Elemente können eine spezifisch definierte Position im Raster haben, während andere automatisch platziert werden. Wenn die Dokumentreihenfolge die Reihenfolge widerspiegelt, in der die Elemente im Raster angeordnet sind, müssen Sie möglicherweise keine CSS-Regeln schreiben, um absolut alles zu positionieren. Die Spezifikation enthält einen ausführlichen Abschnitt zum [Algorithmus zur Platzierung von Rasterelementen](https://drafts.csswg.org/css-grid/#auto-placement-algo), aber für die meisten Fälle reichen ein paar einfache Regeln aus.

### Durch Reihenfolge modifizierte Dokumentreihenfolge

Das Raster platziert Elemente, die keine Rasterposition erhalten haben, in einer Reihenfolge, die in der Spezifikation als "durch Reihenfolge modifizierte Dokumentreihenfolge" beschrieben wird. Dies bedeutet, dass, wenn Sie die Eigenschaft `order` verwendet haben, die Elemente entsprechend dieser Reihenfolge und nicht ihrer DOM-Reihenfolge platziert werden. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie im Dokument-Quellcode erscheinen.

### Elemente mit Platzierungseigenschaften

Das Raster platziert zuerst alle Elemente, die eine Position haben. Im folgenden Beispiel habe ich 12 Rasterelemente. Element 2 und Element 5 wurden mittels Linienbasierter Platzierung auf dem Raster positioniert. Sie können sehen, wie diese Elemente gesetzt werden und die anderen Elemente sich dann in dem freien Raum automatisch platzieren. Die automatisch platzierten Elemente platzieren sich vor den platzierten Elementen in der DOM-Reihenfolge; sie beginnen nicht erst nach der Position eines vorangegangenen platzierten Elements.

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

### Umgang mit Elementen, die Spuren überspannen

Es ist möglich, Platzierungseigenschaften zu verwenden und gleichzeitig die Vorteile der automatischen Platzierung zu nutzen. Im nächsten Beispiel habe ich das Layout erweitert, indem ich bei den Elementen 1, 5 und 9 (4n+1) eingestellt habe, dass sie zwei Spuren sowohl für Reihen als auch für Spalten überspannen. Dies geschieht mithilfe der Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und der Angabe `span 2` für ihren Wert. Das bedeutet, dass die Startlinie des Elements durch die automatische Platzierung festgelegt wird und die Endlinie zwei Spuren überspannt.

Sie können sehen, wie dies Lücken im Raster hinterlässt. Wenn das Raster auf ein Element stößt, das nicht in eine Spur passt, bewegt es sich zur nächsten Zeile, bis es Platz findet, in den das Element passt.

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

### Auffüllen von Lücken

Bisher hat das Raster, außer bei speziell platzierten Elementen, immer nach vorne gearbeitet und die Elemente in DOM-Reihenfolge gehalten. Dies ist in der Regel gewünscht; zum Beispiel würden Sie beim Layout eines Formulars nicht wollen, dass Labels und Felder durcheinandergebracht werden, um Lücken zu füllen. Manchmal gestalten wir jedoch Dinge, die keine logische Reihenfolge haben, und möchten ein Layout ohne Lücken erstellen.

Um dies zu erreichen, fügen Sie der Container-Eigenschaft {{cssxref("grid-auto-flow")}} den Wert `dense` hinzu. Das ist dieselbe Eigenschaft, mit der Sie die Reihenfolge der Flussrichtung zu `column` ändern können. Wenn Sie also in Spalten arbeiten, würden Sie beide Werte hinzufügen: `grid-auto-flow: column dense`.

Das Raster wird nun die Lücken auffüllen. Während es das Raster durchläuft und Lücken hinterlässt, füllt es diese aus, wenn es ein Element findet, das in eine vorherige Lücke passt. Es wird dieses Element aufnehmen und aus der DOM-Reihenfolge herausnehmen, um es in die Lücke einzufügen. Wie bei jeder anderen Neuordnung im Raster ändert dies nicht die logische Reihenfolge. Zum Beispiel folgt die Tab-Reihenfolge weiterhin der Dokumentenreihenfolge. Die potenziellen Barrierefreiheitsprobleme des Rasterlayouts werden im [Leitfaden zu Rasterlayout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) behandelt, aber Sie sollten vorsichtig sein, wenn Sie diese Trennung zwischen visueller Reihenfolge und Anzeigereihenfolge herstellen.

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

### Anonyme Rasterelemente

In der Spezifikation werden anonyme Rasterelemente erwähnt. Diese entstehen, wenn Sie eine Textzeichenfolge in Ihrem Raster-Container haben, die nicht in ein anderes Element eingeschlossen ist. Im folgenden Beispiel haben wir drei Rasterelemente. Angenommen, Sie hätten dem Elternteil mit einer Klasse `grid` die Eigenschaft `display: grid` zugewiesen. Das erste Element ist ein anonymes Element, da es kein umschließendes Markup hat. Dieses Element wird immer gemäß der Regeln für automatische Platzierung behandelt. Die anderen zwei Rasterelemente sind in ein `div` eingeschlossen; diese könnten automatisch platziert oder durch eine Platzierungsmethode auf Ihr Raster gesetzt werden.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, weil es keinen Weg gibt, sie zu targetieren. Daher, wenn Sie aus irgendeinem Grund unformatierten Text in Ihrem Raster haben, seien Sie sich bewusst, dass er möglicherweise unerwartet irgendwo erscheint, da er gemäß den Regeln für automatische Platzierung gesetzt wird.

### Anwendungsfälle für die automatische Platzierung

Automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Das könnten Elemente ohne logische Reihenfolge wie eine Fotogalerie oder eine Produktliste sein. In diesem Fall könnten Sie den dichten Paketmodus verwenden, um Lücken in Ihrem Raster zu füllen. In meinem Beispiel einer Bildgalerie habe ich einige Panorama- und einige Portrait-Bilder. Ich habe die Panorama-Bilder – mit einer Klasse `landscape` – so eingestellt, dass sie zwei Spalten-Tracks überspannen. Danach nutze ich `grid-auto-flow: dense`, um ein dicht gepacktes Raster zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie der Inhalt sich neu ordnet und Lücken im Layout hinterlässt.

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
  border: 1px solid #ccc;
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

Automatische Platzierung kann Ihnen auch helfen, Benutzeroberflächenelemente zu layouten, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste in diesem nächsten Beispiel. Definitionslisten stellen eine interessante Herausforderung dar, da sie flach sind und nichts die Gruppen von `dt` und `dd`-Elementen umschließt. In meinem Beispiel lasse ich die automatische Platzierung die Elemente setzen. Gleichzeitig habe ich Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 beginnen lassen. Dies stellt sicher, dass Begriffe auf einer Seite und Definitionen auf der anderen stehen – egal, wie viele Begriffe oder Definitionen wir haben.

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

## Was können wir mit der automatischen Platzierung (noch) nicht machen?

Es gibt ein paar Dinge, die oft als Fragen auftauchen. Derzeit können wir Dinge wie "Ziele jede zweite Zelle des Rasters mit unseren Elementen" nicht tun. Ein verwandtes Problem könnte Ihnen in den Sinn gekommen sein, wenn Sie dem letzten Leitfaden über benannte Linien im Raster gefolgt sind. Es würde darum gehen, eine Regel zu definieren, die lautet: "Platziere Elemente automatisch an der nächsten Linie namens 'n', und das Raster würde andere Linien überspringen". Es gibt [ein Problem dazu im GitHub-Repository der CSSWG](https://github.com/w3c/csswg-drafts/issues/796), und Sie können gerne Ihre eigenen Anwendungsfälle hinzufügen.

Es könnte sein, dass Sie eigene Anwendungsfälle für automatische Platzierung oder andere Teile des Rasterlayouts entwickeln. Falls ja, melden Sie diese als Problem oder fügen Sie sie zu einem bestehenden Problem hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird helfen, zukünftige Versionen der Spezifikation zu verbessern.
