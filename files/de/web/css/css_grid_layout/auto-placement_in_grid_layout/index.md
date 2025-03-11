---
title: Auto-Platzierung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) enthält Regeln, die steuern, was passiert, wenn Sie ein Grid erstellen und einige oder alle Kind-Elemente nicht explizit im Grid platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung von Inhalten benötigen, ist diese "Auto-Platzierung" die einfachste Methode, ein Grid für eine Reihe von Elementen zu erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich automatisch im Grid, wobei ein Gitterelement in jeder Gitterzelle platziert wird.

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

## Standardregeln für die Auto-Platzierung

Wie Sie im obigen Beispiel sehen können, legen sich die Kindelemente ohne Platzierung im Grid entsprechend dem Quellcode auf einer Zelle pro Element ab. Der Standardfluss ist, Elemente nach Reihen anzuordnen. Grid platziert ein Element in jede Zelle der ersten Reihe. Wenn Sie zusätzliche Reihen mit der {{cssxref("grid-template-rows")}}-Eigenschaft erstellt haben, platziert das Grid weiterhin Elemente in diesen Reihen. Wenn das Grid nicht genug Reihen im [expliziten Grid](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Reihen erstellt.

### Größenanpassung von Reihen im impliziten Grid

Der Standard für automatisch erstellte Reihen im impliziten Grid ist, dass sie _automatisch angepasst_ werden. Das bedeutet, dass sie sich anpassen, um den hinzugefügten Inhalt ohne Überlauf aufzunehmen.

Die Größe dieser Reihen kann über die Eigenschaft {{cssxref("grid-auto-rows")}} gesteuert werden. Um beispielsweise alle Reihen 100px hoch zu machen, können Sie `grid-auto-rows: 100px;` verwenden:

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

Die Funktion {{cssxref("minmax")}} ermöglicht das Erstellen von Reihen, die eine Mindestgröße haben und bei Bedarf anwachsen können, wenn sie als Wert für `grid-auto-rows` festgelegt sind. Durch das Setzen von `grid-auto-rows: minmax(100px, auto);` wird jede Reihe mindestens 100px hoch, während sie so hoch wie nötig sein kann:

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

### Größenanpassung von Reihen mit einer Spurauflistung

Sie können auch eine Spurauflistung angeben. Dies wird wiederholt. Die folgende Spurauflistung erstellt eine anfängliche implizite Spurreihe mit 100 Pixeln und eine zweite mit `200px`. Dies wird fortgesetzt, solange Inhalt zum impliziten Grid hinzugefügt wird.

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

Sie können das Grid auch anweisen, Elemente nach Spalte automatisch zu platzieren. Verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit einem Wert von `column`. In diesem Fall fügt das Grid Elemente in die Reihen ein, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Wenn eine Spalte gefüllt ist, wechselt es zur nächsten expliziten Spalte oder erstellt eine neue Spurenreihe im impliziten Grid. Wie bei impliziten Spur-Reihen werden diese Spuren automatisch dimensioniert. Sie können die Größe von impliziten Spuren-Reihen mit {{cssxref("grid-auto-columns")}} steuern. Dies funktioniert genauso wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Grid mit drei 200px hohen Spur-Reihen. Wir deklarieren `grid-auto-flow: column;`, um nach Spalte automatisch zu platzieren. Mit `grid-auto-columns: 300px 100px;` wechseln die erstellten Spalten zwischen einer Breite von `300px` und `100px`, bis genug Spurenreihen vorhanden sind, um alle Elemente aufzunehmen.

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

Ein Grid kann eine Mischung aus item-Platzierungen enthalten. Einige der Elemente können eine spezifisch definierte Position im Grid haben, während andere automatisch platziert werden. Wenn Sie eine Dokumentenreihenfolge haben, die die Position der Elemente im Grid widerspiegelt, müssen Sie möglicherweise nicht für alle Elemente CSS-Regeln schreiben, um sie explizit zu platzieren. Die Spezifikation enthält einen langen Abschnitt, in dem der [Grid Item Placement Algorithm](https://drafts.csswg.org/css-grid/#auto-placement-algo) detailliert beschrieben wird; für die meisten von uns müssen wir jedoch nur ein paar Regeln für unsere Elemente berücksichtigen.

### Modifizierte Dokumentenreihenfolge

Grid platziert Elemente, denen keine Position zugewiesen wurde, in dem, was in der Spezifikation als "modifizierte Dokumentenreihenfolge" bezeichnet wird. Das bedeutet, dass, wenn Sie die `order`-Eigenschaft verwendet haben, die Elemente nach dieser Reihenfolge und nicht nach ihrer DOM-Reihenfolge platziert werden. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie im Dokumentenquelltext stehen.

### Elemente mit Platzierungseigenschaften

Das erste, was das Grid tut, ist, alle Elemente zu platzieren, die eine Position haben. Im folgenden Beispiel habe ich 12 Gitterelemente. Element 2 und Element 5 wurden mit linienbasierter Platzierung im Gitter platziert. Sie können sehen, wie diese Elemente platziert werden, und die anderen Elemente dann in den verbleibenden Bereichen automatisch platziert werden. Die automatisch platzierten Elemente positionieren sich vor den platzierten Elementen in der DOM-Reihenfolge; sie beginnen nicht nach der Position eines platzierten Elements, das vor ihnen kommt.

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

Sie können Platzierungseigenschaften verwenden und gleichzeitig die Vorteile der Auto-Platzierung nutzen. In diesem nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie sowohl für Reihen als auch für Spalten zwei Spuren überspannen. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}}, indem ich den Wert auf `span 2` setze. Dies bedeutet, dass die Startlinie des Elements durch die Auto-Platzierung festgelegt wird, und die Endlinie zwei Spuren überspannen wird.

