---
title: Grid-Template-Bereiche
slug: Web/CSS/Guides/Grid_layout/Grid_template_areas
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Im [Leitfaden zum Grid-Layout mit zeilenbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) haben wir uns die Gitternetzlinien angesehen und wie man Elemente anhand dieser Linien positioniert. Wenn Sie das CSS-Grid-Layout verwenden, haben Sie immer Linien, und dies kann eine einfache Möglichkeit sein, Elemente auf Ihrem Grid zu platzieren. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen im Grid, die Sie allein oder in Kombination mit der zeilenbasierten Platzierung verwenden können. Diese Methode beinhaltet das Platzieren von Elementen mit benannten Template-Bereichen. Sie werden sehr schnell verstehen, warum wir dies manchmal die ASCII-Art-Methode des Grid-Layouts nennen!

## Benennen eines Grid-Bereichs

Sie sind bereits mit der {{cssxref("grid-area")}} Eigenschaft in Kontakt gekommen. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die zur Positionierung eines Grid-Bereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, indem wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Grid-Bereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der {{cssxref("grid-template-areas")}} Eigenschaft angeben. Sie können auswählen, wie Sie Ihren Bereich benennen möchten. Zum Beispiel, wenn wir das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- ein Kopfbereich
- ein Fußbereich
- eine Seitenleiste
- der Hauptinhalt

![Ein Bild, das ein zweispaltiges Layout mit Kopf- und Fußbereich zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}} Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Für sich genommen erstellt dies noch kein Layout. Vielmehr bietet es benannte Bereiche, die in einem Layout verwendet werden können.

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

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Diesmal platzieren wir anstatt Elemente mit Liniennummern zu versehen, die auf den Gegenständen selbst spezifiziert sind, das gesamte Layout im Grid-Container. Hier erstellen wir ein 9-Spalten-Grid und geben an, dass die `hd` und `ft` Bereiche alle 9 Spalten umfassen, während `sd` drei und `main` sechs Spalten umfasst. Jeder Bereich umfasst nur eine Reihe.

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

Mit dieser Methode müssen wir überhaupt nichts an den einzelnen Grid-Elementen angeben, alles passiert auf unserem Grid-Container. Wir können das Layout sehen, das als Wert der {{cssxref("grid-template-areas")}} Eigenschaft beschrieben ist.

## Ein Gitterfeld leer lassen

In diesem Beispiel haben wir unser Grid vollständig mit Bereichen gefüllt und keinen weißen Raum übrig gelassen. Sie können jedoch Gitterfelder leer lassen mit dieser Methode des Layouts. Um ein Feld leer zu lassen, verwenden Sie das Zeichen für den Punkt, `.`. Wenn wir nur den Fußbereich direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unter der Seitenleiste leer lassen.

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

Um das Layout ordentlicher zu gestalten, können wir mehrere `.` Zeichen verwenden. Solange zwischen den Punkten mindestens ein Leerzeichen ist, wird es als eine Zelle gezählt. Für ein komplexes Layout gibt es den Vorteil, dass die Reihen und Spalten sauber ausgerichtet sind. Das bedeutet, dass Sie im CSS tatsächlich sehen können, wie dieses Layout aussieht.

## Mehrere Zellen überspannen

In unserem Beispiel überspannt jeder Bereich mehrere Grid-Zellen, und wir erreichen dies, indem wir den Namen dieses Grid-Bereichs mehrmals mit Leerzeichen dazwischen wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten in dem Wert von `grid-template-areas` sauber auszurichten. Sie können sehen, dass wir dies getan haben, damit die `hd` und `ft` Bereiche mit `main` übereinstimmen.

