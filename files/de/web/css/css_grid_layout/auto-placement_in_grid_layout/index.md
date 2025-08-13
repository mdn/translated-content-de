---
title: Automatische Platzierung im Grid-Layout
short-title: Auto-placement
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

[CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) enthält Regeln, die steuern, was passiert, wenn Sie ein Raster erstellen und einige oder alle Kind-Elemente nicht explizit im Raster platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung von Inhalten benötigen, ist diese "automatische Platzierung" der einfachste Weg, ein Raster für eine Reihe von Elementen zu erstellen.

## Standardmäßige Platzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich automatisch im Raster und platzieren ein Rasterelement in jeder Rasterzelle.

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

Wie Sie im obigen Beispiel sehen können, legen sich die Kind-Elemente an, wenn Sie ein Raster ohne Platzierung von Elementen erstellen, wobei ein Rasterelement in jeder Rasterzelle in der Quellcode-Reihenfolge angeordnet wird. Der Standardfluss ist, die Elemente zeilenweise anzuordnen. Grid legt ein Element in jede Zelle der ersten Zeile. Wenn Sie zusätzliche Zeilen mit der Eigenschaft {{cssxref("grid-template-rows")}} erstellt haben, wird Grid weiterhin Elemente in diesen Zeilen platzieren. Wenn das Raster nicht genügend Zeilen im [expliziten Raster](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Zeilen im impliziten Raster dimensionieren

Der Standard für automatisch erstellte Zeilen im impliziten Raster ist, dass sie _automatisch dimensioniert_ sind. Das bedeutet, dass sie sich so dimensionieren, dass sie den hinzugefügten Inhalt enthalten, ohne Überlauf zu verursachen.

Die Größe dieser Zeilen kann mit der Eigenschaft {{cssxref("grid-auto-rows")}} gesteuert werden. Zum Beispiel, um alle Zeilen 100px hoch zu machen, können Sie `grid-auto-rows: 100px;` verwenden:

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

### Zeilen mit minmax() dimensionieren

Die Funktion {{cssxref("minmax")}} ermöglicht es, Zeilen zu erstellen, die eine Mindestgröße haben und bei Bedarf wachsen können, wenn sie als Wert für `grid-auto-rows` gesetzt werden. Durch das Setzen von `grid-auto-rows: minmax(100px, auto);` stellen wir sicher, dass jede Zeile mindestens 100px hoch ist, während jede Zeile so hoch sein kann, wie es nötig ist:

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

### Zeilen mit einer Spurauflistung dimensionieren

Sie können auch eine Spurauflistung übergeben. Diese wird sich wiederholen. Die folgende Spurauflistung erstellt eine anfängliche implizite Zeilenspur mit 100 Pixeln und eine zweite mit `200px`. Dies wird fortgesetzt, solange Inhalt zum impliziten Raster hinzugefügt wird.

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

### Auto-Platzierung nach Spalte

Sie können Grid auch anweisen, Elemente automatisch nach Spalten zu platzieren. Verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit einem Wert von `column`. In diesem Fall wird Grid Elemente in Zeilen hinzufügen, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Wenn eine Spalte gefüllt ist, wird zur nächsten expliziten Spalte gewechselt oder eine neue Spaltenspur im impliziten Raster erstellt. Genauso wie bei impliziten Zeilenspuren werden diese Spaltenspuren automatisch dimensioniert. Sie können die Größe der impliziten Spaltenspuren mit {{cssxref("grid-auto-columns")}} kontrollieren. Dies funktioniert auf die gleiche Weise wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Raster mit drei 200px hohen Zeilenspuren. Wir deklarieren `grid-auto-flow: column;` zur automatischen Platzierung nach Spalte. Mit `grid-auto-columns: 300px 100px;` werden die erstellten Spalten abwechselnd `300px` breit und `100px` breit sein, bis genügend Spaltenspuren vorhanden sind, um alle Elemente zu halten.

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

## Die Reihenfolge von automatisch platzierten Elementen

Ein Raster kann eine Mischung aus Elementplatzierungen enthalten. Einige der Elemente können eine spezifisch definierte Position im Raster haben, während andere automatisch platziert werden. Wenn Sie eine Dokumentenreihenfolge haben, die die Reihenfolge widerspiegelt, in der die Elemente auf dem Raster sitzen, müssen Sie möglicherweise keine CSS-Regeln schreiben, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Algorithmus zur Platzierung von Rasterelementen](https://drafts.csswg.org/css-grid/#auto-placement-algo) detailliert beschreibt; jedoch müssen die meisten von uns sich nur einige Regeln für unsere Elemente merken.

### Ordnen modifizierte Dokumentenreihenfolge

Grid platziert Elemente, denen keine Rasterposition zugewiesen wurde, in dem, was in der Spezifikation als "ordnen modifizierte Dokumentenreihenfolge" beschrieben wird. Das bedeutet, wenn Sie die `order`-Eigenschaft verwendet haben, werden die Elemente nach dieser Reihenfolge platziert, nicht nach ihrer DOM-Reihenfolge. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie in der Dokumentquelle eingegeben wurden.

### Elemente mit Platzierungseigenschaften

Das erste, was Grid tun wird, ist, alle Elemente zu platzieren, die eine Position haben. Im folgenden Beispiel habe ich 12 Rasterelemente. Element 2 und Element 5 wurden mit linienbasierter Platzierung auf dem Raster platziert. Sie können sehen, wie diese Elemente platziert werden und die anderen Elemente dann automatisch in den freien Räumen platziert werden. Die automatisch platzierten Elemente platzieren sich vor den platzierten Elementen in der DOM-Reihenfolge, sie beginnen nicht nach der Position eines zuvor platzierten Elements.

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

### Umgang mit Elementen, die Spuren überlappen

Sie können Platzierungseigenschaften verwenden und dennoch von der automatischen Platzierung profitieren. In diesem nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie sowohl für Zeilen als auch für Spalten zwei Spuren überlappen. Ich mache das mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert dieser auf `span 2`. Das bedeutet, dass die Startlinie des Elements durch die automatische Platzierung festgelegt wird und die Endlinie zwei Spuren überspannt.

Sie können sehen, wie dies dann Lücken im Raster hinterlässt, da bei den automatisch platzierten Elementen, wenn Grid auf ein Element stößt, das nicht in eine Spur passt, es zur nächsten Zeile wechselt, bis es einen Platz findet, in den das Element passt.

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

Bisher, außer bei den speziell platzierten Elementen, bewegt sich Grid immer vorwärts und hält die Elemente in der DOM-Reihenfolge. Dies ist im Allgemeinen das, was Sie wollen, denn wenn Sie beispielsweise ein Formular layouten, möchten Sie nicht, dass sich die Etiketten und Felder durcheinanderbringen, um eine Lücke zu füllen. Manchmal jedoch layouten wir Dinge, die keine logische Reihenfolge haben, und möchten ein Layout erstellen, das keine Lücken enthält.

Um dies zu tun, fügen Sie der Eigenschaft {{cssxref("grid-auto-flow")}} den Wert `dense` hinzu. Dies ist die gleiche Eigenschaft, die Sie verwenden, um die Flussreihenfolge auf `column` zu ändern, so dass, wenn Sie mit Spalten arbeiten, Sie beide Werte `grid-auto-flow: column dense` hinzufügen würden.

Nachdem dies geschehen ist, wird Grid nun die Lücken zurückfüllen, da es sich durch das Raster bewegt, Lücken wie zuvor hinterlässt, aber dann, wenn es ein Element findet, das in eine frühere Lücke passt, wird es aufgenommen und aus der DOM-Reihenfolge genommen, um es in die Lücke zu platzieren. Wie bei jeder anderen Neuordnung in Grid ändert dies nicht die logische Reihenfolge. Die Tab-Reihenfolge folgt beispielsweise weiterhin der Dokumentenreihenfolge. Wir werden uns die potenziellen Zugänglichkeitsprobleme des Grid-Layouts im [Leitfaden Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) ansehen, aber Sie sollten vorsichtig sein, wenn Sie diese Trennung zwischen der visuellen und der Anzeigereihenfolge erstellen.

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

In der Spezifikation wird von anonymen Rasterelementen gesprochen. Diese werden erstellt, wenn Sie eine Zeichenkette von Text in Ihrem Rastercontainer haben, die nicht in einem anderen Element eingebettet ist. Im folgenden Beispiel haben wir drei Rasterelemente, vorausgesetzt, Sie hätten das übergeordnete Element mit einer Klasse von `grid` auf `display: grid` gesetzt. Das erste ist ein anonymes Element, da es keine umgebende Auszeichnung hat; dieses Element wird immer nach den Regeln der automatischen Platzierung behandelt. Die anderen beiden sind Rasterelemente, die in einem div eingeschlossen sind; sie könnten automatisch platziert oder mit einer Positionierungsmethode auf Ihrem Raster platziert werden.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie zu adressieren. Wenn Sie aus irgendeinem Grund ungewickelten Text in Ihrem Raster haben, seien Sie sich dessen bewusst, dass er möglicherweise an einer unerwarteten Stelle angezeigt wird, da er gemäß den Regeln der automatischen Platzierung automatisch platziert wird.

### Anwendungsfälle für die automatische Platzierung

Die automatische Platzierung ist immer dann nützlich, wenn Sie eine Sammlung von Elementen haben. Das könnten Elemente sein, die keine logische Reihenfolge haben, wie eine Galerie von Fotos oder eine Produktliste. In diesem Fall könnten Sie sich dafür entscheiden, den dichten Packmodus zu verwenden, um alle Lücken in Ihrem Raster zu füllen. In meinem Bildgalerie-Beispiel habe ich einige Landschafts- und einige Porträtbilder. Ich habe Landschaftsbilder – mit einer Klasse von `landscape` so eingestellt, dass sie zwei Spaltenspuren überspannen. Dann verwende ich `grid-auto-flow: dense`, um ein dicht gepacktes Raster zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt neu anordnet, um Lücken im Layout zu lassen.

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

Die automatische Platzierung kann Ihnen auch helfen, Schnittstellenelemente, die eine logische Ordnung haben, anzuordnen. Ein Beispiel ist die Definitionsliste im folgenden Beispiel. Definitionslisten sind eine interessante Herausforderung, da sie flach sind, es gibt nichts, das die Gruppen von `dt` und `dd`-Elementen umschließt. In meinem Beispiel lasse ich die automatische Platzierung die Elemente platzieren, habe jedoch Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 starten, dies stellt sicher, dass Begriffe auf der einen Seite und Definitionen auf der anderen erscheinen - unabhängig davon, wie viele von jedem wir haben.

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

## Was können wir mit automatischer Platzierung (noch) nicht machen?

Es gibt ein paar Dinge, die oft als Fragen aufkommen. Derzeit können wir nicht Dinge wie jedes zweite Rasterfeld mit unseren Elementen anvisieren. Ein damit verwandtes Problem könnte Ihnen bereits in den Sinn gekommen sein, wenn Sie den letzten Leitfaden über benannte Linien im Raster gefolgt sind. Es wäre, eine Regel zu definieren, die besagt "Platziere Elemente automatisch gegen die nächste Linie namens 'n'", und das Raster würde dann andere Linien überspringen. Es gibt [ein aufgeworfenes Thema dazu](https://github.com/w3c/csswg-drafts/issues/796) im CSSWG GitHub-Repository, und Sie sind willkommen, Ihre eigenen Anwendungsfälle dazu zu ergänzen.

Es könnte sein, dass Sie Ihre eigenen Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts entwickeln. Sollten Sie dies tun, heben Sie sie als Themen hervor oder fügen Sie ein bestehendes Thema hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird helfen, zukünftige Versionen der Spezifikation zu verbessern.
