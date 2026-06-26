---
title: Ausrichten von Elementen in einem Flex-Container
short-title: Ausrichten von Flex-Elementen
slug: Web/CSS/Guides/Flexible_box_layout/Aligning_items
l10n:
  sourceCommit: 170d71538522a7dc3d98e8f5c5ba0f22c47d6c7f
---

Einer der Gründe, warum Flexbox so nützlich ist, liegt darin, dass es eine ordnungsgemäße Ausrichtung ermöglicht und eine schnelle Methode zum vertikalen Zentrieren von Elementen bietet. In diesem Leitfaden werden wir uns ausführlich damit befassen, wie die Ausrichtungs- und Justierungseigenschaften in Flexbox funktionieren.

## Verwendung von Ausrichtung in Flexbox

Flexbox bietet mehrere Eigenschaften zur Kontrolle von Ausrichtung und Abständen, wobei `align-items` und `justify-content` fundamental für das Zentrieren von Elementen sind. Um ein Element zu zentrieren, verwenden wir die Eigenschaft {{cssxref("align-items")}}, um das Element auf der {{Glossary("cross_axis", "Querachse")}} auszurichten, die in diesem Fall die {{Glossary("Flow_relative_values", "Block-Achse")}} ist, die vertikal verläuft. Wir verwenden {{cssxref("justify-content")}}, um das Element auf der Hauptachse auszurichten, die in diesem Fall die Inline-Achse ist, die horizontal verläuft.

![Die Querachse ist die vertikale Achse und die Hauptachse ist die horizontale Achse.](align1.png)

Ändern Sie die Größe des Containers oder des verschachtelten Elements im folgenden Code-Beispiel. Das verschachtelte Element bleibt immer zentriert.

```html live-sample___intro
<div class="box">
  <div></div>
</div>
```

```css live-sample___intro
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dotted rgb(96 139 168);
}

.box div {
  width: 100px;
  height: 100px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("intro")}}

## Eigenschaften zur Kontrolle der Ausrichtung in Flexbox

Die Eigenschaften, die wir in diesem Leitfaden betrachten werden, sind wie folgt:

- {{cssxref("justify-content")}}: Kontrolliert die Ausrichtung aller Elemente auf der Hauptachse.
- {{cssxref("align-items")}}: Kontrolliert die Ausrichtung aller Elemente auf der Querachse.
- {{cssxref("align-self")}}: Kontrolliert die Ausrichtung eines einzelnen Flex-Elements auf der Querachse.
- {{cssxref("align-content")}}: Kontrolliert den Raum zwischen den Flex-Linien auf der Querachse.
- {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}: Werden verwendet, um Lücken oder Abstände zwischen Flex-Elementen zu erstellen.

Wir werden auch entdecken, wie automatische Ränder für die Ausrichtung in Flexbox verwendet werden können.

## Ausrichten von Elementen auf der Querachse

Die Eigenschaft {{cssxref("align-items")}}, die auf den Flex-Container gesetzt wird, und die Eigenschaft {{cssxref("align-self")}}, die auf Flex-Elemente gesetzt wird, kontrollieren die Ausrichtung der Flex-Elemente auf der Querachse. Die Querachse verläuft entlang der Spalten, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und entlang der Zeilen, wenn `flex-direction` auf `column` gesetzt ist.

In diesem grundlegenden Flex-Beispiel verwenden wir die Ausrichtung auf der Querachse. Wenn wir `display: flex` zu einem Container hinzufügen, werden die Kindelemente zu Flex-Elementen, die in einer Zeile angeordnet sind. Standardmäßig dehnen sie sich alle aus, um die Höhe des höchsten Elements zu erreichen, da dieses Element die Höhe der Elemente auf der Querachse definiert. Wenn der Flex-Container eine feste Höhe hat, dehnen sich die Elemente unabhängig von der enthaltenen Menge an Inhalt auf diese Höhe aus.

![Drei Elemente, eines mit zusätzlichem Text, wodurch es höher als die anderen ist.](align2.png)

![Drei Elemente, die auf eine Höhe von 200 Pixel gestreckt sind.](align3.png)

Der Grund, warum die Elemente die gleiche Höhe haben, liegt darin, dass der Anfangswert von `align-items`, der die Ausrichtung auf der Querachse kontrolliert, auf `stretch` gesetzt ist.

Wir können andere Werte verwenden, um zu steuern, wie die Elemente ausgerichtet sind:

- `align-items: stretch`
- `align-items: flex-start`
- `align-items: flex-end`
- `align-items: start`
- `align-items: end`
- `align-items: center`
- `align-items: baseline`
- `align-items: first baseline`
- `align-items: last baseline`

Im folgenden Beispiel ist der Wert von `align-items` auf `stretch` gesetzt. Probieren Sie die anderen Werte aus und beobachten Sie, wie sich die Elemente innerhalb des Flex-Containers zueinander ausrichten.

```html live-sample___align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___align-items
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: stretch;
}

