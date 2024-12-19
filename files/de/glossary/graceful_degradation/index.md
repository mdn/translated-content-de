---
title: Stufenweiser Abbau
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

**Stufenweiser Abbau** ist eine Designphilosophie, die darauf abzielt, eine moderne Website/Anwendung zu erstellen, die in den neuesten Browsern funktioniert, aber auf eine Erfahrung zurückfällt, die zwar nicht so gut ist, aber dennoch wesentliche Inhalte und Funktionen in älteren Browsern bietet.

{{Glossary("Polyfill", "Polyfills")}} können verwendet werden, um fehlende Funktionen mit JavaScript einzubauen. Es sollten jedoch akzeptable Alternativen zu Funktionen wie Styling und Layout bereitgestellt werden, wenn möglich durch die Nutzung der CSS-Kaskade oder des HTML-Fallback-Verhaltens.

Es ist eine nützliche Technik, die Webentwicklern ermöglicht, die bestmöglichen Websites zu entwickeln, da diese von mehreren unbekannten User-Agents abgerufen werden. {{Glossary("Progressive_enhancement", "Progressive Enhancement")}} ist verwandt, aber anders — es wird oft als das Gegenteil von stufenweisem Abbau angesehen. In Wirklichkeit sind beide Ansätze gültig und können sich oft ergänzen.

## Siehe auch

- [Stufenweiser Abbau](https://en.wikipedia.org/wiki/Graceful_degradation) auf Wikipedia
- [Implementierung von Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- Verwandte Glossarbegriffe:
  - {{Glossary("Polyfill", "Polyfill")}}
  - {{Glossary("Progressive_enhancement", "Progressive Enhancement")}}
