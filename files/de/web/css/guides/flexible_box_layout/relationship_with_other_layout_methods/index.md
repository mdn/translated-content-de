---
title: Beziehung von Flexbox zu anderen Layout-Methoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 08c6d21d1e741aa3d96296edaa4964ebfcdbaded
---

In diesem Artikel werden wir untersuchen, wie Flexbox in die anderen CSS-Module passt. Wir werden herausfinden, auf welche Spezifikationen Sie ebenfalls achten müssen, wenn Sie Flexbox lernen möchten, und erfahren, warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Alignment-Modul

Viele Menschen befassen sich erstmals mit Flexbox, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen [flexiblen Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die für andere Layout-Methoden gemeinsam sind, sind im [CSS-Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment)-Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Abstände und Rinnen in allen Layout-Systemen funktionieren — nicht nur in Flexbox. Wenn ein Merkmal in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Alignment-Modul das flexible Box-Layout-Modul übertrifft.

## Schreibmodi

Im Artikel [Grundlagen von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) wird darauf hingewiesen, dass Flexbox **schreibmodusbewusst** ist. Schreibmodi werden ausführlich im [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes)-Modul beschrieben, das beschreibt, wie CSS die verschiedenen international existierenden Schreibmodi unterstützt. Wir müssen uns bewusst sein, wie sich diese auf unsere Flex-Layouts auswirken, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet sind. Das Verständnis von **Block**- und **Inline**-Richtungen ist der Schlüssel zu neuen Layout-Methoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments aus Gründen ändern könnten, die über das Veröffentlichen von Inhalten in einer Sprache hinausgehen, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodi-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, und vertikal, von oben nach unten geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Schreibmodi-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet sind, um die Richtung anzupassen, in der Blöcke angeordnet werden, wenn Inhalte in diesem speziellen Schreibmodus formatiert sind. Sie können das Live-Beispiel unten in diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

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

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden würden, um ein gesamtes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)- und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)-Attribut dem {{htmlelement("html")}}-Element hinzugefügt wird, um die Dokumentsprache und die Standardtextausrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden entworfen, in der Annahme, dass Inhalte mit dem standardmäßigen Block-Layout-System ausgelegt sind, und gelten nicht im Kontext eines Flex-Layouts. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Aspekten wie jeder andere Block-Container, der einen enthaltenen Block bildet. Floats werden nicht eindringen, und die Ränder der Container werden nicht kollabieren.

Bezüglich der Flex-Elemente, wenn ein Element gefloatet oder gecleart wurde und dann zu einem Flex-Element wird, weil das übergeordnete Element auf `display: flex` gesetzt ist, wird das Floaten und Clearing nicht mehr stattfinden, und das Element wird nicht wie Floats aus dem Normalfluss genommen. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie bei `inline-block` oder Tabellenlayout für die Ausrichtung, wird dies das Element nicht mehr beeinflussen, und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten Live-Beispiel wurden die Kind-Elemente gefloatet, und dann wurde ihr Container auf `display: flex` gesetzt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element kollabiert, da wir keine Clearings angewendet haben. Dies zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an, und das Kollabieren passiert nicht. Dies liegt daran, dass die Elemente keinen Float mehr haben, da sie in Flex-Elemente umgewandelt wurden.

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

