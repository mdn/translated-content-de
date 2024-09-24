---
title: Inline-Formatierungskontext
slug: Web/CSS/Inline_formatting_context
l10n:
  sourceCommit: ccd645a460387d3ae8ac75fe086c0e90f98203de
---

{{CSSRef}}

Dieser Artikel erklärt den Inline-Formatierungskontext.

## Hauptkonzepte

Der Inline-Formatierungskontext ist Teil der visuellen Darstellung einer Webseite. Inline-Boxen werden nacheinander in der Richtung angeordnet, in der Sätze im verwendeten Schreibmodus verlaufen:

- In einem horizontalen Schreibmodus werden Boxen horizontal angeordnet, beginnend von links.
- In einem vertikalen Schreibmodus würden sie vertikal angeordnet, beginnend von oben.

Im untenstehenden Beispiel sind die beiden {{HTMLElement("div")}}-Elemente mit den schwarzen Rahmen Teil eines [Block-Formatierungskontextes](/de/docs/Web/CSS/CSS_display/Block_formatting_context), während innerhalb jeder Box die Wörter an einem Inline-Formatierungskontext teilnehmen. Die Wörter im horizontalen Schreibmodus verlaufen horizontal, während Wörter im vertikalen Schreibmodus vertikal verlaufen.

{{EmbedGHLiveSample("css-examples/inline-formatting/inline.html", '100%', 720)}}

Boxen, die eine Linie bilden, sind in einem rechteckigen Bereich enthalten, der als Linien-Box bezeichnet wird. Diese Box wird groß genug sein, um alle Inline-Boxen in dieser Linie zu enthalten; wenn kein Platz mehr in der Inline-Richtung ist, wird eine weitere Linie erstellt. Daher ist ein Absatz eine Reihe von Inline-Linien-Boxen, die in der Block-Richtung gestapelt sind.

Wenn eine Inline-Box geteilt wird, haben Ränder, Rahmen und Polsterungen keinen visuellen Effekt, wo die Teilung erfolgt. Im nächsten Beispiel gibt es ein {{HTMLElement("span")}}-Element, das eine Reihe von Wörtern umschließt, die auf zwei Zeilen umbrechen. Der Rahmen auf dem `<span>` bricht am Umbrechpunkt.

{{EmbedGHLiveSample("css-examples/inline-formatting/break.html", '100%', 720)}}

Ränder, Rahmen und Polsterungen in der Inline-Richtung werden respektiert. Im folgenden Beispiel können Sie sehen, wie der Rand, der Rahmen und die Polsterung auf dem Inline-`<span>`-Element hinzugefügt werden.

{{EmbedGHLiveSample("css-examples/inline-formatting/mbp.html", '100%', 920)}}

> [!NOTE]
> Ich verwende die logischen, flussrelativen Eigenschaften — {{cssxref("padding-inline-start")}} anstelle von {{cssxref("padding-left")}} — damit sie in der Inline-Dimension funktionieren, egal ob der Text horizontal oder vertikal ist. Lesen Sie mehr über diese Eigenschaften in [Logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

## Ausrichtung in der Block-Richtung

Inline-Boxen können in der Block-Richtung auf verschiedene Weisen mit der {{cssxref("vertical-align")}}-Eigenschaft ausgerichtet werden, die auf der Block-Achse in vertikalen Schreibmodi ausrichtet (daher überhaupt nicht vertikal!). Im untenstehenden Beispiel macht der große Text die Linien-Box des ersten Satzes größer, daher kann die `vertical-align`-Eigenschaft verwendet werden, um die Inline-Boxen auf beiden Seiten auszurichten. Ich habe den Wert `top` verwendet, versuchen Sie, ihn in `middle`, `bottom` oder `baseline` zu ändern.

{{EmbedGHLiveSample("css-examples/inline-formatting/align.html", '100%', 920)}}

## Ausrichtung in der Inline-Richtung

Wenn es zusätzlichen Platz in der Inline-Richtung gibt, kann die {{cssxref("text-align")}}-Eigenschaft verwendet werden, um die Inline-Boxen innerhalb ihrer Linien-Box auszurichten. Versuchen Sie, den Wert von `text-align` unten in `end` zu ändern.

{{EmbedGHLiveSample("css-examples/inline-formatting/text-align.html", '100%', 920)}}

## Effekt von Floats

Linien-Boxen haben normalerweise die gleiche Größe in der Inline-Richtung, also die gleiche Breite, wenn in einem horizontalen Schreibmodus gearbeitet wird, oder Höhe, wenn in einem vertikalen Schreibmodus gearbeitet wird. Falls jedoch ein {{cssxref("float")}} innerhalb desselben Block-Formatierungskontextes vorhanden ist, wird das Float dazu führen, dass die Linien-Boxen, die das Float umgeben, kürzer werden.

{{EmbedGHLiveSample("css-examples/flow/formatting-contexts/float.html", '100%', 720)}}

## Siehe auch

- [Block-Formatierungskontext](/de/docs/Web/CSS/CSS_display/Block_formatting_context)
- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
