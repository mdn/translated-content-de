---
title: Grid-Template-Bereiche
slug: Web/CSS/Guides/Grid_layout/Grid_template_areas
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Im [Leitfaden zur Gitterlayout-Platzierung mit linienbasiertem Ansatz](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) haben wir uns Gitterlinien und wie man Elemente gegen diese Linien positioniert, angesehen. Wenn Sie das CSS-Gitterlayout verwenden, haben Sie immer Linien, und dies kann eine einfache Möglichkeit sein, Elemente auf Ihrem Gitter zu platzieren. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen auf dem Gitter, die Sie allein oder in Kombination mit linienbasierter Platzierung verwenden können. Diese Methode beinhaltet das Platzieren unserer Elemente mit benannten Template-Bereichen. Sie werden sehr schnell sehen, warum wir dies manchmal die ASCII-Art-Methode des Gitterlayouts nennen!

## Einen Gitterbereich benennen

Sie sind bereits auf die {{cssxref("grid-area")}}-Eigenschaft gestoßen. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die zur Positionierung eines Gitterbereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich einschließen.

![Der durch Linien definierte Gitterbereich](4_area.png)

Wir können einen Bereich auch definieren, indem wir ihm einen Namen geben und dann den Standort dieses Bereichs im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft angeben. Sie können wählen, wie Sie Ihren Bereich nennen möchten. Beispielsweise, wenn wir das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- eine Kopfzeile
- eine Fußzeile
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild zeigt ein zweispaltiges Layout mit Kopf- und Fußzeile](4_layout.png)

Mit der {{cssxref("grid-area")}}-Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. An sich schafft dies kein Layout. Stattdessen bietet es benannte Bereiche zur Verwendung in einem Layout.

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

Nachdem wir diese Namen definiert haben, erstellen wir das Layout. Dieses Mal platzieren wir keine Elemente mit Liniennummern, die jeweils auf den Elementen angegeben sind, sondern erstellen das gesamte Layout auf dem Gitter-Container. Hier erstellen wir ein 9-Spalten-Gitter und geben an, dass die Bereiche `hd` und `ft` alle 9 Spalten umfassen, während `sd` drei und `main` sechs umfassen. Jeder Bereich umfasst nur eine Zeile.

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

Mit dieser Methode müssen wir absolut nichts an den einzelnen Gitterelementen angeben, alles passiert auf unserem Gitter-Container. Wir können das Layout als den Wert der {{cssxref("grid-template-areas")}}-Eigenschaft beschrieben sehen.

## Eine Gitterzelle leer lassen

Wir haben unser Gitter in diesem Beispiel vollständig mit Bereichen gefüllt, sodass kein Leerraum bleibt. Mit dieser Layout-Methode können Sie jedoch Gitterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, `.`. Wenn wir den Footer nur direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unter der Seitenleiste leer lassen.

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

Um das Layout sauberer zu machen, können wir mehrere `.`-Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten ist, wird es als eine Zelle gezählt. Für ein komplexes Layout ist es von Vorteil, die Reihen und Spalten sauber auszurichten. Das bedeutet, dass man direkt im CSS sehen kann, wie dieses Layout aussieht.

## Mehrere Zellen umfassen

In unserem Beispiel umfasst jeder Bereich mehrere Gitterzellen und wir erreichen dies, indem wir den Namen dieses Gitterbereichs mit Leerzeichen dazwischen mehrfach wiederholen. Sie können zusätzliches Leerzeichen hinzufügen, um Ihre Spalten im Wert von `grid-template-areas` ordentlich auszurichten. Sie sehen, dass wir dies gemacht haben, sodass die Bereiche `hd` und `ft` mit `main` ausgerichtet sind.

