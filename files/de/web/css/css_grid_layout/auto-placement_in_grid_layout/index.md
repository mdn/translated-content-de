---
title: Automatische Platzierung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Zusätzlich zur Möglichkeit, Elemente genau auf einem erstellten Raster zu platzieren, enthält die CSS-Grid-Layout-Spezifikation Regeln, die steuern, was passiert, wenn Sie ein Raster erstellen und einige oder alle untergeordneten Elemente nicht platzieren. Sie können die automatische Platzierung auf einfachste Weise sehen, indem Sie ein Raster auf einer Reihe von Elementen erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich selbstständig im Raster, je eines in jeder Rasterzelle.

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

## Standardregeln für die automatische Platzierung

Wie Sie im obigen Beispiel sehen können, legen sich bei der Erstellung eines Rasters alle untergeordneten Elemente automatisch in jede Rasterzelle. Der Standardfluss ist, die Elemente zeilenweise anzuordnen. Das Raster legt ein Element in jede Zelle der Zeile 1. Wenn Sie zusätzliche Zeilen mit der Eigenschaft `grid-template-rows` erstellt haben, platziert das Raster weiter Elemente in diesen Zeilen. Falls das Raster nicht genügend Zeilen im expliziten Raster hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größenanpassung von Zeilen im impliziten Raster

Standardmäßig werden automatisch erstellte Zeilen im impliziten Raster automatisch dimensioniert. Das bedeutet, dass sie den hinzugefügten Inhalt aufnehmen, ohne Überlauf zu verursachen.

Sie können jedoch die Größe dieser Zeilen mit der Eigenschaft `grid-auto-rows` steuern. Um beispielsweise alle erstellten Zeilen 100 Pixel hoch zu machen, würden Sie Folgendes verwenden:

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

### Größenanpassung von Zeilen mit minmax()

Sie können {{cssxref("minmax","minmax()")}} in Ihrem Wert für {{cssxref("grid-auto-rows")}} verwenden, um Zeilen zu erstellen, die eine Mindestgröße haben, aber dann wachsen, um den Inhalt einzupassen, wenn er höher ist.

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

### Größenanpassung von Zeilen mit einer Spurliste

Sie können auch eine Spurliste übergeben, die sich wiederholt. Die folgende Spurliste erstellt einen ersten impliziten Zeilenspur von 100 Pixeln und einen zweiten von `200px`. Dies wird fortgesetzt, solange dem impliziten Raster Inhalte hinzugefügt werden.

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

### Automatische Platzierung nach Spalte

Es ist auch möglich, das Raster anzuweisen, Elemente automatisch spaltenweise zu platzieren. Verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall fügt das Raster Elemente in die von Ihnen definierten Zeilen mit {{cssxref("grid-template-rows")}} hinzu. Wenn eine Spalte gefüllt ist, wird zur nächsten expliziten Spalte übergegangen oder ein neuer Spaltenpfad im impliziten Raster erstellt. Ebenso wie bei impliziten Zeilenspuren, werden diese Spaltenpfade automatisch dimensioniert. Sie können die Größe von impliziten Spaltenpfaden mit {{cssxref("grid-auto-columns")}} steuern, das auf dieselbe Weise funktioniert wie {{cssxref("grid-auto-rows")}}.

Im nächsten Beispiel habe ich ein Raster mit drei Zeilenspuren von je 200 Pixel Höhe erstellt. Ich platziere die Elemente automatisch spaltenweise und die erstellten Spalten werden eine Spaltenbreite von 300 Pixeln, dann eine Spaltenbreite von 100 Pixeln haben, bis genügend Spaltenpfade vorhanden sind, um alle Elemente zu halten.

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

Ein Raster kann eine Mischung von Elementen enthalten. Einige der Elemente können eine Position im Raster haben, andere können automatisch platziert werden. Dies kann nützlich sein, wenn die Dokumentenreihenfolge der Reihenfolge entspricht, in der die Elemente im Raster sitzen, damit Sie nicht CSS-Regeln schreiben müssen, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Grid-Element-Platzierungsalgorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo) im Detail erläutert. Für die meisten von uns reichen jedoch ein paar einfache Regeln, die wir uns für unsere Elemente merken müssen.

### Dokumentenreihenfolge nach modifizierter Ordnung

Grid platziert Elemente, denen keine Rasterposition zugewiesen wurde, in der Spezifikation beschriebener "reihenfolge-modifizierter Dokumentenreihenfolge". Das bedeutet, wenn Sie die `order`-Eigenschaft verwendet haben, werden die Elemente nach dieser Reihenfolge platziert, nicht nach ihrer DOM-Reihenfolge. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie in der Dokumentquelle eingegeben werden.

### Elemente mit Platzierungseigenschaften

Das Erste, was das Raster tut, ist, alle Elemente zu platzieren, die eine Position haben. Im folgenden Beispiel habe ich 12 Rasterelemente. Element 2 und Element 5 wurden mithilfe der linienbasierten Platzierung auf dem Raster platziert. Sie können sehen, wie diese Elemente platziert werden und die anderen Elemente dann automatisch in die Lücken platziert werden. Die automatisch platzierten Elemente werden sich vor den platzierten Elementen in der DOM-Reihenfolge platzieren, sie beginnen nicht nach der Position eines platzierten Elements, das vor ihnen kommt.

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

### Umgang mit Elementen, die Spuren überbrücken

Sie können Platzierungseigenschaften verwenden und dennoch die automatische Platzierung nutzen. Im nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) sowohl für Zeilen als auch für Spalten über zwei Spuren setze. Ich verwende dazu die Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert auf `span 2`. Das bedeutet, dass die Startlinie des Elements durch die automatische Platzierung festgelegt wird und die Endlinie zwei Spuren überbrückt.

