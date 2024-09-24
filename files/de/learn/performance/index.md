---
title: Web-Performance
slug: Learn/Performance
l10n:
  sourceCommit: 5085525b3452de07dbac7fa700aaaf5ff5360a2f
---

{{LearnSidebar}}

Zum Erstellen von Websites sind HTML, CSS und JavaScript erforderlich. Um Websites und Anwendungen zu entwickeln, die Menschen nutzen möchten und die Benutzer anziehen und halten, müssen Sie ein gutes Benutzererlebnis schaffen. Ein Teil eines guten Benutzererlebnisses besteht darin, sicherzustellen, dass der Inhalt schnell geladen wird und auf Benutzerinteraktionen reagiert. Dies wird als **Web-Performance** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen, um performante Websites zu erstellen.

Der Rest unseres Lernmaterials für Anfänger versucht, sich so weit wie möglich an Web-Best-Practices wie Leistung und [Barrierefreiheit](/de/docs/Learn/Accessibility) zu halten. Es ist jedoch auch gut, sich gezielt auf solche Themen zu konzentrieren und sicherzustellen, dass Sie damit vertraut sind.

## Lernweg

Während Kenntnisse in HTML, CSS und JavaScript erforderlich sind, um viele Empfehlungen zur Verbesserung der Web-Performance umzusetzen, ist das Wissen, wie Anwendungen erstellt werden, keine notwendige Voraussetzung, um die Web-Performance zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie sich, bevor Sie dieses Modul durcharbeiten, zumindest einen grundlegenden Überblick über die Webentwicklung verschaffen, indem Sie unser Modul [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) durcharbeiten.

Es wäre auch hilfreich, wenn Sie vertiefend auf folgende Themen eingehen könnten:

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
- [Erste Schritte mit CSS](/de/docs/Learn/CSS/First_steps)
- [Erste Schritte mit JavaScript](/de/docs/Learn/JavaScript/First_steps)

Nachdem Sie dieses Modul durchgearbeitet haben, werden Sie wahrscheinlich begeistert sein, tiefer in die Web-Performance einzutauchen — in unserem [Hauptabschnitt zur Web-Performance auf MDN](/de/docs/Web/Performance) finden Sie viele weiterführende Informationen, einschließlich Übersichten über Performance-APIs, Test- und Analysetools sowie Leistungsengpässe.

## Anleitungen

Dieses Thema enthält die folgenden Anleitungen. Die folgende Reihenfolge wird zum Durcharbeiten empfohlen; Sie sollten auf jeden Fall mit der ersten beginnen.

- [Das "Warum" der Web-Performance](/de/docs/Learn/Performance/why_web_performance)
  - : In diesem Artikel wird erläutert, warum Web-Performance für Barrierefreiheit, Benutzererfahrung und Ihre Geschäftsziele wichtig ist.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber was macht die Web-Performance aus? Dieser Artikel stellt die Komponenten der Performance vor, vom Laden und Rendern von Webseiten bis hin dazu, wie Ihr Inhalt in den Browser Ihrer Benutzer gelangt, um angezeigt zu werden, und welche Personengruppen wir in Betracht ziehen müssen, wenn wir über Performance nachdenken.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die tatsächliche Ladegeschwindigkeit Ihrer Website in Millisekunden ist, wie schnell Ihre Benutzer Ihre Website wahrnehmen. Diese Wahrnehmungen werden von der tatsächlichen Ladezeit der Seite, dem Leerlauf, der Reaktionsfähigkeit auf Benutzerinteraktionen sowie der Flüssigkeit beim Scrollen und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Ladezeitenmetriken, Animations- und Reaktionsfähigkeitsmetriken sowie Best Practices, um die Benutzerwahrnehmung zu verbessern, wenn nicht sogar die tatsächlichen Zeiten.
- [Leistung messen](/de/docs/Learn/Performance/Measuring_performance)
  - : Nun, da Sie einige Leistungsmetriken verstehen, gehen wir tiefer in die Leistungstools, Metriken und APIs ein und untersuchen, wie wir die Performance zum Bestandteil des Webentwicklungs-Workflows machen können.
