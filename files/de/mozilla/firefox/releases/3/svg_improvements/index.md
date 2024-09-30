---
title: SVG-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: 7f434aa335ebf7a62b63c4650acbc8d325c36275
---

{{FirefoxSidebar}}

Firefox 3 bietet eine verbesserte Unterstützung für [Scalable Vector Graphics](/de/docs/Web/SVG) (SVG) im Vergleich zu früheren Versionen von Firefox. Während diese Funktionen an anderer Stelle dokumentiert sind, dient dieser Artikel als praktische Liste, damit Sie leicht feststellen können, welche Funktionen in Firefox 3 hinzugefügt wurden.

- Das `foreignObject`-Element wird jetzt unterstützt ([Firefox-Bug 326966](https://bugzil.la/326966)). Siehe die [Spezifikation](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) oder [diesen Artikel](https://robert.ocallahan.org/2006/06/future-is-now_20.html) für Details.
- Unterstützung des `pattern`-Elements ([Spezifikation](https://www.w3.org/TR/SVG11/pservers.html#PatternElement))
- Unterstützung des `mask`-Elements ([Spezifikation](https://www.w3.org/TR/SVG11/masking.html#MaskElement))
- Unterstützung für alle SVG 1.1 Filter ([Spezifikation](https://www.w3.org/TR/SVG11/filters.html)):

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

- Die Handhabung des `<a>`-Elements in SVG hat mehrere Bugfixes erhalten; siehe [Firefox-Bug 267664](https://bugzil.la/267664), [Webkit-Bug 268135](https://bugzil.la/268135), [Webkit-Bug 316248](https://bugzil.la/316248), [Webkit-Bug 317270](https://bugzil.la/317270) und [Webkit-Bug 320724](https://bugzil.la/320724).
- Die SVG DOM-Methoden `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()` und `getCharNumAtPosition()` wurden implementiert.
- das `xml:space`-Attribut wird unterstützt ([Spezifikation](https://www.w3.org/TR/SVG/text.html#WhiteSpace))
- Fallback `fill`/`stroke` werden jetzt unterstützt ([Spezifikation](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- `em`- und `ex`-Einheiten werden jetzt für die Längenangabe unterstützt ([Firefox-Bug 305859](https://bugzil.la/305859)).

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
