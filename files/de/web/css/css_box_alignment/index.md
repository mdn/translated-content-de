---
title: CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das **CSS-Box-Ausrichtungsmodul** spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen: Block-Layout, Tabellen-Layout, Flex-Layout und Grid-Layout. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Dieses Dokument beschreibt die allgemeinen Konzepte, die in der Spezifikation zu finden sind.

> [!NOTE]
> Die Dokumentation für jede Layout-Methode wird im Detail zeigen, wie die Box-Ausrichtung dort angewendet wird.

## Ältere Ausrichtungsmethoden

Traditionell hatte CSS sehr begrenzte Ausrichtungsfähigkeiten. Wir konnten Text mit {{cssxref("text-align")}} ausrichten, Blöcke mit automatischen {{cssxref("margin")}}s zentrieren und in Tabellen- oder Inline-Block-Layouts die {{cssxref("vertical-align")}}-Eigenschaft verwenden. Die Ausrichtung von Text wird jetzt durch die Module [Inline Layout](https://www.w3.org/TR/css-inline-3/) und [CSS Text](https://www.w3.org/TR/css-text-3/) abgedeckt, und zum ersten Mal haben wir mit der Box-Ausrichtung vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Wenn Sie ursprünglich [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gelernt haben, könnten Sie diese Eigenschaften als Teil der Flexbox-Spezifikation betrachten, und einige der Eigenschaften sind tatsächlich in Level 1 von Flexbox aufgeführt. Die Spezifikation weist jedoch darauf hin, dass die Box-Ausrichtungsspezifikation herangezogen werden sollte, da sie zusätzliche Fähigkeiten über das hinaus bieten kann, was derzeit in Flexbox enthalten ist.

## Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Box-Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

### Beispiel für die CSS-Grid-Layout-Ausrichtung

In diesem Beispiel mit Grid-Layout gibt es nach der Anordnung der fixen Breiten-Spuren auf der Inline- (Haupt-) Achse zusätzlichen Platz im Grid-Container. Dieser Raum wird mit {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert, der in der Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 700)}}

### Beispiel für Flexbox-Ausrichtung

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt die für die Gruppe gesetzte `align-items`, indem es `align-self` auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 700)}}

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es einfacher zu machen, diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layout-Methode zu diskutieren. Es gibt auch einige Schlüsselkonzepte, die für alle Layout-Methoden gemeinsam sind.

### Beziehung zu Schreibrichtungen

Die Ausrichtung ist mit den Schreibrichtungen verknüpft, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der speziellen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig davon, welchen Schreibmodus das Dokument hat.

### Zwei Dimensionen der Ausrichtung

Wenn Sie die Box-Ausrichtungseigenschaften verwenden, richten Sie den Inhalt auf einer von zwei Achsen aus – der Inline- (oder Haupt-) Achse und der Block- (oder Quer-) Achse. Die Inline-Achse ist die Achse, entlang derer die Wörter in einem Satz im verwendeten Schreibmodus fließen – für Englisch beispielsweise ist die Inline-Achse horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie Absatzelemente, angeordnet werden und sie verläuft quer zur Inline-Achse.

