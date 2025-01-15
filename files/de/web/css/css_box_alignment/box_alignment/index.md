---
title: Übersicht über die CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment/box_alignment
l10n:
  sourceCommit: 49106bd93693d889ff792dada676bdf62350d422
---

{{CSSRef}}

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) definiert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layoutmodellen beziehen. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung über alle CSS-Bereiche hinweg zu schaffen. Die CSS-Box-Ausrichtungs-Eigenschaften bieten vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten weitere Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox), [Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout) und [Block-, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables). Die Ausrichtung von Text wird durch die Module [CSS-Text](/de/docs/Web/CSS/CSS_text) und [CSS-Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) abgedeckt.

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsbegriffe, um eine einfachere Diskussion dieser Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layoutmethode zu ermöglichen. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibrichtungen

Die Ausrichtung ist mit Schreibrichtungen verbunden, indem bei der Ausrichtung eines Elements nicht betrachtet wird, ob es an den physischen Dimensionen von oben, rechts, unten und links ausgerichtet wird. Stattdessen wird die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension beschrieben, mit der gearbeitet wird. Dies stellt sicher, dass die Ausrichtung unabhängig von der Schreibrichtung des Dokuments auf die gleiche Weise funktioniert.

### Zwei Dimensionen der Ausrichtung

Bei Verwendung der Box-Ausrichtungs-Eigenschaften richten Sie Inhalte an einer von zwei Achsen aus — der Inline- (oder Haupt-) Achse und der Block- (oder Kreuz-) Achse. Die Inline-Achse ist die Achse, entlang derer sich Wörter in einem Satz in der verwendeten Schreibrichtung bewegen. Für Englisch ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie z. B. Absatz-Elemente, angeordnet werden; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die linke/rechte oder horizontale Richtung. Die Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox bringt eine zusätzliche Komplikation mit sich, da das Obige gilt, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es bei der Arbeit mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken, anstatt über Inline und Block. Die `justify-` Eigenschaften werden immer zur Ausrichtung an der Hauptachse verwendet, die `align-` Eigenschaften an der Querachse.

### Das Ausrichtungssubjekt

Das **{{Glossary("alignment_subject", "Ausrichtungssubjekt")}}** ist das, was ausgerichtet wird. Für `justify-self` oder `align-self` oder beim Festlegen dieser Werte als Gruppe mit `justify-items` oder `align-items` wird dies die Randbox des Elements sein, auf dem diese Eigenschaft verwendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Subjekt ausgerichtet wird. Dies ist normalerweise der enthaltende Block des Ausrichtungssubjekts. Ein Ausrichtungscontainer kann ein oder viele Ausrichtungssubjekte enthalten.

Das darunterstehende Bild zeigt einen Ausrichtungscontainer mit zwei Ausrichtungssubjekten darin.

![Eine Box, die zwei Rechtecke gleicher Breite aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, d. h. sie haben beide ihre oberen Linien etwa 10px innerhalb der oberen Seite der Box, in der sie enthalten sind.](align-container-subjects.png)

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung, die Schlüsselwortwerte verwenden.

