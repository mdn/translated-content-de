---
title: Grid-Template-Areas
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Im [vorherigen Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns mit Gitternetzlinien und der Positionierung von Elementen entlang dieser Linien befasst. Bei der Verwendung des CSS Grid Layouts haben Sie immer Linien, und dies kann eine einfache Möglichkeit sein, Elemente auf Ihrem Gitter zu platzieren. Es gibt jedoch eine alternative Methode zum Positionieren von Elementen auf dem Gitter, die Sie allein oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode beinhaltet das Platzieren unserer Elemente mittels benannter Template-Bereiche, und wir werden genau herausfinden, wie diese Methode funktioniert. Sie werden sehr schnell sehen, warum wir dies manchmal die ASCII-Art-Methode des Grid-Layouts nennen!

## Einen Gitterbereich benennen

Sie haben bereits die {{cssxref("grid-area")}} Eigenschaft kennengelernt. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die verwendet werden, um einen Gitterbereich zu positionieren.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Gitterbereich](4_area.png)

Wir können einen Bereich auch definieren, indem wir ihm einen Namen geben und dann den Ort dieses Bereichs im Wert der {{cssxref("grid-template-areas")}} Eigenschaft angeben. Sie können frei wählen, wie Sie Ihren Bereich benennen möchten. Wenn ich zum Beispiel das unten gezeigte Layout erstellen möchte, kann ich vier Hauptbereiche identifizieren.

- einen Header
- einen Footer
- eine Sidebar
- den Hauptinhalt

![Ein Bild, das ein einfaches Zweispaltenlayout mit Header und Footer zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}} Eigenschaft kann ich jedem dieser Bereiche einen Namen zuweisen. Dies erstellt zwar noch kein Layout, aber wir haben nun benannte Bereiche, um sie in einem Layout zu verwenden.

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

Nachdem wir diese Namen definiert haben, erstelle ich mein Layout. Dieses Mal, anstatt meine Elemente mit auf den Elementen selbst angegebenen Liniennummern zu platzieren, erstelle ich das gesamte Layout auf dem Gitter-Container.

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

Mit dieser Methode müssen wir überhaupt nichts an den einzelnen Gitterelementen spezifizieren; alles geschieht auf unserem Gitter-Container. Wir können das Layout sehen, das als Wert der {{cssxref("grid-template-areas")}} Eigenschaft beschrieben wird.

## Eine Gitterzelle leer lassen

In diesem Beispiel haben wir unser Gitter vollständig mit Bereichen gefüllt und keinen weißen Raum gelassen. Sie können jedoch Zellen im Gitter mit dieser Layoutmethode leer lassen. Um eine Zelle leer zu lassen, verwenden Sie den Punkt (.), `.`. Wenn ich den Footer nur direkt unter dem Hauptinhalt anzeigen möchte, müsste ich die drei Zellen unter der Sidebar leer lassen.

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

Um das Layout aufgeräumter zu machen, kann ich mehrere `.` Zeichen verwenden. Solange zwischen den Punkten mindestens ein Leerzeichen ist, wird es als eine Zelle gezählt. Bei einem komplexen Layout gibt es den Vorteil, die Zeilen und Spalten ordentlich ausgerichtet zu haben. Dies bedeutet, dass Sie direkt im CSS sehen können, wie dieses Layout aussieht.

## Mehrere Zellen überbrücken

In unserem Beispiel erstreckt sich jeder der Bereiche über mehrere Gitterzellen, und dies erreichen wir, indem wir den Namen dieses Gitterbereichs mit Leerzeichen dazwischen mehrfach wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten im Wert von `grid-template-areas` ordentlich auszurichten. Wie Sie sehen, habe ich dies getan, damit `hd` und `ft` mit `main` übereinstimmen.

Der Bereich, den Sie durch Verkettung der Bereichsnamen erstellen, muss rechteckig sein; es gibt derzeit keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist darauf hin, dass ein zukünftiges Level diese Funktionalität bieten könnte. Sie können jedoch genauso einfach über Reihen wie über Spalten spannen. Zum Beispiel könnten wir unsere Sidebar bis zum Ende des Footers spannen, indem wir die `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter darstellen, andernfalls ist es ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie für jede Zeile die gleiche Anzahl von Zellen haben müssen, auch wenn sie leer mit einem Punktzeichen dargestellt werden, das zeigt, dass die Zelle leer gelassen werden soll. Sie erstellen auch ein ungültiges Gitter, wenn Ihre Bereiche nicht rechteckig sind.

## Das Gitter mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, fällt es sehr leicht, Änderungen an unterschiedlichen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Gitter neu definieren, die Position von Elementen auf dem Gitter festlegen oder beides gleichzeitig.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb der Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt werden, unabhängig davon, wo auf dem Gitter er platziert ist.

Für unser obiges Layout könnten wir ein sehr einfaches Layout bei schmalen Breiten haben, indem wir einspaltiges Gitter definieren und unsere Elemente stapeln.

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

Dann können wir dieses Layout innerhalb von Media Queries in ein Zweispalten-Layout umdefinieren und es vielleicht in ein Dreispalten-Layout überführen, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass ich für das breite Layout mein neunsäuliges Spurengitter beibehalte; Ich definiere die Position der Elemente mit `grid-template-areas` neu.

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

Viele der Rasterbeispiele, die Sie online finden, nehmen an, dass Sie das Raster für das Hauptseitenlayout verwenden werden. Dies ist jedoch genauso nützlich für kleine Elemente wie für größere. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders nett sein, da es im Code leicht zu sehen ist, wie Ihr Element aussieht.

### Beispiel für ein Medienobjekt

Als sehr einfaches Beispiel können wir ein „Media-Objekt“ erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte auf der rechten oder linken Seite des Kastens dargestellt werden.

![Bilder, die ein Beispiellayout für ein Medienobjekt zeigen](4_media_objects.png)

Unser Raster ist ein zweispaltiges Spurengitter, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` festgelegt ist. Wenn Sie einen festgelegten Breitenbereich für das Bild wünschen, könnten Sie die Bildspalte als Pixelbreite festlegen und den Textbereich `1fr` zuweisen. Eine einzelne Spalte mit einer Spur von `1fr` würde dann den Rest des Raums einnehmen.

