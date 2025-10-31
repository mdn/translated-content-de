---
title: Grid-Template-Bereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Im [Leitfaden zur Gitterlayout-Verwendung anhand von linienbasiertem Placement](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns die Gitterlinien und deren Verwendung zur Positionierung von Elementen angesehen. Bei der Verwendung des CSS-Gitterlayouts haben Sie immer Linien, was eine unkomplizierte Möglichkeit bietet, Elemente auf Ihrem Gitter zu platzieren. Es gibt jedoch eine alternative Methode zum Positionieren von Elementen auf dem Gitter, die Sie allein oder in Kombination mit dem linienbasierten Placement verwenden können. Diese Methode beinhaltet das Platzieren unserer Elemente mit benannten Template-Bereichen. Sie werden schnell sehen, warum wir diese Methode manchmal die ASCII-Art-Methode des Gitterlayouts nennen!

## Benennung eines Gitterbereichs

Sie sind bereits auf die {{cssxref("grid-area")}}-Eigenschaft gestoßen. Diese Eigenschaft kann die vier Linien als Wert annehmen, die verwendet werden, um einen Gitterbereich zu positionieren.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Gitterbereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft angeben. Sie können wählen, wie Sie Ihren Bereich benennen möchten. Wenn wir zum Beispiel das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- ein Header
- ein Footer
- eine Sidebar
- der Hauptinhalt

![Ein Bild, das ein zweispaltiges Layout mit Header und Footer zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}}-Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Dies allein erstellt noch kein Layout. Vielmehr stellt es benannte Bereiche bereit, die in einem Layout verwendet werden können.

```css
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
```

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Diesmal platzieren wir die Elemente nicht anhand der auf den Elementen selbst angegebenen Liniennummern, sondern erstellen das gesamte Layout auf dem Gittercontainer. Hier erstellen wir ein 9-Spalten-Gitter und geben an, dass die `hd`- und `ft`-Bereiche sich über alle 9 Spalten erstrecken, während sich `sd` über drei und `main` über sechs erstreckt. Jeder Bereich erstreckt sich nur über eine Zeile.

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
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Naming_a_grid_area', '300', '330') }}

Mit dieser Methode müssen wir auf den einzelnen Gitternaschinen gar nichts angeben, alles passiert auf unserem Gittercontainer. Wir können das Layout, das im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft beschrieben wird, sehen.

## Eine Gitterzelle leer lassen

In diesem Beispiel haben wir unser Gitter vollständig mit Bereichen gefüllt und keinen weißen Raum gelassen. Sie können jedoch mit dieser Layoutmethode Gitterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, `.`. Wenn wir den Footer nur direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unterhalb der Sidebar leer lassen.

```css
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
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
    ".  .  .  ft   ft   ft   ft   ft   ft";
}
```

```html
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Leaving_a_grid_cell_empty', '300', '330') }}

Um das Layout ordentlich zu gestalten, können wir mehrere `.`-Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten vorhanden ist, wird es als eine Zelle gezählt. Für ein komplexes Layout ist es von Vorteil, die Reihen und Spalten sauber ausgerichtet zu haben. Es bedeutet, dass Sie tatsächlich direkt im CSS sehen können, wie dieses Layout aussieht.

## Spanning mehrerer Zellen

In unserem Beispiel erstreckt sich jeder Bereich über mehrere Gitterzellen, und wir erreichen dies, indem wir den Namen dieses Gitterbereichs mehrmals mit Leerzeichen dazwischen wiederholen. Sie können zusätzliches Leerzeichen hinzufügen, um die Spalten in der `grid-template-areas`-Wert sauber auszurichten. Sie können sehen, dass wir dies getan haben, damit die `hd`- und `ft`-Bereiche mit `main` ausgerichtet sind.

Der Bereich, den Sie durch das Verketten der Bereichsnamen erstellen, muss rechteckig sein, es gibt derzeit keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation bemerkt jedoch, dass eine zukünftige Ebene diese Funktionalität bieten könnte. Sie können jedoch Reihen genauso leicht wie Spalten überspannen. Zum Beispiel könnten wir unsere Sidebar bis zum Ende des Footers erweitern, indem wir die `.` durch `sd` ersetzen.

```css
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
```

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Spanning_multiple_cells', '300', '330') }}

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter anzeigen, andernfalls ist er ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie in jeder Zeile dieselbe Anzahl von Zellen haben müssen, auch wenn sie leer mit einem Punktzeichen zeigt, dass die Zelle leer bleiben soll. Sie erstellen auch ein ungültiges Gitter, wenn Ihre Bereiche nicht rechteckig sind.

## Das Gitter mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, ist es sehr einfach, Änderungen bei verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Gitter, die Position der Elemente auf dem Gitter oder beides gleichzeitig neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt werden, unabhängig davon, wo er auf dem Gitter platziert ist.

Für unser oben genanntes Layout möchten wir vielleicht ein sehr einfaches Layout bei schmalen Breiten haben, wobei wir ein einspaltiges Gitter definieren und unsere vier Elemente in vier Reihen stapeln.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 940px;
  margin: 0 auto;
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

.wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr;
  grid-template-areas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

Wir können dann dieses Layout innerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) neu definieren, um zu unserem zweispaltigen Layout zu wechseln und möglicherweise zu einem dreispaltigen Layout, wenn der verfügbare Platz noch größer ist. Beachten Sie, dass wir für das breite Layout das neunkolonige Track-Gitter beibehalten und die Positionierung der Elemente mit `grid-template-areas` neu definieren.

```css
@media (width >= 30em) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (width >= 60em) {
  .wrapper {
    grid-template-areas:
      "hd hd hd   hd   hd   hd   hd   hd hd"
      "sd sd main main main main main ft ft";
  }
}
```

```html hidden
<div class="wrapper">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
  <div class="footer">Footer</div>
