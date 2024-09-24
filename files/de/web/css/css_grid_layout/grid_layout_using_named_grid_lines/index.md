---
title: Layout mit benannten Rasterlinien
slug: Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

In den vorherigen Anleitungen haben wir uns damit beschäftigt, Elemente anhand der durch die Definition von Rasterspuren erstellten Linien zu platzieren und wie man Elemente durch benannte Vorlagenbereiche platziert. In dieser Anleitung werden wir uns ansehen, wie diese beiden Dinge zusammenarbeiten, wenn wir benannte Linien verwenden. Die Benennung von Linien ist unglaublich nützlich, aber einige der verwirrendsten Raster-Syntaxe entstehen aus dieser Kombination von Namen und Spurgrößen. Sobald Sie einige Beispiele durcharbeiten, sollte es klarer und einfacher werden, damit zu arbeiten.

## Benennung von Linien bei der Definition eines Rasters

Sie können einigen oder allen Linien in Ihrem Raster einen Namen zuweisen, wenn Sie Ihr Raster mit den Eigenschaften `grid-template-rows` und `grid-template-columns` definieren. Um dies zu demonstrieren, verwende ich das einfache Layout, das in der Anleitung zum linienbasierten Platzieren erstellt wurde. Dieses Mal erstelle ich das Raster mit benannten Linien.

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

Bei der Definition des Rasters benenne ich meine Linien in eckigen Klammern. Diese Namen können beliebig sein. Ich habe einen Namen für den Anfang und das Ende des Containers definiert, sowohl für Zeilen als auch für Spalten. Dann habe ich den zentralen Block des Rasters als `content-start` und `content-end` definiert, ebenfalls sowohl für Spalten als auch Zeilen, obwohl Sie nicht alle Linien Ihres Rasters benennen müssen. Sie können sich dafür entscheiden, nur einige wichtige Linien für Ihr Layout zu benennen.

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
  <div class="box1">Eins</div>
  <div class="box2">Zwei</div>
  <div class="box3">Drei</div>
  <div class="box4">Vier</div>
</div>
```

{{ EmbedLiveSample('Naming_lines_when_defining_a_grid', '500', '330') }}

Alles andere beim linienbasierten Platzieren funktioniert weiterhin auf dieselbe Weise, und Sie können benannte Linien und Liniennummern mischen. Benannte Linien sind nützlich, wenn Sie ein responsives Design erstellen, bei dem Sie das Raster neu definieren möchten. Anstatt dann die Inhaltsposition durch Ändern der Liniennummer in Ihren Media-Queries neu definieren zu müssen, können Sie sicherstellen, dass die Linie in Ihren Definitionen immer gleich benannt wird.

### Mehrere Namen für Linien vergeben

Sie möchten einer Linie möglicherweise mehr als einen Namen geben, vielleicht kennzeichnet sie das Ende der Seitenleiste und den Anfang des Hauptbereichs. Dazu fügen Sie die Namen in den eckigen Klammern mit Leerzeichen zwischen ihnen hinzu `[sidebar-end main-start]`. Sie können dann auf diese Linie mit einem der Namen verweisen.

## Implizite Rasterbereiche aus benannten Linien

Beim Benennen der Linien habe ich erwähnt, dass Sie diese beliebig benennen können. Der Name ist ein [benutzerdefinierter Identifikator](https://drafts.csswg.org/css-values-4/#custom-idents), ein vom Autor definierter Name. Bei der Wahl des Namens sollten Sie Wörter vermeiden, die möglicherweise in der Spezifikation erscheinen und verwirrend sein könnten - wie `span`. Identifikatoren werden nicht in Anführungszeichen gesetzt.

Während Sie jeden beliebigen Namen wählen können, erstellt das Raster einen benannten Bereich des verwendeten Hauptnamens, wenn Sie `-start` und `-end` an den Linien um einen Bereich anfügen, wie ich es im obigen Beispiel getan habe. Unter Verwendung des obigen Beispiels habe ich `content-start` und `content-end` sowohl für Zeilen als auch für Spalten. Das bedeutet, dass ich einen Rasterbereich namens `content` erhalte und gegebenenfalls etwas in diesem Bereich platzieren könnte.

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

Ich verwende dieselben Rasterdefinitionen wie oben, aber diesmal werde ich ein einzelnes Element in dem benannten Bereich `content` platzieren.

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
  <div class="thing">Ich bin in einem Bereich namens content platziert.</div>
</div>
```

{{ EmbedLiveSample('Implicit_grid_areas_from_named_lines', '500', '330') }}

Es ist nicht erforderlich, unsere Bereiche mit `grid-template-areas` zu definieren, da unsere benannten Linien für uns einen Bereich erstellt haben.

