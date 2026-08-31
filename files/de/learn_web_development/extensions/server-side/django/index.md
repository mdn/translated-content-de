---
title: Django Web-Framework (Python)
slug: Learn_web_development/Extensions/Server-side/Django
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}

Django ist ein äußerst beliebtes und voll ausgestattetes serverseitiges Web-Framework, das in Python geschrieben ist. Dieses Modul zeigt Ihnen, warum Django eines der beliebtesten Web-Server-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie damit beginnen, Ihre eigenen Webanwendungen zu erstellen.

## Voraussetzungen

Vor Beginn dieses Moduls benötigen Sie keine Vorkenntnisse in Django. Idealerweise sollten Sie verstehen, was serverseitige Web-Programmierung und Web-Frameworks sind, indem Sie die Themen in unserem Modul [Erste Schritte in der serverseitigen Web-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) lesen.

Ein allgemeines Wissen über Programmierkonzepte und {{Glossary("Python", "Python")}} wird empfohlen, ist jedoch nicht unbedingt erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Python ist eine der am einfachsten zu lesenden und zu verstehenden Programmiersprachen für Anfänger. Wenn Sie dieses Modul dennoch besser verstehen möchten, gibt es zahlreiche kostenlose Bücher und Tutorials im Internet, die Ihnen dabei helfen können (neue Programmierer könnten die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) auf dem python.org-Wiki ansehen).

## Anleitungen

- [Django-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht. Wir skizzieren die Hauptfunktionen, einschließlich einiger fortgeschrittener Funktionalitäten, die wir in diesem Modul nicht im Detail behandeln werden. Außerdem zeigen wir Ihnen einige der Hauptbausteine einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was Sie tun können, bevor Sie es einrichten und damit beginnen.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : Nachdem Sie nun wissen, wofür Django geeignet ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen – unabhängig davon, welches Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das bieten, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.
- [Django-Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die "lokale Bibliothek" – eine Beispiel-Website, die wir in den folgenden Artikeln durchgehen und weiterentwickeln werden.
- [Django-Tutorial Teil 2: Erstellen einer Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skeleton"-Website-Projekt erstellen können, welches Sie dann weiter mit spezifischen Einstellungen, URLs, Modellen, Views und Templates füllen können.
- [Django-Tutorial Teil 3: Verwendung von Modellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : Dieser Artikel zeigt, wie man Modelle für die _LocalLibrary_-Website definiert – Modelle repräsentieren die Datenstrukturen, in denen wir die Daten unserer App speichern möchten, und ermöglichen es Django, Daten für uns in einer Datenbank zu speichern (und später zu bearbeiten). Es erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Darüber hinaus wird kurz auf einige der Hauptmöglichkeiten zur Zugriff auf Modelldaten eingegangen.
- [Django-Tutorial Teil 4: Django Admin-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : Nachdem wir nun Modelle für die _LocalLibrary_-Website erstellt haben, verwenden wir die Django Admin-Website, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Website registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und Daten erstellen. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Website weiter verbessern können.
- [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : Wir sind nun bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen – eine Startseite für die _LocalLibrary_, die zeigt, wie viele Einträge wir von jedem Modelltyp haben und Navigationslinks zu unseren anderen Seiten in der Seitenleiste bietet. Unterwegs sammeln wir praktische Erfahrungen beim Schreiben grundlegender URL-Karten und Ansichten, beim Abrufen von Datensätzen aus der Datenbank und bei der Verwendung von Templates.
- [Django-Tutorial Teil 6: Generische Listen- und Detail-Ansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem es Listen- und Detailseiten für Bücher und Autoren hinzufügt. Hier erfahren Sie etwas über generische, klassenbasierte Ansichten und wie diese den für häufige Anwendungsfälle erforderlichen Code reduzieren können. Wir gehen auch detailliert auf die URL-Verwaltung ein und zeigen, wie grundlegendes Muster-Matching durchgeführt werden kann.
- [Django-Tutorial Teil 7: Sitzungsframework](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem es einen sitzungsbasierten Besucherzähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungsframework verwenden können, um auf Ihren eigenen Websites dauerhaftes Verhalten für anonyme Benutzer bereitzustellen.
- [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzer in der Lage versetzen, sich mit ihren eigenen Konten in Ihrer Website anzumelden, und wie Sie kontrollieren können, was sie tun und sehen dürfen, je nachdem, ob sie angemeldet sind und über welche _Berechtigungen_ sie verfügen. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website und fügen Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen von ausgeliehenen Büchern hinzu.
- [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Django arbeiten, und insbesondere die einfachste Methode, um Formulare zu schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website, sodass Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen (anstatt mit der Admin-Anwendung) erstellen, aktualisieren und löschen können.
- [Django-Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : Mit dem Wachstum von Websites wird es schwieriger, diese manuell zu testen — nicht nur gibt es mehr zu testen, sondern auch die Interaktionen zwischen den Komponenten werden immer komplexer, so dass eine kleine Änderung in einem Bereich viele zusätzliche Tests erfordert, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu mindern, besteht darin, automatisierte Tests zu schreiben, die leicht und zuverlässig bei jeder Änderung ausgeführt werden können. Dieses Tutorial zeigt, wie man das _Unit-Testing_ Ihrer Website mithilfe von Djangos Testframework automatisieren kann.
- [Django-Tutorial Teil 11: Django in Produktion bereitstellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : Jetzt, wo Sie eine (und getestete) großartige _LocalLibrary_-Website erstellt haben, möchten Sie sie auf einem öffentlichen Webserver installieren, sodass Bibliotheksmitarbeiter und Mitglieder sie über das Internet aufrufen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Site für die Produktion bereit zu machen.
- [Django Webanwendungssicherheit](/de/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil des Website-Designs. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erläutert — dieser Artikel bietet eine praktische Demonstration, wie Djangos integrierte Schutzmechanismen mit solchen Bedrohungen umgehen.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis dafür testen, wie man eine Website mit Django erstellt, wie in den oben aufgeführten Tutorials beschrieben.

- [DIY Django Mini-Blog](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung werden Sie einige der Kenntnisse aus diesem Modul anwenden, um Ihren eigenen Blog zu erstellen.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}
