---
title: Grundlagen des Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können zur Gestaltung wichtiger Seitenbereiche oder kleiner Benutzeroberflächenelemente verwendet werden. Dieser Artikel führt in das CSS-Grid-Layout und die neue Terminologie der CSS-Grid-Layout-Spezifikation Level 1 ein. Die in dieser Übersicht gezeigten Merkmale werden anschließend in diesem Leitfaden genauer erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz von sich kreuzenden horizontalen und vertikalen Linien, die Spalten und Zeilen definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien in das Grid gesetzt werden. CSS-Grid-Layout hat folgende Merkmale:

### Feste und flexible Größen der Grid-Tracks

Sie können ein Grid mit festen Trackgrößen erstellen, zum Beispiel mit Pixeln. Dadurch wird das Grid auf die gewünschte Layoutgröße gesetzt. Sie können auch ein Grid mit flexiblen Größen unter Verwendung von Prozentsätzen oder der für diesen Zweck entwickelten Einheit `fr` erstellen.

### Platzierung von Elementen

Sie können Elemente an einem präzisen Ort im Grid anhand von Liniennummern, Namen oder durch das Anvisieren eines Bereichs des Grids platzieren. Grid enthält auch einen Algorithmus zur Steuerung der Platzierung von Elementen, die keine explizite Position im Grid haben.

### Erstellung zusätzlicher Tracks zur Aufnahme von Inhalten

Mit Grid-Layout können Sie ein explizites Grid definieren. Die Spezifikation des Grid-Layouts ist flexibel genug, um bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, die in einen Container passen" sind enthalten.

### Steuerung der Ausrichtung

Grid enthält Ausrichtungsfunktionen, mit denen Sie steuern können, wie die Gegenstände ausgerichtet werden, sobald sie in einen Grid-Bereich platziert sind, und wie das gesamte Grid ausgerichtet ist.

### Steuerung von sich überlappenden Inhalten

