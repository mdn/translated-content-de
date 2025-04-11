---
title: Express-Web-Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}

Express ist ein beliebtes, unmeinbares Web-Framework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie allgemeine Aufgaben der Webentwicklung und -bereitstellung durchführen können.

> [!WARNING]
> Die Express-Dokumentation und das Tutorial sind für Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, müssen Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, idealerweise indem Sie die Themen in unserem Modul [Erste Schritte zur serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) lesen. Allgemeine Kenntnisse über Programmierkonzepte und [JavaScript](/de/docs/Web/JavaScript) sind sehr zu empfehlen, aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Erlernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/de/docs/Learn_web_development/Core/Scripting) (Lernen). Die Kernsprache und Konzepte von JavaScript sind für die serverseitige Entwicklung auf Node.js dieselben und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) für unterstützende Funktionen, die in browserlosen Umgebungen nützlich sind (z. B. um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und DOM.
>
> Diese Artikelsammlung wird einige Informationen zur Arbeit mit Node.js und Express bereitstellen, und es gibt zahlreiche andere hervorragende Ressourcen im Internet und in Büchern — einige davon sind verlinkt von [Wie beginne ich mit Node.js](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) und [Was sind die besten Ressourcen zum Lernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Tutorials

- [Einführung in Express/Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : Im ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptfunktionen und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, da Sie wissen, wofür Express da ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel geben, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express Tutorial: Die Website der lokalen Bibliothek](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispiel-Website "lokale Bibliothek", die wir in den folgenden Artikeln bearbeiten und weiterentwickeln werden.
- [Express Tutorial Teil 2: Erstellung einer Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit sitespezifischen Routen, Templates/Views und Datenbanken füllen können.
- [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um einen Datenbankzugriff für die _LocalLibrary_-Website bereitzustellen. Er erklärt, wie Objektschemata und -modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Es wird auch kurz gezeigt, wie Sie auf unterschiedliche Weise auf Modelldaten zugreifen können.
- [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (Code für die URL-Verarbeitung) mit "dummy" Handlerfunktionen für alle Ressourcenendpunkte ein, die wir letztendlich auf der _LocalLibrary_-Website benötigen. Nach Abschluss werden wir eine modulare Struktur für unseren Routenhandler-Code haben, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt.
- [Express Tutorial Teil 5: Anzeige von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : Jetzt sind wir bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _LocalLibrary_-Website anzeigen. Die Seiten werden eine Startseite enthalten, die zeigt, wie viele Datensätze wir zu jedem Modelltyp haben, und Listen- und Detailseiten für alle unsere Modelle. Unterwegs sammeln wir praktische Erfahrungen im Abruf von Datensätzen aus der Datenbank und der Verwendung von Templates.
- [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Express unter Verwendung von Pug arbeiten, und insbesondere, wie Sie Formulare schreiben, um Dokumente in der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_-Website erstellt haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit Bibliothekspersonal und Mitglieder über das Internet darauf zugreifen können. Dieser Artikel bietet einen Überblick darüber, wie Sie möglicherweise einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website für die Produktion bereit zu machen.

## Hinzufügen weiterer Tutorials

Alle bestehenden Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, sind einige andere interessante Themen, die Sie behandeln könnten:

- Verwendung von Sessions.
- Benutzerauthentifizierung.
- Benutzerautorisierung und Berechtigungen.
- Testen einer Express-Webanwendung.
- Web-Sicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine wunderbare Ergänzung!

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}
