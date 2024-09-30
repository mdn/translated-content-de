---
title: CSS-Fluss-Layout
slug: Web/CSS/CSS_flow_layout
l10n:
  sourceCommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{CSSRef}}

_Normal Flow_, oder Fluss-Layout, ist die Art und Weise, wie Block- und Inline-Elemente auf einer Seite angezeigt werden, bevor Änderungen an ihrem Layout vorgenommen werden. Der Fluss ist im Wesentlichen eine Anordnung von Elementen, die alle zusammenarbeiten und sich in Ihrem Layout gegenseitig kennen. Sobald etwas _aus dem Fluss_ genommen wird, arbeitet es unabhängig.

Im normalen Fluss werden **Inline-Elemente** in der Inline-Richtung angezeigt, das heißt in der Richtung, in der Wörter in einem Satz entsprechend dem [Schreibmodus](/de/docs/Web/CSS/CSS_writing_modes) des Dokuments angezeigt werden. **Block-Elemente** werden nacheinander dargestellt, ähnlich wie Absätze im Schreibmodus des Dokuments. Im Englischen also werden Inline-Elemente nacheinander angezeigt, beginnend von links, und Block-Elemente starten oben und bewegen sich die Seite hinunter.

## Grundlegendes Beispiel

Das folgende Beispiel demonstriert Block- und Inline-Elemente. Die beiden Absatz-Elemente mit einem grünen Rahmen sind Block-Level und werden übereinander angezeigt.

Der erste Satz enthält auch ein `span`-Element mit einem blauen Hintergrund. Dies ist auf Inline-Ebene und wird daher im Satz angezeigt.

{{EmbedGHLiveSample("css-examples/layout/normal-flow.html", '100%', 720)}}

## Leitfäden

- [Block- und Inline-Layout im Normalfluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Im Fluss und aus dem Fluss](/de/docs/Web/CSS/CSS_flow_layout/In_flow_and_out_of_flow)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
- [Fluss-Layout und Schreibmodi](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_writing_modes)
- [Fluss-Layout und Überlauf](/de/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow)

## Referenz

### Glossareinträge

- [Block (CSS)](/de/docs/Glossary/Block/CSS)
