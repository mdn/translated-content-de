---
title: Grid-Template-Bereiche
slug: Web/CSS/CSS_grid_layout/Grid_template_areas
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Im [vorherigen Leitfaden](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement) haben wir uns mit Gitterlinien und der Positionierung von Elementen an diesen Linien beschäftigt. Wenn Sie CSS Grid Layout verwenden, haben Sie immer Linien, und dies kann eine einfache Methode sein, um Elemente auf Ihrem Gitter zu platzieren. Es gibt jedoch eine alternative Methode zur Positionierung von Elementen im Gitter, die Sie alleine oder in Kombination mit der linienbasierten Platzierung verwenden können. Diese Methode beinhaltet das Platzieren unserer Elemente mit benannten Template-Bereichen, und wir werden genau erfahren, wie diese Methode funktioniert. Sie werden sehr schnell sehen, warum wir dies manchmal die ASCII-Art-Methode des Grid-Layouts nennen!

## Benennung eines Grid-Bereichs

Sie sind bereits mit der {{cssxref("grid-area")}} Eigenschaft in Berührung gekommen. Dies ist die Eigenschaft, die als Wert alle vier Linien annehmen kann, die zur Positionierung eines Grid-Bereichs verwendet werden.

```css
.box1 {
  grid-area: 1 / 1 / 4 / 2;
}
```

Was wir hier tun, wenn wir alle vier Linien definieren, ist, den Bereich zu definieren, indem wir die Linien spezifizieren, die diesen Bereich umschließen.

![Der durch Linien definierte Grid-Bereich](4_area.png)

Wir können einen Bereich auch definieren, indem wir ihm einen Namen geben und dann die Position dieses Bereichs im Wert der {{cssxref("grid-template-areas")}} Eigenschaft angeben. Sie können den Namen Ihres Bereichs frei wählen. Wenn ich zum Beispiel das unten gezeigte Layout erstellen möchte, kann ich vier Hauptbereiche identifizieren.

- einen Header
- einen Footer
- eine Seitenleiste
- den Hauptinhalt

![Ein Bild, das ein einfaches Zwei-Spalten-Layout mit Header und Footer zeigt](4_layout.png)

Mit der {{cssxref("grid-area")}} Eigenschaft kann ich jedem dieser Bereiche einen Namen zuweisen. Dies erstellt noch kein Layout, aber wir haben nun benannte Bereiche, die wir in einem Layout verwenden können.

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

Nachdem diese Namen definiert wurden, erstelle ich mein Layout. Diesmal platziere ich meine Elemente nicht mit Liniennummern, die an den Elementen selbst angegeben sind, sondern erstelle das gesamte Layout im Grid-Container.

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

Mit dieser Methode müssen wir nichts an den einzelnen Grid-Elementen angeben, alles erfolgt im Grid-Container. Wir sehen das Layout beschrieben als den Wert der {{cssxref("grid-template-areas")}} Eigenschaft.

## Ein Grid-Zelle leer lassen

In diesem Beispiel haben wir unser Grid vollständig mit Bereichen gefüllt und keinen weißen Raum gelassen. Sie können jedoch mit dieser Layout-Methode Grid-Zellen leer lassen. Um eine Zelle leer zu lassen, verwenden Sie das Punktzeichen, '`.`'. Wenn ich den Footer direkt unter dem Hauptinhalt anzeigen möchte, muss ich die drei Zellen unter der Seitenleiste leer lassen.

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

Um das Layout ordentlicher zu gestalten, kann ich mehrere `.` Zeichen verwenden. Solange mindestens ein Leerzeichen zwischen den Punkten ist, wird es als eine Zelle gezählt. Für ein komplexes Layout gibt es einen Vorteil, die Zeilen und Spalten sauber ausgerichtet zu haben. Das bedeutet, dass Sie tatsächlich im CSS sehen können, wie dieses Layout aussieht.

## Über mehrere Zellen spannen

In unserem Beispiel spannt jeder der Bereiche über mehrere Grid-Zellen und wir erreichen dies, indem wir den Namen dieses Grid-Bereichs mit Leerzeichen dazwischen mehrfach wiederholen. Sie können zusätzliche Leerzeichen hinzufügen, um Ihre Spalten in der Wert von `grid-template-areas` sauber auszurichten. Sie können sehen, dass ich dies getan habe, damit `hd` und `ft` mit `main` ausgerichtet sind.

