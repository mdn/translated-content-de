---
title: CSS-Bilder
slug: Web/CSS/CSS_images
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das **CSS-Bilder**-Modul definiert die Arten von Bildern, die verwendet werden können (den {{CSSxRef("&lt;image&gt;")}}-Typ, der URLs, Gradienten und andere Bildtypen enthält), wie man sie skaliert und wie sie und andere ersetzte Inhalte mit den verschiedenen Layoutmodellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image-resolution")}}-Eigenschaft. Derzeit unterstützt kein Browser diese Funktion.

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

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image/image", "image()")}}-Funktion. Derzeit unterstützt kein Browser diese Funktion.

### Datentypen

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Leitfäden

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Stellt einen spezifischen Typ von CSS-Bildern vor, _Gradienten_, und wie man diese erstellt und verwendet.

- [Implementierung von Bild-Sprites in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
  - : Beschreibt die übliche Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Download-Anfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Gestaltung ersetzter Elemente](/de/docs/Web/CSS/CSS_images/Replaced_element_properties)
  - : Führt in die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
  - : Erfahren Sie mehr über die `aspect-ratio`-Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige häufige Anwendungsfälle für Seitenverhältnisse.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [CSS-Komposition und -Mischung](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
