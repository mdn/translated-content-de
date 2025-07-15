---
title: Beziehung von Flexbox zu anderen Layout-Methoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Artikel werden wir uns ansehen, wie Flexbox mit all den anderen CSS-Modulen zusammenpasst. Wir werden herausfinden, welche Spezifikationen Sie ebenfalls beachten müssen, wenn Sie Flexbox lernen möchten, und herausfinden, warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Ausrichtungsmodul

Viele Menschen sehen sich Flexbox das erste Mal an, wenn sie Flex-Elemente innerhalb eines Flex-Containers korrekt ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Rechtfertigung der Elemente auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen [flexiblen Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die für andere Layout-Methoden üblich sind, sind im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Lücken und Rinnen in allen Layout-Systemen funktionieren – nicht nur in Flexbox. Wenn ein Merkmal in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Ausrichtungsmodul das flexible Box-Layout-Modul ersetzt.

## Schreibmodi

Im Artikel [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird darauf hingewiesen, dass Flexbox **schreibmodussensibel** ist. Schreibmodi werden ausführlich im [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)-Modul beschrieben, das darlegt, wie CSS die verschiedenen international existierenden Schreibmodi unterstützt. Wir müssen uns bewusst sein, wie sich dies auf unsere Flex-Layouts auswirken wird, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument dargestellt werden. Das Verständnis von **Block**- und **Inline**-Richtungen ist entscheidend für neue Layout-Methoden.

Es lohnt sich zu beachten, dass wir den Schreibmodus unseres Dokuments aus anderen Gründen als dem Veröffentlichen von Inhalten in einer Sprache, die einen anderen Schreibmodus verwendet, ändern möchten. Das CSS-Schreibmodi-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, sowie vertikal, von oben nach unten geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs genutzt werden.

### Die Schreibmodi

Die Schreibmodi-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite dargestellt werden, um der Richtung zu entsprechen, in der Blöcke formatiert werden, wenn der Inhalt in diesem speziellen Schreibmodus formatiert wird. Sie können das Live-Beispiel unten ändern, um diese Modi zu sehen, um zu sehen, was mit dem Flex-Layout passiert.

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

Beachten Sie, dass Sie CSS und die `writing-mode`-Eigenschaft normalerweise nicht verwenden würden, um ein ganzes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und ein [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut zum {{htmlelement("html")}}-Element hinzugefügt wird, um die Dokumentsprache und die Standardtextausrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden entworfen, in der Annahme, dass Inhalt mit dem standardmäßigen Block-Layout-System dargestellt wird, und gelten nicht im Kontext eines Flex-Layouts. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Fällen wie jeder andere Block-Container, der einen enthaltenden Block erstellt. Floats werden nicht stören, und die Ränder der Container werden nicht kollabieren.

In Bezug auf Flex-Elemente, wenn ein Element gefloated oder gecleared war und dann aufgrund des Elternteils, der auf `display: flex` gesetzt ist, ein Flex-Element wird, wird das Floating und Clearing nicht mehr stattfinden, und das Element wird nicht aus dem normalen Fluss entfernt, wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie sie mit `inline-block` oder Tabellenlayout zur Ausrichtung verwendet wird, hat dies keine Auswirkungen mehr auf das Element und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten Live-Beispiel wurden die Kindelemente gefloatet, und dann wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element zusammenbricht, da wir keine Klärung angewendet haben. Das zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an und das Zusammenbrechen passiert nicht. Das liegt daran, dass die Elemente kein Float mehr angewendet haben, da sie in Flex-Elemente verwandelt wurden.

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

Das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Bei abweichenden Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle `flex`-Werte, die den Kindelementen zugewiesen sind, wie `flex-end`, ignoriert. Wie oben erwähnt, überschreiten Werte, die im Box-Ausrichtungsmodul definiert sind und sowohl mit Layout-Methoden als auch mit denen arbeiten, die nur in Flexbox definiert sind.

### Flex und Grid — was ist der Unterschied?

Eine häufige Frage ist, was der Unterschied zwischen Flexbox und CSS-Grid-Layout ist — warum haben wir zwei Spezifikationen, die manchmal scheinbar dasselbe tun?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layout-Methode, während Grid-Layout eine zweidimensionale Layout-Methode ist. Das Beispiel unten hat ein Flex-Layout. Wie bereits im [Grundlagenartikel](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente das Umbrechen erlauben, aber wenn sie es tun, verhält sich jede Zeile, als wäre sie ein Flex-Container für sich. Wenn der Raum verteilt wird, beachtet Flexbox nicht die Platzierung von Elementen in anderen Zeilen und versucht nicht, Dinge miteinander auszurichten.

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

Diese Beispiele weisen auf einen weiteren wesentlichen Unterschied zwischen diesen Layout-Methoden hin. Im Grid-Layout erfolgt die Mehrzahl der Größenangaben am Container, wobei Spuren eingerichtet und dann Elemente darin platziert werden. In Flexbox erstellen Sie zwar einen Flex-Container und legen die Richtung auf dieser Ebene fest, jegliche Steuerung über die Elementgrößen muss jedoch an den Elementen selbst erfolgen.

In einigen Fällen könnten Sie jede Layout-Methode verwenden. Mit zunehmendem Vertrauen in beide werden Sie feststellen, dass jede besser für spezifische Layout-Anforderungen geeignet ist, und Sie werden mit beiden Methoden in Ihrem CSS enden. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel gilt, wenn Sie Breiten für Flex-Elemente einstellen, um Elemente in einer Zeile eines umgebrochenen Flex-Containers mit den Elementen darüber auszurichten, sollten Sie stattdessen ein zweidimensionales Grid-Layout wählen.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit Layout in einer Dimension dargestellt werden. Probieren Sie Dinge aus — Sie haben eine Auswahl an Layout-Methoden, also nutzen Sie sie.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung von Grid-Layout zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede zwischen dem Grid-Layout und dem Flex-Layout und zeigt einige der zusätzlichen Funktionen, die Sie beim Gebrauch eines Grid-Layouts erhalten, wie das Schichten von Elementen auf dem Grid. Dies kann Ihnen auch helfen zu entscheiden, welche Layout-Methode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudoelemente erzeugen Boxen wie gewohnt. Für die Zwecke der Boxenerzeugung und des Layouts muss das Element behandelt werden, als ob es durch seine Kinder und Pseudoelemente im Dokumentenbaum ersetzt worden wäre."

Dieser `display`-Wert steuert die Boxenerzeugung und ob das Element eine Box erzeugen soll, die wir stylen und auf der Seite sehen können, oder ob die Box, die es normalerweise erstellt, entfernt werden und die Kindelemente im Wesentlichen nach oben verschoben werden sollen, um an dem Layout-Verfahren teilzunehmen, an dem das übergeordnete Element Teil gewesen wäre. Dies ist viel einfacher mit einem Beispiel zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines davon hat zwei darin verschachtelte Elemente, die normalerweise nicht am Flex-Layout teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Indem `display: contents` zum Wrapper um die verschachtelten Elemente hinzugefügt wird, können Sie sehen, dass das Element aus dem Layout verschwunden ist, sodass die beiden Unterkinder so wie direkte Kinder des Flex-Containers dargestellt werden können. Sie können versuchen, die Zeile `display: contents` zu entfernen, um sie zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise zu direkten Kindern. Wir haben einen direkten Kind-Selektor verwendet, um den flexiblen Elementen den Hintergrund und die Rahmen hinzuzufügen; dieser wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente dargestellt, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie dann nicht verwenden, um beispielsweise eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, werden Sie sehen, dass das direkte Kind, das wir entfernen, eine orangefarbene Hintergrundfarbe hat. Dies verschwindet ebenfalls, wenn die Box verschwindet.

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
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheitsbaum (aber Nachfolger bleiben), wodurch die Semantik dieser Elemente entfernt wird, während ihr Kindinhalt beibehalten wird. Dies bedeutet, dass das Element selbst möglicherweise nicht von Bildschirmlesegeräten angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [`display: contents` considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
