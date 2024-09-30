---
title: Server-side-Website-Programmierung
slug: Learn/Server-side
l10n:
  sourceCommit: 8184fa218341dbb193ce6adaa1240c89fae045ec
---

{{LearnSidebar}}

Das Thema **_Dynamische Websites_** – **Server-seitige Programmierung** ist eine Reihe von Modulen, die zeigen, wie man dynamische Websites erstellt; Websites, die maßgeschneiderte Informationen als Antwort auf HTTP-Anfragen liefern. Die Module bieten eine allgemeine Einführung in die serverseitige Programmierung sowie spezifische Einsteiger-Leitfäden zur Nutzung der Web-Frameworks Django (Python) und Express (Node.js/JavaScript) zur Erstellung von grundlegenden Anwendungen.

Die meisten großen Websites verwenden eine Art von serverseitiger Technologie, um Daten dynamisch anzuzeigen, wie erforderlich. Stellen Sie sich vor, wie viele Produkte auf Amazon verfügbar sind und wie viele Beiträge auf Facebook geschrieben wurden. All diese mit verschiedenen statischen Seiten anzuzeigen, wäre äußerst ineffizient. Stattdessen zeigen solche Seiten statische Vorlagen an (erstellt mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript)) und aktualisieren die in diesen Vorlagen angezeigten Daten bei Bedarf dynamisch, z. B. wenn Sie ein anderes Produkt auf Amazon ansehen möchten.

In der modernen Welt der Webentwicklung wird das Lernen über serverseitige Entwicklung dringend empfohlen.

## Lernpfad

Der Einstieg in die serverseitige Programmierung ist normalerweise einfacher als die Entwicklung auf der Client-Seite, da dynamische Websites dazu tendieren, viele sehr ähnliche Operationen durchzuführen (Abrufen von Daten aus einer Datenbank und Anzeigen in einer Seite, Validieren von Benutzereingaben und Speichern in einer Datenbank, Überprüfen von Benutzerberechtigungen und Anmelden von Benutzern usw.) und mit Web-Frameworks konstruiert werden, die diese und andere gängige Webserver-Operationen erleichtern.

Grundkenntnisse in Programmierkonzepten (oder in einer bestimmten Programmiersprache) sind nützlich, aber nicht notwendig. Ebenso ist Fachwissen im Client-seitigen Codieren nicht erforderlich, aber ein grundlegendes Wissen wird Ihnen helfen, besser mit den Entwicklern zusammenzuarbeiten, die Ihr Client-seitiges Web-"Frontend" erstellen.

Sie müssen verstehen, "wie das Internet funktioniert". Wir empfehlen Ihnen, zuerst die folgenden Themen zu lesen:

- [Was ist ein Webserver](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Welche Software benötige ich, um eine Website zu erstellen?](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- [Wie lädt man Dateien auf einen Webserver hoch?](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server)

Mit diesem Grundverständnis sind Sie bereit, die Module in diesem Abschnitt durchzuarbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen und dann mit einem der folgenden Module weitermachen, die zeigen, wie man mit zwei sehr populären serverseitigen Sprachen unter Verwendung geeigneter Web-Frameworks arbeitet.

- [Erste Schritte mit der serverseitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps)
  - : Dieses Modul bietet technologieunabhängige Informationen über die serverseitige Website-Programmierung, wie z.B. "Was ist das?", "Wie unterscheidet es sich von der Client-seitigen Programmierung?" und "Warum ist es nützlich?". Dieses Modul skizziert auch einige der populärsten serverseitigen Web-Frameworks und gibt Hinweise darauf, wie man das beste für Ihre Website auswählt. Schließlich wird eine Einführung in die Webserver-Sicherheit geboten.
- [Django Web-Framework (Python)](/de/docs/Learn/Server-side/Django)
  - : Django ist ein äußerst populäres und vollständig ausgestattetes serverseitiges Web-Framework, geschrieben in Python. Das Modul erklärt, warum Django ein so gutes Webserver-Framework ist, wie man eine Entwicklungsumgebung einrichtet und wie man mit ihr gängige Aufgaben durchführt.
- [Express Web-Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
  - : Express ist ein beliebtes Web-Framework, geschrieben in JavaScript und gehostet innerhalb der Node.js-Laufzeitumgebung. Das Modul erklärt einige der Hauptvorteile dieses Frameworks, wie man Ihre Entwicklungsumgebung einrichtet und wie man gängige Webentwicklungs- und Bereitstellungsaufgaben durchführt.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn/Server-side/Node_server_without_framework)
  - : Dieser Artikel bietet einen einfachen statischen Dateiserver, der mit reinem Node.js erstellt wurde, für diejenigen unter Ihnen, die kein Framework verwenden möchten.
- [Korrekte Konfiguration von Server-MIME-Typen](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : Die Konfiguration Ihres Servers zum Senden der korrekten [MIME-Typen](/de/docs/Glossary/MIME_type) (auch bekannt als Medientypen oder Inhaltstypen) an Browser ist wichtig, damit Browser den Inhalt ordnungsgemäß verarbeiten und anzeigen können. Es ist auch wichtig, um zu verhindern, dass bösartiger Inhalt als harmloser Inhalt getarnt wird.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess)
  - : Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.
