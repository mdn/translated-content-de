---
title: CSS Box-Ausrichtung
slug: Web/CSS/CSS_box_alignment
l10n:
  sourceCommit: 5755d6dfbac15abc29ddcd924cee110c4139b073
---

{{CSSRef}}

Das **CSS Box-Ausrichtung** Modul spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen: Block-Layout, Tabellen-Layout, Flex-Layout und Grid-Layout. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Dieses Dokument beschreibt die allgemeinen Konzepte, die in der Spezifikation zu finden sind.

> [!NOTE]
> Die Dokumentation für jede Layoutmethode wird detailliert beschreiben, wie die Box-Ausrichtung dort angewendet wird.

## Ältere Ausrichtungsmethoden

CSS hatte traditionell nur sehr begrenzte Möglichkeiten zur Ausrichtung. Wir konnten Text mit {{cssxref("text-align")}} ausrichten, Blöcke mit automatischen {{cssxref("margin")}}s zentrieren und in Tabellen- oder Inline-Block-Layouts mit der {{cssxref("vertical-align")}} Eigenschaft arbeiten. Die Ausrichtung von Text wird jetzt durch die Module [Inline-Layout](https://www.w3.org/TR/css-inline-3/) und [CSS Text](https://www.w3.org/TR/css-text-3/) abgedeckt, und zum ersten Mal haben wir in der Box-Ausrichtung vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Wenn Sie anfänglich [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) gelernt haben, dann betrachten Sie diese Eigenschaften möglicherweise als Teil der Flexbox-Spezifikation, und einige der Eigenschaften sind tatsächlich in Level 1 von Flexbox aufgeführt. Die Spezifikation merkt jedoch an, dass auf die Box-Ausrichtungsspezifikation verwiesen werden sollte, da sie zusätzliche Fähigkeiten über das hinaus hinzufügen kann, was derzeit in Flexbox verfügbar ist.

## Grundlegende Beispiele

Die folgenden Beispiele demonstrieren, wie einige der Box-Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/CSS_grid_layout) und [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) angewendet werden.

### Beispiel für Ausrichtung im CSS-Grid-Layout

In diesem Beispiel mit Grid-Layout gibt es zusätzlichen Platz im Grid-Container, nachdem die festgelegten Breiten-Tracks auf der Inline-(Haupt-)Achse ausgelegt wurden. Dieser Platz wird mithilfe von {{cssxref("justify-content")}} verteilt. Auf der Block-(Quer-)Achse wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit {{cssxref("align-items")}} kontrolliert. Das erste Element überschreibt den `align-items` Wert, der auf die Gruppe gesetzt ist, indem es {{cssxref("align-self")}} auf `center` setzt.

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

### Beispiel für Flexbox-Ausrichtung

In diesem Beispiel sind drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Querachse mit `align-items` ausgerichtet. Das erste Element überschreibt die `align-items`, die auf die Gruppe gesetzt sind, indem es `align-self` auf `center` setzt.

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

## Wichtige Konzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsbegriffe, um die Diskussion dieser Ausrichtungseigenschaften außerhalb ihrer Implementierung in einer bestimmten Layoutmethode zu erleichtern. Es gibt auch einige Schlüsselkonzepte, die allen Layoutmethoden gemeinsam sind.

### Beziehung zu Schreibmodi

Ausrichtung ist mit Schreibmodi verknüpft, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es an den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung unabhängig vom Schreibmodus des Dokuments gleich funktioniert.

### Zwei Dimensionen der Ausrichtung

Beim Verwenden der Box-Ausrichtungseigenschaften richten Sie Inhalte auf einer von zwei Achsen aus — der Inline-(oder Haupt-)Achse und der Block-(oder Quer-)Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz im verwendeten Schreibmodus fließen — für Englisch ist die Inline-Achse beispielsweise horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie Absatzelemente, ausgelegt sind und sie verläuft quer zur Inline-Achse.

