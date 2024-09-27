---
title: Box-shadow Generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 883b021c97375f872d0702f0d0747b1373155cef
---

{{CSSRef}}

Dieses Tool ermöglicht Ihnen die Konstruktion von CSS-{{cssxref("box-shadow")}}-Effekten, um Box-Shadow-Effekte zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

Der Box-Shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Shadows hinzuzufügen.

Beim Öffnen des Tools finden Sie im oberen rechten Bereich des Tools ein Rechteck. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (was es beim ersten Laden der Seite ist), können Sie ihm einige grundlegende Stilgebungen zuweisen:

- Setzen Sie die {{cssxref("color")}} des Elements mit dem Farbwähler-Tool.
- Geben Sie dem Element eine {{cssxref("border")}} mit dem "border"-Checkbox.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Shadow hinzuzufügen, klicken Sie auf die "+"-Schaltfläche oben links. Dies fügt einen Schatten hinzu und listet ihn in der Spalte links auf. Jetzt können Sie die Werte des neuen Schattens festlegen:

- Setzen Sie die {{cssxref("color")}} des Schattens mit dem Farbwähler-Tool.
- Setzen Sie den Schatten mithilfe des "inset"-Checkbox auf eingedrückt.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausbreitung des Elements festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Nun werden alle festgelegten Werte auf diesen neuen Schatten angewendet. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓ Schaltflächen oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie in der linken Spalte darauf klicken. Um die eigenen Stile des Elements zu aktualisieren, wählen Sie es durch Klicken auf die Schaltfläche mit der Aufschrift "Element" oben aus.

Sie können dem Element {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente hinzufügen und ihnen ebenfalls Box-Shadows geben. Um zwischen dem Element und seinen Pseudo-Elementen zu wechseln, verwenden Sie die oben mit "Element", ":before" und ":after" beschrifteten Schaltflächen.

Die Box unten rechts enthält das CSS für das Element und alle `before::` oder `::after` Pseudo-Elemente.

## Siehe auch

- [Border-image Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, Rahmenbilder visuell zu erstellen (die {{cssxref("border-image")}} Eigenschaft).
- [Border-radius Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, abgerundete Ecken visuell zu erstellen (die {{cssxref("border-radius")}} Eigenschaft).
