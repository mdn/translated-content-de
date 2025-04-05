---
title: Express Web-Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
l10n:
  sourceCommit: 95b3a7c3d7c854feddb769922818f9d5a3abd500
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}

Express ist ein beliebtes, nicht restriktives Web-Framework, das in JavaScript geschrieben ist und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie allgemeine Webentwicklungs- und Bereitstellungsaufgaben durchführen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, idealerweise durch das Lesen der Themen in unserem Modul [Erste Schritte mit der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps). Allgemeinere Kenntnisse von Programmierkonzepten und [JavaScript](/de/docs/Web/JavaScript) sind sehr zu empfehlen, aber nicht wesentlich für das Verständnis der Kernkonzepte.

> [!NOTE]
> Diese Website bietet viele nützliche Ressourcen zum Lernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/de/docs/Learn_web_development/Core/Scripting) (Lernen). Die grundlegende JavaScript-Sprache und -Konzepte sind für die serverseitige Entwicklung mit Node.js dieselben, und dieses Material ist relevant. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) zur Unterstützung von Funktionalitäten, die in browserlosen Umgebungen nützlich sind (z.B. um HTTP-Server zu erstellen und auf das Dateisystem zuzugreifen), unterstützt aber keine JavaScript-APIs zur Arbeit mit dem Browser und DOM.
>
> Diese Artikelreihe bietet einige Informationen über die Arbeit mit Node.js und Express, und es gibt zahlreiche andere hervorragende Ressourcen im Internet und in Büchern — einige davon sind verlinkt unter [Wie fange ich mit Node.js an](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) und [Was sind die besten Ressourcen, um Node.js zu lernen?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Tutorials

- [Express/Node Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir skizzieren die Hauptmerkmale und zeigen Ihnen einige der Hauptbausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, um es zu testen).
- [Einrichtung einer Node (Express) Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, da Sie wissen, wofür Express ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig von dem gängigen Betriebssystem, das Sie verwenden, sollte Ihnen dieser Artikel geben, was Sie brauchen, um mit der Entwicklung von Express-Apps zu beginnen.
- [Express-Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Reihe erklärt, was Sie lernen werden, und bietet einen Überblick über die Beispielwebsite „Local Library“, die wir in den folgenden Artikeln durchgehen und weiterentwickeln werden.
- [Express Tutorial Teil 2: Erstellung einer Skelett-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein „Skelett“-Websiteprojekt erstellen können, das Sie dann mit spezifischen Routen, Vorlagen/Ansichten und Datenbanken füllen können.
- [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_-Website bereitzustellen. Es wird erklärt, wie Objektschemata und -modelle deklariert werden, die Hauptfeldtypen und die grundlegende Validierung. Außerdem werden kurz einige der Hauptmethoden gezeigt, wie Sie auf Modelldaten zugreifen können.
- [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit „Dummy“-Handlerfunktionen für alle Ressourcen-Endpunkte ein, die wir letztendlich auf der _LocalLibrary_-Website benötigen. Nach Abschluss haben wir eine modulare Struktur für unseren Routingsverarbeitungscode, den wir in den folgenden Artikeln mit realen Handlerfunktionen erweitern können. Wir werden auch ein wirklich gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt.
- [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind jetzt bereit, die Seiten hinzuzufügen, die die _LocalLibrary_-Website-Bücher und andere Daten anzeigen. Die Seiten enthalten eine Startseite, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Unterwegs werden wir praktische Erfahrungen im Abrufen von Datensätzen aus der Datenbank und im Verwenden von Vorlagen gewinnen.
- [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Express unter Verwendung von Pug arbeiten und insbesondere, wie Sie Formulare schreiben, um Dokumente in der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express Tutorial Teil 7: Bereitstellung für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_-Website erstellt haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie möglicherweise einen Host für die Bereitstellung Ihrer Website finden und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

## Weitere Tutorials hinzufügen

Alle bestehenden Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, könnten einige andere interessante Themen behandelt werden:

- Verwendung von Sessions.
- Benutzerauthentifizierung.
- Benutzerautorisierung und -berechtigungen.
- Testen einer Express-Webanwendung.
- Websicherheit für Express-Webanwendungen.

Ein Bewertungstest für das Modul wäre ebenfalls eine wunderbare Ergänzung!

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}