![Inline-Achse ist die linke / rechte oder horizontale Richtung. Block-Achse ist vertikal oder oben / unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, dass das oben Gesagte zutrifft, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es beim Arbeiten mit Flexbox einfacher, über Haupt- und Querachse statt über Inline- und Block-Achse nachzudenken. Die `justify-` Eigenschaften werden immer zur Ausrichtung auf der Hauptachse verwendet, die `align-` Eigenschaften auf der Querachse.

### Das Ausrichtungssubjekt

Das **Ausrichtungssubjekt** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self`, oder beim Setzen dieser Werte als Gruppe mit `justify-items` oder `align-items`, wird dies die Margin-Box des Elements sein, auf dem diese Eigenschaft verwendet wird. Die `justify-content`- und `align-content`-Eigenschaften unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **Ausrichtungscontainer** ist die Box, in der das Subjekt ausgerichtet wird. Dies ist typischerweise der enthaltende Block des Ausrichtungssubjekts. Ein Ausrichtungscontainer kann eines oder mehrere Ausrichtungssubjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei Ausrichtungssubjekten darin.

![Eine Box, die zwei Rechtecke mit gleicher Breite, aber unterschiedlicher Höhe enthält. Die zwei Rechtecke sind oben ausgerichtet, was bedeutet, dass beide ihre oberen Kanten etwa 10px innerhalb des oberen Rands der Box haben, in der sie enthalten sind.](align-container-subjects.png)

### Fallback-Ausrichtung

Wenn Sie eine Ausrichtung festlegen, die nicht erfüllt werden kann, tritt die **Fallback-Ausrichtung** in Kraft und kümmert sich um den verfügbaren Platz. Diese Fallback-Ausrichtung ist individuell für jede Layout-Methode festgelegt und auf der Seite für diese Methode detailliert beschrieben.

## Arten der Ausrichtung

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation beschreibt; diese verwenden Schlüsselwortwerte.

- **Positionale Ausrichtung**: spezifiziert die Position eines Ausrichtungssubjekts in Bezug auf seinen Ausrichtungscontainer.
- **Basislinien-Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als Beziehung zwischen den Baselines mehrerer Ausrichtungssubjekte innerhalb eines Ausrichtungskontexts.
- **Verteilte Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als Verteilung des Raumes unter den Ausrichtungssubjekten.

### Schlüsselwerten der positionalen Ausrichtung

Die folgenden Werte sind für die positionale Ausrichtung definiert und können als Werte für Inhaltsausrichtung mit `justify-content` und `align-content` sowie für Selbst-Ausrichtung mit `justify-self` und `align-self` verwendet werden.

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

Zum Beispiel, wenn Sie mit CSS-Grid-Layout arbeiten und in Englisch arbeiten und `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension zum Anfang bewegt, der links sein wird, da Sätze in Englisch links beginnen. Wenn Sie Arabisch, eine von rechts nach links verlaufende Sprache, verwenden, würde derselbe Wert von `start` dazu führen, dass die Elemente nach rechts bewegt werden, da Sätze in Arabisch rechts auf der Seite beginnen.

Beide Beispiele haben `justify-content: start`, jedoch ändert sich die Position von start je nach Schreibmodus.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben in ihnen. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

### Basislinien-Ausrichtung

Die Schlüsselwörter der Basislinien-Ausrichtung werden verwendet, um die Baselines von Boxen in einer Gruppe von Ausrichtungssubjekten auszurichten. Sie können als Werte für Inhaltsausrichtung mit `justify-content` und `align-content` und auch für Selbst-Ausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Die Basislinien-Inhaltsausrichtung – die Festlegung eines Basislinien-Ausrichtungswerts für `justify-content` oder `align-content` – funktioniert in Layout-Methoden, die Elemente in Zeilen anordnen. Die Ausrichtungssubjekte werden durch das Hinzufügen von Innenabstand innerhalb der Boxen aneinander als Basislinie ausgerichtet.

Die Basislinien-Selbstausrichtung verschiebt die Boxen zur Ausrichtung nach Basislinie durch das Hinzufügen eines Außenabstands außerhalb der Boxen. Selbst-Ausrichtung geschieht bei der Verwendung von `justify-self` oder `align-self` oder beim Festlegen dieser Werte als Gruppe mit `justify-items` und `align-items`.

### Verteilte Ausrichtung

Die **Schlüsselwörter für die verteilte Ausrichtung** werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit dem zusätzlichen Raum passiert, nachdem die Ausrichtungssubjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel, in Flex-Layout werden die Elemente zunächst mit `flex-start` ausgerichtet. Beim Arbeiten in einem horizontalen, von oben nach unten verlaufenden Schreibmodus wie Englisch, mit `flex-direction` als `row`, beginnen die Elemente ganz links, und jeder verfügbare Raum nach Darstellung der Elemente wird nach den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle an der linken Seite des enthaltenden Kastens ausgerichtet, mit etwa 10px dazwischen, und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf den Flex-Container setzen, wird der verfügbare Raum jetzt aufgeteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist an der linken Seite des enthaltenden Kastens ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten platziert.](justify-content-space-between.png)

Es muss Raum in der Dimension verfügbar sein, in der Sie die Elemente ausrichten möchten, damit diese Schlüsselwörter Wirkung zeigen. Ohne Raum gibt es nichts zu verteilen.

## Überlauf-Ausrichtung

Die Schlüsselwörter `safe` und `unsafe` tragen dazu bei, das Verhalten zu definieren, wenn ein Ausrichtungssubjekt größer als der Ausrichtungscontainer ist. Das `safe`-Schlüsselwort wird im Falle einer spezifizierten Ausrichtung, die zu einem Überlauf führt, auf `start` ausrichten, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung beibehalten, auch wenn sie zu einem solchen Datenverlust führen würde.

## Abstände zwischen Boxen

Die Box-Ausrichtungsspezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen das Festlegen eines konsistenten Abstands zwischen Elementen in einer Zeile oder Spalte, in jedem Layoutverfahren, das Elemente auf diese Weise anordnet.

Die Eigenschaft `gap` ist eine Kurzform für `row-gap` und `column-gap`, die es ermöglicht, diese Eigenschaften gleichzeitig zu setzen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die Kurzform `gap`, um einen `10px` Abstand zwischen Zeilen-Spuren und einen `2em` Abstand zwischen Spalten-Spuren festzulegen.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 700)}}

> [!NOTE]
> Die frühe Grid-Implementierung beinhaltete `-gap` Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen jetzt die nicht mit Präfix versehenen Eigenschaften, obwohl Sie die folgenden älteren Eigenschaften in Beispielen und Tutorials sehen können: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die vorgängigen Versionen werden als Alias der nicht mit Präfix versehenen beibehalten.

Seien Sie sich bewusst, dass andere Dinge den visuellen Abstand erhöhen können, wie zum Beispiel die Verwendung der Schlüsselwörter zur Verteilung von Raum oder das Hinzufügen von Abständen zu den Elementen.

## Seiten mit Details zu einzelnen Ausrichtungseigenschaften

Da die CSS-Box-Ausrichtungseigenschaften je nach der Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, beziehen Sie sich auf die folgenden Seiten für jeden Layout-Typ, um Details zur Verwendung der Ausrichtungseigenschaften damit zu finden:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im mehrspaltigen Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positionierte und Tabellenlayouts](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

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

- {{Glossary("Cross axis")}}
- {{Glossary("Main axis")}}
- {{Glossary("Alignment container")}}
- {{Glossary("Alignment subject")}}
- {{Glossary("Fallback alignment")}}

## Leitfäden

- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
