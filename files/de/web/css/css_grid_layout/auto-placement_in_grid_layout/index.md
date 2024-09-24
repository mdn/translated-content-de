---
title: Auto-Platzierung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Zusätzlich zur Möglichkeit, Elemente genau auf einem erstellten Grid zu platzieren, enthält die CSS-Grid-Layout-Spezifikation Regeln, die bestimmen, was passiert, wenn Sie ein Grid erstellen und einige oder alle Kindelemente nicht platzieren. Sie können die automatische Platzierung auf einfachste Art erleben, indem Sie für eine Gruppe von Elementen ein Grid erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich selbst auf dem Grid, eins in jeder Grid-Zelle.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
</div>
```

{{ EmbedLiveSample('Default_placement', '500', '230') }}

## Standardregeln für die automatische Platzierung

Wie Sie im obigen Beispiel sehen können, legen sich alle Kindelemente auf einem Grid jeweils in eine Grid-Zelle. Der Standardfluss ordnet die Elemente nach Zeilen an. Das Grid legt ein Element in jede Zelle der ersten Zeile. Wenn Sie zusätzliche Zeilen mit der `grid-template-rows`-Eigenschaft erstellt haben, werden die Elemente in diesen Zeilen weiter platziert. Wenn das Grid nicht genug Zeilen im expliziten Grid hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größenanpassung von Zeilen im impliziten Grid

Die Standardeinstellung für automatisch erstellte Zeilen im impliziten Grid ist, dass sie automatisch an die Größe des Inhalts angepasst werden. Das bedeutet, dass sie den zugefügten Inhalt enthalten, ohne einen Überlauf zu verursachen.

Sie können die Größe dieser Zeilen jedoch mit der Eigenschaft `grid-auto-rows` steuern. Um alle erstellten Zeilen beispielsweise 100 Pixel hoch zu machen, würden Sie folgendes verwenden:

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
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

Sie können {{cssxref("minmax", "minmax()")}} in Ihrem Wert für {{cssxref("grid-auto-rows")}} verwenden, wodurch die Erstellung von Zeilen ermöglicht wird, die eine minimale Größe haben, aber bei Bedarf wachsen, um den Inhalt zu fassen, wenn dieser höher ist.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>
    Vier <br />Diese Zelle <br />Hat zusätzlichen <br />Inhalt. <br />Max ist auto
    <br />damit die Zeile sich erweitert.
  </div>
  <div>Fünf</div>
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

### Größenanpassung von Zeilen mit einer Track-Liste

Sie können auch eine Track-Liste angeben, die sich wiederholen wird. Die folgende Track-Liste wird eine anfängliche implizite Zeile mit 100 Pixel und eine zweite mit `200px` erstellen. Dies wird fortgesetzt, solange Inhalt zum impliziten Grid hinzugefügt wird.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
  <div>Sechs</div>
  <div>Sieben</div>
  <div>Acht</div>
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

Sie können auch das Grid dazu auffordern, Elemente nach Spalte automatisch zu platzieren. Verwenden Sie dafür die Eigenschaft {{cssxref("grid-auto-flow")}} mit einem Wert von `column`. In diesem Fall fügt das Grid Elemente in die Zeilen ein, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Wenn es eine Spalte füllt, bewegt es sich zur nächsten expliziten Spalte oder erstellt eine neue Spaltenreihe im impliziten Grid. Wie bei impliziten Zeilenreihen werden diese Spaltenreihen automatisch dimensioniert. Sie können die Größe der impliziten Spaltenreihen mit {{cssxref("grid-auto-columns")}} steuern, dies funktioniert auf die gleiche Weise wie {{cssxref("grid-auto-rows")}}.

In diesem nächsten Beispiel habe ich ein Grid mit drei Zeilen von jeweils 200 Pixeln Höhe erstellt. Ich platziere automatisch nach Spalte und die erstellten Spalten haben eine Breite von 300 Pixeln, dann eine Spaltenbreite von 100 Pixeln, bis es genug Spaltenreihen gibt, um alle Elemente zu fassen.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
  <div>Sechs</div>
  <div>Sieben</div>
  <div>Acht</div>
</div>
```

{{ EmbedLiveSample('Auto-placement_by_column', '500', '700') }}

## Die Reihenfolge von automatisch platzierten Elementen

