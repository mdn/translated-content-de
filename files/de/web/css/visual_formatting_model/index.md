---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und für visuelle Medien verarbeiten und darstellen. Dazu gehören [kontinuierliche Medien](/de/docs/Glossary/continuous_media) wie ein Computerbildschirm und [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das durch Browser-Druckfunktionen gedruckt wird. Die meisten Informationen treffen gleichermaßen auf kontinuierliche und paginierte Medien zu.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Boxen entsprechend dem Box-Modell. Das Layout dieser Boxen wird bestimmt durch:

- Box-Abmessungen und -Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z.B. Viewport-Größe, intrinsische Abmessungen von Bildern, etc.).

Vieles über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen werden Sie häufig Verweise auf das in CSS2 definierte Modell finden. Daher ist ein Verständnis des Modells und der in CSS2 verwendeten Begriffe wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der verwandten Begriffe und Konzepte ein, wobei wir auf spezifischere Seiten für weitere Details verweisen.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der [Viewport](/de/docs/Glossary/viewport) der sichtbare Bereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Viewport-Größe ändert — zum Beispiel, wenn Sie Ihr Fenster vergrößern oder verkleinern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn der Viewport kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Am häufigsten sehen wir dies als Scrollen in der **Block-Dimension** — vertikal in einer horizontalen Sprache von oben nach unten. Sie könnten jedoch etwas entwerfen, das Scrollen in der **Inline-Dimension** erfordert.

## Generierung von Boxen

Die **Generierung von Boxen** ist der Teil des visuellen CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von unterschiedlichen Typen, die ihre visuelle Formatierung beeinflussen. Der erzeugte Boxentyp hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wird die `display`-Eigenschaft im [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) erweitert. Außerdem wurden einige der Begriffe rund um die Anzeige seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu erzeugt es eine Zwischenstruktur, den **Boxenbaum**, die die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Boxenbaum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder der Zeit auf der Leinwand, während jeder Textlauf im Boxenbaum ebenfalls die Inhalte seiner entsprechenden Textknoten darstellt.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie durch den `display`-Eigenschaftswert dieses Elements angegeben.

> [!NOTE]
> Boxen werden oft nach ihrem Anzeigetyp benannt — z.B. wird eine Box, die von einem Element mit `display: block` erzeugt wurde, als "Block-Box" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Box-Container alle subtil unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#block-boxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die seine enthaltenen Boxen und generierten Inhalte im Boxenbaum beinhaltet und auch die Box ist, die an jedem Positionierschema beteiligt ist.

Einige Elemente können zusätzliche Boxen neben der Hauptbox generieren, zum Beispiel `display: list-item`, das mehr als eine Box erzeugt (z.B. eine **Hauptblockbox** und eine **Kindermarkerbox**). Und einige Werte (wie `none` oder `contents`) führen dazu, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box verwendet werden kann. Diese Situation tritt auf, wenn Sie zum Beispiel `display: flex` auf ein Elternelement anwenden und direkt darin einen Textdurchlauf ohne weiteres Element haben. Um den Boxenbaum zu korrigieren, wird eine anonyme Box um diesen Textdurchlauf erstellt. Sie verhält sich dann wie ein Flex-Element, kann jedoch nicht wie eine normale Box angesprochen und gestylt werden, da kein Element vorhanden ist, auf das man abzielen könnte.

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-flex.html", '100%', 720)}}

