---
title: Testing
slug: Learn_web_development/Extensions/Testing
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

Jeder Codebasis, die einen bestimmten Komplexitätsgrad überschreitet, muss ein Testsystem zugeordnet werden, um sicherzustellen, dass die Codebasis weiterhin korrekt und performant funktioniert und die Bedürfnisse der Nutzer erfüllt, wenn neuer Code hinzugefügt wird. Dieses Modul listet die Grundlagen auf, mit denen Sie beginnen sollten.

> [!NOTE]
> Dieses Modul war ursprünglich vollständig dem Cross-Browser-Testing gewidmet, aber wir sind dabei, es neu auszurichten, um das Testen im Allgemeinen abzudecken. Wenn wir die Zeit finden, beabsichtigen wir, das Material zu aktualisieren, um allgemeine Testgrundlagen, funktionale und Kompatibilitätstests sowie Usability-Tests abzudecken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie wirklich die Grundlagen von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) gelernt haben.

## Tutorials

- [Einführung in das Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : Dieser Artikel beginnt das Modul mit einer Übersicht über das Thema Cross-Browser-Testing, beantwortet Fragen wie „was ist Cross-Browser-Testing?“, „welche sind die häufigsten Arten von Problemen, auf die Sie stoßen werden?“ und „welche sind die Hauptansätze für das Testen, Identifizieren und Beheben von Problemen?“
- [Strategien zur Durchführung von Tests](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : Als Nächstes vertiefen wir uns in die Durchführung von Tests und betrachten die Identifizierung einer Zielgruppe (z. B. welche Browser, Geräte und andere Segmente sollten Sie testen), lo-fi Teststrategien (besorgen Sie sich eine Reihe von Geräten und einige virtuelle Maschinen und führen Sie bei Bedarf Ad-hoc-Tests durch), anspruchsvollere Strategien (Automatisierung, Verwendung spezieller Test-Apps) und das Testen mit Benutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : Nachdem der Rahmen gesetzt ist, betrachten wir nun spezifisch die häufigen Cross-Browser-Probleme, die Sie in HTML- und CSS-Code antreffen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dies umfasst das Linting von Code, das Handling von CSS-Präfixen, die Verwendung von Browser-Entwickler-Tools zur Problemlösung, die Verwendung von Polyfills für den Browser-Support, die Bewältigung von Problemen im responsiven Design und mehr.
- [Implementierung der Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : Feature-Erkennung beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt und das Ausführen von unterschiedlichem Code, abhängig davon, ob dies der Fall ist (oder nicht), sodass der Browser immer eine funktionale Erfahrung bietet, anstatt in einigen Browsern abzustürzen bzw. Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Feature-Erkennung wie `@supports` einsetzen.
- [Einführung in automatisiertes Testen](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : Manuelles Testen auf mehreren Browsern und Geräten, mehrmals täglich, kann mühsam und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie man Task-Runner verwendet und die Grundlagen der Verwendung kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs und Browser Stack.
- [Einrichten Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie `selenium-webdriver` für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Apps wie denjenigen im vorherigen Artikel beschrieben, integrieren.

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
