---
title: Grundkonzepte des Grid-Layouts
short-title: Basic concepts
slug: Web/CSS/Guides/Grid_layout/Basic_concepts
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um wichtige Seitenbereiche oder kleine Benutzeroberflächenelemente anzulegen. Dieser Leitfaden führt in das CSS-Grid-Layout und die Terminologie ein, die Teil der CSS-Grid-Layout-Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie ausführlicher erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz von sich kreuzenden horizontalen und vertikalen Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Grid gesetzt werden. Das CSS-Grid-Layout verfügt über folgende Eigenschaften:

### Feste und flexible Track-Größen

Sie können ein Grid mit festen Track-Größen erstellen – zum Beispiel in Pixeln. Dies setzt das Grid auf den angegebenen Pixelwert, der zu dem gewünschten Layout passt. Sie können auch ein Grid mit flexiblen Größen erstellen, indem Sie Prozentsätze oder die für diesen Zweck entworfene Einheit [`fr`](#die_fr-einheit) verwenden.

### Elementplatzierung

Sie können Elemente an einem genauen Ort im Grid platzieren, indem Sie Liniennummern, Namen oder ein Bereich des Grids anvisieren. Das Grid enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, denen keine explizite Position im Grid vergeben wurde.

### Erstellung zusätzlicher Tracks zur Aufnahme von Inhalten

Sie können ein explizites Grid mit einem Grid-Layout definieren. Die durch das Grid-Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, wie in einen Container passen" sind enthalten.

### Kontrollierte Ausrichtung

CSS-Grid-Layout und [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment)-Funktionen ermöglichen es uns, zu steuern, wie die Elemente ausgerichtet werden, sobald sie in einem Grid-Bereich platziert sind, und wie das gesamte Grid ausgerichtet wird.

### Steuerung überlappender Inhalte

Mehr als ein Element kann in eine Gitterzelle oder einen Bereich gesetzt werden, und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der Eigenschaft {{cssxref("z-index")}} gesteuert werden.

Grid ist eine leistungsstarke Layout-Methode, die, wenn sie mit anderen Teilen von CSS wie dem [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) kombiniert wird, Ihnen helfen kann, Layouts zu erstellen, die reaktionsschnell, flexibel und barrierefrei sind. Es beginnt alles mit der Erstellung eines Grids in Ihrem **{{Glossary("grid_container", "Grid-Container")}}**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` an einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Items_.

In diesem Beispiel haben wir ein umschließendes Div mit einer Klasse von `wrapper`. Darin sind fünf Kind-Elemente verschachtelt.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen den `.wrapper` mit `display: grid;` zu einem Grid-Container.

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

Alle direkten Kinder sind jetzt Grid-Items. In einem Webbrowser werden Sie keinen Unterschied sehen, wie diese Elemente angezeigt werden, bevor sie in ein Grid umgewandelt werden, da das Grid eine einspaltige Anordnung für die Elemente erstellt hat. Wenn Sie das Grid in den Entwicklertools Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und in den meisten Browsern wird auf diesem Element das Grid im Browserfenster überlagert.

![Verwendung des Grid-Highlighters in Firefox DevTools zur Anzeige eines Grids](1-grid-inspector.png)

Wenn Sie das CSS-Grid-Layout lernen und damit arbeiten, geben Ihnen Ihre Browser-Tools eine bessere Vorstellung davon, was visuell mit Ihren Grids passiert.

Wenn wir beginnen wollen, dies grid-ähnlicher zu machen, müssen wir Spuren hinzufügen.

## Grid-Tracks

Wir definieren Zeilen und Spalten in unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren {{Glossary("grid_tracks", "Grid-Tracks")}}. Ein _Grid-Track_ ist der Raum zwischen zwei benachbarten Linien im Grid. Das folgende Bild zeigt einen hervorgehobenen Track – dies ist der erste Zeilen-Track in unserem Grid.

![Ein Kasten mit 3 Grid-Items. Über den drei Elementen befindet sich ein hellgrüner Bereich, der der Track ist.](1_grid_track.png)

Grid-Tracks werden im [expliziten Grid](#implizite_und_explizite_grids) definiert, indem die Eigenschaften `grid-template-columns` und `grid-template-rows` oder die Shorthand-Properties `grid` oder `grid-template` verwendet werden. Tracks werden auch im impliziten Grid erzeugt, indem ein Grid-Item außerhalb der im expliziten Grid erstellten Tracks positioniert wird.

### Einfaches Beispiel

Wir können Spuren zu unserem früheren Beispiel hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spuren definieren.

Wir haben nun ein Grid mit drei 200-Pixel-breiten Spur-Spalten erstellt. Die Kind-Elemente werden auf diesem Grid angeordnet, je eins in jeder Gitterzelle.

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

Tracks können mit jeder Längeinheit definiert werden. Grid führt auch eine zusätzliche Längeinheit ein, um uns bei der Erstellung flexibler Grid-Tracks zu helfen. Die [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value)-Einheit stellt einen Bruchteil des verfügbaren Raums im Grid-Container dar. Die nächste Grid-Definition würde drei gleich breite Spuren erstellen, die sich entsprechend dem verfügbaren Platz vergrößern und verkleinern.

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

In diesem Beispiel erstellen wir eine Definition mit einem `2fr`-Track und dann zwei `1fr`-Tracks. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden dem ersten Track zugewiesen und jeweils ein Teil den nächsten beiden.

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

In diesem letzten Beispiel mischen wir absolut dimensionierte Tracks mit `fr`-Einheiten. Der erste Track ist `500px`, sodass die feste Breite vom verfügbaren Raum abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und proportional den beiden flexiblen Tracks zugewiesen.

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

### Track-Auflistungen mit repeat() Notation

Große Grids mit vielen Tracks können die [`repeat()`](/de/docs/Web/CSS/Reference/Values/repeat)-Notation verwenden, um die gesamte oder einen Teil der Liste der Grid-Tracks zu wiederholen. Zum Beispiel kann die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Auch geschrieben werden als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Repeat-Notation kann für einen Teil der Liste der Tracks verwendet werden. In diesem Beispiel erstellen wir ein Grid mit 8 Spalten; der erste Track ist `20px`, dann folgt ein sich wiederholender Abschnitt von 6 `1fr`-Tracks, und ein letzter `20px`-Track.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Repeat-Notation (`repeat()`) verwendet die Track-Auflistung, um ein wiederholendes Muster von Tracks zu erstellen. In diesem Beispiel wird das Grid 10 Tracks haben; ein `1fr`-Track wird von einem `2fr`-Track gefolgt, wobei dieses Muster fünfmal wiederholt wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Beim Erstellen unseres Beispiel-Grids definierten wir unsere Spalten-Tracks explizit mit der Eigenschaft {{cssxref("grid-template-columns")}}, wobei das Grid die Zeilen wie benötigt erstellt, um den Inhalt aufzunehmen. Die Spalten definieren das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert sind. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, wie etwa in den Zeilen durch das Zeichnen zusätzlicher Grid-Linien.

Wenn Sie etwas außerhalb des definierten Grids platzieren oder aufgrund der Inhaltsmenge mehr Grid-Tracks benötigt werden, erstellt das Grid Zeilen und Spalten im _impliziten Grid_. Diese impliziten Tracks sind standardmäßig automatisch bemessen, was bedeutet, dass die Größe der erstellten Zeilen oder Spalten sowohl vom Inhalt beeinflusst wird als auch vom verfügbaren freien Platz im Grid-Container. Das Schlüsselwort `auto` erlaubt es den generierten Tracks, Inhalt aufzunehmen und gleichzeitig den verfügbaren freien Platz zu teilen.

Sie können auch eine feste Größe für die Tracks definieren, die im impliziten Grid erstellt werden, mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}}.

In diesem Beispiel legen wir `grid-auto-rows: 200px` fest, wodurch die Tracks im impliziten Grid `200px` hoch sind.

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

### Track-Größenanpassung und minmax

Wenn wir ein explizites Grid einrichten oder die Größenanpassung für automatisch erstellte Zeilen oder Spalten definieren, möchten wir den Tracks möglicherweise eine Mindestgröße geben, aber auch sicherstellen, dass sie sich anpassen, um zusätzlichen Inhalt aufzunehmen. Beispielsweise möchten wir, dass unsere Zeilen nie kleiner als 100 Pixel werden, aber wenn unser Inhalt sich auf 300 Pixel Höhe ausdehnt, sollen sich die Zeilen auf diese Höhe strecken. Dies wird durch die Funktion {{cssxref("minmax()")}} gelöst.

In diesem Beispiel verwenden wir `minmax()` im Wert der Eigenschaft `grid-auto-rows`. Durch das Setzen von `grid-auto-rows: minmax(100px, auto);` werden automatisch erstellte Zeilen mindestens `100px` hoch sein und maximal `auto`. Das Setzen von `auto` als Höchstwert erlaubt es, dass der Track wächst, um seinen Inhalt aufzunehmen (bis zu seiner `max-content` Größe), und gleichzeitig den verfügbaren freien Platz im Grid-Container zu teilen.

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

## Grid-Linien

Es sollte beachtet werden, dass, wenn wir ein Grid definieren, wir die Grid-Tracks und nicht die Linien definieren. Das Grid stellt uns dann nummerierte Linien zur Verfügung, mit denen wir Elemente positionieren können. In unserem Grid mit drei Spalten und zwei Zeilen haben wir vier Spaltenlinien.

![Diagramm mit nummerierten Grid-Linien.](1_diagram_numbered_grid_lines.png)

Die Linien werden entsprechend der Schreibrichtung des Dokuments nummeriert. In einer Sprache, die von links nach rechts geschrieben wird, befindet sich Linie 1 auf der linken Seite des Grids. In einer Sprache, die von rechts nach links geschrieben wird, befindet sie sich auf der rechten Seite des Grids. Linien können auch benannt werden, was im [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)-Leitfaden behandelt wird.

### Gegen Linien positionierte Items

Das folgende Beispiel demonstriert eine grundlegende, auf Linien basierende Platzierung; bei der Platzierung eines Elements orientieren wir uns an der Linie und nicht an der Spur. Wir erkunden dies ausführlicher im [Grid-Layout mit auf Linien basierten Platzierungen](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)-Leitfaden.

In diesem Beispiel werden die ersten beiden Elemente auf unserem Grid mit drei Spuren mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} platziert. Von links nach rechts wird das erste Element an Linie 1 in der Spalte positioniert und spannt bis Linie 4 der Spalte, die in unserem Fall die ganz rechte Linie im Grid ist. Es beginnt bei Linie 1 der Zeile und endet bei Linie 3 der Zeile, spannt also zwei Zeilenspuren.

Das zweite Element beginnt an Linie 1 der Grid-Spalte und nimmt eine Spur ein. Das ist der Standardwert, sodass wir die Endlinie nicht angeben müssen. Es erstreckt sich auch über zwei Zeilenspuren von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente werden sich in leere Räume im Grid platzieren.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklertools, um zu sehen, wie die Elemente an den Linien des Grids positioniert sind.

### Shorthands zur Linienpositionierung

Die oben verwendeten ausführlichen Werte können für Spalten mit dem {{cssxref("grid-column")}} Shorthand und für Zeilen mit dem {{cssxref("grid-row")}} Shorthand in eine Zeile komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code geben, aber mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert nach der Endlinie.

Sie können den Endwert weglassen, wenn der Bereich nur eine Spur umfasst.

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

## Grid-Zellen

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Grid. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, legen sich die Kind-Elemente innerhalb der definierten Grid-Struktur jeweils in eine Zelle. Im Bild unten ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können sich sowohl über Zeilen als auch über Spalten erstrecken und so einen _Grid-Bereich_ bilden. Grid-Bereiche müssen rechteckig sein – es ist beispielsweise nicht möglich, einen Bereich in L-Form zu erstellen. Der hervorgehobene Grid-Bereich spannt sich über zwei Zeilen- und zwei Spalten-Spuren.

![Ein Grid-Bereich](1_grid_area.png)

## Fugen

_Fugen_ oder _Gassen_ zwischen den Gitterzellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Shorthand-Eigenschaft {{cssxref("gap")}}, erstellt werden. Im folgenden Beispiel fügen wir zwischen den Spalten einen Abstand von 10 Pixeln und zwischen den Zeilen einen Abstand von `1em` hinzu.

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

Der Platz, der für Abstände verwendet wird, wird berücksichtigt, bevor Platz den flexiblen Längeneinheiten `fr`-Spuren zugewiesen wird, und Lücken verhalten sich für Dimensionierungszwecke wie reguläre Grid-Tracks, jedoch können Sie nichts in eine Lücke setzen. In Bezug auf die positionsbasierte Platzierung handelt die Lücke wie eine dicke, transparente Linie.

## Verschachtelte Grids

Ein Grid-Item kann zu einem Grid-Container werden. Im folgenden Beispiel erweitern wir das zuvor gesehene Drei-Spalten-Grid mit zwei platzierten Items, indem wir Sub-Items zum ersten Grid-Item hinzufügen. Da diese verschachtelten Items keine direkten Kinder des Grids sind, nehmen sie nicht am Grid-Layout teil und werden somit im normalen Dokumentenfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir eine Track-Definition angeben und es wird auch zu einem Grid. Die Items legen sich dann auf diesem neuen Grid aus.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum Eltern-Grid. Wie Sie im Beispiel sehen können, hat es die {{cssxref("gap")}} des Eltern-Grids nicht geerbt und die Linien im verschachtelten Grid richten sich nicht an den Linien im Eltern-Grid aus.

### Subgrid

Neben regulären Grids können wir ein _Subgrid_ erstellen. Der `subgrid`-Wert erlaubt es uns, verschachtelte Grids zu erstellen, die die Track-Definition des Eltern-Grids verwenden.

Um sie zu verwenden, müssen wir das obige verschachtelte Grid-Beispiel bearbeiten, um die Track-Definition von `grid-template-columns: repeat(3, 1fr)` zu `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Tracks des Eltern-Grids, um Items anzuordnen.

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

## Überlagerung von Items mit z-index

Grid-Items können die gleiche Zelle einnehmen, und in diesem Fall können wir die Eigenschaft {{cssxref("z-index")}} verwenden, um die Reihenfolge zu kontrollieren, in der sich überlappende Items stapeln.

### Überlapping ohne z-index

Wenn wir zu unserem Beispiel mit nach Liniennummer bestimmten Items zurückkehren, können wir es ändern, um zwei Items überlappen zu lassen.

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

Das Item `box2` überlappt nun `box1`, es wird oben angezeigt, da es später in der Quellreihenfolge erscheint.

### Kontrolle der Reihenfolge

Wir können die Reihenfolge, in der sich Items stapeln, mit der Eigenschaft `z-index` steuern – genau wie bei positionierten Items. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` gestapelt.

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

In dieser Übersicht haben wir einen sehr kurzen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden und experimentieren Sie mit den Codebeispielen und gehen Sie weiter zum Leitfaden [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods), wo wir wirklich beginnen, die Details des CSS-Grid-Layouts zu vertiefen.
