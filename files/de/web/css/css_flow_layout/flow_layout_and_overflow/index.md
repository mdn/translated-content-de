---
title: Fluss-Layout und Überlauf
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
l10n:
  sourceCommit: f79a491594ebb5634949ed31b26155973a39166e
---

{{CSSRef}}

Wenn mehr Inhalt als in einen Container passt, entsteht eine Überlaufsituation. Es ist wichtig zu verstehen, wie Überlauf sich verhält, wenn man mit einem Element mit begrenzter Größe in CSS arbeitet. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn man mit normalem Fluss arbeitet.

## Was ist Überlauf?

Wenn Sie einem Element eine feste Höhe und Breite geben und dann erheblichen Inhalt zur Box hinzufügen, entsteht ein grundlegendes Überlaufbeispiel:

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

Der Inhalt gelangt in die Box. Sobald er die Box füllt, läuft er auf sichtbare Weise über, indem er Inhalt außerhalb der Box anzeigt, der möglicherweise unter nachfolgendem Inhalt angezeigt wird. Die Eigenschaft, die steuert, wie Überlauf sich verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den überlaufenden Inhalt sehen.

## Überlauf kontrollieren

Es gibt andere Werte, die steuern, wie überlaufender Inhalt sich verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Die Verwendung des Wertes `scroll` hält den Inhalt in seiner Box und fügt Scrollbalken hinzu, um dessen Anzeige zu ermöglichen. Scrollbalken werden hinzugefügt, selbst wenn der Inhalt in die Box passt.

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Die Verwendung des Wertes `auto` zeigt den Inhalt ohne Scrollbalken an, wenn der Inhalt in die Box passt. Falls er nicht passt, werden Scrollbalken hinzugefügt. Verglichen mit dem Beispiel für `overflow: scroll` sollten Sie sehen, dass `overflow scroll` horizontale und vertikale Scrollbalken hat, wenn nur vertikales Scrollen benötigt wird. Das folgende `auto`-Beispiel fügt den Scrollbalken nur in der Richtung hinzu, in der wir scrollen müssen.

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

Wie wir bereits gelernt haben, wird durch die Verwendung eines dieser Werte, außer dem Standardwert `visible`, ein neuer Block-Formatierungskontext geschaffen.

Note: Im [Working Draft of Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dieser verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen; die Box wird nicht scrollbar. Außerdem wird kein Block-Formatierungskontext erstellt.

Die overflow-Eigenschaft ist in Wirklichkeit eine Abkürzung für die Eigenschaften [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y). Wenn Sie nur einen Wert für overflow angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch auch beide Werte angeben, wobei der erste für `overflow-x` und somit für die horizontale Richtung verwendet wird, und der zweite für `overflow-y` und die vertikale Richtung. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, so dass wir den unerwünschten horizontalen Scrollbalken nicht erhalten.

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Flussrelativ Eigenschaft

Im Leitfaden zu [Schreibmodi und Fluss-Layout](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes) haben wir uns die neueren Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn machen, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physischen Abmessungen des Bildschirms zu binden. Das Level 3 Overflow-Modul umfasst auch flussrelative Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber das Mapping hängt vom Schreibmodus des Dokuments ab.

Diese Eigenschaften haben derzeit keine Implementierungen in Browsern, daher müssen Sie zum gegenwärtigen Zeitpunkt die physischen Eigenschaften verwenden und Ihren Schreibmodus anpassen.

## Überlauf anzeigen

In der Level 3 Overflow-Spezifikation gibt es einige Eigenschaften, die dabei helfen können, das Aussehen von Inhalt in einer Überlaufsituation zu verbessern.

### Inline-Achsenüberlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft - dies ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder den Schreibmodus ersetzt wird.

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Blockachsenüberlauf

Es gibt auch einen Vorschlag für eine `block-overflow`-Eigenschaft, obwohl der Name zum Zeitpunkt des Schreibens noch diskutiert wird. Dieser Vorschlag würde es ermöglichen, ein Auslassungszeichen hinzuzufügen, wenn Text in der Blockdimension überläuft.

Dies ist nützlich in Situationen, in denen Sie z.B. eine Auflistung von Artikeln haben und die Auflistungen in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Menge Text aufnehmen. Es ist dem Leser möglicherweise nicht klar, dass es mehr Inhalt gibt, durch den er klicken kann, wenn er die Box oder den Titel anklickt. Ein Auslassungszeichen weist deutlich darauf hin, dass es mehr Inhalt gibt. Die Spezifikation würde es erlauben, eine Zeichenkette oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob Sie in kontinuierlichen Medien im Web oder in einem Paged Media-Format wie Druck oder EPUB sind, das Verständnis, wie Inhalt überläuft, ist nützlich, wenn Sie mit jeder Layoutmethode arbeiten. Indem Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Überlaufinhalt in Layoutmethoden wie Grid und Flexbox zu verstehen.
