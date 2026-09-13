---
title: Überblick über die CSS-Box-Ausrichtung
short-title: Overview
slug: Web/CSS/Guides/Box_alignment/Overview
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

Das [CSS-Box-Ausrichtungs-Modul](/de/docs/Web/CSS/Guides/Box_alignment) spezifiziert CSS-Funktionen, die sich mit der Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen befassen. Das Modul hat das Ziel, eine konsistente Methode der Ausrichtung über alle CSS-Bereiche hinweg zu schaffen. Die CSS-Box-Ausrichtungs-Eigenschaften bieten vollständige Möglichkeiten zur horizontalen und vertikalen Ausrichtung.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten mehr Informationen zur Box-Ausrichtung in [flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [Mehrspalt-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout) und [Block-, absolut positioniertem sowie Tabellen-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables). Die Textausrichtung wird von den Modulen [CSS-Text](/de/docs/Web/CSS/Guides/Text) und [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) abgedeckt.

## Hauptkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es einfacher zu machen, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layoutmethode zu diskutieren. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibmodi

Ausrichtung ist mit Schreibmodi verknüpft, da, wenn wir ein Element ausrichten, wir nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung gleichermaßen funktioniert, unabhängig davon, welchen Schreibmodus das Dokument hat.

### Zwei Dimensionen der Ausrichtung

Beim Einsatz der Box-Ausrichtungs-Eigenschaften richten Sie den Inhalt an einer von zwei Achsen aus — der Inline- (oder Haupt-) Achse und der Block- (oder Kreuz-) Achse. Die Inline-Achse ist die Achse, entlang derer die Wörter in einem Satz im verwendeten Schreibmodus fließen. Im Englischen ist beispielsweise die Inline-Achse horizontal. Die Block-Achse ist die Achse, entlang der Blöcke, wie Paragraphenelemente, angeordnet werden; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die links/rechts bzw. horizontale Richtung. Die Block-Achse ist vertikal bzw. oben/unten.](two-axes.png)

Beim Ausrichten von Elementen an der Inline-Achse verwenden Sie Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Beim Ausrichten von Elementen an der Block-Achse verwenden Sie Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox bringt eine zusätzliche Komplikation mit sich, dass das Obige zutrifft, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden ausgetauscht, wenn Flexbox auf `column` eingestellt ist. Daher ist es im Allgemeinen einfacher, bei Flexbox über die Haupt- und Kreuzachse nachzudenken, anstatt über Inline- und Block-Achsen. Die `justify-` Eigenschaften werden immer verwendet, um an der Hauptachse auszurichten, die `align-` Eigenschaften an der Kreuzachse.

### Das Ausrichtungssubjekt

Das **{{Glossary("alignment_subject", "Ausrichtungssubjekt")}}** ist das Objekt, das ausgerichtet wird. Bei `justify-self` oder `align-self` oder beim Setzen dieser Werte als Gruppe mit `justify-items` oder `align-items` wird dies die Randbox des Elements sein, auf dem diese Eigenschaft verwendet wird. Die `justify-content` und `align-content` Eigenschaften unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Subjekt ausgerichtet wird. Dies ist in der Regel der umgebende Block des Ausrichtungssubjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungssubjekte enthalten.

Das untenstehende Bild zeigt einen Ausrichtungscontainer mit zwei Ausrichtungssubjekten darin.

![Eine Box, die zwei Rechtecke der gleichen Breite, aber unterschiedlicher Höhen enthält. Die beiden Rechtecke sind oben ausgerichtet, was bedeutet, dass beide ihre oberen Linien etwa 10px innerhalb des oberen Bereichs der Box haben, in der sie sich befinden.](align-container-subjects.png)

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung, die jeweils Schlüsselwortwerte verwenden.