Sie können sehen, wie dies dann Lücken im Raster hinterlässt, denn bei den automatisch platzierten Elementen, wenn das Raster auf ein Element stößt, das nicht in eine Spur passt, geht es zur nächsten Zeile, bis es einen Platz findet, in den das Element passt.

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

### Die Lücken füllen

Bisher bewegt sich das Raster mit Ausnahme der speziell platzierten Elemente immer vorwärts und hält die Elemente in der DOM-Reihenfolge. Dies ist im Allgemeinen das, was Sie möchten, wenn Sie beispielsweise ein Formular layouten, da Sie nicht möchten, dass die Beschriftungen und Felder durcheinander geraten, um eine Lücke zu füllen. Manchmal jedoch layouten wir Dinge, die keine logische Reihenfolge haben und wir möchten ein Layout ohne Lücken erstellen.

Fügen Sie dazu die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `dense` zu dem Container hinzu. Dies ist die gleiche Eigenschaft, die Sie verwenden, um die Flussrichtung in `column` zu ändern. Wenn Sie also in Spalten arbeiten, würden Sie beide Werte hinzufügen: `grid-auto-flow: column dense`.

Nachdem Sie dies getan haben, wird das Raster nun die Lücken auffüllen. Beim Durchlaufen des Rasters hinterlässt es, wie zuvor, Lücken, aber wenn es ein Element findet, das in eine frühere Lücke passt, wird es dieses Element aufnehmen und aus der DOM-Reihenfolge entfernen, um es in die Lücke zu platzieren. Wie bei jeder anderen Neuanordnung im Raster ändert sich die logische Reihenfolge nicht. Die Tab-Reihenfolge beispielsweise folgt weiterhin der Dokumentenreihenfolge. Wir werden uns die potenziellen Barrierefreiheitsprobleme des Grid-Layouts im [Leitfaden zum Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) anschauen, aber Sie sollten vorsichtig sein, wenn Sie diese Trennung zwischen visueller Reihenfolge und Anzeigereihenfolge erstellen.

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

### Anonyme Rasterelemente

In der Spezifikation wird auf anonyme Rasterelemente hingewiesen. Diese werden erstellt, wenn Sie einen Textstring in Ihrem Grid-Container haben, der in kein anderes Element eingebettet ist. Im folgenden Beispiel haben wir drei Rasterelemente, wenn man annimmt, dass der übergeordnete Container mit einer Klasse von `grid` auf `display: grid` gesetzt wurde. Das erste ist ein anonymes Element, da es kein umschließendes Markup hat. Dieses Element wird immer mit den Regeln zur automatischen Platzierung behandelt. Die anderen beiden sind Rasterelemente, die in einem `div` eingeschlossen sind. Diese könnten automatisch platziert werden oder Sie könnten diese mit einer Positionierungsmethode auf Ihrem Raster platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, weil es keine Möglichkeit gibt, sie direkt anzusprechen. Seien Sie also aufmerksam, wenn Sie aus irgendeinem Grund nicht eingekapselten Text in Ihrem Raster haben, da er möglicherweise unerwartet auftauchen könnte, da er gemäß den Regeln zur automatischen Platzierung platziert wird.

### Anwendungsfälle für die automatische Platzierung

Automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Das könnten Elemente sein, die keine logische Reihenfolge haben, wie z.B. eine Fotogalerie oder eine Produktliste. In diesem Fall könnten Sie den dichten Verpackungsmodus verwenden, um alle Lücken in Ihrem Raster zu füllen. In meinem Bildgalerie-Beispiel habe ich einige Landschafts- und einige Portraitbilder. Ich habe Landschaftsbilder – mit einer Klasse von `landscape` – so gesetzt, dass sie zwei Spaltenspuren überbrücken. Anschließend verwende ich `grid-auto-flow: dense`, um ein dicht gepacktes Raster zu erstellen.

Probieren Sie aus, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt neu anordnet und Lücken im Layout hinterlässt.

{{EmbedGHLiveSample("css-examples/grid/docs/autoplacement.html", '100%', 1200)}}

Automatische Platzierung kann Ihnen auch helfen, Interface-Elemente zu layouten, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten sind eine interessante Herausforderung beim Stylen, da sie flach sind, es gibt nichts, was die Gruppen von `dt`- und `dd`-Elementen umschließt. In meinem Beispiel erlaube ich der automatischen Platzierung, die Elemente zu platzieren, habe jedoch Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 starten, um sicherzustellen, dass Begriffe auf der einen und Definitionen auf der anderen Seite stehen – unabhängig davon, wie viele von jedem wir haben.

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

## Was können wir mit der automatischen Platzierung (noch) nicht tun?

Es gibt einige Dinge, die oft als Fragen aufkommen. Derzeit können wir Dinge wie das Ziel jeder zweiten Zelle des Rasters mit unseren Elementen nicht durchführen. Ein verwandtes Problem ist Ihnen vielleicht schon in den Sinn gekommen, wenn Sie dem letzten Leitfaden über benannte Linien im Raster gefolgt sind. Es wäre eine Regel zu definieren, die sagt "auto-place items against the next line named "n", und das Raster würde dann andere Linien überspringen. Es gibt [ein Problem hierzu](https://github.com/w3c/csswg-drafts/issues/796) im CSSWG GitHub-Repository, und Sie sind eingeladen, Ihre eigenen Anwendungsfälle hinzuzufügen.

Es kann sein, dass Sie Ihre eigenen Anwendungsfälle für die automatische Platzierung oder andere Teile des Grid-Layouts entwickeln. Wenn ja, heben Sie sie als Probleme hervor oder fügen Sie sie einem bestehenden Problem hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird helfen, zukünftige Versionen der Spezifikation zu verbessern.
