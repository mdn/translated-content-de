---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: 96157fa574bc2cd9f55ff1205198f24addc00104
---

{{CSSRef}}

In CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und ihn für visuelle Medien verarbeiten und anzeigen. Dazu gehören {{Glossary("continuous_media", "kontinuierliche Medien")}} wie ein Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder Dokument, das von Browser-Druckfunktionen gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum gemäß dem Box-Modell null oder mehr Boxen. Das Layout dieser Boxen wird bestimmt durch:

- Box-Dimensionen und -Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z. B. Viewport-Größe, intrinsische Dimensionen von Bildern, etc.).

Ein Großteil der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layoutmodule diese Informationen erweitert. Wenn Sie Spezifikationen lesen, werden Sie oft Verweise auf das Modell finden, wie es in CSS2 definiert ist. Daher ist ein Verständnis des Modells und der Begriffe, die in CSS2 zur Beschreibung verwendet werden, wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der zugehörigen Begriffe und Konzepte ein, wobei wir auf spezifischere Seiten für weitere Details verweisen.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert — zum Beispiel, wenn Sie Ihr Fenster ändern oder die Ausrichtung eines Mobilgeräts ändern.

Wenn der Viewport kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Dies sehen wir meist als Scrollen in der **Blockdimension** — vertikal in einer horizontalen, von oben nach unten laufenden Sprache. Allerdings könnten Sie auch etwas entwerfen, das ein Scrollen in der **Inline-Dimension** erfordert.

## Box-Erzeugung

**Box-Erzeugung** ist der Teil des CSS-Visuellen-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von unterschiedlichen Typen, die ihr visuelles Format beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft in den Modulen [CSS display](/de/docs/Web/CSS/CSS_display), [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS ruby layout](/de/docs/Web/CSS/CSS_ruby_layout) erweitert. Darüber hinaus wurden einige der Terminologien rund um das Display seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Box-Baum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenfalls den Inhalt seiner entsprechenden Textknoten darstellt.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie durch den `display`-Eigenschaftswert dieses Elements festgelegt.

> [!NOTE]
> Boxen werden oft nach ihrem Display-Typ bezeichnet — z. B. wird eine von einem Element mit `display: block` generierte Box als "Block-Box" oder einfach als "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Block-Container alle leicht unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#block-boxen) unten für mehr Details.

### Die principal Box

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **principal Box**, die ihre Nachkommen-Boxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die in jedes Positionierungsschema involviert ist.

Einige Elemente können zusätzliche Boxen neben der principal Box erzeugen, zum Beispiel erzeugt `display: list-item` mehr als eine Box (z. B. eine **principal Block-Box** und eine **Kindermarker-Box**). Und einige Werte (wie `none` oder `contents`) sorgen dafür, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn es kein HTML-Element gibt, das für die Box verwendet werden kann. Diese Situation tritt auf, wenn Sie zum Beispiel `display: flex` auf ein Elternelement deklarieren, und direkt darin befindet sich ein Textlauf, der nicht in einem anderen Element enthalten ist. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Diese wird sich dann wie ein Flex-Item verhalten, kann jedoch nicht als normale Box gezielt angesprochen und gestylt werden, da es kein Ziel-Element gibt.

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

