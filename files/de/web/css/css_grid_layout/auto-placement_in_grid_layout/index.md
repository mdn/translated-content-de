---
title: Auto-Platzierung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Zusätzlich zur Möglichkeit, Elemente genau auf einem erstellten Grid zu platzieren, enthält die CSS-Grid-Layout-Spezifikation Regeln, die festlegen, was passiert, wenn Sie ein Grid erstellen und einige oder alle Kindelemente nicht platzieren. Sie können die automatische Platzierung auf einfachste Weise sehen, indem Sie ein Grid auf eine Reihe von Elementen anwenden.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich selbst auf dem Grid, eins in jeder Gitterzelle.

```css hidden
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

{{ EmbedLiveSample('Default_placement', '500', '230') }}

## Standardregeln für die Auto-Platzierung

Wie Sie im obigen Beispiel sehen können, legen sich alle Kindelemente automatisch eins in jede Gitterzelle, wenn Sie ein Grid erstellen. Der Standardfluss besteht darin, die Elemente zeilenweise anzuordnen. Grid platziert ein Element in jede Zelle der ersten Zeile. Wenn Sie mit der Eigenschaft `grid-template-rows` zusätzliche Zeilen erstellt haben, platziert Grid weiterhin Elemente in diesen Zeilen. Wenn das Grid nicht genügend Zeilen im expliziten Grid hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größe der Zeilen im impliziten Grid

Der Standard für automatisch erstellte Zeilen im impliziten Grid ist, dass sie automatisch in der Größe angepasst werden. Das bedeutet, dass sie den hinzugefügten Inhalt aufnehmen, ohne ein Überlaufen zu verursachen.

Sie können jedoch die Größe dieser Zeilen mit der Eigenschaft `grid-auto-rows` steuern. Um beispielsweise alle erstellten Zeilen 100 Pixel hoch zu machen, würden Sie verwenden:

```css hidden
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

{{ EmbedLiveSample('Sizing_rows_in_the_implicit_grid', '500', '330') }}

### Größe der Zeilen mit minmax()

Sie können {{cssxref("minmax","minmax()")}} in Ihrem Wert für {{cssxref("grid-auto-rows")}} verwenden, um Zeilen zu erstellen, die eine Mindestgröße haben, aber wachsen, um den Inhalt aufzunehmen, wenn er höher ist.

```css hidden
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

{{ EmbedLiveSample('Sizing_rows_using_minmax', '500', '330') }}

### Größe der Zeilen mit einem Streckenlisting

Sie können auch ein Streckenlisting übergeben, das sich wiederholt. Das folgende Streckenlisting erstellt eine anfängliche implizite Zeilenstrecke von 100 Pixeln und eine zweite von `200px`. Dies wird fortgesetzt, solange dem impliziten Grid Inhalte hinzugefügt werden.

```css hidden
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

{{ EmbedLiveSample('Sizing_rows_using_a_track_listing', '500', '450') }}

### Auto-Platzierung nach Spalte

Sie können Grid auch dazu veranlassen, Elemente spaltenweise automatisch zu platzieren. Hierzu verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit einem Wert von `column`. In diesem Fall fügt Grid Elemente in Zeilen hinzu, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Wenn eine Spalte voll ist, wechselt es zur nächsten expliziten Spalte oder erstellt eine neue Spurenzeile im impliziten Grid. Wie bei impliziten Zeilenspuren werden auch diese Spaltenstrecken automatisch in der Größe angepasst. Sie können die Größe von impliziten Spaltenstrecken mit {{cssxref("grid-auto-columns")}} steuern, dies funktioniert auf die gleiche Weise wie {{cssxref("grid-auto-rows")}}.

Im nächsten Beispiel habe ich ein Grid mit drei Zeilenstrecken von 200 Pixel Höhe erstellt. Ich platziere automatisch nach Spalte, und die erstellten Spalten haben eine Spaltenbreite von 300 Pixeln, dann eine Spaltenbreite von 100 Pixeln, bis es genügend Spaltenstrecken gibt, um alle Elemente aufzunehmen.

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

{{ EmbedLiveSample('Auto-placement_by_column', '500', '700') }}

## Die Reihenfolge der automatisch platzierten Elemente

