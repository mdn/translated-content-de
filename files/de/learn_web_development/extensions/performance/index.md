---
title: Web-Performance
slug: Learn_web_development/Extensions/Performance
l10n:
  sourceCommit: 815d98e6482c557d33a94aac104230290afd262b
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}

Websites zu erstellen erfordert HTML, CSS und JavaScript. Um Websites und Anwendungen zu entwickeln, die Menschen nutzen möchten und die Nutzer anziehen und halten, müssen Sie ein gutes Benutzererlebnis schaffen. Ein Teil eines guten Benutzererlebnisses besteht darin, sicherzustellen, dass der Inhalt schnell geladen wird und reaktionsschnell auf Benutzerinteraktionen reagiert. Dies wird als **Web-Performance** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen, wie Sie performante Websites erstellen können.

Der Rest unseres Lernmaterials für Anfänger versucht, sich so weit wie möglich an bewährte Web-Praktiken wie Performance und [Zugänglichkeit](/de/docs/Learn_web_development/Core/Accessibility) zu halten. Dennoch ist es gut, sich auch speziell auf solche Themen zu konzentrieren und sicherzustellen, dass Sie sich damit vertraut machen.

## Voraussetzungen

Während Kenntnisse in HTML, CSS und JavaScript nötig sind, um viele Empfehlung zur Verbesserung der Web-Performance umzusetzen, sind Kenntnisse im Erstellen von Anwendungen keine notwendige Voraussetzung, um Web-Performance zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie sich vor der Bearbeitung dieses Moduls zumindest einen grundlegenden Überblick über Webentwicklung verschaffen, indem Sie unser Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) durcharbeiten.

Es wäre auch hilfreich, ein wenig tiefer in diese Themen einzutauchen, mit Modulen wie:

- [Strukturieren von Inhalten mit HTML](/de/docs/Learn_web_development/Core/Structuring_content)
- [Grundlagen der CSS-Stilgestaltung](/de/docs/Learn_web_development/Core/Styling_basics)
- [Dynamisches Script mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)

## Leitfäden

- [Das "Warum" der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel diskutiert, warum Web-Performance wichtig für Barrierefreiheit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber was gehört zur Web-Performance? Dieser Artikel führt in die Komponenten der Leistung ein, vom Laden und Rendern von Webseiten bis hin dazu, wie Ihr Inhalt in den Browser Ihrer Benutzer gelangt, um angesehen zu werden, und welche Personengruppen wir in Bezug auf die Leistung berücksichtigen müssen.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Seite wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Ladezeit der Seite, dem Ausruhen, der Reaktionsfähigkeit auf Benutzerinteraktionen und der Sanftheit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel besprechen wir die verschiedenen Lade- und Animationsmetriken sowie die besten Praktiken zur Verbesserung der Benutzerwahrnehmung, falls nicht der realen Zeiten.
- [Leistung messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Nachdem Sie nun einige Leistungsmetriken verstehen, tauchen wir tiefer in Leistungswerkzeuge, Metriken und APIs ein und wie wir die Leistung zum Bestandteil des Webentwicklungs-Workflows machen können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Die leicht greifbarste Frucht in der Web-Performance ist oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf der Fähigkeit, Größe und Pixeldichte jedes Benutzeragenten bereitzustellen. In diesem Artikel diskutieren wir den Einfluss von Bildern auf die Performance und die Methoden, um die Anzahl der Bytes pro Bild zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Die leicht greifbarste Frucht in der Web-Performance ist oft die Medienoptimierung. In diesem Artikel diskutieren wir den Einfluss von Videoinhalten auf die Performance und bieten Tipps, wie das Entfernen von Audiospuren aus Hintergrundvideos die Leistung verbessern kann.
- [JavaScript-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann bei richtiger Anwendung interaktive und beeindruckende Web-Erlebnisse ermöglichen — oder es kann die Downloadzeit, die Renderzeit, die Leistung in der App, die Batterielaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel beschreibt einige JavaScript-Best-Practices, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.
- [HTML-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten, Sicherstellung der besten Reihenfolge und der Verwendung geeigneter Attribute für die Einbindung von Inhalten wie Stile, Skripte, Medien und Drittanbieter-Skripte können Sie das Benutzererlebnis erheblich verbessern. Dieser Artikel untersucht im Detail, wie HTML verwendet werden kann, um maximale Leistung sicherzustellen.
- [CSS-Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsfokus für verbesserte Leistung sein, aber es gibt einige CSS-Features, die die Leistung mehr als andere beeinflussen. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die sich auf die Leistung auswirken, und vorgeschlagene Wege, um Stile zu handhaben, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [Der Geschäftsnutzen der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt vieles, was ein Entwickler tun kann, um die Leistung zu verbessern, aber wie schnell ist schnell genug? Wie können Sie die Verantwortlichen von der Bedeutung dieser Bemühungen überzeugen? Einmal optimiert, wie können Sie sicherstellen, dass die "Bloat" nicht zurückkommt? In diesem Artikel betrachten wir, wie man das Management überzeugt, eine Leistungskultur entwickelt und ein Leistungsbudget einführt, und stellen Möglichkeiten vor, um sicherzustellen, dass keine Rückschritte in Ihren Code gelangen.

## Siehe auch

- [Web-Performance-Ressourcen](/de/docs/Learn_web_development/Extensions/Performance/Web_Performance_Basics)
  - : Neben den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können, und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwicklerwerkzeuge, bewährte Verfahren und schlechte Praktiken in Bezug auf Web-Performance. Hier werden wir viele dieser Funktionen auf einer grundlegenden Ebene vorstellen und Links zu tieferen Einblicken bereitstellen, um die Leistung für jedes Thema zu verbessern.
- [Responsive Bilder](/de/docs/Web/HTML/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen – Bilder, die gut auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen funktionieren – und sehen uns an, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies hilft, die Leistung über verschiedene Geräte hinweg zu verbessern. Responsives Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen können.
- [Hauptabschnitt zur Web-Performance auf MDN](/de/docs/Web/Performance)
  - : Unser Hauptabschnitt zur Web-Performance – hier finden Sie wesentlich detailliertere Informationen zur Web-Performance einschließlich Übersichten zu Performance-APIs, Test- und Analysetools und Performance-Engpässen.

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}
