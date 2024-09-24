---
title: Express Webframework (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}

Express ist ein beliebtes, nicht restriktives Webframework, geschrieben in JavaScript und gehostet in der Node.js-Laufzeitumgebung. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten, und wie Sie gängige Aufgaben in der Webentwicklung und beim Deployment ausführen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Webframeworks sind, idealerweise indem Sie die Themen in unserem Modul [Erste Schritte der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps) lesen. Ein allgemeines Wissen über Programmierkonzepte und [JavaScript](/de/docs/Web/JavaScript) wird dringend empfohlen, ist aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Erlernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/de/docs/Learn/JavaScript) (Lernen). Die Kernsprache JavaScript und die Konzepte sind für die serverseitige Entwicklung auf Node.js dieselben, und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) zur Unterstützung von Funktionen, die in browserlosen Umgebungen nützlich sind (z.B. um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und dem DOM.
>
> Dieser Leitfaden bietet einige Informationen zur Arbeit mit Node.js und Express, und es gibt zahlreiche andere exzellente Ressourcen im Internet und in Büchern — einige davon sind verlinkt unter [Wie fange ich mit Node.js an](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (StackOverflow) und [Was sind die besten Ressourcen zum Erlernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Leitfäden

- [Einführung in Express/Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, da Sie wissen, wofür Express verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Welches gängige Betriebssystem Sie auch verwenden, dieser Artikel sollte Ihnen geben, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express-Tutorial: Die Website der Lokalbibliothek](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispiel-Website der "Lokalbibliothek", die wir in den folgenden Artikeln durcharbeiten und weiterentwickeln werden.
- [Express-Tutorial Teil 2: Erstellen einer Skelett-Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit standortspezifischen Routen, Templates/Views und Datenbanken füllen können.
- [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Er zeigt dann, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um der _Lokalbibliothek_ Website den Datenbankzugriff bereitzustellen. Es wird erklärt, wie Objektschema und Modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Es zeigt auch kurz einige der Hauptmethoden, wie Sie auf Modelldaten zugreifen können.
- [Express-Tutorial Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Behandlungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenzugriffspunkte ein, die wir letztendlich auf der _Lokalbibliothek_ Website benötigen werden. Nach Abschluss haben wir eine modulare Struktur für unseren Routenbehandlungscode, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Außerdem haben wir ein sehr gutes Verständnis dafür, wie man modulare Routen mit Express erstellt.
- [Express-Tutorial Teil 5: Anzeigendaten der Bibliothek](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _Lokalbibliothek_ Website anzeigen. Die Seiten umfassen eine Startseite, die anzeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Unterwegs sammeln wir praktische Erfahrungen beim Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates.
- [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn/Forms) in Express arbeiten, unter Verwendung von Pug, und insbesondere, wie Sie Formulare schreiben, um Dokumente aus der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express-Tutorial Teil 7: Deployment in die Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _Lokalbibliothek_ Website erstellt haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie möglicherweise einen Host finden, um Ihre Website einzusetzen, und was Sie tun müssen, um Ihre Seite für die Produktion bereit zu machen.

## Weitere Tutorials hinzufügen

Alle bestehenden Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, könnten weitere interessante Themen sein:

- Sitzungen verwenden.
- Benutzer-Authentifizierung.
- Benutzer-Autorisierung und Berechtigungen.
- Testen einer Express-Webanwendung.
- Websicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine wunderbare Ergänzung!
