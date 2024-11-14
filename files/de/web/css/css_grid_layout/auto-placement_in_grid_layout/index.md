---
title: Automatische Platzierung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Zusätzlich zur Möglichkeit, Elemente genau auf einem erstellten Grid zu platzieren, enthält die CSS-Grid-Layout-Spezifikation Regeln, die bestimmen, was passiert, wenn Sie ein Grid erstellen und einige oder alle Kind-Elemente nicht platzieren. Sie können die automatische Platzierung auf einfachste Weise erleben, indem Sie ein Grid auf einer Gruppe von Elementen erstellen.

## Standardplatzierung

Wenn Sie den Elementen keine Platzierungsinformationen geben, positionieren sie sich selbst auf dem Grid, eines in jeder Grid-Zelle.

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

Wie Sie im obigen Beispiel sehen können, legt ein Grid alle Kind-Elemente nacheinander in jede Grid-Zelle. Der Standardfluss ist, Elemente nach Zeilen zu ordnen. Das Grid platziert ein Element in jede Zelle von Zeile 1. Wenn Sie zusätzliche Zeilen mit der Eigenschaft `grid-template-rows` erstellt haben, wird das Grid weiterhin Elemente in diesen Zeilen platzieren. Wenn das Grid nicht genügend Zeilen im expliziten Grid hat, um alle Elemente zu platzieren, werden neue _implizite_ Zeilen erstellt.

### Größenanpassung von Zeilen im impliziten Grid

Der Standard für automatisch erstellte Zeilen im impliziten Grid ist, dass sie automatisch dimensioniert werden. Das bedeutet, dass sie den hinzugefügten Inhalt aufnehmen, ohne einen Überlauf zu verursachen.

Sie können jedoch die Größe dieser Zeilen mit der Eigenschaft `grid-auto-rows` steuern. Um beispielsweise alle erstellten Zeilen auf 100 Pixel Höhe zu setzen, würden Sie Folgendes verwenden:

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

Sie können {{cssxref("minmax","minmax()")}} in Ihrem Wert für {{cssxref("grid-auto-rows")}} verwenden, um Zeilen zu erstellen, die eine Mindestgröße haben, aber wachsen, um den Inhalt aufzunehmen, wenn er höher ist.

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

{{EmbedLiveSample('Sizing_rows_using_minmax', '500', '330')}}

### Größenanpassung von Zeilen mit einer Spurauflistung

Sie können auch eine Spurauflistung eingeben, die sich wiederholt. Die folgende Spurauflistung erstellt eine anfängliche implizite Zeile als 100 Pixel und eine zweite als `200px`. Dies wird so lange fortgesetzt, wie Inhalte zum impliziten Grid hinzugefügt werden.

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

Sie können das Grid auch bitten, Elemente spaltenweise automatisch zu platzieren. Verwenden Sie die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `column`. In diesem Fall fügt das Grid Elemente in Zeilen hinzu, die Sie mit {{cssxref("grid-template-rows")}} definiert haben. Wenn eine Spalte voll ist, wird zur nächsten expliziten Spalte übergegangen oder eine neue Spurenreihe im impliziten Grid erstellt. Wie bei impliziten Zeilensporen werden diese Spuren automatisch dimensioniert. Sie können die Größe von impliziten Spuren mit {{cssxref("grid-auto-columns")}} steuern, dies funktioniert genauso wie {{cssxref("grid-auto-rows")}}.

In diesem nächsten Beispiel habe ich ein Grid mit drei Zeilensporen von 200 Pixel Höhe erstellt. Ich platziere automatisch nach Spalte, und die erstellten Spalten haben eine Breite von 300 Pixel, dann eine Breite von 100 Pixel, bis genügend Spuren vorhanden sind, um alle Elemente aufzunehmen.

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

