---
title: Grid-Template-Bereiche
slug: Web/CSS/Guides/Grid_layout/Grid_template_areas
l10n:
  sourceCommit: 9a6ab7cd915c84b4d7dbb629f4b84e03fd28f92d
---

Im [Grid-Layout-Leitfaden zur linienbasierten Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) haben wir uns mit Gitterlinien und der Positionierung von Elementen entlang dieser Linien befasst. Bei der Verwendung des CSS-Grid-Layouts gibt es immer Linien, was eine unkomplizierte Methode zum Platzieren von Elementen im Raster darstellt. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen im Raster, die entweder alleine oder in Kombination mit linienbasierter Platzierung verwendet werden kann. Diese Methode beinhaltet die Platzierung unserer Elemente mithilfe benannter Vorlagenbereiche. Sie werden schnell erkennen, warum wir diese Methode manchmal als die ASCII-Art-Methode des Grid-Layouts bezeichnen!

## Einen Grid-Bereich benennen

Sie sind bereits auf die {{cssxref("grid-area")}}-Eigenschaft gestoßen. Diese Eigenschaft kann als Wert alle vier Linien annehmen, die zum Positionieren eines Grid-Bereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist den Bereich zu definieren, indem wir die Linien angeben, die diesen Bereich umschließen.

![Der durch Linien definierte Grid-Bereich](4_area.png)

Wir können auch einen Bereich definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der {{cssxref("grid-template-areas")}}-Eigenschaft angeben. Sie können frei wählen, wie Sie Ihren Bereich benennen möchten. Wenn wir beispielsweise das unten gezeigte Layout erstellen möchten, können wir vier Hauptbereiche identifizieren.

- ein Header
- ein Footer
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild, das ein zweispaltiges Layout mit Header und Footer zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}}-Eigenschaft können wir jedem dieser Bereiche einen Namen zuweisen. Dies allein schafft kein Layout. Vielmehr stellt es benannte Bereiche bereit, die in einem Layout verwendet werden können.

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

Nachdem diese Namen definiert wurden, erstellen wir das Layout. Dieses Mal platzieren wir die Elemente nicht anhand von Liniennummern, die an den Elementen selbst angegeben sind, sondern erstellen das gesamte Layout im Grid-Container. Wir erstellen ein 9-Spalten-Raster und geben an, dass die Bereiche `hd` und `ft` alle 9 Spalten umfassen, während `sd` drei und `main` sechs Spalten umfasst. Jeder Bereich umfasst nur eine Zeile.

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

Mit dieser Methode müssen wir überhaupt nichts an den individuellen Grid-Elementen angeben; alles geschieht im Grid-Container. Wir sehen das Layout beschrieben als den Wert der {{cssxref("grid-template-areas")}}-Eigenschaft.

## Eine Rasterzelle leer lassen

In diesem Beispiel haben wir das Raster vollständig mit Bereichen gefüllt, sodass kein Leerraum vorhanden ist. Sie können jedoch mit dieser Layoutmethode Rasterzellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Zeichen für den Punkt, `.`. Wenn wir den Footer direkt unter dem Hauptinhalt anzeigen möchten, müssten wir die drei Zellen unter der Seitenleiste leer lassen.

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

Um das Layout ordentlicher zu gestalten, können wir mehrere Punkt-Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten bleibt, wird es als eine Zelle gezählt. Für ein komplexes Layout gibt es einen Vorteil darin, die Zeilen und Spalten ordentlich auszurichten. Dies bedeutet, dass Sie im CSS direkt erkennen können, wie dieses Layout aussieht.

## Mehrere Zellen überspannen

In unserem Beispiel umfasst jeder Bereich mehrere Rasterzellen, und dies erreichen wir, indem wir den Namen dieses Grid-Bereichs mehrmals mit Leerzeichen dazwischen wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten im Wert von `grid-template-areas` ordentlich auszurichten. Sie können sehen, dass wir dies getan haben, um die Bereiche `hd` und `ft` mit `main` auszurichten.

