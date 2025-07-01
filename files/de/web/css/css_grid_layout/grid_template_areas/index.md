---
title: Grid Template Areas
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Im [Leitfaden zur Gitterlayout-Verwendung mit linienbasierter Positionierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir die Gitternetzlinien untersucht und wie Elemente an diesen Linien positioniert werden. Wenn Sie das CSS-Gitterlayout verwenden, haben Sie immer Linien, und dies kann eine unkomplizierte Möglichkeit sein, Elemente auf Ihrem Gitter zu platzieren. Es gibt jedoch eine alternative Methode, um Elemente im Gitter zu positionieren, die Sie allein oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode besteht darin, unsere Elemente mit benannten Template-Bereichen zu platzieren. Sie werden sehr schnell sehen, warum wir dies manchmal die ASCII-Art-Methode des Gitterlayouts nennen!

## Einen Gitterbereich benennen

Sie sind bereits auf die {{cssxref("grid-area")}}-Eigenschaft gestoßen. Dies ist die Eigenschaft, die alle vier Linien als Wert nehmen kann, die verwendet werden, um einen Gitterbereich zu positionieren.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Gitterbereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft angeben. Sie können frei wählen, wie Sie Ihren Bereich benennen möchten. Wenn wir beispielsweise das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- einen Header
- einen Footer
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild zeigt ein zweispaltiges Layout mit Header und Footer](4_layout.png)

Mit der {{cssxref("grid-area")}}-Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Dies alleine erzeugt noch kein Layout. Stattdessen stellt es benannte Bereiche zur Verfügung, die in einem Layout verwendet werden können.

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

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Diesmal, anstatt Elemente mit Liniennummern zu platzieren, die auf den Elementen selbst angegeben sind, erstellen wir das gesamte Layout auf dem Gittercontainer. Hier erstellen wir ein 9-Spalten-Gitter und geben an, dass die `hd`- und `ft`-Bereiche alle 9 Spalten umfassen, während `sd` drei und `main` sechs umfassen. Jeder Bereich umfasst nur eine Reihe.

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

Bei dieser Methode müssen wir überhaupt nichts an den einzelnen Gitterelementen angeben, alles geschieht auf unserem Gittercontainer. Wir können das Layout als den Wert der {{cssxref("grid-template-areas")}}-Eigenschaft beschrieben sehen.

## Eine Gitterzelle leer lassen

Wir haben unser Gitter in diesem Beispiel vollständig mit Bereichen gefüllt und keinen weißen Raum hinterlassen. Sie können jedoch mit dieser Methode der Gestaltung Gitterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, `.`. Wenn wir nur den Footer direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unter der Seitenleiste leer lassen.

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

Um das Layout übersichtlicher zu machen, können wir mehrere `.`-Zeichen verwenden. Solange mindestens ein weißes Zeichen zwischen den Punkten vorhanden ist, zählt es als eine Zelle. Bei einem komplexen Layout ist es von Vorteil, die Reihen und Spalten sauber auszurichten. Das bedeutet, dass Sie direkt im CSS sehen können, wie dieses Layout aussieht.

## Mehrere Zellen überspannen

In unserem Beispiel überspannt jeder Bereich mehrere Gitterzellen, und wir erreichen dies, indem wir den Namen dieses Gitterbereichs mit Leerzeichen dazwischen mehrmals wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten sauber auszurichten im Wert von `grid-template-areas`. Sie können sehen, dass wir dies getan haben, damit die `hd`- und `ft`-Bereiche mit `main` übereinstimmen.

Der von Ihnen erstellte Bereich durch Verkettung der Bereichenamen muss rechteckig sein; es gibt derzeit keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist darauf hin, dass eine zukünftige Ebene diese Funktionalität bereitstellen könnte. Sie können jedoch Reihen genauso einfach wie Spalten überspannen. Zum Beispiel könnten wir unsere Seitenleiste bis zum Ende des Footers erweitern, indem wir das `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter zeigen, andernfalls ist er ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie für jede Reihe die gleiche Anzahl von Zellen haben müssen, selbst wenn diese mit einem Punktzeichen leer gelassen werden soll. Sie erstellen auch ein ungültiges Gitter, wenn Ihre Bereiche nicht rechteckig sind.

## Das Gitter mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS untergebracht ist, ist es sehr einfach, Änderungen an verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Gitter neu definieren, die Position der Elemente im Gitter ändern oder beides gleichzeitig.

Wenn Sie dies tun, definieren Sie die Namen Ihrer Bereiche außerhalb von Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt werden, egal wo im Gitter er platziert ist.

Für unser oben beschriebenes Layout möchten wir vielleicht ein sehr einfaches Layout bei schmalen Breiten haben, ein einspaltiges Gitter definieren und unsere vier Elemente in vier Reihen stapeln.

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

Wir können dieses Layout dann innerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) neu definieren, um zu unserem zweispaltigen Layout zu wechseln und es vielleicht auf ein dreispaltiges Layout zu bringen, wenn der verfügbare Platz noch größer ist. Beachten Sie, dass wir für das breite Layout das neunsäulige Spurengitter beibehalten und neu definieren, wo die Elemente platziert werden, indem wir `grid-template-areas` verwenden.

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

Viele der Gitterbeispiele, die Sie online finden, gehen davon aus, dass Sie das Gitter für das Hauptseitenlayout verwenden werden. Das Gitter kann jedoch genauso nützlich für kleine Elemente wie für diese größeren sein. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da im Code leicht zu erkennen ist, wie Ihr Element aussieht.

### Beispiel für ein Media-Objekt

Als Beispiel können wir ein "Media-Objekt" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte auf der rechten oder linken Seite des Kastens angezeigt werden.

![Bilder zeigen ein Beispiel für ein Media-Objekt-Design](4_media_objects.png)

Unser Gitter ist ein zweispuriges Spaltengitter, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` gesetzt ist. Wenn Sie einen festen Bildbreitebereich wünschen, könnten Sie die Bildspalte als Pixelbreite festlegen und den Textbereich auf `1fr` setzen. Eine einspaltige Spur von `1fr` würde dann den Rest des Platzes einnehmen.

