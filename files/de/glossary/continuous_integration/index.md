---
title: Kontinuierliche Integration
slug: Glossary/Continuous_integration
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

Kontinuierliche Integration (CI) ist eine Praktik in der Softwareentwicklung, bei der Änderungen am Quellcode häufig in die Hauptcodebasis integriert werden.

Es ist eine wichtige Praktik, wann immer ein Entwicklerteam an einer gemeinsamen Codebasis arbeitet. In dieser Situation könnten verschiedene Entwickler gleichzeitig sich überschneidende Änderungen am Code vornehmen, jeweils in ihren persönlichen Entwicklungszweigen. Häufige Integration der Änderungen jedes Entwicklers macht Konflikte weniger wahrscheinlich und intuitiver lösbar.

Wie [Martin Fowler beobachtet](https://martinfowler.com/articles/continuousIntegration.html#EveryonePushesCommitsToTheMainlineEveryDay):

> Integration betrifft in erster Linie Kommunikation. Integration ermöglicht es Entwicklern, anderen Entwicklern von den Änderungen zu berichten, die sie vorgenommen haben. Häufige Kommunikation ermöglicht es, schnell über neue Entwicklungen informiert zu sein, während sich die Änderungen entwickeln.

Ein wesentlicher Aspekt von CI ist der automatisierte Build und Test: Typischerweise wird in einem CI-System, sobald ein Entwickler einen Pull-Request öffnet, um seine Änderungen am Hauptzweig zu übernehmen, ein automatisierter Prozess ausgelöst, der das Produkt erstellt und Tests durchführt. Sobald alle Tests bestanden sind, kann die Änderung von Kollegen begutachtet werden.
