---
title: First Meaningful Paint (FMP)
slug: Glossary/First_meaningful_paint
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{GlossarySidebar}}

**First Meaningful Paint** (FMP) ist der Zeitpunkt, an dem die größte Layoutänderung im sichtbaren Bereich stattgefunden hat und Web-Schriftarten geladen sind. An diesem Punkt wird die Frage "Ist es nützlich?" mit "Ja" beantwortet, nachdem der erste bedeutende Anstrich abgeschlossen ist.

FMP ist sehr empfindlich gegenüber kleinen Unterschieden im Seitenladeprozess. Dies kann zu inkonsistenten (bimodalen) Ergebnissen führen. Die Definition dieser Metrik basiert auf browser-spezifischen Implementierungsdetails, was bedeutet, dass sie nicht standardisiert werden kann und nicht in allen Webbrowsern implementiert wurde.

> [!WARNING]
> First Meaningful Paint (FMP) ist in Lighthouse 6.0 veraltet. Für die Zukunft sollten Sie stattdessen die [LargestContentfulPaint API](https://wicg.github.io/largest-contentful-paint/) in Betracht ziehen.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint")}}
