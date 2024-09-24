---
title: CSS-Schriftartenladen
slug: Web/CSS/CSS_font_loading
l10n:
  sourceCommit: fe5361c29eab373c0b60d07bb86dbf0048220110
---

{{CSSRef}}

Das **CSS-Schriftartenlade**-Modul beschreibt Ereignisse und Schnittstellen, die zum dynamischen Laden von Schriftressourcen verwendet werden.

## Referenz

### Schnittstellen

- {{domxref("fontFace")}} Schnittstelle
  - [`FontFace()`](/de/docs/Web/API/FontFace/FontFace) Konstruktor
  - {{domxref("fontFace.family")}} Eigenschaft
  - {{domxref("fontFace.style")}} Eigenschaft
  - {{domxref("fontFace.weight")}} Eigenschaft
  - {{domxref("fontFace.stretch")}} Eigenschaft
  - {{domxref("fontFace.unicodeRange")}} Eigenschaft
  - {{domxref("fontFace.variant")}} Eigenschaft
  - {{domxref("fontFace.featureSettings")}} Eigenschaft
  - {{domxref("fontFace.variationSettings")}} Eigenschaft
  - {{domxref("fontFace.display")}} Eigenschaft
  - {{domxref("fontFace.ascentOverride")}} Eigenschaft
  - {{domxref("fontFace.descentOverride")}} Eigenschaft
  - {{domxref("fontFace.lineGapOverride")}} Eigenschaft
  - {{domxref("fontFace.load()")}} Methode (gibt ein Promise zurück)
- {{domxref("fontFaceSet")}} Schnittstelle
- {{domxref("fontFaceSetLoadEvent")}} Ereignis

## Leitfäden

- [CSS-Schriftartenlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
  - : Überblick über die CSS Font Loading API, die Ereignisse und Schnittstellen für das dynamische Laden von Schriftressourcen bereitstellt.

## Verwandte Konzepte

- CSS {{cssxref("@font-face")}} Regel
- CSS {{cssxref("@font-feature-values")}} Regel
- {{domxref("CSSFontFaceRule")}} Schnittstelle
- Dokument {{domxref("document.fonts", "fonts")}} Eigenschaft (gibt die {{domxref("FontFaceSet")}} Objektinstanz zurück)
- WorkerGlobalScope {{domxref("WorkerGlobalScope.fonts", "fonts")}} Eigenschaft (gibt die {{domxref("FontFaceSet")}} Objektinstanz zurück)
- JavaScript {{jsxref("Promise")}} Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten](/de/docs/Web/CSS/CSS_fonts) Modul
