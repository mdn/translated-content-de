---
title: Layout mit benannten Rasterlinien
short-title: Verwenden benannter Rasterlinien
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In früheren Leitfäden haben wir uns angeschaut, wie Elemente auf den Linien platziert werden, die durch das [Definieren von Rasterstrecken](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) erstellt werden, und wie Elemente [mithilfe benannter Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) platziert werden können. In diesem Leitfaden schauen wir uns an, wie diese beiden Dinge zusammenarbeiten, wenn wir benannte Linien verwenden.

Das Benennen von Linien ist unglaublich nützlich, aber einige der verwirrendsten Raster-Syntaxen entstehen aus dieser Kombination von Namen und Spuren. Sobald Sie einige Beispiele durchgearbeitet haben, sollte es klarer und einfacher werden, damit zu arbeiten.

## Linien benennen, wenn ein Raster definiert wird

Sie können einigen oder allen Linien in Ihrem Raster einen Namen zuweisen, wenn Sie Ihr Raster mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} definieren. Um dies zu demonstrieren, nutzen wir das grundlegende Layout, das im Leitfaden zu [linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) erstellt wurde. Dieses Mal erstellen wir das Raster mit benannten Linien.

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

Beim Definieren des Rasters benennen wir unsere Linien in eckigen Klammern (`[]`). Diese Namen können beliebig gewählt werden. Wir definieren einen Namen für den Anfang und das Ende des Containers, sowohl für Zeilen als auch für Spalten. In diesem Fall sind die Anfangszeilen und -spalten des zentralen Blocks im Raster beide als `content-start` benannt und dessen Endzeilen und -spalten sind beide als `content-end` benannt.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Wir müssen nicht alle Linien in unseren Rastern benennen; Sie können nur die Schlüsselzeilen Ihres Layouts benennen.

Sobald die Linien Namen haben, können wir den definierten Namen anstelle der Liniennummer verwenden, um die Rasterelemente zu platzieren.

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

Alles andere über die linienbasierte Platzierung funktioniert weiterhin auf die gleiche Weise. In unserem Rasterlayout haben wir jeder numerischen Linie einen Aliasnamen zugewiesen. In unseren Rastelementen beziehen wir uns auf einen Namen statt einer Zahl. Das Benennen von Linien auf diese Weise ist nützlich — beim Erstellen eines responsiven Designs können wir die Rastereigenschaften des Containers aktualisieren, anstatt die Rasterelemente innerhalb jeder [Media Query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) zu aktualisieren.

### Mehreren Linien Namen geben

Möglicherweise möchten Sie einer Linie mehr als einen Namen geben, vielleicht kennzeichnet sie das Ende der Seitenleiste und den Anfang des Hauptbereichs. Fügen Sie dazu die Namen in den eckigen Klammern mit Leerzeichen zwischen ihnen hinzu `[sidebar-end main-start]`. Sie können dann auf diese Linie mit einem der Namen verweisen.

## Implizite Rasterbereiche von benannten Linien

Beim Benennen der Linien haben wir erwähnt, dass Sie diese beliebig benennen können. Der Name ist eine {{cssxref("custom-ident")}}, ein vom Autor definierter Name. Bei der Auswahl des Namens sollten Sie Wörter vermeiden, die möglicherweise in der Spezifikation erscheinen und verwirrend sind — wie `span`. Idents werden nicht in Anführungszeichen gesetzt.

Während Sie jeden Namen wählen können, erstellt das Raster einen benannten Bereich des verwendeten Hauptnamens, wenn Sie `-start` und `-end` an die Linien um einen Bereich anhängen, wie wir es im obigen Beispiel getan haben. Im obigen Beispiel haben wir `content-start` und `content-end` sowohl für Zeilen als auch für Spalten. Das bedeutet, wir erhalten einen Rasterbereich namens `content` und könnten etwas in diesem Bereich platzieren, wenn wir möchten.

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

