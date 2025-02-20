---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Visual_formatting_model
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum aufnehmen, verarbeiten und für visuelle Medien darstellen. Dies schließt {{Glossary("continuous_media", "kontinuierliche Medien")}} wie einen Computerbildschirm sowie [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) wie ein Buch oder ein durch Browser-Druckfunktionen gedrucktes Dokument ein. Die meisten Informationen gelten sowohl für kontinuierliche als auch für Seitenmedien.

Im visuellen Formatierungsmodell generiert jedes Element im Dokumentbaum null oder mehr Boxen entsprechend dem Box-Modell. Die Anordnung dieser Boxen wird geregelt durch:

- Box-Dimensionen und Typ.
- Positionierungsschema (normaler Fluss, Float und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z. B. Viewport-Größe, intrinsische Dimensionen von Bildern usw.).

Der größte Teil der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen finden Sie häufig Verweise auf das in CSS2 definierte Modell. Daher ist es wertvoll, das Modell und die Begriffe, die in CSS2 verwendet werden, zu verstehen, wenn Sie andere Layout-Spezifikationen lesen.

In diesem Dokument definieren wir das Modell, führen einige verwandte Begriffe und Konzepte ein und verweisen auf spezifische Seiten für weitere Details.

## Die Rolle des Viewports

In kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der sichtbare Bereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert – zum Beispiel, wenn Sie das Fenster ändern oder die Ausrichtung eines mobilen Geräts wechseln.

Wenn der Viewport kleiner ist als die Größe des Dokuments, muss der Benutzeragent eine Möglichkeit bieten, zu den nicht angezeigten Teilen des Dokuments zu scrollen. Dies wird meistens als vertikales Scrollen in der **Block-Dimension** gesehen – vertikal in einer horizontal, von oben nach unten ausgerichteten Sprache. Dennoch könnten Sie auch etwas entwerfen, das in der **Inline-Dimension** gescrollt werden muss.

## Box-Erzeugung

