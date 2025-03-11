---
title: Grid-Template-Bereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: b17ca921175c0a92d21c6c4effbc7fa3dc348a8e
---

{{CSSRef}}

Im [Leitfaden für das Grid-Layout mit linienbasiertem Layout](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns die Grid-Linien und die Positionierung von Elementen an diesen Linien angesehen. Wenn Sie das CSS Grid Layout verwenden, gibt es immer Linien, und dies kann eine unkomplizierte Methode sein, um Elemente auf Ihrem Grid zu platzieren. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen auf dem Grid, die Sie alleine oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode umfasst das Platzieren unserer Elemente mit benannten Template-Bereichen. Sie werden schnell sehen, warum wir diese Methode manchmal das ASCII-Art-Layout des Grids nennen!

## Einen Grid-Bereich benennen

Ihnen ist bereits die {{cssxref("grid-area")}} Eigenschaft begegnet. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die zur Positionierung eines Grid-Bereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Wenn wir hier alle vier Linien definieren, definieren wir den Bereich, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Grid-Bereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann den Standort dieses Bereichs in den Wert der {{cssxref("grid-template-areas")}} Eigenschaft spezifizieren. Sie können selbst wählen, wie Sie Ihren Bereich benennen möchten. Beispielsweise können wir, wenn wir das unten gezeigte Layout erstellen möchten, vier Hauptbereiche identifizieren.

- einen Header
- einen Footer
- eine Sidebar
- den Hauptinhalt

![Ein Bild, das ein zweispaltiges Layout mit Header und Footer zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}} Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Dies allein erstellt noch kein Layout. Stattdessen bietet es benannte Bereiche, die in einem Layout verwendet werden können.

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

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Dieses Mal, anstatt Elemente mit anhand der auf den Elementen selbst spezifizierten Liniennummern zu platzieren, erstellen wir das gesamte Layout auf dem Grid-Container. Hier erstellen wir ein 9-Spalten-Grid und geben an, dass die Bereiche `hd` und `ft` alle 9 Spalten umfassen, während `sd` drei und `main` sechs umfasst. Jeder Bereich umfasst nur eine Zeile.

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

Mit dieser Methode müssen wir nichts auf den einzelnen Grid-Items angeben, alles geschieht auf unserem Grid-Container. Wir können das Layout als Wert der {{cssxref("grid-template-areas")}} Eigenschaft sehen.

## Eine Grid-Zelle leer lassen

Wir haben unser Grid in diesem Beispiel vollständig mit Bereichen gefüllt, ohne weißen Raum zu lassen. Sie können jedoch mit dieser Layout-Methode Grid-Zellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, `.`. Wenn wir beispielsweise den Footer direkt unter dem Hauptinhalt anzeigen möchten, müssen wir die drei Zellen unterhalb der Sidebar leer lassen.

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

Um das Layout ordentlicher zu gestalten, können wir mehrere `.`-Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten vorhanden ist, wird es als eine Zelle gezählt. Für ein komplexes Layout gibt es den Vorteil, dass die Reihen und Spalten ordentlich ausgerichtet sind. Das bedeutet, dass Sie tatsächlich direkt im CSS sehen können, wie dieses Layout aussieht.

## Mehrere Zellen umfassen

In unserem Beispiel umfasst jeder Bereich mehrere Grid-Zellen, und dies erreichen wir, indem wir den Namen dieses Grid-Bereichs mehrfach mit Leerzeichen dazwischen wiederholen. Sie können zusätzlichen Leerraum hinzufügen, um in dem Wert von `grid-template-areas` Ihre Spalten ordentlich auszurichten. Sie können sehen, dass wir dies bei den `hd`- und `ft`-Bereichen so gemacht haben, dass sie mit `main` übereinstimmen.