Wir verwenden die gleichen Rasterdefinitionen wie oben und platzieren ein einzelnes Element in den benannten Bereich `content`.

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

Es ist nicht erforderlich, unsere Bereiche mit {{cssxref("grid-template-areas")}} zu definieren, da unsere benannten Linien einen Bereich für uns erstellt haben.

## Implizite Rasterlinien von benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und das funktioniert auch umgekehrt. Benannte Vorlagenbereiche erstellen benannte Linien, die Sie verwenden können, um Ihre Elemente zu platzieren. Wenn wir das Layout verwenden, das im Leitfaden zu [grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) erstellt wurde, können wir die von unseren Bereichen erstellten Linien verwenden, um zu sehen, wie das funktioniert.

In diesem Beispiel haben wir ein zusätzliches `<div>` mit einer Klasse `overlay` hinzugefügt. Wir haben Bereiche erstellt, die mithilfe der Eigenschaft {{cssxref("grid-area")}} benannt wurden, dann ein Layout erstellt in `grid-template-areas`. Die Bereichsnamen sind:

- `hd`
- `ft`
- `main`
- `sd`

Das ergibt Zeilen- und Spaltenlinien:

- `hd-start`
- `hd-end`
- `sd-start`
- `sd-end`
- `main-start`
- `main-end`
- `ft-start`
- `ft-end`

Sie können die benannten Linien im Bild sehen. Beachten Sie, dass einige Linien zwei Namen haben - zum Beispiel beziehen sich `sd-end` und `main-start` auf dieselbe Spaltenlinie.

![Ein Bild, das die von unseren Rasterbereichen erstellten impliziten Liniennamen zeigt.](5_multiple_lines_from_areas.png)

Das Positionieren von `overlay` mithilfe dieser impliziten benannten Linien ist dasselbe wie das Positionieren eines Elements mithilfe benannter Linien.

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

Angesichts der Tatsache, dass wir diese Fähigkeit haben, erstellte Linien von benannten Bereichen und Bereiche von benannten Linien zu positionieren, lohnt es sich, ein wenig Zeit zu investieren, um Ihre Namensstrategie zu planen, wenn Sie mit der Erstellung Ihres Rasterlayouts beginnen. Die Auswahl von Namen, die für Sie und Ihr Team sinnvoll sind, macht Ihre Layouts intuitiver.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie allen Ihren Rasterlinien einen eindeutigen Namen geben möchten, müssen Sie die Spurendeutungen mit Langformeigenschaften definieren, anstatt die Wiederholungssyntax zu verwenden, da die Namen in eckigen Klammern hinzugefügt werden müssen, wenn Spuren definiert werden. Wenn Sie die Wiederholungssyntax verwenden, erhalten Sie mehrere Linien mit demselben Namen, was je nach Layoutanforderungen nützlich oder verwirrend sein kann.

### Zwölf-Spalten-Raster mit repeat()

In diesem Beispiel erstellen wir ein Raster mit 12 gleichbreiten Spalten. Bevor wir die `1fr`-Größe des Spurenblocks definieren, definieren wir eine Linie namens `[col-start]`. Das bedeutet, dass wir ein Raster mit 12 Spaltenlinien haben werden, die alle `col-start` genannt werden, bevor ein `1fr`-Breitenspalte folgt.

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

Sobald Sie das Raster erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien mit dem Namen `col-start` haben, wird die erste Linie namens `col-start` verwendet, wenn Sie ein Element platzieren, das nach der Linie `col-start` beginnen soll. In unserem Fall ist dies die äußerste linke Linie. Um eine andere Linie anzusprechen, verwenden Sie den Namen mit der Nummer für diese Linie.

Um ein Element zu platzieren, das von der ersten Linie namens `col-start` bis zur fünften Linie mit diesem Namen reicht, können wir Folgendes verwenden:

```css
.item1to5 {
  grid-column: col-start / col-start 5;
}
```

