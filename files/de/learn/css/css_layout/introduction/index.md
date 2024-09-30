---
title: Einführung in CSS Layout
slug: Learn/CSS/CSS_layout/Introduction
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

Dieser Artikel wird einige der CSS-Layout-Funktionen rekapitulieren, die wir bereits in früheren Modulen angesprochen haben, wie verschiedene {{cssxref("display")}}-Werte, und einige der Konzepte einführen, die wir in diesem Modul behandeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Idee davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ihnen einen Überblick über CSS-Seitenlayout-Techniken zu geben. Jede Technik kann in nachfolgenden Tutorials detaillierter erlernt werden.
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayout-Techniken ermöglichen es uns, Elemente in einer Webseite zu positionieren, relativ zu den folgenden Faktoren: ihrer Standardposition im normalen Layoutfluss, den anderen Elementen um sie herum, ihrem übergeordneten Container und dem Hauptansichtsfenster/Fenster. Die Seitenlayout-Techniken, die wir in diesem Modul detaillierter behandeln werden, sind:

- Normalfluss
- Die {{cssxref("display")}}-Eigenschaft
- Flexbox
- Grid
- Floats
- Positionierung
- Tabellenlayout
- Mehrspaltenlayout

Jede Technik hat ihre Anwendungsbereiche, Vorteile und Nachteile. Keine Technik ist dafür gedacht, isoliert verwendet zu werden. Indem Sie verstehen, wofür jede Layoutmethode ausgelegt ist, werden Sie in der Lage sein, zu verstehen, welche Methode für jede Aufgabe am geeignetsten ist.

## Normalfluss

Normalfluss ist, wie der Browser HTML-Seiten standardmäßig anordnet, wenn Sie nichts tun, um das Seitenlayout zu kontrollieren. Schauen wir uns ein kurzes HTML-Beispiel an:

```html
<p>I love my cat.</p>

<ul>
  <li>Buy cat food</li>
  <li>Exercise</li>
  <li>Cheer up friend</li>
</ul>

<p>The end!</p>
```

Standardmäßig zeigt der Browser diesen Code wie folgt an:

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

Beachten Sie, wie das HTML in exakt der Reihenfolge angezeigt wird, in der es im Quellcode erscheint, mit Elementen, die übereinander gestapelt sind — der erste Absatz, gefolgt von der ungeordneten Liste, gefolgt vom zweiten Absatz.

Die Elemente, die eins unter dem anderen erscheinen, werden als **Blockelemente** beschrieben, im Gegensatz zu **Inline-Elementen**, die nebeneinander erscheinen wie die einzelnen Wörter in einem Absatz.

> [!NOTE]
> Die Richtung, in der Blockelementinhalte angeordnet sind, wird als Blockrichtung beschrieben. Die Blockrichtung verläuft vertikal in einer Sprache wie Englisch, die einen horizontalen Schreibmodus hat. Sie würde horizontal verlaufen in jeder Sprache mit einem vertikalen Schreibmodus, wie Japanisch. Die entsprechende Inline-Richtung ist die Richtung, in der Inline-Inhalte (wie ein Satz) verlaufen würden.

Bei vielen der Elemente auf Ihrer Seite wird der Normalfluss genau das Layout erzeugen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der Ihnen in CSS zur Verfügung stehenden Werkzeuge ändern. Ein gut strukturiertes HTML-Dokument als Ausgangspunkt ist sehr wichtig, da Sie dann mit der Standardanordnung der Dinge arbeiten können, anstatt dagegen anzukämpfen.

Die Methoden, die ändern können, wie Elemente in CSS angeordnet sind, sind:

