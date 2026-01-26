---
title: CSS images
short-title: Images
slug: Web/CSS/Guides/Images
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS images**-Modul definiert die Arten von Bildern, die verwendet werden können (den {{cssxref("image")}}-Typ, der URLs, Verläufe und andere Arten von Bildern enthält), wie sie skaliert werden und wie sie, sowie andere ersetzte Inhalte, mit den verschiedenen Layout-Modellen interagieren.

## Referenz

### Eigenschaften

- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{cssxref("object-view-box")}}

Das CSS images-Modul definiert auch die {{CSSxRef("image-resolution")}}-Eigenschaft. Derzeit unterstützt kein Browser dieses Feature.

### Funktionen

- {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}
- {{CSSxRef("gradient/radial-gradient", "radial-gradient()")}}
- {{CSSxRef("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{CSSxRef("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{CSSxRef("gradient/conic-gradient", "conic-gradient()")}}
- {{CSSxRef("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- {{cssxref("cross-fade()")}}
- {{cssxref("element()")}}
- {{CSSxRef("image/image-set", "image-set()")}}

Das CSS images-Modul definiert auch die {{CSSxRef("image/image", "image()")}}-Funktion. Derzeit unterstützt kein Browser dieses Feature.

### Datentypen

- {{cssxref("gradient")}}
- {{cssxref("image")}}

## Leitfäden

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Stellt eine spezifische Art von CSS-Bildern vor, _Verläufe_, und wie Sie diese erstellen und verwenden können.

- [Implementierung von Bild-Sprites in CSS](/de/docs/Web/CSS/Guides/Images/Implementing_image_sprites)
  - : Beschreibt die übliche Technik, mehrere Bilder in einem einzigen Dokument zu gruppieren, um Download-Anfragen zu sparen und die Verfügbarkeit einer Seite zu beschleunigen.

- [Stilisieren von ersetzten Elementen](/de/docs/Web/CSS/Guides/Images/Replaced_element_properties)
  - : Führt die Eigenschaften ein, die nur für _ersetzte Elemente_ gelten.

- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
  - : Lernen Sie die `aspect-ratio`-Eigenschaft kennen, diskutieren Sie Seitenverhältnisse für ersetzte und nicht ersetzte Elemente und untersuchen Sie einige gängige Anwendungsfälle von Seitenverhältnissen.

- [Verwendung der CSS-Eigenschaft `object-view-box`](/de/docs/Web/CSS/Guides/Images/Using_object-view-box)
  - : Lernen Sie die CSS-Eigenschaft `object-view-box` kennen, einschließlich wie man in Bilder hereinzoomt, herauszoomt und sie verschiebt.

## Verwandte Konzepte

- {{cssxref("url_value", "&lt;url&gt;")}}
- {{cssxref("url_function", "url()")}}
- [`<basic-shape-rect>`](/de/docs/Web/CSS/Reference/Values/basic-shape#syntax_for_rectangles_basic-shape-rect)

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Filtern von Effekten](/de/docs/Web/CSS/Guides/Filter_effects) Modul
- [CSS Komposition und Vermischung](/de/docs/Web/CSS/Guides/Compositing_and_blending) Modul
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors) Modul
- [CSS Werte und Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
