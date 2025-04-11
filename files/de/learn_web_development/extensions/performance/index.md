---
title: Web-Performance
slug: Learn_web_development/Extensions/Performance
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}

Websites zu erstellen, erfordert HTML, CSS und JavaScript. Um Websites und Anwendungen zu entwickeln, die Benutzer nutzen möchten, die Nutzer anziehen und binden, müssen Sie ein gutes Benutzererlebnis schaffen. Ein Teil eines guten Benutzererlebnisses ist es, sicherzustellen, dass die Inhalte schnell geladen werden und reaktionsfähig auf Benutzerinteraktionen sind. Dies wird als **Web-Performance** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen, wie Sie leistungsfähige Websites erstellen.

Der Rest unseres Einsteigermaterials versucht, so weit wie möglich den bewährten Verfahren im Web, wie etwa der Performance und [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility), zu folgen. Es ist jedoch auch sinnvoll, sich explizit mit solchen Themen auseinanderzusetzen und sicherzustellen, dass Sie mit ihnen vertraut sind.

## Voraussetzungen

Auch wenn Kenntnisse in HTML, CSS und JavaScript erforderlich sind, um viele Empfehlungen zur Verbesserung der Web-Performance umzusetzen, ist es keine notwendige Voraussetzung, zu wissen, wie man Anwendungen erstellt, um Web-Performance zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie, bevor Sie dieses Modul durcharbeiten, zumindest ein grundlegendes Verständnis der Webentwicklung erlangen, indem Sie unser Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) durchgehen.

Es wäre auch hilfreich, etwas tiefer in diese Themen einzutauchen, mit Modulen wie:

- [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
- [Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)

## Leitfäden

- [Das "Warum" der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel erörtert, warum Web-Performance wichtig für Zugänglichkeit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber was macht Web-Performance aus? Dieser Artikel führt in die Komponenten der Performance ein, von der Laden und Darstellung von Webseiten, einschließlich wie Ihre Inhalte im Browser der Nutzer angezeigt werden, bis hin zu welchen Gruppen von Menschen wir in Betracht ziehen müssen, wenn wir über Leistung nachdenken.
- [Wie nehmen Nutzer die Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die tatsächliche Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Nutzer Ihre Website subjektiv empfinden. Diese Wahrnehmungen werden durch die tatsächliche Ladezeit, Untätigkeit, Reaktionsfähigkeit auf Benutzerinteraktionen und die Geschmeidigkeit von Bildläufen und anderen Animationen beeinflusst. In diesem Artikel besprechen wir die verschiedenen Lade-, Animations- und Reaktionskennzahlen sowie bewährte Verfahren, um die Benutzerwahrnehmung zu verbessern, wenn schon nicht die tatsächlichen Zeiten.
- [Performance messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Nachdem Sie nun einige Leistungskennzahlen verstanden haben, tauchen wir tiefer in Leistungstools, Metriken und APIs ein und wie wir Leistung in den Webentwicklungs-Workflow integrieren können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Das am leichtesten erreichbare Potenzial zur Verbesserung der Web-Performance liegt oft in der Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte der jeweiligen Benutzeragenten bereitzustellen. In diesem Artikel diskutieren wir den Einfluss von Bildern auf die Leistung und die Methoden, um die Anzahl der pro Bild gesendeten Byte zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Das am leichtesten erreichbare Potenzial zur Verbesserung der Web-Performance liegt oft in der Medienoptimierung. In diesem Artikel diskutieren wir den Einfluss von Videoinhalten auf die Leistung und geben Tipps, wie beispielsweise das Entfernen von Audiotracks aus Hintergrundvideos die Performance verbessern kann.
- [JavaScript-Performanceoptimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : Richtig eingesetzt, kann JavaScript interaktive und immersive Web-Erfahrungen ermöglichen – oder es kann die Download-Zeit, die Render-Zeit, die Leistung in Anwendungen, die Batterielaufzeit und das Benutzererlebnis erheblich beeinträchtigen. Dieser Artikel beschreibt einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so leistungsfähig wie möglich sind.
- [HTML-Performanceoptimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten, Sicherstellung der besten Reihenfolge und Attributnutzung für Inhalte wie Stile, Skripte, Medien und Drittanbieter-Skripte, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel untersucht detailliert, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [CSS-Performanceoptimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag einen weniger wichtigen Optimierungsfokus für verbesserte Leistung darstellen, aber es gibt einige CSS-Funktionen, die die Leistung mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die sich auf die Leistung auswirken, und schlagen Wege vor, wie Stile gehandhabt werden können, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [Der geschäftliche Nutzen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Leistung zu verbessern, aber wie schnell ist schnell genug? Wie kann man die Entscheidungsträger von der Bedeutung dieser Bemühungen überzeugen? Sobald optimiert, wie kann man sicherstellen, dass keine Veralterung zurückkommt? In diesem Artikel betrachten wir, wie man das Management überzeugt, eine Leistungskultur und ein Leistungsbudget entwickelt, und introduce Möglichkeiten, um sicherzustellen, dass keine Rückschritte in Ihren Code gelangen.

## Siehe auch

- [Web-Performance-Ressourcen](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Neben den Frontend-Komponenten HTML, CSS, JavaScript und Mediendateien gibt es Merkmale, die Anwendungen langsamer machen können, und Merkmale, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklertools, bewährte Praktiken und schlechte Praktiken im Zusammenhang mit der Web-Performance. Hier werden wir viele dieser Funktionen auf grundlegender Ebene einführen und Links zu tiefergehenden Erklärungen bereitstellen, um die Leistung für jedes Thema zu verbessern.
- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen - Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren - und werfen einen Blick auf die Werkzeuge, die HTML bereitstellt, um sie umzusetzen. Dies hilft, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen können.
- [Hauptbereich zur Web-Performance auf MDN](/de/docs/Web/Performance)
  - : Unser Hauptbereich zur Web-Performance - hier finden Sie viel mehr Details zur Web-Performance, einschließlich Überblicken über Performance-APIs, Test- und Analysetools und Leistungsengpässe.

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}
