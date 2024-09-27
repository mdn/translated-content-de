---
title: Web-Performance
slug: Learn/Performance
l10n:
  sourceCommit: 5085525b3452de07dbac7fa700aaaf5ff5360a2f
---

{{LearnSidebar}}

Zum Erstellen von Websites werden HTML, CSS und JavaScript benötigt. Um Websites und Anwendungen zu erstellen, die Menschen nutzen möchten und die Nutzer anziehen und binden, muss ein gutes Benutzererlebnis geschaffen werden. Ein Teil eines guten Benutzererlebnisses besteht darin, sicherzustellen, dass die Inhalte schnell geladen werden und reaktionsschnell sind. Dies wird als **Web-Performance** bezeichnet, und in diesem Modul konzentrieren Sie sich auf die Grundlagen zur Erstellung performanter Websites.

Der Rest unseres Lernmaterials für Anfänger versucht, sich so weit wie möglich an bewährte Praktiken im Web wie Performance und [Zugänglichkeit](/de/docs/Learn/Accessibility) zu halten. Es ist jedoch auch gut, sich speziell auf solche Themen zu konzentrieren und sicherzustellen, dass Sie mit ihnen vertraut sind.

## Lernpfad

Obwohl Kenntnisse in HTML, CSS und JavaScript erforderlich sind, um viele Empfehlungen zur Verbesserung der Web-Performance umzusetzen, ist das Wissen, wie man Anwendungen erstellt, keine notwendige Voraussetzung, um Web-Performance zu verstehen und zu messen. Wir empfehlen jedoch, dass Sie, bevor Sie dieses Modul durcharbeiten, zumindest ein grundlegendes Verständnis der Webentwicklung erwerben, indem Sie unser Modul [Erste Schritte mit dem Web](/de/docs/Learn/Getting_started_with_the_web) durchgehen.

Es wäre auch hilfreich, ein wenig tiefer in diese Themen einzutauchen, mit Modulen wie:

- [Einführung in HTML](/de/docs/Learn/HTML/Introduction_to_HTML)
- [CSS erste Schritte](/de/docs/Learn/CSS/First_steps)
- [JavaScript erste Schritte](/de/docs/Learn/JavaScript/First_steps)

Nachdem Sie dieses Modul bearbeitet haben, werden Sie wahrscheinlich noch tiefer in die Web-Performance einsteigen wollen — in unserem [Hauptbereich zur Web-Performance auf MDN](/de/docs/Web/Performance) finden Sie viele weitere Lehrinhalte, darunter Übersichten zu Performance-APIs, Test- und Analysetools sowie Leistungsengpässe.

## Leitfäden

Dieses Thema enthält die folgenden Leitfäden. Die folgende Reihenfolge wird empfohlen, um sie durchzuarbeiten; Sie sollten definitiv mit dem ersten beginnen.

- [Das "Warum" der Web-Performance](/de/docs/Learn/Performance/why_web_performance)
  - : Dieser Artikel behandelt, warum Web-Performance wichtig für Zugänglichkeit, Benutzererfahrung und Ihre Geschäftsziele ist.
- [Was ist Web-Performance?](/de/docs/Learn/Performance/What_is_web_performance)
  - : Sie wissen, dass Web-Performance wichtig ist, aber was macht Web-Performance aus? Dieser Artikel führt in die Komponenten der Performance ein, von der Laden- und Renderzeit der Webseite bis hin dazu, wie Ihre Inhalte im Browser der Nutzer angezeigt werden, und welche Personengruppen wir in Betracht ziehen müssen, wenn wir über Performance nachdenken.
- [Wie nehmen Benutzer die Performance wahr?](/de/docs/Learn/Performance/Perceived_performance)
  - : Wichtiger als die Geschwindigkeit Ihrer Website in Millisekunden, ist, wie schnell Ihre Benutzer Ihre Seite wahrnehmen. Diese Wahrnehmungen werden durch tatsächliche Ladezeiten, Wartezeiten, Reaktivität auf Benutzerinteraktionen und die Flüssigkeit von Scrolling und anderen Animationen beeinflusst. In diesem Artikel diskutieren wir die verschiedenen Lade- und Reaktionsmetriken sowie bewährte Praktiken, um die Benutzerwahrnehmung zu verbessern, wenn nicht die tatsächlichen Zeiten.
- [Performance messen](/de/docs/Learn/Performance/Measuring_performance)
  - : Jetzt, da Sie einige Leistungsmetriken verstehen, tauchen wir tiefer in Performance-Tools, Metriken, und APIs ein und wie wir die Performance zu einem Teil des Webentwicklungs-Workflows machen können.
- [Multimedia: Bilder](/de/docs/Learn/Performance/Multimedia)
  - : Die Optimierung von Medien ist oft der leichteste Einstieg in die Web-Performance. Es ist möglich, verschiedene Mediendateien basierend auf den Fähigkeiten, der Größe und der Pixeldichte jedes User-Agents bereitzustellen. In diesem Artikel besprechen wir den Einfluss, den Bilder auf die Performance haben, und die Methoden, um die Menge der pro Bild gesendeten Bytes zu reduzieren.
