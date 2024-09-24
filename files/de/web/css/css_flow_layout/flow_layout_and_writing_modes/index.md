---
title: Flusslayout und Schreibmodi
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einem horizontalen Schreibmodus aus. [Layout](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) Eigenschaften sollten in vertikalen Schreibmodi auf die gleiche Weise funktionieren. In diesem Leitfaden betrachten wir, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokumentenschreibmodi verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibmodi in CSS; das Ziel hier ist es, die Bereiche zu dokumentieren, in denen das Flusslayout möglicherweise auf unerwartete Weise mit Schreibmodi interagiert. Der Abschnitt [Siehe auch](#siehe_auch) bietet Links zu weiteren Ressourcen zu Schreibmodi.

## Schreibmodi-Spezifikation

Die CSS Writing Modes Level 3 Spezifikation definiert die Auswirkungen, die ein Wechsel des Schreibmodus des Dokuments auf das Flusslayout hat. In der Einführung der Schreibmodi [sagt die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Ein Schreibmodus in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}}, und {{cssxref("text-orientation")}} bestimmt. Er wird hauptsächlich in Bezug auf seine Inline-Basisrichtung und Blockfließrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der Inhalte auf einer Linie angeordnet sind. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie in eine neue Linie umgebrochen wird.

Die _Blockfließrichtung_ ist die Richtung, in der Kästen, zum Beispiel Absätze, in diesem Schreibmodus gestapelt werden. Die CSS-Schreibmodus-Eigenschaft steuert die Blockfließrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite in `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element setzen, und dies wird die Richtung der Blöcke und damit auch die Inlinerichtung ändern.

Während bestimmte Sprachen einen bestimmten Schreibmodus oder eine bestimmte Textrichtung verwenden, können wir diese Eigenschaften auch für kreative Effekte nutzen, wie zum Beispiel ein vertikal verlaufendes Überschrift.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}

## Blockfließrichtung

Die {{cssxref("writing-mode")}} Eigenschaft akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der Anfangswert ist `horizontal-tb`, was eine Fließrichtung von oben nach unten mit einer horizontalen Inlinerichtung ist. Links-nach-rechts Sprachen wie Englisch und Rechts-nach-links Sprachen wie Arabisch sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die `horizontal-tb` verwenden.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}

Der Wert `vertical-rl` gibt Ihnen eine rechts-nach-links Blockfließrichtung mit einer vertikalen Inlinerichtung, wie im nächsten Beispiel gezeigt.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dies gibt Ihnen eine links-nach-rechts Blockfließrichtung und eine vertikale Inlinerichtung.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}

## Verschachtelte Schreibmodi

Wenn einem verschachtelten Kasten ein anderer Schreibmodus als seinem Elternkasten zugewiesen wird, dann wird ein Inline-Level-Kasten so angezeigt, als hätte er `display: inline-block`.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}

Ein Blocklevel-Kasten wird einen neuen Blockformatierungskontext etablieren, was bedeutet, dass wenn sein innerer Anzeigetyp `flow` wäre, er einen berechneten Anzeigetyp von `flow-root` erhält. Dies wird im nächsten Beispiel gezeigt, wo der Kasten, der als `horizontal-tb` angezeigt wird, einen Float enthält, der aufgrund seines Elternkastens, der einen neuen BFC etabliert, enthalten ist.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}

## Ersetzte Elemente

Ersetzte Elemente wie Bilder werden ihre Ausrichtung basierend auf der `writing-mode` Eigenschaft nicht ändern. Allerdings sollten ersetzte Elemente wie Formularelemente, die Text enthalten, dem verwendeten Schreibmodus entsprechen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}

## Logische Eigenschaften und Werte

Sobald Sie in anderen Schreibmodi als `horizontal-tb` arbeiten, erscheinen viele der Eigenschaften und Werte, die auf die physischen Dimensionen des Bildschirms abgebildet sind, seltsam. Zum Beispiel, wenn Sie einem Kasten eine Breite von 100px geben, würde das in `horizontal-tb` die Größe in der Inlinerichtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}

Daher haben wir neue Eigenschaften wie {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir in einem horizontalen oder vertikalen Schreibmodus sind, `inline-size` wird immer die Größe in der Inlinerichtung bedeuten.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Ränder, Abstände und Rahmen steuern, sowie andere Zuordnungen für Dinge, die wir typischerweise mit physischen Richtungen angegeben haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout wie erwartet, wenn der Schreibmodus des Dokuments oder von Teilen des Dokuments geändert wird. Dies kann verwendet werden, um vertikale Sprachen ordentlich zu setzen oder aus kreativen Gründen. CSS erleichtert dies, indem logische Eigenschaften und Werte eingeführt werden, sodass beim Arbeiten in einem vertikalen Schreibmodus die Größe auf der Inline- und Blockgröße eines Elements basieren kann. Dies wird nützlich sein, wenn Sie Komponenten erstellen, die in verschiedenen Schreibmodi funktionieren können.

## Siehe auch

- [Schreibmodi](/de/docs/Web/CSS/CSS_writing_modes)
- [Writing modes und CSS Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) bei Smashing Magazine (2019)
- [CSS Schreibmodi](https://24ways.org/2016/css-writing-modes/) bei 24ways.org (2016)
