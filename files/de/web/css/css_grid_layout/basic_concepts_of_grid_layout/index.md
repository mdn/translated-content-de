---
title: Grundlegende Konzepte des Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um große Seitenbereiche oder kleine Benutzeroberflächenelemente zu gestalten. Dieser Artikel führt in das CSS Grid Layout und die neue Terminologie ein, die Teil der CSS Grid Layout Level 1 Spezifikation ist. Die in dieser Übersicht gezeigten Funktionen werden dann im weiteren Verlauf dieses Leitfadens im Detail erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz sich kreuzender horizontaler und vertikaler Linien, die Spalten und Zeilen definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Grid platziert werden. CSS Grid Layout hat folgende Merkmale:

### Feste und flexible Track-Größen

Sie können ein Grid mit festen Track-Größen erstellen - zum Beispiel mit Pixeln. Dies setzt das Grid auf die angegebenen Pixel, die zum gewünschten Layout passen. Sie können auch ein Grid mit flexiblen Größen erstellen, indem Sie Prozentwerte oder die Einheit `fr` verwenden, die für diesen Zweck entwickelt wurde.

### Platzierung von Elementen

Sie können Elemente an einem genauen Standort im Grid platzieren, indem Sie Liniennummern, Namen oder ein Zielgebiet des Grids verwenden. Grid enthält auch einen Algorithmus zur Steuerung der Platzierung von Elementen, die keine explizite Position im Grid haben.

### Erstellung zusätzlicher Tracks zur Aufnahme von Inhalten

Mit Grid Layout können Sie ein explizites Grid definieren. Die Grid Layout-Spezifikation ist flexibel genug, um bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie "so viele Spalten hinzufügen, wie in einen Container passen" sind enthalten.

### Steuerung der Ausrichtung

Grid enthält Ausrichtungsfunktionen, mit denen wir steuern können, wie die Elemente ausgerichtet werden, sobald sie in ein Grid-Gebiet platziert wurden, und wie das gesamte Grid ausgerichtet wird.

### Steuerung von sich überlappenden Inhalten

Mehr als ein Element kann in eine Grid-Zelle oder ein Gebiet platziert werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}} Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Spezifikation, die, wenn sie mit anderen Teilen von CSS wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) kombiniert wird, Ihnen helfen kann, Layouts zu erstellen, die zuvor in CSS unmöglich waren. Alles beginnt mit der Erstellung eines Grids in Ihrem **Grid-Container**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Items_.

In diesem Beispiel habe ich ein umschließendes div mit der Klasse wrapper und darin befinden sich fünf Kind-Elemente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Ich mache die `.wrapper` zu einem Grid-Container.

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

Alle direkten Kinder sind nun Grid-Items. In einem Webbrowser werden Sie keinen Unterschied in der Anzeige dieser Elemente sehen, bevor sie in ein Grid umgewandelt wurden, da das Grid für die Elemente ein einspaltiges Grid erstellt hat. An diesem Punkt kann es hilfreich sein, mit dem [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) zu arbeiten, der Teil der Developer Tools von Firefox ist. Wenn Sie dieses Beispiel in Firefox anzeigen und das Grid inspizieren, sehen Sie ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf und das Grid dieses Elements wird im Browserfenster überlagert.

![Verwendung des Grid-Highlighters in den DevTools, um ein Grid anzuzeigen](1-grid-inspector.png)

Während Sie das CSS Grid Layout lernen und dann damit arbeiten, wird Ihnen dieses Tool eine bessere Vorstellung davon geben, was mit Ihren Grids visuell passiert.

Wenn wir anfangen wollen, es mehr wie ein Grid zu gestalten, müssen wir Spaltrahmen hinzufügen.

## Grid-Tracks

Wir definieren Zeilen und Spalten in unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren Grid-Tracks. Ein _Grid-Track_ ist der Raum zwischen zwei angrenzenden Linien im Grid. Das untenstehende Bild zeigt einen hervorgehobenen Track – dies ist der erste Zeilentrack in unserem Grid.

