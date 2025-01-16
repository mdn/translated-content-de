---
title: Überblick über die CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment/Box_alignment
l10n:
  sourceCommit: 243e5eabfe95971f2850fcfdf2a7b2f210c85532
---

{{CSSRef}}

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Die CSS-Box-Ausrichtungs-Eigenschaften bieten vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten weitere Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox), [Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout) und [Block-, absolut positioniertem und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables). Die Ausrichtung von Text wird durch die [CSS-Text](/de/docs/Web/CSS/CSS_text) und [CSS-Inline-Layout](/de/docs/Web/CSS/CSS_inline_layout) Module abgedeckt.

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es einfacher zu machen, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layout-Methode zu sprechen. Es gibt auch einige Schlüsselkonzepte, die für alle Layout-Methoden gemeinsam sind.

### Beziehung zu Schreibmodi

Die Ausrichtung ist mit Schreibmodi verbunden, da wir beim Ausrichten eines Elements nicht berücksichtigen, ob wir es zu den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung unabhängig vom im Dokument verwendeten Schreibmodus gleich funktioniert.

### Zwei Dimensionen der Ausrichtung

Bei der Verwendung der Box-Ausrichtungs-Eigenschaften richten Sie den Inhalt auf einer von zwei Achsen aus — der Inline- (oder Haupt-)Achse und der Block- (oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang der die Wörter in einem Satz im verwendeten Schreibmodus fließen. Im Englischen ist beispielsweise die Inline-Achse horizontal. Die Block-Achse ist die Achse, entlang der Blöcke wie Absatz-Elemente angeordnet werden; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die linke/rechte oder horizontale Richtung. Die Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das oben Gesagte zutrifft, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es einfacher, bei der Arbeit mit Flexbox an die Haupt- und Querachse anstelle von Inline und Block zu denken. Die `justify-` Eigenschaften werden immer verwendet, um auf der Hauptachse auszurichten, die `align-` Eigenschaften auf der Querachse.

### Das Ausrichtungsobjekt

Das **{{Glossary("alignment_subject", "Ausrichtungsobjekt")}}** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` festgelegt werden, wird dies die Margin-Box des Elements sein, auf das diese Eigenschaft angewendet wird. Die `justify-content` und `align-content` Eigenschaften unterscheiden sich je nach Layout-Methode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Ausrichtungsobjekt ausgerichtet wird. Dies ist typischerweise der enthaltene Block des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungsobjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei darin befindlichen Ausrichtungsobjekten.

![Eine Box, die zwei Rechtecke gleicher Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, was bedeutet, dass sie beide ihre oberen Linien etwa 10 Pixel innerhalb des oberen Randes der Box haben, in der sie enthalten sind.](align-container-subjects.png)

## Ausrichtungsarten

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation beschreibt; diese verwenden Schlüsselwert-Werte.

- [Positionale Ausrichtung](#positional-alignment)
- [Basislinienausrichtung](#baseline-alignment)
- [Verteilte Ausrichtung](#distributed-alignment)

### Positionale Ausrichtung

**Positionale Ausrichtung** ist die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer. Die Schlüsselwert-Werte für die positionale Ausrichtung sind definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

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

Zum Beispiel, wenn Sie in einem CSS-Grid-Layout arbeiten, auf Englisch arbeiten und `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension an den Anfang verschoben, was links sein wird, da Sätze im Englischen auf der linken Seite der Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links verlaufende Sprache, verwenden, würde der gleiche Wert von `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber der Ort der beiden Starts ist aufgrund des Schreibmodus unterschiedlich.

### Basislinienausrichtung

**Basislinienausrichtung** ist die Beziehung zwischen den Basislinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts. Die Basislinienausrichtung {{cssxref("baseline-position")}} Schlüsselwörter werden verwendet, um die Basislinien von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` und für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Die Basislinienaussrichtung des Inhalts — das Angeben eines Basislinienaussrichtungswerts für `justify-content` oder `align-content` — funktioniert in Layout-Methoden, die Elemente in Reihen anordnen. Die Ausrichtungsobjekte werden durch das Hinzufügen von Innenabstand innerhalb der Boxen an ihrer Basislinie ausgerichtet.

Die Basislinienaussrichtung von Einzelobjekten verschiebt die Boxen, um sie durch Hinzufügen eines Außenabstands außerhalb der Boxen an ihrer Basislinie auszurichten. Die Selbstausrichtung wird für einzelne Boxen mittels `justify-self` oder `align-self` durchgeführt, oder für Gruppen von Boxen mittels `justify-items` und `align-items`.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung von Raum zwischen Ausrichtungsobjekten. Die verteilte Ausrichtung {{cssxref("content-distribution")}} Schlüsselwörter werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit zusätzlichem Raum passiert, nachdem Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

In einem Flex-Layout werden zum Beispiel Elemente standardmäßig mit `flex-start` ausgerichtet. In einem horizontalen Schreibmodus von oben nach unten (mit einer Sprache wie Englisch) und mit `flex-direction` auf `row` gesetzt, beginnen die Elemente ganz links, und jeder verfügbare Raum nach der Anzeige der Elemente wird nach ihnen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle an der linken Seite der enthaltenden Box ausgerichtet, mit etwa 10 Pixeln Abstand zwischen ihnen und 10 Pixeln zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container festlegen, wird der verfügbare Raum jetzt aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist an der linken Seite der enthaltenden Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist in gleichem Abstand zwischen dem ersten und dem letzten platziert.](justify-content-space-between.png)

