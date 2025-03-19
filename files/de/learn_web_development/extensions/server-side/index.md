---
title: Server-seitige Website-Programmierung
short-title: Server-seitige Websites
slug: Learn_web_development/Extensions/Server-side
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

Das **_Dynamische Websites_** – **Server-seitige Programmierung**-Thema ist eine Reihe von Modulen, die zeigen, wie man dynamische Websites erstellt; Websites, die maßgeschneiderte Informationen als Antwort auf HTTP-Anfragen liefern. Die Module bieten eine allgemeine Einführung in die serverseitige Programmierung sowie spezielle Tutorials für Anfänger, wie man die Web-Frameworks Django (Python) und Express (Node.js/JavaScript) verwendet, um grundlegende Anwendungen zu erstellen.

Die meisten großen Websites nutzen irgendeine Art von serverseitiger Technologie, um Daten dynamisch anzuzeigen. Stellen Sie sich beispielsweise vor, wie viele Produkte auf Amazon verfügbar sind und wie viele Beiträge auf Facebook geschrieben wurden. All dies mit verschiedenen statischen Seiten darzustellen wäre extrem ineffizient. Stattdessen zeigen solche Seiten statische Templates (erstellt mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting)) an und aktualisieren dann dynamisch die in diesen Templates angezeigten Daten bei Bedarf, wie zum Beispiel, wenn Sie ein anderes Produkt auf Amazon ansehen möchten.

Im modernen Web-Entwicklungsumfeld wird das Lernen über serverseitige Entwicklung dringend empfohlen.

## Voraussetzungen

Der Einstieg in die serverseitige Programmierung ist im Allgemeinen einfacher als die clientseitige Entwicklung, da dynamische Websites dazu neigen, viele sehr ähnliche Operationen auszuführen (Daten aus einer Datenbank abzurufen und auf einer Seite anzuzeigen, Benutzereingaben zu validieren und in einer Datenbank zu speichern, Benutzerberechtigungen zu überprüfen und Benutzer anzumelden usw.), und mit Web-Frameworks konstruiert werden, die diese und andere gängige Webserver-Operationen erleichtern.

Grundkenntnisse in Programmierkonzepten (oder in einer bestimmten Programmiersprache) sind nützlich, aber nicht zwingend erforderlich. Ebenso ist keine Expertise in der clientseitigen Codierung erforderlich, aber ein grundlegendes Wissen wird Ihnen helfen, besser mit den Entwicklern zu arbeiten, die Ihr clientseitiges Web-"Front End" erstellen.

Sie müssen verstehen, "wie das Web funktioniert". Wir empfehlen, dass Sie zuerst die folgenden Themen lesen:

- [Was ist ein Webserver?](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Welche Software benötige ich, um eine Website zu erstellen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [Wie laden Sie Dateien auf einen Webserver hoch?](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

Mit diesem grundlegenden Verständnis sind Sie bereit, sich durch die Module in diesem Abschnitt zu arbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen und dann zu einem der folgenden Module übergehen, die zeigen, wie man mit zwei sehr beliebten serverseitigen Sprachen unter Verwendung geeigneter Web-Frameworks arbeitet.

- [Erste Schritte zur serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : Dieses Modul bietet technologieneutrale Informationen über die serverseitige Website-Programmierung, wie zum Beispiel "Was ist das?", "Wie unterscheidet es sich von der clientseitigen Programmierung?" und "Warum ist es nützlich?". Dieses Modul skizziert auch einige der populäreren serverseitigen Web-Frameworks und gibt Ratschläge zur Auswahl des besten für Ihre Seite. Abschließend wird eine Einführung in die Sicherheit von Webservern gegeben.
- [Django Web Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django ist ein extrem beliebtes und vollständig ausgestattetes serverseitiges Web-Framework, geschrieben in Python. Das Modul erklärt, warum Django ein so gutes Webserver-Framework ist, wie man eine Entwicklungsumgebung einrichtet und wie man gängige Aufgaben damit ausführt.
- [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express ist ein beliebtes Web-Framework, geschrieben in JavaScript und in der Node.js-Laufzeitumgebung gehostet. Das Modul erklärt einige der Hauptvorteile dieses Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Webentwicklungs- und Bereitstellungsaufgaben ausführen.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : Dieser Artikel bietet einen einfachen statischen Dateiserver, der mit reinem Node.js erstellt wurde, für diejenigen von Ihnen, die kein Framework verwenden möchten.
- [Richtige Konfiguration von Server-MIME-Typen](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
  - : Es ist wichtig, dass Ihr Server die korrekten {{Glossary("MIME_type", "MIME-Typen")}} (auch bekannt als Medientypen oder Inhaltstypen) an Browser sendet, damit diese den Inhalt ordnungsgemäß verarbeiten und anzeigen können. Es ist auch wichtig, um zu verhindern, dass bösartiger Inhalt als harmloser Inhalt getarnt wird.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)
  - : Apache-.htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie steuern, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.
