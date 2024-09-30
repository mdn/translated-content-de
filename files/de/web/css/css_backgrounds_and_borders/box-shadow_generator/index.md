---
title: Box-shadow Generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 883b021c97375f872d0702f0d0747b1373155cef
---

{{CSSRef}}

Dieses Tool ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Box-Schattierungen zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

Der Box-shadow-Generator erlaubt es Ihnen, ein oder mehrere Box-Schattierungen zu einem Element hinzuzufügen.

Beim Öffnen des Tools finden Sie ein Rechteck im oberen rechten Bereich des Tools. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (so wie es beim ersten Laden der Seite der Fall ist), können Sie einige grundlegende Stiländerungen vornehmen:

- Setzen Sie die {{cssxref("color")}} des Elements mit dem Farbauswahl-Tool fest.
- Geben Sie dem Element einen {{cssxref("border")}}, indem Sie das "border"-Kontrollkästchen verwenden.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}}-Eigenschaften des Elements festzulegen.

Um einen Box-Schatten hinzuzufügen, klicken Sie auf die "+"-Schaltfläche oben links. Dadurch wird ein Schatten hinzugefügt und dieser wird in der linken Spalte aufgelistet. Nun können Sie die Werte des neuen Schattens festlegen:

- Setzen Sie die {{cssxref("color")}} des Schattens mit dem Farbauswahl-Tool fest.
- Setzen Sie den Schatten mithilfe des "inset"-Kontrollkästchens auf "inset".
- Verwenden Sie die Schieberegler, um die Position, die Unschärfe und die Ausbreitung des Schattens festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Nun werden alle von Ihnen festgelegten Werte auf diesen neuen Schatten angewendet. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓ Schaltflächen oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der linken Spalte anklicken. Um die Stile des Elements selbst zu aktualisieren, wählen Sie es aus, indem Sie oben auf die Schaltfläche "element" klicken.

Sie können dem Element {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente hinzufügen und ihnen ebenfalls Box-Schattierungen geben. Um zwischen dem Element und seinen Pseudo-Elementen zu wechseln, verwenden Sie die oben mit "element", ":before" und ":after" beschrifteten Tasten.

Das Feld unten rechts enthält das CSS für das Element und alle `before::`- oder `::after`-Pseudo-Elemente.

## Siehe auch

- [Border-image Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, Rahmenbilder visuell zu erstellen (die {{cssxref("border-image")}}-Eigenschaft).
- [Border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, abgerundete Ecken visuell zu erstellen (die {{cssxref("border-radius")}}-Eigenschaft).
