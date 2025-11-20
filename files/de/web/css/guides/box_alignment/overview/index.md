---
title: Überblick über die Ausrichtung in CSS-Boxen
short-title: Overview
slug: Web/CSS/Guides/Box_alignment/Overview
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment) spezifiziert CSS-Funktionen, die mit der Ausrichtung von Boxen in den verschiedenen CSS-Box-Layoutmodellen zusammenhängen. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Die CSS-Box-Ausrichtungs-Eigenschaften bieten vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Weitere Leitfäden bieten mehr Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout) und [Block-, absolut positioniertem und Tabellenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables). Die Ausrichtung von Text wird durch die Module [CSS-Text](/de/docs/Web/CSS/Guides/Text) und [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) abgedeckt.

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es einfacher zu machen, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layoutmethode zu diskutieren. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu den Schreibmodi

Die Ausrichtung ist mit den Schreibmodi verknüpft, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an physischen Dimensionen wie oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung im Hinblick auf den Anfang und das Ende der bestimmten Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig davon, welcher Schreibmodus im Dokument verwendet wird.

### Zwei Dimensionen der Ausrichtung

Bei der Verwendung der Box-Ausrichtungs-Eigenschaften richten Sie den Inhalt entlang einer von zwei Achsen aus — der Inline- (oder Haupt-) Achse und der Block- (oder Quer-) Achse. Die Inline-Achse ist die Achse, entlang derer die Wörter in einem Satz im verwendeten Schreibmodus fließen. Für Englisch ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie die Paragrafelemente, angeordnet sind; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die linke / rechte oder horizontale Richtung. Die Block-Achse ist vertikal oder oben / unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das Obige wahr ist, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften sind vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es bei der Arbeit mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken, statt über Inline und Block. Die `justify-`-Eigenschaften werden immer zur Ausrichtung auf der Hauptachse verwendet, die `align-`-Eigenschaften auf der Querachse.

### Das Ausrichtungsobjekt

Das **{{Glossary("alignment_subject", "Ausrichtungsobjekt")}}** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self` oder beim Festlegen dieser Werte als Gruppe mit `justify-items` oder `align-items` wird dies der Margenbereich des Elements sein, auf dem diese Eigenschaft verwendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Objekt ausgerichtet wird. Dies ist typischerweise der enthaltende Block des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder viele Ausrichtungsobjekte enthalten.

Das untenstehende Bild zeigt einen Ausrichtungscontainer mit zwei darin enthaltenen Ausrichtungsobjekten.

![Eine Box enthält zwei Rechtecke gleicher Breite, aber unterschiedlicher Höhe. Die beiden Rechtecke sind oben ausgerichtet, das heißt, beide haben ihre oberen Linien etwa 10px innerhalb des oberen Teils der Box, in der sie enthalten sind.](align-container-subjects.png)

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung, die diese Schlüsselwortwerte verwenden.

- [Positionale Ausrichtung](#positionale_ausrichtung)
- [Grundlinienaussrichtung](#grundlinienaussrichtung)
- [Verteilte Ausrichtung](#verteilte_ausrichtung)

### Positionale Ausrichtung

**Positionale Ausrichtung** ist die Position eines Ausrichtungsobjekts im Verhältnis zu seinem Ausrichtungscontainer. Die Schlüsselwortwerte der positionalen Ausrichtung sind für die positionale Ausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

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

Zum Beispiel, wenn Sie im CSS-Grid-Layout arbeiten, und Sie arbeiten auf Englisch, und setzen `justify-content` auf `start`, dann verschiebt sich die Elemente in der Inlinedimension zum Anfang, was links sein wird, da Sätze im Englischen links auf der Seite beginnen. Wenn Sie Arabisch verwenden, eine von rechts nach links geschriebene Sprache, würde derselbe Wert von `start` dazu führen, dass sich die Elemente nach rechts bewegen, da Sätze im Arabischen rechts auf der Seite beginnen.

![Es gibt zwei Boxen, jeweils mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber die Lage der beiden Starts ist anders wegen des Schreibmodus.

### Grundlinienaussrichtung

**Grundlinienaussrichtung** ist das Verhältnis zwischen den Grundlinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Die Schlüsselwörter der Grundlinienaussrichtung {{cssxref("baseline-position")}} werden verwendet, um die Grundlinien von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` und zur Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Die Grundlinien-Inhaltsausrichtung — eine Grundlinienaussicht für `justify-content` oder `align-content` anzugeben — funktioniert in Layoutmethoden, die Elemente in Zeilen anordnen. Die Ausrichtungsobjekte sind grundlinienmäßig aneinander ausgerichtet, indem Padding innerhalb der Boxen hinzugefügt wird.

