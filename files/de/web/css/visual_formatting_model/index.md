---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und für visuelle Medien verarbeiten und anzeigen. Dazu gehören {{Glossary("continuous_media", "kontinuierliche Medien")}} wie ein Computerbildschirm und [seitenbasierte Medien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein Dokument, das über Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und seitenbasierte Medien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Boxen gemäß dem Box-Modell. Das Layout dieser Boxen wird durch folgende Aspekte bestimmt:

- Abmessungen und Typ der Boxen.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z. B. Größe des Ansichtsfensters, intrinsische Abmessungen von Bildern usw.).

Ein Großteil der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert, aber verschiedene CSS-Layoutmodule haben diese Informationen erweitert. Beim Lesen von Spezifikationen werden Sie häufig Referenzen auf das in CSS2 definierte Modell finden, daher ist es wertvoll, das Modell und die Begriffe, in CSS2 verwendet werden, zu verstehen, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, indem wir auf spezifischere Seiten für weitere Details verweisen.

## Die Rolle des Ansichtsfensters

In kontinuierlichen Medien ist das {{Glossary("viewport", "Ansichtsfenster")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Ansichtsfensters ändert - zum Beispiel, wenn Sie Ihr Fenster anpassen oder die Ausrichtung eines mobilen Geräts ändern.

Wenn das Ansichtsfenster kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den nicht angezeigten Teilen des Dokuments zu scrollen. Dies sehen wir meist als vertikales Scrollen in der **Blockdimension** – vertikal in einer horizontalen, von oben nach unten gehenden Sprache. Allerdings könnte es nötig sein, etwas zu entwerfen, das auch in der **in-line Dimension** gescrollt werden muss.

## Boxen-Erzeugung

**Boxen-Erzeugung** ist der Teil des CSS-Visuellen Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von verschiedenen Typen, die ihre visuelle Formatierung beeinflussen. Der Typ der generierten Box hängt vom Wert der CSS-{{cssxref("display")}}-Eigenschaft ab.

Die `display`-Eigenschaft wurde ursprünglich in CSS2 definiert und im [CSS Display](/de/docs/Web/CSS/CSS_display), [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS Ruby-Layout](/de/docs/Web/CSS/CSS_ruby_layout) modulen erweitert. Darüber hinaus wurde einige Terminologie im Zusammenhang mit der Anzeige seit CSS2 aktualisiert und geklärt.

CSS nimmt Ihr Quellendokument und rendert es auf einer Leinwand. Dazu generiert es eine zwischengeschaltete Struktur, den **Boxenbaum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Boxenbaum stellt ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder der Zeit auf der Leinwand dar, während jede Textstrecke im Boxenbaum ebenfalls den Inhalt ihrer entsprechenden Textknoten darstellt.

Dann generiert CSS für jedes Element null oder mehr Boxen, gemäß dem durch die `display`-Eigenschafts-Wert des Elements angegebenen Typ.

> [!NOTE]
> Boxen werden oft nach ihrem Anzeigetyp benannt – z. B. wird eine Box, die von einem Element mit `display: block` generiert wird, als "Blockbox" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Blockboxen, block-level Boxen und Blockcontainer alle leicht unterschiedlich sind; siehe den Abschnitt [Blockboxen](#blockboxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die ihre Nachfahrenboxen und generierten Inhalte im Boxenbaum enthält und auch die Box ist, die in ein beliebiges Positionierungsschema involviert ist.

Einige Elemente können zusätzliche Boxen neben der Hauptbox generieren, zum Beispiel generiert `display: list-item` mehr als eine Box (z. B. eine **Hauptblockbox** und eine **Kindmarkierungsbox**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box verwendet werden kann. Diese Situation tritt auf, wenn Sie beispielsweise `display: flex` auf einem übergeordneten Element deklarieren und direkt darin eine Textstrecke nicht in einem anderen Element enthalten ist. Um den Boxenbaum zu reparieren, wird eine anonyme Box um diese Textstrecke erstellt. Sie verhält sich dann wie ein Flex-Element, kann jedoch nicht wie eine normale Box angesprochen und gestaltet werden, da kein Element vorhanden ist, das man anvisieren könnte.

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

Dasselbe passiert, wenn Sie Textstrecken haben, die von Blockelementen durchsetzt sind. Im nächsten Beispiel habe ich eine Zeichenfolge in einem `<div>`; in der Mitte meiner Zeichenfolge befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenfolge wird in drei Boxen im Boxbaum aufgeteilt. Der Teil der Zeichenfolge vor dem Absatz-Element wird in einer anonymen Box umschlossen, dann haben wir das `<p>`, das eine Box generiert, und dann eine weitere anonyme Box.

Zu bedenken ist, dass diese anonymen Boxen die Stile ihres direkten übergeordneten Elements erben, jedoch können Sie nicht gezielt ändern, wie sie aussehen, indem Sie die anonyme Box ins Visier nehmen. In meinen Beispielen verwende ich einen selektor für direkte Kinder, um die Kinder des Containers anzusprechen. Dies ändert die anonymen Boxen nicht, da sie nicht "Elemente" im eigentlichen Sinne sind.

**Inline-anonyme Boxen** werden generiert, wenn eine Zeichenfolge durch ein Inline-Element geteilt wird, zum Beispiel ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umhüllt ist. Dies teilt den Satz in drei Inline-Boxen – eine anonyme Inline-Box vor dem betonten Abschnitt, den Abschnitt umhüllt von dem `<em>`-Element, und dann eine abschließende anonyme Inline-Box. Wie bei den anonymen Blockboxen können diese anonymen Inline-Boxen nicht unabhängig in der Weise gestaltet werden, wie es mit dem `<em>` möglich ist; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erzeugen auch anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich in gleicher Weise wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben, indem es Textstrecken in einen Grid-Item mit einer anonymen Box umwandelt. [Multiple-Column](/de/docs/Web/CSS/CSS_multicol_layout)-Layout erzeugt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig angesprochen werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) wird anonyme Boxen hinzufügen, um eine korrekte Tabellenstruktur zu schaffen - zum Beispiel eine anonyme Tabellenzeile hinzufügen - falls keine Box mit `display: table-row` vorhanden war.

### Linienboxen

**Linienboxen** sind die Boxen, die jede Textlinie umschließen. Sie können den Unterschied zwischen Linienboxen und ihrem enthaltenden Block sehen, wenn Sie ein Element floaten und dann von einem Block gefolgt wird, der eine Hintergrundfarbe hat.

Im folgenden Beispiel werden die Linienboxen, die dem gefloateten `<div>` folgen, verkürzt, um sich um den Float herum zu wickeln. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss herausgenommen wurde.

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

In CSS kann eine Box nach drei Positionierungsschemas angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die block-level Formatierung von Blockboxen, die inline-level Formatierung von Inline-Boxen und beinhaltet auch die relative und sticky-Positionierung von Block- und Inline-Level-Boxen.

Lesen Sie mehr über [Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zuerst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss genommen und positioniert, typischerweise nach links oder rechts. Der Inhalt kann entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch die `fixed`-Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und erhält eine Position relativ zu einem enthaltenden Block (der im Falle der Fixierung das Ansichtsfenster ist) oder zu einem oder mehreren Verankerungselementen im [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning).

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht aus dem Fluss entfernt ist.

Lesen Sie mehr über [CSS-Positionierungs-Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können beschrieben werden als hätte sie einen **äußeren Anzeigetyp**, welcher `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie sich die Box neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der das Verhalten ihrer Kinder bestimmt. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Anzeigetyp `flow`. Dies bedeutet, dass die Kind-Elemente ebenfalls entweder `block` oder `inline` sind.

Allerdings könnte der innere Anzeigetyp etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Grid oder Flexitems anzeigen. In einem solchen Fall wird das Element beschrieben, als würde es einen Grid- oder Flex-[Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) erstellen. In vielerlei Hinsicht ist dies einem Block-Formatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Griditems anstatt als Items im normalen Fluss.

Die Interaktionen zwischen Block-Level und Inline-Level Boxen werden in der {{cssxref("display")}} Eigenschaftsreferenz beschrieben.

Darüber hinaus erklären die Referenzen für spezifische Werte von Display, wie diese Formatierungskontexte in Bezug auf das Boxenlayout funktionieren.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Flexibles-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenden Blocks teil oder sie erstellen einen unabhängigen Formatierungskontext. Ein Grid-Container beispielsweise erstellt einen neuen **Grid-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats und Margen kollabieren nicht über Grenzen von Formatierungskontexten hinweg. Daher kann durch das Erstellen eines neuen Block-Formatierungskontexts sichergestellt werden, dass Floats und Margen innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` zu der Box hinzu, in der Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt den Effekt von `display: flow-root`. Die Box mit dem schwarzen Hintergrund erscheint, als würde sie das gefloatete Element und den Text umschließen. Entfernen Sie `display: flow-root`, wird das gefloatete Element am unteren Rand der Box herausragen, da es nicht mehr enthalten ist.

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

In Spezifikationen werden Blockboxen, Block-Level-Boxen und Blockcontainer an bestimmten Stellen alle als **Blockboxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Blockbox sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Blockcontainer

Ein **Blockcontainer** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingefügt werden, um sicherzustellen, dass alle Items an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level oder Inline-Level-Boxen enthält.

#### Inline-Level und Block-Level Boxen

Dies sind die Boxen, die sich innerhalb des Blockcontainers befinden und jeweils an Inline- oder Blocklayout teilnehmen.

#### Blockboxen

Eine Blockbox ist eine Block-Level-Box, die auch ein Blockcontainer ist. Wie in CSS `display` beschrieben wird, kann eine Box eine Block-Level-Box sein, jedoch nicht auch ein Blockcontainer (sie könnte beispielsweise ein Flex- oder Gridcontainer sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
- [Margin-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