Ein Grid kann eine Mischung aus Elementen enthalten. Einige der Elemente können eine spezifische Position auf dem Grid haben, andere können automatisch platziert werden. Dies kann nützlich sein; wenn die Dokumentenreihenfolge die Reihenfolge widerspiegelt, in der die Elemente auf dem Grid sitzen, müssen Sie möglicherweise nicht für jedes Element CSS-Regeln schreiben. Die Spezifikation enthält einen langen Abschnitt über den [Grid-Elementplatzierungsalgorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo), jedoch müssen sich die meisten von uns nur ein paar einfache Regeln für unsere Elemente merken.

### Nach Reihenfolge modifizierte Dokumentenreihenfolge

Grid platziert Elemente, die keine Grid-Position erhalten haben, in der in der Spezifikation beschriebenen "nach Reihenfolge modifizierten Dokumentenreihenfolge". Das bedeutet, wenn Sie die `order`-Eigenschaft verwendet haben, werden die Elemente nach dieser Reihenfolge und nicht nach ihrer DOM-Reihenfolge platziert. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie in der Dokumentquelle erscheinen.

### Elemente mit Platzierungseigenschaften

Das erste, was das Grid tut, ist, alle Elemente zu platzieren, die eine Position haben. Im untenstehenden Beispiel habe ich 12 Grid-Elemente. Das zweite und fünfte Element wurden mittels linienbasierter Platzierung auf dem Grid positioniert. Sie können sehen, wie diese Elemente platziert werden und die anderen Elemente dann automatisch in die verbleibenden Bereiche platziert werden. Die automatisch platzierten Elemente werden sich vor den platzierten Elementen in DOM-Reihenfolge platzieren, sie beginnen nicht nach der Position eines vorhergehenden platzierten Elements.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
  <div>Sechs</div>
  <div>Sieben</div>
  <div>Acht</div>
  <div>Neun</div>
  <div>Zehn</div>
  <div>Elf</div>
  <div>Zwölf</div>
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

### Umgang mit Elementen, die Tracks überspannen

Sie können Platzierungseigenschaften verwenden, während Sie dennoch die Vorteile der automatischen Platzierung nutzen. In diesem nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie zwei Tracks sowohl für Zeilen als auch für Spalten überspannen. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert auf `span 2`. Dies bedeutet, dass die Startlinie des Elements durch die automatische Platzierung festgelegt wird und die Endlinie zwei Tracks überspannt.

Sie können sehen, wie dies dann Lücken im Grid hinterlässt, da für die automatisch platzierten Elemente das Grid, wenn es auf ein Element stößt, das nicht in einen Track passt, zur nächsten Zeile wechselt, bis es einen Platz findet, in den das Element passt.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
  <div>Sechs</div>
  <div>Sieben</div>
  <div>Acht</div>
  <div>Neun</div>
  <div>Zehn</div>
  <div>Elf</div>
  <div>Zwölf</div>
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

Bisher, abgesehen von Elementen, die wir spezifisch platziert haben, bewegt sich das Grid immer vorwärts und hält die Elemente in DOM-Reihenfolge. Das ist normalerweise, was Sie möchten, wenn Sie zum Beispiel ein Formular layouten, wollen Sie nicht, dass die Labels und Felder durcheinander geraten, um eine Lücke zu füllen. Manchmal jedoch legen wir Dinge an, die keine logische Reihenfolge haben und wir möchten ein Layout schaffen, das keine Lücken aufweist.

Um dies zu tun, fügen Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `dense` zum Container hinzu. Dies ist dieselbe Eigenschaft, die Sie verwenden, um die Flussreihenfolge auf `column` zu ändern, wenn Sie also in Spalten arbeiten, würden Sie beide Werte `grid-auto-flow: column dense` hinzufügen.

Nachdem Sie dies getan haben, wird das Grid nun die Lücken rückblickend ausfüllen, es bewegt sich durch das Grid und lässt Lücken wie zuvor, jedoch wenn es auf ein Element trifft, das in eine vorherige Lücke passt, wird es dieses Element aufgreifen und aus der DOM-Reihenfolge herausnehmen, um es in die Lücke zu platzieren. Wie bei jeder anderen Neuanordnung im Grid ändert dies nicht die logische Reihenfolge. Die Tab-Order zum Beispiel, wird immer noch der Dokumentenreihenfolge folgen. Wir werden uns die möglichen Barrierefreiheitsprobleme des Grid-Layouts im [Leitfaden für Barrierefreiheit im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) ansehen, aber Sie sollten vorsichtig sein, wenn Sie diese Diskrepanz zwischen der visuellen und der Anzeigereihenfolge schaffen.

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
  <div>Eins</div>
  <div>Zwei</div>
  <div>Drei</div>
  <div>Vier</div>
  <div>Fünf</div>
  <div>Sechs</div>
  <div>Sieben</div>
  <div>Acht</div>
  <div>Neun</div>
  <div>Zehn</div>
  <div>Elf</div>
  <div>Zwölf</div>
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

