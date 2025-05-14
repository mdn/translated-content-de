---
title: SVG-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

{{FirefoxSidebar}}

Firefox 3 bietet verbesserte Unterstützung für [Scalable Vector Graphics](/de/docs/Web/SVG) (SVG) im Vergleich zu früheren Versionen von Firefox. Obwohl diese Funktionen an anderer Stelle dokumentiert sind, dient dieser Artikel als praktische Liste, damit Sie leicht feststellen können, welche Funktionen in Firefox 3 hinzugefügt wurden.

- Das `foreignObject`-Element wird jetzt unterstützt ([Firefox-Bug 326966](https://bugzil.la/326966)). Weitere Details finden Sie in der [Spezifikation](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement) oder im [Blogeintrag von Robert O'Callahan](https://robert.ocallahan.org/2006/06/future-is-now_20.html).
- Unterstützung für das `pattern`-Element ([Spezifikation](https://www.w3.org/TR/SVG11/pservers.html#PatternElement))
- Unterstützung für das `mask`-Element ([Spezifikation](https://www.w3.org/TR/SVG11/masking.html#MaskElement))
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

- Die Handhabung des `<a>`-Elements in SVG hat mehrere Fehlerkorrekturen erfahren; siehe [Firefox-Bug 267664](https://bugzil.la/267664), [WebKit-Bug 268135](https://bugzil.la/268135), [WebKit-Bug 316248](https://bugzil.la/316248), [WebKit-Bug 317270](https://bugzil.la/317270) und [WebKit-Bug 320724](https://bugzil.la/320724).
- Die SVG-DOM-Methoden `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()` und `getCharNumAtPosition()` wurden implementiert.
- Unterstützung für das `xml:space`-Attribut ([Spezifikation](https://www.w3.org/TR/SVG/text.html#WhiteSpace))
- Fallback für `fill`/`stroke` wird jetzt unterstützt ([Spezifikation](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- `em` und `ex` Einheiten werden jetzt zur Längenangabe unterstützt ([Firefox-Bug 305859](https://bugzil.la/305859)).

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
