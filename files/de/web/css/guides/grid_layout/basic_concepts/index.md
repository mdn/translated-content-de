---
title: Grundkonzepte des Grid-Layouts
short-title: Basic concepts
slug: Web/CSS/Guides/Grid_layout/Basic_concepts
l10n:
  sourceCommit: 0f31456d7b82342100cef65812b413ec6f2fa352
---

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um bedeutende Bereiche einer Seite oder kleine Benutzeroberflächen-Elemente zu gestalten. Dieser Leitfaden führt in das CSS-Grid-Layout und die Terminologie ein, die Teil der CSS-Grid-Layout-Spezifikation ist. Die in diesem Überblick gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie ausführlicher erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz sich kreuzender horizontaler und vertikaler Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Grid platziert werden. CSS-Grid-Layout verfügt über folgende Funktionen:

### Feste und flexible Track-Größen

Sie können ein Grid mit festen Track-Größen erstellen – zum Beispiel mit Pixeln. Dies setzt das Grid auf die angegebene Pixelgröße, die dem von Ihnen gewünschten Layout entspricht. Sie können auch ein Grid mit flexiblen Größen unter Verwendung von Prozentangaben oder mit der für diesen Zweck entwickelten Einheit [`fr`](#die_fr-einheit) erstellen.

### Platzierung von Elementen

Sie können Elemente an einem genauen Ort im Grid platzieren, indem Sie Liniennummern, Namen oder das direkte Ansprechen eines Bereichs im Grid verwenden. Grid enthält auch einen Algorithmus, um die Platzierung von Elementen zu steuern, die keine explizite Position im Grid haben.

### Erstellung zusätzlicher Tracks zur Aufnahme von Inhalten

Mit dem Grid-Layout können Sie ein explizites Grid definieren. Die im Grid-Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, die in einen Container passen" sind enthalten.

### Steuerung der Ausrichtung

CSS-Grid-Layout und [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) bieten uns die Möglichkeit, zu kontrollieren, wie die Elemente ausgerichtet werden, nachdem sie in einem Grid-Bereich platziert wurden, und wie das gesamte Grid ausgerichtet ist.

### Steuerung von überlappenden Inhalten

Mehr als ein Element kann in eine Grid-Zelle oder einen Bereich gelegt werden, und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}}-Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Layoutmethode, die in Kombination mit anderen Teilen von CSS, wie [flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout), hilft, Layouts zu erstellen, die reaktionsfähig, flexibel und zugänglich sind. Es beginnt alles mit dem Erstellen eines Grids in Ihrem **{{Glossary("grid_container", "Grid-Container")}}**.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Elementen_.

In diesem Beispiel haben wir ein umschließendes `div` mit einer Klasse `wrapper`. Darin sind fünf untergeordnete Elemente verschachtelt.

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

Alle direkten Kinder sind jetzt Grid-Elemente. In einem Webbrowser sehen Sie keinen Unterschied darin, wie diese Elemente angezeigt werden, bevor sie in ein Grid umgewandelt werden, da Grid ein einspaltiges Grid für die Elemente erstellt hat. Wenn Sie das Grid in den Entwickler-Tools Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und in den meisten Browsern wird das Grid auf diesem Element im Browserfenster überlagert angezeigt.

![Verwendung des Grid-Highlighters in Firefox DevTools zur Ansicht eines Grids](1-grid-inspector.png)

Wenn Sie lernen und dann mit dem CSS-Grid-Layout arbeiten, geben Ihnen Ihre Browser-Tools eine bessere Vorstellung davon, was mit Ihren Grids visuell passiert.

Wenn wir dies gitterartiger gestalten möchten, müssen wir Spalten-Tracks hinzufügen.

## Grid-Tracks

Wir definieren Zeilen und Spalten in unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren {{Glossary("grid_tracks", "Grid-Tracks")}}. Ein _Grid-Track_ ist der Raum zwischen zwei beliebigen angrenzenden Linien im Grid. Das untenstehende Bild zeigt einen hervorgehobenen Track – dies ist der erste Zeilen-Track in unserem Grid.

![Eine Box mit 3 Grid-Elementen. Über den drei Elementen befindet sich ein solider hellgrüner Bereich, der der Track ist.](1_grid_track.png)

