---
title: Webleistung
slug: Learn/Performance
l10n:
  sourceCommit: 5085525b3452de07dbac7fa700aaaf5ff5360a2f
---

{{LearnSidebar}}

Zum Erstellen von Websites benötigt man HTML, CSS und JavaScript. Um Websites und Anwendungen zu entwickeln, die Menschen nutzen möchten, die Benutzer anziehen und halten, müssen Sie eine gute Benutzererfahrung schaffen. Ein Teil einer guten Benutzererfahrung besteht darin, sicherzustellen, dass der Inhalt schnell geladen wird und reaktionsschnell auf Benutzerinteraktionen ist. Dies wird als **Webleistung** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen zur Erstellung leistungsfähiger Websites.

Der Rest unseres Lernmaterials für Anfänger hat versucht, sich so weit wie möglich an die besten Praktiken des Webs, wie Leistung und [Zugänglichkeit](/de/docs/Learn/Accessibility), zu halten. Es ist jedoch gut, sich auch speziell auf solche Themen zu konzentrieren und sicherzustellen, dass Sie mit ihnen vertraut sind.

## Lernpfad

Während das Wissen über HTML, CSS und JavaScript erforderlich ist, um viele Empfehlungen zur Verbesserung der Webleistung umzusetzen, ist das Wissen, wie man Anwendungen erstellt, keine notwendige Voraussetzung, um die Webleistung zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie, bevor Sie dieses Modul durcharbeiten, zumindest ein grundlegendes Verständnis der Webentwicklung haben, indem Sie unser Modul [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) durcharbeiten.

Es wäre auch hilfreich, etwas tiefer in diese Themen einzutauchen, mit Modulen wie:

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
- [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps)
- [Erste Schritte mit JavaScript](/de/docs/Learn/JavaScript/First_steps)

Nachdem Sie dieses Modul durchgearbeitet haben, werden Sie wahrscheinlich begeistert sein, tiefer in die Webleistung einzutauchen — Sie finden viele weitere Lehrmaterialien in unserem [Hauptbereich Webleistung auf MDN](/de/docs/Web/Performance), einschließlich Übersichten zu Leistungs-APIs, Test- und Analysetools und Leistungsengpässen.

## Leitfäden

Dieses Thema enthält die folgenden Leitfäden. Der folgende ist eine empfohlene Reihenfolge, um sie durchzuarbeiten; Sie sollten auf jeden Fall mit dem ersten beginnen.

- [Das "Warum" der Webleistung](/de/docs/Learn/Performance/why_web_performance)
  - : Dieser Artikel erklärt, warum Webleistung wichtig für Zugänglichkeit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Webleistung?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Sie wissen, dass Webleistung wichtig ist, aber was macht Webleistung aus? Dieser Artikel führt die Komponenten der Leistung ein, vom Laden und Rendern von Webseiten, einschließlich wie Ihr Inhalt in den Browser Ihrer Benutzer gelangt, um betrachtet zu werden, bis hin zu den Gruppen von Menschen, die wir in Betracht ziehen müssen, wenn wir über Leistung nachdenken.
- [Wie nehmen Benutzer Leistung wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die tatsächliche Ladezeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Site wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Seitenladezeit, Leerlauf, Reaktionsfähigkeit auf Benutzerinteraktionen und der Geschmeidigkeit von Scrollen und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade-, Animations- und Reaktionsmetriken sowie Best Practices, um die Benutzerwahrnehmung zu verbessern, wenn nicht sogar die tatsächlichen Zeiten.
- [Leistung messen](/de/docs/Learn/Performance/Measuring_performance)
  - : Jetzt, da Sie einige Leistungsmetriken verstehen, tauchen wir tiefer in Leistungstools, Metriken und APIs ein und wie wir Leistung zum Bestandteil des Workflows der Webentwicklung machen können.
- [Multimedia: Bilder](/de/docs/Learn/Performance/Multimedia)
  - : Die am einfachsten umzusetzende Maßnahme zur Optimierung der Webleistung ist oft die Medienoptimierung. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte eines jeden Benutzeragenten bereitzustellen. In diesem Artikel diskutieren wir, welchen Einfluss Bilder auf die Leistung haben und welche Methoden es gibt, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn/Performance/video)
  - : Die am einfachsten umzusetzende Maßnahme zur Optimierung der Webleistung ist oft die Medienoptimierung. In diesem Artikel diskutieren wir, welchen Einfluss Videoinhalte auf die Leistung haben und geben Tipps, wie das Entfernen von Audiospuren aus Hintergrundvideos die Leistung verbessern kann.
