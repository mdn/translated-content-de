---
title: Überblick über die CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment/Box_alignment
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{CSSRef}}

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layoutmodellen beziehen. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Die CSS-Box-Ausrichtungseigenschaften bieten umfassende horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten mehr Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox), [Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout) und [Block-, absolut positioniertem und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables). Die Ausrichtung von Text wird von den Modulen [CSS-Text](/de/docs/Web/CSS/CSS_text) und [CSS-Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) behandelt.

## Schlüsselkonzepte und Terminologie

Die Spezifikation definiert einige Ausrichtungsterminologien, um die Diskussion über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layoutmethode zu erleichtern. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibmodi

Ausrichtung ist mit Schreibmodi verknüpft, da wir beim Ausrichten eines Elements nicht die physischen Dimensionen von oben, rechts, unten und links berücksichtigen. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung unabhängig vom Schreibmodus des Dokuments auf die gleiche Weise funktioniert.

### Zwei Dimensionen der Ausrichtung

Bei der Verwendung der Box-Ausrichtungseigenschaften richten Sie Inhalte auf einer von zwei Achsen aus — der Inline- (oder Haupt-) Achse und der Block- (oder Quer-) Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz im verwendeten Schreibmodus fließen. Für Englisch ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie Absatzelemente, angeordnet sind; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die links/rechts oder horizontale Richtung. Die Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Beim Ausrichten von Elementen entlang der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Beim Ausrichten von Elementen entlang der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das Obige zutrifft, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es bei der Arbeit mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken, anstatt über Inline und Block. Die `justify-` Eigenschaften werden immer zur Ausrichtung auf der Hauptachse verwendet, die `align-` Eigenschaften auf der Querachse.

### Das Ausrichtungssubjekt

Das **{{Glossary("alignment_subject", "Ausrichtungssubjekt")}}** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self` oder beim Festlegen dieser Werte als Gruppe mit `justify-items` oder `align-items` ist dies die Randbox des Elements, auf das diese Eigenschaft angewendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Subjekt ausgerichtet wird. Dies ist typischerweise der enthaltene Block des Ausrichtungssubjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungssubjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei Ausrichtungssubjekten darin.

![Eine Box, die zwei Rechtecke der gleichen Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, was bedeutet, dass sie beide ihre oberen Linien etwa 10px innerhalb der Box haben, in der sie enthalten sind.](align-container-subjects.png)

## Arten der Ausrichtung

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation im Detail beschreibt; diese verwenden Schlüsselwortwerte.

- [Positionsausrichtung](#positionsausrichtung)
- [Basislinienaussrichtung](#basislinienaussrichtung)
- [Verteilte Ausrichtung](#verteilte_ausrichtung)

### Positionsausrichtung

**Positionsausrichtung** ist die Position eines Ausrichtungssubjekts in Relation zu seinem Ausrichtungscontainer. Die Schlüsselwortwerte der Positionsausrichtung sind für die Positionsausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Abgesehen von den physischen Werten `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, sind alle anderen Werte, die {{cssxref("self-position")}} und {{cssxref("content-position")}} Werte, logische Werte und beziehen sich auf den Schreibmodus des Inhalts.

Zum Beispiel beim Arbeiten im CSS-Grid-Layout, wenn Sie auf Englisch arbeiten und `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension an den Anfang verschoben, der links sein wird, da Sätze im Englischen auf der linken Seite der Seite beginnen. Wenn Sie Arabisch verwenden, eine von rechts nach links verlaufende Sprache, würde derselbe Wert von `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber der Ort der beiden Starts ist aufgrund des Schreibmodus unterschiedlich.

### Basislinienaussrichtung

