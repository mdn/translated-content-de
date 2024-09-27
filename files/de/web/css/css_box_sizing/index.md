---
title: CSS box sizing
slug: Web/CSS/CSS_box_sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das **CSS box sizing** Modul ermöglicht es Entwicklern, festzulegen, wie Elemente in ihren Inhalt passen oder in einem bestimmten Layout-Kontext. Es definiert Eigenschaften für Größe, Mindestgröße und Maximalgröße und erweitert auch die CSS-Größeneigenschaften mit Schlüsselwörtern, die inhaltsbasierte [intrinsic size](/de/docs/Glossary/intrinsic_size) und kontextbasierte [extrinsic](/de/docs/Glossary/Intrinsic_Size#extrinsic_sizing) Größe darstellen.

Elemente können entweder extrinsisch oder intrinsisch dimensioniert werden. Das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) definiert seitenbezogene Eigenschaften, um die Größe eines Elements explizit oder "extrinsisch" festzulegen, einschließlich `width`, `height`, `padding` und `margin` Eigenschaften (zusammen mit `border` Eigenschaften, die im [CSS backgrounds and borders](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul definiert sind). Dieses CSS box sizing Modul erweitert das CSS-Box-Modell, um einem Element zu ermöglichen, intrinsisch dimensioniert zu werden — indem die Größe des Elements basierend auf der Größe seines Inhalts festgelegt wird.

Die in diesem Modul eingeführten Größenwerte ermöglichen es Elementen mit [size containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment), explizite intrinsische Größen anzunehmen, als ob die Breite und Höhe ihres im Fluss befindlichen Inhalts der angegebenen expliziten intrinsischen Größe entsprechen, anstatt so dimensioniert zu werden, als ob sie leer wären.

Dieses Modul führte auch die Fähigkeit ein, ein Seitenverhältnis für das Box-Element zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein bestimmtes Seitenverhältnis beizubehalten, solange eine der Dimensionen automatisch dimensioniert wird.

Das [Modul der logischen Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) erweiterte die im Box-Modell und im CSS box sizing Modul verfügbaren Eigenschaften, um schreibmodusbezogene Entsprechungen der entsprechenden physischen Box-Modell- und intrinsischen Box-Größeneigenschaften einzuschließen.

## Referenz

### Eigenschaften

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("contain-intrinsic-block-size")}}
- {{cssxref("contain-intrinsic-height")}}
- {{cssxref("contain-intrinsic-inline-size")}}
- {{cssxref("contain-intrinsic-size")}}
- {{cssxref("contain-intrinsic-width")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}

> [!NOTE]
> Das CSS box sizing Modul führt die `min-intrinsic-sizing` Eigenschaft ein, die noch nicht implementiert wurde.

### Datentypen und Werte

- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{cssxref("fit-content_function", "fit-content()")}} Funktion

> [!NOTE]
> Das CSS box sizing Modul führt die Schlüsselwörter `stretch` und `contain` als Größenwerte ein, die noch nicht bei den Box-Größeneigenschaften implementiert wurden.

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/fit-content_function)

### Glossarbegriffe

- [intrinsic size](/de/docs/Glossary/intrinsic_size)

## Leitfäden

- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

  - : Lernen Sie die `aspect-ratio` Eigenschaft kennen, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige gängige Anwendungsfälle für Seitenverhältnisse.

- [Einführung in das CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erläutert eines der fundamentalen Konzepte von CSS: das Box-Modell. Dieses Modell definiert, wie CSS Elemente layoutet, einschließlich ihrer Inhalte, Polster, Ränder und Abstände.

- [Beherrschen des Margin-Zusammenbruchs](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei benachbarte Ränder zu einem zusammengefasst. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie man es steuern kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

  - : Erläutert das visuelle Formatierungsmodell.

- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärt die intrinsische Größenbestimmung als Vorstufe zum Verständnis, wie man die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mit {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}}, und {{CSSxRef("flex-basis")}} steuert.

## Verwandte Konzepte

- [CSS logische Eigenschaften](/de/docs/Web/CSS/CSS_logical_properties_and_values) Modul
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("block-size")}}
  - {{CSSxRef("inline-size")}}
  - {{CSSxRef("max-block-size")}}
  - {{CSSxRef("max-inline-size")}}
  - {{CSSxRef("min-block-size")}}
  - {{CSSxRef("min-inline-size")}}
  - {{CSSxRef("margin-block")}}
  - {{CSSxRef("margin-inline")}}
  - {{CSSxRef("padding-block")}}
  - {{CSSxRef("padding-inline")}}
  - {{CSSxRef("border-block")}}
  - {{CSSxRef("border-inline")}}
  - {{CSSxRef("contain-intrinsic-block-size")}}
  - {{CSSxRef("contain-intrinsic-inline-size")}}
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overscroll-behavior-block")}}
  - {{CSSxRef("overscroll-behavior-inline")}}
- [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul
  - {{cssxref("margin")}} Kurzform
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}
  - {{cssxref("margin-right")}}
  - {{cssxref("margin-top")}}
  - {{cssxref("margin-trim")}}
  - {{cssxref("padding")}} Kurzform
  - {{cssxref("padding-bottom")}}
  - {{cssxref("padding-left")}}
  - {{cssxref("padding-right")}}
  - {{cssxref("padding-top")}}
- [CSS Hintergründe und Ränder](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
  - {{cssxref("border")}} Kurzform
  - {{cssxref("border-width")}} Kurzform
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-top-width")}}
- [CSS Überlauf](/de/docs/Web/CSS/CSS_overflow) Modul
  - {{CSSxRef("overflow")}} Kurzform
  - {{CSSxRef("overflow-block")}}
  - {{CSSxRef("overflow-clip-margin")}}
  - {{CSSxRef("overflow-inline")}}
  - {{CSSxRef("overflow-x")}}
  - {{CSSxRef("overflow-y")}}
  - {{CSSxRef("text-overflow")}}
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} Funktion
- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flex Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS Positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
