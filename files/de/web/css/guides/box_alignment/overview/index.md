---
title: Übersicht über die CSS-Box-Ausrichtung
short-title: Overview
slug: Web/CSS/Guides/Box_alignment/Overview
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Das [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul spezifiziert CSS-Funktionen, die sich auf die Ausrichtung von Boxen in den verschiedenen CSS-Box-Layout-Modellen beziehen. Das Modul zielt darauf ab, eine konsistente Methode zur Ausrichtung in ganz CSS zu schaffen. Die CSS-Ausrichtungseigenschaften bieten vollständige horizontale und vertikale Ausrichtungsfähigkeiten.

Dieser Leitfaden beschreibt die allgemeinen Konzepte, die in diesem Modul zu finden sind. Zusätzliche Leitfäden bieten weitere Informationen zur Box-Ausrichtung in [Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox), [Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout), [Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout) und [Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables). Die Ausrichtung von Text wird durch die Module [CSS Text](/de/docs/Web/CSS/Guides/Text) und [CSS Inline-Layout](/de/docs/Web/CSS/Guides/Inline_layout) abgedeckt.

## Wichtige Konzepte und Terminologie

Die Spezifikation beschreibt einige Ausrichtungsterminologien, um es einfacher zu machen, über diese Ausrichtungseigenschaften außerhalb ihrer Implementierung innerhalb einer bestimmten Layout-Methode zu sprechen. Es gibt auch einige Schlüsselkonzepte, die allen Layout-Methoden gemeinsam sind.

### Beziehung zu Schreibmodi

Die Ausrichtung ist mit den Schreibmodi verbunden, da wir bei der Ausrichtung eines Elements nicht berücksichtigen, ob wir es zu den physischen Dimensionen von oben, rechts, unten und links ausrichten. Stattdessen beschreiben wir die Ausrichtung in Bezug auf den Anfang und das Ende der jeweiligen Dimension, mit der wir arbeiten. Dies stellt sicher, dass die Ausrichtung unabhängig davon, welcher Schreibmodus das Dokument hat, auf die gleiche Weise funktioniert.

### Zwei Dimensionen der Ausrichtung

Bei der Nutzung der Box-Ausrichtungseigenschaften richten Sie Inhalte auf einer von zwei Achsen aus - der Inline- (oder Haupt-)Achse und der Block- (oder Kreuz-)Achse. Die Inline-Achse ist die Achse, entlang derer Wörter in einem Satz im verwendeten Schreibmodus fließen. Für Englisch beispielsweise ist die Inline-Achse horizontal. Die Block-Achse ist die Achse, entlang derer Blöcke, wie Absatzelemente, angeordnet werden; sie verläuft quer zur Inline-Achse.

![Die Inline-Achse ist die linke/rechte oder horizontale Richtung. Die Block-Achse ist vertikal oder oben/unten.](two-axes.png)

Bei der Ausrichtung von Elementen auf der Inline-Achse verwenden Sie die Eigenschaften, die mit `justify-` beginnen:

- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("justify-content")}}

Bei der Ausrichtung von Elementen auf der Block-Achse verwenden Sie die Eigenschaften, die mit `align-` beginnen:

- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("align-content")}}

Flexbox fügt eine zusätzliche Komplikation hinzu, indem das obige wahr ist, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist. Die Eigenschaften werden ausgetauscht, wenn Flexbox auf `column` gesetzt ist. Daher ist es im Allgemeinen einfacher, sich bei der Arbeit mit Flexbox über die Haupt- und Kreuzachse Gedanken zu machen, anstatt über Inline und Block. Die `justify-`-Eigenschaften werden immer zur Ausrichtung auf der Hauptachse verwendet, die `align-`-Eigenschaften auf der Kreuzachse.

### Das Ausrichtungsobjekt

Das **{{Glossary("alignment_subject", "Ausrichtungsobjekt")}}** ist das Element, das ausgerichtet wird. Für `justify-self` oder `align-self`, oder wenn diese Werte als Gruppe mit `justify-items` oder `align-items` gesetzt werden, wird dies die Randbox des Elements sein, auf das diese Eigenschaft angewendet wird. Die `justify-content` und `align-content` Eigenschaften unterscheiden sich je nach Layout-Methode.

### Der Ausrichtungscontainer

Der **{{Glossary("alignment_container", "Ausrichtungscontainer")}}** ist die Box, in der das Objekt ausgerichtet wird. Dies wird typischerweise der enthaltende Block des Ausrichtungsobjekts sein. Ein Ausrichtungscontainer kann ein oder viele Ausrichtungsobjekte enthalten.

Das folgende Bild zeigt einen Ausrichtungscontainer mit zwei darin liegenden Ausrichtungsobjekten.

