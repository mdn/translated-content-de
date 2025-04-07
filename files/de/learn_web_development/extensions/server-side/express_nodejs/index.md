---
title: Express-Web-Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
l10n:
  sourceCommit: 8e3138000f0d4673cfa595830a5362b12e3c8180
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}

Express ist ein beliebtes, unpragmatisches Web-Framework, das in JavaScript geschrieben ist und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Webentwicklungs- und Bereitstellungsaufgaben ausführen.

> [!WARNING]
> Die Express-Dokumentation und das Tutorial sind für die Express-Version 4 geschrieben, während die neueste Version Express 5 ist.
> Wir planen, die Dokumentation in der zweiten Hälfte des Jahres 2025 zu aktualisieren.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, idealerweise indem Sie die Themen in unserem Modul [Erste Schritte mit der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps) lesen. Allgemeine Kenntnisse über Programmierkonzepte und [JavaScript](/de/docs/Web/JavaScript) sind sehr zu empfehlen, aber nicht unbedingt notwendig, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website hat viele nützliche Ressourcen zum Erlernen von JavaScript _im Kontext der clientseitigen Entwicklung_: [JavaScript](/de/docs/Web/JavaScript), [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/de/docs/Learn_web_development/Core/Scripting) (lernen). Die Kernsprache und Konzepte von JavaScript sind für die serverseitige Entwicklung bei Node.js dieselben und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/) zur Unterstützung von Funktionalitäten, die in browserlosen Umgebungen nützlich sind (z. B. zum Erstellen von HTTP-Servern und zum Zugriff auf das Dateisystem), unterstützt jedoch keine JavaScript-APIs zur Arbeit mit dem Browser und dem DOM.
>
> Diese Artikelserie wird einige Informationen zur Arbeit mit Node.js und Express bereitstellen, und es gibt zahlreiche andere hervorragende Ressourcen im Internet und in Büchern — einige davon sind verlinkt von [Wie beginne ich mit Node.js] (https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) und [Was sind die besten Ressourcen, um Node.js zu lernen?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Anleitungen

- [Express/Node-Einführung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen „Was ist Node?“ und „Was ist Express?“ und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir geben einen Überblick über die Hauptfunktionen und zeigen Ihnen einige der wichtigsten Bausteine einer Express-Anwendung (obwohl Sie zu diesem Zeitpunkt noch keine Entwicklungsumgebung haben, in der Sie es testen können).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Jetzt, da Sie wissen, wofür Express gedacht ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig davon, welches gängige Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel die notwendigen Informationen geben, um mit der Entwicklung von Express-Apps beginnen zu können.
- [Express Tutorial: Die Local Library Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden und bietet einen Überblick über die Beispiel-Website „Local Library“, mit der wir in den kommenden Artikeln arbeiten und sie weiterentwickeln werden.
- [Express Tutorial Teil 2: Erstellung einer Skelettwebsite](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein „Skelett“-Website-Projekt erstellen können, das Sie dann mit seitenbezogenen Routen, Vorlagen/Ansichten und Datenbanken ausstatten können.
- [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel bietet eine kurze Einführung in Datenbanken für Node/Express. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_ Website bereitzustellen. Es wird erklärt, wie Objektschemas und -modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem werden kurz einige der Hauptmethoden gezeigt, um auf Modelldaten zuzugreifen.
- [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit „Dummy“-Handler-Funktionen für alle Ressourcenendpunkte ein, die wir letztendlich in der _LocalLibrary_ Website benötigen. Am Ende haben wir eine modulare Struktur für unseren Routenbearbeitungscode, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Wir verstehen auch sehr gut, wie man modulare Routen mit Express erstellt.
- [Express Tutorial Teil 5: Anzeigen von Bibliotheksdaten](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : Jetzt sind wir bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _LocalLibrary_ Website anzeigen. Die Seiten werden eine Startseite enthalten, die zeigt, wie viele Einträge wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Dabei gewinnen wir praktische Erfahrung beim Abrufen von Datensätzen aus der Datenbank und beim Verwenden von Vorlagen.
- [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML-Formularen](/de/docs/Learn_web_development/Extensions/Forms) in Express arbeiten können, wobei Pug verwendet wird, insbesondere wie Sie Formulare schreiben, um Dokumente in der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express Tutorial Teil 7: Bereitstellung für die Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)
  - : Jetzt, da Sie eine großartige _LocalLibrary_ Website erstellt haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie möglicherweise einen Hoster für die Bereitstellung Ihrer Website finden könnten und was Sie tun müssen, um Ihre Website für die Produktion vorzubereiten.

## Hinzufügen weiterer Tutorials

Alle bestehenden Tutorials sind oben aufgelistet, aber wenn Sie dieses Modul erweitern möchten, könnten weitere interessante Themen Folgendes umfassen:

- Verwendung von Sitzungen.
- Benutzer-Authentifizierung.
- Benutzer-Autorisierung und -Berechtigungen.
- Testen einer Express-Webanwendung.
- Web-Sicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine wunderbare Ergänzung!

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side")}}