Wir geben dem Bildbereich einen Rasterbereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der Eigenschaft `grid-template-areas` anordnen.

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

### Das Bild auf der anderen Seite des Kastens darstellen

Wir möchten vielleicht in der Lage sein, unseren Kasten mit dem Bild auf der anderen Seite anzuzeigen. Um dies zu tun, definieren wir das Gitter neu, indem wir die `1fr` Spur zuletzt setzen und die Werte in {{cssxref("grid-template-areas")}} umkehren.

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

## Gitterdefinitions-Abkürzungen

Nachdem wir uns verschiedene Möglichkeiten zur Platzierung von Elementen auf unseren Rastern und viele der Eigenschaften angesehen haben, die zur Definition des Rasters verwendet werden, ist jetzt ein guter Zeitpunkt, um einen Blick auf ein paar Abkürzungen zu werfen, die verfügbar sind, um das Raster und viele Dinge darüber in einer Zeile CSS zu definieren.

Diese können schnell schwer lesbar werden für andere Entwickler oder sogar für Ihr zukünftiges Selbst. Sie sind jedoch Teil der Spezifikation und es ist wahrscheinlich, dass Sie ihnen in Beispielen oder bei der Benutzung durch andere Entwickler begegnen, selbst wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie eine Abkürzung verwenden, ist es wert, sich daran zu erinnern, dass Abkürzungen nicht nur das Setzen vieler Eigenschaften auf einmal ermöglichen, sondern auch Dinge **zurücksetzen** auf ihre Anfangswerte, die Sie nicht oder nicht in der Abkürzung setzen können. Wenn Sie also eine Abkürzung verwenden, seien Sie sich bewusst, dass sie möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die beiden Abkürzungen für den Gitter-Container sind die Abkürzung für das explizite Gitter `grid-template` und die Abkürzung für die Gitterdefinition `grid`.

### `grid-template`

Die {{cssxref("grid-template")}} Eigenschaft setzt die folgenden Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als Abkürzung für das explizite Gitter bezeichnet, weil sie jene Dinge setzt, die Sie kontrollieren, wenn Sie ein explizites Gitter definieren, und nicht jene, die Auswirkungen auf alle eventuell erstellten impliziten Reihen- oder Spuren haben.

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

Der erste Wert ist unser `grid-template-areas` Wert, aber wir deklarieren auch die Größe der Zeile am Ende jeder Zeile. Dies ist, was das `minmax(100px, auto)` tut.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach folgt eine explizite Spurauflistung der Spuren.

### `grid`

Die {{cssxref("grid")}} Abkürzung geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Raster verwendet werden. Sie setzen also:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf die exakt gleiche Weise wie die {{cssxref("grid-template")}} Abkürzung verwenden. Seien Sie sich jedoch bewusst, dass Sie dabei die anderen von der Eigenschaft gesetzten Werte zurücksetzen.

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

Wir werden die andere Funktionalität, die durch diese Abkürzung angeboten wird, später in diesen Leitfäden nochmals aufgreifen, wenn wir uns das automatische Platzieren und die Eigenschaft `grid-auto-flow` ansehen.

Wenn Sie diese ersten Leitfäden durchgearbeitet haben, sollten Sie nun in der Lage sein, Rasterlayouts mithilfe von linienbasierter Platzierung oder benannten Bereichen zu erstellen. Nehmen Sie sich Zeit, um einige gängige Layoutmuster mit Rastern zu erstellen. Auch wenn es viele neue Begriffe zu lernen gibt, ist die Syntax relativ einfach. Während Sie Beispiele entwickeln, werden Sie wahrscheinlich auf einige Fragen und Anwendungsfälle stoßen, die wir noch nicht behandelt haben. In den restlichen Leitfäden werden wir uns einige weitere Details in der Spezifikation ansehen, damit Sie beginnen können, erweiterte Layouts zu erstellen.
