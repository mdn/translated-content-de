---
title: Rastervorlagenbereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Im [Leitfaden für Raster-Layouts anhand von zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns Rasterlinien und deren Verwendung zur Positionierung von Elementen angesehen. Wenn Sie ein CSS-Rasterlayout verwenden, haben Sie immer Linien, und dies kann eine einfache Methode sein, um Elemente in Ihrem Raster zu platzieren. Es gibt jedoch eine alternative Platzierungsmethode für Elemente im Raster, die Sie alleine oder in Kombination mit der zeilenbasierten Platzierung verwenden können. Diese Methode umfasst das Platzieren von Elementen mithilfe benannter Vorlagenbereiche. Sie werden schnell verstehen, warum wir dies manchmal die ASCII-Art-Methode des Rasterlayouts nennen!

## Einen Rasterbereich benennen

Sie sind bereits auf die {{cssxref("grid-area")}}-Eigenschaft gestoßen. Diese Eigenschaft kann als Wert alle vier Linien annehmen, die zur Positionierung eines Rasterbereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Indem wir hier alle vier Linien definieren, definieren wir den Bereich, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Rasterbereich](4_area.png)

Wir können einen Bereich auch definieren, indem wir ihm einen Namen geben und dann die Lage dieses Bereichs im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft angeben. Sie können den Namen Ihres Bereichs frei wählen. Wenn wir beispielsweise das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- eine Kopfzeile
- eine Fußzeile
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild, das ein zweispaltiges Layout mit Kopf- und Fußzeile zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}}-Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Dies allein schafft kein Layout. Vielmehr bietet es benannte Bereiche für die Verwendung in einem Layout.

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

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Dieses Mal erstellen wir das gesamte Layout auf dem Raster-Container, anstatt Elemente anhand der an den Elementen selbst angegebenen Zeilennummern zu platzieren. Hier erstellen wir ein 9-Spalten-Raster und geben an, dass die `hd`- und `ft`-Bereiche alle 9 Spalten umfassen, während `sd` drei und `main` sechs umfassen. Jeder Bereich umfasst nur eine Zeile.

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

Mit dieser Methode müssen wir überhaupt nichts an den einzelnen Rasterelementen angeben, alles passiert in unserem Raster-Container. Wir können das Layout als Eigenschaftswert von {{cssxref("grid-template-areas")}} sehen.

## Eine Rasterzelle leer lassen

Wir haben unser Raster in diesem Beispiel vollständig mit Bereichen gefüllt, ohne Leerraum zu lassen. Sie können jedoch mit dieser Layoutmethode Rasterzellen leer lassen. Verwenden Sie dazu das Zeichen Punkt `.` Wenn wir nur die Fußzeile direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unter der Seitenleiste leer lassen.

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

Um das Layout ordentlicher zu gestalten, können wir mehrere `.`-Zeichen verwenden. Solange zwischen den Punkten mindestens ein Leerzeichen vorhanden ist, wird es als eine Zelle gezählt. Bei einem komplexen Layout gibt es Vorteile, wenn die Zeilen und Spalten ordentlich ausgerichtet sind, da Sie im CSS tatsächlich sehen können, wie dieses Layout aussieht.

## Mehrere Zellen überbrücken

In unserem Beispiel umfasst jeder Bereich mehrere Rasterzellen und wir erreichen dies, indem wir den Namen dieses Rasterbereichs mehrfach mit Leerraum dazwischen wiederholen. Sie können zusätzlichen Leerraum hinzufügen, um Ihre Spalten im Wert von `grid-template-areas` ordentlich auszurichten. Sie können sehen, dass wir dies so gemacht haben, dass die `hd`- und `ft`-Bereiche mit `main` ausgerichtet sind.

