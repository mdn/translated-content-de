---
title: Grundkonzepte des Grid-Layouts
short-title: Grundlegende Konzepte
slug: Web/CSS/Guides/Grid_layout/Basic_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um große Seitenbereiche oder kleine Benutzeroberflächenelemente zu gestalten. Dieser Leitfaden stellt das CSS-Grid-Layout und die Terminologie vor, die Teil der CSS-Grid-Layout-Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie genauer erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz sich kreuzender horizontaler und vertikaler Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Grid platziert werden. Das CSS-Grid-Layout verfügt über folgende Funktionen:

### Feste und flexible Track-Größen

Sie können ein Grid mit festen Track-Größen erstellen – zum Beispiel mit Pixeln. Dies legt das Grid auf die spezifizierte Pixelgröße fest, die zu dem von Ihnen gewünschten Layout passt. Sie können auch ein Grid mit flexiblen Größen unter Verwendung von Prozentwerten oder der für diesen Zweck entworfenen Einheit [`fr`](#die_fr-einheit) erstellen.

### Platzierung von Elementen

Sie können Elemente an einem genauen Ort im Grid mithilfe von Liniennummern, Namen oder durch Anvisieren eines Bereichs des Grids platzieren. Grid enthält auch einen Algorithmus zur Steuerung der Platzierung von Elementen, die nicht explizit auf dem Grid positioniert wurden.

### Erstellung zusätzlicher Tracks zur Aufnahme von Inhalten

Sie können ein explizites Grid mit Grid-Layout definieren. Die durch das Grid-Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, die in einen Container passen" sind enthalten.

### Ausrichtungssteuerung

Das CSS-Grid-Layout und die [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/Guides/Box_alignment)-Funktionen ermöglichen es uns zu steuern, wie die Elemente ausgerichtet werden, nachdem sie in einen Grid-Bereich platziert wurden, und wie das gesamte Grid ausgerichtet ist.

### Steuerung überlappender Inhalte

Mehr als ein Element kann in eine Grid-Zelle oder einen Bereich platziert werden, und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}}-Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Layoutmethode, die in Kombination mit anderen Teilen von CSS, wie zum Beispiel [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), Ihnen helfen kann, Layouts zu erstellen, die reaktionsfähig, flexibel und zugänglich sind. Alles beginnt damit, ein Grid in Ihrem **{{Glossary("grid_container", "Grid-Container")}}** zu erstellen.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Items_.

In diesem Beispiel haben wir ein umschließendes `div` mit einer Klasse von `wrapper`. Darin befinden sich fünf Kind-Elemente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen das `.wrapper` zu einem Grid-Container, indem wir `display: grid;` verwenden.

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

Alle direkten Kinder sind nun Grid-Items. In einem Webbrowser sehen Sie keinen Unterschied zur ursprünglichen Darstellung dieser Elemente, bevor sie in ein Grid umgewandelt wurden, da Grid ein Spaltengrid für die Elemente erstellt hat. Wenn Sie das Grid in den Entwicklertools Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf und in den meisten Browsern wird das Grid auf diesem Element im Browserfenster überlagert dargestellt.

![Verwendung des Grid-Highlighters in den Firefox DevTools zum Anzeigen eines Grids](1-grid-inspector.png)

Wenn Sie lernen und dann mit dem CSS-Grid-Layout arbeiten, geben Ihnen Ihre Browser-Tools eine bessere visuelle Vorstellung davon, was mit Ihren Grids passiert.

Wenn wir damit beginnen wollen, dies gridartiger zu machen, müssen wir Spalten-Tracks hinzufügen.

## Grid-Tracks

Wir definieren Zeilen und Spalten in unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren {{Glossary("grid_tracks", "Grid-Tracks")}}. Ein _Grid-Track_ ist der Raum zwischen zwei benachbarten Linien im Grid. Das folgende Bild zeigt einen hervorgehobenen Track – dies ist der erste Zeilen-Track in unserem Grid.

![Ein Kasten mit 3 Grid-Items. Über den drei Elementen befindet sich ein solider hellgrüner Bereich, der der Track ist.](1_grid_track.png)

