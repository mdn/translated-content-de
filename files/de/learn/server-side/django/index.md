---
title: Django Web Framework (Python)
slug: Learn/Server-side/Django
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}

Django ist ein äußerst beliebtes und vollständig ausgestattetes serverseitiges Web-Framework, das in Python geschrieben ist. Dieses Modul zeigt Ihnen, warum Django eines der beliebtesten Web-Server-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie damit beginnen, Ihre eigenen Webanwendungen zu erstellen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, benötigen Sie keine Kenntnisse über Django. Idealerweise sollten Sie allerdings verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, indem Sie die Themen in unserem Modul [Erste Schritte mit der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps) lesen.

Allgemeine Kenntnisse über Programmierkonzepte und [Python](/de/docs/Glossary/Python) sind empfehlenswert, aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Python ist eine der am leichtesten zu lesenden und zu verstehenden Programmiersprachen für Anfänger. Dennoch, wenn Sie dieses Modul besser verstehen möchten, gibt es zahlreiche kostenlose Bücher und Tutorials im Internet, die Ihnen weiterhelfen können (neue Programmierer sollten vielleicht die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) im python.org-Wiki ansehen).

## Leitfäden

- [Django-Einführung](/de/docs/Learn/Server-side/Django/Introduction)
  - : In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework so besonders macht. Wir skizzieren die Hauptfunktionen, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was sie leisten kann, bevor Sie sie einrichten und ausprobieren.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment)
  - : Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen — egal, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen das geben, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.
- [Django-Tutorial: Die Local Library-Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die "Local Library" — eine Beispiel-Website, die wir in den folgenden Artikeln bearbeiten und weiterentwickeln werden.
- [Django-Tutorial Teil 2: Erstellen einer Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein Website-Projekt als "Skelett" erstellen können, das Sie dann mit spezifischen Einstellungen, URLs, Modellen, Ansichten und Vorlagen ausstatten können.
- [Django-Tutorial Teil 3: Verwenden von Modellen](/de/docs/Learn/Server-side/Django/Models)
  - : Dieser Artikel zeigt, wie Sie Modelle für die _LocalLibrary_-Website definieren — Modelle repräsentieren die Datenstrukturen, in denen wir die Daten unserer App speichern möchten, und ermöglichen es Django auch, Daten in einer Datenbank für uns zu speichern (und später zu ändern). Es wird erklärt, was ein Modell ist, wie es deklariert wird und einige der wichtigsten Feldtypen. Es zeigt auch kurz einige Hauptmethoden, mit denen Sie auf Modelldaten zugreifen können.
- [Django-Tutorial Teil 4: Django-Administrationsseite](/de/docs/Learn/Server-side/Django/Admin_site)
  - : Nachdem wir Modelle für die _LocalLibrary_-Website erstellt haben, verwenden wir die Django-Administrationsseite, um einige "echte" Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle bei der Administrationsseite registrieren, dann zeigen wir Ihnen, wie Sie sich einloggen und einige Daten erstellen. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Administrationsseite weiter verbessern können.
- [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page)
  - : Wir sind nun bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen — eine Startseite für die _LocalLibrary_, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, und Navigationslinks zur Seitenleiste für unsere anderen Seiten bereitstellt. Dabei werden wir praktische Erfahrungen im Schreiben grundlegender URL-Karten und Ansichten sammeln, Datensätze aus der Datenbank abrufen und Vorlagen verwenden.
- [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem es Listen- und Detailseiten für Bücher und Autoren hinzufügt. Hier erfahren Sie mehr über generische klassenbasierte Ansichten und zeigen, wie sie den Codeumfang, den Sie für häufige Anwendungsfälle schreiben müssen, reduzieren können. Wir werden auch die URL-Verarbeitung detaillierter behandeln und zeigen, wie Sie grundlegende Mustererkennungen durchführen können.
- [Django-Tutorial Teil 7: Sitzungs-Framework](/de/docs/Learn/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem es einen sitzungsbasierten Besuchszähler zur Startseite hinzufügt. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungs-Framework verwenden können, um anonymen Benutzern auf Ihren eigenen Websites dauerhaftes Verhalten bereitzustellen.
- [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Website anzumelden, und wie Sie kontrollieren, was sie tun und sehen können, je nachdem, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website um Anmelde- und Abmeldeseiten sowie um benutzer- und mitarbeiterspezifische Seiten zur Ansicht ausgeliehener Bücher.
- [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn/Forms) in Django arbeiten, und insbesondere den einfachsten Weg, um Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website, sodass Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen (anstatt der Verwaltungsanwendung) erstellen, aktualisieren und löschen können.
- [Django-Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn/Server-side/Django/Testing)
  - : Mit dem Wachstum von Websites wird das manuelle Testen schwieriger — nicht nur gibt es mehr zu testen, sondern da die Interaktionen zwischen Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich viele zusätzliche Tests erfordern, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu mindern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie mit dem Test-Framework von Django das _Unittesting_ Ihrer Website automatisieren können.
- [Django-Tutorial Teil 11: Django in Produktion zur Verfügung stellen](/de/docs/Learn/Server-side/Django/Deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_-Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet genutzt werden kann. Dieser Artikel gibt einen Überblick darüber, wie Sie möglicherweise einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Seite produktionsbereit zu machen.
- [Sicherheit von Django-Webanwendungen](/de/docs/Learn/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil des Website-Designs. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt — dieser Artikel bietet eine praktische Demonstration, wie Djangos integrierte Schutzmaßnahmen mit solchen Bedrohungen umgehen.

## Bewertungen

Die folgende Bewertung überprüft Ihr Verständnis dafür, wie Sie mithilfe von Django eine Website erstellen, wie in den oben aufgeführten Leitfäden beschrieben.

- [DIY Django Miniblog](/de/docs/Learn/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung verwenden Sie einige der Kenntnisse, die Sie in diesem Modul gelernt haben, um Ihren eigenen Blog zu erstellen.
