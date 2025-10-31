---
title: Beziehung von Flexbox zu anderen Layout-Methoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

In diesem Artikel werden wir uns ansehen, wie Flexbox in all die anderen CSS-Module passt. Wir werden herausfinden, welche Spezifikationen Sie ebenfalls beachten müssen, wenn Sie Flexbox lernen möchten, und warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Ausrichtungsmodul

Viele Personen befassen sich zuerst mit Flexbox, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querausgabe und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen [flexiblen Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die anderen Layout-Methoden gemeinsam sind, sind im [CSS-Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Abstände und Rinnen in allen Layout-Systemen funktionieren – nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Ausrichtungsmodul das flexible Box-Layout-Modul ersetzt.

## Schreibmodi

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird darauf hingewiesen, dass Flexbox **schreibmodusbewusst** ist. Schreibmodi werden ausführlich im [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)-Modul beschrieben, das erläutert, wie CSS die verschiedenen international vorhandenen Schreibmodi unterstützt. Wir müssen uns bewusst sein, wie sich dies auf unsere Flex-Layouts auswirkt, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet sind. Das Verständnis von **Block**- und **Inline**-Richtungen ist entscheidend für neue Layout-Methoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments aus Gründen ändern möchten, die nichts mit der Veröffentlichung von Inhalten in einer Sprache zu tun haben, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodi-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links sowie vertikal, von oben nach unten, geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktionalitäten können auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Schreibmodi-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet sind, um die Richtung anzupassen, in der Blöcke angeordnet sind, wenn Inhalt in diesem bestimmten Schreibmodus formatiert wird. Sie können das Live-Beispiel unten auf diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

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

Die `sideways-rl` und `sideways-lr` werden derzeit nur in Firefox unterstützt.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden, um ein gesamtes Dokument auf einen anderen Schreibmodus umzustellen. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut zum {{htmlelement("html")}}-Element hinzugefügt wird, um die Dokumentensprache und die Standardtextausrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden unter der Annahme entworfen, dass Inhalt mithilfe des Standard-Block-Layoutsystems angeordnet wird, und gelten nicht im Kontext des Flex-Layouts. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Fällen wie jeder andere block-level Container, der einen enthaltenen Block festlegt. Floats werden nicht eindringen, und die Ränder der Container werden nicht zusammenbrechen.

In Bezug auf Flex-Elemente: Wenn ein Element gefloatet oder gecleart wurde und dann zu einem Flex-Element wird, weil der übergeordnete Container `display: flex` angewendet hat, wird das Floaten und Clearen nicht mehr geschehen, und das Element wird nicht wie bei Floats aus dem normalen Fluss herausgenommen. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie sie bei `inline-block` oder Tabellensatz zur Ausrichtung verwendet wird, wird dies das Element nicht mehr beeinflussen und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

In diesem nächsten Live-Beispiel wurden die Kind-Elemente gefloatet, und dann wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element kollabiert, da wir keine Clearing angewendet haben. Dies zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an und das Kollabieren geschieht nicht. Das liegt daran, dass die Elemente nicht mehr gefloatet sind, da sie in Flex-Elemente umgewandelt wurden.

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

[CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Bei abweichenden Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle den Kindelementen zugewiesenen `flex`-Werte, wie `flex-end`, ignoriert. Wie oben erwähnt, ersetzen Werte, die im Box-Ausrichtungsmodul definiert sind, die über beide Layout-Methoden hinweg arbeiten, diejenigen, die nur in Flexbox definiert sind.

### Flex und Grid — was ist der Unterschied?

Eine häufig gestellte Frage ist, was der Unterschied zwischen Flexbox und CSS-Grid-Layout ist – warum haben wir zwei Spezifikationen, die manchmal dasselbe tun zu scheinen?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layout-Methode, während das Grid-Layout eine zweidimensionale Layout-Methode ist. Das folgende Beispiel hat ein Flex-Layout. Wie im Artikel [Grundkonzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente zum Umbrechen gebracht werden, aber sobald sie dies tun, verhält sich jede Zeile, als wäre es ein Flex-Container für sich. Wenn der Raum verteilt wird, betrachtet Flexbox nicht die Platzierung von Elementen in anderen Zeilen und versucht nicht, Dinge mit einander auszurichten.

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

Diese Beispiele weisen auf einen weiteren Hauptunterschied zwischen diesen Layout-Methoden hin. Im Grid-Layout werden die meisten Größenangaben am Container vorgenommen, indem Spuren eingerichtet werden und dann Elemente in sie platziert werden. In Flexbox, obwohl Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Kontrolle über die Größe von Elementen auf den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder Layout-Methode verwenden. Wenn Sie mit beiden vertraut werden, werden Sie feststellen, dass jede für bestimmte Layout-Bedürfnisse besser geeignet ist, und Sie werden beide Methoden in Ihrem CSS haben. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel gilt: Wenn Sie Breiten auf Flex-Elementen festlegen, um Elemente in einer Zeile eines umgebrochenen Flex-Containers mit den Elementen darüber auszurichten, sollten Sie stattdessen ein zweidimensionales Grid-Layout wählen.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit Layout in einer Dimension dargestellt werden. Probieren Sie Dinge aus - Sie haben eine Auswahl an Layout-Methoden, also nutzen Sie sie.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede zwischen Grid-Layout und Flex-Layout und zeigt einige der zusätzlichen Funktionalitäten, die Sie bei der Verwendung von Grid-Layout erhalten, wie das Schichten von Elementen auf dem Grid. Dies kann Ihnen auch bei der Entscheidung helfen, welche Layout-Methode zu verwenden ist.

## Flexbox und display: contents

Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudoelemente erzeugen nach wie vor Boxen wie normal. Für die Box-Generierung und das Layout muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudoelemente im Dokumentbaum ersetzt worden."

Dieser Wert von `display` steuert die Box-Generierung und ob das Element eine Box erzeugen soll, die wir auf der Seite stylen und sehen können, oder ob stattdessen die Box, die es normalerweise erzeugen würde, entfernt werden soll und die Kind-Elemente im Wesentlichen nach oben gezogen werden, um an der Layout-Methode teilzunehmen, die der Elternteil gewesen wäre. Dies ist viel einfacher zu verstehen mit einem Beispiel.

Im folgenden Live-Beispiel haben wir einen Flex-Container mit drei Flex-Elementen. Eines hat zwei Elemente darin verschachtelt, die normalerweise nicht an Flex-Layout teilnehmen würden. Das Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Indem wir `display: contents` auf das umschließende Element der verschachtelten Elemente anwenden, können Sie sehen, dass das Element aus dem Layout verschwunden ist und die beiden Unterkinder so angeordnet wurden, als wären sie direkte Kinder des Flex-Containers. Sie können versuchen, die `display: contents`-Zeile zu entfernen, um zurückzukehren.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise zu direkten Kindern. Wir haben einen direkten Kind-Selektor verwendet, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; es wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie dann nicht mehr verwenden, um z. B. eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, werden Sie sehen, dass das direkte Kind, das wir entfernen, einen orangenen Hintergrund hat. Dies verschwindet auch, wenn die Box verschwindet.

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
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheitsbaum (aber Nachkommen bleiben erhalten), wodurch die Semantik dieser Elemente entfernt wird, während ihr Kinderinhalt beibehalten wird. Dies bedeutet, dass das Element selbst möglicherweise nicht von Screenreadern angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/Reference/Properties/display#display_contents) und [`display: contents` considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