Ein Grid kann eine Mischung von Elementen enthalten. Einige der Elemente können eine Position im Grid haben, während andere automatisch platziert werden. Dies kann hilfreich sein, wenn Sie eine Dokumentenreihenfolge haben, die die Reihenfolge widerspiegelt, in der die Elemente im Grid sitzen; Sie müssen keine CSS-Regeln schreiben, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Grid-Element-Platzierungs-Algorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo) beschreibt. Für die meisten von uns müssen wir uns jedoch nur an ein paar einfache Regeln für unsere Elemente erinnern.

### Durch die `order`-Eigenschaft modifizierte Dokumentenreihenfolge

Grid platziert Elemente, denen keine Grid-Position gegeben wurde, in der in der Spezifikation als "durch die `order`-Eigenschaft modifizierte Dokumentenreihenfolge" beschriebenen Reihenfolge. Das bedeutet, dass wenn Sie überhaupt die `order`-Eigenschaft verwendet haben, die Elemente in dieser Reihenfolge und nicht ihrer DOM-Reihenfolge platziert werden. Ansonsten bleiben sie standardmäßig in der Reihenfolge, in der sie im Dokumentenquelltext auftreten.

### Elemente mit Platzierungseigenschaften

Das erste, was Grid tut, ist, alle Elemente zu platzieren, die eine Position haben. Im untenstehenden Beispiel habe ich 12 Grid-Elemente. Element 2 und Element 5 wurden mithilfe von linienbasierter Platzierung auf dem Grid platziert. Sie können sehen, wie diese Elemente platziert werden und die anderen Items sich dann automatisch in die freien Plätze platzieren. Die automatisch platzierten Elemente werden sich selbst vor den platzierten Elementen in DOM-Reihenfolge platzieren, sie beginnen nicht nach der Position eines platzierten Elements, das vor ihnen kommt.

```css hidden
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

{{ EmbedLiveSample('Items_with_placement_properties', '500', '500') }}

### Umgang mit Elementen, die Strecken überschreiben

Sie können Platzierungseigenschaften verwenden, während Sie weiterhin von der Auto-Platzierung profitieren. Im nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie sowohl für Zeilen als auch für Spalten zwei Strecken umfassen. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert darauf auf `span 2`. Das bedeutet, dass die Startlinie des Elements durch Auto-Platzierung gesetzt wird und die Endlinie zwei Strecken umfassen wird.

Sie können sehen, wie dies dann Lücken im Grid hinterlässt, denn bei den automatisch platzierten Elementen, wenn Grid auf ein Element trifft, das nicht in eine Strecke passt, wechselt es zur nächsten Zeile, bis es einen Platz findet, in den das Element passt.

```css hidden
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

{{ EmbedLiveSample('Deal_with_items_that_span_tracks', '500', '800') }}

### Auffüllen der Lücken

Bisher, abgesehen von den Elementen, die wir spezifisch platziert haben, schreitet Grid immer vorwärts und hält die Elemente in DOM-Reihenfolge. Das ist im Allgemeinen, was Sie wollen, wenn Sie beispielsweise ein Formular Layout gestalten, Sie möchten nicht, dass die Labels und Felder durcheinander gebracht werden, um einige Lücken zu füllen. Manchmal legen wir jedoch Dinge an, die keine logische Ordnung haben, und wir möchten ein Layout erstellen, das keine Lücken aufweist.

Um dies zu tun, fügen Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit einem Wert von `dense` dem Container hinzu. Dies ist die gleiche Eigenschaft, die Sie verwenden, um die Flussrichtung auf `column` zu ändern. Wenn Sie also in Spalten arbeiten, fügen Sie beide Werte `grid-auto-flow: column dense` hinzu.

Nachdem dies getan wurde, wird das Grid nun die Lücken auffüllen. Während es durch das Grid geht, lässt es Lücken wie vorher, aber wenn es ein Element findet, das in eine vorherige Lücke passt, wird es dieses Element aufheben und aus der DOM-Reihenfolge holen, um es in die Lücke zu setzen. Wie bei jeder anderen Neuordnung im Grid ändert dies nicht die logische Reihenfolge. Die Tabulatorreihenfolge folgt beispielsweise weiterhin der Reihenfolge im Dokument. Wir werden uns die potenziellen Zugänglichkeitsprobleme des Grid-Layouts im [Grid-Layout und Zugänglichkeits-Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) ansehen, aber Sie sollten vorsichtig sein, wenn Sie diese Trennung zwischen der visuellen und der Darstellungsreihenfolge erstellen.

