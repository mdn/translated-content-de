---
title: Verhältnis von Flexbox zu anderen Layout-Methoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

In diesem Artikel werden wir uns ansehen, wie Flexbox in all die anderen CSS-Module passt. Wir werden herausfinden, welche Spezifikationen Sie beachten müssen, wenn Sie Flexbox erlernen möchten, und warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Alignment-Modul

Viele Menschen beschäftigen sich zunächst mit Flexbox, wenn sie Flex-Elemente in einem Flex-Container richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich im eigenen [flexiblen Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die für andere Layout-Methoden üblich sind, werden im [CSS Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Lücken und Rinnen in allen Layout-Systemen funktionieren — nicht nur bei Flexbox. Wenn ein Feature in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Alignment-Modul das flexible Box-Layout-Modul übertrifft.

## Schreibmodi

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) wird darauf hingewiesen, dass Flexbox **schreibmodusbewusst** ist. Schreibmodi werden vollständig im [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes)-Modul detailliert beschrieben, das beschreibt, wie CSS die verschiedenen Schreibmodi unterstützt, die international existieren. Wir müssen uns bewusst sein, wie sich dies auf unsere Flex-Layouts auswirken wird, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet werden. Das Verständnis von **Block**- und **Inline**-Richtungen ist entscheidend für neue Layout-Methoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments aus anderen Gründen als der Veröffentlichung von Inhalten in einer Sprache ändern möchten, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodi-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, und vertikal, von oben nach unten, geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Schreibmodi-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der die Blöcke auf der Seite angeordnet sind, um die Richtung anzupassen, in der Blöcke angeordnet sind, wenn Inhalte in diesem speziellen Schreibmodus formatiert werden. Sie können das untenstehende Live-Beispiel in diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

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

Beachten Sie, dass Sie CSS und die `writing-mode`-Eigenschaft normalerweise nicht verwenden würden, um ein gesamtes Dokument auf einen anderen Schreibmodus umzustellen. Dies würde über HTML geschehen, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut zum {{htmlelement("html")}}-Element hinzugefügt werden, um die Dokumentensprache und die Standardtextausrichtung anzugeben. Das würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden entwickelt, in der Annahme, dass Inhalte mit dem Standard-Block-Layout-System angeordnet werden und im Kontext des Flex-Layouts nicht anwendbar sind. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Hinsichten wie jedes andere block-level Container-Element, das einen enthalten Block festlegt. Floats werden nicht eindringen, und die Ränder der Container werden nicht zusammenfallen.

In Bezug auf Flex-Elemente, wenn ein Element gefloatet oder gecleart war und dann ein Flex-Element wird, weil der Elternteil `display: flex` angewendet hat, wird das Floaten und Clearen nicht mehr stattfinden und das Element wird nicht mehr aus dem normalen Fluss entfernt, wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie sie bei `inline-block` oder Table-Layout zur Ausrichtung verwendet wird, wird dies das Element nicht mehr beeinträchtigen und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

In diesem nächsten Live-Beispiel wurden die Kindelemente gefloatet, und dann wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box` Element kollabiert, da wir keine Clear-Anwendung haben. Das zeigt, dass das Floaten stattfindet. `display: flex` erneut anwenden und Das Kollabieren tritt nicht auf. Dies geschieht, weil die Elemente nicht mehr gefloatet sind, da sie in Flex-Elemente umgewandelt wurden.

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

[CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Für divergierende Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle `flex`-Werte, die den Kindelementen zugewiesen sind, wie `flex-end`, ignoriert. Wie oben erwähnt, übertreffen Wertdefinitionen im Box-Alignment-Modul, die in beiden Layout-Methoden funktionieren, diejenigen, die nur in Flexbox definiert sind.

### Flex und Grid – was ist der Unterschied?

Eine häufig gestellte Frage ist, was der Unterschied zwischen Flexbox und CSS Grid-Layout ist — warum haben wir zwei Spezifikationen, die manchmal dieselben Dinge zu tun scheinen?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layout-Methode, während Grid-Layout eine zweidimensionale Layout-Methode ist. Das folgende Beispiel hat ein Flex-Layout. Wie bereits im [Grundkonzepte](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)-Artikel beschrieben, können Flex-Elemente zur Umbrüche zulassen, aber sobald sie es tun, verhält sich jede Zeile als ob sie ein eigener Flex-Container wäre. Wenn der Raum verteilt wird, schaut Flexbox nicht auf die Platzierung der Gegenstände in anderen Zeilen und versucht, Dinge mit ihnen in Einklang zu bringen.

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

Diese Beispiele weisen auf einen weiteren wichtigen Unterschied zwischen diesen Layout-Methoden hin. Im Grid-Layout machen Sie den Großteil der Größenbestimmung auf dem Container, richten Tracks ein und platzieren dann Elemente darin. In Flexbox, während Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Steuerung über die Größenbestimmung von Elementen auf den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder Layout-Methode anwenden. Sobald Sie sich mit beiden vertraut machen, werden Sie feststellen, dass jede besser für spezifische Layout-Anforderungen geeignet ist, und Sie werden beide Methoden in Ihrem CSS haben. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel, wenn Sie Breiten auf Flex-Elemente festlegen, um zu erreichen, dass Elemente in einer Zeile eines umbrochenen Flex-Containers sich mit denen darüber aufreihen, sollten Sie stattdessen ein zweidimensionales Grid-Layout wählen.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit Layout in einer Dimension dargestellt werden. Probieren Sie Dinge aus — Sie haben eine Auswahl an Layout-Methoden, also nutzen Sie diese.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods). Dieser Artikel beschreibt viele der Möglichkeiten, wie sich das Grid-Layout vom Flex-Layout unterscheidet, und zeigt einige zusätzliche Funktionen, die Sie beim Verwenden des Grid-Layouts erhalten, wie das Überlagern von Elementen auf dem Grid. Dies kann Ihnen auch helfen zu entscheiden, welche Layout-Methode zu verwenden ist.

## Flexbox und display: contents

Der `contents` Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen Boxen wie gewohnt. Für die Zwecke der Box-Generierung und des Layouts muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden."

Dieser Wert von `display` steuert die Box-Generierung und ob das Element eine Box erzeugen sollte, die wir stylen und auf der Seite sehen können, oder ob stattdessen die Box, die es normalerweise erstellen würde, entfernt werden sollte und die Kindelemente im Wesentlichen in das Layout des Elternteils integriert werden sollten. Dies ist leichter zu verstehen mit einem Beispiel.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eins hat zwei eingekapselte Elemente, die normalerweise nicht am Flex-Layout teilnehmen würden. Das Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch das Hinzufügen von `display: contents` zu dem Wrapper um die verschachtelten Elemente können Sie sehen, dass das Element aus dem Layout verschwunden ist, sodass die beiden Unterkinder so angeordnet werden können, als ob sie direkte Kinder des Flex-Containers wären. Sie können versuchen, die `display: contents`-Zeile zu entfernen, um es zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise zu direkten Kindern. Wir verwendeten einen direkten Kind-Selektor, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; es wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie die anderen Stile nicht.

Da die Box entfernt wird, können Sie sie nicht verwenden, um zum Beispiel eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, werden Sie sehen, dass das direkte Kind, das wir entfernen, einen orangefarbenen Hintergrund hat. Dies verschwindet auch, wenn die Box verschwindet.

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
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheitsbaum (aber Nachkommen bleiben) und entfernen die Semantik dieser Elemente, während ihr Kinderinhalt erhalten bleibt. Dies bedeutet, dass das Element selbst möglicherweise nicht von Screenreadern angesagt wird. Siehe [`display: contents`](/de/docs/Web/CSS/Reference/Properties/display#display_contents) und [„display: contents“ gilt als schädlich](https://ericwbailey.design/published/display-contents-considered-harmful/).
