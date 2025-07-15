---
title: Automatische Platzierung im Grid-Layout
short-title: Auto-placement
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) enthält Regeln, die steuern, was passiert, wenn Sie ein Grid erstellen und nicht explizit einige oder alle Kind-Elemente innerhalb des Grids platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung von Inhalten benötigen, ist diese "automatische Platzierung" der einfachste Weg, ein Grid für eine Reihe von Elementen zu erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich automatisch im Grid, wobei ein Grid-Item in jeder Grid-Zelle platziert wird.

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

Wie Sie im obigen Beispiel sehen können, legen sich die Kind-Elemente in einem Grid ohne Platzierung von Elementen an und platzieren ein Grid-Item in jeder Grid-Zelle in der Reihenfolge des Quellcodes. Der Standardfluss ordnet Elemente nach Zeilen an. Grid platziert ein Element in jeder Zelle der ersten Zeile. Wenn Sie zusätzliche Zeilen mit der {{cssxref("grid-template-rows")}}-Eigenschaft erstellt haben, wird Grid weiterhin Elemente in diesen Zeilen platzieren. Wenn das Grid nicht genügend Zeilen im [expliziten Grid](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größenanpassung von Zeilen im impliziten Grid

Der Standard für automatisch erstellte Zeilen im impliziten Grid ist, dass sie _automatisch_ skaliert werden. Das bedeutet, dass sie sich selbst so anpassen, um den hinzugefügten Inhalt aufzunehmen, ohne einen Überlauf zu verursachen.

Die Größe dieser Zeilen kann mithilfe der Eigenschaft {{cssxref("grid-auto-rows")}} gesteuert werden. Um beispielsweise alle Zeilen auf 100px Höhe einzustellen, können Sie `grid-auto-rows: 100px;` verwenden:

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

Die {{cssxref("minmax")}}-Funktion ermöglicht das Erstellen von Zeilen, die eine Mindestgröße haben und bei Bedarf wachsen können, wenn sie als `grid-auto-rows`-Wert eingestellt sind. Indem wir `grid-auto-rows: minmax(100px, auto);` setzen, stellen wir sicher, dass jede Zeile mindestens 100px hoch ist, während sie gleichzeitig so hoch wie nötig sein kann:

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

### Größenanpassung von Zeilen mit einer Auflistung von Tracks

Sie können auch eine Auflistung von Tracks übergeben. Diese wird wiederholt. Die folgende Track-Liste erstellt eine anfängliche implizite Zeilen-Track von 100 Pixeln und eine zweite von `200px`. Dies wird so lange fortgesetzt, wie Inhalte zum impliziten Grid hinzugefügt werden.

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

Sie können das Grid auch bitten, Elemente automatisch nach Spalte zu platzieren. Verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall wird das Grid Elemente in den zuvor definierten Zeilen mithilfe von {{cssxref("grid-template-rows")}} hinzufügen. Wenn eine Spalte gefüllt ist, wechselt es zur nächsten expliziten Spalte oder erstellt ein neues Spuren-Track im impliziten Grid. Wie bei impliziten Zeilen-Tracks werden auch diese Spalten-Tracks automatisch skaliert. Sie können die Größe der impliziten Spalten-Tracks mit {{cssxref("grid-auto-columns")}} steuern. Dies funktioniert auf die gleiche Weise wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Grid mit drei 200px hohen Zeilen-Tracks. Wir deklarieren `grid-auto-flow: column;`, um automatisch nach Spalte zu platzieren. Mit `grid-auto-columns: 300px 100px;` wechseln die erstellten Spalten abwechselnd zwischen `300px` Breite und `100px` Breite, bis genügend Spalten-Tracks vorhanden sind, um alle Elemente aufzunehmen.

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

## Die Reihenfolge der automatisch platzierten Elemente

Ein Grid kann eine Mischung aus Elementplatzierungen enthalten. Einige der Elemente können eine spezifisch definierte Position im Grid haben, während andere automatisch platziert werden. Wenn Sie eine Dokumentreihenfolge haben, die die Reihenfolge widerspiegelt, in der die Elemente im Grid sitzen, müssen Sie möglicherweise keine CSS-Regeln schreiben, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Algorithmus zur Platzierung von Grid-Elementen](https://drafts.csswg.org/css-grid/#auto-placement-algo) detailliert beschreibt; jedoch müssen die meisten von uns nur ein paar Regeln für unsere Elemente beachten.

### Durch die Reihenfolge modifizierte Dokumentreihenfolge

Grid platziert Elemente, die keine Grid-Position erhalten haben, in der Spezifikationsbeschreibung "durch die Reihenfolge modifizierte Dokumentenreihenfolge". Das bedeutet, dass wenn Sie die `order`-Eigenschaft verwendet haben, die Elemente nach dieser Reihenfolge und nicht nach ihrer DOM-Reihenfolge platziert werden. Ansonsten bleiben sie standardmäßig in der Reihenfolge, in der sie sich im Dokumentquellcode befinden.

### Elemente mit Platzierungseigenschaften

Das erste, was das Grid tut, ist, alle Elemente zu platzieren, die eine Position haben. Im folgenden Beispiel habe ich 12 Grid-Elemente. Element 2 und Element 5 wurden mit linienbasierter Platzierung im Grid platziert. Sie können sehen, wie diese Elemente platziert sind, und die anderen Elemente sich dann automatisch in die freien Räume einfügen. Die automatisch platzierten Elemente platzieren sich in DOM-Reihenfolge vor den platzierten Elementen; sie beginnen nicht nach der Position eines platzierten Elements, das vor ihnen kommt.

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

### Umgang mit Elementen, die Tracks überspannen

Sie können Platzierungseigenschaften verwenden und dennoch die Vorteile der automatischen Platzierung nutzen. Im nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie zwei Tracks sowohl für Zeilen als auch für Spalten überspannen. Ich mache dies mit den {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}}-Eigenschaften und setze den Wert auf `span 2`. Das bedeutet, dass die Startlinie des Elements durch automatische Platzierung festgelegt wird und die Endlinie über zwei Tracks spannt.

