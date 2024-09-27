---
title: Layout mit benannten Gitterlinien
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

In den vorherigen Leitfäden haben wir uns angesehen, wie Sie Elemente anhand der Linien platzieren, die durch die Definition von Gitterspuren erstellt wurden, und wie Sie Elemente mithilfe benannter Template-Bereiche platzieren können. In diesem Leitfaden werfen wir einen Blick darauf, wie diese beiden Dinge zusammenarbeiten, wenn wir benannte Linien verwenden. Das Benennen von Linien ist unglaublich nützlich, aber einige der verwirrendsten Gitter-Syntaxe resultieren aus dieser Kombination von Namen und Spurgrößen. Sobald Sie einige Beispiele durchgearbeitet haben, sollte es klarer und einfacher werden, damit zu arbeiten.

## Benennen von Linien bei der Definition eines Gitters

Sie können einigen oder allen Linien in Ihrem Gitter einen Namen zuweisen, wenn Sie Ihr Gitter mit den Eigenschaften `grid-template-rows` und `grid-template-columns` definieren. Um dies zu demonstrieren, verwende ich das einfache Layout, das in dem Leitfaden zur linienbasierten Platzierung erstellt wurde. Dieses Mal werde ich das Gitter mit benannten Linien erstellen.

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

Beim Definieren des Gitters benenne ich meine Linien in eckigen Klammern. Diese Namen können beliebig gewählt werden. Ich habe einen Namen für den Anfang und das Ende des Containers sowohl für Reihen als auch für Spalten definiert. Dann habe ich den mittleren Block des Gitters als `content-start` und `content-end` definiert, erneut sowohl für Spalten als auch für Reihen, obwohl Sie nicht alle Linien in Ihrem Gitter benennen müssen. Sie könnten sich dazu entscheiden, nur einige Schlüssellinien für Ihr Layout zu benennen.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Sobald die Linien Namen haben, können wir den Namen verwenden, um das Element zu platzieren, anstatt die Liniennummer zu verwenden.

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

Alles andere bei der linienbasierten Platzierung funktioniert weiterhin auf dieselbe Weise und Sie können benannte Linien und Liniennummern mischen. Das Benennen von Linien ist nützlich, wenn Sie ein responsives Design erstellen, bei dem Sie das Gitter neu definieren, anstatt die Inhaltsposition durch Ändern der Liniennummer in Ihren Media Queries neu definieren zu müssen. Sie können sicherstellen, dass die Linie in Ihren Definitionen immer gleich benannt wird.

### Linien mehrere Namen geben

Es kann vorkommen, dass Sie einer Linie mehr als einen Namen geben möchten, vielleicht kennzeichnet sie das Ende der Seitenleiste und den Anfang des Hauptbereichs. Um dies zu tun, fügen Sie die Namen mit einem Leerzeichen zwischen ihnen in den eckigen Klammern hinzu `[sidebar-end main-start]`. Sie können dann auf diese Linie entweder mit einem der Namen verweisen.

## Implizite Gitterbereiche aus benannten Linien

