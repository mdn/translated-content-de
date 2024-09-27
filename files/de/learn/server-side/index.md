---
title: Server-seitige Website-Programmierung
slug: Learn/Server-side
l10n:
  sourceCommit: 8184fa218341dbb193ce6adaa1240c89fae045ec
---

{{LearnSidebar}}

Das Thema **_Dynamische Websites_** – **Server-seitige Programmierung** ist eine Serie von Modulen, die zeigen, wie man dynamische Websites erstellt; Webseiten, die auf HTTP-Anfragen maßgeschneiderte Informationen liefern. Die Module bieten eine allgemeine Einführung in die server-seitige Programmierung sowie spezifische Leitfäden auf Anfängerniveau zur Nutzung der Web-Frameworks Django (Python) und Express (Node.js/JavaScript), um grundlegende Anwendungen zu erstellen.

Die meisten großen Websites nutzen eine Art von server-seitiger Technologie, um Daten bei Bedarf dynamisch anzuzeigen. Stellen Sie sich zum Beispiel vor, wie viele Produkte auf Amazon verfügbar sind und wie viele Beiträge auf Facebook geschrieben wurden. Alle diese mit unterschiedlichen statischen Seiten darzustellen, wäre äußerst ineffizient. Stattdessen präsentieren solche Seiten statische Vorlagen (erstellt mit [HTML](/de/docs/Learn/HTML), [CSS](/de/docs/Learn/CSS) und [JavaScript](/de/docs/Learn/JavaScript)) und aktualisieren dann dynamisch die in diesen Vorlagen angezeigten Daten, wann immer es nötig ist, z.B. wenn Sie ein anderes Produkt auf Amazon ansehen möchten.

Im modernen Web-Entwicklungsbereich ist das Lernen über server-seitige Entwicklung sehr zu empfehlen.

## Lernpfad

Mit der server-seitigen Programmierung zu beginnen ist normalerweise einfacher als die client-seitige Entwicklung, da dynamische Websites eine Vielzahl sehr ähnlicher Operationen ausführen (Daten aus einer Datenbank abrufen und auf einer Seite anzeigen, Benutzerdaten validieren und in einer Datenbank speichern, Benutzerberechtigungen überprüfen und Benutzer anmelden usw.) und mithilfe von Web-Frameworks erstellt werden, die diese und andere allgemeine Webserver-Operationen erleichtern.

Grundkenntnisse über Programmierkonzepte (oder eine bestimmte Programmiersprache) sind nützlich, aber nicht zwingend erforderlich. Ebenso ist keine Expertise im client-seitigen Codieren erforderlich, aber ein grundlegendes Wissen wird Ihnen helfen, besser mit den Entwicklern zu arbeiten, die Ihre client-seitige Web- "Frontend" erstellen.

Sie müssen verstehen, "wie das Web funktioniert". Wir empfehlen, zunächst die folgenden Themen zu lesen:

- [Was ist ein Webserver?](/de/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server)
- [Welche Software benötige ich, um eine Website zu erstellen?](/de/docs/Learn/Common_questions/Tools_and_setup/What_software_do_I_need)
- [Wie lädt man Dateien auf einen Webserver hoch?](/de/docs/Learn/Common_questions/Tools_and_setup/Upload_files_to_a_web_server)

Mit diesem Grundverständnis sind Sie bereit, die Module in diesem Abschnitt zu bearbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen und dann eines der folgenden Module in Angriff nehmen, die zeigen, wie man mit zwei sehr beliebten server-seitigen Sprachen mit entsprechenden Web-Frameworks arbeitet.

- [Erste Schritte in der server-seitigen Website-Programmierung](/de/docs/Learn/Server-side/First_steps)
  - : Dieses Modul bietet technologie-unabhängige Informationen über server-seitige Website-Programmierung wie "Was ist das?", "Wie unterscheidet es sich von der client-seitigen Programmierung?" und "Warum ist es nützlich?". Dieses Modul skizziert auch einige der populäreren server-seitigen Web-Frameworks und gibt Anleitungen, wie man das beste für Ihre Seite auswählt. Schließlich wird eine Einführung in die Webserversicherheit gegeben.
- [Django Web Framework (Python)](/de/docs/Learn/Server-side/Django)
  - : Django ist ein äußerst beliebtes und voll ausgestattetes server-seitiges Web-Framework, das in Python geschrieben ist. Das Modul erklärt, warum Django ein so gutes Webserver-Framework ist, wie man eine Entwicklungsumgebung einrichtet und wie man damit gängige Aufgaben erledigt.
- [Express Web Framework (Node.js/JavaScript)](/de/docs/Learn/Server-side/Express_Nodejs)
  - : Express ist ein populäres Web-Framework, das in JavaScript geschrieben und innerhalb der Node.js-Laufzeitumgebung gehostet wird. Das Modul erklärt einige der wichtigsten Vorteile dieses Frameworks, wie man seine Entwicklungsumgebung einrichtet und wie man gängige Webentwicklungs- und Bereitstellungsaufgaben durchführt.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn/Server-side/Node_server_without_framework)
  - : Dieser Artikel bietet einen einfachen statischen Dateiserver, der mit reinem Node.js erstellt wurde, für diejenigen unter Ihnen, die kein Framework verwenden möchten.
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn/Server-side/Configuring_server_MIME_types)
  - : Die Konfiguration Ihres Servers, um die richtigen [MIME-Typen](/de/docs/Glossary/MIME_type) (auch bekannt als Medientypen oder Inhaltstypen) an Browser zu senden, ist wichtig, damit Browser den Inhalt korrekt verarbeiten und anzeigen können. Es ist auch wichtig, um zu verhindern, dass bösartige Inhalte als harmlose Inhalte getarnt werden.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess)
  - : Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des von ihnen kontrollierten Webservers zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.
