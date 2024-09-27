---
title: Express Web-Framework (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}

Express ist ein beliebtes, unvoreingenommenes Web-Framework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie allgemeine Webentwicklungs- und Bereitstellungsaufgaben durchführen können.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, idealerweise indem Sie die Themen in unserem Modul [Erste Schritte mit der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps) lesen. Allgemeine Programmierkenntnisse und Kenntnisse in [JavaScript](/de/docs/Web/JavaScript) sind sehr zu empfehlen, aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Lernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/de/docs/Learn/JavaScript) (Lernen). Die Kernsprache und Konzepte von JavaScript sind für die serverseitige Entwicklung auf Node.js dieselben und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) zur Unterstützung von Funktionen, die in browserlosen Umgebungen nützlich sind (z.B., um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und dem DOM.
>
> Dieser Leitfaden wird einige Informationen über die Arbeit mit Node.js und Express bereitstellen, und es gibt zahlreiche andere ausgezeichnete Ressourcen im Internet und in Büchern — einige davon sind verlinkt in [Wie fange ich mit Node.js an](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (StackOverflow) und [Was sind die besten Ressourcen zum Lernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Leitfäden

- [Einführung in Express/Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, da Sie wissen, wofür Express ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel alles geben, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express-Tutorial: Die Website der lokalen Bibliothek](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über das Beispiel der "Lokalen Bibliothek"-Website, das wir in den folgenden Artikeln durchgehen und weiterentwickeln werden.
- [Express-Tutorial Teil 2: Erstellen eines Gerüsts für die Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Gerüst" für ein Website-Projekt erstellen können, das Sie dann mit spezifischen Routen, Templates/Views und Datenbanken füllen können.
- [Express-Tutorial Teil 3: Verwenden einer Datenbank (mit Mongoose)](/de/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_ Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die Hauptfeldtypen und grundlegende Validierung. Außerdem werden kurz einige der Hauptmethoden gezeigt, um auf Modelldaten zuzugreifen.
- [Express-Tutorial Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenziele ein, die wir schließlich auf der _LocalLibrary_-Website benötigen werden. Nach Abschluss werden wir eine modulare Struktur für unseren Routencode haben, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt.
- [Express-Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind jetzt bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _LocalLibrary_-Website anzeigen. Die Seiten werden eine Startseite enthalten, die zeigt, wie viele Einträge wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Auf dem Weg dorthin werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und im Verwenden von Templates sammeln.
- [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn/Forms) in Express, unter Verwendung von Pug, arbeiten können, insbesondere wie Sie Formulare zum Erstellen, Aktualisieren und Löschen von Dokumenten aus der Datenbank schreiben.
- [Express-Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_-Website erstellt haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden können und was Sie tun müssen, um Ihre Website für die Produktion bereit zu machen.

## Hinzufügen weiterer Tutorials

Alle bestehenden Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, könnten einige andere interessante Themen umfassen:

- Verwendung von Sitzungen.
- Benutzer-Authentifizierung.
- Benutzer-Autorisierung und Berechtigungen.
- Testen einer Express-Webanwendung.
- Websicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine wunderbare Ergänzung!