</div>
```

{{ EmbedLiveSample('Redefining_the_grid_using_media_queries', '550', '330') }}

## Verwendung von `grid-template-areas` für UI-Elemente

Viele der Gitterbeispiele, die Sie online finden, gehen davon aus, dass Sie Gitter für das Hauptseitenlayout verwenden, jedoch kann das Gitter ebenso nützlich für kleine Elemente sein wie für größere. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da es im Code leicht zu sehen ist, wie Ihr Element aussieht.

### Medien-Objekt-Beispiel

Als Beispiel können wir ein "[Medien-Objekt](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte auf der rechten oder linken Seite des Kastens angezeigt werden.

![Bilder, die ein Beispiel für das Design eines Medienobjekts zeigen](4_media_objects.png)

Unser Gitter ist ein zweispaltiges Track-Gitter, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` gesetzt ist. Wenn Sie eine feste Breite für den Bildbereich wünschen, können Sie die Bildspalte als Pixelbreite festlegen und den Textbereich `1fr` zuweisen. Eine einzelne Spalte `1fr` würde dann den Rest des Platzes einnehmen.

Wir geben dem Bildbereich den Gitterbereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der Eigenschaft `grid-template-areas` layouten.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('Media_object_example', '300', '105') }}

### Anzeige des Bildes auf der anderen Seite des Kastens

Wir möchten vielleicht unseren Kasten mit dem Bild auf der anderen Seite anzeigen. Dazu definieren wir das Gitter neu, um den `1fr`-Track als letzten zu setzen und die Werte in {{cssxref("grid-template-areas")}} umzukehren.

```css
* {
  box-sizing: border-box;
}

.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}

.media.flipped {
  grid-template-columns: 3fr 1fr;
  grid-template-areas: "content img";
}

.media .image {
  grid-area: img;
  background-color: #ffd8a8;
}

.media .text {
  grid-area: content;
  padding: 10px;
}
```

```html
<div class="media flipped">
  <div class="image"></div>
  <div class="text">
    This is a media object example. We can use grid-template-areas to switch
    around the image and text part of the media object.
  </div>
</div>
```

{{ EmbedLiveSample('Displaying_the_image_on_the_other_side_of_the_box', '300', '105') }}

## Gitter-Definition Shorthands

Nachdem wir uns verschiedene Möglichkeiten der Platzierung von Elementen auf unseren Gittern angesehen haben und viele der Eigenschaften, die zur Definition des Gitters verwendet werden, ist dies ein guter Zeitpunkt, um einen Blick auf einige der Shorthand-Methoden zu werfen, die zur Definition des Gitters und vieler Aspekte in einer einzigen Zeile CSS verfügbar sind.

Diese können schnell schwer lesbar für andere Entwickler oder sogar für Ihr zukünftiges Ich werden. Sie sind jedoch Teil der Spezifikation, und es ist wahrscheinlich, dass Sie ihnen in Beispielen oder im Einsatz durch andere Entwickler begegnen, auch wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie Shorthands verwenden, sollten Sie sich daran erinnern, dass Shorthands nicht nur ermöglichen, viele Eigenschaften auf einmal zu setzen, sondern auch **alles, was Sie nicht (oder nicht in der Lage sind) im Shorthand zu setzen, auf die Anfangswerte zurücksetzen**. Daher sollten Sie sich bewusst sein, dass die Verwendung eines Shorthands möglicherweise Dinge zurücksetzt, die Sie an anderer Stelle angewendet haben.

Die beiden Shorthands für den Gittercontainer sind der explizite Gitter-Shorthand {{cssxref("grid-template")}} und der Gitter-Definitions-Shorthand {{cssxref("grid")}}.

### `grid-template`

Die {{cssxref("grid-template")}}-Shorthand-Eigenschaft setzt die folgenden Langform-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als _explizierter Gitter-Shorthand_ bezeichnet, weil sie Werte setzt, die Sie kontrollieren, wenn Sie ein explizites Gitter definieren, und nicht solche, die sich auf allfällig erstellte implizite Reihen- oder Spuren auswirken.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem in diesem Leitfaden früher erstellen Layout entspricht.

```css
.wrapper {
  display: grid;
  grid-template:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir deklarieren auch die Größe der Reihe am Ende jeder Reihe. Dies ist, was `minmax(100px, auto)` tut.

Dann folgt nach dem `grid-template-areas` ein Schrägstrich, danach folgt eine explizite Listenangabe der Spuren.

### `grid`

Die {{cssxref("grid")}}-Shorthand geht einen Schritt weiter und setzt auch Eigenschaften, die durch das implizite Gitter verwendet werden. So setzen Sie:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf exakt die gleiche Weise wie den {{cssxref("grid-template")}}-Shorthand verwenden. Seien Sie sich jedoch bewusst, dass Sie damit die anderen durch die Eigenschaft gesetzten Werte zurücksetzen.

```css
.wrapper {
  display: grid;
  grid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, auto)
    "sd sd sd main main main main main main" minmax(100px, auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, auto)
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
}
```

Wir werden die andere durch diesen Shorthand angebotene Funktionalität erneut betrachten, wenn wir uns die [automatische Platzierung im Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) und die `grid-auto-flow`-Eigenschaft ansehen.

## Nächste Schritte

Wenn Sie den [Gitter-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) gefolgt sind, sollten Sie in der Lage sein, Gitterlayouts mit [linienbasierten Placements](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) oder [benannten Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen. Lassen Sie uns nun einen Blick darauf werfen, [Gitterlayouts mit benannten Gitterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen.