- [JavaScript-Leistungsoptimierung](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann bei ordnungsgemäßer Verwendung interaktive und eindrucksvolle Web-Erlebnisse ermöglichen — oder es kann die Downloadzeit, die Renderzeit, die In-App-Leistung, die Akkulaufzeit und die Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige Best Practices für JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so leistungsfähig wie möglich sind.
- [HTML-Leistungsoptimierung](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Leistung Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten und Sicherstellung, dass die beste Reihenfolge und Attribute für das Einfügen von Inhalten wie Stilen, Skripten, Medien und Drittanbieter-Skripten verwendet werden, können Sie das Benutzererlebnis drastisch verbessern. Dieser Artikel betrachtet im Detail, wie HTML genutzt werden kann, um maximale Leistung sicherzustellen.
- [CSS-Leistungsoptimierung](/de/docs/Learn/Performance/CSS)
  - : CSS mag ein weniger wichtiger Fokus der Optimierung für verbesserte Leistung sein, aber es gibt einige CSS-Funktionen, die die Leistung stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Leistung beeinflussen, und schlagen Wege zum Umgang mit Stilen vor, um sicherzustellen, dass die Leistung nicht negativ beeinflusst wird.
- [Schriften und Leistung](/de/docs/Learn/Performance/Fonts)
  - : Ein Blick darauf, ob Sie externe Schriften einbinden müssen und, wenn ja, wie Sie die von Ihrem Design benötigten Schriften mit geringstem Einfluss auf die Leistung Ihrer Seite einbinden können.
- [Mobile Leistung](/de/docs/Learn/Performance/Mobile)
  - : Da der Zugriff auf das Web auf mobilen Geräten so beliebt ist und alle mobilen Plattformen vollwertige Webbrowser haben, aber möglicherweise eingeschränkte Bandbreite, CPU- und Akkulaufzeit, ist es wichtig, die Leistung Ihres Webinhalts auf diesen Plattformen zu berücksichtigen. In diesem Artikel befassen wir uns mit mobil-spezifischen Leistungsüberlegungen.
- [Der geschäftliche Nutzen der Webleistung](/de/docs/Learn/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Leistung zu verbessern, aber wie schnell ist schnell genug? Wie können Sie die Entscheidungsträger von der Bedeutung dieser Bemühungen überzeugen? Nachdem die Leistung optimiert wurde, wie können Sie sicherstellen, dass sich die Leistung nicht wieder verschlechtert? In diesem Artikel betrachten wir, wie man das Management überzeugt, eine Leistungskultur und ein Leistungsbudget entwickelt und Wege einführt, um sicherzustellen, dass keine Regressionen in Ihren Code einsickern.

## Siehe auch

- [Ressourcen zur Webleistung](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Zusätzlich zu den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen verlangsamen, und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken in Bezug auf Webleistung. Hier stellen wir viele dieser Funktionen auf grundlegender Ebene vor und bieten Links zu tiefergehenden Informationen, um die Leistung für jedes Thema zu verbessern.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsiven Bilder kennen — Bilder, die gut auf Geräten mit stark unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Eigenschaften funktionieren — und sehen uns an, welche Werkzeuge HTML bietet, um sie umzusetzen. Dies trägt dazu bei, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen sollten.
- [Hauptbereich Webleistung auf MDN](/de/docs/Web/Performance)
  - : Unser Hauptbereich Webleistung — hier finden Sie viel mehr Details zur Webleistung, einschließlich Übersichten zu Leistungs-APIs, Test- und Analysetools und Leistungsengpässen.
