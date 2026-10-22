---
title: Das Verhältnis von Flexbox zu anderen Layoutmethoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: b25798255cfb773885c94557b74179400ac7153d
---

In diesem Artikel sehen wir uns an, wie Flexbox mit den anderen CSS-Modulen zusammenhängt. Sie erfahren, welche Spezifikationen Sie ebenfalls beachten sollten, wenn Sie Flexbox lernen möchten, und warum sich Flexbox von einigen anderen Modulen unterscheidet.

## Das Modul für die Ausrichtung von Boxen

Viele beschäftigen sich zum ersten Mal mit Flexbox, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Eigenschaften, mit denen sich Elemente entlang ihrer Querachse ausrichten und entlang der Hauptachse verteilen lassen.

Flexbox wurde ursprünglich in einem eigenen Modul für das [Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert. Eigenschaften und Werte, die auch für andere Layoutmethoden gelten, sind jedoch im Modul für die [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) definiert. Dieses Modul beschreibt, wie Ausrichtung, Verteilung, Abstände und Zwischenräume in allen Layoutsystemen funktionieren – nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, hat das Modul für die Box-Ausrichtung Vorrang vor dem Modul für das Flexible-Box-Layout.

## Schreibmodi

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) wird darauf hingewiesen, dass Flexbox den **Schreibmodus berücksichtigt**. Schreibmodi werden im Modul [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) ausführlich beschrieben. Es erläutert, wie CSS die verschiedenen weltweit verwendeten Schreibrichtungen unterstützt. Wir müssen berücksichtigen, wie sich dies auf unsere Flex-Layouts auswirkt, da der Schreibmodus die Richtung ändert, in der Blöcke im Dokument angeordnet werden. Das Verständnis der **Block-** und **Inline-Richtung** ist für neue Layoutmethoden entscheidend.

Es ist erwähnenswert, dass wir den Schreibmodus eines Dokuments auch aus anderen Gründen ändern möchten als zur Veröffentlichung von Inhalten in einer Sprache mit einem anderen Schreibmodus. Das Modul für CSS-Schreibmodi definiert, wie Text horizontal von links nach rechts oder von rechts nach links sowie vertikal von oben nach unten geschrieben werden kann. Das ist für die Internationalisierung und Übersetzung wichtig, diese Möglichkeiten lassen sich aber auch für kreative Gestaltungen nutzen.

### Die Schreibmodi

Die Spezifikation für Schreibmodi definiert die folgenden Werte für die Eigenschaft {{cssxref("writing-mode")}}. Mit ihnen lässt sich die Richtung ändern, in der Blöcke auf der Seite angeordnet werden, sodass sie der Anordnung von Blöcken bei der Formatierung von Inhalten im jeweiligen Schreibmodus entspricht. Sie können das folgende interaktive Beispiel auf diese Modi umstellen, um zu sehen, wie sich das Flex-Layout verändert.

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

Normalerweise würden Sie nicht CSS und die Eigenschaft `writing-mode` verwenden, um ein ganzes Dokument auf einen anderen Schreibmodus umzustellen. Stattdessen geschieht dies in HTML, indem dem Element {{htmlelement("html")}} die Attribute [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) hinzugefügt werden, um die Dokumentsprache und die standardmäßige Textrichtung anzugeben. So wird das Dokument auch dann korrekt angezeigt, wenn CSS nicht geladen wird.

## Flexbox und andere Layoutmethoden

Einige Eigenschaften wurden unter der Annahme entworfen, dass Inhalte mit dem üblichen Blocklayout angeordnet werden. Sie gelten nicht im Kontext eines Flex-Layouts. Ein Element mit `display: flex` verhält sich in den meisten Punkten wie jeder andere Container auf Blockebene, der einen umschließenden Block bildet. Floats dringen nicht in ihn ein, und die Außenabstände der Container werden nicht zusammengelegt.

