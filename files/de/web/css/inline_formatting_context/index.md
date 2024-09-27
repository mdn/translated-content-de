---
title: Inline-Formatierungskontext
slug: Web/CSS/Inline_formatting_context
l10n:
  sourceCommit: ccd645a460387d3ae8ac75fe086c0e90f98203de
---

{{CSSRef}}

Dieser Artikel erklärt den Inline-Formatierungskontext.

## Grundlegende Konzepte

Der Inline-Formatierungskontext ist Teil der visuellen Darstellung einer Webseite. Inline-Boxen werden nacheinander in die Richtung angeordnet, in der die Sätze im verwendeten Schreibmodus verlaufen:

- In einem horizontalen Schreibmodus werden Boxen horizontal von links aus angeordnet.
- In einem vertikalen Schreibmodus würden sie vertikal von oben beginnend angeordnet.

Im folgenden Beispiel sind die beiden {{HTMLElement("div")}}-Elemente mit den schwarzen Rändern Teil eines [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context), während innerhalb jeder Box die Wörter an einem Inline-Formatierungskontext teilnehmen. Die Wörter im horizontalen Schreibmodus verlaufen horizontal, während Wörter im vertikalen Schreibmodus vertikal verlaufen.

{{EmbedGHLiveSample("css-examples/inline-formatting/inline.html", '100%', 720)}}

Boxen, die eine Linie bilden, sind von einem rechteckigen Bereich namens Zeilenbox umgeben. Diese Box wird groß genug sein, um alle Inline-Boxen in dieser Zeile zu enthalten; wenn kein Platz mehr in der Inline-Richtung vorhanden ist, wird eine neue Zeile erstellt. Daher ist ein Absatz ein Satz von Inline-Zeilenboxen, die in der Blockrichtung gestapelt sind.

Wenn eine Inline-Box geteilt wird, haben Abstände, Rahmen und Polsterungen an der Teilungsstelle keine sichtbare Wirkung. Im nächsten Beispiel gibt es ein {{HTMLElement("span")}}-Element, das eine Reihe von Wörtern umschließt, die sich auf zwei Zeilen erstrecken. Der Rahmen auf dem `<span>` bricht an der Umbruchstelle.

{{EmbedGHLiveSample("css-examples/inline-formatting/break.html", '100%', 720)}}

Abstände, Rahmen und Polsterungen in der Inline-Richtung werden berücksichtigt. Im untenstehenden Beispiel können Sie sehen, wie der Abstand, der Rahmen und die Polsterung auf dem Inline-`<span>`-Element hinzugefügt werden.

{{EmbedGHLiveSample("css-examples/inline-formatting/mbp.html", '100%', 920)}}

> [!NOTE]
> Ich verwende die logischen, flussabhängigen Eigenschaften — {{cssxref("padding-inline-start")}} anstelle von {{cssxref("padding-left")}} — damit sie in der Inline-Dimension funktionieren, egal ob der Text horizontal oder vertikal ist. Lesen Sie mehr über diese Eigenschaften in [Logical Properties and Values](/de/docs/Web/CSS/CSS_logical_properties_and_values).

## Ausrichtung in der Blockrichtung

Inline-Boxen können in der Blockrichtung auf verschiedene Weise ausgerichtet werden, indem die Eigenschaft {{cssxref("vertical-align")}} verwendet wird, die auf der Blockachse in vertikalen Schreibmodi ausrichtet (daher überhaupt nicht vertikal!). Im folgenden Beispiel macht der große Text die Zeilenbox des ersten Satzes größer, daher kann die `vertical-align`-Eigenschaft verwendet werden, um die Inline-Boxen auf beiden Seiten davon auszurichten. Ich habe den Wert `top` verwendet, versuchen Sie ihn auf `middle`, `bottom` oder `baseline` zu ändern.

{{EmbedGHLiveSample("css-examples/inline-formatting/align.html", '100%', 920)}}

## Ausrichtung in der Inline-Richtung

Wenn es zusätzlichen Platz in der Inline-Richtung gibt, kann die Eigenschaft {{cssxref("text-align")}} verwendet werden, um die Inline-Boxen innerhalb ihrer Zeilenbox auszurichten. Versuchen Sie den Wert von `text-align` unten auf `end` zu ändern.

{{EmbedGHLiveSample("css-examples/inline-formatting/text-align.html", '100%', 920)}}

## Wirkung von Floats

Zeilenboxen haben normalerweise die gleiche Größe in der Inline-Richtung, daher die gleiche Breite, wenn im horizontalen Schreibmodus gearbeitet wird, oder Höhe, wenn im vertikalen Schreibmodus gearbeitet wird. Wenn jedoch ein {{cssxref("float")}} innerhalb desselben Block-Formatierungskontexts vorhanden ist, führt der Float dazu, dass die Zeilenboxen, die den Float umfließen, kürzer werden.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
