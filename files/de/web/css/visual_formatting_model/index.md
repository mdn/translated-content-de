---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

In CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen sowie verarbeiten und für visuelle Medien anzeigen. Dazu zählen {{Glossary("continuous_media", "kontinuierliche Medien")}} wie ein Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein von Browserdruckfunktionen gedrucktes Dokument. Die meisten Informationen gelten gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Boxen gemäß dem Box-Modell. Das Layout dieser Boxen wird bestimmt durch:

- Boxdimensionen und Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z.B. Größe des Viewports, intrinsische Dimensionen von Bildern usw.).

Vieles über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layoutmodule diese Informationen erweitert. Beim Lesen von Spezifikationen finden Sie oft Verweise auf das Modell, wie es in CSS2 definiert ist. Ein Verständnis des Modells und der Begriffe, die zur Beschreibung in CSS2 verwendet werden, ist wertvoll, um andere Layout-Spezifikationen zu verstehen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, wobei auf spezifischere Seiten für weitere Details verwiesen wird.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der sichtbare Bereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert – zum Beispiel, wenn Sie Ihr Fenster verkleinern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn der Viewport kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Dies sehen wir am häufigsten als Scrollen in der **Block-Dimension** – vertikal in einer horizontalen, von oben nach unten verlaufenden Sprache. Allerdings könnten Sie auch etwas entwerfen, das Scrollen in der **Inline-Dimension** erfordert.

## Boxenerzeugung

Die **Boxenerzeugung** ist der Teil des CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen sind von unterschiedlichem Typ, was ihre visuelle Formatierung beeinflusst. Der Typ der generierten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wird die `display`-Eigenschaft im [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) erweitert. Darüber hinaus wurden einige der Begriffe rund um die Anzeige im Laufe der Jahre seit CSS2 aktualisiert und geklärt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu erzeugt es eine Zwischenstruktur, den **Box-Baum**, die die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textrun im Box-Baum den Inhalt der entsprechenden Textknoten darstellt.

Dann generiert CSS für jedes Element null oder mehr Boxen, wie es durch den `display`-Eigenschaftswert dieses Elements festgelegt ist.