- **Die {{cssxref("display")}}-Eigenschaft** — Standardwerte wie `block`, `inline` oder `inline-block` können das Verhalten von Elementen im normalen Fluss ändern, zum Beispiel, indem ein Blockelement wie ein Inline-Element funktioniert (siehe [Arten von CSS-Boxen](/de/docs/Learn/CSS/Building_blocks/The_box_model#block_and_inline_boxes) für mehr Informationen). Wir haben auch komplette Layout-Methoden, die durch spezifische `display`-Werte aktiviert werden, zum Beispiel [CSS-Grid](/de/docs/Learn/CSS/CSS_layout/Grids) und [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox), die ändern, wie Kindelemente innerhalb ihrer Eltern angeordnet sind.
- **Floats** — Die Anwendung eines {{cssxref("float")}}-Wertes wie `left` kann dazu führen, dass Blockelemente entlang einer Seite eines Elements umbrochen werden, ähnlich wie Bilder manchmal Text um sie herum in Magazinen haben.
- **Die {{cssxref("position")}}-Eigenschaft** — Ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen präzise zu kontrollieren. `static`-Positionierung ist die Standardeinstellung im normalen Fluss, aber Sie können Elemente anders anordnen, indem Sie andere Werte verwenden, zum Beispiel fixiert oben im Browser-Fenster.
- **Tabellenlayout** — Funktionen, die für das Styling von Teilen einer HTML-Tabelle entwickelt wurden, können auf Nicht-Tabellen-Elemente angewendet werden, indem `display: table` und zugehörige Eigenschaften verwendet werden.
- **Mehrspaltenlayout** — Die [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)-Eigenschaften können bewirken, dass der Inhalt eines Blocks in Spalten angeordnet wird, wie Sie es vielleicht in einer Zeitung sehen.

## Die display-Eigenschaft

Die Hauptmethoden zur Erstellung eines Seitenlayouts in CSS beinhalten alle das Festlegen von Werten für die `display`-Eigenschaft. Diese Eigenschaft ermöglicht es uns, die Standardweise, wie etwas angezeigt wird, zu ändern. Alles im normalen Fluss hat einen Standardwert für `display`; d.h. eine Standardweise, in der Elemente verhalten sind. Zum Beispiel werden Absätze im Englischen so angezeigt, dass sie untereinander stehen, weil sie mit `display: block` gestylt sind. Wenn Sie einen Link um einen Text in einem Absatz erstellen, bleibt dieser Link inline mit dem Rest des Textes und wird nicht in eine neue Zeile gebrochen. Dies liegt daran, dass das {{htmlelement("a")}}-Element standardmäßig `display: inline` ist.

Sie können dieses Standardanzeigeverhalten ändern. Zum Beispiel ist das {{htmlelement("li")}}-Element standardmäßig `display: block`, was bedeutet, dass Listenelemente in unserem englischen Dokument untereinander angezeigt werden. Wenn wir den Anzeige-Wert auf `inline` ändern würden, würden sie nebeneinander angezeigt werden, wie Wörter in einem Satz. Die Tatsache, dass Sie den Wert von `display` für jedes Element ändern können, bedeutet, dass Sie HTML-Elemente aufgrund ihrer semantischen Bedeutung auswählen können, ohne sich darüber Gedanken zu machen, wie sie aussehen werden. Die Art und Weise, wie sie aussehen, können Sie ändern.

Zusätzlich zur Möglichkeit, die Standarddarstellung zu ändern, indem man ein Element von `block` zu `inline` und umgekehrt verwandelt, gibt es einige tiefere Layout-Methoden, die mit einem `display`-Wert beginnen. Wenn Sie jedoch diese verwenden, müssen Sie im Allgemeinen zusätzliche Eigenschaften aufrufen. Die zwei Werte, die für unsere Diskussion des Layouts am wichtigsten sind, sind `display: flex` und `display: grid`.

## Flexbox

Flexbox ist der Kurzname für das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-CSS-Modul, das es uns erleichtern soll, Dinge in einer Dimension – entweder als Reihe oder als Spalte – anzuordnen. Um Flexbox zu verwenden, wenden Sie `display: flex` auf das Elternelement der Elemente an, die Sie anordnen möchten; alle seine direkten Kinder werden dann zu _Flex-Items_. Wir können dies in einem einfachen Beispiel sehen.

### display: flex einstellen

Das folgende HTML-Markup gibt uns ein umschließendes Element mit einer Klasse `wrapper`, in dem sich drei {{htmlelement("div")}}-Elemente befinden. Standardmäßig würden diese als Block-Elemente angezeigt werden, das heißt, untereinander in unserem englischsprachigen Dokument.

Wenn wir jedoch `display: flex` auf das Elternelement hinzufügen, ordnen sich die drei Elemente jetzt in Spalten an. Dies liegt daran, dass sie _Flex-Items_ werden und von einigen Anfangswerten betroffen sind, die Flexbox auf den Flex-Container setzt. Sie werden in einer Reihe angezeigt, weil die Eigenschaft {{cssxref("flex-direction")}} des Elternelements einen Anfangswert von `row` hat. Sie scheinen sich in der Höhe zu strecken, weil die Eigenschaft {{cssxref("align-items")}} ihres Elternelements einen Anfangswert von `stretch` hat. Dies bedeutet, dass die Elemente sich auf die Höhe des Flex-Containers strecken, die in diesem Fall durch das höchste Element definiert ist. Die Elemente richten sich alle am Anfang des Containers aus, wodurch jeder zusätzliche Platz am Ende der Reihe verbleibt.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Setting_display_flex', '300', '200') }}

### Die flex-Eigenschaft einstellen

Neben Eigenschaften, die auf einen _Flex-Container_ angewendet werden können, gibt es auch Eigenschaften, die auf _Flex-Items_ angewendet werden können. Diese Eigenschaften können unter anderem die Art ändern, wie sich Elemente _flexen_, wodurch sie sich je nach verfügbarem Platz ausdehnen oder zusammenziehen können.

Als einfaches Beispiel können wir die {{cssxref("flex")}}-Eigenschaft auf alle unsere Kindelemente anwenden und ihr einen Wert von `1` geben. Dadurch wachsen alle Elemente und füllen den Container aus, anstatt am Ende Platz zu lassen. Gibt es mehr Platz, werden die Elemente breiter; gibt es weniger, werden sie schmaler. Darüber hinaus, wenn Sie ein weiteres Element zu dem Markup hinzufügen, werden die anderen Elemente alle kleiner, um Platz dafür zu schaffen; die Elemente nehmen zusammen weiterhin den gesamten Platz ein.

```css hidden
* {
  box-sizing: border-box;
}
.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: flex;
}

.wrapper > div {
  flex: 1;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Setting_the_flex_property', '300', '200') }}

> [!NOTE]
> Dies war eine sehr kurze Einführung in das, was in Flexbox möglich ist. Um mehr zu erfahren, sehen Sie sich unseren [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Artikel an.

## Grid Layout

Während Flexbox für eindimensionale Layouts konzipiert ist, ist Grid Layout für zwei Dimensionen gedacht – das Ausrichten von Dingen in Reihen und Spalten.

### display: grid einstellen

Ähnlich wie bei Flexbox aktivieren wir das Grid Layout mit seinem spezifischen Display-Wert — `display: grid`. Das folgende Beispiel verwendet ähnliches Markup wie das Flexbeispiel, mit einem Container und einigen Kindelementen. Neben der Verwendung von `display: grid` definieren wir auch einige Reihen- und Spalten-Tracks für das Elternelement, indem wir die {{cssxref("grid-template-rows")}}- und {{cssxref("grid-template-columns")}}-Eigenschaften entsprechend verwenden. Wir haben drei Spalten definiert, jede mit `1fr`, sowie zwei Reihen mit `100px`. Wir müssen keine Regeln für die Kindelemente setzen; sie werden automatisch in die Zellen unseres Grids platziert.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
  <div class="box6">Six</div>
</div>
```

{{ EmbedLiveSample('Setting_display_grid', '300', '330') }}

### Platzierung von Elementen im Grid

Sobald Sie ein Grid haben, können Sie Ihre Elemente explizit darauf platzieren, anstatt sich auf das automatische Platzierungsverhalten zu verlassen, das oben zu sehen war. Im folgenden Beispiel haben wir dasselbe Grid definiert, aber diesmal mit drei Kindelementen. Wir haben die Start- und Endlinie jedes Elements mit den {{cssxref("grid-column")}}- und {{cssxref("grid-row")}}-Eigenschaften festgelegt. Dies bewirkt, dass die Elemente mehrere Tracks überspannen.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper > div {
  border-radius: 5px;
  background-color: rgb(207 232 220);
  padding: 1em;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.box1 {
  grid-column: 2 / 4;
  grid-row: 1;
}

.box2 {
  grid-column: 1;
  grid-row: 1 / 3;
}

.box3 {
  grid-row: 2;
  grid-column: 3;
}
```

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
</div>
```

{{ EmbedLiveSample('Placing_items_on_the_grid', '300', '330') }}

> [!NOTE]
> Diese beiden Beispiele zeigen nur ein kleines Beispiel für die Macht des Grid Layouts. Um mehr zu erfahren, sehen Sie sich unseren [Grid Layout](/de/docs/Learn/CSS/CSS_layout/Grids)-Artikel an.

Der Rest dieses Leitfadens behandelt andere Layout-Methoden, die weniger wichtig für das Hauptlayout Ihrer Seite sind, aber dennoch helfen, bestimmte Aufgaben zu erfüllen. Indem Sie die Natur jeder Layout-Aufgabe verstehen, werden Sie bald feststellen, dass, wenn Sie ein bestimmtes Element Ihres Designs betrachten, die Art des Layouts, die am besten dazu geeignet ist, oft klar erkennbar ist.

## Floats

Das Floating eines Elements ändert das Verhalten dieses Elements und der block-level Elemente, die ihm im normalen Fluss folgen. Das gefloatete Element wird nach links oder rechts bewegt und aus dem normalen Fluss entfernt, und der umgebende Inhalt _fließt_ darum herum.

Die {{cssxref("float")}}-Eigenschaft hat vier mögliche Werte:

- `left` — Floatet das Element nach links.
- `right` — Floatet das Element nach rechts.
- `none` — Gibt an, dass kein Floaten verwendet wird. Dies ist der Standardwert.
- `inherit` — Gibt an, dass der Wert der `float`-Eigenschaft vom Elternelement des Elements übernommen werden soll.

Im folgenden Beispiel floaten wir ein `<div>` nach links und geben ihm einen {{cssxref("margin")}} auf der rechten Seite, um den umgebenden Text von ihm wegzudrücken. Dies gibt uns den Effekt von Text, der um das Box-Element gewickelt ist, und ist das meiste, was Sie über Floats wissen müssen, wie sie im modernen Webdesign verwendet werden.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
}

p {
  line-height: 2;
  word-spacing: 0.1rem;
}

.box {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  border-radius: 5px;
}
```

```html
<h1>Simple float example</h1>

<div class="box">Float</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css
.box {
  float: left;
  width: 150px;
  height: 150px;
  margin-right: 30px;
}
```

{{ EmbedLiveSample('Floats', '100%', 600) }}

> [!NOTE]
> Floats sind vollständig in unserer Lektion über die [float and clear](/de/docs/Learn/CSS/CSS_layout/Floats)-Eigenschaften erklärt. Vor Techniken wie Flexbox und Grid Layout wurden Floats als Methode zur Erstellung von Spaltenlayouts verwendet. Sie könnten immer noch auf diese Methoden im Web stoßen; wir werden diese in der Lektion über [legacy layout methods](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) behandeln.

## Positionierungstechniken

Die Positionierung ermöglicht es Ihnen, ein Element von dem Ort zu verschieben, an dem es sonst im normalen Fluss platziert würde, zu einem anderen Ort. Positionierung ist keine Methode zur Erstellung der Hauptlayouts einer Seite; es geht mehr darum, die Platzierung spezifischer Elemente auf einer Seite zu verwalten und zu optimieren.

Es gibt jedoch nützliche Techniken zum Erreichen spezifischer Layoutmuster, die sich auf die {{cssxref("position")}}-Eigenschaft stützen. Das Verständnis der Positionierung hilft auch beim Verständnis des normalen Flusses und was es bedeutet, ein Element aus dem normalen Fluss zu entfernen.

Es gibt fünf Typen der Positionierung, die Sie kennen sollten:

- **Statische Positionierung** ist der Standard, den jedes Element erhält. Es bedeutet einfach "Setze das Element an seinen normalen Platz im Dokumentlayoutfluss – nichts Besonderes zu sehen hier".
- **Relative Positionierung** ermöglicht es Ihnen, die Position eines Elements auf der Seite zu ändern, indem es relativ zu seiner Position im normalen Fluss verschoben wird, sowie es mit anderen Elementen auf der Seite überlappt.
- **Absolute Positionierung** verschiebt ein Element vollständig aus dem normalen Layoutfluss der Seite, als ob es auf seiner eigenen separaten Ebene sitzt. Von dort aus können Sie es relativ zu den Kanten der nächsten positionierten Vorfahren fixieren (was `<html>` wird, wenn keine anderen Vorfahren positioniert sind). Dies ist nützlich zur Erstellung komplexer Layouteffekte, wie z. B. Registerkartenboxen, bei denen verschiedene Inhaltsfenster aufeinander liegen und nach Bedarf angezeigt und verborgen werden, oder Informationsfenster, die standardmäßig außerhalb des Bildschirms sitzen, aber über eine Steuerungstaste auf den Bildschirm gleiten können.
- **Feste Positionierung** ist der absoluten Positionierung sehr ähnlich, außer dass sie ein Element relativ zum Browseransichtsfenster fixiert, nicht ein anderes Element. Dies ist nützlich zur Erstellung von Effekten wie ein permanentes Navigationsmenü, das immer an derselben Stelle auf dem Bildschirm bleibt, während der Rest des Inhalts darunter scrollt.
- **Sticky Positionierung** ist eine neuere Positionierungsmethode, die ein Element wie `position: relative` agieren lässt, bis es einen definierten Offset vom Ansichtsfenster erreicht, an dem Punkt es wie `position: fixed` agiert.

### Einfaches Positionierungsbeispiel

Um Vertrauen mit diesen Seitenlayout-Techniken zu schaffen, zeigen wir Ihnen ein paar schnelle Beispiele. Unsere Beispiele werden alle dieselbe HTML-Struktur aufweisen (eine Überschrift gefolgt von drei Absätzen), die wie folgt ist:

```html
<h1>Positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">I am a basic block level element.</p>
<p>I am a basic block level element.</p>
```

Dieses HTML wird standardmäßig mit dem folgenden CSS gestylt:

```css
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
}
```

Die gerenderte Ausgabe ist wie folgt:

{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}

### Relative Positionierung

Relative Positionierung ermöglicht Ihnen, ein Element von seinem Standardplatz im normalen Fluss zu verschieben. Das bedeutet, dass Sie eine Aufgabe wie das Herunterbewegen eines Symbols, damit es mit einem Textetikett übereinstimmt, erreichen könnten. Dazu könnten wir die folgende Regel hinzufügen, um relative Positionierung hinzuzufügen:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Hier geben wir unserem mittleren Absatz einen {{cssxref("position")}}-Wert von `relative`. Dies tut an sich nichts, also fügen wir auch {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften hinzu. Diese dienen dazu, das betroffene Element nach unten und rechts zu verschieben. Dies scheint vielleicht das Gegenteil von dem zu sein, was Sie erwartet haben, aber Sie müssen es so sehen, dass das Element auf seiner linken und obersten Seite gedrückt wird, was dazu führt, dass es sich nach rechts und unten bewegt.

Das Hinzufügen dieses Codes ergibt folgendes Ergebnis:

```html hidden
<h1>Relative positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">This is my relatively positioned element.</p>
<p>I am a basic block level element.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
}
```

{{ EmbedLiveSample('Relative_positioning', '100%', 300) }}

### Absolute Positionierung

Absolute Positionierung wird verwendet, um ein Element vollständig aus dem normalen Fluss zu entfernen und stattdessen mit Offsets von den Rändern eines Containerblocks zu positionieren.

Zurück zu unserem ursprünglichen nicht positionierten Beispiel, könnten wir die folgende CSS-Regel hinzufügen, um absolute Positionierung zu implementieren:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

Hier geben wir unserem mittleren Absatz einen {{cssxref("position")}}-Wert von `absolute` und dieselben {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften wie zuvor. Das Hinzufügen dieses Codes ergibt das folgende Ergebnis:

```html hidden
<h1>Absolute positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">This is my absolutely positioned element.</p>
<p>I am a basic block level element.</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

