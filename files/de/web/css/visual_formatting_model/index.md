---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

In CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen und für visuelle Medien verarbeiten und darstellen. Dazu gehören {{Glossary("continuous_media", "kontinuierliche Medien")}} wie ein Computerbildschirm und [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder Dokument, das über die Druckfunktionen des Browsers gedruckt wird. Ein Großteil der Informationen gilt gleichermaßen für kontinuierliche und Seitenmedien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Boxen gemäß dem Box-Modell. Das Layout dieser Boxen wird bestimmt durch:

- Box-Dimensionen und -Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z.B. Ansichtsfenstergröße, intrinsische Dimensionen von Bildern usw.).

Vieles über das visuelle Formatierungsmodell wird in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen werden Sie häufig auf Verweise auf das Modell stoßen, wie es in CSS2 definiert ist. Ein Verständnis des Modells und der in CSS2 verwendeten Begriffe ist daher wertvoll, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell und stellen einige der damit verbundenen Begriffe und Konzepte vor, mit Verweisen auf spezifischere Seiten für weitere Details.

## Die Rolle des Ansichtsfensters

In kontinuierlichen Medien ist das {{Glossary("viewport", "Ansichtsfenster")}} der Anzeigebereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Ansichtsfensters ändert – beispielsweise wenn Sie Ihr Fenster vergrößern oder verkleinern oder die Ausrichtung eines mobilen Geräts ändern.

Ist das Ansichtsfenster kleiner als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den nicht angezeigten Teilen des Dokuments zu scrollen. Dies sehen wir meist als vertikales Scrollen in einer horizontalen, von oben nach unten verlaufenden Sprache. Allerdings können Sie auch etwas entwerfen, das Scrollen in der **Inline-Dimension** erfordert.

## Box-Erzeugung

Die **Box-Erzeugung** ist der Teil des visuellen CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Erzeugte Boxen haben verschiedene Typen, die ihre visuelle Formatierung beeinflussen. Der Typ der erzeugten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft in den [CSS-Display](/de/docs/Web/CSS/CSS_display)-, [CSS-Flexibel-Layout](/de/docs/Web/CSS/CSS_flexible_layout)-, [CSS-Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout)- und [CSS-Ruby-Layout](/de/docs/Web/CSS/CSS_ruby)-Modulen erweitert. Darüber hinaus wurden einige der Begriffe rund um die Anzeige im Laufe der Jahre seit CSS2 aktualisiert und klargestellt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Box-Baum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudoelement) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textlauf im Box-Baum den Inhalt seiner entsprechenden Textknoten darstellt.

Anschließend generiert CSS für jedes Element null oder mehr Boxen gemäß dem Wert der `display`-Eigenschaft dieses Elements.

> [!NOTE]
> Boxen werden oft nach ihrem Anzeigetyp benannt – z.B. wird eine Box, die von einem Element mit `display: block` erzeugt wurde, als "Block-Box" oder einfach "Block" bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Box-Container alle leicht unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#blockboxen) unten für mehr Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen erzeugt, ist eine davon die **Hauptbox**, die ihre Nachfahren-Boxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die in ein beliebiges Positionierungsschema eingebunden ist.