Grid-Tracks werden im [expliziten Grid](#implizite_und_explizite_grids) mithilfe der Eigenschaften `grid-template-columns` und `grid-template-rows` oder der Kurzformen `grid` oder `grid-template` definiert. Tracks werden auch im impliziten Grid erstellt, indem ein Grid-Element außerhalb der im expliziten Grid erstellten Tracks positioniert wird.

### Einfaches Beispiel

Wir können Spalten-Tracks zu unserem früheren Beispiel hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spalten-Tracks definieren.

Wir haben nun ein Grid mit drei 200-Pixel-breiten Spalten-Tracks erstellt. Die untergeordneten Elemente werden auf diesem Grid, jeweils eines in jeder Grid-Zelle, angeordnet.

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

Tracks können mit jeder beliebigen Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, um flexible Grid-Tracks zu erstellen. Die [`fr`](/de/docs/Web/CSS/Reference/Values/flex_value) Einheit repräsentiert einen Bruchteil des verfügbaren Platzes im Grid-Container. Die nächste Grid-Definition würde drei gleich breite Tracks erstellen, die je nach verfügbarem Platz wachsen und schrumpfen.

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

In diesem Beispiel erstellen wir eine Definition mit einem `2fr` Track und dann zwei `1fr` Tracks. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden dem ersten Track und jeweils ein Teil den nächsten beiden Tracks zugewiesen.

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

In diesem letzten Beispiel mischen wir absolut dimensionierte Tracks mit `fr` Einheiten. Der erste Track ist `500px`, sodass die feste Breite vom verfügbaren Platz abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und im Verhältnis zu den zwei flexiblen Tracks zugewiesen.

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

### Track-Auflistungen mit der repeat() Notation

Große Grids mit vielen Tracks können die [`repeat()`](/de/docs/Web/CSS/Reference/Values/repeat) Notation verwenden, um die gesamte oder einen Abschnitt der Liste von Grid-Tracks zu wiederholen. Zum Beispiel die Grid-Definition:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Kann auch geschrieben werden als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Wiederholungsnotation kann für einen Teil der Liste von Tracks verwendet werden. In diesem Beispiel erstellen wir ein 8-Spalten-Grid; der Anfangs-Track ist `20px`, dann ein wiederholender Abschnitt von 6 `1fr` Tracks und ein abschließender `20px` Track.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Wiederholungsnotation (`repeat()`) verwendet die Track-Auflistung, um ein sich wiederholendes Muster von Tracks zu erstellen. In diesem Beispiel hat das Grid 10 Tracks; ein `1fr` Track wird von einem `2fr` Track gefolgt, wobei dieses Muster fünfmal wiederholt wird.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Bei der Erstellung unseres Beispiel-Grids haben wir unsere Spalten-Tracks explizit mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert, wobei das Grid bei Bedarf Zeilen erstellt, um den Inhalt aufzunehmen. Die Spalten definieren das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert wurden. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, indem weitere Grid-Linien gezogen werden.

Wenn Sie etwas außerhalb des definierten Grids platzieren oder aufgrund der Menge an Inhalten mehr Grid-Tracks benötigt werden, erstellt das Grid Zeilen und Spalten im _impliziten Grid_. Diese impliziten Tracks sind standardmäßig automatisch dimensioniert, was bedeutet, dass die Größe der erstellten Zeilen oder Spalten sowohl von ihrem Inhalt als auch vom verfügbaren freien Platz im Grid-Container beeinflusst wird. Das Schlüsselwort `auto` ermöglicht es den generierten Tracks, den Inhalt aufzunehmen und gleichzeitig jeden verbleibenden Platz zu teilen.

Sie können auch eine feste Größe für Tracks definieren, die im impliziten Grid erstellt werden, mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}}.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`, um sicherzustellen, dass die im impliziten Grid erstellten Tracks `200px` hoch sind.

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

### Track-Dimensionierung und minmax

Beim Einrichten eines expliziten Grids oder beim Definieren der Dimensionierung für automatisch erstellte Zeilen oder Spalten möchten wir möglicherweise Tracks eine Mindestgröße geben, aber auch sicherstellen, dass sie sich ausdehnen, um weiteren hinzugefügten Inhalt aufzunehmen. Zum Beispiel möchten wir möglicherweise, dass unsere Zeilen niemals kleiner als 100 Pixel werden, aber wenn unser Inhalt sich auf 300 Pixel Höhe erstreckt, dann möchten wir, dass sich die Zeile auf diese Höhe ausdehnt. Dies wird durch die {{cssxref("minmax()")}} Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` innerhalb des Werts der Eigenschaft `grid-auto-rows`. Indem wir `grid-auto-rows: minmax(100px, auto);` setzen, werden automatisch erstellte Zeilen mindestens `100px` hoch sein und eine maximale Höhe von `auto` haben. Wenn `auto` als maximaler Wert festgelegt wird, kann der Track wachsen, um seinen Inhalt aufzunehmen (bis zu seiner `max-content` Größe) und gleichzeitig jeden verbleibenden freien Platz im Grid-Container teilen.

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

Es sollte beachtet werden, dass wir beim Definieren eines Grids die Grid-Tracks definieren, nicht die Linien. Grid gibt uns dann nummerierte Linien, die wir bei der Positionierung von Elementen verwenden können. In unserem dreispaltigen, zweizeiligen Grid haben wir vier Spaltenlinien.

![Diagramm mit nummerierten Grid-Linien.](1_diagram_numbered_grid_lines.png)

Linien werden entsprechend dem Schreibmodus des Dokuments nummeriert. In einer von links nach rechts geschriebenen Sprache befindet sich Linie 1 auf der linken Seite des Grids. In einer von rechts nach links geschriebenen Sprache befindet sie sich auf der rechten Seite des Grids. Linien können auch benannt werden, was im [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) Leitfaden besprochen wird.

### Positionierung von Elementen anhand von Linien

