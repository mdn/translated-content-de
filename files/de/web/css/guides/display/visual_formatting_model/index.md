---
title: Visuelles Formatierungsmodell
slug: Web/CSS/Guides/Display/Visual_formatting_model
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Im CSS beschreibt das **visuelle Formatierungsmodell**, wie Benutzeragenten den Dokumentbaum nehmen, verarbeiten und für visuelle Medien anzeigen. Dies umfasst {{Glossary("continuous_media", "kontinuierliche Medien")}} wie einen Computerbildschirm und [seitige Medien](/de/docs/Web/CSS/Guides/Paged_media) wie ein Buch oder Dokument, das durch die Druckfunktionen des Browsers gedruckt wird. Die meisten Informationen gelten gleichermaßen für kontinuierliche und seitige Medien.

Im visuellen Formatierungsmodell erzeugt jedes Element im Dokumentbaum null oder mehr Kästchen entsprechend dem Box-Modell. Das Layout dieser Kästchen wird durch folgende Faktoren bestimmt:

- Box-Abmessungen und Typ.
- Positionierungsschema (normaler Fluss, Float, und absolute Positionierung).
- Beziehungen zwischen Elementen im Dokumentbaum.
- Externe Informationen (z.B. Viewport-Größe, intrinsische Abmessungen von Bildern, etc.).

Ein Großteil der Informationen über das visuelle Formatierungsmodell ist in CSS2 definiert, jedoch haben verschiedene CSS-Layout-Module diese Informationen erweitert. Beim Lesen von Spezifikationen werden Sie häufig Verweise auf das in CSS2 definierte Modell finden, daher ist ein Verständnis des Modells und der in CSS2 verwendeten Begriffe wertvoll beim Lesen anderer Layout-Spezifikationen.

In diesem Dokument definieren wir das Modell und führen einige der damit verbundenen Begriffe und Konzepte ein, wobei auf speziellere Seiten für weitere Details verwiesen wird.

## Die Rolle des Viewports

Bei kontinuierlichen Medien ist der {{Glossary("viewport", "Viewport")}} der sichtbare Bereich des Browserfensters. Benutzeragenten können das Layout der Seite ändern, wenn sich die Größe des Viewports ändert — zum Beispiel, wenn Sie Ihr Fenster vergrößern oder die Ausrichtung eines mobilen Geräts ändern.

Wenn der Viewport kleiner als die Größe des Dokuments ist, muss der Benutzeragent eine Möglichkeit bieten, zu den Teilen des Dokuments zu scrollen, die nicht angezeigt werden. Dies sehen wir am häufigsten als Scrollen in der **Block-Dimension** — vertikal in einer horizontalen Sprache von oben nach unten. Sie könnten jedoch auch etwas entwerfen, das ein Scrollen in der **Inline-Dimension** erfordert.

## Box-Generierung

**Box-Generierung** ist der Teil des CSS-Visuellen Formatierungsmodells, der Kästchen aus den Elementen des Dokuments erstellt. Generierte Kästchen sind von unterschiedlichen Typen, die ihre visuelle Formatierung beeinflussen. Der Typ des erzeugten Kästchens hängt vom Wert der CSS-Eigenschaft {{cssxref("display")}} ab.

