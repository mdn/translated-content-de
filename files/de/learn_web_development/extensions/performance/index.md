---
title: Web-Performance
slug: Learn_web_development/Extensions/Performance
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}

Beim Erstellen von Websites werden HTML, CSS und JavaScript benötigt. Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten und die Benutzer anziehen und halten, müssen Sie ein gutes Benutzererlebnis schaffen. Teil eines guten Benutzererlebnisses ist es, sicherzustellen, dass die Inhalte schnell geladen werden und auf Benutzerinteraktionen reagieren. Dies wird als **Web-Performance** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen der Erstellung performanter Websites.

Der Rest unseres Lernmaterials für Anfänger versucht, sich so weit wie möglich an bewährte Praktiken im Web zu halten, wie beispielsweise Performance und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility), es ist jedoch auch gut, sich speziell auf solche Themen zu konzentrieren und sicherzustellen, dass Sie mit ihnen vertraut sind.

## Voraussetzungen

Obwohl Kenntnisse in HTML, CSS und JavaScript für die Implementierung vieler Empfehlungen zur Verbesserung der Web-Performance erforderlich sind, ist das Erlernen der Erstellung von Anwendungen nicht unbedingt eine Voraussetzung, um Web-Performance zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie, bevor Sie dieses Modul durcharbeiten, zumindest eine grundlegende Vorstellung von Webentwicklung bekommen, indem Sie unser Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) durcharbeiten.

Es wäre auch hilfreich, tiefer in diese Themen einzutauchen, mit Modulen wie:

- [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
- [CSS-Styling-Grundlagen](/de/docs/Learn_web_development/Core/Styling_basics)
- [Dynamisches Scripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)

## Leitfäden

- [Das „Warum“ der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel erörtert, warum Web-Performance wichtig für Barrierefreiheit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber was macht die Web-Performance aus? Dieser Artikel führt die Komponenten der Performance ein, vom Laden und Rendern von Webseiten, einschließlich der Art und Weise, wie Ihre Inhalte in den Browser Ihrer Benutzer gelangen, bis hin zu den Personengruppen, die wir bei der Überlegung zur Performance berücksichtigen müssen.
- [Wie nehmen Nutzer Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Ladezeit der Seite, der Leerlaufzeit, der Reaktionsfähigkeit auf Benutzerinteraktionen und der Flüssigkeit von Scrollen und anderen Animationen beeinflusst. In diesem Artikel besprechen wir die verschiedenen Ladekennzahlen, Animationen und Reaktionsfähigkeitskennzahlen sowie bewährte Praktiken, um die Benutzerwahrnehmung zu verbessern, wenn nicht die tatsächlichen Zeiten.
- [Performance messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Jetzt, da Sie einige Performance-Kennzahlen verstanden haben, tauchen wir tiefer in Performance-Tools, Metriken und APIs ein und wie wir Performance in den Workflow der Webentwicklung integrieren können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Das am einfachsten zugängliche Optimierungspotential der Web-Performance ist oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes Benutzeragenten bereitzustellen. In diesem Artikel besprechen wir die Auswirkungen, die Bilder auf die Performance haben und die Methoden, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Das am einfachsten zugängliche Optimierungspotential der Web-Performance ist oft die Medienoptimierung. In diesem Artikel besprechen wir die Auswirkungen, die Videoinhalte auf die Performance haben und geben Tipps, wie z. B. das Entfernen von Audiospuren von Hintergrundvideos die Performance verbessern kann.
- [JavaScript-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann bei richtiger Verwendung interaktive und immersive Web-Erlebnisse ermöglichen – oder es kann die Download-Zeit, die Renderzeit, die In-App-Performance, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.
- [HTML-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Durch Minimierung der Anzahl von DOM-Knoten und Sicherstellung der besten Reihenfolge und Attribute für das Einfügen von Inhalten wie Styles, Skripten, Medien und Drittanbieterskripten, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel beleuchtet im Detail, wie HTML genutzt werden kann, um maximale Performance sicherzustellen.
- [CSS-Leistungsoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Fokus der Optimierung für eine verbesserte Performance sein, aber es gibt einige CSS-Eigenschaften, die die Performance mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance beeinflussen und schlagen Möglichkeiten vor, wie man Styles handhaben kann, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [Der geschäftliche Nutzen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Performance zu verbessern, aber wie schnell ist schnell genug? Wie können Sie die Entscheidungsträger von der Wichtigkeit dieser Bemühungen überzeugen? Einmal optimiert, wie können Sie sicherstellen, dass kein „Aufblähen“ zurückkommt? In diesem Artikel schauen wir uns an, wie man das Management überzeugt, eine Performance-Kultur entwickelt und ein Performance-Budget erstellt, und wir stellen Möglichkeiten vor, um sicherzustellen, dass Rückschritte nicht in Ihren Code gelangen.

## Siehe auch

- [Web-Performance-Ressourcen](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, bewährte Praktiken und schlechte Praktiken in Bezug auf Web-Performance. Hier führen wir viele dieser Funktionen auf der grundlegenden Ebene ein und bieten Links zu tiefergehenden Einblicken, um die Performance für jedes Thema zu verbessern.
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel erfahren wir mehr über das Konzept von responsiven Bildern — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und sehen uns an, welche Tools HTML bietet, um sie umzusetzen. Dies hilft, die Performance auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), einem zukünftigen CSS-Thema für Sie.
- [Hauptabschnitt zur Web-Performance auf MDN](/de/docs/Web/Performance)
  - : Unser Hauptabschnitt zur Web-Performance — hier finden Sie viel mehr Details zur Web-Performance, einschließlich Übersicht über Performance-APIs, Test- und Analysetools sowie Performance-Engpässe.

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}
