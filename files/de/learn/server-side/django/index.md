---
title: Django Web Framework (Python)
slug: Learn/Server-side/Django
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}

Django ist ein äußerst beliebtes und vollständig ausgestattetes serverseitiges Web-Framework, das in Python geschrieben ist. Dieses Modul zeigt Ihnen, warum Django eines der beliebtesten Web-Server-Frameworks ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie es verwenden, um eigene Webanwendungen zu erstellen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, müssen Sie keine Vorkenntnisse in Django haben. Idealerweise sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, indem Sie die Themen in unserem Modul [Erste Schritte mit der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps) lesen.

Ein allgemeines Wissen über Programmierkonzepte und {{Glossary("Python", "Python")}} wird empfohlen, ist aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Python ist eine der einfachsten Programmiersprachen für Anfänger, um sie zu lesen und zu verstehen. Das gesagt, wenn Sie dieses Modul besser verstehen möchten, gibt es zahlreiche kostenlose Bücher und Tutorials im Internet, die Ihnen helfen (neue Programmierer könnten die Seite [Python für Nicht-Programmierer](https://wiki.python.org/moin/BeginnersGuide/NonProgrammers) im python.org-Wiki besuchen).

## Leitfäden

- [Einführung in Django](/de/docs/Learn/Server-side/Django/Introduction)
  - : In diesem ersten Django-Artikel beantworten wir die Frage "Was ist Django?" und geben Ihnen einen Überblick darüber, was dieses Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale, einschließlich einiger erweiterter Funktionen, die wir in diesem Modul nicht im Detail behandeln werden. Wir zeigen Ihnen auch einige der Hauptbausteine einer Django-Anwendung, um Ihnen eine Vorstellung davon zu geben, was sie leisten kann, bevor Sie sie einrichten und damit experimentieren.
- [Einrichten einer Django-Entwicklungsumgebung](/de/docs/Learn/Server-side/Django/development_environment)
  - : Jetzt, wo Sie wissen, wofür Django da ist, zeigen wir Ihnen, wie Sie eine Django-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen können – egal, welches gängige Betriebssystem Sie verwenden, dieser Artikel sollte Ihnen das geben, was Sie benötigen, um mit der Entwicklung von Django-Apps zu beginnen.
- [Django Tutorial: Die Local Library Website](/de/docs/Learn/Server-side/Django/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über die "Local Library" – eine Beispiel-Website, mit der wir arbeiten und die wir in den folgenden Artikeln weiterentwickeln werden.
- [Django Tutorial Teil 2: Erstellen einer Gerüst-Website](/de/docs/Learn/Server-side/Django/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skeleton"-Website-Projekt erstellen können, das Sie dann mit sitzungsspezifischen Einstellungen, URLs, Modellen, Ansichten und Vorlagen füllen können.
- [Django Tutorial Teil 3: Verwenden von Modellen](/de/docs/Learn/Server-side/Django/Models)
  - : Dieser Artikel zeigt, wie man Modelle für die _LocalLibrary_-Website definiert – Modelle repräsentieren die Datenstrukturen, in denen wir die Daten unserer App speichern wollen, und ermöglichen es auch Django, Daten für uns in einer Datenbank zu speichern (und später zu ändern). Er erklärt, was ein Modell ist, wie es deklariert wird, und einige der wichtigsten Feldtypen. Außerdem zeigt er kurz einige der Hauptmethoden, auf die Sie auf Modelldaten zugreifen können.
- [Django Tutorial Teil 4: Django Admin Site](/de/docs/Learn/Server-side/Django/Admin_site)
  - : Nachdem wir Modelle für die _LocalLibrary_-Website erstellt haben, werden wir die Django-Admin-Site verwenden, um einige "echte" Buchdaten hinzuzufügen. Zunächst zeigen wir Ihnen, wie Sie die Modelle bei der Admin-Site registrieren, dann zeigen wir Ihnen, wie Sie sich anmelden und Daten erstellen. Am Ende zeigen wir einige Möglichkeiten, wie Sie die Darstellung der Admin-Site weiter verbessern können.
- [Django Tutorial Teil 5: Unsere Startseite erstellen](/de/docs/Learn/Server-side/Django/Home_page)
  - : Wir sind jetzt bereit, den Code hinzuzufügen, um unsere erste vollständige Seite anzuzeigen – eine Startseite für die _LocalLibrary_, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, und Seitenleisten-Navigationslinks zu unseren anderen Seiten bietet. Auf dem Weg dorthin sammeln wir praktische Erfahrungen im Schreiben grundlegender URL-Maps und Ansichten, Erlangen von Datensätzen aus der Datenbank und Verwenden von Vorlagen.
- [Django Tutorial Teil 6: Generische Listen- und Detailansichten](/de/docs/Learn/Server-side/Django/Generic_views)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website um Listen- und Detailseiten für Bücher und Autoren. Hier lernen wir über generische, klassenbasierte Ansichten und zeigen, wie sie den Code, den Sie für häufige Anwendungsfälle schreiben müssen, reduzieren können. Wir werden auch die URL-Behandlung genauer betrachten und zeigen, wie man grundlegende Mustererkennung durchführt.
- [Django Tutorial Teil 7: Sitzungen-Framework](/de/docs/Learn/Server-side/Django/Sessions)
  - : Dieses Tutorial erweitert unsere _LocalLibrary_-Website um einen sitzungsbasierten Besuchszähler auf der Startseite. Dies ist ein relativ einfaches Beispiel, aber es zeigt, wie Sie das Sitzungen-Framework nutzen können, um anonymen Benutzern auf Ihren eigenen Seiten persistentes Verhalten zu bieten.
- [Django Tutorial Teil 8: Benutzer-Authentifizierung und Berechtigungen](/de/docs/Learn/Server-side/Django/Authentication)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie es Benutzern ermöglichen, sich mit ihren eigenen Konten auf Ihrer Seite anzumelden und was sie tun und sehen können basierend darauf, ob sie eingeloggt sind und welche _Berechtigungen_ sie haben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website, indem wir Anmelde- und Abmeldeseiten sowie benutzer- und mitarbeiterspezifische Seiten zum Betrachten von ausgeliehenen Büchern hinzufügen.
- [Django Tutorial Teil 9: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Django/Forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn/Forms) in Django arbeiten, insbesondere den einfachsten Weg, um Formulare zum Erstellen, Aktualisieren und Löschen von Modellinstanzen zu schreiben. Im Rahmen dieser Demonstration erweitern wir die _LocalLibrary_-Website, damit Bibliothekare Bücher erneuern und Autoren erstellen, aktualisieren und löschen können, indem wir unsere eigenen Formulare verwenden (anstatt die Admin-Anwendung zu nutzen).
- [Django Tutorial Teil 10: Testen einer Django-Webanwendung](/de/docs/Learn/Server-side/Django/Testing)
  - : Wenn Websites wachsen, wird es schwieriger, sie manuell zu testen – nicht nur gibt es mehr zu testen, sondern da die Interaktionen zwischen den Komponenten komplexer werden, kann eine kleine Änderung in einem Bereich viele zusätzliche Tests erfordern, um ihre Auswirkungen auf andere Bereiche zu überprüfen. Eine Möglichkeit, diese Probleme zu mildern, besteht darin, automatisierte Tests zu schreiben, die bei jeder Änderung einfach und zuverlässig ausgeführt werden können. Dieses Tutorial zeigt, wie Sie das _Unit-Testing_ Ihrer Website mit dem Test-Framework von Django automatisieren.
- [Django Tutorial Teil 11: Bereitstellung von Django in Produktion](/de/docs/Learn/Server-side/Django/Deployment)
  - : Nachdem Sie eine großartige _LocalLibrary_-Website erstellt (und getestet) haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet abgerufen werden kann. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden und was Sie tun müssen, um Ihre Site für die Produktion bereit zu machen.
- [Sicherheit von Django-Webanwendungen](/de/docs/Learn/Server-side/Django/web_application_security)
  - : Der Schutz von Benutzerdaten ist ein wesentlicher Bestandteil jedes Website-Designs. Wir haben zuvor einige der häufigeren Sicherheitsbedrohungen im Artikel [Websicherheit](/de/docs/Web/Security) erklärt – dieser Artikel bietet eine praktische Demonstration, wie Djangos integrierte Schutzmechanismen mit solchen Bedrohungen umgehen.

## Bewertungen

Die folgende Bewertung wird Ihr Verständnis testen, wie man eine Website mit Django erstellt, wie in den oben aufgeführten Leitfäden beschrieben.

- [Eigenes Django-Mini-Blog erstellen](/de/docs/Learn/Server-side/Django/django_assessment_blog)
  - : In dieser Bewertung verwenden Sie einige der Kenntnisse, die Sie in diesem Modul erworben haben, um Ihr eigenes Blog zu erstellen.
