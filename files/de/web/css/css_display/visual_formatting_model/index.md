---
title: Visuelles Formatierungsmodell
slug: Web/CSS/CSS_display/Visual_formatting_model
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentenbaum aufnehmen, verarbeiten und für visuelle Medien darstellen. Dies umfasst {{Glossary("continuous_media", "kontinuierliche Medien")}} wie einen Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das von Browser-Druckfunktionen gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell generiert jedes Element im Dokumentenbaum null oder mehr Boxen gemäß dem Box-Modell. Das Layout dieser Boxen wird bestimmt durch:

- Box-Dimensionen und Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentenbaum.
- Externe Informationen (z.B. Viewport-Größe, intrinsische Dimensionen von Bildern usw.).

Vieles über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen finden Sie oft Verweise auf das in CSS2 definierte Modell, daher ist ein Verständnis des Modells und der in CSS2 verwendeten Begriffe wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, wobei wir auf spezifischere Seiten für weitere Details verweisen.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn die Viewport-Größe sich ändert — zum Beispiel, wenn Sie Ihr Fenster ändern oder die Ausrichtung eines mobilen Geräts wechseln.

Wenn der Viewport kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Das sehen wir am häufigsten als Scrollen in der **Blockdimension** — vertikal in einer horizontalen Sprache von oben nach unten. Es könnte jedoch sein, dass Sie etwas entwerfen, das auch ein Scrollen in der **Inlinedimension** erfordert.

## Boxenerzeugung

**Boxenerzeugung** ist der Teil des CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen haben unterschiedliche Typen, die ihr visuelles Format bestimmen. Der Typ der generierten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft in den Modulen [CSS display](/de/docs/Web/CSS/CSS_display), [CSS flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS Ruby Layout](/de/docs/Web/CSS/CSS_ruby_layout) erweitert. Darüber hinaus wurden einige der Terminologien rund um die Anzeige im Laufe der Jahre seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Boxenbaum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Boxenbaum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Boxenbaum ebenso die Inhalte seiner entsprechenden Textknoten darstellt.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie es durch den `display`-Eigenschaftswert dieses Elements spezifiziert wird.

