---
title: Grundlegende Konzepte des Grid-Layouts
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: fa5ac9bd4a01375d7ab8f05b4f71e23e4e8e6a84
---

{{CSSRef}}

[CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) führt ein zweidimensionales Rastersystem in CSS ein. Raster können verwendet werden, um sowohl große Seitenbereiche als auch kleine Benutzeroberflächenelemente anzuordnen. Dieser Leitfaden führt in das CSS Grid Layout ein und erläutert die Terminologie, die Teil der CSS Grid Layout-Spezifikation ist. Die in dieser Übersicht gezeigten Funktionen werden in den anderen Leitfäden dieser Reihe ausführlicher erklärt.

## Was ist ein Grid?

Ein Grid ist ein Satz aus sich schneidenden horizontalen und vertikalen Linien, die Zeilen und Spalten definieren. Elemente können innerhalb dieser Spalten- und Zeilenlinien auf das Grid gesetzt werden. CSS Grid Layout bietet die folgenden Funktionen:

### Feste und flexible Spurgrößen

Sie können ein Grid mit festen Spurgrößen erstellen – beispielsweise mit Pixeln. Damit wird das Grid auf die angegebene Pixelgröße festgelegt, die zu dem gewünschten Layout passt. Sie können auch ein Grid mit flexiblen Größen erstellen, indem Sie Prozentsätze oder die für diesen Zweck entworfene Einheit [`fr`](#die_einheit_fr) verwenden.

### Positionierung von Elementen

Sie können Elemente auf einen präzisen Ort im Grid setzen, indem Sie Liniennummern, Namen oder einen Bereich des Grids ansprechen. Grid enthält außerdem einen Algorithmus, um die Platzierung von Elementen zu steuern, denen keine explizite Position im Grid zugewiesen wurde.

### Erstellung zusätzlicher Spuren zur Aufnahme von Inhalten

Mit Grid Layout können Sie ein explizites Grid definieren. Die im Grid Layout-Modul definierten Funktionen bieten die Flexibilität, bei Bedarf zusätzliche Zeilen und Spalten hinzuzufügen. Funktionen wie „so viele Spalten hinzufügen, wie in einen Container passen“ sind enthalten.

### Kontrolle der Ausrichtung

CSS Grid Layout und [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) ermöglichen es, die Ausrichtung der Elemente innerhalb eines Grid-Bereichs sowie des gesamten Grids zu steuern.

### Kontrolle überlappender Inhalte

Mehr als ein Element kann in einer Grid-Zelle oder einem Grid-Bereich platziert werden, sodass sie sich teilweise überlappen können. Diese Schichtung kann anschließend mit der Eigenschaft {{cssxref("z-index")}} gesteuert werden.

Grid ist eine leistungsstarke Layout-Methode, die zusammen mit anderen CSS-Funktionen, wie zum Beispiel [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), helfen kann, responsive, flexible und zugängliche Layouts zu erstellen. Alles beginnt mit der Erstellung eines Grids im **{{Glossary("grid_container", "Grid-Container")}}**.

## Grid-Container

Ein _Grid-Container_ wird erstellt, indem `display: grid` oder `display: inline-grid` auf einem Element deklariert wird. Sobald dies erfolgt, werden alle _direkten Kinder_ dieses Elements zu _Grid-Elementen_.

Im folgenden Beispiel haben wir ein übergeordnetes `div` mit der Klasse `wrapper`. Darin sind fünf Kindelemente verschachtelt.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Wir machen die `.wrapper`-Klasse zu einem Grid-Container, indem wir `display: grid;` verwenden.

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

Alle direkten Kinder sind nun Grid-Elemente. In einem Webbrowser sehen Sie keinen Unterschied zur Anzeige dieser Elemente vor der Änderung, da das Grid zunächst einspaltig angelegt wurde. Wenn Sie das Grid in den Entwickler-Tools Ihres Browsers inspizieren, könnte ein kleines Symbol neben dem Wert `grid` erscheinen. Klicken Sie darauf, um in den meisten Browsern das Grid in der Browseransicht überlagert darzustellen.

![Verwendung des Grid-Highlighters in Firefox DevTools, um ein Grid sichtbar zu machen](1-grid-inspector.png)

Während Sie den Umgang mit CSS Grid Layout lernen und anwenden, helfen Ihnen Ihre Browser-Tools, visuell besser zu verstehen, was auf Ihren Grids passiert.

Wenn wir damit beginnen möchten, das Layout grid-artiger zu gestalten, müssen wir Spalten-Spuren hinzufügen.

## Grid-Spuren

Wir definieren Zeilen und Spalten auf unserem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Diese definieren {{Glossary("grid_tracks", "Grid-Spuren")}}. Eine _Grid-Spur_ ist der Raum zwischen zwei benachbarten Linien im Grid. Das folgende Bild zeigt eine hervorgehobene Spur – dies ist die erste Zeilen-Spur in unserem Grid.

![Eine Box mit 3 Grid-Elementen. Oberhalb der drei Elemente befindet sich ein durchgehender hellgrüner Bereich, der die Spur darstellt.](1_grid_track.png)

Grid-Spuren werden im [expliziten Grid](#implizite_und_explizite_grids) durch die Eigenschaften `grid-template-columns` und `grid-template-rows` oder durch die Kurzformen `grid` oder `grid-template` definiert. Spuren werden auch im impliziten Grid erstellt, indem ein Grid-Element außerhalb der im expliziten Grid erstellten Spuren positioniert wird.

### Einfaches Beispiel

Wir können unser vorheriges Beispiel erweitern, indem wir die Eigenschaft `grid-template-columns` hinzufügen und dann die Größe der Spalten-Spuren definieren.

Wir haben nun ein Grid mit drei 200 Pixel breiten Spalten-Spuren erstellt. Die Kind-Elemente werden auf diesem Grid jeweils in einer Zelle angeordnet.

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

Spuren können mit jeder Längeneinheit definiert werden. Grid führt auch eine zusätzliche Längeneinheit ein, die uns dabei hilft, flexible Grid-Spuren zu erstellen. Die [`fr`](/de/docs/Web/CSS/flex_value) Einheit repräsentiert einen Bruchteil des verfügbaren Raums im Grid-Container. Die folgende Grid-Definition würde drei gleich breite Spuren erstellen, die je nach verfügbarem Platz wachsen und schrumpfen.

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

In diesem Beispiel erstellen wir eine Definition mit einer `2fr`-Spur und zwei `1fr`-Spuren. Der verfügbare Platz wird in vier Teile aufgeteilt. Zwei Teile werden der ersten Spur zugeteilt und jeweils ein Teil den beiden nächsten Spuren.

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

### Kombination aus flexiblen und absoluten Größen

Im nächsten Beispiel kombinieren wir festgelegte Spurgrößen mit `fr`-Einheiten. Die erste Spur hat eine feste Breite von `500px`, die vom verfügbaren Platz abgezogen wird. Der verbleibende Platz wird in drei Teile geteilt und proportional den beiden flexiblen Spuren zugewiesen.

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

### Spurlisten mit repeat()-Schreibweise

Große Grids mit vielen Spuren können die Schreibweise [`repeat()`](/de/docs/Web/CSS/repeat) verwenden, um die Liste der Grid-Spuren vollständig oder teilweise zu wiederholen. Das folgende Grid könnte wie folgt definiert werden:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Oder als:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

Die Repeat-Schreibweise kann auch nur für Teile der Spurdefinition verwendet werden. In diesem Beispiel erstellen wir ein Grid mit 8 Spalten; die erste Spur ist `20px`, gefolgt von einer Wiederholung von 6 `1fr`-Spuren sowie einer abschließenden `20px`-Spur.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

Die Repeat-Schreibweise (`repeat()`) erstellt ein wiederholendes Muster von Spuren basierend auf der Liste der angegebenen Spuren. Im folgenden Beispiel hätte das Grid 10 Spuren; eine `1fr`-Spur wird von einer `2fr`-Spur gefolgt. Dieses Muster wird fünfmal wiederholt.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Implizite und explizite Grids

Beim Erstellen unseres Beispielgrids haben wir unsere Spalten-Spuren explizit durch die Eigenschaft {{cssxref("grid-template-columns")}} definiert, wobei das Grid die Zeilen je nach Inhalt erstellt. Die Spalten bilden das explizite Grid, während die Zeilen Teil des impliziten Grids sind.

Das _explizite Grid_ besteht aus Zeilen und Spalten, die mit {{cssxref("grid-template-columns")}} oder {{cssxref("grid-template-rows")}} definiert werden. Das _implizite Grid_ erweitert das definierte explizite Grid, wenn Inhalte außerhalb dieses Grids platziert werden, z. B. in Zeilen, durch das Ziehen zusätzlicher Grid-Linien.

Platzieren Sie Inhalte außerhalb des definierten Grids – oder wenn durch die Menge an Inhalt weitere Grid-Spuren benötigt werden –, erstellt das Grid Zeilen und Spalten im _impliziten Grid_. Diese Spuren haben standardmäßig eine automatische Größe, weshalb ihre Größe basierend auf dem Inhalt bestimmt wird, der sich darin befindet.

Sie können auch eine feste Größe für Spuren definieren, die im impliziten Grid erstellt werden, indem Sie die Eigenschaften {{cssxref("grid-auto-rows")}} und {{cssxref("grid-auto-columns")}} verwenden.

In diesem Beispiel setzen wir `grid-auto-rows: 200px`, wodurch die Spuren, die in diesem impliziten Grid erstellt werden, 200 Pixel hoch sind.

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

Beim Einrichten eines expliziten Grids oder beim Definieren der Größe für automatisch erstellte Zeilen oder Spalten möchten wir möglicherweise, dass Spuren eine Mindestgröße haben, aber gleichzeitig so breit sein können, wie der Inhalt es verlangt. Dies wird durch die Funktion {{cssxref("minmax", "minmax()")}} gelöst.

Im nächsten Beispiel verwenden wir `minmax()` innerhalb der Eigenschaft `grid-auto-rows`. Indem wir `grid-auto-rows: minmax(100px, auto);` setzen, haben automatisch erstellte Spuren eine Mindestgröße von `100px` und eine maximale Größe von `auto`. Die Angabe von `auto` als Wert für die maximale Größe bedeutet, dass die Spur sich an den Inhalt anpasst, basierend auf der höchsten Zelle des Inhalts.

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

Es sollte beachtet werden, dass wir bei der Definition eines Grids die Grid-Spuren, nicht die Linien, definieren. Grid gibt uns dann nummerierte Linien, die wir für die Positionierung von Elementen verwenden können. In unserem dreispaltigen, zwei-zeiligen Grid haben wir vier Spaltenlinien.

![Diagramm, das nummerierte Grid-Linien zeigt.](1_diagram_numbered_grid_lines.png)

Die Linien sind entsprechend der Schreibweise des Dokuments nummeriert. In einer links-nach-rechts-Sprache liegt Linie 1 auf der linken Seite des Grids. In einer rechts-nach-links-Sprache auf der rechten Seite. Linien können auch benannt werden, was im Leitfaden [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) besprochen wird.

### Positionierung von Elementen anhand von Linien

Das folgende Beispiel zeigt eine grundlegende, linienbasierte Positionierung. Dabei positioniert man ein Element an einer Linie und nicht auf der Spur. Weitere Informationen finden Sie im Leitfaden [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement).

Im Beispiel unten werden die ersten zwei Elemente unseres dreispaltigen Grid anhand der Eigenschaften {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} und {{cssxref("grid-row-end")}} positioniert.

Das erste Element wird bei Spaltenlinie 1 gestartet und erstreckt sich bis zu Spaltenlinie 4. Es beginnt bei Zeilenlinie 1 und endet bei Zeilenlinie 3 und erstreckt sich damit über zwei Zeilen-Spuren. Das zweite Element beginnt bei Spaltenlinie 1 und erstreckt sich über einen Track. Es erstreckt sich ebenfalls über zwei Zeilen-Tracks, von Linie 3 bis Linie 5. Die anderen Elemente platzieren sich automatisch in den verbleibenden Platz im Grid.

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

Verwenden Sie den Grid-Inspektor in Ihren Entwickler-Tools, um die Positionierung der Elemente an den Linien des Grids zu betrachten.

### Verkürzte Schreibweise für die Linienpositionierung

Die langen Werte, wie sie oben gezeigt wurden, können auf eine Zeile für Spalten mit dem {{cssxref("grid-column")}}-Kurzschreibweise oder für Zeilen mit {{cssxref("grid-row")}} komprimiert werden. Das folgende Beispiel liefert dieselbe Positionierung wie im vorherigen Code, jedoch mit viel weniger CSS. Der Wert vor dem Schrägstrich (`/`) ist die Startlinie, der Wert danach die Endlinie.

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

Eine _Grid-Zelle_ ist die kleinste Einheit in einem Grid. Konzeptuell ist sie wie eine Tabellenzelle. Wie in den vorherigen Beispielen gezeigt, werden Kind-Elemente in einer Zelle jeder definierten Grid-Spur angeordnet, sobald das Grid als übergeordnetes Element definiert ist. Im Bild unten ist die erste Zelle des Grids hervorgehoben.

![Die erste Zelle des Grids ist hervorgehoben.](1_grid_cell.png)

## Grid-Bereiche

Elemente können sich sowohl über mehrere Zellen in Zeilen- als auch in Spaltenrichtung erstrecken und damit einen _Grid-Bereich_ bilden. Grid-Bereiche müssen rechteckig sein – es ist z.B. nicht möglich, einen L-förmigen Bereich zu erstellen. Der hervorgehobene Grid-Bereich erstreckt sich über zwei Zeilen- und zwei Spalten-Tracks.

![Ein Grid-Bereich.](1_grid_area.png)

## Zwischenräume

_Zwischenräume_ oder _Abstände_ zwischen Grid-Zellen können mit den Eigenschaften {{cssxref("column-gap")}} und {{cssxref("row-gap")}} oder der Kurzform {{cssxref("gap")}} erstellt werden. Im Beispiel unten fügen wir einen 10-Pixel-Abstand zwischen den Spalten und einen `1em`-Abstand zwischen den Zeilen hinzu.

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

Jeder durch Lücken genutzte Raum wird vor der Zuweisung an die flexiblen `fr`-Spuren berücksichtigt, und Zwischenräume verhalten sich in Bezug auf die Größenanpassung wie eine reguläre Grid-Spur. Sie können jedoch nichts in eine Lücke setzen. In Bezug auf die linienbasierte Positionierung verhalten sich die Zwischenräume wie eine breite, transparente Linie.

## Geschachtelte Grids

Ein Grid-Element kann selbst zu einem Grid-Container werden. Im folgenden Beispiel erweitern wir das dreispaltige Grid mit den zuerst positionierten Elementen und fügen dem ersten Grid-Element Unterelemente hinzu. Da diese verschachtelten Elemente keine direkten Kinder des Grids sind, nehmen sie nicht am Grid-Layout teil und werden im normalen Dokumentfluss angezeigt.

![Geschachteltes Grid im Fluss](1_nested_grids_in_flow.png)

### Verschachtelung ohne Grid-Vererbung (Subgrid)

Wenn wir `box1` auf `display: grid` setzen, können wir ihm eine Spurdefinition zuweisen, und es wird selbst ein Grid. Die Elemente ordnen sich dann gemäß diesem neuen Grid an.

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

In diesem Fall besteht keine Beziehung zwischen dem verschachtelten Grid und dem übergeordneten Grid. Wie im Beispiel zu sehen ist, erbt es weder die {{cssxref("gap")}}-Eigenschaft des übergeordneten Grids, noch richten sich die Linien im verschachtelten Grid an den Linien des Hauptgrids aus.

### Subgrid

Zusätzlich zu den regulären Grids können wir ein _Subgrid_ erstellen. Der Wert `subgrid` erlaubt uns, verschachtelte Grids zu erstellen, die die Spurdefinition des übergeordneten Grids nutzen.

Um dies anzuwenden, ändern wir das oben genannte verschachtelte Grid-Beispiel und ersetzen in der Spurdefinition `grid-template-columns: repeat(3, 1fr)` durch `grid-template-columns: subgrid`. Das verschachtelte Grid verwendet dann die Spurdefinition des übergeordneten Grids, um seine Elemente zu organisieren.

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

## Überlappungen von Elementen mit z-index

Grid-Elemente können dieselbe Zelle belegen. In diesem Fall können wir die Reihenfolge der überlappenden Elemente mit der Eigenschaft {{cssxref("z-index")}} steuern.

### Überlappung ohne z-index

Wenn wir zu unserem Beispiel mit anhand der Liniennummer positionierten Elementen zurückkehren, können wir dies so ändern, dass zwei Elemente überlappen.

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

Das Element `box2` überlappt nun `box1` und wird darüber angezeigt, da es später im Dokumentenquellcode vorkommt.

### Reihenfolge steuern

Wir können die Anzeigereihenfolge wie bei positionierten Elementen mit dem `z-index`-Wert steuern. Wenn wir `box2` einen niedrigeren `z-index` als `box1` geben, wird es unter `box1` in der Schichtung angezeigt.

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

In dieser Übersicht haben wir einen schnellen Einblick in die Möglichkeiten des Grid-Layouts geworfen. Experimentieren Sie mit den Code-Beispielen und gehen Sie dann zum Leitfaden [Verhältnis des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods) über, um die Details des CSS Grid-Layouts ausführlich zu erforschen.
