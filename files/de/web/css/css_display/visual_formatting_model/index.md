---
title: Visuelles Formatierungsmodell
slug: Web/CSS/CSS_display/Visual_formatting_model
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und für visuelle Medien verarbeiten und darstellen. Dies umfasst {{Glossary("continuous_media", "kontinuierliche Medien")}} wie einen Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das durch Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell generiert jedes Element im Dokumentbaum null oder mehr Boxen gemäß dem Box-Modell. Die Anordnung dieser Boxen wird bestimmt durch:

- Box-Abmessungen und -Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z.B. Viewport-Größe, intrinsische Abmessungen von Bildern, usw.).

Viele Informationen über das visuelle Formatierungsmodell sind in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen werden Sie oft Referenzen auf das in CSS2 definierte Modell finden, daher ist ein Verständnis des Modells und der in CSS2 verwendeten Begriffe wertvoll beim Lesen anderer Layout-Spezifikationen.

In diesem Dokument definieren wir das Modell und führen einige der zugehörigen Begriffe und Konzepte ein, mit Verlinkungen zu spezifischeren Seiten für weitere Details.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn die Viewport-Größe sich ändert — zum Beispiel, wenn Sie Ihr Fenster in der Größe ändern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn der Viewport kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Am häufigsten sehen wir dies als Scrollen in der **Block-Dimension** — vertikal in einer horizontalen, von oben nach unten verlaufenden Sprache. Sie könnten jedoch auch etwas entwerfen, das Scrollen in der **Inline-Dimension** erfordert.

## Box-Generierung

**Box-Generierung** ist der Teil des CSS-Visuellen Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von unterschiedlichen Typen, die ihr visuelles Layout beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

In CSS2 ursprünglich definiert, wurde die `display`-Eigenschaft in den Modulen [CSS display](/de/docs/Web/CSS/CSS_display), [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS ruby layout](/de/docs/Web/CSS/CSS_ruby_layout) erweitert. Zusätzlich wurde einige der Terminologien rund um die Darstellung seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf einer Leinwand. Dafür generiert es eine Zwischenstruktur, den **Box-Baum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenfalls den Inhalt seiner entsprechenden Textknoten darstellt.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie durch den `display`-Eigenschaftswert dieses Elements spezifiziert.

