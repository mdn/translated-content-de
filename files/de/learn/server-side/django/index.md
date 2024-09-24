---
title: Django-Webframework (Python)
slug: Learn/Server-side/Django
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}

Django ist ein äußerst beliebtes und voll ausgestattetes serverseitiges Webframework, das in Python geschrieben ist. Dieses Modul zeigt Ihnen, warum Django eines der am meisten genutzten Webserver-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie damit beginnen können, Ihre eigenen Webanwendungen zu erstellen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, müssen Sie keine Kenntnisse über Django haben. Idealerweise sollten Sie verstehen, was serverseitige Webprogrammierung und Webframeworks sind, indem Sie die Themen in unserem Modul [Erste Schritte in der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps) lesen.

Allgemeine Kenntnisse über Programmierkonzepte und [Python](/de/docs/Glossary/Python) sind empfehlenswert, aber nicht essentiell, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Python ist eine der am leichtesten lesbaren und verständlichen Programmiersprachen für Anfänger. Wenn Sie dieses Modul jedoch besser verstehen möchten, stehen zahlreiche kostenlose Bücher und Tutorials im Internet zur Verfügung, die Ihnen helfen können (neue Programmierer sollten sich die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) im wiki.python.org ansehen).

## Anleitungen

- [Einführung in Django](/de/docs/Learn/Server-side/Django/Introduction)
  - : In diesem ersten Artikel über Django beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Webframework besonders macht. Wir skizzieren die Hauptmerkmale, einschließlich einiger fortgeschrittener Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der Hauptelemente einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was es tun kann, bevor Sie es einrichten und damit experimentieren.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment)
  - : Jetzt, da Sie wissen, wofür Django verwendet wird, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können — ganz gleich, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen das nötige Wissen vermitteln, um mit der Entwicklung von Django-Anwendungen zu beginnen.
- [Django-Tutorial: Die Website der lokalen Bibliothek](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden, und gibt einen Überblick über die "lokale Bibliothek" — eine Beispiel-Website, an der wir arbeiten und die wir in den folgenden Artikeln weiterentwickeln werden.
- [Django-Tutorial Teil 2: Erstellen einer Skelett-Website](/de/docs/Learn/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt Ihnen, wie Sie ein "Skelett" einer Website erstellen können, das Sie dann mit spezifischen Einstellungen, URLs, Modellen, Ansichten und Templates erweitern können.
- [Django-Tutorial Teil 3: Verwendung von Modellen](/de/docs/Learn/Server-side/Django/Models)
  - : Dieser Artikel zeigt, wie Sie Modelle für die _LocalLibrary_-Website definieren — Modelle repräsentieren die Datenstrukturen, in denen wir die Daten unserer App speichern möchten, und ermöglichen es Django auch, Daten in einer Datenbank für uns zu speichern (und sie später zu ändern). Es erklärt, was ein Modell ist, wie es deklariert wird, und einige der wichtigsten Feldtypen. Es werden auch kurz einige der Hauptmöglichkeiten gezeigt, auf wie Sie auf Modelldaten zugreifen können.
- [Django-Tutorial Teil 4: Django-Admin-Website](/de/docs/Learn/Server-side/Django/Admin_site)
  - : Jetzt, da wir Modelle für die _LocalLibrary_-Website erstellt haben, werden wir die Django-Admin-Website nutzen, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und Daten erstellen können. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.
- [Django-Tutorial Teil 5: Erstellen unserer Startseite](/de/docs/Learn/Server-side/Django/Home_page)
  - : Wir sind jetzt bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen — eine Startseite für die _LocalLibrary_, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, und Navigationslinks in der Seitenleiste zu unseren anderen Seiten bereitstellt. Dabei gewinnen wir praktische Erfahrungen im Schreiben von grundlegenden URL-Karten und Ansichten, Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.
- [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem Listen- und Detailseiten für Bücher und Autoren hinzugefügt werden. Hier lernen wir über generische, klassenbasierte Ansichten und zeigen, wie sie den zu schreibenden Code für häufige Anwendungsfälle reduzieren können. Wir gehen auch detaillierter auf die Handhabung von URLs ein und zeigen, wie grundlegende Mustererkennung durchgeführt wird.
- [Django-Tutorial Teil 7: Sitzungs-Framework](/de/docs/Learn/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem ein auf Sitzungen basierender Besuchszähler zur Startseite hinzugefügt wird. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungs-Framework verwenden können, um ein dauerhaftes Verhalten für anonyme Benutzer auf Ihren eigenen Websites bereitzustellen.
- [Django-Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern die Anmeldung auf Ihrer Website mit ihren eigenen Konten ermöglichen und wie Sie steuern können, was sie tun und sehen dürfen, basierend darauf, ob sie angemeldet sind und welche _Berechtigungen_ sie haben. Als Teil dieser Demonstration erweitern wir die _LocalLibrary_-Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten hinzufügen, auf denen Bücher betrachtet werden können, die ausgeliehen wurden.
- [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn/Forms) in Django arbeiten, und insbesondere, wie Sie einfach Formulare schreiben, um Modellinstanzen zu erstellen, zu aktualisieren und zu löschen. Als Teil dieser Demonstration erweitern wir die _LocalLibrary_-Website, sodass Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen erstellen, aktualisieren und löschen können (anstatt die Admin-Anwendung zu verwenden).
- [Django-Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn/Server-side/Django/Testing)
  - : Wenn Websites wachsen, wird es schwieriger, sie manuell zu testen — nicht nur gibt es mehr zu testen, sondern da die Wechselwirkungen zwischen Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich viele zusätzliche Tests erfordern, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu mildern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie _Unit-Tests_ Ihrer Website mit dem Test-Framework von Django automatisieren.
- [Django-Tutorial Teil 11: Bereitstellung von Django in der Produktion](/de/docs/Learn/Server-side/Django/Deployment)
  - : Nachdem Sie eine großartige _LocalLibrary_-Website erstellt (und getestet) haben, werden Sie sie auf einem öffentlichen Webserver installieren möchten, damit sie von Bibliothekspersonal und Mitgliedern über das Internet erreichbar ist. Dieser Artikel gibt Ihnen einen Überblick darüber, wie Sie einen Hoster finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Seite für die Produktion bereitzumachen.
- [Sicherheit von Django-Webanwendungen](/de/docs/Learn/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigsten Sicherheitsbedrohungen im Artikel [Web-Sicherheit](/de/docs/Web/Security) erklärt — dieser Artikel bietet eine praktische Demonstration, wie die eingebauten Schutzmechanismen von Django solche Bedrohungen handhaben.

## Bewertungen

Die folgende Bewertung testet Ihr Verständnis darüber, wie man mit Django eine Website erstellt, wie in den oben aufgeführten Anleitungen beschrieben.

- [DIY Django Mini Blog](/de/docs/Learn/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung verwenden Sie einige der Kenntnisse, die Sie in diesem Modul gelernt haben, um Ihren eigenen Blog zu erstellen.
