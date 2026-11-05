---
title: Das Verhältnis von Flexbox zu anderen Layoutmethoden
short-title: Flexbox und andere Layouts
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 6cc5111618cee56a288f3c4354acd2330f893434
---

In diesem Artikel sehen wir uns an, wie Flexbox mit den anderen CSS-Modulen zusammenhängt. Sie erfahren, welche Spezifikationen Sie beim Erlernen von Flexbox ebenfalls beachten sollten und warum sich Flexbox von einigen anderen Modulen unterscheidet.

## Das Modul für die Ausrichtung von Boxen

Viele beschäftigen sich erstmals mit Flexbox, wenn sie Flex-Items innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox stellt Eigenschaften bereit, mit denen sich Items entlang ihrer Querachse ausrichten und entlang der Hauptachse verteilen lassen.

Flexbox wurde ursprünglich in einem eigenen Modul für das [Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) definiert. Die Eigenschaften und Werte, die auch für andere Layoutmethoden gelten, sind jedoch im Modul für die [CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) definiert. Dieses Modul beschreibt, wie Ausrichtung, Verteilung, Abstände und Zwischenräume in allen Layoutsystemen funktionieren – nicht nur in Flexbox. Wenn ein Merkmal in beiden Spezifikationen definiert ist, hat das Modul für die Box-Ausrichtung Vorrang vor dem Modul für das Flexible-Box-Layout.

## Schreibrichtungen

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) wird darauf hingewiesen, dass Flexbox **Schreibmodi berücksichtigt**. Schreibmodi werden ausführlich im Modul [CSS-Schreibmodi](/de/docs/Web/CSS/Guides/Writing_modes) behandelt. Es beschreibt, wie CSS die verschiedenen weltweit verwendeten Schreibmodi unterstützt. Wir müssen beachten, wie sich dies auf unsere Flex-Layouts auswirkt, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet werden. Das Verständnis der **Block-** und **Inline-Richtung** ist für neue Layoutmethoden entscheidend.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments auch aus anderen Gründen ändern möchten als für die Veröffentlichung von Inhalten in einer Sprache mit einem anderen Schreibmodus. Das Modul für CSS-Schreibmodi definiert, wie Text horizontal von links nach rechts oder von rechts nach links sowie vertikal von oben nach unten geschrieben werden kann. Dies ist für die Internationalisierung und Übersetzung wichtig, die Funktionen lassen sich aber auch für kreative Gestaltungen nutzen.

### Die Schreibmodi

Die Spezifikation für Schreibmodi definiert die folgenden Werte der Eigenschaft {{cssxref("writing-mode")}}. Mit ihnen lässt sich die Richtung ändern, in der Blöcke auf der Seite angeordnet werden, sodass sie der Anordnung von Blöcken beim Formatieren von Inhalten im jeweiligen Schreibmodus entspricht. Sie können im folgenden interaktiven Beispiel zwischen diesen Modi wechseln, um zu sehen, wie sich das Flex-Layout verändert.

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

Beachten Sie, dass Sie normalerweise nicht CSS und die Eigenschaft `writing-mode` verwenden würden, um ein ganzes Dokument auf einen anderen Schreibmodus umzustellen. Stattdessen würde dies in HTML erfolgen: Sie fügen dem Element {{htmlelement("html")}} die Attribute [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) hinzu, um die Dokumentensprache und die standardmäßige Textrichtung anzugeben. So wird das Dokument auch dann richtig angezeigt, wenn CSS nicht geladen wird.

## Flexbox und andere Layoutmethoden

Einige Eigenschaften wurden unter der Annahme entwickelt, dass Inhalte mit dem standardmäßigen Block-Layoutsystem angeordnet werden, und gelten nicht im Kontext eines Flex-Layouts. Ein Element mit `display: flex` verhält sich in den meisten Punkten wie jeder andere Container auf Blockebene, der einen umschließenden Block bildet. Es erzeugt einen neuen {{Glossary("Flex_container", "Flex-Formatierungskontext")}}. Daher dringen Floats nicht in den Container ein, und die Außenabstände der Container fallen nicht zusammen.

