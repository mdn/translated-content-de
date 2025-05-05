---
title: Grundkonzepte des Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: dc3adeee803356cfa74c456afb2323fcf4822e3e
---

{{CSSRef}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um große Seitenbereiche oder kleine Benutzeroberflächenelemente anzuordnen. Dieser Leitfaden führt das CSS Grid Layout und die Terminologie ein, die Teil der CSS Grid Layout Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie ausführlicher erläutert.

## Was ist ein Grid?

Ein Grid ist eine Menge sich kreuzender horizontaler und vertikaler Linien, die Reihen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Reihenlinien auf das Grid platziert werden. Das CSS Grid Layout bietet folgende Funktionen:

### Feste und flexible Spurgrößen

Sie können ein Grid mit festen Spurgrößen erstellen – beispielsweise indem Sie Pixel verwenden. Dies setzt das Grid auf die angegebene Pixelgröße, die dem gewünschten Layout entspricht. Sie können auch ein Grid mit flexiblen Größen mit Prozentangaben oder mit der [`fr`](#die_fr-einheit) Einheit erstellen, die für diesen Zweck entwickelt wurde.

### Elementplatzierung

Sie können Elemente an einer präzisen Position im Grid platzieren, indem Sie Liniennummern, Namen oder durch Anvisieren eines Bereichs des Grids verwenden. Grid enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, denen keine explizite Position im Grid zugewiesen wurde.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Sie können mit dem Grid Layout ein explizites Grid definieren. Die im Grid Layout Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Reihen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, die in einen Container passen" sind enthalten.

### Ausrichtungssteuerung

CSS Grid Layout und [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Funktionen ermöglichen es uns, zu steuern, wie die Elemente ausgerichtet werden, sobald sie auf einem Rasterbereich platziert sind, und wie das gesamte Raster ausgerichtet ist.

### Steuerung von überlappenden Inhalten

Mehr als ein Element kann in eine Rasterzelle oder einen Bereich gesetzt werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}} Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Layoutmethode, die, kombiniert mit anderen Teilen von CSS wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), Ihnen helfen kann, Layouts zu erstellen, die anpassungsfähig, flexibel und zugänglich sind. Es beginnt alles mit der Erstellung eines Grids in Ihrem **{{Glossary("grid_container", "grid container")}}**.

## Raster-Container

Wir erstellen einen _Raster-Container_, indem wir `display: grid` oder `display: inline-grid` auf einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Raster-Elementen_.

In diesem Beispiel haben wir ein enthaltenes Div mit einer Klasse von `wrapper`. Darin verschachtelt sind fünf Kindelemente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen das `.wrapper` zu einem Raster-Container, indem wir `display: grid;` verwenden.

```css
.wrapper {
  display: grid;
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

{{ EmbedLiveSample('The_Grid_container', '200', '330') }}

Alle direkten Kinder sind nun Raster-Elemente. In einem Webbrowser sehen Sie keinen Unterschied, wie diese Elemente angezeigt werden, bevor sie in ein Raster umgewandelt wurden, da das Raster einspaltig für die Elemente erstellt wurde. Wenn Sie das Raster in den Entwicklerwerkzeugen Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf und in den meisten Browsern wird das Raster auf diesem Element im Browserfenster überlagert.

![Verwendung des Raster-Highlightes in Firefox DevTools zur Anzeige eines Rasters](1-grid-inspector.png)

Während Sie lernen und dann mit CSS Grid Layout arbeiten, werden Ihnen Ihre Browser-Tools eine bessere Vorstellung davon vermitteln, was visuell mit Ihren Rastern passiert.

Wenn wir beginnen wollen, dies rasterähnlicher zu machen, müssen wir Spalten-Spuren hinzufügen.

## Raster-Spuren

Wir definieren Reihen und Spalten in unserem Raster mit den {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} Eigenschaften. Diese definieren {{Glossary("grid_tracks", "grid tracks")}}. Eine _Rasterspur_ ist der Raum zwischen zwei benachbarten Linien im Raster. Das untenstehende Bild zeigt eine hervorgehobene Spur – das ist die erste Reihe unserer Rasterspur.

![Ein Kasten mit 3 Raster-Elementen. Oberhalb der drei Elemente befindet sich ein durchgehender hellgrüner Bereich, der die Spur ist.](1_grid_track.png)

Rasterspuren werden im [expliziten Raster](#implizite_und_explizite_raster) durch die Verwendung der Eigenschaften `grid-template-columns` und `grid-template-rows` oder die Abkürzungen `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Raster erstellt, indem ein Raster-Element außerhalb der im expliziten Raster erstellten Spuren positioniert wird.

