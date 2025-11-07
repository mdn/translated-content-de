---
title: CSS-Schriftarten-Laden
short-title: Font loading
slug: Web/CSS/Guides/Font_loading
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Schriftarten-Laden** Modul beschreibt Events und Schnittstellen, die zum dynamischen Laden von Schriftressourcen verwendet werden.

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
  - [`fontFace.load()`](/de/docs/Web/API/FontFace/load) Methode (gibt ein `Promise` zurück)
- [`fontFaceSet`](/de/docs/Web/API/FontFaceSet) Schnittstelle
- [`fontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent) Event

## Leitfäden

- [CSS-Schriftarten-Laden-API](/de/docs/Web/API/CSS_Font_Loading_API)
  - : Überblick über die CSS-Schriftarten-Laden-API, die Events und Schnittstellen für das dynamische Laden von Schriftressourcen bereitstellt.

## Verwandte Konzepte

- CSS {{cssxref("@font-face")}} Regel
- CSS {{cssxref("@font-feature-values")}} Regel
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule) Schnittstelle
- Dokument [`fonts`](/de/docs/Web/API/Document/fonts) Eigenschaft (gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Objektinstanz zurück)
- WorkerGlobalScope [`fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) Eigenschaft (gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Objektinstanz zurück)
- JavaScript {{jsxref("Promise")}} Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts) Modul