- [Multimedia: Bilder](/de/docs/Learn/Performance/Multimedia)
  - : Der einfachste Einstieg in die Web-Performance ist oft die Medienoptimierung. Die Bereitstellung verschiedener Mediendateien basierend auf der Fähigkeit, der Größe und der Pixeldichte jedes Benutzer-Agents ist möglich. In diesem Artikel diskutieren wir die Auswirkungen, die Bilder auf die Performance haben, und die Methoden, um die Anzahl der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Videos](/de/docs/Learn/Performance/video)
  - : Der einfachste Einstieg in die Web-Performance ist oft die Medienoptimierung. In diesem Artikel diskutieren wir die Auswirkungen, die Videoinhalte auf die Performance haben, und geben Tipps, wie das Entfernen von Audiotracks aus Hintergrundvideos die Leistung verbessern kann.
- [JavaScript-Performance-Optimierung](/de/docs/Learn/Performance/JavaScript)
  - : JavaScript kann, wenn es richtig eingesetzt wird, für interaktive und eindrucksvolle Web-Erlebnisse sorgen – oder aber es kann die Download-Zeit, Renderzeit, In-App-Performance, Akkulaufzeit und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel beschreibt einige Best Practices für JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass selbst komplexe Inhalte so performant wie möglich sind.
- [HTML-Performance-Optimierung](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Quellreihenfolge Ihres Markups können die Performance Ihrer Website beeinflussen. Durch die Minimierung der Anzahl der DOM-Knoten und das Sicherstellen der besten Reihenfolge und Attribute für die Einbeziehung von Inhalten wie Styles, Skripten, Medien und Drittanbieter-Skripten können Sie das Benutzererlebnis erheblich verbessern. Dieser Artikel untersucht im Detail, wie HTML eingesetzt werden kann, um maximale Performance sicherzustellen.
- [CSS-Performance-Optimierung](/de/docs/Learn/Performance/CSS)
  - : CSS mag ein weniger wichtiger Optimierungsschwerpunkt für verbesserte Performance sein, aber es gibt einige CSS-Eigenschaften, die die Performance stärker beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die die Performance beeinflussen, und schlagen Möglichkeiten vor, wie Stile behandelt werden können, um sicherzustellen, dass die Performance nicht negativ beeinflusst wird.
- [Schriften und Leistung](/de/docs/Learn/Performance/Fonts)
  - : Ein Blick darauf, ob Sie externe Schriften einbinden müssen und, wenn ja, wie Sie die Schriften, die Ihr Design erfordert, mit der geringsten Auswirkung auf die Leistung Ihrer Website einbinden können.
- [Mobile Performance](/de/docs/Learn/Performance/Mobile)
  - : Da der Zugriff auf das Web über mobile Geräte so populär ist und alle mobilen Plattformen über vollwertige Webbrowser verfügen, aber möglicherweise eingeschränkte Bandbreite, CPU und Akkulaufzeit haben, ist es wichtig, die Leistung Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobile-spezifische Performance-Überlegungen.
- [Das Geschäftsargument für Web-Performance](/de/docs/Learn/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Leistung zu verbessern, aber wie schnell ist schnell genug? Wie können Sie diejenigen, die die Entscheidungsgewalt haben, von der Bedeutung dieser Bemühungen überzeugen? Sobald optimiert, wie können Sie sicherstellen, dass kein Übermaß zurückkehrt? In diesem Artikel betrachten wir die Überzeugung des Managements, die Entwicklung einer Leistungskultur und eines Leistungsbudgets sowie die Einführung von Wegen, um sicherzustellen, dass sich keine Regressionen in Ihren Code-Bestand einschleichen.

## Siehe auch

- [Web-Performance-Ressourcen](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Neben den Frontend-Komponenten von HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, Best Practices und schlechte Praktiken im Zusammenhang mit Web-Performance. Hier führen wir viele dieser Funktionen auf grundlegender Ebene ein und stellen Links zu tieferen Einblicken bereit, um die Leistung für jedes Thema zu verbessern.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept der responsive Bilder kennen — Bilder, die auf Geräten mit sehr unterschiedlichen Bildschirmgrößen, Auflösungen und anderen Funktionen gut funktionieren — und sehen uns an, welche Werkzeuge HTML bietet, um sie zu implementieren. Dies trägt dazu bei, die Leistung auf verschiedenen Geräten zu verbessern. Responsive Bilder sind nur ein Teil von [Responsive Design](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), ein zukünftiges CSS-Thema, das Sie lernen werden.
- [Hauptabschnitt zur Web-Performance auf MDN](/de/docs/Web/Performance)
  - : Unser Hauptabschnitt zur Web-Performance — hier finden Sie deutlich mehr Details zur Web-Performance, einschließlich Übersichten über Performance-APIs, Test- und Analysetools und Leistungsengpässe.
