---
title: Flusslayout und Überlauf
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
l10n:
  sourceCommit: f79a491594ebb5634949ed31b26155973a39166e
---

{{CSSRef}}

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, tritt eine Überlaufsituation auf. Zu verstehen, wie Überlauf funktioniert, ist wichtig, um mit jedem Element umzugehen, das in CSS in der Größe eingeschränkt ist. Dieser Leitfaden erklärt, wie Überlauf funktioniert, wenn mit normalem Fluss gearbeitet wird.

## Was ist Überlauf?

Einem Element eine feste Höhe und Breite zu geben und dann signifikanten Inhalt in die Box hinzuzufügen, erzeugt ein grundlegendes Überlaufbeispiel:

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

Der Inhalt geht in die Box. Sobald er die Box füllt, überfließt er auf sichtbare Weise, indem er Inhalte außerhalb der Box anzeigt, die möglicherweise unter nachfolgendem Inhalt angezeigt werden. Die Eigenschaft, die steuert, wie sich Überlauf verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow) Eigenschaft, die einen Anfangswert von `visible` hat. Deshalb können wir den Überlaufinhalt sehen.

## Überlauf steuern

Es gibt andere Werte, die steuern, wie sich überlaufender Inhalt verhält. Um überlaufenden Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dadurch könnte ein Teil Ihres Inhalts nicht sichtbar sein.

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Die Verwendung des Wertes `scroll` hält den Inhalt in seiner Box und fügt Bildlaufleisten hinzu, um das Anzeigen zu ermöglichen. Bildlaufleisten werden hinzugefügt, auch wenn der Inhalt in die Box passt.

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Die Verwendung des Wertes `auto` zeigt den Inhalt ohne Bildlaufleisten an, wenn der Inhalt in die Box passt. Wenn er nicht passt, werden Bildlaufleisten hinzugefügt. Wenn Sie das nächste Beispiel mit dem Beispiel für `overflow: scroll` vergleichen, sollten Sie sehen, dass `overflow: scroll` sowohl horizontale als auch vertikale Bildlaufleisten hat, wenn es nur vertikales Scrollen benötigt. Das `auto`-Beispiel unten fügt die Bildlaufleiste nur in der Richtung hinzu, in der wir scrollen müssen.

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

Wie wir bereits gelernt haben, wird durch die Verwendung eines dieser Werte, anders als der Standardwert `visible`, ein neuer Block-Formatierungskontext erstellt.

Hinweis: Im [Arbeitsentwurf von Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dieser wird sich wie `overflow: hidden` verhalten, jedoch kein programmatisches Scrollen zulassen, die Box wird nicht scrollbar. Zusätzlich erzeugt er keinen Block-Formatierungskontext.

Die Overflow-Eigenschaft ist in Wirklichkeit eine Kurzform für die [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y) Eigenschaften. Wenn Sie nur einen Wert für Overflow angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, wobei der erste für `overflow-x` und damit die horizontale Richtung verwendet wird, und der zweite für `overflow-y` und die vertikale Richtung. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Bildlaufleiste nicht bekommen.

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Fluss relative Eigenschaften

Im Leitfaden zu [Schreibmodi und Flusslayout](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes) haben wir die neueren Eigenschaften `block-size` und `inline-size` betrachtet, die mehr Sinn ergeben, wenn man mit verschiedenen Schreibmodi arbeitet, als unser Layout an die physischen Dimensionen des Bildschirms zu binden. Das Level 3 Overflow-Modul enthält auch fluss-relativ Eigenschaften für Überlauf - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt vom Schreibmodus des Dokuments ab.

Diese Eigenschaften haben derzeit keine Implementierungen in Browsern, daher müssen Sie derzeit die physischen Eigenschaften verwenden und diese an Ihren Schreibmodus anpassen.

## Überlauf anzeigen

In der Level 3 Overflow-Spezifikation haben wir einige Eigenschaften, die helfen können, das Aussehen von Inhalt in einer Überlaufsituation zu verbessern.

### Inline-Achsen-Überlauf

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow) Eigenschaft behandelt den Überlauf von Text in der Inline-Richtung. Sie nimmt einen von zwei Werten an: `clip`, bei dem der Inhalt abgeschnitten wird, wenn er überläuft, dies ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, das durch ein besseres Zeichen für die verwendete Sprache oder den verwendeten Schreibmodus ersetzt werden kann.

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Block-Achsen-Überlauf

Es gibt auch einen Vorschlag für eine `block-overflow` Eigenschaft, obwohl zum Zeitpunkt der Erstellung dieses Dokuments der Name noch zur Diskussion steht. Dieser Vorschlag würde das Hinzufügen eines Auslassungszeichens ermöglichen, wenn Text in der Blockdimension überläuft.

Dies ist nützlich in der Situation, in der Sie eine Liste von Artikeln haben, und die Auflistungen in festen Höhenboxen anzeigen, die nur eine begrenzte Textmenge aufnehmen. Es könnte für den Leser nicht offensichtlich sein, dass mehr Inhalt geklickt werden kann, wenn er die Box oder den Titel klickt. Ein Auslassungszeichen weist deutlich darauf hin, dass es mehr Inhalt gibt. Die Spezifikation würde erlauben, einen Textstring oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob Sie nun in kontinuierlichen Medien im Web oder in einem paginierten Medienformat wie Druck oder EPUB arbeiten, das Verständnis, wie Inhalt überläuft, ist nützlich, wenn Sie mit jeder Layoutmethode umgehen. Indem Sie verstehen, wie Überlauf im normalen Fluss funktioniert, sollten Sie es leichter finden, die Auswirkungen von Überlaufinhalt in Layoutmethoden wie Grid und Flexbox zu verstehen.
