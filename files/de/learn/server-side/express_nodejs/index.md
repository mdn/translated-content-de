---
title: Express Web Framework (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
l10n:
  sourceCommit: 3dd00b3b77e2e79c7d92f0b6c4f4665d54500a0e
---

{{LearnSidebar}}

Express ist ein populäres, nicht normatives Web-Framework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Webentwicklungs- und Bereitstellungsaufgaben durchführen.

## Voraussetzungen

Bevor Sie dieses Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, idealerweise indem Sie die Themen in unserem Modul [Erste Schritte zur serverseitigen Webprogrammierung](/de/docs/Learn/Server-side/First_steps) lesen. Allgemeine Programmierkenntnisse und [JavaScript](/de/docs/Web/JavaScript) werden sehr empfohlen, sind aber nicht unbedingt erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Lernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript Guide](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/de/docs/Learn/JavaScript) (Lernen). Die zentralen JavaScript-Sprache und Konzepte sind die gleichen für die serverseitige Entwicklung auf Node.js und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/), die Funktionalität unterstützen, die in browserlosen Umgebungen nützlich ist (z.B. um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und dem DOM.
>
> Dieser Leitfaden bietet einige Informationen über die Arbeit mit Node.js und Express, und es gibt zahlreiche andere hervorragende Ressourcen im Internet und in Büchern — einige davon sind verlinkt in [Wie fange ich mit Node.js an?](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (StackOverflow) und [Was sind die besten Ressourcen zum Lernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Leitfäden

- [Einführung in Express/Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen eine Übersicht darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um dies zu testen).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, da Sie wissen, wofür Express ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das notwendige Wissen vermitteln, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express Tutorial: Die lokale Bibliotheks-Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und bietet einen Überblick über die "lokale Bibliotheks"-Beispiel-Website, die wir in späteren Artikeln weiterentwickeln werden.
- [Express Tutorial Teil 2: Erstellung einer Skelett-Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit seitenbezogenen Routen, Templates/Ansichten und Datenbanken füllen können.
- [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Dann wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_ Website bereitzustellen. Es wird erklärt, wie Objektschema und -modelle deklariert werden, die Hauptfeldtypen und die grundlegende Validierung. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.
- [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Behandlungscode) mit "dummy" Handler-Funktionen für alle Ressourcenziele ein, die wir schließlich auf der _LocalLibrary_ Website benötigen werden. Am Ende haben wir eine modulare Struktur für unseren Routenbearbeitungscode, die wir in den folgenden Artikeln mit echten Handlerfunktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt.
- [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind jetzt bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _LocalLibrary_ Website anzeigen. Die Seiten werden eine Startseite enthalten, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Auf dem Weg dorthin werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und der Verwendung von Templates sammeln.
- [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn/Forms) in Express arbeiten, indem Sie Pug verwenden, und insbesondere wie Sie Formulare schreiben, um Dokumente in der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express Tutorial Teil 7: Bereitstellung für die Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_ Website erstellt haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie vom Bibliothekspersonal und den Mitgliedern über das Internet erreicht werden kann. Dieser Artikel gibt einen Überblick darüber, wie Sie einen Host finden können, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website bereit für die Produktion zu machen.

## Weitere Tutorials hinzufügen

Alle bestehenden Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, könnten einige weitere interessante Themen folgende sein:

- Verwendung von Sitzungen.
- Benutzer-Authentifizierung.
- Benutzer-Autorisierung und -Berechtigungen.
- Testen einer Express-Webanwendung.
- Web-Sicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre auch eine wunderbare Ergänzung!