In der Spezifikation findet sich eine Erwähnung von anonymen Grid-Elementen. Diese werden erstellt, wenn Sie einen Textstring innerhalb eines Grid-Containers haben, der nicht in ein anderes Element eingebettet ist. Im folgenden Beispiel haben wir drei Grid-Elemente, vorausgesetzt, dass Sie das übergeordnete Element mit der Klasse `grid` auf `display: grid` setzen. Das erste ist ein anonymes Element, da es keine umschließende Markierung hat, dieses Element wird immer gemäß den Regeln der automatischen Platzierung behandelt. Die anderen beiden sind Grid-Elemente, die in einem `div` eingeschlossen sind, sie können automatisch platziert werden oder Sie könnten diese mit einer Positionierungsmethode auf Ihrem Grid platzieren.

```html
<div class="grid">
  Ich bin ein String und werde ein anonymes Element
  <div>Ein Grid-Element</div>
  <div>Ein Grid-Element</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie gezielt anzusprechen. Daher, wenn Sie aus irgendeinem Grund ungeregelten Text in Ihrem Grid haben, seien Sie sich bewusst, dass er möglicherweise irgendwo unerwartet auftaucht, da er gemäß den Regeln der automatischen Platzierung automatisch platziert wird.

### Anwendungsfälle für automatische Platzierung

Die automatische Platzierung ist nützlich, wann immer Sie eine Sammlung von Elementen haben. Das könnten Elemente sein, die keine logische Reihenfolge haben, wie eine Fotogalerie oder Produktliste. In diesem Fall könnten Sie den dichten Packmodus verwenden, um Lücken in Ihrem Grid zu füllen. In meinem Bildergalerie-Beispiel habe ich einige Quer- und einige Hochformatbilder. Ich habe Querformatbilder – mit einer Klasse namens `landscape` – so eingestellt, dass sie zwei Spalten überspannen. Ich verwende dann `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt umsortiert, um Lücken im Layout zu hinterlassen.

{{EmbedGHLiveSample("css-examples/grid/docs/autoplacement.html", '100%', 1200)}}

Automatische Platzierung kann Ihnen auch dabei helfen, Interface-Elemente anzuordnen, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste in diesem nächsten Beispiel. Definitionslisten sind eine interessante Herausforderung beim Gestalten, da sie flach sind und es nichts gibt, das die Gruppen von `dt` und `dd`-Elementen umschließt. In meinem Beispiel lasse ich die automatische Platzierung die Elemente platzieren, jedoch habe ich Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 starten, dies stellt sicher, dass Begriffe auf der einen Seite und Definitionen auf der anderen Seite erscheinen – egal wie viele von jedem wir haben.

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
    <dt>Säugetiere</dt>
    <dd>Katze</dd>
    <dd>Hund</dd>
    <dd>Maus</dd>
    <dt>Fische</dt>
    <dd>Guppy</dd>
    <dt>Vögel</dt>
    <dd>Bachstelze</dd>
    <dd>Eule</dd>
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

## Was können wir (noch) nicht mit der automatischen Platzierung tun?

Es gibt ein paar Dinge, die häufig als Fragen auftauchen. Derzeit können wir nicht wie jede zweite Zelle des Grids mit unseren Elementen ansprechen. Ein verwandtes Thema könnte Ihnen bereits in den Sinn gekommen sein, wenn Sie den letzten Leitfaden über benannte Linien im Grid verfolgt haben. Es wäre, eine Regel zu definieren, die sagte "Platziere automatisch Elemente an der nächsten Linie, die "n" genannt wird", und das Grid würde dann andere Linien überspringen. Es gibt [ein aufgeworfenes Thema dazu](https://github.com/w3c/csswg-drafts/issues/796) im CSSWG GitHub-Repository, und Sie wären willkommen, Ihre eigenen Anwendungsfälle dazu beizutragen.

Es kann sein, dass Sie eigene Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts entwickeln. Wenn Sie dies tun, heben Sie diese als Themen hervor oder fügen Sie sie einem bestehenden Thema hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird helfen, zukünftige Versionen der Spezifikation zu verbessern.