Grid-Tracks werden im [expliziten Grid](#implizite_und_explizite_grids) durch die Verwendung der `grid-template-columns` und `grid-template-rows` Eigenschaften oder der Kurzschreibweise `grid` oder `grid-template` definiert. Tracks werden auch im impliziten Grid erstellt, indem ein Grid-Item außerhalb der durch das explizite Grid erstellten Tracks positioniert wird.

### Einfaches Beispiel

Wir können Spalten-Tracks zu unserem vorherigen Beispiel hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spalten-Tracks definieren.

Wir haben nun ein Grid mit drei 200 Pixel breiten Spalten-Tracks erstellt. Die Kind-Elemente werden auf diesem Grid jeweils in einer Grid-Zelle angeordnet.

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

Tracks können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, um uns zu helfen, flexible Grid-Tracks zu erstellen. Die [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container. Die nächste Grid-Definition würde drei gleichbreite Tracks erstellen, die entsprechend dem verfügbaren Raum wachsen und schrumpfen.

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

In diesem Beispiel erstellen wir eine Definition mit einem `2fr` Track und dann zwei `1fr` Tracks. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden dem ersten Track gegeben und je ein Teil den folgenden zwei Tracks.

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

### Mischung aus flexiblen und absoluten Größen

In diesem letzten Beispiel mischen wir absolut dimensionierte Tracks mit `fr`-Einheiten. Der erste Track ist `500px`, sodass die feste Breite vom verfügbaren Raum abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und proportional auf die zwei flexiblen Tracks verteilt.

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

Große Grids mit vielen Tracks können die [`repeat()`](/de/docs/Web/CSS/Reference/Values/repeat) Notation verwenden, um die Liste der Grid-Tracks vollständig oder abschnittsweise zu wiederholen. Zum Beispiel kann die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Auch so geschrieben werden:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Repeat-Notation kann für einen Teil der Liste der Tracks verwendet werden. In diesem Beispiel erstellen wir ein 8-Spalten-Grid; der anfängliche Track ist `20px`, gefolgt von einem sich wiederholenden Abschnitt aus 6 `1fr` Tracks und einem abschließenden `20px` Track.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Repeat-Notation (`repeat()`) verwendet die Track-Auflistung, um ein wiederholendes Muster von Tracks zu erstellen. In diesem Beispiel wird das Grid 10 Tracks haben; ein `1fr` Track wird von einem `2fr` Track gefolgt und dieses Muster wird fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Wenn Sie unser Beispiel-Grid erstellen, definieren Sie gezielt unsere Spalten-Tracks mit der {{cssxref("grid-template-columns")}} Eigenschaft, mit dem Grid, das Zeilen nach Bedarf erstellt, um den Inhalt aufzunehmen. Die Spalten definieren das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus den mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definierten Zeilen und Spalten. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, wie zum Beispiel in die Zeilen durch das Ziehen zusätzlicher Grid-Linien.

Wenn Sie etwas außerhalb des definierten Grids platzieren oder, aufgrund der Menge an Inhalten, mehr Grid-Tracks benötigt werden, dann erstellt das Grid Zeilen und Spalten im impliziten Grid. Diese impliziten Tracks sind standardmäßig automatisch dimensioniert, was bedeutet, dass die Größe der erstellten Zeilen oder Spalten sowohl von ihrem Inhalt als auch von dem in dem Grid-Container verfügbaren freien Raum beeinflusst wird. Das `auto` Schlüsselwort erlaubt, dass die generierten Tracks den Inhalt aufnehmen und gleichzeitig den verbleibenden freien Raum teilen.

Sie können auch eine feste Größe für Tracks definieren, die im impliziten Grid erstellt werden, mithilfe der {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} Eigenschaften.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`, wodurch gewährleistet wird, dass die in diesem impliziten Grid erstellten Tracks `200px` hoch sind.

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

### Track-Sizing und minmax

Beim Einrichten eines expliziten Grids oder beim Definieren der Größe für automatisch erstellte Zeilen oder Spalten möchten wir möglicherweise Tracks eine Mindestgröße geben, aber auch sicherstellen, dass sie sich anpassen, um jeglichen hinzugefügten Inhalt aufzunehmen. Zum Beispiel könnten wir möchten, dass unsere Zeilen niemals kleiner als 100 Pixel werden, aber wenn unser Inhalt auf 300 Pixel in der Höhe gestreckt wird, dann möchten wir, dass die Zeile sich an diese Höhe anpasst. Dies wird durch die {{cssxref("minmax", "minmax()")}}-Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` im Wert der Eigenschaft `grid-auto-rows`. Durch die Einstellung von `grid-auto-rows: minmax(100px, auto);` werden automatisch erstellte Zeilen mindestens `100px` hoch sein und maximal `auto`. Die Einstellung von `auto` als maximalen Wert ermöglicht es, dass der Track wächst, um seinen Inhalt aufzunehmen (bis zu seiner `max-content` Größe), während er gleichzeitig den verfügbaren freien Raum im Grid-Container teilt.

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

Es sollte beachtet werden, dass wenn wir ein Grid definieren, wir die Grid-Tracks und nicht die Linien definieren. Grid liefert dann nummerierte Linien, die verwendet werden können, um Elemente zu positionieren. In unserem Grid mit drei Spalten und zwei Zeilen haben wir vier Spaltenlinien.

![Diagramm zeigt nummerierte Grid-Linien.](1_diagram_numbered_grid_lines.png)

Linien werden entsprechend dem Lese- und Schreibmodus des Dokuments nummeriert. In einer von links nach rechts verlaufenden Sprache ist Linie 1 auf der linken Seite des Grids. In einer von rechts nach links verlaufenden Sprache ist sie auf der rechten Seite des Grids. Linien können auch benannt werden, was im [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) Leitfaden besprochen wird.

### Positionierung von Elementen an Linien

Das folgende Beispiel zeigt eine grundlegende linienbasierte Platzierung; wenn ein Element positioniert wird, zielen wir auf die Linie statt auf den Track. Wir behandeln dies ausführlicher im [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) Leitfaden.

In diesem Beispiel werden die ersten beiden Elemente auf unserem Grid mit drei Spalten-Tracks mithilfe der Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} platziert. Von links nach rechts wird das erste Element gegen Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste Linie des Grids auf der rechten Seite ist. Es beginnt an Zeilenlinie 1 und endet an Zeilenlinie 3 und erstreckt sich somit über zwei Zeilen-Tracks.

Das zweite Element beginnt auf Grid-Spaltenlinie 1 und erstreckt sich über einen Track. Dies ist die Standardeinstellung, daher müssen wir die Endlinie nicht spezifizieren. Es erstreckt sich auch über zwei Zeilen-Tracks von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente werden sich in den leeren Räumen des Grids selbst platzieren.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklertools, um zu sehen, wie die Elemente gegen die Linien des Grids positioniert sind.

### Linienstellen-Kurzfassungen

Die oben verwendeten Langformwerte können für Spalten mit der {{cssxref("grid-column")}} Kurzfassung und für Zeilen mit der {{cssxref("grid-row")}} Kurzfassung in einer Zeile komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code ergeben, jedoch mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

Sie können den Endwert weglassen, wenn der Bereich nur einen Track umfasst.

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

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Grid. Konzeptuell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, werden, sobald ein Grid als übergeordnetes Element definiert ist, die Kindelemente sich jeweils in einer Zelle des definierten Grids platzieren. Im folgenden Bild ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können sich über eine oder mehrere Zellen sowohl in der Zeile als auch in der Spalte erstrecken, und dies schafft einen _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein – es ist zum Beispiel nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Zeilen- und zwei Spalten-Tracks.

![Ein Grid-Bereich](1_grid_area.png)

## Lücken

_Lücken_ oder _Gassen_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzfassung {{cssxref("gap")}} erstellt werden. Im folgenden Beispiel fügen wir eine 10-Pixel-Lücke zwischen Spalten und eine `1em` Lücke zwischen Zeilen hinzu.

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

Jeder von Lücken genutzte Raum wird berücksichtigt, bevor der Platz den flexiblen Längen-`fr`-Tracks zugewiesen wird, und Lücken verhalten sich hinsichtlich der Größenzwecke wie ein regulärer Grid-Track, jedoch können Sie nichts in einer Lücke platzieren. In Bezug auf die linienbasierte Positionierung verhält sich die Lücke wie eine dicke, transparente Linie.

## Verschachtelung von Grids

Ein Grid-Item kann ein Grid-Container werden. Im folgenden Beispiel erweitern wir das Grid mit drei Spalten mit zwei positionierten Items, die wir früher gesehen haben, und fügen dem ersten Grid-Item Unter-Items hinzu. Da diese verschachtelten Items keine direkten Kinder des Grids sind, nehmen sie nicht am Grid-Layout teil und werden daher im normalen Dokumentfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Track-Definition geben, und es wird ebenfalls zu einem Grid. Die Elemente ordnen sich dann auf diesem neuen Grid an.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum übergeordneten Grid. Wie Sie im Beispiel sehen können, hat es die {{cssxref("gap")}} der Eltern nicht geerbt und die Linien im verschachtelten Grid richten sich nicht an den Linien im übergeordneten Grid aus.

### Subgrid

Zusätzlich zu regulären Grids können wir ein _Subgrid_ erstellen. Der `subgrid` Wert ermöglicht es uns, verschachtelte Grids zu erstellen, die die Track-Definition des übergeordneten Grids nutzen.

Um diese zu verwenden, ändern wir das obige verschachtelte Grid-Beispiel, um die Track-Definition von `grid-template-columns: repeat(3, 1fr)` in `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Eltern-Grid-Tracks, um Elemente anzuordnen.

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

## Ebenen von Elementen mit z-index

Grid-Items können dieselbe Zelle einnehmen, und in diesem Fall können wir die {{cssxref("z-index")}} Eigenschaft verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappen ohne z-index

Wenn wir zu unserem Beispiel mit über Nummern positionierten Items zurückkehren, können wir dies ändern, um zwei Items überlappen zu lassen.

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

Das Element `box2` überlappt jetzt `box1`, wobei es als Letzteres in der Quellreihenfolge oben dargestellt wird.

### Steuerung der Reihenfolge

Wir können die Reihenfolge, in der sich Items stapeln, mit der `z-index` Eigenschaft steuern – genau wie bei positionierten Items. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es sich unter `box1` im Stapel darstellen.

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

In diesem Überblick haben wir einen sehr schnellen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden und experimentieren Sie mit den Code-Beispielen und gehen Sie dann zum Leitfaden [Beziehung von Grid-Layout mit anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods) über, in dem wir wirklich in die Details des CSS-Grid-Layouts eintauchen werden.