Der Bereich, den Sie erstellen, indem Sie die Bereichsnamen verketten, muss rechteckig sein, zu diesem Zeitpunkt gibt es keine Möglichkeit, einen L-förmigen Bereich zu erstellen. Die Spezifikation weist darauf hin, dass eine zukünftige Version diese Funktionalität bieten könnte. Sie können jedoch genauso leicht Zeilen wie Spalten überspannen. Zum Beispiel könnten wir unsere Seitenleiste bis zum Ende des Footers spannen, indem wir die `.` durch `sd` ersetzen.

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

Der Wert von {{cssxref("grid-template-areas")}} muss ein vollständiges Gitter zeigen, sonst ist er ungültig (und die Eigenschaft wird ignoriert). Das bedeutet, dass Sie für jede Zeile dieselbe Anzahl von Zellen haben müssen, wenn leer, demonstriert durch einen Punkt, dass die Zelle leer bleiben soll. Sie erstellen auch ein ungültiges Gitter, wenn Ihre Bereiche nicht rechteckig sind.

## Das Grid mithilfe von Media Queries neu definieren

Da unser Layout jetzt in einem Teil des CSS enthalten ist, wird es sehr einfach, Änderungen an verschiedenen Breakpoints vorzunehmen. Sie können dies tun, indem Sie das Gitter, die Position von Elementen im Gitter oder beides auf einmal neu definieren.

Wenn Sie dies tun, definieren Sie die Namen für Ihre Bereiche außerhalb von Media Queries. So wird der Inhaltsbereich immer als `main` bezeichnet, egal wo er im Gitter platziert ist.

Für unser oben genanntes Layout könnten wir ein sehr einfaches Layout bei schmalen Breiten haben möchten, indem wir ein Einzelspaltengitter definieren und unsere Elemente stapeln.

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

Wir können dann dieses Layout in Media Queries neu definieren, um zu unserem Zweispalten-Layout zu wechseln und vielleicht zu einem Dreispalten-Layout, wenn der verfügbare Platz noch breiter ist. Beachten Sie, dass ich für das breite Layout mein Neun-Spalten-Track-Gitter beibehalte und indem ich die `grid-template-areas` Werte neu definiere, wo die Elemente platziert werden.

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

Viele der Grid-Beispiele, die Sie online finden, gehen davon aus, dass Sie Grid für das Hauptseitenlayout verwenden, jedoch kann Grid genauso nützlich für kleinere Elemente sein wie für größere. Die Verwendung von {{cssxref("grid-template-areas")}} kann besonders angenehm sein, da im Code leicht ersichtlich ist, wie Ihr Element aussieht.

### Media-Objekt Beispiel

Als ein sehr einfaches Beispiel können wir ein "Media-Objekt" erstellen. Dies ist eine Komponente mit Platz für ein Bild oder andere Medien auf einer Seite und Inhalt auf der anderen. Das Bild könnte auf der rechten oder linken Seite des Kastens angezeigt werden.

![Bilder, die ein Beispiel-Design für ein Media-Objekt zeigen](4_media_objects.png)

Unser Grid ist ein Zwei-Spalten-Track Grid, mit der Spalte für das Bild, das auf `1fr` und dem Text auf `3fr` festgelegt ist. Wenn Sie einen Bildbereich mit fester Breite haben möchten, könnten Sie die Bildspalte als Pixelbreite festlegen und den Textbereich auf `1fr`. Ein einzelner Spaltentrack von `1fr` würde dann den restlichen Raum einnehmen.

Wir geben dem Bildbereich den Grid-Bereichsnamen `img` und dem Textbereich `content`, dann können wir diese mit der `grid-template-areas` Eigenschaft auslegen.

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
    Dies ist ein Beispiel für ein Media-Objekt. Wir können grid-template-areas verwenden, um das Bild und den Textteil des Media-Objekts umzuschalten.
  </div>
</div>
```

{{ EmbedLiveSample('Media_object_example', '300', '200') }}

### Anzeige des Bildes auf der anderen Seite der Box

Möglicherweise möchten wir in der Lage sein, unser Kästchen mit dem Bild auf der anderen Seite anzuzeigen. Dazu definieren wir das Grid neu, um den `1fr` Track zuletzt hinzuzufügen, und vertauschen die Werte in {{cssxref("grid-template-areas")}}.

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
    Dies ist ein Beispiel für ein Media-Objekt. Wir können grid-template-areas verwenden, um das Bild und den Textteil des Media-Objekts umzuschalten.
  </div>
</div>
```