Der Bereich, den Sie durch Verketten der Bereichsnamen erstellen, muss rechteckig sein, zu diesem Zeitpunkt gibt es keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation merkt an, dass in einer zukünftigen Version diese Funktionalität bereitgestellt werden könnte. Sie können jedoch genauso leicht Reihen wie Spalten überspannen. Zum Beispiel könnten wir unsere Seitenleiste bis zum Ende des Fußbereichs erweitern, indem wir die `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Grid darstellen, andernfalls ist er ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie dieselbe Anzahl von Zellen für jede Reihe haben müssen, auch wenn sie leer sind und mit einem Punkt-Zeichen angezeigt wird, dass die Zelle leer gelassen werden soll. Sie werden auch ein ungültiges Grid erstellen, wenn Ihre Bereiche nicht rechteckig sind.

## Die Neudefinition des Grids mit Media-Queries

Da unser Layout nun in einem Teil des CSS enthalten ist, macht es das sehr einfach, Änderungen bei verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Grid, die Position der Elemente im Grid oder beides zugleich neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media-Queries. So würde der Inhaltsbereich immer `main` genannt, egal wo er im Grid platziert ist.

Für unser obiges Layout könnten wir ein sehr einfaches Layout bei schmalen Breiten haben, indem wir ein einspaltiges Grid definieren und unsere vier Elemente in vier Reihen stapeln.

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

Dann können wir dieses Layout in [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) neu definieren, um zu unserem Zweispalten-Layout zu wechseln, und vielleicht zu einem Dreispalten-Layout, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass wir für das breite Layout das Neun-Spalten-Track-Grid beibehalten und die Platzierung der Elemente mit `grid-template-areas` neu definieren.

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

Viele der Grid-Beispiele, die Sie online finden, gehen von der Annahme aus, dass Sie Grid für das Hauptseitenlayout verwenden werden, jedoch kann Grid ebenso nützlich für kleinere Elemente wie für größere sein. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da es einfach ist, im Code zu sehen, wie Ihr Element aussieht.

### Beispiel Medienobjekt

Als Beispiel können wir ein "[Medienobjekt](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte rechts oder links von der Box angezeigt werden.

![Bilder, die ein Beispiel für ein Medienobjektdesign zeigen](4_media_objects.png)

Unser Grid ist ein zweispaltiges Track-Grid, mit der Spalte für das Bild auf `1fr` und dem Text `3fr`. Wenn Sie einen festen Breitenbereich für das Bild einrichten möchten, können Sie die Bildspalte als Pixelbreite festlegen und den Textbereich auf `1fr` setzen. Eine einspaltige Spur von `1fr` würde dann den Rest des Raums einnehmen.

Wir geben dem Bildbereich einen Grid-Area-Namen `img` und dem Textbereich `content`, dann können wir diese mit der `grid-template-areas` Eigenschaft anordnen.

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

Vielleicht möchten wir unsere Box mit dem Bild andersherum anzeigen. Dazu definieren wir das Grid neu, um die `1fr` Spur zuletzt anzuwenden und die Werte in {{cssxref("grid-template-areas")}} umzukehren.

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

## Grid-Definition-Kurzbefehle

Nachdem wir uns verschiedene Möglichkeiten angesehen haben, Elemente auf unseren Grids zu platzieren und viele der Eigenschaften zur Definition des Grids, ist dies ein guter Zeitpunkt, um einige der Kurzbefehle zu betrachten, die es ermöglichen, das Grid und vieles darüber alles in einer CSS-Zeile zu definieren.

Diese können schnell schwer lesbar für andere Entwickler oder sogar für Ihr zukünftiges Selbst werden. Sie sind jedoch Teil der Spezifikation, und es ist wahrscheinlich, dass Sie in Beispielen oder in der Verwendung durch andere Entwickler darauf stoßen werden, auch wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie einen Kurzbefehl verwenden, ist es wichtig, sich daran zu erinnern, dass Kurzbefehle nicht nur ermöglichen, viele Eigenschaften auf einmal festzulegen, sondern sie **setzen** auch alles, was Sie nicht (oder nicht können) im Kurzbefehl festlegen, auf ihre Anfangswerte zurück. Wenn Sie also einen Kurzbefehl verwenden, sollten Sie sich bewusst sein, dass er möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die beiden Kurzbefehle für den Grid-Container sind der explizite Grid-Kurzbefehl {{cssxref("grid-template")}} und der Definition-Kurzbefehl {{cssxref("grid")}}.

### `grid-template`

Die {{cssxref("grid-template")}} Kurzbefehl-Eigenschaft setzt die folgenden ausführlichen Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als der _explizite Grid-Kurzbefehl_ bezeichnet, weil sie Werte setzt, die Sie kontrollieren, wenn Sie ein explizites Grid definieren, und nicht diejenigen, die eine Auswirkung auf alle impliziten Reihen- oder Spalten-Tracks haben können, die erstellt werden.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem früher in diesem Leitfaden erstellten Layout entspricht.

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

Der erste Wert ist unser `grid-template-areas` Wert, aber wir geben auch die Größe der Reihe am Ende jeder Reihe an. Das ist, was das `minmax(100px, auto)` macht.

Nach `grid-template-areas` haben wir einen Schrägstrich, danach folgt eine explizite Track-Auflistung von Spaltentracks.

### `grid`

Der {{cssxref("grid")}} Kurzbefehl geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Grid verwendet werden. So setzen Sie:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf genau dieselbe Weise wie den {{cssxref("grid-template")}} Kurzbefehl verwenden. Seien Sie sich nur bewusst, dass Sie dabei die anderen von der Eigenschaft gesetzten Werte zurücksetzen werden.

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

Wir werden die andere Funktionalität, die dieser Kurzbefehl bietet, erneut besuchen, wenn wir uns mit der [automatischen Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement) und der `grid-auto-flow` Eigenschaft befassen.

## Nächste Schritte

Wenn Sie den [Grid-Leitfäden](/de/docs/Web/CSS/Guides/Grid_layout#guides) gefolgt sind, sollten Sie in der Lage sein, Grid-Layouts unter Verwendung von [zeilenbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) oder [benannten Bereichen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) zu erstellen. Lassen Sie uns jetzt einen Blick darauf werfen, wie man [Grid-Layouts mit benannten Gitternetzlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) erstellt.