Mehr als ein Element kann in eine Grid-Zelle oder einen Bereich gesetzt werden, und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}} Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Spezifikation, die in Kombination mit anderen Teilen von CSS, wie zum Beispiel [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), dabei helfen kann, Layouts zu erstellen, die zuvor in CSS nicht möglich waren. Alles beginnt mit der Erstellung eines Grids in Ihrem **Grid-Container**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` für ein Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Elementen_.

In diesem Beispiel habe ich ein umschließendes `div` mit der Klasse `wrapper` und darin fünf Kind-Elemente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Ich mache den `.wrapper` zu einem Grid-Container.

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

Alle direkten Kinder sind jetzt Grid-Elemente. In einem Webbrowser werden Sie keinen Unterschied in der Anzeige dieser Elemente vor der Umwandlung in ein Grid sehen, da Grid für die Elemente einspaltig erstellt wurde. An diesem Punkt kann es nützlich sein, mit dem [Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) zu arbeiten, der Teil der Entwicklerwerkzeuge von Firefox ist. Wenn Sie dieses Beispiel in Firefox betrachten und das Grid inspizieren, sehen Sie ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und das Grid wird in das Browserfenster überlagert.

![Verwendung des Grid-Highlighters in DevTools zur Anzeige eines Grids](1-grid-inspector.png)

Wenn Sie das CSS-Grid-Layout lernen und damit arbeiten, wird Ihnen dieses Werkzeug eine bessere Vorstellung davon geben, was mit Ihren Grids visuell geschieht.

Wenn wir anfangen möchten, dies gitterförmiger zu gestalten, müssen wir Spaltentracks hinzufügen.

## Grid-Tracks

Wir definieren Zeilen und Spalten auf unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren Grid-Tracks. Ein _Grid-Track_ ist der Raum zwischen zwei benachbarten Linien des Grids. Das Bild unten zeigt einen hervorgehobenen Track – dies ist der erste Zeilentrack in unserem Grid.

![Ein Kasten mit 3 Grid-Elementen. Über den drei Elementen befindet sich ein hellgrüner Bereich, der der Track ist.](1_grid_track.png)

Grid-Tracks werden im expliziten Grid durch Nutzung der Eigenschaften `grid-template-columns` und `grid-template-rows` oder durch die Kurzformen `grid` oder `grid-template` definiert. Tracks werden auch im impliziten Grid erstellt, indem ein Grid-Element außerhalb der im expliziten Grid erstellten Tracks platziert wird.

### Einfaches Beispiel

Ich kann unser früheres Beispiel erweitern, indem ich die Eigenschaft `grid-template-columns` hinzufüge und dann die Größe der Spaltentracks definiere.

Ich habe jetzt ein Grid mit drei 200 Pixel breiten Spaltentracks erstellt. Die Kind-Elemente werden in diesem Grid jeweils in einer Gridzelle angeordnet.

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

### Die Einheit fr

Tracks können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, um uns zu helfen, flexible Grid-Tracks zu erstellen. Die neue `fr`-Einheit stellt einen Bruchteil des verfügbaren Platzes im Grid-Container dar. Die folgende Grid-Definition würde drei gleich breit Tracks erstellen, die sich je nach verfügbarem Platz vergrößern und verkleinern.

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

Im nächsten Beispiel erstellen wir eine Definition mit einem `2fr`-Track und dann zwei `1fr`-Tracks. Der verfügbare Raum wird in vier Teile aufgeteilt. Zwei Teile werden dem ersten Track und jeweils ein Teil den nächsten beiden Tracks zugewiesen.

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

Im letzten Beispiel mischen wir absolut große Tracks mit `fr`-Einheiten. Der erste Track ist 500 Pixel, daher wird die feste Breite von dem verfügbaren Platz abgezogen. Der verbleibende Raum wird in drei Teile geteilt und den beiden flexiblen Tracks proportional zugewiesen.

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

### Track-Auflistung mit der Notation repeat()

Große Grids mit vielen Tracks können die `repeat()`-Notation verwenden, um eine ganze oder einen Abschnitt der Track-Auflistung zu wiederholen. Zum Beispiel kann die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

auch als folgt geschrieben werden:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Wiederholungsnotation kann für einen Teil der Track-Auflistung verwendet werden. Im nächsten Beispiel habe ich ein Grid mit einem anfänglichen 20-Pixel-Track erstellt, dann einem sich wiederholenden Abschnitt von sechs `1fr`-Tracks und schließlich einem 20-Pixel-Track.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation nimmt die Track-Auflistung und verwendet sie, um ein wiederholendes Muster von Tracks zu erstellen. Im nächsten Beispiel wird mein Grid aus 10 Tracks bestehen, einem `1fr`-Track, gefolgt von einem `2fr`-Track. Dieses Muster wird fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Beim Erstellen unseres Beispiel-Grids haben wir speziell unsere Spaltentracks mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert, aber das Grid hat auch Zeilen von sich aus erstellt. Diese Zeilen gehören zum impliziten Grid, während das explizite Grid aus allen Zeilen und Spalten besteht, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert wurden.

Wenn Sie etwas außerhalb des definierten Grids platzieren – oder wenn aufgrund der Menge an Inhalten mehr Grid-Tracks benötigt werden – dann erstellt das Grid Zeilen und Spalten im impliziten Grid. Diese Tracks werden standardmäßig automatisch dimensioniert, sodass ihre Größe auf dem Inhalt basiert, der sich in ihnen befindet.

Sie können auch eine festgelegte Größe für Tracks definieren, die im impliziten Grid erstellt werden, mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}}.

Im unten stehenden Beispiel verwenden wir `grid-auto-rows`, um sicherzustellen, dass die im impliziten Grid erstellten Tracks 200 Pixel hoch sind.

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

### Track-Größen und minmax

Wenn wir ein explizites Grid einrichten oder die Größen für automatisch erstellte Zeilen oder Spalten definieren, möchten wir möglicherweise Tracks eine Mindestgröße geben, aber auch sicherstellen, dass sie sich ausdehnen, um jeden hinzugefügten Inhalt aufzunehmen. Beispielsweise möchte ich vielleicht, dass meine Zeilen niemals kleiner als 100 Pixel zusammenfallen, aber wenn sich mein Inhalt auf 300 Pixel Höhe erstreckt, möchte ich, dass sich die Zeile auf diese Höhe ausdehnt.

Grid hat für dieses Problem eine Lösung mit der {{cssxref("minmax", "minmax()")}}-Funktion. Im nächsten Beispiel benutze ich `minmax()` im Wert von {{cssxref("grid-auto-rows")}}. Dies bedeutet, dass automatisch erstellte Zeilen eine Mindesthöhe von 100 Pixel und ein Maximum von `auto` haben werden. Mit `auto` bedeutet dies, dass die Größe die Inhaltsgröße betrachtet und sich dehnt, um Platz für das höchste Element in einer Zelle, in dieser Zeile, zu geben.

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

```html
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>I have some more content in.</p>
    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '470') }}

