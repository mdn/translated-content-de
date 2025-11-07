---
title: Überblick über die CSS-Box-Ausrichtung
short-title: Overview
slug: Web/CSS/Guides/Box_alignment/Overview
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment) spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen. Das Ziel des Moduls ist die Schaffung einer konsistenten Ausrichtungsmethode für alle CSS-Elemente. Die Eigenschaften der CSS-Box-Ausrichtung bieten vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul enthalten sind. Weitere Leitfäden bieten zusätzliche Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout) und [Block-, absolut positionierten und Tabellen-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables). Die Ausrichtung von Text wird durch die Module [CSS-Text](/de/docs/Web/CSS/Guides/Text) und [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) abgedeckt.

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsbegriffe, um die Diskussion dieser Ausrichtungseigenschaften außerhalb ihrer Implementierung in einer bestimmten Layoutmethode zu erleichtern. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibrichtungen

Die Ausrichtung ist mit den Schreibrichtungen verbunden, da wir bei der Ausrichtung eines Elements nicht die physischen Dimensionen von oben, rechts, unten und links berücksichtigen. Stattdessen beschreiben wir die Ausrichtung anhand des Start- und Endpunktes der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig von der Schreibrichtung des Dokuments.

### Zwei Dimensionen der Ausrichtung

Bei der Verwendung der Box-Ausrichtungs-Eigenschaften richten Sie Inhalte entlang einer von zwei Achsen aus — der Inline-(oder Haupt-)Achse und der Block-(oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz in der verwendeten Schreibrichtung fließen. Für Englisch ist die Inline-Achse zum Beispiel horizontal. Die Block-Achse ist die Achse, entlang der Blocks wie Absatz-Elemente angeordnet werden; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die linke/rechte oder horizontale Richtung. Die Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Bei der Ausrichtung von Elementen entlang der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen entlang der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das Obige gilt, wenn {{cssxref("flex-direction")}} auf `row` eingestellt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` eingestellt ist. Daher ist es bei der Arbeit mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken als über Inline und Block. Die `justify-`-Eigenschaften werden immer verwendet, um an der Hauptachse auszurichten, die `align-`-Eigenschaften an der Querachse.

### Das Ausrichtungsobjekt

Das **{{Glossary("alignment_subject", "Ausrichtungsobjekt")}}** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self` oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` festgelegt werden, ist dies der Randbereich des Elements, auf das diese Eigenschaft angewendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in die das Objekt ausgerichtet wird. Dies ist typischerweise der umgebende Block des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder viele Ausrichtungsobjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei Ausrichtungsobjekten darin.

![Eine Box, die zwei Rechtecke mit gleicher Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, was bedeutet, dass beide ihre Oberlinien etwa 10px innerhalb der Oberkante der Box haben, in der sie enthalten sind.](align-container-subjects.png)

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung, die mit Schlüsselwortwerten verwendet werden.

- [Positionale Ausrichtung](#positionale_ausrichtung)
- [Grundlinienausrichtung](#grundlinienausrichtung)
- [Verteilte Ausrichtung](#verteilte_ausrichtung)

### Positionale Ausrichtung

**Positionale Ausrichtung** ist die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer. Die Schlüsselwortwerte für die positionale Ausrichtung sind für die positionale Ausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Abgesehen von den physischen Werten `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, sind alle anderen Werte, die {{cssxref("self-position")}}- und {{cssxref("content-position")}}-Werte, logische Werte und beziehen sich auf die Schreibrichtung des Inhalts.

Wenn Sie beispielsweise im CSS-Grid-Layout arbeiten und `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension an den Anfang verschoben, was links sein wird da Sätze im Englischen auf der linken Seite der Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links gehende Sprache, verwenden, würde derselbe Wert `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber der Ort der beiden Starts ist aufgrund der Schreibrichtung unterschiedlich.

### Grundlinienausrichtung

**Grundlinienausrichtung** ist das Verhältnis der Grundlinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Die Grundlinienausrichtung {{cssxref("baseline-position")}} Schlüsselwörter werden verwendet, um die Grundlinien von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` und Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Die Grundlinieninhaltsausrichtung — das Festlegen eines Grundlinienausrichtungswertes für `justify-content` oder `align-content` — funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungsobjekte werden zueinander durch Hinzufügen von Auffüllungen innerhalb der Boxen anhand ihrer Grundlinien ausgerichtet.

Die Grundlinienselbstausrichtung verschiebt die Boxen durch das Hinzufügen eines Randbereichs außerhalb der Boxen, um sie anhand der Grundlinien auszurichten. Die Selbstausrichtung wird für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items` durchgeführt.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung des Raums unter den Ausrichtungsobjekten. Die verteilten Ausrichtung {{cssxref("content-distribution")}}-Schlüsselwörter werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit dem verfügbaren Raum passiert, nachdem die Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Beispielsweise werden im Flex-Layout die Elemente zuerst mit `flex-start` ausgerichtet. In einem horizontalen von oben nach unten Schreibrichtung, (mit einer Sprache wie Englisch), mit `flex-direction` auf `row` gesetzt, beginnen die Elemente ganz links, und der verfügbare Raum nach dem Anzeigen der Elemente wird hinter ihnen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle auf der linken Seite der enthaltenen Box ausgerichtet, mit etwa 10px dazwischen und 10px zwischen der linken Seite des ersten Rechtecks und dem Elterncontainer.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container festlegen, wird der verfügbare Raum nun aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist auf der linken Seite der enthaltenen Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten platziert.](justify-content-space-between.png)

