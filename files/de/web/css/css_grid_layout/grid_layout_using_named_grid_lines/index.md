---
title: Layout mit benannten Gitternetzlinien
short-title: Verwendung benannter Gitternetzlinien
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In den vorherigen Leitfäden haben wir uns angesehen, wie man Elemente auf den Linien platziert, die durch das [Definieren von Gitternetz-Spuren](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) erstellt werden, und auch, wie man Elemente [mit benannten Vorlagenbereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) platziert. In diesem Leitfaden schauen wir uns an, wie diese beiden Dinge zusammenarbeiten, wenn wir benannte Linien verwenden.

Das Benennen von Linien ist unglaublich nützlich, aber einige der verwirrendsten Gitternetz-Syntaxen entstehen aus dieser Kombination von Namen und Spurgrößen. Sobald Sie einige Beispiele durchgearbeitet haben, sollte es klarer und einfacher werden, damit zu arbeiten.

## Linien benennen, wenn ein Gitter definiert wird

Sie können einigen oder allen Linien in Ihrem Gitter einen Namen zuweisen, wenn Sie Ihr Gitter mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} definieren. Um dies zu demonstrieren, verwenden wir das grundlegende Layout, das im Leitfaden über [linienbasiertes Platzieren](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) erstellt wurde. Dieses Mal erstellen wir das Gitter mit benannten Linien.

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

Bei der Definition des Gitters benennen wir unsere Linien innerhalb von eckigen Klammern (`[]`). Diese Namen können beliebig gewählt werden. Wir definieren einen Namen für den Start und das Ende des Containers, sowohl für Reihen als auch für Spalten. In diesem Fall sind die Startreihen und -spalten des zentralen Gitterblocks beide mit `content-start` benannt, und die Endreihen und -spalten sind beide mit `content-end` benannt.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Wir müssen nicht alle Linien in unseren Gittern benennen; Sie können sich entscheiden, nur die Schlüssel-Linien Ihres Layouts zu benennen.

Sobald die Linien Namen haben, können wir den von uns definierten Namen verwenden, anstatt der Liniennummer, um die Gitterelemente zu platzieren.

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