## Implizite Rasterlinien aus benannten Bereichen

Wir haben gesehen, wie benannte Linien einen benannten Bereich erstellen, und dies funktioniert auch umgekehrt. Benannte Vorlagenbereiche erstellen benannte Linien, die Sie verwenden können, um Ihre Elemente zu platzieren. Wenn wir das Layout nehmen, das in der Anleitung zu Rastervorlagenbereichen erstellt wurde, können wir die von unseren Bereichen erstellten Linien verwenden, um zu sehen, wie dies funktioniert.

In diesem Beispiel habe ich ein zusätzliches div mit einer Klasse `overlay` hinzugefügt. Wir haben benannte Bereiche, die mit der Eigenschaft `grid-area` erstellt wurden, dann ein Layout, das in `grid-template-areas` erstellt wurde. Die Bereichsnamen sind:

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

Sie können die benannten Linien im Bild sehen, beachten Sie, dass einige Linien zwei Namen haben - zum Beispiel beziehen sich `sd-end` und `main-start` auf dieselbe Spaltenlinie.

![Ein Bild zeigt die impliziten Liniennamen, die von unseren Rasterbereichen erstellt wurden.](5_multiple_lines_from_areas.png)

Um `overlay` unter Verwendung dieser impliziten benannten Linien zu positionieren, ist es dasselbe wie das Positionieren eines Elements unter Verwendung von Linien, die wir benannt haben.

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

Da wir diese Fähigkeit haben, erstellte Linien aus benannten Bereichen und Bereiche aus benannten Linien zu positionieren, lohnt es sich, ein wenig Zeit zu investieren, um Ihre Benennungsstrategie zu planen, wenn Sie mit der Erstellung Ihres Rasterlayouts beginnen. Indem Sie Namen auswählen, die für Sie und Ihr Team sinnvoll sind, helfen Sie allen, die von Ihnen erstellten Layouts einfacher zu verwenden.

## Mehrere Linien mit demselben Namen mit repeat()

Wenn Sie allen Linien in Ihrem Raster einen eindeutigen Namen geben möchten, müssen Sie die Spurdefinition ausführlich aufschreiben, anstatt die Repeat-Syntax zu verwenden, da Sie den Namen in eckigen Klammern beim Definieren der Spuren hinzufügen müssen. Wenn Sie die Repeat-Syntax verwenden, erhalten Sie jedoch mehrere Linien, die denselben Namen haben, was ebenfalls sehr nützlich sein kann.

### Zwölf-Spalten-Raster mit repeat()

Im nächsten Beispiel erstelle ich ein Raster mit zwölf gleich breiten Spalten. Bevor ich die 1fr-Größe der Spaltenstrecke definiere, definiere ich auch einen Liniennamen von `[col-start]`. Das bedeutet, dass wir ein Raster haben werden, das 12 Spaltenlinien enthält, die alle `col-start` genannt werden, gefolgt von einer `1fr` breiten Spalte.

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

Sobald Sie das Raster erstellt haben, können Sie Elemente darauf platzieren. Da wir mehrere Linien namens `col-start` haben, verwendet das Raster bei Platzierung eines Elements nach der Linie `col-start` die erste Linie mit dem Namen `col-start`, in unserem Fall die ganz linke Linie. Um sich auf eine andere Linie zu beziehen, verwenden Sie den Namen und die Nummer für diese Linie. Um unser Element von der ersten Linie namens `col-start` bis zur 5. zu platzieren, können wir verwenden:

```css
.item1 {
  grid-column: col-start / col-start 5;
}
```

Sie können hier auch das `span` Schlüsselwort verwenden. Mein nächstes Element wird ab der 7. Linie namens `col-start` platziert und überspannt 3 Linien.

```css
.item2 {
  grid-column: col-start 7 / span 3;
}
```

```html
<div class="wrapper">
  <div class="item1">Ich bin von col-start Linie 1 bis col-start 5 platziert</div>
  <div class="item2">Ich bin von col-start Linie 7, über 3 Linien gespannt, platziert</div>
</div>
```

{{ EmbedLiveSample('Twelve-column_grid_using_repeat', '500', '330') }}

Wenn Sie sich dieses Layout im Firefox-Raster-Highlighter ansehen, können Sie sehen, wie die Spaltenlinien angezeigt werden und wie unsere Elemente gegen diese Linien platziert werden.

![Das 12-Spalten-Raster mit platzierten Elementen. Der Raster-Highlighter zeigt die Position der Linien.](5_named_lines1.png)

### Definition benannter Linien mit einer Streckenliste