> [!NOTE]
> Boxen werden oft nach ihrem Display-Typ bezeichnet — z.B. eine Box, die von einem Element mit `display: block` generiert wird, wird als "Blockbox" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Blockboxen, Blockebenenboxen und Blockcontainer alle etwas unterschiedlich sind; siehe den Abschnitt über [Blockboxen](#blockboxen) weiter unten für mehr Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die ihre Nachfahrenboxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die in irgendeinem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzliche Boxen neben der Hauptbox generieren, z.B. generiert `display: list-item` mehr als eine Box (z.B. eine **Haupt-Blockbox** und eine **Kind-Markierungsbox**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachfahren überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box vorhanden ist. Diese Situation tritt auf, wenn Sie z.B. `display: flex` auf einem übergeordneten Element deklarieren, und direkt darin ein Textlauf enthalten ist, der nicht in ein anderes Element eingeschlossen ist. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie wird dann als Flex-Element agieren, kann jedoch nicht wie eine reguläre Box gezielt angesteuert oder gestylt werden, da es kein Ziel-Element gibt.

```html live-sample___anonymous-flex
<div class="flex">
  I am wrapped in an anonymous box
  <p>I am in the paragraph</p>
  I am wrapped in an anonymous box.
</div>
```

```css live-sample___anonymous-flex
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.flex {
  display: flex;
}

.flex > * {
  background-color: rebeccapurple;
  color: white;
}
```

{{EmbedLiveSample("anonymous-flex")}}

Dasselbe passiert, wenn Sie Textläufe haben, die mit Blockelementen durchsetzt sind. Im nächsten Beispiel habe ich eine Zeichenkette in einem `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

```html live-sample___anonymous-block
<div class="example">
  I am wrapped in an anonymous box
  <p>I am in the paragraph</p>
  I am wrapped in an anonymous box.
</div>
```

```css live-sample___anonymous-block
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.example > * {
  background-color: rebeccapurple;
  color: white;
}
```

{{EmbedLiveSample("anonymous-block")}}

Die Zeichenkette wird im Box-Baum in drei Boxen aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in eine anonyme Box eingewickelt, dann haben wir das `<p>`, das eine Box generiert, und dann noch eine anonyme Box.

Etwas, das bei diesen anonymen Boxen zu beachten ist, ist, dass sie Stile von ihrem direkten übergeordneten Element erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie die anonyme Box anvisieren. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers anzuvisieren. Dies ändert nicht die anonymen Boxen, da sie nicht im klassischen Sinne "Elemente" sind.

**Inline-anonyme Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element unterbrochen wird, z.B. ein Satz, der einen Abschnitt umfasst, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element umschlossen ist, dann eine abschließende anonyme Inline-Box. Wie bei den anonymen Blockboxen können diese anonymen Inline-Boxen nicht unabhängig vom `<em>` gestaltet werden; sie erben einfach die Stile ihrer Container.

Andere Formatierungskontexte erstellen ebenfalls anonyme Boxen. [Grid layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich in gleicher Weise wie das Flexbox-Beispiel oben und verwandelt Textzeichenfolgen in ein Gitterelement mit einer anonymen Box. [Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig angesteuert werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen — z.B. indem eine anonyme Tabellenzeile hinzugefügt wird — wenn keine Box mit `display: table-row` vorhanden war.

### Linienboxen

**Linienboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Linienboxen und ihrem umgebenden Block sehen, wenn Sie ein Item floaten und dann von einem Block, der eine Hintergrundfarbe hat, folgen lassen.

Im folgenden Beispiel werden die Linienboxen, die dem gefloateten `<div>` folgen, verkürzt, um den Float zu umschließen. Der Hintergrund der Box läuft hinter dem Float ab, da das gefloatete Element aus dem Fluss genommen wurde.

```html live-sample___line-boxes
<div class="float"></div>
<p class="following">
  This text is following the float, the line boxes are shortened to make room
  for the float but the box of the element still takes position in normal flow.
</p>
```

```css live-sample___line-boxes
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.float {
  float: left;
  width: 150px;
  height: 150px;
  background-color: rebeccapurple;
  margin: 20px;
}

.following {
  background-color: #ccc;
}
```

{{EmbedLiveSample("line-boxes", "", "250px")}}

## Positionierungsschemata und Elemente im Fluss und außerhalb des Flusses

In CSS kann eine Box nach drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die Block-Level-Formatierung von Blockboxen, die Inline-Level-Formatierung von Inlineboxen und beinhaltet auch die relative und Sticky-Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über das [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zunächst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss herausgenommen und positioniert, typischerweise links oder rechts. Inhalte können an der Seite eines Floats entlang fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem umgebenden Block positioniert (im Fall von fixierter Positionierung ist das der Viewport) oder relativ zu einem oder mehreren Ankerelementen in [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning).

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **innerhalb des Flusses** bezeichnet, wenn es nicht aus dem Fluss herausgenommen wurde.

Lesen Sie über das [CSS Positioning Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Eigenschaft Display

Boxen können als ein **äußerer Anzeigetyp** beschrieben werden, der entweder `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box zusammen mit anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der bestimmt, wie ihre Kinder sich verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Anzeigetyp `flow`. Dies bedeutet, dass die Kind-Elemente ebenfalls entweder `block` oder `inline` sein werden.

Der innere Anzeigetyp könnte jedoch auch etwas wie `grid` oder `flex` sein, wobei die direkten Kinder als Gitter- oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element als Erzeuger eines Gitter- oder Flex-Formatierungskontexts beschrieben. In vielerlei Hinsicht ähnelt dies einem Blockformatierungskontext, jedoch verhalten sich die Kinder als Flex- oder Gitterelemente statt als Elemente im normalen Fluss.

Die Wechselwirkungen zwischen Block-Level- und Inline-Level-Boxen werden in der Eigenschaftsreferenz {{cssxref("display")}} beschrieben.

Zusätzlich erklären die Referenzen für spezifische Display-Werte, wie diese Formatierungskontexte in Bezug auf das Box-Layout funktionieren.

- [CSS Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Boxenlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres umgebenden Blocks teil oder erstellen einen unabhängigen Formatierungskontext. Ein Gittercontainer erstellt zum Beispiel einen neuen **Gitter-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Ränder kollabieren nicht über Formatierungskontext-Grenzen hinweg. Daher kann das Erstellen eines neuen Blockformatierungskontexts sicherstellen, dass Floats und Ränder innerhalb einer Box verbleiben. Um dies zu tun, fügen Sie `display: flow-root` zur Box hinzu, bei der Sie einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint das gefloatete Element und den Text herum zu umschließen. Wenn Sie `display: flow-root` entfernen, wird das gefloatete Element aus der Unterseite der Box herausragen, da es nicht mehr enthalten ist.

```html live-sample___block-flow-root
<div class="container">
  <div class="item">Floated</div>
  <p>Text following the float.</p>
</div>
```

```css hidden live-sample___block-flow-root
body {
  font: 1.2em sans-serif;
  margin: 20px;
}
.container {
  background-color: #333;
  color: #fff;
}

.item {
  background-color: #fff;
  border: 1px solid #999;
  color: #333;
  width: 100px;
  height: 100px;
  padding: 10px;
}
```

```css live-sample___block-flow-root
.container {
  display: flow-root;
}

.item {
  margin: 10px;
  float: left;
}
```

{{EmbedLiveSample("block-flow-root", "", "250px")}}

### Blockboxen

In Spezifikationen werden Blockboxen, Block-Level-Boxen und Blockcontainer an bestimmten Stellen alle als **Blockboxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Blockbox sollte nur verwendet werden, wenn keine Zweideutigkeit besteht.

#### Blockcontainer

Ein **Blockcontainer** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die sich im Blockcontainer befinden und an Inline- oder Block-Layout teilnehmen.

#### Blockboxen

Eine Blockbox ist eine Block-Level-Box, die auch ein Blockcontainer ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Blockcontainer (sie könnte z.B. ein Flex- oder Gittercontainer sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "ScrollContainer")}}