### Einfaches Beispiel

Wir können unseren früheren Beispielen Spalten-Spuren hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spalten-Spuren definieren.

Wir haben jetzt ein Raster mit drei 200-Pixel breiten Spalten-Spuren erstellt. Die Kindelemente werden auf diesem Raster jeweils in einer Rasterzelle angeordnet.

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
  grid-template-columns: 200px 200px 200px;
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

{{ EmbedLiveSample('Basic_example', '610', '140') }}

### Die fr-Einheit

Spuren können mit jeder Längeneinheit definiert werden. Raster führt auch eine zusätzliche Längeneinheit ein, um uns zu helfen, flexible Rasterspuren zu erstellen. Die [`fr`](/de/docs/Web/CSS/flex_value) Einheit repräsentiert einen Bruchteil des verfügbaren Raumes im Raster-Container. Die nächste Rasterdefinition würde drei gleich breite Spuren erstellen, die entsprechend dem verfügbaren Raum wachsen und schrumpfen.

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
  grid-template-columns: 1fr 1fr 1fr;
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

{{ EmbedLiveSample('The_fr_unit', '220', '140') }}

### Ungleiche Größen

In diesem Beispiel erstellen wir eine Definition mit einer `2fr` Spur und dann zwei `1fr` Spuren. Der verfügbare Raum wird in vier Teile unterteilt. Zwei Teile werden der ersten Spur zugewiesen und jeweils ein Teil den nächsten beiden Spuren.

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
  grid-template-columns: 2fr 1fr 1fr;
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

{{ EmbedLiveSample('Unequal_sizes', '220', '140') }}

### Mischen flexibler und absoluter Größen

In diesem letzten Beispiel mischen wir absolut große Spuren mit `fr` Einheiten. Die erste Spur ist `500px`, so dass die feste Breite vom verfügbaren Raum abgezogen wird. Der verbleibende Raum wird in drei unterteilt und proportional zu den beiden flexiblen Spuren zugewiesen.

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
  grid-template-columns: 500px 1fr 2fr;
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

{{ EmbedLiveSample('Mixing_flexible_and_absolute_sizes', '220', '140') }}

### Spuraufstellungen mit repeat() Notation

Große Raster mit vielen Spuren können die [`repeat()`](/de/docs/Web/CSS/repeat) Notation verwenden, um die gesamte oder einen Abschnitt der Liste der Rasterspuren zu wiederholen. Zum Beispiel kann die Rasterdefinition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Auch als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

geschrieben werden.

Die Wiederholungsnotation kann für einen Teil der Liste der Spuren verwendet werden. In diesem Beispiel erstellen wir ein 8-Spalten-Raster; die erste Spur ist `20px`, dann ein sich wiederholender Abschnitt von 6 `1fr` Spuren und eine abschließende `20px` Spur.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation (`repeat()`) verwendet die Spuraufstellung, um ein sich wiederholendes Muster von Spuren zu erstellen. In diesem Beispiel wird das Raster 10 Spuren haben; eine `1fr` Spur wird von einer `2fr` Spur gefolgt, wobei dieses Muster fünfmal wiederholt wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Raster

Bei der Erstellung unseres Beispielfeldrasters haben wir unsere Spalten-Spuren explizit mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert, wobei das Raster je nach Bedarf Reihen erstellt, um den Inhalt anzupassen. Die Spalten definieren das explizite Raster, während die Reihen Teil des impliziten Rasters sind.

Das _explizite Raster_ besteht aus Reihen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert sind. Das _implizite Raster_ erweitert das definierte explizite Raster, wenn Inhalte außerhalb dieses Rasters platziert werden, wie z. B. in den Reihen durch das Zeichnen zusätzlicher Rasterlinien.

Wenn Sie etwas außerhalb des definierten Rasters platzieren—oder aufgrund der Menge an Inhalten mehr Rasterspuren benötigt werden—erzeugt das Raster Reihen und Spalten im _impliziten Raster_. Diese Spuren werden standardmäßig automatisch dimensioniert, wodurch ihre Größe auf dem Inhalt basiert, der sich in ihnen befindet.