Wir geben dem Bildbereich einen Gitternamen von `img` und dem Textbereich `content`, dann können wir diese mit der `grid-template-areas`-Eigenschaft anordnen.

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

### Das Bild auf der anderen Seite des Kastens anzeigen

Wir möchten möglicherweise unseren Kasten mit dem Bild auf der anderen Seite anzeigen. Um dies zu tun, definieren wir das Gitter neu, um die `1fr`-Spur zuletzt zu setzen, und kehren die Werte in {{cssxref("grid-template-areas")}} um.

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

## Gitterdefinitions-Kurzformen

Nachdem wir verschiedene Möglichkeiten betrachtet haben, Elemente auf unseren Gittern zu platzieren, und viele der Eigenschaften, die zur Definition des Gitters verwendet werden, ist dies ein guter Zeitpunkt, um ein paar Kürzel zu betrachten, die zur Definition des Gitters und vieler Dinge darüber in einer Zeile CSS verfügbar sind.

Diese können schnell schwer lesbar für andere Entwickler oder selbst für Sie in der Zukunft werden. Sie sind jedoch Teil der Spezifikation, und es ist wahrscheinlich, dass Sie sie in Beispielen oder in der Verwendung durch andere Entwickler sehen werden, selbst wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie ein Kürzel verwenden, sollten Sie bedenken, dass Kürzel nicht nur die Einstellung vieler Eigenschaften in einem Rutsch ermöglichen, sondern auch **alles** zurücksetzen, was Sie nicht (oder nicht) im Kürzel einstellen können, auf ihre Anfangswerte. Daher seien Sie sich bei der Verwendung eines Kürzels bewusst, dass es Dinge zurücksetzen kann, die Sie an anderer Stelle angewendet haben.

Die beiden Kürzel für den Gittercontainer sind das explizite Gitter-Kürzel {{cssxref("grid-template")}} und das Gitterdefinitions-Kürzel {{cssxref("grid")}}.

### `grid-template`

Die {{cssxref("grid-template")}}-Kürzeleigenschaft setzt folgende Langform-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als das _explizite Gitter-Kürzel_ bezeichnet, da sie Werte setzt, die Sie kontrollieren, wenn Sie ein explizites Gitter definieren, und nicht diejenigen, die auf alle impliziten Zeilen- oder Spaltenspuren wirken, die eventuell erstellt werden könnten.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem vorher in diesem Leitfaden erstellten Layout entspricht.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir deklarieren auch die Größe der Reihe am Ende jeder Zeile. Dies ist das, was das `minmax(100px, auto)` macht.

Dann nach `grid-template-areas` haben wir einen Schrägstrich, danach folgt eine explizite Auflistung der Spaltenspur.

### `grid`

Das {{cssxref("grid")}}-Kürzel geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Gitter verwendet werden. Sie setzen also:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax genau wie das {{cssxref("grid-template")}}-Kürzel verwenden. Seien Sie sich nur bewusst, dass Sie dabei auch andere Werte zurücksetzen werden, die durch die Eigenschaft gesetzt wurden.

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

Wir werden die andere Funktionalität, die dieses Kürzel bietet, noch einmal betrachten, wenn wir uns der [automatischen Platzierung im Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) und der `grid-auto-flow`-Eigenschaft zuwenden.

## Nächste Schritte

Wenn Sie den [Gitter-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) gefolgt sind, sollten Sie in der Lage sein, Gitterlayouts mit [linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) oder [benannten Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen. Jetzt werfen wir einen Blick auf die Erstellung von [Gitterlayouts mit benannten Gitternetzlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines).