Das folgende Beispiel zeigt eine grundlegende lineenbasierte Platzierung; beim Platzieren eines Elements richten wir uns auf die Linie und nicht auf den Track. Dies wird im [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) Leitfaden ausführlicher erläutert.

In diesem Beispiel werden die ersten beiden Elemente in unserem drei-Spalten-Track-Grid mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} positioniert. Von links nach rechts wird das erste Element an Spaltenlinie 1 platziert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste rechte Linie des Grids ist. Es beginnt bei Zeilenlinie 1 und endet bei Zeilenlinie 3 und erstreckt sich somit über zwei Zeilentracks.

Das zweite Element beginnt an der Grid-Spaltenlinie 1 und erstreckt sich über einen Track. Dies ist der Standard, daher müssen wir die Endlinie nicht spezifizieren. Es erstreckt sich auch über zwei Zeilentracks von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente platzieren sich in den leeren Räumen auf dem Grid.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwickler-Tools, um zu sehen, wie die Elemente gegen die Linien des Grids positioniert sind.

### Linienpositions-Kurzformen

Die oben verwendeten Langwerte können auf eine Linie für Spalten mit der {{cssxref("grid-column")}} Kurzform und auf eine Linie für Zeilen mit der {{cssxref("grid-row")}} Kurzform komprimiert werden. Das folgende Beispiel würde die gleiche Positionierung wie im vorherigen Code ergeben, jedoch mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

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

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Grid. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, sobald ein Grid als übergeordnetes Element definiert ist, legen sich die untergeordneten Elemente jedes in einer Zelle des definierten Grids ab. Im nachstehenden Bild ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können sich über eine oder mehrere Zellen sowohl in der Zeilen- als auch in der Spaltenrichtung erstrecken, wodurch ein _Grid-Bereich_ entsteht. Grid-Bereiche müssen rechteckig sein – es ist zum Beispiel nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Zeilen- und zwei Spaltentracks.

![Ein Grid-Bereich](1_grid_area.png)

## Rinnen

_Rinnen_ oder _Gassen_ zwischen Grid-Zellen können mit den {{cssxref("column-gap")}} und {{cssxref("row-gap")}} Eigenschaften oder der Kurzform {{cssxref("gap")}} erstellt werden. Im folgenden Beispiel fügen wir einen 10-Pixel-Abstand zwischen Spalten und einen `1em` Abstand zwischen Zeilen hinzu.

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

Jeder durch Lücken genutzte Raum wird berücksichtigt, bevor Raum den flexiblen Längen `fr` Tracks zugewiesen wird, und Lücken verhalten sich für Größenberechnungszwecke wie ein regulärer Grid-Track, jedoch können Sie nichts in eine Lücke platzieren. In Bezug auf die linienbasierte Positionierung verhält sich die Lücke wie eine dicke, transparente Linie.

## Verschachtelte Grids

Ein Grid-Element kann zu einem Grid-Container werden. Im folgenden Beispiel erweitern wir das zuvor gesehene dreispaltige Grid mit zwei positionierten Elementen, indem wir Unterelemente zum ersten Grid-Element hinzufügen. Da diese verschachtelten Elemente keine direkten Kinder des Grids sind, nehmen sie nicht am Grid-Layout teil und werden daher im normalen Dokumentfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Track-Definition geben und es wird ebenfalls zu einem Grid. Die Elemente werden dann auf diesem neuen Grid angeordnet.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum übergeordneten Grid. Wie Sie im Beispiel sehen können, hat es nicht die {{cssxref("gap")}} des übergeordneten Grids geerbt, und die Linien im verschachtelten Grid sind nicht an die Linien im übergeordneten Grid ausgerichtet.

### Subgrid

Zusätzlich zu regulären Grids können wir ein _Subgrid_ erstellen. Der `subgrid` Wert ermöglicht es uns, verschachtelte Grids zu erstellen, die die Track-Definition des übergeordneten Grids verwenden.

Um sie zu verwenden, ändern wir das obige Beispiel für das verschachtelte Grid, um die Track-Definition von `grid-template-columns: repeat(3, 1fr)` auf `grid-template-columns: subgrid` zu ändern. Das verschachtelte Grid verwendet dann die Tracks des übergeordneten Grids, um Elemente anzuordnen.

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

Grid-Elemente können dieselbe Zelle einnehmen, und in diesem Fall können wir die {{cssxref("z-index")}} Eigenschaft verwenden, um die Reihenfolge zu kontrollieren, in der sich überlappende Elemente stapeln.

### Überlappung ohne z-index

Wenn wir zu unserem Beispiel mit nach Liniennummer platzierten Elementen zurückkehren, können wir dies ändern, um zwei Elemente einander überlappen zu lassen.

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

Wir können die Reihenfolge steuern, in der sich Elemente stapeln, indem wir die `z-index` Eigenschaft verwenden – genau wie bei positionierten Elementen. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` im Stapel angezeigt.

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

In diesem Überblick haben wir einen sehr schnellen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erforschen und spielen Sie mit den Code-Beispielen, und gehen Sie dann zum Leitfaden [Beziehung des Grid-Layouts mit anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods) über, wo wir wirklich anfangen werden, die Details des CSS-Grid-Layouts zu vertiefen.
