---
title: Server-seitige Website-Programmierung
short-title: Server-seitige Websites
slug: Learn_web_development/Extensions/Server-side
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Das Thema **_Dynamische Websites_** – **Server-seitige Programmierung** ist eine Serie von Modulen, die zeigen, wie man dynamische Websites erstellt; Websites, die auf HTTP-Anfragen maßgeschneiderte Informationen liefern. Die Module bieten eine allgemeine Einführung in die server-seitige Programmierung sowie speziell auf Anfänger ausgerichtete Tutorials zur Nutzung der Web-Frameworks Django (Python) und Express (Node.js/JavaScript) zur Erstellung grundlegender Anwendungen.

Die meisten großen Websites verwenden eine Art server-seitige Technologie, um Daten nach Bedarf dynamisch anzuzeigen. Stellen Sie sich zum Beispiel vor, wie viele Produkte auf Amazon verfügbar sind, und wie viele Beiträge auf Facebook veröffentlicht wurden. All dies mit unterschiedlichen statischen Seiten anzuzeigen, wäre äußerst ineffizient. Stattdessen zeigen solche Seiten statische Vorlagen (erstellt mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting)) und aktualisieren dann die innerhalb dieser Vorlagen angezeigten Daten dynamisch, wenn nötig, wie zum Beispiel, wenn Sie ein anderes Produkt auf Amazon ansehen möchten.

Im modernen Webentwicklungsumfeld ist es sehr empfehlenswert, sich mit der server-seitigen Entwicklung zu befassen.

## Voraussetzungen

Der Einstieg in die server-seitige Programmierung ist in der Regel einfacher als die client-seitige Entwicklung, da dynamische Websites dazu neigen, viele sehr ähnliche Operationen auszuführen (Abrufen von Daten aus einer Datenbank und Anzeigen auf einer Seite, Validieren von Benutzerdaten und Speichern in einer Datenbank, Überprüfen von Benutzerberechtigungen und Einloggen von Benutzern etc.), und mithilfe von Web-Frameworks konstruiert werden, die diese und andere gängige Webserver-Operationen einfach machen.

Grundkenntnisse in Programmierkonzepten (oder einer bestimmten Programmiersprache) sind nützlich, aber nicht zwingend erforderlich. Ebenso ist Fachwissen in der client-seitigen Codierung nicht notwendig, aber Grundkenntnisse werden Ihnen helfen, besser mit den Entwicklern zu arbeiten, die Ihre client-seitige Web-„Front-End“ erstellen.

Sie müssen verstehen, „wie das Web funktioniert“. Wir empfehlen, dass Sie zuerst die folgenden Themen lesen:

- [Was ist ein Webserver](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Welche Software benötige ich, um eine Website zu erstellen?](/de/docs/Learn_web_development/Howto/Tools_and_setup/What_software_do_I_need)
- [Wie lädt man Dateien auf einen Webserver hoch?](/de/docs/Learn_web_development/Howto/Tools_and_setup/Upload_files_to_a_web_server)

Mit diesem Grundverständnis sind Sie bereit, die Module in diesem Abschnitt durchzuarbeiten.

## Module

Dieses Thema enthält die folgenden Module. Sie sollten mit dem ersten Modul beginnen und dann eines der folgenden Module durcharbeiten, die zeigen, wie Sie mit zwei sehr beliebten server-seitigen Sprachen mithilfe geeigneter Web-Frameworks arbeiten.

- [Server-seitige Website-Programmierung: Erste Schritte](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : Dieses Modul liefert technologieunabhängige Informationen zur server-seitigen Website-Programmierung, wie „Was ist das?“, „Wie unterscheidet es sich von der client-seitigen Programmierung?“ und „Warum ist es nützlich?“. Dieses Modul skizziert auch einige der beliebtesten server-seitigen Web-Frameworks und gibt Hinweise zur Auswahl des besten für Ihre Seite. Schließlich wird eine Einführung in die Sicherheit von Webservern gegeben.
- [Django Web-Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django ist ein äußerst beliebtes und vollständig ausgestattetes server-seitiges Web-Framework, geschrieben in Python. Das Modul erklärt, warum Django ein so gutes Web-Server-Framework ist, wie man eine Entwicklungsumgebung einrichtet und wie man gängige Aufgaben damit durchführt.
- [Express Web-Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express ist ein beliebtes Web-Framework, geschrieben in JavaScript und im Node.js-Laufzeitumfeld gehostet. Das Modul erklärt einige der Hauptvorteile dieses Frameworks, wie Sie Ihre Entwicklungsumgebung einrichten und wie Sie gängige Web-Entwicklungs- und -Bereitstellungsaufgaben ausführen.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : Dieser Artikel bietet einen einfachen statischen Dateiserver, gebaut mit reinem Node.js, für diejenigen, die kein Framework verwenden möchten.
- [Server-MIME-Typen korrekt konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
  - : Das Konfigurieren Ihres Servers, um die richtigen {{Glossary("MIME_type", "MIME-Typen")}} (auch als Medientypen oder Inhaltstypen bekannt) an Browser zu senden, ist wichtig, damit Browser den Inhalt korrekt verarbeiten und anzeigen können. Es ist auch wichtig, um zu verhindern, dass bösartiger Inhalt als harmloser Inhalt getarnt wird.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)
  - : Apache .htaccess-Dateien ermöglichen es Benutzern, Verzeichnisse des Webservers, den sie kontrollieren, zu konfigurieren, ohne die Hauptkonfigurationsdatei zu ändern.
