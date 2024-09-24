---
title: Elegantes Nachlassen
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Elegantes Nachlassen** ist eine Designphilosophie, die darauf abzielt, eine moderne Website/Anwendung zu erstellen, die in den neuesten Browsern funktioniert, aber auf eine Erfahrung zurückgreift, die zwar nicht so gut ist, aber dennoch wesentliche Inhalte und Funktionalitäten in älteren Browsern liefert.

{{Glossary("Polyfill","Polyfills")}} können verwendet werden, um fehlende Funktionen mit JavaScript einzubauen, aber es sollten akzeptable Alternativen zu Funktionen wie Styling und Layout bereitgestellt werden, wo immer möglich, zum Beispiel durch Verwendung der CSS-Kaskade oder des HTML-Fallback-Verhaltens. Einige gute Beispiele finden Sie in [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS).

Es ist eine nützliche Technik, die es Webentwicklern ermöglicht, sich darauf zu konzentrieren, die bestmöglichen Websites zu entwickeln, da diese Websites von mehreren unbekannten User-Agents aufgerufen werden. {{Glossary("Progressive enhancement")}} ist damit verwandt, aber unterschiedlich — oft als in die entgegengesetzte Richtung zum eleganten Nachlassen gesehen. In Wirklichkeit sind beide Ansätze gültig und können sich oft ergänzen.

## Siehe auch

- [Elegantes Nachlassen](https://en.wikipedia.org/wiki/Graceful_degradation) auf Wikipedia
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Implementierung von Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- Verwandte Glossarbegriffe:
  - {{Glossary("Polyfill")}}
  - {{Glossary("Progressive enhancement")}}