Man kann auch eine festgelegte Größe für die im impliziten Raster erstellten Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`, um sicherzustellen, dass die in diesem impliziten Raster erstellten Spuren `200px` hoch sind.

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
  grid-auto-rows: 200px;
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

{{ EmbedLiveSample('The_implicit_and_explicit_grid', '230', '450') }}

### Spurgrößen und minmax

Beim Einrichten eines expliziten Rasters oder beim Definieren der Größen für automatisch erstellte Reihen oder Spalten möchten wir möglicherweise den Spuren eine Mindestgröße geben, aber auch sicherstellen, dass sie sich erweitern, um den hinzugefügten Inhalt aufzunehmen. Zum Beispiel möchten wir vielleicht, dass unsere Reihen niemals kleiner als 100 Pixel zusammenbrechen, aber wenn unser Inhalt sich auf 300 Pixel in der Höhe erstreckt, dann möchten wir, dass sich die Reihe auf diese Höhe ausdehnt. Dies wird durch die {{cssxref("minmax", "minmax()")}} Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` innerhalb des `grid-auto-rows` Eigenschaftswerts. Indem wir `grid-auto-rows: minmax(100px, auto);` setzen, werden automatisch erstellte Reihen mindestens `100px` hoch sein und maximal `auto`. Die Größe `auto` als Maximalwert bedeutet, dass die Größe sich ausdehnt, um den Inhalt aufzunehmen, und die Reihe basierend auf der Zelle mit dem höchsten Inhalt dimensioniert wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
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

```html hidden
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>We have some more content.</p>
    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '270') }}

## Rasterlinien

Es sollte beachtet werden, dass, wenn wir ein Raster definieren, wir die Rasterspuren und nicht die Linien definieren. Grid gibt uns dann nummerierte Linien zur Verwendung bei der Positionierung von Elementen. In unserem Drei-Spalten, Zwei-Reihen Raster haben wir vier Spaltenlinien.

![Diagramm mit nummerierten Rasterlinien.](1_diagram_numbered_grid_lines.png)

Linien sind gemäß dem Schreibmodus des Dokuments nummeriert. In einer links-nach-rechts Sprache befindet sich Linie 1 auf der linken Seite des Grids. In einer rechts-nach-links Sprache befindet sie sich auf der rechten Seite des Grids. Linien können auch benannt werden, was im Leitfaden [grid layout using named grid lines](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) behandelt wird.

### Positionierung von Elementen gegen Linien

Das folgende Beispiel demonstriert eine grundlegende linienbasierte Platzierung; beim Platzieren eines Elements zielen wir auf die Linie und nicht auf die Spur. Dies wird ausführlicher im Leitfaden [grid layout using line-based placement](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) behandelt.

In diesem Beispiel werden die ersten beiden Elemente auf unserem Drei-Spalten-Track-Raster unter Verwendung der Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} platziert. Von links nach rechts wird das erste Element gegen die Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste rechte Linie im Raster ist. Es beginnt bei Zeilenlinie 1 und endet bei Zeilenlinie 3 und erstreckt sich somit über zwei Reihen-Spuren.

Das zweite Element beginnt an der Rasterspaltenlinie 1 und erstreckt sich über eine Spur. Dies ist der Standard, daher müssen wir die Endlinie nicht angeben. Es erstreckt sich auch über zwei Reihen-Spuren von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente platzieren sich in den leeren Bereichen auf dem Raster.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
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

{{ EmbedLiveSample('Positioning_items_against_lines', '230', '450') }}

Verwenden Sie den Rasterinspektor in Ihren Entwicklerwerkzeugen, um zu sehen, wie die Elemente gegenüber den Linien des Rasters positioniert sind.

### Kurzschrift zur Linienpositionierung

Die in der obigen Zeilenwert benutzten Langformen können für die Spalten in der {{cssxref("grid-column")}} Kurzschrift und für die Reihen in der {{cssxref("grid-row")}} Kurzschrift auf eine Zeile komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code ergeben, aber mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert nach der Endlinie.

Sie können den Endwert weglassen, wenn der Bereich nur über eine Spur verläuft.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.box2 {
  grid-column: 1;
  grid-row: 3 / 5;
}
```

## Rasterzellen

Eine _Rasterzelle_ ist die kleinste Einheit in einem Raster. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in den früheren Beispielen gesehen haben, werden, sobald ein Raster als Elternteil definiert ist, die Kindelemente in einer Zelle jedes definierten Rasters angeordnet. Im untenstehenden Bild ist die erste Zelle des Rasters hervorgehoben.

