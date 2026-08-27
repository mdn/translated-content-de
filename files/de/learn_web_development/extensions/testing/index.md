---
title: Testen
slug: Learn_web_development/Extensions/Testing
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

Jede Codebasis, die eine bestimmte Komplexitätsstufe überschreitet, benötigt ein Testsysten, um sicherzustellen, dass sie auch bei neuen Codeergänzungen korrekt und leistungsfähig arbeitet und weiterhin den Anforderungen der Benutzer entspricht. Dieses Modul listet die Grundlagen auf, mit denen Sie beginnen sollten.

> [!NOTE]
> Dieses Modul war ursprünglich vollständig dem Cross-Browser-Testen gewidmet, aber wir sind dabei, es neu auszurichten, um Tests im Allgemeinen abzudecken. Sobald wir die Zeit finden, planen wir, das Material zu aktualisieren, um allgemeine Testgrundlagen, funktionale und Kompatibilitätstests sowie Usability-Tests abzudecken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie wirklich die Grundlagen von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) gelernt haben.

## Tutorials

- [Einführung in Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : Dieser Artikel startet das Modul, indem er einen Überblick über das Thema Cross-Browser-Testing gibt und Fragen beantwortet wie "Was ist Cross-Browser-Testing?", "Was sind die häufigsten Arten von Problemen, auf die Sie stoßen werden?" und "Was sind die Hauptansätze für das Testen, Identifizieren und Beheben von Problemen?"
- [Strategien zur Durchführung von Tests](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : Als Nächstes gehen wir tiefer in die Durchführung von Tests ein, betrachten die Identifizierung einer Zielgruppe (z. B. welche Browser, Geräte und andere Segmente Sie testen sollten), Low-Fidelity-Teststrategien (besorgen Sie sich eine Reihe von Geräten und einige virtuelle Maschinen und führen Sie bei Bedarf Ad-hoc-Tests durch), High-Tech-Strategien (Automatisierung, Verwendung spezieller Testanwendungen) und Tests mit Benutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : Mit dem Einstieg in das Thema werden wir nun speziell die häufigen Cross-Browser-Probleme betrachten, die Sie in HTML- und CSS-Code antreffen, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehören das Linting von Code, der Umgang mit CSS-Präfixen, die Verwendung von Browser-Dev-Tools zur Fehlerbehebung, die Verwendung von Polyfills zur Unterstützung in Browsern, die Bewältigung von Problemen responsiver Designs und vieles mehr.
- [Implementierung von Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : Feature Detection beinhaltet das Ermitteln, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen unterschiedlicher Codes abhängig davon, ob dies der Fall ist (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature Detection schreiben, wie Sie eine Bibliothek verwenden, um die Implementierung zu beschleunigen, und native Funktionen für Feature Detection wie `@supports` einsetzen.
- [Einführung in automatisierte Tests](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : Manuelles Testen auf mehreren Browsern und Geräten, mehrmals täglich, kann lästig und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie Sie Task-Runner verwenden, und die Grundlagen zur Nutzung kommerzieller Browser-Test-Automatisierungsanwendungen wie Sauce Labs und Browser Stack.
- [Einrichten Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node durchführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Anwendungen wie den in vorherigen Artikeln besprochenen integrieren können.

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
