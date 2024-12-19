---
title: Testen
slug: Learn_web_development/Extensions/Testing
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}

Jeder Code-Bestand ab einem gewissen Komplexitätsgrad muss über ein System von Tests verfügen, um sicherzustellen, dass der Code-Bestand auch bei neuerem Code weiterhin korrekt und performant funktioniert und weiterhin die Bedürfnisse der Nutzer erfüllt. Dieses Modul listet die Grundlagen auf, mit denen Sie beginnen sollten.

> [!NOTE]
> Dieses Modul war ursprünglich vollständig dem Cross-Browser-Testing gewidmet, aber wir sind dabei, es neu auszurichten, um das Testen im Allgemeinen abzudecken. Wenn wir die Zeit finden, beabsichtigen wir, das Material zu aktualisieren, um allgemeine Testgrundlagen, funktionale und Kompatibilitätstests sowie Usability-Tests abzudecken.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie wirklich die Grundlagen von [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting) gelernt haben.

## Tutorials

- [Einführung in das Cross-Browser-Testing](/de/docs/Learn_web_development/Extensions/Testing/Introduction)
  - : Dieser Artikel beginnt das Modul, indem er einen Überblick über das Thema Cross-Browser-Testing gibt und Fragen wie "Was ist Cross-Browser-Testing?", "Was sind die häufigsten Arten von Problemen, auf die Sie stoßen werden?" und "Was sind die Hauptansätze, um Probleme zu testen, zu identifizieren und zu beheben?" beantwortet.
- [Strategien zur Durchführung von Tests](/de/docs/Learn_web_development/Extensions/Testing/Testing_strategies)
  - : Als nächstes gehen wir näher darauf ein, wie Tests durchgeführt werden, indem wir uns damit befassen, eine Zielgruppe zu identifizieren (z. B. welche Browser, Geräte und andere Segmente getestet werden sollten), lo-fi-Teststrategien (verschaffen Sie sich eine Reihe von Geräten und einigen virtuellen Maschinen und führen Sie nach Bedarf adhoc-Tests durch), höher technisierte Strategien (Automatisierung, Verwendung spezieller Test-Apps) und Tests mit Nutzergruppen.
- [Umgang mit häufigen HTML- und CSS-Problemen](/de/docs/Learn_web_development/Extensions/Testing/HTML_and_CSS)
  - : Nachdem die Bühne bereitet ist, betrachten wir nun speziell die häufigen Cross-Browser-Probleme, die Sie in HTML- und CSS-Code antreffen werden, und welche Werkzeuge verwendet werden können, um Probleme zu verhindern oder auftretende Probleme zu beheben. Dies umfasst die Überprüfung des Codes, den Umgang mit CSS-Präfixen, die Verwendung von Browser-Entwicklungstools zur Problemverfolgung, die Verwendung von Polyfills, um Support in Browsern hinzuzufügen, die Bewältigung von Responsive-Design-Problemen und mehr.
- [Implementierung von Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
  - : Die Feature-Erkennung beinhaltet, herauszufinden, ob ein Browser einen bestimmten Codeblock unterstützt, und das Ausführen von unterschiedlichem Code, je nachdem, ob er das tut (oder nicht), sodass der Browser immer ein funktionierendes Erlebnis bieten kann, anstatt in einigen Browsern abzustürzen/Fehler auszuwerfen. Dieser Artikel beschreibt, wie Sie Ihre eigene einfache Feature-Erkennung schreiben, wie Sie eine Bibliothek zur Beschleunigung der Implementierung verwenden und native Funktionen zur Feature-Erkennung wie `@supports`.
- [Einführung in automatisierte Tests](/de/docs/Learn_web_development/Extensions/Testing/Automated_testing)
  - : Manuelles Testen mehrerer Browser und Geräte, mehrmals am Tag, kann ermüdend und zeitaufwändig werden. Um dies effizient zu bewältigen, sollten Sie sich mit Automatisierungstools vertraut machen. In diesem Artikel betrachten wir, was verfügbar ist, wie Task-Runner verwendet werden und die Grundlagen zur Nutzung kommerzieller Browser-Testautomatisierungs-Apps wie Sauce Labs und Browser Stack.
- [Einrichtung Ihrer eigenen Testautomatisierungsumgebung](/de/docs/Learn_web_development/Extensions/Testing/Your_own_automation_environment)
  - : In diesem Artikel zeigen wir Ihnen, wie Sie Ihre eigene Automatisierungsumgebung installieren und Ihre eigenen Tests mit Selenium/WebDriver und einer Testbibliothek wie selenium-webdriver für Node ausführen. Wir werden auch darauf eingehen, wie Sie Ihre lokale Testumgebung mit kommerziellen Apps integrieren können, wie in dem vorherigen Artikel besprochen.

{{NextMenu("Learn_web_development/Extensions/Testing/Introduction", "Learn_web_development/Extensions")}}