Ursprünglich in CSS2 definiert, wurde die `display`-Eigenschaft in den Modulen [CSS-Display](/de/docs/Web/CSS/Guides/Display), [CSS-Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout), [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und [CSS-Ruby-Layout](/de/docs/Web/CSS/Guides/Ruby_layout) erweitert. Darüber hinaus wurden einige der Terminologien rund um das Display im Laufe der Jahre seit CSS2 aktualisiert und geklärt.

CSS nimmt Ihr Quelldokument und rendert es auf einer Leinwand. Dafür erzeugt es eine Zwischenstruktur, den **Box-Baum**, der die Formatierungsstruktur des gerenderten Dokuments darstellt. Jedes Kästchen im Box-Baum repräsentiert sein entsprechendes Element (oder Pseudo-Element) im Raum und/oder der Zeit auf der Leinwand, während jeder Textlauf im Box-Baum ebenfalls die Inhalte seiner entsprechenden Textknoten repräsentiert.

Dann erzeugt CSS für jedes Element null oder mehr Kästchen, wie es durch den Wert der `display`-Eigenschaft dieses Elements angegeben ist.

> [!NOTE]
> Kästchen werden oft nach ihrem Display-Typ benannt — z.B. ein Kästchen, das von einem Element mit `display: block` generiert wird, wird "Block-Kästchen" oder einfach "Block" genannt. Beachten Sie jedoch, dass Block-Kästchen, Block-Level-Kästchen und Block-Container alle leicht unterschiedlich sind; siehe den [Block-Kästchen](#blockkästchen)-Abschnitt unten für weitere Details.

### Das Hauptkästchen

Wenn ein Element ein oder mehrere Kästchen erzeugt, ist eines davon das **Hauptkästchen**, das seine Nachfahren-Kästchen und den generierten Inhalt im Box-Baum enthält und auch das Kästchen ist, das in jedes Positionierungsschema eingebunden ist.

Einige Elemente können zusätzliche Kästchen neben dem Hauptkästchen erzeugen, zum Beispiel erzeugt `display: list-item` mehr als ein Kästchen (z.B. ein **Hauptblock-Kästchen** und ein **Kindmarkierungs-Kästchen**). Und einige Werte (wie `none` oder `contents`) bewirken, dass das Element und/oder seine Nachfahren überhaupt keine Kästchen erzeugen.

### Anonyme Kästchen

Ein **anonymes Kästchen** wird erstellt, wenn es kein HTML-Element gibt, um das Kästchen zu verwenden. Diese Situation tritt auf, wenn Sie zum Beispiel `display: flex` auf einem Elternelement deklarieren und direkt darin ein Textlauf ist, der nicht in einem anderen Element enthalten ist. Um den Box-Baum zu korrigieren, wird ein anonymes Kästchen um diesen Textlauf erstellt. Es wird sich dann wie ein Flex-Element verhalten, jedoch kann es nicht wie ein reguläres Kästchen gezielt und gestylt werden, da es kein Ziel-Element gibt.

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

Dasselbe passiert, wenn Sie Textläufe haben, die mit Block-Elementen durchsetzt sind. Im folgenden Beispiel habe ich eine Zeichenkette innerhalb eines `<div>`; in der Mitte meiner Zeichenkette ist ein `<p>`-Element, das einen Teil des Textes enthält.

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

Die Zeichenkette wird in drei Kästchen im Box-Baum aufgeteilt. Der Teil der Zeichenkette vor dem Absatz-Element wird in ein anonymes Kästchen eingeschlossen, dann haben wir das `<p>`, das ein Kästchen erzeugt, und dann ein weiteres anonymes Kästchen.

Ein Punkt, der bei diesen anonymen Kästchen zu beachten ist, ist, dass sie Stile von ihrem direkten Elternteil erben, aber Sie können nicht ändern, wie sie aussehen, indem Sie das anonyme Kästchen anvisieren. In meinen Beispielen verwende ich einen Direkt-Kind-Selektor, um die Kinder des Containers zu selektieren. Dies ändert die anonymen Kästchen nicht, da sie nicht "Elemente" im eigentlichen Sinne sind.

**Inline anonyme Kästchen** werden erstellt, wenn eine Zeichenkette von einem Inline-Element unterbrochen wird, z.B. ein Satz, der einen Abschnitt enthält, der mit `<em></em>` umschlossen ist. Dies teilt den Satz in drei Inline-Kästchen — ein anonymes Inline-Kästchen vor dem hervorgehobenen Abschnitt, der Abschnitt, der im `<em>`-Element umschlossen ist, und dann ein finales anonymes Inline-Kästchen. Wie bei den anonymen Block-Kästchen können diese anonymen Inline-Kästchen nicht unabhängig gestylt werden, wie das `<em>`; sie erben einfach die Stile ihres Containers.

Andere Formatierungskontexte erstellen ebenfalls anonyme Kästchen. Das [Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) verhält sich genauso wie das [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Beispiel oben und verwandelt Textstränge in ein Gitterelement mit einem anonymen Kästchen. Das [Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) erstellt anonyme Spaltenkästchen um die Spalten; diese können ebenfalls nicht gestylt oder anderweitig gezielt werden. Das [Tabellenlayout](/de/docs/Web/CSS/Guides/Table) wird anonyme Kästchen hinzufügen, um eine ordnungsgemäße Tabellenstruktur zu erstellen — zum Beispiel, indem eine anonyme Tabellenzeile hinzugefügt wird, wenn es kein Kästchen mit `display: table-row` gibt.

### Linienkästchen

**Linienkästchen** sind die Kästchen, die jede Textzeile umschließen. Sie können den Unterschied zwischen Linienkästchen und ihrem Block-Container sehen, wenn Sie ein Element floaten lassen und dann einem Block mit einem Hintergrundfarbe folgen.

Im folgenden Beispiel werden die Linienkästchen, die dem gefloateten `<div>` folgen, verkürzt, um das Float zu umschließen. Der Hintergrund des Kästchens läuft hinter dem Float, da das gefloatete Element aus dem Fluss entfernt wurde.

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

## Positionierungsschemata und „in-flow“ und „out-of-flow“ Elemente

In CSS kann ein Kästchen nach drei Positionierungsschemata angeordnet werden — **normaler Fluss**, **Floats** oder **absolute Positionierung**.

### Normaler Fluss

Im CSS umfasst der normale Fluss die Block-Level-Formatierung von Block-Kästchen, die Inline-Level-Formatierung von Inline-Kästchen und umfasst auch die relative und klebrige Positionierung von Block-Level- und Inline-Level-Kästchen.

Lesen Sie mehr über den [Fluss-Layout](/de/docs/Web/CSS/Guides/Display/Flow_layout) im CSS.

### Floats

Im Float-Modell wird ein Kästchen zunächst gemäß dem normalen Fluss angeordnet, dann aus dem Fluss genommen und positioniert, typischerweise nach links oder rechts. Inhalt kann entlang der Seite eines Floats fließen.

Erfahren Sie mehr über [Floats](/de/docs/Learn/web_development/Core/CSS_layout/Floats).

### Absolute Positionierung

Im Modell der absoluten Positionierung (das auch die `fixed`-Positionierung umfasst) wird ein Kästchen vollständig aus dem normalen Fluss entfernt und relativ zu einem enthaltenen Block positioniert (was im Fall der Fixed-Positionierung der Viewport ist) oder zu einem oder mehreren Ankerelementen im [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning).

Ein Element wird als **außerhalb des Flusses** bezeichnet, wenn es gefloatet ist, absolut positioniert ist oder das Root-Element ist. Ein Element wird als **im Fluss** bezeichnet, wenn es nicht außerhalb des Flusses ist.

Lesen Sie über [CSS Positions-Layout](/de/docs/Web/CSS/Guides/Positioned_layout).

## Formatierungskontexte und die display-Eigenschaft

Kästchen können als ein **äußerer Display-Typ** beschrieben werden, der entweder `block` oder `inline` ist. Dieser äußere Display-Typ bezieht sich darauf, wie sich das Kästchen neben anderen Elementen auf der Seite verhält.

Kästchen haben auch einen inneren Display-Typ, der vorschreibt, wie ihre Kinder sich verhalten. Für normales Block- und Inline-Layout oder normalen Fluss ist dieser Display-Typ `flow`. Dies bedeutet, dass die Kindelemente ebenfalls entweder `block` oder `inline` sein werden.

Der innere Display-Typ könnte jedoch etwas wie `grid` oder `flex` sein, in welchem Fall die direkten Kinder als Gitter- oder Flex-Elemente angezeigt werden. In einem solchen Fall wird das Element als Schaffung eines Gitter- oder Flex-[Formatierungskontexts](/de/docs/Web/CSS/Guides/Display/Formatting_contexts) beschrieben. In vielerlei Hinsicht ist dies einem Block-Formatierungskontext ähnlich, jedoch verhalten sich die Kinder als Flex- oder Grid-Elemente anstatt als Elemente im normalen Fluss.

Die Wechselwirkungen zwischen Block-Level- und Inline-Level-Kästchen werden in der {{cssxref("display")}}-Eigenschaftsreferenz beschrieben.

Zusätzlich erklären die Referenzen für spezifische Werte von display, wie diese Formatierungskontexte in Bezug auf das Box-Layout funktionieren.

- [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul
- [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul
- [CSS Multi-Column Layout](/de/docs/Web/CSS/Guides/Multicol_layout)-Modul
- [CSS Tabelle](/de/docs/Web/CSS/Guides/Table)-Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists)-Modul

### Unabhängige Formatierungskontexte

Elemente nehmen entweder am Formatierungskontext ihres enthaltenden Blocks teil oder schaffen einen unabhängigen Formatierungskontext. Ein Gittercontainer beispielsweise schafft einen neuen **Gitter-Formatierungskontext** für seine Kinder.

**Unabhängige Formatierungskontexte** enthalten Floats, und Ränder kollabieren nicht über die Grenzen von Formatierungskontexten hinweg. Daher kann ein neuer Block-Formatierungskontext sicherstellen, dass Floats und Ränder innerhalb eines Kästchens bleiben. Dafür fügen Sie `display: flow-root` zu dem Kästchen hinzu, bei welchem Sie einen neuen [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) schaffen möchten.

Das folgende Beispiel zeigt den Effekt von `display: flow-root`. Das Kästchen mit dem schwarzen Hintergrund scheint sich um das gefloatete Element und den Text zu wickeln. Wenn Sie `display: flow-root` entfernen, wird das gefloatete Element unten aus dem Kästchen hervorstechen, da es nicht mehr enthalten ist.

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

### Blockkästchen

In Spezifikationen werden Blockkästchen, Block-Level-Kästchen und Block-Container alle an bestimmten Stellen als **Blockkästchen** bezeichnet. Diese Dinge sind etwas unterschiedlich und der Begriff Blockkästchen sollte nur verwendet werden, wenn keine Mehrdeutigkeit besteht.

#### Block-Container

Ein **Block-Container** enthält entweder nur Inline-Level-Kästchen, die an einem Inline-Formatierungskontext teilnehmen, oder nur Block-Level-Kästchen, die an einem Block-Formatierungskontext teilnehmen. Aus diesem Grund sehen wir das oben beschriebene Verhalten, bei dem anonyme Kästchen eingeführt werden, um sicherzustellen, dass alle Elemente an einem Block oder Inline-Formatierungskontext teilnehmen können. Ein Element ist nur dann ein Block-Container, wenn es Block-Level- oder Inline-Level-Kästchen enthält.

#### Inline-Level- und Block-Level-Kästchen

Dies sind die Kästchen, die innerhalb des Block-Containers enthalten sind und die an Inline- bzw. Block-Layout teilnehmen.

#### Blockkästchen

Ein Blockkästchen ist ein Block-Level-Kästchen, das auch ein Block-Container ist. Wie in CSS `display` beschrieben, kann ein Kästchen ein Block-Level-Kästchen sein, aber nicht auch ein Block-Container (es könnte zum Beispiel ein Flex- oder Grid-Container sein).

## Siehe auch

- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Block-Formatierungskontext](/de/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
- {{Glossary("Layout_mode", "Layout-Modi")}}
- [Rand-Kollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
- [VisualViewport](/de/docs/Web/API/VisualViewport)-Schnittstelle
- {{Glossary("Scroll_container", "Scroll-Container")}}