**Basislinienaussrichtung** ist das Verhältnis zwischen den Baselines mehrerer Ausrichtungssubjekte innerhalb eines Ausrichtungskontexts. Die {{cssxref("baseline-position")}} Schlüsselwörter der Basislinienaussrichtung werden verwendet, um die Baselines von Boxen über eine Gruppe von Ausrichtungssubjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Basislinien-Inhaltsausrichtung — das Festlegen eines Basislinienausrichtungswerts für `justify-content` oder `align-content` — funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungssubjekte sind durch das Hinzufügen von Polsterung innerhalb der Boxen aneinander ausgerichtet.

Basislinien-Selbstausrichtung verschiebt die Boxen zur Ausrichtung nach Basislinie durch das Hinzufügen eines Rands außerhalb der Boxen. Die Selbstausrichtung wird für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items` durchgeführt.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung von Raum zwischen Ausrichtungssubjekten. Die {{cssxref("content-distribution")}} Schlüsselwörter der Verteilten Ausrichtung werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit dem zusätzlichen Raum passiert, nachdem die Ausrichtungssubjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden im Flex-Layout Elemente zunächst mit `flex-start` ausgerichtet. Bei der Arbeit in einem horizontalen von oben nach unten verlaufenden Schreibmodus (mit einer Sprache wie Englisch), mit `flex-direction` auf `row` gesetzt, beginnen die Elemente ganz links und der verfügbaren Raum nach der Anzeige der Elemente wird nach ihnen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle auf der linken Seite der enthaltenen Box ausgerichtet, mit etwa 10px dazwischen und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf den Flex-Container setzen, wird der verfügbare Raum nun aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist auf der linken Seite der enthaltenen Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten verteilt.](justify-content-space-between.png)

Damit diese Schlüsselwörter Wirkung zeigen, ist Raum entlang der Dimension erforderlich, in der Sie die Elemente ausrichten möchten. Ohne Raum gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Box-Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

#### CSS-Grid-Layout-Ausrichtungsbeispiel

In diesem Grid-Layout-Beispiel gibt es nach dem Anordnen der festbreiten Spuren auf der Inline- (Haupt-) Achse zusätzlichen Raum im Grid-Container. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Gitterbereiche mit {{cssxref("align-items")}} kontrolliert. Das erste Element überschreibt den `align-items`-Wert, der für die Gruppe festgelegt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt die `align-items`, die für die Gruppe festgelegt sind, indem es `align-self` auf `center` setzt.

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

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` helfen, das Verhalten zu definieren, wenn ein Ausrichtungssubjekt größer ist als der Ausrichtungscontainer. Das `safe` Schlüsselwort wird auf `start` ausgerichtet, falls eine angegebene Ausrichtung zu einem Überlauf führt, wobei das Ziel darin besteht, einen "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht durch Scrollen erreicht werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung berücksichtigt, auch wenn dies zu einem solchen Datenverlust führen würde.

## Abstände zwischen Boxen

Die Box-Ausrichtungsspezifikation enthält auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen das Setzen eines konsistenten Abstands zwischen Elementen in einer Reihe oder Spalte, in jeder Layoutmethode, die Elemente auf diese Weise anordnet.

Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`, die es uns ermöglicht, diese Eigenschaften auf einmal festzulegen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel wird ein Grid-Layout verwendet, um mit der `gap`-Kurzform einen `10px`-Abstand zwischen den Reihen und einen `2em`-Abstand zwischen den Spalten festzulegen.

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

Frühe Grid-Implementierungen enthielten `gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen die Eigenschaften ohne Präfix, obwohl Sie die folgenden Eigenschaften in einem Code-Basis sehen können: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die präfixierten Versionen sind Aliase der nicht präfixierten.

Beachten Sie, dass andere Dinge den angezeigten visuellen Abstand erhöhen können, zum Beispiel durch die Verwendung der Raumverteilungs-Schlüsselwörter oder das Hinzufügen von Rändern zu den Elementen.

## Box-Ausrichtung nach Layouttyp

Da die CSS-Box-Ausrichtungseigenschaften je nach der Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, lesen Sie die folgenden Leitfäden, um Details zur Verwendung der Ausrichtungseigenschaften mit jedem Layouttyp zu erhalten:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung in CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
