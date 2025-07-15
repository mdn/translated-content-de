---
title: Grundkonzepte des Grid-Layouts
short-title: Basic concepts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Rastersysteme können verwendet werden, um größere Seitenbereiche oder kleine Benutzeroberflächenelemente zu layouten. Dieser Leitfaden führt in das CSS-Grid-Layout und die Terminologie ein, die Teil der CSS-Grid-Layout-Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie ausführlicher erklärt.

## Was ist ein Raster?

Ein Raster ist ein Satz von sich kreuzenden horizontalen und vertikalen Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Raster platziert werden. Das CSS-Grid-Layout bietet folgende Funktionen:

### Feste und flexible Streckengrößen

Sie können ein Raster mit festen Streckengrößen erstellen – beispielsweise durch die Verwendung von Pixeln. Dies legt das Raster auf den angegebenen Pixelwert fest, der Ihrem gewünschten Layout entspricht. Sie können auch ein Raster mit flexiblen Größen mittels Prozentsätzen oder der für diesen Zweck entworfenen Einheit [`fr`](#die_fr-einheit) erstellen.

### Elementplatzierung

Sie können Elemente an einer genauen Position im Raster basierend auf Liniennummern, Namen oder durch das Anvisieren eines Bereichs im Raster platzieren. Das Raster enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, die keine explizite Position auf dem Raster erhalten haben.

### Erstellung zusätzlicher Strecken zur Aufnahme von Inhalt

Sie können ein explizites Raster mit dem Grid-Layout definieren. Die vom Grid-Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie "so viele Spalten hinzufügen, wie in einen Container passen" sind enthalten.

### Ausrichtungssteuerung

CSS Grid Layout und [CSS Box Alignement](/de/docs/Web/CSS/CSS_box_alignment) Funktionen ermöglichen es uns, zu steuern, wie die Elemente ausgerichtet werden, nachdem sie in einen Rasterbereich eingefügt wurden, und wie das gesamte Raster ausgerichtet ist.

### Steuerung von überlappendem Inhalt

Mehr als ein Element kann in eine Rasterzelle oder einen Bereich eingefügt werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}}-Eigenschaft kontrolliert werden.

Grid ist eine leistungsstarke Methode, um Layouts zu erstellen, die in Kombination mit anderen Teilen von CSS, wie z.B. [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), dabei helfen kann, Layouts zu erstellen, die reaktionsfähig, flexibel und zugänglich sind. Alles beginnt mit der Erstellung eines Rasters in Ihrem **{{Glossary("grid_container", "grid container")}}**.

## Raster-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf ein Element anwenden. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Elementen_.

In diesem Beispiel haben wir ein umschließendes div mit der Klasse `wrapper`. Darin sind fünf untergeordnete Elemente verschachtelt.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen den `.wrapper` zum Grid-Container, indem wir `display: grid;` verwenden.

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

Alle direkten Kinder sind jetzt Grid-Elemente. In einem Webbrowser sehen Sie keinen Unterschied, wie diese Elemente angezeigt werden, bevor sie in ein Raster umgewandelt werden, da das Raster für die Elemente einspaltig ist. Wenn Sie das Raster in den Entwicklertools Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und in den meisten Browsern wird das Raster auf diesem Element im Browserfenster überlagert.

![Verwendung des Raster-Hervorhebers in Firefox DevTools, um ein Raster anzuzeigen](1-grid-inspector.png)

Wenn Sie das CSS-Grid-Layout lernen und dann damit arbeiten, geben Ihnen Ihre Browser-Tools eine bessere Vorstellung davon, was mit Ihren Rastern visuell passiert.

Wenn wir beginnen möchten, dies rasterartiger zu gestalten, müssen wir Spaltenstrecken hinzufügen.

## Rasterstrecken

Wir definieren Zeilen und Spalten auf unserem Raster mit den {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} Eigenschaften. Diese definieren {{Glossary("grid_tracks", "Rasterstrecken")}}. Eine _Rasterstrecke_ ist der Raum zwischen zwei benachbarten Linien im Raster. Das Bild unten zeigt eine hervorgehobene Strecke – dies ist die erste Zeilenstrecke in unserem Raster.

![Ein Kasten mit 3 Rasterelementen. Über den drei Elementen befindet sich ein festes hellgrünes Gebiet, das die Strecke darstellt.](1_grid_track.png)