Sie können auch das `span`-Schlüsselwort verwenden. Dieses Element wird 3 Linien beginnend von der siebten Linie namens `col-start` überspannen:

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

Wenn Sie sich dieses Layout in den Entwicklerwerkzeugen Ihres Browsers ansehen, sehen Sie, wie die Spaltenlinien angezeigt werden und wie unsere Elemente gegen diese Linien platziert sind.

![Das 12-Spalten-Raster mit platzierten Elementen. Der Firefox-Raster-Highlighter zeigt die Position der Linien an.](5_named_lines1.png)

### Benannte Linien mit einer Spurliste definieren

Die `repeat()`-Syntax kann auch eine Spurliste aufnehmen; es sind nicht nur einzelne Spurgrößen, die wiederholt werden können.

Dieses CSS erstellt ein Raster mit acht Spuren, mit einer schmaleren `1fr`-Breitenspalte namens `col1-start`, gefolgt von einer breiteren `3fr`-Spalte namens `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre wiederholende Syntax zwei Linien nebeneinander stellt, werden sie zusammengeführt und erzeugen das gleiche Ergebnis wie das Vergeben mehrerer Namen an eine Linie in einer nicht wiederholenden Spurendeutung. Die folgende Definition erstellt vier `1fr`-Spuren, jeweils mit einer Start- und Endlinie.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Wenn wir diese Deklaration ohne Verwendung der Wiederholungsschreibweise schreiben, sieht es so aus:

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Mit einer Spurliste können wir das `span`-Schlüsselwort verwenden, um eine Anzahl von Linien zu überspannen, einschließlich Linien eines bestimmten Namens:

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

### Zwölf-Spalten-Raster-Framework

Nachdem wir über numerische und benannte linienbasierte Platzierung sowie [grid template areas](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas) gelernt haben, wissen wir jetzt, dass es mehrere Möglichkeiten gibt, Elemente mit CSS-Rasterlayout zu platzieren. Dies mag übermäßig komplex erscheinen, aber Sie müssen nicht alle davon verwenden. In der Praxis funktioniert die Verwendung benannter Vorlagenbereiche gut für einfache Layouts, da diese Methode eine gute visuelle Darstellung dessen bietet, wie Ihr Layout aussieht, und es intuitiver macht, Dinge auf dem Raster zu verschieben. Zum Beispiel funktioniert das benannte Linielayout im letzten Teil dieses Leitfadens gut, wenn man mit einem strengen Mehrspaltenlayout arbeitet.

Alte Raster-Systeme wie Foundation oder Bootstrap basieren auf einem 12-Spalten-Raster. Diese Frameworks importieren Code, um Berechnungen durchzuführen, die sicherstellen, dass die Spalten 100 % ergeben. Frameworks sind nicht erforderlich! Der einzige CSS-Code, den wir für ein 12-Spalten-Raster-"Framework" benötigen, ist:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dann dieses "Framework" verwenden, um unsere Seite zu gestalten.

Um beispielsweise ein Dreispalten-Layout mit Kopfzeile und Fußzeile zu erstellen, können wir das folgende Markup verwenden.

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

Wir können dies auf unser Rasterlayout-Framework anwenden:

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

Ein weiteres Mal ist das Raster-Highlighting in den Entwicklerwerkzeugen nützlich, um uns zu zeigen, wie das Raster, auf dem wir unsere Elemente platziert haben, funktioniert.

![Das Layout mit hervorgehobenem Raster.](5_named_lines2.png)

Das ist alles, was wir brauchen. Wir müssen keine Berechnungen durchführen! Das CSS-Rasterlayout entfernt automatisch unser 10-Pixel-Gutter-Track, bevor es den Platz den `1fr`-Spaltentracks zuweist.

Als nächstes werden wir uns anschauen, wie das CSS-Rasterlayout Elemente für uns positionieren kann, ohne Platzierungseigenschaften zu benötigen, in dem [Anleitung zur automatischen Platzierung in Rasterlayouts](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout).
