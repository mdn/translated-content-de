---
title: Serverseitige Webprogrammierung
slug: Learn_web_development/Extensions/Server-side
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

Das Thema **_Dynamische Websites_** – **Serverseitige Programmierung** ist eine Serie von Modulen, die zeigen, wie man dynamische Websites erstellt; Websites, die maßgeschneiderte Informationen als Antwort auf HTTP-Anfragen liefern. Die Module bieten eine allgemeine Einführung in die serverseitige Programmierung sowie spezifische Tutorials auf Anfängerniveau, die zeigen, wie man die Web-Frameworks Django (Python) und Express (Node.js/JavaScript) nutzt, um grundlegende Anwendungen zu erstellen.

Die meisten großen Websites verwenden irgendeine Form von serverseitiger Technologie, um Daten bei Bedarf dynamisch anzuzeigen. Stellen Sie sich zum Beispiel vor, wie viele Produkte auf Amazon verfügbar sind, und wie viele Beiträge auf Facebook geschrieben wurden. All dies mit unterschiedlichen statischen Seiten anzuzeigen, wäre extrem ineffizient. Stattdessen zeigen solche Seiten statische Vorlagen (erstellt mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting)) und aktualisieren dann die darin angezeigten Daten dynamisch, wenn es nötig ist, zum Beispiel wenn Sie ein anderes Produkt auf Amazon ansehen möchten.

In der modernen Welt der Webentwicklung ist das Erlernen der serverseitigen Entwicklung sehr empfehlenswert.

## Voraussetzungen

Der Einstieg in die serverseitige Programmierung ist in der Regel einfacher als die Entwicklung auf der Client-Seite, da dynamische Websites dazu neigen, viele sehr ähnliche Operationen auszuführen (Abrufen von Daten aus einer Datenbank und Anzeigen auf einer Seite, Validierung von Benutzereingaben und Speichern in einer Datenbank, Überprüfung von Benutzerberechtigungen und Anmeldung der Benutzer usw.), und mit Web-Frameworks erstellt werden, die diese und andere gängige Webserver-Operationen erleichtern.

Grundkenntnisse in Programmierkonzepten (oder einer bestimmten Programmiersprache) sind nützlich, aber nicht unbedingt erforderlich. Ebenso ist Fachwissen in der Client-seitigen Codierung nicht notwendig, doch grundlegende Kenntnisse werden Ihnen helfen, besser mit den Entwicklern zu arbeiten, die Ihr Client-seitiges Web-"Frontend" erstellen.

Sie müssen verstehen, "wie das Web funktioniert". Wir empfehlen Ihnen, zunächst die folgenden Themen zu lesen:

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Welche Software benötige ich, um eine Website zu erstellen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [Wie laden Sie Dateien auf einen Webserver hoch?](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

Mit diesem grundlegenden Verständnis sind Sie bereit, die Module in diesem Abschnitt durchzuarbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen und dann mit einem der folgenden Module fortfahren, die zeigen, wie Sie mit zwei sehr beliebten serverseitigen Sprachen unter Verwendung geeigneter Web-Frameworks arbeiten können.

- [Erste Schritte in der serverseitigen Webprogrammierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : Dieses Modul bietet technologieunabhängige Informationen über die serverseitige Webprogrammierung, wie "Was ist das?", "Wie unterscheidet es sich von der Client-seitigen Programmierung?" und "Warum ist es nützlich?". Dieses Modul skizziert auch einige der beliebteren serverseitigen Webframeworks und gibt Hinweise, wie man das beste für Ihre Website auswählt. Abschließend wird eine Einführung in die Webserver-Sicherheit gegeben.
- [Django-Web-Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django ist ein extrem populäres und voll ausgestattetes serverseitiges Webframework, das in Python geschrieben ist. Das Modul erklärt, warum Django ein so gutes Webserver-Framework ist, wie man eine Entwicklungsumgebung einrichtet und wie man gängige Aufgaben damit ausführt.
- [Express-Web-Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express ist ein beliebtes Webframework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Das Modul erklärt einige der Hauptvorteile dieses Frameworks, wie man die Entwicklungsumgebung einrichtet und wie man gängige Webentwicklungs- und Bereitstellungsaufgaben ausführt.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : Dieser Artikel bietet einen einfachen statischen Dateiserver, der mit reinem Node.js erstellt wurde, für diejenigen, die kein Framework verwenden möchten.
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
  - : Die Konfiguration Ihres Servers, um die richtigen {{Glossary("MIME_type", "MIME-Typen")}} (auch bekannt als Medientypen oder Inhaltstypen) an Browser zu senden, ist wichtig, damit Browser den Inhalt ordnungsgemäß verarbeiten und anzeigen können.
    Es ist auch wichtig, um zu verhindern, dass schadhafter Inhalt sich als gutartiger Inhalt tarnt.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)
  - : Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie steuern, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.