## Grid-Linien

Es sollte beachtet werden, dass wenn wir ein Grid definieren, wir die Grid-Tracks definieren und nicht die Linien. Grid gibt uns dann nummerierte Linien, die wir zur Positionierung von Elementen verwenden können. In unserem dreispaltigen, zweizeiligen Grid haben wir vier Spaltenlinien.

![Diagramm mit nummerierten Grid-Linien.](1_diagram_numbered_grid_lines.png)

Linien werden gemäß dem Textmodus des Dokuments nummeriert. In einer links-nach-rechts-Sprache liegt die Linie 1 auf der linken Seite des Grids. In einer rechts-nach-links-Sprache liegt sie auf der rechten Seite des Grids. Linien können auch benannt werden, und wir werden uns in einem späteren Leitfaden in dieser Serie anschauen, wie dies zu tun ist.

### Positionieren von Elementen entlang von Linien

Wir werden die linienbasierte Platzierung in einem späteren Artikel ausführlich erforschen. Das folgende Beispiel zeigt, wie dies auf einfache Weise getan wird. Wenn wir ein Element platzieren, zielen wir auf die Linie ab – anstatt auf den Track.

Im folgenden Beispiel platziere ich die ersten beiden Elemente in unserem dreispaltigen Track-Grid, indem ich die Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} verwende. Von links nach rechts wird das erste Element entlang der Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste rechte Linie im Grid ist. Es beginnt bei Zeilenlinie 1 und endet bei Zeilenlinie 3 und überspannt daher zwei Zeilen-Tracks.

Das zweite Element beginnt bei der Gittersäulenlinie 1 und erstreckt sich über einen Track. Das ist der Standard, daher muss ich die Endlinie nicht angeben. Es überspannt auch zwei Zeilen-Tracks von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente platzieren sich selbst in leere Räume auf dem Grid.

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

> [!NOTE]
> Vergessen Sie nicht, dass Sie den [Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) in den Firefox-Entwicklertools verwenden können, um zu sehen, wie die Elemente entlang der Grid-Linien positioniert sind.

### Kurznotationen für die Linienpositionierung

Die oben verwendeten Langformen können für Spalten mit {{cssxref("grid-column")}} und für Zeilen mit {{cssxref("grid-row")}} auf eine Linie komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code geben, aber mit viel weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der nachfolgende Wert die Endlinie.

Sie können den Endwert weglassen, wenn der Bereich nur einen Track überspannt.

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

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Grid. Konzeptuell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, ordnen sich die Kindelemente, sobald ein Grid als übergeordnet definiert ist, in jeweils eine Zelle des definierten Grids ein. Im Bild unten habe ich die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können eine oder mehrere Zellen sowohl in Zeilen als auch in Spalten überspannen, und dies erzeugt einen _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein – es ist nicht möglich, zum Beispiel ein L-förmiges Gebiet zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Zeilen und zwei Spaltentracks.