Einige Elemente können zusätzlich zur Hauptbox weitere Boxen erzeugen, z.B. erzeugt `display: list-item` mehr als eine Box (z.B. eine **Haupt-Block-Box** und eine **Kind-Marker-Box**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachfahren überhaupt keine Boxen erzeugen.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn kein HTML-Element für die Box verwendet werden kann. Diese Situation tritt auf, wenn Sie z.B. `display: flex` auf ein übergeordnetes Element anwenden und sich direkt darin ein Textlauf befindet, der in keinem anderen Element enthalten ist. Um den Box-Baum zu korrigieren, wird eine anonyme Box um diesen Textlauf erstellt. Diese verhält sich dann wie ein Flex-Item, kann jedoch nicht wie eine reguläre Box anvisiert und gestylt werden, da es kein Element gibt, das anvisiert werden kann.

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

Das Gleiche passiert, wenn Sie Textläufe mit Block-Elementen durchsetzt haben. Im nächsten Beispiel habe ich einen String in einem `<div>`; in der Mitte meines Strings befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Der String wird im Box-Baum in drei Boxen aufgeteilt. Der Teil des Strings vor dem Paragraf-Element wird in eine anonyme Box eingebettet, dann haben wir das `<p>`, das eine Box erzeugt, und dann noch eine anonyme Box.

Etwas, das bei diesen anonymen Boxen zu beachten ist, ist, dass sie Stile von ihrem direkten Elternteil erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie die anonyme Box gezielt ansprechen. In meinen Beispielen verwende ich einen direkten Kind-Selektor, um die Kinder des Containers gezielt anzusprechen. Dies ändert die anonymen Boxen nicht, da sie keine "Elemente" im eigentlichen Sinne sind.

**Inline-anonyme Boxen** werden erstellt, wenn ein String durch ein Inline-Element unterbrochen wird, z.B. ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Boxen – eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element enthalten ist, und dann eine letzte anonyme Inline-Box. Wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig gestylt werden, wie das `<em>` kann; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erstellen ebenfalls anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich genauso wie das obige [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel und verwandelt Textstrings in einem Gitter-Item mit einer anonymen Box. [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout) erstellt anonyme Spaltenboxen um die Spalten; auch diese können nicht gestylt oder anderweitig gezielt angesprochen werden. [Tabellenlayout](/de/docs/Web/CSS/CSS_table) fügt anonyme Boxen hinzu, um eine ordnungsgemäße Tabellenstruktur zu erstellen – z.B. durch Hinzufügen einer anonymen Tabellenzeile – wenn keine Box mit `display: table-row` vorhanden war.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Zeilenboxen und ihrem enthaltenen Block sehen, wenn Sie ein Element floaten und danach einen Block mit einer Hintergrundfarbe platzieren.

Im folgenden Beispiel werden die Zeilenboxen hinter dem gefloateten `<div>` verkürzt, um das Float zu umschließen. Der Hintergrund der Box läuft hinter dem Float entlang, da das gefloatete Element aus dem Fluss genommen wurde.

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

In CSS kann eine Box nach drei Positionierungsschemata angeordnet werden – **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

In CSS umfasst der normale Fluss die blockbasierte Formatierung von Block-Boxen, die Inline-Formatierung von Inline-Boxen und auch die relative und sticky Positionierung von Block-Level- und Inline-Level-Boxen.

Lesen Sie mehr über das [Flusslayout](/de/docs/Web/CSS/CSS_display/flow_layout) in CSS.

### Floats

Im Float-Modell wird eine Box zunächst gemäß dem normalen Fluss angeordnet und dann aus dem Fluss herausgenommen und positioniert, typischerweise nach links oder rechts. Inhalte können entlang der Seite eines Floats verlaufen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch die `fixed` Positionierung umfasst) wird eine Box vollständig aus dem normalen Fluss entfernt und einem bestimmten Element relativ zu einem enthaltenden Block (das im Fall der festen Positionierung das Ansichtsfenster ist) oder zu einem oder mehreren Ankerelementen im [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) zugewiesen.

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet, absolut positioniert oder das Wurzelselement ist. Ein Element wird als **im Fluss befindlich** bezeichnet, wenn es nicht außerhalb des Flusses ist.

Lesen Sie über [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die Display-Eigenschaft

Boxen können als eine **äußere Display-Art** beschrieben werden, die `block` oder `inline` ist. Diese äußere Display-Art bezieht sich darauf, wie sich die Box im Zusammenhang mit anderen Elementen auf der Seite verhält.

Boxen haben auch eine innere Display-Art, die bestimmt, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Anzeigetyp `flow`. Das bedeutet, dass die Kindelemente entweder `block` oder `inline` sein werden.

Allerdings könnte die innere Display-Art etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als ein Gitter oder Flex-Items angezeigt werden. In einem solchen Fall wird das Element als Erstellen eines Gitter- oder Flex-[Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts) beschrieben. In vielerlei Hinsicht ähnelt dies einem Block-Formatierungskontext, jedoch verhalten sich die Kinder als Flex- oder Gitter-Items anstelle von Items im normalen Fluss.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen sind in der {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Außerdem erklären die Referenzen für spezifische Werte der Anzeige, wie diese Formatierungskontexte im Hinblick auf das Box-Layout funktionieren.

- [CSS-Gitterlayout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS-Flexibler-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)-Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table)-Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists)-Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenden Blocks teil oder erstellen einen unabhängigen Formatierungskontext. Ein Gittercontainer beispielsweise erstellt einen neuen **Gitterformatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Ränder kollabieren nicht über Formatierungskontextgrenzen hinweg. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Ränder in einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` zur Box hinzu, für die Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellen möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint sich um das gefloatete Element und den Text zu wickeln. Wenn Sie `display: flow-root` entfernen, ragt das gefloatete Element aus der unteren Box heraus, da es nicht mehr enthalten ist.

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

In Spezifikationen werden Blockboxen, Block-Level-Boxen und Block-Container an bestimmten Stellen als **Blockboxen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Blockbox sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben erklärte Verhalten, bei dem anonyme Boxen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die innerhalb des Block-Containers enthalten sind und entweder an einem Inline- oder Block-Layout teilnehmen.

#### Blockboxen

Eine Blockbox ist eine Block-Level-Box, die auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann eine Box eine Block-Level-Box sein, aber nicht auch ein Block-Container (sie könnte zum Beispiel ein Flex- oder Gittercontainer sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
- [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