Der Bereich, den Sie durch das Aneinanderreihen der Bereichsnamen erstellen, muss rechteckig sein. Derzeit gibt es keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation merkt jedoch an, dass eine zukünftige Version diese Funktionalität bieten könnte. Sie können jedoch Zeilen genauso einfach wie Spalten umfassen. Zum Beispiel könnten wir unsere Sidebar bis zum Ende des Footers spannen lassen, indem wir das `.` mit `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein komplettes Grid darstellen, sonst ist es ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie die gleiche Anzahl an Zellen pro Zeile haben müssen, auch wenn sie mit einem Punktzeichen für leere Zellen angezeigt werden. Sie erstellen ebenfalls ein ungültiges Grid, wenn Ihre Bereiche nicht rechteckig sind.

## Den Grid mit Media Queries neu definieren

Da unser Layout nun in einem Teil des CSS enthalten ist, macht es dies sehr einfach, Änderungen bei verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie den Grid, die Position von Elementen auf dem Grid oder beides gleichzeitig neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. Auf diese Weise würde die Inhaltsfläche immer `main` genannt, egal wo im Grid sie platziert wird.

Für unser obiges Layout möchten wir möglicherweise ein sehr einfaches Layout bei geringen Breiten haben, das ein einspaltiges Grid definiert und unsere vier Elemente in vier Reihen stapelt.

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

Wir können dieses Layout dann innerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) neu definieren, um zu unserem zweispaltigen Layout zu wechseln, und es möglicherweise zu einem dreispaltigen Layout erweitern, wenn noch mehr Platz vorhanden ist. Beachten Sie, dass wir für das breite Layout das neunschlufige Grid beibehalten und dabei neu definieren, wo die Elemente mit `grid-template-areas` platziert werden.

```css
@media (min-width: 30em) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 60em) {
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

Viele der Grid-Beispiele, die Sie online finden, gehen davon aus, dass Sie Grid für das Hauptseiten-Layout verwenden werden. Grid kann jedoch ebenso nützlich für kleinere Elemente wie für größere sein. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders schön sein, da im Code leicht zu erkennen ist, wie Ihr Element aussieht.

### Beispiel für ein Medienobjekt

Als Beispiel können wir ein "[Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects)" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte rechts oder links von der Box angezeigt werden.

![Bilder, die ein Beispiel-Design eines Medienobjekts zeigen](4_media_objects.png)

Unser Grid ist ein zweispaltiges Track-Grid, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` gesetzt ist. Wenn Sie einen festen Breitenbereich für das Bild möchten, könnten Sie die Bildspalte als Pixelbreite setzen und den Textbereich mit `1fr` zuweisen. Eine einspaltige Spur von `1fr` würde dann den restlichen Platz einnehmen.

Wir geben dem Bildbereich einen Grid-Bereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der Eigenschaft `grid-template-areas` anordnen.

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

### Das Bild auf der anderen Seite der Box anzeigen

Wir möchten möglicherweise unsere Box so anzeigen, dass das Bild auf der anderen Seite ist. Um dies zu tun, definieren wir den Grid neu, um die `1fr` Strecke zuletzt zu setzen, und ändern die Werte in {{cssxref("grid-template-areas")}}.

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

## Kurzdefinitionen des Grids

Nachdem wir uns verschiedene Methoden zur Platzierung von Elementen auf unseren Grids und viele der zur Definition von Grids verwendeten Eigenschaften angesehen haben, ist dies ein guter Zeitpunkt, um einen Blick auf einige der verfügbaren Kurzdefinitionen zu werfen, mit denen Sie das Grid und viele Aspekte davon in einer einzigen CSS-Zeile definieren können.

Diese können schnell schwer lesbar für andere Entwickler oder Sie selbst in der Zukunft werden. Sie sind jedoch Teil der Spezifikation und es ist wahrscheinlich, dass Sie ihnen in Beispielen oder in der Praxis von anderen Entwicklern begegnen, auch wenn Sie sich entscheiden, sie nicht zu verwenden.

Vor der Verwendung einer Kurzdefinition ist es wert, sich daran zu erinnern, dass Kurzdefinitionen nicht nur die Festlegung vieler Eigenschaften auf einmal ermöglichen, sondern sie auch **alles zurücksetzen**, was Sie nicht (oder nicht können) innerhalb der Kurzdefinition auf ihre Standardwerte setzen. Seien Sie also vorsichtig, wenn Sie eine Kurzdefinition verwenden, da sie möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die beiden Kurzdefinitionen für den Grid-Container sind die explizite Grid-Kurzdefinition {{cssxref("grid-template")}} und die Grid-Definition-Kurzdefinition {{cssxref("grid")}}.

### `grid-template`

Die Kurzdefinitionseigenschaft {{cssxref("grid-template")}} setzt die folgenden Langhand-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als _explizite Grid-Kurzdefinition_ bezeichnet, da sie Werte festlegt, die Sie beim Definieren eines expliziten Grids steuern, und nicht diejenigen, die sich auf im Grid implizit erstellte Spuren auswirken.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem Layout entspricht, das früher in diesem Leitfaden erstellt wurde.

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

Der erste Wert ist unser `grid-template-areas` Wert, aber wir deklarieren auch die Größe der Zeile am Ende jeder Zeile. Dies wird durch `minmax(100px, auto)` erreicht.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, nach dem eine explizite Spuraufzählung der Spalten erfolgt.

### `grid`

Die Kurzdefinition {{cssxref("grid")}} geht noch einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Grid verwendet werden. So werden Sie setzen:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf die gleiche Weise wie die {{cssxref("grid-template")}} Kurzdefinition verwenden. Seien Sie sich nur bewusst, dass Sie dabei die anderen von der Eigenschaft gesetzten Werte zurücksetzen werden.

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

Wir werden die andere Funktionalität, die diese Kurzdefinition bietet, erneut betrachten, wenn wir uns mit [automatischer Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) und der `grid-auto-flow` Eigenschaft befassen.

## Nächste Schritte

Wenn Sie an den [Grid-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) gearbeitet haben, sollten Sie in der Lage sein, Grid-Layouts mit [linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) oder [benannte Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen. Sehen wir uns nun das Erstellen von [Grid-Layouts mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) an.
