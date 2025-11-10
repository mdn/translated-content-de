---
title: CSS-Bilder
short-title: Images
slug: Web/CSS/Guides/Images
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Bilder**-Modul definiert die Arten von Bildern, die verwendet werden können (den {{CSSxRef("&lt;image&gt;")}}-Typ, der URLs, Verläufe und andere Bildtypen enthält), wie man sie skalieren kann, und wie sie und andere ersetzte Inhalte mit den verschiedenen Layout-Modellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{cssxref("object-view-box")}}

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image-resolution")}}-Eigenschaft. Derzeit unterstützen keine Browser dieses Feature.

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

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image/image", "image()")}}-Funktion. Derzeit unterstützen keine Browser dieses Feature.

### Datentypen

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Leitfäden

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Stellt eine spezielle Art von CSS-Bildern vor, _Verläufe_, und wie man diese erstellt und verwendet.

- [Implementierung von Bild-Sprites in CSS](/de/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
  - : Beschreibt die gängige Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Download-Anfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Styling von ersetzten Elementen](/de/docs/Web/CSS/Guides/Images/Replaced_element_properties)
  - : Führt die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : Lernen Sie die `aspect-ratio`-Eigenschaft kennen, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen einige gängige Anwendungsfälle für Seitenverhältnisse.

- [Verwendung der CSS-Eigenschaft `object-view-box`](/de/docs/Web/CSS/Guides/Images/Using_object-view-box)
  - : Lernen Sie die CSS-Eigenschaft `object-view-box` kennen, einschließlich des Zoomens und Schwenkens durch Bilder.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}
- [`<basic-shape-rect>`](/de/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Filtereffekte](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- [CSS-Komposition und -Vermischung](/de/docs/Web/CSS/Guides/Compositing_and_blending) Modul
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
