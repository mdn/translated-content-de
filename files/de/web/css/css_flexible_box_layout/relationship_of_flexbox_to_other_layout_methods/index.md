---
title: Beziehung von Flexbox zu anderen Layout-Methoden
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

In diesem Artikel werfen wir einen Blick darauf, wie sich Flexbox mit allen anderen CSS-Modulen einfügt. Wir werden herausfinden, auf welche Spezifikationen Sie auch achten müssen, wenn Sie Flexbox lernen möchten, und warum Flexbox sich von einigen anderen Modulen unterscheidet.

## Das Box-Alignment-Modul

Viele Menschen sehen sich Flexbox zuerst an, wenn sie Flex-Elemente richtig innerhalb eines Flex-Containers ausrichten möchten. Flexbox bietet Zugriff auf Eigenschaften, die die Ausrichtung von Elementen auf ihrer Querachse und die Rechtfertigung von Elementen auf der Hauptachse ermöglichen.

Flexbox wurde ursprünglich in seinem eigenen [flexiblen Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul definiert, aber die Eigenschaften und Werte, die für andere Layout-Methoden gemeinsam sind, sind im [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Dieses Modul beschreibt, wie Ausrichtung, Rechtfertigung, Abstände und Rinnen in allen Layout-Systemen funktionieren — nicht nur in Flexbox. Wenn eine Funktion in beiden Spezifikationen definiert ist, beachten Sie, dass das Box-Alignment-Modul das flexible Box-Layout-Modul ersetzt.

## Schreibrichtungen

Im Artikel [Grundkonzepte von Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) wird darauf hingewiesen, dass Flexbox **schreibrichtungsbewusst** ist. Schreibrichtungen sind im [CSS-Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes) Modul vollständig detailliert, das beschreibt, wie CSS die verschiedenen international existierenden Schreibrichtungen unterstützt. Wir müssen uns bewusst sein, wie dies unsere Flex-Layouts beeinflussen wird, da die Schreibrichtung die Richtung ändert, in der Blöcke in unserem Dokument angeordnet werden. Das Verständnis von **Block**- und **Inline**-Richtungen ist der Schlüssel zu neuen Layout-Methoden.

Es ist erwähnenswert, dass wir möglicherweise die Schreibrichtung unseres Dokuments aus anderen Gründen ändern möchten, als Inhalte in einer Sprache zu veröffentlichen, die eine andere Schreibrichtung verwendet. Das CSS-Schreibrichtungen-Modul definiert, wie Text horizontal, von links nach rechts und von rechts nach links, sowie vertikal, von oben nach unten geschrieben werden kann. Dies ist wichtig für die Internationalisierung und Übersetzungen, aber diese Funktion kann auch für kreative Designs verwendet werden.

### Die Schreibrichtungen

Die Schreibrichtungen-Spezifikation definiert die folgenden Werte der {{cssxref("writing-mode")}} Eigenschaft, die dazu dienen, die Richtung zu ändern, in der Blöcke auf der Seite angelegt werden, um die Richtung anzupassen, in der Blöcke angeordnet werden, wenn Inhalte in dieser besonderen Schreibrichtung formatiert werden. Sie können das folgende Live-Beispiel in diese Modi ändern, um zu sehen, was mit dem Flex-Layout passiert.

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

{{EmbedGHLiveSample("css-examples/flexbox/relationship/writing-modes.html", '100%', 360)}}

Die `sideways-rl` und `sideways-lr` haben derzeit nur Unterstützung in Firefox.

Beachten Sie, dass Sie normalerweise nicht CSS und die `writing-mode` Eigenschaft verwenden würden, um ein gesamtes Dokument in einen anderen Schreibmodus zu ändern. Dies würde über HTML erfolgen, indem ein [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut zum {{htmlelement("html")}} Element hinzugefügt wird, um die Dokumentensprache und die Standard-Textrichtung anzugeben. Dies würde bedeuten, dass das Dokument korrekt angezeigt wird, auch wenn CSS nicht geladen wird.

## Flexbox und andere Layout-Methoden

Einige Eigenschaften wurden entwickelt, wobei davon ausgegangen wird, dass Inhalte mit dem Standard-Block-Layout-System angeordnet werden, und gelten nicht im Kontext eines Flex-Layouts. Ein Element, das auf `display: flex` gesetzt ist, verhält sich in den meisten Fällen wie jeder andere Block-Level-Container, der einen Container-Block etabliert. Gleitende Elemente werden nicht eingreifen, und die Ränder der Container werden nicht zusammenfallen.

In Bezug auf Flex-Elemente, wenn ein Element gefloatet oder gecleart wurde und dann aufgrund des Elternteils, bei dem `display: flex` angewendet wurde, zu einem Flex-Element wird, wird das Floating und Clearing nicht mehr stattfinden, und das Element wird nicht aus dem normalen Fluss wie Floats herausgenommen. Wenn Sie die {{cssxref("vertical-align")}} Eigenschaft verwendet haben, wie sie bei `inline-block` oder Tabellenausrichtung zur Anwendung kommt, wird dies das Element nicht mehr beeinflussen und Sie können stattdessen die Ausrichtungseigenschaften von Flexbox verwenden.

Im nächsten Live-Beispiel wurden die Kindelemente gefloatet, und dann wurde zu ihrem Container `display: flex` hinzugefügt. Wenn Sie `display: flex` entfernen, sollten Sie sehen, dass das `.box` Element zusammenbricht, da wir kein Clearing angewendet haben. Dies demonstriert, dass das Floating stattfindet. Wenden Sie `display: flex` erneut an und das Zusammenbrechen passiert nicht. Das liegt daran, dass die Elemente kein Floating mehr zugewiesen bekommen haben, da sie in Flex-Elemente umgewandelt wurden.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/floats.html", '100%', 430)}}

## Flexbox und Grid-Layout

Das [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) und Flexbox teilen viele Eigenschaften und Werte. Bei divergierenden Eigenschaften, wenn ein Flex-Element zu einem Grid-Element wird, werden alle `flex` Werte, die den Kindelementen zugewiesen wurden, wie `flex-end`, ignoriert. Wie oben erwähnt, überschreiben Werte, die im Box-Alignment-Modul definiert sind und für beide Layout-Methoden funktionieren, diejenigen, die nur in Flexbox definiert sind.

### Flex und Grid — was ist der Unterschied?

Eine häufige Frage ist der Unterschied zwischen Flexbox und CSS Grid-Layout — warum haben wir zwei Spezifikationen, die manchmal dasselbe zu tun scheinen?

Die einfachste Antwort auf diese Frage ist in den Spezifikationen selbst definiert. Flexbox ist eine eindimensionale Layout-Methode, während Grid-Layout eine zweidimensionale Layout-Methode ist. Das folgende Beispiel zeigt ein Flex-Layout. Wie bereits im Artikel [Grundkonzepte](/de/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) beschrieben, können Flex-Elemente umgebrochen werden, aber wenn sie es tun, verhält sich jede Zeile, als ob sie ein eigener Flex-Container wäre. Wenn der Platz verteilt wird, schaut Flexbox nicht auf die Platzierung von Elementen in anderen Zeilen und versucht nicht, diese miteinander auszurichten.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/flex-layout.html", '100%', 750)}}

Wenn wir ein sehr ähnliches Layout mit Grid erstellen, können wir das Layout sowohl in Reihen als auch in Spalten steuern.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/grid-layout.html", '100%', 700)}}

Diese Beispiele deuten auf einen weiteren wesentlichen Unterschied zwischen diesen Layout-Methoden hin. Beim Grid-Layout erfolgt die Größenspezifikation hauptsächlich auf dem Container, indem Spuren eingerichtet werden und dann Elemente darin platziert werden. Bei Flexbox hingegen erstellen Sie einen Flex-Container und legen die Richtung auf dieser Ebene fest, jede Kontrolle über die Größenanpassung von Elementen muss jedoch an den Elementen selbst erfolgen.

In einigen Fällen könnten Sie entweder die eine oder die andere Layout-Methode verwenden. Wenn Sie mit beiden vertraut sind, werden Sie feststellen, dass jede Methode besser für spezielle Layout-Bedürfnisse geeignet ist, und Sie werden am Ende beide Methoden in Ihrem CSS haben. Es gibt selten eine richtige oder falsche Antwort.

Als Faustregel gilt, wenn Sie Breiten auf Flex-Elementen festlegen, um Elemente in einer Zeile eines umgebrochenen Flex-Containers mit den Elementen darüber auszurichten, sollten Sie stattdessen eine zweidimensionale Grid-Layout-Option wählen.

Es gibt keine festen Regeln wie "Sie sollten Flexbox für kleine Komponenten und Grid-Layout für größere verwenden." Eine winzige Komponente kann zweidimensional sein, und ein großes Layout kann besser durch Layout in einer Dimension dargestellt werden. Probieren Sie Dinge aus — Sie haben die Wahl zwischen Layout-Methoden, also nutzen Sie diese.

Für weitere Vergleiche von Grid und Flexbox siehe den Artikel [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods). Dieser Artikel beschreibt viele der Möglichkeiten, wie sich Grid-Layout von Flex-Layout unterscheidet und demonstriert einige der zusätzlichen Funktionalitäten, die Sie beim Verwenden von Grid-Layout erhalten, wie das Schichten von Elementen auf dem Grid. Dies kann Ihnen auch helfen zu entscheiden, welche Layout-Methode zu verwenden ist.

## Flexbox und display: contents

Der `contents` Wert der {{cssxref("display")}} Eigenschaft wird in der Spezifikation wie folgt beschrieben:

> "Das Element selbst erzeugt keine Boxen, aber seine Kinder und Pseudoelemente erzeugen weiterhin Boxen wie gewohnt. Für den Zweck der Boxenerzeugung und des Layouts muss das Element so behandelt werden, als wäre es durch seine Kinder und Pseudoelemente im Dokumentbaum ersetzt worden."

Dieser `display` Wert steuert die Box-Erzeugung und ob das Element eine Box erzeugen sollte, die wir stylen und auf der Seite sehen können, oder ob stattdessen die Box, die es normalerweise erzeugen würde, entfernt werden sollte und die Kindelemente im Wesentlichen nach oben verschoben werden sollen, um an der Layout-Methode teilzunehmen, an der der Elternteil teilgenommen hätte. Dies ist viel einfacher mit einem Beispiel zu sehen.

Im folgenden Live-Beispiel haben wir einen Flex-Container, der drei Flex-Elemente enthält. Eines hat zwei Elemente innerhalb verschachtelt, die normalerweise nicht an Flex-Layout teilnehmen würden. Das Flex-Layout gilt nur für die direkten Kinder eines Flex-Containers.

Durch Hinzufügen von `display: contents` zu dem Wrapper um die verschachtelten Elemente können Sie sehen, dass das Element aus dem Layout verschwunden ist, sodass die beiden Untersubkinder als wären sie direkte Kinder des Flex-Containers angeordnet werden. Sie können versuchen, die Zeile `display: contents` zu entfernen, um es zurückkehren zu sehen.

Beachten Sie, dass dies nur die Box aus dem Layout entfernt; die Untersubkinder werden in keiner anderen Weise zu direkten Kindern. Wir haben einen direkten Kind-Selektor verwendet, um den Flex-Elementen den Hintergrund und die Ränder hinzuzufügen; er wurde nicht auf unsere verschachtelten Kinder angewendet. Sie wurden als Flex-Elemente angeordnet, aber da sie keine direkten Kinder sind, erhalten sie nicht die anderen Stilsetzungen.

Da die Box entfernt wird, können Sie sie nicht verwenden, um beispielsweise eine Hintergrundfarbe hinter den verschachtelten Untersubkindern hinzuzufügen. Wenn Sie `display: contents` in diesem Live-Beispiel entfernen, sehen Sie, dass das direkte Kind, das wir entfernen, eine orange Hintergrundfarbe hat. Diese verschwindet ebenfalls, wenn die Box verschwindet.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/display-contents.html", '100%', 650)}}

> [!WARNING]
> Einige Browser entfernen Elemente mit `display: contents` fälschlicherweise aus dem Barrierefreiheit-Baum (aber Nachkommen bleiben erhalten), wodurch die Semantik dieser Elemente entfernt wird, während der Kindinhalt erhalten bleibt. Dies bedeutet, dass das Element selbst möglicherweise nicht von Screenreadern angesagt wird. Siehe [`display: contents`](/de/docs/Web/CSS/display#display_contents) und [`display: contents` als problematisch angesehen`](https://ericwbailey.design/published/display-contents-considered-harmful/).