p {
  background-color: rgb(207 232 220);
  border: 2px solid rgb(79 185 227);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
}
```

{{ EmbedLiveSample('Absolute_positioning', '100%', 300) }}

Dies ist sehr anders! Das positionierte Element wurde nun vollständig vom Rest des Seitenlayouts getrennt und sitzt darüber. Die anderen beiden Absätze sitzen jetzt zusammen, als ob ihr positioniertes Geschwister nicht existiert. Die {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften haben einen anderen Effekt auf absolut positionierte Elemente als auf relativ positionierte. In diesem Fall wurden die Offsets von oben und links der Seite berechnet. Es ist möglich, das Elternelement zu ändern, das zu diesem Container wird, und wir werden uns das in der Lektion über [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning) ansehen.

### Feste Positionierung

Feste Positionierung entfernt unser Element aus dem Dokumentfluss auf die gleiche Weise wie absolute Positionierung. Allerdings werden die Offsets nicht vom Container angewendet, sondern vom Ansichtsfenster. Da sich das Element in Bezug auf das Ansichtsfenster bleibt, können wir Effekte wie ein Menü, das feststeht, während die Seite darunter scrollt, erstellen.

Für dieses Beispiel enthält unser HTML drei Absätze Text, sodass wir durch die Seite scrollen können, sowie eine Box mit der Eigenschaft `position: fixed`.

```html
<h1>Fixed positioning</h1>