![Inline-Achse ist die linke / rechte oder horizontale Richtung. Block-Achse ist vertikal, oder oben / unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, dass das Obige zutrifft, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden vertauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es bei der Arbeit mit Flexbox einfacher, über die Haupt- und Querachse nachzudenken, anstelle von Inline und Block. Die `justify-` Eigenschaften werden immer verwendet, um auf der Hauptachse auszurichten, die `align-` Eigenschaften auf der Querachse.

### Das Ausrichtungsobjekt

Das **Ausrichtungsobjekt** ist das, was ausgerichtet wird. Bei `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` festgelegt werden, handelt es sich um das Margenfeld des Elements, auf dem diese Eigenschaft verwendet wird. Die Eigenschaften `justify-content` und `align-content` unterscheiden sich je nach Layoutmethode.

### Der Ausrichtungscontainer

Der **Ausrichtungscontainer** ist die Box, in der das Objekt ausgerichtet wird. Dies ist typischerweise der enthaltende Block des Ausrichtungsobjekts. Ein Ausrichtungscontainer kann ein oder mehrere Ausrichtungsobjekte enthalten.

Das untenstehende Bild zeigt einen Ausrichtungscontainer mit zwei darin enthaltenen Ausrichtungsobjekten.

![Eine Box, die zwei Rechtecke mit derselben Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, d.h. sie haben beide ihre oberen Linien etwa 10px innerhalb der oberen Begrenzung der Box, in der sie sich befinden.](align-container-subjects.png)

### Fallback-Ausrichtung

Wenn Sie eine Ausrichtung festlegen, die nicht erfüllt werden kann, dann tritt die **Fallback-Ausrichtung** in Kraft und verwaltet den verfügbaren Platz. Diese Fallback-Ausrichtung wird individuell für jede Layoutmethode spezifiziert und auf der Seite für diese Methode detailliert erläutert.

## Arten der Ausrichtung

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation detailliert beschreibt; diese verwenden Schlüsselwortwerte.

- **Positionelle Ausrichtung**: Spezifizierung der Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer.
- **Baseline-Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als Beziehung unter den Baselines mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontexts.
- **Verteilte Ausrichtung**: Diese Schlüsselwörter definieren die Ausrichtung als Verteilung des Raumes unter Ausrichtungsobjekten.

### Schlüsselworthwerte der positionsbezogenen Ausrichtung

Die folgenden Werte sind für die positionsbezogene Ausrichtung definiert und können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

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

Zum Beispiel, wenn Sie im CSS-Grid-Layout arbeiten und auf Englisch arbeiten und `justify-content` auf `start` einstellen, werden die Elemente in der Inline-Dimension nach links verschoben, da Sätze auf Englisch links beginnen. Wenn Sie Arabisch verwenden, eine von rechts nach links verlaufende Sprache, würde derselbe Wert `start` dazu führen, dass die Elemente nach rechts verschoben werden, da Sätze auf Arabisch auf der rechten Seite der Seite beginnen.

Beide dieser Beispiele haben `justify-content: start`, jedoch ändert sich die Position des Anfangs entsprechend dem Schreibmodus.

![Es gibt zwei Boxen, jede mit 3 Kindern unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle nach links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben darin. Diese drei Boxen sind alle nach rechts ausgerichtet.](writing-mode-start.png)

### Baseline-Ausrichtung

Die Baseline-Ausrichtungsschlüsselwörter werden verwendet, um die Baselines von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für die Inhaltsausrichtung mit `justify-content` und `align-content` sowie für die Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Basislinien-Inhaltsausrichtung — die Angabe eines Basislinien-Ausrichtungswerts für `justify-content` oder `align-content` — funktioniert bei Layoutmethoden, die Elemente in Reihen anordnen. Die Ausrichtungsobjekte werden gegeneinander anhand der Basislinie ausgerichtet, indem Padding innerhalb der Boxen hinzugefügt wird.

Basislinien-Selbstausrichtung verschiebt die Boxen zur Ausrichtung an der Basislinie, indem ein Außen-Abstand um die Boxen hinzugefügt wird. Die Selbstausrichtung erfolgt bei der Verwendung von `justify-self` oder `align-self`, oder beim Festlegen dieser Werte als Gruppe mit `justify-items` und `align-items`.

### Verteilte Ausrichtung

Die **verteilten Ausrichtungsschlüsselwörter** werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit zusätzlichem Platz passiert, nachdem die Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Zum Beispiel werden im Flex-Layout Elemente zunächst mit `flex-start` ausgerichtet. Bei der Arbeit in einem horizontalen Top-Down-Schreibmodus wie Englisch, mit `flex-direction` als `row`, beginnen die Elemente ganz links und jeder verfügbare Platz nach dem Anzeigen der Elemente wird nach den Elementen platziert.

![Drei unterschiedlich breite Rechtecke befinden sich in einer Box. Sie sind alle auf der linken Seite der enthaltenen Box ausgerichtet, mit etwa 10px zwischen ihnen und 10px zwischen der linken Seite des ersten Rechtecks und dem elterlichen Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` für den Flex-Container festlegen, wird der verfügbare Platz nun verteilt und zwischen den Elementen platziert.

![Drei unterschiedlich breite Rechtecke befinden sich in einer Box. Das erste Rechteck ist linkseitig zur enthaltenen Box ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten beabstandet.](justify-content-space-between.png)

Es muss Raum in der Dimension vorhanden sein, in der Sie die Elemente ausrichten möchten, damit diese Schlüsselwörter Wirkung zeigen. Ohne Raum gibt es nichts zu verteilen.

## Überlauf-Ausrichtung

Die Schlüsselwörter `safe` und `unsafe` helfen dabei, das Verhalten zu definieren, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das `safe`-Schlüsselwort richtet auf `start` aus im Falle einer spezifischen Ausrichtung, die einen Überlauf verursacht, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers liegt und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung trotz drohendem Datenverlust beibehalten.

## Lücken zwischen Boxen

Die Box-Ausrichtungs-Spezifikation umfasst auch die Eigenschaften `gap`, `row-gap` und `column-gap`. Diese Eigenschaften ermöglichen es, eine konsistente Lücke zwischen Elementen in einer Reihe oder Spalte einzustellen, in jeder Layout-Methode, die Elemente auf diese Weise anordnet.

Die `gap`-Eigenschaft ist eine Abkürzung für `row-gap` und `column-gap`, die es uns ermöglicht, diese Eigenschaften gleichzeitig festzulegen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im untenstehenden Beispiel verwendet ein Grid-Layout die `gap`-Abkürzung, um einen `10px` Abstand zwischen den Zeilen und einen `2em` Abstand zwischen den Spalten festzulegen.

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
> Die frühe Grid-Implementation enthielt `-gap`-Eigenschaften mit dem Präfix `grid-`. Alle Browser unterstützen jetzt die nicht-prefixed Eigenschaften, obwohl Sie die folgenden Legacy-Eigenschaften in Beispielen und Tutorials sehen können: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}}, und {{cssxref("gap", "grid-gap")}}. Die prefixierten Versionen werden als Alias der unprefixierten beibehalten.

Seien Sie sich bewusst, dass andere Dinge die visuelle Lücke erhöhen können, beispielsweise durch Verwendung der Raumverteilungsschlüsselwörter oder das Hinzufügen von Abständen zu den Elementen.

## Seiten, die die einzelnen Ausrichtungseigenschaften detailliert beschreiben

Da die CSS Box-Ausrichtungseigenschaften je nach Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, sollten Sie die folgenden Seiten für jeden Layouttyp konsultieren, um Einzelheiten zur Verwendung der Ausrichtungseigenschaften mit diesem zu erfahren:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
- [Box-Ausrichtung im Mehrspaltenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellenlayout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_block_abspos_tables)

## Referenz

### CSS Eigenschaften

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

- [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
- [Box-Ausrichtung in CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
