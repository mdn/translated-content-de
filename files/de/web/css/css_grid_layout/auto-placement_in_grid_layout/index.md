---
title: Automatisches Platzieren im Grid-Layout
short-title: Auto-placement
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

[CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) enthält Regeln, die bestimmen, was passiert, wenn Sie ein Grid erstellen und nicht explizit einige oder alle untergeordneten Elemente innerhalb des Grids platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung des Inhalts benötigen, ist diese "automatische Platzierung" die einfachste Möglichkeit, ein Grid für eine Gruppe von Elementen zu erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, werden sie sich automatisch auf dem Grid positionieren, wobei ein Grid-Element in jeder Grid-Zelle platziert wird.

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

## Standardregeln für automatische Platzierung

Wie Sie im obigen Beispiel sehen können, wenn Sie ein Grid ohne Platzierung von Elementen erstellen, legen sich die untergeordneten Elemente selbst fest, wobei ein Grid-Element in jeder Grid-Zelle in der Reihenfolge des Quellcodes platziert wird. Der Standardfluss besteht darin, Elemente nach Reihe anzuordnen. Das Grid legt ein Element in jede Zelle der ersten Reihe. Wenn Sie zusätzliche Reihen mit der Eigenschaft {{cssxref("grid-template-rows")}} erstellt haben, platziert das Grid weiterhin Elemente in diesen Reihen. Wenn das Grid nicht genug Reihen im [expliziten Grid](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Reihen erstellt.

### Größenanpassung von Reihen im impliziten Grid

Der Standard für automatisch erstellte Reihen im impliziten Grid besteht darin, dass sie _automatisch_ dimensioniert werden. Das bedeutet, dass sie sich so dimensionieren, dass sie den hinzugefügten Inhalt enthalten, ohne ein Überlaufen zu verursachen.

Die Größe dieser Reihen kann mit der Eigenschaft {{cssxref("grid-auto-rows")}} gesteuert werden. Um zum Beispiel alle Reihen 100px hoch zu machen, können Sie `grid-auto-rows: 100px;` verwenden:

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

### Größenanpassung von Reihen mit minmax()

Die Funktion {{cssxref("minmax")}} ermöglicht das Erstellen von Reihen, die eine Mindestgröße haben und bei Bedarf wachsen können, wenn sie als `grid-auto-rows`-Wert festgelegt sind. Indem Sie `grid-auto-rows: minmax(100px, auto);` setzen, legen Sie fest, dass jede Reihe mindestens 100px hoch ist und so hoch sein kann, wie notwendig:

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

### Größenanpassung von Reihen mit einer Track-Liste

Sie können auch eine Track-Liste übergeben. Diese wird wiederholt. Die folgende Track-Liste erstellt eine anfängliche implizite Reihen-Track von 100 Pixel und eine zweite von `200px`. Dies wird so lange fortgesetzt, wie Inhalt zum impliziten Grid hinzugefügt wird.

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

Sie können das Grid auch bitten, Elemente automatisch nach Spalte zu platzieren. Dazu verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit einem Wert von `column`. In diesem Fall fügt das Grid Elemente in die Reihen ein, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Wenn eine Spalte gefüllt ist, wechselt es zur nächsten expliziten Spalte oder erstellt eine neue Spalten-Track im impliziten Grid. Wie bei impliziten Reihen-Tracks werden diese Spalten-Tracks automatisch dimensioniert. Sie können die Größe von impliziten Spalten-Tracks mit {{cssxref("grid-auto-columns")}} steuern. Dies funktioniert auf die gleiche Weise wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Grid mit drei 200px hohen Reihen-Tracks. Wir deklarieren `grid-auto-flow: column;` um automatisch nach Spalte zu platzieren. Mit `grid-auto-columns: 300px 100px;` wird sichergestellt, dass die erstellten Spalten abwechselnd `300px` breit und `100px` breit sind, bis genügend Spalten-Tracks vorhanden sind, um alle Elemente aufzunehmen.

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

Ein Grid kann eine Mischung aus Elementplatzierungen enthalten. Einige der Elemente können eine speziell definierte Position im Grid haben, während andere automatisch platziert werden. Wenn Ihre Dokumentenreihenfolge die Reihenfolge widerspiegelt, in der die Elemente auf dem Grid sitzen, müssen Sie möglicherweise keine CSS-Regeln schreiben, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Grid-Elementplatzierungsalgorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo) detailliert beschreibt; jedoch müssen sich die meisten von uns nur an ein paar Regeln für unsere Elemente erinnern.

### Reihenfolge modifizierte Dokumentenreihenfolge

Grid platziert Elemente, denen keine Grid-Position zugewiesen wurde, in der Spezifikation als "order modified document order" beschrieben. Das bedeutet, dass wenn Sie die `order`-Eigenschaft verwendet haben, die Elemente nach dieser Reihenfolge und nicht nach ihrer DOM-Reihenfolge platziert werden. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie in der Dokumentquelle eingegeben sind.

### Elemente mit Platzierungseigenschaften

Das erste, was Grid tun wird, ist, alle Elemente zu platzieren, die eine Position haben. Im folgenden Beispiel habe ich 12 Grid-Elemente. Element 2 und Element 5 wurden mit linienbasierter Platzierung im Grid platziert. Sie können sehen, wie diese Elemente platziert sind und die anderen Elemente dann sich in den freien Räumen automatisch platzieren. Die automatisch platzierten Elemente platzieren sich vor den platzierten Elementen in der DOM-Reihenfolge, sie beginnen nicht nach der Position eines vor ihnen platzierten Elements.

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

