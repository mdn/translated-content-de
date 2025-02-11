---
title: Layout mit benannten Gitternetzlinien
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
l10n:
  sourceCommit: bd6d62961fbc6a05298a8b182f3c5461e5e54b28
---

{{CSSRef}}

In früheren Leitfäden haben wir uns damit beschäftigt, wie Elemente entlang der [definierten Gitternetzlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) platziert werden und wie Elemente [mithilfe benannter Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) positioniert werden können. In diesem Leitfaden betrachten wir, wie diese beiden Methoden zusammenarbeiten, wenn wir benannte Linien verwenden.

Das Benennen von Linien ist äußerst nützlich, jedoch gehören einige der verwirrendsten Grid-Syntaxen zu dieser Kombination aus Namen und Spurgrößen. Sobald Sie einige Beispiele durchgearbeitet haben, wird es klarer und einfacher in der Anwendung.

## Linien beim Definieren eines Grids benennen

Sie können einige oder alle Linien in Ihrem Gitternetz benennen, während Sie Ihr Grid mithilfe der Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} definieren. Zur Veranschaulichung verwenden wir das Grundlayout aus dem Leitfaden über [linienbasierte Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement). Dieses Mal erstellen wir das Gitter mit benannten Linien.

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

Beim Definieren des Gitters benennen wir unsere Linien in eckigen Klammern (`[]`). Diese Namen können Sie frei wählen. Wir definieren einen Namen für den Anfang und das Ende des Containers, sowohl für Zeilen als auch für Spalten. In diesem Fall heißen die Startzeilen und -spalten des mittleren Gitterblocks `content-start`, und die Endzeilen und -spalten heißen `content-end`.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Es ist nicht notwendig, alle Linien in unserem Grid zu benennen; Sie können sich dafür entscheiden, nur die wichtigsten Linien Ihres Layouts zu benennen.

Sobald die Linien benannt sind, können wir den definierten Namen anstelle der Liniennummer verwenden, um die Grid-Elemente zu platzieren.

```css
.box1 {
  grid-column-start: main-start;
  grid-row-start: main-start;
  grid-row-end: main-end;
}

.box2 {
  grid-column-start: content-end;
  grid-row-start: main-start;
  grid-row-end: content-end;
}

.box3 {
  grid-column-start: content-start;
  grid-row-start: main-start;
}

.box4 {
  grid-column-start: content-start;
  grid-column-end: main-end;
  grid-row-start: content-end;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
</div>
```

{{ EmbedLiveSample('Naming_lines_when_defining_a_grid', '500', '330') }}

