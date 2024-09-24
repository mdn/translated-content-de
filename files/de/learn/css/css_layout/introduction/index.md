---
title: Einführung in das CSS-Layout
slug: Learn/CSS/CSS_layout/Introduction
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}

Dieser Artikel wird einige der CSS-Layout-Features rekapitulieren, die wir bereits in früheren Modulen angesprochen haben, wie verschiedene {{cssxref("display")}}-Werte, und einige der Konzepte einführen, die wir in diesem Modul behandeln werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Die Grundlagen von HTML (Studium von
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und ein Verständnis davon, wie CSS funktioniert (Studium von
        <a href="/de/docs/Learn/CSS/First_steps">Einführung in CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ihnen einen Überblick über CSS-Layout-Techniken zu geben. Jede Technik
        kann in folgenden Tutorials ausführlicher gelernt werden.
      </td>
    </tr>
  </tbody>
</table>

CSS-Layout-Techniken ermöglichen es uns, Elemente auf einer Webseite zu platzieren und zu kontrollieren, wo sie sich relativ zu den folgenden Faktoren befinden: ihrer Standardposition im normalen Layoutfluss, den anderen umgebenden Elementen, ihrem übergeordneten Container und dem Hauptansichtsfenster/-fenster. Die Layout-Techniken, die wir in diesem Modul ausführlicher behandeln werden, sind:

- Normaler Fluss
- Die {{cssxref("display")}}-Eigenschaft
- Flexbox
- Grid
- Floats
- Positionierung
- Tabellenlayout
- Mehrspalten-Layout

Jede Technik hat ihre Anwendungen, Vorteile und Nachteile. Keine Technik ist dafür vorgesehen, isoliert verwendet zu werden. Wenn Sie verstehen, wofür jede Layoutmethode ausgelegt ist, werden Sie in der Lage sein, zu entscheiden, welche Methode für jede Aufgabe am besten geeignet ist.

## Normaler Fluss

Normaler Fluss ist die Art und Weise, wie der Browser HTML-Seiten standardmäßig anordnet, wenn Sie nichts tun, um das Seitenlayout zu steuern. Schauen wir uns ein schnelles HTML-Beispiel an:

```html
<p>Ich liebe meine Katze.</p>

<ul>
  <li>Katzenfutter kaufen</li>
  <li>Übung</li>
  <li>Freund aufmuntern</li>
</ul>

<p>Das Ende!</p>
```

Standardmäßig wird der Browser diesen Code wie folgt anzeigen:

{{ EmbedLiveSample('Normal_flow', '100%', 200) }}

Beachten Sie, wie das HTML genau in der Reihenfolge angezeigt wird, in der es im Quelltext erscheint, mit Elementen, die übereinander gestapelt sind — der erste Absatz, gefolgt von der ungeordneten Liste und dann dem zweiten Absatz.

Die Elemente, die untereinander erscheinen, werden als **Blockelemente** bezeichnet, im Gegensatz zu **Inline-Elementen**, die nebeneinander erscheinen, wie die einzelnen Wörter in einem Absatz.

> [!NOTE]
> Die Richtung, in der Blockelementinhalte angeordnet sind, wird als Blockrichtung beschrieben. Die Blockrichtung verläuft vertikal in einer Sprache wie Englisch, die einen horizontalen Schreibmodus hat. Sie würde horizontal verlaufen in jeder Sprache mit einem vertikalen Schreibmodus, wie Japanisch. Die entsprechende Inline-Richtung ist die Richtung, in der Inline-Inhalte (wie ein Satz) verlaufen würden.

Bei vielen Elementen auf Ihrer Seite wird der normale Fluss genau das Layout erstellen, das Sie benötigen. Für komplexere Layouts müssen Sie jedoch dieses Standardverhalten mit einigen der in CSS verfügbaren Werkzeuge ändern. Mit einem gut strukturierten HTML-Dokument zu beginnen, ist sehr wichtig, da Sie dann mit der Art und Weise arbeiten können, wie Dinge standardmäßig ausgelegt sind, anstatt sich dagegen zu wehren.

Die Methoden, die in CSS ändern können, wie Elemente angeordnet sind, sind:

- **Die {{cssxref("display")}}-Eigenschaft** — Standardwerte wie `block`, `inline` oder `inline-block` können ändern, wie Elemente sich im normalen Fluss verhalten, zum Beispiel indem ein Block-Level-Element wie ein Inline-Level-Element verhält (siehe [Typen von CSS-Boxen](/de/docs/Learn/CSS/Building_blocks/The_box_model#block_and_inline_boxes) für mehr Informationen). Zudem gibt es ganze Layoutmethoden, die durch spezifische `display`-Werte aktiviert werden, zum Beispiel [CSS-Grid](/de/docs/Learn/CSS/CSS_layout/Grids) und [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox), die ändern, wie Kinderelemente innerhalb ihrer Eltern angeordnet sind.
- **Floats** — Das Anwenden eines {{cssxref("float")}}-Wertes wie `left` kann dazu führen, dass Block-Level-Elemente entlang einer Seite eines Elements umlaufen, ähnlich wie Bilder manchmal mit umlaufendem Text in Magazinlayouts erscheinen.
- **Die {{cssxref("position")}}-Eigenschaft** — Ermöglicht es Ihnen, die Platzierung von Boxen innerhalb anderer Boxen genau zu steuern. 'Static'-Positionierung ist die Standardeinstellung im normalen Fluss, aber Sie können Elemente anders anordnen, indem Sie andere Werte verwenden, zum Beispiel, indem Sie sie fixiert am oberen Rand des Browseransichtsfensters platzieren.
- **Tabellenlayout** — Funktionen, die für das Styling von Teilen einer HTML-Tabelle gedacht sind, können auf Nicht-Tabellen-Elemente mit `display: table` und zugehörigen Eigenschaften angewendet werden.
- **Mehrspalten-Layout** — Die [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)-Eigenschaften können dazu führen, dass der Inhalt eines Blocks in Spalten ausgelegt wird, wie Sie es vielleicht in einer Zeitung sehen würden.

## Die display-Eigenschaft

Die Hauptmethoden zur Erreichung eines Seitenlayouts in CSS beinhalten alle das Festlegen von Werten für die `display`-Eigenschaft. Diese Eigenschaft ermöglicht es uns, die Standarddarstellung von Elementen zu ändern. Alles im normalen Fluss hat einen Standardwert für `display`, das heißt, eine Standardweise, wie Elemente eingestellt sind, sich zu verhalten. Zum Beispiel wird der Fakt, dass Absätze in Englisch untereinander dargestellt werden, dadurch verursacht, dass sie mit `display: block` gestylt sind. Wenn Sie ein Link um Text innerhalb eines Absatzes erstellen, bleibt dieser Link inline mit dem restlichen Text und bricht nicht in eine neue Zeile. Dies ist, weil das {{htmlelement("a")}}-Element standardmäßig `display: inline` ist.

Sie können dieses Standardanzeigeverhalten ändern. Zum Beispiel ist das {{htmlelement("li")}}-Element standardmäßig `display: block`, was bedeutet, dass Listenelemente untereinander in unserem englischen Dokument angezeigt werden. Wenn wir den Anzeige-Wert zu `inline` ändern würden, würden sie nebeneinander erscheinen, so wie Wörter es in einem Satz tun würden. Der Fakt, dass Sie den Wert von `display` für jedes Element ändern können, bedeutet, dass Sie HTML-Elemente für ihre semantische Bedeutung auswählen können, ohne sich um ihr Aussehen zu kümmern. Das Aussehen ist etwas, das Sie ändern können.

Zusätzlich zur Möglichkeit, die Standardpräsentation zu ändern, indem man ein Element von `block` zu `inline` oder umgekehrt ändert, gibt es einige detailliertere Layoutmethoden, die als Wert von `display` beginnen. Wenn Sie diese verwenden, müssen Sie jedoch im Allgemeinen zusätzliche Eigenschaften aufrufen. Die beiden wichtigsten Werte für unsere Diskussion über Layout sind `display: flex` und `display: grid`.

## Flexbox

Flexbox ist der Kurzname für das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-CSS-Modul, das es uns erleichtert, Dinge in einer Dimension anzuordnen — entweder als Reihe oder als Spalte. Verwenden Sie Flexbox, indem Sie `display: flex` auf das übergeordnete Element der Elemente anwenden, die Sie anordnen möchten; alle seine direkten Kinder werden dann zu _Flex-Items_. Wir können dies in einem einfachen Beispiel sehen.

### Display: flex setzen

Der HTML-Markup unten gibt uns ein enthaltendes Element mit einer Klasse von `wrapper`, in dem sich drei {{htmlelement("div")}}-Elemente befinden. Standardmäßig würden diese als Blockelemente angezeigt werden, das heißt, untereinander in unserem englischen Sprachdokument.

Wenn wir jedoch `display: flex` auf das übergeordnete Element anwenden, ordnen sich die drei Elemente nun als Spalten an. Dies liegt daran, dass sie zu _Flex-Items_ geworden sind und von einigen Anfangswerten beeinflusst werden, die Flexbox auf das Flex-Container-Element setzt. Sie werden in einer Reihe angezeigt, weil die Eigenschaft {{cssxref("flex-direction")}} des übergeordneten Elements einen Anfangswert von `row` hat. Sie scheinen alle in der Höhe zu strecken, weil die Eigenschaft {{cssxref("align-items")}} ihres übergeordneten Elements einen Anfangswert von `stretch` hat. Dies bedeutet, dass die Elemente sich bis zur Höhe des Flex-Containers strecken, der in diesem Fall durch das höchste Element definiert wird. Alle Elemente richten sich am Anfang des Containers aus und lassen den verbleibenden Platz am Ende der Reihe.

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
  <div class="box1">Eins</div>
  <div class="box2">Zwei</div>
  <div class="box3">Drei</div>
</div>
```

{{ EmbedLiveSample('Setting_display_flex', '300', '200') }}

### Die flex-Eigenschaft setzen

Zusätzlich zu den Eigenschaften, die auf einen _Flex-Container_ angewendet werden können, gibt es auch Eigenschaften, die auf _Flex-Items_ angewendet werden können. Diese Eigenschaften können unter anderem ändern, wie Elemente _flexibles_ Verhalten zeigen, indem sie sich je nach verfügbarem Platz ausdehnen oder zusammenziehen.

Als einfaches Beispiel können wir die {{cssxref("flex")}}-Eigenschaft auf alle unsere Kinderelemente anwenden und ihr einen Wert von `1` geben. Dadurch werden alle Elemente wachsen und den Container ausfüllen, anstatt Platz am Ende zu lassen. Wenn mehr Platz vorhanden ist, werden die Elemente breiter; wenn weniger Platz vorhanden ist, werden sie schmaler. Wenn Sie zusätzlich ein weiteres Element zum Markup hinzufügen, werden die anderen Elemente alle kleiner, um Platz für das neue Element zu schaffen; die Elemente nehmen weiterhin gemeinsam den gesamten Platz ein.

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
  <div class="box1">Eins</div>
  <div class="box2">Zwei</div>
  <div class="box3">Drei</div>
</div>
```

{{ EmbedLiveSample('Setting_the_flex_property', '300', '200') }}

> [!NOTE]
> Dies war eine sehr kurze Einführung zu dem, was mit Flexbox möglich ist. Um mehr zu erfahren, sehen Sie sich unseren [Flexbox](/de/docs/Learn/CSS/CSS_layout/Flexbox)-Artikel an.

## Grid-Layout

Während Flexbox für ein eindimensionales Layout gedacht ist, ist Grid-Layout für zwei Dimensionen ausgelegt — Elemente in Reihen und Spalten anzuordnen.

### Display: grid setzen

Ähnlich wie bei Flexbox, aktivieren wir das Grid-Layout mit seinem spezifischen Anzeige-Wert — `display: grid`. Das untenstehende Beispiel verwendet ein ähnliches Markup wie das Flex-Beispiel, mit einem Container und einigen Kinderelementen. Zusätzlich zur Verwendung von `display: grid` definieren wir auch einige Zeilen- und Spalten _Tracks_ für das übergeordnete Element mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}}. Wir haben drei Spalten, jede von `1fr`, sowie zwei Reihen von `100px` definiert. Wir müssen keine Regeln auf die Kinderelemente anwenden; sie werden automatisch in den Zellen platziert, die unser Grid erstellt hat.

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
  <div class="box1">Eins</div>
  <div class="box2">Zwei</div>
  <div class="box3">Drei</div>
  <div class="box4">Vier</div>
  <div class="box5">Fünf</div>
  <div class="box6">Sechs</div>
</div>
```

{{ EmbedLiveSample('Setting_display_grid', '300', '330') }}

### Platzierung von Elementen im Grid

Sobald Sie ein Grid haben, können Sie Ihre Elemente explizit darauf platzieren, anstatt sich auf das in der obigen Darstellung gesehene Auto-Placement-Verhalten zu verlassen. Im nächsten Beispiel unten haben wir das gleiche Grid definiert, aber diesmal mit drei Kindelementen. Wir haben die Start- und Endlinie jedes Elements mit den Eigenschaften {{cssxref("grid-column")}} und {{cssxref("grid-row")}} festgelegt. Dadurch überspannen die Elemente mehrere Tracks.

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
  <div class="box1">Eins</div>
  <div class="box2">Zwei</div>
  <div class="box3">Drei</div>
</div>
```

{{ EmbedLiveSample('Placing_items_on_the_grid', '300', '330') }}

> [!NOTE]
> Diese beiden Beispiele zeigen nur einen kleinen Ausschnitt der Leistungsfähigkeit des Grid-Layouts. Um mehr zu erfahren, sehen Sie sich unseren [Grid-Layout](/de/docs/Learn/CSS/CSS_layout/Grids)-Artikel an.

Der Rest dieses Leitfadens behandelt andere Layoutmethoden, die für das Hauptlayout Ihrer Seite weniger wichtig sind, aber dennoch helfen, spezifische Aufgaben zu erfüllen. Durch das Verständnis der Natur jeder Layoutaufgabe werden Sie schnell feststellen, dass bei der Betrachtung einer bestimmten Komponente Ihres Designs die Art des Layouts oft klar ersichtlich ist.

## Floats

Das Schweben eines Elements ändert das Verhalten dieses Elements und der folgenden Block-Level-Elemente im normalen Fluss. Das geschwebte Element wird nach links oder rechts verschoben und aus dem normalen Fluss entfernt, und der umgebende Inhalt _schwebt_ darum herum.

Die {{cssxref("float")}}-Eigenschaft hat vier mögliche Werte:

- `left` — Schwimmt das Element nach links.
- `right` — Schwimmt das Element nach rechts.
- `none` — Gibt kein Schweben an. Dies ist der Standardwert.
- `inherit` — Gibt an, dass der Wert der `float`-Eigenschaft vom übergeordneten Element des Elements vererbt werden soll.

Im folgenden Beispiel lassen wir ein `<div>` nach links schweben und geben ihm einen {{cssxref("margin")}} am rechten Rand, um den umgebenden Text davon wegzudrücken. Dies gibt uns den Effekt von Text, der um das umrandete Element gewickelt ist, und ist fast alles, was Sie über das Schweben in der modernen Web-Design wissen müssen.

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
<h1>Einfaches Float-Beispiel</h1>

<div class="box">Schwimmen</div>

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
> Floats werden vollständig in unserer Lektion über die [float und clear](/de/docs/Learn/CSS/CSS_layout/Floats)-Eigenschaften erklärt. Vor Techniken wie Flexbox und Grid-Layout wurden Floats als Methode zur Erstellung von Spaltenlayouts verwendet. Möglicherweise stoßen Sie immer noch auf diese Methoden im Web; wir werden diese in der Lektion über [veraltete Layoutmethoden](/de/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) behandeln.

## Positionierungstechniken

Die Positionierung ermöglicht es Ihnen, ein Element von seinem ursprünglichen Platz im normalen Fluss zu einem anderen Ort zu verschieben. Positionierung ist keine Methode, um die Hauptlayouts einer Seite zu erstellen; es geht mehr darum, den Platz von spezifischen Elementen auf einer Seite zu verwalten und fein abzustimmen.

Es gibt jedoch nützliche Techniken, um spezifische Layoutmuster zu erhalten, die sich auf die {{cssxref("position")}}-Eigenschaft stützen. Das Verständnis der Positionierung hilft auch dabei, den normalen Fluss zu verstehen und was es bedeutet, ein Element aus dem normalen Fluss zu entfernen.

Es gibt fünf Arten der Positionierung, die Sie kennen sollten:

- **Statische Positionierung** ist der Standard, den jedes Element erhält. Es bedeutet einfach "Setzen Sie das Element in seine normale Position im Dokumentlayoutfluss — nichts Besonderes zu sehen".
- **Relative Positionierung** ermöglicht es Ihnen, die Position eines Elements auf der Seite zu ändern, indem sie relativ zu seiner Position im normalen Fluss verschoben wird, sowie sie mit anderen Elementen auf der Seite zu überlappen.
- **Absolute Positionierung** bewegt ein Element vollständig aus dem normalen Layoutfluss der Seite in eine separate Ebene. Von dort aus können Sie es relativ zu den Kanten seines nächsten positionierten Vorfahren (der `<html>` wird, wenn keine anderen Vorfahren positioniert sind) fixieren. Dies ist nützlich für die Erstellung von komplexen Layouteffekten, wie zum Beispiel einen Tabbed-Boxen, bei dem unterschiedliche Inhaltsfenster übereinander sitzen und bei Bedarf angezeigt oder verborgen werden, oder Informationsfenster, die standardmäßig außerhalb des Bildschirms liegen, aber mit einem Steuerungsknopf auf den Bildschirm geschoben werden können.
- **Feste Positionierung** ist der absoluten Positionierung sehr ähnlich, mit dem Unterschied, dass sie ein Element relativ zum Browser-Ansichtsfenster und nicht zu einem anderen Element fixiert. Dies ist nützlich für die Erstellung von Effekten wie eines persistenten Navigationsmenüs, das immer an derselben Stelle auf dem Bildschirm bleibt, während der restliche Inhalt darunter scrollt.
- **Sticky-Positionierung** ist eine neuere Positionierungsmethode, die ein Element wie `position: relative` verhält, bis es einen definierten Offset von dem Ansichtsfenster erreicht, zu welchem Zeitpunkt es sich wie `position: fixed` verhält.

### Einfaches Positionierungsbeispiel

Um Ihnen mit diesen Layouttechniken vertraut zu machen, werden wir Ihnen ein paar schnelle Beispiele zeigen. Unsere Beispiele werden alle über die gleiche HTML-Struktur verfügen (eine Überschrift gefolgt von drei Absätzen), die wie folgt ist:

```html
<h1>Positionierung</h1>

<p>Ich bin ein grundlegendes Block-Level-Element.</p>
<p class="positioned">Ich bin ein grundlegendes Block-Level-Element.</p>
<p>Ich bin ein grundlegendes Block-Level-Element.</p>
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

Relative Positionierung ermöglicht es Ihnen, ein Element von seinem Standardplatz im normalen Fluss zu versetzen. Das bedeutet, dass Sie eine Aufgabe wie das Verschieben eines Symbols nach unten, damit es sich mit einer Textbeschriftung ausrichtet, ausführen könnten. Um dies zu erreichen, können wir die folgende Regel hinzufügen, um relative Positionierung hinzuzufügen:

```css
.positioned {
  position: relative;
  top: 30px;
  left: 30px;
}
```

Hier geben wir unserem mittleren Absatz einen {{cssxref("position")}}-Wert von `relative`. Dies tut alleine nichts, deshalb fügen wir auch {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften hinzu. Diese dienen dazu, das betroffene Element nach unten und rechts zu verschieben. Dies mag wie das Gegenteil dessen erscheinen, was Sie erwartet haben, aber Sie müssen es sich so vorstellen, dass das Element an seiner linken und oberen Seite geschoben wird, was dazu führt, dass es sich nach rechts und unten bewegt.

Indem dieser Code hinzugefügt wird, ergibt sich folgendes Ergebnis:

```html hidden
<h1>Relative Positionierung</h1>

<p>Ich bin ein grundlegendes Block-Level-Element.</p>
<p class="positioned">Dies ist mein relativ positioniertes Element.</p>
<p>Ich bin ein grundlegendes Block-Level-Element.</p>
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

Absolute Positionierung wird verwendet, um ein Element vollständig aus dem normalen Fluss zu entfernen und stattdessen mit Offsets von den Kanten eines umschließenden Blocks zu positionieren.

Zurück zu unserem ursprünglichen, nicht positionierten Beispiel, könnten wir die folgende CSS-Regel hinzufügen, um absolute Positionierung zu implementieren:

```css
.positioned {
  position: absolute;
  top: 30px;
  left: 30px;
}
```

Hier geben wir unserem mittleren Absatz einen {{cssxref("position")}}-Wert von `absolute` und die gleichen {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften wie zuvor. Indem dieser Code hinzugefügt wird, ergibt sich folgendes Ergebnis:

```html hidden
<h1>Absolute Positionierung</h1>

<p>Ich bin ein grundlegendes Block-Level-Element.</p>
<p class="positioned">Dies ist mein absolut positioniertes Element.</p>
<p>Ich bin ein grundlegendes Block-Level-Element.</p>
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

Dies ist sehr unterschiedlich! Das positionierte Element wurde nun völlig von dem Rest des Seitenlayouts getrennt und sitzt darüber. Die anderen beiden Absätze sitzen nun zusammen, als ob ihr positionierter Geschwister nicht existiert. Die {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften haben eine andere Wirkung auf absolut positionierte Elemente als auf relativ positionierte Elemente. In diesem Fall wurden die Offsets vom oberen und linken Rand der Seite berechnet. Es ist möglich, das übergeordnete Element zu ändern, das zu diesem Container wird, und wir werden uns das in der Lektion über [Positionierung](/de/docs/Learn/CSS/CSS_layout/Positioning) ansehen.

### Feste Positionierung

Feste Positionierung entfernt unser Element in derselben Weise wie absolute Positionierung aus dem Dokumentfluss. Der Unterschied besteht jedoch darin, dass die Offsets vom Ansichtsfenster und nicht vom Container angewendet werden. Da das Element relativ zum Ansichtsfenster fixiert bleibt, können wir Effekte wie ein Menü erstellen, das fixiert bleibt, während die Seite darunter scrollt.

Für dieses Beispiel enthält unser HTML drei Absätze Text, um durch die Seite zu scrollen, sowie ein Feld mit der Eigenschaft `position: fixed`.

```html
<h1>Feste Positionierung</h1>

<div class="positioned">Fest</div>

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

Sticky Positionierung ist die letzte Positionierungsmethode, die uns zur Verfügung steht. Sie mischt relative Positionierung mit fester Positionierung. Wenn ein Element `position: sticky` hat, scrollt es im normalen Fluss, bis es Offsets vom Ansichtsfenster erreicht, die wir definiert haben. Zu diesem Zeitpunkt wird es "fest", als ob `position: fixed` darauf angewendet worden wäre.

```html hidden
<h1>Sticky Positionierung</h1>

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
> Um mehr über Positionierung zu erfahren, lesen Sie unseren [Positioning](/de/docs/Learn/CSS/CSS_layout/Positioning)-Artikel.

## Tabellenlayout

Beim Betrachten des Quellcodes auf älteren Websites können Sie entdecken, dass Tabellen verwendet wurden, um Formulare anzuordnen. HTML-Tabellen sollten für die Darstellung von tabellarischen Daten vorbehalten sein. Die Verwendung von Tabellen für andere als tabellarische Daten hat viele Probleme: Tabellenlayouts sind unflexibel, sehr schwer im Markup, schwer zu debuggen und semantisch falsch (zum Beispiel haben Bildschirmleser-Benutzer Probleme beim Navigieren von Tabellenlayouts).

Das Erscheinungsbild einer Tabelle auf einer Webseite, wenn Sie Tabellen-Markup verwenden, liegt an einer Reihe von CSS-Eigenschaften, die ihr Layout definieren. Diese Eigenschaften können auch verwendet werden, um Elemente anzuordnen, die keine Tabellen sind, eine Verwendung, die manchmal als "Verwendung von CSS-Tabellen" bezeichnet wird. Das folgende Beispiel zeigt eine solche Verwendung.

Schauen wir uns ein Beispiel an. Zuerst ein einfaches Markup, das ein HTML-Formular erstellt. Jedes Eingabeelement hat ein Label. Wir haben auch eine Beschriftung in einem Absatz eingefügt; eine andere Option ist die Verwendung eines {{htmlelement("fieldset")}} mit einer {{htmlelement("legend")}}. Jedes Label/Eingabe-Paar ist in ein {{htmlelement("div")}} für Layoutzwecke eingehüllt.

```html
<form>
  <p>Nennen Sie uns zuerst Ihren Namen und Ihr Alter.</p>
  <div>
    <label for="fname">Vorname:</label>
    <input type="text" id="fname" />
  </div>
  <div>
    <label for="lname">Nachname:</label>
    <input type="text" id="lname" />
  </div>
  <div>
    <label for="age">Alter:</label>
    <input type="text" id="age" />
  </div>
</form>
```

Was das CSS angeht, ist das meiste davon ziemlich gewöhnlich, außer für die Verwendung der {{cssxref("display")}}-Eigenschaft. Die {{htmlelement("form")}}, {{htmlelement("div")}}s, und {{htmlelement("label")}}s und {{htmlelement("input")}}s wurden angewiesen, sich wie eine Tabelle, Tabellenreihen und Tabellenzellen darzustellen. Im Grunde genommen verhalten sie sich wie HTML-Tabellen-Markup, wodurch die Labels und Eingaben automatisch schön ausgerichtet werden. Alles, was wir dann tun müssen, ist, ein bisschen Größenanpassung, Ränder usw. hinzuzufügen, um alles ein bisschen schöner aussehen zu lassen.

Sie werden bemerken, dass der Beschriftungsabsatz `display: table-caption;` erhalten hat, wodurch er sich wie eine {{htmlelement("caption")}} der Tabelle verhält, und `caption-side: bottom;`, um die Beschriftung zur Stilisierungszwecken am unteren Rand der Tabelle zu platzieren, obwohl das Markup im Quellcode vor den `<input>`-Elementen steht. Dies ermöglicht eine schöne Flexibilität.

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

Das gibt uns folgendes Ergebnis:

{{ EmbedLiveSample('Table_layout', '100%', '200') }}

Sie können dieses Beispiel auch live unter [css-tables-example.html](https://mdn.github.io/learning-area/css/styling-boxes/box-model-recap/css-tables-example.html) ansehen (siehe auch den [Quellcode](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/box-model-recap/css-tables-example.html)).

> [!NOTE]
> Das Tabellenlayout wird im Gegensatz zu den anderen Themen dieser Seite in diesem Modul nicht weiter behandelt. Verwenden Sie stattdessen das [Grid-Layout](#grid-layout).

## Mehrspalten-Layout

Das Mehrspalten-Layout-CSS-Modul bietet uns die Möglichkeit, Inhalte in Spalten zu gestalten, ähnlich wie Text in einer Zeitung fließt. Während das Lesen von oben nach unten durch Spalten in einem Web-Kontext weniger nützlich ist, da die Benutzer auf- und abscrollen müssen, kann das Anordnen von Inhalten in Spalten dennoch eine nützliche Technik sein.

Um einen Block in einen Mehrspalten-Container zu verwandeln, verwenden wir entweder die {{cssxref("column-count")}}-Eigenschaft, die dem Browser angibt, _wie viele_ Spalten wir haben möchten, oder die {{cssxref("column-width")}}-Eigenschaft, die dem Browser sagt, den Container mit so vielen Spalten wie möglich einer _definierten Breite_ zu füllen.

Im untenstehenden Beispiel beginnen wir mit einem Block von HTML innerhalb eines enthaltenden `<div>`-Elements mit einer Klasse von `container`.

```html
<div class="container">
  <h1>Mehrspalten-Layout</h1>

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

Wir verwenden eine `column-width` von 200 Pixeln auf diesem Container, wodurch der Browser so viele 200 Pixel breite Spalten wie möglich erstellt. Der restliche Platz wird zwischen den Spalten aufgeteilt.

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

Dieser Artikel hat einen kurzen Überblick über alle Layouttechnologien gegeben, die Sie kennen sollten. Lesen Sie weiter, um mehr über jede einzelne Technologie zu erfahren!

{{NextMenu("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout")}}