.box div {
  width: 100px;
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
}
```

{{EmbedLiveSample("align-items")}}

### Ein einzelnes Element mit `align-self` ausrichten

Die Eigenschaft `align-items` setzt die Eigenschaft `align-self` für alle Flex-Elemente als Gruppe. Das bedeutet, dass Sie die Eigenschaft {{cssxref("align-self")}} explizit deklarieren können, um ein einzelnes Element anzusprechen. Die Eigenschaft `align-self` akzeptiert alle gleichen Werte wie `align-items`, plus einen Wert von `auto`, der den Wert auf den auf dem Flex-Container definierten Wert zurücksetzt.

In diesem nächsten Live-Beispiel hat der Flex-Container `align-items: flex-start`, was bedeutet, dass die Elemente alle am Anfang der Querachse ausgerichtet sind. Mit dem `first-child`-Selektor wird das erste Element auf `align-self: stretch` gesetzt. Ein weiteres Element mit der Klasse `selected` hat `align-self: center` gesetzt. Ändern Sie den Wert von `align-items` oder ändern Sie die Werte von `align-self` an den einzelnen Elementen, um zu sehen, wie dies funktioniert.

```html live-sample___align-self
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```

```css live-sample___align-self
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
  height: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self", "", "250px")}}

### Ändern der Hauptachse

Bis jetzt haben wir uns das Ausrichtungsverhalten angesehen, wenn die `flex-direction` standardmäßig auf `row` gesetzt ist und in einer Sprache, die von oben nach unten geschrieben wird, mit einer horizontalen Hauptachse und einer vertikalen Querachse.

![Drei Elemente, das erste ist auf flex-start, das zweite auf center, das dritte auf flex-end ausgerichtet. Ausrichtung auf der vertikalen Achse.](align4.png)

Wenn wir denselben Schreibmodus behalten, wird bei einer Änderung der `flex-direction` auf `column` die `align-items`- und `align-self`-Eigenschaften die Elemente rechts und links anstatt oben und unten ausrichten; diese Eigenschaften richten noch immer Elemente entlang der Querachse aus, aber die Querachse ist jetzt horizontal!

![Drei Elemente, das erste ist auf flex-start, das zweite auf center, das dritte auf flex-end ausgerichtet. Ausrichtung auf der horizontalen Achse.](align5.png)

Sie können dies im folgenden Beispiel ausprobieren, bei dem ein Flex-Container mit `flex-direction: column` gegeben ist, der ansonsten genau wie das vorherige Beispiel ist.

```html live-sample___align-self-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="selected">Three</div>
  <div>Four</div>
</div>
```

```css live-sample___align-self-column
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
}
.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
.box > *:first-child {
  align-self: stretch;
}
.box .selected {
  align-self: center;
}
```

{{EmbedLiveSample("align-self-column", "", "300px")}}

## Ausrichten von Inhalt auf der Querachse mit der Eigenschaft `align-content`

Bis jetzt haben wir uns darauf konzentriert, Elemente oder einzelne Elemente innerhalb des von einem {{Glossary("flex_container", "Flex-Container")}} definierten Bereichs auszurichten, der eine einzige Linie von Flex-Elementen enthält. Wenn Flex-Elemente es erlauben, sich über mehrere Linien zu verteilen, kann die Eigenschaft {{cssxref("align-content")}} verwendet werden, um die Verteilung des Raums zwischen den Linien zu steuern, auch bekannt als **Verpacken von Flex-Linien**.

