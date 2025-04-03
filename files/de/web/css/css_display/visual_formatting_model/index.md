---
title: Visuelles Formatierungsmodell
slug: Web/CSS/CSS_display/Visual_formatting_model
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum übernehmen und für visuelle Medien verarbeiten und anzeigen. Dazu gehören {{Glossary("continuous_media", "kontinuierliche Medien")}} wie ein Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder Dokument, das durch die Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Kästchen gemäß dem Box-Modell. Das Layout dieser Kästchen wird bestimmt durch:

- Box-Dimensionen und -Typ.
- Positionierungsschema (normaler Fluss, Floats und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z. B. Ansichtsfenstergröße, intrinsische Dimensionen von Bildern usw.).

Vieles der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch wurden diese Informationen durch verschiedene CSS-Layout-Module erweitert. Beim Lesen von Spezifikationen werden Sie oft Verweise auf das Modell finden, wie es in CSS2 definiert ist. Ein Verständnis des Modells und der Begriffe, die es in CSS2 beschreiben, ist wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, mit Links zu spezifischeren Seiten für weitere Details.

## Die Rolle des Ansichtsfensters

In kontinuierlichen Medien ist das {{Glossary("viewport", "Ansichtsfenster")}} der Betrachtungsbereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Ansichtsfensters ändert – beispielsweise, wenn Sie Ihr Fenster verkleinern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn das Ansichtsfenster kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den nicht angezeigten Teilen des Dokuments zu scrollen. Dies sehen wir meist als vertikales Scrollen in der **Block-Dimension** — vertikal in einer horizontalen, von oben nach unten gehenden Sprache. Jedoch könnten Sie etwas entwerfen, das auch Scrollen in der **Inline-Dimension** erfordert.

## Box-Erzeugung

