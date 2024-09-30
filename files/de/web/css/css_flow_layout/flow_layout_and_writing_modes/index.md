---
title: Flow layout und Schreibmodi
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie normaler Fluss funktioniert, geht von einem horizontalen Schreibmodus aus. Die [Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)-Eigenschaften sollten in vertikalen Schreibmodi auf die gleiche Weise funktionieren. In diesem Leitfaden betrachten wir, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokument-Schreibmodi verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibmodi in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen Flusslayout möglicherweise unerwartet mit Schreibmodi interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen zu Schreibmodi.

## Spezifikation der Schreibmodi

Die CSS Writing Modes Level 3-Spezifikation definiert die Auswirkungen, die eine Änderung des Dokument-Schreibmodus auf das Flusslayout hat. In der Einführung zu den Schreibmodi heißt es in der [Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Ein Schreibmodus in CSS wird durch die {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} Eigenschaften bestimmt. Er wird hauptsächlich in Bezug auf seine Inline-Basisrichtung und Blockflussrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der der Inhalt auf einer Linie angeordnet ist. Diese definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie auf eine neue Zeile umbrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der Boxen, zum Beispiel Absätze, in diesem Schreibmodus gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, und dies wird die Richtung der Blöcke und daher auch die Inline-Richtung ändern.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine bestimmte Textausrichtung verwenden, können wir diese Eigenschaften auch für kreative Effekte nutzen, wie zum Beispiel eine Überschrift vertikal laufen zu lassen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}

## Blockflussrichtung

Die {{cssxref("writing-mode")}} Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der anfängliche Wert ist `horizontal-tb`, was eine Blockflussrichtung von oben nach unten mit einer horizontalen Inlinerichtung bedeutet. Links-nach-rechts-Sprachen wie Englisch und Rechts-nach-links-Sprachen wie Arabisch sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke mit `horizontal-tb`.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}

Der Wert `vertical-rl` gibt Ihnen eine Blockflussrichtung von rechts nach links mit einer vertikalen Inlinerichtung, wie im nächsten Beispiel gezeigt.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}

Das letzte Beispiel zeigt den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine Blockflussrichtung von links nach rechts und eine vertikale Inlinerichtung.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}

## Verschachtelte Schreibmodi

Wenn einer verschachtelten Box ein anderer Schreibmodus als ihrem übergeordneten Element zugewiesen wird, wird eine Inline-Level-Box so angezeigt, als hätte sie `display: inline-block`.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}

Eine Block-Level-Box wird einen neuen Block-Formatierungskontext etablieren, was bedeutet, dass, wenn ihr innerer Anzeigetyp `flow` wäre, sie einen berechneten Anzeigetyp von `flow-root` erhält. Dies wird in dem nächsten Beispiel gezeigt, in dem die Box, die als `horizontal-tb` angezeigt wird, einen Float enthält, der aufgrund ihres übergeordneten Elements, das einen neuen BFC etabliert, enthalten ist.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}

## Ersetzte Elemente

Ersetzte Elemente wie Bilder ändern ihre Orientierung nicht basierend auf der `writing-mode` Eigenschaft. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch dem verwendeten Schreibmodus entsprechen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}

## Logische Eigenschaften und Werte

Sobald Sie in anderen Schreibmodi als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die an die physischen Dimensionen des Bildschirms gebunden sind, seltsam. Wenn Sie zum Beispiel einer Box eine Breite von 100px geben, würde dies in `horizontal-tb` die Größe in die Inline-Richtung kontrollieren. In `vertical-lr` kontrolliert es die Größe in die Blockrichtung, da es sich nicht mit dem Text dreht.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}

Daher haben wir neue Eigenschaften von {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, ist es irrelevant, ob wir in einem horizontalen oder vertikalen Schreibmodus sind, `inline-size` wird immer die Größe in der Inline-Richtung bedeuten.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Rahmen steuern, sowie andere Zuordnungen für Dinge, die wir typischerweise mit physischen Richtungen spezifiziert haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout so, wie Sie es erwarten würden, wenn der Schreibmodus des Dokuments oder Teile des Dokuments geändert wird. Dies kann verwendet werden, um vertikale Sprachen korrekt zu setzen oder aus kreativen Gründen. CSS macht dies einfacher, indem logische Eigenschaften und Werte eingeführt werden, sodass bei der Arbeit in einem vertikalen Schreibmodus die Größe basierend auf der Inline- und Blockgröße eines Elements festgelegt werden kann. Dies wird nützlich sein, wenn Sie Komponenten erstellen, die in verschiedenen Schreibmodi funktionieren können.

## Siehe auch

- [Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibmodi und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS Schreibmodi](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
