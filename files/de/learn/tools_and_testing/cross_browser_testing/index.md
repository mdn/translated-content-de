---
title: Cross-Browser-Testing
slug: Learn/Tools_and_testing/Cross_browser_testing
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

Dieses Modul konzentriert sich auf das Testen von Webprojekten in verschiedenen Browsern. Wir betrachten die Identifizierung Ihrer Zielgruppe (z.B. welche Nutzer, Browser und Geräte sind besonders wichtig?), wie man Tests durchführt, die Hauptprobleme, mit denen Sie bei verschiedenen Arten von Code konfrontiert werden, und wie Sie diese mindern können. Außerdem befassen wir uns mit den nützlichsten Werkzeugen, die Ihnen beim Testen und Beheben von Problemen helfen, und wie Sie Automatisierung einsetzen, um Tests zu beschleunigen.

## Voraussetzungen

Bevor Sie versuchen, die hier beschriebenen Werkzeuge zu benutzen, sollten Sie wirklich die Grundlagen der Kernsprachen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) lernen.

## Leitfäden

- [Einführung in das Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : Dieser Artikel beginnt das Modul mit einem Überblick über das Thema Cross-Browser-Testing und beantwortet Fragen wie „Was ist Cross-Browser-Testing?“, „Was sind die häufigsten Arten von Problemen, die Sie antreffen werden?“, und „Was sind die Hauptansätze für das Testen, Identifizieren und Beheben von Problemen?“
- [Strategien zur Durchführung von Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : Als Nächstes vertiefen wir uns in die Durchführung von Tests, indem wir eine Zielgruppe identifizieren (z.B. welche Browser, Geräte und andere Segmente getestet werden sollten), Low-Fi-Strategien für das Testen (besorgen Sie sich eine Reihe von Geräten und einige virtuelle Maschinen und führen Sie bei Bedarf Ad-hoc-Tests durch), High-Tech-Strategien (Automatisierung, Nutzung spezieller Test-Apps) und das Testen mit Benutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : Nachdem der Rahmen abgesteckt ist, betrachten wir nun speziell die häufigen Cross-Browser-Probleme, die Sie in HTML- und CSS-Code antreffen werden, und welche Werkzeuge verwendet werden können, um Problemen vorzubeugen oder aufgetretene Probleme zu beheben. Dazu gehören die Syntaxprüfung von Code, das Handling von CSS-Präfixen, die Nutzung von Browser-Entwicklungstools zur Fehlerverfolgung, die Verwendung von Polyfills zur Unterstützung inkompatibler Browser, die Bearbeitung von Problemen des responsiven Designs und mehr.
- [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : Nun schauen wir uns häufige Cross-Browser-Probleme in JavaScript an und wie man diese behebt. Dazu gehört die Verwendung von Browser-Entwicklungstools zur Fehlersuche und Behebung, die Nutzung von Polyfills und Bibliotheken zum Umgehen von Problemen, das Funktionieren moderner JavaScript-Funktionen in älteren Browsern und mehr.
- [Umgang mit häufigen Barrierefreiheitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : Als Nächstes richten wir unsere Aufmerksamkeit auf die Barrierefreiheit, indem wir Informationen über häufige Probleme bereitstellen, einfache Tests erklären und zeigen, wie man Prüf- und Automatisierungstools zur Identifizierung von Barrierefreiheitsproblemen nutzt.
- [Implementierung von Funktionsprüfung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : Funktionsprüfung beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt, und läuft unterschiedlichen Code abhängig davon, ob er es tut (oder nicht), so dass der Browser immer ein funktionierendes Erlebnis bieten kann, statt in einigen Browsern abzustürzen oder Fehler zu verursachen. Dieser Artikel erklärt, wie Sie Ihre eigene einfache Funktionsprüfung schreiben, eine Bibliothek zur schnelleren Implementierung nutzen und eingebaute Funktionen zur Funktionsprüfung wie `@supports` verwenden.
- [Einführung in automatisiertes Testen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : Das manuelle Durchführen von Tests in mehreren Browsern und auf mehreren Geräten mehrmals täglich kann mühsam und zeitraubend sein. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner nutzt und die Grundlagen der Nutzung kommerzieller Testautomatisierungs-Apps für Browser wie Sauce Labs und Browser Stack.
- [Einrichtung Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : In diesem Artikel werden wir Ihnen zeigen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node durchführen. Wir werden auch erläutern, wie Sie Ihre lokale Testumgebung mit kommerziellen Apps wie den zuvor besprochenen integrieren können.
