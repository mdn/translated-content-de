---
title: Laden von CSS-Schriftarten
short-title: Laden von Schriftarten
slug: Web/CSS/Guides/Font_loading
l10n:
  sourceCommit: 106f215d6fb32a7ee0afe09f01a82323d39cd1f0
---

Das Modul **CSS font loading** beschreibt Ereignisse und Schnittstellen zum dynamischen Laden von Schriftartressourcen.

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
  - [`fontFace.sizeAdjust`](/de/docs/Web/API/FontFace/sizeAdjust)-Eigenschaft
  - [`fontFace.load()`](/de/docs/Web/API/FontFace/load)-Methode (gibt ein Promise zurück)
- [`fontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle
- [`fontFaceSetLoadEvent`](/de/docs/Web/API/FontFaceSetLoadEvent)-Ereignis

## Leitfäden

- [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API)
  - : Überblick über die CSS Font Loading API, die Ereignisse und Schnittstellen zum dynamischen Laden von Schriftartressourcen bereitstellt.

## Verwandte Konzepte

- CSS-At-Regel {{cssxref("@font-face")}}
- CSS-At-Regel {{cssxref("@font-feature-values")}}
- [`CSSFontFaceRule`](/de/docs/Web/API/CSSFontFaceRule)-Schnittstelle
- [`fonts`](/de/docs/Web/API/Document/fonts)-Eigenschaft von Document (gibt die Objektinstanz von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück)
- [`fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts)-Eigenschaft von WorkerGlobalScope (gibt die Objektinstanz von [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück)
- JavaScript-Objekt {{jsxref("Promise")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Schriftarten](/de/docs/Web/CSS/Guides/Fonts)
