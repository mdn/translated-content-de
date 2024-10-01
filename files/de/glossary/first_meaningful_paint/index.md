---
title: First Meaningful Paint
slug: Glossary/First_meaningful_paint
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**First Meaningful Paint** (FMP) ist der Zeitpunkt, an dem die größte Änderung des Layouts oberhalb der Falte stattgefunden hat und Web-Schriftarten geladen wurden. Es ist der Moment, in dem die Frage "Ist es nützlich?" mit "ja" beantwortet werden kann, solange der erste bedeutungsvolle Anstrich abgeschlossen ist.

FMP ist sehr empfindlich gegenüber kleinen Unterschieden im Seitenladevorgang. Dies kann zu inkonsistenten (bimodalen) Ergebnissen führen. Die Definition der Metrik hängt von browserspezifischen Implementierungsdetails ab, was bedeutet, dass sie nicht standardisiert werden kann und nicht in allen Webbrowsern implementiert wurde.

> [!WARNING]
> First Meaningful Paint (FMP) ist in Lighthouse 6.0 veraltet. In Zukunft sollten Sie stattdessen die [LargestContentfulPaint API](https://wicg.github.io/largest-contentful-paint/) verwenden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("First_contentful_paint", "First contentful paint")}}
  - {{Glossary("Largest_contentful_paint", "Largest contentful paint")}}
