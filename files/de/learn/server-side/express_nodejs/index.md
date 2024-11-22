---
title: Express-Webframework (Node.js/JavaScript)
slug: Learn/Server-side/Express_Nodejs
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{LearnSidebar}}

Express ist ein beliebtes, unvoreingenommenes Webframework, geschrieben in JavaScript und im Node.js-Laufzeitumfeld gehostet. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Webentwicklungs- und Bereitstellungsaufgaben durchführen können.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Webframeworks sind, idealerweise durch das Lesen der Themen in unserem Modul [Erste Schritte zur serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps). Allgemeine Kenntnisse über Programmierkonzepte und [JavaScript](/de/docs/Web/JavaScript) sind sehr empfehlenswert, aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Lernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/de/docs/Learn/JavaScript) (Lernen). Die Kernsprache JavaScript und die Konzepte sind für die serverseitige Entwicklung auf Node.js die gleichen und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/), um Funktionalitäten zu unterstützen, die in browserlosen Umgebungen nützlich sind (zum Beispiel um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und DOM.
>
> Dieser Leitfaden wird einige Informationen zum Arbeiten mit Node.js und Express bieten, und es gibt zahlreiche weitere ausgezeichnete Ressourcen im Internet und in Büchern — einige davon sind verlinkt in [Wie fange ich mit Node.js an?](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) und [Was sind die besten Ressourcen zum Lernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Leitfäden

- [Einführung in Express/Node](/de/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Webframework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung zur Verfügung haben, um es zu testen).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : Nachdem Sie nun wissen, wofür Express da ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung auf Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig vom verwendeten Betriebssystem sollte Ihnen dieser Artikel das geben, was Sie benötigen, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express-Tutorial: Die Local Library-Website](/de/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel unserer praxisorientierten Tutorialreihe erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispielwebsite "Local Library", die wir in den folgenden Artikeln durchgehen und weiterentwickeln werden.
- [Express-Tutorial Teil 2: Erstellen einer Gerüst-Website](/de/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skelett"-Website-Projekt erstellen können, das Sie dann mit spezifischen Routen, Vorlagen/Ansichten und Datenbanken füllen können.
- [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel bietet eine kurze Einführung in Datenbanken für Node/Express. Dann zeigen wir, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_-Website bereitzustellen. Es wird erklärt, wie Objektschema und -modelle deklariert werden, die wichtigsten Feldtypen und grundlegende Validierung. Außerdem wird kurz gezeigt, auf welche Hauptarten Sie auf Modelldaten zugreifen können.
- [Express-Tutorial Teil 4: Routen und Controller](/de/docs/Learn/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcenendpunkte ein, die für die _LocalLibrary_-Website schließlich benötigt werden. Nach Abschluss haben wir eine modulare Struktur für unseren Routening-Code, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir haben auch ein sehr gutes Verständnis dafür, wie man modulare Routen mit Express erstellt.
- [Express-Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _LocalLibrary_-Website anzeigen. Die Seiten umfassen eine Startseite, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben und Listen- und Detailseiten für alle unsere Modelle. Dabei werden wir praktische Erfahrungen im Abfragen von Datensätzen aus der Datenbank und der Verwendung von Vorlagen sammeln.
- [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML Forms](/de/docs/Learn/Forms) in Express arbeiten, indem Sie Pug verwenden, und insbesondere, wie Sie Formulare schreiben, um Dokumente aus der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express-Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : Nachdem Sie nun eine fantastische _LocalLibrary_-Website erstellt haben, möchten Sie sie auf einem öffentlichen Webserver installieren, damit sie von Bibliotheksmitarbeitern und Mitgliedern über das Internet genutzt werden kann. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host zur Bereitstellung Ihrer Website finden und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

## Hinzufügen weiterer Tutorials

Alle vorhandenen Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, sind einige andere interessante Themen, die behandelt werden könnten:

- Verwendung von Sessions.
- Benutzer-Authentifizierung.
- Benutzer-Autorisierung und Berechtigungen.
- Testen einer Express-Webanwendung.
- Websicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine wunderbare Ergänzung!
