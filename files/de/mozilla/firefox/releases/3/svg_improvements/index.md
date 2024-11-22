---
title: SVG-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{FirefoxSidebar}}

Firefox 3 bietet im Vergleich zu früheren Versionen von Firefox eine verbesserte Unterstützung für [Scalable Vector Graphics](/de/docs/Web/SVG) (SVG). Während diese Features an anderer Stelle dokumentiert sind, dient dieser Artikel als praktische Liste, damit Sie leicht feststellen können, welche Features in Firefox 3 hinzugefügt wurden.

- Das `foreignObject`-Element wird nun unterstützt ([Firefox-Bug 326966](https://bugzil.la/326966)). Siehe die [Spezifikation](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) oder [diesen Artikel](https://robert.ocallahan.org/2006/06/future-is-now_20.html) für Details.
- Unterstützung des `pattern`-Elements ([Spezifikation](https://www.w3.org/TR/SVG11/pservers.html#PatternElement))
- Unterstützung des `mask`-Elements ([Spezifikation](https://www.w3.org/TR/SVG11/masking.html#MaskElement))
- Unterstützung für alle SVG 1.1-Filter ([Spezifikation](https://www.w3.org/TR/SVG11/filters.html)):

  - `filter`
  - `feDistantLight`
  - `fePointLight`
  - `feSpotLight`
  - `feBlend`
  - `feColorMatrix`
  - `feConvolveMatrix`
  - `feComponentTransfer`, `feFuncR`, `feFuncG`, `feFuncB`, `feFuncA`
  - `feComposite`
  - `feConvolveMatrix`
  - `feDiffuseLighting`
  - `feDisplacementMap`
  - `feDistantLight`
  - `feFlood`
  - `feGaussianBlur`
  - `feImage`
  - `feMerge`, `feMergeNode`
  - `feMorphology`
  - `feOffset`
  - `fePointLight`
  - `feSpecularLighting`
  - `feTurbulence`
  - `feTile`

- Beim `<a>`-Element-Handling in SVG wurden mehrere Bugs behoben; siehe [Firefox-Bug 267664](https://bugzil.la/267664), [WebKit-Bug 268135](https://bugzil.la/268135), [WebKit-Bug 316248](https://bugzil.la/316248), [WebKit-Bug 317270](https://bugzil.la/317270) und [WebKit-Bug 320724](https://bugzil.la/320724).
- Die SVG-DOM-Methoden `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()`, und `getCharNumAtPosition()` wurden implementiert.
- Unterstützung des `xml:space`-Attributs ([Spezifikation](https://www.w3.org/TR/SVG/text.html#WhiteSpace))
- Fallback `fill`/`stroke` werden jetzt unterstützt ([Spezifikation](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- `em`- und `ex`-Einheiten werden nun zur Angabe von Längen unterstützt ([Firefox-Bug 305859](https://bugzil.la/305859)).

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