![Ein Kasten mit 3 Grid-Items. Über den drei Items befindet sich ein festes hellgrünes Gebiet, das der Track ist.](1_grid_track.png)

Grid-Tracks werden im expliziten Grid durch die Verwendung der `grid-template-columns` und `grid-template-rows`-Eigenschaften oder der Kurzbefehle `grid` oder `grid-template` definiert. Tracks werden ebenfalls im impliziten Grid erstellt, indem ein Grid-Item außerhalb der im expliziten Grid erstellten Tracks positioniert wird.

### Einfaches Beispiel

Ich kann unser früheres Beispiel erweitern, indem ich die Eigenschaft `grid-template-columns` hinzufüge und dann die Größe der Spaltrahmen definiere.

Ich habe jetzt ein Grid mit drei 200-Pixel-breiten Spaltrahmen erstellt. Die Kind-Elemente werden auf diesem Grid in jeweils einer Grid-Zelle angeordnet.

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

Tracks können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, um uns bei der Erstellung flexibler Grid-Tracks zu helfen. Die neue `fr`-Einheit repräsentiert einen Bruchteil des verfügbaren Platzes im Grid-Container. Die nächste Grid-Definition würde drei gleich breite Tracks erstellen, die sich entsprechend dem verfügbaren Platz vergrößern oder verkleinern.

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

In diesem nächsten Beispiel erstellen wir eine Definition mit einem `2fr`-Track und dann zwei `1fr`-Tracks. Der verfügbare Platz ist in vier Teile geteilt. Zwei Teile werden dem ersten Track und je ein Teil den nächsten beiden Tracks zugewiesen.

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

In diesem letzten Beispiel mischen wir absolut dimensionierte Tracks mit `fr`-Einheiten. Der erste Track ist 500 Pixel groß, sodass die feste Breite vom verfügbaren Platz abgezogen wird. Der verbleibende Raum wird in drei geteilt und proportional den beiden flexiblen Tracks zugewiesen.

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

Große Grids mit vielen Tracks können die `repeat()` Notation verwenden, um alle oder einen Teil der Track-Auflistung zu wiederholen. Zum Beispiel die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Kann auch als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

geschrieben werden.

Die Repeat-Notation kann für einen Teil der Track-Auflistung verwendet werden. In diesem nächsten Beispiel habe ich ein Grid mit einem anfänglichen 20-Pixel-Track erstellt, gefolgt von einem wiederholten Abschnitt von 6 `1fr`-Tracks und einem abschließenden 20-Pixel-Track.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Repeat-Notation nimmt die Track-Auflistung und verwendet sie, um ein sich wiederholendes Muster von Tracks zu erstellen. In diesem nächsten Beispiel besteht mein Grid aus 10 Tracks, einem `1fr`-Track und dann gefolgt von einem `2fr`-Track. Dieses Muster wird fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Beim Erstellen unseres Beispielgrids haben wir unsere Spaltrahmen explizit mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert, aber das Grid hat auch selbst Zeilen erstellt. Diese Zeilen sind Teil des impliziten Grids. Das explizite Grid hingegen besteht aus allen Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert wurden.

Wenn Sie etwas außerhalb des definierten Grids platzieren - oder aufgrund der Menge an Inhalten mehr Grid-Tracks benötigt werden - erstellt das Grid Zeilen und Spalten im impliziten Grid. Diese Tracks werden standardmäßig automatisch dimensioniert, was bedeutet, dass ihre Größe auf dem Inhalt basiert, der sie enthält.

Sie können auch eine feste Größe für im impliziten Grid erstellte Tracks mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

Im untenstehenden Beispiel verwenden wir `grid-auto-rows`, um sicherzustellen, dass die im impliziten Grid erstellten Tracks 200 Pixel hoch sind.

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

### Trackgröße und minmax

