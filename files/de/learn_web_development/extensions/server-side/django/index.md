---
title: Django Web-Framework (Python)
slug: Learn_web_development/Extensions/Server-side/Django
l10n:
  sourceCommit: 95b3a7c3d7c854feddb769922818f9d5a3abd500
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}

Django ist ein äußerst beliebtes und voll ausgestattetes serverseitiges Web-Framework, das in Python geschrieben ist. Dieses Modul zeigt Ihnen, warum Django eines der beliebtesten Web-Server-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie damit beginnen, eigene Webanwendungen zu erstellen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, müssen Sie keine Vorkenntnisse in Django haben. Idealerweise sollten Sie verstehen, was serverseitiges Web-Programmieren und Web-Frameworks sind, indem Sie die Themen in unserem Modul [Erste Schritte in der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) lesen.

Allgemeine Kenntnisse über Programmierkonzepte und {{Glossary("Python", "Python")}} sind empfehlenswert, aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Python ist eine der einfachsten Programmiersprachen für Anfänger, um sie zu lesen und zu verstehen. Wenn Sie dieses Modul besser verstehen möchten, gibt es zahlreiche kostenlose Bücher und Tutorials im Internet, die Ihnen weiterhelfen können (neue Programmierer könnten sich die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) im python.org Wiki anschauen).

## Tutorials

- [Einführung in Django](/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework so besonders macht. Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was es kann, bevor Sie es einrichten und ausprobieren.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : Jetzt, da Sie wissen, wofür Django gedacht ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können – ganz gleich, welches Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen das notwendige Wissen vermitteln, um mit der Entwicklung von Django-Anwendungen zu beginnen.
- [Django Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden, und bietet einen Überblick über die "Local Library" – eine Beispiel-Website, die wir in den folgenden Artikeln bearbeiten und weiterentwickeln werden.
- [Django Tutorial Teil 2: Erstellen einer Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein Projekt für eine "Skelett"-Website erstellen können, das Sie anschließend mit seiten-spezifischen Einstellungen, URLs, Modellen, Ansichten und Templates ausstatten können.
- [Django Tutorial Teil 3: Verwenden von Modellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : Dieser Artikel zeigt, wie Sie Modelle für die _LocalLibrary_ Website definieren — Modelle repräsentieren die Datenstrukturen, in denen wir die Daten unserer App speichern möchten, und ermöglichen es Django, Daten für uns in einer Datenbank zu speichern (und später zu ändern). Er erklärt, was ein Modell ist, wie es deklariert wird, und beschreibt einige der Hauptfeldtypen. Außerdem zeigt er kurz einige der Hauptmethoden, mit denen Sie auf Modelldaten zugreifen können.
- [Django Tutorial Teil 4: Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : Jetzt, da wir Modelle für die _LocalLibrary_ Website erstellt haben, werden wir die Django Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich einloggen und einige Daten erstellen. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.
- [Django Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : Jetzt sind wir bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen — eine Startseite für die _LocalLibrary_, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, und Navigationslinks in der Seitenleiste zu unseren anderen Seiten bereitstellt. Auf dem Weg dorthin sammeln wir praktische Erfahrungen beim Schreiben grundlegender URL-Maps und Views, beim Abrufen von Datensätzen aus der Datenbank und beim Verwenden von Templates.
- [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_ Website um Listen- und Detailseiten für Bücher und Autoren. Hier lernen wir generische Klassen-basierte Ansichten kennen und zeigen, wie sie den Code, den Sie für gängige Anwendungsfälle schreiben müssen, reduzieren können. Wir gehen auch detaillierter auf die URL-Verwaltung ein und zeigen, wie man grundlegendes Musterabgleichen durchführt.
- [Django Tutorial Teil 7: Sitzungs-Framework](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_ Website, indem es einen sitzungsbasierten Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungs-Framework verwenden können, um anonymen Benutzern auf Ihren eigenen Websites dauerhaftes Verhalten zu bieten.
- [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben können, sich mit eigenen Konten auf Ihrer Site anzumelden und wie Sie steuern, was sie basierend darauf tun und sehen können, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_ Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.
- [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Django arbeiten, und insbesondere den einfachsten Weg, um Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_ Website, damit Bibliothekare Bücher erneuern sowie Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu verwenden).
- [Django Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : Mit dem Wachstum von Websites wird es immer schwieriger, sie manuell zu testen — nicht nur, dass es mehr zu testen gibt, sondern auch, weil die Interaktionen zwischen den Komponenten komplexer werden und eine kleine Änderung in einem Bereich viele zusätzliche Tests erfordern kann, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu mildern, besteht darin, automatisierte Tests zu schreiben, die leicht und zuverlässig jedes Mal ausgeführt werden können, wenn Sie eine Änderung vornehmen. Dieses Tutorial zeigt, wie Sie _Unit-Testing_ Ihrer Website mit dem Test-Framework von Django automatisieren können.
- [Django Tutorial Teil 11: Deployment von Django in die Produktivumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : Nun, da Sie eine großartige _LocalLibrary_ Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Hoster finden könnten, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Site für die Produktion bereit zu machen.
- [Sicherheit von Django-Webanwendungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jeder Website-Entwicklung. Wir haben bereits einige der häufigsten Sicherheitsbedrohungen im Artikel [Websicherheit](/de/docs/Web/Security) erklärt — dieser Artikel liefert eine praktische Demonstration, wie die integrierten Schutzmaßnahmen von Django solche Bedrohungen handhaben.

## Bewertungen

Die folgende Bewertung testet Ihr Verständnis dafür, wie man eine Website mit Django erstellt, wie in den oben aufgeführten Tutorials beschrieben.

- [DIY Django Mini-Blog](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung verwenden Sie einige der Kenntnisse, die Sie aus diesem Modul gelernt haben, um Ihren eigenen Blog zu erstellen.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}
