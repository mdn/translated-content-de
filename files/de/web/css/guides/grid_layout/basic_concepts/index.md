---
title: Grundlegende Konzepte des Grid-Layouts
short-title: Grundlegende Konzepte
slug: Web/CSS/Guides/Grid_layout/Basic_concepts
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

[CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um große Seitenbereiche oder kleine Elemente der Benutzeroberfläche anzuordnen. Dieser Leitfaden stellt CSS Grid Layout und die Terminologie der CSS-Grid-Layout-Spezifikation vor. Die in diesem Überblick gezeigten Funktionen werden in den weiteren Leitfäden dieser Reihe ausführlicher erläutert.

## Was ist ein Grid?

Ein Grid besteht aus sich kreuzenden horizontalen und vertikalen Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien im Grid platziert werden. CSS Grid Layout bietet die folgenden Funktionen:

### Feste und flexible Track-Größen

Sie können ein Grid mit festen Track-Größen erstellen, beispielsweise in Pixeln. Damit legen Sie die Größe der Tracks passend zum gewünschten Layout fest. Sie können auch ein Grid mit flexiblen Größen erstellen, indem Sie Prozentwerte oder die eigens dafür vorgesehene Einheit [`fr`](#die_einheit_fr) verwenden.

### Platzierung von Elementen

Sie können Elemente mithilfe von Liniennummern, Namen oder durch Angabe eines Grid-Bereichs an einer bestimmten Position im Grid platzieren. Grid verfügt außerdem über einen Algorithmus, der die Platzierung von Elementen steuert, für die keine ausdrückliche Position im Grid angegeben wurde.

### Erstellen zusätzlicher Tracks für Inhalte

Mit Grid Layout können Sie ein explizites Grid definieren. Die Funktionen des Grid-Layout-Moduls ermöglichen es, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Dazu gehört beispielsweise die Möglichkeit, so viele Spalten hinzuzufügen, wie in einen Container passen.

### Steuerung der Ausrichtung

Mit CSS Grid Layout und den Funktionen von [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) können Sie steuern, wie Elemente innerhalb eines Grid-Bereichs und wie das gesamte Grid ausgerichtet werden.

### Steuerung überlappender Inhalte

Mehrere Elemente können in derselben Grid-Zelle oder demselben Grid-Bereich platziert werden und sich dabei teilweise überlappen. Die Stapelreihenfolge dieser Elemente lässt sich mit der Eigenschaft {{cssxref("z-index")}} steuern.

Grid ist eine leistungsfähige Layout-Methode. In Kombination mit anderen CSS-Funktionen wie [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) hilft sie Ihnen, responsive, flexible und barrierefreie Layouts zu erstellen. Der erste Schritt besteht darin, ein Grid in Ihrem **{{Glossary("grid_container", "Grid-Container")}}** zu erstellen.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir für ein Element `display: grid` oder `display: inline-grid` deklarieren. Dadurch werden alle _direkten Kindelemente_ dieses Elements zu _Grid-Elementen_.

In diesem Beispiel gibt es ein umschließendes div mit der Klasse `wrapper`. Darin sind fünf Kindelemente verschachtelt.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Mit `display: grid;` machen wir `.wrapper` zu einem Grid-Container.

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

{{ EmbedLiveSample('grid_container', '200', '330') }}

Alle direkten Kindelemente sind nun Grid-Elemente. Im Webbrowser werden Sie zunächst keinen Unterschied zu ihrer vorherigen Darstellung sehen, da Grid für die Elemente ein einspaltiges Grid erstellt hat. Wenn Sie das Grid in den Entwicklerwerkzeugen Ihres Browsers untersuchen, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf. In den meisten Browsern wird dann ein Overlay für das Grid dieses Elements im Browserfenster angezeigt.

![Grid-Hervorhebung in den Firefox-Entwicklerwerkzeugen zur Anzeige eines Grids](1-grid-inspector.png)

Wenn Sie CSS Grid Layout kennenlernen und damit arbeiten, helfen Ihnen die Browserwerkzeuge dabei, die Struktur Ihrer Grids visuell besser zu verstehen.

Damit die Anordnung stärker einem Grid entspricht, müssen wir Spalten-Tracks hinzufügen.

## Grid-Tracks

Wir definieren Zeilen und Spalten unseres Grids mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren {{Glossary("grid_tracks", "Grid-Tracks")}}. Ein _Grid-Track_ ist der Bereich zwischen zwei benachbarten Linien im Grid. Die folgende Abbildung zeigt einen hervorgehobenen Track – den Track der ersten Zeile unseres Grids.

![Ein Kasten mit drei Grid-Elementen. Über den drei Elementen befindet sich ein durchgehend hellgrüner Bereich, der den Track darstellt.](1_grid_track.png)

Grid-Tracks werden im [expliziten Grid](#implizite_und_explizite_grids) mit den Eigenschaften `grid-template-columns` und `grid-template-rows` oder den Kurzschreibweisen `grid` und `grid-template` definiert. Tracks entstehen auch im impliziten Grid, wenn ein Grid-Element außerhalb der im expliziten Grid definierten Tracks platziert wird.

### Einfaches Beispiel

Wir können unserem vorherigen Beispiel Spalten-Tracks hinzufügen, indem wir die Eigenschaft `grid-template-columns` ergänzen und die Größe der Spalten-Tracks festlegen.

Damit haben wir ein Grid mit drei jeweils 200 Pixel breiten Spalten-Tracks erstellt. Die Kindelemente werden in diesem Grid angeordnet, jeweils eines pro Grid-Zelle.

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

Tracks können mit jeder Längeneinheit definiert werden. Grid führt außerdem eine zusätzliche Längeneinheit ein, mit der sich flexible Grid-Tracks erstellen lassen. Die Einheit [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) steht für einen Anteil des verfügbaren Platzes im Grid-Container. Die folgende Grid-Definition erstellt drei gleich breite Tracks, die entsprechend dem verfügbaren Platz wachsen oder schrumpfen.

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

In diesem Beispiel definieren wir einen `2fr`-Track und anschließend zwei `1fr`-Tracks. Der verfügbare Platz wird in vier Teile aufgeteilt. Der erste Track erhält zwei Teile, die beiden folgenden Tracks jeweils einen Teil.

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

### Flexible und absolute Größen kombinieren

In diesem letzten Beispiel kombinieren wir Tracks mit absoluten Größen und `fr`-Einheiten. Der erste Track ist `500px` breit; diese feste Breite wird daher vom verfügbaren Platz abgezogen. Der verbleibende Platz wird in drei Teile aufgeteilt und den beiden flexiblen Tracks entsprechend ihrem Verhältnis zugewiesen.

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

### Track-Listen mit der repeat()-Notation

Bei großen Grids mit vielen Tracks können Sie die Notation [`repeat()`](/de/docs/Web/CSS/Reference/Values/repeat) verwenden, um die gesamte Liste der Grid-Tracks oder einen Teil davon zu wiederholen. Beispielsweise kann die Grid-Definition

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

auch so geschrieben werden:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Wiederholungsnotation kann für einen Teil der Track-Liste verwendet werden. In diesem Beispiel erstellen wir ein Grid mit acht Spalten: Auf einen ersten Track von `20px` folgen sechs wiederholte `1fr`-Tracks und zum Schluss ein weiterer Track von `20px`.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation (`repeat()`) verwendet die Track-Liste, um ein sich wiederholendes Track-Muster zu erstellen. In diesem Beispiel hat das Grid zehn Tracks: Auf einen `1fr`-Track folgt ein `2fr`-Track, und dieses Muster wird fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Bei der Erstellung unseres Beispiel-Grids haben wir die Spalten-Tracks ausdrücklich mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert. Die benötigten Zeilen erstellt Grid anhand des Inhalts. Die Spalten bilden das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert werden. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalte außerhalb davon platziert werden. Dazu werden beispielsweise zusätzliche Grid-Linien für Zeilen erzeugt.

Wenn Sie etwas außerhalb des definierten Grids platzieren oder aufgrund der Inhaltsmenge weitere Grid-Tracks benötigt werden, erstellt Grid Zeilen und Spalten im _impliziten Grid_. Die Größe dieser impliziten Tracks wird standardmäßig automatisch bestimmt. Das bedeutet, dass sowohl ihr Inhalt als auch der verfügbare freie Platz im Grid-Container die Größe der erzeugten Zeilen oder Spalten beeinflussen. Das Schlüsselwort `auto` ermöglicht es den erzeugten Tracks, ihren Inhalt aufzunehmen und zugleich den verbleibenden Platz untereinander aufzuteilen.

Mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} können Sie für Tracks, die im impliziten Grid entstehen, auch eine feste Größe definieren.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`. Dadurch sind die im impliziten Grid erzeugten Tracks `200px` hoch.

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

{{ EmbedLiveSample('implicit_and_explicit_grids', '230', '450') }}

### Track-Größen und minmax

Wenn wir ein explizites Grid einrichten oder die Größe automatisch erzeugter Zeilen oder Spalten festlegen, möchten wir den Tracks möglicherweise eine Mindestgröße geben und zugleich sicherstellen, dass sie sich an hinzugefügte Inhalte anpassen. Beispielsweise sollen unsere Zeilen vielleicht nie niedriger als 100 Pixel sein. Wenn ein Inhalt jedoch 300 Pixel Höhe benötigt, soll die betreffende Zeile auf diese Höhe anwachsen. Dafür gibt es die Funktion {{cssxref("minmax()")}}.

In diesem Beispiel verwenden wir `minmax()` im Wert der Eigenschaft `grid-auto-rows`. Mit `grid-auto-rows: minmax(100px, auto);` sind automatisch erzeugte Zeilen mindestens `100px` hoch; ihr Maximalwert ist `auto`. Durch `auto` als Maximalwert kann der Track wachsen, um seinen Inhalt aufzunehmen (bis zu seiner `max-content`-Größe), und zugleich verfügbaren freien Platz im Grid-Container mit anderen Tracks teilen.

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

Beachten Sie, dass wir beim Definieren eines Grids die Grid-Tracks festlegen, nicht die Linien. Grid stellt uns daraufhin nummerierte Linien zur Verfügung, mit denen wir Elemente positionieren können. In unserem Grid mit drei Spalten und zwei Zeilen gibt es vier Spaltenlinien.

![Diagramm mit nummerierten Grid-Linien.](1_diagram_numbered_grid_lines.png)

Die Nummerierung der Linien richtet sich nach dem Schreibmodus des Dokuments. Bei einer Sprache mit Schreibrichtung von links nach rechts befindet sich Linie 1 auf der linken Seite des Grids. Bei einer Sprache mit Schreibrichtung von rechts nach links befindet sie sich auf der rechten Seite. Linien können auch benannt werden. Dies wird im Leitfaden zum [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) erläutert.

### Elemente anhand von Linien positionieren

Das folgende Beispiel zeigt die grundlegende linienbasierte Platzierung: Wenn wir ein Element platzieren, beziehen wir uns auf eine Linie statt auf einen Track. Im Leitfaden zum [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) gehen wir näher darauf ein.

In diesem Beispiel werden die ersten beiden Elemente unseres Grids mit drei Spalten-Tracks mithilfe der Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} platziert. Von links nach rechts betrachtet beginnt das erste Element an Spaltenlinie 1 und reicht bis Spaltenlinie 4, der äußersten rechten Linie unseres Grids. Es beginnt an Zeilenlinie 1 und endet an Zeilenlinie 3; damit erstreckt es sich über zwei Zeilen-Tracks.

Das zweite Element beginnt an Spaltenlinie 1 des Grids und erstreckt sich über einen Track. Dies ist die Standardeinstellung, daher müssen wir die Endlinie nicht angeben. Außerdem erstreckt es sich über zwei Zeilen-Tracks, von Zeilenlinie 3 bis Zeilenlinie 5. Die übrigen Elemente werden in den freien Bereichen des Grids platziert.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklerwerkzeugen, um zu sehen, wie die Elemente anhand der Grid-Linien positioniert sind.

### Kurzschreibweisen für die Positionierung anhand von Linien

Die oben verwendeten Einzelwerte lassen sich für Spalten mit der Kurzschreibweise {{cssxref("grid-column")}} und für Zeilen mit der Kurzschreibweise {{cssxref("grid-row")}} jeweils in einer Deklaration zusammenfassen. Das folgende Beispiel ergibt dieselbe Positionierung wie der vorherige Code, benötigt dafür aber deutlich weniger CSS. Der Wert vor dem Schrägstrich (`/`) bezeichnet die Startlinie, der Wert danach die Endlinie.

Wenn sich der Bereich nur über einen Track erstreckt, können Sie den Endwert weglassen.

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

Eine _Grid-Zelle_ ist die kleinste Einheit eines Grids. Sie ähnelt konzeptionell einer Tabellenzelle. Wie wir in den vorherigen Beispielen gesehen haben, werden die Kindelemente nach der Definition eines Grids auf dem Elternelement jeweils in einer Zelle des Grids angeordnet. In der folgenden Abbildung ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids ist hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können sich über eine oder mehrere Zellen erstrecken, sowohl über Zeilen als auch über Spalten. Dadurch entsteht ein _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein – ein L-förmiger Bereich ist beispielsweise nicht möglich. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Zeilen-Tracks und zwei Spalten-Tracks.

![Ein Grid-Bereich](1_grid_area.png)

## Zwischenräume

_Zwischenräume_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzschreibweise {{cssxref("gap")}} erstellt werden. Im folgenden Beispiel fügen wir zwischen den Spalten einen Abstand von 10 Pixeln und zwischen den Zeilen einen Abstand von `1em` hinzu.

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

Der von den Zwischenräumen belegte Platz wird berücksichtigt, bevor der verbleibende Platz den flexiblen `fr`-Tracks zugewiesen wird. Bei der Größenberechnung verhalten sich Zwischenräume wie normale Grid-Tracks, allerdings können Sie darin keine Elemente platzieren. Bei der linienbasierten Positionierung verhält sich ein Zwischenraum wie eine dicke, transparente Linie.

## Grids verschachteln

Ein Grid-Element kann selbst zu einem Grid-Container werden. Im folgenden Beispiel erweitern wir das zuvor gezeigte dreispaltige Grid mit zwei positionierten Elementen um untergeordnete Elemente im ersten Grid-Element. Da diese verschachtelten Elemente keine direkten Kindelemente des Grids sind, nehmen sie nicht am Grid-Layout teil und werden im normalen Dokumentfluss dargestellt.

![Verschachteltes Grid im normalen Dokumentfluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir dafür Tracks definieren. Dadurch wird auch dieses Element zu einem Grid. Die darin enthaltenen Elemente werden dann in diesem neuen Grid angeordnet.

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
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '250') }}

In diesem Fall hat das verschachtelte Grid keine Beziehung zum übergeordneten Grid. Wie Sie im Beispiel sehen können, hat es {{cssxref("gap")}} nicht vom übergeordneten Grid übernommen, und seine Linien sind nicht an den Linien des übergeordneten Grids ausgerichtet.

### Subgrid

Neben gewöhnlichen Grids können wir auch ein _Subgrid_ erstellen. Mit dem Wert `subgrid` lassen sich verschachtelte Grids erstellen, die die Track-Definition des übergeordneten Grids verwenden.

Dazu ändern wir im obigen Beispiel für das verschachtelte Grid die Track-Definition von `grid-template-columns: repeat(3, 1fr)` zu `grid-template-columns: subgrid`. Das verschachtelte Grid verwendet dann die Tracks des übergeordneten Grids, um seine Elemente anzuordnen.

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

## Elemente mit z-index übereinanderlegen

Grid-Elemente können dieselbe Zelle belegen. In diesem Fall können wir mit der Eigenschaft {{cssxref("z-index")}} die Stapelreihenfolge der überlappenden Elemente steuern.

### Überlappung ohne z-index

Kehren wir zu unserem Beispiel mit anhand von Liniennummern positionierten Elementen zurück. Wir können es so ändern, dass sich zwei Elemente überlappen.

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

Das Element `box2` überlappt nun `box1`. Es wird darüber angezeigt, weil es in der Reihenfolge des Quelltexts später kommt.

### Stapelreihenfolge steuern

Mit der Eigenschaft `z-index` können wir die Stapelreihenfolge der Elemente steuern – genau wie bei positionierten Elementen. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es im Stapel unter `box1` angezeigt.

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

In diesem Überblick haben wir die Möglichkeiten von Grid-Layouts kurz kennengelernt. Probieren Sie die Codebeispiele aus. Lesen Sie anschließend den Leitfaden über die [Beziehung von Grid Layout zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods), in dem wir uns näher mit den Details von CSS Grid Layout befassen.
