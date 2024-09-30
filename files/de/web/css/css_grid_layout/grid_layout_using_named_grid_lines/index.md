---
title: Layout mit benannten Gitternetzlinien
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

In vorherigen Leitfäden haben wir uns damit beschäftigt, Elemente durch die Linien, die durch das Definieren von Gitternetzspuren entstehen, zu platzieren, und auch, wie man Elemente mit benannten Vorlagenbereichen platziert. In diesem Leitfaden werden wir uns anschauen, wie diese beiden Dinge zusammenwirken, wenn wir benannte Linien verwenden. Die Benennung von Linien ist unglaublich nützlich, aber einige der verwirrendsten Gitter-Syntaxen entstehen aus dieser Kombination von Namen und Spurgrößen. Sobald Sie einige Beispiele durchgearbeitet haben, sollte es klarer und einfacher werden, damit zu arbeiten.

## Linien benennen beim Definieren eines Gitters

Sie können einigen oder allen Linien in Ihrem Gitter einen Namen zuweisen, wenn Sie Ihr Gitter mit den Eigenschaften `grid-template-rows` und `grid-template-columns` definieren. Um dies zu demonstrieren, werde ich das einfache Layout verwenden, das im Leitfaden zum linienbasierten Platzieren erstellt wurde. Dieses Mal werde ich das Gitter mit benannten Linien erstellen.

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

Beim Definieren des Gitters benenne ich meine Linien in eckigen Klammern. Diese Namen können Sie beliebig wählen. Ich habe einen Namen für den Anfang und das Ende des Containers sowohl für Reihen als auch für Spalten definiert. Dann habe ich den mittleren Block des Gitters als `content-start` und `content-end` definiert, wieder sowohl für Spalten als auch für Reihen, obwohl Sie nicht alle Linien in Ihrem Gitter benennen müssen. Sie könnten sich entscheiden, nur einige Schlüssellinien für Ihr Layout zu benennen.

```css
.wrapper {
  display: grid;
  grid-template-columns: [main-start] 1fr [content-start] 1fr [content-end] 1fr [main-end];
  grid-template-rows: [main-start] 100px [content-start] 100px [content-end] 100px [main-end];
}
```

Sobald die Linien Namen haben, können wir den Namen verwenden, um das Element zu platzieren, anstatt die Liniennummer.

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

Alles andere über die linienbasierte Platzierung funktioniert weiterhin auf die gleiche Weise und Sie können benannte Linien und Liniennummern mischen. Das Benennen von Linien ist nützlich, wenn Sie ein responsives Design erstellen, bei dem Sie das Gitter neu definieren, anstatt dann die Inhaltsposition durch Ändern der Liniennummer in Ihren Medienabfragen neu definieren zu müssen. Sie können sicherstellen, dass die Linie in Ihren Definitionen immer gleich benannt wird.

### Linien mehrere Namen geben

Möglicherweise möchten Sie einer Linie mehr als einen Namen geben, vielleicht bedeutet diese das Ende der Seitenleiste und den Anfang des Hauptbereichs. Dazu fügen Sie die Namen innerhalb der eckigen Klammern mit Leerzeichen zwischen ihnen hinzu `[sidebar-end main-start]`. Sie können dann auf diese Linie mit einem der beiden Namen verweisen.

## Implizite Gitterbereiche durch benannte Linien