{{ EmbedLiveSample('Displaying_the_image_on_the_other_side_of_the_box', '300', '200') }}

## Grid-Definition Shorthands

Nachdem Sie verschiedene Methoden zur Platzierung von Elementen auf unseren Grids und viele der Eigenschaften zur Definition von Grid kennengelernt haben, ist dies ein guter Zeitpunkt, um sich einige Shorthands anzusehen, die verfügbar sind, um das Grid und viele Dinge darüber alles in einer Linie CSS zu definieren.

Diese können schnell schwer lesbar für andere Entwickler oder sogar Ihr zukünftiges Selbst werden. Dennoch sind sie Teil der Spezifikation und es ist wahrscheinlich, dass Sie auf sie in Beispielen oder bei anderen Entwicklern stoßen, auch wenn Sie sich entscheiden, sie nicht zu verwenden.

Bevor Sie ein beliebiges Kürzel verwenden, sollten Sie daran denken, dass Shorthands nicht nur dazu dienen, viele Eigenschaften auf einmal festzulegen, sondern sie dienen auch dazu, Dinge auf ihre Anfangswerte zurückzusetzen, die Sie nicht oder nicht im Kürzel festlegen können. Wenn Sie also ein Kürzel verwenden, seien Sie sich darüber im Klaren, dass es Dinge zurücksetzen kann, die Sie an anderer Stelle angewendet haben.

Die beiden Shorthands für den Grid-Container sind das explizite Grid-Kürzel `grid-template` und das Grid-Definitionskürzel `grid`.

### `grid-template`

Die {{cssxref("grid-template")}} Eigenschaft setzt die folgenden Eigenschaften:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}

Die Eigenschaft wird als das explizite Grid-Kürzel bezeichnet, weil sie die Dinge festlegt, die Sie kontrollieren, wenn Sie ein explizites Grid definieren, und nicht die, die Auswirkungen auf beliebige implizite Reihen- oder Spaltentracks haben könnten, die erstellt werden könnten.

Der folgende Code erstellt ein Layout mit {{cssxref("grid-template")}}, das dasselbe Layout erstellt, das früher in diesem Leitfaden erstellt wurde.

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

Der erste Wert ist unser `grid-template-areas` Wert, aber wir geben auch die Größe der Zeile am Ende jeder Zeile an. Das ist es, was das `minmax(100px, auto)` tut.

Dann haben wir nach `grid-template-areas` einen Schrägstrich, danach eine explizite Track-Auflistung von Spaltentracks.

### `grid`

Das {{cssxref("grid")}} Kürzel geht einen Schritt weiter und setzt auch Eigenschaften, die vom impliziten Grid verwendet werden. Also werden Sie setzen:

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-flow")}}

Sie können diese Syntax in genau der gleichen Weise verwenden wie das {{cssxref("grid-template")}} Kürzel, seien Sie sich jedoch bewusst, dass Sie beim Verwenden davon die anderen von der Eigenschaft gesetzten Werte zurücksetzen.

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

Wir werden die andere Funktionalität, die von diesem Kürzel angeboten wird, später in diesen Leitfäden noch einmal betrachten, wenn wir einen Blick auf die automatische Platzierung und die `grid-auto-flow` Eigenschaft werfen.

Wenn Sie diese anfänglichen Leitfäden durchgearbeitet haben, sollten Sie nun in der Lage sein, Grid-Layouts unter Verwendung linienbasierter Platzierung oder benannter Bereiche zu erstellen. Nehmen Sie sich etwas Zeit, um einige gängige Layoutmuster mit Grid zu erstellen, auch wenn es viele neue Begriffe zu lernen gibt, die Syntax ist relativ einfach. Während Sie Beispiele entwickeln, werden Sie wahrscheinlich auf einige Fragen und Anwendungsfälle stoßen, die wir noch nicht behandelt haben. In den restlichen Leitfäden werden wir einige der weiteren Details, die in der Spezifikation enthalten sind, betrachten – damit Sie beginnen können, erweiterte Layouts damit zu erstellen.
