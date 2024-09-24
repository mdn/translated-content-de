---
title: Serverseitige Website-Programmierung
slug: Learn/Server-side
l10n:
  sourceCommit: 8184fa218341dbb193ce6adaa1240c89fae045ec
---

{{LearnSidebar}}

Das Thema **_Dynamische Websites_** – **Serverseitige Programmierung** ist eine Serie von Modulen, die zeigen, wie man dynamische Websites erstellt; Websites, die auf HTTP-Anfragen maßgeschneiderte Informationen liefern. Die Module bieten eine allgemeine Einführung in die serverseitige Programmierung sowie spezifische Leitfäden für Anfänger, die zeigen, wie man die Web-Frameworks Django (Python) und Express (Node.js/JavaScript) verwendet, um grundlegende Anwendungen zu erstellen.

Die meisten großen Websites verwenden irgendeine Art von Servertechnologie, um Daten bei Bedarf dynamisch anzuzeigen. Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind, und wie viele Beiträge auf Facebook geschrieben wurden. All diese über verschiedene statische Seiten anzuzeigen, wäre extrem ineffizient. Stattdessen zeigen solche Seiten statische Vorlagen (erstellt mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript)) an und aktualisieren die darin angezeigten Daten bei Bedarf dynamisch, z.B. wenn Sie ein anderes Produkt auf Amazon ansehen möchten.

In der modernen Welt der Webentwicklung wird empfohlen, sich mit der serverseitigen Entwicklung vertraut zu machen.

## Lernpfad

Der Einstieg in die serverseitige Programmierung ist in der Regel einfacher als die clientseitige Entwicklung, da dynamische Websites dazu neigen, viele sehr ähnliche Operationen durchzuführen (Abrufen von Daten aus einer Datenbank und Anzeigen in einer Seite, Validieren von Benutzerdaten und Speichern in einer Datenbank, Überprüfen von Benutzerberechtigungen und Anmelden von Benutzern, etc.) und mit Web-Frameworks konstruiert sind, die diese und andere häufige Webserver-Operationen erleichtern.

Grundkenntnisse in Programmierkonzepten (oder in einer bestimmten Programmiersprache) sind nützlich, aber nicht zwingend erforderlich. Ebenso ist keine Expertise in clientseitigem Codieren erforderlich, aber ein grundlegendes Wissen wird Ihnen helfen, besser mit den Entwicklern zusammenzuarbeiten, die Ihr clientseitiges Web-"Front-End" erstellen.

Sie müssen verstehen, "wie das Web funktioniert". Wir empfehlen, zuerst die folgenden Themen zu lesen:

- [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Welche Software benötige ich, um eine Website zu erstellen?](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- [Wie lädt man Dateien auf einen Webserver hoch?](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server)

Mit diesem Grundverständnis sind Sie bereit, sich durch die Module in diesem Abschnitt zu arbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen und dann eines der folgenden Module durcharbeiten, die zeigen, wie man mit zwei sehr beliebten serverseitigen Sprachen unter Verwendung geeigneter Web-Frameworks arbeitet.

- [Erste Schritte in der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps)
  - : Dieses Modul bietet technologieunabhängige Informationen über die serverseitige Website-Programmierung, z.B. "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es nützlich?". Dieses Modul skizziert auch einige der populärsten serverseitigen Web-Frameworks und gibt Empfehlungen, wie Sie das Beste für Ihre Website auswählen. Schließlich wird eine Einführung in die Sicherheit von Webservern gegeben.
- [Django Web Framework (Python)](/de/docs/Learn/Server-side/Django)
  - : Django ist ein äußerst beliebtes und voll ausgestattetes serverseitiges Web-Framework, geschrieben in Python. Das Modul erklärt, warum Django ein so gutes Webserver-Framework ist, wie man eine Entwicklungsumgebung einrichtet und wie man gängige Aufgaben damit durchführt.
- [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
  - : Express ist ein populäres Web-Framework, geschrieben in JavaScript und gehostet innerhalb der Node.js-Laufzeitumgebung. Das Modul erklärt einige der Hauptvorteile dieses Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie häufige Webentwicklungs- und Bereitstellungsaufgaben ausführen.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn/Server-side/Node_server_without_framework)
  - : Dieser Artikel bietet einen einfachen statischen Dateiserver, gebaut mit purem Node.js, für diejenigen von Ihnen, die kein Framework verwenden möchten.
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : Die Konfiguration Ihres Servers, um die richtigen {{Glossary("MIME type", "MIME types")}} (auch bekannt als Medientypen oder Inhaltstypen) an Browser zu senden, ist wichtig, damit Browser den Inhalt korrekt verarbeiten und anzeigen können.
    Es ist auch wichtig, um zu verhindern, dass bösartige Inhalte als gutartige Inhalte getarnt werden.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess)
  - : Apache .htaccess-Dateien ermöglichen es Benutzern, die Verzeichnisse des Webservers, die sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.