Die Repeat-Syntax kann auch eine Streckenliste aufnehmen, es muss nicht nur eine einzelne Spurgröße wiederholt werden. Der folgende Code würde ein Raster mit acht Spuren erstellen, mit einer schmaleren `1fr` breiten Spalte namens `col1-start`, gefolgt von einer breiteren `3fr` Spalte namens `col2-start`.

```css
.wrapper {
  grid-template-columns: repeat(4, [col1-start] 1fr [col2-start] 3fr);
}
```

Wenn Ihre wiederholte Syntax zwei Linien nebeneinander setzt, werden sie zusammengeführt und erzeugen dasselbe Ergebnis wie das mehrfache Benennen einer Linie in einer nicht wiederholten Spurdefinition. Die folgende Definition erstellt vier `1fr` Spuren, die jeweils eine Start- und Endlinie haben.

```css
.wrapper {
  grid-template-columns: repeat(4, [col-start] 1fr [col-end]);
}
```

Wenn wir diese Definition ohne Verwendung der Repeat-Notation ausschreiben würden, würde sie so aussehen:

```css
.wrapper {
  grid-template-columns: [col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end col-start] 1fr [col-end];
}
```

Wenn Sie eine Streckenliste verwendet haben, können Sie das `span` Schlüsselwort nicht nur verwenden, um eine Anzahl von Linien zu überbrücken, sondern auch um eine Anzahl von Linien eines bestimmten Namens zu überbrücken.

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
    Ich bin von col1-start Linie 1 bis col2-start Linie 2 platziert
  </div>
  <div class="item2">
    Ich bin von col1-start Linie 2, über 2 Linien namens col1-start gespannt, platziert
  </div>
</div>
```

{{ EmbedLiveSample('Defining_named_lines_with_a_track_list', '500', '330') }}

### Zwölf-Spalten-Raster-Framework

In den letzten drei Anleitungen haben Sie entdeckt, dass es viele verschiedene Möglichkeiten gibt, Elemente mithilfe des Rasters zu platzieren. Das kann zunächst etwas kompliziert erscheinen, aber denken Sie daran, dass Sie nicht alle verwenden müssen. In der Praxis finde ich, dass für einfache Layouts die Verwendung von benannten Vorlagenbereichen gut funktioniert, da es eine schöne visuelle Darstellung bietet, wie Ihr Layout aussieht, und es dann einfach ist, Dinge im Raster zu verschieben.

Wenn Sie mit einem strikten Mehrspaltenlayout arbeiten, funktioniert beispielsweise die Demonstration der benannten Linien im letzten Teil dieser Anleitung sehr gut. Wenn Sie Raster-Systeme in Betracht ziehen, wie sie in Frameworks wie Foundation oder Bootstrap zu finden sind, basieren diese auf einem 12-Spalten-Raster. Das Framework importiert dann den Code, um alle Berechnungen durchzuführen, um sicherzustellen, dass die Spalten 100% ergeben. Mit dem Rasterlayout ist der einzige Code, den wir für unser Raster-"Framework" benötigen:

```css
.wrapper {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, [col-start] 1fr);
}
```

Wir können dann dieses Framework verwenden, um unsere Seite zu gestalten. Zum Beispiel, um ein dreispaltiges Layout mit einem Header und einem Footer zu erstellen, könnte ich das folgende Markup haben.

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
  <header class="main-header">Ich bin der Header</header>
  <aside class="side1">Ich bin Sidebar 1</aside>
  <article class="content">Ich bin der Hauptartikel</article>
  <aside class="side2">Ich bin Sidebar 2</aside>
  <footer class="main-footer">Ich bin der Footer</footer>
</div>
```

Ich könnte dies dann auf meinem Rasterlayout-Framework so platzieren:

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

Wieder einmal ist der Raster-Highlighter hilfreich, um uns zu zeigen, wie das Raster, auf dem wir unsere Elemente platziert haben, funktioniert.

![Das Layout mit dem hervorgehobenen Raster.](5_named_lines2.png)

Das ist alles, was ich brauche. Ich muss keine Berechnungen durchführen, das Raster hat automatisch meine 10-Pixel-Spur vor der Zuteilung des Bereichs für die `1fr`-Spalten-Spuren entfernt. Wenn Sie beginnen, Ihre eigenen Layouts zu erstellen, werden Sie feststellen, dass die Syntax vertrauter wird und Sie die Methoden auswählen, die am besten für Sie und die Art von Projekten, die Sie gerne bauen, funktionieren. Versuchen Sie, einige gängige Muster mit diesen verschiedenen Methoden zu erstellen, und Sie werden bald Ihren produktivsten Weg finden, um zu arbeiten. Dann werden wir im nächsten Leitfaden sehen, wie das Raster Elemente für uns positionieren kann, ohne dass wir Platzierungseigenschaften überhaupt verwenden müssen!
