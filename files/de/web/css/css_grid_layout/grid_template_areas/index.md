---
title: Grid-Template-Bereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: bd6d62961fbc6a05298a8b182f3c5461e5e54b28
---

{{CSSRef}}

Im [Leitfaden zur Raster-Layout-Verwendung mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns Rasterlinien und die Positionierung von Elementen in Bezug auf diese Linien angesehen. Wenn Sie das CSS-Rasterlayout verwenden, haben Sie immer Linien, und dies kann eine einfache Möglichkeit sein, Elemente in Ihrem Raster zu platzieren. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen im Raster, die Sie allein oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode besteht darin, unsere Elemente mithilfe benannter Template-Bereiche zu platzieren. Sie werden schnell erkennen, warum wir dies manchmal als "ASCII-Art-Methode" des Rasterlayouts bezeichnen!

## Einen Rasterbereich benennen

Sie sind bereits auf die {{cssxref("grid-area")}}-Eigenschaft gestoßen. Dies ist die Eigenschaft, die als Wert alle vier Linien aufnehmen kann, die verwendet werden, um einen Rasterbereich zu positionieren.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist das Definieren des Bereichs, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Rasterbereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann den Standort dieses Bereichs im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft angeben. Sie können beliebige Namen für Ihren Bereich wählen. Wenn wir zum Beispiel das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- eine Kopfzeile
- eine Fußzeile
- eine Seitenleiste
- den Hauptinhalt

![Eine Abbildung eines einfachen Layouts mit zwei Spalten und einer Kopf- und Fußzeile](4_layout.png)

Mit der {{cssxref("grid-area")}}-Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Für sich allein genommen wird hierbei kein Layout erstellt. Stattdessen stellt es benannte Bereiche für die Verwendung in einem Layout bereit.

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

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Diesmal platzieren wir die Elemente nicht mit Zeilennummern, die auf den Elementen selbst angegeben sind, sondern erstellen das gesamte Layout im Raster-Container. Hier erstellen wir ein Raster mit 9 Spalten und geben an, dass die `hd-` und `ft`-Bereiche alle 9 Spalten überspannen, während `sd` drei und `main` sechs überspannt. Jeder Bereich umfasst nur eine Zeile.

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

Mit dieser Methode müssen wir überhaupt nichts auf den einzelnen Rasterelementen angeben, alles wird in unserem Raster-Container festgelegt. Wir können das Layout sehen, das als Wert der {{cssxref("grid-template-areas")}}-Eigenschaft beschrieben wird.

## Eine Rasterzelle leer lassen

In unserem Beispiel haben wir unser Gitter vollständig mit Bereichen gefüllt, ohne Leerraum zu hinterlassen. Sie können jedoch mit dieser Layoutmethode Rasterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, `.`. Wenn wir nur die Fußzeile direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unterhalb der Seitenleiste leer lassen.

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

Um das Layout übersichtlicher zu gestalten, können wir mehrere `.`-Zeichen verwenden. Solange sich zwischen den Punkten mindestens ein Leerzeichen befindet, wird dies als eine Zelle gezählt. Für ein komplexes Layout bietet es Vorteile, wenn die Zeilen und Spalten übersichtlich ausgerichtet sind. Dies bedeutet, dass Sie direkt im CSS sehen können, wie dieses Layout aussieht.

## Über mehrere Zellen spannen

In unserem Beispiel umfasst jeder Bereich mehrere Rasterzellen, und wir erreichen dies, indem wir den Namen dieses Rasterbereichs mit Leerzeichen dazwischen mehrfach wiederholen. Sie können zusätzlichen Leerraum hinzufügen, damit Ihre Spalten im Wert von `grid-template-areas` ordentlich ausgerichtet sind. Sie können sehen, dass wir dies getan haben, damit die `hd`- und `ft`-Bereiche mit `main` ausgerichtet sind.

Der erstellte Bereich, der durch Verketten der Bereichsnamen gebildet wird, muss rechteckig sein. Es gibt derzeit keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist jedoch darauf hin, dass eine zukünftige Stufe diese Funktionalität bieten könnte. Sie können jedoch genauso leicht Zeilen wie Spalten überspannen. Zum Beispiel könnten wir unsere Seitenleiste so einstellen, dass sie bis zum Ende der Fußzeile reicht, indem wir das `.`-Zeichen durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Raster darstellen, andernfalls ist er ungültig (und die Eigenschaft wird ignoriert). Dies bedeutet, dass Sie in jeder Zeile die gleiche Anzahl von Zellen haben müssen, auch wenn diese leer sind, dargestellt durch ein Punktzeichen. Außerdem erstellen Sie ein ungültiges Raster, wenn Ihre Bereiche nicht rechteckig sind.

## Das Raster mittels Media Queries neu definieren

Da unser Layout nun in einem Teil des CSS enthalten ist, können Änderungen an verschiedenen Breakpoints sehr einfach vorgenommen werden. Sie können dies tun, indem Sie das Raster, die Position der Elemente im Raster oder beides gleichzeitig neu definieren.

Definieren Sie dabei die Namen für Ihre Bereiche außerhalb von Media Queries. So wird der Inhaltsbereich immer `main` genannt, egal wo er im Raster platziert ist.

Für unser obiges Layout könnten wir bei schmalen Breiten ein sehr einfaches Layout erstellen, das einr raster mit einer Spalte definiert und unsere vier Elemente in vier Reihen stapelt.

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

Wir könnten dann dieses Layout innerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) auf ein zweispaltiges Layout umdefinieren und es bei noch mehr verfügbarem Platz zu einem dreispaltigen Layout erweitern. Beachten Sie, dass wir für das breite Layout das Raster mit neun Spalten beibehalten und nur festlegen, wo Elemente mithilfe von `grid-template-areas` positioniert werden.

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

