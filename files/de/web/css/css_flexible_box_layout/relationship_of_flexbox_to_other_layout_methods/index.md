---
title: Beziehung von Flexbox zu anderen Layoutmethoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Artikel werden wir uns ansehen, wie Flexbox in die anderen CSS-Module passt. Wir werden herausfinden, welche Spezifikationen Sie ebenfalls beachten müssen, wenn Sie Flexbox lernen möchten, und herausfinden, warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Ausrichtungsmodul

Viele Menschen schauen sich Flexbox zunächst an, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen entlang ihrer Kreuzachse und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich im eigenen [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul definiert, aber die Eigenschaften und Werte, die für andere Layoutmethoden gemeinsam sind, werden im [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Dieses Modul erklärt, wie Ausrichtung, Rechtfertigung, Lücken und Rinnen in allen Layoutsystemen funktionieren — nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, beachten Sie bitte, dass das Box-Ausrichtungsmodul das flexible Box-Layout-Modul ersetzt.

## Schreibmodi

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird darauf hingewiesen, dass Flexbox **schreibmodusbewusst** ist. Schreibmodi werden umfassend im [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul beschrieben, das beschreibt, wie CSS die verschiedenen international existierenden Schreibmodi unterstützt. Wir müssen darauf achten, wie sich dies auf unsere Flex-Layouts auswirken wird, da der Schreibmodus die Richtung ändert, in der Blocks in unserem Dokument angeordnet sind. Das Verständnis von **Block**- und **Inline**-Richtungen ist der Schlüssel zu neuen Layoutmethoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments aus anderen Gründen ändern möchten als nur zum Veröffentlichen von Inhalten in einer Sprache, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodi-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, sowie vertikal von oben nach unten geschrieben werden kann. Dies ist wichtig für Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Spezifikation der Schreibmodi definiert die folgenden Werte der {{cssxref("writing-mode")}} Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blocks auf der Seite angeordnet werden, um sie der Richtung anzupassen, die Blocks annehmen, wenn Inhalte in diesem speziellen Schreibmodus formatiert werden. Sie können das folgende Live-Beispiel auf diese Modi umstellen, um zu sehen, was mit dem Flex-Layout passiert.

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

Die `sideways-rl` und `sideways-lr` haben derzeit nur Unterstützung in Firefox.

Beachten Sie, dass Sie CSS und die `writing-mode`-Eigenschaft normalerweise nicht verwenden würden, um ein gesamtes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML gemacht werden, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und ein [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut zum {{htmlelement("html")}} Element hinzugefügt werden, um die Dokumentensprache und die Standardtextrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen ist.

## Flexbox und andere Layoutmethoden

Einige Eigenschaften wurden unter der Annahme entworfen, dass Inhalte mithilfe des standardmäßigen Block-Layout-Systems angeordnet sind und gelten nicht im Kontext eines Flex-Layouts. Ein Element, das auf `display: flex` gesetzt wird, verhält sich in den meisten Fällen wie jeder andere Block-Container, der einen enthaltenden Block bildet. Floats werden nicht eindringen, und die Margen der Container werden nicht kollabieren.

In Bezug auf Flex-Elemente gilt, wenn ein Element gefloatet oder gelöscht wurde und dann aufgrund des Elternteils, der `display: flex` angewendet hat, zu einem Flex-Element wird, passiert das Floaten und Löschen nicht mehr, und das Element wird nicht aus dem normalen Fluss herausgenommen, wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}} Eigenschaft verwendet haben, wie sie bei `inline-block` oder Tabellenlayouts zur Ausrichtung verwendet wird, beeinflusst dies das Element nicht mehr und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

In diesem nächsten Live-Beispiel wurden die Kindelemente gefloatet, und dann wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element kollabiert, da wir keine Bereinigung angewendet haben. Dies zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an, und das Kollabieren tritt nicht mehr auf. Dies liegt daran, dass die Elemente nicht mehr gefloatet sind, da sie in Flex-Elemente umgewandelt wurden.

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

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Für abweichende Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle `flex`-Werte, die den Kindelementen zugewiesen wurden, wie `flex-end`, ignoriert. Wie oben erwähnt, überschreiben Werte, die im Box-Ausrichtungsmodul definiert sind und die in beiden Layoutmethoden funktionieren, diejenigen, die nur in Flexbox definiert sind.

### Flex und Grid — was ist der Unterschied?

Eine häufig gestellte Frage ist, was der Unterschied zwischen Flexbox und CSS-Grid-Layout ist — warum haben wir zwei Spezifikationen, die manchmal scheinbar dasselbe tun?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layoutmethode, während das Grid-Layout eine zweidimensionale Layoutmethode ist. Das folgende Beispiel hat ein Flex-Layout. Wie bereits im Artikel [Grundkonzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente erlaubt werden, zu umbrechen, aber sobald sie dies tun, verhält sich jede Zeile, als wäre sie ein eigener Flex-Container. Wenn der Raum verteilt wird, wird bei Flexbox nicht darauf geachtet, wie die Platzierung von Elementen in anderen Reihen aussieht, und es wird versucht, die Dinge in einer Reihe auszurichten.

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

Wenn wir ein sehr ähnliches Layout mit Grid erstellen, können wir das Layout sowohl in den Zeilen als auch in den Spalten steuern.

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

Diese Beispiele weisen auf einen weiteren wesentlichen Unterschied zwischen diesen Layoutmethoden hin. Im Grid-Layout erfolgt der Großteil der Größenangaben auf dem Container, indem Tracks eingerichtet und Elemente in diese eingefügt werden. In Flexbox, obwohl Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Kontrolle über die Größen der Elemente auf die Elemente selbst angewendet werden.

In einigen Fällen könnten Sie beide Layoutmethoden verwenden. Sobald Sie mit beiden vertraut sind, werden Sie feststellen, dass jede besser für bestimmte Layoutbedürfnisse geeignet ist, und Sie werden beide Methoden in Ihrem CSS verwenden. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel gilt, wenn Sie Breiten für Flex-Elemente festlegen, um Elemente in einer Reihe eines umgebrochenen Flex-Containers mit den darüber liegenden Elementen auszurichten, sollten Sie stattdessen ein zweidimensionales Grid-Layout wählen.

Es gibt keine festgelegten Regeln wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser in einer Dimension dargestellt werden. Probieren Sie es aus — Sie haben die Wahl der Layoutmethoden, also nutzen Sie sie.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung von Grid-Layout zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede zwischen Grid-Layout und Flex-Layout und demonstriert einige der zusätzlichen Funktionen, die Sie beim Verwenden von Grid-Layout erhalten, wie das Schichten von Elementen auf dem Grid. Dies kann Ihnen auch bei der Entscheidung helfen, welche Layoutmethode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents` Wert der {{cssxref("display")}} Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudoelemente generieren weiterhin Boxen wie gewohnt. Für den Zweck der Boxgenerierung und des Layouts muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudoelemente im Dokumentenbaum ersetzt worden."

Dieser Wert von `display` steuert die Box-Generierung und ob das Element eine Box generieren sollte, die wir stilisieren und auf der Seite sehen können, oder ob stattdessen die Box, die es normalerweise erstellen würde, entfernt werden sollte und die Kinderelemente im Wesentlichen aufsteigen, um an welcher Layoutmethode auch immer der Elternteil beteiligt gewesen wäre. Dies ist viel einfacher zu sehen, wenn man sich ein Beispiel ansieht.

Im nächsten Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines hat zwei Elemente in sich verschachtelt, die in der Regel nicht an Flex-Layout teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch das Hinzufügen von `display: contents` zum Wrapper um die verschachtelten Elemente können Sie sehen, dass das Element aus dem Layout verschwunden ist und es den beiden Unterkindern ermöglicht, wie direkte Kinder des Flex-Containers behandelt zu werden. Sie können versuchen, die `display: contents` Zeile zu entfernen, um es zurückzusetzen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden auf keine andere Weise zu direkten Kindern. Wir haben einen direkten Kinderselektor verwendet, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; dies wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie nicht verwenden, um beispielsweise eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Entfernen Sie `display: contents` in diesem Live-Beispiel, und Sie werden sehen, dass das direkte Kind, das wir entfernen, eine orangefarbene Hintergrundfarbe hat. Diese verschwindet ebenfalls, wenn die Box verschwindet.

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
> Einige Browser entfernen einige Elemente mit `display: contents` fälschlicherweise aus dem Accessibility-Baum (aber Nachfahren bleiben bestehen), wodurch die Semantik dieser Elemente entfernt wird, während ihr Inhalt erhalten bleibt. Dies bedeutet, dass das Element selbst möglicherweise nicht von Screenreadern angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [`display: contents` considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
