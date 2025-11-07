---
title: CSS images
slug: Web/CSS/CSS_images
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS images** Modul definiert die Arten von Bildern, die verwendet werden können (der {{CSSxRef("&lt;image&gt;")}} Typ, der URLs, Verläufe und andere Arten von Bildern enthält), wie sie zu skalieren sind und wie sie und anderer ersetzter Inhalt mit den verschiedenen Layout-Modellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{cssxref("object-view-box")}}

Das CSS images Modul definiert auch die {{CSSxRef("image-resolution")}} Eigenschaft. Derzeit unterstützt kein Browser diese Funktion.

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

Das CSS images Modul definiert auch die {{CSSxRef("image/image", "image()")}} Funktion. Derzeit unterstützt kein Browser diese Funktion.

### Datentypen

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Leitfäden

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Stellt einen bestimmten Typ von CSS-Bildern vor, _Verläufe_, und wie diese erstellt und verwendet werden können.

- [Implementierung von Bildspriten in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
  - : Beschreibt die gängige Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Download-Anfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Stil von ersetzten Elementen](/de/docs/Web/CSS/CSS_images/Replaced_element_properties)
  - : Führt in die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
  - : Erfahren Sie mehr über die `aspect-ratio` Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige gebräuchliche Anwendungsfälle für Seitenverhältnisse.

- [Verwendung der CSS-Eigenschaft `object-view-box`](/de/docs/Web/CSS/CSS_images/Using_object-view-box)
  - : Lernen Sie die CSS-Eigenschaft `object-view-box`, einschließlich wie man Bilder ein- oder auszoomt und wie man über sie hinweg schwenkt.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}
- [`<basic-shape-rect>`](/de/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [CSS-Komposition und -Mischung](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul
- [CSS Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
