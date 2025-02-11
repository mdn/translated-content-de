---
title: Übersicht über die CSS Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment/Box_alignment
l10n:
  sourceCommit: f3d3298130d8e22fb89ba123a0648ad3cb7b3655
---

{{CSSRef}}

Das [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul spezifiziert CSS-Features, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen. Ziel des Moduls ist es, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Die Eigenschaften der CSS-Box-Ausrichtung bieten vollständige horizontale und vertikale Ausrichtungsfunktionen.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten weitere Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox), [Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout) und [Block-, absolut positioniertem und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables). Die Ausrichtung von Text wird durch die [CSS text](/de/docs/Web/CSS/CSS_text)- und [CSS inline layout](/de/docs/Web/CSS/CSS_inline_layout)-Module abgedeckt.

## Zentrale Konzepte und Terminologie

Die Spezifikation definiert einige Ausrichtungsterminologien, um es zu erleichtern, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung in einer bestimmten Layout-Methode zu sprechen. Es gibt außerdem einige zentrale Konzepte, die für alle Layout-Methoden gelten.

### Beziehung zu Schreibmodi

Ausrichtung hängt mit Schreibmodi zusammen, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der betrachteten Dimension. Dadurch wird sichergestellt, dass die Ausrichtung unabhängig vom Schreibmodus des Dokuments gleich funktioniert.

### Zwei Dimensionen der Ausrichtung

Bei der Verwendung der Eigenschaften der Box-Ausrichtung wird der Inhalt auf einer von zwei Achsen ausgerichtet — der Inline- (oder Haupt-)Achse und der Block-(oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz im verwendeten Schreibmodus fließen. Im Englischen ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang der Blöcke, wie Absatz-Elemente, angeordnet sind; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist links/rechts bzw. horizontal. Die Block-Achse ist vertikal bzw. oben/unten.](two-axes.png)

Wenn Sie Elemente auf der Inline-Achse ausrichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Wenn Sie Elemente auf der Block-Achse ausrichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das oben Genannte nur gilt, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es bei der Arbeit mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken anstatt über Inline und Block. Die `justify-`-Eigenschaften werden immer für die Ausrichtung auf der Hauptachse verwendet, die `align-`-Eigenschaften auf der Querachse.

### Das Ausrichtungsobjekt

Das **{{Glossary("alignment_subject", "Ausrichtungsobjekt")}}** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self` oder bei der Gruppeneinstellung dieser Werte mit `justify-items` oder `align-items` ist dies die Margin-Box des Elements, auf dem diese Eigenschaft angewendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layout-Methode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Ausrichtungsobjekt ausgerichtet wird. Dies ist typischerweise die enthaltende Box des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungsobjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei darin befindlichen Ausrichtungsobjekten.

![Eine Box, die zwei Rechtecke gleicher Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, das heißt, sie haben beide ihre oberen Linien etwa 10px innerhalb der Oberkante der Box, in der sie enthalten sind.](align-container-subjects.png)

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung; diese verwenden Schlüsselwortwerte.

- [Positionsausrichtung](#positional-alignment)
- [Baseline-Ausrichtung](#baseline-alignment)
- [Verteilte Ausrichtung](#distributed-alignment)

### Positionsausrichtung

**Positionsausrichtung** ist die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer. Die Schlüsselwortwerte für die Positionsausrichtung sind definiert, um als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet zu werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Mit Ausnahme der physischen Werte `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, beziehen sich alle anderen Werte, die {{cssxref("self-position")}} und {{cssxref("content-position")}}, auf die Logik des Schreibmodus des Inhalts.