```css hidden
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

{{ EmbedLiveSample('Filling_in_the_gaps', '500', '730') }}

### Anonyme Grid-Elemente

In der Spezifikation gibt es einen Hinweis auf anonyme Grid-Elemente. Diese werden erstellt, wenn Sie eine Textzeichenfolge in Ihrem Grid-Container haben, die nicht in einem anderen Element eingeschlossen ist. Im untenstehenden Beispiel haben wir drei Grid-Elemente. Angenommen, Sie hatten das Elternelement mit einer Klasse von `grid` auf `display: grid` gesetzt. Das erste ist ein anonymes Element, da es keine umschließende Auszeichnung hat. Dieses Element wird immer gemäß den Auto-Platzierungsregeln behandelt. Die anderen zwei sind Grid-Elemente, die in ein `div` eingeschlossen sind. Sie könnten automatisch platziert werden, oder Sie könnten diese mit einer Positionierungsmethode auf Ihrem Grid platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie direkt anzusprechen. Wenn Sie aus einem bestimmten Grund nicht umwickelten Text in Ihrem Grid haben, beachten Sie, dass er möglicherweise an unerwarteter Stelle erscheint, da er gemäß den Auto-Platzierungsregeln platziert wird.

### Anwendungsfälle für die Auto-Platzierung

Die Auto-Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Dies könnten Elemente sein, die keine logische Reihenfolge haben, wie eine Galerie von Fotos oder eine Produktliste. In diesem Fall könnten Sie den dichten Packmodus verwenden, um Lücken in Ihrem Grid zu füllen. In meinem Bildergaleriebeispiel habe ich einige Landschafts- und einige Hochformataufnahmen. Ich habe Landschaftsbilder – mit einer Klasse von `landscape` – so eingestellt, dass sie zwei Spaltenstrecken umfassen. Ich verwende dann `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um die Inhalte neu zu ordnen und Lücken im Layout zu hinterlassen.

{{EmbedGHLiveSample("css-examples/grid/docs/autoplacement.html", '100%', 1200)}}

Die Auto-Platzierung kann Ihnen auch dabei helfen, Oberflächenelemente anzuordnen, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im folgenden Beispiel. Definitionslisten sind eine interessante Herausforderung für das Styling, da sie flach sind – es gibt nichts, was die Gruppen von `dt` und `dd` Elementen umschließt. In meinem Beispiel erlaube ich die Auto-Platzierung, die Elemente zu platzieren, jedoch habe ich Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 beginnen lassen. Dies stellt sicher, dass Begriffe auf einer Seite stehen und Definitionen auf der anderen, ganz gleich, wie viele von jeder wir haben.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
```

```html
<div class="wrapper">
  <dl>
    <dt>Mammals</dt>
    <dd>Cat</dd>
    <dd>Dog</dd>
    <dd>Mouse</dd>
    <dt>Fish</dt>
    <dd>Guppy</dd>
    <dt>Birds</dt>
    <dd>Pied Wagtail</dd>
    <dd>Owl</dd>
  </dl>
</div>
```

```css
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

{{ EmbedLiveSample('Use_cases_for_auto-placement', '500', '230') }}

## Was können wir mit der Auto-Platzierung (noch) nicht tun?

Es gibt ein paar Dinge, die oft als Fragen aufkommen. Derzeit können wir nicht Dinge tun, wie in jeder zweiten Zelle des Grids unsere Elemente platzieren. Ein verwandtes Problem könnte Ihnen bereits in den Sinn gekommen sein, wenn Sie dem letzten Leitfaden über benannte Linien im Grid gefolgt sind. Es wäre eine Regel zu definieren, die besagt "Platziere automatisch Elemente gegen die nächste Linie mit dem Namen 'n', und das Grid würde dann andere Linien überspringen". Es gibt [ein Thema dazu auf dem CSSWG GitHub Repository](https://github.com/w3c/csswg-drafts/issues/796), und Sie sind willkommen, Ihre eigenen Anwendungsfälle hinzuzufügen.

Es mag sein, dass Sie Ihre eigenen Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts entwickeln. Wenn Sie das tun, erheben Sie diese als Themen oder fügen Sie sie einem bestehenden Thema hinzu, das Ihr Anwendungsfall lösen könnte. Dies wird dazu beitragen, zukünftige Versionen der Spezifikation zu verbessern.