Sie können Platzierungseigenschaften verwenden, während Sie weiterhin die automatische Platzierung in Anspruch nehmen. Im nächsten Beispiel habe ich dem Layout hinzugefügt, indem ich die Elemente 1, 5 und 9 (4n+1) sowohl für Reihen als auch für Spalten über zwei Tracks erstreckt habe. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert auf `span 2`. Das bedeutet, dass die Startlinie des Elements von der automatischen Platzierung festgelegt wird und die Endlinie zwei Tracks überspannt.

Sie können sehen, wie dies dann Lücken im Grid hinterlässt, da bei den automatisch platzierten Elementen das Grid, wenn es auf ein Element stößt, das nicht in einen Track passt, zur nächsten Reihe wechselt, bis es einen Platz findet, in den das Element passt.

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

### Die Lücken füllen

Bisher, außer bei Elementen, die wir spezifisch platziert haben, schreitet das Grid immer voran und hält die Elemente in der DOM-Reihenfolge. Dies ist im Allgemeinen, was Sie wollen; wenn Sie zum Beispiel ein Formular layouten, möchten Sie nicht, dass die Beschriftungen und Felder durcheinandergebracht werden, um eine Lücke zu füllen. Es gibt jedoch manchmal Layouts, die keine logische Reihenfolge haben, bei denen Sie ein Layout ohne Lücken erstellen möchten.

Um dies zu tun, fügen Sie der Container-Eigenschaft {{cssxref("grid-auto-flow")}} den Wert `dense` hinzu. Dies ist dieselbe Eigenschaft, die Sie verwenden, um die Flussreihenfolge auf `column` zu ändern, sodass Sie, wenn Sie in Spalten arbeiten, beide Werte `grid-auto-flow: column dense` hinzufügen würden.

Nachdem Sie dies getan haben, wird das Grid nun die Lücken rückwärts auffüllen. Während es sich durch das Grid bewegt, hinterlässt es wie zuvor Lücken, aber wenn es ein Element findet, das in eine vorherige Lücke passt, wird es dieses aufgreifen und aus der DOM-Reihenfolge herausnehmen, um es in die Lücke zu platzieren. Wie bei jeder anderen Neuanordnung im Grid ändert sich dadurch nicht die logische Reihenfolge. Die Tabulator-Reihenfolge folgt zum Beispiel weiterhin der Dokumentenreihenfolge. Wir werden die potenziellen Zugänglichkeitsprobleme des Grid-Layouts im [Grid-Layout und Zugänglichkeitsleitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) untersuchen, aber Sie sollten darauf achten, wenn Sie diese Trennung zwischen der visuellen Reihenfolge und der Anzeigereihenfolge erstellen.

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

In der Spezifikation gibt es einen Hinweis auf anonyme Grid-Elemente. Diese werden erstellt, wenn Sie eine Zeichenfolge von Text innerhalb Ihres Grid-Containers haben, die nicht in einem anderen Element eingeschlossen ist. Im Beispiel unten haben wir drei Grid-Elemente, vorausgesetzt, Sie haben das übergeordnete Element mit einer Klasse von `grid` auf `display: grid` gesetzt. Das erste ist ein anonymes Element, da es keine umschließende Markup hat, dieses Element wird immer gemäß den Regeln für die automatische Platzierung behandelt. Die anderen beiden sind Grid-Elemente, die in ein div eingeschlossen sind, sie könnten automatisch platziert werden, oder Sie könnten diese mit einer Positionierungsmethode auf Ihrem Grid platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keinen Weg gibt, sie zu zielen. Wenn Sie also aus irgendeinem Grund unumschlossenen Text in Ihrem Grid haben, seien Sie sich bewusst, dass er möglicherweise an einer unerwarteten Stelle erscheint, da er gemäß den automatischen Platzierungsregeln automatisch platziert wird.

### Anwendungsfälle für automatische Platzierung

Automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Dies könnten Elemente sein, die keine logische Reihenfolge haben, wie zum Beispiel eine Galerie von Fotos oder eine Produktliste. In diesem Fall könnten Sie den dichten Packmodus verwenden, um eventuelle Lücken in Ihrem Grid zu füllen. In meinem Bildgalerie-Beispiel habe ich einige Landschafts- und einige Porträtbilder. Ich habe Landschaftsbilder – mit einer Klasse von `landscape` – so eingestellt, dass sie zwei Spuren über zwei Spalten erstrecken. Dann verwende ich `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt neu anordnet und Lücken im Layout hinterlässt.

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

Automatische Platzierung kann Ihnen auch helfen, Schnittstellenelemente anzuordnen, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten stellen eine interessante Herausforderung beim Styling dar, da sie flach sind und es nichts gibt, das die Gruppen von `dt`- und `dd`-Elementen umschließt. In meinem Beispiel lasse ich die automatische Platzierung die Elemente platzieren, jedoch habe ich Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 starten, dies stellt sicher, dass Begriffe auf einer Seite und Definitionen auf der anderen stehen - egal wie viele von jedem wir haben.

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

Es gibt ein paar Dinge, die oft als Fragen auftauchen. Derzeit können wir keine Dinge wie das Ziel jedes anderen Gitters einrichten oder geltende Regeln definieren, die besagen „automatisch platzieren entlang der nächsten Linie namens „n“, und das Grid würde dann andere Linien überspringen. Auf der CSSWG GitHub-Repository gibt es [ein Anliegen dazu](https://github.com/w3c/csswg-drafts/issues/796), und es ist willkommen, eigene Anwendungsfälle hinzuzufügen.

Es kann sein, dass Sie Ihre eigenen Anwendungsfälle für automatische Platzierung oder jeden anderen Teil des Grid-Layouts entwickeln. Wenn Sie dies tun, heben Sie sie als Anliegen hervor oder fügen Sie ein bestehendes Anliegen hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird dazu beitragen, zukünftige Versionen der Spezifikation zu verbessern.