![Die erste Zelle des Rasters hervorgehoben](1_grid_cell.png)

## Rasterbereiche

Elemente können sowohl über Reihen- als auch über Spaltenzellen eine oder mehrere Zellen überspannen, und dies erzeugt einen _Rasterbereich_. Rasterbereiche müssen rechteckig sein – es ist nicht möglich, zum Beispiel einen L-förmigen Bereich zu erstellen. Der hervorgehobene Rasterbereich erstreckt sich über zwei Reihen- und zwei Spalten-Spuren.

![Ein Rasterbereich](1_grid_area.png)

## Abstände

_Abstände_ oder _Gassen_ zwischen Rasterzellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzform {{cssxref("gap")}}, erstellt werden. Im unteren Beispiel fügen wir einen 10-Pixel-Abstand zwischen den Spalten und einen `1em` Abstand zwischen den Reihen hinzu.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
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

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  column-gap: 10px;
  row-gap: 1em;
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

{{ EmbedLiveSample('Gutters') }}

Jeder Raum, der durch Abstände genutzt wird, wird berücksichtigt, bevor der Raum auf die flexiblen Längen `fr`-Spuren zugewiesen wird, und Abstände verhalten sich aus Größenperspektive wie eine reguläre Raster-Spur, jedoch können Sie nichts in einem Abstand platzieren. Im Hinblick auf die linienbasierte Platzierung fungiert der Abstand wie eine dicke, transparente Linie.

## Verschachtelung von Rastern

Ein Rasterelement kann zu einem Raster-Container werden. Im folgenden Beispiel erweitern wir das Drei-Spalten-Raster mit zwei zuvor positionierten Elementen und fügen dem ersten Raster-Element Unterelemente hinzu. Da diese verschachtelten Elemente keine direkten Kinder des Rasters sind, nehmen sie nicht an der Raster-Anordnung teil und werden daher im normalen Dokumentfluss angezeigt.

![Verschachteltes Raster im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Unterraster

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Spurdefinition geben, und es wird ebenfalls zu einem Raster. Die Elemente legen sich dann auf diesem neuen Raster an.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  gap: 3px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '250') }}

In diesem Fall hat das verschachtelte Raster keine Beziehung zum übergeordneten Element. Wie Sie im Beispiel sehen können, hat es nicht den {{cssxref("gap")}} des Elternteils geerbt und die Linien im verschachtelten Raster stimmen nicht mit den Linien im übergeordneten Raster überein.

### Subgrid

Zusätzlich zu regulären Rastern können wir _Subgrid_ erstellen. Der `subgrid` Wert ermöglicht es uns, verschachtelte Raster zu erstellen, die die Spurdefinition des übergeordneten Rasters verwenden.

Um sie zu verwenden, bearbeiten wir das obige verschachtelte Rasterbeispiel, um die Spurdefinition von `grid-template-columns: repeat(3, 1fr)` auf `grid-template-columns: subgrid` zu ändern. Das verschachtelte Raster verwendet dann die Spuren des übergeordneten Rasters, um Elemente anzuordnen.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
```

## Schichtung von Elementen mit z-index

Rasterelemente können dieselbe Zelle belegen, und in diesem Fall können wir die {{cssxref("z-index")}} Eigenschaft verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappung ohne z-index

Wenn wir zu unserem Beispiel mit durch Liniennummern positionierten Elementen zurückkehren, können wir dies so ändern, dass zwei Elemente sich überlappen.

```html
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
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

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Overlapping_without_z-index', '230', '460') }}

Das Element `box2` überlappt jetzt `box1` und wird oben angezeigt, da es später in der Quellreihenfolge kommt.

### Reihenfolge steuern

Wir können die Reihenfolge, in der Elemente stapeln, mit der `z-index` Eigenschaft steuern—genauso wie bei positionierten Elementen. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` im Stack angezeigt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}

.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
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

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

{{ EmbedLiveSample('Controlling_the_order', '230', '420') }}

## Nächste Schritte

In diesem Überblick haben wir einen sehr kurzen Blick auf die Möglichkeiten von Rasterlayouts geworfen. Untersuchen und spielen Sie mit den Codebeispielen und gehen dann weiter zum Leitfaden, [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods), wo wir wirklich beginnen werden, in die Details von CSS Grid Layout einzutauchen.