Ein Grid kann eine Mischung aus Elementen enthalten. Einige der Elemente können auf dem Grid positioniert sein, andere können automatisch platziert werden. Dies kann hilfreich sein, wenn die Reihenfolge der Elemente im Dokument der Reihenfolge auf dem Grid entspricht, sodass Sie möglicherweise keine CSS-Regeln schreiben müssen, um absolut alles zu platzieren. Die Spezifikation enthält einen langen Abschnitt, der den [Grid-Element-Platzierungsalgorithmus](https://drafts.csswg.org/css-grid/#auto-placement-algo) beschreibt. Für die meisten von uns reicht es jedoch aus, ein paar einfache Regeln für unsere Elemente zu beachten.

### Durch Reihenfolge modifizierte Dokumentenreihenfolge

Das Grid platziert Elemente, die keine Grid-Position haben, in einer in der Spezifikation als "durch Reihenfolge modifizierten Dokumentenreihenfolge" beschriebenen Weise. Das bedeutet, dass, wenn Sie die `order`-Eigenschaft verwendet haben, die Elemente nach dieser Reihenfolge platziert werden, nicht nach ihrer DOM-Reihenfolge. Andernfalls bleiben sie standardmäßig in der Reihenfolge, in der sie im Dokumentquelltext eingegeben wurden.

### Elemente mit Platzierungseigenschaften

Das erste, was das Grid tut, ist, alle Elemente zu platzieren, die eine Position haben. Im Beispiel unten habe ich 12 Grid-Elemente. Element 2 und Element 5 wurden mit der linienbasierten Platzierung auf dem Grid platziert. Sie können sehen, wie diese Elemente platziert sind, und die anderen Elemente dann automatisch in die Lücken platziert werden. Die automatisch platzierten Elemente platzieren sich vor den platzierten Elementen in DOM-Reihenfolge, sie beginnen nicht nach der Position eines vor ihnen platzierten Elements.

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

### Umgang mit Elementen, die sich über Spuren erstrecken

Sie können Platzierungseigenschaften verwenden, während Sie dennoch die automatische Platzierung nutzen. Im nächsten Beispiel habe ich das Layout durch das Setzen von Elementen 1, 5 und 9 (4n+1) so erweitert, dass sie sich sowohl für Zeilen als auch Spalten über zwei Spuren erstrecken. Ich mache dies mit den Eigenschaften {{cssxref("grid-column-end")}} und {{cssxref("grid-row-end")}}, indem ich deren Wert auf `span 2` setze. Das bedeutet, dass die Startlinie des Elements durch die automatische Platzierung gesetzt wird und die Endlinie sich über zwei Spuren erstrecken wird.

Sie können sehen, wie dadurch Lücken im Grid entstehen, denn für die automatisch platzierten Elemente, falls das Grid auf ein Element stößt, das nicht in eine Spur passt, bewegt es sich zur nächsten Zeile, bis es einen Platz findet, in den das Element passt.

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

Bisher schreitet das Grid, abgesehen von speziell platzierten Elementen, immer nach vorne und hält die Elemente in DOM-Reihenfolge. Dies ist im Allgemeinen das, was Sie wollen, zum Beispiel wenn Sie ein Formular erstellen, möchten Sie nicht, dass die Beschriftungen und Felder durcheinandergebracht werden, um eine Lücke zu füllen. Manchmal jedoch gestalten wir Dinge, die keine logische Reihenfolge haben, und wir möchten ein Layout erstellen, das keine Lücken aufweist.

Um dies zu tun, fügen Sie dem Container die Eigenschaft {{cssxref("grid-auto-flow")}} mit dem Wert `dense` hinzu. Dies ist dieselbe Eigenschaft, die Sie verwenden, um die Flussreihenfolge auf `column` zu ändern, also falls Sie in Spalten arbeiten, würden Sie beide Werte hinzufügen, `grid-auto-flow: column dense`.

Haben Sie dies getan, füllt das Grid die Lücken nun auf. Es bewegt sich durch das Grid und hinterlässt Lücken wie zuvor, aber wenn es ein Element findet, das in eine vorherige Lücke passt, wird es herausgenommen und außerhalb der DOM-Reihenfolge platziert, um es in die Lücke zu setzen. Wie bei jeder anderen Umordnung im Grid ändert dies nicht die logische Reihenfolge. Die Tab-Reihenfolge zum Beispiel folgt weiterhin der Dokumentenreihenfolge. Wir werden die möglichen Zugänglichkeitsprobleme des Grid-Layouts im [Grid-Layout und Zugänglichkeitsleitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility) betrachten, aber Sie sollten vorsichtig sein, wenn Sie diese Diskrepanz zwischen der visuellen Reihenfolge und der Anzeigereihenfolge schaffen.

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

{{EmbedLiveSample('Filling_in_the_gaps', '500', '730')}}

### Anonyme Grid-Elemente

In der Spezifikation gibt es einen Hinweis auf anonyme Grid-Elemente. Diese werden erstellt, wenn Sie eine Textfolge in Ihrem Grid-Container haben, die nicht in ein anderes Element eingeschlossen ist. Im unten stehenden Beispiel haben wir drei Grid-Elemente, vorausgesetzt, Sie haben das Elternteil mit einer Klasse von `grid` auf `display: grid` gesetzt. Das erste ist ein anonymes Element, da es kein umschließendes Markup hat; dieses Element wird immer gemäß den Regeln der automatischen Platzierung behandelt. Die anderen beiden sind Grid-Elemente, die in einem div eingeschlossen sind. Diese könnten automatisch platziert werden oder Sie könnten diese mit einer Positionierungsmethode auf Ihrem Grid platzieren.

```html
<div class="grid">
  I am a string and will become an anonymous item
  <div>A grid item</div>
  <div>A grid item</div>
</div>
```

Anonyme Elemente werden immer automatisch platziert, da es keine Möglichkeit gibt, sie direkt anzusprechen. Falls Sie aus irgendeinem Grund nicht umschlossenen Text in Ihrem Grid haben, seien Sie sich bewusst, dass er irgendwo unerwartet erscheinen könnte, da er gemäß den Regeln der automatischen Platzierung platziert wird.

### Anwendungsfälle für automatische Platzierung

Die automatische Platzierung ist nützlich, wenn Sie eine Sammlung von Elementen haben. Dies könnten Elemente sein, die keine logische Reihenfolge haben, wie eine Fotogalerie oder Produktliste. In diesem Fall könnten Sie den dichten Packmodus verwenden, um alle Löcher in Ihrem Grid zu füllen. In meinem Bildgalerie-Beispiel habe ich einige Landschafts- und einige Porträtbilder. Ich habe Landschaftsbilder – mit einer Klasse von `landscape` so eingestellt, dass sie sich über zwei Spuren erstrecken. Dann verwende ich `grid-auto-flow: dense`, um ein dicht gepacktes Grid zu erstellen.

Versuchen Sie, die Zeile `grid-auto-flow: dense` zu entfernen, um zu sehen, wie sich der Inhalt neu anordnet, um Lücken im Layout zu hinterlassen.

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

Die automatische Platzierung kann Ihnen auch helfen, Schnittstellenelemente zu gestalten, die eine logische Ordnung haben. Ein Beispiel ist die Definitionsliste im nächsten Beispiel. Definitionslisten sind eine interessante Herausforderung, weil sie flach sind und es nichts gibt, das die Gruppen von `dt`- und `dd`-Elementen umschließt. In meinem Beispiel lasse ich die automatische Platzierung die Elemente platzieren, jedoch habe ich Klassen, die einen `dt` in Spalte 1 und einen `dd` in Spalte 2 anfangen lassen. Dies stellt sicher, dass Begriffe auf einer Seite und Definitionen auf der anderen Seite stehen – egal, wie viele von jedem vorhanden sind.

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

Es gibt ein paar Dinge, die häufig als Fragen aufkommen. Derzeit können wir zum Beispiel nicht dazu in der Lage sein, wie wir jedes zweite Feld des Grids mit unseren Elementen ansprechen. Ein verwandtes Problem kommt Ihnen möglicherweise bereits in den Sinn, wenn Sie den letzten Leitfaden über benannte Linien im Grid verfolgt haben. Es wäre eine Regel zu definieren, die sagt: "Platziere Elemente automatisch gegen die nächste Linie namens „n“, und das Grid würde dann andere Linien überspringen. Auf dem CSSWG GitHub-Repository gibt es [ein Thema dazu](https://github.com/w3c/csswg-drafts/issues/796), und Sie wären eingeladen, Ihre eigenen Anwendungsfälle dazu hinzuzufügen.

Es kann sein, dass Sie Ihre eigenen Anwendungsfälle für die automatische Platzierung oder einen anderen Teil des Grid-Layouts haben. Wenn Sie welche haben, erheben Sie diese als Themen oder fügen Sie sie einem bestehenden Thema hinzu, das Ihren Anwendungsfall lösen könnte. Dies wird dazu beitragen, zukünftige Versionen der Spezifikation zu verbessern.
