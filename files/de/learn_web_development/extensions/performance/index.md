---
title: Web-Performance
slug: Learn_web_development/Extensions/Performance
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}

Beim Erstellen von Websites sind HTML, CSS und JavaScript nötig. Um Websites und Anwendungen zu erstellen, die Nutzer anziehen und halten, muss ein gutes Benutzererlebnis geschaffen werden. Ein Teil eines guten Benutzererlebnisses besteht darin, sicherzustellen, dass die Inhalte schnell geladen werden und reaktionsschnell auf Benutzerinteraktionen sind. Dies wird als **Web-Performance** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen der Erstellung leistungsfähiger Websites.

Der Rest unseres Lernmaterials für Anfänger versucht, sich so weit wie möglich an bewährte Web-Praktiken wie Performance und [Barrierefreiheit](/de/docs/Learn_web_development/Core/Accessibility) zu halten, jedoch ist es gut, sich auch gezielt auf solche Themen zu konzentrieren und sicherzustellen, dass Sie mit ihnen vertraut sind.

## Voraussetzungen

Während HTML, CSS und JavaScript für die Implementierung vieler Empfehlungen zur Verbesserung der Web-Performance erforderlich sind, ist das Wissen über den Aufbau von Anwendungen keine notwendige Voraussetzung, um die Web-Performance zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie, bevor Sie dieses Modul durcharbeiten, sich zumindest ein grundlegendes Verständnis der Webentwicklung aneignen, indem Sie unser Modul [Ihre erste Website](/de/docs/Learn_web_development/Getting_started/Your_first_website) durcharbeiten.

Es wäre auch hilfreich, sich mit diesen Themen etwas tiefer auseinanderzusetzen, mit Modulen wie:

- [Inhalte mit HTML strukturieren](/de/docs/Learn_web_development/Core/Structuring_content)
- [Grundlagen der CSS-Stilgebung](/de/docs/Learn_web_development/Core/Styling_basics)
- [Dynamisches Skripting mit JavaScript](/de/docs/Learn_web_development/Core/Scripting)

## Leitfäden

- [Das "Warum" der Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/why_web_performance)
  - : Dieser Artikel diskutiert, warum Web-Performance wichtig für Barrierefreiheit, Benutzererlebnis und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn_web_development/Extensions/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber was macht Web-Performance aus? Dieser Artikel führt in die Komponenten der Performance ein, vom Laden und Rendern von Webseiten, einschließlich wie Ihre Inhalte in den Browsern Ihrer Nutzer angezeigt werden, bis zu den Personengruppen, die wir bei der Betrachtung der Performance berücksichtigen müssen.
- [Wie nehmen Benutzer Performance wahr?](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Nutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Ladezeit der Seite, dem Leerlauf, der Reaktionsfähigkeit auf Benutzerinteraktion und der Flüssigkeit des Scrollens und anderer Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade- und Animationsmetriken sowie Best Practices, um die Wahrnehmung der Nutzer zu verbessern, wenn nicht die tatsächlichen Zeiten.
- [Performance messen](/de/docs/Learn_web_development/Extensions/Performance/Measuring_performance)
  - : Jetzt, da Sie einige Performance-Metriken verstehen, gehen wir tiefer auf Performance-Tools, Metriken und APIs ein und wie wir Performance in den Webentwicklungs-Workflow integrieren können.
- [Multimedia: Bilder](/de/docs/Learn_web_development/Extensions/Performance/Multimedia)
  - : Das Optimieren von Medien ist oft der am leichtesten zugängliche Punkt der Web-Performance. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes User Agents zu servieren. In diesem Artikel diskutieren wir den Einfluss von Bildern auf die Performance und die Methoden, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn_web_development/Extensions/Performance/video)
  - : Das Optimieren von Medien ist oft der am leichtesten zugängliche Punkt der Web-Performance. In diesem Artikel diskutieren wir den Einfluss von Videoinhalten auf die Performance und geben Tipps, wie das Entfernen von Audiospuren aus Hintergrundvideos die Performance verbessern kann.
- [JavaScript Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/JavaScript)
  - : JavaScript kann bei richtiger Verwendung interaktive und eindringliche Weberlebnisse ermöglichen — oder es kann die Downloadzeit, Renderzeit, Anwendungsperformance, Akkulaufzeit und das Benutzererlebnis erheblich beeinträchtigen. Dieser Artikel umreißt einige JavaScript-Best Practices, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.
- [HTML Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Durch Minimierung der Anzahl von DOM-Knoten, Sicherstellung der besten Reihenfolge und Attribute für das Einbinden von Inhalten wie Styles, Skripten, Medien und Drittanbieter-Skripten, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel betrachtet, wie HTML zur Sicherstellung maximaler Performance genutzt werden kann.
- [CSS Performance-Optimierung](/de/docs/Learn_web_development/Extensions/Performance/CSS)
  - : CSS ist zwar ein weniger wichtiger Optimierungsfokus für verbesserte Performance, jedoch gibt es einige CSS-Features, die die Performance stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance betreffen, und schlagen Möglichkeiten vor, Stile zu handhaben, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [Der Business Case für Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Performance zu verbessern, aber wie schnell ist schnell genug? Wie können Sie Entscheidungsträger von der Bedeutung dieser Bemühungen überzeugen? Wie können Sie, einmal optimiert, sicherstellen, dass Blähungen nicht zurückkehren? In diesem Artikel betrachten wir, wie man das Management überzeugt, eine Performance-Kultur und ein Performance-Budget entwickelt und Wege einführt, um sicherzustellen, dass sich keine Regressionen in Ihren Codebestand einschleichen.
- [Best Practices & Tipps zur Web-Performance](/de/docs/Learn_web_development/Extensions/Performance/Best_practices)
  - : Dieser Artikel behandelt mehrere Themen auf grundlegender Ebene und bietet Links zu ausführlicheren Betrachtungen, um die Performance für jedes Thema zu verbessern. Zusätzlich zu Front-End-Themen wie HTML, CSS, JavaScript und Mediendateien umfasst er auch APIs, Entwickler-Tools, Best Practices und schlechte Praktiken in Bezug auf Web-Performance.

## Siehe auch

- [Responsive Bilder](/de/docs/Web/HTML/Guides/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept von anpassungsfähigen Bildern kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Merkmalen gut funktionieren — und schauen, welche Tools HTML bietet, um sie zu implementieren. Dies trägt zur Verbesserung der Performance auf verschiedenen Geräten bei. Responsive Bilder sind nur ein Teil des [Responsive Designs](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design), einem zukünftigen CSS-Thema, das Sie lernen sollten.
- [Haupt-Web-Performance-Abschnitt auf MDN](/de/docs/Web/Performance)
  - : Unser Haupt-Web-Performance-Abschnitt — hier finden Sie viel mehr Details zur Web-Performance, einschließlich Übersichten zu Performance-APIs, Test- und Analysetools, und Performance-Engpässen.

{{NextMenu("Learn_web_development/Extensions/Performance/why_web_performance", "Learn_web_development/Extensions")}}