Dasselbe passiert, wenn Sie Textläufe mit Block-Elementen vermischt haben. Im nächsten Beispiel habe ich eine Zeichenkette in einem `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird im Box-Baum in drei Boxen aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in eine anonyme Box verpackt, dann haben wir das `<p>`, das eine Box generiert, und dann eine weitere anonyme Box.

Etwas, das man über diese anonymen Boxen bedenken sollte, ist, dass sie Stile von ihrem direkten Elternelement erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie die anonyme Box gezielt ansprechen. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers anzusprechen. Dies ändert die anonymen Boxen nicht, da sie keine "Elemente" im eigentlichen Sinne sind.

**Inline anonyme Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element unterbrochen wird, zum Beispiel ein Satz, der einen Abschnitt umfasst, der mit `<em></em>` eingeschlossen ist. Dies teilt den Satz in drei Inline-Boxen auf — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, der in das `<em>`-Element eingeschlossene Abschnitt und dann eine letzte anonyme Inline-Box. Wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig gestylt werden, wie etwa das `<em>`; sie erben einfach die Stile ihres Containers.

Andere Formatierungs-Kontexte erstellen ebenfalls anonyme Boxen. [Grid layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich in gleicher Weise wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben, indem Zeichenfolgen in ein Grid-Item mit einer anonymen Box umgewandelt werden. [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; auch diese können nicht gestylt oder anderweitig gezielt werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen — zum Beispiel das Hinzufügen einer anonymen Tabellenzeile — wenn es keine Box mit `display: table-row` gab.

### Linienboxen

**Linienboxen** sind die Boxen, die jede Textzeile umhüllen. Sie können den Unterschied zwischen Linienboxen und ihrem enthaltenden Block erkennen, wenn Sie ein Element floaten lassen und es dann durch einen Block mit einer Hintergrundfarbe folgen.

Im folgenden Beispiel werden die Linienboxen, die dem gefloateten `<div>` folgen, verkürzt, um sich um den Float herumzuwickeln. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss genommen wurde.

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

## Positionierungsschemata und im Fluss und aus dem Fluss befindliche Elemente

In CSS kann eine Box nach drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS normaler Fluss umfasst die Block-Level-Formatierung von Block-Boxen, die Inline-Level-Formatierung von Inline-Boxen und beinhaltet auch die relative und sticky Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über das [Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zunächst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss genommen und positioniert, typischerweise nach links oder rechts. Inhalte können entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenden Block (der bei fester Positionierung der Viewport ist) oder zu einem oder mehreren Ankerelementen in der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert.

Ein Element wird als **aus dem Fluss** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht aus dem Fluss ist.

Lesen Sie über das [CSS positionierte Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die display-Eigenschaft

Boxen können als **äußere Anzeigetypen** beschrieben werden, die `block` oder `inline` sind. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der bestimmt, wie ihre Kinder sich verhalten. Für normales Block- und Inline-Layout, oder normalen Fluss, ist dieser Anzeigetyp `flow`. Das bedeutet, dass auch die Kindelemente entweder `block` oder `inline` sein werden.

Der innere Anzeigetyp könnte jedoch `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Grid- oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element beschrieben, als würde es einen Grid- oder Flex-[Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) erstellen. In vielerlei Hinsicht ist dies dem Block-Formatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Grid-Elemente statt als Elemente im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen sind in der Eigenschaftsreferenz {{cssxref("display")}} beschrieben.

Darüber hinaus erklären die Referenzen zu spezifischen Display-Werten, wie diese Formatierungskontexte in Bezug auf das Box-Layout funktionieren.

- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente beteiligen sich entweder am Formatierungskontext ihres enthaltenden Blocks oder erstellen einen unabhängigen Formatierungskontext. Ein Grid-Container zum Beispiel erstellt einen neuen **Grid-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Ränder kollabieren nicht über Formatierungskontextgrenzen hinweg. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Ränder innerhalb einer Box bleiben. Um dies zu erreichen, fügen Sie `display: flow-root` der Box hinzu, bei der Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Auswirkungen von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint sich um das Floatelement und den Text zu wickeln. Entfernen Sie `display: flow-root`, wird das Floatelement aus der unteren Box herausragen, da es nicht mehr enthalten ist.

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

### Block-Boxen

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container alle manchmal als **Block-Boxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Block-Box sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben beschriebene Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die sich innerhalb des Block-Containers befinden und jeweils an Inline- oder Block-Layouts teilnehmen.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box, aber nicht auch ein Block-Container sein (sie könnte ein Flex- oder Grid-Container sein, zum Beispiel).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stacking-Context](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