Damit `align-content` eine Wirkung hat, muss die Dimension der Querachse (in diesem Fall die Höhe) des Flex-Containers größer sein als nötig, um die Elemente anzuzeigen. Dann wirkt es auf alle Elemente als eine Gruppe. Die Werte von `align-content` bestimmen, was mit dem zusätzlich verfügbaren Raums geschieht und wie das gesamte Set von Elementen innerhalb davon ausgerichtet wird.

Die Eigenschaft `align-content` nimmt die folgenden Werte an:

- `align-content: flex-start`
- `align-content: flex-end`
- `align-content: start`
- `align-content: end`
- `align-content: center`
- `align-content: space-between`
- `align-content: space-around`
- `align-content: space-evenly`
- `align-content: stretch`
- `align-content: normal` (funktioniert wie `stretch`)
- `align-content: baseline`
- `align-content: first baseline`
- `align-content: last baseline`

In dem folgenden Live-Beispiel hat der Flex-Container eine Höhe von `400 Pixel`, was mehr ist als nötig, um unsere Elemente anzuzeigen. Der Wert von `align-content` ist `space-between`, was bedeutet, dass der verfügbare Raum _zwischen_ den Flex-Linien geteilt wird, die bündig mit dem Start und Ende des Containers auf der Querachse platziert sind.

Probieren Sie die anderen Werte aus, um zu sehen, wie die Eigenschaft `align-content` funktioniert.

```html live-sample___align-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css live-sample___align-content
.box {
  width: 450px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content", "", "380px")}}

Erneut können wir unsere `flex-direction` auf `column` umstellen, um zu sehen, wie sich diese Eigenschaft verhält, wenn wir in Spalten arbeiten. Wie zuvor benötigen wir genügend Platz in der Querachse, um nach der Anzeige aller Elemente einigen freien Raum zu haben.

```html live-sample___align-content-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

```css live-sample___align-content-column
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 400px;
  height: 300px;
  align-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 100px;
}

.box div {
  background-color: rgb(96 139 168 / 0.2);
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 20px;
}
```

{{EmbedLiveSample("align-content-column", "", "380px")}}

## Ausrichten von Inhalt auf der Hauptachse

Nachdem wir nun gesehen haben, wie die Ausrichtung auf der Querachse funktioniert, können wir uns die Hauptachse ansehen. Hier haben wir nur eine Eigenschaft zur Verfügung — `justify-content`. Dies liegt daran, dass wir nur mit Elementen als Gruppe auf der Hauptachse arbeiten. Mit `justify-content` steuern wir, was mit verfügbarem Raum passiert, wenn mehr Raum vorhanden ist, als erforderlich ist, um die Elemente anzuzeigen.

In unserem ersten Beispiel mit `display: flex` auf dem Container werden die Elemente als Zeile angezeigt und reihen sich am Anfang des Containers auf. Dies liegt daran, dass der Anfangswert von `justify-content` `normal` ist, der wie `start` funktioniert. Jeglicher verfügbarer Raum wird am Ende der Elemente platziert.

![Drei Elemente, jedes 100 Pixel breit in einem 500 Pixel breiten Container. Der verfügbare Raum ist am Ende der Elemente.](align6.png)

Die `baseline`-Werte sind in dieser Dimension nicht relevant. Ansonsten akzeptiert die Eigenschaft `justify-content` die gleichen Werte wie `align-content`.

- `justify-content: flex-start`
- `justify-content: flex-end`
- `justify-content: start`
- `justify-content: end`
- `justify-content: left`
- `justify-content: right`
- `justify-content: center`
- `justify-content: space-between`
- `justify-content: space-around`
- `justify-content: space-evenly`
- `justify-content: stretch` (funktioniert wie start)
- `justify-content: normal` (funktioniert wie stretch, was wie start funktioniert)

Im folgenden Beispiel ist der Wert von `justify-content` auf `space-between` gesetzt. Der verfügbare Raum nach der Anzeige der Elemente wird zwischen den Elementen verteilt. Das linke und rechte Element schließen bündig mit dem Anfang und Ende ab.

