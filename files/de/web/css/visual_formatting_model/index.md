---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: fb1a66af8a9fb86eb854e8cf3712d06fb2da0b94
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und für visuelle Medien verarbeiten und anzeigen. Dies umfasst {{Glossary("continuous_media", "kontinuierliche Medien")}} wie einen Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das durch die Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und paginierte Medien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Boxen gemäß dem Box-Modell. Das Layout dieser Boxen wird bestimmt durch:

- Box-Dimensionen und Typ.
- Positionierungsschema (normaler Fluss, float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z. B. Viewport-Größe, intrinsische Dimensionen von Bildern usw.).

Vieles des Wissens über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch wurden durch verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen findet man oft Verweise auf das Modell, wie es in CSS2 definiert ist, daher ist ein Verständnis des Modells und der Begriffe, die zur Beschreibung in CSS2 verwendet werden, wertvoll beim Lesen anderer Layoutspezifikationen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, und verweisen auf spezifischere Seiten für weitere Details.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der Sichtbereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert — zum Beispiel, wenn Sie Ihr Fenster vergrößern oder die Ausrichtung eines Mobilgeräts ändern.

Wenn der Viewport kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit anbieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Am häufigsten sehen wir dies als Scrollen in der **Block-Dimension** — vertikal in einer horizontalen, von oben nach unten gehenden Sprache. Sie könnten jedoch auch etwas entwerfen, das Scrollen in der **Inline-Dimension** erfordert.

## Box-Generierung

Die **Box-Generierung** ist der Teil des CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von unterschiedlichen Typen, die das visuelle Format beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wird die `display`-Eigenschaft im [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) erweitert. Außerdem wurden einige der Terminologien rund um die Anzeige im Laufe der Jahre seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Box-Baum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenfalls den Inhalt seiner entsprechenden Textknoten darstellt.

Für jedes Element generiert CSS dann null oder mehr Boxen, wie durch den Wert der `display`-Eigenschaft dieses Elements angegeben.

