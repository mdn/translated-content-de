---
title: Box-Shadow-Generator
slug: Web/CSS/Guides/Backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Dieses Tool ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Box-Schatten-Effekte zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 1000)}}

Der Box-Shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Schatten hinzuzufügen.

Beim Öffnen des Tools finden Sie einen rechteckigen Bereich im oberen rechten Abschnitt des Werkzeugs. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (was beim ersten Laden der Seite der Fall ist), können Sie einige grundlegende Stiländerungen vornehmen:

- Setzen Sie die {{cssxref("color")}} des Elements mit dem Farbauswahl-Tool.
- Geben Sie dem Element einen {{cssxref("border")}} mit dem "border"-Kontrollkästchen.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Schatten hinzuzufügen, klicken Sie auf die "+"-Schaltfläche oben links. Dies fügt einen Schatten hinzu und listet ihn in der Spalte auf der linken Seite auf. Nun können Sie die Werte des neuen Schattens festlegen:

- Legen Sie die {{cssxref("color")}} des Schattens mit dem Farbauswahl-Tool fest.
- Setzen Sie den Schatten auf "inset" mit dem "inset"-Kontrollkästchen.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausdehnung des Schattens festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Nun werden alle gesetzten Werte auf diesen neuen Schatten angewendet. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓ Schaltflächen oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der Spalte auf der linken Seite anklicken. Um die eigenen Stile des Elements zu aktualisieren, wählen Sie es durch Klicken auf die Schaltfläche mit der Bezeichnung "Element" oben aus.

Sie können dem Element {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente hinzufügen und ihnen ebenfalls Box-Schatten geben. Um zwischen dem Element und seinen Pseudoelementen zu wechseln, verwenden Sie die oben mit "Element", "::before" und "::after" beschrifteten Schaltflächen.

Die Box unten rechts enthält das CSS für das Element und alle `::before` oder `::after` Pseudoelemente.

## Siehe auch

- [Border-Image-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, Border-Images visuell zu erstellen (die {{cssxref("border-image")}}-Eigenschaft).
- [Border-Radius-Generator](/de/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, abgerundete Ecken visuell zu erstellen (die {{cssxref("border-radius")}}-Eigenschaft).
