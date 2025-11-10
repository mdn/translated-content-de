---
title: Grundlegende Konzepte des Grid-Layouts
short-title: Basic concepts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um große Seitenbereiche oder kleine Benutzeroberflächenelemente anzuordnen. Dieser Leitfaden führt in das CSS-Grid-Layout und die Terminologie ein, die Teil der CSS-Grid-Layout-Spezifikation ist. Die in dieser Übersicht gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie ausführlicher erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz sich kreuzender horizontaler und vertikaler Linien, die Reihen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Reihenlinien auf das Grid positioniert werden. CSS-Grid-Layout hat die folgenden Merkmale:

### Feste und flexible Spurgrößen

Sie können ein Grid mit festen Spurgrößen erstellen – zum Beispiel unter Verwendung von Pixeln. Dies setzt das Grid auf die spezifizierten Pixel, die zu dem gewünschten Layout passen. Sie können auch ein Grid mit flexiblen Größen mit Prozentangaben oder mit der für diesen Zweck entwickelten [`fr`](#die_fr-einheit)-Einheit erstellen.

### Platzierung von Elementen

Sie können Elemente an einem genauen Ort im Grid platzieren, indem Sie Liniennummern, Namen verwenden oder einen Bereich des Grids ansprechen. Grid enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, denen kein expliziter Platz auf dem Grid zugewiesen wurde.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Sie können ein explizites Grid mit dem Grid-Layout definieren. Die im Grid-Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Reihen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, wie in einen Container passen", sind enthalten.

### Ausrichtungssteuerung

CSS-Grid-Layout und [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Funktionen ermöglichen es uns, zu steuern, wie die Elemente ausgerichtet werden, sobald sie in einen Grid-Bereich platziert wurden, und wie das gesamte Grid ausgerichtet wird.

### Steuerung überlappender Inhalte

Mehr als ein Element kann in eine Grid-Zelle oder einen Bereich platziert werden und sie können sich teilweise überlappen. Diese Schichtbildung kann dann mit der {{cssxref("z-index")}}-Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Layout-Methode, die in Kombination mit anderen Teilen von CSS, wie [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), Ihnen helfen kann, Layouts zu erstellen, die reaktionsschnell, flexibel und zugänglich sind. Alles beginnt mit der Erstellung eines Grids in Ihrem **{{Glossary("grid_container", "grid container")}}**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` bei einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Items_.

In diesem Beispiel haben wir ein umschließendes `div` mit einer Klasse von `wrapper`. Darin sind fünf Kind-Elemente verschachtelt.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen die `.wrapper` zu einem Grid-Container mit `display: grid;`.

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

Alle direkten Kinder sind jetzt Grid-Items. In einem Webbrowser werden Sie keinen Unterschied darin sehen, wie diese Elemente angezeigt werden, bevor sie in ein Grid verwandelt wurden, da Grid ein einspaltiges Grid für die Elemente erstellt hat. Wenn Sie das Grid in den Entwicklerwerkzeugen Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und in den meisten Browsern wird das Grid auf diesem Element im Browserfenster überlagert.

![Verwendung des Grid-Highlighters in Firefox DevTools, um ein Grid anzuzeigen](1-grid-inspector.png)

Wenn Sie das CSS-Grid-Layout lernen und dann damit arbeiten, geben Ihnen Ihre Browser-Tools eine bessere Vorstellung davon, was mit Ihren Grids visuell passiert.

Wenn wir beginnen wollen, dies grid-ähnlicher zu machen, müssen wir Spaltenspuren hinzufügen.

## Grid-Spuren

Wir definieren Reihen und Spalten auf unserem Grid mit den {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} Eigenschaften. Diese definieren {{Glossary("grid_tracks", "grid tracks")}}. Eine _grid track_ ist der Raum zwischen zwei benachbarten Linien auf dem Grid. Das Bild unten zeigt eine hervorgehobene Spur – dies ist die erste Reihen-Spur in unserem Grid.

![Eine Box mit 3 Grid-Items. Über den drei Items befindet sich ein fester hellgrüner Bereich, der die Spur ist.](1_grid_track.png)

Grid-Spuren werden im [expliziten Grid](#implizite_und_explizite_grids) durch die Verwendung der Eigenschaften `grid-template-columns` und `grid-template-rows` oder die Kurzschreibweise `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Grid erstellt, indem ein Grid-Item außerhalb der im expliziten Grid erstellten Spuren positioniert wird.

### Einfaches Beispiel

Wir können Spaltenspuren zu unserem früheren Beispiel hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spaltenspuren definieren.

Wir haben nun ein Grid mit drei 200 Pixel breiten Spaltenspuren erstellt. Die Kind-Elemente werden auf diesem Grid je eines in jede Grid-Zelle angeordnet.

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

Spuren können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, um uns zu helfen, flexible Grid-Spuren zu erstellen. Die [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) Einheit repräsentiert einen Bruchteil des verfügbaren Platzes im Grid-Container. Die nächste Grid-Definition würde drei gleich breite Spuren erstellen, die sich je nach verfügbarem Platz vergrößern oder verkleinern.

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

In diesem Beispiel erstellen wir eine Definition mit einer `2fr`-Spur und dann zwei `1fr`-Spuren. Der verfügbare Platz wird in vier Teile geteilt. Zwei Teile werden der ersten Spur gegeben und jeweils ein Teil den nächsten beiden Spuren.

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

### Mischen von flexiblen und festen Größen

In diesem letzten Beispiel mischen wir festgelegte Spuren mit `fr`-Einheiten. Die erste Spur ist `500px`, so dass die feste Breite vom verfügbaren Platz abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und den beiden flexiblen Spuren proportional zugewiesen.

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

### Spurauflistungen mit repeat() Notation

Große Grids mit vielen Spuren können die [`repeat()`](/de/docs/Web/CSS/Reference/Values/repeat) Notation verwenden, um die gesamte Liste der Grid-Spuren oder einen Teil davon zu wiederholen. Zum Beispiel kann die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

auch geschrieben werden als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Repeat-Notation kann für einen Teil der Spurenliste verwendet werden. In diesem Beispiel erstellen wir ein 8-spaltiges Grid; die erste Spur ist `20px`, dann ein wiederholender Abschnitt von 6 `1fr`-Spuren und eine letzte `20px`-Spur.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Repeat-Notation (`repeat()`) verwendet die Spurliste, um ein sich wiederholendes Muster von Spuren zu erstellen. In diesem Beispiel wird das Grid 10 Spuren haben; eine `1fr` Spur wird von einer `2fr` Spur gefolgt, wobei dieses Muster fünfmal wiederholt wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Beim Erstellen unseres Beispiel-Grids haben wir unsere Spaltenspuren ausdrücklich mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert, wobei das Grid bei Bedarf Reihen erstellt, um den Inhalt aufzunehmen. Die Spalten definieren das explizite Grid, während die Reihen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Reihen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert sind. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalt außerhalb dieses Grids platziert wird, z. B. in den Reihen durch das Zeichnen zusätzlicher Grid-Linien.

Wenn Sie etwas außerhalb des definierten Grids platzieren oder aufgrund der Menge an Inhalt weitere Grid-Spuren benötigt werden, erstellt das Grid Reihen und Spalten im _impliziten Grid_. Diese impliziten Spuren sind standardmäßig auto-groß, was bedeutet, dass die Größe der erstellten Reihen oder Spalten sowohl durch ihren Inhalt als auch durch den verfügbaren freien Raum innerhalb des Grid-Containers beeinflusst wird. Das `auto` Schlüsselwort ermöglicht es, dass die generierten Spuren den Inhalt aufnehmen und auch den verbleibenden Raum teilen.

Sie können auch eine feste Größe für die im impliziten Grid erstellen Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

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

### Spurgrößen und minmax

Wenn wir ein explizites Grid einrichten oder die Größe für automatisch erstellte Reihen oder Spalten definieren, möchten wir möglicherweise Spuren eine Mindestgröße geben, aber auch sicherstellen, dass sie sich ausdehnen, um jeden hinzugefügten Inhalt aufzunehmen. Zum Beispiel möchten wir, dass unsere Reihen niemals kleiner als 100 Pixel zusammenfallen, aber wenn unser Inhalt sich auf 300 Pixel in der Höhe erstreckt, möchten wir, dass sich die Reihe auf diese Höhe erstreckt. Dies wird durch die {{cssxref("minmax", "minmax()")}} Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` innerhalb des Werts der `grid-auto-rows` Eigenschaft. Indem wir `grid-auto-rows: minmax(100px, auto);` setzen, werden automatisch erstellte Reihen mindestens `100px` hoch sein und ein Maximum von `auto` haben. Die Einstellung von `auto` als maximalem Wert ermöglicht es der Spur, sich an ihren Inhalt anzupassen (bis zu ihrer `max-content` Größe), während sie auch jeden verfügbaren freien Raum innerhalb des Grid-Containers teilt.

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

Es sollte beachtet werden, dass wir, wenn wir ein Grid definieren, die Grid-Spuren, nicht die Linien definieren. Grid gibt uns dann nummerierte Linien, die wir beim Positionieren von Elementen verwenden können. In unserem dreispaltigen, zweireihigen Grid haben wir vier Spaltenlinien.

![Diagramm, das nummerierte Grid-Linien zeigt.](1_diagram_numbered_grid_lines.png)

Linien werden entsprechend dem Schreibmodus des Dokuments nummeriert. In einer Sprache von links nach rechts befindet sich Linie 1 auf der linken Seite des Grids. In einer Sprache von rechts nach links befindet es sich auf der rechten Seite des Grids. Linien können auch benannt werden, was im [Grid-Layout unter Verwendung benannter Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) Leitfaden diskutiert wird.

### Platzieren von Elementen an Linien

Das folgende Beispiel zeigt eine grundlegende Linie-basierte Platzierung; beim Platzieren eines Elements zielen wir auf die Linie anstelle der Spur. Wir erkunden dies ausführlicher im [Grid-Layout unter Verwendung von linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) Leitfaden.

In diesem Beispiel werden die ersten beiden Elemente in unserem dreispaltigen Spur-Grid mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} platziert. Von links nach rechts wird das erste Element an Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste rechte Linie im Grid ist. Es beginnt an der Zeilenlinie 1 und endet an der Zeilenlinie 3, was bedeutet, dass es sich über zwei Spuren erstreckt.

Das zweite Element beginnt an der Spaltenlinie 1 des Grids und erstreckt sich über eine Spur. Dies ist die Standardeinstellung, daher müssen wir die Endlinie nicht angeben. Es erstreckt sich auch über zwei Zeilenspuren von der Zeilenlinie 3 bis zur Zeilenlinie 5. Die anderen Elemente werden sich in den leeren Raum auf dem Grid platzieren.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklerwerkzeugen, um zu sehen, wie die Elemente an den Linien des Grids positioniert sind.

### Linienpositionierungs-Kurzschreibweisen

Die oben verwendeten Langformwerte können für Spalten mit der {{cssxref("grid-column")}} Kurzschreibweise und für Reihen mit der {{cssxref("grid-row")}} Kurzschreibweise in eine Linie komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code ergeben, jedoch mit wesentlich weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

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

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Raster. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, werden einmal als übergeordnetes Element definierte Grid-Items jeweils in einer Zelle des definierten Grids angelegt. Im unten stehenden Bild ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können eine oder mehrere Zellen sowohl durch Reihen als auch durch Spalten überspannen, und dies erstellt einen _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein – es ist zum Beispiel nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Reihen- und zwei Spalten-Spuren.

![Ein Grid-Bereich](1_grid_area.png)

## Zwischenräume

_Zwischenräume_ oder _Durchlässe_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}}, oder der Kurzschreibweise {{cssxref("gap")}} erstellt werden. Im unten stehenden Beispiel fügen wir eine 10-Pixel-Lücke zwischen den Spalten und eine `1em`-Lücke zwischen den Reihen hinzu.

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

Der durch Lücken verwendete Raum wird vor der Zuweisung des Raums an die flexible Länge der `fr`-Spuren berücksichtigt. Und Lücken verhalten sich für Größenzwecke wie eine reguläre Grid-Spur, jedoch können Sie nichts in eine Lücke platzieren. In Bezug auf die linienbasierte Positionierung verhält sich die Lücke wie eine dicke, transparente Linie.

## Verschachtelung von Grids

Ein Grid-Item kann ein Grid-Container werden. Im folgenden Beispiel erweitern wir das zuvor gesehene dreispaltige Grid mit zwei platzierten Elementen, indem wir Unter-Elemente zum ersten Grid-Item hinzufügen. Da diese verschachtelten Elemente keine direkten Kinder des Grids sind, nehmen sie nicht an der Grid-Anordnung teil und werden daher im normalen Dokumentfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Spurdefinition geben und es wird ebenfalls zu einem Grid. Die Elemente werden dann auf diesem neuen Grid angeordnet.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum Elternteil. Wie Sie in dem Beispiel sehen können, hat es den {{cssxref("gap")}} des Eltern-Gitters nicht geerbt, und die Linien im verschachtelten Grid stimmen nicht mit den Linien im Eltern-Grid überein.

### Subgrid

Neben regulären Grids können wir ein _Subgrid_ erstellen. Der `subgrid`-Wert ermöglicht es uns, verschachtelte Grids zu erstellen, die die Spurdefinition des Eltern-Grids verwenden.

Um sie zu verwenden, bearbeiten wir das oben genannte verschachtelte Grid-Beispiel, um die Spurdefinition von `grid-template-columns: repeat(3, 1fr)`, zu `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Spurdefinition des Eltern-Grids, um die Elemente anzuordnen.

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

## Überlagerung von Elementen mit z-index

Grid-Items können dieselbe Zelle belegen, und in diesem Fall können wir die Eigenschaft {{cssxref("z-index")}} verwenden, um die Reihenfolge zu kontrollieren, in der sich überlappende Elemente stapeln.

### Überlagerung ohne z-index

Wenn wir zu unserem Beispiel mit durch Liniennummerierung positionierten Items zurückkehren, können wir dies ändern, um zwei Items zu überlagern.

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

Das Element `box2` überlagert nun `box1`, es wird oben angezeigt, da es später in der Quellordnung kommt.

### Kontrolle der Reihenfolge

Wir können die Reihenfolge, in der sich die Elemente stapeln, mit der `z-index`-Eigenschaft – ähnlich wie bei positionierten Items – kontrollieren. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird er unter `box1` im Stapel angezeigt.

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

In dieser Übersicht haben wir einen sehr schnellen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden und experimentieren Sie mit den Codebeispielen, und fahren Sie dann mit dem Leitfaden fort, [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods), in dem wir wirklich beginnen, in die Details des CSS-Grid-Layouts einzutauchen.
