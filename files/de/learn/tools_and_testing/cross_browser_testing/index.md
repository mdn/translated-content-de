---
title: Cross-Browser-Testing
slug: Learn/Tools_and_testing/Cross_browser_testing
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

Dieses Modul konzentriert sich auf das Testen von Webprojekten in verschiedenen Browsern. Wir betrachten die Identifizierung Ihrer Zielgruppe (z. B. welche Benutzer, Browser und Geräte Sie am meisten beachten müssen?), wie man Tests durchführt, die Hauptprobleme, denen Sie bei verschiedenen Arten von Code begegnen werden, und wie man sie behebt, welche Tools am nützlichsten sind, um Ihnen beim Testen und Beheben von Problemen zu helfen, und wie man Automatisierung einsetzt, um die Tests zu beschleunigen.

## Voraussetzungen

Sie sollten wirklich die Grundlagen der Kernsprachen [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript) erlernen, bevor Sie versuchen, die hier beschriebenen Tools zu verwenden.

## Leitfäden

- [Einführung in das Cross-Browser-Testing](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : Dieser Artikel beginnt das Modul, indem er einen Überblick über das Thema Cross-Browser-Testing bietet, und Fragen wie "Was ist Cross-Browser-Testing?", "Was sind die häufigsten Probleme, auf die Sie stoßen werden?" und "Was sind die Hauptansätze für das Testen, Identifizieren und Beheben von Problemen?" beantwortet.
- [Strategien zur Durchführung von Tests](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : Als nächstes vertiefen wir uns in die Durchführung von Tests und betrachten die Identifizierung einer Zielgruppe (z. B. welche Browser, Geräte und andere Segmente sollten unbedingt getestet werden), lo-fi-Teststrategien (beschaffen Sie sich eine Reihe von Geräten und einige virtuelle Maschinen und führen Sie bei Bedarf Ad-hoc-Tests durch), High-Tech-Strategien (Automatisierung, Verwendung dedizierter Testanwendungen) und Tests mit Benutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : Nachdem die Grundlagen gelegt sind, schauen wir uns nun speziell die häufigen Cross-Browser-Probleme an, auf die Sie in HTML- und CSS-Code stoßen werden, und welche Tools verwendet werden können, um Probleme zu verhindern oder zu beheben. Dies umfasst das Linting von Code, den Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklertools zur Problemlokalisierung, die Verwendung von Polyfills zur Unterstützung von Browsern, das Angehen von responsiven Designproblemen und mehr.
- [Umgang mit häufigen JavaScript-Problemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : Nun schauen wir uns typische Cross-Browser-JavaScript-Probleme an und wie man sie behebt. Dazu gehören Informationen über die Verwendung von Browser-Entwicklertools zur Problemlokalisierung und -behebung, die Verwendung von Polyfills und Bibliotheken zur Umgehung von Problemen, die Aktivierung moderner JavaScript-Funktionen in älteren Browsern und mehr.
- [Umgang mit häufigen Zugänglichkeitsproblemen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : Als nächstes wenden wir uns der Barrierefreiheit zu und liefern Informationen über häufige Probleme, wie man einfache Tests durchführt, und wie man Prüf- und Automatisierungstools zur Erkennung von Zugänglichkeitsproblemen nutzt.
- [Implementierung von Feature Detection](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : Feature Detection beinhaltet die Ermittlung, ob ein Browser einen bestimmten Codeblock unterstützt, und die Ausführung unterschiedlichen Codes, abhängig davon, ob er dies tut (oder nicht), damit der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu werfen. Dieser Artikel beschreibt, wie man einfaches Feature Detection selbst schreibt, wie man eine Bibliothek zur Beschleunigung der Implementierung nutzt, sowie native Funktionen zur Feature Detection wie `@supports`.
- [Einführung in automatisiertes Testen](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : Das manuelle Ausführen von Tests in mehreren Browsern und auf mehreren Geräten, mehrmals täglich, kann ermüdend und zeitaufwändig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet, und die Grundlagen zur Nutzung von kommerziellen Browser-Testautomatisierungsanwendungen wie Sauce Labs und Browser Stack.
- [Einrichtung Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : In diesem Artikel lehren wir Sie, wie Sie Ihre eigene Automatisierungsumgebung installieren und eigene Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch betrachten, wie Sie Ihre lokale Testumgebung mit kommerziellen Anwendungen wie den im vorherigen Artikel besprochenen integrieren können.
