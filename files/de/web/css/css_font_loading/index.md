---
title: CSS-Schriftartenlade
slug: Web/CSS/CSS_font_loading
l10n:
  sourceCommit: fe5361c29eab373c0b60d07bb86dbf0048220110
---

{{CSSRef}}

Das Modul **CSS-Schriftartenlade** beschreibt Ereignisse und Schnittstellen, die zum dynamischen Laden von Schriftartressourcen verwendet werden.

## Referenz

### Schnittstellen

- [`fontFace`](/de/docs/Web/API/FontFace) Schnittstelle
  - [`FontFace()`](/de/docs/Web/API/FontFace/FontFace) Konstruktor
  - [`fontFace.family`](/de/docs/Web/API/FontFace/family) Eigenschaft
  - [`fontFace.style`](/de/docs/Web/API/FontFace/style) Eigenschaft
  - [`fontFace.weight`](/de/docs/Web/API/FontFace/weight) Eigenschaft
  - [`fontFace.stretch`](/de/docs/Web/API/FontFace/stretch) Eigenschaft
  - [`fontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange) Eigenschaft
  - [`fontFace.variant`](/de/docs/Web/API/FontFace/variant) Eigenschaft
  - [`fontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings) Eigenschaft
  - [`fontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings) Eigenschaft
  - [`fontFace.display`](/de/docs/Web/API/FontFace/display) Eigenschaft
  - [`fontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride) Eigenschaft
  - [`fontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride) Eigenschaft
  - [`fontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride) Eigenschaft
  - [`fontFace.load()`](/de/docs/Web/API/FontFace/load) Methode (gibt ein Promise zurück)
- [`fontFaceSet`](/de/docs/Web/API/FontFaceSet) Schnittstelle
- [`fontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent) Ereignis

## Leitfäden

- [CSS-Schriftartenlade-API](/de/docs/Web/API/CSS_Font_Loading_API)
  - : Überblick über die CSS-Schriftartenlade-API, die Ereignisse und Schnittstellen für das dynamische Laden von Schriftartressourcen bereitstellt.

## Verwandte Konzepte

- CSS {{cssxref("@font-face")}} At-Regel
- CSS {{cssxref("@font-feature-values")}} At-Regel
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule) Schnittstelle
- Dokument [`fonts`](/de/docs/Web/API/Document/fonts) Eigenschaft (gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Objektinstanz zurück)
- WorkerGlobalScope [`fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) Eigenschaft (gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Objektinstanz zurück)
- JavaScript {{jsxref("Promise")}} Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriften](/de/docs/Web/CSS/CSS_fonts) Modul
