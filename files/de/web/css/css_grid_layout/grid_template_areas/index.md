---
title: Grid-Vorlagenbereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Im [vorherigen Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns mit Gitterlinien und deren Positionierung von Elementen befasst. Wenn Sie CSS-Grid-Layout verwenden, haben Sie immer Linien, und dies kann eine einfache Möglichkeit sein, Elemente in Ihrem Gitter zu platzieren. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen im Grid, die Sie allein oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode besteht darin, unsere Elemente mithilfe benannter Vorlagenbereiche zu platzieren, und wir werden genau erfahren, wie diese Methode funktioniert. Sie werden sehr schnell sehen, warum wir dies manchmal die ASCII-Art-Methode des Gitterlayouts nennen!

## Einen Gitterbereich benennen

Sie sind bereits auf die Eigenschaft {{cssxref("grid-area")}} gestoßen. Dies ist die Eigenschaft, die als Wert alle vier Linien übernehmen kann, die zur Positionierung eines Gitterbereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Gitterbereich](4_area.png)

Wir können einen Bereich auch definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der Eigenschaft {{cssxref("grid-template-areas")}} angeben. Sie können wählen, wie Sie Ihren Bereich benennen möchten. Wenn ich beispielsweise das unten dargestellte Layout erstellen möchte, kann ich vier Hauptbereiche identifizieren.

- ein Header
- ein Footer
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild, das ein einfaches zweispaltiges Layout mit Header und Footer zeigt](4_layout.png)

Mit der Eigenschaft {{cssxref("grid-area")}} kann ich jedem dieser Bereiche einen Namen zuweisen. Dies wird noch kein Layout erstellen, aber wir haben nun benannte Bereiche, die wir in einem Layout verwenden können.

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

Nachdem wir diese Namen definiert haben, erstelle ich mein Layout. Dieses Mal platziere ich meine Elemente nicht mithilfe von auf den Elementen selbst angegebenen Zeilennummern, sondern erstelle das gesamte Layout auf dem Gittercontainer.

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

Mit dieser Methode müssen wir nichts an den einzelnen Gitterelementen angeben, alles passiert auf unserem Gittercontainer. Wir können das Layout sehen, das als Wert der Eigenschaft {{cssxref("grid-template-areas")}} beschrieben wird.

## Eine Gitterzelle leer lassen

Wir haben unser Gitter in diesem Beispiel vollständig mit Bereichen gefüllt und keine weißen Räume gelassen. Sie können jedoch mit dieser Methode der Anordnung Gitterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen `.`. Wenn ich den Footer direkt unter dem Hauptinhalt anzeigen möchte, müsste ich die drei Zellen unterhalb der Seitenleiste leer lassen.

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

Um das Layout ordentlicher zu gestalten, kann ich mehrere Punktzeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten vorhanden ist, wird es als eine Zelle gezählt. Für ein komplexes Layout gibt es einen Vorteil, wenn die Reihen und Spalten ordentlich ausgerichtet sind. Es bedeutet, dass Sie tatsächlich sehen können, wie dieses Layout im CSS aussieht.

## Mehrere Zellen überspannen

In unserem Beispiel überspannt jeder der Bereiche mehrere Gitterzellen, und wir erreichen dies, indem wir den Namen dieses Gitterbereichs mehrmals mit Leerzeichen dazwischen wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten in der Eigenschaft `grid-template-areas` ordentlich auszurichten. Sie können sehen, dass ich dies getan habe, damit sich `hd` und `ft` mit `main` ausrichten.