```html live-sample___justify-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content
.box {
  display: flex;
  justify-content: space-between;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content")}}

Wenn die Hauptachse in der Block-Richtung ist, weil `flex-direction` auf `column` gesetzt ist, dann wird `justify-content` den Raum zwischen den Elementen in dieser Dimension verteilen, solange im Flex-Container Platz zum Verteilen ist.

```html live-sample___justify-content-column
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-column
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-column", "", "380px")}}

### Ausrichtung und Schreibmodi

Denken Sie daran, dass bei all diesen Ausrichtungsmethoden die Werte `start` und `end` schreibmodusbewusst sind. Wenn der Wert von `justify-content` `start` ist und der Schreibmodus von links nach rechts verläuft, wie im Englischen, werden die Elemente beginnend am linken Rand des Containers ausgerichtet.

![Drei Elemente linksbündig ausgerichtet](basics5.png)

Wenn der Schreibmodus jedoch von rechts nach links verläuft, wie im Arabischen, werden die Elemente beginnend am rechten Rand des Containers ausgerichtet.

![Drei Elemente rechtsbündig ausgerichtet](basics6.png)

Das folgende Live-Beispiel hat die Eigenschaft `direction` auf `rtl` gesetzt, um einen Rechts-nach-Links-Fluss für unsere Elemente zu erzwingen. Sie können dies entfernen oder die Werte von `justify-content` ändern, um zu sehen, wie Flexbox sich verhält, wenn der Start der Inline-Richtung auf der rechten Seite ist.

```html live-sample___justify-content-writing-mode
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-writing-mode
.box {
  direction: rtl;
  display: flex;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-writing-mode")}}

## Ausrichtung und `flex-direction`

Die Richtung von `flex-start` der Linie wird sich ebenfalls ändern, wenn Sie die Eigenschaft `flex-direction` ändern — zum Beispiel durch Verwendung von `row-reverse` anstelle von `row`. Die Richtungen von `start` und `end` werden von Änderungen an `flex-direction` nicht beeinflusst.

In diesem nächsten Beispiel definieren `flex-direction: row-reverse` und `justify-content: flex-end` die Richtung und den Ort der Elemente innerhalb des Flex-Containers. In einer Sprache, die von links nach rechts verläuft, reihen sich die Elemente auf der linken Seite auf. Versuchen Sie, `flex-direction: row-reverse` in `flex-direction: row` zu ändern. Sie werden sehen, dass sich die Elemente nun auf die rechte Seite bewegen und die visuelle Reihenfolge der Elemente umgekehrt wird.

```html live-sample___justify-content-reverse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css live-sample___justify-content-reverse
.box {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("justify-content-reverse")}}

Auch wenn dies alles ein wenig verwirrend erscheinen mag, ist die Regel, an die man sich halten sollte, dass Flex-Elemente, es sei denn, Sie ändern es, sich in der Richtung anordnen, in der die Wörter in der Sprache Ihres Dokuments entlang der Inline- oder Zeilenachse angeordnet sind. `flex-start` wird dort sein, wo der Anfang eines Satzes von Text beginnen würde.

![Diagramm zeigt start auf der linken Seite und end auf der rechten Seite.](align8.png)

Sie können sie durch Auswahl von `flex-direction: column` in die Blockrichtung für die Sprache Ihres Dokuments umschalten. Dann werden `start` und `flex-start` dort sein, wo der obere Rand Ihres ersten Textabschnitts beginnen würde.

![Diagramm zeigt start oben und end unten.](align10.png)

Wenn Sie `flex-direction` auf einen der Umkehrwerte ändern, werden sie sich von der Endachse aus anordnen und in umgekehrter Reihenfolge zu der Art und Weise, wie Wörter in der Sprache Ihres Dokuments geschrieben werden. Dann wechselt `flex-start` zur Endachse — also zu dem Ort, an dem sich Ihre Zeilen fortsetzen würden, wenn sie in Zeilen arbeiten, oder am Ende Ihres letzten Textabschnitts in der Blockrichtung.