Bei Flex-Items gilt: Wenn ein Item zuvor als Float angeordnet oder mit `clear` von Floats freigestellt wurde und durch `display: flex` auf dem Elternelement zu einem Flex-Item wird, wirken das Floating und das Freistellen nicht mehr. Das Item wird auch nicht wie ein Float aus dem normalen Dokumentfluss genommen. Falls Sie die Eigenschaft {{cssxref("vertical-align")}} zur Ausrichtung verwendet haben, wie bei `inline-block` oder Tabellenlayouts, wirkt sie sich nicht mehr auf das Item aus. Stattdessen können Sie die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten interaktiven Beispiel wurden die Kindelemente als Floats angeordnet und anschließend ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das Element `.box` zusammenfällt, da kein `clear` angewendet wird. Das zeigt, dass die Floats wirken. Wenn Sie `display: flex` erneut anwenden, fällt das Element nicht mehr zusammen. Der Grund dafür ist, dass die Items als Flex-Items nicht mehr als Floats angeordnet werden.

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

[CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) und Flexbox verwenden viele gemeinsame Eigenschaften und Werte. Bei Eigenschaften, die sich unterscheiden, gilt: Wird ein Flex-Item zu einem Grid-Item, werden den Kindelementen zugewiesene `flex`-Werte wie `flex-end` ignoriert. Wie bereits erwähnt, haben die im Modul für die Box-Ausrichtung definierten Werte, die in beiden Layoutmethoden funktionieren, Vorrang vor Werten, die nur in Flexbox definiert sind.

### Flex und Grid – worin liegt der Unterschied?

Eine häufige Frage lautet, worin sich Flexbox und CSS-Grid-Layout unterscheiden – warum gibt es zwei Spezifikationen, die manchmal dasselbe zu tun scheinen?

Die einfachste Antwort darauf findet sich in den Spezifikationen selbst: Flexbox ist eine eindimensionale Layoutmethode, Grid-Layout hingegen eine zweidimensionale. Das folgende Beispiel zeigt ein Flex-Layout. Wie bereits im Artikel [Grundkonzepte](/de/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts) beschrieben, können Flex-Items in neue Zeilen umbrechen. Sobald sie das tun, verhält sich jedoch jede Zeile so, als wäre sie ein eigener Flex-Container. Bei der Verteilung des verfügbaren Platzes berücksichtigt Flexbox nicht die Position der Items in anderen Zeilen und versucht nicht, sie zeilenübergreifend aneinander auszurichten.

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

Wenn wir mit Grid ein sehr ähnliches Layout erstellen, können wir die Anordnung sowohl in Zeilen als auch in Spalten steuern.

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

Diese Beispiele zeigen einen weiteren wichtigen Unterschied zwischen den Layoutmethoden. Beim Grid-Layout legen Sie die Größen größtenteils am Container fest, richten Tracks ein und platzieren anschließend Items darin. Bei Flexbox erstellen Sie zwar einen Flex-Container und legen auf dieser Ebene die Richtung fest, die Größe der Items steuern Sie jedoch an den Items selbst.

In manchen Fällen können Sie beide Layoutmethoden verwenden. Wenn Sie mit beiden vertraut sind, werden Sie feststellen, dass jede für bestimmte Layoutanforderungen besser geeignet ist. Wahrscheinlich werden Sie schließlich beide Methoden in Ihrem CSS einsetzen. Selten gibt es nur eine richtige oder falsche Lösung.

Als Faustregel gilt: Wenn Sie Breiten für Flex-Items festlegen, damit die Items in einer Zeile eines umbrechenden Flex-Containers mit den Items darüber ausgerichtet sind, sollten Sie stattdessen ein zweidimensionales Grid-Layout wählen.

