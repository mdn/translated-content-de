---
title: Graceful degradation
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Graceful degradation** ist eine Designphilosophie, die darauf abzielt, eine moderne Website/Anwendung zu erstellen, die in den neuesten Browsern funktioniert, aber auf eine Erfahrung zurückfällt, die zwar nicht so gut ist, aber dennoch wesentliche Inhalte und Funktionen in älteren Browsern liefert.

[Polyfills](/de/docs/Glossary/Polyfill) können verwendet werden, um fehlende Funktionen mit JavaScript einzubauen, aber akzeptable Alternativen zu Funktionen wie Styling und Layout sollten, wo möglich, bereitgestellt werden, zum Beispiel durch die Verwendung der CSS-Kaskade oder HTML-Fallback-Verhalten. Einige gute Beispiele finden Sie in [Behandlung häufiger HTML- und CSS-Probleme](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

Es ist eine nützliche Technik, die es Webentwicklern ermöglicht, sich auf die Entwicklung der bestmöglichen Websites zu konzentrieren, da diese von mehreren unbekannten User-Agents aufgerufen werden. [Progressive enhancement](/de/docs/Glossary/Progressive_enhancement) ist damit verwandt, aber unterschiedlich — wird oft als gegenteilig zu graceful degradation betrachtet. In Wirklichkeit sind beide Ansätze gültig und können einander oft ergänzen.

## Siehe auch

- [Graceful degradation](https://en.wikipedia.org/wiki/Graceful_degradation) auf Wikipedia
- [Behandlung häufiger HTML- und CSS-Probleme](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Implementierung der Funktionsüberprüfung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- Verwandte Glossarbegriffe:
  - [Polyfill](/de/docs/Glossary/Polyfill)
  - [Progressive enhancement](/de/docs/Glossary/Progressive_enhancement)
