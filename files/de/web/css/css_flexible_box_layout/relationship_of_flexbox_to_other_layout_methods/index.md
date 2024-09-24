---
title: Beziehung von Flexbox zu anderen Layout-Methoden
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

In diesem Artikel werfen wir einen Blick darauf, wie sich Flexbox mit all den anderen CSS-Modulen einfügt. Wir werden herausfinden, welche Spezifikationen Sie zusätzlich beachten müssen, wenn Sie Flexbox erlernen möchten, und warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Ausrichtungsmodul

Viele Menschen schauen sich Flexbox zunächst an, wenn sie Flex-Elemente innerhalb eines Flex-Containers richtig ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Kreuzachse und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul definiert, aber die Eigenschaften und Werte, die für andere Layout-Methoden gemeinsam sind, sind im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Abstände und Rinnen in allen Layout-Systemen funktionieren — nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Ausrichtungsmodul das Flexible Box Layout Modul übertrifft.

## Schreibmodi

Im Artikel [Grundlegende Konzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird erwähnt, dass Flexbox **schreibmodusbewusst** ist. Schreibmodi sind vollständig im [CSS-Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes) Modul dargestellt, das erklärt, wie CSS die verschiedenen Schreibmodi unterstützt, die international existieren. Wir müssen uns bewusst sein, wie sich dies auf unsere Flex-Layouts auswirkt, da der Schreibmodus die Richtung ändert, in der Blöcke in unserem Dokument ausgelegt werden. Das Verständnis von **Block**- und **Inline**-Richtungen ist der Schlüssel zu neuen Layout-Methoden.

Es ist erwähnenswert, dass wir den Schreibmodus unseres Dokuments möglicherweise aus anderen Gründen ändern möchten, als Inhalte in einer Sprache zu veröffentlichen, die einen anderen Schreibmodus verwendet. Das CSS-Schreibmodi Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, sowie vertikal, von oben nach unten, geschrieben werden kann. Dies ist wichtig für Internationalisierungen und Übersetzungen, aber diese Funktion kann auch für kreative Designs verwendet werden.

### Die Schreibmodi

Die Schreibmodi-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}}-Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angeordnet sind, um der Richtung zu entsprechen, in der Blöcke formatiert werden, wenn der Inhalt in diesem bestimmten Schreibmodus formatiert wird. Sie können das Live-Beispiel unten in diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

{{EmbedGHLiveSample("css-examples/flexbox/relationship/writing-modes.html", '100%', 360)}}

`sideways-rl` und `sideways-lr` werden derzeit nur in Firefox unterstützt.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode`-Eigenschaft verwenden würden, um ein gesamtes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und ein [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut zum {{htmlelement("html")}} Element hinzugefügt werden, um die Dokumentsprache und die Standardtextausrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, selbst wenn CSS nicht geladen werden würde.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden entwickelt unter der Annahme, dass der Inhalt im Standard-Block-Layout-System angeordnet wird und gelten nicht im Kontext von Flex-Layouts. Ein Element mit `display: flex` verhält sich in den meisten Fällen wie ein anderer Block-Level-Container, der einen umschließenden Block erstellt. Floats werden nicht eindringen und die Ränder der Container werden nicht zusammenbrechen.

Hinsichtlich der Flex-Elemente, wenn ein Element gefloatet oder gecleart wurde und dann ein Flex-Item wird, weil der Elternteil `display: flex` angewendet hat, wird das Floaten und Clearen nicht mehr vorkommen und das Element wird nicht aus dem normalen Fluss herausgenommen, wie es normalerweise bei Floats der Fall ist. Wenn Sie die {{cssxref("vertical-align")}}-Eigenschaft verwendet haben, wie sie mit `inline-block` oder Tabellenlayout zur Ausrichtung verwendet wird, wird dies das Element nicht länger beeinflussen und Sie können stattdessen die Ausrichtungs-Eigenschaften von Flexbox verwenden.

In diesem nächsten Live-Beispiel wurden die Kindelemente gefloatet, und dann wurde ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box`-Element zusammenbricht, da wir keine Clear-Anwendung haben. Dies zeigt, dass das Float stattfindet. Erneut `display: flex` anwenden und das Zusammenbrechen passiert nicht. Dies liegt daran, dass die Elemente nun kein Float mehr angewendet haben, da sie in Flex-Elemente umgewandelt wurden.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/floats.html", '100%', 430)}}

## Flexbox und Rasterlayout

