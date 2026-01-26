---
title: Box-shadow-Generator
slug: Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

Dieses Tool ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Box-Shadow-Effekte zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 1000)}}

Der Box-shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Shadows hinzuzufügen.

Beim Öffnen des Tools finden Sie ein Rechteck im oberen rechten Bereich des Tools. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (wie es der Fall ist, wenn Sie die Seite zum ersten Mal laden), können Sie einige grundlegende Stilformatierungen darauf anwenden:

- Stellen Sie die {{cssxref("color")}} des Elements mit dem Farbauswahl-Tool ein.
- Geben Sie dem Element einen {{cssxref("border")}}, indem Sie das "border" Kontrollkästchen verwenden.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Shadow hinzuzufügen, klicken Sie auf die "+"-Taste oben links. Dies fügt einen Schatten hinzu und listet ihn in der Spalte auf der linken Seite auf. Jetzt können Sie die Werte des neuen Schattens festlegen:

- Stellen Sie die {{cssxref("color")}} des Schattens mit dem Farbauswahl-Tool ein.
- Setzen Sie den Schatten mit dem "inset" Kontrollkästchen auf eingekerbt.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausbreitung des Elements festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Nun werden alle von Ihnen festgelegten Werte auf diesen neuen Schatten angewendet. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓ Tasten oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der Spalte links anklicken. Um die eigenen Stile des Elements zu aktualisieren, wählen Sie es aus, indem Sie die mit "element" beschriftete Taste oben anklicken.

Sie können dem Element {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelemente hinzufügen und ihnen ebenfalls Box-Shadows geben. Um zwischen dem Element und seinen Pseudoelementen umzuschalten, verwenden Sie die oben beschrifteten Tasten "element", "::before" und "::after".

Das Feld unten rechts enthält das CSS für das Element und alle `::before`- oder `::after`-Pseudoelemente.

## Siehe auch

- Andere Tools:
  - [Border-image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
- [CSS-Hintergründe und -Rahmen](/de/docs/Web/CSS/Guides/Backgrounds_and_borders)-Modul
