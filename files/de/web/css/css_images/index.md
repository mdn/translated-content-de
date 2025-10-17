---
title: CSS-Bilder
slug: Web/CSS/CSS_images
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

Das Modul **CSS-Bilder** definiert die Arten von Bildern, die verwendet werden können (den {{CSSxRef("&lt;image&gt;")}}-Typ, der URLs, Verläufe und andere Arten von Bildern enthält), wie sie skaliert werden und wie sie und andere Ersatzelemente mit den verschiedenen Layoutmodellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{cssxref("object-view-box")}}

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image-resolution")}}-Eigenschaft. Derzeit unterstützen keine Browser diese Funktion.

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

Das CSS-Bilder-Modul definiert auch die {{CSSxRef("image/image", "image()")}}-Funktion. Derzeit unterstützen keine Browser diese Funktion.

### Datentypen

- {{CSSxRef("&lt;gradient&gt;")}}
- {{CSSxRef("&lt;image&gt;")}}

## Leitfäden

- [Verwenden von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
  - : Stellt einen spezifischen Typ von CSS-Bildern vor, _Verläufe_, und wie man diese erstellt und verwendet.

- [Implementierung von Bildspritzen in CSS](/de/docs/Web/CSS/CSS_images/Implementing_image_sprites_in_CSS)
  - : Beschreibt die gängige Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Download-Anfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Gestaltung von Ersatzelementen](/de/docs/Web/CSS/CSS_images/Replaced_element_properties)
  - : Führt die Eigenschaften ein, die nur für _Ersatzelemente_ gelten.

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
  - : Lernen Sie die `aspect-ratio`-Eigenschaft, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige gängige Anwendungsfälle für Seitenverhältnisse.

- [Verwenden der CSS-Eigenschaft `object-view-box`](/de/docs/Web/CSS/CSS_images/Using_object-view-box)
  - : Lernen Sie die CSS-Eigenschaft `object-view-box`, einschließlich wie man hinein- und herauszoomt und über Bilder schwenkt.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}
- [`<basic-shape-rect>`](/de/docs/Web/CSS/basic-shape#syntax_for_rectangles_basic-shape-rect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects) Modul
- [CSS-Komposition und Überblendung](/de/docs/Web/CSS/CSS_compositing_and_blending) Modul
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors) Modul
- [CSS-Werte und Einheiten](/de/docs/Web/CSS/CSS_values_and_units) Modul
