---
title: Box-Shadow-Generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Dieses Werkzeug ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Ihren CSS-Objekten Schatteneffekte hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

Der Box-Shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Schatten hinzuzufügen.

Beim Öffnen des Werkzeugs finden Sie ein Rechteck im oberen rechten Bereich des Werkzeugs. Das ist das Element, dem Sie Schatten hinzufügen werden. Wenn dieses Element ausgewählt ist (wie es zu Beginn der Fall ist, wenn Sie die Seite laden), können Sie einige grundlegende Stiländerungen daran vornehmen:

- Stellen Sie die {{cssxref("color")}} des Elements mit dem Farbwählerwerkzeug ein.
- Geben Sie dem Element einen {{cssxref("border")}} mittels der "border"-Checkbox.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Schatten hinzuzufügen, klicken Sie oben links auf die "+"-Schaltfläche. Dies fügt einen Schatten hinzu und listet ihn in der Spalte auf der linken Seite auf. Nun können Sie die Werte des neuen Schattens festlegen:

- Stellen Sie die {{cssxref("color")}} des Schattens mit dem Farbwählerwerkzeug ein.
- Setzen Sie den Schatten mithilfe der "inset"-Checkbox nach innen.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausbreitung des Schattens festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Jetzt werden alle von Ihnen gesetzten Werte auf diesen neuen Schatten angewendet. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓ Schaltflächen oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der Spalte links anklicken. Um die Stile des Elements selbst zu aktualisieren, wählen Sie es aus, indem Sie die Schaltfläche "element" oben anklicken.

Sie können dem Element auch {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente hinzufügen und ihnen ebenfalls Box-Schattierungen geben. Um zwischen dem Element und seinen Pseudoelementen zu wechseln, verwenden Sie die Schaltflächen "element", "::before" und "::after" oben.

Die Box unten rechts enthält das CSS für das Element und alle `::before` oder `::after` Pseudoelemente.

## Siehe auch

- [Generator für Border-Images](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Werkzeug ermöglicht es Ihnen, Border-Images (die {{cssxref("border-image")}} Eigenschaft) visuell zu erstellen.
- [Generator für Border-Radius](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Werkzeug ermöglicht es Ihnen, abgerundete Ecken (die {{cssxref("border-radius")}} Eigenschaft) visuell zu erstellen.
