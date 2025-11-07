---
title: Automatische Platzierung im Grid-Layout
short-title: Verwendung der automatischen Platzierung
slug: Web/CSS/Guides/Grid_layout/Auto-placement
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) enthält Regeln, die steuern, was passiert, wenn Sie ein Grid erstellen und einige oder alle Kindelemente nicht ausdrücklich innerhalb des Grids platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung des Inhalts benötigen, ist diese "automatische Platzierung" der einfachste Weg, ein Grid für eine Gruppe von Elementen zu erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich automatisch im Grid und platzieren ein Gitterelement in jeder Gitterzelle.

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

Wie im obigen Beispiel gezeigt wird, legen sich die Kindelemente bei einem Grid ohne platzierte Elemente selbstständig an, wobei jeweils ein Gitterelement in jeder Gitterzelle in Quellcode-Reihenfolge angeordnet wird. Der Standardfluss ist, die Elemente nach Zeilen zu arrangieren. Das Grid legt ein Element in jede Zelle der ersten Zeile. Wenn Sie zusätzliche Zeilen mit der Eigenschaft {{cssxref("grid-template-rows")}} erstellt haben, wird das Grid die Elemente in diesen Zeilen weiter platzieren. Wenn das Grid nicht genug Zeilen im [expliziten Grid](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größenanpassung von Zeilen im impliziten Grid

Die Standardeinstellung für automatisch erstellte Zeilen im impliziten Grid ist, dass sie _automatisch_ dimensioniert werden. Das bedeutet, dass sie sich so dimensionieren, dass der hinzugefügte Inhalt enthalten ist, ohne dass ein Überlauf entsteht.

Die Größe dieser Zeilen kann mit der Eigenschaft {{cssxref("grid-auto-rows")}} gesteuert werden. Um beispielsweise alle Zeilen 100px hoch zu machen, können Sie `grid-auto-rows: 100px;` verwenden:

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

Die Funktion {{cssxref("minmax")}} ermöglicht die Erstellung von Zeilen mit einer minimalen Größe, die wachsen können, um den Inhalt bei Bedarf anzupassen, wenn sie als Wert für `grid-auto-rows` festgelegt wird. Durch die Einstellung `grid-auto-rows: minmax(100px, auto);` setzen wir jede Zeile auf mindestens 100px Höhe, während wir jeder Zeile erlauben, nach Bedarf so hoch zu sein:

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

### Größenanpassung von Zeilen mit einer Track-Auflistung

Sie können auch eine Track-Auflistung übergeben. Diese wird sich wiederholen. Die folgende Track-Auflistung erstellt eine erste implizite Zeilenspur von 100 Pixeln und eine zweite von `200px`. Dies wird so lange fortgesetzt, wie Inhalt zum impliziten Grid hinzugefügt wird.

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

Sie können auch das Grid anweisen, Elemente automatisch nach Spalte zu platzieren. Verwenden Sie dazu die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall fügt das Grid Elemente in den von Ihnen definierten Zeilen mit {{cssxref("grid-template-rows")}} hinzu. Wenn eine Spalte voll ist, geht es zur nächsten expliziten Spalte über oder erstellt eine neue Spaltenspur im impliziten Grid. Wie bei impliziten Zeilenspuren werden diese Spaltenspuren automatisch dimensioniert. Sie können die Größe der impliziten Spaltenspuren mit {{cssxref("grid-auto-columns")}} steuern. Dies funktioniert auf die gleiche Weise wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Grid mit drei 200px hohen Zeilenspuren. Wir deklarieren `grid-auto-flow: column;`, um nach Spalte automatisch zu platzieren. Mit `grid-auto-columns: 300px 100px;` wechseln die erstellten Spalten zwischen `300px` Breite und `100px` Breite, bis genug Spaltenspuren vorhanden sind, um alle Elemente aufzunehmen.

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

Ein Grid kann eine Mischung aus Elementplatzierungen enthalten. Einige der Elemente können eine spezifisch definierte Position im Grid haben, während andere automatisch platziert werden. Wenn Ihre Dokumentenreihenfolge die Reihenfolge widerspiegelt, in der die Elemente im Grid sitzen, müssen Sie möglicherweise nicht alle CSS-Regeln schreiben, um alles absolut zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Grid-Elementplatzierungsalgorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo) beschreibt; jedoch müssen sich die meisten von uns nur ein paar Regeln für unsere Elemente merken.

### Ordnungsmodifizierte Dokumentenreihenfolge

Grid platziert Elemente, denen keine Grid-Position zugeordnet wurde, in dem, was in der Spezifikation als "ordnungsmodifizierte Dokumentenreihenfolge" beschrieben wird. Das bedeutet, dass wenn Sie die Eigenschaft `order` verwendet haben, die Elemente in dieser Reihenfolge platziert werden, nicht in der Reihenfolge ihres DOM. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie in der Dokumentenquelle eingefügt werden.

### Elemente mit Platzierungseigenschaften

Das erste, was das Grid tun wird, ist alle Elemente zu platzieren, die eine Position haben. Im untenstehenden Beispiel habe ich 12 Grid-Elemente. Element 2 und Element 5 wurden mit linearen Platzierungen im Grid platziert. Sie können sehen, wie diese Elemente platziert werden und die anderen Elemente dann automatisch in den Zwischenräumen platziert werden. Die automatisch platzierten Elemente platzieren sich vor den platzierten Elementen in DOM-Reihenfolge; sie beginnen nicht nach der Position eines platzierten Elements, das vor ihnen liegt.

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