Alles andere über die linienbasierte Platzierung funktioniert weiterhin auf die gleiche Weise. In unserem Gitterlayout haben wir jeder numerischen Linie einen Aliasnamen zugewiesen. In unseren Gitterelementen verweisen wir auf einen Namen statt auf eine Nummer. Das Benennen von Linien auf diese Weise ist nützlich — bei der Erstellung eines responsiven Designs können wir die Gittereigenschaften des Containers aktualisieren, anstatt die Gitterelemente innerhalb jeder [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu aktualisieren.

### Linien mehrere Namen geben

Es ist möglich, einer Linie mehr als einen Namen zu geben, vielleicht bezeichnet es das Ende der Seitenleiste und den Start des Hauptbereichs. Dazu fügen Sie die Namen mit Leerzeichen dazwischen in die eckigen Klammern ein `[sidebar-end main-start]`. Sie können dann auf diese Linie mit einem der Namen verweisen.

## Implizite Gitterbereiche aus benannten Linien

Beim Benennen der Linien haben wir erwähnt, dass Sie diese Namen beliebig wählen können. Der Name ist ein {{cssxref("custom-ident")}}, ein vom Autor festgelegter Name. Beim Wählen des Namens sollten Sie Wörter vermeiden, die in der Spezifikation vorkommen und verwirrend sein könnten — wie `span`. Idents werden nicht in Anführungszeichen gesetzt.

Obwohl Sie jeden Namen wählen können, erstellt das Gitter einen benannten Bereich des Hauptnamens, wenn Sie `-start` und `-end` an Linien um einen Bereich anhängen, wie wir es im obigen Beispiel getan haben. Anhand des oben genannten Beispiels haben wir sowohl für Reihen als auch für Spalten `content-start` und `content-end`. Das bedeutet, dass wir einen Gitterbereich mit dem Namen `content` erhalten und bei Bedarf etwas in diesem Bereich platzieren können.

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

Wir müssen nicht definieren, wo sich unsere Bereiche befinden, mit {{cssxref("grid-template-areas")}}, denn unsere benannten Linien haben einen Bereich für uns erstellt.

## Implizite Gitterlinien aus benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und dies funktioniert auch umgekehrt. Benannte Vorlagenbereiche erstellen benannte Linien, die Sie verwenden können, um Ihre Elemente zu platzieren. Wenn wir das Layout aus dem Leitfaden zu [Grid-Vorlagenbereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) betrachten, können wir die Linien sehen, die durch unsere Bereiche erstellt wurden, um zu verstehen, wie dies funktioniert.

In diesem Beispiel haben wir ein zusätzliches `<div>` mit einer Klasse `overlay` hinzugefügt. Wir haben benannte Bereiche erstellt, indem wir die Eigenschaft {{cssxref("grid-area")}} verwendet haben, dann ein Layout in `grid-template-areas` erstellt. Die Bereichenamen sind:

- `hd`
- `ft`
- `main`
- `sd`

Dies gibt uns Spalten- und Reihenlinien:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Sie können die benannten Linien im Bild sehen. Beachten Sie, dass einige Linien zwei Namen haben - zum Beispiel, `sd-end` und `main-start` beziehen sich auf die gleiche Spaltenlinie.

![Ein Bild, das die impliziten Lininamen zeigt, die durch unsere Gitterbereiche erstellt wurden.](5_multiple_lines_from_areas.png)

Die Positionierung von `overlay` mit diesen impliziten benannten Linien ist gleich wie die Positionierung eines Elements mit benannten Linien.

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

Angesichts der Tatsache, dass wir diese Fähigkeit haben, Linien von benannten Bereichen und Bereiche von benannten Linien zu positionieren, lohnt es sich, ein wenig Zeit zu investieren, um Ihre Benennungsstrategie zu planen, wenn Sie beginnen, Ihr Gitterlayout zu erstellen. Die Auswahl von Namen, die für Sie und Ihr Team sinnvoll sind, macht Ihre Layouts intuitiver.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie allen Gitternetzen einen eindeutigen Namen geben möchten, müssen Sie die Spurdefinition mit Langform-Eigenschaften definieren, anstatt die Repeat-Syntax zu verwenden, da die Namen in eckigen Klammern hinzugefügt werden müssen, wenn Spuren definiert werden. Wenn Sie die Repeat-Syntax verwenden, erhalten Sie mehrere Linien mit demselben Namen, was je nach Ihren Layoutanforderungen nützlich oder verwirrend sein kann.

### Zwölf-Spalten-Gitter mit repeat()

In diesem Beispiel erstellen wir ein Gitter mit 12 gleich breiten Spalten. Bevor wir die `1fr` Größe der Spuren-Spalte definieren, definieren wir eine Linie namens `[col-start]`. Dies bedeutet, dass wir ein Gitter mit 12 Spaltenlinien haben, die alle `col-start` vor einer `1fr` breiten Spalte genannt werden.

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

Sobald Sie das Gitter erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien namens `col-start` haben, wenn Sie ein Element so platzieren, dass es nach der Linie `col-start` beginnt, wird die erste Linie namens `col-start` verwendet. In unserem Fall ist dies die ganz linke Linie. Um auf eine andere Linie zuzugreifen, verwenden Sie den Namen mit der Nummer für diese Linie.

Um ein Element zu platzieren, das von der ersten Linie namens `col-start` bis zur 5. Linie mit diesem Namen reicht, können wir Folgendes verwenden:

```css
.item1to5 {
  grid-column: col-start / col-start 5;
}
```

Sie können auch das Schlüsselwort `span` verwenden. Dieses Element erstreckt sich über 3 Linien, beginnend mit der 7. Linie namens `col-start`:

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

Wenn Sie sich dieses Layout in den Entwicklerwerkzeugen Ihres Browsers ansehen, sehen Sie, wie die Spaltenlinien angezeigt werden und wie unsere Elemente an diese Linien platziert wurden.

![Das 12-Spalten-Gitter mit platzierten Elementen. Der Firefox-Gitterhervorheber zeigt die Position der Linien.](5_named_lines1.png)

### Definition benannter Linien mit einer Spurliste

Die `repeat()`-Syntax kann auch eine Spurliste enthalten; es sind nicht nur einzelne Spurgrößen, die wiederholt werden können.

Diese CSS erstellt ein Raster mit acht Spuren, mit einer schmaleren `1fr`-Breitenspalte namens `col1-start`, gefolgt von einer breiteren `3fr`-Spalte namens `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre wiederholte Syntax zwei Linien nebeneinander setzt, werden sie zusammengeführt und ergeben dasselbe Ergebnis wie das Geben einer Linie mehrerer Namen in einer nicht wiederholten Spurdefinition. Die folgende Definition erstellt vier `1fr`-Spuren, jede mit einer Start- und Endlinie.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Wenn wir diese Deklaration ohne Verwendung der Repeat-Notation schreiben, sieht sie so aus:

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Mit einer Spurliste können wir das Schlüsselwort `span` verwenden, um eine Anzahl von Linien zu überbrücken, einschließlich Linien eines bestimmten Namens:

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

### Zwölf-Spalten-Gitter-Framework

Nachdem wir über numerische und benannte linienbasierte Platzierung und [Gittervorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) gelernt haben, wissen wir jetzt, dass es mehrere Möglichkeiten gibt, Elemente mit dem CSS-Gitterlayout zu platzieren. Dies mag übermäßig komplex erscheinen, aber Sie müssen nicht alle verwenden. In der Praxis funktioniert die Verwendung von benannten Vorlagenbereichen gut für einfache Layouts, da diese Methode eine gute visuelle Darstellung dessen bietet, wie Ihr Layout aussieht, und es intuitiver macht, Dinge im Raster zu bewegen. Zum Beispiel, wenn Sie mit einem strengen Mehrspaltenlayout arbeiten, funktioniert die Demonstration der benannten Linien im letzten Teil dieses Leitfadens gut.

Alte Gitter-Systeme wie Foundation oder Bootstrap basieren auf einem 12-Spalten-Gitter. Diese Frameworks importieren Code, um Berechnungen durchzuführen, die sicherstellen, dass die Spalten 100% ergeben. Frameworks sind nicht nötig! Das einzige CSS, das wir für ein 12-Spalten-Gitter-"Framework" benötigen, ist:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dann dieses "Framework" verwenden, um unsere Seite zu layouten.

Um zum Beispiel ein Drei-Spalten-Layout mit einem Header und Footer zu erstellen, können wir das folgende Markup verwenden.

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

Wir können dies auf unserem Gitterlayout-Framework platzieren:

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

Ein weiteres Mal ist der Gitterhervorheber der Entwicklerwerkzeuge nützlich, um uns zu zeigen, wie das Gitter, auf dem wir unsere Elemente platziert haben, funktioniert.

![Das Layout mit dem hervorgehobenen Gitter.](5_named_lines2.png)

Das ist alles, was wir brauchen. Wir müssen keine Berechnungen durchführen! Das CSS-Gitterlayout hat unsere 10-Pixel-Spur vor dem Zuweisen des Platzes zu den `1fr`-Spaltenspuren automatisch entfernt.

Als nächstes werden wir uns ansehen, wie das CSS-Gitterlayout Elemente automatisch positionieren kann, ohne dass Platzierungseigenschaften erforderlich sind, in der [Automatische Platzierung im Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) Anleitung.