![Diagramm zeigt flex-start auf der rechten Seite und flex-end auf der linken Seite.](align9.png)
![Diagramm zeigt flex-start unten und flex-end oben.](align11.png)

## Verwendung von automatischen Rändern zur Ausrichtung auf der Hauptachse

Wir haben keine `justify-items`- oder `justify-self`-Eigenschaft auf der Hauptachse zur Verfügung, da unsere Elemente auf dieser Achse als Gruppe behandelt werden. Es ist jedoch möglich, eine bestimmte Ausrichtung vorzunehmen, um ein Element oder eine Gruppe von Elementen von anderen zu trennen, indem automatische Ränder in Verbindung mit Flexbox verwendet werden.

Ein häufiges Muster ist eine Navigationsleiste, bei der einige Schlüsselitems rechtsbündig ausgerichtet sind, während die Hauptgruppe links ist. Sie könnten denken, dass dies ein Anwendungsfall für eine `justify-self`-Eigenschaft sein sollte. Betrachten Sie jedoch das folgende Bild. Angenommen, das folgende Bild zeigt drei Elemente auf einer Seite und zwei auf der anderen. Wenn `justify-self` auf Flex-Elementen funktionieren würde und auf dem Element _d_ gesetzt wäre, würde es auch die Ausrichtung des nachfolgenden Elements _e_ ändern, was möglicherweise nicht beabsichtigt ist.

![Fünf Elemente, in zwei Gruppen. Drei links und zwei rechts.](align7.png)

Stattdessen kann das Element _d_ durch CSS-Ränder verschoben werden.

In diesem Live-Beispiel ist das Element 4 durch Setzen von {{cssxref("margin-left")}} auf `auto` von den ersten drei Elementen getrennt, was in seiner Achse den gesamten verfügbaren Raum einnimmt. Dies ist, wie das Zentrieren eines Blocks mit {{cssxref("margin")}} auto links und rechts funktioniert. Jede Seite versucht, so viel Raum wie möglich einzunehmen, und so wird der Block in die Mitte verschoben.

In diesem Live-Beispiel sind die Flex-Elemente in einer Zeile mit den grundlegenden Flex-Werten angeordnet, und die Klasse `push`, die auf das vierte Element angewendet wird, setzt `margin-left: auto` auf dieses Element. Versuchen Sie, die Klasse vom vierten Element zu entfernen oder die Klasse auf ein anderes Element zu setzen, um zu sehen, wie es funktioniert.

```html live-sample___auto-margins
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div class="push">Four</div>
  <div>Five</div>
</div>
```

```css live-sample___auto-margins
.box {
  display: flex;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.push {
  margin-left: auto;
}
```

{{EmbedLiveSample("auto-margins")}}

## Erstellen von Lücken zwischen Elementen

Um eine Lücke zwischen Flex-Elementen zu erstellen, verwenden Sie die Eigenschaften {{cssxref("gap")}}, {{cssxref("column-gap")}} und {{cssxref("row-gap")}}. Die Eigenschaft {{cssxref("column-gap")}} erstellt Lücken zwischen den Elementen in einer Zeile. Die Eigenschaft {{cssxref("row-gap")}} erstellt Lücken zwischen Flex-Linien, wenn Sie {{cssxref("flex-wrap")}} auf `wrap` gesetzt haben.

Die Eigenschaft {{cssxref("gap")}} ist eine Kurzschrift, die sowohl `row-gap` als auch `column-gap` setzt.
Die Lücken zwischen Flex-Elementen oder Flex-Linien hängen von der Richtung ab. Wenn die Eigenschaft {{cssxref("flex-direction")}} Zeilen erstellt, definiert der erste Wert die Lücke zwischen Flex-Linien und der zweite Wert die Lücke zwischen den Elementen innerhalb jeder Zeile. Bei Spalten (wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist), definiert der erste Wert die Lücke zwischen Flex-Elementen und der zweite Wert die Lücken zwischen den Flex-Linien.

```html live-sample___gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css live-sample___gap
.box {
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 2em;
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  flex: 1;
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gap")}}

## Siehe auch

- [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