Es gibt keine festen Regeln wie „Für kleine Komponenten sollten Sie Flexbox und für größere Grid-Layout verwenden“. Eine kleine Komponente kann zweidimensional sein, während sich ein großes Layout besser eindimensional darstellen lässt. Probieren Sie verschiedene Möglichkeiten aus – Ihnen stehen mehrere Layoutmethoden zur Verfügung.

Weitere Vergleiche zwischen Grid und Flexbox finden Sie im Artikel [Das Verhältnis von Grid-Layout zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods). Er beschreibt viele Unterschiede zwischen Grid- und Flex-Layout und zeigt zusätzliche Möglichkeiten des Grid-Layouts, etwa das Übereinanderlegen von Items im Grid. Das kann Ihnen auch bei der Entscheidung helfen, welche Layoutmethode Sie verwenden sollten.

## Flexbox und display: contents

Der Wert `contents` der Eigenschaft {{cssxref("display")}} wird in der Spezifikation wie folgt beschrieben:

> „Das Element selbst erzeugt keine Boxen, seine Kindelemente und Pseudoelemente erzeugen jedoch weiterhin wie gewohnt Boxen. Für die Erzeugung von Boxen und das Layout muss das Element so behandelt werden, als wäre es im Dokumentbaum durch seine Kindelemente und Pseudoelemente ersetzt worden.“

Dieser Wert von `display` steuert die Erzeugung von Boxen: Er bestimmt, ob das Element eine Box erzeugt, die wir gestalten und auf der Seite sehen können, oder ob die Box, die es normalerweise erzeugen würde, entfernt wird. Im letzteren Fall rücken die Kindelemente gewissermaßen eine Ebene nach oben und nehmen an der Layoutmethode teil, an der sonst das Elternelement beteiligt wäre. An einem Beispiel lässt sich das leichter erkennen.

Das folgende interaktive Beispiel zeigt einen Flex-Container mit drei Flex-Items. In einem davon sind zwei weitere Elemente verschachtelt, die normalerweise nicht am Flex-Layout teilnehmen würden. Das Flex-Layout gilt nur für die direkten Kindelemente eines Flex-Containers.

Wenn Sie dem umschließenden Element der verschachtelten Elemente `display: contents` hinzufügen, verschwindet dieses Item aus dem Layout. Dadurch werden die beiden verschachtelten Kindelemente so angeordnet, als wären sie direkte Kindelemente des Flex-Containers. Entfernen Sie die Zeile mit `display: contents`, um zu sehen, wie das Item zurückkehrt.

Beachten Sie, dass dadurch nur die Box aus dem Layout entfernt wird. Die verschachtelten Kindelemente werden dadurch in keiner anderen Hinsicht zu direkten Kindelementen. Wir haben einen Selektor für direkte Kindelemente verwendet, um den Flex-Items den Hintergrund und die Rahmen zuzuweisen; auf die verschachtelten Kindelemente wird diese Gestaltung nicht angewendet. Sie werden zwar als Flex-Items angeordnet, erhalten aber nicht die übrige Gestaltung, da sie keine direkten Kindelemente sind.

Da die Box entfernt wird, können Sie sie anschließend beispielsweise nicht mehr verwenden, um hinter den verschachtelten Kindelementen eine Hintergrundfarbe anzuzeigen. Wenn Sie in diesem interaktiven Beispiel `display: contents` entfernen, sehen Sie, dass das direkte Kindelement, dessen Box entfernt wird, eine orange Hintergrundfarbe hat. Diese verschwindet ebenfalls, wenn die Box entfernt wird.

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
> Einige Browser entfernen bestimmte Elemente mit `display: contents` fälschlicherweise aus dem Barrierefreiheitsbaum (ihre Nachfahren bleiben jedoch erhalten). Dadurch geht die Semantik dieser Elemente verloren, während ihre Kindelemente erhalten bleiben. Das bedeutet, dass Screenreader das Element selbst möglicherweise nicht ansagen. Siehe [`display: contents`](/de/docs/Web/CSS/Reference/Properties/display#display_contents) und [`display: contents` als schädlich betrachtet](https://ericwbailey.website/published/display-contents-considered-harmful/).
