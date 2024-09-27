---
title: Einführung in CSS-Layout
slug: Learn/CSS/CSS_layout/Introduction
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

In diesem Artikel werden einige der CSS-Layout-Funktionen, die wir bereits in früheren Modulen behandelt haben, wie verschiedene {{cssxref("display")}}-Werte, zusammengefasst und einige der Konzepte vorgestellt, die wir in diesem Modul behandeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ihnen einen Überblick über CSS-Seitenlayouttechniken zu geben. Jede Technik kann in nachfolgenden Tutorials im Detail gelernt werden.
      </td>
    </tr>
  </tbody>
</table>

CSS-Seitenlayouttechniken ermöglichen es uns, die Position von Elementen auf einer Webseite in Bezug auf verschiedene Faktoren zu steuern: ihre Standardposition im normalen Layoutfluss, die anderen Elemente um sie herum, ihren übergeordneten Container und das Hauptansichtsfenster/Fenster. Die Seitenlayouttechniken, die wir in diesem Modul im Detail behandeln werden, sind:

- Normal Flow
- Die {{cssxref("display")}}-Eigenschaft
- Flexbox
- Grid
- Floats
- Positionierung
- Tabellenlayout
- Mehrspaltenlayout

Jede Technik hat ihre Verwendungszwecke, Vorteile und Nachteile. Keine Technik ist dafür gedacht, isoliert verwendet zu werden. Wenn Sie verstehen, wofür jede Layoutmethode gedacht ist, sind Sie in einer guten Position, um zu verstehen, welche Methode für welche Aufgabe am besten geeignet ist.

## Normal Flow

Normal Flow ist die Art und Weise, wie der Browser HTML-Seiten standardmäßig anzeigt, wenn Sie nichts tun, um das Seitenlayout zu steuern. Schauen wir uns ein kurzes HTML-Beispiel an:

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

Beachten Sie, wie das HTML in der genauen Reihenfolge angezeigt wird, in der es im Quellcode erscheint, mit übereinander gestapelten Elementen — der erste Absatz gefolgt von der ungeordneten Liste, gefolgt vom zweiten Absatz.

Die Elemente, die eines unter dem anderen erscheinen, werden als **Block**-Elemente beschrieben, im Gegensatz zu **Inline**-Elementen, die nebeneinander erscheinen wie die einzelnen Wörter in einem Absatz.

> [!NOTE]
> Die Richtung, in der die Inhalte von Block-Elementen angeordnet sind, wird als Blockrichtung bezeichnet. Die Blockrichtung verläuft vertikal in einer Sprache wie Englisch, die einen horizontalen Schreibmodus hat. In jeder Sprache mit einem vertikalen Schreibmodus, wie Japanisch, würde sie horizontal verlaufen. Die entsprechende Inline-Richtung ist die Richtung, in der Inline-Inhalte (wie ein Satz) verlaufen würden.

Für viele der Elemente auf Ihrer Seite wird der Normal Flow genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der Ihnen in CSS zur Verfügung stehenden Werkzeuge ändern. Mit einem gut strukturierten HTML-Dokument zu beginnen ist sehr wichtig, da Sie mit der Weise arbeiten können, wie Dinge standardmäßig angeordnet sind, anstatt dagegen anzukämpfen.

Die Methoden, die in CSS geändert werden können, wie Elemente angeordnet sind, sind:

