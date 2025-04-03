---
title: Testen
slug: Learn_web_development/Extensions/Testing
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

Jeder Codebasis, die einen bestimmten Komplexitätsgrad überschreitet, sollte ein Testsyst'em zugeordnet werden, um sicherzustellen, dass der Code auch bei Hinzufügung neuer Komponenten weiterhin korrekt und leistungsfähig funktioniert und die Bedürfnisse der Benutzer erfüllt. Dieses Modul listet die Grundlagen auf, mit denen Sie beginnen sollten.

> [!NOTE]
> Dieses Modul war ursprünglich vollständig dem Cross-Browser-Testing gewidmet, aber wir sind dabei, es neu auszurichten, um allgemeine Aspekte des Testens abzudecken. Wenn wir Zeit finden, planen wir, das Material zu aktualisieren, um grundlegende Testprinzipien, funktionales und Kompatibilitätstests sowie Benutzerfreundlichkeitstests zu behandeln.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie wirklich die Grundlagen von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) gelernt haben.

## Tutorials

- [Einführung in das Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : Dieser Artikel startet das Modul und gibt einen Überblick über das Thema des Cross-Browser-Testings, indem Fragen beantwortet werden wie "Was ist Cross-Browser-Testing?", "Was sind die häufigsten Problemtypen, auf die Sie stoßen werden?" und "Was sind die Hauptansätze zum Testen, Identifizieren und Beheben von Problemen?"
- [Strategien zur Durchführung von Tests](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : Als nächstes vertiefen wir uns in die Durchführung von Tests, wobei wir die Zielgruppe identifizieren (z. B. welche Browser, Geräte und andere Segmente getestet werden sollten), lo-fi-Teststrategien (sich selbst mit einer Auswahl an Geräten und einigen virtuellen Maschinen ausstatten und bei Bedarf Ad-hoc-Tests durchführen), fortgeschrittene Technologien (Automatisierung, Verwendung spezialisierter Test-Apps) und das Testen mit Benutzergruppen betrachten.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : Jetzt, da der Rahmen gesetzt ist, betrachten wir spezifisch die häufigen Cross-Browser-Probleme, die in HTML und CSS-Code auftreten können, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehört das Linten von Code, Umgang mit CSS-Präfixen, Verwendung von Browser-Entwicklungstools zur Problemlokalisierung, Einsatz von Polyfills zur Unterstützung in Browsern, das Angehen von Responsive Design-Problemen und mehr.
- [Implementierung der Funktionsprüfung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : Die Funktionsprüfung bezieht sich darauf, herauszufinden, ob ein Browser einen bestimmten Codeblock unterstützt, und daraufhin unterschiedlichen Code auszuführen, je nachdem, ob er es tut (oder nicht), sodass der Browser immer eine funktionsfähige Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen/Fehler zu werfen. Dieser Artikel beschreibt, wie man einfache Funktionsprüfungen selbst schreibt, wie man eine Bibliothek einsetzt, um die Implementierung zu beschleunigen, und native Funktionen zur Funktionsprüfung wie `@supports`.
- [Einführung in automatisierte Tests](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : Manuelles Durchführen von Tests auf mehreren Browsern und Geräten, mehrmals am Tag, kann ermüdend und zeitraubend werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie Task-Runner verwendet werden, und die Grundlagen zur Nutzung kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs und Browser Stack.
- [Einrichtung Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : In diesem Artikel werden wir Ihnen beibringen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node durchführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Apps wie denen im vorherigen Artikel beschrieben integrieren können.

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
