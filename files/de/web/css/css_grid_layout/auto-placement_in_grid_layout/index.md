---
title: Automatische Platzierung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

{{CSSRef}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) enthält Regeln, die steuern, was passiert, wenn Sie ein Grid erstellen und einige oder alle Kind-Elemente nicht explizit im Grid platzieren. Wenn Sie keine explizite Kontrolle über die Platzierung des Inhalts benötigen, ist diese "automatische Platzierung" der einfachste Weg, ein Grid für eine Reihe von Elementen zu erstellen.

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

## Standardregeln für die automatische Platzierung

Wie Sie im obigen Beispiel sehen können, werden die Kind-Elemente eines Grids, das ohne Platzierung erstellt wurde, im Quellcode geordnet, wobei ein Gitterelement in jeder Gitterzelle platziert wird. Der Standardfluss ist, die Elemente nach Reihe zu ordnen. Grid platziert ein Element in jeder Zelle der ersten Reihe. Wenn Sie zusätzliche Reihen mit der Eigenschaft {{cssxref("grid-template-rows")}} erstellt haben, platziert das Grid weiterhin Elemente in diesen Reihen. Wenn das Grid nicht genügend Reihen im [expliziten Grid](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#implicit_and_explicit_grids) hat, um alle Elemente zu platzieren, werden neue _implizite_ Reihen erstellt.

### Größenanpassung der Reihen im impliziten Grid

Der Standard für automatisiert erstellte Reihen im impliziten Grid ist, dass sie _automatisch_ dimensioniert werden. Das bedeutet, dass sie sich an den hinzugefügten Inhalt anpassen, ohne Überlauf zu verursachen.

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

### Größenanpassung der Reihen mit minmax()

Die {{cssxref("minmax")}}-Funktion ermöglicht das Erstellen von Reihen, die eine Mindestgröße haben und bei Bedarf wachsen können, wenn sie als `grid-auto-rows`-Wert festgelegt werden. Durch die Einstellung von `grid-auto-rows: minmax(100px, auto);` wird jede Reihe mindestens 100px hoch, während sie bei Bedarf so hoch sein kann, wie benötigt:

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

### Größenanpassung der Reihen mit einer Spurauflistung

Sie können auch eine Spurauflistung angeben. Diese wird sich wiederholen. Die folgende Spurauflistung erstellt eine anfängliche implizite Reihe mit 100 Pixeln und eine zweite mit `200px`. Dies wird so lange fortgesetzt, wie Inhalt zum impliziten Grid hinzugefügt wird.

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

Sie können das Grid auch bitten, Elemente nach Spalten automatisch zu platzieren. Verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall wird das Grid Elemente in den von Ihnen definierten Reihen mit {{cssxref("grid-template-rows")}} hinzufügen. Wenn eine Spalte voll ist, wechselt es zur nächsten expliziten Spalte oder erstellt einen neuen Spurenpfad im impliziten Grid. Wie bei impliziten Reihen-Spuren werden diese Spalten-Spuren automatisch dimensioniert. Sie können die Größe der impliziten Spalten-Spuren mit {{cssxref("grid-auto-columns")}} kontrollieren. Dies funktioniert genauso wie {{cssxref("grid-auto-rows")}}.

In diesem Beispiel haben wir ein Grid mit drei 200px hohen Reihen-Spuren. Wir deklarieren `grid-auto-flow: column;`, um die automatische Platzierung nach Spalten durchzuführen. Mit `grid-auto-columns: 300px 100px;` werden die erstellten Spalten abwechselnd `300px` breit und `100px` breit sein, bis genügend Spalten-Spuren vorhanden sind, um alle Elemente zu halten.

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

Ein Grid kann eine Mischung aus Elementplatzierungen enthalten. Einige der Elemente können eine spezifisch definierte Position im Grid haben, während andere automatisch platziert werden. Wenn Ihre Dokumentenreihenfolge die Reihenfolge widerspiegelt, in der die Elemente im Grid sitzen, müssen Sie möglicherweise nicht alle CSS-Regeln schreiben, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Grid-Item-Platzierungs-Algorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo) detailliert beschreibt, aber für die meisten von uns müssen wir uns nur ein paar einfache Regeln für unsere Elemente merken.

### Reihenfolge der modifizierten Dokumentenreihenfolge

Grid platziert Elemente, die keine Grid-Position erhalten haben, in dem, was in der Spezifikation als "Order Modified Document Order" beschrieben wird. Das bedeutet, dass, wenn Sie die `order`-Eigenschaft verwendet haben, die Elemente in dieser Reihenfolge platziert werden, nicht nach ihrer DOM-Reihenfolge. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie im Dokumentquellcode eingegeben wurden.

### Elemente mit Platzierungseigenschaften

Zuerst platziert das Grid alle Elemente, die eine Position haben. Im folgenden Beispiel habe ich 12 Grid-Elemente. Element 2 und Element 5 wurden mittels linienbasierter Platzierung im Grid platziert. Sie können sehen, wie diese Elemente platziert werden und die anderen Elemente dann in die verbleibenden Plätze automatisch platziert werden. Die automatisch platzierten Elemente platzieren sich vor den platzierten Elementen in DOM-Reihenfolge, sie beginnen nicht nach der Position eines platzierten Elements, das vor ihnen liegt.

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

Sie können Platzierungseigenschaften verwenden, während Sie dennoch die Vorteile der automatischen Platzierung nutzen. Im nächsten Beispiel habe ich das Layout erweitert, indem ich die Elemente 1, 5 und 9 (4n+1) so eingestellt habe, dass sie sowohl für Reihen als auch für Spalten über zwei Spuren hinweg reichen. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}} und setze den Wert dieser auf `span 2`. Dies bedeutet, dass die Startlinie des Elements durch die automatische Platzierung festgelegt wird und die Endlinie über zwei Spuren reicht.

