---
title: Flow-Layout und Overflow
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_overflow
l10n:
  sourceCommit: f79a491594ebb5634949ed31b26155973a39166e
---

{{CSSRef}}

Wenn mehr Inhalt vorhanden ist, als in einen Container passt, entsteht eine Overflow-Situation. Zu verstehen, wie Overflow funktioniert, ist wichtig, um mit jedem Element mit begrenzter Größe in CSS umzugehen. Diese Anleitung erklärt, wie Overflow im normalen Fluss funktioniert.

## Was ist Overflow?

Einem Element eine feste Höhe und Breite zu geben und dann umfangreichen Inhalt in die Box hinzuzufügen, ergibt ein grundlegendes Overflow-Beispiel:

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow.html", '100%', 700)}}

Der Inhalt geht in die Box. Sobald er die Box füllt, fließt er sichtbar über, zeigt den Inhalt außerhalb der Box an und möglicherweise unter darüberliegendem Inhalt. Die Eigenschaft, die steuert, wie Overflow sich verhält, ist die [`overflow`](/de/docs/Web/CSS/overflow)-Eigenschaft, deren Anfangswert `visible` ist. Das ist der Grund, warum wir den überlaufenden Inhalt sehen können.

## Steuerung von Overflow

Es gibt andere Werte, die das Verhalten von überlaufendem Inhalt steuern. Um überfüllten Inhalt zu verbergen, verwenden Sie den Wert `hidden`. Dies kann dazu führen, dass ein Teil Ihres Inhalts nicht sichtbar ist.

{{EmbedGHLiveSample("css-examples/flow/overflow/hidden.html", '100%', 700)}}

Mit dem Wert `scroll` wird der Inhalt in seiner Box eingeschlossen, und Scrollleisten werden hinzugefügt, um ihn anzuzeigen. Scrollleisten werden auch dann hinzugefügt, wenn der Inhalt in die Box passt.

{{EmbedGHLiveSample("css-examples/flow/overflow/scroll.html", '100%', 700)}}

Mit dem Wert `auto` wird der Inhalt ohne Scrollleisten angezeigt, wenn er in die Box passt. Wenn er nicht passt, werden Scrollleisten hinzugefügt. Vergleicht man das nächste Beispiel mit dem für `overflow: scroll`, sieht man, dass bei `overflow scroll` horizontale und vertikale Scrollleisten vorhanden sind, auch wenn nur vertikales Scrollen benötigt wird. Das folgende `auto`-Beispiel fügt nur die Scrollleiste in der Richtung hinzu, in der wir scrollen müssen.

{{EmbedGHLiveSample("css-examples/flow/overflow/auto.html", '100%', 700)}}

Wie wir bereits gelernt haben, wird durch die Verwendung eines dieser Werte, außer dem Standardwert `visible`, ein neuer Blockformatierungskontext erstellt.

> [!NOTE]
> Im [Arbeitsentwurf von Overflow Level 3](https://www.w3.org/TR/css-overflow-3/) gibt es einen zusätzlichen Wert `overflow: clip`. Dies verhält sich wie `overflow: hidden`, erlaubt jedoch kein programmatisches Scrollen, die Box wird nicht scrollbar. Außerdem erzeugt es keinen Blockformatierungskontext.

Die Overflow-Eigenschaft ist in Wirklichkeit eine Kurzform für die [`overflow-x`](/de/docs/Web/CSS/overflow-x) und [`overflow-y`](/de/docs/Web/CSS/overflow-y) Eigenschaften. Wenn Sie nur einen Wert für Overflow angeben, wird dieser Wert für beide Achsen verwendet. Sie können jedoch beide Werte angeben, wobei der erste für `overflow-x` und damit die horizontale Richtung verwendet wird, und der zweite für `overflow-y` und damit die vertikale Richtung. Im untenstehenden Beispiel habe ich nur `overflow-y: scroll` angegeben, sodass wir die unerwünschte horizontale Scrollleiste nicht erhalten.

{{EmbedGHLiveSample("css-examples/flow/overflow/overflow-y.html", '100%', 700)}}

## Fluss-relative Eigenschaften

Im Leitfaden zu [Schreibrichtungen und Fluss-Layout](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes) haben wir uns die neueren Eigenschaften `block-size` und `inline-size` angesehen, die mehr Sinn machen, wenn man mit verschiedenen Schreibrichtungen arbeitet, als unser Layout an die physischen Abmessungen des Bildschirms zu binden. Das Level 3 Overflow-Modul enthält auch fluss-relative Eigenschaften für Overflow - [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block) und [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline). Diese entsprechen `overflow-x` und `overflow-y`, aber die Zuordnung hängt von der Schreibrichtung des Dokuments ab.

Diese Eigenschaften sind derzeit in Browsern nicht implementiert, daher müssen Sie derzeit die physischen Eigenschaften verwenden und an Ihre Schreibrichtung anpassen.

## Anzeige von Overflow

In der Overflow-Spezifikation Level 3 haben wir einige Eigenschaften, die helfen können, das Aussehen von Inhalt in einer Overflow-Situation zu verbessern.

### Overflow auf der Inline-Achse

Die [`text-overflow`](/de/docs/Web/CSS/text-overflow)-Eigenschaft befasst sich mit Text, der in der Inline-Richtung überläuft. Sie nimmt einen von zwei Werten an: `clip`, wobei der Inhalt abgeschnitten wird, wenn er überläuft, das ist der Anfangswert und daher das Standardverhalten. Wir haben auch `ellipsis`, das ein Auslassungszeichen rendert, das möglicherweise durch ein besseres Zeichen für die verwendete Sprache oder Schreibrichtung ersetzt wird.

{{EmbedGHLiveSample("css-examples/flow/overflow/text-overflow.html", '100%', 500)}}

### Overflow auf der Block-Achse

Es gibt auch einen Vorschlag für eine `block-overflow`-Eigenschaft, obwohl der Name zum Zeitpunkt des Schreibens noch zur Diskussion steht. Dieser Vorschlag würde das Hinzufügen eines Auslassungszeichens ermöglichen, wenn der Text in der Blockdimension überläuft.

Dies ist nützlich in einer Situation, in der Sie eine Liste von Artikeln haben und die Liste in Boxen mit fester Höhe anzeigen, die nur eine begrenzte Textmenge aufnehmen. Es ist möglicherweise nicht offensichtlich für den Leser, dass es mehr Inhalt gibt, auf den geklickt werden kann, wenn er auf die Box oder den Titel klickt. Ein Auslassungszeichen zeigt klar an, dass es mehr Inhalt gibt. Die Spezifikation würde es ermöglichen, eine Zeichenkette von Inhalten oder ein reguläres Auslassungszeichen einzufügen.

## Zusammenfassung

Ob Sie sich in kontinuierlichen Medien im Web oder in einem formatseitigen Medium wie Druck oder EPUB befinden, das Verstehen, wie Inhalt überläuft, ist nützlich, um mit jeder Layoutmethode umzugehen. Indem Sie verstehen, wie Overflow im normalen Fluss funktioniert, sollten Sie es einfacher finden, die Auswirkungen von Overflow-Inhalten in Layoutmethoden wie Grid und Flexbox zu verstehen.
