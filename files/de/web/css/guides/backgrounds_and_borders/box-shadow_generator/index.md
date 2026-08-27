---
title: Box-Shadow-Generator
slug: Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

Dieses Tool ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Box-Schatten-Effekte zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 1000)}}

Der Box-Shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Schatten hinzuzufügen.

Beim Öffnen des Tools finden Sie im oberen rechten Bereich des Tools ein Rechteck. Das ist das Element, dem Sie Schatten hinzufügen werden. Wenn dieses Element ausgewählt ist (was bei der Erstladung der Seite der Fall ist), können Sie einige grundlegende Stil-Elemente darauf anwenden:

- Legen Sie die {{cssxref("color")}} des Elements mit dem Farbauswahl-Tool fest.
- Versehen Sie das Element mit einem {{cssxref("border")}}, indem Sie das "Border"-Kontrollkästchen aktivieren.
- Verwenden Sie die Schieberegler, um die Eigenschaften {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} des Elements festzulegen.

Um einen Box-Schatten hinzuzufügen, klicken Sie oben links auf die "+"-Schaltfläche. Dies fügt einen Schatten hinzu und listet ihn in der Spalte auf der linken Seite auf. Nun können Sie die Werte des neuen Schattens festlegen:

- Legen Sie die {{cssxref("color")}} des Schattens mit dem Farbauswahl-Tool fest.
- Setzen Sie den Schatten auf "inset", indem Sie das "Inset"-Kontrollkästchen aktivieren.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausbreitung des Elements festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Alle von Ihnen festgelegten Werte gelten nun für diesen neuen Schatten. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓-Schaltflächen oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der Spalte auf der linken Seite anklicken. Um die Stile des Elements selbst zu aktualisieren, wählen Sie es aus, indem Sie die Schaltfläche mit der Aufschrift "Element" oben anklicken.

Sie können dem Element {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente hinzufügen und ihnen ebenfalls Box-Schatten geben. Um zwischen dem Element und seinen Pseudoelementen zu wechseln, verwenden Sie die oben mit "Element", "::before" und "::after" beschrifteten Schaltflächen.

Der Kasten unten rechts enthält das CSS für das Element und alle `::before`- oder `::after`-Pseudoelemente.

## Siehe auch

- Andere Tools:
  - [Border-Image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - [Border-Radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/Guides/Backgrounds_and_borders) Modul