- [Multimedia: Video](/de/docs/Learn/Performance/video)
  - : Die Optimierung von Medien ist oft der leichteste Einstieg in die Web-Performance. In diesem Artikel besprechen wir den Einfluss, den Videoinhalte auf die Performance haben, und geben Tipps wie das Entfernen von Audiospuren aus Hintergrundvideos die Performance verbessern kann.
- [Optimierung der JavaScript-Performance](/de/docs/Learn/Performance/JavaScript)
  - : Wenn JavaScript richtig eingesetzt wird, kann es interaktive und eindrucksvolle Web-Erlebnisse schaffen — oder es kann die Downloadzeit, Renderzeit, In-App-Performance, Batteriedauer und Benutzererfahrung erheblich beeinträchtigen. Dieser Artikel skizziert einige bewährte Praktiken für JavaScript, die berücksichtigt werden sollten, um sicherzustellen, dass auch komplexe Inhalte so performant wie möglich sind.
- [Optimierung der HTML-Performance](/de/docs/Learn/Performance/HTML)
  - : Einige Attribute und die Reihenfolge des Quellcodes in Ihrem Markup können die Performance Ihrer Website beeinflussen. Durch Minimierung der Anzahl der DOM-Knoten und Sicherstellung der besten Reihenfolge und Attribute für die Einbindung von Inhalten wie Stile, Skripte, Medien und Drittanbieterskripte können Sie das Benutzererlebnis erheblich verbessern. Dieser Artikel befasst sich ausführlich damit, wie HTML verwendet werden kann, um eine maximale Performance zu gewährleisten.
- [Optimierung der CSS-Performance](/de/docs/Learn/Performance/CSS)
  - : CSS könnte für die Performancesteigerung weniger wichtig erscheinen, aber es gibt einige CSS-Funktionen, die die Performance mehr beeinflussen als andere. In diesem Artikel betrachten wir einige CSS-Eigenschaften, die sich auf die Performance auswirken und schlagen Möglichkeiten vor, wie Styles gehandhabt werden sollten, um eine negative Beeinträchtigung der Performance zu vermeiden.
- [Schriftarten und Performance](/de/docs/Learn/Performance/Fonts)
  - : Ein Blick darauf, ob Sie externe Schriftarten einbinden müssen und, wenn ja, wie Sie die Schriften, die Ihr Design erfordert, mit dem geringsten Einfluss auf die Performance Ihrer Seite einbinden können.
- [Mobile Performance](/de/docs/Learn/Performance/Mobile)
  - : Da der Webzugriff auf mobilen Geräten so populär ist und alle mobilen Plattformen vollwertige Webbrowser haben, aber möglicherweise eingeschränkte Bandbreite, CPU und Batterielaufzeit, ist es wichtig, die Performance Ihrer Webinhalte auf diesen Plattformen zu berücksichtigen. Dieser Artikel betrachtet mobilespezifische Performance-Überlegungen.
- [Das Geschäftsmodell für Web-Performance](/de/docs/Learn/Performance/business_case_for_performance)
  - : Es gibt viele Dinge, die ein Entwickler tun kann, um die Performance zu verbessern, aber wie schnell ist schnell genug? Wie kann man Entscheidungsträger von der Bedeutung dieser Bemühungen überzeugen? Wie kann sichergestellt werden, dass sich kein Ballast mehr einschleicht? In diesem Artikel behandeln wir die Überzeugung des Managements, die Entwicklung einer Performancedecke und Methoden, um sicherzustellen, dass keine Regressionen in Ihren Codebasis schleichen.

## Siehe auch

- [Web-Performance-Ressourcen](/de/docs/Learn/Performance/Web_Performance_Basics)
  - : Neben den Front-End-Komponenten HTML, CSS, JavaScript und Mediendateien gibt es Funktionen, die Anwendungen langsamer machen können und Funktionen, die Anwendungen subjektiv und objektiv schneller machen können. Es gibt viele APIs, Entwickler-Tools, bewährte Praktiken und schlechte Praktiken in Bezug auf Web-Performance. Hier stellen wir viele dieser Funktionen auf grundlegender Ebene vor und bieten Links zu tiefer gehenden Informationen, um die Performance für jedes Thema zu verbessern.
- [Responsive Bilder](/de/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : In diesem Artikel lernen wir das Konzept responsiver Bilder kennen — Bilder, die auf Geräten mit unterschiedlich großen Bildschirmen, Auflösungen und anderen Merkmalen gut funktionieren — und sehen, welche Tools HTML zur Implementierung bietet. Dies hilft, die Performance über verschiedene Geräte hinweg zu verbessern. Responsive Bilder sind nur ein Teil des [responsiven Designs](/de/docs/Learn/CSS/CSS_layout/Responsive_Design), einem zukünftigen CSS-Thema, das Sie lernen können.
- [Hauptbereich zur Web-Performance auf MDN](/de/docs/Web/Performance)
  - : Unser Hauptbereich zur Web-Performance — hier finden Sie viel detailliertere Informationen zur Web-Performance, einschließlich Übersichten zu Performance-APIs, Test- und Analysetools und Leistungsengpässen.
