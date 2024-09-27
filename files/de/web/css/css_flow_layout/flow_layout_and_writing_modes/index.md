---
title: Flusslayout und Schreibmodi
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie sich normaler Fluss verhält, geht von einem horizontalen Schreibmodus aus. [Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)-Eigenschaften sollten im selben Weise in vertikalen Schreibmodi funktionieren. In diesem Leitfaden schauen wir uns an, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokumentenschreibmodi verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibmodi in CSS, das Ziel hier ist es, die Bereiche zu dokumentieren, in denen das Flusslayout mit Schreibmodi auf möglicherweise unerwartete Weise interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen zu Schreibmodi.

## Schreibmodi-Spezifikation

Die CSS Writing Modes Level 3 Spezifikation definiert die Auswirkung, die eine Änderung des Dokumentenschreibmodus auf das Flusslayout hat. In der Einführung zu den Schreibmodi [sagt die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Ein Schreibmodus in CSS wird durch die {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}}-Eigenschaften bestimmt. Er wird in erster Linie in Bezug auf seine inline Basisrichtung und Blockflussrichtung definiert."

Die Spezifikation definiert die _inline Basisrichtung_ als die Richtung, in der der Inhalt auf einer Zeile geordnet ist. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie auf eine neue Zeile umbrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der Blöcke, beispielsweise Absätze, in diesem Schreibmodus gestapelt werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` umstellen möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, und dies ändert die Richtung der Blöcke und damit auch die Inline-Richtung.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine bestimmte Textausrichtung verwenden, können wir diese Eigenschaften auch kreativ nutzen, beispielsweise um eine Überschrift vertikal laufen zu lassen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}

## Blockflussrichtung

Die {{cssxref("writing-mode")}}-Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine von oben nach unten Blockflussrichtung mit einer horizontalen Inline-Richtung bedeutet. Links-nach-rechts-Sprachen, wie Englisch, und Rechts-nach-links-Sprachen, wie Arabisch, sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die `horizontal-tb` verwenden.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}

Der Wert `vertical-rl` gibt Ihnen eine Rechts-nach-links Blockflussrichtung mit einer vertikalen Inline-Richtung, wie im nächsten Beispiel gezeigt wird.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine Links-nach-rechts Blockflussrichtung und eine vertikale Inline-Richtung.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}

## Verschachtelte Schreibmodi

Wenn einem verschachtelten Kasten ein anderer Schreibmodus als seinem Elternteil zugewiesen wird, wird ein Inline-Level-Kasten so angezeigt, als hätte er `display: inline-block`.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}

Ein Block-Level-Kasten wird einen neuen Blockformatierungskontext etablieren, was bedeutet, dass, wenn sein innerer Anzeigetyp `flow` wäre, er einen berechneten Anzeigetyp von `flow-root` erhalten wird. Dies wird im nächsten Beispiel gezeigt, wo der Kasten, der als `horizontal-tb` angezeigt wird, ein Schweben enthält, das aufgrund seiner Eltern, die einen neuen BFC festlegen, enthalten ist.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}

## Ersetzte Elemente

Ersetzte Elemente wie Bilder ändern ihre Ausrichtung nicht basierend auf der `writing-mode`-Eigenschaft. Ersetzte Elemente wie Formularelemente, die Text enthalten, sollten jedoch dem verwendeten Schreibmodus entsprechen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}

## Logische Eigenschaften und Werte

Sobald Sie in anderen Schreibmodi als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die den physischen Dimensionen des Bildschirms zugeordnet sind, seltsam. Beispielsweise, wenn Sie einem Kasten eine Breite von 100px geben, würde dies in `horizontal-tb` die Größe in der Inline-Richtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}

Daher haben wir neue Eigenschaften von {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir uns in einem horizontalen oder vertikalen Schreibmodus befinden, `inline-size` wird immer die Größe in der Inline-Richtung bedeuten.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}

Das [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Rahmen sowie andere Zuordnungen für Dinge steuern, die wir typischerweise in physikalischen Richtungen spezifiziert haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout so, wie Sie es erwarten würden, wenn Sie den Schreibmodus des Dokuments oder Teile des Dokuments ändern. Dies kann verwendet werden, um vertikale Sprachen korrekt zu setzen oder aus kreativen Gründen. CSS macht dies einfacher durch die Einführung logischer Eigenschaften und Werte, sodass beim Arbeiten in einem vertikalen Schreibmodus die Größe basierend auf der Inline- und Blockgröße des Elements festgelegt werden kann. Dies wird nützlich sein, wenn Sie Komponenten erstellen, die in verschiedenen Schreibmodi arbeiten können.

## Siehe auch

- [Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibmodi und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) auf Smashing Magazine (2019)
- [CSS-Schreibmodi](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
