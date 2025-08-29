---
title: Grundkonzepte des Grid-Layouts
short-title: Basic concepts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 36c96d045d57bdc6ae80c8fe95848151601d90b5
---

Das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Grids können verwendet werden, um größere Seitenbereiche oder kleine Benutzerschnittstellenelemente zu gestalten. Dieser Leitfaden führt in das CSS-Grid-Layout ein und erklärt die Terminologie, die Teil der CSS-Grid-Layout-Spezifikation ist. Die in dieser Übersicht gezeigten Funktionen werden dann in den anderen Leitfäden dieser Serie detaillierter erklärt.

## Was ist ein Grid?

Ein Grid ist eine Menge sich kreuzender horizontaler und vertikaler Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf dem Grid platziert werden. Das CSS-Grid-Layout bietet folgende Funktionen:

### Feste und flexible Spurgrößen

Sie können ein Grid mit festen Spurgrößen erstellen - zum Beispiel mit Pixeln. Dies setzt das Grid auf die spezifizierte Pixelgröße, die zu dem gewünschten Layout passt. Sie können auch ein Grid mit flexiblen Größen erstellen, indem Sie Prozentsätze oder die für diesen Zweck entworfene Einheit [`fr`](#die_fr-einheit) verwenden.

### Platzierung der Elemente

Sie können Elemente mithilfe von Liniennummern, Namen oder durch Anvisieren eines Bereichs des Grids an einem genauen Ort auf dem Grid platzieren. Das Grid enthält auch einen Algorithmus zur Steuerung der Platzierung von Elementen, die keine explizite Position auf dem Grid haben.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Sie können ein explizites Grid mit dem Grid-Layout definieren. Die vom Grid-Layout-Modul definierten Funktionen bieten die Flexibilität, nach Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie das Hinzufügen von "so vielen Spalten, die in einen Container passen" sind enthalten.

### Steuerung der Ausrichtung

Das CSS-Grid-Layout und die [CSS-Box-Ausrichtungsfunktionen](/de/docs/Web/CSS/CSS_box_alignment) ermöglichen es uns, die Ausrichtung der Elemente zu steuern, sobald diese in einen Grid-Bereich platziert sind, und wie das gesamte Grid ausgerichtet ist.

### Steuerung von sich überlappenden Inhalten

Mehr als ein Element kann in eine Rasterzelle oder einen Bereich eingefügt werden und sie können sich teilweise überlappen. Diese Schichtung kann dann mit der {{cssxref("z-index")}}-Eigenschaft gesteuert werden.

Grid ist eine leistungsstarke Layoutmethode, die in Kombination mit anderen Teilen von CSS wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) Ihnen helfen kann, Layouts zu erstellen, die reaktionsfähig, flexibel und zugänglich sind. Es beginnt alles damit, ein Grid in Ihrem **{{Glossary("grid_container", "grid container")}}** zu erstellen.

## Grid-Container

Wir erstellen einen _Grid-Container_, indem wir `display: grid` oder `display: inline-grid` auf einem Element deklarieren. Sobald wir dies tun, werden alle _direkten Kinder_ dieses Elements zu _Grid-Elementen_.

In diesem Beispiel haben wir ein umschließendes `div` mit einer Klasse von `wrapper`. Darin verschachtelt sind fünf Kindelemente.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen den `.wrapper` zu einem Grid-Container, indem wir `display: grid;` verwenden.

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

Alle direkten Kinder sind jetzt Grid-Elemente. In einem Webbrowser sehen Sie keinen Unterschied in der Darstellung dieser Elemente, bevor sie in ein Grid umgewandelt werden, da das Grid für die Elemente eine Einzelspaltengitter erstellt hat. Wenn Sie das Grid in den Entwicklerwerkzeugen Ihres Browsers inspizieren, sehen Sie möglicherweise ein kleines Symbol neben dem Wert `grid`. Klicken Sie darauf, und in den meisten Browsern wird das Grid auf diesem Element im Browserfenster überlagert.

![Verwenden des Grid-Hervorhebers in Firefox DevTools zum Ansehen eines Grids](1-grid-inspector.png)

Wenn Sie das CSS-Grid-Layout erlernen und dann damit arbeiten, geben Ihnen Ihre Browserwerkzeuge eine bessere Vorstellung davon, was mit Ihren Grids visuell passiert.

