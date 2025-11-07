---
title: Übersicht über die CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment/Box_alignment
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment) legt CSS-Funktionen fest, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layoutmodellen beziehen. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Die CSS-Box-Ausrichtungs-Eigenschaften bieten vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten weitere Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout) und [Block-, absolut positionierten und Tabellenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables). Die Ausrichtung von Text wird von den Modulen [CSS-Text](/de/docs/Web/CSS/Guides/Text) und [CSS-Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) abgedeckt.

## Schlüsselkonzepte und Terminologie

Die Spezifikation definiert einige Terminologien zur Ausrichtung, um es einfacher zu machen, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung in einer bestimmten Layoutmethode zu sprechen. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibmodi

Ausrichtung ist mit Schreibmodi verbunden, insofern als wir ein Element ausrichten, ohne darauf zu achten, ob wir es an den physischen Dimensionen oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig davon, welcher Schreibmodus das Dokument hat.

### Zwei Dimensionen der Ausrichtung

Beim Einsatz der Box-Ausrichtungs-Eigenschaften richten Sie Inhalte auf einer von zwei Achsen aus – der Inline- (oder Haupt-)Achse und der Block- (oder Kreuz-)Achse. Die Inline-Achse ist die Achse, entlang der Wörter in einem Satz im verwendeten Schreibmodus fließen. Für Englisch ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang der Blöcke, wie z.B. Absatz-Elemente, aufgebaut sind; sie verläuft quer zur Inline-Achse.

