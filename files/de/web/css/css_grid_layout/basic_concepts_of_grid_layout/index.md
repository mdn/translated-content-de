---
title: Grundlegende Konzepte des Grid-Layouts
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Raster in CSS ein. Grids können verwendet werden, um große Bereiche einer Seite oder kleine Benutzeroberflächenelemente zu gestalten. Dieser Leitfaden führt in das CSS Grid Layout und die Terminologie ein, die Teil der CSS Grid Layout-Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie ausführlicher erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz von sich kreuzenden horizontalen und vertikalen Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Grid gesetzt werden. Das CSS Grid Layout hat folgende Merkmale:

### Feste und flexible Spurgrößen

Sie können ein Grid mit festen Spurgrößen erstellen – zum Beispiel in Pixeln. Dies setzt das Grid auf die angegebene Pixelgröße, die zu dem Layout passt, das Sie sich wünschen. Sie können auch ein Grid mit flexiblen Größen mit Prozentangaben oder mit der für diesen Zweck entworfenen Einheit [`fr`](#die_fr-einheit) erstellen.

### Platzierung von Elementen

Sie können Elemente an einem präzisen Ort im Grid platzieren, indem Sie Zeilennummern, Namen oder durch das Anvisieren eines bestimmten Bereichs des Grids verwenden. Grid enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, die keine explizite Position im Grid haben.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Sie können ein explizites Grid mit Grid Layout definieren. Die vom Grid Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, wie in einen Container passen" sind enthalten.

### Ausrichtungssteuerung

CSS Grid Layout und die [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Funktionen ermöglichen es uns zu steuern, wie die Elemente ausgerichtet sind, sobald sie in einem Grid-Bereich platziert sind, und wie das gesamte Grid ausgerichtet ist.

### Steuerung überlappender Inhalte

Mehr als ein Element kann in eine Grid-Zelle oder einen Bereich platziert werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}} Eigenschaft gesteuert werden.

Grid ist eine mächtige Layout-Methode, die, wenn sie mit anderen Teilen von CSS wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kombiniert wird, Ihnen helfen kann, Layouts zu erstellen, die responsiv, flexibel und zugänglich sind. Alles beginnt damit, ein Grid in Ihrem **{{Glossary("grid_container", "Grid-Container")}}** zu erstellen.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf ein Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Items_.

In diesem Beispiel haben wir ein umhüllendes div mit einer Klasse von `wrapper`. Darin verschachtelt sind fünf Kindelemente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen die `.wrapper` zu einem Grid-Container, indem wir `display: grid;` verwenden.

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

Alle direkten Kinder sind jetzt Grid-Items. In einem Webbrowser werden Sie keinen Unterschied in der Anzeige dieser Elemente sehen, bevor Sie sie in ein Grid verwandeln, da Grid ein einspaltiges Grid für die Elemente erstellt hat. Wenn Sie das Grid in den Entwicklerwerkzeugen Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf und in den meisten Browsern wird das Grid auf diesem Element im Browserfenster überlagert.

![Mit dem Grid-Hervorheber in Firefox DevTools ein Grid anzeigen](1-grid-inspector.png)

Während Sie das CSS Grid Layout erlernen und damit arbeiten, werden Ihnen Ihre Browserwerkzeuge eine bessere Vorstellung davon geben, was mit Ihren Grids visuell passiert.

Wenn wir möchten, dass dies mehr wie ein Grid aussieht, müssen wir Spaltenspur hinzufügen.

## Grid-Spuren

Wir definieren Zeilen und Spalten in unserem Grid mit den {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} Eigenschaften. Diese definieren {{Glossary("grid_tracks", "Grid-Spuren")}}. Eine _Grid-Spur_ ist der Raum zwischen zwei benachbarten Linien im Grid. Das folgende Bild zeigt eine hervorgehobene Spur – dies ist die erste Zeilenspur in unserem Grid.

![Eine Box mit 3 Grid-Items. Über den drei Elementen befindet sich ein solid hellgrüner Bereich, der die Spur ist.](1_grid_track.png)

