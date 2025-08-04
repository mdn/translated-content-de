---
title: CSS-Bilder
slug: Web/CSS/CSS_images
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Das **CSS-Bilder**-Modul definiert die Typen von Bildern, die verwendet werden können (den {{CSSxRef("&lt;image&gt;")}}-Typ, der URLs, Verläufe und andere Bildtypen enthält), wie sie geändert werden können und wie sie und andere ersetzte Inhalte mit den verschiedenen Layoutmodellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image-resolution")}}-Eigenschaft. Derzeit wird diese Funktion von keinem Browser unterstützt.

### Funktionen

- {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}
- {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
- {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{CSSxRef("cross-fade", "cross-fade()")}}
- {{CSSxRef("element", "element()")}}
- {{CSSxRef("image/image-set", "image-set()")}}

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image/image", "image()")}}-Funktion. Derzeit wird diese Funktion von keinem Browser unterstützt.

### Datentypen

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Leitfäden

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Präsentiert einen spezifischen Typ von CSS-Bildern, _Verläufe_, und wie man diese erstellt und verwendet.

- [Implementierung von Bild-Sprites in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
  - : Beschreibt die gängige Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Download-Anfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Stilisierung von ersetzten Elementen](/de/docs/Web/CSS/CSS_images/Replaced_element_properties)
  - : Führt die Eigenschaften ein, die nur auf _ersetzte Elemente_ angewendet werden.

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
  - : Erfahren Sie mehr über die `aspect-ratio`-Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige häufige Anwendungsfälle für Seitenverhältnisse.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [CSS-Compositing und -Blending](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