![Inline-Achse ist die links/rechts oder horizontale Richtung. Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das oben Genannte gilt, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es bei der Arbeit mit Flexbox leichter, an die Haupt- und Kreuzachse zu denken, anstatt an Inline- und Block-Achse. Die `justify-` Eigenschaften werden immer verwendet, um auf der Hauptachse auszurichten, die `align-` Eigenschaften auf der Kreuzachse.

### Das Ausrichtungsobjekt

Das **{{Glossary("alignment_subject", "Ausrichtungsobjekt")}}** ist das Objekt, das ausgerichtet wird. Bei `justify-self` oder `align-self`, oder beim Festlegen dieser Werte als Gruppe mit `justify-items` oder `align-items`, ist dies der Margin-Box des Elements, auf das diese Eigenschaft angewendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Objekt ausgerichtet wird. Dies ist typischerweise der enthaltende Block des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungsobjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei darin befindlichen Ausrichtungsobjekten.

![Eine Box, die zwei Rechtecke gleicher Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, d.h. beide haben ihre oberen Linien etwa 10px von der Oberkante der Box entfernt, in der sie enthalten sind.](align-container-subjects.png)

## Arten der Ausrichtung

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation beschreibt; diese verwenden Schlüsselwortwerte.

- [Positionsausrichtung](#positionsausrichtung)
- [Grundlinienaussrichtung](#grundlinienaussrichtung)
- [Verteilte Ausrichtung](#verteilte_ausrichtung)

### Positionsausrichtung

**Positionsausrichtung** ist die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer. Die Schlüsselwortwerte für die Positionsausrichtung sind für die Positionsausrichtung definiert und können als Werte für die Satzausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Abgesehen von den physischen Werten von `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, sind alle anderen Werte, die {{cssxref("self-position")}} und {{cssxref("content-position")}} Werte, logische Werte und beziehen sich auf den Schreibmodus des Inhalts.

Zum Beispiel, wenn Sie im CSS-Gitterlayout arbeiten und auf Englisch arbeiten und `justify-content` auf `start` setzen, werden die Elemente in die Inline-Dimension auf den Anfang verschoben, was links sein wird, da Sätze im Englischen auf der linken Seite der Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links geschriebene Sprache, verwenden, würde der gleiche Wert von `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber der Ort der beiden Anfänge ist durch den Schreibmodus unterschiedlich.

### Grundlinienaussrichtung

**Grundlinienaussrichtung** ist die Beziehung zwischen den Grundlinien von mehreren Ausrichtungsobjekten innerhalb eines Ausrichtungskontexts. Die Schlüsselwörter der Grundlinienaussrichtung {{cssxref("baseline-position")}} werden verwendet, um die Grundlinien von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Satzausrichtung mit `justify-content` und `align-content` und für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Grundlinien-Satzausrichtung – die Angabe eines Grundlinienaussrichtungswerts für `justify-content` oder `align-content` – funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungsobjekte sind mithilfe von Innenabstand innerhalb der Boxen aneinander ausgerichtet.

Grundlinien-Selbstausrichtung verschiebt die Boxen zur Ausrichtung nach Grundlinie, indem ein Außenabstand außerhalb der Boxen hinzugefügt wird. Die Selbstausrichtung erfolgt für einzelne Boxen unter Verwendung von `justify-self` oder `align-self` oder für Gruppen von Boxen unter Verwendung von `justify-items` und `align-items`.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als Verteilung von Raum zwischen Ausrichtungsobjekten. Die Schlüsselwörter der verteilten Ausrichtung {{cssxref("content-distribution")}} werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit zusätzlichem Raum passiert, nachdem Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden im Flex-Layout die Elemente initial mit `flex-start` ausgerichtet. Bei einem horizontalen Oben-nach-Unten-Schreibmodus (bei einer Sprache wie Englisch), bei dem `flex-direction` auf `row` gesetzt ist, beginnen die Elemente ganz links, und jeder verfügbare Raum nach der Anzeige der Elemente wird hinter ihnen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle zur linken Seite des enthaltenen Boxen ausgerichtet, mit etwa 10px zwischen ihnen und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf den Flex-Container setzen, wird der verfügbare Raum jetzt geteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist zur linken Seite des enthaltenen Boxen ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten verteilt.](justify-content-space-between.png)

Damit diese Schlüsselwörter wirksam werden, ist Raum entlang der Dimension erforderlich, in der Sie die Elemente ausrichten möchten. Ohne Raum ist nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele demonstrieren, wie einige der Box-Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angewendet werden.

#### Beispiel für die Ausrichtung im CSS-Grid-Layout

In diesem Grid-Layout-Beispiel gibt es zusätzlichen Raum im Grid-Container nach der Anordnung der festgelegten Tracks auf der Inline- (Haupt-)Achse. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-)Achse wird die Ausrichtung der Elemente innerhalb ihrer Rasterbereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den Wert `align-items`, der auf die Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

#### Beispiel für die Ausrichtung in Flexbox

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt `align-items`, das auf die Gruppe gesetzt ist, indem `align-self` auf `center` setzt.

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

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` helfen das Verhalten zu definieren, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das Schlüsselwort `safe` wird auf `start` ausrichten, wenn eine angegebene Ausrichtung einen Überlauf verursacht, mit dem Ziel, "Datenverlust" zu vermeiden, wo ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung beibehalten, selbst wenn dies einen solchen Datenverlust verursachen würde.

## Abstände zwischen Boxen

Die Box-Ausrichtungs-Spezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen das Setzen eines konsistenten Abstands zwischen Elementen in einer Zeile oder einer Spalte, in jeder Layoutmethode, die auf diese Weise angeordnete Elemente hat.

Die Eigenschaft `gap` ist eine Kurzform für `row-gap` und `column-gap`, die es ermöglicht, diese Eigenschaften gleichzeitig zu setzen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die `gap`-Kurzform, um einen `10px` Abstand zwischen Zeilenspuren und einen `2em` Abstand zwischen Spaltenspuren zu setzen.

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

Frühere Grid-Implementierungen beinhalteten `gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen die unpräfierten Eigenschaften, obwohl Sie möglicherweise die folgenden Eigenschaften in einer Codebasis sehen: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die Präfix-Versionen sind Aliase der unpräfixierten.

Seien Sie sich bewusst, dass andere Dinge den angezeigten visuellen Abstand vergrößern können, zum Beispiel durch die Verwendung der Schlüsselwörter zur Verteilung des Raums oder durch das Hinzufügen von Rändern zu den Elementen.

## Box-Ausrichtung nach Layout-Typ

Da die CSS-Box-Ausrichtungs-Eigenschaften je nach Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, verweisen Sie auf die folgenden Leitfäden für Details zur Verwendung der Ausrichtungseigenschaften mit jedem Layout-Typ:

- [Box-Ausrichtung in flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Ausrichtung bei Block-, absolut positionierten und Tabellenlayout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## Siehe auch

- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [CSS-Flex-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