<div class="positioned">Fixed</div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci.
</p>

<p>
  Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed
  auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
  vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex
  malesuada et.
</p>

<p>
  In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet
  turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas
  augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id
  ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: fixed;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Fixed_positioning', '100%', 200) }}

### Sticky Positionierung

Sticky Positionierung ist die letzte Positionierungsmethode, die uns zur Verfügung steht. Sie mischt relative Positionierung mit festen Positionierung. Wenn ein Element `position: sticky` hat, wird es im normalen Fluss scrollen, bis es die von uns definierten Offsets vom Ansichtsfenster erreicht. An diesem Punkt wird es "fixiert", als ob `position: fixed` angewendet wurde.

```html hidden
<h1>Sticky positioning</h1>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>

<div class="positioned">Sticky</div>

<p>
  Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
  ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
  est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
  tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus
  sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
  vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
  penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam
  dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus
  ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus
  laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum,
  tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus
  neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat
  volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros
  pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec
  lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
</p>
```

```css hidden
body {
  width: 500px;
  margin: 0 auto;
}

.positioned {
  background: rgb(255 84 104 / 30%);
  border: 2px solid rgb(255 84 104);
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
```

```css
.positioned {
  position: sticky;
  top: 30px;
  left: 30px;
}
```

{{ EmbedLiveSample('Sticky_positioning', '100%', 200) }}