Beim Einrichten eines expliziten Grids oder beim Definieren der Größe von automatisch erstellten Zeilen oder Spalten möchten wir möglicherweise den Tracks eine Mindestgröße geben, aber auch sicherstellen, dass sie sich erweitern, um Inhalte aufzunehmen, die hinzugefügt werden. Zum Beispiel möchte ich, dass meine Zeilen niemals kleiner als 100 Pixel sein dürfen, aber wenn mein Inhalt sich auf 300 Pixel Höhe erstreckt, möchte ich, dass sich die Zeile auf diese Höhe dehnt.

Grid hat eine Lösung dafür mit der {{cssxref("minmax", "minmax()")}} Funktion. In diesem nächsten Beispiel verwende ich `minmax()` im Wert von {{cssxref("grid-auto-rows")}}. Dies bedeutet, dass automatisch erstellte Zeilen mindestens 100 Pixel hoch und maximal `auto` sind. Die Verwendung von `auto` bedeutet, dass die Größe auf die Größe des Inhalts schaut und sich dehnt, um Platz für das höchste Item in einer Zelle in dieser Zeile zu geben.

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

Es sollte beachtet werden, dass wir, wenn wir ein Grid definieren, die Grid-Tracks definieren, nicht die Linien. Grid gibt uns dann nummerierte Linien, die wir verwenden können, wenn wir Elemente positionieren. In unserem drei Spalten, zwei Zeilen Grid haben wir vier Spaltenlinien.

![Diagramm mit nummerierten Grid-Linien.](1_diagram_numbered_grid_lines.png)

Die Linien sind entsprechend der Schreibrichtung des Dokuments nummeriert. In einer links-nach-rechts Sprache ist die Linie 1 auf der linken Seite des Rasters. In einer rechts-nach-links Sprache befindet sie sich auf der rechten Seite des Rasters. Linien können auch benannt werden, und wir werden uns ansehen, wie dies in einem späteren Leitfaden dieser Serie zu tun ist.

### Positionierung von Elementen anhand von Linien

Wir werden die linienbasierte Platzierung in einem späteren Artikel vollständig erkunden. Das folgende Beispiel zeigt, wie dies auf eine einfache Weise gemacht wird. Beim Platzieren eines Elements zielen wir auf die Linie anstelle des Tracks.

Im folgenden Beispiel platziere ich die ersten beiden Elemente auf unserem drei Spalten-Track-Grid mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}}. Von links nach rechts platziert sich das erste Element an der Spaltenlinie 1 und erstreckt sich bis zur Spaltenlinie 4, was in unserem Fall die äußerste rechte Linie im Grid ist. Es beginnt an der Zeilenlinie 1 und endet an der Zeilenlinie 3 und erstreckt sich somit über zwei Zeilen-Tracks.

Das zweite Element beginnt an der Grid-Spaltenlinie 1 und erstreckt sich über einen Track. Dies ist der Standard, sodass ich die Endlinie nicht angeben muss. Es erstreckt sich auch über zwei Zeilen-Tracks von der Zeilenlinie 3 bis zur Zeilenlinie 5. Die anderen Elemente platzieren sich selbst in leeren Bereichen im Grid.

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
> Vergessen Sie nicht, dass Sie den [Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) in den Firefox Developer Tools verwenden können, um zu sehen, wie die Elemente gegen die Linien des Grids positioniert sind.

### Kurzbefehle für die Linie-Positionierung

Die obigen Langwerte können in einer Zeile für Spalten mit {{cssxref("grid-column")}} und einer Linie für Zeilen mit {{cssxref("grid-row")}} komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code geben, jedoch mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

Sie können den Endwert weglassen, wenn das Gebiet nur einen Track umfasst.

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

Eine _Grid-Zelle_ ist die kleinste Einheit in einem Grid. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, legen sich die Kind-Elemente, sobald ein Grid als Eltern definiert ist, jeweils in einer Zelle des definierten Grids aus. Im untenstehenden Bild habe ich die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Gebiete