Damit diese Schlüsselwörter Wirkung zeigen, ist Raum erforderlich entlang der Dimension, in der Sie die Elemente ausrichten möchten. Ohne Raum gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Box-Ausrichtungs-Eigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

#### CSS-Grid-Layout-Ausrichtungsbeispiel

In diesem Grid-Layout-Beispiel gibt es zusätzlichen Raum im Grid-Container, nachdem die festen Breiten-Tracks auf der Inline- (Haupt-)Achse ausgelegt wurden. Dieser Raum wird mittels {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-)Achse wird die Ausrichtung der Elemente in ihren Grid-Bereichen mit {{cssxref("align-items")}} kontrolliert. Das erste Element überschreibt den `align-items` Wert, der auf die Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mittels `justify-content` und auf der Querachse mittels `align-items` ausgerichtet. Das erste Element überschreibt den für die Gruppe gesetzten `align-items`, indem es `align-self` auf `center` setzt.

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

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` helfen, das Verhalten zu definieren, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das `safe` Schlüsselwort wird bei einer Ausrichtung zu `start` ausrichten, falls eine festgelegte Ausrichtung einen Überlauf verursacht, wobei das Ziel ist, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers landet und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung beachtet, auch wenn dadurch ein solcher Datenverlust verursacht wird.

## Abstände zwischen Boxen

Die Box-Ausrichtungs-Spezifikation enthält auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen es, einen konsistenten Abstand zwischen Elementen in einer Reihe oder Spalte in jeder Layout-Methode einzustellen, die Elemente auf diese Weise anordnet.

Die Eigenschaft `gap` ist eine Kurzform für `row-gap` und `column-gap`, die es uns ermöglicht, diese Eigenschaften gleichzeitig festzulegen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die Kurzform `gap`, um einen Abstand von `10px` zwischen Reihen-Tracks und einen Abstand von `2em` zwischen Spalten-Tracks festzulegen.

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

Frühere Grid-Implementierungen enthielten `gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen die nicht mit dem Präfix versehenen Eigenschaften, dennoch können Sie die folgenden Eigenschaften in einem Code-Bestand sehen: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die mit dem Präfix versehenen Versionen sind Aliase der nicht mit dem Präfix versehenen.

Seien Sie sich bewusst, dass andere Dinge die visuell angezeigte Lücke vergrößern können, z.B. die Verwendung von Schlüsselwörtern zur Verteilung von Abständen oder das Hinzufügen von Rändern zu Elementen.

## Box-Ausrichtung nach Layout-Typ

Da die CSS-Box-Ausrichtungs-Eigenschaften je nach der Spezifikation, mit der sie interagieren, unterschiedlich implementiert sind, beziehen Sie sich auf die folgenden Leitfäden für Details zur Verwendung der Ausrichtungseigenschaften mit jedem Layout-Typ:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung in Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertem und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## Siehe auch

- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