> [!NOTE]
> Um mehr über Positionierung zu erfahren, sehen Sie sich unseren [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning)-Artikel an.

## Tabellenlayout

Beim Betrachten des Quellcodes älterer Websites könnten Sie entdecken, dass Tabellen für die Gestaltung von Formularen verwendet wurden. HTML-Tabellen sollten für die Anzeige tabellarischer Daten reserviert sein. Die Verwendung von Tabellen für andere Zwecke als tabellarische Daten hat viele Probleme: Tabellenlayouts sind unflexibel, sehr markuplastig, schwer zu debuggen und semantisch falsch (z.B. haben Benutzer von Bildschirmlesern Probleme, sich in Tabellenlayouts zurechtzufinden).

Das Aussehen einer Tabelle auf einer Webseite beim Verwenden von Tabellen-Markup liegt an einer Reihe von CSS-Eigenschaften, die ihr Layout definieren. Dieselben Eigenschaften können auch genutzt werden, um Elemente, die keine Tabellen sind, anzuordnen, was manchmal als "Verwendung von CSS-Tables" beschrieben wird. Das folgende Beispiel zeigt eine solche Verwendung.

Schauen wir uns ein Beispiel an. Zuerst ein einfaches Markup, das ein HTML-Formular erstellt. Jedes Eingabeelement hat ein Label. Wir haben auch eine Beschriftung innerhalb eines Absatzes eingefügt; eine andere Option wäre die Verwendung eines {{htmlelement("fieldset")}} mit einer {{htmlelement("legend")}}. Jedes Label-/Input-Paar ist zu Layoutzwecken in einem {{htmlelement("div")}} eingerahmt.

