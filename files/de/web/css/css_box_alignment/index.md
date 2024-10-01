---
title: CSS-Box-Alignment
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Modul **CSS box alignment** spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen: Block-Layout, Tabellen-Layout, Flex-Layout und Grid-Layout. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Dieses Dokument beschreibt die allgemeinen Konzepte, die in der Spezifikation zu finden sind.

> [!NOTE]
> Die Dokumentation für jede Layoutmethode wird detailliert beschreiben, wie Box-Alignment dort angewendet wird.

## Ältere Ausrichtungsmethoden

CSS bot traditionell nur sehr begrenzte Ausrichtungsfähigkeiten. Wir konnten Text mit {{cssxref("text-align")}} ausrichten, Blöcke mit automatischen {{cssxref("margin")}}s zentrieren und in Tabellen- oder Inline-Block-Layouts mit der {{cssxref("vertical-align")}} Eigenschaft arbeiten. Die Ausrichtung von Text wird jetzt durch die [Inline Layout](https://www.w3.org/TR/css-inline-3/) und [CSS Text](https://www.w3.org/TR/css-text-3/) Module abgedeckt, und zum ersten Mal in Box-Alignment haben wir vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Wenn Sie anfänglich [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gelernt haben, dann könnten Sie diese Eigenschaften als Teil der Flexbox-Spezifikation betrachten, und einige der Eigenschaften sind tatsächlich in Level 1 von Flexbox aufgeführt. Die Spezifikation weist jedoch darauf hin, dass die Box-Alignment-Spezifikation herangezogen werden sollte, da sie möglicherweise zusätzliche Fähigkeiten bietet, die über das hinausgehen, was derzeit in Flexbox vorhanden ist.

## Basisbeispiele

Die folgenden Beispiele zeigen, wie einige der Box-Alignment-Eigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

### Beispiel für CSS-Grid-Layout-Ausrichtung

In diesem Beispiel mit Grid-Layout gibt es zusätzlichen Platz im Grid-Container, nachdem die festen Breiten-Tracks auf der Inline-(Haupt-)Achse angelegt wurden. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block-(Quer-)Achse wird die Ausrichtung der Elemente innerhalb ihrer Rasterbereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert, der auf die Gruppe gesetzt wurde, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 700)}}

### Flexbox-Ausrichtungsbeispiel

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt `align-items`, das auf die Gruppe gesetzt ist, indem es `align-self` auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 700)}}

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsbegriffe, um es einfacher zu machen, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layoutmethode zu sprechen. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibmodi

Die Ausrichtung ist mit Schreibmodi verknüpft, da wir, wenn wir ein Element ausrichten, nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der speziellen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, egal welchen Schreibmodus das Dokument hat.

### Zwei Ausrichtungsdimensionen

Wenn Sie die Box-Alignment-Eigenschaften verwenden, richten Sie Inhalte auf einer von zwei Achsen aus – der Inline-(oder Haupt-)Achse und der Block-(oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang der die Wörter in einem Satz im verwendeten Schreibmodus fließen – zum Beispiel ist die Inline-Achse im Englischen horizontal. Die Block-Achse ist die Achse, entlang der Blöcke, wie Absatzelemente, angelegt werden und sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die linke/rechte oder horizontale Richtung. Die Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Wenn Sie Elemente auf der Inline-Achse ausrichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Beim Ausrichten von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das Obige gilt, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden ausgetauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es einfacher, bei der Arbeit mit Flexbox an die Haupt- und Querachse zu denken, anstatt an Inline und Block. Die `justify-`-Eigenschaften werden immer zur Ausrichtung auf der Hauptachse verwendet, die `align-`-Eigenschaften auf der Querachse.

### Das Ausrichtungsobjekt

Das **Ausrichtungsobjekt** ist das, was ausgerichtet wird. Für `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` gesetzt werden, ist dies die Margenbox des Elements, für das diese Eigenschaft verwendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **Ausrichtungscontainer** ist die Box, in der das Subjekt ausgerichtet wird. Dies ist typischerweise der enthaltende Block des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungsobjekte enthalten.

Das unten stehende Bild zeigt einen Ausrichtungscontainer mit zwei darin enthaltenen Ausrichtungsobjekten.

![Eine Box, die zwei Rechtecke mit der gleichen Breite aber unterschiedlichen Höhen enthält. Die beiden Rechtecke sind oben ausgerichtet, was bedeutet, dass sie beide ihre oberen Linien etwa 10px innerhalb der Oberseite der Box haben, in der sie enthalten sind.](align-container-subjects.png)

### Fallback-Ausrichtung

Wenn Sie eine Ausrichtung einstellen, die nicht erfüllt werden kann, spielt die **Fallback-Ausrichtung** eine Rolle und befasst sich mit dem verfügbaren Raum. Diese Fallback-Ausrichtung wird individuell für jede Layoutmethode spezifiziert und auf der Seite für diese Methode detailliert beschrieben.

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung; diese verwenden Schlüsselwortwerte.

- **Positionale Ausrichtung**: die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer festlegen.
- **Baseline-Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als Beziehung zwischen den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts.
- **Verteilte Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als Verteilung des Raums zwischen den Ausrichtungsobjekten.

### Positionale Ausrichtung Schlüsselwortwerte

Die folgenden Werte sind für die positionale Ausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Abgesehen von den physischen Werten `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, sind alle anderen Werte logische Werte und beziehen sich auf den Schreibmodus des Inhalts.

Wenn Sie beispielsweise im CSS-Grid-Layout arbeiten und `justify-content` auf `start` setzen, wird dies im Inline-Dimensionselement zur Startposition bewegt, was im Englischen die linke Seite ist, da Sätze im Englischen auf der linken Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links lesende Sprache, verwenden, würde derselbe Wert von `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze im Arabischen auf der rechten Seite beginnen.

Beide dieser Beispiele haben `justify-content: start`, jedoch ändert sich der Standort von Start entsprechend dem Schreibmodus.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle zur linken Seite ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle zur rechten Seite ausgerichtet.](writing-mode-start.png)

