---
title: Beziehung von Flexbox zu anderen Layoutmethoden
short-title: Flexbox und andere Layoutmethoden
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Artikel betrachten wir, wie sich Flexbox in die anderen CSS-Module einfügt. Wir werden herausfinden, welche Spezifikationen Sie ebenfalls beachten müssen, wenn Sie Flexbox lernen möchten, und erfahren, warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Alignment-Modul

Viele Menschen beschäftigen sich erstmals mit Flexbox, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Justierung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in einem eigenen [flexible box layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die für andere Layoutmethoden gemeinsam sind, werden im [CSS box alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Modul definiert. Dieses Modul erläutert, wie Ausrichtung, Justierung, Abstände und Rinnen in allen Layoutsystemen funktionieren — nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Alignment-Modul das Flexible Box Layout-Modul ersetzt.

## Schreibrichtungen

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) wird darauf hingewiesen, dass Flexbox **schreibrichtungsbewusst** ist. Schreibmodi sind im Modul [CSS writing modes](/de/docs/Web/CSS/Guides/Writing_modes) vollständig beschrieben, das darlegt, wie CSS die verschiedenen Schreibmodi unterstützt, die international existieren. Wir müssen uns bewusst sein, wie sich dies auf unsere Flex-Layouts auswirkt, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet werden. Das Verständnis der **block** und **inline** Richtungen ist entscheidend für neue Layoutmethoden.

Es gilt zu beachten, dass wir den Schreibmodus unseres Dokuments aus anderen Gründen ändern möchten als nur wegen der Veröffentlichung von Inhalten in einer Sprache, die einen anderen Schreibmodus verwendet. Das CSS writing modes Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, und vertikal, von oben nach unten geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Schreibmodi-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet werden, um der Richtung zu entsprechen, die Blöcke einnehmen, wenn Inhalte in diesem speziellen Schreibmodus formatiert werden. Sie können das Live-Beispiel unten in diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

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

Die Modi `sideways-rl` und `sideways-lr` werden derzeit nur in Firefox unterstützt.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden würden, um ein gesamtes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut zu dem {{htmlelement("html")}}-Element hinzugefügt wird, um die Dokumentsprache und die Standardtextausrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt würde, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layoutmethoden

Einige Eigenschaften wurden unter der Annahme entwickelt, dass Inhalte mit dem Standard-Blocklayoutsystem angelegt werden, und gelten nicht im Kontext eines Flex-Layouts. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Aspekten wie jeder andere Block-Level-Container, der einen enthaltenden Block erstellt. Floats werden nicht eindringen, und die Ränder der Container werden nicht kollabieren.

In Bezug auf Flex-Elemente gilt: Wenn ein Element gefloatet oder gecleart wurde und dann aufgrund des übergeordneten Elements, das `display: flex` angewendet hat, zu einem Flex-Element wird, werden das Floating und Clearing nicht mehr ausgeführt und das Element wird nicht aus dem normalen Fluss herausgenommen, wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie sie bei `inline-block` oder Tabellen-Layout für die Ausrichtung verwendet wird, wird dies das Element nicht mehr beeinflussen, und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

In diesem nächsten Live-Beispiel wurden die Kindelemente gefloatet, und dann wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element kollabiert, da wir keine Clearing angewendet haben. Dies zeigt, dass der Float geschieht. Wenden Sie `display: flex` erneut an, und das Kollabieren passiert nicht. Dies liegt daran, dass die Elemente nicht mehr gefloatet sind, da sie in Flex-Elemente umgewandelt wurden.

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

[CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Für abweichende Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle `flex`-Werte, die den Kindelementen zugewiesen sind, wie `flex-end`, ignoriert. Wie bereits erwähnt, überschreiben Werte, die im Box-Alignment-Modul definiert sind und die sowohl für das Layoutsystem als auch für die Methode funktionieren, die im Box-Alignment-Modul definiert sind, die, die nur in Flexbox definiert sind.

### Flex und Grid — wo liegt der Unterschied?

Eine häufig gestellte Frage ist, was der Unterschied zwischen Flexbox und CSS-Grid-Layout ist – warum haben wir zwei Spezifikationen, die manchmal dasselbe zu tun scheinen?

Die einfachste Antwort auf diese Frage wird in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layoutmethode, während das Grid-Layout eine zweidimensionale Layoutmethode ist. Das nachstehende Beispiel zeigt ein Flex-Layout. Wie im Artikel zu den [Grundkonzepten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) beschrieben, können Flex-Elemente zum Umbruch zugelassen werden, aber sobald sie das tun, verhält sich jede Zeile, als wäre sie ein eigener Flex-Container. Wenn der Platz verteilt wird, berücksichtigt Flexbox nicht die Platzierung von Elementen in anderen Zeilen und versucht nicht, Dinge miteinander auszurichten.

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

Wenn wir ein sehr ähnliches Layout mit Grid erstellen, können wir das Layout in beiden Reihen und Spalten kontrollieren.

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

Diese Beispiele zeigen einen weiteren wesentlichen Unterschied zwischen diesen Layoutmethoden. Im Grid-Layout legen Sie die meisten Größenangaben am Container fest, indem Sie Tracks einrichten und dann Elemente in diese setzen. Bei Flexbox erstellen Sie zwar einen Flex-Container und legen die Richtung auf dieser Ebene fest, aber alle Steuerungsmöglichkeiten für die Größenanpassung von Elementen müssen an den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder die eine oder die andere Layoutmethode verwenden. Wenn Sie mit beiden vertraut sind, werden Sie feststellen, dass jede besser für spezifische Layoutbedürfnisse geeignet ist, und Sie werden am Ende beide Methoden in Ihrem CSS verwenden. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel gilt: Wenn Sie Breiten auf Flex-Elementen festlegen, um Elemente in einer Reihe eines umschlossenen Flex-Containers mit den darüber liegenden Elementen auszurichten, sollten Sie stattdessen ein zweidimensionales Grid-Layout verwenden.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden". Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit einem eindimensionalen Layout dargestellt werden. Probieren Sie Dinge aus — Sie haben die Wahl zwischen verschiedenen Layoutmethoden, also nutzen Sie sie.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede, wie sich das Grid-Layout vom Flex-Layout unterscheidet, und demonstriert einige der zusätzlichen Funktionen, die Sie beim Verwenden des Grid-Layouts erhalten, wie das Überlagern von Elementen auf dem Grid. Dies kann Ihnen auch bei der Entscheidung helfen, welche Layoutmethode Sie verwenden möchten.

## Flexbox und display: contents

Der Wert `contents` der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudoelemente erzeugen weiterhin Boxen wie gewohnt. Für die Zwecke der Boxenerzeugung und -layout muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudoelemente im Dokumentenbaum ersetzt worden."

Dieser Wert von `display` steuert die Boxenerzeugung und ob das Element eine Box erzeugen soll, die wir auf der Seite gestalten und sehen können, oder ob stattdessen die Box, die es normalerweise erzeugen würde, entfernt werden soll und die Kindelemente im Wesentlichen verschoben werden, um Teil der Layoutmethode zu sein, an der das übergeordnete Element beteiligt gewesen wäre. Dies ist viel einfacher mit einem Beispiel zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines davon hat zwei Elemente, die in ihm verschachtelt sind, die normalerweise nicht an der Flex-Layoutmethode teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch Hinzufügen von `display: contents` zum Wrapper um die verschachtelten Elemente können Sie sehen, dass das Element aus dem Layout verschwunden ist und es den beiden Sub-Kindern ermöglicht, so angeordnet zu werden, als wären sie direkte Kinder des Flex-Containers. Sie können versuchen, die Zeile `display: contents` zu entfernen, um zu sehen, wie es zurückkehrt.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Sub-Kinder werden nicht auf andere Weise zu direkten Kindern. Wir haben einen direkten Kind-Selektor verwendet, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; es wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie dann nicht mehr verwenden, um beispielsweise eine Hintergrundfarbe hinter den verschachtelten Sub-Kindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, sehen Sie, dass das direkte Kind, das wir entfernen, eine orange Hintergrundfarbe hat. Diese verschwindet ebenfalls, wenn die Box verschwindet.

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
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheitsbaum (aber Nachkommen bleiben erhalten) und entfernen dabei deren Semantik, während deren Kinderinhalte erhalten bleiben. Dies bedeutet, dass das Element selbst von Screenreadern möglicherweise nicht angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/Reference/Properties/display#display_contents) und [‘display: contents’ considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
