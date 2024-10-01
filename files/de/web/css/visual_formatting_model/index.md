---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

In CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum entnehmen, verarbeiten und für visuelle Medien darstellen. Dazu gehören {{Glossary("continuous_media", "continuous media")}} wie ein Computerbildschirm und [paged media](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das über die Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und paginierte Medien.

Im visuellen Formatierungsmodell generiert jedes Element im Dokumentbaum gemäß dem Boxmodell null oder mehr Boxen. Das Layout dieser Boxen wird von folgenden Faktoren bestimmt:

- Boxdimensionen und -typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z. B. Viewport-Größe, intrinsische Abmessungen von Bildern, etc.).

Ein Großteil der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert. Verschiedene CSS-Layout-Module haben diese Informationen jedoch erweitert. Beim Lesen von Spezifikationen finden Sie oft Verweise auf das Modell, wie es in CSS2 definiert ist. Daher ist ein Verständnis des Modells und der in CSS2 verwendeten Begriffe wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, wobei wir auf spezifischere Seiten für weitere Details verweisen.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert – zum Beispiel, wenn Sie Ihr Fenster verkleinern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn der Viewport kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Dies sehen wir am häufigsten als Scrollen in der **Block-Dimension** – vertikal in einer horizontalen, von oben nach unten verlaufenden Sprache. Sie könnten jedoch auch etwas entwerfen, das ein Scrollen in der **Inline-Dimension** erfordert.

## Box-Generierung

Die **Box-Generierung** ist der Teil des visuellen Formatierungsmodells von CSS, das Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von unterschiedlichen Typen, die ihre visuelle Formatierung beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS-{{cssxref("display")}}-Eigenschaft ab.

Anfänglich in CSS2 definiert, wird die `display`-Eigenschaft im [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) erweitert. Darüber hinaus wurden einige der Begriffe rund um die Anzeige in den Jahren seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Box-Baum**, die die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenfalls den Inhalt seiner entsprechenden Textknoten repräsentiert.

Anschließend generiert CSS für jedes Element null oder mehr Boxen, wie durch den `display`-Eigenschaftswert dieses Elements angegeben.

> [!NOTE]
> Boxen werden oft nach ihrem Anzeigetyp benannt – z. B. wird eine Box, die von einem Element mit `display: block` generiert wird, als "Block-Box" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Box-Container alle subtil unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#block-boxen) unten für weitere Details.

### Die Haupt-Box

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Haupt-Box**, die seine Nachkommen-Boxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die in einem beliebigen Positionierungsschema beteiligt ist.

Einige Elemente können zusätzliche Boxen zusätzlich zur Haupt-Box generieren, zum Beispiel `display: list-item` generiert mehr als eine Box (z. B. eine **Haupt-Block-Box** und eine **Kinder-Marker-Box**). Und einige Werte (wie `none` oder `contents`) führen dazu, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box verwendet werden kann. Diese Situation tritt auf, wenn Sie z. B. `display: flex` auf ein Elternelement deklarieren und direkt darin ein Textlauf vorhanden ist, der nicht in einem anderen Element enthalten ist. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie verhält sich dann wie ein Flex-Element, kann jedoch nicht wie eine reguläre Box angesprochen und gestylt werden, da es kein Element zum Ansprechen gibt.

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-flex.html", '100%', 720)}}

