---
title: Grid-Template-Bereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: b692821c494fd3a25dd883b6fe14998fa2621f7b
---

{{CSSRef}}

Im [vorherigen Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns die Gitterlinien und die Positionierung von Elementen in Bezug auf diese Linien angesehen. Wenn Sie das CSS-Grid-Layout verwenden, gibt es immer Linien, und dies kann ein unkomplizierter Weg sein, um Elemente auf Ihrem Grid zu platzieren. Es gibt jedoch eine alternative Methode für die Positionierung von Elementen im Gitter, die Sie allein oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode besteht darin, unsere Elemente mit benannten Vorlagenbereichen zu platzieren, und wir werden sehen, wie diese Methode genau funktioniert. Sie werden schnell feststellen, warum wir dies manchmal die ASCII-Art-Methode des Gitterlayouts nennen!

## Einen Gitterbereich benennen

Sie sind bereits auf die {{cssxref("grid-area")}} Eigenschaft gestoßen. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die verwendet werden, um einen Gitterbereich zu positionieren.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Gitterbereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der {{cssxref("grid-template-areas")}} Eigenschaft angeben. Sie können entscheiden, wie Sie Ihren Bereich benennen möchten. Wenn ich zum Beispiel das unten gezeigte Layout erstellen möchte, kann ich vier Hauptbereiche identifizieren:

- einen Header
- einen Footer
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild, das ein einfaches Zweispaltenlayout mit Kopf- und Fußzeile zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}} Eigenschaft kann ich jedem dieser Bereiche einen Namen zuweisen. Dies wird noch kein Layout erstellen, aber wir haben jetzt benannte Bereiche, die wir in einem Layout verwenden können.

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

Nachdem ich diese Namen definiert habe, erstelle ich mein Layout. Dieses Mal erstelle ich, anstatt meine Elemente mit den auf den Elementen selbst angegebenen Lininennummern zu platzieren, das gesamte Layout im Gitterbehälter.

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

Mit dieser Methode müssen wir überhaupt nichts an den einzelnen Gitterelementen angeben, alles passiert in unserem Gitterbehälter. Wir können das Layout sehen, das als Wert der {{cssxref("grid-template-areas")}} Eigenschaft beschrieben wird.

## Eine Gitterzelle leer lassen

In diesem Beispiel haben wir unser Gitter vollständig mit Bereichen gefüllt und keinen Leerraum übrig gelassen. Sie können jedoch mit dieser Layoutmethode Gitterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, `.`. Wenn ich den Footer nur direkt unterhalb des Hauptinhalts anzeigen möchte, müsste ich die drei Zellen unterhalb der Seitenleiste leer lassen.

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

Um das Layout übersichtlicher zu gestalten, kann ich mehrere `.` Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten vorhanden ist, wird es als eine Zelle gezählt. Bei einem komplexen Layout liegt der Vorteil darin, dass die Zeilen und Spalten ordentlich ausgerichtet sind. Das bedeutet, dass Sie im CSS direkt sehen können, wie dieses Layout aussieht.

## Über mehrere Zellen hinwegspannen

In unserem Beispiel umfasst jeder der Bereiche mehrere Gitterzellen, und das erreichen wir, indem wir den Namen dieses Gitterbereichs mehrfach mit Leerzeichen dazwischen wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten im Wert von `grid-template-areas` ordentlich auszurichten. Sie können sehen, dass ich dies getan habe, um zu erreichen, dass `hd` und `ft` mit `main` übereinstimmen.