Der Bereich, den Sie durch Aneinanderreihen der Bereichsnamen erstellen, muss rechteckig sein; es gibt derzeit keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist jedoch darauf hin, dass eine zukünftige Stufe diese Funktionalität bieten könnte. Sie können jedoch ebenso leicht Zeilen wie Spalten überspannen. Beispielsweise könnten wir die Seitenleiste bis zum Ende des Footers erweitern, indem wir den `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Raster zeigen, andernfalls ist es ungültig (und die Eigenschaft wird ignoriert). Dies bedeutet, dass Sie für jede Zeile die gleiche Anzahl an Zellen haben müssen, auch wenn sie mit einem Punkt-Zeichen angegeben werden, dass die Zelle leer gelassen werden soll. Sie erstellen auch ein ungültiges Raster, wenn Ihre Bereiche nicht rechteckig sind.

## Das Raster mit Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, ist es sehr einfach, Änderungen an verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Raster neu definieren, die Position der Elemente auf dem Raster ändern oder beides gleichzeitig.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. Auf diese Weise würde der Inhaltsbereich immer `main` genannt, egal wo im Raster er platziert ist.

Für unser oben beschriebenes Layout möchten wir möglicherweise ein sehr einfaches Layout bei schmalen Breiten haben, indem wir ein einspaltiges Raster definieren und unsere vier Elemente in vier Reihen stapeln.

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

Wir können dieses Layout dann innerhalb von [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using) redefinieren, um zu unserem Zweispalten-Layout zu wechseln und möglicherweise zu einem Dreispalten-Layout, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass wir für das breite Layout das Raster mit neun Spalten beibehalten, die Position der Elemente jedoch mit `grid-template-areas` neu definieren.

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

Viele der online verfügbaren Grid-Beispiele gehen davon aus, dass Sie Grid für das Hauptseitenlayout verwenden werden, jedoch kann Grid ebenso nützlich für kleinere Elemente wie für größere sein. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da es im Code leicht zu erkennen ist, wie Ihr Element aussieht.

### Beispiel eines Medienobjekts

Als Beispiel können wir ein "[Medienobjekt](/de/docs/Web/CSS/How_to/Layout_cookbook/Media_objects)" erstellen. Dies ist ein Komponent mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte rechts oder links von der Box angezeigt werden.

![Bilder zeigen ein Designbeispiel eines Medienobjekts](4_media_objects.png)

Unser Raster ist ein zweispaltiges Raster, wobei die Spalte für das Bild auf `1fr` und der Text auf `3fr` festgelegt ist. Wenn Sie eine feste Bildbreite wünschen, könnten Sie die Bildspalte als Pixelbreite festlegen und den Textbereich auf `1fr` setzen. Eine einzelne Spalte mit `1fr` würde dann den restlichen Platz einnehmen.

Wir geben dem Bildbereich einen Grid-Bereichsnamen `img` und dem Textbereich `content`, und dann können wir diese mit der `grid-template-areas`-Eigenschaft anordnen.

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

Wir möchten möglicherweise in der Lage sein, unsere Box mit dem Bild andersherum anzuzeigen. Um dies zu tun, definieren wir das Raster neu, um den `1fr`-Track zuletzt zu platzieren und die Werte in {{cssxref("grid-template-areas")}} umzudrehen.

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

## Raster-Definitionskurzformen

Nachdem wir uns verschiedene Möglichkeiten angeschaut haben, Elemente auf unseren Rastern zu platzieren und viele der Eigenschaften, die zur Definition des Rasters verwendet werden, ist dies ein guter Zeitpunkt, um einen Blick auf einige der Kurzformen zu werfen, die verfügbar sind, um das Raster und viele Dinge darüber alles in einer Zeile CSS zu definieren.

Diese können schnell schwer zu lesen werden für andere Entwickler oder sogar Ihr zukünftiges Ich. Sie sind jedoch Teil der Spezifikation und es ist wahrscheinlich, dass Sie auf sie in Beispielen oder in der Nutzung durch andere Entwickler stoßen werden, auch wenn Sie sich entscheiden, sie nicht zu verwenden.

Es ist zu beachten, dass Kurzformen nicht nur ermöglichen, viele Eigenschaften auf einmal festzulegen, sondern auch **alles zurücksetzen**, was Sie nicht (oder nicht können) in der Kurzform setzen auf ihre Anfangswerte. Daher sollten Sie beim Einsatz einer Kurzform darauf achten, dass sie möglicherweise Dinge zurücksetzt, die Sie anderswo angewendet haben.

Die beiden Kurzformen für den Grid-Container sind die explizite Grid-Kurzform {{cssxref("grid-template")}} und die Grid-Definitionskurzform {{cssxref("grid")}}.

### `grid-template`

Die Kurzform der {{cssxref("grid-template")}}-Eigenschaft setzt die folgenden Langform-Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als die _explizite Grid-Kurzform_ bezeichnet, da sie Werte setzt, die Sie kontrollieren, wenn Sie ein explizites Raster definieren, und nicht diejenigen, die irgendwelche impliziten Zeilen- oder Spuren, die erstellt werden könnten, beeinflussen.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das das gleiche ist wie das Layout, das wir früher in diesem Leitfaden erstellt haben.

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

Der erste Wert ist unser `grid-template-areas`-Wert, aber wir deklarieren auch die Größe der Zeile am Ende jeder Zeile. Das ist es, was `minmax(100px, auto)` tut.

Dann nach `grid-template-areas` haben wir einen Schrägstrich, Danach folgt eine explizite Track-Liste der Spalten-Tracks.

### `grid`

Die Kurzform der {{cssxref("grid")}}-Eigenschaft geht noch einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Raster verwendet werden. Also setzen Sie:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax auf die gleiche Weise wie die Kurzform {{cssxref("grid-template")}} verwenden. Seien Sie sich nur bewusst, dass Sie beim Einsatz auch die anderen von der Eigenschaft gesetzten Werte zurücksetzen.

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

Wir werden die andere Funktionalität, die diese Kurzform bietet, erneut betrachten, wenn wir uns mit [automatischer Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement) und der `grid-auto-flow`-Eigenschaft befassen.

## Nächste Schritte

Wenn Sie den [Grid-Leitfäden](/de/docs/Web/CSS/Guides/Grid_layout#guides) gefolgt sind, sollten Sie in der Lage sein, Grid-Layouts mit [linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement) oder benannten Vorlagenbereichen zu erstellen. Nun werfen wir einen Blick darauf, wie [Grid-Layouts mit benannten Gitternlinien erstellt werden](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines).
