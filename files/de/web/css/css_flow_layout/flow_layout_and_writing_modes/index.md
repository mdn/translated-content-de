---
title: Flusslayout und Schreibrichtungen
slug: Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{CSSRef}}

Die CSS 2.1-Spezifikation, die beschreibt, wie der normale Fluss funktioniert, geht von einer horizontalen Schreibrichtung aus. Die [Layout-](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow) Eigenschaften sollten in vertikalen Schreibrichtungen auf die gleiche Weise funktionieren. In diesem Leitfaden betrachten wir, wie sich das Flusslayout verhält, wenn es mit verschiedenen Dokumentenschreibrichtungen verwendet wird.

Dies ist kein umfassender Leitfaden zur Verwendung von Schreibrichtungen in CSS. Ziel ist es, die Bereiche zu dokumentieren, in denen das Flusslayout möglicherweise auf unerwartete Weise mit Schreibrichtungen interagiert. Der Abschnitt [Siehe auch](#siehe_auch) enthält Links zu weiteren Ressourcen über Schreibrichtungen.

## Spezifikation für Schreibrichtungen

Die CSS Writing Modes Level 3 Spezifikation definiert die Auswirkungen einer Änderung der Schreibrichtung des Dokuments auf das Flusslayout. In der Einführung zu Schreibrichtungen [sagt die Spezifikation](https://drafts.csswg.org/css-writing-modes-3/#text-flow),

> "Eine Schreibrichtung in CSS wird durch die Eigenschaften {{cssxref("writing-mode")}}, {{cssxref("direction")}} und {{cssxref("text-orientation")}} bestimmt. Sie wird in erster Linie in Bezug auf ihre Inline-Basisrichtung und Blockflussrichtung definiert."

Die Spezifikation definiert die _Inline-Basisrichtung_ als die Richtung, in der der Inhalt in einer Zeile angeordnet ist. Dies definiert den Anfang und das Ende der Inline-Richtung. Der Anfang ist dort, wo Sätze beginnen, und das Ende ist dort, wo eine Textzeile endet, bevor sie auf eine neue Zeile umbrochen würde.

Die _Blockflussrichtung_ ist die Richtung, in der Kästen, z.B. Absätze, in dieser Schreibrichtung angeordnet werden. Die CSS-Eigenschaft `writing-mode` steuert die Blockflussrichtung. Wenn Sie Ihre Seite oder einen Teil Ihrer Seite auf `vertical-lr` ändern möchten, können Sie `writing-mode: vertical-lr` auf das Element anwenden und dies wird die Richtung der Blöcke und damit auch die Inline-Richtung ändern.

Während bestimmte Sprachen eine bestimmte Schreibrichtung oder Textausrichtung verwenden, können wir diese Eigenschaften auch für kreative Effekte nutzen, wie z.B. eine Überschrift vertikal anzuzeigen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/creative-use.html", '100%', 720)}}

## Blockflussrichtung

Die Eigenschaft {{cssxref("writing-mode")}} akzeptiert die Werte `horizontal-tb`, `vertical-rl` und `vertical-lr`. Diese Werte steuern die Richtung, in der Blöcke auf der Seite fließen. Der anfängliche Wert ist `horizontal-tb`, was eine Flussrichtung von oben nach unten mit einer horizontalen Inline-Richtung beschreibt. Links-nach-rechts-Sprachen wie Englisch und Rechts-nach-links-Sprachen wie Arabisch sind alle `horizontal-tb`.

Das folgende Beispiel zeigt Blöcke, die `horizontal-tb` verwenden.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/horizontal-tb.html", '100%', 720)}}

Der Wert `vertical-rl` gibt eine Blockflussrichtung von rechts nach links mit einer vertikalen Inline-Richtung, wie im nächsten Beispiel gezeigt.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-rl.html", '100%', 720)}}

Das letzte Beispiel demonstriert den dritten möglichen Wert für `writing-mode` — `vertical-lr`. Dieser gibt eine Blockflussrichtung von links nach rechts und eine vertikale Inline-Richtung.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/vertical-lr.html", '100%', 720)}}

## Verschachtelte Schreibrichtungen

Wenn einem verschachtelten Kasten eine andere Schreibrichtung als seinem übergeordneten Kasten zugewiesen wird, wird ein Inline-Element angezeigt, als ob es `display: inline-block` hätte.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-change-mode.html", '100%', 720)}}

Ein Block-Element wird einen neuen Blockformatierungskontext erstellen, was bedeutet, dass wenn sein innerer Anzeigetyp `flow` wäre, dieser als `flow-root` berechnet wird. Dies wird im nächsten Beispiel gezeigt, wo der Kasten, der als `horizontal-tb` angezeigt wird, ein Float enthält, der aufgrund seines übergeordneten Elements, das einen neuen BFC etabliert, eingeschlossen ist.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/block-change-mode.html", '100%', 720)}}

## Ersetzte Elemente

Ersetzte Elemente wie Bilder ändern ihre Orientierung nicht basierend auf der Eigenschaft `writing-mode`. Ersetzte Elemente wie Formularsteuerelemente, die Text enthalten, sollten jedoch der verwendeten Schreibrichtung entsprechen.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/replaced.html", '100%', 720)}}

## Logische Eigenschaften und Werte

Sobald Sie in Schreibrichtungen arbeiten, die nicht `horizontal-tb` sind, scheinen viele der Eigenschaften und Werte, die den physischen Dimensionen des Bildschirms zugeordnet sind, seltsam. Wenn Sie zum Beispiel einem Kasten eine Breite von 100px geben, würde dieser Wert in `horizontal-tb` die Größe in der Inline-Richtung steuern. In `vertical-lr` steuert es die Größe in der Blockrichtung, da es sich nicht mit dem Text dreht.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/width.html", '100%', 720)}}

Daher haben wir neue Eigenschaften, {{cssxref("block-size")}} und {{cssxref("inline-size")}}. Wenn wir unserem Block eine `inline-size` von 100px geben, spielt es keine Rolle, ob wir in einem horizontalen oder vertikalen Schreibrichtung arbeiten, `inline-size` wird immer die Größe in der Inline-Richtung bedeuten.

{{EmbedGHLiveSample("css-examples/flow/writing-modes/inline-size.html", '100%', 720)}}

Das Modul [CSS logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) enthält logische Versionen der Eigenschaften, die Margen, Abstände und Rahmen sowie andere Zuordnungen für Dinge steuern, die wir typischerweise mit physischen Richtungen spezifiziert haben.

## Zusammenfassung

In den meisten Fällen funktioniert das Flusslayout wie erwartet, wenn die Schreibrichtung des Dokuments oder Teile des Dokuments geändert werden. Dies kann verwenden werden, um vertikale Sprachen korrekt zu setzen oder aus kreativen Gründen. CSS erleichtert dies durch die Einführung logischer Eigenschaften und Werte, sodass bei der Arbeit in einer vertikalen Schreibrichtung die Größe auf der Inline- und Blockgröße des Elements basieren kann. Dies wird nützlich sein, wenn Komponenten erstellt werden, die in verschiedenen Schreibrichtungen funktionieren können.

## Siehe auch

- [Schreibrichtungen](/de/docs/Web/CSS/CSS_writing_modes)
- [Schreibrichtungen und CSS-Layout](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) bei Smashing Magazine (2019)
- [CSS-Schreibrichtungen](https://24ways.org/2016/css-writing-modes/) auf 24ways.org (2016)