Sie können Platzierungseigenschaften nutzen und dennoch von der automatischen Platzierung profitieren. Im nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie zwei Tracks sowohl für Zeilen als auch für Spalten überspannen. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert darauf auf `span 2`. Was das bedeutet, ist, dass die Startlinie des Elements durch die automatische Platzierung festgelegt wird, und die Endlinie wird zwei Tracks überspannen.

Sie können sehen, wie dies dann Lücken im Grid hinterlässt, da bei den automatisch platzierten Elementen, wenn das Grid auf ein Element trifft, das nicht in eine Spur passt, es zur nächsten Zeile geht, bis es einen Platz findet, in den das Element passt.

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

Bisher bewegt sich das Grid immer weiter nach vorne und hält die Elemente in DOM-Reihenfolge, abgesehen von den speziell platzierten Elementen. Dies ist im Allgemeinen das, was Sie wollen, wenn Sie beispielsweise ein Formular layouten, möchten Sie nicht, dass die Etiketten und Felder durcheinander geraten, um eine Lücke zu füllen. Manchmal jedoch layouten wir Dinge, die keine logische Reihenfolge haben und wir möchten ein Layout erstellen, das keine Lücken hat.

Um dies zu erreichen, fügen Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `dense` dem Container hinzu. Dies ist dieselbe Eigenschaft, die Sie verwenden, um die Flussreihenfolge zu `column` zu ändern, also würden Sie, wenn Sie in Spalten arbeiten, beide Werte `grid-auto-flow: column dense` hinzufügen.

Nachdem Sie dies getan haben, wird das Grid nun die Lücken auffüllen. Während es durch das Grid geht, hinterlässt es Lücken wie zuvor, aber wenn es ein Element findet, das in eine vorherige Lücke passt, nimmt es es auf und platziert es in der Lücke, obwohl es aus der DOM-Reihenfolge genommen wird. Wie bei jeder anderen Neuordnung im Grid ändert dies nicht die logische Reihenfolge. Die Tab-Reihenfolge beispielsweise folgt weiterhin der Dokumentenreihenfolge. Wir werden die möglichen Barrierefreiheitsprobleme des Grid-Layouts im [Leitfaden für Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility) betrachten, aber Sie sollten vorsichtig sein, wenn Sie diese Trennung zwischen der visuellen Reihenfolge und der Anzeigereihenfolge erstellen.

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

Es gibt eine Erwähnung in der Spezifikation über anonyme Grid-Elemente. Diese werden erstellt, wenn Sie eine Zeichenkette innerhalb Ihres Grid-Containers haben, die nicht in ein anderes Element eingeschlossen ist. Im folgenden Beispiel haben wir drei Grid-Elemente, wobei angenommen wird, dass der Elternteil mit einer Klasse von `grid` auf `display: grid` gesetzt wurde. Das erste ist ein anonymes Element, da es keine umschließende Markierung hat. Dieses Element wird immer gemäß den Regeln für die automatische Platzierung behandelt. Die anderen beiden sind Grid-Elemente, die in einem Div eingeschlossen sind; sie könnten automatisch platziert werden, oder Sie könnten diese mit einer Platzierungsmethode auf Ihrem Grid platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie zu zielen. Wenn Sie also aus irgendeinem Grund unformatierten Text in Ihrem Grid haben, sollten Sie sich bewusst sein, dass es möglicherweise unerwartet auftaucht, da es gemäß den Regeln für die automatische Platzierung automatisch platziert wird.

### Anwendungsfälle für die automatische Platzierung

Automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Das könnten Elemente ohne logische Reihenfolge sein, wie eine Fotosammlung oder eine Produktliste. In diesem Fall könnten Sie den dichten Verpackungsmodus wählen, um alle Löcher in Ihrem Grid zu füllen. In meinem Bildgalerie-Beispiel habe ich einige Landschafts- und einige Porträtbilder. Ich habe die Landschaftsbilder mit einer Klasse von `landscape` so eingestellt, dass sie zwei Spalten-Tracks überspannen. Dann verwende ich `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie der Inhalt umfließt, um Lücken im Layout zu hinterlassen.

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

Automatische Platzierung kann Ihnen auch helfen, Oberflächenelemente zu layouten, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten stellen eine interessante Herausforderung beim Stylen dar, da sie flach sind und nichts die Gruppen von `dt` und `dd` Elementen umschließt. In meinem Beispiel erlaube ich es der automatischen Platzierung, die Elemente zu platzieren, jedoch habe ich Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 beginnen lassen, dies stellt sicher, dass die Begriffe auf einer Seite und die Definitionen auf der anderen sind - unabhängig davon, wie viele es von jedem gibt.

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

## Was können wir mit der automatischen Platzierung (noch) nicht tun?

Es gibt ein paar Dinge, die oft als Fragen aufkommen. Derzeit können wir nicht jedes andere Gitterfeld mit unseren Elementen anvisieren. Ein verwandtes Problem ist möglicherweise bereits in den Sinn gekommen, wenn Sie dem letzten Leitfaden über benannte Linien im Grid gefolgt sind. Es wäre, eine Regel zu definieren, die besagt: "Platziere Elemente automatisch gegen die nächste Linie namens 'n'", und das Grid würde dann andere Linien überspringen. Diesbezüglich gibt es [ein aufgeworfenes Problem](https://github.com/w3c/csswg-drafts/issues/796) auf dem CSSWG GitHub-Repository, und Sie sind herzlich eingeladen, Ihre eigenen Anwendungsfälle dazu hinzuzufügen.

Es könnte sein, dass Sie auf Ihre eigenen Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts stoßen. Wenn dies der Fall ist, erheben Sie diese als Probleme oder fügen Sie ein bestehendes Problem hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird dazu beitragen, zukünftige Versionen der Spezifikation zu verbessern.