> [!NOTE]
> Boxen werden oft nach ihrem Anzeigetyp benannt — z.B. wird eine Box, die von einem Element mit `display: block` generiert wird, als "Blockbox" oder einfach als "Block" bezeichnet. Beachten Sie jedoch, dass Blockboxen, Block-Level-Boxen und Blockcontainer alle subtil unterschiedlich sind; siehe den Abschnitt [Blockboxen](#blockboxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die ihre Nachkommenboxen und generierten Inhalte im Boxbaum enthält und auch die Box ist, die an jedem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzlich zur Hauptbox zusätzliche Boxen erzeugen, zum Beispiel generiert `display: list-item` mehr als eine Box (z.B. eine **Hauptblockbox** und eine **Kindmarkierungsbox**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box vorhanden ist. Diese Situation tritt auf, wenn Sie zum Beispiel `display: flex` auf ein übergeordnetes Element deklarieren und direkt darin ein Textlauf enthalten ist, der nicht in einem anderen Element eingebettet ist. Um den Boxbaum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie verhält sich dann als Flex-Element, kann jedoch nicht wie eine reguläre Box gezielt angesprochen und gestylt werden, da es kein Ziel-Element gibt.

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

Dasselbe passiert, wenn Sie Textläufe haben, die mit Blockelementen durchsetzt sind. Im nächsten Beispiel habe ich eine Zeichenfolge innerhalb eines `<div>`; in der Mitte meiner Zeichenfolge befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenfolge wird in drei Boxen im Boxbaum aufgeteilt. Der Teil der Zeichenfolge vor dem Paragrafenelement wird in eine anonyme Box eingebettet, dann haben wir das `<p>`, das eine Box generiert, und dann eine weitere anonyme Box.

Etwas zu beachten bei diesen anonymen Boxen ist, dass sie Stile von ihrem direkten Elternteil erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie die anonyme Box direkt ansprechen. In meinen Beispielen verwende ich einen direkten Kindselektor, um die Kinder des Containers zu adressieren. Dies ändert die anonymen Boxen nicht, da sie keine "Elemente" im eigentlichen Sinne sind.

**Inline anonyme Boxen** werden erstellt, wenn eine Zeichenfolge durch ein Inline-Element unterbrochen wird, zum Beispiel ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen — eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element umschlossen ist, und dann eine letzte anonyme Inline-Box. Wie bei den anonymen Blockboxen können diese anonymen Inline-Boxen nicht unabhängig gestylt werden, wie es beim `<em>` möglich ist; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erstellen ebenfalls anonyme Boxen. [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich in der gleichen Weise wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben und verwandelt Textzeilen in ein Rasterelement mit einer anonymen Box. [Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig angesprochen werden. [Tabellen-Layout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen — zum Beispiel das Hinzufügen einer anonymen Tabellenzeile —, wenn es keine Box mit `display: table-row` gab.

### Linienboxen

**Linienboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Linienboxen und ihrem umgebenden Block sehen, wenn Sie ein Element floaten und dann mit einem Block fortfahren, der eine Hintergrundfarbe hat.

Im folgenden Beispiel werden die Linienboxen nach dem gefloateten `<div>` verkürzt, um das Float zu umschließen. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss herausgenommen wurde.

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
  background-color: #cccccc;
}
```

{{EmbedLiveSample("line-boxes", "", "250px")}}

## Positionierungsschemata und im Fluss und außerhalb des Flusses befindliche Elemente

In CSS kann eine Box gemäß drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss das Block-Level-Layout von Blockboxen, das Inline-Level-Layout von Inlineboxen und auch die relative und Sticky-Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über [Flow-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) im CSS.

### Floats

Im Float-Modell wird eine Box zunächst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss herausgenommen und positioniert, typischerweise nach links oder rechts. Der Inhalt kann entlang der Seite eines Floats verlaufen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im absoluten Positionierungsmodell (zu dem auch die `fixed`-Positionierung gehört) wird eine Box vollständig aus dem normalen Fluss herausgenommen und relativ zu einem enthaltenden Block positioniert (was im Fall der festen Positionierung der Viewport ist) oder zu einem oder mehreren Ankerelementen in der [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning).

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht außerhalb des Flusses ist.

Lesen Sie über [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können als Boxen mit einem **äußeren Anzeigetyp** beschrieben werden, der `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box sich im Verhältnis zu anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der diktiert, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Anzeigetyp `flow`. Das bedeutet, dass die Kind-Elemente ebenfalls entweder `block` oder `inline` sind.

Der innere Anzeigetyp könnte jedoch auch `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Raster- oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element als Erzeuger eines Rasters oder Flex-Formatierungskontextes beschrieben. In vielerlei Hinsicht ist dies ähnlich wie ein Block-Formatierungskontext, die Kinder verhalten sich jedoch als Flex- oder Raster-Elemente statt als Elemente im normalen Fluss.

Die Wechselwirkungen zwischen Block-Level- und Inline-Level-Boxen werden im {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Darüber hinaus erklären die Referenzen für spezifische Werte von Display, wie diese Formatierungskontexte in Bezug auf Box-Layout funktionieren.

- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres umgebenden Blocks teil oder schaffen einen unabhängigen Formatierungskontext. Ein Rastercontainer schafft zum Beispiel einen neuen **Rasterformatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats und Margen kollabieren nicht über Grenzen von Formatierungskontexten hinweg. Deshalb kann das Erstellen eines neuen Block-Formatierungskontextes sicherstellen, dass Floats und Margen innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` zu der Box hinzu, für die Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt den Effekt von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint sich um das gefloatete Element und den Text zu wickeln. Wenn Sie `display: flow-root` entfernen, wird das gefloatete Element unten aus der Box herausragen, da es nicht mehr enthalten ist.

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
  background-color: #333333;
  color: white;
}

.item {
  background-color: white;
  border: 1px solid #999999;
  color: #333333;
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

In Spezifikationen werden Blockboxen, Block-Level-Boxen und Block-Container an bestimmten Stellen alle als **Blockboxen** bezeichnet. Diese Dinge sind etwas unterschiedlich, und der Begriff Blockbox sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Blockcontainer

Ein **Blockcontainer** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level und Block-Level-Boxen

Dies sind die Boxen, die innerhalb des Blockcontainers enthalten sind und respektive an einem Inline- oder Block-Layout teilnehmen.

#### Blockboxen

Eine Blockbox ist eine Block-Level-Box, die auch ein Blockcontainer ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Blockcontainer (es könnte sich zum Beispiel um einen Flex- oder Rastercontainer handeln).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifizität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Margenzusammenbruch](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scrollcontainer")}}