Damit diese Schlüsselwörter wirksam werden, ist Raum entlang der Dimension erforderlich, in der Sie die Elemente ausrichten möchten. Ohne Raum gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Box-Ausrichtungs-Eigenschaften in [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angewendet werden.

#### Beispiel für CSS-Grid-Layout-Ausrichtung

In diesem Grid-Layout-Beispiel gibt es zusätzlichen Raum im Grid-Container nach dem Anordnen der Spuren fester Breite auf der Inline-(Haupt-)Achse. Dieser Raum wird mithilfe von {{cssxref("justify-content")}} verteilt. Auf der Block-(Quer-)Achse wird die Ausrichtung der Elemente in ihren Grid-Bereichen mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items` Wert, der auf die Gruppe durch das Setzen von {{cssxref("align-self")}} auf `center` festgelegt ist.

```html live-sample___grid-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-align-items
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-align-items
.box {
  display: grid;
  grid-template-columns: 120px 120px 120px;
  align-items: start;
  justify-content: space-between;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-align-items", "", "200px")}}

#### Flexbox-Ausrichtungsbeispiel

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt den `align-items` Wert, der auf die Gruppe durch das Setzen von `align-self` auf `center` festgelegt ist.

```html live-sample___flex-align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css hidden live-sample___flex-align-items
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___flex-align-items
.box {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("flex-align-items")}}

## Überlauf-Ausrichtung

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` definieren das Verhalten, wenn ein Ausrichtungsobjekt größer ist als der Ausrichtungscontainer. Das `safe`-Schlüsselwort wird die Ausrichtung auf `start` festlegen, falls eine angegebene Ausrichtung einen Überlauf verursacht, wobei das Ziel darin besteht, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung beachtet, selbst wenn dies zu einem solchen Datenverlust führen würde.

## Lücken zwischen Boxen

Die Box-Ausrichtungs-Spezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen die Festlegung eines konsistenten Abstands zwischen Elementen in einer Reihe oder Spalte, in jeder Layoutmethode, die Elemente auf diese Weise anordnet.

Die Eigenschaft `gap` ist eine Kurzform für `row-gap` und `column-gap`, mit der wir diese Eigenschaften gleichzeitig festlegen können:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die Kurzform `gap`, um eine `10px` Lücke zwischen den Reihen und eine `2em` Lücke zwischen den Spalten festzulegen.

```html live-sample___grid-gap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
</div>
```

```css hidden live-sample___grid-gap
body {
  font: 1.2em sans-serif;
}

.box {
  border: 2px dotted rgb(96 139 168);
}

.box > * {
  padding: 20px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

```css live-sample___grid-gap
.box {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 2em;
}

.box :first-child {
  align-self: center;
}
```

{{EmbedLiveSample("grid-gap")}}

Frühe Grid-Implementierungen enthielten `gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen die unpräfixierten Eigenschaften, obwohl Sie die folgenden Eigenschaften in einem Code-Basis sehen könnten: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die präfixierten Versionen sind Aliase der unpräfixierten.

Beachten Sie, dass andere Dinge die visuelle Lücke erhöhen können, beispielsweise die Verwendung der Raumverteilungsschlüsselwörter oder das Hinzufügen von Rändern zu den Elementen.

## Box-Ausrichtung nach Layout-Typ

Da die CSS-Box-Ausrichtungs-Eigenschaften je nach Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, finden Sie in den folgenden Leitfäden Einzelheiten zur Verwendung der Ausrichtungseigenschaften mit jedem Layout-Typ:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Ausrichtung im Block-, absolut positionierten und Tabellen-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [Grundlegende Konzepte der Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