Zum Beispiel, wenn Sie im CSS-Grid-Layout arbeiten und in Englisch `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension an den Anfang verschoben, was im Englischen links ist, da Sätze links beginnen. Wenn Sie Arabisch verwenden, eine von rechts nach links lesende Sprache, würde derselbe Wert `start` die Elemente nach rechts verschieben, da Sätze im Arabischen rechts beginnen.

![Es gibt zwei Boxen, jede mit drei Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Kästchen sind alle nach links ausgerichtet. Die zweite Box enthält drei Kinder mit arabischen Buchstaben. Diese drei Kästchen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber die Position des Anfangs ist unterschiedlich aufgrund des Schreibmodus.

### Baseline-Ausrichtung

**Baseline-Ausrichtung** beschreibt die Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Die Schlüsselwörter der Baseline-Ausrichtung {{cssxref("baseline-position")}} dienen dazu, die Baselines von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Die Baseline-Inhaltsausrichtung — die Festlegung eines Baseline-Ausrichtungswerts für `justify-content` oder `align-content` — funktioniert in Layout-Methoden, die Elemente in Zeilen anordnen. Die Ausrichtungsobjekte werden durch das Hinzufügen von Padding innerhalb der Boxen entlang ihrer Baselines ausgerichtet.

Die Baseline-Selbstausrichtung verschiebt die Boxen, um sie durch Hinzufügen eines Außenabstands entlang ihrer Baseline auszurichten. Selbstausrichtung erfolgt für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items`.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als eine Verteilung des Raums zwischen Ausrichtungsobjekten. Die Schlüsselwörter der verteilten Ausrichtung {{cssxref("content-distribution")}} werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit dem zusätzlichen Raum geschieht, nachdem die Ausrichtungsobjekte positioniert wurden. Die Werte lauten wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden in der Flex-Layout-Initialisierung Elemente mit `flex-start` ausgerichtet. In einem horizontalen Schreibmodus von oben nach unten (z. B. in Englisch) und mit `flex-direction` auf `row` gesetzt, starten die Elemente ganz links, und etwaiger verbleibender Platz wird nach rechts verteilt.

![Drei Rechtecke unterschiedlicher Breite befinden sich innerhalb einer Box. Sie sind alle links ausgerichtet, mit etwa 10px Abstand zwischen ihnen und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf den Flex-Container setzen, wird der verfügbare Platz nun aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich innerhalb einer Box. Das erste Rechteck ist links ausgerichtet, das dritte rechts, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten aufgeteilt.](justify-content-space-between.png)

Damit diese Schlüsselwörter wirksam werden, ist Platz entlang der Dimension erforderlich, in der Sie die Elemente ausrichten möchten. Ohne Platz gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Eigenschaften der Box-Ausrichtung in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

#### Beispiel für CSS-Grid-Layout-Ausrichtung

In diesem Grid-Layout-Beispiel gibt es zusätzlichen Platz im Grid-Container nach dem Festlegen der festen Breiten auf der Inline- (Haupt-) Achse. Dieser Platz wird mittels {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche durch {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert für die Gruppe, indem es {{cssxref("align-self")}} auf `center` setzt.

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

#### Beispiel für Flexbox-Ausrichtung

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt den Gruppenwert von `align-items`, indem es `align-self` auf `center` setzt.

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

Die {{cssxref("overflow-position")}}-Schlüsselwörter `safe` und `unsafe` definieren das Verhalten, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das `safe`-Schlüsselwort richtet auf `start` aus, wenn eine übergeordnete Ausrichtung einen Überlauf verursachen würde, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb des Containers liegt und nicht scrollbar ist.

Wenn Sie `unsafe` angeben, wird die Ausrichtung trotzdem beibehalten, auch wenn dies zu einem solchen Datenverlust führen würde.

## Abstände zwischen Boxen

Die Spezifikation zur Box-Ausrichtung umfasst auch die Eigenschaften `gap`, `row-gap`, und `column-gap`. Diese Eigenschaften ermöglichen das Festlegen eines konsistenten Abstands zwischen Elementen in einer Reihe oder Spalte in jeder Layout-Methode, die Elemente auf diese Weise anordnet.

Die Eigenschaft `gap` ist eine Kurzschreibweise für `row-gap` und `column-gap`, sodass Sie beide Eigenschaften auf einmal festlegen können:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die Kurzschreibweise `gap`, um einen Abstand von `10px` zwischen Zeilen und `2em` zwischen Spalten zu setzen.

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

Frühe Grid-Implementierungen enthielten `gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen die nicht-prefixed Eigenschaften, allerdings könnten Sie die folgenden Eigenschaften im Code sehen: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die Eigenschaften mit Präfix sind Aliase der Eigenschaften ohne Präfix.

Beachten Sie, dass andere Dinge den dargestellten Abstand vergrößern könnten, z. B. die Verwendung von Verteilungs-Schlüsselwörtern oder das Hinzufügen von Abständen zu den Elementen.

## Box-Ausrichtung nach Layout-Typ

Da die CSS-Box-Ausrichtungseigenschaften je nach Spezifikation unterschiedlich implementiert werden, sehen Sie die folgenden Leitfäden für Details zur Verwendung der Ausrichtungs-Eigenschaften mit jedem Layout-Typ:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## Siehe auch

- [CSS display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS flex layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