> [!NOTE]
> Boxen werden häufig nach ihrem Anzeigetyp benannt — z.B. eine Box, die von einem Element mit `display: block` generiert wird, wird als "Block-Box" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Box-Container alle subtil unterschiedlich sind; siehe den Abschnitt zu [Block-Boxen](#block-boxen) unten für mehr Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen erzeugt, ist eine davon die **Hauptbox**, die ihre Nachkommenschaftsboxen und den generierten Inhalt im Box-Baum enthält und auch die Box ist, die bei jedem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzlich zur Hauptbox weitere Boxen erzeugen, z.B. `display: list-item` erzeugt mehr als eine Box (z.B. eine **Hauptblock-Box** und eine **Kind-Marker-Box**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen erzeugen.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box zu verwenden ist. Diese Situation tritt auf, wenn Sie `display: flex` auf ein Elternelement deklarieren und direkt darin sich ein Textlauf befindet, der nicht in einem anderen Element enthalten ist. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie verhält sich dann wie ein Flex-Element, kann jedoch nicht gezielt angesprochen und wie eine normale Box gestylt werden, da es kein Element zum Anpeilen gibt.

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

Das Gleiche passiert, wenn Sie Textruns haben, die von Blockelementen durchsetzt sind. Im nächsten Beispiel habe ich eine Zeichenkette innerhalb eines `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird im Box-Baum in drei Boxen aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in einer anonymen Box umschlossen, dann haben wir das `<p>`, das eine Box erzeugt, und dann eine weitere anonyme Box.

Etwas, das Sie über diese anonymen Boxen bedenken sollten, ist, dass sie die Stile ihres direkten Elternteils erben, jedoch können Sie ihr Aussehen nicht ändern, indem Sie die anonyme Box anpeilen. In meinen Beispielen verwende ich einen direkten Kindselektor, um die Kinder des Containers zu targetieren. Dies ändert nichts an den anonymen Boxen, da sie keine "Elemente" an sich sind.

**Inline anonyme Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element geteilt wird, z.B. ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen — eine anonyme Inline-Box vor dem betonten Abschnitt, der Abschnitt, der mit dem `<em>`-Element umschlossen ist, und dann eine letzte anonyme Inline-Box. Wie bei den anonymen Block-Boxen, können diese anonymen Inline-Boxen nicht unabhängig gestylt werden wie das `<em>`; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erzeugen ebenfalls anonyme Boxen. [Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich auf die gleiche Weise wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben, indem Textketten in ein Rasterelement mit einer anonymen Box verwandelt werden. [Mehrspaltiges Layout](/de/docs/Web/CSS/CSS_multicol_layout) erzeugt anonyme Spaltenboxen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig angepeilt werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen – zum Beispiel das Hinzufügen einer anonymen Tabellenzeile – wenn keine Box mit `display: table-row` vorhanden war.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Zeilenboxen und ihrem enthaltenden Block erkennen, wenn Sie ein Element floaten und danach einen Block folgen lassen, der eine Hintergrundfarbe hat.

Im folgenden Beispiel werden die Zeilenboxen, die dem gefloateten `<div>` folgen, verkürzt, um um das Float herum zu verlaufen. Der Hintergrund der Box läuft hinter dem Float, da das gefloatete Element aus dem Fluss genommen wurde.

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

In CSS kann eine Box gemäß drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

In CSS beinhaltet der normale Fluss die Block-Level-Formatierung von Block-Boxen, die Inline-Level-Formatierung von Inline-Boxen und beinhaltet auch die relative und klebrige Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über [Flusslayout](/de/docs/Web/CSS/CSS_flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zuerst gemäß dem normalen Fluss angeordnet und dann aus dem Fluss genommen und positioniert, typischerweise links oder rechts. Inhalte können entlang der Seite eines Floats verlaufen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch `fixed`-Positionierung umfasst), wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenen Block (was der Viewport im Fall der fixierten Positionierung ist) oder zu einem oder mehreren Anker-Elementen in [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) positioniert.

Ein Element wird als **aus dem Fluss** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelelement ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht aus dem Fluss ist.

Lesen Sie über [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können beschrieben werden, indem sie einen **äußeren Anzeigetyp** haben, der `block` oder `inline` ist. Dieser äußere Anzeigetyp bezieht sich darauf, wie die Box sich neben anderen Elementen auf der Seite verhält.

Boxen haben auch einen inneren Anzeigetyp, der das Verhalten ihrer Kinder bestimmt. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Anzeigetyp `flow`. Dies bedeutet, dass die Kindelemente ebenfalls entweder `block` oder `inline` sein werden.

Allerdings könnte der innere Anzeigetyp etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Grid- oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element als Erzeuger von einem Grid- oder Flex-[Formatierungskontext](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies einem Block-Formatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Grid-Elemente und nicht als Elemente im normalen Fluss.

Die Interaktionen zwischen Block-Ebene und Inline-Ebenen-Boxen sind in der {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Darüber hinaus erläutern die Referenzen für spezifische Werte von display, wie diese Formatierungskontexte in Bezug auf das Box-Layout funktionieren.

- [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenen Blocks teil oder begründen einen unabhängigen Formatierungskontext. Ein Grid-Container zum Beispiel begründet einen neuen **Grid-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** beinhalten Floats, und Ränder kollabieren nicht über Formatierungskontextgrenzen hinweg. Daher kann die Erstellung eines neuen Block-Formatierungskontextes sicherstellen, dass Floats und Ränder innerhalb einer Box verbleiben. Um dies zu tun, fügen Sie das `display: flow-root` der Box hinzu, für die Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint das gefloatete Element und den Text zu umschließen. Entfernen Sie `display: flow-root`, wird das gefloatete Element aus dem unteren Ende der Box herausragen, da es nicht länger enthalten ist.

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

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container an bestimmten Stellen alle als **Block-Boxen** bezeichnet. Diese Dinge sind etwas anders, und der Begriff Block-Box sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erläuterte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen im Block-Container, die jeweils an einem Inline- oder Block-Layout teilnehmen.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die ebenfalls ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Block-Container (sie könnte zum Beispiel ein Flex- oder Grid-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/Comments)
- [Spezifität](/de/docs/Web/CSS/Specificity)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Z-Index-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Zusammenfallen von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