Dasselbe geschieht, wenn Sie Textdurchläufe haben, die mit Block-Elementen durchsetzt sind. Im nächsten Beispiel habe ich eine Zeichenkette innerhalb eines `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-block.html", '100%', 720)}}

Die Zeichenkette wird im Boxenbaum in drei Boxen aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element ist in einer anonymen Box eingeschlossen, dann haben wir das `<p>`, das eine Box generiert, und dann noch eine anonyme Box.

Eine Überlegung zu diesen anonymen Boxen ist, dass sie Stile ihres direkten Elternteils erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie die anonyme Box direkt anvisieren. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers anzusprechen. Dies ändert jedoch nicht die anonymen Boxen, da sie nicht "Elemente" im eigentlichen Sinne sind.

**Anonyme Inline-Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element getrennt wird, zum Beispiel ein Satz, der einen Abschnitt umfasst, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen auf — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element umschlossen ist, und dann eine abschließende anonyme Inline-Box. Wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig gestylt werden, wie es bei dem `<em>` der Fall ist; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erzeugen ebenfalls anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich auf die gleiche Weise wie das Beispiel mit dem [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oben und verwandelt Textzeichenfolgen in ein Gitterelement mit einer anonymen Box. Das [Multiple-Column](/de/docs/Web/CSS/CSS_multicol_layout)-Layout erstellt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig angesprochen werden. [Tabellen-Layout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine korrekte Tabellenstruktur zu schaffen — zum Beispiel durch das Hinzufügen einer anonymen Tabellenzeile — wenn es keine Box mit `display: table-row` gibt.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umhüllen. Sie können den Unterschied zwischen Zeilenboxen und ihrem enthaltenden Block erkennen, wenn Sie ein Element floaten und es dann von einem Block, der eine Hintergrundfarbe hat, gefolgt wird.

Im folgenden Beispiel werden die Zeilenboxen, die dem gefloateten `<div>` folgen, verkürzt, um den Float herumzuziehen. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss genommen wurde.

{{EmbedGHLiveSample("css-examples/visual-formatting/line-boxes.html", '100%', 720)}}

## Positionierungsschemata und in Fluss und aus dem Fluss entstandene Elemente

In CSS kann eine Box nach drei Positionierungsschemata platziert werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die blockebene Formatierung von Block-Boxen, die inlineebene Formatierung von Inline-Boxen und auch die relative und fixe Positionierung von blockebenen und inlineebenen Boxen.

Lesen Sie mehr über das [Fluss-Layout](/de/docs/Web/CSS/CSS_flow_layout) in CSS.

### Floats

Im Floatmodell wird eine Box zuerst gemäß dem normalen Fluss platziert, dann aus dem Fluss genommen und positioniert, typischerweise nach links oder rechts. Der Inhalt kann entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn/CSS/CSS_layout/Floats).

### Absolute Positionierung

Im absoluten Positionierungsmodell (das auch `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenden Block (dies ist der Viewport im Fall einer festen Positionierung) oder zu einem oder mehreren Ankerelementen in der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert.

Ein Element wird als **aus dem Fluss** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht aus dem Fluss ist.

Lesen Sie über [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können als einen **äußeren Anzeigetyp** beschrieben werden, der `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box sich neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der das Verhalten ihrer Kinder bestimmt. Für normales Block- und Inline-Layout oder Normalfluss ist dieser Anzeigetyp `flow`. Dies bedeutet, dass die Kindelemente ebenfalls entweder `block` oder `inline` sein werden.

Der innere Anzeigetyp könnte jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Gitter- oder Flex-Elemente dargestellt werden. In einem solchen Fall wird das Element als Erstellen eines Gitter- oder Flex-[Formatierungskontextes](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies einem Block-Formatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Gitterelemente und nicht als Elemente im normalen Fluss.

Die Interaktionen zwischen blockebenen und inlineebenen Boxen sind in der Referenz zur {{cssxref("display")}}-Eigenschaft beschrieben.

Darüber hinaus erklären die Referenzen für spezifische Werte der Anzeige, wie diese Formatierungskontexte in Bezug auf das Boxenlayout funktionieren.

- Modul für [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)
- Modul für [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)
- Modul für [CSS Multi-Column Layout](/de/docs/Web/CSS/CSS_multicol_layout)
- Modul für [CSS Tabelle](/de/docs/Web/CSS/CSS_table)
- Modul für [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists)

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenden Blocks teil oder etablieren einen unabhängigen Formatierungskontext. Ein Gitternetz-Container zum Beispiel etabliert einen neuen **Gitterformatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Margen kollabieren nicht über Grenzen von Formatierungskontexten hinweg. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Margin innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` zur Box hinzu, für die Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt den Effekt von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint das gefloatete Element und den Text zu umschließen. Wenn Sie `display: flow-root` aus dem bearbeitbaren CSS entfernen, wird das gefloatete Element aus der Unterseite der Box herausragen, da es nicht mehr enthalten ist.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/block-flow-root.html", '100%', 720)}}

### Block-Boxen

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container manchmal als **Block-Boxen** bezeichnet. Diese Dinge sind etwas unterschiedlich, und der Begriff Block-Box sollte nur verwendet werden, wenn es keine Mehrdeutigkeit gibt.

#### Block-Container

Ein **Block-Container** enthält entweder nur inlineebene Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur blockebene Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es blockebene oder inlineebene Boxen enthält.

#### Inlineebene und blockebene Boxen

Dies sind die Boxen, die im Block-Container enthalten sind und jeweils an Inline- oder Block-Layout teilnehmen.

#### Block-Boxen

Eine Block-Box ist eine blockebene Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine blockebene Box sein, jedoch nicht auch ein Block-Container (sie könnte beispielsweise ein Flex- oder Gitter-Container sein).

## Siehe auch

- Leitfaden zur [CSS-Syntax](/de/docs/Web/CSS/Syntax)
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle
- [Scroll-Container](/de/docs/Glossary/Scroll_container)
