---
title: Graceful Degradation
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Graceful Degradation** ist eine Design-Philosophie, die darauf abzielt, eine moderne Website/Anwendung zu entwickeln, die in den neuesten Browsern funktioniert, aber auf eine Erfahrung zurückfällt, die zwar nicht so gut, aber dennoch wesentliche Inhalte und Funktionen in älteren Browsern liefert.

{{Glossary("Polyfill", "Polyfills")}} können verwendet werden, um fehlende Funktionen mit JavaScript einzubauen, aber akzeptable Alternativen zu Funktionen wie Styling und Layout sollten dort bereitgestellt werden, wo möglich, zum Beispiel durch die Verwendung der CSS-Kaskade oder HTML-Fallback-Verhalten.

Es ist eine nützliche Technik, die es Webentwicklern ermöglicht, sich auf die Entwicklung der bestmöglichen Websites zu konzentrieren, da diese Websites von mehreren unbekannten Benutzeragenten aufgerufen werden. {{Glossary("Progressive_enhancement", "Progressive Enhancement")}} ist ähnlich, aber unterschiedlich — es wird oft als entgegengesetzter Ansatz zu Graceful Degradation angesehen. In der Realität sind beide Ansätze gültig und können sich oft ergänzen.

## Siehe auch

- [Graceful Degradation](https://en.wikipedia.org/wiki/Graceful_degradation) auf Wikipedia
- [Implementierung der Funktionsüberprüfung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- Verwandte Glossarbegriffe:
  - {{Glossary("Polyfill", "Polyfill")}}
  - {{Glossary("Progressive_enhancement", "Progressive Enhancement")}}
