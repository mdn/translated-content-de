---
title: CSS-Schriftartenladen
slug: Web/CSS/CSS_font_loading
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Schriftartenladen**-Modul beschreibt Ereignisse und Schnittstellen, die zum dynamischen Laden von Schriftressourcen verwendet werden.

## Referenz

### Schnittstellen

- [`fontFace`](/de/docs/Web/API/FontFace)-Schnittstelle
  - [`FontFace()`](/de/docs/Web/API/FontFace/FontFace)-Konstruktor
  - [`fontFace.family`](/de/docs/Web/API/FontFace/family)-Eigenschaft
  - [`fontFace.style`](/de/docs/Web/API/FontFace/style)-Eigenschaft
  - [`fontFace.weight`](/de/docs/Web/API/FontFace/weight)-Eigenschaft
  - [`fontFace.stretch`](/de/docs/Web/API/FontFace/stretch)-Eigenschaft
  - [`fontFace.unicodeRange`](/de/docs/Web/API/FontFace/unicodeRange)-Eigenschaft
  - [`fontFace.variant`](/de/docs/Web/API/FontFace/variant)-Eigenschaft
  - [`fontFace.featureSettings`](/de/docs/Web/API/FontFace/featureSettings)-Eigenschaft
  - [`fontFace.variationSettings`](/de/docs/Web/API/FontFace/variationSettings)-Eigenschaft
  - [`fontFace.display`](/de/docs/Web/API/FontFace/display)-Eigenschaft
  - [`fontFace.ascentOverride`](/de/docs/Web/API/FontFace/ascentOverride)-Eigenschaft
  - [`fontFace.descentOverride`](/de/docs/Web/API/FontFace/descentOverride)-Eigenschaft
  - [`fontFace.lineGapOverride`](/de/docs/Web/API/FontFace/lineGapOverride)-Eigenschaft
  - [`fontFace.load()`](/de/docs/Web/API/FontFace/load)-Methode (gibt ein `Promise` zurück)
- [`fontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle
- [`fontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)-Ereignis

## Leitfäden

- [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API)
  - : Überblick über die CSS Font Loading API, die Ereignisse und Schnittstellen für das dynamische Laden von Schriftressourcen bereitstellt.

## Verwandte Konzepte

- CSS {{cssxref("@font-face")}}-At-Regel
- CSS {{cssxref("@font-feature-values")}}-At-Regel
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle
- Dokumenteigenschaft [`fonts`](/de/docs/Web/API/Document/fonts) (gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Objektinstanz zurück)
- WorkerGlobalScope-Eigenschaft [`fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) (gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Objektinstanz zurück)
- JavaScript {{jsxref("Promise")}}-Objekt

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Schriften](/de/docs/Web/CSS/CSS_fonts)-Modul
