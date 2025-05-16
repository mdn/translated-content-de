---
title: Grid-Template-Bereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: e5c625103f1f2d5a9e36e98670b1cda9face9e63
---

{{CSSRef}}

Im [Leitfaden für Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns Grid-Linien angesehen und wie Elemente daran positioniert werden können. Wenn Sie das CSS-Grid-Layout verwenden, haben Sie immer Linien, und dies kann eine einfache Möglichkeit sein, Elemente auf Ihrem Raster zu platzieren. Es gibt jedoch eine alternative Methode, um Elemente auf dem Raster zu positionieren, die Sie allein oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode umfasst das Platzieren von Elementen mithilfe benannter Template-Bereiche. Sie werden sehr schnell erkennen, warum wir diese Methode manchmal die ASCII-Art-Methode des Grid-Layouts nennen!

## Benennen eines Grid-Bereichs

Ihnen ist bereits die Eigenschaft {{cssxref("grid-area")}} begegnet. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die verwendet werden, um einen Grid-Bereich zu positionieren.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist das Definieren des Bereichs, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Grid-Bereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der Eigenschaft {{cssxref("grid-template-areas")}} angeben. Sie können wählen, wie Sie Ihren Bereich benennen möchten. Wenn wir beispielsweise das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- einen Header
- einen Footer
- eine Sidebar
- den Hauptinhalt

![Ein Bild, das ein zweispaltiges Layout mit Header und Footer zeigt](4_layout.png)

Mit der Eigenschaft {{cssxref("grid-area")}} können wir jedem dieser Bereiche einen Namen zuweisen. An sich erstellt dies kein Layout. Vielmehr stellt es benannte Bereiche zur Verfügung, die in einem Layout verwendet werden sollen.

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

Nachdem diese Namen definiert wurden, erstellen wir das Layout. Dieses Mal platzieren wir die Elemente nicht anhand der an den Elementen selbst angegebenen Zeilennummern, sondern erstellen das gesamte Layout auf dem Gittercontainer. Hier erstellen wir ein Grid mit 9 Spalten und geben an, dass die Bereiche `hd` und `ft` alle 9 Spalten umfassen, während `sd` drei und `main` sechs umfassen. Jeder Bereich umfasst nur eine Zeile.

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

Mit dieser Methode müssen wir überhaupt nichts an den einzelnen Grid-Elementen angeben, alles geschieht an unserem Gittercontainer. Wir können das Layout als den Wert der Eigenschaft {{cssxref("grid-template-areas")}} beschrieben sehen.

## Ein Gitterzelle leer lassen

Wir haben unser Raster in diesem Beispiel vollständig mit Bereichen gefüllt und keinen weißen Raum gelassen. Sie können jedoch Gitterzellen mit dieser Layoutmethode leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen `.`. Wenn wir den Footer nur direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unter der Sidebar leer lassen.

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

Um das Layout sauberer zu gestalten, können wir mehrere `.`-Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten ist, wird es als eine Zelle gezählt. Bei einem komplexen Layout gibt es einen Vorteil, die Zeilen und Spalten ordentlich auszurichten. Es bedeutet, dass Sie tatsächlich direkt im CSS sehen können, wie dieses Layout aussieht.

## Mehrere Zellen überspannen

In unserem Beispiel umfasst jeder Bereich mehrere Gitterzellen, und wir erreichen dies, indem wir den Namen dieses Gitterbereichs mehrmals mit Leerzeichen dazwischen wiederholen. Sie können zusätzlichen Abstand hinzufügen, um Ihre Spalten im Wert von `grid-template-areas` ordentlich auszurichten. Sie können sehen, dass wir dies getan haben, damit die Bereiche `hd` und `ft` mit `main` ausgerichtet sind.

Der Bereich, den Sie erstellen, indem Sie die Bereichenamen aneinanderreihen, muss rechteckig sein. Derzeit gibt es keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation stellt jedoch fest, dass eine zukünftige Stufe diese Funktionalität bieten könnte. Sie können jedoch genauso einfach Zeilen wie Spalten überspannen. Zum Beispiel könnten wir unsere Sidebar bis zum Ende des Footers erstrecken, indem wir die `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Raster anzeigen, sonst ist es ungültig (und die Eigenschaft wird ignoriert). Dies bedeutet, dass Sie für jede Zeile dieselbe Anzahl von Zellen haben müssen, auch wenn sie mit einem Punktzeichen anzeigt, dass die Zelle leer bleiben soll. Sie erstellen auch ein ungültiges Raster, wenn Ihre Bereiche nicht rechteckig sind.

## Das Raster mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, ist es sehr einfach, Änderungen bei verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Raster, die Position der Elemente auf dem Raster oder beides gleichzeitig neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt werden, egal wo er im Raster platziert ist.

Für unser oben genanntes Layout möchten wir möglicherweise ein sehr grundlegendes Layout bei schmalen Breiten haben, in dem ein einspaltiges Raster definiert ist und unsere vier Elemente in vier Zeilen gestapelt sind.

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

Wir können dieses Layout dann innerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) neu definieren, um zu unserem Zweispaltenlayout zu wechseln, und möglicherweise zu einem Dreispaltenlayout, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass wir für das breite Layout das Neun-Spalten-Raster beibehalten und die Position der Elemente mit `grid-template-areas` neu definieren.

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

Viele der Gitterbeispiele, die Sie online finden, gehen davon aus, dass Sie das Gitter für das Hauptseitenlayout verwenden werden. Gitter kann jedoch genauso nützlich für kleine Elemente sein wie für größere. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders schön sein, da im Code leicht erkennbar ist, wie Ihr Element aussieht.

### Medienobjekt-Beispiel

Als Beispiel können wir ein "[Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects)" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder ein anderes Medium auf einer Seite und Inhalt auf der anderen. Das Bild könnte auf der rechten oder linken Seite der Box angezeigt werden.

![Bilder, die ein Beispiel für ein Medienobjekt-Design zeigen](4_media_objects.png)

Unser Gitter ist ein zweispaltiges Raster, mit der Spalte für das Bild auf `1fr` und dem Text `3fr`. Wenn Sie einen festen Bildbereich wünschen, können Sie die Bildspalte als Pixelbreite einstellen und den Textbereich mit `1fr` zuweisen. Eine einzige Spaltenreihe von `1fr` würde dann den Rest des Raums einnehmen.

Wir geben dem Bildbereich einen Gitterbereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der Eigenschaft `grid-template-areas` layouten.

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

Wir möchten vielleicht in der Lage sein, unsere Box mit dem Bild in umgekehrter Weise anzuzeigen. Dazu definieren wir das Raster neu, um den `1fr`-Track zuletzt zu setzen, und kehren die Werte in {{cssxref("grid-template-areas")}} um.

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

## Zusammenfassende Definitionen des Rasters

Nachdem wir uns verschiedene Möglichkeiten angesehen haben, wie Elemente auf unseren Gittern platziert werden, sowie die vielen Eigenschaften, die zur Definition des Rasters verwendet werden, ist dies ein guter Zeitpunkt, um ein paar Kurzfassungen anzusehen, die verfügbar sind, um das Raster und viele Dinge darüber in einer Zeile CSS zu definieren.

Diese können schnell schwer lesbar für andere Entwickler oder sogar Ihr zukünftiges Ich werden. Sie sind jedoch Teil der Spezifikation, und es ist wahrscheinlich, dass Sie auf sie in Beispielen oder in der Nutzung durch andere Entwickler stoßen, selbst wenn Sie sie nicht verwenden.

Bevor Sie irgendeine Zusammenfassung verwenden, lohnt es sich, sich daran zu erinnern, dass Zusammenfassungen nicht nur das Setzen vieler Eigenschaften auf einmal ermöglichen, sondern auch **alles zurücksetzen**, was Sie nicht (oder nicht) in der Zusammenfassung festlegen können, auf ihre Anfangswerte. Wenn Sie also eine Zusammenfassung verwenden, seien Sie sich bewusst, dass sie möglicherweise Dinge zurücksetzt, die Sie anderweitig angewendet haben.

Die beiden Zusammenfassungen für den Grid-Container sind die explizite Grid-Zusammenfassung {{cssxref("grid-template")}} und die Gitterdefinition-Zusammenfassung {{cssxref("grid")}}.

### `grid-template`

Die Zusammenfassungs-Eigenschaft {{cssxref("grid-template")}} legt die folgenden Einzelheitseigenschaften fest:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als die _explizite Grid-Zusammenfassung_ bezeichnet, da sie Werte festlegt, die Sie kontrollieren, wenn Sie ein explizites Gitter definieren, und nicht solche, die sich auf irgendwelche impliziten Reihen- oder Spaltenbahnen auswirken, die möglicherweise erstellt werden.

Der folgende Code erstellt ein Layout mithilfe von {{cssxref("grid-template")}}, das dem zuvor in diesem Leitfaden erstellten Layout entspricht.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir deklarieren auch die Größe der Zeile am Ende jeder Zeile. Dies ist, was das `minmax(100px, auto)` macht.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach folgt eine explizite Auflistung der Spuren von Spalten.

### `grid`

Die Zusammenfassungs-Eigenschaft {{cssxref("grid")}} geht einen Schritt weiter und legt auch die von dem impliziten Gitter verwendeten Eigenschaften fest. So werden Sie Folgendes festlegen:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax genauso verwenden wie die Kurzfassung von {{cssxref("grid-template")}}. Beachten Sie jedoch, dass Sie beim Verwenden dieser Syntax die anderen Werte zurücksetzen, die durch die Eigenschaft festgelegt wurden.

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

Wir werden die andere Funktionalität, die diese Zusammenfassung bietet, erneut besuchen, wenn wir uns die [automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) und die Eigenschaft `grid-auto-flow` ansehen.

## Nächste Schritte

Wenn Sie den [Grid-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) gefolgt sind, sollten Sie in der Lage sein, Grid-Layouts mit [linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) oder [benannten Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen. Schauen wir uns nun die Erstellung von [Grid-Layouts mit benannten Gitterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) an.