Der Bereich, den Sie durch Verkettungen von Bereichsnamen erstellen, muss rechteckig sein; derzeit gibt es keinen Weg, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist jedoch darauf hin, dass ein zukünftiges Level diese Funktionalität bereitstellen könnte. Sie können jedoch genauso leicht Zeilen wie Spalten umfassen. Wir könnten zum Beispiel unsere Seitenleiste bis zum Ende des Footers erweitern, indem wir die `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter anzeigen, ansonsten ist es ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie für jede Reihe dieselbe Anzahl an Zellen haben müssen, wenn nötig mit einem Punktzeichen, um zu zeigen, dass die Zelle leer bleiben soll. Sie erstellen auch ein ungültiges Gitter, wenn Ihre Bereiche nicht rechteckig sind.

## Das Gitter mit Media-Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, können wir Änderungen für verschiedene Breakpoints an einem Standort in unserem Code vornehmen. Sie können dies tun, indem Sie das Gitter, die Position der Elemente auf dem Gitter oder beides gleichzeitig neu definieren.

Wenn Sie dies tun, definieren Sie die Namen Ihrer Bereiche außerhalb jeglicher Media-Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt werden, egal wo er auf dem Gitter platziert wird.

Für unser obiges Layout wäre es vielleicht ansprechend, bei schmalen Breiten ein sehr einfaches Layout zu haben, indem man einspaltiges Gitter definiert und unsere vier Elemente in vier Zeilen stapelt.

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

Wir können dann jenes Layout innerhalb von [Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) umdefinieren, um zu unserem zweispaltigen Layout zu gehen und vielleicht ein dreispaltiges Layout zu erreichen, wenn der verfügbare Raum noch breiter ist. Beachten Sie, dass wir für das breite Layout das neun-Spur-Gitter beibehalten und neu definieren, wo Elemente mit `grid-template-areas` platziert werden.

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

## `grid-template-areas` für UI-Elemente verwenden

Viele der online zu findenden Gitterbeispiele setzen voraus, dass Sie Gitter für das gesamte Seitenlayout verwenden; jedoch kann Gitter genauso nützlich für die Gestaltung kleiner Abschnitte sein. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders schön sein, da es Ihnen ermöglicht, in Ihrem Code zu visualisieren, wie Ihr Element aussieht.

### Beispiel für ein Medienobjekt

Zum Beispiel können wir ein „[Medienobjekt](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)“ erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf der einen Seite und Inhalt auf der anderen. Das Bild könnte rechts oder links von der Box angezeigt werden.

![Bilder zeigen ein Beispiel für das Design eines Medienobjekts](4_media_objects.png)

Unser Gitter ist ein zweispuriges Gitter, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` eingestellt ist. Wenn Sie eine feste Breite für den Bildbereich möchten, könnten Sie die Bildspalte als Pixelwert einstellen und dem Textbereich `1fr` zuweisen. Eine einspurige Spalte von `1fr` würde dann den Rest des Platzes einnehmen.

Wir geben dem Bildbereich den Grid-Bereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der `grid-template-areas`-Eigenschaft anordnen.

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

Wir möchten vielleicht in der Lage sein, unsere Box mit dem Bild auf der anderen Seite anzuzeigen. Um dies zu tun, definieren wir das Gitter neu, um die `1fr`-Spur zuletzt zu setzen und die Werte in {{cssxref("grid-template-areas")}} zu tauschen.

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

## Gitter-Definition als Kurzform

Nachdem wir uns verschiedene Wege angesehen haben, um Elemente auf unseren Gittern zu platzieren und viele der Eigenschaften zur Definition von Gitter betrachtet haben, ist dies ein guter Zeitpunkt, um sich einige Kurzformen anzuschauen, die zur Definition des Gitters und vieler Dinge darüber in einer CSS-Zeile zur Verfügung stehen.

Diese können schnell schwer lesbar für andere Entwickler oder Ihr zukünftiges Selbst werden. Sie sind jedoch Teil der Spezifikation und es ist wahrscheinlich, dass Sie ihnen in Beispielen oder in der Verwendung durch andere Entwickler begegnen werden, selbst wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie eine Kurzform verwenden, ist es wert, sich daran zu erinnern, dass Kurzformen nicht nur das Setzen vieler Eigenschaften auf einmal ermöglichen, sondern auch alles, was Sie nicht (oder nicht können) in der Kurzform setzen, auf ihre Anfangswerte **zurücksetzen**. Daher, wenn Sie eine Kurzform verwenden, seien Sie sich bewusst, dass sie möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die zwei Kurzformen für den Gitter-Container sind die explizite Gitter-Kurzform {{cssxref("grid-template")}} und die Gitter-Definitions-Kurzform {{cssxref("grid")}}.

### `grid-template`

Die {{cssxref("grid-template")}} Kurzform-Eigenschaft setzt die folgenden Langform-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als _explizite Gitter-Kurzform_ bezeichnet, weil sie Werte setzt, die Sie kontrollieren, wenn Sie ein explizites Gitter definieren, und nicht die, die sich auf eventuell implizit erstellte Zeilen- oder Spurren-Tracks auswirken.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dem zu Beginn dieses Leitfadens erstellten Layout entspricht.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir geben auch die Größe der Zeile am Ende jeder Zeile an. Das ist, was das `minmax(100px, auto)` macht.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach folgt eine explizite Spuraufzählung der Spurren-Tracks.

### `grid`

Die {{cssxref("grid")}} Kurzform geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Gitter verwendet werden. Sie setzen somit:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf die gleiche Weise verwenden wie die Kurzform {{cssxref("grid-template")}}. Seien Sie sich nur bewusst, dass Sie beim Verwenden andere durch die Eigenschaft gesetzte Werte zurücksetzen werden.

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

Wir werden die andere Funktionalität, die diese Kurzform bietet, erneut betrachten, wenn wir uns mit der [automatischen Platzierung im Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement) und der `grid-auto-flow`-Eigenschaft befassen.

## Nächste Schritte

Wenn Sie entlang der [Gitter-Leitfäden](/de/docs/Web/CSS/Guides/Grid_layout#guides) gearbeitet haben, sollten Sie in der Lage sein, Gitterlayouts mit [linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) oder benannten Template-Bereichen zu erstellen. Lassen Sie uns nun einen Blick darauf werfen, wie Sie [Gitterlayouts mit benannten Gitterlinien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) erstellen können.
