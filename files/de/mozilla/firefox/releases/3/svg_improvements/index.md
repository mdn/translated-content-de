---
title: SVG-Verbesserungen in Firefox 3
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{FirefoxSidebar}}

Firefox 3 bietet eine verbesserte Unterstützung für [Scalable Vector Graphics](/de/docs/Web/SVG) (SVG) gegenüber früheren Versionen von Firefox. Auch wenn diese Funktionen an anderer Stelle dokumentiert sind, dient dieser Artikel als praktische Liste, damit Sie leicht feststellen können, welche Funktionen in Firefox 3 hinzugefügt wurden.

- Das [`foreignObject`](/de/docs/Web/SVG/Reference/Element/foreignObject)-Element wird jetzt unterstützt ([Firefox-Bug 326966](https://bugzil.la/326966)).
- Das [`pattern`](/de/docs/Web/SVG/Reference/Element/pattern)-Element wird jetzt unterstützt.
- Das [`mask`](/de/docs/Web/SVG/Reference/Element/mask)-Element wird jetzt unterstützt.
- Unterstützung für alle SVG 1.1-[Filter](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Filter_effects) wurde hinzugefügt:

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

- Die Behandlung des `<a>`-Elements in SVG hat mehrere Fehlerbehebungen erhalten; siehe [Firefox-Bug 267664](https://bugzil.la/267664), [WebKit-Bug 268135](https://bugzil.la/268135), [WebKit-Bug 316248](https://bugzil.la/316248), [WebKit-Bug 317270](https://bugzil.la/317270) und [WebKit-Bug 320724](https://bugzil.la/320724).
- Die SVG-DOM-Methoden `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()` und `getCharNumAtPosition()` wurden implementiert.
- Das [`xml:space`](/de/docs/Web/SVG/Reference/Attribute/xml:space)-Attribut wird jetzt unterstützt.
- Fallback-`fill`/`stroke` wird jetzt unterstützt.
- `em`- und `ex`-Einheiten werden jetzt zur Angabe von Längen unterstützt ([Firefox-Bug 305859](https://bugzil.la/305859)).

## Siehe auch

- [SVG](/de/docs/Web/SVG)
- [Firefox 3 für Entwickler](/de/docs/Mozilla/Firefox/Releases/3)