Rasterstrecken werden im [expliziten Raster](#implizite_und_explizite_raster) definiert, indem die `grid-template-columns` und `grid-template-rows` Eigenschaften oder die Kurzschreibweisen `grid` oder `grid-template` verwendet werden. Strecken werden auch im impliziten Raster erstellt, indem ein Rasterelement außerhalb der im expliziten Raster erstellten Strecken positioniert wird.

### Einfaches Beispiel

Wir können Spaltenstrecken zu unserem früheren Beispiel hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spaltenstrecken definieren.

Wir haben jetzt ein Raster mit drei 200 Pixel breiten Spaltenstrecken erstellt. Die untergeordneten Elemente werden in diesem Raster positioniert, ein Element in jede Rasterzelle.

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

Strecken können mit jeder Längeneinheit definiert werden. Das Raster führt auch eine zusätzliche Längeneinheit ein, um uns beim Erstellen flexibler Rasterstrecken zu unterstützen. Die [`fr`](/de/docs/Web/CSS/flex_value) Einheit stellt einen Bruchteil des verfügbaren Raums im Rastercontainer dar. Die nächste Rasterdefinition würde drei gleich breite Strecken erstellen, die sich entsprechend dem verfügbaren Platz vergrößern und verkleinern.

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

In diesem Beispiel erstellen wir eine Definition mit einer `2fr` Strecke und dann zwei `1fr` Strecken. Der verfügbare Platz wird in vier Teile geteilt. Zwei Teile werden der ersten Strecke und jeweils einem Teil den nächsten zwei Strecken zugewiesen.

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

### Mischen von flexiblen und absoluten Größen

In diesem letzten Beispiel mischen wir absolut dimensionierte Strecken mit `fr` Einheiten. Die erste Strecke ist `500px`, daher wird die feste Breite vom verfügbaren Raum abgezogen. Der verbleibende Platz wird in drei Teile geteilt und proportional den zwei flexiblen Strecken zugewiesen.

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

### Streckenlisten mit repeat()-Notation

Große Raster mit vielen Strecken können die [`repeat()`](/de/docs/Web/CSS/repeat) Notation verwenden, um die gesamte oder einen Teil der Liste der Rasterstrecken zu wiederholen. Zum Beispiel könnte die Rasterdefinition:

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

Die Wiederholungsnotation kann für einen Teil der Liste der Strecken verwendet werden. In diesem Beispiel erstellen wir ein Raster mit 8 Spalten; die anfängliche Strecke ist `20px`, dann ein wiederholter Abschnitt von 6 `1fr` Strecken und eine abschließende `20px` Strecke.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation (`repeat()`) verwendet die Streckenlisten, um ein sich wiederholendes Muster von Strecken zu erstellen. In diesem Beispiel hat das Raster 10 Strecken; auf eine `1fr` Strecke folgt eine `2fr` Strecke, wobei dieses Muster fünf Mal wiederholt wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Raster

Beim Erstellen unseres Beispielrasters haben wir unsere Spaltenstrecken mit der {{cssxref("grid-template-columns")}} Eigenschaft explizit definiert, wobei das Raster bei Bedarf Zeilen erstellt, um den Inhalt zu passen. Die Spalten definieren das explizite Raster, während die Zeilen Teil des impliziten Rasters sind.

Das _explizite Raster_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert wurden. Das _implizite Raster_ erweitert das definierte explizite Raster, wenn Inhalt außerhalb dieses Rasters platziert wird, beispielsweise indem zusätzliche Rasterlinien gezogen werden.

Wenn Sie etwas außerhalb des definierten Rasters platzieren – oder aufgrund der Menge an Inhalt mehr Rasterstrecken erforderlich sind – dann erstellt das Raster im _impliziten Raster_ Zeilen und Spalten. Diese Strecken werden standardmäßig automatisch dimensioniert, wodurch ihre Größe basierend auf dem Inhalt, der sich in ihnen befindet, bestimmt wird.

Sie können auch eine festgelegte Größe für Strecken definieren, die im impliziten Raster mit den {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} Eigenschaften erstellt wurden.

In diesem Beispiel legen wir `grid-auto-rows: 200px` fest, wodurch die im impliziten Raster erstellten Strecken `200px` hoch sind.

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

### Strecken- und minmax-Dimensionierung

Beim Einrichten eines expliziten Rasters oder beim Definieren der Dimensionierung für automatisch erstellte Zeilen oder Spalten möchten wir den Strecken möglicherweise eine Mindestgröße geben, gleichzeitig aber sicherstellen, dass sie sich ausdehnen, um den hinzugefügten Inhalt zu passen. Beispielsweise möchten wir möglicherweise, dass sich unsere Zeilen niemals auf weniger als 100 Pixel reduzieren, aber wenn unser Inhalt auf 300 Pixel in der Höhe gedehnt wird, möchten wir, dass sich die Zeilen auf diese Höhe ausdehnen. Dies wird durch die {{cssxref("minmax", "minmax()")}} Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` im Wert der `grid-auto-rows` Eigenschaft. Indem wir `grid-auto-rows: minmax(100px, auto);` festlegen, werden automatisch erstellte Zeilen mindestens `100px` hoch sein und haben eine maximale Höhe von `auto`. Die Festlegung von `auto` als maximalen Wert bedeutet, dass die Größe an den Inhalt angepasst wird, wobei die Zeile basierend auf der Zelle mit dem höchsten Inhalt dimensioniert wird.

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

Es sollte beachtet werden, dass wir beim Definieren eines Rasters die Rasterstrecken und nicht die Linien definieren. Das Raster gibt uns dann nummerierte Linien, die wir beim Positionieren von Elementen verwenden können. In unserem drei Spalten, zwei Zeilen fassenden Raster haben wir vier Spaltenlinien.

![Diagramm, das nummerierte Rasterlinien zeigt.](1_diagram_numbered_grid_lines.png)

Die Linien werden entsprechend dem Schreibmodus des Dokuments nummeriert. In einer von links nach rechts ausgerichteten Sprache befindet sich die Linie 1 auf der linken Seite des Rasters. In einer von rechts nach links ausgerichteten Sprache befindet sie sich auf der rechten Seite des Rasters. Linien können auch benannt werden, was im [Grid Layout Using Named Grid Lines](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) Leitfaden diskutiert wird.

### Elemente entlang der Linien positionieren

Das folgende Beispiel demonstriert die grundlegende Platzierung auf der Basis von Linien; wenn ein Element platziert wird, zielen wir eher auf die Linie als auf die Strecke. Wir untersuchen dies ausführlicher im [Grid Layout Using Line-based Placement](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) Leitfaden.

In diesem Beispiel werden die ersten beiden Elemente in unserem drei Spalten umfassenden Raster mit den {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} Eigenschaften platziert. Von links nach rechts wird das erste Element an die Spaltenlinie 1 platziert und erstreckt sich zur Spaltenlinie 4, die in unserem Fall die ganz rechte Linie im Raster ist. Es beginnt bei Zeilenlinie 1 und endet bei Zeilenlinie 3 und erstreckt sich daher über zwei Zeilenstrecken.

Das zweite Element beginnt an der Rasterspaltenlinie 1 und erstreckt sich über eine Strecke. Dies ist die Standardeinstellung, sodass wir die Endlinie nicht angeben müssen. Es erstreckt sich auch über zwei Zeilenstrecken von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente werden sich in leere Räume im Raster platzieren.

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

Verwenden Sie den Rasterinspektor in Ihren Entwicklertools, um zu sehen, wie die Elemente gegen die Linien des Rasters positioniert sind.

### Kurzschreibweisen zur Linienpositionierung

Die oben verwendeten ausführlichen Werte können für Spalten mit der {{cssxref("grid-column")}} Kurzschreibweise und für Zeilen mit der {{cssxref("grid-row")}} Kurzschreibweise auf eine Zeile komprimiert werden. Das folgende Beispiel führt zur gleichen Positionierung wie der vorherige Code, jedoch mit weitaus weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

Sie können den Endwert weglassen, wenn der Bereich nur eine Strecke überspannt.

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

Eine _Rasterzelle_ ist die kleinste Einheit in einem Raster. Konzeptionell ähnelt sie einer Tabellenspalte. Wie wir in unseren früheren Beispielen gesehen haben, platziert sich ein definiertes Raster als Elternteil so, dass sich die untergeordneten Elemente automatisch in einer Zelle jedes der definierten Raster positionieren. Im folgenden Bild ist die erste Zelle des Rasters hervorgehoben.

![Die erste Zelle des Rasters hervorgehoben](1_grid_cell.png)

## Rasterbereiche

Elemente können sowohl zeilen- als auch spaltenweise über eine oder mehrere Zellen hinwegspannen, und dies schafft einen _Rasterbereich_. Rasterbereiche müssen rechteckig sein – es ist beispielsweise nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Rasterbereich erstreckt sich über zwei Zeilen- und zwei Spaltenstrecken.

![Ein Rasterbereich](1_grid_area.png)

## Rinnen

_Rinnen_ oder _Strecken_ zwischen den Rasterzellen können erstellt werden, indem die {{cssxref("column-gap")}} und {{cssxref("row-gap")}} Eigenschaften oder die Kurzschreibweise {{cssxref("gap")}} verwendet werden. Im folgenden Beispiel fügen wir einen 10-Pixel-Spalt zwischen den Spalten und einen `1em` Spalt zwischen den Zeilen hinzu.

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

Jeglicher Raum, der durch Spalten beansprucht wird, wird berücksichtigt, bevor Platz den flexiblen Längen `fr` Strecken zugeteilt wird, und Spalten wirken zum Zwecke der Dimensionierung wie eine reguläre Rasterstrecke, allerdings können Sie nichts in einer Spalte platzieren. In Bezug auf die positionierung auf der Basis von Linien wirkt die Spalte wie eine dicke, transparente Linie.

## Schachtelung von Rastern

Ein Rasterelement kann selbst zu einem Rastercontainer werden. Im folgenden Beispiel erweitern wir das dreispaltige Raster mit zwei zuvor positionierten Elementen und fügen untergeordnete Elemente zum ersten Rasterelement hinzu. Da diese verschachtelten Elemente keine direkten Kinder des Rasters sind, nehmen sie nicht am Rasterlayout teil und werden daher im normalen Dokumentfluss dargestellt.

![Geschachteltes Raster im Fluss](1_nested_grids_in_flow.png)

### Schachtelung ohne Subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Streckendefinition geben, und es wird ebenfalls zu einem Raster. Die Elemente werden dann auf diesem neuen Raster ausgelegt.

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

In diesem Fall hat das verschachtelte Raster keine Beziehung zum übergeordneten Raster. Wie Sie im Beispiel sehen können, hat es nicht die {{cssxref("gap")}}-Eigenschaft des übergeordneten Rasters geerbt, und die Linien im verschachtelten Raster stimmen nicht mit den Linien im übergeordneten Raster überein.

### Subgrid

Neben regulären Rastern können wir auch _Subgrids_ erstellen. Der `subgrid` Wert ermöglicht es uns, verschachtelte Raster zu erstellen, die die Streckendefinition des übergeordneten Rasters verwenden.

Um sie zu verwenden, bearbeiten wir das obige Beispiel des verschachtelten Rasters, um die Streckendefinition von `grid-template-columns: repeat(3, 1fr)` zu `grid-template-columns: subgrid` zu ändern. Das verschachtelte Raster verwendet dann die Strecken des übergeordneten Rasters, um Elemente anzuordnen.

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

Rasterelemente können dieselbe Zelle einnehmen, und in diesem Fall können wir die {{cssxref("z-index")}} Eigenschaft verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappung ohne z-index

Wenn wir zu unserem Beispiel mit den nach Liniennummer positionierten Elementen zurückkehren, können wir dies ändern, um zwei Elemente überlappen zu lassen.

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

Das Element `box2` überlappt jetzt `box1`, es wird oben angezeigt, da es später in der Quellreihenfolge auftritt.

### Steuerung der Reihenfolge

Wir können die Reihenfolge, in der sich Elemente stapeln, mit der `z-index` Eigenschaft steuern – genau wie positionierte Elemente. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es in der Stapelung unter `box1` angezeigt.

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

In diesem Überblick haben wir einen sehr schnellen Blick auf die Möglichkeiten von Rasterlayouts geworfen. Erkunden und spielen Sie mit den Codebeispielen und gehen Sie dann zum Leitfaden [Beziehung von Grid Layout mit anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods) über, wo wir wirklich beginnen werden, die Details des CSS-Grid-Layouts zu vertiefen.
