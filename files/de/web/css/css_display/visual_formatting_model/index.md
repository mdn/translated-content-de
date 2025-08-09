---
title: Visuelles Formatierungsmodell
slug: Web/CSS/CSS_display/Visual_formatting_model
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentenbaum nehmen und ihn für visuelle Medien verarbeiten und anzeigen. Dies umfasst {{Glossary("continuous_media", "Kontinuierliche Medien")}} wie einen Computermonitor und [Seitenbasierte Medien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das von Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und seitenbasierte Medien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentenbaum gemäß dem Box-Modell null oder mehr Boxen. Das Layout dieser Boxen wird durch folgende Faktoren bestimmt:

- Abmessungen und Typ der Box.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentenbaum.
- Externe Informationen (z. B. Ansichtsfenstergröße, intrinsische Abmessungen von Bildern usw.).

Ein Großteil der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen stoßen Sie häufig auf Verweise auf das Modell, wie es in CSS2 definiert ist, sodass ein Verständnis des Modells und der in CSS2 verwendeten Begriffe wertvoll ist, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der zugehörigen Begriffe und Konzepte ein und verweisen auf spezifischere Seiten für weitere Details.

## Die Rolle des Ansichtsfensters

In kontinuierlichen Medien ist das {{Glossary("viewport", "Ansichtsfenster")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Ansichtsfensters ändert – zum Beispiel, wenn Sie Ihr Fenster ändern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn das Ansichtsfenster kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Dies sehen wir meistens als Scrollen in der **Block-Dimension** – vertikal in einer horizontal, von oben nach unten verlaufenden Sprache. Sie könnten jedoch auch etwas entwerfen, das ein Scrollen in der **Inline-Dimension** erfordert.

## Box-Generierung

**Box-Generierung** ist der Teil des CSS-Visuellen-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von verschiedenen Typen, die ihr visuelles Format beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS-{{cssxref("display")}}-Eigenschaft ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft in den Modulen [CSS Display](/de/docs/Web/CSS/CSS_display), [CSS Flexibele Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS Ruby Layout](/de/docs/Web/CSS/CSS_ruby_layout) erweitert. Außerdem wurde einige der Terminologien um die Anzeige seit CSS2 aktualisiert und präzisiert.

CSS nimmt Ihr Quelldokument und rendert es auf einer Leinwand. Dazu wird eine Zwischenstruktur, der **Box-Baum**, generiert, die die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudoelement) im Raum und/oder in der Zeit auf der Leinwand, während jede Textrun im Box-Baum ebenso die Inhalte ihrer entsprechenden Textknoten repräsentiert.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie durch den Wert der `display`-Eigenschaft dieses Elements spezifiziert.

> [!NOTE]
> Boxen werden häufig nach ihrem Anzeigetyp benannt – z. B. wird eine Box, die von einem Element mit `display: block` generiert wird, als "Block-Box" oder einfach als "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Block-Container alle subtil unterschiedlich sind; siehe den [Block-Boxen](#block-boxen)-Abschnitt unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die seine Nachkommen-Boxen und generierte Inhalte im Box-Baum enthält und auch die Box ist, die in einem beliebigen Positionierungsschema involviert ist.

Einige Elemente können zusätzliche Boxen neben der Hauptbox generieren, zum Beispiel generiert `display: list-item` mehr als eine Box (z. B. eine **Haupt-Block-Box** und eine **Kind-Marker-Box**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn es kein HTML-Element gibt, das für die Box verwendet werden könnte. Diese Situation tritt auf, wenn Sie zum Beispiel `display: flex` auf ein Elternelement deklarieren und direkt darin ein Textrun haben, der nicht in einem anderen Element enthalten ist. Um den Box-Baum zu reparieren, wird eine anonyme Box um diesen Textrun erstellt. Sie verhält sich dann wie ein Flex-Element, kann jedoch nicht wie eine reguläre Box gezielt angesprochen und gestylt werden, da es kein Element gibt, auf das man zielen könnte.

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

Das Gleiche geschieht, wenn Sie Textruns mit Block-Elementen durchsetzen. Im nächsten Beispiel habe ich eine Zeichenkette innerhalb eines `<div>`; in der Mitte meines Strings befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird in drei Boxen im Box-Baum aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in einer anonymen Box eingeschlossen, dann haben wir das `<p>`, das eine Box generiert, und dann eine weitere anonyme Box.

Etwas zu bedenken bei diesen anonymen Boxen ist, dass sie Stile von ihrem direkten Elternteil erben, aber Sie können nicht ändern, wie sie aussehen, indem sie auf die anonyme Box zielen. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers zu adressieren. Dies ändert nicht die anonymen Boxen, da sie keine „Elemente“ im eigentlichen Sinne sind.

**Inline-anonyme Boxen** werden erstellt, wenn ein String durch ein Inline-Element unterbrochen wird, zum Beispiel ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies unterteilt den Satz in drei Inline-Boxen — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, der Abschnitt umschlossen von dem `<em>`-Element, und dann eine finale anonyme Inline-Box. Wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig wie das `<em>` gestylt werden; sie erben lediglich die Stile ihres Containers.

Andere Formatierungskontexte erzeugen ebenfalls anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich genauso wie das oben genannte [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel und verwandelt Zeichenketten in ein Gitternetz-Element mit einer anonymen Box. [Mehrspaltiges](/de/docs/Web/CSS/CSS_multicol_layout) Layout erstellt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig adressiert werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen — zum Beispiel fügt es eine anonyme Tabellenzeile hinzu — wenn es keine Box mit `display: table-row` gibt.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Zeilenboxen und ihrem enthaltenden Block sehen, wenn Sie ein Element floaten und es dann von einem Block mit einer Hintergrundfarbe folgen lassen.

Im folgenden Beispiel werden die Zeilenboxen, die dem gefloateten `<div>` folgen, verkürzt, um sich um den Float zu wickeln. Der Hintergrund der Box läuft hinter dem Float her, da das gefloatete Element aus dem Fluss herausgenommen wurde.

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

## Positionierungsschemata und in Fluss und aus Fluss herausgenommene Elemente

In CSS kann eine Box nach drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die Block-Level-Formatierung von Block-Boxen, Inline-Level-Formatierung von Inline-Boxen und umfasst auch relative und sticky Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über [Flusslayout](/de/docs/Web/CSS/CSS_display/Flow_layout) im CSS.

### Floats

Im Float-Modell wird eine Box zuerst nach dem normalen Fluss angeordnet, dann aus dem Fluss herausgenommen und positioniert, typischerweise links oder rechts. Inhalt kann entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluter Positionierung (das auch die `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenen Block (der das Ansichtsfenster im Fall der festen Positionierung ist) oder zu einem oder mehreren Ankerelementen im [CSS Anchor Positioning](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert.

Ein Element wird als **aus dem Fluss heraus** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht aus dem Fluss heraus ist.

Lesen Sie über [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können als einen **äußeren Anzeigetyp** beschrieben werden, der `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der bestimmt, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout, oder normalen Fluss, ist dieser Anzeigetyp `flow`. Das bedeutet, dass die Kind-Elemente entweder `block` oder `inline` sein werden.

Der innere Anzeigetyp könnte jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als ein Gitter oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element beschrieben als ein Grid- oder Flex-[Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) zu erstellen. In vielerlei Hinsicht ist dies ähnlich einem Block-Formatierungskontext, der jedoch Kinder hat, die sich als Flex- oder Grid-Elemente verhalten, anstatt als Elemente im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen werden im {{cssxref("display")}} Eigenschaften-Referenz beschrieben.

Zusätzlich erklären die Referenzen für spezifische Werte der Anzeige, wie diese Formatierungskontexte im Hinblick auf Boxenlayout funktionieren.

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenen Blocks teil oder etablieren einen unabhängigen Formatierungskontext. Ein Gitterbehälter etabliert beispielsweise einen neuen **Gitterformatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Ränder kollabieren nicht über die Grenzen des Formatierungskontexts hinweg. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Ränder innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` der Box hinzu, bei der Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint sich um das gefloatete Element und den Text zu legen. Wenn Sie `display: flow-root` entfernen, wird das gefloatete Element aus dem unteren Teil der Box herausragen, da es nicht länger enthalten ist.

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
  color: white;
}

.item {
  background-color: white;
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

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container in bestimmten Fällen alle als **Block-Boxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Block-Box sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben beschriebene Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Diese sind die Boxen, die sich innerhalb des Block-Containers befinden und an Inline- oder Block-Layout teilnehmen, jeweils.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die gleichzeitig ein Block-Container ist. Wie in der CSS-`display`-Definition beschrieben, kann eine Box eine Block-Level-Box sein, jedoch nicht gleichzeitig ein Block-Container (sie könnte zum Beispiel ein Flex- oder Gitter-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Ränder-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