Sie können sehen, wie dies dann Lücken im Grid hinterlässt, da für die automatisch platzierten Elemente, wenn das Grid auf ein Element stößt, das nicht in einen Track passt, es zur nächsten Zeile wechselt, bis es einen Platz findet, in den das Element passt.

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

### Auffüllen der Lücken

Bisher geht das Grid, abgesehen von den Elementen, die wir spezifisch platziert haben, immer vorwärts und behält die Elemente in DOM-Reihenfolge. Dies ist im Allgemeinen das, was Sie möchten, wenn Sie beispielsweise ein Formular layouten; Sie möchten nicht, dass die Beschriftungen und Felder durcheinander geraten, um eine Lücke zu füllen. Manchmal jedoch layouten wir Dinge, die keine logische Reihenfolge haben, und möchten ein Layout erstellen, das keine Lücken aufweist.

Um dies zu tun, fügen Sie der Container-Eigenschaft {{cssxref("grid-auto-flow")}} den Wert `dense` hinzu. Dies ist die gleiche Eigenschaft, die Sie verwenden, um die Flussrichtung in `column` zu ändern, sodass Sie, wenn Sie in Spalten arbeiten, beide Werte `grid-auto-flow: column dense` hinzufügen würden.

Nachdem Sie dies getan haben, wird das Grid nun die Lücken auffüllen, während es das Grid durchgeht. Es hinterlässt zwar Lücken wie zuvor, aber wenn es ein Element findet, das in eine vorherige Lücke passt, wird es aufgenommen und aus der DOM-Reihenfolge entfernt, um es in die Lücke zu platzieren. Wie bei jeder anderen Umordnung im Grid ändert dies nicht die logische Reihenfolge. Zum Beispiel bleibt die Tabulatorreihenfolge in der Dokumentenreihenfolge. Wir werden potenzielle Zugänglichkeitsprobleme des Grid-Layouts im [Leitfaden zu Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) betrachten, aber Sie sollten darauf achten, wenn Sie diese Diskrepanz zwischen visueller Ordnung und Anzeigereihenfolge herstellen.

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

