---
title: Übersicht über CSS-Gaps und Eigenschaften für Gap-Dekorationen
short-title: Gaps und Gap-Dekorationen
slug: Web/CSS/Guides/Gaps/Overview
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

Das Modul [CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps) definiert Eigenschaften, mit denen Sie den Abstand zwischen Zeilen und Spalten in CSS-Layouts mit [Grid](/de/docs/Web/CSS/Guides/Grid_layout), [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [mehreren Spalten](/de/docs/Web/CSS/Guides/Multicol_layout) steuern können. Das Modul definiert außerdem Eigenschaften zum Zeichnen dekorativer Linien innerhalb dieser Abstände. Diese Linien werden als _Rules_ oder _Gap-Dekorationen_ bezeichnet.

Dieser Leitfaden stellt Gap-Dekorationen und die Eigenschaften vor, mit denen Sie ihr Erscheinungsbild steuern.

## Einführung in Gap-Rules

Mit den [CSS-Gap-Eigenschaften](/de/docs/Web/CSS/Guides/Gaps#properties) können Sie in der Mitte jedes {{Glossary("gutters", "Zwischenraums")}} (oder _Gaps_) in mehrspaltigen, Grid- und Flexbox-Layouts Linien zeichnen. Während {{cssxref("margin")}} und {{cssxref("padding")}} den sichtbaren Abstand um einzelne Boxen festlegen, bestimmen Sie mit den Eigenschaften des CSS-Gaps-Moduls den Abstand zwischen benachbarten Boxen innerhalb eines Layouts. Sie können allen oder nur bestimmten Gaps Rules hinzufügen, deren Breite, Farbe und Einzüge steuern und diese Eigenschaften animieren.

Ursprünglich waren Spaltenabstände und ihre Dekorationen auf [mehrspaltige CSS-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) beschränkt. Sie konnten Breite, Farbe und Stil der Spalten-Rules festlegen, aber alle Rules hatten dasselbe Erscheinungsbild und erstreckten sich über die gesamte Blockdimension.

Grid-Layouts unterstützen seit jeher Abstände zwischen Zeilen und Spalten, ursprünglich jedoch keine Dekorationen in diesen Abständen. Bevor Rules auf alle Layouts mit Gaps ausgeweitet wurden, waren zum Zeichnen von Linien zwischen Zeilen und Spalten in Grid- und Flexbox-Layouts Behelfslösungen nötig, etwa Hintergrundbilder, Rahmen um alle Elemente oder sogar absolut positionierte Überlagerungen.

Mit dem CSS-Gaps-Modul können Sie Spalten- und Zeilenabstände für alle Layout-Container mit Gaps definieren und Rules in der Mitte horizontaler und vertikaler Gaps zeichnen. Diese Rules wirken sich nicht auf das Box-Modell aus.

Dieses Beispiel zeigt die grundlegenden Funktionen für Gap-Dekorationen: Zwischen den Grid-Zeilen befinden sich lindgrüne Rules, zwischen den Spalten dunkelviolette.

```css live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 60px;
  padding: 1rem;

  gap: 1.5rem;
  column-rule: thick solid darkviolet;
  row-rule: thick solid lime;
}
```

```css hidden live-sample___basic live-sample___overlap live-sample___breaking live-sample___ends live-sample___visibility
.grid {
  outline: 2px solid;
  margin: 1rem;
  font-family: monospace;
  font-size: 1.5em;
  background: #efefef;
}
.grid > div {
  outline: 1px solid;
  align-items: center;
  justify-content: center;
  display: flex;
  background: #e0e0e0;
}

@supports not (row-rule: solid thin darkviolet) {
  body::before {
    content: "Your browser doesn't support the row-rule property ";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

```html hidden live-sample___basic live-sample___overlap live-sample___breaking
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>
```

{{EmbedLiveSample("Basic", "", "210")}}

## Die Größe von Gaps festlegen

Mit der Kurzschreibweise {{cssxref("gap")}} und ihren Einzel-Eigenschaften ({{cssxref("column-gap")}} und {{cssxref("row-gap")}}) legen Sie den Abstand zwischen benachbarten Spalten und Zeilen innerhalb eines Layouts fest. So entstehen die Gaps, in denen Rules gezeichnet werden können.

- {{cssxref("column-gap")}}: Ein Wert vom Typ {{cssxref("&lt;line-width&gt;")}} oder {{cssxref("&lt;length-percentage&gt;")}}. Er kann eines der Schlüsselwörter `thin`, `medium` oder `thick` oder ein positiver {{cssxref("length")}}- oder {{cssxref("percentage")}}-Wert sein und legt die Breite des Abstands zwischen Spalten fest. Der Standardwert ist `0` bei Flexbox und Grid sowie `1em` bei mehrspaltigen Layouts.
- {{cssxref("row-gap")}}: Verwendet dieselben Werte wie `column-gap` und legt die Breite des Abstands zwischen Zeilen fest.
- {{cssxref("gap")}}: Legt mit einem oder zwei Werten zugleich `row-gap` und `column-gap` fest, und zwar in dieser Reihenfolge.

Auch wenn diese Eigenschaften zunächst intuitiv erscheinen, unterscheiden sich die Standardgröße und die Behandlung von [Prozentwerten für Gaps](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps#specifying_gap_values_as_percentages) je nach Layouttyp und danach, ob der Container eine feste Größe hat. Im Leitfaden [CSS-Gaps definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps) erfahren Sie, wie Sie Gaps in Grid-, Flexbox- und mehrspaltigen Layouts dimensionieren und wie Prozentwerte aufgelöst werden.

## Das Erscheinungsbild von Rules festlegen

Die Eigenschaften `column-rule-*` und `row-rule-*` steuern Breite, Farbe und Stil von Rules in Spalten- beziehungsweise Zeilenabständen. Die `rule-*`-Kurzschreibweisen wenden dieselben Werte auf Spalten- und Zeilen-Rules an.

Alle Eigenschaften in diesem Abschnitt akzeptieren eine kommagetrennte Liste von Werten. So können Sie die Gaps innerhalb eines Containers unterschiedlich dekorieren. Mit der Funktion {{cssxref("repeat()")}} innerhalb der Liste können Sie Werte eine bestimmte Anzahl von Malen oder so oft wie nötig wiederholen, um alle Rules zu gestalten.

Zu den `column-rule-*`-Eigenschaften gehören:

- {{cssxref("column-rule")}}: Kurzschreibweise, die {{cssxref("line-width")}}, {{cssxref("line-style")}} und {{cssxref("&lt;color&gt;")}} der Spalten-Rules festlegt.
- {{cssxref("column-rule-color")}}: Legt die Farben der Spalten-Rules fest. Der Standardwert ist `currentcolor`.
- {{cssxref("column-rule-style")}}: Legt die Linienstile der Spalten-Rules fest. Mögliche Werte sind `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none` und `hidden`.
- {{cssxref("column-rule-width")}}: Legt die Breiten der Spalten-Rules fest. Mögliche Werte sind `thin`, `medium`, `thick` oder ein positiver {{cssxref("length")}}-Wert.

Die folgenden `row-rule-*`-Eigenschaften verwenden dieselbe Syntax wie ihre `column-rule-*`-Entsprechungen:

- {{cssxref("row-rule")}}: Kurzschreibweise, die `<line-width>`, `<line-style>` und `<color>` der Zeilen-Dekorationslinie festlegt.
- {{cssxref("row-rule-color")}}: Die Farben der in Zeilenabständen gezeichneten Rules. Der Standardwert ist `currentcolor`.
- {{cssxref("row-rule-style")}}: Die Linienstile der in Zeilenabständen gezeichneten Rules.
- {{cssxref("row-rule-width")}}: Die Breiten der in Zeilenabständen gezeichneten Rules.

Die folgenden `rule-*`-Kurzschreibweisen akzeptieren dieselben Werte wie die entsprechenden `column-*`-Eigenschaften und wenden dieselbe Werteliste auf beide Achsen an:

- {{cssxref("rule")}}: Setzt `column-rule` und `row-rule` auf denselben Wert.
- {{cssxref("rule-color")}}: Setzt `column-rule-color` und `row-rule-color` auf denselben Wert.
- {{cssxref("rule-style")}}: Setzt `column-rule-style` und `row-rule-style` auf denselben Wert.
- {{cssxref("rule-width")}}: Setzt `column-rule-width` und `row-rule-width` auf denselben Wert.

Weitere Informationen zum Festlegen von Farben, Breiten und Stilen für Rules sowie zur Verwendung der Funktion `repeat()` finden Sie unter [Rules für CSS-Gaps definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_rules).

## Rules in Segmente unterteilen

In Grid- und mehrspaltigen Layouts erstrecken sich Rules standardmäßig über die gesamte Block- und Inline-Dimension des Containers. Mit den `*-rule-break`-Eigenschaften können Sie Linien, die sich über mehrere Zeilen oder Spalten erstrecken, in Segmente unterteilen. Das Verhalten an Kreuzungspunkten legen Sie mit den folgenden Eigenschaften fest:

- {{cssxref("column-rule-break")}}: Die Schlüsselwörter `none`, `normal` oder `intersection` geben an, ob Spalten-Rules an Zeilenabständen unterbrochen werden oder durchgehend verlaufen.
- {{cssxref("row-rule-break")}}: Die Schlüsselwörter `none`, `normal` oder `intersection` geben an, ob Zeilen-Rules an Spaltenabständen unterbrochen werden oder durchgehend verlaufen.
- {{cssxref("rule-break")}}: Setzt `column-rule-break` und `row-rule-break` auf denselben Wert.

Im Vergleich zum ersten Beispiel sind die Zeilen-Rules hier an den Spaltenabständen in einzelne Segmente unterteilt, während die Spalten-Rules durchgehend verlaufen:

```css live-sample___breaking
.grid {
  column-rule-break: none;
  row-rule-break: intersection;
}
```

```css hidden live-sample___breaking
@supports not (rule-break: intersection) {
  body::before {
    content: "Your browser doesn't support the rule-break properties ";
  }
}
```

{{EmbedLiveSample("Breaking", "", "210")}}

Wenn Linien unterbrochen werden, enden innere Segmente standardmäßig am Rand des Gaps, ohne in ihn hineinzureichen. Segmente, die an den Containerrand angrenzen, werden dagegen bis zum Rand der [Content-Box](/de/docs/Web/CSS/Reference/Values/box-edge#content-box) des Containers gezeichnet.

## Die Länge von Rule-Segmenten steuern

Mit den `*-rule-inset-*`-Eigenschaften können Sie Rule-Segmente verkürzen oder verlängern. Sie verschieben die Segmentenden relativ zu den Stellen, an denen die Segmente normalerweise beginnen oder enden würden.

Standardmäßig werden durchgehende Rules von einem Ende des Containers bis zum anderen gezeichnet. Rules enden am Containerrand, wenn dort keine weiteren Rule-Segmente vorhanden sind; diese Rules haben zwei als _Cap_ bezeichnete Segmentenden. Der Anfang ist der _Cap-Start_-Rand, das Ende der _Cap-End_-Rand.

Wird eine Rule in Segmente unterteilt, hängt die Art des Randes davon ab, ob er auf andere Rule-Segmente trifft. Spalten-Rules kreuzen Zeilen-Rules an inneren _Verbindungspunkten_. Beginnt oder endet ein Rule-Segment an einem inneren Verbindungspunkt, an dem weitere Rule-Segmente vorhanden sind, handelt es sich um einen _Junction-Start_- beziehungsweise _Junction-End_-Rand.

Die `*-rule-inset-junction-*`-Eigenschaften bestimmen die Endpunkte an Gap-Verbindungspunkten, an denen weitere Segmente vorhanden sind. Die `*-rule-inset-cap-*`-Eigenschaften verschieben dagegen Endpunkte, an denen keine weiteren Rule-Segmente vorhanden sind. Dazu gehören Endpunkte an den Inline- und Blockrändern des Containers sowie an Kreuzungspunkten, an denen die Eigenschaft {{cssxref("rule-visibility-items")}} verhindert, dass andere Segmente gezeichnet werden.

Im folgenden Beispiel verlaufen die Spalten-Rules durchgehend, werden aber mit der Kurzschreibweise {{cssxref("column-rule-inset-cap")}} oben und unten jeweils um `10px` verkürzt. Die Zeilen-Rules werden mit der Eigenschaft `row-rule-break` an den Rändern der Spaltenabstände in Segmente unterteilt. Wir haben `row-rule-inset-cap` auf `-20px` gesetzt, um ihre Cap-Enden um `20px` nach außen zu verlängern. Außerdem haben wir {{cssxref("row-rule-inset-junction")}} auf `10px` gesetzt, um die Segmente an ihren Junction-Enden um `10px` zu verkürzen. Alternativ hätten wir die Kurzschreibweise {{cssxref("row-rule-inset")}} auf `-20px / 10px` setzen können. Damit werden die Einzüge für Cap- und Junction-Enden in dieser Reihenfolge festgelegt.

```css live-sample___ends
.grid {
  row-rule-break: intersection;
  column-rule-inset-cap: 10px;
  row-rule-inset-cap: -20px;
  row-rule-inset-junction: 10px;
}
```

```css hidden live-sample___ends
.grid {
  row-rule-style: solid;
}

@supports not (row-rule-inset-cap: -20px) {
  body::before {
    content: "Your browser doesn't support all the gap decoration properties.";
  }
}
```

```html hidden live-sample___ends
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
</div>
```

{{EmbedLiveSample("ends", "", "320")}}

### Eigenschaften für Einzüge von Spalten-Rules

Mit den `column-rule-inset-*`-Eigenschaften können Sie die Cap- und Junction-Ränder von Spaltensegmenten einrücken und so deren Anfang, Ende oder beides steuern.

#### Eigenschaften für Cap-Einzüge von Spalten-Rules

Die `column-rule-inset-cap-*`-Eigenschaften legen den Abstand zwischen einem Segmentende und dem Containerrand oder einem Gap-Verbindungspunkt fest, an dem keine weiteren Gap-Dekorationssegmente vorhanden sind. Positive Werte verkürzen das Segment, negative Werte verlängern es. Die Eigenschaften akzeptieren `<inset-value>`-Werte: entweder einen `<length-percentage>`-Wert oder das Schlüsselwort `overlap-join`. Ein `<length-percentage>`-Wert legt den Abstand zwischen dem oberen oder unteren Ende des Spaltensegments und dem angrenzenden Zeilenabstand oder Containerrand fest. Das Schlüsselwort `overlap-join` wird für Cap-Ränder zu `0` aufgelöst. Endet das Segment am Containerrand, werden Prozentwerte zu `0` aufgelöst. Andernfalls beziehen sich Prozentwerte auf die Größe des Zeilenabstands zuzüglich eines durch die Eigenschaft {{cssxref("align-content")}} hinzugefügten Abstands.

- {{cssxref("column-rule-inset-cap-end")}}: Legt den Abstand zwischen dem Ende des Spalten-Rule-Segments und – je nachdem, ob das Segment am oberen Containerrand oder an einem inneren Verbindungspunkt beginnt – dem Anfangsrand des Containers beziehungsweise dem unteren Rand des Zeilenzwischenraums fest.

- {{cssxref("column-rule-inset-cap-start")}}: Legt den Abstand zwischen dem Anfang beziehungsweise oberen Ende des Spalten-Rule-Segments und – je nachdem, ob das Segment am oberen Containerrand oder an einem inneren Verbindungspunkt beginnt – dem Anfangsrand des Containers beziehungsweise dem unteren Rand des Zeilenzwischenraums fest.

- Kurzschreibweise {{cssxref("column-rule-inset-cap")}}: Legt `column-rule-inset-cap-start` und `column-rule-inset-cap-end` mit einem oder zwei `<inset-value>`-Werten fest. Geben Sie nur einen Wert an, werden beide Eigenschaften darauf gesetzt. Bei zwei Werten legt der erste `column-rule-inset-cap-start` und der zweite `column-rule-inset-cap-end` fest.

#### Eigenschaften für Junction-Einzüge von Spalten-Rules

Die `column-rule-inset-junction-*`-Eigenschaften legen an Verbindungspunkten mit anderen Rule-Segmenten den Abstand zwischen dem Segment und dem Rand des Zeilenzwischenraums fest. Positive Werte verkürzen das Segment; negative Werte und das Schlüsselwort `overlap-join` verlängern es. Prozentwerte beziehen sich auf die Größe des Zeilenabstands zuzüglich eines durch die Eigenschaft {{cssxref("align-content")}} hinzugefügten Abstands.

- {{cssxref("column-rule-inset-junction-end")}}: Legt den Abstand zwischen dem Ende beziehungsweise unteren Rand des Spalten-Rule-Segments und dem oberen Rand des darunterliegenden Zeilenzwischenraums fest.

- {{cssxref("column-rule-inset-junction-start")}}: Legt den Abstand zwischen dem Anfang beziehungsweise oberen Rand des Spalten-Rule-Segments und dem unteren Rand des darüberliegenden Zeilenzwischenraums fest.

- Kurzschreibweise {{cssxref("column-rule-inset-junction")}}: Legt `column-rule-inset-junction-start` und `column-rule-inset-junction-end` mit einem oder zwei Werten fest. Geben Sie nur einen Wert an, werden beide Eigenschaften darauf gesetzt. Bei zwei Werten legt der erste `column-rule-inset-junction-start` und der zweite `column-rule-inset-junction-end` fest.

#### Kurzschreibweisen für Cap- und Junction-Einzüge von Spalten-Rules

Mit den `column-rule-inset-*`-Eigenschaften können Sie Cap- und Junction-Einzüge auf denselben Wert setzen. Mit der Kurzschreibweise `column-rule-inset` lassen sich die Ränder dagegen unabhängig voneinander festlegen:

- {{cssxref("column-rule-inset-end")}}: Ein einzelner `<inset-value>`-Wert setzt `column-rule-inset-cap-end` und `column-rule-inset-junction-end` auf denselben Wert.

- {{cssxref("column-rule-inset-start")}}: Ein einzelner `<inset-value>`-Wert setzt `column-rule-inset-cap-start` und `column-rule-inset-junction-start` auf denselben Wert.

- Kurzschreibweise {{cssxref("column-rule-inset")}}: Legt `column-rule-inset-cap-start`, `column-rule-inset-cap-end`, `column-rule-inset-junction-start` und `column-rule-inset-junction-end` mit einem bis vier `<inset-value>`-Werten fest. Wenn die Cap-Einzüge andere Werte als die Junction-Einzüge erhalten sollen, trennen Sie sie durch einen Schrägstrich (`/`). Diese Eigenschaft bietet mehr Kontrolle als die Kurzschreibweisen `column-rule-inset-end` und `column-rule-inset-start`, da Sie Cap- und Junction-Ränder auf unterschiedliche Werte setzen können.

### Eigenschaften für Einzüge von Zeilen-Rules

Mit den `row-rule-inset-*`-Eigenschaften können Sie Zeilensegmente verkürzen oder verlängern. Sie verschieben die Enden der Zeilensegmente relativ zu den Stellen, an denen die Segmente normalerweise beginnen oder enden würden. Ob der linke oder der rechte Rand der Anfangsrand ist, hängt vom Schreibmodus ab: Bei Sprachen mit Schreibrichtung von links nach rechts, etwa Englisch, ist links der Anfangsrand und rechts der Endrand.

#### Eigenschaften für Cap-Einzüge von Zeilen-Rules

Wie die `column-rule-inset-cap-*`-Eigenschaften legen auch die `row-rule-inset-cap-*`-Eigenschaften den Abstand zwischen dem Cap-Rand eines Segments und dem Containerrand oder einem Gap-Verbindungspunkt fest, an dem keine weiteren Segmente vorhanden sind. Die `<length-percentage>`-Werte bestimmen den Abstand zwischen dem linken oder rechten Segmentrand und dem rechten oder linken Rand des Spaltenzwischenraums an inneren Verbindungspunkten ohne weiteres Gap-Dekorationssegment beziehungsweise dem linken oder rechten Containerrand. Prozentwerte beziehen sich auf die Größe des angrenzenden Spaltenabstands zuzüglich eines durch die Eigenschaft {{cssxref("justify-content")}} hinzugefügten Abstands. Liegt das Segmentende am Containerrand, werden Prozentwerte zu `0` aufgelöst. Auch der Wert `overlap-join` wird zu `0` aufgelöst.

- {{cssxref("row-rule-inset-cap-end")}}: Legt den Abstand zwischen dem Ende des Zeilensegments und dem Containerrand oder dem Rand eines Spaltenabstands fest, an dem kein weiteres Gap-Dekorationssegment vorhanden ist. Ob dies der linke oder der rechte Segmentrand ist, hängt vom Schreibmodus ab.

- {{cssxref("row-rule-inset-cap-start")}}: Entspricht `row-rule-inset-cap-end`, gilt jedoch für den Anfangsrand statt für den Endrand des Segments.

- Kurzschreibweise {{cssxref("row-rule-inset-cap")}}: Ein oder zwei `<inset-value>`-Werte legen `row-rule-inset-cap-start` und `row-rule-inset-cap-end` fest. Geben Sie nur einen Wert an, werden beide Eigenschaften darauf gesetzt. Bei zwei Werten wird `row-rule-inset-cap-start` auf den ersten und `row-rule-inset-cap-end` auf den zweiten Wert gesetzt.

#### Eigenschaften für Junction-Einzüge von Zeilen-Rules

Die `row-rule-inset-junction-*`-Eigenschaften legen an Verbindungspunkten mit anderen Rule-Segmenten den Abstand zwischen dem Segment und dem Rand des Spaltenzwischenraums fest. Positive Werte verkürzen die Segmente; negative Werte und das Schlüsselwort `overlap-join` verlängern sie. Prozentwerte beziehen sich auf die Größe des Spaltenabstands zuzüglich eines durch die Eigenschaft {{cssxref("justify-content")}} hinzugefügten Abstands.

- {{cssxref("row-rule-inset-junction-end")}}: Legt den Abstand zwischen dem Segmentende und dem Anfang des Spaltenabstands fest. Ob `end` die linke oder rechte Seite des Segments bezeichnet, hängt vom Schreibmodus ab.

- {{cssxref("row-rule-inset-junction-start")}}: Legt den Abstand zwischen dem Segmentanfang und dem Ende des Spaltenabstands fest.

- Kurzschreibweise {{cssxref("row-rule-inset-junction")}}: Ein oder zwei `<inset-value>`-Werte legen `row-rule-inset-junction-start` und `row-rule-inset-junction-end` fest. Geben Sie nur einen Wert an, werden beide Eigenschaften darauf gesetzt. Bei zwei Werten legt der erste `row-rule-inset-junction-start` und der zweite `row-rule-inset-junction-end` fest.

#### Kurzschreibweisen für Cap- und Junction-Einzüge von Zeilen-Rules

Mit den `row-rule-inset-*`-Eigenschaften können Sie Cap- und Junction-Einzüge auf denselben Wert setzen. Mit der Kurzschreibweise `row-rule-inset` lassen sich die Ränder von Zeilensegmenten dagegen unabhängig voneinander festlegen:

- {{cssxref("row-rule-inset-end")}}: Setzt `row-rule-inset-cap-end` und `row-rule-inset-junction-end` auf denselben `<inset-value>`-Wert.

- {{cssxref("row-rule-inset-start")}}: Setzt `row-rule-inset-cap-start` und `row-rule-inset-junction-start` auf denselben `<inset-value>`-Wert.

- Kurzschreibweise {{cssxref("row-rule-inset")}}: Legt `row-rule-inset-cap-start`, `row-rule-inset-cap-end`, `row-rule-inset-junction-start` und `row-rule-inset-junction-end` mit einem bis vier `<inset-value>`-Werten fest. Wenn die Cap-Einzüge andere Werte als die Junction-Einzüge erhalten sollen, trennen Sie sie durch einen Schrägstrich (`/`). Diese Eigenschaft bietet mehr Kontrolle als die Kurzschreibweisen `row-rule-inset-end` und `row-rule-inset-start`, da Sie Anfangs- und Endränder von Cap- und Junction-Bereichen der Zeilensegmente auf unterschiedliche Werte setzen können.

### Kurzschreibweisen für Spalten und Zeilen

Wenn Sie Spalten- und Zeileneinzüge auf dieselben Werte setzen möchten, können Sie eine `rule-inset-*`-Kurzschreibweise verwenden:

- {{cssxref("rule-inset-cap")}}: Setzt `column-rule-inset-cap` und `row-rule-inset-cap` auf denselben Wert.

- {{cssxref("rule-inset-junction")}}: Setzt `column-rule-inset-junction` und `row-rule-inset-junction` auf denselben Wert.

- {{cssxref("rule-inset-end")}}: Setzt `column-rule-inset-end` und `row-rule-inset-end` auf denselben Wert.

- {{cssxref("rule-inset-start")}}: Setzt `column-rule-inset-start` und `row-rule-inset-start` auf denselben Wert.

- {{cssxref("rule-inset")}}: Setzt `column-rule-inset` und `row-rule-inset` auf dieselben Werte. Legt `rule-inset-cap-start`, `rule-inset-cap-end`, `rule-inset-junction-start` und `rule-inset-junction-end` mit einem bis vier `<inset-value>`-Werten fest. Wenn die Cap-Einzüge andere Werte als die Junction-Einzüge erhalten sollen, trennen Sie sie durch einen Schrägstrich (`/`).

Weitere Informationen zum Festlegen von Einzügen für CSS-Gap-Rules, einschließlich der Unterteilung von Rules in Segmente und der Steuerung von Einzügen an Cap- und Junction-Rändern, finden Sie unter [Rule-Einzüge definieren](/de/docs/Web/CSS/Guides/Gaps/Rule_insets).

## Die Sichtbarkeit von Rules steuern

Sie können festlegen, ob Rule-Segmente in Bereichen von Gaps gezeichnet werden, die an leere Bereiche angrenzen.

Beachten Sie in diesem Beispiel, dass neben den leeren Grid-Bereichen keine Rule-Segmente gezeichnet werden.

```css live-sample___visibility
.grid {
  rule-visibility-items: between;
}
```

```css hidden live-sample___visibility
@supports not (rule-visibility-items: between) {
  body::before {
    content: "Your browser doesn't support the rule-visibility-items property.";
  }
}
```

```html hidden live-sample___visibility
<div class="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
</div>
```

{{EmbedLiveSample("visibility", "", "340")}}

Die folgenden Eigenschaften steuern, ob Rule-Segmente neben leeren Bereichen gezeichnet werden:

- {{cssxref("column-rule-visibility-items")}}: Legt fest, wo Segmente unterbrochener Spalten-Rules gezeichnet werden: in allen Spaltenabständen, nur wenn mindestens einer der angrenzenden Spaltenbereiche ein Element enthält oder nur wenn beide angrenzenden Spaltenbereiche jeweils ein Element enthalten. Gültige Werte sind die Schlüsselwörter `all`, `around`, `between` und `normal`.
- {{cssxref("row-rule-visibility-items")}}: Entspricht `column-rule-visibility-items`, gilt jedoch für Zeilen-Rule-Segmente.
- {{cssxref("rule-visibility-items")}}: Setzt `column-rule-visibility-items` und `row-rule-visibility-items` auf denselben Wert.

## Die Überlappung von Rules steuern

Wenn Zeilen- und Spalten-Rules durchgehend verlaufen, überlappen sie sich an ihren Kreuzungspunkten. In Segmente unterteilte Rules überlappen sich ebenfalls, wenn ihre Junction-Einzüge auf `overlap-join` gesetzt sind. Auch negative Einzüge können dazu führen, dass sich Rule-Segmente überlappen – abhängig von der Größe des Gaps, der Größe der Rule und dem Einzugswert. Mit der Eigenschaft {{cssxref("rule-overlap")}} steuern Sie, ob Zeilen-Rules über Spalten-Rules gezeichnet werden oder umgekehrt.

In dieser Erweiterung des ersten Beispiels auf dieser Seite haben wir festgelegt, dass Spalten-Rules an Kreuzungspunkten über Zeilen-Rules gezeichnet werden.

```css live-sample___overlap
.grid {
  rule-overlap: column-over-row;
}
```

```css hidden live-sample___overlap
@supports not (rule-overlap: row-over-column) {
  body::before {
    content: "Your browser doesn't support the rule-overlap property ";
  }
}
```

{{EmbedLiveSample("overlap", "", "210")}}

- {{cssxref("rule-overlap")}}: Legt mit dem Schlüsselwort `row-over-column` oder `column-over-row` die Zeichenreihenfolge an Stellen fest, an denen Zeilen- und Spalten-Rules überlappen.

## Siehe auch

- [CSS-Gaps definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [CSS-Rules definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_rules)
- Modul [CSS-Gaps](/de/docs/Web/CSS/Guides/Gaps)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