Dasselbe passiert, wenn Sie Textläufe mit Block-Elementen durchmischt haben. Im nächsten Beispiel habe ich eine Zeichenkette in einem `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

{{EmbedGHLiveSample("css-examples/visual-formatting/anonymous-block.html", '100%', 720)}}

Die Zeichenkette wird im Box-Baum in drei Boxen aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in einer anonymen Box umschlossen, dann haben wir das `<p>`, das eine Box generiert, und dann eine weitere anonyme Box.

Zu beachten ist bei diesen anonymen Boxen, dass sie Stile von ihrem direkten Elternelement erben, Sie jedoch nicht ändern können, wie sie aussehen, indem Sie die anonyme Box ansprechen. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers zu adressieren. Dies ändert nicht die anonymen Boxen, da sie nicht „Elemente“ im eigentlichen Sinne sind.

**Inline-anonyme Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element unterbrochen wird, beispielsweise ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen auf — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, dem Abschnitt, der im `<em>`-Element umschlossen ist, und dann eine endgültige anonyme Inline-Box. Ebenso wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig gestylt werden, wie das `<em>`-Element; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erstellen auch anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich in der gleichen Weise wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben, indem Textfolgen in ein Grid-Element mit einer anonymen Box umgewandelt werden. Das [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig angesprochen werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen – zum Beispiel das Hinzufügen einer anonymen Tabellenzeile – wenn es keine Box mit `display: table-row` gibt.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Zeilenboxen und ihrer umschließenden Block-Box erkennen, wenn Sie ein Element floaten und dann von einem Block mit Hintergrundfarbe folgen lassen.

Im folgenden Beispiel werden die Zeilenboxen, die der gefloateten `<div>` folgen, verkürzt, um sich um den Float zu wickeln. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss genommen wurde.

{{EmbedGHLiveSample("css-examples/visual-formatting/line-boxes.html", '100%', 720)}}

## Positionierungsschemata und in-Flow und out-of-Flow Elemente

In CSS kann eine Box nach drei Positionierungsschemata angelegt werden – **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

In CSS umfasst der normale Fluss die Block-Formatierung von Block-Boxen, die Inline-Formatierung von Inline-Boxen und umfasst auch relative und sticky Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über das [Flusslayout](/de/docs/Web/CSS/CSS_flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zunächst nach dem normalen Fluss angelegt, dann aus dem Fluss genommen und typischerweise nach links oder rechts positioniert. Inhalt kann entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn/CSS/CSS_layout/Floats).

### Absolute Positionierung

Im absoluten Positionierungsmodell (das auch feste Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem umschließenden Block (der im Fall der festen Positionierung der Viewport ist) oder zu einem oder mehreren Ankerelementen in [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert.

Ein Element wird als **out of flow** bezeichnet, wenn es gefloatet, absolut positioniert oder das Root-Element ist. Ein Element wird als **in-flow** bezeichnet, wenn es nicht aus dem Fluss ist.

Lesen Sie über das [CSS Positionierungs-Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die display-Eigenschaft

Boxen können als eine **äußere Anzeigeart** beschrieben werden, die `block` oder `inline` ist. Diese äußere Anzeigeart bezieht sich darauf, wie die Box neben anderen Elementen auf der Seite funktioniert.

Boxen haben auch eine innere Anzeigeart, die bestimmt, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist diese Anzeigeart `flow`. Das bedeutet, dass die Kind-Elemente entweder `block` oder `inline` sein werden.

Die innere Anzeigeart kann jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Grid- oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element als einen Grid- oder Flex-Formatierungskontext erstellend beschrieben. In vielerlei Hinsicht ist dies einem Block-Formatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Grid-Elemente anstatt als Elemente im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen werden im {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Außerdem erklären die Referenzen für spezifische Werte von display, wie diese Formatierungskontexte in Bezug auf Box-Layout funktionieren.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder an dem Formatierungskontext ihres umschließenden Blocks teil oder erstellen einen unabhängigen Formatierungskontext. Ein Grid-Container beispielsweise erstellt einen neuen **Grid-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats und Margen kollabieren nicht über Formatierungskontextgrenzen hinweg. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Margen innerhalb einer Box bleiben. Um dies zu erreichen, fügen Sie `display: flow-root` auf der Box hinzu, auf der Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint das gefloatete Element und den Text zu umschließen. Wenn Sie `display: flow-root` aus dem editierbaren CSS entfernen, wird das gefloatete Element unten aus der Box herausragen, da es nicht mehr enthalten ist.

{{EmbedGHLiveSample("css-examples/display/multi-keyword/block-flow-root.html", '100%', 720)}}

### Block-Boxen

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container an bestimmten Stellen alle als **Block-Boxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Block-Box sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die sich innerhalb des Block-Containers befinden und respektive an Inline- oder Block-Layout teilnehmen.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Block-Container (sie könnte beispielsweise ein Flex- oder Grid-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Stapeln-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
