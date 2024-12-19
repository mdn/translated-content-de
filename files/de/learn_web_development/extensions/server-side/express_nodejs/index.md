---
title: Express Web Framework (Node.js/JavaScript)
slug: Learn_web_development/Extensions/Server-side/Express_Nodejs
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}

Express ist ein beliebtes, unvoreingenommenes Web-Framework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Dieses Modul erklärt einige der wichtigsten Vorteile des Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Webentwicklungs- und Bereitstellungsaufgaben ausführen.

## Voraussetzungen

Bevor Sie mit diesem Modul beginnen, sollten Sie verstehen, was serverseitige Webprogrammierung und Web-Frameworks sind, idealerweise durch das Lesen der Themen in unserem Modul [Erste Schritte der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps). Allgemeine Kenntnisse über Programmierkonzepte und [JavaScript](/de/docs/Web/JavaScript) werden wärmstens empfohlen, sind jedoch nicht zwingend notwendig, um die Kernkonzepte zu verstehen.

> [!NOTE]
> Diese Website hat viele nützliche Ressourcen, um JavaScript _im Kontext der clientseitigen Entwicklung_ zu lernen: [JavaScript](/de/docs/Web/JavaScript), [JavaScript Leitfaden](/de/docs/Web/JavaScript/Guide), [JavaScript-Grundlagen](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity), [JavaScript](/de/docs/Learn_web_development/Core/Scripting) (Lernen). Die Kernsprache JavaScript und die Konzepte sind für die serverseitige Entwicklung auf Node.js dieselben, und dieses Material wird relevant sein. Node.js bietet [zusätzliche APIs](https://nodejs.org/dist/latest-v10.x/docs/api/), um Funktionalitäten zu unterstützen, die in umgebungslosen Umgebungen nützlich sind (z. B. zur Erstellung von HTTP-Servern und zum Zugriff auf das Dateisystem), unterstützt jedoch keine JavaScript-APIs für Arbeiten mit dem Browser und dem DOM.
>
> Diese Artikelserie bietet einige Informationen über das Arbeiten mit Node.js und Express, und es gibt viele andere hervorragende Ressourcen im Internet und in Büchern — einige davon verlinkt von [Wie fange ich mit Node.js an?](https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js/5511507) (Stack Overflow) und [Was sind die besten Ressourcen für das Lernen von Node.js?](https://www.quora.com/What-is-the-greatest-resource-for-learning-Node-js-for-a-newbie) (Quora).

## Tutorials

- [Einführung in Express/Node](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)
  - : In diesem ersten Express-Artikel beantworten wir die Fragen "Was ist Node?" und "Was ist Express?" und geben Ihnen einen Überblick darüber, was das Express-Web-Framework besonders macht. Wir werden die Hauptmerkmale skizzieren und Ihnen einige der Hauptbausteine einer Express-Anwendung zeigen (auch wenn Sie an diesem Punkt noch keine Entwicklungsumgebung haben, um es zu testen).
- [Einrichten einer Node (Express) Entwicklungsumgebung](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/development_environment)
  - : Nun, da Sie wissen, wofür Express gedacht ist, zeigen wir Ihnen, wie Sie eine Node/Express-Entwicklungsumgebung unter Windows, Linux (Ubuntu) und macOS einrichten und testen. Unabhängig davon, welches gebräuchliche Betriebssystem Sie verwenden, sollte Ihnen dieser Artikel das nötige Wissen vermitteln, um mit der Entwicklung von Express-Anwendungen zu beginnen.
- [Express Tutorial: Die Local Library-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : Der erste Artikel in unserer praktischen Tutorial-Serie erklärt, was Sie lernen werden und gibt einen Überblick über die "Local Library"-Beispielwebsite, die wir in den folgenden Artikeln durchgehen und weiterentwickeln werden.
- [Express Tutorial Teil 2: Erstellen einer Skeleton-Website](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/skeleton_website)
  - : Dieser Artikel zeigt, wie Sie ein "Skeleton"-Websiteprojekt erstellen können, das Sie dann mit seiten-spezifischen Routen, Templates/Ansichten und Datenbanken füllen können.
- [Express Tutorial Teil 3: Verwendung einer Datenbank (mit Mongoose)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/mongoose)
  - : Dieser Artikel führt kurz in Datenbanken für Node/Express ein. Anschließend wird gezeigt, wie wir [Mongoose](https://mongoosejs.com/) verwenden können, um Datenbankzugriff für die _LocalLibrary_-Website bereitzustellen. Es wird erklärt, wie Objektschemata und Modelle deklariert werden, die wichtigsten Feldtypen und die grundlegende Validierung. Außerdem wird kurz gezeigt, wie Sie auf Modelldaten zugreifen können.
- [Express Tutorial Teil 4: Routen und Controller](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/routes)
  - : In diesem Tutorial richten wir Routen (URL-Verarbeitungscode) mit "Dummy"-Handler-Funktionen für alle Ressourcen-Endpunkte ein, die wir letztendlich auf der _LocalLibrary_-Website benötigen werden. Am Ende haben wir eine modulare Struktur für unseren Routenerstellungscode, die wir in den folgenden Artikeln mit echten Handler-Funktionen erweitern können. Außerdem werden wir ein gutes Verständnis dafür haben, wie man modulare Routen mit Express erstellt.
- [Express Tutorial Teil 5: Bibliotheksdaten anzeigen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Displaying_data)
  - : Wir sind nun bereit, die Seiten hinzuzufügen, die die Bücher und andere Daten der _LocalLibrary_-Website anzeigen. Die Seiten werden eine Startseite beinhalten, die zeigt, wie viele Datensätze wir von jedem Modelltyp haben, sowie Listen- und Detailseiten für alle unsere Modelle. Dabei werden wir praktische Erfahrung im Abrufen von Datensätzen aus der Datenbank und der Nutzung von Templates sammeln.
- [Express Tutorial Teil 6: Arbeiten mit Formularen](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/forms)
  - : In diesem Tutorial zeigen wir Ihnen, wie Sie mit [HTML Forms](/de/docs/Learn_web_development/Extensions/Forms) in Express arbeiten, unter Verwendung von Pug, und insbesondere wie Sie Formulare schreiben, um Dokumente in der Datenbank zu erstellen, zu aktualisieren und zu löschen.
- [Express Tutorial Teil 7: Bereitstellung in der Produktion](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/deployment)
  - : Nachdem Sie eine großartige _LocalLibrary_-Website erstellt haben, möchten Sie diese auf einem öffentlichen Webserver installieren, damit sie von Bibliothekspersonal und Mitgliedern über das Internet zugänglich ist. Dieser Artikel bietet einen Überblick darüber, wie Sie einen Host für die Bereitstellung Ihrer Website finden und was Sie tun müssen, um Ihre Site für die Produktion bereit zu machen.

## Weitere Tutorials hinzufügen

Alle vorhandenen Tutorials sind oben aufgeführt, aber wenn Sie dieses Modul erweitern möchten, könnten einige andere interessante Themen sein:

- Verwendung von Sitzungen.
- Benutzerauthentifizierung.
- Benutzerautorisierung und -berechtigungen.
- Testen einer Express-Webanwendung.
- Websicherheit für Express-Webanwendungen.

Eine Bewertung für das Modul wäre ebenfalls eine großartige Ergänzung!

{{NextMenu("Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction", "Learn_web_development/Extensions/Server-side/Express_Nodejs")}}