- [Positionelle Ausrichtung](#positionelle_ausrichtung)
- [Baseline-Ausrichtung](#baseline-ausrichtung)
- [Verteilte Ausrichtung](#verteilte_ausrichtung)

### Positionelle Ausrichtung

**Positionelle Ausrichtung** bezieht sich auf die Position eines Ausrichtungssubjekts in Bezug auf seinen Ausrichtungscontainer. Die Schlüsselwortwerte der positionellen Ausrichtung sind definiert für die positionelle Ausrichtung und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

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

Zum Beispiel, wenn Sie im CSS-Grid-Layout arbeiten und in Englisch `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension an den Anfang verschoben, was links sein wird, da Sätze im Englischen von der linken Seite der Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links verlaufende Sprache, verwenden, würde derselbe Wert `start` die Elemente nach rechts verschieben, da Sätze im Arabischen von der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhen, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber der Ort der beiden Starts ist aufgrund des Schreibmodus unterschiedlich.

### Baseline-Ausrichtung

**Baseline-Ausrichtung** ist das Verhältnis zwischen den Baselines mehrerer Ausrichtungssubjekte innerhalb eines Ausrichtungsrahmens. Die Baseline-Ausrichtung-{{cssxref("baseline-position")}}-Schlüsselwörter werden verwendet, um die Baselines von Boxen in einer Gruppe von Ausrichtungssubjekten auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` und für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Die Baseline-Inhaltsausrichtung — bei der eine Baseline-Ausrichtung für `justify-content` oder `align-content` festgelegt wird — funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungssubjekte sind durch Hinzufügen von Polsterung innerhalb der Boxen an den Baselines gegeneinander ausgerichtet.

Die Baseline-Selbstausrichtung verschiebt die Boxen zur Ausrichtung an der Baseline, indem ein Rand außerhalb der Boxen hinzugefügt wird. Die Selbstausrichtung erfolgt für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items`.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung des Raumes zwischen Ausrichtungssubjekten. Die verteilten Ausrichtungs-{{cssxref("content-distribution")}}-Schlüsselwörter werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit jedem zusätzlichen Raum passiert, nachdem die Ausrichtungssubjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel sind im Flex-Layout die Elemente zunächst mit `flex-start` ausgerichtet. Arbeiten in einem horizontalen Top-to-Bottom-Schreibmodus (mit einer Sprache wie Englisch) und mit `flex-direction` auf `row` eingestellt, beginnen die Elemente ganz links, und jeder verfügbare Raum nach der Anzeige der Elemente wird hinter ihnen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle an der linken Seite der umschließenden Box ausgerichtet, mit etwa 10px Abstand zwischen ihnen, und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container einstellen, wird der verfügbare Raum nun aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist an der linken Seite der umschließenden Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und dem letzten verteilt.](justify-content-space-between.png)

Damit diese Schlüsselwörter Wirkung zeigen, wird Raum entlang der Dimension benötigt, in der Sie die Elemente ausrichten möchten. Ohne Raum gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele demonstrieren, wie einige der Box-Ausrichtungs-Eigenschaften in [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angewendet werden.

#### CSS-Grid-Layout-Ausrichtungsbeispiel

In diesem Grid-Layout-Beispiel gibt es zusätzlichen Raum im Grid-Container nach dem Layout der festbreiten Tracks auf der Inline- (Haupt-) Achse. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block- (Kreuz-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Gitterbereiche mit {{cssxref("align-items")}} kontrolliert. Das erste Element überschreibt den `align-items`-Wert, der auf die Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

In diesem Beispiel sind drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Kreuzachse mit `align-items` ausgerichtet. Das erste Element überschreibt das `align-items`, das auf die Gruppe gesetzt ist, indem es `align-self` auf `center` setzt.

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

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` helfen, das Verhalten zu definieren, wenn ein Ausrichtungssubjekt größer ist als der Ausrichtungscontainer. Das Schlüsselwort `safe` wird auf `start` ausrichten im Falle eines spezifizierten Ausrichtungswertes, welcher einen Überlauf verursacht, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements sich außerhalb der Grenzen des Ausrichtungscontainers befindet und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung auch dann beachtet, wenn sie zu einem solchen Datenverlust führen würde.

## Lücken zwischen Boxen

Die Box-Ausrichtungs-Spezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen es, eine konsistente Lücke zwischen Elementen in einer Reihe oder einer Spalte einzustellen, in jedem Layout, das Elemente auf diese Weise anordnet.

Die Eigenschaft `gap` ist eine Kurzform für `row-gap` und `column-gap`, mit der wir diese Eigenschaften gleichzeitig festlegen können:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die Kurzform `gap`, um einen `10px` Abstand zwischen den Zeilenraster und einen `2em` Abstand zwischen den Spaltenraster einzustellen.

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

Frühe Grid-Implementierungen enthielten `gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen die nicht präfixierten Eigenschaften, obwohl Sie in einem Code-Bereich die folgenden Eigenschaften sehen könnten: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die präfixierten Versionen sind Aliasse der nicht präfixierten.

Seien Sie sich bewusst, dass andere Dinge den visuell angezeigten Abstand erhöhen können, beispielsweise die Verwendung der Raumverteilungs-Schlüsselwörter oder die Hinzufügung von Rändern zu Elementen.

## Box-Ausrichtung nach Layouttyp

Da die CSS-Box-Ausrichtungs-Eigenschaften je nach der Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, beziehen Sie sich auf die folgenden Leitfäden für Details zur Nutzung der Ausrichtungseigenschaften mit jedem Layouttyp:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspalt-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellen-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## Siehe auch

- [CSS-Box-Ausrichtungs-Modul](/de/docs/Web/CSS/Guides/Box_alignment)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display)
- [CSS-Flexlayout-Modul](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Elemente in einem Flexcontainer ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS-Grid-Layout-Modul](/de/docs/Web/CSS/Guides/Grid_layout)