**Box-Erzeugung** ist der Teil des visuellen CSS-Formatierungsmodells, der Boxen aus den Elementen des Dokuments erstellt. Generierte Boxen haben unterschiedliche Typen, die ihr visuelles Format bestimmen. Der Typ der generierten Box hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft im [CSS Display Module Level 3](https://www.w3.org/TR/css-display-3/) erweitert. Außerdem wurden einige der Terminologien rund um die Anzeige im Laufe der Jahre seit CSS2 aktualisiert und geklärt.

CSS nimmt Ihr Quelldokument und rendert es auf eine Leinwand. Dazu generiert es eine Zwischenstruktur, den **Box-Baum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jede Box im Box-Baum repräsentiert ihr entsprechendes Element (oder Pseudo-Element) im Raum und/oder in der Zeit auf der Leinwand, während jeder Textrun im Box-Baum ebenfalls den Inhalt seiner entsprechenden Textknoten repräsentiert.

Für jedes Element generiert CSS dann null oder mehr Boxen, wie durch den `display`-Eigenschaftswert dieses Elements angegeben.

> [!NOTE]
> Boxen werden oft anhand ihres Display-Typs bezeichnet – z. B. wird eine Box, die von einem Element mit `display: block` generiert wird, als „Block-Box“ oder einfach „Block“ bezeichnet. Beachten Sie jedoch, dass Block-Boxen, Block-Level-Boxen und Box-Container subtil unterschiedlich sind; siehe den Abschnitt [Block-Boxen](#block-boxen) unten für weitere Details.

### Die Hauptbox

Wenn ein Element eine oder mehrere Boxen generiert, ist eine davon die **Hauptbox**, die die Nachkommenboxen und generierten Inhalte im Box-Baum enthält und auch die Box ist, die an jedem Positionierungsschema beteiligt ist.

Einige Elemente können zusätzliche Boxen neben der Hauptbox generieren, zum Beispiel erzeugt `display: list-item` mehr als eine Box (z. B. eine **Hauptblockbox** und eine **Kindmarkierungsbox**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachkommen überhaupt keine Boxen generieren.

### Anonyme Boxen

Eine **anonyme Box** wird erstellt, wenn es kein HTML-Element gibt, das für die Box verwendet werden kann. Dies geschieht beispielsweise, wenn Sie `display: flex` auf ein Elternelement anwenden und direkt darin ein Textlauf enthalten ist, der nicht in ein anderes Element eingebettet ist. Um den Box-Baum zu reparieren, wird eine anonyme Box um diesen Textlauf erstellt. Sie wird sich dann wie ein Flex-Element verhalten, kann jedoch nicht wie eine reguläre Box gezielt angesprochen und gestylt werden, da kein Element vorhanden ist, auf das sie abzielen könnte.

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

Das Gleiche passiert, wenn Sie Textruns mit Block-Elementen durchsetzt haben. Im nächsten Beispiel habe ich eine Zeichenkette in einem `<div>`; in der Mitte meiner Zeichenkette befindet sich ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird im Box-Baum in drei Boxen aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in einer anonymen Box eingeschlossen, dann haben wir das `<p>`, das eine Box generiert, und schließlich eine weitere anonyme Box.

Beachten Sie bei diesen anonymen Boxen, dass sie die Stile ihres direkten Elternteils erben, Sie jedoch ihr Erscheinungsbild nicht durch gezielte Ansprache der anonymen Box ändern können. In meinen Beispielen verwende ich einen direkten Kindselektor, um die Kinder des Containers anzusprechen. Dies ändert die anonymen Boxen nicht, da sie keine tatsächlichen „Elemente“ sind.

**Inline-anonyme Boxen** werden erstellt, wenn eine Zeichenkette durch ein Inline-Element getrennt wird, beispielsweise ein Satz, der einen Abschnitt enthält, der mit `<em></em>` eingeschlossen ist. Dies teilt den Satz in drei Inline-Boxen – eine anonyme Inline-Box vor dem hervorgehobenen Abschnitt, den Abschnitt, der im `<em>`-Element eingeschlossen ist, und dann eine abschließende anonyme Inline-Box. Wie bei den anonymen Block-Boxen können diese anonymen Inline-Boxen nicht unabhängig gestaltet werden wie das `<em>`; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erstellen ebenfalls anonyme Boxen. [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verhält sich ähnlich wie das [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)-Beispiel oben, indem Textzeichenketten in ein Gitterelement mit einer anonymen Box umgewandelt werden. [Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout) erstellen anonyme Spaltenboxen um die Spalten; auch diese können weder gestaltet noch anderweitig angesprochen werden. [Tabellen-Layouts](/de/docs/Web/CSS/CSS_table) fügen anonyme Boxen hinzu, um eine korrekte Tabellenstruktur zu erstellen – z. B. eine anonyme Tabellenzeile –, falls keine Box mit `display: table-row` vorhanden ist.

### Zeilenboxen

**Zeilenboxen** sind die Boxen, die jede Textzeile umhüllen. Sie können den Unterschied zwischen Zeilenboxen und ihrem enthaltenden Block sehen, wenn Sie ein Element floaten und dann einen Block mit einer Hintergrundfarbe folgen lassen.

Im folgenden Beispiel werden die Zeilenboxen nach dem gefloateten `<div>` verkürzt, um es zu umschließen. Der Hintergrund der Box läuft hinter dem Float her, da das gefloatete Element aus dem Fluss entfernt wurde.

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

## Positionierungsschemata und Elemente im oder außerhalb des Flusses

Im CSS kann eine Box gemäß drei Positionierungsschemata angeordnet werden – **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die Block-Ebene-Formatierung von Block-Boxen, die Inline-Ebene-Formatierung von Inline-Boxen sowie die relative und sticky Positionierung von Block- und Inline-Boxen.

Lesen Sie mehr über den [Fluss-Layout](/de/docs/Web/CSS/CSS_display/flow_layout)-Leitfaden in CSS.

### Floats

Im Float-Modell wird eine Box zunächst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss entfernt und positioniert, typischerweise links oder rechts. Inhalte können entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn_web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (zu dem auch `fixed` Positionierung gehört) wird eine Box vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenden Block positioniert (der im Fall der Fixierung der Viewport ist) oder zu einem oder mehreren Ankerelementen in der [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning).

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet, absolut positioniert oder das Root-Element ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht außerhalb des Flusses ist.

Lesen Sie mehr über das [CSS-positionierte Layout](/de/docs/Web/CSS/CSS_positioned_layout).

## Formatierungskontexte und die `display`-Eigenschaft

Boxen können als eine **äußere Anzeigeart** beschrieben werden, die entweder `block` oder `inline` ist. Diese äußere Anzeigeart bezieht sich darauf, wie sich die Box im Bezug zu anderen Elementen auf der Seite verhält.

Boxen haben ebenfalls eine innere Anzeigeart, die bestimmt, wie sich ihre Kinder verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist diese Anzeigeart `flow`. Das bedeutet, dass auch die Kindelemente entweder `block` oder `inline` sein werden.

Jedoch könnte die innere Anzeigeart so etwas wie `grid` oder `flex` sein, für solche Fälle wird das Element als das Erstellen eines Gitters oder Flex-Formatierungskontexts bezeichnet. In vielerlei Hinsicht ist dies einem Block-Formatierungskontext ähnlich, allerdings verhalten sich die Kinder wie Flex- oder Gitter-Elemente anstelle von normalen Flusselementen.

Die Interaktionen zwischen Block-Level- und Inline-Level-Boxen werden in der Referenz der {{cssxref("display")}}-Eigenschaft beschrieben.

Die Spezifikationen spezifischer Display-Werte erklären zudem, wie diese Formatierungskontexte hinsichtlich der Box-Layouts funktionieren.

- [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul
- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)-Modul
- [CSS-Tabelle](/de/docs/Web/CSS/CSS_table)-Modul
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists)-Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenden Blocks teil oder etablieren einen unabhängigen Formatierungskontext. Ein Grid-Container beispielsweise etabliert einen neuen **Grid-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Margen kollabieren nicht über Formatierungskontextgrenzen hinweg. Daher kann das Erstellen eines neuen Block-Formatierungskontexts sicherstellen, dass Floats und Margen innerhalb einer Box bleiben. Um dies zu tun, fügen Sie `display: flow-root` der Box hinzu, auf die Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context) anwenden möchten.

Das folgende Beispiel zeigt die Wirkung von `display: flow-root`. Die Box mit dem schwarzen Hintergrund scheint das gefloatete Element und den Text zu umschließen. Wenn Sie `display: flow-root` entfernen, ragt das gefloatete Element aus der Unterseite der Box heraus, da es nicht mehr enthalten ist.

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

In Spezifikationen werden Block-Boxen, Block-Level-Boxen und Block-Container in einigen Fällen alle als **Block-Boxen** bezeichnet. Diese Begriffe sind jedoch etwas unterschiedlich, und der Begriff Block-Box sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Boxen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Boxen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben beschriebene Verhalten, bei dem anonyme Boxen erstellt werden, um sicherzustellen, dass alle Elemente an einem Block- oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Boxen enthält.

#### Inline-Level- und Block-Level-Boxen

Dies sind die Boxen, die sich innerhalb des Block-Containers befinden und die an Inline- oder Block-Layouts teilnehmen.

#### Block-Boxen

Eine Block-Box ist eine Block-Level-Box, die zugleich ein Block-Container ist. Wie in `display` beschrieben, kann eine Box eine Block-Level-Box sein, jedoch kein Block-Container (z. B. könnte sie ein Flex- oder Grid-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)-Leitfaden
- [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Stapelkontext](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
- [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
- [Margin Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
- [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