Beim Benennen der Linien habe ich erwähnt, dass Sie diese beliebig benennen können. Der Name ist ein [custom ident](https://drafts.csswg.org/css-values-4/#custom-idents), ein vom Autor definierter Name. Beim Wählen des Namens müssen Sie Wörter vermeiden, die im Spezifikationskontext vorkommen und verwirrend sein könnten - wie `span`. Idents werden nicht in Anführungszeichen gesetzt.

Obwohl Sie jeden beliebigen Namen wählen können, wird, wenn Sie `-start` und `-end` zu den Linien um einen Bereich herum hinzufügen, wie ich es im obigen Beispiel getan habe, ein benannter Bereich des Hauptnamens erstellt. Basierend auf dem obigen Beispiel habe ich `content-start` und `content-end` sowohl für Reihen als auch für Spalten. Das bedeutet, dass ich einen Gitterbereich namens `content` erhalte und dort bei Bedarf etwas platzieren könnte.

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

Ich benutze dieselben Gitterdefinitionen wie oben, jedoch werde ich diesmal ein einzelnes Element in den benannten Bereich `content` platzieren.

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

Wir müssen nicht definieren, wo unsere Bereiche mit `grid-template-areas` sind, da unsere benannten Linien einen Bereich für uns erstellt haben.

## Implizite Gitterlinien aus benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und dies funktioniert auch umgekehrt. Benannte Template-Bereiche erstellen benannte Linien, die Sie verwenden können, um Ihre Elemente zu platzieren. Wenn wir das im Leitfaden zu `grid-template-areas` erstellte Layout betrachten, können wir die Linien, die durch unsere Bereiche erstellt wurden, verwenden, um zu sehen, wie dies funktioniert.

In diesem Beispiel habe ich einen zusätzlichen Div mit der Klasse `overlay` hinzugefügt. Wir haben benannte Bereiche, die mit der Eigenschaft `grid-area` erstellt wurden, und dann ein Layout, das in `grid-template-areas` erstellt wurde. Die Bereichsnamen sind:

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

Sie können die benannten Linien im Bild sehen, beachten Sie, dass einige Linien zwei Namen haben - zum Beispiel bezeichnen `sd-end` und `main-start` dieselbe Spaltenlinie.

![Ein Bild, das die impliziten Liniennamen zeigt, die durch unsere Gitterbereiche erstellt wurden.](5_multiple_lines_from_areas.png)

Um `overlay` unter Verwendung dieser implizit benannten Linien zu positionieren, ist es dasselbe wie das Positionieren eines Elements unter Verwendung von Linien, die wir benannt haben.

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

Da wir die Fähigkeit haben, Linien von benannten Bereichen zu positionieren, und Bereiche von benannten Linien, lohnt es sich, ein wenig Zeit in die Planung Ihrer Benennungsstrategie zu investieren, wenn Sie mit der Erstellung Ihres Gitterlayouts beginnen. Indem Sie Namen wählen, die für Sie und Ihr Team sinnvoll sind, helfen Sie allen, die von Ihnen erstellten Layouts leichter zu verwenden.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie allen Linien in Ihrem Gitter einen eindeutigen Namen geben möchten, dann müssen Sie die Spurdefinition vollständig ausschreiben, anstatt die Repeat-Syntax zu verwenden, da Sie den Namen beim Definieren der Spuren in eckigen Klammern hinzufügen müssen. Wenn Sie die Repeat-Syntax verwenden, haben Sie jedoch mehrere Linien mit demselben Namen, was ebenfalls sehr nützlich sein kann.

### Zwölf-Spalten-Gitter mit repeat()

Im nächsten Beispiel erstelle ich ein Gitter mit zwölf gleich breiten Spalten. Vor der Definition der `1fr`-Größe des Spaltenpfads definiere ich einen Liniennamen von `[col-start]`. Das bedeutet, dass wir ein Gitter mit 12 Spaltenlinien erhalten, die alle vor einer Spalte mit `1fr`-Breite `col-start` genannt werden.

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

Sobald Sie das Gitter erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien haben, die `col-start` genannt werden, verwendet das Grid die erste Linie namens `col-start`, in unserem Fall die ganz linke Linie, wenn Sie ein Element nach Linie `col-start` platzieren. Um eine andere Linie anzusprechen, verwenden Sie den Namen plus die Nummer für diese Linie. Um unser Element von der ersten Linie namens col-start bis zur fünften zu platzieren, können wir verwenden:

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

Sie können hier auch das `span`-Schlüsselwort verwenden. Mein nächstes Element wird von der 7. Linie namens `col-start` platziert und erstreckt sich über 3 Linien.

```css
.item2 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="wrapper">
  <div class="item1">I am placed from col-start line 1 to col-start 5</div>
  <div class="item2">I am placed from col-start line 7 spanning 3 lines</div>
</div>
```

{{ EmbedLiveSample('Twelve-column_grid_using_repeat', '500', '330') }}

Wenn Sie sich dieses Layout im Firefox Grid Highlighter ansehen, können Sie sehen, wie die Spaltenlinien angezeigt werden und wie unsere Elemente an diesen Linien platziert sind.

![Das 12-Spalten-Gitter mit platzierten Elementen. Der Grid Highlighter zeigt die Position der Linien.](5_named_lines1.png)

### Benannte Linien mit einer Spurauflistung definieren

Die Repeat-Syntax kann auch eine Spurauflistung enthalten, es muss nicht nur eine einzelne Spurenweite sein, die wiederholt wird. Der folgende Code würde ein Acht-Spurnetz erstellen, mit einer schmaleren `1fr` Breitespaltenspur genannt `col1-start`, gefolgt von einer breiteren `3fr` Spaltenspur genannt `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre Repeat-Syntax zwei Linien nebeneinander setzt, dann werden sie zusammengeführt und das Ergebnis ist dasselbe wie das Geben einer Linie mehrere Namen in einer nich-wiederholenden Spurenauflistung. Die folgende Definition erstellt vier `1fr` Spuren, die jeweils eine Start- und Endlinie haben.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Wenn wir diese Definition ohne Verwendung von Wiederholungsnotation ausschreiben würden, würde es so aussehen.

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Wenn Sie eine Spurauflistung verwendet haben, können Sie das `span`-Schlüsselwort nicht nur verwenden, um eine Anzahl von Linien zu überspannen, sondern auch, um eine Anzahl von Linien eines bestimmten Namens zu überspannen.

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

{{ EmbedLiveSample('Defining_named_lines_with_a_track_list', '500', '330') }}

### Zwölf-Spalten-Gitter-Framework

In den letzten drei Leitfäden haben Sie entdeckt, dass es viele verschiedene Möglichkeiten gibt, Elemente mithilfe von Grids zu platzieren. Dies kann anfangs etwas überkompliziert erscheinen, aber denken Sie daran, dass Sie nicht alle nutzen müssen. In der Praxis finde ich, dass für einfache Layouts die Verwendung benannter Template-Bereiche gut funktioniert, es bietet diese schöne visuelle Darstellung dessen, wie Ihr Layout aussieht, und es ist dann einfach, Dinge im Gitter zu verschieben.

Wenn Sie zum Beispiel mit einem strengen Mehrspaltenlayout arbeiten, funktioniert die Demonstration benannter Linien im letzten Teil dieses Leitfadens sehr gut. Wenn Sie über Raster-Systeme wie die in Frameworks wie Foundation oder Bootstrap nachdenken, basieren diese auf einem 12-Spalten-Gitter. Das Framework importiert dann den Code, um alle Berechnungen durchzuführen, um sicherzustellen, dass die Spalten 100% ergeben. Mit Grid-Layout ist der einzige Code, den wir für unser Gitter-"Framework" benötigen:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dieses Framework dann verwenden, um unsere Seite zu layouten. Um beispielsweise ein Drei-Spalten-Layout mit Kopf- und Fußzeile zu erstellen, könnte ich folgende Markup haben.

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

Ich könnte dies dann auf meinem Grid-Layout-Framework wie folgt platzieren.

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

{{ EmbedLiveSample('Twelve-column_grid_framework', '500', '330') }}

Noch einmal, der Grid Highlighter hilft uns zu zeigen, wie das Gitter, das wir für unsere Elemente platziert haben, funktioniert.

![Das Layout mit hervorgehobenem Gitter.](5_named_lines2.png)

Das ist alles, was ich brauche. Ich muss keine Berechnungen durchführen, das Gitter hat automatisch meine 10-Pixel-Spur vor dem Zuweisen des Raums an die `1fr`-Spalten entfernt. Wenn Sie anfangen, Ihre eigenen Layouts zu erstellen, werden Sie feststellen, dass Ihnen die Syntax vertrauter wird, und Sie wählen die Wege, die am besten für Sie und die Art von Projekten funktionieren, die Sie gerne erstellen. Versuchen Sie, einige gängige Muster mit diesen verschiedenen Methoden zu erstellen, und Sie werden bald Ihre produktivste Arbeitsweise finden. Dann werden wir im nächsten Leitfaden untersuchen, wie das Gitter Elemente für uns positionieren kann - ohne dass wir Platzierungs-Eigenschaften überhaupt verwenden müssen!