Alles andere bezüglich der linienbasierten Platzierung funktioniert weiterhin genauso. In unserem Gitterlayout haben wir jeder numerischen Linie einen Alias-Namen zugewiesen. In unseren Gitterelementen beziehen wir uns auf einen Namen anstelle einer Nummer. Das Benennen von Linien auf diese Weise ist nützlich — bei der Erstellung eines responsiven Designs können wir die Gittereigenschaften des Containers aktualisieren, anstatt die Gitterelemente in jeder [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu ändern.

### Einer Linie mehrere Namen geben

Es kann notwendig sein, einer Linie mehr als einen Namen zu geben, beispielsweise um zu kennzeichnen, dass diese Linie gleichzeitig `sidebar-end` und `main-start` ist. Fügen Sie dazu die Namen mit einem Leerzeichen dazwischen innerhalb der eckigen Klammern hinzu: `[sidebar-end main-start]`. Sie können dann auf diese Linie mit einem dieser Namen verweisen.

## Implizite Gitterbereiche durch benannte Linien

Beim Benennen der Linien haben wir erwähnt, dass Sie diese beliebig benennen können. Der Name ist ein {{cssxref("custom-ident")}}, ein vom Autor definierter Name. Bei der Wahl des Namens sollten Sie Begriffe vermeiden, die in der Spezifikation vorkommen und möglicherweise verwirrend sind — wie `span`. Identifikatoren werden nicht in Anführungszeichen gesetzt.

Während Sie jeden Namen wählen können, erstellt das Anhängen von `-start` und `-end` an die Linien um einen Bereich – wie wir es oben gemacht haben – einen entsprechend benannten Bereich. Im obigen Beispiel haben wir `content-start` und `content-end` sowohl für Zeilen als auch für Spalten definiert. Dies bedeutet, dass wir einen Gitterbereich namens `content` bekommen, in den wir ein Element platzieren können, falls gewünscht.

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

Wir verwenden dieselben Gitterdefinitionen wie oben und platzieren ein einzelnes Element im benannten Bereich `content`.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
.thing {
  grid-area: content;
}
```

```html
<div class="wrapper">
  <div class="thing">I am placed in an area named content.</div>
</div>
```

{{ EmbedLiveSample('Implicit_grid_areas_from_named_lines', '500', '330') }}

Es ist nicht erforderlich, unsere Bereiche mit {{cssxref("grid-template-areas")}} zu definieren, da unsere benannten Linien automatisch einen Bereich für uns erstellt haben.

## Implizite Gitternetzlinien aus benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und dies funktioniert auch umgekehrt. Benannte Template-Bereiche erstellen benannte Linien, die Sie verwenden können, um Ihre Elemente zu platzieren. Wenn wir das Layout aus dem Leitfaden zu [Grid-Template-Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) nehmen, können wir die durch unsere Bereiche erstellten Linien nutzen.

In diesem Beispiel haben wir ein zusätzliches `<div>` mit einer Klasse `overlay` hinzugefügt. Wir haben Bereiche erstellt, die die {{cssxref("grid-area")}}-Eigenschaft verwenden, und dann ein Layout in `grid-template-areas` erstellt. Die Bereichsnamen sind:

- `hd`
- `ft`
- `main`
- `sd`

Das ergibt Spalten- und Zeilenlinien:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Sie können die benannten Linien im Bild sehen. Beachten Sie, dass einige Linien zwei Namen haben – beispielsweise beziehen sich `sd-end` und `main-start` auf dieselbe Spaltenlinie.

![Ein Bild, das die durch unsere Gitterbereiche erstellten impliziten Linienenamen zeigt.](5_multiple_lines_from_areas.png)

Das Positionieren von `overlay` mit diesen implizit benannten Linien funktioniert genauso wie das Positionieren eines Elements mit benannten Linien.

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-auto-rows: minmax(100px, auto);
  grid-template-areas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "ft ft ft ft   ft   ft   ft   ft   ft";
}

.header {
  grid-area: hd;
}

.footer {
  grid-area: ft;
}

.content {
  grid-area: main;
}

.sidebar {
  grid-area: sd;
}

.wrapper > div.overlay {
  z-index: 10;
  grid-column: main-start / main-end;
  grid-row: hd-start / ft-end;
  border: 4px solid rgb(92 148 13);
  background-color: rgb(92 148 13 / 40%);
  color: rgb(92 148 13);
  font-size: 150%;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
  <div class="overlay">Overlay</div>
</div>
```

{{ EmbedLiveSample('Implicit_Grid_lines_from_named_areas', '500', '330') }}

Da wir diese Möglichkeit haben, Linien aus benannten Bereichen und Bereiche aus benannten Linien zu erstellen, lohnt es sich, eine Strategie für Ihre Namensgebung zu planen, bevor Sie mit der Erstellung Ihres Gitterlayouts beginnen. Die Auswahl von Namen, die sowohl für Sie als auch Ihr Team sinnvoll sind, wird Ihre Layouts intuitiver gestalten.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie allen Gitternetzlinien einen eindeutigen Namen geben möchten, müssen Sie die Spurdefinition mit lang ausgeschriebenen Eigenschaften definieren, anstatt die `repeat()`-Syntax zu verwenden, da die Namen in eckige Klammern geschrieben werden müssen, wenn Spuren definiert werden. Wenn Sie dennoch die `repeat()`-Syntax verwenden, erhalten Sie mehrere Linien mit demselben Namen, was je nach Layoutanforderungen nützlich oder verwirrend sein kann.

### Zwölf-Spalten-Grid mit repeat()

In diesem Beispiel erstellen wir ein Grid mit 12 gleich breiten Spalten. Vor der Definition der `1fr`-Spurgröße der Spaltenlinie definieren wir eine Linie namens `[col-start]`. Dadurch haben wir ein Gitter mit 12 Spaltenlinien, die alle `col-start` heißen, vor einer `1fr` breiten Spalte.

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Sobald Sie das Gitter erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien mit dem Namen `col-start` haben, wird bei der Platzierung eines Elements, das nach der Linie `col-start` beginnen soll, die erste Linie mit dem Namen `col-start` verwendet. In unserem Fall ist dies die ganz linke Linie. Um eine andere Linie anzusprechen, verwenden Sie den Namen in Kombination mit der entsprechenden Nummer dieser Linie.

Um ein Element von der ersten Linie namens `col-start` bis zur 5. Linie mit diesem Namen zu spannen, können wir Folgendes verwenden:

```css
.item1to5 {
  grid-column: col-start / col-start 5;
}
```

Sie können auch das Schlüsselwort `span` verwenden. Dieses Element wird 3 Linien spannen, beginnend mit der 7. Linie namens `col-start`:

```css
.item7to9 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="wrapper">
  <div class="item1to5">I am placed from col-start line 1 to col-start 5</div>
  <div class="item7to9">I am placed from col-start line 7 spanning 3 lines</div>
</div>
```

{{ EmbedLiveSample('Twelve-column_grid_using_repeat', '500', '120') }}

Wenn Sie dieses Layout in den Entwicklerwerkzeugen Ihres Browsers betrachten, sehen Sie, wie die Spaltenlinien dargestellt werden und wie unsere Elemente an diesen Linien positioniert sind.

![Das 12-Spalten-Grid mit platzierten Elementen. Der Firefox-Gitter-Hervorheber zeigt die Position der Linien.](5_named_lines1.png)

### Benannte Linien mit einer Spur(en)-Liste definieren

Die `repeat()`-Syntax kann auch eine Liste von Spuren aufnehmen; es sind nicht nur einzelne Spurgrößen möglich.

Dieses CSS erstellt ein Gitter mit acht Spuren, wobei eine schmalere 1fr-Spalte namens `col1-start` auf eine breitere 3fr-Spalte namens `col2-start` folgt.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre Wiederholungssyntax zwei Linien nebeneinander platziert, werden diese zusammengeführt und führen zum gleichen Ergebnis wie das Geben mehrerer Namen für eine Linie in einer nicht wiederholenden Spurdefinition. Die folgende Definition erstellt vier `1fr`-Spuren, jede mit einer Start- und Endlinie.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Ohne Wiederholen-Syntax würde diese Erklärung wie folgt aussehen:

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Mithilfe einer Spur(en)-Liste können wir das `span`-Schlüsselwort nutzen, um eine bestimmte Anzahl von Linien zu überspannen, einschließlich Linien mit einem bestimmten Namen:

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

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, [col1-start] 1fr [col2-start] 3fr);
}

