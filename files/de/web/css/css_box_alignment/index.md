---
title: CSS-Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das Modul **CSS-Box-Ausrichtung** spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layoutmodellen beziehen: Block-Layout, Tabellen-Layout, Flex-Layout und Grid-Layout. Das Modul zielt darauf ab, eine konsistente Methode der Ausrichtung über alle CSS-Modelle hinweg zu schaffen. Dieses Dokument beschreibt die allgemeinen Konzepte, die in der Spezifikation zu finden sind.

> [!NOTE]
> Die Dokumentation für jede Layoutmethode beschreibt, wie Box Alignment dort angewendet wird.

## Ältere Ausrichtungsmethoden

CSS hatte traditionell nur sehr begrenzte Ausrichtungsfähigkeiten. Wir konnten Text mit {{cssxref("text-align")}} ausrichten, Blöcke mit automatischen {{cssxref("margin")}}s zentrieren und in Tabellen- oder Inline-Block-Layouts das {{cssxref("vertical-align")}}-Attribut verwenden. Die Ausrichtung von Text wird jetzt durch die [Inline Layout](https://www.w3.org/TR/css-inline-3/) und [CSS Text](https://www.w3.org/TR/css-text-3/) Module abgedeckt, und zum ersten Mal im Box Alignment verfügen wir über vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Wenn Sie zunächst [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gelernt haben, könnten Sie diese Eigenschaften als Teil der Flexbox-Spezifikation betrachten, und einige der Eigenschaften sind tatsächlich in Level 1 der Flexbox aufgeführt. Die Spezifikation weist jedoch darauf hin, dass auf die Box Alignment Spezifikation verwiesen werden sollte, da sie möglicherweise zusätzliche Fähigkeiten über das derzeit in Flexbox vorhandene hinaus hinzufügt.

## Grundlegende Beispiele

Die folgenden Beispiele demonstrieren, wie einige der Box Alignment Eigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

### CSS-Grid-Layout-Ausrichtungsbeispiel

In diesem Beispiel mit Grid-Layout gibt es zusätzlichen Platz im Grid-Container nach dem Layout der festen Breiten-Tracks auf der Inline- (Haupt-)Achse. Dieser Platz wird mit {{cssxref("justify-content")}} verteilt. Auf der Block- (Quer-)Achse wird die Ausrichtung der Elemente innerhalb ihrer Gitternetzbereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items` Wert, der auf der Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 700)}}

### Flexbox-Ausrichtungsbeispiel

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt die in der Gruppe gesetzten `align-items`, indem es `align-self` auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/flex-align-items.html", '100%', 700)}}

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es einfacher zu machen, diese Ausrichtungseigenschaften außerhalb ihrer Implementierung in einer bestimmten Layoutmethode zu diskutieren. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibrichtungen

Ausrichtung ist mit Schreibrichtungen verknüpft, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der speziellen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf dieselbe Weise funktioniert, unabhängig von der Schreibrichtung des Dokuments.

### Zwei Dimensionen der Ausrichtung

Beim Einsatz der Box-Ausrichtungs-Eigenschaften richten Sie Inhalte auf einer von zwei Achsen aus — der Inline- (oder Haupt-)Achse und der Block- (oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz im verwendeten Schreibmodus fließen — für Englisch ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie Absatzelemente, angeordnet sind und sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die links/rechts oder horizontale Richtung. Die Block-Achse ist vertikal, oder oben/unten.](two-axes.png)

Beim Ausrichten von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Beim Ausrichten von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das Obige zutrifft, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es beim Arbeiten mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken, anstatt über Inline und Block. Die `justify-` Eigenschaften werden immer verwendet, um auf der Hauptachse auszurichten, die `align-` Eigenschaften auf der Querachse.

### Das Ausrichtungsobjekt

Das **Ausrichtungsobjekt** ist das Objekt, das ausgerichtet wird. Für `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` gesetzt werden, ist dies der Margin-Box des Elements, auf dem diese Eigenschaft verwendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **Ausrichtungscontainer** ist die Box, in der das Subjekt ausgerichtet wird. Dies wird in der Regel der beinhaltende Block des Ausrichtungsobjekts sein. Ein Ausrichtungscontainer kann ein oder viele Ausrichtungsobjekte enthalten.

Das Bild unten zeigt einen Ausrichtungscontainer mit zwei Ausrichtungsobjekten darin.

![Eine Box, die zwei Rechtecke gleicher Breite, aber unterschiedlicher Höhe enthält. Die zwei Rechtecke sind oben ausgerichtet, das bedeutet, dass beide ihre top Linien etwa 10px innerhalb des oberen Teils der Box, in der sie enthalten sind, haben.](align-container-subjects.png)

### Fallback-Ausrichtung

Wenn Sie eine Ausrichtung festlegen, die nicht erfüllt werden kann, kommt die **Fallback-Ausrichtung** ins Spiel und beschäftigt sich mit dem verfügbaren Raum. Diese Fallback-Ausrichtung wird individuell für jede Layoutmethode spezifiziert und auf der Seite für diese Methode detailliert beschrieben.

## Arten der Ausrichtung

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation aufführt; sie nutzen Schlüsselwortwerte.

- **Positionale Ausrichtung**: Spezifiziert die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer.
- **Basislinienausrichtung**: Diese Schlüsselwörter definieren eine Ausrichtung als Beziehung zwischen den Basislinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontextes.
- **Verteilte Ausrichtung**: Diese Schlüsselwörter definieren eine Ausrichtung als Verteilung von Raum zwischen Ausrichtungsobjekten.

### Positionale Ausrichtung mit Schlüsselwortwerten

Die folgenden Werte sind für die positionale Ausrichtung definiert und können als Werte für Inhaltsausrichtung mit `justify-content` und `align-content` und auch für Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Abgesehen von den physikalischen Werten `left` und `right`, die sich auf physikalische Attribute des Bildschirms beziehen, sind alle anderen Werte logische Werte und beziehen sich auf den Schreibmodus des Inhalts.

Zum Beispiel, wenn Sie im CSS-Grid-Layout arbeiten, wenn Sie Englisch verwenden und `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension zum Start verschoben, was links sein wird, da Sätze im Englischen links beginnen. Wenn Sie Arabisch verwenden, eine von rechts nach links verlaufende Sprache, würde derselbe Wert von `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

Beide dieser Beispiele haben `justify-content: start`, jedoch ändert sich die Lage des Starts je nach Schreibmodus.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

### Basislinienausrichtung

Die Schlüsselwörter zur Basislinienausrichtung werden verwendet, um die Basislinien von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für Inhaltsausrichtung mit `justify-content` und `align-content` und auch für Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Basislinien-Inhaltsausrichtung – die Angabe eines Basislinien-Ausrichtungswerts für `justify-content` oder `align-content` – funktioniert in Layoutmethoden, die Elemente in Zeilen anordnen. Die Ausrichtungsobjekte werden gegeneinander basisausgerichtet, indem Padding innerhalb der Boxen hinzugefügt wird.

Basislinien-Selbstausrichtung verschiebt die Boxen zur Ausrichtung an der Basislinie, indem ein Rand außerhalb der Boxen hinzugefügt wird. Selbstausrichtung wird verwendet, wenn `justify-self` oder `align-self` angewendet wird, oder wenn diese Werte als Gruppe mit `justify-items` und `align-items` eingestellt sind.

### Verteilte Ausrichtung

Die **Schlüsselwörter zur verteilten Ausrichtung** werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit zusätzlichem Raum passiert, nachdem Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden im Flex Layout Elemente initial mit `flex-start` ausgerichtet. Bei einer horizontalen von oben nach unten verlaufenden Schreibrichtung wie Englisch, mit `flex-direction` als `row` beginnen die Elemente ganz links und jeder verfügbare Raum nach der Anzeige der Elemente wird nach den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breiten befinden sich in einer Box. Sie sind alle an der linken Seite der enthaltenen Box ausgerichtet, mit etwa 10px Abstand dazwischen, und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container setzen, wird der verfügbare Raum jetzt aufgeteilt und zwischen die Elemente gesetzt.

![Drei Rechtecke unterschiedlicher Breiten befinden sich in einer Box. Das erste Rechteck ist an der linken Seite der Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten ausgerichtet.](justify-content-space-between.png)

Es muss Raum in der Dimension, die Sie ausrichten möchten, verfügbar sein, damit diese Schlüsselwörter Wirkung zeigen. Ohne Raum gibt es nichts zu verteilen.

## Überlauf-Ausrichtung

Sie können mit den Schlüsselwörtern `safe` und `unsafe` das Verhalten definieren, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das `safe` Schlüsselwort wird auf `start` ausrichten, falls eine spezifizierte Ausrichtung zu einem Überlauf führt, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` spezifizieren, wird die Ausrichtung eingehalten, auch wenn dies zu einem solchen Datenverlust führen würde.

## Abstände zwischen Boxen

Die Box-Ausrichtungs-Spezifikation enthält auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen das Setzen eines konsistenten Abstands zwischen Elementen in einer Zeile oder Spalte, in jeder Layoutmethode, die Elemente auf diese Weise anordnet.

Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`, die es ermöglicht, diese Eigenschaften gleichzeitig zu setzen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im untenstehenden Beispiel verwendet ein Grid-Layout die `gap` Kurzform, um einen `10px` Abstand zwischen Zeilen und einen `2em` Abstand zwischen Spalten zu setzen.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-gap.html", '100%', 700)}}

> [!NOTE]
> Die frühe Grid-Implementierung beinhaltete `-gap` Eigenschaften, die mit `grid-` vorangestellt wurden. Alle Browser unterstützen jetzt die unpräfixierten Eigenschaften, obwohl Sie in Beispielen und Tutorials die folgenden Legacy-Eigenschaften sehen können: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die vorangestellten Versionen werden als Alias der unpräfixierten beibehalten.

Beachten Sie, dass andere Dinge die visuell angezeigte Lücke vergrößern können, zum Beispiel durch Verwendung der Raumverteilungsschlüsselwörter oder durch Hinzufügen von Rändern zu den Elementen.

## Seiten, die einzelne Ausrichtungseigenschaften detailliert beschreiben

Da die CSS-Box-Ausrichtungs-Eigenschaften je nach Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, beziehen Sie sich für Informationen darüber, wie die Ausrichtungseigenschaften mit jedem Layouttyp verwendet werden, auf die folgenden Seiten:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung in CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

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

- [Querachse](/de/docs/Glossary/Cross_axis)
- [Hauptachse](/de/docs/Glossary/Main_axis)
- [Ausrichtungscontainer](/de/docs/Glossary/Alignment_container)
- [Ausrichtungsobjekt](/de/docs/Glossary/Alignment_subject)
- [Fallback-Ausrichtung](/de/docs/Glossary/Fallback_alignment)

## Leitfäden

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
