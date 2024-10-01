---
title: CSS box sizing
slug: Web/CSS/CSS_box_sizing
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das **CSS box sizing** Modul ermöglicht es Entwicklern, festzulegen, wie Elemente ihren Inhalt anpassen oder in einen bestimmten Layout-Kontext passen. Es definiert Größen-, Mindestgrößen- und Maximalgrößen-Eigenschaften und erweitert außerdem die CSS-Größeneigenschaften durch Schlüsselwörter, die größenbasierte {{Glossary("intrinsic_size", "intrinsic size")}} und kontextbasierte {{Glossary("Intrinsic_Size#extrinsic_sizing", "extrinsic")}} Größe repräsentieren.

Elemente können entweder extrinsisch oder intrinsisch skaliert werden. Das [CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) definiert seitenrelative Eigenschaften, um die Größe eines Elements explizit oder „extrinsisch“ festzulegen, einschließlich der Eigenschaften `width`, `height`, `padding` und `margin` (zusammen mit den `border`-Eigenschaften, die im [CSS Hintergründe und Grenzen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul definiert sind). Dieses CSS box sizing Modul erweitert das CSS-Boxmodell-Modul, um einem Element zu ermöglichen, intrinsisch skaliert zu werden – die Größe des Elements auf Basis der Größe seines Inhalts festzulegen.

Die in diesem Modul eingeführten Größenwerte ermöglichen es Elementen mit [size containment](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#size_containment), explizite intrinsische Größen anzunehmen, als ob die Breite und Höhe ihres in den Fluss eingebetteten Inhalts der angegebenen expliziten intrinsischen Größe entspricht, anstatt so skaliert zu werden, als ob sie leer wären.

Dieses Modul führte auch die Möglichkeit ein, ein Seitenverhältnis für den Kasten eines Elements zu definieren, was bedeutet, dass der Browser die Abmessungen eines Elements automatisch anpassen kann, um ein angegebenes Seitenverhältnis zu wahren, solange eine der Abmessungen automatisch skaliert wird.

Das [modul für logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values) erweiterte die im Boxmodell und im box sizing Modul verfügbaren Eigenschaften um schreibmodus-relative Äquivalente der entsprechenden physischen Boxmodells- und intrinsischen Boxgrößeneigenschaften.

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
> Das CSS box sizing Modul führt die Schlüsselwörter `stretch` und `contain` als Größenwerte ein, die noch nicht in den box sizing Eigenschaften implementiert wurden.

### Funktionen

- [`fit-content()`](/de/docs/Web/CSS/fit-content_function)

### Glossarbegriffe

- {{Glossary("intrinsic_size", "intrinsic size")}}

## Leitfäden

- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)

  - : Erfahren Sie mehr über die `aspect-ratio` Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige häufige Anwendungsfälle für Seitenverhältnisse.

- [Einführung in das CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)

  - : Erklärt eines der grundlegenden Konzepte von CSS: das Boxmodell. Dieses Modell definiert, wie CSS Elemente anordnet, einschließlich ihres Inhalts-, Padding-, Rahmen- und Randbereichs.

- [Beherrschen des Randkollapses](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)

  - : Manchmal werden zwei angrenzende Ränder zu einem einzigen zusammengefaltet. Dieser Artikel beschreibt die Regeln, die bestimmen, wann und warum dies geschieht und wie es kontrolliert werden kann.

- [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)

  - : Erklärt das visuelle Formatierungsmodell.

- [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)

  - : Erklärt intrinsische Größenanpassungen als Vorstufe zum Verständnis der Kontrolle von Größe und Flexibilität von Flex-Elementen entlang der Hauptachse mit {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}.

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
- [CSS Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul
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
- [CSS Hintergründe und Grenzen](/de/docs/Web/CSS/CSS_backgrounds_and_borders) Modul
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
- [CSS Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
  - {{CSSxRef("grid")}}
  - {{CSSxRef("grid-auto-columns")}}
  - {{CSSxRef("grid-auto-rows")}}
  - {{CSSxRef("grid-template-columns")}}
  - {{CSSxRef("grid-template-rows")}}
  - {{CSSxRef("repeat")}}
  - {{CSSxRef("minmax")}} Funktion
- [CSS flexibles Boxlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
  - {{CSSxRef("flex-basis")}}
  - {{CSSxRef("flex")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Anzeige](/de/docs/Web/CSS/CSS_display) Modul
- [CSS Flexlayout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Rasterlayout](/de/docs/Web/CSS/CSS_grid_layout) Modul
- [CSS positioniertes Layout](/de/docs/Web/CSS/CSS_positioned_layout) Modul
- [CSS Fragmentierung](/de/docs/Web/CSS/CSS_fragmentation) Modul