Wenn ein Element zuvor als Float positioniert wurde oder eine Float-Positionierung aufgehoben hat und durch `display: flex` auf dem Elternelement zu einem Flex-Element wird, greifen diese Verhaltensweisen nicht mehr. Das Element wird auch nicht wie ein Float aus dem normalen Dokumentfluss genommen. Falls Sie für die Ausrichtung die Eigenschaft {{cssxref("vertical-align")}} verwendet haben, wie es bei `inline-block` oder Tabellenlayouts üblich ist, wirkt sie sich nicht mehr auf das Element aus. Stattdessen können Sie die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten interaktiven Beispiel sind die Kindelemente als Floats positioniert; anschließend wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sehen Sie, dass das Element `.box` zusammenfällt, da die Float-Positionierung nicht aufgehoben wird. Daran erkennen Sie, dass die Float-Positionierung wirkt. Wenn Sie `display: flex` wieder hinzufügen, fällt der Container nicht mehr zusammen. Das liegt daran, dass die Elemente als Flex-Elemente keine Floats mehr sind.

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

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und Flexbox haben viele Eigenschaften und Werte gemeinsam. Bei Eigenschaften, die sich unterscheiden, gilt: Wenn ein Flex-Element zu einem Grid-Element wird, werden den Kindelementen zugewiesene `flex`-Werte wie `flex-end` ignoriert. Wie oben erwähnt, haben Werte aus dem Modul für die Box-Ausrichtung, die in beiden Layoutmethoden funktionieren, Vorrang vor Werten, die nur in Flexbox definiert sind.

### Flex und Grid – worin liegt der Unterschied?

Eine häufige Frage ist, worin sich Flexbox und CSS-Grid-Layout unterscheiden – warum gibt es zwei Spezifikationen, die manchmal scheinbar dasselbe leisten?

Die einfachste Antwort steht in den Spezifikationen selbst: Flexbox ist eine eindimensionale Layoutmethode, Grid-Layout dagegen eine zweidimensionale. Das folgende Beispiel zeigt ein Flex-Layout. Wie bereits im Artikel [Grundkonzepte](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) beschrieben, können Flex-Elemente in neue Zeilen umbrechen. Danach verhält sich jedoch jede Zeile so, als wäre sie ein eigener Flex-Container. Bei der Verteilung des verfügbaren Platzes berücksichtigt Flexbox die Position der Elemente in anderen Zeilen nicht und versucht nicht, sie zeilenübergreifend aneinander auszurichten.

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

Wenn wir ein sehr ähnliches Layout mit Grid erstellen, können wir die Anordnung sowohl in Zeilen als auch in Spalten steuern.

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

Diese Beispiele zeigen einen weiteren wichtigen Unterschied zwischen den beiden Layoutmethoden. Bei einem Grid-Layout legen Sie die Größen überwiegend am Container fest: Sie definieren Spuren und platzieren anschließend die Elemente darin. Bei Flexbox erstellen Sie zwar ebenfalls einen Flex-Container und legen dort die Richtung fest, die Größe der Elemente steuern Sie jedoch an den Elementen selbst.

In manchen Fällen können Sie beide Layoutmethoden verwenden. Je vertrauter Sie mit beiden werden, desto besser erkennen Sie, welche sich für bestimmte Layoutanforderungen eignet. Wahrscheinlich werden Sie schließlich beide Methoden in Ihrem CSS einsetzen. Eine eindeutig richtige oder falsche Antwort gibt es selten.

Als Faustregel gilt: Wenn Sie die Breite von Flex-Elementen festlegen, damit Elemente in einer umgebrochenen Zeile eines Flex-Containers mit den Elementen darüber fluchten, sollten Sie stattdessen ein zweidimensionales Grid-Layout wählen.

Es gibt keine festen Regeln wie „Verwenden Sie Flexbox für kleine Komponenten und Grid-Layout für größere“. Auch eine winzige Komponente kann zweidimensional sein, während sich ein großes Layout mit einer eindimensionalen Anordnung besser umsetzen lässt. Probieren Sie verschiedene Möglichkeiten aus – Sie haben die Wahl zwischen mehreren Layoutmethoden.