Wenn wir dies mehr nach Grid aussehen lassen wollen, müssen wir Spaltenspuren hinzufügen.

## Grid-Spuren

Wir definieren Zeilen und Spalten in unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren {{Glossary("grid_tracks", "Grid-Spuren")}}. Eine _Grid-Spur_ ist der Raum zwischen zwei angrenzenden Linien auf dem Grid. Das Bild unten zeigt eine hervorgehobene Spur – das ist die erste Zeilenspur in unserem Grid.

![Eine Box mit 3 Gitterelementen. Über den drei Elementen befindet sich ein festes hellgrünes Gebiet, das die Spur ist.](1_grid_track.png)

Grid-Spuren werden im [expliziten Grid](#implizite_und_explizite_grids) durch die Eigenschaften `grid-template-columns` und `grid-template-rows` oder die Kurzform `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Grid erstellt, indem ein Grid-Element außerhalb der im expliziten Grid erstellten Spuren positioniert wird.

### Einfaches Beispiel

Wir können Spaltenspuren zu unserem früheren Beispiel hinzufügen, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spaltenspuren definieren.

Wir haben jetzt ein Grid mit drei 200 Pixel breiten Spaltenspuren erstellt. Die Kindelemente werden in diesem Grid angeordnet, jeweils eines in jeder Gitterzelle.

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

Spuren können mit jeder Längeneinheit definiert werden. Das Grid führt auch eine zusätzliche Längeneinheit ein, um uns zu helfen, flexible Grid-Spuren zu erstellen. Die [`fr`](/de/docs/Web/CSS/flex_value) Einheit stellt einen Bruchteil des verfügbaren Raumes im Grid-Container dar. Die nächste Grid-Definition würde drei gleichbreite Spuren erstellen, die gemäß dem verfügbaren Raum wachsen und sich verkleinern.

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

In diesem Beispiel erstellen wir eine Definition mit einer `2fr` Spur und dann zwei `1fr` Spuren. Der verfügbare Raum wird in vier Teile geteilt. Zwei Teile werden der ersten Spur und je ein Teil den nächsten zwei Spuren zugewiesen.

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

In diesem letzten Beispiel mischen wir absolut große Spuren mit `fr`-Einheiten. Die erste Spur ist `500px`, sodass die feste Breite vom verfügbaren Raum abgezogen wird. Der verbleibende Raum wird in drei Teile geteilt und proportional den beiden flexiblen Spuren zugewiesen.

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

### Spuraufzählungen mit der repeat() Notation

Große Grids mit vielen Spuren können die [`repeat()`](/de/docs/Web/CSS/repeat) Notation verwenden, um alle oder einen Abschnitt der Liste der Grid-Spuren zu wiederholen. Zum Beispiel kann die Grid-Definition:

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

Die Repeat-Notation kann für einen Teil der Auflistung der Spuren verwendet werden. In diesem Beispiel erstellen wir ein 8-Spalten-Grid; die initiale Spur ist `20px`, dann ein wiederholter Abschnitt von 6 `1fr` Spuren, und eine letzte `20px` Spur.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Mit Repeat-Notation (`repeat()`) wird die Auflistung der Spuren verwendet, um ein wiederkehrendes Muster von Spuren zu erstellen. In diesem Beispiel wird das Grid 10 Spuren haben; eine `1fr` Spur folgt auf eine `2fr` Spur, wobei sich dieses Muster fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Bei der Erstellung unseres Beispiel-Grids haben wir unsere Spaltenspuren explizit mit der Eigenschaft {{cssxref("grid-template-columns")}} definiert, wobei das Grid Zeilen erstellt, um den Inhalt unterzubringen. Die Spalten definieren das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert sind. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, wie zum Beispiel in den Zeilen durch das Zeichnen zusätzlicher Gitterlinien.

Wenn Sie etwas außerhalb des definierten Grids platzieren oder aufgrund der Menge an Inhalten mehr Grid-Spuren benötigt werden, erstellt das Grid Zeilen und Spalten im _impliziten Grid_. Diese impliziten Spuren sind standardmäßig automatisch groß, was bedeutet, dass die Größe der erstellten Zeilen oder Spalten sowohl von ihrem Inhalt als auch von dem verfügbaren freien Raum innerhalb des Grid-Containers beeinflusst wird. Das `auto`-Schlüsselwort ermöglicht es den erzeugten Spuren, den Inhalt unterzubringen und gleichzeitig verbleibenden Raum zu teilen.

Sie können auch eine feste Größe für in impliziten Grids erstellte Spuren mit den Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} definieren.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`, um sicherzustellen, dass die in diesem impliziten Grid erstellten Spuren `200px` hoch sind.

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

Beim Einrichten eines expliziten Grids oder beim Definieren der Größe für automatisch erstellte Zeilen oder Spalten möchten wir möglicherweise Spuren eine Mindestgröße geben, aber auch sicherstellen, dass sie sich ausdehnen, um Inhalte aufzunehmen, die hinzugefügt werden. Zum Beispiel möchten wir möglicherweise, dass unsere Zeilen nicht kleiner als 100 Pixel schrumpfen, aber wenn unser Inhalt auf 300 Pixel in der Höhe gestreckt wird, möchten wir, dass sich die Zeile auf diese Höhe erstreckt. Dies wird durch die {{cssxref("minmax", "minmax()")}}-Funktion gelöst.

In diesem Beispiel verwenden wir `minmax()` innerhalb des Eigenschaftswerts `grid-auto-rows`. Durch das Setzen von `grid-auto-rows: minmax(100px, auto);`, werden automatisch erstellte Zeilen mindestens `100px` hoch sein und ein Maximum von `auto` haben. Das Setzen von `auto` als Maximalwert ermöglicht es der Spur, sich ausdehnen, um ihren Inhalt aufzunehmen (bis zu ihrer `max-content`-Größe) und gleichzeitig verbleibenden freien Raum im Grid-Container zu teilen.

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

Es sollte beachtet werden, dass wir bei der Definition eines Grids die Grid-Spuren, nicht die Linien, definieren. Das Grid gibt uns dann nummerierte Linien, um Elemente zu positionieren. In unserem dreispaltigen, zweizeiligen Grid haben wir vier Spaltenlinien.

![Diagramm zeigt nummerierte Grid-Linien.](1_diagram_numbered_grid_lines.png)

Linien werden entsprechend dem Schreibmodus des Dokuments nummeriert. In einer Sprache von links nach rechts ist die Linie 1 auf der linken Seite des Grids. In einer Sprache von rechts nach links befindet sie sich auf der rechten Seite des Grids. Linien können auch benannt werden, was im [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) Leitfaden erläutert wird.

### Positionierung von Elementen gegen Linien

Das folgende Beispiel zeigt eine grundlegende linienbasierte Platzierung; Beim Platzieren eines Elements zielen wir auf die Linie und nicht auf die Spur ab. Dies wird im Leitfaden [grid layout using line-based placement](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) detaillierter behandelt.

In diesem Beispiel werden die ersten beiden Elemente auf unserem dreispaltigen Spur-Grid mit den Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} positioniert. Von links nach rechts wird das erste Element an Spaltenlinie 1 positioniert und erstreckt sich bis zur Spaltenlinie 4, die in unserem Fall die äußerste rechte Linie auf dem Grid ist. Es beginnt an der Zeilenlinie 1 und endet an der Zeilenlinie 3, spannt also zwei Zeilenspuren.

Das zweite Element beginnt an der Grid-Spaltenlinie 1 und umfasst eine Spur. Dies ist der Standard, daher müssen wir die Endlinie nicht angeben. Es umfasst auch zwei Zeilenspuren von Zeilenlinie 3 bis Zeilenlinie 5. Die anderen Elemente werden sich selbst in die leeren Bereiche des Grids platzieren.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwicklerwerkzeugen, um zu sehen, wie die Elemente gegen die Linien des Grids positioniert sind.

### Linien-Positionierungs-Kurzformen

Die oben verwendeten Langformwerte können bei den Spalten mit der Kurzform {{cssxref("grid-column")}} und bei den Zeilen mit der Kurzform {{cssxref("grid-row")}} auf eine Linie reduziert werden. Das folgende Beispiel würde dieselbe Positionierung wie im vorherigen Code ergeben, jedoch mit weit weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

Sie können den Endwert weglassen, wenn das Gebiet nur eine Spur umfassen soll.

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

Eine _Grid-Zelle_ ist die kleinste Einheit auf einem Grid. Konzeptionell ist sie wie eine Tabellenzelle. Wie wir in unseren früheren Beispielen gesehen haben, wird, sobald ein Grid als Elternteil definiert ist, die Kind-Elemente sich jeweils in einer Zelle des definierten Grids anordnen. Im unten stehenden Bild ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids hervorgehoben](1_grid_cell.png)

## Grid-Bereiche

Elemente können sich über eine oder mehrere Zellen erstrecken, sowohl in Zeilen- als auch in Spaltenrichtung, und dies erzeugt einen _Grid-Bereich_. Grid-Bereiche müssen rechteckig sein - es ist beispielsweise nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Zeilen- und zwei Spaltenspuren.

![Ein Grid-Bereich](1_grid_area.png)

## Rinnen

_Rinnen_ oder _Gänge_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzform {{cssxref("gap")}} erstellt werden. Im unten stehenden Beispiel fügen wir einen 10-Pixel-Abstand zwischen den Spalten und einen `1em` Abstand zwischen den Zeilen hinzu.

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

Jeder Platz, der von Lücken verwendet wird, wird berücksichtigt, bevor Platz den flexiblen Längen `fr`-Spuren zugewiesen wird, und Lücken verhalten sich für Größenbestimmungszwecke wie eine reguläre Grid-Spur, jedoch können Sie nichts in eine Lücke platzieren. In Bezug auf die linienbasierte Positionierung verhält sich die Lücke wie eine dicke, transparente Linie.

## Verschachtelung von Grids

Ein Grid-Element kann zu einem Grid-Container werden. Im folgenden Beispiel erweitern wij das dreispaltige Grid mit zwei zuvor positionierten Elementen und fügen Unterelemente zum ersten Grid-Element hinzu. Da diese verschachtelten Elemente keine direkten Kinder des Grids sind, nehmen sie nicht an der Grid-Layout-Darstellung teil und werden daher im normalen Dokumentenfluss angezeigt.

![Verschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Subgrid

Wenn wir `box1` `display: grid` zuweisen, können wir eine Spurdefinition geben und es wird auch zu einem Grid. Die Elemente werden dann auf diesem neuen Grid angeordnet.

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

In diesem Fall hat das verschachtelte Grid keine Beziehung zum übergeordneten Element. Wie Sie im Beispiel sehen können, wurde das {{cssxref("gap")}} der Eltern nicht geerbt und die Linien im verschachtelten Grid sind nicht mit den Linien im übergeordneten Grid ausgerichtet.

### Subgrid

Zusätzlich zu regulären Grids können wir ein _Subgrid_ erstellen. Der `subgrid`-Wert ermöglicht es uns, verschachtelte Grids zu erstellen, die die Spurdefinition des übergeordneten Grids verwenden.

Um sie zu verwenden, bearbeiten wir das obige verschachtelte Grid-Beispiel und ändern die Spurdefinition von `grid-template-columns: repeat(3, 1fr)`, zu `grid-template-columns: subgrid`. Das verschachtelte Grid verwendet dann die übergeordneten Grid-Spuren, um Elemente anzuordnen.

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

Grid-Elemente können dieselbe Zelle belegen, und in diesem Fall können wir die Eigenschaft {{cssxref("z-index")}} verwenden, um die Reihenfolge zu steuern, in der sich überlappende Elemente stapeln.

### Überlappen ohne z-index

Wenn wir zu unserem Beispiel mit Elementen zurückkehren, die nach Liniennummer positioniert sind, können wir dies ändern, um zwei Elemente überlappen zu lassen.

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

Wir können die Reihenfolge, in der sich Elemente stapeln, mit der `z-index`-Eigenschaft steuern – genau wie bei positionierten Elementen. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` im Stapel angezeigt.

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

In dieser Übersicht haben wir einen sehr schnellen Blick auf die Möglichkeiten von Grid-Layouts geworfen. Erkunden und spielen Sie mit den Codebeispielen, und fahren Sie dann mit dem Leitfaden [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods) fort, wo wir wirklich anfangen, die Details des CSS-Grid-Layouts zu erkunden.
