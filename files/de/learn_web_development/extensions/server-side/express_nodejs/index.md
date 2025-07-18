---
title: Express Web-Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
l10n:
  sourceCommit: 8443cb34d9944d8eb8e2c5add598bec26ed6d21f
---

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}

Express ist ein beliebtes, unvoreingenommenes Web-Framework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der Hauptvorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Aufgaben in der Webentwicklung und Bereitstellung ausführen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitiges Webprogrammierung und Web-Frameworks sind, idealerweise durch das Lesen der Themen in unserem Modul [Erste Schritte zur Programmierung von serverseitigen Websites](/de/docs/Learn_web_development/Extensions/Server-side/First_steps). Allgemeine Kenntnisse von Programmierkonzepten und [JavaScript](/de/docs/Web/JavaScript) werden dringend empfohlen, sind aber nicht zwingend erforderlich, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Erlernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/de/docs/Learn_web_development/Core/Scripting) (Lernen). Die Kernsprache und die Konzepte von JavaScript sind dieselben für die serverseitige Entwicklung auf Node.js und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) zur Unterstützung von Funktionen, die in browserlosen Umgebungen nützlich sind (z.B. um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und dem DOM.
>
> Diese Artikelreihe wird einige Informationen über die Arbeit mit Node.js und Express bereitstellen, und es gibt zahlreiche weitere ausgezeichnete Ressourcen im Internet und in Büchern — einige davon sind verlinkt von [Wie fange ich mit Node.js an?](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) und [Was sind die besten Ressourcen zum Erlernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Tutorials

- [Einführung in Express/Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir werden die Hauptmerkmale skizzieren und Ihnen einige der Hauptbausteine einer Express-Anwendung zeigen (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie es testen können).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, wo Sie wissen, wofür Express verwendet wird, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das geben, was Sie brauchen, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden, und gibt einen Überblick über die Beispiel-Website "Local Library", die wir in den folgenden Artikeln behandeln und weiterentwickeln werden.
- [Express-Tutorial Teil 2: Erstellen einer Gerüst-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Gerüst"-Website-Projekt erstellen können, das Sie dann mit standortspezifischen Routen, Vorlagen/Ansichten und Datenbanken füllen können.
- [Express-Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Danach wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_-Website bereitzustellen. Es wird erklärt, wie Objektschema und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.
- [Express-Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-handhabungscode) mit "Dummy"-Handlerfunktionen für alle Ressourcenziele ein, die wir schließlich auf der _LocalLibrary_-Website benötigen werden. Nach Abschluss haben wir eine modulare Struktur für unseren Routenhandhabungscode, die wir in den folgenden Artikeln mit tatsächlichen Handlerfunktionen erweitern können. Wir werden auch ein sehr gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt.
- [Express-Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind jetzt bereit, die Seiten hinzuzufügen, die die Bücher der _LocalLibrary_-Website und andere Daten anzeigen. Die Seiten werden eine Startseite enthalten, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, und Listen- und Detailseiten für alle unsere Modelle. Dabei werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und in der Verwendung von Vorlagen gewinnen.
- [Express-Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Express arbeiten, unter Verwendung von Pug, und insbesondere, wie Sie Formulare schreiben, um Dokumente in der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express-Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_-Website erstellt haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet abgerufen werden kann. Dieser Artikel gibt einen Überblick darüber, wie Sie möglicherweise einen Host finden, um Ihre Website bereitzustellen, und was Sie tun müssen, um Ihre Website für die Produktion bereit zu machen.

## Weitere Tutorials hinzufügen

Alle vorhandenen Tutorials sind oben aufgelistet, aber wenn Sie dieses Modul erweitern möchten, sind einige andere interessante Themen, die Sie abdecken könnten:

- Verwendung von Sessions.
- Benutzer-Authentifizierung.
- Benutzer-Autorisierung und Berechtigungen.
- Testen einer Express-Webanwendung.
- Web-Sicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine wunderbare Ergänzung!

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}