Weitere Vergleiche zwischen Grid und Flexbox finden Sie im Artikel [Das Verhältnis von Grid-Layout zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods). Er beschreibt viele Unterschiede zwischen Grid- und Flex-Layout und zeigt zusätzliche Möglichkeiten des Grid-Layouts, etwa das Übereinanderlegen von Elementen im Grid. Das kann Ihnen auch bei der Entscheidung für eine Layoutmethode helfen.

## Flexbox und display: contents

Der Wert `contents` der Eigenschaft {{cssxref("display")}} wird in der Spezifikation wie folgt beschrieben:

> „Das Element selbst erzeugt keine Boxen, seine Kindelemente und Pseudoelemente erzeugen jedoch weiterhin wie gewohnt Boxen. Für die Erzeugung von Boxen und das Layout muss das Element so behandelt werden, als wäre es im Dokumentbaum durch seine Kindelemente und Pseudoelemente ersetzt worden.“

Dieser Wert von `display` steuert die Erzeugung von Boxen: Er bestimmt, ob das Element eine Box erzeugt, die wir gestalten und auf der Seite sehen können, oder ob die Box, die es normalerweise erzeugen würde, entfernt wird. Im zweiten Fall rücken die Kindelemente gewissermaßen eine Ebene nach oben und nehmen an der Layoutmethode teil, an der sonst das Elternelement beteiligt wäre. Ein Beispiel macht dies deutlicher.

Im folgenden interaktiven Beispiel enthält ein Flex-Container drei Flex-Elemente. In einem dieser Elemente sind zwei weitere Elemente verschachtelt, die normalerweise nicht am Flex-Layout teilnehmen würden. Das Flex-Layout gilt nur für die direkten Kindelemente eines Flex-Containers.

Wenn Sie dem umschließenden Element der verschachtelten Elemente `display: contents` hinzufügen, verschwindet es aus dem Layout. Dadurch werden die beiden untergeordneten Elemente so angeordnet, als wären sie direkte Kindelemente des Flex-Containers. Entfernen Sie versuchsweise die Zeile mit `display: contents`, um zu sehen, wie das umschließende Element zurückkehrt.

Beachten Sie, dass dadurch nur die Box aus dem Layout entfernt wird; die untergeordneten Elemente werden in anderer Hinsicht nicht zu direkten Kindelementen. Wir haben einen Selektor für direkte Kindelemente verwendet, um den Flex-Elementen einen Hintergrund und Rahmen hinzuzufügen. Auf die verschachtelten Kindelemente wird diese Gestaltung nicht angewendet. Sie werden zwar als Flex-Elemente angeordnet, erhalten aber die übrige Gestaltung nicht, weil sie keine direkten Kindelemente sind.

Da die Box entfernt wird, können Sie sie beispielsweise nicht mehr verwenden, um hinter den verschachtelten Kindelementen eine Hintergrundfarbe anzuzeigen. Wenn Sie in diesem interaktiven Beispiel `display: contents` entfernen, sehen Sie, dass das direkte Kindelement, dessen Box entfernt wurde, eine orangefarbene Hintergrundfarbe hat. Auch diese verschwindet, wenn die Box verschwindet.

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
> Manche Browser entfernen bestimmte Elemente mit `display: contents` fälschlicherweise aus dem Barrierefreiheitsbaum (ihre Nachfahren bleiben jedoch erhalten). Dadurch geht die Semantik dieser Elemente verloren, während ihre untergeordneten Inhalte erhalten bleiben. Das bedeutet, dass Screenreader das Element selbst möglicherweise nicht ansagen. Siehe [`display: contents`](/de/docs/Web/CSS/Reference/Properties/display#display_contents) und [`display: contents` gilt als schädlich](https://ericwbailey.website/published/display-contents-considered-harmful/).
