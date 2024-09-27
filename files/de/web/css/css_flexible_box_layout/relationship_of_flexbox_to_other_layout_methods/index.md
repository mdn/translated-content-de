---
title: Beziehung von Flexbox zu anderen Layout-Methoden
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

In diesem Artikel betrachten wir, wie die Flexbox in alle anderen CSS-Module passt. Wir werden herausfinden, welche Spezifikationen Sie ebenfalls beachten müssen, wenn Sie Flexbox lernen möchten, und warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Alignment-Modul

Viele Menschen sehen sich zuerst Flexbox an, wenn sie Flex-Items in einem Flex-Container richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die das Ausrichten von Items auf ihrer Querachse und das Ausrichten von Items auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in einem eigenen [flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul definiert, aber die Eigenschaften und Werte, die anderen Layout-Methoden gemeinsam sind, werden im [CSS box alignment](/de/docs/Web/CSS/CSS_box_alignment)-Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Abstände und Rinnen in allen Layout-Systemen funktionieren – nicht nur in Flexbox. Wenn ein Feature in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Alignment-Modul das flexible Box-Layout-Modul ersetzt.

## Schreibmodi

Im Artikel [Grundlegende Konzepte der Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird erwähnt, dass Flexbox **schreibmodusbewusst** ist. Schreibmodi werden ausführlich im [CSS writing modes](/de/docs/Web/CSS/CSS_writing_modes)-Modul beschrieben, das beschreibt, wie CSS die verschiedenen weltweit existierenden Schreibmodi unterstützt. Wir müssen uns bewusst sein, wie dies unsere Flex-Layouts beeinflussen wird, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument angeordnet sind. Das Verständnis von **Block**- und **Inline**-Richtungen ist der Schlüssel zu neuen Layout-Methoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments aus anderen Gründen ändern möchten als nur Inhalte in einer Sprache zu veröffentlichen, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodus-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, sowie vertikal, von oben nach unten geschrieben werden kann. Dies ist wichtig für Internationalisierung und Übersetzungen, aber diese Funktionen können auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Spezifikation der Schreibmodi definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet sind, um der Richtung zu entsprechen, in der Blöcke angeordnet werden, wenn Inhalte in diesem bestimmten Schreibmodus formatiert sind. Sie können das Live-Beispiel unten auf diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

{{EmbedGHLiveSample("css-examples/flexbox/relationship/writing-modes.html", '100%', 360)}}

Die `sideways-rl` und `sideways-lr` werden derzeit nur in Firefox unterstützt.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden würden, um ein ganzes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML geschehen, indem ein [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und ein [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut zum {{htmlelement("html")}}-Element hinzugefügt wird, um die Sprache des Dokuments und die Standardtextrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen wird.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden entwickelt, in der Annahme, dass Inhalte mit dem standardmäßigen Blocklayout-System angeordnet sind, und gelten nicht im Kontext des Flex-Layouts. Ein auf `display: flex` gesetztes Element verhält sich in den meisten Fällen wie ein anderer blockbasierter Container, der einen Block begründet. Floats dringen nicht ein, und die Ränder des Containers kollabieren nicht.

Hinsichtlich der Flex-Items: Wenn ein Item gefloatet oder gecleart wurde und dann durch die Anwendung von `display: flex` auf das Elternteil zu einem Flex-Item wird, wird das Floating und Clearing nicht mehr stattfinden und das Item wird nicht aus dem normalen Fluss genommen, so wie es bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, die für `inline-block` oder Tabellenlayout zur Ausrichtung verwendet wird, wird dies das Item nicht mehr beeinflussen und Sie können stattdessen die Flexbox-Ausrichtungseigenschaften verwenden.

Im folgenden Live-Beispiel wurden die Kindelemente gefloatet und anschließend wurde `display: flex` auf ihren Container angewendet. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element kollabiert, da wir keine Clearing angewendet haben. Dies zeigt, dass das Floaten stattfindet. Wenden Sie `display: flex` erneut an und das Kollabieren findet nicht statt. Dies liegt daran, dass auf die Items kein Float mehr angewendet wird, da sie in Flex-Items umgewandelt wurden.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/floats.html", '100%', 430)}}

## Flexbox und Grid-Layout

[CSS grid layout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Für divergierende Eigenschaften, wenn ein Flex-Item zu einem Grid-Item wird, werden `flex`-Werte, die den Kindelementen zugewiesen sind, wie `flex-end`, ignoriert. Wie oben erwähnt, ersetzen Werte, die im Box-Alignment-Modul definiert sind und die sowohl für Grid- als auch für Flex-Layout-Methoden gelten, diejenigen, die nur in Flexbox definiert sind.

### Flex und Grid – was ist der Unterschied?

Eine häufige Frage ist, was der Unterschied zwischen Flexbox und dem CSS Grid-Layout ist – warum haben wir zwei Spezifikationen, die manchmal den Anschein erwecken, dasselbe zu tun?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layout-Methode, während das Grid-Layout eine zweidimensionale Layout-Methode ist. Das folgende Beispiel zeigt ein Flex-Layout. Wie bereits im Artikel [Grundlegende Konzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Items erlaubt werden zu umschließen, aber wenn sie dies tun, verhält sich jede Zeile, als wäre sie ein eigenständiger Flex-Container. Wenn Platz verteilt wird, betrachtet Flexbox nicht die Platzierung von Items in anderen Reihen und versucht nicht, Dinge miteinander auszurichten.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/flex-layout.html", '100%', 750)}}

Wenn wir ein sehr ähnliches Layout mit Grid erstellen, können wir das Layout sowohl in Reihen als auch in Spalten steuern.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/grid-layout.html", '100%', 700)}}

Diese Beispiele weisen auf einen weiteren wesentlichen Unterschied zwischen diesen Layout-Methoden hin. Im Grid-Layout führen Sie den Großteil der Größenbestimmung am Container aus, indem Sie Tracks einrichten und dann Items in diese platzieren. In Flexbox, obwohl Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, müssen alle Steuerungen zur Größenbestimmung der Items selbst vorgenommen werden.

In einigen Fällen könnten Sie entweder die eine oder die andere Layout-Methode verwenden. Sobald Sie mit beiden vertraut sind, werden Sie feststellen, dass jede besser für bestimmte Layout-Anforderungen geeignet ist, und Sie werden beide Methoden in Ihrem CSS verwenden. Es gibt selten ein richtig oder falsch.

Als allgemeine Regel gilt, wenn Sie Breiten auf Flex-Items festlegen, um Items in einer Reihe eines umschlossenen Flex-Containers mit den darüber liegenden Items auszurichten, sollten Sie stattdessen ein zweidimensionales Grid-Layout verwenden.

Es gibt keine festen Regeln, wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden". Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit einem Layout in einer Dimension dargestellt werden. Probieren Sie Dinge aus – Sie haben die Wahl zwischen Layout-Methoden, nutzen Sie diese.

Weitere Vergleiche von Grid und Flexbox finden Sie im Artikel [Beziehung von Grid-Layout zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Möglichkeiten, wie sich Grid-Layout von Flex-Layout unterscheidet, und demonstriert einige der zusätzlichen Funktionen, die Sie bei der Verwendung von Grid-Layout erhalten, wie das Schichten von Items auf dem Grid. Dies kann Ihnen auch helfen zu entscheiden, welche Layout-Methode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents`-Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudo-Elemente erzeugen Boxen wie gewohnt. Für die Zwecke der Box-Generierung und des Layouts muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudo-Elemente im Dokumentenbaum ersetzt worden."

Dieser `display`-Wert steuert die Box-Generierung und ob das Element eine Box erzeugen soll, die wir auf der Seite stylen und sehen können, oder ob die Box, die es normalerweise erstellen würde, entfernt werden soll und die Kindelemente gewissermaßen nach oben verschoben werden, um an der Layout-Methode teilzunehmen, der der Elternteil angehören würde. Dies ist viel einfacher mit einem Beispiel zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container mit drei Flex-Items. Eines hat zwei Elemente darin verschachtelt, die normalerweise nicht an der Flex-Layout-Methode teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch Hinzufügen von `display: contents` zur Verpackung um die verschachtelten Elemente können Sie sehen, dass das Item aus dem Layout verschwunden ist, sodass die beiden Unterkinder so angeordnet werden können, als wären sie direkte Kinder des Flex-Containers. Sie können versuchen, die `display: contents`-Zeile zu entfernen, um es zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise zu direkten Kindern. Wir haben einen direkten Kinderselektor verwendet, um den Hintergrund und die Rahmen auf die Flex-Items anzuwenden; er wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Items angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie dann nicht beispielsweise verwenden, um eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie in diesem Live-Beispiel `display: contents` entfernen, werden Sie sehen, dass das direkte Kind, das wir entfernen, eine orange Hintergrundfarbe hat. Diese verschwindet ebenfalls, wenn die Box verschwindet.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/display-contents.html", '100%', 650)}}

> [!WARNING]
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Accessibility-Baum (aber Nachfolger bleiben), wodurch die Semantik dieser Elemente entfernt wird, während ihr Kindinhalt erhalten bleibt. Dies bedeutet, dass das Element selbst möglicherweise nicht von Screenreadern angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [`display: contents` considered harmful`](https://ericwbailey.design/published/display-contents-considered-harmful/).