- **Die {{cssxref("display")}}-Eigenschaft** — Standardwerte wie `block`, `inline` oder `inline-block` können ändern, wie Elemente im Normal Flow verhalten, z.B. indem ein Block-Element wie ein Inline-Element verhalten wird (siehe [Arten von CSS-Boxen](/de/docs/Learn/CSS/Building_blocks/The_box_model#block_and_inline_boxes) für weitere Informationen). Wir haben auch ganze Layoutmethoden, die über spezifische `display`-Werte aktiviert werden, zum Beispiel [CSS grid](/de/docs/Learn/CSS/CSS_layout/Grids) und [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox), die ändern, wie Kindelemente innerhalb ihrer Eltern angeordnet sind.
- **Floats** — Das Anwenden eines {{cssxref("float")}}-Wertes wie `left` kann dazu führen, dass Block-Elemente an einer Seite eines Elements entlang umwickeln, ähnlich wie Bilder manchmal Text um sich herum in Magazinlayouts haben.
- **Die {{cssxref("position")}}-Eigenschaft** — Erlaubt es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen präzise zu steuern. `static`-Positionierung ist die Standardeinstellung im Normal Flow, aber Sie können dazu führen, dass Elemente anders angeordnet sind, indem Sie andere Werte verwenden, zum Beispiel, indem Sie sie auf die Oberseite des Browseransichtsfensters fixieren.
- **Tabellenlayout** — Funktionen, die zum Stylen von Teilen einer HTML-Tabelle entwickelt wurden, können auf Nicht-Tabellen-Elemente mit `display: table` und zugehörigen Eigenschaften verwendet werden.
- **Mehrspaltenlayout** — Die [Multicolumn layout](/de/docs/Web/CSS/CSS_multicol_layout)-Eigenschaften können den Inhalt eines Blocks in Spalten aufteilen, wie Sie es vielleicht in einer Zeitung sehen.

## Die display-Eigenschaft

Die Hauptmethoden zum Erreichen von Seitenlayout in CSS beinhalten alle das Festlegen von Werten für die `display`-Eigenschaft. Diese Eigenschaft erlaubt es uns, die Standardanzeigeweise von etwas zu ändern. Alles im Normal Flow hat einen Standardwert für `display`; d.h., eine Standardweise, wie Elemente sich verhalten. Zum Beispiel ist die Tatsache, dass Absätze in Englisch untereinander angezeigt werden, weil sie mit `display: block` formatiert sind. Wenn Sie im Absatz einen Link um etwas Text erstellen, bleibt dieser Link inline mit dem Rest des Textes und bricht nicht in eine neue Zeile. Dies liegt daran, dass das {{htmlelement("a")}}-Element standardmäßig `display: inline` ist.

Sie können dieses Standardanzeigeverhalten ändern. Zum Beispiel ist das {{htmlelement("li")}}-Element standardmäßig `display: block`, was bedeutet, dass Listenelemente in unserem englischen Dokument untereinander angezeigt werden. Wenn wir den Anzeigewert in `inline` ändern würden, würden sie nebeneinander angezeigt, ähnlich wie Wörter in einem Satz. Die Tatsache, dass Sie den Wert von `display` für jedes Element ändern können, bedeutet, dass Sie HTML-Elemente wegen ihrer semantischen Bedeutung auswählen können, ohne sich darum zu sorgen, wie sie aussehen werden. Das Aussehen ist etwas, das Sie ändern können.

Zusätzlich zur Möglichkeit, die Standardpräsentation von `block` zu `inline` und umgekehrt zu ändern, gibt es einige umfangreichere Layoutmethoden, die als ein Wert von `display` beginnen. Wenn Sie diese jedoch verwenden, müssen Sie in der Regel zusätzliche Eigenschaften aktivieren. Die zwei Werte, die für unsere Diskussion zurAnordnung am wichtigsten sind, sind `display: flex` und `display: grid`.

## Flexbox

Flexbox ist der Kurzname für das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-CSS-Modul, das es uns erleichtern soll, Dinge in einer Dimension zu layouten — entweder als Reihe oder als Spalte. Um Flexbox zu verwenden, wenden Sie `display: flex` auf das übergeordnete Element der Elemente an, die Sie layouten möchten; alle direkten Kinder werden dann zu _Flexelementen_. Wir können dies in einem einfachen Beispiel sehen.

### Festlegen von display: flex

Das folgende HTML-Markup gibt uns ein umschließendes Element mit der Klasse `wrapper`, in dem drei {{htmlelement("div")}}-Elemente enthalten sind. Standardmäßig würden diese als Block-Elemente angezeigt, das heißt untereinander in unserem englischen Dokument.

Wenn wir jedoch `display: flex` auf das übergeordnete Element anwenden, ordnen sich die drei Elemente nun in Spalten an. Dies liegt daran, dass sie zu _Flexelementen_ werden und von einigen Anfangswerten beeinflusst werden, die Flexbox auf den Flex-Container setzt. Sie werden in einer Reihe angezeigt, weil die Eigenschaft {{cssxref("flex-direction")}} des übergeordneten Elements einen Anfangswert von `row` hat. Sie scheinen sich in der Höhe zu strecken, weil die Eigenschaft {{cssxref("align-items")}} ihres übergeordneten Elements einen Anfangswert von `stretch` hat. Dies bedeutet, dass sich die Elemente auf die Höhe des Flex-Containers strecken, die in diesem Fall durch das höchste Element definiert wird. Die Elemente reihen sich alle am Anfang des Containers auf und lassen jeden zusätzlichen Platz am Ende der Reihe.

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

### Festlegen der flex-Eigenschaft

Zusätzlich zu den Eigenschaften, die auf einen _Flex-Container_ angewendet werden können, gibt es auch Eigenschaften, die auf _Flexelemente_ angewendet werden können. Diese Eigenschaften können unter anderem die Art und Weise ändern, wie Elemente sich _flexen_, und es ihnen ermöglichen, sich je nach verfügbarem Platz zu erweitern oder zu verkleinern.

Als einfaches Beispiel können wir die {{cssxref("flex")}}-Eigenschaft auf alle unsere Kinderelemente anwenden und ihr einen Wert von `1` geben. Dies bewirkt, dass sich alle Elemente ausdehnen und den Container füllen, anstatt Platz am Ende zu lassen. Wenn mehr Platz vorhanden ist, werden die Elemente breiter; wenn weniger Platz vorhanden ist, werden sie schmaler. Darüber hinaus, wenn Sie ein weiteres Element zum Markup hinzufügen, werden die anderen Elemente alle kleiner, um Platz dafür zu schaffen; die Elemente zusammen nehmen weiterhin den gesamten Platz ein.

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
> Dies war eine sehr kurze Einführung in das, was mit Flexbox möglich ist. Um mehr zu erfahren, siehe unseren [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Artikel.

## Grid Layout

Während Flexbox für ein Eindimensionales Layout ausgelegt ist, ist das Grid-Layout für zwei Dimensionen ausgelegt — um Dinge in Reihen und Spalten auszurichten.

### Festlegen von display: grid

Ähnlich wie bei Flexbox aktivieren wir das Grid-Layout mit seinem spezifischen Display-Wert — `display: grid`. Das untenstehende Beispiel verwendet ein ähnliches Markup wie das Flex-Beispiel, mit einem Container und einigen Kinderelementen. Zusätzlich zur Verwendung von `display: grid` definieren wir auch einige Reihen- und Spalten- _Spuren_ für das übergeordnete Element mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Wir haben drei Spalten zu je `1fr` sowie zwei Reihen von `100px` definiert. Wir müssen keine Regeln für die Kinderelemente festlegen; sie werden automatisch in die Zellen unseres erstellten Gitters platziert.

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

### Platzieren von Elementen im Gitter

Sobald Sie ein Gitter haben, können Sie Ihre Elemente explizit darauf platzieren, anstatt sich auf das oben gesehene automatische Platzierungsverhalten zu verlassen. In dem nächsten Beispiel unten haben wir das gleiche Gitter definiert, aber diesmal mit drei Kinderelementen. Wir haben den Anfangs- und Endlinien jedes Elements mit den Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} festgelegt. Dies führt dazu, dass die Elemente mehrere Spuren überspannen.

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
> Diese zwei Beispiele zeigen nur eine kleine Probe der Stärke von Grid-Layout. Um mehr zu erfahren, siehe unseren [Grid Layout](/de/docs/Learn/CSS/CSS_layout/Grids)-Artikel.

Der Rest dieses Leitfadens behandelt andere Layoutmethoden, die weniger wichtig für das Hauptlayout Ihrer Seite sind, aber dennoch helfen, spezifische Aufgaben zu erreichen. Wenn Sie die Natur jeder Layoutaufgabe verstehen, werden Sie bald feststellen, dass es oft klar ist, welcher Layouttyp für eine bestimmte Komponente Ihres Designs am besten geeignet ist.

## Floats

Das Floaten eines Elements ändert das Verhalten dieses Elements und der Block-Elemente, die ihm im Normal Flow folgen. Das gefloatete Element wird nach links oder rechts verschoben und aus dem normalen Fluss entfernt, und der umgebende Inhalt _floatet_ um es herum.

Die {{cssxref("float")}}-Eigenschaft hat vier mögliche Werte:

- `left` — Floatet das Element nach links.
- `right` — Floatet das Element nach rechts.
- `none` — Gibt an, dass überhaupt kein Float stattfinden soll. Dies ist der Standardwert.
- `inherit` — Gibt an, dass der Wert der `float`-Eigenschaft vom übergeordneten Element des Elements geerbt werden soll.

Im Beispiel unten floaten wir ein `<div>`-Element nach links und geben ihm einen {{cssxref("margin")}} nach rechts, um den umgebenden Text davon abzuhalten. Dies gibt uns den Effekt von Text, der um das umrahmte Element herumfließt, und ist das meiste, was Sie über Floats wissen müssen, wie sie im modernen Webdesign verwendet werden.

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
> Floats werden vollständig in unserer Lektion zu den [float and clear](/de/docs/Learn/CSS/CSS_layout/Floats)-Eigenschaften erklärt. Vor Techniken wie Flexbox und Grid-Layout wurden Floats als Methode zum Erstellen von Spaltenlayouts verwendet. Möglicherweise stoßen Sie immer noch auf diese Methoden im Web; wir werden diese in der Lektion zu [Veraltete Layoutmethoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) behandeln.

## Positionierungstechniken

Positionierung ermöglicht es Ihnen, ein Element von der Stelle zu verschieben, an der es im normalen Fluss positioniert wäre, an eine andere Stelle. Positionierung ist keine Methode, um die Hauptlayouts einer Seite zu erstellen; sie dient mehr dazu, die Position bestimmter Elemente auf einer Seite zu verwalten und feinabzustimmen.

Es gibt jedoch nützliche Techniken, um spezifische Layoutmuster zu erzielen, die sich auf die {{cssxref("position")}}-Eigenschaft verlassen. Das Verständnis von Positionierung hilft auch, den normalen Fluss zu verstehen und was es bedeutet, ein Element aus dem normalen Fluss zu entfernen.

Es gibt fünf Arten von Positionierung, die Sie kennen sollten:

- **Statische Positionierung** ist der Standard, den jedes Element bekommt. Es bedeutet einfach "setze das Element in seine normale Position im Dokumentlayoutfluss – nichts Besonderes hier".
- **Relative Positionierung** erlaubt es Ihnen, die Position eines Elements auf der Seite zu ändern, indem es relativ zu seiner Position im normalen Fluss bewegt wird, sowie es sich mit anderen Elementen auf der Seite überlappen zu lassen.
- **Absolute Positionierung** bewegt ein Element vollständig aus dem normalen Layoutfluss der Seite und positioniert es stattdessen unter Verwendung von Offsets vom Rand eines enthaltenden Blocks. Von dort können Sie es an einer Position relativ zu den Rändern seines nächsten positionierten Vorfahren fixieren (was `<html>` wird, wenn keine anderen Vorfahren positioniert sind). Dies ist nützlich für die Erstellung komplexer Layouteffekte, wie tabellarische Boxen, bei denen verschiedene Inhaltsbereiche übereinander liegen und nach Bedarf angezeigt und verborgen werden, oder Informationsbereiche, die standardmäßig außerhalb des Bildschirms liegen, aber mit einer Steuertaste auf dem Bildschirm gleiten können.
- **Feste Positionierung** ist sehr ähnlich zur absoluten Positionierung, außer dass es ein Element relativ zum Browser-Ansichtsfenster und nicht zu einem anderen Element fixiert. Dies ist nützlich, um Effekte wie ein dauerhaftes Navigationsmenü zu erstellen, das immer an der gleichen Stelle auf dem Bildschirm bleibt, während der Rest des Inhalts darunter scrollt.
- **Sticky Positionierung** ist eine neuere Positionierungsmethode, die ein Element wie `position: relative` verhält, bis es einen definierten Offset vom Ansichtsfenster erreicht, worauf es genauso wie position: fixed verhält.

### Einfaches Positionierungsbeispiel

Um mit diesen Seitenlayouttechniken vertraut zu werden, zeigen wir Ihnen ein paar schnelle Beispiele. Unsere Beispiele werden alle dieselbe HTML-Struktur haben (eine Überschrift gefolgt von drei Absätzen), die wie folgt aussieht:

```html
<h1>Positioning</h1>

<p>I am a basic block level element.</p>
<p class="positioned">I am a basic block level element.</p>
<p>I am a basic block level element.</p>
```

Dieses HTML wird standardmäßig mit folgendem CSS gestaltet:

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

Das gerenderte Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample('Simple_positioning_example', '100%', 300) }}

