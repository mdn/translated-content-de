---
title: Kontinuierliche Integration
slug: Glossary/Continuous_integration
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

Kontinuierliche Integration (CI) ist eine Softwareentwicklungspraxis, bei der Änderungen am Quellcode häufig in die Hauptcodebasis integriert werden.

Es ist eine wichtige Praxis, wann immer ein Entwicklerteam an einer gemeinsamen Codebasis arbeitet. In dieser Situation könnten verschiedene Entwickler zeitgleich überlappende Änderungen am Code vornehmen, jeder in seinen persönlichen Branches. Die häufige Integration der Änderungen jedes Entwicklers macht es viel weniger wahrscheinlich, dass Konflikte auftreten, und erleichtert deren Lösung erheblich, wenn sie doch auftreten.

Wie [Martin Fowler bemerkt](https://martinfowler.com/articles/continuousIntegration.html#EveryonePushesCommitsToTheMainlineEveryDay):

> Integration dreht sich in erster Linie um Kommunikation. Integration ermöglicht es Entwicklern, anderen Entwicklern von den vorgenommenen Änderungen zu berichten. Häufige Kommunikation ermöglicht es den Beteiligten, schnell über Entwicklungen der Änderungen informiert zu sein.

Ein wesentlicher Aspekt von CI ist automatisiertes Bauen und Testen: Typischerweise wird in einem CI-System, sobald ein Entwickler eine Pull-Anfrage stellt, um seine Änderungen an die Hauptbranch zu übergeben, ein automatisierter Prozess gestartet, der das Produkt baut und Tests durchführt. Sobald alle Tests bestanden sind, kann die Änderung von Kollegen überprüft werden.
