---
title: Layout mit benannten Gitterlinien
short-title: Verwendung benannter Gitterlinien
slug: Web/CSS/Guides/Grid_layout/Named_grid_lines
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In früheren Leitfäden haben wir uns mit der Platzierung von Elementen auf den Linien beschäftigt, die durch [das Definieren von Gitterstrecken](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) entstanden sind und auch wie man Elemente [mithilfe benannter Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) platziert. In diesem Leitfaden schauen wir uns an, wie diese beiden Dinge zusammenarbeiten, wenn wir benannte Linien verwenden.

Die Benennung von Linien ist äußerst nützlich, jedoch entsteht durch diese Kombination aus Namen und Streckengrößen einige der verwirrendsten Grid-Syntaxen. Sobald Sie einige Beispiele durchgearbeitet haben, sollte es klarer und einfacher werden.

## Linien benennen beim Definieren eines Grids

Sie können einigen oder allen Linien in Ihrem Grid einen Namen zuweisen, wenn Sie Ihr Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} definieren. Um dies zu demonstrieren, verwenden wir das grundlegende Layout, das im Leitfaden über [linienbasierte Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) erstellt wurde. Diesmal erstellen wir das Grid mit benannten Linien.

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

Beim Definieren des Grids benennen wir unsere Linien innerhalb von eckigen Klammern (`[]`). Diese Namen können beliebig gewählt werden. Wir definieren einen Namen für den Anfang und das Ende des Containers, sowohl für Zeilen als auch für Spalten. In diesem Fall werden die Startzeilen und -spalten des zentralen Grid-Blocks sowohl `content-start` als auch `content-end` genannt.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Es ist nicht notwendig, alle Linien in unseren Grids zu benennen; Sie können sich dafür entscheiden, nur die Schlüssellinien Ihres Layouts zu benennen.

Sobald die Linien Namen haben, können wir den von uns definierten Namen anstelle der Liniennummer zur Platzierung der Gitterelemente verwenden.

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

Alles andere an der linienbasierten Platzierung funktioniert auf die gleiche Weise. In unserem Grid-Layout haben wir jeder numerischen Linie einen Aliasnamen gegeben. Bei unseren Gitterelementen verweisen wir auf einen Namen anstelle einer Zahl. Diese Art der Linienbenennung ist nützlich – bei der Erstellung eines responsiven Designs können wir die Gittereigenschaften des Containers aktualisieren, anstatt die Gitterelemente innerhalb jeder [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries/Using) zu aktualisieren.

### Linien mehrere Namen geben

Möglicherweise möchten Sie einer Linie mehr als einen Namen geben, vielleicht bezeichnet sie das Ende der Seitenleiste und den Anfang des Hauptteils. Um dies zu tun, fügen Sie die Namen in die eckigen Klammern mit Leerzeichen dazwischen ein `[sidebar-end main-start]`. Sie können dann mit einem der Namen auf diese Linie verweisen.

## Implizite Gitterbereiche aus benannten Linien

Beim Benennen der Linien haben wir erwähnt, dass Sie diese beliebig benennen können. Der Name ist ein {{cssxref("custom-ident")}}, ein vom Autor definierter Name. Bei der Wahl des Namens sollten Sie Wörter vermeiden, die in der Spezifikation vorkommen und verwirrend sein könnten - wie `span`. Idents werden nicht in Anführungszeichen gesetzt.

Obwohl Sie jeden Namen wählen können, erstellt Grid, wenn Sie `-start` und `-end` an die Linien um eine Fläche anhängen, wie wir es im obigen Beispiel getan haben, einen benannten Bereich mit dem Hauptnamen, der verwendet wurde. Im obigen Beispiel haben wir `content-start` und `content-end` sowohl für Zeilen als auch für Spalten. Das bedeutet, wir erhalten einen Grid-Bereich mit dem Namen `content` und könnten etwas in diesen Bereich platzieren, falls wir dies wünschen.

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

Wir verwenden die gleichen Gitterdefinitionen wie oben und platzieren ein einzelnes Element in den benannten Bereich `content`.

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

Wir müssen nicht mit {{cssxref("grid-template-areas")}} definieren, wo unsere Bereiche liegen, da unsere benannten Linien uns einen Bereich erstellt haben.

## Implizite Gitterlinien aus benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und dies funktioniert auch umgekehrt. Benannte Template-Bereiche erstellen benannte Linien, die Sie zur Platzierung Ihrer Elemente verwenden können. Wenn wir das Layout aus dem Leitfaden zu [grid template areas](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) nehmen, können wir die von unseren Bereichen erstellten Linien verwenden, um zu sehen, wie dies funktioniert.

In diesem Beispiel haben wir ein zusätzliches `<div>` mit einer Klasse `overlay` hinzugefügt. Wir haben benannte Bereiche erstellt, die die Eigenschaft {{cssxref("grid-area")}} verwenden, dann ein Layout, das in `grid-template-areas` erstellt wurde. Die Bereichsnamen sind:

- `hd`
- `ft`
- `main`
- `sd`

Dies gibt uns Spalten- und Zeilenlinien:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Sie können die benannten Linien im Bild sehen. Beachten Sie, dass einige Linien zwei Namen haben - zum Beispiel beziehen sich `sd-end` und `main-start` auf dieselbe Spaltenlinie.

![Ein Bild, das die von unseren Gitterbereichen erstellten impliziten Linienstammen zeigt.](5_multiple_lines_from_areas.png)

Die Positionierung von `overlay` mit diesen implizit benannten Linien erfolgt genauso wie die Positionierung eines Elements mit benannten Linien.

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