Der Bereich, den Sie erstellen, indem Sie die Bereichsnamen verkettet angeben, muss rechteckig sein. Derzeit gibt es keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist darauf hin, dass eine zukünftige Stufe diese Funktionalität möglicherweise bereitstellt. Sie können jedoch genauso einfach Zeilen wie Spalten überspannen. Zum Beispiel könnten wir unsere Seitenleiste so erweitern, dass sie bis zum Ende des Footers reicht, indem wir das `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter anzeigen, andernfalls ist er ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie für jede Zeile die gleiche Anzahl von Zellen haben müssen, auch wenn sie leer sind, und mit einem Punktzeichen demonstrieren, dass die Zelle leer gelassen werden soll. Sie werden auch ein ungültiges Gitter erzeugen, wenn Ihre Bereiche nicht rechteckig sind.

## Das Gitter mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, ist es sehr einfach, Anpassungen an verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Gitter, die Position der Elemente im Gitter oder beides gleichzeitig neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt, egal wo er im Gitter platziert ist.

Für unser oben stehendes Layout könnten wir ein sehr einfaches Layout bei schmalen Breiten haben, indem wir ein einspaltiges Gitter definieren und unsere Elemente stapeln.

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

Wir können dann dieses Layout innerhalb von Media Queries neu definieren, um zu unserem zweispaltigen Layout zu wechseln und vielleicht zu einem dreispaltigen Layout zu wechseln, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass ich für das breite Layout mein neuner Spurenraster beibehalte und die Platzierung der Elemente mithilfe von `grid-template-areas` neu definiere.

```css
@media (min-width: 500px) {
  .wrapper {
    grid-template-columns: repeat(9, 1fr);
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "sd sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 700px) {
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

Viele der Gitterbeispiele, die Sie online finden, gehen davon aus, dass Sie Gitter für die Hauptseitengestaltung verwenden werden. Grid kann jedoch genauso nützlich für kleine Elemente sein wie für größere. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da es einfach ist, im Code zu sehen, wie Ihr Element aussieht.

### Beispiel für ein Medienelement

Als ein sehr einfaches Beispiel können wir ein "Medienelement" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder ein anderes Medium auf der einen Seite und Inhalt auf der anderen Seite. Das Bild könnte auf der rechten oder linken Seite des Kastens angezeigt werden.

![Bilder, die ein Beispiel für ein Medienelement-Design zeigen](4_media_objects.png)

Unser Gitter ist ein zweispuriges Gitter, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` eingestellt ist. Wenn Sie eine feste Breite für den Bildbereich haben möchten, können Sie die Bildspalte als Pixelbreite festlegen und den Textbereich auf `1fr` einstellen. Eine einspaltige Spur von `1fr` würde dann den restlichen Platz einnehmen.

Wir geben dem Bildbereich einen Gitterbereichsnamen `img` und dem Textbereich `content`, dann können wir diese mithilfe der Eigenschaft `grid-template-areas` anordnen.

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

{{ EmbedLiveSample('Media_object_example', '300', '200') }}

### Das Bild auf der anderen Seite des Kastens anzeigen

Vielleicht möchten wir unseren Kasten auch mit dem Bild andersherum anzeigen. Dazu definieren wir das Gitter neu, um die `1fr`-Spur zuletzt zu setzen und die Werte in {{cssxref("grid-template-areas")}} zu tauschen.

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

{{ EmbedLiveSample('Displaying_the_image_on_the_other_side_of_the_box', '300', '200') }}

## Gitterdefinition-Shorthands

Nachdem wir verschiedene Möglichkeiten der Platzierung von Elementen auf unseren Gittern betrachtet und viele der Eigenschaften, die zur Definition von Gittern verwendet werden, gesehen haben, ist dies ein guter Zeitpunkt, um einen Blick auf ein paar Shorthands zu werfen, die dazu da sind, das Gitter in einer Zeile CSS zu definieren und viele Dinge darüber zu sagen.

Diese können schnell schwer lesbar werden für andere Entwickler oder sogar Ihr zukünftiges Selbst. Dennoch sind sie Teil der Spezifikation, und es ist wahrscheinlich, dass Sie auf Beispiele oder auf den Einsatz durch andere Entwickler stoßen werden, auch wenn Sie entscheiden, sie nicht zu nutzen.

Bevor Sie irgendeinen Shortcode verwenden, ist es wichtig zu bedenken, dass Shorthands nicht nur das Einrichten vieler Eigenschaften in einem Rutsch ermöglichen, sondern auch Dinge auf ihre Anfangswerte zurücksetzen, die Sie nicht oder nicht im Shortcode einstellen können. Daher sollten Sie sich bewusst sein, dass, wenn Sie ein Shortcode verwenden, es Dinge zurücksetzen kann, die Sie anderswo angewendet haben.

Die beiden Shorthands für den Gittercontainer sind die Explizit-Gitter-Shortcode `grid-template` und der Gitterdefinitions-Shortcode `grid`.

### `grid-template`

Die Eigenschaft {{cssxref("grid-template")}} setzt die folgenden Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als Explizit-Gitter-Shortcode bezeichnet, weil sie genau die Dinge festlegt, die Sie steuern, wenn Sie ein explizites Gitter definieren, und nicht diejenigen, die sich auf alle impliziten Reihen- oder Spurenraster auswirken könnten, die erstellt werden könnten.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem bereits früher in diesem Leitfaden erstellten Layout entspricht.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir legen auch die Größe der Zeile am Ende jeder Zeile fest. Dies ist, was das `minmax(100px, auto)` bewirkt.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach erfolgt eine explizite Spurauflistung der Spuren.

### `grid`

Der {{cssxref("grid")}}-Shortcode geht einen Schritt weiter und setzt auch Eigenschaften, die von dem impliziten Gitter verwendet werden. So werden Sie festlegen:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf genau die gleiche Weise wie den {{cssxref("grid-template")}}-Shortcode verwenden, seien Sie sich nur bewusst, dass bei deren Verwendung die anderen von der Eigenschaft gesetzten Werte zurückgesetzt werden.

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

Wir werden die andere von diesem Shortcode angebotene Funktionalität später in diesen Leitfäden erneut besuchen, wenn wir uns mit der automatischen Platzierung und der Eigenschaft grid-auto-flow beschäftigen.

Wenn Sie diese ersten Leitfäden durchgearbeitet haben, sollten Sie nun in der Lage sein, Gitterslayouts mithilfe von linienbasierten Platzierungen oder benannten Bereichen zu erstellen. Nehmen Sie sich etwas Zeit, um einige gängige Layoutmuster mit Grid zu erstellen, auch wenn es viele neue Begriffe zu lernen gibt, ist die Syntax relativ unkompliziert. Während Sie Beispiele entwickeln, werden Sie wahrscheinlich auf einige Fragen und Anwendungsfälle stoßen, die wir noch nicht behandelt haben. In den restlichen dieser Leitfäden werden wir einige der weiteren Details in der Spezifikation untersuchen, damit Sie beginnen können, fortgeschrittene Layouts damit zu erstellen.