Grid-Spuren werden im [expliziten Grid](#implizite_und_explizite_grids) durch die Verwendung der `grid-template-columns` und `grid-template-rows` Eigenschaften oder die Kurzformen `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Grid angelegt, indem ein Grid-Item außerhalb der im expliziten Grid erstellten Spuren positioniert wird.

### Einfaches Beispiel

Wir können unserem früheren Beispiel Spaltenspur hinzufügen, indem wir die `grid-template-columns` Eigenschaft hinzufügen, und dann die Größe der Spaltenspuren definieren.

Wir haben jetzt ein Grid mit drei 200-Pixel-breiten Spaltenspuren erstellt. Die Kind-Elemente werden auf diesem Grid in jeweils einer Grid-Zelle angeordnet.

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

Spuren können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, um uns bei der Erstellung flexibler Grid-Spuren zu helfen. Die [`fr`](/de/docs/Web/CSS/flex_value) Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container. Die nächste Grid-Definition würde drei gleich breite Spuren schaffen, die je nach verfügbarem Raum wachsen und schrumpfen.

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

In diesem Beispiel erstellen wir eine Definition mit einer `2fr` Spur und dann zwei `1fr` Spuren. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden der ersten Spur und je ein Teil den nächsten beiden Spuren zugewiesen.

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

In diesem letzten Beispiel mischen wir absolut dimensionierte Spuren mit `fr` Einheiten. Die erste Spur ist `500px`, daher wird die feste Breite vom verfügbaren Raum abgezogen. Der verbleibende Platz wird in drei Teile geteilt und im Verhältnis zu den zwei flexiblen Spuren zugewiesen.

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

### Spurlisten mit repeat()-Notation

Große Grids mit vielen Spuren können die [`repeat()`](/de/docs/Web/CSS/repeat) Notation verwenden, um die gesamte oder einen Teil der Liste von Grid-Spuren zu wiederholen. Zum Beispiel könnte die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Auch folgendermaßen geschrieben werden:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Wiederholungsnotation kann für einen Teil der Spurenliste verwendet werden. In diesem Beispiel erstellen wir ein 8-Spalten-Grid; die erste Spur ist `20px`, dann ein wiederkehrender Abschnitt von 6 `1fr` Spuren und eine letzte `20px` Spur.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation (`repeat()`) verwendet die Spurliste, um ein sich wiederholendes Muster von Spuren zu erstellen. In diesem Beispiel hat das Grid 10 Spuren; eine `1fr`-Spur gefolgt von einer `2fr`-Spur, wobei dieses Muster fünfmal wiederholt wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Beim Erstellen unseres Beispielgrids haben wir unsere Spaltenspuren explizit mit der {{cssxref("grid-template-columns")}} Eigenschaft definiert, wobei das Grid bei Bedarf Zeilen erstellt, um den Inhalt aufzunehmen. Die Spalten definieren das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert wurden. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids wie in die Zeilen platziert werden, indem zusätzliche Grid-Linien erstellt werden.

Wenn Sie etwas außerhalb des definierten Grids platzieren – oder aufgrund der Menge an Inhalten mehr Grid-Spuren benötigt werden – dann erstellt das Grid Zeilen und Spalten im _impliziten Grid_. Diese Spuren werden standardmäßig automatisch dimensioniert, was bedeutet, dass ihre Größe anhand des Inhalts bemessen wird, der sich in ihnen befindet.

Sie können auch eine feste Größe für in das implizite Grid erstellte Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`, wodurch sichergestellt wird, dass die im impliziten Grid erstellten Spuren `200px` hoch sind.

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

### Spurdimensionierung und minmax

Beim Einrichten eines expliziten Grids oder beim Definieren der Dimensionierung für automatisch erstellte Zeilen oder Spalten möchten wir möglicherweise Spuren eine Mindestgröße geben, aber auch sicherstellen, dass sie sich dehnen, um hinzugefügte Inhalte aufzunehmen. Zum Beispiel möchten wir möglicherweise, dass unsere Zeilen niemals kleiner als 100 Pixel zusammenschrumpfen, aber wenn sich unsere Inhalte bis zu 300 Pixel in der Höhe strecken, dann möchten wir, dass sich die Zeile bis zu dieser Höhe streckt. Dies wird durch die {{cssxref("minmax", "minmax()")}}-Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` innerhalb des Werts der Eigenschaft `grid-auto-rows`. Indem wir `grid-auto-rows: minmax(100px, auto);` setzen, werden automatisch erstellte Zeilen mindestens `100px` hoch und haben maximal `auto`. Wenn `auto` als maximaler Wert gesetzt wird, dehnt sich die Größe aus, um den Inhalt aufzunehmen, und dimensioniert die Zeile basierend auf der Zelle mit dem höchsten Inhalt.

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

Es sollte beachtet werden, dass wenn wir ein Grid definieren, wir die Grid-Spuren und nicht die Linien definieren. Grid gibt uns dann nummerierte Linien, die wir bei der Positionierung von Elementen verwenden. In unserem Rastersystem mit drei Spalten und zwei Zeilen haben wir vier Spaltenlinien.

![Diagramm mit nummerierten Grid-Linien.](1_diagram_numbered_grid_lines.png)

Linien sind entsprechend dem Schreibmodus des Dokuments nummeriert. In einer Sprache mit Links-nach-Rechts-Schreibung befindet sich die Linie 1 auf der linken Seite des Grids. In einer Sprache mit Rechts-nach-Links-Schreibung befindet sich Linie 1 auf der rechten Seite des Grids. Linien können auch benannt werden, wie im [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) Leitfaden erörtert wird.

### Elemente anhand von Linien positionieren

Das folgende Beispiel demonstriert die grundlegende platzierungsbasierte Platzierung; beim Platzieren eines Elements zielen wir auf die Linie und nicht auf die Spur. Wir gehen darauf detaillierter im [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) Leitfaden ein.

In diesem Beispiel werden die ersten zwei Elemente auf unserem Dreispur-Spalten-Grid mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} platziert. Von links nach rechts wird das erste Element an Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die ganz rechte Linie im Grid ist. Es beginnt an der Zeilenlinie 1 und endet an der Zeilenlinie 3, was bedeutet, dass es sich über zwei Zeilenspuren erstreckt.

