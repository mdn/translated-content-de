---
title: Beziehung von Flexbox zu anderen Layoutmethoden
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

In diesem Artikel werfen wir einen Blick darauf, wie Flexbox mit allen anderen CSS-Modulen zusammenpasst. Wir werden herausfinden, auf welche Spezifikationen Sie ebenfalls achten müssen, wenn Sie Flexbox lernen möchten, und herausfinden, warum Flexbox von einigen anderen Modulen abweicht.

## Das Box-Ausrichtungsmodul

Viele Menschen schauen zuerst auf Flexbox, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen Modul für das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) definiert, aber die Eigenschaften und Werte, die für andere Layoutmethoden üblich sind, sind im [CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/CSS_box_alignment) definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Abstände und Rinnen in allen Layoutsystemen funktionieren – nicht nur in Flexbox. Wenn ein Feature in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Ausrichtungsmodul das Flex-Box-Layout-Modul ersetzt.

## Schriftmodi

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird darauf hingewiesen, dass Flexbox **schriftmodussensitiv** ist. Schriftmodi sind im [CSS-Schriftmodul](/de/docs/Web/CSS/CSS_writing_modes) vollständig beschrieben, welches darlegt, wie CSS die verschiedenen international existierenden Schriftmodi unterstützt. Wir müssen uns bewusst sein, wie sich das auf unsere Flex-Layouts auswirkt, da der Schriftmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet sind. Das Verständnis der **Block**- und **Inline**-Richtungen ist entscheidend für neue Layoutmethoden.

Es ist wichtig zu beachten, dass wir den Schriftmodus unseres Dokuments aus anderen Gründen ändern möchten, als Content in einer Sprache zu veröffentlichen, die einen anderen Schriftmodus verwendet. Das CSS-Schriftmodul definiert, wie Text horizontal, von links nach rechts und von rechts nach links sowie vertikal, von oben nach unten geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs genutzt werden.

### Die Schriftmodi

Die Schriftmodus-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet werden, um der Richtung zu entsprechen, in der Blöcke angeordnet sind, wenn Inhalte in diesem bestimmten Schriftmodus formatiert werden. Sie können das Live-Beispiel unten auf diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert:

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

```html live-sample___writing-modes
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___writing-modes
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("writing-modes")}}

`sideways-rl` und `sideways-lr` werden derzeit nur in Firefox unterstützt.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden würden, um ein gesamtes Dokument in einen anderen Schriftmodus zu ändern. Dies würde über HTML geschehen, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut zum {{htmlelement("html")}}-Element hinzugefügt werden, um die Dokumentsprache und die Standardtextausrichtung anzuzeigen. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layoutmethoden

Einige Eigenschaften wurden entworfen in der Annahme, dass Inhalte mit dem Standard-Block-Layout-System angeordnet sind und gelten nicht im Kontext von Flex-Layout. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Fällen wie jeder andere Block-Container, der einen enthaltenen Block erstellt. Floats werden nicht eindringen und die Ränder der Container werden nicht zusammenfallen.

In Bezug auf Flex-Elemente gilt, wenn ein Element gefloatet oder gelöscht wurde und dann ein Flex-Element wird, weil dem Elternteil `display: flex` zugewiesen wurde, wird das Floaten und Löschen nicht mehr stattfinden, und das Element wird nicht aus dem normalen Fluss genommen, wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie bei `inline-block` oder Tabellenlayout zur Ausrichtung, wird dies das Element nicht mehr beeinflussen und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten Live-Beispiel wurden die Kinder-Elemente gefloatet und ihrem Container wurde `display: flex` zugewiesen. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element zusammenbricht, da wir keine Löschung angewendet haben. Dies zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an und das Zusammenfallen tritt nicht auf. Das liegt daran, dass die Elemente kein Float mehr haben, da sie in Flex-Elemente umgewandelt wurden.

```html live-sample___floats
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___floats
.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  float: left;
}
```

{{EmbedLiveSample("floats")}}

## Flexbox und Grid-Layout

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen sich viele Eigenschaften und Werte. Bei divergierenden Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle `flex`-Werte, die den Kinder-Elementen zugewiesen sind, wie `flex-end`, ignoriert. Wie bereits erwähnt, überschreiben die im Box-Ausrichtungsmodul definierten Werte, die über beide Layoutmethoden hinweg funktionieren, die, die nur in Flexbox definiert sind.

### Flex und Grid — was ist der Unterschied?

Eine häufige Frage ist, was der Unterschied zwischen Flexbox und CSS-Grid-Layout ist — warum haben wir zwei Spezifikationen, die manchmal scheinbar dasselbe tun?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layoutmethode, während Grid-Layout eine zweidimensionale Layoutmethode ist. Das folgende Beispiel hat ein Flex-Layout. Wie im Artikel [Grundkonzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente erlaubt sein, sich zu umwickeln, aber sobald sie es tun, verhält sich jede Zeile, als ob sie ihr eigener Flex-Container wäre. Wenn der Platz verteilt wird, berücksichtigt Flexbox nicht die Platzierung der Elemente in anderen Zeilen und versucht nicht, Dinge miteinander auszurichten.

```html live-sample___flex-layout
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___flex-layout
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("flex-layout", "", "300px")}}

