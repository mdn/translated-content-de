---
title: Beziehung von Flexbox zu anderen Layoutmethoden
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

In diesem Artikel werden wir uns anschauen, wie Flexbox in das Gesamtbild der CSS-Module passt. Wir werden herausfinden, welche Spezifikationen Sie ebenfalls beachten müssen, wenn Sie Flexbox lernen möchten und warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Ausrichtungsmodul

Viele Menschen schauen sich Flexbox zuerst an, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten wollen. Flexbox bietet Zugang zu Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Justierung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen [Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die für andere Layoutmethoden gemeinsam sind, werden im [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Justierung, Abstände und Rinnen in allen Layoutsystemen funktionieren — nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Ausrichtungsmodul das Flexible Box-Layout-Modul ersetzt.

## Schreibmodi

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird darauf hingewiesen, dass Flexbox **schreibmodus-bewusst** ist. Schreibmodi sind ausführlich im [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)-Modul beschrieben, welches detailliert, wie CSS die verschiedenen Schreibmodi unterstützt, die international existieren. Es ist wichtig zu verstehen, wie sich dadurch unsere Flex-Layouts auswirken, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet werden. Das Verständnis der **Block**- und **Inline**-Richtungen ist entscheidend für neue Layoutmethoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments möglicherweise aus anderen Gründen ändern möchten als nur zur Veröffentlichung von Inhalten in einer Sprache, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodi-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, und vertikal, von oben nach unten, geschrieben werden kann. Dies ist wichtig für Internationalisierung und Übersetzungen, kann aber auch für kreative Designs genutzt werden.

### Die Schreibmodi

Die Schreibmodus-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet werden, um die Richtung anzupassen, wenn der Inhalt in diesem bestimmten Schreibmodus formatiert wird. Sie können das folgende Live-Beispiel auf diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

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

Die Werte `sideways-rl` und `sideways-lr` werden derzeit nur in Firefox unterstützt.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden würden, um ein gesamtes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Attribut zum {{htmlelement("html")}}-Element hinzugefügt wird, um die Dokumentsprache und die Standardtextrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, auch wenn CSS nicht geladen wird.

## Flexbox und andere Layoutmethoden

Einige Eigenschaften wurden unter der Annahme entworfen, dass der Inhalt mit dem Standardblock-Layout-System angeordnet wird, und gelten nicht im Kontext des Flex-Layouts. Ein zu `display: flex` gesetztes Element verhält sich in den meisten Fällen wie jeder andere block-level Container, der einen Umgebungsblock erstellt. Float-Elemente werden nicht eingreifen und die Ränder der Container werden nicht kollabieren.

Bezüglich der Flex-Elemente, wenn ein Element gefloatet oder gecleared war und dann zu einem Flex-Element wird, da das übergeordnete Element `display: flex` angewendet bekommt, wird das Floaten und Clearen nicht mehr erfolgen und das Element wird nicht aus dem normalen Fluss herausgenommen, wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie bei `inline-block` oder Tabellenlayout für die Ausrichtung, wird dies das Element nicht mehr beeinflussen und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten Live-Beispiel wurden die Kindelemente gefloatet und dann ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element kollabiert, da wir keine Clearing-Anweisung angewendet haben. Dies zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an und das Kollabieren passiert nicht. Das liegt daran, dass die Elemente keinen Float mehr haben, da sie in Flex-Elemente umgewandelt wurden.

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

## Flexbox und Rasterlayout

[CSS-Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Bei abweichenden Eigenschaften, wenn ein Flex-Element zu einem Rasterelement wird, werden alle den Kindelementen zugewiesenen `flex`-Werte, wie `flex-end`, ignoriert. Wie oben erwähnt, überschreiben Werte, die im Box-Ausrichtungsmodul definiert sind und in beiden Layoutmethoden funktionieren, diejenigen, die nur in Flexbox definiert sind.

### Flex und Raster — was ist der Unterschied?

Oft wird gefragt, was der Unterschied zwischen Flexbox und CSS-Rasterlayout ist — warum haben wir zwei Spezifikationen, die manchmal ähnliche Dinge zu tun scheinen?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine ein-dimensionale Layoutmethode, während das Rasterlayout eine zwei-dimensionale Layoutmethode ist. Das unten stehende Beispiel hat ein Flex-Layout. Wie bereits im Artikel [Grundkonzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente so gestaltet werden, dass sie umbrechen, aber sobald sie dies tun, verhält sich jede Zeile, als ob sie einen eigenen Flex-Container hätte. Wenn der Platz verteilt wird, berücksichtigt Flexbox nicht die Platzierung der Elemente in anderen Zeilen und versucht, Dinge miteinander abzustimmen.

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

Wenn wir ein sehr ähnliches Layout mit Raster erstellen, können wir das Layout in Zeilen und Spalten steuern.

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

Diese Beispiele weisen auf einen weiteren entscheidenden Unterschied zwischen diesen Layoutmethoden hin. Im Rasterlayout erfolgt der Großteil der Größenangabe im Container, indem Spuren eingerichtet werden und dann Elemente in diese platziert werden. In Flexbox, obwohl Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Kontrolle über die Elementgröße an den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder die eine oder die andere Layoutmethode verwenden. Je sicherer Sie mit beiden sind, desto mehr werden Sie feststellen, dass jede besser für spezielle Layoutanforderungen geeignet ist, und Sie werden schließlich beide Methoden in Ihrem CSS verwenden. Es gibt selten eine eindeutige richtige oder falsche Antwort.

Als allgemeine Regel gilt: Wenn Sie Breiten auf Flex-Elementen einstellen, um Elemente in einer Zeile eines umgebrochenen Flex-Containers mit den darüber liegenden Elementen zu koordinieren, sollten Sie stattdessen ein zwei-dimensionales Rasterlayout verwenden.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten und Rasterlayout für größere verwenden." Eine kleine Komponente kann zwei-dimensional sein, und ein großes Layout kann besser mit einem ein-dimensionalen Layout dargestellt werden. Probieren Sie Dinge aus — Sie haben eine Wahl an Layoutmethoden, also nutzen Sie sie.

Für weitere Vergleiche von Raster und Flexbox siehe den Artikel [Beziehung des Rasterlayouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede, die das Rasterlayout vom Flex-Layout unterscheiden, und zeigt einige der zusätzlichen Funktionen, die Sie beim Verwenden des Rasterlayouts erhalten, wie das Überlagern von Elementen auf dem Raster. Dies kann Ihnen auch helfen zu entscheiden, welche Layoutmethode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen weiterhin Boxen wie gewohnt. Für die Zwecke der Box-Erzeugung und des Layouts muss das Element behandelt werden, als wäre es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden."

Dieser Wert von `display` steuert die Box-Erzeugung und ob das Element eine Box erzeugen soll, die wir auf der Seite gestalten und sehen können, oder ob stattdessen die Box, die es normalerweise erzeugen würde, entfernt werden soll und die Kind-Elemente im Wesentlichen nach oben verschoben werden, um an welchem Layoutverfahren auch immer der Elternteil beteiligt gewesen wäre, teilzunehmen. Dies ist viel einfacher zu verstehen anhand eines Beispiels.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines hat zwei verschachtelte Elemente in sich, die normalerweise nicht am Flex-Layout teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch das Hinzufügen von `display: contents` zum Umschlag um die verschachtelten Elemente können Sie sehen, dass das Element aus dem Layout verschwunden ist und die beiden Unterkinder so angeordnet werden, als wären sie direkte Kinder des Flex-Containers. Sie können versuchen, die Zeile mit `display: contents` zu entfernen, um sie zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise zu direkten Kindern. Wir haben einen direkten Kind-Selektor verwendet, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; es wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie nicht verwenden, um zum Beispiel eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, sehen Sie, dass das direkte Kind, das wir entfernen, eine orange Hintergrundfarbe hat. Dies verschwindet ebenfalls, wenn die Box verschwindet.

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
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheitsbaum (aber Nachfahren bleiben bestehen), indem sie die Semantik dieser Elemente entfernen, während ihr Kinderinhalt beibehalten wird. Das bedeutet, dass das Element selbst von Bildschirmlesegeräten möglicherweise nicht angesagt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [display: contents considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