Beim Benennen der Linien erwähnte ich, dass Sie diese beliebig benennen können. Der Name ist ein [custom ident](https://drafts.csswg.org/css-values-4/#custom-idents), ein vom Autor definierter Name. Bei der Namenswahl müssen Sie Wörter vermeiden, die in der Spezifikation vorkommen und verwirrend sein könnten - wie `span`. Idents werden nicht in Anführungszeichen gesetzt.

Während Sie jeden beliebigen Namen wählen können, erstellt das Gitter Ihnen einen benannten Bereich mit dem Hauptnamen, wenn Sie `-start` und `-end` an die Linien um einen Bereich anhängen, wie ich es im obigen Beispiel getan habe. Ausgehend vom obigen Beispiel habe ich `content-start` und `content-end` sowohl für Reihen als auch für Spalten. Das bedeutet, dass ich einen Gitterbereich namens `content` bekomme, und könnte etwas in diesem Bereich platzieren, wenn ich möchte.

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

Ich verwende dieselben Gitterdefinitionen wie oben, jedoch werde ich dieses Mal ein einzelnes Element in den benannten Bereich `content` platzieren.

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

## Implizite Gitterlinien von benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und dies funktioniert auch umgekehrt. Benannte Vorlagenbereiche erstellen benannte Linien, mit denen Sie Ihre Elemente platzieren können. Wenn wir das Layout aus dem Leitfaden zu Gittervorlagenbereichen nehmen, können wir die durch unsere Bereiche erstellten Linien verwenden, um zu sehen, wie dies funktioniert.

In diesem Beispiel habe ich einen zusätzlichen div mit einer Klasse namens `overlay` hinzugefügt. Wir haben benannte Bereiche erstellt, indem wir die Eigenschaft `grid-area` verwenden, dann ein Layout in `grid-template-areas` erstellt. Die Bereichsnamen sind:

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

Sie können die benannten Linien im Bild sehen. Beachten Sie, dass einige Linien zwei Namen haben - zum Beispiel beziehen sich `sd-end` und `main-start` auf dieselbe Spaltenlinie.

![Ein Bild, das die impliziten Liniennamen zeigt, die durch unsere Gitterbereiche erstellt wurden.](5_multiple_lines_from_areas.png)

Das Positionieren von `overlay` mit diesen impliziten benannten Linien ist dasselbe wie das Positionieren eines Elements mit von uns benannten Linien.

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

Angesichts der Tatsache, dass wir diese Fähigkeit haben, erstellte Linien von benannten Bereichen und Bereiche von benannten Linien zu positionieren, lohnt es sich, ein wenig Zeit zu investieren, um Ihre Namensstrategie zu planen, wenn Sie mit der Erstellung Ihres Gitterlayouts beginnen. Durch die Auswahl von Namen, die für Sie und Ihr Team sinnvoll sind, helfen Sie jedem, die von Ihnen erstellten Layouts einfacher zu verwenden.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie allen Linien in Ihrem Gitter einen eindeutigen Namen geben möchten, müssen Sie die Spurdefinition ausführlich schreiben, anstatt die Wiederholungssyntax zu verwenden, da Sie den Namen in eckigen Klammern hinzufügen müssen, während Sie die Spuren definieren. Wenn Sie die Wiederholungssyntax verwenden, haben Sie mehrere Linien mit demselben Namen, was jedoch ebenfalls sehr nützlich sein kann.

### Zwölf-Spalten-Gitter mit repeat()

In diesem nächsten Beispiel erstelle ich ein Gitter mit zwölf gleich breiten Spalten. Bevor ich die 1fr Größe der Spuren-Spalte definiere, definiere ich auch eine Linienbezeichnung `[col-start]`. Dies bedeutet, dass wir ein Gitter haben, das 12 Spaltenlinien alle als `col-start` bezeichnet hat, vor einer `1fr` breiten Spalte.

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

Sobald Sie das Gitter erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien namens `col-start` haben, wenn Sie ein Element so platzieren, dass es nach der Linie `col-start` beginnt, verwendet das Gitter die erste Linie namens `col-start`, in unserem Fall wird dies die ganz linke Linie sein. Um eine andere Linie anzusprechen, verwenden Sie den Namen, plus die Nummer für diese Linie. Um unser Element von der ersten Linie namens `col-start` zur fünften zu platzieren, können wir verwenden:

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

Sie können hier auch das Schlüsselwort `span` verwenden. Mein nächstes Element wird von der 7. Linie namens `col-start` platziert und über 3 Linien gespannt.

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

Wenn Sie sich dieses Layout im Firefox-Gitterhervorheber ansehen, können Sie sehen, wie die Spaltenlinien angezeigt werden und wie unsere Elemente gegen diese Linien platziert sind.

![Das 12-Spalten-Gitter mit platzierten Elementen. Der Gitter-Hervorheber zeigt die Position der Linien an.](5_named_lines1.png)

### Benannte Linien mit einer Spur-Liste definieren

Die Wiederholungssyntax kann auch eine Spur-Liste enthalten, es muss nicht nur eine einzelne Spurgröße sein, die wiederholt wird. Der folgende Code würde ein Acht-Spur-Gitter erstellen, mit einer schmalen `1fr` breiten Spalte namens `col1-start`, gefolgt von einer breiteren `3fr` Spalte namens `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre Wiederholungssyntax zwei Linien nebeneinander legt, werden sie zusammengefügt und erzeugen das gleiche Ergebnis wie das Geben einer Linie mehrerer Namen in einer nicht wiederholten Spurdefinition. Die folgende Definition erstellt vier `1fr` Spuren, die jeweils eine Start- und Endlinie haben.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Wenn wir diese Definition ohne Verwendung der Wiederholungsnotation ausschreiben würden, würde es so aussehen:

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Wenn Sie eine Spur-Liste verwendet haben, können Sie das `span` Schlüsselwort nicht nur verwenden, um eine bestimmte Anzahl von Linien, sondern auch um eine bestimmte Anzahl von Linien mit einem bestimmten Namen zu spannen.

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

Über die letzten drei Leitfäden hinweg haben Sie entdeckt, dass es viele verschiedene Möglichkeiten gibt, Elemente mithilfe von Grids zu platzieren. Dies kann anfangs ein wenig kompliziert erscheinen, aber denken Sie daran, dass Sie nicht alle von ihnen verwenden müssen. In der Praxis finde ich, dass für einfache Layouts, die Verwendung von benannten Vorlagenbereichen gut funktioniert, da es diese schöne visuelle Darstellung davon gibt, wie Ihr Layout aussieht und es dann einfach ist, Dinge auf dem Gitter umzuplatzieren.

Wenn Sie mit einem strikten Mehrspalten-Layout arbeiten, funktioniert zum Beispiel die Demonstration der benannten Linien im letzten Teil dieses Leitfadens sehr gut. Wenn Sie Gitter-Systeme wie die in Frameworks wie Foundation oder Bootstrap betrachten, basieren diese auf einem 12-Spalten-Gitter. Das Framework importiert dann den Code, um alle Berechnungen durchzuführen, um sicherzustellen, dass die Spalten 100% ergeben. Beim Gitterlayout ist der einzige Code, den wir für unser Gitter "Framework" benötigen:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dann dieses Framework verwenden, um unsere Seite zu gestalten. Um zum Beispiel ein dreispaltiges Layout mit einem Kopf- und einem Fußbereich zu erstellen, könnte ich das folgende Markup haben.

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

Ich könnte dies dann auf meinem Gitterlayout-Framework wie folgt platzieren.

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

Auch hier ist der Gitterhervorheber hilfreich, um uns zu zeigen, wie das Gitter, auf das wir unsere Elemente gesetzt haben, funktioniert.

![Das Layout mit hervorgehobenem Gitter.](5_named_lines2.png)

Das ist alles, was ich brauche. Ich muss keine Berechnungen durchführen, das Gitter hat meine 10 Pixel große Abstandsspur automatisch entfernt, bevor es den Platz den `1fr` Spuren-Spalten zugewiesen hat. Wenn Sie anfangen, Ihre eigenen Layouts zu erstellen, werden Sie feststellen, dass die Syntax vertrauter wird und Sie die Wege auswählen, die für Sie und die Art von Projekten, die Sie gerne erstellen, am besten funktionieren. Versuchen Sie, einige häufige Muster mit diesen verschiedenen Methoden zu bauen, und Sie werden bald Ihren produktivsten Weg zu arbeiten finden. Dann werden wir im nächsten Leitfaden betrachten, wie das Gitter für uns Elemente positionieren kann - ohne dass wir Platzierungs-Eigenschaften überhaupt verwenden müssen!
