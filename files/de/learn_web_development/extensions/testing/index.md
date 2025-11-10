---
title: Testen
slug: Learn_web_development/Extensions/Testing
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

Jeder Codebasis mit einer gewissen Komplexität benötigt ein System von Tests, um sicherzustellen, dass, wenn neuer Code hinzugefügt wird, die Codebasis weiterhin korrekt und leistungsfähig funktioniert und die Anforderungen der Nutzer erfüllt. Dieses Modul listet die Grundlagen auf, mit denen Sie beginnen sollten.

> [!NOTE]
> Dieses Modul war ursprünglich vollständig dem Cross-Browser-Testing gewidmet, aber wir sind dabei, es auf das Testen im Allgemeinen zu fokussieren. Wenn wir die Zeit finden, beabsichtigen wir, das Material zu aktualisieren, um allgemeine Testgrundlagen, funktionales und Kompatibilitätstesten sowie Usability-Tests abzudecken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie wirklich die Grundlagen von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) erlernt haben.

## Tutorials

- [Einführung in das Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : Dieser Artikel startet das Modul, indem er einen Überblick über das Thema Cross-Browser-Testing gibt und Fragen beantwortet wie: „Was ist Cross-Browser-Testing?“, „Was sind die häufigsten Arten von Problemen, denen Sie begegnen werden?“ und „Was sind die wichtigsten Ansätze für das Testen, Identifizieren und Beheben von Problemen?“
- [Strategien zur Durchführung von Tests](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : Als Nächstes befassen wir uns eingehender mit der Durchführung von Tests, indem wir uns auf die Identifizierung einer Zielgruppe konzentrieren (z.B. welche Browser, Geräte und andere Segmente sollten Sie testen), lo-fi Teststrategien (verschaffen Sie sich eine Reihe von Geräten und einigen virtuellen Maschinen und führen Sie bei Bedarf Ad-hoc-Tests durch), höhertechnologische Strategien (Automatisierung, Nutzung dedizierter Test-Apps) und Tests mit Nutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : Mit der Festlegung des Rahmens werden wir nun speziell auf die häufigen Cross-Browser-Probleme eingehen, die Ihnen im HTML- und CSS-Code begegnen können, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder zu beheben. Dazu gehören das Linten von Code, der Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklungstools zum Aufspüren von Problemen, die Verwendung von Polyfills, um Unterstützung in Browsern hinzuzufügen, das Bewältigen von responsiven Designproblemen und mehr.
- [Implementierung von Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : Feature Detection beinhaltet das Herausfinden, ob ein Browser einen bestimmten Codeblock unterstützt und das Ausführen eines anderen Codes, abhängig davon, ob er dies tut (oder nicht), sodass der Browser immer eine funktionierende Erfahrung bieten kann, anstatt in einigen Browsern abzustürzen oder Fehler zu erzeugen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature Detection schreiben, wie Sie eine Bibliothek nutzen können, um die Implementierung zu beschleunigen, und native Funktionen zur Feature Detection, wie `@supports`.
- [Einführung in automatisiertes Testen](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : Manuelles Testen auf mehreren Browsern und Geräten, mehrmals täglich, kann langweilig und zeitaufwendig werden. Um dies effizient zu handhaben, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel schauen wir uns an, was es gibt, wie man Task-Runners verwendet und die Grundlagen dafür, wie man kommerzielle Browser-Testautomatisierungs-Apps wie Sauce Labs und Browser Stack benutzt.
- [Einrichtung Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung einrichten und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Apps wie den im vorherigen Artikel besprochenen integrieren können.

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