.item1 {
  grid-column: col1-start / col2-start 2;
}

.item2 {
  grid-row: 2;
  grid-column: col1-start 2 / span 2 col1-start;
}
```

```html
<div class="wrapper">
  <div class="item1">
    I am placed from col1-start line 1 to col2-start line 2
  </div>
  <div class="item2">
    I am placed from col1-start line 2 spanning 2 lines named col1-start
  </div>
</div>
```

{{ EmbedLiveSample('Defining_named_lines_with_a_track_list', '500', '230') }}

### Zwölf-Spalten-Framework

Nachdem wir numerische und benannte linienbasierte Platzierung sowie [grid-template-areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) kennengelernt haben, wissen wir nun, dass es mehrere Möglichkeiten gibt, Elemente mithilfe des CSS-Grid-Layouts zu platzieren. Dies mag komplex erscheinen, aber Sie müssen nicht alle Methoden verwenden. In der Praxis funktionieren benannte Template-Bereiche gut für einfache Layouts, da sie eine gute visuelle Darstellung des Layouts bieten und eine intuitivere Arbeit mit dem Grid ermöglichen. Bei einem strengen Mehrspaltenlayout funktioniert die zuletzt demonstrierte Benennung von Linien gut.

Veraltete Gridsysteme wie Foundation oder Bootstrap basieren auf einem 12-Spalten-Grid. Diese Frameworks verwenden Code, um sicherzustellen, dass die Spalten 100 % Gesamtbreite ergeben. Frameworks sind jedoch nicht notwendig! Das einzige CSS, das wir für ein 12-Spalten-Grid-"Framework" benötigen, ist:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dieses "Framework" dann verwenden, um unsere Seite zu gestalten.

Um beispielsweise ein dreispaltiges Layout mit einem Header und Footer zu erstellen, können wir folgenden Markup verwenden:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > * {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <header class="main-header">I am the header</header>
  <aside class="side1">I am sidebar 1</aside>
  <article class="content">I am the main article</article>
  <aside class="side2">I am sidebar 2</aside>
  <footer class="main-footer">I am the footer</footer>
</div>
```

Wir können dies in unser Grid-Framework einfügen:

```css
.main-header,
.main-footer {
  grid-column: col-start / span 12;
}

.side1 {
  grid-column: col-start / span 3;
  grid-row: 2;
}

.content {
  grid-column: col-start 4 / span 6;
  grid-row: 2;
}

.side2 {
  grid-column: col-start 10 / span 3;
  grid-row: 2;
}
```

{{ EmbedLiveSample('Twelve-column_grid_framework', '500', '220') }}

Auch hier sind die Grid-Hervorhebungswerkzeuge der Entwicklerwerkzeuge hilfreich, um anzuzeigen, wie unsere Elemente auf dem Grid platziert sind.

![Das Layout mit dem hervorgehobenen Gitter.](5_named_lines2.png)

Das war's auch schon. Wir müssen keine Berechnungen vornehmen! Das CSS-Grid-Layout hat unsere 10-Pixel-Abstandsspur automatisch entfernt, bevor der Platz den `1fr`-Spalten zugewiesen wurde.

Als nächstes werden wir untersuchen, wie das CSS-Grid-Layout Elemente für uns positionieren kann, ohne Platzierungseigenschaften zu erfordern, im [Leitfaden zur automatischen Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout).