Das zweite Element beginnt an der Spaltenlinie 1 des Grids und erstreckt sich über eine Spur. Dies ist der Standard, daher müssen wir die Endlinie nicht angeben. Es erstreckt sich auch über zwei Zeilenspuren von der Zeilenlinie 3 bis zur Zeilenlinie 5. Die anderen Elemente werden sich selbst an leere Stellen im Grid platzieren.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklerwerkzeugen, um zu sehen, wie die Elemente gegenüber den Linien des Grids positioniert sind.

### Kurzschrift für Linienpositionierung

Die oben verwendeten Langschreibwerte können auf eine Zeile für Spalten mit der {{cssxref("grid-column")}} Kurzform und eine Zeile für Zeilen mit der {{cssxref("grid-row")}} Kurzform komprimiert werden. Das folgende Beispiel würde dieselbe Positionierung wie im vorherigen Code geben, jedoch mit weitaus weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

Sie können den Endwert weglassen, wenn das Gebiet lediglich eine Spur umfasst.

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

Eine _Grid-Zelle_ ist die kleinste Einheit in einem Grid. Konzeptionell ist sie wie eine Tabellenzelle. Wie in unseren früheren Beispielen zu sehen, legen sich Kind-Elemente in einer definierten Grid-Zelle aus, sobald ein Grid als übergeordnetes Element definiert ist. Im unteren Bild ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können eine oder mehrere Zellen sowohl in Zeilen als auch in Spalten erstrecken, und dies erzeugt einen _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein – es ist beispielsweise nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei zeilen- und zwei spaltenbasierte Spuren.

![Ein Grid-Bereich](1_grid_area.png)

## Rinnen

_Rinnen_ oder _Zwischenräume_ zwischen den Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} erstellt werden, oder der Kurzform {{cssxref("gap")}}. Im unten stehenden Beispiel fügen wir einen 10-Pixel-Abstand zwischen den Spalten und einen `1em`-Abstand zwischen den Zeilen hinzu.

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

Jeder von den Lücken genutzte Raum wird verrechnet, bevor Raum an die flexiblen Längen `fr` Spuren zugewiesen wird, und Lücken wirken sich hinsichtlich der Dimensionierung wie eine reguläre Grid-Spur aus, wobei jedoch nichts in der Lücke platziert werden kann. Im Hinblick auf die auf Linien basierende Positionierung fungiert die Lücke wie eine dicke, transparente Linie.

## Verschachtelte Grids

Ein Grid-Item kann zu einem Grid-Container werden. Im folgenden Beispiel erweitern wir das dreispaltige Grid mit zwei positionierten Elementen, die zuvor gesehen wurden, und fügen Unterelemente zum ersten Grid-Element hinzu. Da diese verschachtelten Elemente keine direkten Kinder des Grids sind, sind sie nicht am Grid-Layout beteiligt und werden im normalen Dokumentenfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Spurdefinition geben und es wird ebenfalls zu einem Grid. Die Elemente legen sich dann in diesem neuen Grid aus.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum übergeordneten Element. Wie Sie im Beispiel sehen können, hat es nicht den {{cssxref("gap")}} des übergeordneten Elements geerbt und die Linien im verschachtelten Grid sind nicht an die Linien im übergeordneten Grid angepasst.

### Subgrid

Zusätzlich zu regulären Grids können wir ein _Subgrid_ erstellen. Der `subgrid` Wert ermöglicht es uns, verschachtelte Grids zu erstellen, die die Spurdefinition des übergeordneten Grids verwenden.

Um sie zu verwenden, bearbeiten wir das oben beschriebene Beispiel für ein verschachteltes Grid, um die Spurdefinition von `grid-template-columns: repeat(3, 1fr)` zu `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Spuren des übergeordneten Grids zur Anordnung von Elementen.

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

## Ebene von Elementen mit z-index

Grid-Elemente können dieselbe Zelle belegen, und in diesem Fall können wir die {{cssxref("z-index")}} Eigenschaft verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappen ohne z-index

Wenn wir zu unserem Beispiel mit durch Liniennummern positionierten Elementen zurückkehren, können wir dies ändern, um zwei Elemente überlappen zu lassen.

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

Das Element `box2` überlappt nun `box1`, es wird oben angezeigt, da es später in der Quellreihenfolge vorkommt.

### Steuerung der Reihenfolge

Wir können die Reihenfolge, in der sich Elemente stapeln, steuern, indem wir die `z-index` Eigenschaft verwenden – genau wie bei positionierten Elementen. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird sie unter `box1` im Stapel angezeigt.

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

In diesem Überblick haben wir einen sehr kurzen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden und experimentieren Sie mit den Code-Beispielen, und gehen Sie dann zum Leitfaden [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods) über, wo wir beginnen werden, detailliert in die Details des CSS Grid Layouts einzugehen.