```html
<form>
  <p>First of all, tell us your name and age.</p>
  <div>
    <label for="fname">First name:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Last name:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Age:</label>
    <input type="text" id="age" />
  </div>
</form>
```

Was das CSS betrifft, ist es meistens recht gewöhnlich, außer für die Verwendungen der {{cssxref("display")}}-Eigenschaft. Die {{htmlelement("form")}}, {{htmlelement("div")}}s und {{htmlelement("label")}}s und {{htmlelement("input")}}s wurden angewiesen, sich wie eine Tabelle, Tabellreihe und Tabellzellen entsprechend zu verhalten. Grundsätzlich verhalten sie sich wie HTML-Tabellen-Markup, was dazu führt, dass sich die Labels und Inputs schön ausrichten. Alles, was wir dann noch tun müssen, ist etwas Größe, Rand usw. hinzuzufügen, damit alles etwas besser aussieht, und fertig sind wir.

Sie werden feststellen, dass der Überschrift-Absatz `display: table-caption;` gegeben wurde, damit er sich wie eine Tabellen-{{htmlelement("caption")}} verhält, und `caption-side: bottom;`, um der Beschriftung zu sagen, dass sie unten an der Tabelle für Stylingzwecke sitzen soll, auch wenn das Markup vor den `<input>`-Elementen im Quellcode ist. Dies erlaubt eine nette Flexibilität.