Viele der Rasterbeispiele, die Sie online finden, gehen davon aus, dass Sie Raster für Hauptseitenlayouts verwenden. Raster kann jedoch genauso nützlich für kleine Elemente sein wie für größere. Die Verwendung der {{cssxref("grid-template-areas")}}-Eigenschaft kann besonders angenehm sein, da Sie im Code leicht sehen können, wie Ihr Element aussieht.

### Beispiel mit Medienobjekt

Als ein sehr einfaches Beispiel können wir ein "[Medienobjekt](/de/docs/Web/CSS/Layout_cookbook/Media_objects)" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte rechts oder links von der Box angezeigt werden.

![Abbildungen eines Medienobjekt-Designs](4_media_objects.png)

Unser Raster ist ein Raster mit zwei Spalten, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` festgelegt ist. Wenn Sie einen festen Bildbereich wünschen, könnten Sie die Bildspalte mit einer Pixelbreite angeben und dem Textbereich `1fr` zuweisen. Eine einzelne Spalte von `1fr` würde dann den verbleibenden Platz einnehmen.

Wir geben dem Bildbereich den Grid-Area-Namen `img` und dem Textbereich `content`. Anschließend können wir diese Bereiche mithilfe der Eigenschaft `grid-template-areas` layouten.

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

Wir könnten unsere Box so gestalten, dass das Bild auf der anderen Seite angezeigt wird. Dazu definieren wir das Raster neu, indem wir den `1fr`-Track nach hinten setzen und die Werte in {{cssxref("grid-template-areas")}} umkehren.

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

## Kurzschreibweisen für Rasterdefinitionen

Nachdem wir verschiedene Möglichkeiten untersucht haben, Elemente in unseren Rastern zu platzieren, und viele Eigenschaften für die Definition von Rastern besprochen haben, ist dies eine gute Gelegenheit, die Kurzschreibweisen zu betrachten, mit denen Raster in einer einzigen Zeile CSS definiert werden können.

Diese können schnell schwer lesbar werden – sowohl für andere Entwickler als auch für Ihr zukünftiges Selbst. Dennoch sind sie Teil der Spezifikation und es ist wahrscheinlich, dass Sie ihnen in Beispielen oder im Code anderer Entwickler begegnen, auch wenn Sie sich entscheiden, sie selbst nicht zu verwenden.

Bevor Sie Kurzschreibweisen verwenden, sollten Sie beachten, dass Kurzschreibweisen nicht nur die Einstellung vieler Eigenschaften auf einmal ermöglichen, sondern auch alles, was Sie nicht (oder nicht einstellen können), auf ihre Anfangswerte zurücksetzen. Wenn Sie also eine Kurzschreibweise verwenden, seien Sie sich bewusst, dass sie möglicherweise Dinge zurücksetzt, die Sie an anderer Stelle angewendet haben.

Die zwei Kurzschreibweisen für den Raster-Container sind die explizite Raster-Kurzschreibweise {{cssxref("grid-template")}} und die Raster-Definition-Kurzschreibweise {{cssxref("grid")}}.

### `grid-template`

Die {{cssxref("grid-template")}}-Kurzschreibweise setzt die folgenden Langschreib-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als _explizite Raster-Kurzschreibweise_ bezeichnet, da sie Werte setzt, die Sie bei der Definition eines expliziten Rasters kontrollieren, nicht aber Werte, die implizite Zeilen oder Spalten betreffen könnten.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir erklären auch die Größe der Reihe am Ende jeder Reihe. Das ist das, was `minmax(100px, auto)` bewirkt.

Nach `grid-template-areas` folgt ein Schrägstrich, danach eine explizite Liste der Spalten-Tracks.

### `grid`

Die {{cssxref("grid")}}-Kurzschreibweise geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Raster verwendet werden. So setzen Sie:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax genauso verwenden wie die {{cssxref("grid-template")}}-Kurzschreibweise. Beachten Sie jedoch, dass alle anderen Werte, die durch diese Eigenschaft gesetzt werden, ebenfalls zurückgesetzt werden.

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

Wir werden die weitere Funktionalität, die diese Kurzschreibweise bietet, nochmals betrachten, wenn wir einen Blick auf [die automatische Platzierung im Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) und die `grid-auto-flow`-Eigenschaft werfen.

## Nächste Schritte

Wenn Sie die [Raster-Leitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) verfolgt haben, sollten Sie nun in der Lage sein, Rasterlayouts mit [linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) oder [benannten Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen. Schauen wir uns nun die Erstellung von [Rasterlayouts mit benannten Rasterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) an.