![Ein Kasten, der zwei Rechtecke gleicher Breite, aber unterschiedlicher Höhe enthält. Die beiden Rechtecke sind oben ausgerichtet, das bedeutet, dass beide ihre oberen Linien etwa 10px innerhalb des oberen Randes des Kastens, in dem sie enthalten sind, haben.](align-container-subjects.png)

## Arten der Ausrichtung

Es gibt drei verschiedene Arten der Ausrichtung, die die Spezifikation beschreibt; diese verwenden Schlüsselwortwerte.

- [Positionelle Ausrichtung](#positionelle_ausrichtung)
- [Basislinienausrichtung](#basislinienausrichtung)
- [Verteilte Ausrichtung](#verteilte_ausrichtung)

### Positionelle Ausrichtung

**Positionelle Ausrichtung** ist die Position eines Ausrichtungsobjekts in Bezug auf seinen Ausrichtungscontainer. Die Schlüsselwortwerte für die positionelle Ausrichtung sind für die positionelle Ausrichtung definiert und können als Werte für Inhaltsausrichtung mit `justify-content` und `align-content` sowie für Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `center`
- `start`
- `end`
- `self-start`
- `self-end`
- `flex-start` nur für Flexbox
- `flex-end` nur für Flexbox
- `left`
- `right`

Abgesehen von den physischen Werten `left` und `right`, die sich auf physische Attribute des Bildschirms beziehen, sind alle anderen Werte, die {{cssxref("self-position")}} und {{cssxref("content-position")}} Werte logische Werte und beziehen sich auf den Schreibmodus des Inhalts.

Zum Beispiel, wenn Sie im CSS Grid-Layout arbeiten, falls Sie Englisch verwenden und `justify-content` auf `start` setzen, werden die Elemente in der Inline-Dimension zum Anfang verschoben, was links ist, da Sätze im Englischen auf der linken Seite der Seite beginnen. Wenn Sie Arabisch, eine von rechts nach links lesbare Sprache, verwenden, würde derselbe Wert `start` dazu führen, dass sich die Elemente nach rechts verschieben, da Sätze im Arabischen auf der rechten Seite der Seite beginnen.

![Es gibt zwei Boxen, jede mit 3 Kindern von unterschiedlicher Höhe, aber ähnlicher Breite. Die erste Box hat drei Kinder mit den Buchstaben A, B und C. Diese drei Boxen sind alle links ausgerichtet. Die zweite Box hat drei Kinder mit arabischen Buchstaben. Diese drei Boxen sind alle rechts ausgerichtet.](writing-mode-start.png)

Beide haben `justify-content: start`, aber die Position der beiden Anfänge ist aufgrund des Schreibmodus unterschiedlich.

### Basislinienausrichtung

**Basislinienausrichtung** ist die Beziehung zwischen den Basislinien mehrerer Ausrichtungsobjekte innerhalb eines Ausrichtungskontextes. Die Schlüsselwörter für Basislinienausrichtung {{cssxref("baseline-position")}} werden verwendet, um die Basislinien von Boxen über eine Gruppe von Ausrichtungsobjekten hinweg auszurichten. Sie können als Werte für Inhaltsausrichtung mit `justify-content` und `align-content` und für Selbstausrichtung mit `justify-self` und `align-self` verwendet werden.

- `baseline`
- `first baseline`
- `last baseline`

Basislinen-Inhaltsausrichtung — das Festlegen eines Basislinen-Ausrichtungswertes für `justify-content` oder `align-content` — funktioniert in Layout-Methoden, die Elemente in Zeilen anordnen. Die Ausrichtungsobjekte sind basislinienausgerichtet, indem innerhalb der Boxen Polsterung hinzugefügt wird.

Basislinen-Selbstausrichtung verschiebt die Boxen, um sich durch die Basislinie auszurichten, indem außerhalb der Boxen ein Rand hinzugefügt wird. Die Selbstausrichtung erfolgt für einzelne Boxen mit `justify-self` oder `align-self` oder für Gruppen von Boxen mit `justify-items` und `align-items`.

### Verteilte Ausrichtung

**Verteilte Ausrichtung** definiert die Ausrichtung als eine Verteilung des Raums unter Ausrichtungsobjekten. Die Schlüsselwörter für verteilte Ausrichtung {{cssxref("content-distribution")}} werden mit den Eigenschaften `align-content` und `justify-content` verwendet. Diese Schlüsselwörter definieren, was mit jedem zusätzlichen Raum passiert, nachdem die Ausrichtungsobjekte angezeigt wurden. Die Werte sind wie folgt:

- `stretch`
- `space-between`
- `space-around`
- `space-evenly`

Beispielsweise werden in Flex Layout Elemente zunächst mit `flex-start` ausgerichtet. Bei einem horizontalen Schreibmodus von oben nach unten (mit einer Sprache wie Englisch), mit `flex-direction` auf `row` gesetzt, beginnen die Elemente ganz links und es wird nach der Anzeige der Elemente verfügbarer Raum danach eingefügt.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Sie sind alle auf die linke Seite des enthaltenden Kastens ausgerichtet, mit etwa 10px dazwischen und 10px zwischen der linken Seite des ersten Rechtecks und dem übergeordneten Container.](justify-content-start.png)

Wenn Sie `justify-content: space-between` auf dem Flex-Container setzen, wird der verfügbare Raum jetzt geteilt und zwischen den Elementen platziert.

![Drei Rechtecke unterschiedlicher Breite befinden sich in einer Box. Das erste Rechteck ist an der linken Seite des enthaltenden Kastens ausgerichtet, das dritte Rechteck ist rechts ausgerichtet, und das mittlere Rechteck ist gleichmäßig zwischen dem ersten und letzten beabstandet.](justify-content-space-between.png)

Damit diese Schlüsselwörter wirksam werden, ist Raum entlang der Dimension erforderlich, in der Sie die Elemente ausrichten möchten. Ohne Raum gibt es nichts zu verteilen.

### Grundlegende Beispiele

Die folgenden Beispiele demonstrieren, wie einige der Box-Ausrichtungseigenschaften in [Grid](/de/docs/Web/CSS/Guides/Grid_layout) und [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) angewendet werden.

#### Beispiel zur CSS-Grid-Layout-Ausrichtung

In diesem Grid-Layout-Beispiel gibt es zusätzlichen Raum im Grid-Container nach dem Anordnen der festen Breitenstrecken auf der Inline- (Haupt-) Achse. Dieser Raum wird unter Verwendung von {{cssxref("justify-content")}} verteilt. Auf der Block- (Kreuz-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Gitterbereiche durch {{cssxref("align-items")}} gesteuert. Das erste Element überschreibt den `align-items` Wert, der auf die Gruppe gesetzt wurde, indem {{cssxref("align-self")}} auf `center` gesetzt wird.

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

In diesem Beispiel werden drei Flex-Elemente auf der Hauptachse mit `justify-content` und auf der Kreuzachse mit `align-items` ausgerichtet. Das erste Element überschreibt den `align-items` Satz auf die Gruppe, indem `align-self` auf `center` gesetzt wird.

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

Die {{cssxref("overflow-position")}} Schlüsselwörter `safe` und `unsafe` helfen dabei, das Verhalten zu definieren, wenn ein Ausrichtungsobjekt größer als der Ausrichtungscontainer ist. Das `safe` Schlüsselwort richtet sich im Fall einer angegebenen Ausrichtung, die einen Überlauf verursacht, am `start` aus, mit dem Ziel, "Datenverlust" zu vermeiden, bei dem ein Teil des Elements außerhalb der Grenzen des Ausrichtungscontainers ist und nicht gescrollt werden kann.

Wenn Sie `unsafe` angeben, wird die Ausrichtung beibehalten, auch wenn dies zu einem solchen Datenverlust führen würde.

## Lücken zwischen Boxen

Die Spezifikation zur Box-Ausrichtung beinhaltet auch die `gap`, `row-gap` und `column-gap` Eigenschaften. Diese Eigenschaften ermöglichen die Einstellung einer konsistenten Lücke zwischen Elementen in einer Zeile oder Spalte, in jeder Layout-Methode, in der Elemente auf diese Weise angeordnet sind.

Die `gap` Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`, die uns ermöglicht, diese Eigenschaften auf einmal festzulegen:

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Im folgenden Beispiel verwendet ein Grid-Layout die `gap` Kurzform, um einen `10px` Abstand zwischen Zeilenstrecken und einen `2em` Abstand zwischen Spaltenstrecken festzulegen.

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

Frühe Gitterimplementierungen enthielten `gap`-Eigenschaften, die mit `grid-` präfixiert waren. Alle Browser unterstützen die unpräfixierten Eigenschaften, obwohl Sie möglicherweise die folgenden Eigenschaften in einem Code-Basis sehen: {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Die präfixierten Versionen sind Aliase der unpräfixierten.

Seien Sie sich bewusst, dass andere Dinge den angezeigten visuellen Abstand vergrößern können, beispielsweise die Verwendung der Raumverteilungsschlüsselwörter oder das Hinzufügen von Rändern zu Elementen.

## Box-Ausrichtung nach Layout-Typ

Da die CSS-Box-Ausrichtungseigenschaften je nach der Spezifikation, mit der sie interagieren, unterschiedlich implementiert werden, konsultieren Sie die folgenden Leitfäden, um Details zur Nutzung der Ausrichtungseigenschaften mit jedem Layouttyp zu erhalten:

- [Box-Ausrichtung in Flexbox](/de/docs/Web/CSS/Guides/Box_alignment/In_flexbox)
- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [Box-Ausrichtung im Mehrspalten-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_multi-column_layout)
- [Box-Ausrichtung für Block-, absolut positioniertes und Tabellen-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_block_abspos_tables)

## Siehe auch

- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
- [CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display)
- [CSS-Flexlayout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul
