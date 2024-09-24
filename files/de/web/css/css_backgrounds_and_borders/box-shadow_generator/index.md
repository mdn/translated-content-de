---
title: Box-Shadow-Generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 883b021c97375f872d0702f0d0747b1373155cef
---

{{CSSRef}}

Dieses Werkzeug ermöglicht es Ihnen, CSS {{cssxref("box-shadow")}} Effekte zu erstellen, um Objekten in Ihrem CSS Box-Shadow-Effekte hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

Der Box-Shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Shadows hinzuzufügen.

Beim Öffnen des Werkzeugs finden Sie ein Rechteck im oberen rechten Bereich des Werkzeugs. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (was es ist, wenn Sie die Seite zum ersten Mal laden), können Sie ihm einige grundlegende Stile zuweisen:

- Setzen Sie die {{cssxref("color")}} des Elements mit dem Farbwahlwerkzeug.
- Geben Sie dem Element einen {{cssxref("border")}} mithilfe des "border"-Kontrollkästchens.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Shadow hinzuzufügen, klicken Sie auf die "+" Taste oben links. Dies fügt einen Schatten hinzu und listet ihn in der Spalte links auf. Nun können Sie die Werte des neuen Schattens festlegen:

- Setzen Sie die {{cssxref("color")}} des Schattens mit dem Farbwahlwerkzeug.
- Setzen Sie den Schatten als "inset" mit dem entsprechenden Kontrollkästchen.
- Verwenden Sie die Schieberegler, um Position, Unschärfe und Ausbreitung des Schattens festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Die von Ihnen festgelegten Werte gelten nun für diesen neuen Schatten. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑ und ↓ Tasten oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der linken Spalte anklicken. Um die eigenen Stile des Elements zu aktualisieren, wählen Sie es aus, indem Sie die Taste "element" oben anklicken.

Sie können dem Element auch {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente hinzufügen und ihnen ebenfalls Box-Shadows zuweisen. Um zwischen dem Element und seinen Pseudoelementen zu wechseln, verwenden Sie die oben mit "element", ":before" und ":after" beschrifteten Tasten.

Das Feld unten rechts enthält das CSS für das Element und alle `::before` oder `::after` Pseudoelemente.

## Siehe auch

- [Border-Image-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Werkzeug ermöglicht es Ihnen, Border-Images (die {{cssxref("border-image")}} Eigenschaft) visuell zu erstellen.
- [Border-Radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Werkzeug ermöglicht es Ihnen, abgerundete Ecken (die {{cssxref("border-radius")}} Eigenschaft) visuell zu erstellen.