- [Positionelle Ausrichtung](#positional-alignment)
- [Baseline-Ausrichtung](#baseline-alignment)
- [Verteilte Ausrichtung](#distributed-alignment)

### Positionelle Ausrichtung

**Positionelle Ausrichtung** ist die Position eines Ausrichtungssubjekts im Verhältnis zu seinem Ausrichtungscontainer. Die Schlüsselwortwerte der positionellen Ausrichtung sind für die positionelle Ausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Mit Ausnahme der physischen Werte `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, sind alle anderen Werte, die {{cssxref("self-position")}} und {{cssxref("content-position")}} Werte, logische Werte und beziehen sich auf die Schreibrichtung des Inhalts.

Wenn Sie beispielsweise im CSS-Grid-Layout arbeiten und in Englisch `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension an den Anfang bewegt, was links sein wird, da Sätze in Englisch auf der linken Seite der Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links Sprache, verwenden, würde derselbe Wert von `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze in Arabisch auf der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern von unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber der Ort der beiden Starts ist aufgrund der Schreibrichtung unterschiedlich.

### Baseline-Ausrichtung

**Baseline-Ausrichtung** ist die Beziehung zwischen den Baselines mehrerer Ausrichtungssubjekte innerhalb eines Ausrichtungskontexts. Die Schlüsselwörter der Baseline-Ausrichtung {{cssxref("baseline-position")}} werden verwendet, um die Baselines von Boxen über eine Gruppe von Ausrichtungssubjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` und für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Baseline-Inhaltsausrichtung — die Angabe eines Baseline-Ausrichtungswerts für `justify-content` oder `align-content` — funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungssubjekte sind durch das Hinzufügen von Auffüllung innerhalb der Boxen baselinenmäßig aufeinander abgestimmt.

Baseline-Selbstausrichtung verschiebt die Boxen zur Baseline-Ausrichtung durch das Hinzufügen eines Randes außerhalb der Boxen. Die Selbstausrichtung erfolgt für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items`.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung von Raum zwischen Ausrichtungssubjekten. Die Schlüsselwörter der verteilten Ausrichtung {{cssxref("content-distribution")}} werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit einem zusätzlichen Raum passiert, nachdem die Ausrichtungssubjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden im Flex-Layout Elemente anfänglich mit `flex-start` ausgerichtet. Bei einer horizontalen Top-to-Bottom-Schreibrichtung (mit einer Sprache wie Englisch) und `flex-direction` auf `row` gesetzt, beginnen die Elemente ganz links, und jeder verfügbare Raum nach dem Anzeigen der Elemente wird danach eingefügt.

![Drei Rechtecke unterschiedlicher Breiten befinden sich in einer Box. Sie sind alle an der linken Seite der umgebenden Box ausgerichtet, mit etwa 10px dazwischen und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container setzen, wird der verfügbare Raum jetzt verteilt und zwischen die Elemente gesetzt.

![Drei Rechtecke unterschiedlicher Breiten befinden sich in einer Box. Das erste Rechteck ist an der linken Seite der umgebenden Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten verteilt.](justify-content-space-between.png)

Damit diese Schlüsselwörter wirken, ist Platz in der Dimension erforderlich, in der Sie die Elemente ausrichten möchten. Ohne Platz gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Box-Ausrichtungs-Eigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

#### Beispiel zur Ausrichtung im CSS-Gitterlayout

In diesem Grid-Layout-Beispiel gibt es nach der Anordnung der festbreiten Spuren auf der Inline- (Haupt-) Achse zusätzlichen Platz im Grid-Container. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Gitterbereiche mit {{cssxref("align-items")}} kontrolliert. Das erste Element überschreibt den `align-items` Wert, der auf die Gruppe gesetzt wurde, indem es {{cssxref("align-self")}} auf `center` setzt.

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

#### Beispiel zur Flexbox-Ausrichtung

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt die `align-items`, die für die Gruppe festgelegt wurden, indem es `align-self` auf `center` setzt.

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

## Überlaufausrichtung

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` helfen, das Verhalten zu definieren, wenn ein Ausrichtungssubjekt größer als der Ausrichtungscontainer ist. Das `safe` Schlüsselwort richtet bei einem angegebenen Alignment, das zu einem Überschreiten führt, am `start` aus, wobei das Ziel darin besteht, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung auch dann eingehalten, wenn sie zu einem solchen Datenverlust führen würde.

## Lücken zwischen Boxen

Die Box-Ausrichtungsspezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen die Einstellung eines konsistenten Abstands zwischen Elementen in einer Reihe oder Spalte, in jeder Layoutmethode, welche Elemente auf diese Weise anordnet.

Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`, die es uns ermöglicht, diese Eigenschaften auf einmal festzulegen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die Kurzform `gap`, um einen Abstand von `10px` zwischen den Zeilen und einen von `2em` zwischen den Spalten festzulegen.

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

Frühe Grid-Implementierungen enthielten `gap`-Eigenschaften, die mit `grid-` präfixiert waren. Alle Browser unterstützen die nicht präfixierten Eigenschaften, obwohl Sie diese Eigenschaften in einem Code-Bestand sehen könnten: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die präfixierten Versionen sind Aliase der nicht präfixierten.

Beachten Sie, dass andere Dinge die angezeigte visuelle Lücke vergrößern können, z.B. die Verwendung von Verteilungs-Schlüsselwörtern oder das Hinzufügen von Rändern zu Elementen.

## Box-Ausrichtung nach Layouttyp

Da die CSS-Box-Ausrichtungs-Eigenschaften je nach Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, beziehen Sie sich auf die folgenden Leitfäden für Details zur Verwendung der Ausrichtungseigenschaften mit jedem Layouttyp:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
