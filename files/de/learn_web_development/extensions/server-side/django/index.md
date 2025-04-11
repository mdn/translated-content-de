---
title: Django Webframework (Python)
slug: Learn_web_development/Extensions/Server-side/Django
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}

Django ist ein äußerst beliebtes und voll ausgestattetes serverseitiges Webframework, das in Python geschrieben ist. Dieses Modul zeigt Ihnen, warum Django eines der beliebtesten Webserver-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie damit beginnen, Ihre eigenen Webanwendungen zu erstellen.

## Voraussetzungen

Bevor Sie dieses Modul beginnen, benötigen Sie keine Vorkenntnisse in Django. Idealerweise sollten Sie verstehen, was serverseitige Webprogrammierung und Webframeworks sind, indem Sie die Themen in unserem Modul [Erste Schritte in der serverseitigen Webprogrammierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) lesen.

Allgemeine Kenntnisse von Programmierkonzepten und {{Glossary("Python", "Python")}} sind empfohlen, aber nicht entscheidend für das Verständnis der Kernkonzepte.

> [!NOTE]
> Python ist eine der leichtesten Programmiersprachen für Anfänger zu lesen und zu verstehen. Wenn Sie dieses Modul jedoch besser verstehen möchten, gibt es zahlreiche kostenlose Bücher und Tutorials im Internet, die Ihnen weiterhelfen können (neue Programmierer sollten sich die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) auf der python.org-Wiki ansehen).

## Tutorials

- [Einführung in Django](/de/docs/Learn_web_development/Extensions/Server-side/Django/Introduction)
  - : In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Webframework besonders macht. Wir skizzieren die Hauptmerkmale, einschließlich einiger erweiterter Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der wichtigsten Bausteine einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was sie leisten kann, bevor Sie sie einrichten und ausprobieren.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Django/development_environment)
  - : Jetzt, da Sie wissen, wofür Django ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen – welches gängige Betriebssystem Sie auch verwenden, dieser Artikel sollte Ihnen das geben, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.
- [Django-Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden und gibt einen Überblick über die "local library" – eine Beispielwebsite, die wir durchgehen und in den folgenden Artikeln weiterentwickeln werden.
- [Django-Tutorial Teil 2: Erstellen einer Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit sitespezifischen Einstellungen, URLs, Modellen, Ansichten und Vorlagen versehen können.
- [Django-Tutorial Teil 3: Verwenden von Modellen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Models)
  - : Dieser Artikel zeigt, wie Sie Modelle für die _LocalLibrary_-Website definieren – Modelle repräsentieren die Datenstrukturen, in denen wir die Daten unserer App speichern möchten, und ermöglichen es Django, Daten in einer Datenbank für uns zu speichern (und später zu ändern). Es wird erklärt, was ein Modell ist, wie es deklariert wird, und einige der Hauptfeldtypen. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.
- [Django-Tutorial Teil 4: Django-Admin-Seite](/de/docs/Learn_web_development/Extensions/Server-side/Django/Admin_site)
  - : Nun, da wir Modelle für die _LocalLibrary_-Website erstellt haben, werden wir die Django-Admin-Seite verwenden, um einige "echte" Buchdaten hinzuzufügen. Zuerst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Seite registrieren, danach zeigen wir Ihnen, wie Sie sich anmelden und einige Daten erstellen. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Seite weiter verbessern können.
- [Django-Tutorial Teil 5: Erstellen unserer Homepage](/de/docs/Learn_web_development/Extensions/Server-side/Django/Home_page)
  - : Wir sind jetzt bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen – eine Startseite für die _LocalLibrary_, die zeigt, wie viele Einträge wir von jedem Modelltyp haben, und Seitenleisten-Navigationslinks zu unseren anderen Seiten bietet. Dabei sammeln wir praktische Erfahrung im Schreiben grundlegender URL-Karten und Ansichten, dem Abrufen von Einträgen aus der Datenbank und der Verwendung von Templates.
- [Django-Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn_web_development/Extensions/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem es Listen- und Detailseiten für Bücher und Autoren hinzufügt. Hier lernen wir generische klassenbasierte Ansichten kennen und zeigen, wie diese den Codeaufwand für gängige Anwendungsfälle reduzieren können. Außerdem gehen wir detaillierter auf die URL-Verwaltung ein und zeigen, wie grundlegende Mustererkennung durchgeführt wird.
- [Django-Tutorial Teil 7: Sitzungsframework](/de/docs/Learn_web_development/Extensions/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website, indem es der Startseite einen besuchsbasierenden Zähler hinzufügt. Dies ist ein relativ einfaches Beispiel, zeigt jedoch, wie Sie das Sitzungsframework nutzen können, um persistentes Verhalten für anonyme Benutzer auf Ihren eigenen Websites bereitzustellen.
- [Django-Tutorial Teil 8: Benutzerauthentifizierung und Berechtigungen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie Benutzern erlauben, sich mit ihren eigenen Konten auf Ihrer Website anzumelden und wie Sie steuern, was sie basierend darauf, ob sie angemeldet sind und welche _Berechtigungen_ sie haben, tun und sehen können. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Anzeigen ausgeliehener Bücher hinzufügen.
- [Django-Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Django arbeiten, insbesondere auf die einfachste Weise, um Formulare zu schreiben, die Modellinstanzen erstellen, aktualisieren und löschen. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website, sodass Bibliothekare Bücher erneuern und Autoren mit unseren eigenen Formularen (anstelle der Administrationsanwendung) erstellen, aktualisieren und löschen können.
- [Django-Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn_web_development/Extensions/Server-side/Django/Testing)
  - : Mit dem Wachstum von Websites wird es schwieriger, sie manuell zu testen – es gibt nicht nur mehr zu testen, sondern durch die erhöhte Komplexität der Interaktionen zwischen Komponenten kann schon eine kleine Änderung in einem Bereich viele zusätzliche Tests erfordern, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu mildern, besteht darin, automatisierte Tests zu schreiben, die einfach und zuverlässig bei jeder Änderung ausgeführt werden können. Dieses Tutorial zeigt, wie man unit testing Ihrer Website mit Djangos Testframework automatisiert.
- [Django-Tutorial Teil 11: Bereitstellen von Django in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Django/Deployment)
  - : Nachdem Sie (und getestet) eine großartige _LocalLibrary_-Website erstellt haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugegriffen werden kann. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host finden könnten, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Site für die Produktion bereit zu machen.
- [Django-Webapplikationssicherheit](/de/docs/Learn_web_development/Extensions/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigeren Sicherheitsbedrohungen im Artikel [Websicherheit](/de/docs/Web/Security) erläutert – dieser Artikel bietet eine praktische Demonstration, wie Djangos eingebauter Schutz mit solchen Bedrohungen umgeht.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis testen, wie eine Website unter Verwendung von Django erstellt wird, wie es in den oben aufgeführten Tutorials beschrieben ist.

- [DIY-Django-Mini-Blog](/de/docs/Learn_web_development/Extensions/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung nutzen Sie einige der Kenntnisse, die Sie aus diesem Modul gelernt haben, um Ihren eigenen Blog zu erstellen.

{{NextMenu("Learn_web_development/Extensions/Server-side/Django/Introduction", "Learn_web_development/Extensions/Server-side")}}