[CSS Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Bei abweichenden Eigenschaften, wenn ein Flex-Item ein Raster-Item wird, werden alle den Kindelementen zugewiesenen `flex`-Werte, wie `flex-end`, ignoriert. Wie oben erwähnt, überschreiten Werte, die im Box-Ausrichtungsmodul definiert sind und in beiden Layout-Methoden funktionieren, diejenigen, die nur in Flexbox definiert sind.

### Flex und Raster — was ist der Unterschied?

Eine häufige Frage ist, was der Unterschied zwischen Flexbox und CSS Rasterlayout ist — warum haben wir zwei Spezifikationen, die manchmal dasselbe zu tun scheinen?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layout-Methode, während das Rasterlayout eine zweidimensionale Layout-Methode ist. Das folgende Beispiel hat ein Flex-Layout. Wie bereits im Artikel [Grundlegende Konzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente zum Umbruch freigegeben werden, aber sobald sie es tun, verhält sich jede Zeile, als wäre sie ein eigener Flex-Container. Wenn der Platz verteilt wird, betrachtet Flexbox nicht die Platzierung von Elementen in anderen Zeilen und versucht nicht, Dinge untereinander auszurichten.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/flex-layout.html", '100%', 750)}}

Wenn wir ein sehr ähnliches Layout mit dem Raster erstellen, können wir das Layout sowohl in Zeilen als auch in Spalten kontrollieren.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/grid-layout.html", '100%', 700)}}

Diese Beispiele weisen auf einen weiteren wesentlichen Unterschied zwischen diesen Layout-Methoden hin. Im Rasterlayout spezifizieren Sie den größten Teil der Größenbestimmung am Container, indem Sie Spuren einrichten und dann Elemente darin platzieren. In Flexbox, während Sie einen Flex-Container erstellen und die Richtung auf dieser Ebene festlegen, muss jede Kontrolle über die Größenbestimmung von Elementen an den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder die eine oder die andere Layout-Methode verwenden. Wenn Sie mit beiden vertraut werden, werden Sie feststellen, dass jede für spezifische Layout-Bedürfnisse besser geeignet ist, und Sie werden am Ende beide Methoden in Ihrem CSS verwenden. Es gibt selten ein richtig oder falsch.

Als allgemeine Regel gilt, wenn Sie Breiten auf Flex-Elementen festsetzen, um Elemente in einer Zeile eines umbrochenen Flex-Containers mit den darüber liegenden Elementen auszurichten, sollten Sie stattdessen ein zweidimensionales Rasterlayout in Betracht ziehen.

Es gibt keine festgelegten Regeln wie "Sie sollten Flexbox für kleine Komponenten und Rasterlayout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser mit Layout in einer Dimension dargestellt werden. Probieren Sie Dinge aus — Sie haben eine Auswahl an Layout-Methoden, also nutzen Sie diese.

Für mehr Vergleiche von Raster und Flexbox sehen Sie den Artikel [Beziehung des Rasterlayouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Unterschiede, die Rasterlayout von Flexlayout unterscheiden, und zeigt einige der zusätzlichen Funktionen auf, die Sie beim Verwenden von Rasterlayout erhalten, wie zum Beispiel die Schichtung von Elementen auf dem Raster. Dies könnte Ihnen auch bei der Entscheidung helfen, welche Layout-Methode Sie verwenden sollten.

## Flexbox und display: contents

Der `contents` Wert der {{cssxref("display")}}-Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst generiert keine Boxen, aber seine Kinder und Pseudo-Elemente generieren wie gewohnt Boxen. Für die Zwecke der Boxenerzeugung und des Layouts muss das Element so behandelt werden, als ob es durch seine Kinder und Pseudo-Elemente im Dokumentbaum ersetzt worden wäre."

Dieser Wert von `display` steuert die Box-Erzeugung und ob das Element eine Box generieren sollte, die wir auf der Seite stylen und sehen können, oder ob stattdessen die Box, die es normalerweise erstellen würde, entfernt werden sollte und die Kind-Elemente im Wesentlichen nach oben verschoben werden, um an der Layout-Methode teilzunehmen, an der der Elternteil beteiligt gewesen wäre. Dies ist mit einem Beispiel viel einfacher zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines hat zwei verschachtelte Elemente, die normalerweise nicht an der Flex-Layout-Teilnahme teilnehmen würden. Flex-Layout gilt nur für die direkten Kinder eines Flex-Containerns.

Indem `display: contents` dem Wrapper um die verschachtelten Elemente hinzugefügt wird, sehen Sie, dass das Element aus dem Layout verschwunden ist und die beiden Unterkinder so platziert werden, als wären sie direkte Kinder des Flex-Containers. Sie können versuchen, die `display: contents`-Zeile zu entfernen, um sie zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Unterkinder werden in keiner anderen Weise direkte Kinder. Wir verwendeten einen direkten Kinder-Selektor, um die Hintergrundfarbe und Rahmen auf die Flex-Elemente anzuwenden; dieser wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht das andere Styling.

Da die Box entfernt wird, können Sie sie dann nicht mehr verwenden, um — zum Beispiel — eine Hintergrundfarbe hinter den verschachtelten Unterkindern hinzuzufügen. Wenn Sie `display: contents` aus diesem Live-Beispiel entfernen, sehen Sie, dass das direkte Kind, das wir entfernen, eine orange Hintergrundfarbe hat. Diese verschwindet auch, wenn die Box verschwindet.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/display-contents.html", '100%', 650)}}

> [!WARNING]
> Einige Browser entfernen fälschlicherweise einige Elemente mit `display: contents` aus dem Barrierefreiheit-Baum (aber Nachkommen bleiben), was die Semantik dieser Elemente entfernt, während ihr Kindinhalt beibehalten wird. Das bedeutet, dass das Element selbst möglicherweise nicht von Bildschirmlesern angekündigt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [`display: contents` considered harmful`](https://ericwbailey.design/published/display-contents-considered-harmful/).
