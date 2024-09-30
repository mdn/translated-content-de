---
title: Inline formatting context
slug: Web/CSS/Inline_formatting_context
l10n:
  sourceCommit: ccd645a460387d3ae8ac75fe086c0e90f98203de
---

{{CSSRef}}

Dieser Artikel erklärt den Inline-Formatierungskontext.

## Grundkonzepte

Der Inline-Formatierungskontext ist Teil der visuellen Darstellung einer Webseite. Inline-Boxen werden eine nach der anderen in der Richtung angeordnet, in der Sätze im verwendeten Schreibmodus verlaufen:

- In einem horizontalen Schreibmodus werden Boxen horizontal von links nach rechts angeordnet.
- In einem vertikalen Schreibmodus würden sie vertikal von oben nach unten angeordnet.

Im folgenden Beispiel sind die zwei {{HTMLElement("div")}}-Elemente mit den schwarzen Rahmen Teil eines [Block-Formatierungskontexts](/de/docs/Web/CSS/CSS_display/Block_formatting_context), während innerhalb jeder Box die Wörter in einem Inline-Formatierungskontext teilnehmen. Die Wörter im horizontalen Schreibmodus laufen horizontal, während Wörter im vertikalen Schreibmodus vertikal verlaufen.

{{EmbedGHLiveSample("css-examples/inline-formatting/inline.html", '100%', 720)}}

Boxen, die eine Linie bilden, werden von einem rechteckigen Bereich namens Zeilenbox enthalten. Diese Box wird groß genug sein, um alle Inline-Boxen in dieser Zeile zu enthalten; wenn in der Inline-Richtung kein Platz mehr ist, wird eine weitere Zeile erstellt. Daher ist ein Absatz eine Reihe von Inline-Zeilenboxen, die in der Blockrichtung gestapelt sind.

Wenn eine Inline-Box geteilt wird, haben Ränder, Rahmen und Abstände dort, wo die Teilung erfolgt, keinen visuellen Effekt. Im nächsten Beispiel gibt es ein {{HTMLElement("span")}}-Element, das eine Reihe von Wörtern umschließt, die auf zwei Linien umgebrochen werden. Der Rahmen auf dem `<span>` bricht an der Umbruchstelle.

{{EmbedGHLiveSample("css-examples/inline-formatting/break.html", '100%', 720)}}

Ränder, Rahmen und Abstände in der Inline-Richtung werden berücksichtigt. Im folgenden Beispiel sehen Sie, wie der Rand, der Rahmen und der Abstand auf dem Inline-`<span>`-Element hinzugefügt werden.

{{EmbedGHLiveSample("css-examples/inline-formatting/mbp.html", '100%', 920)}}

> [!NOTE]
> Ich verwende die logischen, flussabhängigen Eigenschaften — {{cssxref("padding-inline-start")}} anstelle von {{cssxref("padding-left")}} — damit sie in der Inline-Dimension funktionieren, unabhängig davon, ob der Text horizontal oder vertikal ist. Lesen Sie mehr über diese Eigenschaften in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

## Ausrichtung in der Blockrichtung

Inline-Boxen können in der Blockrichtung auf verschiedene Weise ausgerichtet werden, indem die {{cssxref("vertical-align")}}-Eigenschaft verwendet wird, die in vertikalen Schreibmodi auf der Blockachse ausrichtet (also überhaupt nicht vertikal!). Im folgenden Beispiel macht der große Text die Zeilenbox des ersten Satzes größer, deshalb kann die `vertical-align`-Eigenschaft verwendet werden, um die Inline-Boxen auf beiden Seiten auszurichten. Ich habe den Wert `top` verwendet, versuchen Sie ihn in `middle`, `bottom` oder `baseline` zu ändern.

{{EmbedGHLiveSample("css-examples/inline-formatting/align.html", '100%', 920)}}

## Ausrichtung in der Inline-Richtung

Gibt es zusätzlichen Platz in der Inline-Richtung, kann die {{cssxref("text-align")}}-Eigenschaft verwendet werden, um die Inline-Boxen innerhalb ihrer Zeilenbox auszurichten. Versuchen Sie, den Wert von `text-align` unten auf `end` zu ändern.

{{EmbedGHLiveSample("css-examples/inline-formatting/text-align.html", '100%', 920)}}

## Effekt von Floats

Zeilenboxen haben normalerweise die gleiche Größe in der Inline-Richtung, daher die gleiche Breite, wenn in einem horizontalen Schreibmodus gearbeitet wird, oder Höhe, wenn in einem vertikalen Schreibmodus gearbeitet wird. Wenn sich jedoch ein {{cssxref("float")}} im selben Block-Formatierungskontext befindet, führt das Float dazu, dass die Zeilenboxen, die das Float umfließen, kürzer werden.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