Sie können sehen, wie dadurch Lücken im Grid entstehen, da für die automatisch platzierten Elemente das Grid, wenn es auf ein Element stößt, das nicht in eine Spur passt, zur nächsten Reihe wechselt, bis es einen Raum findet, in den das Element passt.

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

Bis jetzt ist das Grid, abgesehen von Elementen, die wir spezifisch platziert haben, immer vorwärts gegangen und hat die Elemente in der DOM-Reihenfolge beibehalten. Das ist im Allgemeinen, was Sie wollen, wenn Sie beispielsweise ein Formular layouten; Sie möchten nicht, dass die Labels und Felder durcheinander geraten, um eine Lücke zu füllen. Manchmal jedoch layouten wir Dinge, die keine logische Reihenfolge haben, und wir möchten ein Layout erstellen, das keine Lücken enthält.

Um dies zu tun, fügen Sie der Container-Eigenschaft {{cssxref("grid-auto-flow")}} den Wert `dense` hinzu. Dies ist dieselbe Eigenschaft, die Sie verwenden, um die Flussrichtung auf `column` zu ändern, also wenn Sie in Spalten arbeiten würden, würden Sie beide Werte `grid-auto-flow: column dense` hinzufügen.

Mit dieser Änderung wird das Grid nun die Lücken rückwärts auffüllen. Wenn es durch das Grid geht, lässt es wie zuvor Lücken, aber wenn es ein Element findet, das in eine vorherige Lücke passt, wird es dieses aufnehmen und aus der DOM-Reihenfolge nehmen, um es in die Lücke zu platzieren. Wie bei jeder anderen Neuordnung im Grid ändert dies nicht die logische Reihenfolge. Die Tabulator-Reihenfolge beispielsweise folgt nach wie vor der Dokumentenreihenfolge. Wir werden die potenziellen Barrierefreiheitsprobleme des Grid-Layouts im [Leitfaden zu Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) betrachten, aber Sie sollten vorsichtig sein, wenn Sie diese Diskrepanz zwischen der visuellen und der Anzeigereihenfolge erstellen.

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

### Anonyme Gitterelemente

In der Spezifikation wird erwähnt, dass anonyme Gitterelemente erstellt werden, wenn Sie einen Textabschnitt innerhalb Ihres Gittercontainers haben, der nicht in einem anderen Element eingeschlossen ist. Im Beispiel unten haben wir drei Gitterelemente, angenommen, Sie hätten das übergeordnete Element mit einer Klasse von `grid` auf `display: grid` gesetzt. Das erste ist ein anonymes Element, da es keine umschließende Markierung hat; dieses Element wird immer gemäß den Auto-Platzierungsregeln behandelt. Die anderen beiden sind Gitterelemente, die in einem `div` eingeschlossen sind; sie könnten automatisch platziert oder mit einer Positionierungsmethode auf Ihrem Gitter platziert werden.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie gezielt anzusprechen. Wenn Sie also aus irgendeinem Grund unwrappter Text in Ihrem Grid haben, seien Sie sich bewusst, dass er möglicherweise an einem unerwarteten Ort erscheint, da er gemäß den Auto-Platzierungsregeln automatisch platziert wird.

### Anwendungsfälle für die automatische Platzierung

Die automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Das können Elemente ohne logische Reihenfolge sein, wie z. B. eine Galerie von Fotos oder eine Produktliste. In diesem Fall könnten Sie sich entscheiden, den dichten Packmodus zu verwenden, um alle Lücken in Ihrem Grid zu füllen. In meinem Bildgalerie-Beispiel habe ich einige Landschafts- und einige Porträtbilder. Ich habe Landschaftsbilder – mit einer Klasse von `landscape` – so eingestellt, dass sie zwei Spalten-Spuren überspannen. Dann verwende ich `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

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

Die automatische Platzierung kann Ihnen auch helfen, Interface-Elemente zu layouten, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten sind eine interessante Herausforderung, da sie flach sind, es gibt nichts, das die Gruppen von `dt`- und `dd`-Elementen umschließt. In meinem Beispiel erlaube ich die Auto-Platzierung, die Elemente zu platzieren; ich habe jedoch Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 starten, um sicherzustellen, dass Begriffe auf der einen Seite und Definitionen auf der anderen Seite stehen – unabhängig davon, wie viele von jedem wir haben.

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

## Was können wir mit der Auto-Platzierung (noch) nicht tun?

Es gibt ein paar Dinge, die oft als Fragen auftreten. Derzeit können wir z. B. nicht mit unseren Elementen jede zweite Zelle des Grids anvisieren. Ein verwandtes Problem könnte Ihnen vielleicht schon in den Sinn gekommen sein, wenn Sie den letzten Leitfaden über benannte Linien im Grid befolgt haben. Es wäre, eine Regel zu definieren, die besagt: "Platziere Elemente automatisch gegen die nächste Linie namens 'n'", und das Grid würde dann andere Linien überspringen. Es gibt [eine aufgeworfene Frage dazu](https://github.com/w3c/csswg-drafts/issues/796) im CSSWG GitHub-Repository, und Sie sind willkommen, Ihre eigenen Anwendungsfälle dazu beizutragen.

Es kann sein, dass Ihnen eigene Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts einfallen. Wenn dem so ist, erheben Sie sie als Fragen oder fügen Sie sie zu einer bestehenden Frage hinzu, die Ihren Anwendungsfall lösen könnte. Das wird helfen, zukünftige Versionen der Spezifikation zu verbessern.