Elemente können sowohl zeilen- als auch spaltenweise über eine oder mehrere Zellen spannen, und dies erstellt ein _Grid-Gebiet_. Grid-Gebiete müssen rechteckig sein – es ist nicht möglich, ein L-förmiges Gebiet zu erstellen. Das hervorgehobene Grid-Gebiet erstreckt sich über zwei Zeilen und zwei Spalten-Tracks.

![Ein Grid-Gebiet](1_grid_area.png)

## Ränder

_Ränder_ oder _Alleeen_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzform {{cssxref("gap")}} erstellt werden. Im untenstehenden Beispiel erstelle ich einen 10-Pixel-Abstand zwischen den Spalten und einen `1em`-Abstand zwischen den Zeilen.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

> [!NOTE]
> Als das Grid erstmals in Browsern implementiert wurde, waren die Eigenschaften {{cssxref("column-gap")}}, {{cssxref("row-gap")}} und {{cssxref("gap")}} mit dem Präfix `grid-` versehen als `grid-column-gap`, `grid-row-gap` und `grid-gap`.
>
> Browser unterstützen jetzt alle nicht präfixierte Werte, jedoch werden die präfixierten Versionen als Aliase beibehalten, was sie sicher zu verwenden macht.

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

Jeder für Lücken genutzte Platz wird berücksichtigt, bevor der Raum den flexiblen Längen `fr`-Tracks zugewiesen wird, und Lücken wirken für Dimensionierungszwecke wie ein normaler Grid-Track, jedoch können Sie nichts in eine Lücke platzieren. In Bezug auf die linienbasierte Positionierung verhält sich die Lücke wie eine dicke Linie.

## Verschachtelung von Grids

Ein Grid-Item kann zu einem Grid-Container werden. Im folgenden Beispiel habe ich das dreispaltige Grid, das ich zuvor erstellt habe, mit unseren zwei positionierten Elementen. In diesem Fall hat das erste Element einige Unterelemente. Da diese Elemente keine direkten Kinder des Grids sind, nehmen sie nicht am Grid-Layout teil und werden daher in einem normalen Dokumentenfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn ich `box1` auf `display: grid` setze, kann ich ihm eine Track-Definition geben und es wird ebenfalls zu einem Grid. Die Elemente legen sich dann auf diesem neuen Grid aus.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum Eltern-Grid. Wie Sie im Beispiel sehen können, hat es nicht den {{cssxref("gap")}} des Eltern-Grids geerbt, und die Linien im verschachtelten Grid sind nicht an den Linien im Eltern-Grid ausgerichtet.

### Subgrid

Neben normalen Grids ermöglicht _Subgrid_ uns, verschachtelte Grids zu erstellen, die die Track-Definition des Eltern-Grids verwenden.

Um sie zu verwenden, bearbeiten wir das obige verschachtelte Grid-Beispiel, um die Track-Definition von `grid-template-columns: repeat(3, 1fr)` auf `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Track-Definition des Eltern-Grids, um Elemente anzuordnen.

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

## Schichtung von Elementen mit Z-Index

Grid-Items können die gleiche Zelle belegen, und in diesem Fall können wir die {{cssxref("z-index")}} Eigenschaft verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappung ohne Z-Index

Wenn wir zu unserem Beispiel mit den nach Linienzahlen positionierten Elementen zurückkehren, können wir dies ändern, um zwei Elemente überlappen zu lassen.

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

Das Element `box2` überlappt jetzt `box1` und wird oben angezeigt, da es später im Quellcode erscheint.

### Steuerung der Reihenfolge

Wir können die Reihenfolge, in der sich die Elemente stapeln, steuern, indem wir die `z-index` Eigenschaft - wie bei positionierten Elementen - verwenden. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` im Stapel angezeigt.

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

In diesem Artikel haben wir uns einen kurzen Überblick über die Möglichkeiten von Grid-Layouts verschafft. Erkunden und spielen Sie mit den Codebeispielen und gehen Sie dann [zum nächsten Teil dieses Leitfadens](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods), in dem wir wirklich anfangen werden, die Details des CSS Grid Layouts zu ergründen.
