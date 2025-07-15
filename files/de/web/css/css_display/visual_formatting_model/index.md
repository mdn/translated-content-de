---
title: Visuelles Formatierungsmodell
slug: Web/CSS/CSS_display/Visual_formatting_model
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und ihn für visuelle Medien verarbeiten und anzeigen. Dies schließt sowohl {{Glossary("continuous_media", "kontinuierliche Medien")}} wie einen Computerbildschirm als auch [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder Dokument ein, das durch Druckfunktionen eines Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Boxen gemäß dem Boxmodell. Die Anordnung dieser Boxen wird bestimmt durch:

- Box-Dimensionen und Typ.
- Positionierungsschema (normaler Fluss, float und absolute Positionierung).
- Beziehungen zwischen den Elementen im Dokumentbaum.
- Externe Informationen (z. B. Ansichtsfenstergröße, intrinsische Dimensionen von Bildern usw.).

Viele Informationen über das visuelle Formatierungsmodell sind in CSS2 definiert, jedoch wurden verschiedene CSS-Layout-Module um diese Informationen erweitert. Beim Lesen von Spezifikationen finden Sie oft Verweise auf das in CSS2 definierte Modell, daher ist das Verständnis des Modells und der Begriffe, die zur Beschreibung in CSS2 verwendet werden, wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der zugehörigen Begriffe und Konzepte ein, wobei wir auf spezifischere Seiten für weitere Details verlinken.

## Die Rolle des Ansichtsfensters

In kontinuierlichen Medien ist das {{Glossary("viewport", "Ansichtsfenster")}} der sichtbare Bereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Ansichtsfensters ändert — zum Beispiel, wenn Sie Ihr Fenster vergrößern oder verkleinern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn das Ansichtsfenster kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Am häufigsten sehen wir dies als Scrollen in der **Block-Dimension** — vertikal in einer horizontalen, von oben nach unten verlaufenden Sprache. Sie könnten jedoch etwas entwerfen, das auch ein Scrollen in der **Inline-Dimension** erfordert.

## Boxenerzeugung

**Boxenerzeugung** ist der Teil des CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind unterschiedlicher Typen, die ihr visuelles Format beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS {{cssxref("display")}} Eigenschaft ab.

Die `display` Eigenschaft wurde ursprünglich in CSS2 definiert und im [CSS display](/de/docs/Web/CSS/CSS_display), [CSS flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS ruby layout](/de/docs/Web/CSS/CSS_ruby_layout) Modulen erweitert. Zusätzlich wurde einige der Terminologien rund um das Display in den Jahren seit CSS2 aktualisiert und geklärt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Boxenbaum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Boxenbaum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Boxenbaum ebenso den Inhalt seiner entsprechenden Textknoten repräsentiert.

Für jedes Element generiert CSS dann null oder mehr Boxen, wie es durch den Wert der `display` Eigenschaft dieses Elements spezifiziert ist.

> [!NOTE]
> Boxen werden oft nach ihrem Display-Typ bezeichnet — z. B. eine Box, die von einem Element mit `display: block` generiert wird, wird als "Block-Box" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Block-Container alle subtil unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#block-boxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die ihre Nachkommen-Boxen und den generierten Inhalt im Boxenbaum enthält und auch die Box ist, die an jedem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzlich zur Hauptbox zusätzliche Boxen generieren, zum Beispiel erzeugt `display: list-item` mehr als eine Box (z. B. eine **Hauptblockbox** und eine **Kind-Marker-Box**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box vorhanden ist. Diese Situation tritt auf, wenn Sie beispielsweise `display: flex` auf ein Elternelement deklarieren und direkt darin ein Textlauf ist, der nicht in einem anderen Element enthalten ist. Um den Boxenbaum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie verhält sich dann wie ein Flex-Item, kann jedoch nicht wie eine normale Box ausgewählt und gestylt werden, da kein Element zum Selektieren vorhanden ist.

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

Dasselbe passiert, wenn Sie Textläufe mit Block-Elementen mischen. Im folgenden Beispiel habe ich eine Zeichenkette in einem `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette ist in drei Boxen im Boxenbaum aufgeteilt. Der Teil der Zeichenkette vor dem Absatzelement wird in eine anonyme Box eingepackt, dann haben wir das `<p>`, das eine Box generiert, und dann noch eine anonyme Box.

Ein zu berücksichtigender Punkt bei diesen anonymen Boxen ist, dass sie Stile von ihrem direkten Elternteil erben, Sie können jedoch nicht ändern, wie sie aussehen, indem Sie die anonyme Box anvisieren. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Behälters anzuvisieren. Dies ändert die anonymen Boxen nicht, da sie nicht „Elemente“ im eigentlichen Sinn sind.

**Inline anonyme Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element unterbrochen wird, z.B. ein Satz, der einen Abschnitt mit `<em></em>` enthält. Dies teilt den Satz in drei Inline-Boxen auf — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element eingeschlossen ist, und dann eine letzte anonyme Inline-Box. Wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig gestylt werden, wie es mit dem `<em>` möglich ist; sie erben einfach die Stile ihres Containers.

Andere Formatierkontexte erzeugen ebenfalls anonyme Boxen. Das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich genauso wie das oben stehende [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel und verwandelt Textreihen in ein Grid-Item mit einer anonymen Box. Das [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig anvisiert werden. Das [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine richtige Tabellenstruktur zu erstellen — zum Beispiel, indem eine anonyme Tabellenzeile hinzugefügt wird — falls keine Box mit `display: table-row` vorhanden war.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Zeilenboxen und ihrem enthaltenen Block sehen, wenn Sie ein Element floaten und dann durch einen Block mit Hintergrundfarbe folgen lassen.

Im folgenden Beispiel werden die Zeilenboxen nach dem gefloateten `<div>` verkürzt, um um das Float herum zu fließen. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss genommen wurde.

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

## Positionierungsschemas und im Fluss und außerhalb des Flusses befindliche Elemente

In CSS kann eine Box gemäß drei Positionierungsschemas angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die block-level Formatierung von Block-Boxen, die inline-level Formatierung von Inline-Boxen und beinhaltet auch relative und sticky Positionierung von Block-level und Inline-level Boxen.

Lesen Sie mehr über [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zunächst nach dem normalen Fluss angeordnet und dann aus dem Fluss genommen und positioniert, typischerweise links oder rechts. Inhalt kann entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im absoluten Positionierungsmodell (das auch `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem umgebenden Block (der im Fall von fixierter Positionierung das Ansichtsfenster ist) oder zu einem oder mehreren Ankerelementen im [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugewiesen.

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet oder absolut positioniert ist oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es sich nicht außerhalb des Flusses befindet.

Lesen Sie über [CSS-positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierkontexte und die Display-Eigenschaft

Boxen können als **äußerer Display-Typ** beschrieben werden, der `block` oder `inline` ist. Dieser äußere Display-Typ bezieht sich darauf, wie die Box sich neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Display-Typ, der diktiert, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Display-Typ `flow`. Das bedeutet, dass die Kind-Elemente ebenfalls entweder `block` oder `inline` sind.

Der innere Display-Typ kann jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Grid- oder Flex-Items angezeigt werden. In einem solchen Fall wird das Element als ein Grid- oder Flex-[Formatierkontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies ähnlich einem Block-Formatierkontext, jedoch verhalten sich die Kinder als Flex- oder Grid-Items anstelle von Items im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen werden in der {{cssxref("display")}} Eigenschaftsreferenz beschrieben.

Zusätzlich erklären die Referenzen für spezifische Display-Werte, wie diese Formatierkontexte in Bezug auf Box-Layout funktionieren.

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexbox Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierkontexte

Elemente nehmen entweder am Formatierkontext ihres umgebenden Blocks teil oder stellen einen unabhängigen Formatierkontext auf. Ein Grid-Container zum Beispiel stellt einen neuen **Grid-Formatierkontext** für seine Kinder auf.

**Unabhängige Formatierkontexte** enthalten Floats, und Ränder kollabieren nicht über die Grenzen des Formatierkontextes hinaus. Daher kann das Erstellen eines neuen Block-Formatierkontextes sicherstellen, dass Floats und Ränder innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` zur Box hinzu, in der Sie einen neuen [Block-Formatierkontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt den Effekt von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint sich um das gefloatete Element und den Text herumzulegen. Wenn Sie `display: flow-root` entfernen, ragt das gefloatete Element aus dem unteren Teil der Box heraus, da es nicht mehr eingeschlossen ist.

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

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container an einigen Stellen alle als **Block-Boxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Block-Box sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierkontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierkontext teilnehmen. Aus diesem Grund sehen wir das oben beschriebene Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Items an einem Block- oder Inline-Formatierkontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Das sind die Boxen, die sich im Block-Container befinden und an Inline- oder Block-Layout teilnehmen, jeweils.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Block-Container (sie könnte zum Beispiel ein Flex- oder Grid-Container sein).

## Weitere Artikel

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Block-Formatierkontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