Die Grundlinien-Selbstausrichtung verschiebt die Boxen zur Ausrichtung nach Grundlinie, indem ein Rand außerhalb der Boxen hinzugefügt wird. Die Selbstausrichtung wird für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items` durchgeführt.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung des Raums unter den Ausrichtungsobjekten. Die Schlüsselwörter der verteilten Ausrichtung {{cssxref("content-distribution")}} werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit jeglichem zusätzlichen Raum geschieht, nachdem die Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden in der Flex-Layout die Elemente zunächst mit `flex-start` ausgerichtet. In einem horizontalen Schreibmodus von oben nach unten (mit einer Sprache wie Englisch), mit `flex-direction` auf `row` gesetzt, beginnen die Elemente ganz links, und jeder verfügbare Platz nach dem Anzeigen der Elemente wird hinter ihnen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle an der linken Seite der umgebenden Box ausgerichtet, mit etwa 10px dazwischen und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container setzen, wird der verfügbare Platz jetzt aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist an der linken Seite der umgebenden Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten verteilt.](justify-content-space-between.png)

Damit diese Schlüsselwörter wirksam werden, muss Raum entlang der Dimension vorhanden sein, in der Sie die Elemente ausrichten möchten. Ohne Raum gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angewendet werden.

#### Ausrichtungsbeispiel für CSS-Grid-Layout

In diesem Grid-Layout-Beispiel befindet sich nach dem Anordnen der Track-Breiten mit fester Breite auf der Inline- (Haupt-) Achse zusätzlicher Platz im Grid-Container. Dieser Raum wird mithilfe von {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Rasterbereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert, der auf die Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

#### Ausrichtungsbeispiel für Flexbox

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt die `align-items`, die auf die Gruppe gesetzt sind, indem es `align-self` auf `center` setzt.

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

Die {{cssxref("overflow-position")}}-Schlüsselwörter `safe` und `unsafe` helfen dabei, das Verhalten zu definieren, wenn ein Ausrichtungsobjekt größer ist als der Ausrichtungscontainer. Das `safe`-Schlüsselwort richtet an `start` aus, falls eine festgelegte Ausrichtung einen Überlauf verursacht, wobei das Ziel darin besteht, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung beibehalten, auch wenn dies zu solch einem Datenverlust führen würde.

## Abstände zwischen Boxen

Die Box-Ausrichtungsspezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen die Einstellung eines konsistenten Abstands zwischen Elementen in einer Zeile oder Spalte, in jedem Layoutverfahren, bei dem Elemente auf diese Weise angeordnet sind.

Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`, die uns ermöglicht, diese Eigenschaften auf einmal festzulegen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im nachstehenden Beispiel verwendet ein Grid-Layout die `gap`-Kurzform, um einen `10px`-Abstand zwischen den Zeilentracks und einen `2em`-Abstand zwischen den Spaltentracks festzulegen.

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

Frühe Grid-Implementierungen enthielten `gap`-Eigenschaften, die mit `grid-` vorangestellt waren. Alle Browser unterstützen die unpräfixierten Eigenschaften, obwohl Sie möglicherweise die folgenden Eigenschaften in einem Codebestand sehen: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die vorangestellten Versionen sind Aliase der unpräfixierten.

Seien Sie sich bewusst, dass andere Dinge den angezeigten visuellen Abstand erhöhen können, zum Beispiel durch die Verwendung der Raumverteilungsschlüsselwörter oder das Hinzufügen von Rändern zu Elementen.

## Box-Ausrichtung nach Layout-Typ

Da die CSS-Box-Ausrichtungseigenschaften je nach der Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, lesen Sie bitte die folgenden Leitfäden für Details zur Nutzung der Ausrichtungseigenschaften mit jedem Layout-Typ:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## Siehe auch

- [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display)
- [CSS-Flex-Layout-Modul](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS-Grid-Layout-Modul](/de/docs/Web/CSS/Guides/Grid_layout)
