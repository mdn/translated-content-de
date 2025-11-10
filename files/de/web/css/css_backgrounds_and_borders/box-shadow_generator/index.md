---
title: Box-Shadow-Generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 0e8ed361bbd7f1dd59ee0d1b7396ee7683e9a6c6
---

Dieses Tool ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Box-Shadow-Effekte zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 1000)}}

Der Box-Shadow-Generator ermöglicht Ihnen, einem Element einen oder mehrere Box-Shadows hinzuzufügen.

Beim Öffnen des Tools finden Sie ein Rechteck im oberen rechten Bereich des Tools. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (was es ist, wenn Sie die Seite das erste Mal laden), können Sie einige grundlegende Styles darauf anwenden:

- Stellen Sie die {{cssxref("color")}} des Elements mithilfe des Farbwahlwerkzeugs ein.
- Geben Sie dem Element eine {{cssxref("border")}}, indem Sie das "border"-Kontrollkästchen verwenden.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Shadow hinzuzufügen, klicken Sie auf die "+"-Schaltfläche oben links. Dadurch wird ein Schatten hinzugefügt und in der linken Spalte aufgelistet. Jetzt können Sie die Werte des neuen Schattens festlegen:

- Bestimmen Sie die {{cssxref("color")}} des Schattens mithilfe des Farbwahlwerkzeugs.
- Verwenden Sie das "inset"-Kontrollkästchen, um den Schatten einzusetzt.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausbreitung des Schattens festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Alle jetzt festgelegten Werte gelten für diesen neuen Schatten. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mithilfe der ↑ und ↓ Schaltflächen oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der linken Spalte anklicken. Um die eigenen Stile des Elements zu aktualisieren, wählen Sie es aus, indem Sie die Schaltfläche mit der Beschriftung "Element" oben anklicken.

Sie können dem Element {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente hinzufügen und ihnen ebenfalls Box-Shadows geben. Um zwischen dem Element und seinen Pseudoelementen zu wechseln, verwenden Sie die oben mit "Element", "::before" und "::after" beschrifteten Schaltflächen.

Das Feld unten rechts enthält das CSS für das Element und alle `::before` oder `::after` Pseudoelemente.

## Siehe auch

- [Border-Image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, Randbilder (die {{cssxref("border-image")}} Eigenschaft) visuell zu erstellen.
- [Border-Radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, abgerundete Ecken (die {{cssxref("border-radius")}} Eigenschaft) visuell zu erstellen.