Wenn wir ein sehr ähnliches Layout mit Grid erstellen, können wir das Layout sowohl in Zeilen als auch in Spalten steuern.

```html live-sample___grid-layout
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
</div>
```

```css live-sample___grid-layout
.box {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-layout", "", "300px")}}

Diese Beispiele weisen auf einen weiteren wesentlichen Unterschied zwischen diesen Layoutmethoden hin. Im Grid-Layout machen Sie die Mehrheit der Größenangaben am Container, richten Tracks ein und platzieren dann Elemente darin. In Flexbox, während Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Kontrolle über die Größenanpassung der Elemente an den Elementen selbst vorgenommen werden.

In einigen Fällen könnten Sie entweder die eine oder die andere Layoutmethode verwenden. Wenn Sie in beiden sicherer werden, finden Sie heraus, dass jede für bestimmte Layoutbedürfnisse besser geeignet ist, und Sie werden beide Methoden in Ihrem CSS verwenden. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel gilt, wenn Sie Breiten auf Flex-Elemente setzen, um Elemente in einer Zeile eines gewickelten Flex-Containers mit den über ihnen liegenden Elementen auszurichten, sollten Sie stattdessen ein zweidimensionales Grid-Layout verwenden.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten verwenden und Grid-Layout für größere". Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit einem eindimensionalen Layout dargestellt werden. Probieren Sie es aus — Sie haben eine Auswahl an Layoutmethoden, nutzen Sie sie.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede zwischen Grid- und Flex-Layout und demonstriert einige der zusätzlichen Funktionen, die Sie beim Verwenden von Grid-Layout erhalten, wie das Schichten von Elementen auf dem Grid. Dies könnte Ihnen auch helfen zu entscheiden, welche Layoutmethode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Für die Zwecke der Boxenerzeugung und des Layouts muss das Element behandelt werden, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden wäre."

Dieser `display`-Wert steuert die Boxenerzeugung und ob das Element eine Box erzeugen soll, die wir auf der Seite stylen und sehen können, oder ob stattdessen die Box, die es normalerweise erstellen würde, entfernt werden soll und die Kind-Elemente im Wesentlichen nach oben verschoben werden sollen, um an dem Layoutverfahren teilzunehmen, zu dem das Elternteil gehört hätte. Dies ist mit einem Beispiel viel einfacher zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container mit drei Flex-Elementen. Eines hat zwei Elemente darin verschachtelt, die normalerweise nicht am Flex-Layout teilnehmen würden. Flex-Layout gilt nur für direkte Kinder eines Flex-Containers.

Indem Sie `display: contents` zum Wrapper um die verschachtelten Elemente hinzufügen, können Sie sehen, dass das Element aus dem Layout verschwunden ist, wodurch die beiden Unterkinder so angeordnet werden können, als ob sie direkte Kinder des Flex-Containers wären. Sie können versuchen, die `display: contents`-Zeile zu entfernen, um es zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise direkte Kinder. Wir haben einen direkten Kind-Selektor verwendet, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; es wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie dann nicht verwenden, um z. B. eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, werden Sie sehen, dass das direkte Kind, das wir entfernen, eine orangefarbene Hintergrundfarbe hat. Dies verschwindet auch, wenn die Box verschwindet.

```html live-sample___display-contents
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="nested">
    <div>Sub-item 1</div>
    <div>Sub-item 2</div>
  </div>
</div>
```

```css live-sample___display-contents
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: flex;
}

.nested {
  background-color: orange;
  display: contents;
}
```

{{EmbedLiveSample("display-contents")}}

> [!WARNING]
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheitsbaum (aber Nachkommen bleiben erhalten), wodurch die Semantik dieser Elemente entfernt wird, während ihr Kind-Content beibehalten wird. Dies bedeutet, dass das Element selbst möglicherweise nicht von Screenreadern angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [`display: contents` considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
