---
title: Django-Webframework (Python)
slug: Learn_web_development/Extensions/Server-side/Django
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django")}}

Django ist ein äußerst beliebtes und voll ausgestattetes serverseitiges Webframework, geschrieben in Python. Dieses Modul zeigt Ihnen, warum Django eines der beliebtesten Webserver-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie es nutzen, um Ihre eigenen Webanwendungen zu erstellen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Kenntnisse über Django. Idealerweise sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, indem Sie die Themen in unserem Modul [Erste Schritte bei der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) lesen.

Ein allgemeines Wissen über Programmierkonzepte und {{Glossary("Python", "Python")}} ist empfehlenswert, aber nicht entscheidend, um die grundlegenden Konzepte zu verstehen.

> [!NOTE]
> Python ist eine der verständlichsten Programmiersprachen für Anfänger. Wenn Sie dieses Modul besser verstehen möchten, gibt es zahlreiche kostenlose Bücher und Tutorials im Internet, die Ihnen helfen können (neue Programmierer möchten vielleicht die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) im Wiki von python.org besuchen).

## Tutorials

- [Django-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick über die Besonderheiten dieses Web-Frameworks. Wir skizzieren die Hauptfunktionen, einschließlich einiger fortgeschrittener Funktionen, auf die wir in diesem Modul nicht im Detail eingehen. Außerdem zeigen wir Ihnen einige der Hauptbausteine einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was Sie tun können, bevor Sie es einrichten und ausprobieren.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen können — egal welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen die nötigen Informationen bieten, um mit der Entwicklung von Django-Apps zu beginnen.
- [Django-Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden und bietet einen Überblick über die "Local Library" — eine Beispielwebsite, die wir in den folgenden Artikeln durcharbeiten und weiterentwickeln werden.
- [Django Tutorial Teil 2: Erstellung einer Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skelett"-Websiteprojekt erstellen können, das Sie dann mit webseitenspezifischen Einstellungen, URLs, Modellen, Ansichten und Vorlagen ergänzen können.
- [Django Tutorial Teil 3: Verwendung von Modellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : In diesem Artikel wird gezeigt, wie Sie Modelle für die _LocalLibrary_ Webseite definieren — Modelle stellen die Datenstrukturen dar, in denen wir die Daten unserer App speichern möchten, und ermöglichen es Django, Daten für uns in einer Datenbank zu speichern (und später zu ändern). Es wird erklärt, was ein Modell ist, wie es deklariert wird, und einige der Hauptfeldtypen werden vorgestellt. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.
- [Django Tutorial Teil 4: Django Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : Nun, da wir Modelle für die _LocalLibrary_ Website erstellt haben, verwenden wir die Django Admin-Seite, um einige "reale" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann, wie Sie sich einloggen und einige Daten erstellen. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Präsentation der Admin-Seite weiter verbessern können.
- [Django Tutorial Teil 5: Erstellung unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : Jetzt sind wir bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen — eine Startseite für die _LocalLibrary_, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben und Navigationslinks in der Seitenleiste zu unseren anderen Seiten bietet. Unterwegs sammeln wir praktische Erfahrungen beim Schreiben grundlegender URL-Maps und Ansichten, beim Abrufen von Datensätzen aus der Datenbank und der Verwendung von Vorlagen.
- [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_ Website, indem es Listen- und Detailseiten für Bücher und Autoren hinzufügt. Hier lernen wir über generische, klassenbasierte Ansichten und zeigen, wie sie die Menge des benötigten Codes für allgemeine Anwendungsfälle reduzieren können. Außerdem gehen wir ausführlicher auf das URL-Handling ein und zeigen, wie Sie grundlegendes Musterabgleichen durchführen können.
- [Django Tutorial Teil 7: Sitzungsframework](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_ Website, indem es einen sitzungsbasierten Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, aber es zeigt, wie Sie das Sitzungsframework verwenden können, um persistentes Verhalten für anonyme Benutzer auf Ihren eigenen Webseiten bereitzustellen.
- [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Seite anzumelden, und wie Sie kontrollieren, was sie sehen und tun können, basierend darauf, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_ Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Ansehen ausgeliehener Bücher hinzufügen.
- [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Django arbeiten, insbesondere die einfachste Methode, um Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_ Website, damit Bibliothekare Bücher erneuern sowie Autoren erstellen, aktualisieren und löschen können, indem sie unsere eigenen Formulare verwenden (anstelle der Admin-Anwendung).
- [Django Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : Wenn Webseiten wachsen, wird es schwieriger, sie manuell zu testen — nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen den Komponenten werden komplexer, und eine kleine Änderung in einem Bereich kann viele zusätzliche Tests erfordern, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu minimieren, besteht darin, automatisierte Tests zu schreiben, die einfach und zuverlässig bei jeder Änderung ausgeführt werden können. Dieses Tutorial zeigt, wie Sie das _Unit Testing_ Ihrer Website mit dem Testframework von Django automatisieren können.
- [Django Tutorial Teil 11: Django in der Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : Nachdem Sie nun eine (und getestete) großartige _LocalLibrary_ Website erstellt haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliotheksmitarbeiter und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden könnten und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.
- [Sicherheit von Django-Webanwendungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt — dieser Artikel bietet eine praktische Demonstration, wie die eingebauten Schutzmechanismen von Django solche Bedrohungen handhaben.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis darüber testen, wie man eine Website mit Django erstellt, wie in den oben aufgelisteten Tutorials beschrieben.

- [DIY Django Mini-Blog](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung nutzen Sie einige der Kenntnisse, die Sie aus diesem Modul gewonnen haben, um Ihren eigenen Blog zu erstellen.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side/Django")}}