![Ein Grid-Bereich](1_grid_area.png)

## Rinnsale

_Rinnsale_ oder _Gassen_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzform {{cssxref("gap")}} erstellt werden. Im folgenden Beispiel erstelle ich einen Abstand von 10 Pixeln zwischen den Spalten und einen Abstand von `1em` zwischen den Zeilen.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

> [!NOTE]
> Als Grid erstmals in Browsern erschien, waren die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem Präfix `grid-` als `grid-column-gap`, `grid-row-gap` und `grid-gap` jeweils versehen.
>
> Browser unterstützen jetzt alle unpräfixte Werte, jedoch werden die präfixierten Versionen als Aliase beibehalten, was ihre Verwendung sicher macht.

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

Jeder Raum, der von Lücken beansprucht wird, wird berücksichtigt, bevor Platz an die flexiblen `fr` Tracks zugewiesen wird, und Lücken verhalten sich aus Größenzwecken wie ein regulärer Grid-Track, jedoch können Sie nichts in eine Lücke platzieren. In Bezug auf die linienbasierte Positionierung wirkt die Lücke wie eine dicke Linie.

## Verschachtelte Grids

Ein Grid-Element kann zu einem Grid-Container werden. Im folgenden Beispiel habe ich das dreispaltige Grid erstellt, das ich zuvor erstellet hatte, mit unseren beiden positionierten Elementen. In diesem Fall hat das erste Element einige Unterelemente. Da diese Elemente keine direkte Kinder des Grids sind, nehmen sie nicht an der Grid-Anordnung teil und werden in einem normalen Dokumentenfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne subgrid

Wenn ich `box1` auf `display: grid` setze, kann ich ihm eine Track-Definition geben und es wird ebenfalls zu einem Grid. Die Elemente ordnen sich dann auf diesem neuen Grid an.

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

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '340') }}

In diesem Fall hat das verschachtelte Grid keine Beziehung zum Elternteil. Wie im Beispiel zu sehen ist, hat es das {{cssxref("gap")}} des Elternteils nicht geerbt und die Linien im verschachtelten Grid sind nicht auf die Linien des Eltern-Grids ausgerichtet.

### Subgrid

Neben regulären Grids ermöglicht _subgrid_ uns die Erstellung von verschachtelten Grids, die die Track-Definition des Eltern-Grids verwenden.

Um sie zu verwenden, ändern wir das obige Beispiel für ein verschachteltes Grid, um die Track-Definition von `grid-template-columns: repeat(3, 1fr)` zu `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Track-Definition des Eltern-Grids, um Elemente auszurichten.

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

Grid-Elemente können die gleiche Zelle belegen, und in diesem Fall können wir mit der {{cssxref("z-index")}} Eigenschaft die Reihenfolge steuern, in der sich überlappende Elemente stapeln.

### Überlappung ohne z-index

Wenn wir zu unserem Beispiel mit den nach Nummern platzierten Elementen zurückkehren, können wir es so ändern, dass zwei Elemente einander überlappen.

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

Das Element `box2` überlappt jetzt `box1`, es wird oben angezeigt, da es später in der Quellreihenfolge kommt.

### Steuerung der Reihenfolge

Wir können die Reihenfolge steuern, in der sich die Elemente stapeln, indem wir die `z-index`-Eigenschaft verwenden, genau wie bei positionierten Elementen. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es in der Stapelung unter `box1` angezeigt.

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

{{ EmbedLiveSample('Controlling_the_order', '230', '460') }}

## Nächste Schritte

In diesem Artikel haben wir einen sehr schnellen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden und experimentieren Sie mit den Codebeispielen, und gehen Sie dann [zum nächsten Teil dieses Leitfadens](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods), in dem wir wirklich anfangen, die Details des CSS-Grid-Layouts zu ergründen.