Die Spezifikation erwähnt anonyme Grid-Elemente. Diese werden erstellt, wenn Sie eine Textzeichenkette innerhalb Ihres Grid-Containers haben, die nicht in ein anderes Element eingebettet ist. Im folgenden Beispiel haben wir drei Grid-Elemente, falls Sie das übergeordnete Element mit einer Klasse `grid` auf `display: grid` gesetzt haben. Das erste ist ein anonymes Element, da es keinen umschließenden Markup hat. Dieses Element wird immer gemäß den Regeln für automatische Platzierung behandelt. Die anderen beiden sind Grid-Elemente, die in einem div umschlossen sind, sie könnten automatisch platziert werden oder Sie könnten diese mit einer Positionierungsmethode auf Ihrem Grid platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie zuzuordnen. Wenn Sie also aus irgendeinem Grund unumschlossenen Text in Ihrem Grid haben, sollten Sie sich bewusst sein, dass es möglicherweise an einer unerwarteten Stelle erscheint, da es gemäß den Regeln für automatische Platzierung platziert wird.

### Anwendungsfälle für automatische Platzierung

Die automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Das könnten Elemente sein, die keine logische Reihenfolge haben, wie eine Fotogalerie oder eine Produktliste. In diesem Fall könnten Sie den dichten Verpackungsmodus verwenden, um Lücken in Ihrem Grid zu füllen. In meinem Bildergalerie-Beispiel habe ich einige Landschafts- und einige Porträtbilder. Ich habe Landschaftsbilder – mit einer Klasse `landscape` – so eingestellt, dass sie zwei Spuren-Tracks überspannen. Ich verwende dann `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt umorganisiert und Lücken im Layout hinterlässt.

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

Die automatische Platzierung kann Ihnen auch dabei helfen, Schnittstellenelemente anzuordnen, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten sind eine interessante Herausforderung für das Styling, da sie flach sind und es nichts gibt, das die Gruppen von `dt`- und `dd`-Elementen umhüllt. In meinem Beispiel erlaube ich der automatischen Platzierung, die Elemente zu platzieren. Ich habe jedoch Klassen, die ein `dt` in Spalte 1 beginnen lassen und ein `dd` in Spalte 2, dies stellt sicher, dass Begriffe auf einer Seite und Definitionen auf der anderen Seite stehen, egal wie viele wir von jedem haben.

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

## Was können wir mit automatischer Platzierung (noch) nicht tun?

Es gibt ein paar Dinge, die oft als Fragen auftauchen. Derzeit können wir nicht Dinge tun wie: jedes zweite Grid-Zelle mit unseren Elementen ansprechen. Ein verwandtes Problem könnte Ihnen bereits in den Sinn gekommen sein, wenn Sie den letzten Leitfaden über benannte Linien im Grid verfolgt haben. Es wäre eine Regel zu definieren, die sagt: "Auto-Platzierung gegen die nächste Linie mit dem Namen 'n'", und das Grid würde dann andere Linien überspringen. Es gibt [ein Problem, das dazu aufgeworfen wurde](https://github.com/w3c/csswg-drafts/issues/796) im CSSWG GitHub-Repository, und es wäre willkommen, wenn Sie Ihre eigenen Anwendungsfälle dazu hinzufügen.

Es kann sein, dass Sie Ihre eigenen Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts entwickeln. Wenn Sie dies tun, erheben Sie diese als Probleme oder fügen Sie einem bestehenden Problem hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird helfen, zukünftige Versionen der Spezifikation zu verbessern.
