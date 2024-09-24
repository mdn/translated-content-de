---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentenbaum aufnehmen und für visuelle Medien verarbeiten und darstellen. Dies umfasst {{glossary("continuous media")}} wie einen Computerbildschirm und [paged media](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das durch Druckfunktionen des Browsers ausgegeben wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und paginierte Medien.

Im visuellen Formatierungsmodell generiert jedes Element im Dokumentenbaum null oder mehr Boxen gemäß dem Box-Modell. Das Layout dieser Boxen wird gesteuert durch:

- Box-Dimensionen und -Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentenbaum.
- Externe Informationen (z. B. Viewport-Größe, intrinsische Dimensionen von Bildern usw.).

Ein Großteil der Informationen zum visuellen Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen werden Sie häufig Verweise auf das Modell wie in CSS2 definiert finden, daher ist ein Verständnis des Modells und der Begriffe, die zur Beschreibung verwendet werden, wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der verwandten Begriffe und Konzepte ein, wobei wir auf spezifischere Seiten für weitere Details verlinken.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{glossary("viewport")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert – zum Beispiel, wenn Sie Ihr Fenster ändern oder die Ausrichtung eines Mobilgeräts ändern.

Wenn der Viewport kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Dies sehen wir meist als Scrolling in der **Block-Dimension** – vertikal in einer horizontalen, von oben nach unten orientierten Sprache. Sie könnten jedoch auch etwas entwerfen, das Scrolling in der **Inline-Dimension** erfordert.

## Box-Generierung

**Box-Generierung** ist der Teil des CSS-Visualformatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von verschiedenen Typen, die ihre visuelle Formatierung beeinflussen. Der Typ der erzeugten Box hängt vom Wert der CSS-{{cssxref("display")}}-Eigenschaft ab.

Ursprünglich in CSS2 definiert, wird die `display`-Eigenschaft im [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) erweitert. Außerdem wurden einige der Terminologien rund um die Darstellung seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf einer Leinwand. Dazu wird eine intermediäre Struktur, der **Box-Baum**, erzeugt, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudoelement) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenso den Inhalt seiner entsprechenden Textknoten repräsentiert.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie durch den `display`-Eigenschaftswert dieses Elements spezifiziert.

> [!NOTE]
> Boxen werden oft nach ihrem Anzeige-Typ bezeichnet – z.B. eine Box, die von einem Element mit `display: block` generiert wird, wird als "Block-Box" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Box-Container alle subtil unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#block-boxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine von ihnen die **Hauptbox**, die ihre Nachkommen-Boxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die in jedes Positionierungsschema involviert ist.

Einige Elemente können zusätzliche Boxen zusätzlich zur Hauptbox generieren, zum Beispiel erzeugt `display: list-item` mehr als eine Box (z.B. eine **Hauptblockbox** und eine **Kind-Markerbox**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box verwendet werden kann. Diese Situation tritt ein, wenn Sie zum Beispiel `display: flex` auf ein Elternelement deklarieren und direkt darin ein Textlauf enthalten ist, der nicht in einem anderen Element enthalten ist. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie verhält sich dann wie ein Flex-Element, kann jedoch nicht wie eine reguläre Box gezielt und gestylt werden, da es kein Ziel-Element gibt.

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-flex.html", '100%', 720)}}

Das Gleiche passiert, wenn Sie Textläufe haben, die mit Block-Elementen durchsetzt sind. Im nächsten Beispiel habe ich eine Zeichenfolge innerhalb eines `<div>`; in der Mitte meiner Zeichenfolge befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-block.html", '100%', 720)}}

Die Zeichenfolge wird in drei Boxen im Box-Baum aufgeteilt. Der Teil der Zeichenfolge vor dem Absatz-Element wird in einer anonymen Box eingeschlossen, dann haben wir das `<p>`, das eine Box generiert, und dann eine weitere anonyme Box.

Etwas, das Sie über diese anonymen Boxen beachten sollten, ist, dass sie Stil von ihrem direkten Elternteil erben, Sie können jedoch nicht ändern, wie sie aussehen, indem Sie die anonyme Box ansprechen. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers zu adressieren. Dies ändert die anonymen Boxen nicht, da sie nicht "Elemente" im eigentlichen Sinne sind.

**Inline-anonyme Boxen** werden erstellt, wenn eine Zeichenfolge durch ein Inline-Element geteilt wird, zum Beispiel ein Satz, der einen Abschnitt enthält, der mit `<em></em>` eingeschlossen ist. Dies teilt den Satz in drei Inline-Boxen – eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element eingeschlossen ist, dann eine abschließende anonyme Inline-Box. Wie bei den anonymen Blockboxen können diese anonymen Inline-Boxen nicht unabhängig wie das `<em>` gestylt werden; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erstellen ebenfalls anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich auf die gleiche Weise wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben und wandelt Textzeichenfolgen in ein Raster-Element mit einer anonymen Box um. [Mehrspaltiges](/de/docs/Web/CSS/CSS_multicol_layout) Layout erzeugt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig gezielt werden. [Tabellen-Layout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen – beispielsweise durch Hinzufügen einer anonymen Tabellenzeile – wenn keine Box mit `display: table-row` vorhanden war.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Zeilenboxen und ihrem umschließenden Block sehen, wenn Sie ein Element floaten lassen und es dann mit einem Block mit Hintergrundfarbe folgen.

Im folgenden Beispiel werden die Zeilenboxen, die dem gefloateten `<div>` folgen, verkürzt, um das Float zu umschließen. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss herausgenommen wurde.

{{EmbedGHLiveSample("css-examples/visual-formatting/line-boxes.html", '100%', 720)}}

## Positionierungsschemata und im Fluss und aus dem Fluss befindliche Elemente

In CSS kann eine Box gemäß drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die Block-Level-Formatierung von Block-Boxen, die Inline-Level-Formatierung von Inline-Boxen und auch die relative und sticky Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über [Flusslayout](/de/docs/Web/CSS/CSS_flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zuerst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss genommen und positioniert, typischerweise links oder rechts. Inhalte können entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn/CSS/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch `fixed`-Positionierung einschließt) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem umschließenden Block (der im Falle der festen Positionierung der Viewport ist) oder zu einem oder mehreren Ankerelementen im [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert.

Ein Element wird als **out of flow** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht aus dem Fluss ist.

Lesen Sie über [CSS-Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können beschrieben werden als mit einem **äußeren Anzeigetyp**, der `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box neben anderen Elementen auf der Seite agiert.

Boxen haben auch einen inneren Anzeigetyp, der bestimmt, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Anzeigetyp `flow`. Das bedeutet, dass die darunterliegenden Elemente auch entweder `block` oder `inline` sind.

Der innere Anzeigetyp könnte jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder sich als Grid- oder Flex-Elemente anzeigen. In einem solchen Fall wird das Element als Schaffung eines Grid- oder Flex-[Formatierungskontextes](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies ähnlich zu einem Block-Formatierungskontext, jedoch verhalten sich die Kinder als Flex- oder Grid-Elemente anstelle von Elementen im normalen Fluss.

Die Wechselwirkungen zwischen Block-Level- und Inline-Level-Boxen werden in der {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Zusätzlich erklären die Referenzen für spezifische Werte von display, wie diese Formatierungskontexte hinsichtlich des Box-Layouts funktionieren.

- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres umschließenden Blocks teil oder erstellen einen unabhängigen Formatierungskontext. Ein Gitter-Container beispielsweise erstellt einen neuen **Gitter-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Ränder kollabieren nicht über die Grenzen des Formatierungskontexts hinaus. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Ränder innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` zu der Box hinzu, auf der Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Auswirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint sich um das gefloatete Element und den Text zu legen. Wenn Sie `display: flow-root` aus dem bearbeitbaren CSS entfernen, wird das gefloatete Element aus der unteren Box herausragen, da es nicht mehr enthalten ist.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/block-flow-root.html", '100%', 720)}}

### Block-Boxen

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container alle an bestimmten Stellen als **Block-Boxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Block-Box sollte nur verwendet werden, wenn keine Zweideutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die sich innerhalb des Block-Containers befinden, die jeweils an Inline- oder Block-Layout teilnehmen.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box, aber nicht auch ein Block-Container sein (sie könnte z.B. ein Flex- oder Grid-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Stapeln-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Rand-Kollabieren](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- {{DOMxRef("VisualViewport")}} Schnittstelle
- {{glossary("Scroll container")}}