> [!NOTE]
> Boxen werden oft nach ihrem Darstellungstyp bezeichnet — z. B. eine Box, die von einem Element mit `display: block` generiert wird, wird als "Blockbox" oder einfach als "Block" bezeichnet. Beachten Sie jedoch, dass Blockboxen, block-level Boxen und Box-Container alle subtil unterschiedlich sind; siehe den Abschnitt [Blockboxen](#blockboxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die ihre Nachkommen-Boxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die in einem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzliche Boxen neben der Hauptbox generieren, zum Beispiel `display: list-item`, das mehr als eine Box generiert (z. B. eine **Hauptblockbox** und eine **Kindmarkerbox**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Verwendung der Box vorhanden ist. Diese Situation tritt beispielsweise auf, wenn Sie `display: flex` auf einem Elternelement deklarieren und direkt darin ein Textlauf enthalten ist, der sich nicht in einem anderen Element befindet. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf herum erstellt. Sie verhält sich dann wie ein Flex-Item, kann jedoch nicht wie eine reguläre Box gezielt und gestylt werden, da kein Element vorhanden ist, auf das verwiesen werden kann.

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

Dasselbe passiert, wenn Sie Textläufe mit Block-Elementen durchsetzen. Im folgenden Beispiel habe ich eine Zeichenkette innerhalb eines `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird in drei Boxen im Box-Baum aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in einer anonymen Box gekapselt, dann haben wir das `<p>`, das eine Box erzeugt, und schließlich eine weitere anonyme Box.

Etwas, das bei diesen anonymen Boxen zu beachten ist, ist, dass sie Stile von ihrem direkten Elternteil erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie die anonyme Box anvisieren. In meinen Beispielen verwende ich einen direkten Kindselektor, um die Kinder des Containers zu anvisieren. Dies ändert die anonymen Boxen nicht, da sie keine "Elemente" im eigentlichen Sinne sind.

**Inline-anonyme Boxen** werden erstellt, wenn eine Zeichenfolge durch ein Inline-Element unterbrochen wird, zum Beispiel ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen auf — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, der Abschnitt, der im `<em>`-Element enthalten ist, und dann eine abschließende anonyme Inline-Box. Wie bei den anonymen Blockboxen können diese anonymen Inline-Boxen nicht unabhängig wie das `<em>`-Element gestylt werden; sie erben einfach die Stile ihres Containers.

Auch andere Formatierungskontexte erstellen anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich auf die gleiche Weise wie das obige [Flexbox-](/de/docs/Web/CSS/CSS_flexible_box_layout) Beispiel und verwandelt Textfolgen in ein Gitter-Item mit einer anonymen Box. Das [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; auch diese können nicht gestylt oder anderweitig anvisiert werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen, zum Beispiel eine anonyme Tabellenzeile hinzuzufügen, wenn keine Box mit `display: table-row` vorhanden war.

### Linienboxen

**Linienboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Linienboxen und ihrem umgebenden Block sehen, wenn Sie ein Element floaten und anschließend ein Blockelement mit einer Hintergrundfarbe verwenden.

Im folgenden Beispiel werden die Linienboxen, die dem gefloateten `<div>` folgen, verkürzt, um den Float zu umschließen. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss genommen wurde.

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

In CSS kann eine Box je nach drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Float** oder **absolute Positionierung**.

### Normaler Fluss

Im normalen Fluss von CSS umfasst die Block-Level-Formatierung von Blockboxen, die Inline-Level-Formatierung von Inline-Boxen sowie die relative und sticky Positionierung von Block- und Inline-Level-Boxen.

Lesen Sie mehr über [Fluss-Layout](/de/docs/Web/CSS/CSS_flow_layout) in CSS.

### Float

Im Float-Modell wird eine Box zunächst gemäß dem normalen Fluss angeordnet und dann aus dem Fluss herausgenommen und positioniert, typischerweise links oder rechts. Inhalte können entlang der Seite eines Float fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn/CSS/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und einer Position relativ zu einem umgebenden Block (der der Viewport im Fall der festen Positionierung ist) oder zu einem oder mehreren Ankerelementen in [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugewiesen.

Ein Element wird als **aus dem Fluss** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es sich nicht außerhalb des Flusses befindet.

Lesen Sie über [CSS-Positionierungs-Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können beschrieben werden in Bezug auf einen **äußeren Displaytyp**, der `block` oder `inline` ist. Dieser äußere Displaytyp bezieht sich darauf, wie sich die Box neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Displaytyp, der das Verhalten ihrer Kinder bestimmt. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Displaytyp `flow`. Das bedeutet, dass die Kindelemente ebenfalls `block` oder `inline` sein werden.

Der innere Displaytyp könnte jedoch auch `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Gitter- oder Flex-Items angezeigt werden. In einem solchen Fall wird das Element als Ersteller eines Gitter- oder Flex- [Formatierungskontexts](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies einem Blockformatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Gitter-Items und nicht als Elemente im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen werden in der {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Darüber hinaus erklären die Referenzen für spezifische Display-Werte, wie diese Formatierungskontexte in Bezug auf das Box-Layout funktionieren.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres umgebenden Blocks teil oder sie erstellen einen unabhängigen Formatierungskontext. Ein Gitter-Container erstellt beispielsweise einen neuen **Gitter-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** umfassen Floats, und Margin-Kollaps tritt nicht über Grenzen von Formatierungskontexten hinweg auf. Daher kann die Erstellung eines neuen Blockformatierungskontexts sicherstellen, dass Floats und Margen innerhalb einer Box bleiben. Um dies zu erreichen, fügen Sie `display: flow-root` zu der Box hinzu, bei der Sie einen neuen [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint das gefloatete Element und den Text zu umschließen. Wenn Sie `display: flow-root` entfernen, wird das gefloatete Element unten aus der Box herausragen, da es nicht länger enthalten ist.

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

In Spezifikationen werden Blockboxen, Block-Level-Boxen und Block-Container an bestimmten Stellen alle als **Blockboxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Blockbox sollte nur verwendet werden, wenn keine Unklarheit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir oben beschriebenes Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die sich innerhalb des Block-Containers befinden und die am Inline- oder Block-Layout teilnehmen.

#### Blockboxen

Eine Blockbox ist eine Block-Level-Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Block-Container (es könnte sich beispielsweise um einen Flex- oder Gitter-Container handeln).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Blockformatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