### Baseline-Ausrichtung

Die Baseline-Ausrichtung Schlüsselwörter werden verwendet, um die Baselines von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Baseline-Inhaltsausrichtung – Festlegen eines Baseline-Ausrichtungwerts für `justify-content` oder `align-content` – funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungssubjekte sind gegeneinander durch das Hinzufügen von Auffüllungen innerhalb der Boxen basisausgerichtet.

Baseline-Selbstausrichtung verschiebt die Boxen, um sich durch die Baseline mit einer äußeren Margin an den Boxen auszurichten. Selbstausrichtung erfolgt, wenn Sie `justify-self` oder `align-self` verwenden, oder wenn Sie diese Werte als Gruppe mit `justify-items` und `align-items` setzen.

### Verteilte Ausrichtung

Die **verteilten Ausrichtungs-Schlüsselwörter** werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit zusätzlichem Raum geschieht, nachdem die Ausrichtungssubjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Wenn Sie beispielsweise im Flex-Layout arbeiten, werden Elemente zunächst mit `flex-start` ausgerichtet. Bei Verwendung eines horizontalen, von oben nach unten Schreibmodus wie Englisch, mit `flex-direction` als `row`, beginnen die Elemente ganz links und der verfügbare Raum nach dem Anzeigen der Elemente wird nach den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle an der linken Seite der enthaltenden Box ausgerichtet, mit etwa 10px dazwischen und 10px zwischen der linken Seite des ersten Rechtecks und dem Elterncontainer.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf den Flex-Container setzen, wird der verfügbare Raum jetzt aufgeteilt und zwischen die Elemente gelegt.

![Drei Rechtecke unterschiedlicher Breite sind in einer Box. Das erste Rechteck ist an der linken Seite der enthaltenden Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten verteilt.](justify-content-space-between.png)

Es muss Raum in der Dimension verfügbar sein, in der Sie die Elemente ausrichten möchten, damit diese Schlüsselwörter Wirkung zeigen. Ohne Raum gibt es nichts zu verteilen.

## Überlaufausrichtung

Die Schlüsselwörter `safe` und `unsafe` helfen dabei, das Verhalten zu definieren, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das `safe`-Schlüsselwort wird im Falle eines angegebenen Ausrichtung, die einen Überlauf verursacht, auf `start` ausrichten, wobei das Ziel darin besteht, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung respektiert, auch wenn dies zu einem solchen Datenverlust führen würde.

## Abstände zwischen Boxen

Die Box-Alignment-Spezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen die Einstellung eines konsistenten Abstands zwischen Elementen in einer Reihe oder Spalte, in jeder Layoutmethode, die Elemente auf diese Weise anordnet.

Die `gap`-Eigenschaft ist eine Kurzschreibweise für `row-gap` und `column-gap`, die uns ermöglicht, diese Eigenschaften auf einmal zu setzen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

In dem unten stehenden Beispiel verwendet ein Grid-Layout die `gap`-Kurzschreibweise, um einen `10px` Abstand zwischen Reihen-Tracks und einen `2em` Abstand zwischen Spalten-Tracks festzulegen.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 700)}}

> [!NOTE]
> Die frühe Grid-Implementierung enthielt `-gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen nun die unpräfixierten Eigenschaften, obwohl Sie in Beispielen und Tutorials die folgenden veralteten Eigenschaften sehen könnten: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die vorgepräxten Versionen werden als Aliase der unpräfixierten beibehalten.

Seien Sie sich bewusst, dass andere Dinge den sichtbaren Abstand vergrößern können, zum Beispiel die Verwendung der Schlüsselwörter zur Raumverteilung oder das Hinzufügen von Margen zu Elementen.

## Seiten, die einzelne Ausrichtungseigenschaften detailliert beschreiben

Da die CSS-Box-Alignment-Eigenschaften abhängig von der Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, verweisen Sie auf die folgenden Seiten für jeden Layout-Typ für Details zur Verwendung der Ausrichtungseigenschaften damit:

- [Box-Alignment in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Alignment im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Alignment im Mehrspalten-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Alignment für Block-, absolut positionierte und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossareinträge

- {{Glossary("Cross_axis", "Querachse")}}
- {{Glossary("Main_axis", "Hauptachse")}}
- {{Glossary("Alignment_container", "Ausrichtungscontainer")}}
- {{Glossary("Alignment_subject", "Ausrichtungsobjekt")}}
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Alignment in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
