---
title: Cross-Browser-Tests
slug: Learn/Tools_and_testing/Cross_browser_testing
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

Dieses Modul konzentriert sich auf das Testen von Webprojekten in verschiedenen Browsern. Wir betrachten die Identifizierung Ihrer Zielgruppe (z.B. welche Nutzer, Browser und Geräte sind für Sie am wichtigsten?), wie Sie Tests durchführen, die Hauptprobleme, die Sie mit verschiedenen Arten von Code erleben werden und wie man sie mildert, welche Werkzeuge am nützlichsten sind, um Ihnen beim Testen und Beheben von Problemen zu helfen, und wie Sie Automatisierung nutzen können, um Tests zu beschleunigen.

## Voraussetzungen

Sie sollten wirklich die Grundlagen der Kernsprachen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) erlernen, bevor Sie versuchen, die hier beschriebenen Werkzeuge zu verwenden.

## Anleitungen

- [Einführung in Cross-Browser-Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : Dieser Artikel beginnt das Modul, indem er einen Überblick über das Thema Cross-Browser-Tests gibt und Fragen beantwortet wie "Was sind Cross-Browser-Tests?", "Was sind die häufigsten Arten von Problemen, auf die Sie stoßen werden?" und "Was sind die Hauptansätze zur Prüfung, Identifizierung und Behebung von Problemen?"
- [Strategien zur Durchführung von Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : Als nächstes gehen wir auf die Durchführung von Tests ein und betrachten die Identifizierung einer Zielgruppe (z.B. welche Browser, Geräte und andere Segmente sollten Sie sicherstellen, dass getestet werden), lo-fi Teststrategien (verschaffen Sie sich eine Reihe von Geräten und einige virtuelle Maschinen und führen Sie bei Bedarf Ad-hoc-Tests durch), höher-technische Strategien (Automatisierung, Nutzung dedizierter Test-Apps) und Tests mit Nutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : Nachdem der Rahmen gesetzt ist, werden wir nun insbesondere auf die häufigen Cross-Browser-Probleme eingehen, auf die Sie in HTML- und CSS-Code stoßen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehört das Linting von Code, der Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklertools zur Problemanalyse, die Nutzung von Polyfills, um Unterstützung in Browsern hinzuzufügen, die Bewältigung von responsiven Designproblemen und mehr.
- [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : Nun schauen wir uns häufige Cross-Browser-JavaScript-Probleme und deren Behebung an. Dies beinhaltet Informationen zur Nutzung von Browser-Entwicklertools zur Problemidentifikation und -behebung, die Anwendung von Polyfills und Bibliotheken zur Umgehung von Problemen, das Implementieren moderner JavaScript-Features in älteren Browsern und mehr.
- [Umgang mit häufigen Zugänglichkeitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : Als nächstes richten wir unser Augenmerk auf die Zugänglichkeit und bieten Informationen zu häufigen Problemen, wie man einfache Tests durchführt und wie man Auditing-/Automatisierungstools zur Auffindung von Zugänglichkeitsproblemen nutzt.
- [Implementierung von Funktionsdetektion](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : Funktionsdetektion beinhaltet die Ermittlung, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen unterschiedlichen Codes, abhängig davon, ob er dies tut (oder nicht), damit der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu verursachen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Funktionsdetektion schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Features zur Funktionsdetektion nutzen, wie z.B. `@supports`.
- [Einführung in automatisierte Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : Manuelles Testen auf mehreren Browsern und Geräten, mehrmals am Tag, kann mühsam und zeitaufwendig sein. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet und die Grundlagen der Nutzung kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs und Browser Stack.
- [Einrichtung Ihrer eigenen Testautomatisierungs-Umgebung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : In diesem Artikel lehren wir Sie, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node durchführen. Außerdem betrachten wir, wie Sie Ihre lokale Testumgebung mit kommerziellen Apps integrieren können, wie in dem vorherigen Artikel besprochen.
