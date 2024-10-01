---
title: Graceful degradation
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Graceful degradation** ist eine Design-Philosophie, die darauf abzielt, eine moderne Website/Anwendung zu erstellen, die in den neuesten Browsern funktioniert, aber auf eine Erfahrung zurückfällt, die zwar nicht so gut ist, aber dennoch wesentliche Inhalte und Funktionen in älteren Browsern bereitstellt.

{{Glossary("Polyfill", "Polyfills")}} können verwendet werden, um fehlende Funktionen mit JavaScript einzubauen, aber es sollten, wo möglich, akzeptable Alternativen zu Funktionen wie Styling und Layout bereitgestellt werden, zum Beispiel durch die Verwendung der CSS-Kaskade oder HTML-Standardsverhalten. Einige gute Beispiele finden Sie in [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

Es ist eine nützliche Technik, die es Webentwicklern ermöglicht, sich darauf zu konzentrieren, die bestmöglichen Websites zu entwickeln, da diese Websites von mehreren unbekannten User-Agents aufgerufen werden. {{Glossary("Progressive_enhancement", "Progressive enhancement")}} ist verwandt, aber anders — oft wird es als der entgegengesetzte Ansatz zu graceful degradation gesehen. In der Realität sind beide Ansätze gültig und können sich oft gegenseitig ergänzen.

## Siehe auch

- [Graceful degradation](https://en.wikipedia.org/wiki/Graceful_degradation) auf Wikipedia
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Implementierung von Feature Detection](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- Verwandte Glossarbegriffe:
  - {{Glossary("Polyfill", "Polyfill")}}
  - {{Glossary("Progressive_enhancement", "Progressive enhancement")}}
