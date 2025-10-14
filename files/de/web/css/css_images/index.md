---
title: CSS-Bilder
slug: Web/CSS/CSS_images
l10n:
  sourceCommit: 3b8cbcef38a3470c1e61b2d57af8bf92957ce834
---

Das **CSS-Bilder**-Modul definiert die Typen von Bildern, die verwendet werden können (der {{CSSxRef("&lt;image&gt;")}}-Typ, einschließlich URLs, Verläufe und anderer Bildtypen), wie sie skaliert werden und wie sie sowie andere ersetzte Inhalte mit den verschiedenen Layoutmodellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{cssxref("object-view-box")}}

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image-resolution")}}-Eigenschaft. Derzeit wird dieses Feature von keinem Browser unterstützt.

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

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image/image", "image()")}}-Funktion. Derzeit wird dieses Feature von keinem Browser unterstützt.

### Datentypen

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Leitfäden

- [CSS-Verläufe verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Stellt eine spezifische Art von CSS-Bildern vor, _Verläufe_, und wie man diese erstellt und verwendet.

- [Bild-Sprites in CSS implementieren](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
  - : Beschreibt die gängige Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Downloadanfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Ersatz-Elemente stylen](/de/docs/Web/CSS/CSS_images/Replaced_element_properties)
  - : Führt die Eigenschaften ein, die nur auf _ersetzte Elemente_ angewendet werden.

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
  - : Erfahren Sie mehr über die `aspect-ratio`-Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente, und untersuchen Sie einige gängige Anwendungsfälle von Seitenverhältnissen.

- [Die CSS-`object-view-box`-Eigenschaft verwenden](/de/docs/Web/CSS/CSS_images/Using_object-view-box)
  - : Lernen Sie die CSS-`object-view-box`-Eigenschaft kennen, einschließlich Zoom-In, Zoom-Out und Schwenken über Bilder.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}
- [`<basic-shape-rect>`](/de/docs/Web/CSS/basic-shape#basic-shape-rect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [CSS-Kombination und -Überblendung](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