[CSS-Rasterlayout](/de/docs/Web/CSS/Guides/Grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Bei abweichenden Eigenschaften, wenn ein Flex-Element zu einem Rasterelement wird, werden alle `flex`-Werte, die den Kind-Elementen zugewiesen sind, wie `flex-end`, ignoriert. Wie oben erwähnt, übertreffen Werte, die im Box-Alignment-Modul definiert sind, die über beide Layout-Methoden hinweg funktionieren, diejenigen, die nur in Flexbox definiert sind.

### Flex und Raster — was ist der Unterschied?

Eine häufig gestellte Frage ist, was der Unterschied zwischen Flexbox und CSS-Rasterlayout ist — warum haben wir zwei Spezifikationen, die manchmal scheinbar das Gleiche tun?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine Eindimensionale Layout-Methode, während das Rasterlayout eine Zweidimensionale Layout-Methode ist. Das folgende Beispiel zeigt ein Flex-Layout. Wie im Artikel [Grundlagen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) beschrieben, können Flex-Elemente so eingestellt werden, dass sie umbrochen werden können, aber sobald sie das tun, verhält sich jede Zeile, als wäre sie ein eigener Flex-Container. Wenn der Platz verteilt wird, betrachtet Flexbox nicht die Platzierung von Elementen in anderen Zeilen und versucht nicht, Dinge miteinander auszurichten.

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

Wenn wir ein sehr ähnliches Layout mit einem Raster erstellen, können wir das Layout sowohl in Zeilen als auch in Spalten steuern.

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

Diese Beispiele weisen auf einen weiteren wesentlichen Unterschied zwischen diesen Layout-Methoden hin. Im Rasterlayout erfolgt die Mehrheit der Größenangaben auf dem Container, wobei Spuren eingerichtet und dann Elemente darin platziert werden. In Flexbox, obwohl Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Kontrolle über die Elementgrößen auf den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder die eine oder die andere Layout-Methode verwenden. Wenn Sie mit beiden vertraut sind, werden Sie feststellen, dass jede besser für bestimmte Layout-Bedürfnisse geeignet ist, und Sie werden am Ende beide Methoden in Ihrem CSS verwenden. Es gibt selten eine richtige oder falsche Antwort.

Als allgemeine Regel gilt: Wenn Sie Breiten auf Flex-Elemente setzen, um Elemente in einer Zeile eines umbrochenen Flex-Containers mit den darüber liegenden Elementen auszurichten, sollten Sie stattdessen ein zweidimensionales Rasterlayout wählen.

Es gibt keine festgelegten Regeln wie "Sie sollten Flexbox für kleine Komponenten und Rasterlayout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser in einer Dimension dargestellt werden. Probieren Sie es aus — Sie haben die Wahl zwischen Layout-Methoden, also nutzen Sie sie.

Weitere Vergleiche von Raster und Flexbox finden Sie im Artikel [Beziehung des Rasterlayouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods). Dieser Artikel beschreibt viele der Möglichkeiten, wie sich das Rasterlayout von Flex-Layout unterscheidet und zeigt einige der zusätzlichen Funktionen, die Sie beim Verwenden des Rasterlayouts erhalten, wie das Schichten von Elementen auf dem Raster. Dies kann Ihnen auch helfen zu entscheiden, welche Layout-Methode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen wie gewohnt Boxen. Im Hinblick auf die Box-Generierung und das Layout muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudo-Elemente im Dokumentenbaum ersetzt worden."

Dieser Wert von `display` steuert die Box-Generierung und ob das Element eine Box erzeugen soll, die wir stilisieren und auf der Seite sehen können, oder ob die Box, die es normalerweise erstellen würde, entfernt werden sollte und die Kind-Elemente im Wesentlichen nach oben verschoben werden sollen, um an dieser Layout-Methode teilzunehmen, von der das übergeordnete Element Teil gewesen wäre. Dies ist mit einem Beispiel leichter zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines hat zwei Elemente, die darin verschachtelt sind, die normalerweise nicht am Flex-Layout teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch Hinzufügen von `display: contents` zur Umrandung der verschachtelten Elemente können Sie sehen, dass das Element aus dem Layout verschwunden ist, sodass die beiden Unterkinder so ausgelegt werden können, als wären sie direkte Kinder des Flex-Containers. Sie können versuchen, die `display: contents`-Zeile zu entfernen, um es zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden auf keine andere Weise zu direkten Kindern. Wir haben einen Direktkind-Selektor verwendet, um den Hintergrund und die Ränder zu den Flex-Elementen hinzuzufügen; dieser wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente ausgelegt, erhalten jedoch nicht das andere Styling, da sie keine direkten Kinder sind.

Da die Box entfernt wird, können Sie sie nicht beispielsweise zum Hinzufügen einer Hintergrundfarbe hinter den verschachtelten Unterkindern verwenden. Wenn Sie in diesem Live-Beispiel `display: contents` entfernen, werden Sie feststellen, dass das direkte Kind, das wir entfernen, eine orange Hintergrundfarbe hat. Diese verschwindet auch, wenn die Box verschwindet.

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
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Zugänglichkeitsbaum (aber Nachkommende bleiben erhalten) und entfernen die Semantik dieser Elemente, während ihr Kind-Inhalt erhalten bleibt. Das bedeutet, dass das Element selbst möglicherweise nicht von Bildschirmlesegeräten angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/Reference/Properties/display#display_contents) und [`display: contents` considered harmful](https://ericwbailey.design/published/display-contents-considered-harmful/).