Der Bereich, den Sie durch Verketten der Bereichsnamen erstellen, muss rechteckig sein, derzeit gibt es keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist jedoch darauf hin, dass eine zukünftige Version diese Funktionalität bereitstellen könnte. Sie können jedoch Zeilen genauso einfach wie Spalten überbrücken. Beispielsweise könnten wir unsere Seitenleiste bis zum Ende der Fußzeile verlängern, indem wir das `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Raster darstellen, andernfalls ist es ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie für jede Zeile die gleiche Anzahl an Zellen haben müssen, auch wenn sie leer mit einem Punktzeichen dargestellt wird. Sie erstellen auch ein ungültiges Raster, wenn Ihre Bereiche nicht rechteckig sind.

## Das Raster mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, ist es sehr einfach, Änderungen an verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Raster neu definieren, die Position von Elementen im Raster oder beides gleichzeitig.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt werden, egal wo er im Raster platziert ist.

Für unser oben beschriebenes Layout möchten wir bei schmalen Breiten möglicherweise ein sehr einfaches Layout, das einspaltige Rasters definiert und unsere vier Elemente in vier Zeilen stapelt.

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

Wir können dieses Layout dann innerhalb von [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) neu definieren, um zu unserem zweispaltigen Layout und möglicherweise zu einem dreispaltigen Layout zu gelangen, wenn mehr Platz verfügbar ist. Beachten Sie, dass wir für das breite Layout das neunspaltige Raster beibehalten, indem wir die Platzierung der Elemente mit `grid-template-areas` neu definieren.

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

Viele der Rasterbeispiele, die Sie online finden, gehen davon aus, dass Sie das Raster für das Seitenlayout verwenden, jedoch kann das Raster genauso nützlich für kleine Elemente sein wie für größere. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da es einfach ist, im Code zu sehen, wie Ihr Element aussieht.

### Medienobjekt-Beispiel

Als Beispiel können wir ein "[Medienobjekt](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf der einen Seite und Inhalt auf der anderen. Das Bild kann auf der rechten oder linken Seite der Box angezeigt werden.

![Abbildungen, die ein Beispiel für ein Medienobjekt-Design zeigen](4_media_objects.png)

Unser Raster ist ein zweispaltiges Raster mit der Spalte für das Bild auf `1fr` und dem Text auf `3fr`. Wenn Sie einen festen Breitenbereich für das Bild möchten, könnten Sie die Bildspalte auf eine Pixelbreite setzen und den Textbereich auf `1fr`. Ein einspaltiges Raster von `1fr` würde dann den Rest des Platzes einnehmen.

Wir geben dem Bildbereich einen Rasterbereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der `grid-template-areas`-Eigenschaft anordnen.

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

Wir möchten möglicherweise in der Lage sein, unsere Box mit dem umgekehrten Bild anzuzeigen. Dazu definieren wir das Raster neu, um die `1fr`-Spalte zuletzt zu platzieren, und ändern die Werte in {{cssxref("grid-template-areas")}}.

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

## Shorthands zur Rasterdefinition

Nachdem wir verschiedene Möglichkeiten zur Platzierung von Elementen in unseren Rastern und viele der zur Definition des Rasters verwendeten Eigenschaften angesehen haben, ist dies ein guter Zeitpunkt, um sich ein paar Shorthands anzusehen, die zur Definition des Rasters und vieler Aspekte davon in einer CSS-Zeile verfügbar sind.

Diese können schnell schwer lesbar für andere Entwickler oder sogar für Ihr zukünftiges Ich werden. Sie sind jedoch Teil der Spezifikation und es ist wahrscheinlich, dass Sie sie in Beispielen oder in der Verwendung durch andere Entwickler sehen, auch wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie ein Shorthand verwenden, denken Sie daran, dass Shorthands nicht nur die Einstellung vieler Eigenschaften auf einmal ermöglichen, sondern auch **alles zurücksetzen**, was Sie nicht (oder nicht) im Shorthand einstellen, auf ihre anfänglichen Werte. Daher sollten Sie sich bewusst sein, dass ein Shorthand möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die beiden Shorthands für den Rastercontainer sind der explizite Rastershorthand {{cssxref("grid-template")}} und der Rasterdefinitionsshorthand {{cssxref("grid")}}.

### `grid-template`

Die {{cssxref("grid-template")}}-Short-Hand-Eigenschaft setzt die folgenden Long-Hand-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als _expliziter Rastershorthand_ bezeichnet, da sie Werte setzt, die Sie steuern, wenn Sie ein explizites Raster definieren, und nicht diejenigen, die sich auf explizit erstellte Zeilen- oder Spaltenspuren auswirken.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir geben auch die Größe der Zeile am Ende jeder Zeile an. Dies macht das `minmax(100px, auto)`.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach eine explizite Auflistung von Spaltenspuren.

### `grid`

Das {{cssxref("grid")}}-Shorthand geht noch weiter und setzt auch Eigenschaften, die für das implizite Raster verwendet werden. Also setzen Sie:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf die gleiche Weise wie die {{cssxref("grid-template")}}-Shorthand verwenden. Beachten Sie nur, dass beim Verwenden alle anderen Werte, die durch die Eigenschaft gesetzt werden, zurückgesetzt werden.

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

Wir werden die andere Funktionalität dieses Shorthands erneut durchgehen, wenn wir uns die [automatische Platzierung im Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout) und die `grid-auto-flow`-Eigenschaft ansehen.

## Nächste Schritte

Wenn Sie den [Rasterleitfäden](/de/docs/Web/CSS/CSS_grid_layout#guides) gefolgt sind, sollten Sie nun in der Lage sein, Rasterlayouts mit [zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) oder [benannten Bereichen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) zu erstellen. Schauen wir uns nun die Erstellung von [Rasterlayouts mit benannten Rasterlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) an.