Da wir die Möglichkeit haben, Linien aus benannten Bereichen und Bereiche aus benannten Linien zu positionieren, lohnt es sich, ein wenig Zeit damit zu verbringen, Ihre Benennungsstrategie zu planen, wenn Sie mit der Erstellung Ihres Grid-Layouts beginnen. Names, die für Sie und Ihr Team sinnvoll sind, machen Ihre Layouts intuitiver.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie all Ihren Gitterlinien einen eindeutigen Namen geben möchten, müssen Sie die Spurdefinition mit ausgeschriebenen Eigenschaften definieren, anstatt die Wiederholungssyntax zu verwenden, da die Namen beim Definieren von Spuren in eckige Klammern eingefügt werden müssen. Wenn Sie die Wiederholungssyntax verwenden, erhalten Sie mehrere Linien mit demselben Namen, was sowohl nützlich als auch verwirrend sein kann, abhängig von Ihren Layout-Anforderungen.

### Zwölf-Spalten-Grid mit repeat()

In diesem Beispiel erstellen wir ein Grid mit 12 gleich breiten Spalten. Bevor wir die `1fr` Größe der Spaltenstrecke definieren, definieren wir eine Linie mit dem Namen `[col-start]`. Dies bedeutet, dass wir ein Grid mit 12 Spaltenlinien haben, die alle `col-start` genannt werden, vor einer `1fr` breiten Spalte.

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

Sobald Sie das Grid erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien mit dem Namen `col-start` haben, wird die erste Linie mit dem Namen `col-start` verwendet, wenn Sie ein Element nach Linie `col-start` beginnen. In unserem Fall ist dies die äußerste linke Linie. Um eine andere Linie anzusprechen, verwenden Sie den Namen mit der Nummer für diese Linie.

Um ein Element zu platzieren, das von der ersten Linie namens `col-start` zur 5. Linie mit diesem Namen reicht, können wir verwenden:

```css
.item1to5 {
  grid-column: col-start / col-start 5;
}
```

Sie können auch das `span` Schlüsselwort verwenden. Dieses Element wird 3 Linien spanen, beginnend von der 7. Linie namens `col-start`:

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

Wenn Sie sich dieses Layout in den Entwicklertools Ihres Browsers ansehen, sehen Sie, wie die Spaltenlinien angezeigt werden und wie unsere Elemente sich an diesen Linien positionieren.

![Das 12-Spalten-Grid mit platzierten Elementen. Der Grid-Highlighter von Firefox zeigt die Position der Linien an.](5_named_lines1.png)

### Benennen von Linien mit einer Spurdefinition

Die `repeat()` Syntax kann auch eine Spurdefinition übernehmen; es sind nicht just einzelne Streckengrößen, die wiederholt werden können.

Dieser CSS-Code erstellt ein acht Spur Grid, mit einer schmaleren `1fr` breiten Spalte namens `col1-start`, gefolgt von einer breiteren `3fr` Spalte namens `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre Wiederholungssyntax zwei Linien nebeneinander setzt, werden sie zusammengeführt und ergeben dasselbe Ergebnis, wie wenn eine Linie mehrere Namen in einer nicht-wiederholenden Spurdefinition erhält. Die folgende Definition erstellt vier `1fr` Spuren, jede mit einer Start- und Endlinie.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Wenn wir diese Deklaration ohne Wiederholungsnotation schreiben, sieht sie so aus:

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Mit einer Spurdefinition können wir das `span` Schlüsselwort verwenden, um eine Anzahl von Linien zu umfassen, einschließlich Linien eines bestimmten Namens:

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

### Zwölf-Spalten-Grid-Framework

Nachdem wir nun über numerische und benannte linienbasierte Platzierung und [grid template areas](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas) gelernt haben, wissen wir jetzt, dass es mehrere Möglichkeiten gibt, Elemente mithilfe von CSS-Grid-Layout zu platzieren. Dies mag übermäßig komplex erscheinen, aber Sie müssen nicht alle verwenden. In der Praxis funktioniert die Verwendung benannter Template-Bereiche gut für unkomplizierte Layouts, da diese Methode eine gute visuelle Darstellung dessen gibt, wie Ihr Layout aussieht und es intuitiver macht, Dinge auf dem Grid zu bewegen. Zum Beispiel, wenn Sie mit einem strengen Mehrspalten-Layout arbeiten, funktioniert die im letzten Teil dieses Leitfadens demonstrierte benannte Linienbereitstellung gut.

Alte Grid-Systeme wie Foundation oder Bootstrap basieren auf einem 12-Spalten-Grid. Diese Frameworks importieren Code, um Berechnungen anzustellen, die sicherstellen, dass die Spalten sich auf 100 % addieren. Frameworks sind nicht notwendig! Der einzige CSS, den wir für ein 12-Spalten-Grid-Framework benötigen, ist:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dieses "Framework" dann verwenden, um unsere Seite zu gestalten.

Zum Beispiel, um ein Dreispaltenlayout mit einem Header und Footer zu erstellen, können wir das folgende Markup verwenden.

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

Wir können dies in unser Grid-Layout-Framework einfügen:

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

Nochmals, das Gitterhighlighting der Entwicklertools ist hilfreich, um uns zu zeigen, wie das Grid, auf dem wir unsere Elemente gelegt haben, funktioniert.

![Das Layout mit hervorgehobenem Grid.](5_named_lines2.png)

Das ist alles, was wir brauchen. Wir müssen keine Berechnungen durchführen! Das CSS-Grid-Layout hat automatisch unsere 10-Pixel-Gitterstrecke entfernt, bevor es den Platz den `1fr`-Spalten-Strecken zugewiesen hat.

Als Nächstes werden wir uns ansehen, wie das CSS-Grid-Layout Elemente für uns positionieren kann, ohne dass Platzierungseigenschaften überhaupt erforderlich sind, im [Leitfaden zur automatischen Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement).