Sie können sehen, wie dies dann Lücken im Grid hinterlässt, da das Grid bei den automatisch platzierten Elementen, wenn es auf ein Element stößt, das nicht in eine Spur passt, zur nächsten Reihe wechselt, bis es einen Platz findet, in den das Element passt.

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

Bisher, abgesehen von Elementen, die wir spezifisch platziert haben, schreitet das Grid immer vorwärts und hält die Elemente in DOM-Reihenfolge. Das ist normalerweise das, was Sie wollen. Wenn Sie beispielsweise ein Formular layouten, möchten Sie nicht, dass sich die Labels und Felder vermischen, um eine Lücke zu füllen. Manchmal jedoch, wenn wir Dinge layouten, die keine logische Reihenfolge haben, möchten wir möglicherweise ein Layout erstellen, das keine Lücken aufweist.

Um dies zu erreichen, fügen Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `dense` zum Container hinzu. Dies ist dieselbe Eigenschaft, die Sie verwenden, um die Flussrichtung auf `column` zu ändern. Wenn Sie also in Spalten arbeiten, würden Sie beide Werte hinzufügen: `grid-auto-flow: column dense`.

Wenn Sie dies getan haben, wird das Grid nun die Lücken zurückfüllen. Während es durch das Grid geht, hinterlässt es wie zuvor Lücken, wird aber dann, wenn es ein Element findet, das in eine vorherige Lücke passt, dieses aufgreifen und aus der DOM-Reihenfolge nehmen, um es in die Lücke zu platzieren. Wie bei jeder anderen Neuordnung im Grid ändert dies nicht die logische Reihenfolge. Die Tab-Reihenfolge zum Beispiel folgt weiterhin der Dokumentenreihenfolge. Wir werden die potenziellen Zugänglichkeitsprobleme des Grid-Layouts im [Grid-Layout und Zugänglichkeitsleitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) untersuchen, aber Sie sollten vorsichtig sein, wenn Sie diese Trennung zwischen der visuellen und der Anzeigereihenfolge erstellen.

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

In der Spezifikation wird von anonymen Gitterelementen gesprochen. Diese werden erstellt, wenn Sie einen Textstring in Ihrem Grid-Container haben, der nicht in einem anderen Element eingeschlossen ist. Im folgenden Beispiel haben wir drei Gitterelemente. Dabei wird davon ausgegangen, dass Sie das übergeordnete Element mit der Klasse `grid` auf `display: grid` gesetzt haben. Das erste ist ein anonymes Element, da es keinen umgebenden Markup hat. Dieses Element wird immer gemäß den Regeln zur automatischen Platzierung behandelt. Die anderen zwei sind Gitterelemente, die in einem `div` eingeschlossen sind. Diese könnten automatisch platziert werden, oder Sie könnten diese mit einer Positionierungsmethode in Ihrem Grid platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, weil es keine Möglichkeit gibt, sie direkt anzusprechen. Seien Sie also bewusst, dass ungeschützter Text in Ihrem Grid aus irgendeinem Grund irgendwo unerwartet erscheinen könnte, da er gemäß den Regeln zur automatischen Platzierung platziert wird.

### Anwendungsbeispiele für die automatische Platzierung

Die automatische Platzierung ist nützlich, wenn Sie eine Sammlung von Elementen haben. Das könnten Elemente ohne logische Reihenfolge sein, wie eine Galerie von Fotos oder eine Produktliste. In diesem Fall könnten Sie den dichten Verpackungsmodus wählen, um alle Lücken in Ihrem Grid zu füllen. In meinem Beispiel der Bildergalerie habe ich einige Landschafts- und einige Porträtbilder. Ich habe Landschaftsbilder – mit einer Klasse `landscape` – so eingestellt, dass sie über zwei Spaltenspuren reichen. Ich verwende dann `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt so umfließt, dass Lücken im Layout entstehen.

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

Die automatische Platzierung kann Ihnen auch helfen, Benutzeroberfläche-Elemente anzuordnen, die eine logische Reihenfolge haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten sind eine interessante Herausforderung beim Styling, da sie flach sind und es nichts gibt, was die Gruppen von `dt`- und `dd`-Elementen umgibt. In meinem Beispiel lasse ich die automatische Platzierung die Elemente platzieren, habe allerdings Klassen, die ein `dt` in Spalte 1 und ein `dd` in Spalte 2 platzieren – das stellt sicher, dass Begriffe auf einer Seite und Definitionen auf der anderen Seite erscheinen – egal wie viele von jedem vorhanden sind.

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

## Was kann man mit der automatischen Platzierung (noch) nicht machen?

Es gibt ein paar Dinge, die oft als Fragen auftauchen. Derzeit können wir beispielsweise nicht einfach jedes andere Gitterzelle mit unseren Elementen ansprechen. Ein verwandtes Problem könnte Ihnen bereits in den Sinn gekommen sein, wenn Sie den letzten Leitfaden zu benannten Linien im Grid verfolgt haben. Es würde darum gehen, eine Regel zu definieren, die besagt: "Automatisch platzierte Elemente gegen die nächste Linie namens 'n'", und das Grid würde dann andere Linien überspringen. Es gibt [ein aufgeworfenes Problem in Bezug auf diese Sache](https://github.com/w3c/csswg-drafts/issues/796) im CSSWG GitHub-Repository, und Sie wären willkommen, Ihre eigenen Anwendungsfälle dazu beizutragen.

Es kann sein, dass Ihnen eigene Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts einfallen. Wenn dies der Fall ist, erheben Sie diese als Probleme oder fügen Sie einem bestehenden Problem hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird dazu beitragen, zukünftige Versionen der Spezifikation zu verbessern.