```css
html {
  font-family: sans-serif;
}

form {
  display: table;
  margin: 0 auto;
}

form div {
  display: table-row;
}

form label,
form input {
  display: table-cell;
  margin-bottom: 10px;
}

form label {
  width: 200px;
  padding-right: 5%;
  text-align: right;
}

form input {
  width: 300px;
}

form p {
  display: table-caption;
  caption-side: bottom;
  width: 300px;
  color: #999;
  font-style: italic;
}
```

Dies ergibt das folgende Ergebnis:

{{ EmbedLiveSample('Table_layout', '100%', '200') }}

Sie können dieses Beispiel auch live unter [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/box-model-recap/css-tables-example.html).)

> [!NOTE]
> Tabellenlayout wird im Gegensatz zu den anderen Themen dieser Seite nicht weiter in diesem Modul behandelt. Verwenden Sie stattdessen [Grid Layout](#grid_layout).

## Mehrspaltenlayout

Das Mehrspaltenlayout-CSS-Modul bietet uns eine Möglichkeit, Inhalte in Spalten anzuordnen, ähnlich wie Text in einer Zeitung fließt. Während das Lesen von oben nach unten in Spalten im Web-Kontext aufgrund der Notwendigkeit, hoch und runter zu scrollen, weniger nützlich ist, kann das Anordnen von Inhalten in Spalten dennoch eine nützliche Technik sein.

Um einen Block in einen Mehrspalten-Container zu verwandeln, verwenden wir entweder die {{cssxref("column-count")}}-Eigenschaft, die dem Browser angibt, _wie viele_ Spalten wir haben möchten, oder die {{cssxref("column-width")}}-Eigenschaft, die dem Browser sagt, den Container mit so vielen Spalten wie möglich einer _angegebenen Breite_ zu füllen.

Im untenstehenden Beispiel beginnen wir mit einem HTML-Block innerhalb eines umgebenden `<div>`-Elements mit einer Klasse `container`.

```html
<div class="container">
  <h1>Multi-column Layout</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta.
  </p>

  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem.
  </p>

  <p>
    Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris
    ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus
    viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum
    sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
    mus.
  </p>
</div>
```

Wir verwenden eine `column-width` von 200 Pixeln bei diesem Container, was den Browser dazu veranlasst, so viele 200 Pixel breite Spalten zu erstellen, wie passen. Der restliche Platz zwischen den Spalten wird geteilt.

```css hidden
body {
  max-width: 800px;
  margin: 0 auto;
}
```

```css
.container {
  column-width: 200px;
}
```

{{ EmbedLiveSample('Multi-column_layout', '100%', 250) }}

## Zusammenfassung

Dieser Artikel hat eine kurze Zusammenfassung aller Layout-Technologien gegeben, die Sie kennen sollten. Lesen Sie weiter für mehr Informationen über jede einzelne Technologie!

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}