**Box-Erzeugung** ist der Teil des CSS-Visuellen Formatierungsmodells, der Kästchen aus den Elementen des Dokuments erstellt. Erzeugte Kästchen haben unterschiedliche Typen, die ihre visuelle Formatierung beeinflussen. Der Typ des erzeugten Kästchens hängt vom Wert der CSS-{{cssxref("display")}}-Eigenschaft ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft in den Modulen [CSS display](/de/docs/Web/CSS/CSS_display), [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout), [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und [CSS-Ruby-Layout](/de/docs/Web/CSS/CSS_ruby_layout) erweitert. Zudem wurde einige der Terminologien rund um die Anzeige seit CSS2 aktualisiert und geklärt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenschicht, den **Box-Baum**, welcher die Formatierungsstruktur des gerenderten Dokuments darstellt. Jedes Kästchen im Box-Baum repräsentiert sein entsprechendes Element (oder Pseudo-Element) im Raum und/oder Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenso die Inhalte seiner entsprechenden Textknoten repräsentiert.

Dann generiert CSS für jedes Element null oder mehr Kästchen gemäß dem Wert der `display`-Eigenschaft dieses Elements.

> [!NOTE]
> Kästchen werden oft nach ihrem Anzeigetyp benannt — z. B. wird ein von einem Element mit `display: block` erzeugtes Kästchen als "Block-Kästchen" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Kästchen, Block-Level-Kästchen und Block-Container alle subtil unterschiedlich sind; siehe den Abschnitt [Block-Kästchen](#blockkästchen) unten für weitere Details.

### Das Hauptkästchen

Wenn ein Element ein oder mehrere Kästchen erzeugt, ist eines davon das **Hauptkästchen**, welches seine Nachkommen-Kästchen und erzeugten Inhalte im Box-Baum enthält und auch das Kästchen ist, das an jedem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzliche Kästchen zusätzlich zum Hauptkästchen erzeugen, zum Beispiel erzeugt `display: list-item` mehr als ein Kästchen (z. B. ein **Hauptblock-Kästchen** und ein **Kind-Marker-Kästchen**). Und einige Werte (wie `none` oder `contents`) führen dazu, dass das Element und/oder seine Nachkommen überhaupt keine Kästchen erzeugen.

### Anonyme Kästchen

Ein **anonymes Kästchen** wird erstellt, wenn es kein HTML-Element zur Verwendung für das Kästchen gibt. Diese Situation tritt auf, wenn Sie beispielsweise `display: flex` auf ein Elternelement anwenden und sich direkt darin ein Textlauf befindet, der nicht in ein weiteres Element eingeschlossen ist. Um den Box-Baum zu korrigieren, wird ein anonymes Kästchen um diesen Textlauf erstellt. Es verhält sich dann wie ein Flex-Item, jedoch kann es nicht wie ein reguläres Kästchen gezielt und gestylt werden, da es kein Element gibt, auf das man zielen kann.

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

Dasselbe passiert, wenn Sie Textläufe haben, die mit Block-Elementen durchsetzt sind. Im folgenden Beispiel habe ich eine Zeichenkette innerhalb eines `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird in drei Kästchen im Box-Baum aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in ein anonymes Kästchen eingewickelt, dann haben wir das `<p>`, welches ein Kästchen generiert, und dann ein weiteres anonymes Kästchen.

Etwas, das Sie über diese anonymen Kästchen bedenken sollten, ist, dass sie Styles von ihrem direkten Elternteil erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie gezielt auf das anonyme Kästchen abzielen. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers anzusprechen. Dies ändert die anonymen Kästchen nicht, da sie nicht "Elemente" im eigentlichen Sinne sind.

**Inline-anonyme Kästchen** werden erstellt, wenn eine Zeichenkette von einem Inline-Element unterbrochen wird, z. B. ein Satz, der einen Abschnitt enthält, der mit `<em></em>` eingeschlossen ist. Dies teilt den Satz in drei Inline-Kästchen auf — ein anonymes Inline-Kästchen vor dem hervorgehobenen Abschnitt, der Abschnitt, der im `<em>`-Element eingeschlossen ist, und dann ein abschließendes anonymes Inline-Kästchen. Wie bei den anonymen Block-Kästchen können diese anonymen Inline-Kästchen nicht unabhängig gestylt werden, wie es beim `<em>`-Element möglich ist; sie erben lediglich die Styles ihres Containers.

Andere Formatierungskontexte erstellen ebenfalls anonyme Kästchen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich ähnlich wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben und verwandelt Textketten in ein Grid-Item mit einem anonymen Kästchen. [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenkästchen um die Spalten; diese können ebenfalls nicht gestylt oder gezielt werden. [Tabellen-Layout](/de/docs/Web/CSS/CSS_table) wird anonyme Kästchen hinzufügen, um eine ordnungsgemäße Tabellenstruktur zu schaffen – zum Beispiel eine anonyme Tabellenzeile hinzufügen – wenn es kein Kästchen mit `display: table-row` gab.

### Zeilenkästchen

**Zeilenkästchen** sind die Kästchen, die jede Textzeile umhüllen. Sie können den Unterschied zwischen Zeilenkästchen und ihrem enthaltenden Block sehen, wenn Sie ein Element floaten und es dann von einem Block mit einer Hintergrundfarbe folgen lassen.

Im folgenden Beispiel werden die Zeilenkästchen, die auf das gefloatete `<div>` folgen, verkürzt, um sich um das Float herumzuwickeln. Der Hintergrund des Kästchens läuft hinter dem Float entlang, da das gefloatete Element aus dem Fluss genommen wurde.

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

## Positionierungsschemata und im Fluss und außerhalb des Flusses stehende Elemente

In CSS kann ein Kästchen gemäß drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

In CSS umfasst der normale Fluss die block-level Formatierung von Block-Kästchen, die inline-level Formatierung von Inline-Kästchen und umfasst auch relative und sticky Positionierung von Block- und Inline-Level-Kästchen.

Lesen Sie mehr über [Fluss-Layout](/de/docs/Web/CSS/CSS_display/Flow_layout) in CSS.

### Floats

Im Float-Modell wird ein Kästchen zuerst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss genommen und positioniert, typischerweise nach links oder rechts. Inhalte können entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im absoluten Positionierungsmodell (welches auch `fixed` Positionierung einschließt) wird ein Kästchen vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenden Block (das Ansichtsfenster im Fall von fixed-Positionierung) oder zu einem oder mehreren Ankerelementen in [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugeordnet.

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet oder absolut positioniert ist, oder das Stammdokument ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht außerhalb des Flusses ist.

Lesen Sie über [CSS positionierte Layouts](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Kästchen können als mit einer **äußeren Display-Art** beschrieben werden, die `block` oder `inline` ist. Diese äußere Display-Art bezieht sich darauf, wie das Kästchen im Vergleich zu anderen Elementen auf der Seite reagiert.

Kästchen haben auch eine innere Display-Art, die das Verhalten ihrer Kinder bestimmt. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Display-Typ `flow`. Das bedeutet, dass die Kindelemente ebenfalls entweder `block` oder `inline` sein werden.

Die innere Display-Art könnte jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder sich als Grid- oder Flex-Items darstellen werden. In einem solchen Fall wird das Element als ein Grid- oder Flex-[Formatierungskontext](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies ähnlich einem Block-Formatierungskontext, jedoch verhalten sich die Kinder als Flex- oder Grid-Items statt als Elemente im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Kästchen werden in der {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Zusätzlich erklären die Referenzen für spezifische Werte von Display, wie diese Formatierungskontexte in Bezug auf das Box-Layout funktionieren.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder im Formatierungskontext ihres enthaltenden Blocks teil oder erstellen einen unabhängigen Formatierungskontext. Ein Grid-Container beispielsweise erstellt einen neuen **Grid-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** beinhalten Floats, und Ränder kollabieren nicht über die Grenzen von Formatierungskontexten hinweg. Daher kann ein neuer Block-Formatierungskontext erstellt werden, um sicherzustellen, dass Floats und Ränder innerhalb eines Kästchens bleiben. Um dies zu tun, fügen Sie `display: flow-root` zu dem Kästchen hinzu, für das Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Das Kästchen mit dem schwarzen Hintergrund scheint um das gefloatete Element und Text zu wickeln. Wenn Sie `display: flow-root` entfernen, wird das gefloatete Element aus dem unteren Bereich des Kästchens herausragen, da es nicht mehr enthalten ist.

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

### Blockkästchen

In Spezifikationen werden Block-Kästchen, Block-Level-Kästchen und Block-Container an bestimmten Stellen als **Blockkästchen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Blockkästchen sollte nur dann verwendet werden, wenn keine Ambiguität besteht.

#### Blockcontainer

Ein **Blockcontainer** enthält entweder nur Inline-Level-Kästchen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Kästchen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erläuterte Verhalten, bei dem anonyme Kästchen erstellt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Blockcontainer, wenn es Block-Level- oder Inline-Level-Kästchen enthält.

#### Inline-Level- und Block-Level-Kästchen

Dies sind die Kästchen, die sich im Blockcontainer befinden und an einem Inline- oder Block-Layout teilnehmen.

#### Blockkästchen

Ein Blockkästchen ist ein Block-Level-Kästchen, das auch ein Blockcontainer ist. Wie in CSS `display` beschrieben, kann ein Kästchen ein Block-Level-Kästchen sein, aber nicht auch ein Blockcontainer (es könnte beispielsweise ein Flex- oder Grid-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
