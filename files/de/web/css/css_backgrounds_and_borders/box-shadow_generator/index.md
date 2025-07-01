---
title: Box-shadow Generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 03e992bd263d9bd3d0c8db197dd1c4829e8dd206
---

{{CSSRef}}

Dieses Tool ermöglicht es Ihnen, CSS-{{cssxref("box-shadow")}}-Effekte zu erstellen, um Box-Shadow-Effekte zu Ihren CSS-Objekten hinzuzufügen.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

Der Box-Shadow-Generator ermöglicht es Ihnen, einem Element einen oder mehrere Box-Shadows hinzuzufügen.

Beim Öffnen des Tools finden Sie ein Rechteck im oberen rechten Bereich des Tools. Das ist das Element, auf das Sie Schatten anwenden werden. Wenn dieses Element ausgewählt ist (wie es der Fall ist, wenn Sie die Seite zuerst laden), können Sie ihm einige grundlegende Stile anwenden:

- Stellen Sie die {{cssxref("color")}} des Elements mit dem Farbauswahl-Tool ein.
- Geben Sie dem Element einen {{cssxref("border")}} mithilfe des "Rand"-Kontrollkästchens.
- Verwenden Sie die Schieberegler, um die {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften des Elements festzulegen.

Um einen Box-Shadow hinzuzufügen, klicken Sie auf die "+"-Schaltfläche oben links. Dadurch wird ein Schatten hinzugefügt und in der Spalte links aufgelistet. Jetzt können Sie die Werte des neuen Schattens setzen:

- Stellen Sie die {{cssxref("color")}} des Schattens mit dem Farbauswahl-Tool ein.
- Setzen Sie den Schatten auf "inset" über das "Inset"-Kontrollkästchen.
- Verwenden Sie die Schieberegler, um die Position, Unschärfe und Ausbreitung des Schattens festzulegen.

Um einen weiteren Schatten hinzuzufügen, klicken Sie erneut auf "+". Jetzt werden alle gesetzten Werte auf diesen neuen Schatten angewendet. Ändern Sie die Reihenfolge, in der diese beiden Schatten angewendet werden, mit den ↑- und ↓-Tasten oben links. Wählen Sie den ersten Schatten erneut aus, indem Sie ihn in der Spalte links anklicken. Um die Stile des Elements zu aktualisieren, wählen Sie es aus, indem Sie die Schaltfläche "Element" oben anklicken.

Sie können dem Element {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudo-Elemente hinzufügen und ihnen ebenfalls Box-Shadows geben. Um zwischen dem Element und seinen Pseudo-Elementen zu wechseln, verwenden Sie die oben mit "Element", "::before" und "::after" beschrifteten Schaltflächen.

Das Feld unten rechts enthält das CSS für das Element und alle `::before`- oder `::after`-Pseudo-Elemente.

## Siehe auch

- [Border-Image-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, Randbilder (die {{cssxref("border-image")}}-Eigenschaft) visuell zu erstellen.
- [Border-Radius-Generator](/de/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : Dieses interaktive Tool ermöglicht es Ihnen, abgerundete Ecken (die {{cssxref("border-radius")}}-Eigenschaft) visuell zu erstellen.