### Relative Positionierung

Relative Positionierung ermöglicht es Ihnen, ein Element von seiner Standardposition im Normal Flow zu verschieben. Dies bedeutet, dass Sie eine Aufgabe wie das Verschieben eines Symbols nach unten durchführen könnten, damit es sich mit einem Textlabel ausrichtet. Um dies zu tun, könnten wir die folgende Regel hinzufügen, um relative Positionierung hinzuzufügen:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Hier geben wir unserem mittleren Absatz einen {{cssxref("position")}}-Wert von `relative`. Dies tut allein nichts, also fügen wir auch {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften hinzu. Diese dienen dazu, das betroffene Element nach unten und rechts zu verschieben. Dies könnte das Gegenteil von dem zu sein, was Sie erwarten, aber Sie müssen sich vorstellen, dass das Element auf seiner linken und oberen Seite gedrückt wird, was dazu führt, dass es sich nach rechts und unten bewegt.

Das Hinzufügen dieses Codes wird das folgende Ergebnis geben:

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

Absolute Positionierung wird verwendet, um ein Element vollständig aus dem Normalfluss zu entfernen und stattdessen mit Offsets von den Rändern eines enthaltenden Blocks zu positionieren.

Zurück zu unserem ursprünglichen nicht positionierten Beispiel könnten wir die folgende CSS-Regel hinzufügen, um absolute Positionierung zu implementieren:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

Hier geben wir unserem mittleren Absatz einen {{cssxref("position")}}-Wert von `absolute` und die gleichen {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften wie zuvor. Das Hinzufügen dieses Codes erzeugt das folgende Ergebnis:

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

Dies ist sehr unterschiedlich! Das positionierte Element wurde jetzt vollständig vom Rest des Seitenlayouts getrennt und liegt darüber. Die anderen beiden Absätze sitzen jetzt zusammen, als ob ihr positionierter Geschwister nicht existiert. Die {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften haben eine andere Wirkung auf absolute positionierte Elemente als bei relativ positionierten Elementen. In diesem Fall wurden die Offsets von der oberen und linken Seite der Seite berechnet. Es ist möglich, das übergeordnete Element zu ändern, das zu diesem Container wird, und wir werden uns das in der Lektion zur [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning) ansehen.

### Feste Positionierung

Feste Positionierung entfernt unser Element aus dem Dokumentfluss auf die gleiche Weise wie absolute Positionierung. Allerdings werden die Offsets nicht vom Container angewendet, sondern vom Ansichtsfenster. Da das Element relativ zum Ansichtsfenster fest bleibt, können wir Effekte wie ein Menü erstellen, das während des Scrollens auf der Seite fest bleibt.

Für dieses Beispiel enthält unser HTML drei Absätze Text, damit wir durch die Seite scrollen können, sowie ein Kästchen mit der Eigenschaft `position: fixed`.

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

Sticky Positionierung ist die letzte Positionierungsmethode, die uns zur Verfügung steht. Sie mischt relative Positionierung mit fester Positionierung. Wenn ein Element `position: sticky` hat, scrollt es im Normalfluss, bis es auf durch uns definierte Offsets vom Ansichtsfenster trifft. An diesem Punkt wird es "festgehalten", als ob `position: fixed` angewendet wurde.

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
> Um mehr über Positionierung zu erfahren, siehe unseren [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning)-Artikel.

## Tabellenlayout

Wenn Sie sich den Quellcode älterer Websites ansehen, können Sie feststellen, dass Tabellen zur Gestaltung von Formularen verwendet wurden. HTML-Tabellen sollten für die Anzeige tabellarischer Daten reserviert werden. Die Verwendung von Tabellen für andere Zwecke als tabellarische Daten bringt viele Probleme mit sich: Tabellenlayouts sind unflexibel, sehr schwer hinsichtlich des Markups, schwer zu debuggen und semantisch falsch (z.B. haben Bildschirmleser-Benutzer Probleme beim Navigieren durch Tabellenlayouts).

Das Aussehen einer Tabelle auf einer Webseite bei Verwendung von Tabellen-Markup ist auf eine Reihe von CSS-Eigenschaften zurückzuführen, die ihr Layout definieren. Diese Eigenschaften können auch zur Gestaltung von Elementen verwendet werden, die keine Tabellen sind, eine Verwendung, die manchmal als "Verwendung von CSS-Tabellen" beschrieben wird. Das folgende Beispiel zeigt eine solche Verwendung.

Schauen wir uns ein Beispiel an. Zuerst ein einfaches Markup, das ein HTML-Formular erstellt. Jedes Eingabeelement hat ein Label. Wir haben auch eine Beschriftung in einem Absatz eingefügt; eine andere Möglichkeit ist die Verwendung eines {{htmlelement("fieldset")}} mit einer {{htmlelement("legend")}}. Jedes Label/Eingabe-Paar ist für Layoutzwecke in einem {{htmlelement("div")}} eingeschlossen.

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

Was das CSS betrifft, ist das meiste davon ziemlich gewöhnlich, abgesehen von den Verwendungen der {{cssxref("display")}}-Eigenschaft. Das {{htmlelement("form")}}-, die {{htmlelement("div")}}s, und die {{htmlelement("label")}}s und {{htmlelement("input")}}s wurden angewiesen, sich wie eine Tabelle, Tabellenzeilen und Tabellenzellen zu verhalten. Sie verhalten sich im Wesentlichen wie HTML-Tabellen-Markup, verursachen, dass sich die Labels und Eingaben standardmäßig schön ausrichten. Alles, was wir dann tun müssen, ist, ein wenig Größe, Ränder usw. hinzuzufügen, damit alles ein wenig ansprechender aussieht, und schon sind wir fertig.

Sie werden bemerken, dass der Beschriftungsabsatz `display: table-caption;` erhalten hat, was ihn wie eine Tabellencaption agieren lässt, und `caption-side: bottom;`, um anzugeben, dass die Caption unten an der Tabelle sitzt, auch wenn das Markup vor den `<input>`-Elementen im Quellcode steht. Dies ermöglicht eine schöne Flexibilität.

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

Dies gibt uns das folgende Resultat:

{{ EmbedLiveSample('Table_layout', '100%', '200') }}

Dieses Beispiel können Sie auch live unter [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) sehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/box-model-recap/css-tables-example.html)).

> [!NOTE]
> Tabellenlayout, im Gegensatz zu den anderen Themen auf dieser Seite, wird in diesem Modul nicht weiter behandelt. Verwenden Sie stattdessen das [Grid-Layout](#grid_layout).

## Mehrspaltenlayout

Das Mehrspaltenlayout-CSS-Modul bietet uns eine Möglichkeit, Inhalt in Spalten anzuordnen, ähnlich wie Text in einer Zeitung fließt. Während das Lesen von oben nach unten in Spalten in einem Web-Kontext weniger nützlich ist, aufgrund der Nutzer, die nach oben und unten scrollen müssen, kann die Anordnung von Inhalten in Spalten dennoch eine nützliche Technik sein.

Um einen Block in einen Mehrspalten-Container zu verwandeln, verwenden wir entweder die {{cssxref("column-count")}}-Eigenschaft, die dem Browser mitteilt, _wie viele_ Spalten wir haben möchten, oder die {{cssxref("column-width")}}-Eigenschaft, die dem Browser anweist, den Container mit so vielen Spalten wie möglich von einer _bestimmten Breite_ zu füllen.

Im folgenden Beispiel haben wir ein HTML-Block innerhalb eines umschließenden `<div>`-Elements mit einer Klasse von `container`.

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

Wir verwenden eine `column-width` von 200 Pixeln auf diesem Container, was den Browser veranlasst, so viele 200-Pixel-Spalten wie möglich zu erstellen. Der verbleibende Platz zwischen den Spalten wird geteilt.

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

Dieser Artikel hat eine kurze Zusammenfassung aller Layout-Technologien gegeben, die Sie kennen sollten. Lesen Sie weiter für weitere Informationen zu jeder einzelnen Technologie!

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}
