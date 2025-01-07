---
title: CSS Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 259682572756751b25fc64d9dfe4db4ec84902f5
---

{{CSSRef}}

Das **CSS Box-Ausrichtungsmodul** spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Layoutmodellen beziehen: Block-Layout, Tabellen-Layout, Flex-Layout und Grid-Layout. Das Modul zielt darauf ab, eine konsistente Methode der Ausrichtung über alle CSS-Bereiche hinweg zu schaffen. Dieses Dokument beschreibt die allgemeinen Konzepte, die in der Spezifikation gefunden werden.

> [!NOTE]
> Die Dokumentation für jede Layoutmethode wird ausführlich erläutern, wie die Box-Ausrichtung dort angewendet wird.

## Ältere Ausrichtungsmethoden

Traditionell hatte CSS sehr begrenzte Ausrichtungsfähigkeiten. Wir konnten Text mithilfe von {{cssxref("text-align")}} ausrichten, Blöcke mit automatischen {{cssxref("margin")}}s zentrieren und in Tabellen- oder Inline-Block-Layouts mithilfe der Eigenschaft {{cssxref("vertical-align")}} arbeiten. Die Ausrichtung von Text wird nun durch die [Inline Layout](https://www.w3.org/TR/css-inline-3/) und [CSS Text](https://www.w3.org/TR/css-text-3/) Module abgedeckt, und zum ersten Mal in der Box-Ausrichtung haben wir vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Wenn Sie Flexbox ursprünglich gelernt haben, dann könnten Sie diese Eigenschaften als Teil der Flexbox-Spezifikation betrachten, und einige der Eigenschaften sind tatsächlich im ersten Level von Flexbox aufgeführt. Die Spezifikation weist jedoch darauf hin, dass auf die Box-Ausrichtungs-Spezifikation verwiesen werden sollte, da sie zusätzliche Fähigkeiten hinzufügen könnte, die derzeit in der Flexbox enthalten sind.

## Grundlegende Beispiele

Die folgenden Beispiele zeigen, wie einige der Box-Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

### Beispiel für CSS Grid-Layout-Ausrichtung

In diesem Beispiel mit Grid-Layout gibt es zusätzlichen Platz im Grid-Container nach dem Layout der festen Breite Tracks auf der Inline-(Haupt-)Achse. Dieser Platz wird mit {{cssxref("justify-content")}} verteilt. Auf der Block-(Quer-)Achse wird die Ausrichtung der Elemente innerhalb ihrer Rasterbereiche mit {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items`-Wert, der auf der Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

### Flexbox-Ausrichtungsbeispiel

In diesem Beispiel sind drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt `align-items`, das auf der Gruppe eingestellt ist, indem es `align-self` auf `center` setzt.

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

## Schlüsselkonzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es leichter zu machen, diese Ausrichtungseigenschaften außerhalb ihrer Implementierung in einer bestimmten Layoutmethode zu diskutieren. Es gibt auch einige Schlüsselkonzepte, die für alle Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibmodi

Ausrichtung ist mit Schreibmodi verknüpft, indem, wenn wir ein Element ausrichten, wir nicht in Betracht ziehen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Start und das Ende der bestimmten Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung auf die gleiche Weise funktioniert, unabhängig davon, welchen Schreibmodus das Dokument hat.

### Zwei Ausrichtungsdimensionen

Bei der Verwendung der Box-Ausrichtungseigenschaften werden Sie Inhalte auf einer von zwei Achsen ausrichten — der Inline-(oder Haupt-)Achse und der Block-(oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz im verwendeten Schreibmodus fließen — im Englischen ist die Inline-Achse zum Beispiel horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie Absatzelemente, angeordnet sind und sie verläuft quer zur Inline-Achse.

![Inline-Achse ist die linke/rechte oder horizontale Richtung. Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, da das Obige zutrifft, wenn {{cssxref("flex-direction")}} auf `row` eingestellt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` eingestellt ist. Daher ist es einfacher, bei der Arbeit mit Flexbox über die Haupt- und Querachse statt über Inline- und Block nachzudenken. Die `justify-` Eigenschaften werden immer verwendet, um auf der Hauptachse auszurichten, die `align-` Eigenschaften auf der Querachse.

### Das Ausrichtungssubjekt

Das **Ausrichtungssubjekt** ist das Objekt, das ausgerichtet wird. Für `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` gesetzt werden, wird dies der Randbereich des Elements sein, auf dem diese Eigenschaft verwendet wird. Die `justify-content` und `align-content` Eigenschaften unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **Ausrichtungscontainer** ist die Box, in der das Subjekt ausgerichtet wird. Dies ist in der Regel der enthaltene Block des Ausrichtungssubjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungssubjekte enthalten.

Das Bild unten zeigt einen Ausrichtungscontainer mit zwei Ausrichtungssubjekten darin.

![Eine Box, die zwei Rechtecke von gleicher Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, was bedeutet, dass sie beide ihre oberen Linien etwa 10px innerhalb des oberen Teils der Box haben, in der sie enthalten sind.](align-container-subjects.png)

### Fallback-Ausrichtung

Wenn Sie eine Ausrichtung setzen, die nicht erfüllt werden kann, wird die **Fallback-Ausrichtung** in Kraft treten und sich mit dem verfügbaren Platz befassen. Diese Fallback-Ausrichtung wird individuell für jede Layoutmethode spezifiziert und auf der Seite für diese Methode detailliert beschrieben.

## Arten der Ausrichtung

Die Spezifikation beschreibt drei verschiedene Arten der Ausrichtung; diese verwenden Schlüsselwortwerte.

- **Positionelle Ausrichtung**: Spezifiert die Position eines Ausrichtungssubjekts in Bezug auf seinen Ausrichtungscontainer.
- **Baseline-Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als eine Beziehung zwischen den Baselines mehrerer Ausrichtungssubjekte innerhalb eines Ausrichtungskontexts.
- **Verteilte Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als eine Verteilung des Raums unter Ausrichtungssubjekten.

### Positionsausrichtungs-Schlüsselwortwerte

Die folgenden Werte sind für positionelle Ausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die eigene Ausrichtung mit `justify-self` und `align-self` verwendet werden.

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

Wenn Sie im CSS Grid-Layout auf Englisch arbeiten und `justify-content` auf `start` setzen, verschieben sich die Elemente in der Inline-Dimension zum Anfang, der links ist, da Sätze im Englischen links beginnen. Wenn Sie Arabisch verwenden, eine Sprache von rechts nach links, würde derselbe Wert `start` die Elemente nach rechts verschieben, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

Beide dieser Beispiele haben `justify-content: start`, jedoch ändert sich die Position von start je nach Schreibmodus.

![Es gibt zwei Boxen, jede mit 3 Kindern von unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

### Baseline-Ausrichtung

Die Baseline-Ausrichtungs-Schlüsselwörter werden verwendet, um die Baselines von Boxen über eine Gruppe von Ausrichtungssubjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die eigene Ausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Baseline-Inhaltsausrichtung — die Angabe eines Baseline-Ausrichtungswerts für `justify-content` oder `align-content` — funktioniert in Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungssubjekte werden gegen einander durch das Hinzufügen von Polsterungen innerhalb der Boxen baseline-ausgerichtet.

Baseline-Selbstausrichtung verschiebt die Boxen, um sie durch Hinzufügen eines Randes außerhalb der Boxen gegen den Baseline auszurichten. Selbstausrichtung erfolgt bei der Verwendung von `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` und `align-items` gesetzt werden.

### Verteilte Ausrichtung

Die **verteilten Ausrichtungs-Schlüsselwörter** werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit zusätzlichem Raum geschieht, nachdem Ausrichtungssubjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel sind in Flex-Layout-Elementen mit `flex-start` zunächst ausgerichtet. In einem horizontalen Schreibmodus von oben nach unten wie Englisch, mit `flex-direction` als `row`, beginnen die Elemente ganz links und der verfügbare Raum nach der Anzeige der Elemente wird hinter den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite sind in einer Box. Sie sind alle an der linken Seite der umgebenden Box ausgerichtet, mit ungefähr 10px dazwischen, und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf den Flex-Container setzen, wird der verfügbare Raum jetzt verteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite sind in einer Box. Das erste Rechteck ist an der linken Seite der umgebenden Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten verteilt.](justify-content-space-between.png)

Es muss Raum in der Dimension vorhanden sein, in der Sie die Elemente ausrichten möchten, damit diese Schlüsselwörter Wirkung zeigen. Ohne Raum gibt es nichts zu verteilen.

## Überlauf-Ausrichtung

Die Schlüsselwörter `safe` und `unsafe` helfen dabei, das Verhalten zu definieren, wenn ein Ausrichtungssubjekt größer als der Ausrichtungscontainer ist. Das `safe` Schlüsselwort wird auf `start` ausrichten, falls eine bestimmte Ausrichtung einen Überlauf verursachen würde, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Items außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung auch dann eingehalten, wenn sie einen solchen Datenverlust verursachen würde.

## Abstände zwischen Boxen

Die Box-Ausrichtungs-Spezifikation beinhaltet auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen das Setzen eines konsistenten Abstands zwischen Items in einer Reihe oder Spalte, in jedem Layoutverfahren, das Items auf diese Weise anordnet.

Die Eigenschaft `gap` ist eine Kurzform für `row-gap` und `column-gap`, was uns ermöglicht, diese Eigenschaften auf einmal zu setzen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die `gap` Kurzform, um einen `10px` Abstand zwischen Reihen-Tracks und einen `2em` Abstand zwischen Spalten-Tracks einzustellen.

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

> [!NOTE]
> Die frühe Implementierung des Grid-Layouts enthielt `-gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen mittlerweile die nicht-präfixierten Eigenschaften, obwohl Sie in Beispielen und Tutorials noch die folgenden Legacy-Eigenschaften sehen könnten: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die präfixierten Versionen werden als Alias der nicht-präfixierten beibehalten.

Seien Sie sich bewusst, dass andere Dinge den angezeigten visuellen Abstand erhöhen können, zum Beispiel durch die Verwendung von Raumverteilungsschlüsselwörtern oder durch das Hinzufügen von Rändern zu Elementen.

## Seiten mit Details zu individuellen Ausrichtungseigenschaften

Da die CSS Box-Ausrichtungseigenschaften unterschiedlich implementiert werden, abhängig von der Spezifikation, mit der sie interagieren, beziehen Sie sich auf die folgenden Seiten für jeden Layouttyp, um Details zur Verwendung der Ausrichtungseigenschaften mit ihm zu erhalten:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im mehrspaltigen Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

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
- {{Glossary("Alignment_subject", "Ausrichtungssubjekt")}}
- {{Glossary("Fallback_alignment", "Fallback-Ausrichtung")}}

## Leitfäden

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung im CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flex-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