Der durch Verkettung der Bereichsnamen erstellte Bereich muss rechteckig sein, es gibt derzeit keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist jedoch darauf hin, dass eine zukünftige Stufe diese Funktionalität bieten könnte. Sie können jedoch genauso einfach Zeilen wie Spalten überspannen. Zum Beispiel könnten wir unsere Seitenleiste bis zum Ende des Footers erweitern, indem wir die `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter zeigen, andernfalls ist er ungültig (und die Eigenschaft wird ignoriert). Dies bedeutet, dass Sie für jede Zeile die gleiche Anzahl von Zellen haben müssen, wenn diese leer mit einem Punktzeichen gezeigt werden, das angibt, dass die Zelle leer gelassen werden soll. Sie erstellen auch ein ungültiges Gitter, wenn Ihre Bereiche nicht rechteckig sind.

## Das Gitter mit Media-Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, macht dies Änderungen bei verschiedenen Breakpoints sehr einfach. Sie können dies tun, indem Sie das Gitter, die Position der Elemente im Gitter oder beides gleichzeitig neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb jeglicher Media-Queries. So wird der Inhaltsbereich immer `main` genannt, egal wo im Gitter er platziert ist.

Für das oben gezeigte Layout möchten wir bei schmalen Breiten möglicherweise ein sehr einfaches Layout definieren, indem wir ein einzelnes Spaltenraster definieren und unsere Elemente stapeln.

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

Wir können dann dieses Layout innerhalb von Media-Queries neu definieren, um zu unserem Zweispaltenlayout zu wechseln, und vielleicht zu einem Dreispaltenlayout wechseln, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass ich für das breite Layout mein neun kolumniges Spurengitter beibehalte und neu definiere, wo Elemente mithilfe von `grid-template-areas` platziert werden.

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

## Verwenden von `grid-template-areas` für UI-Elemente

Viele der im Internet verfügbaren Gitterbeispiele gehen davon aus, dass Sie Gitter für das Hauptseitenlayout verwenden werden, jedoch kann Gitter genauso nützlich für kleine Elemente sein wie für die größeren. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da es einfach ist, im Code zu sehen, wie Ihr Element aussieht.

### Medienobjekt-Beispiel

Als ein sehr einfaches Beispiel können wir ein "Medienobjekt" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder ein anderes Medium auf einer Seite und Inhalt auf der anderen. Das Bild könnte auf der rechten oder linken Seite des Kastens angezeigt werden.

![Bilder, die ein Beispiel eines Medienobjektdesigns zeigen](4_media_objects.png)

Unser Gitter ist ein zweispuriges Spaltengitter, wobei die Spalte für das Bild mit `1fr` und der Text mit `3fr` dimensioniert ist. Wenn Sie einen festen Breitenbereich für das Bild wünschen, könnten Sie die Spalte für das Bild als Pixelbreite festlegen und dem Textbereich `1fr` zuweisen. Eine einzelne Spaltenspur von `1fr` würde dann den Rest des Platzes einnehmen.

Wir geben dem Bildbereich einen Gitternamen von `img` und dem Textbereich `content`, dann können wir diese mit der Eigenschaft `grid-template-areas` anordnen.

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

Möglicherweise möchten wir unsere Box mit dem Bild in umgekehrter Reihenfolge anzeigen. Dazu definieren wir das Gitter neu, um die `1fr` Spur zuletzt zu setzen, und kehren die Werte in {{cssxref("grid-template-areas")}} um.

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

## Gitter-Definition Kurzformen

Nachdem wir verschiedene Möglichkeiten des Platzierens von Elementen auf unseren Gittern und viele der Eigenschaften zur Definition eines Gitters betrachtet haben, ist dies eine gute Gelegenheit, sich einige Kurzformen anzusehen, die zur Definition des Gitters und vieler Aspekte davon in einer einzigen CSS-Zeile verfügbar sind.

Diese können schnell schwer lesbar für andere Entwickler oder sogar Ihr zukünftiges Selbst werden. Sie sind jedoch Teil der Spezifikation, und es ist wahrscheinlich, dass Sie ihnen in Beispielen oder bei anderen Entwicklern begegnen, selbst wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie eine Kurzform verwenden, sollten Sie daran denken, dass Kurzformen nicht nur die Einstellung vieler Eigenschaften auf einmal ermöglichen, sondern auch die **Zurücksetzung** von Dingen auf ihre Anfangswerte, die Sie nicht einstellen oder nicht in der Kurzform einstellen können. Daher, wenn Sie eine Kurzform verwenden, seien Sie sich bewusst, dass sie möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die beiden Kurzformen für den Gitterbehälter sind die explizite Gitter-Kurzform `grid-template` und die Gitter-Definitions-Kurzform `grid`.

### `grid-template`

Die {{cssxref("grid-template")}} Eigenschaft setzt die folgenden Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als die explizite Gitter-Kurzform bezeichnet, da sie diejenigen Dinge setzt, die Sie steuern, wenn Sie ein explizites Gitter definieren, und nicht jene, die sich auf die möglicherweise erstellten impliziten Zeilen- oder Spaltenspuren auswirken.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem zuvor in diesem Leitfaden erstellten Layout entspricht.

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

Der erste Wert ist unser `grid-template-areas` Wert, aber wir geben auch die Größe der Zeile am Ende jeder Zeile an. Das ist das, was das `minmax(100px, auto)` tut.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach eine explizite Spur abzählung der Spaltenspuren.

### `grid`

Die {{cssxref("grid")}} Kurzform geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Gitter verwendet werden. Sie setzen also:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf dieselbe Weise wie die {{cssxref("grid-template")}} Kurzform verwenden. Beachten Sie jedoch, dass Sie beim Verwenden dieser die anderen Werte, die von der Eigenschaft gesetzt werden, zurücksetzen.

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

Wir werden die andere Funktionalität, die durch diese Kurzform angeboten wird, später in diesen Leitfäden wieder besuchen, wenn wir uns die automatische Platzierung und die `grid-auto-flow` Eigenschaft ansehen.

Wenn Sie diese anfänglichen Leitfäden durchgearbeitet haben, sollten Sie jetzt in der Lage sein, Gitterlayouts mit linienbasierter Platzierung oder benannten Bereichen zu erstellen. Nehmen Sie sich etwas Zeit, um einige gängige Layoutmuster mit Gitter zu erstellen. Auch wenn es viele neue Begriffe zu lernen gibt, ist die Syntax relativ einfach. Wenn Sie Beispiele entwickeln, werden Sie wahrscheinlich auf einige Fragen und Anwendungsfälle stoßen, die wir noch nicht behandelt haben. In den restlichen Abschnitten dieser Leitfäden schauen wir uns einige weitere Details der Spezifikation an, damit Sie beginnen können, fortgeschrittene Layouts damit zu erstellen.
