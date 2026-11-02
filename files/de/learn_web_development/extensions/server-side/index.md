---
title: Serverseitige Website-Programmierung
short-title: Serverseitige Websites
slug: Learn_web_development/Extensions/Server-side
l10n:
  sourceCommit: d50a52075711e21da27bce5ee24f6334b56cf0f3
---

Das Thema **_Dynamische Websites_** – **Serverseitige Programmierung** umfasst eine Reihe von Modulen, die zeigen, wie Sie dynamische Websites erstellen: Websites, die als Antwort auf HTTP-Anfragen individuell zugeschnittene Informationen bereitstellen. Die Module bieten eine allgemeine Einführung in die serverseitige Programmierung sowie Tutorials für Einsteiger, die zeigen, wie Sie mit den Web-Frameworks Django (Python) und Express (Node.js/JavaScript) einfache Anwendungen erstellen.

Die meisten großen Websites verwenden serverseitige Technologien, um Daten bei Bedarf dynamisch anzuzeigen. Stellen Sie sich beispielsweise vor, wie viele Produkte auf Amazon angeboten und wie viele Beiträge auf Facebook veröffentlicht wurden. All diese Inhalte auf unterschiedlichen statischen Seiten anzuzeigen, wäre äußerst ineffizient. Stattdessen zeigen solche Websites statische Vorlagen an (erstellt mit [HTML](/de/docs/Learn_web_development/Core/Structuring_content), [CSS](/de/docs/Learn_web_development/Core/Styling_basics) und [JavaScript](/de/docs/Learn_web_development/Core/Scripting)) und aktualisieren die darin angezeigten Daten bei Bedarf dynamisch – etwa wenn Sie auf Amazon ein anderes Produkt ansehen möchten.

In der modernen Webentwicklung ist es sehr empfehlenswert, sich mit der serverseitigen Entwicklung vertraut zu machen.

## Voraussetzungen

Der Einstieg in die serverseitige Programmierung ist in der Regel einfacher als der Einstieg in die clientseitige Entwicklung. Dynamische Websites führen häufig viele sehr ähnliche Vorgänge aus (Daten aus einer Datenbank abrufen und auf einer Seite anzeigen, von Benutzern eingegebene Daten validieren und in einer Datenbank speichern, Benutzerberechtigungen prüfen und Benutzer anmelden usw.). Außerdem werden sie mit Web-Frameworks erstellt, die diese und andere häufige Aufgaben eines Webservers vereinfachen.

Grundkenntnisse in Programmierkonzepten (oder einer bestimmten Programmiersprache) sind hilfreich, aber nicht unbedingt erforderlich. Ebenso wenig sind umfassende Kenntnisse in der clientseitigen Programmierung notwendig. Grundkenntnisse helfen Ihnen jedoch bei der Zusammenarbeit mit den Entwicklern, die das clientseitige „Front-End“ Ihrer Website erstellen.

Sie sollten verstehen, „wie das Web funktioniert“. Wir empfehlen Ihnen, zunächst die folgenden Module zu lesen:

- [Einrichtung der Entwicklungsumgebung](/de/docs/Learn_web_development/Getting_started/Environment_setup)
- [Webstandards](/de/docs/Learn_web_development/Getting_started/Web_standards)

Mit diesem Grundverständnis sind Sie bereit, die Module in diesem Abschnitt durchzuarbeiten.

## Module

Dieses Thema umfasst die folgenden Module. Beginnen Sie mit dem ersten Modul. Anschließend können Sie eines der beiden folgenden Module bearbeiten, die zeigen, wie Sie mit zwei weitverbreiteten serverseitigen Programmiersprachen und passenden Web-Frameworks arbeiten.

- [Erste Schritte bei der serverseitigen Website-Programmierung](/de/docs/Learn_web_development/Extensions/Server-side/First_steps)
  - : Dieses Modul bietet technologieunabhängige Informationen zur serverseitigen Website-Programmierung. Es beantwortet Fragen wie „Was ist das?“, „Wie unterscheidet sie sich von der clientseitigen Programmierung?“ und „Warum ist sie nützlich?“. Außerdem stellt es einige der beliebtesten serverseitigen Web-Frameworks vor und gibt Hinweise zur Auswahl des passenden Frameworks für Ihre Website. Abschließend bietet es eine Einführung in die Sicherheit von Webservern.
- [Django-Web-Framework (Python)](/de/docs/Learn_web_development/Extensions/Server-side/Django)
  - : Django ist ein äußerst beliebtes und funktionsreiches serverseitiges Web-Framework, das in Python geschrieben ist. Das Modul erklärt, warum Django ein so gutes Web-Framework ist, wie Sie eine Entwicklungsumgebung einrichten und wie Sie damit häufige Aufgaben erledigen.
- [Express-Web-Framework (Node.js/JavaScript)](/de/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs)
  - : Express ist ein beliebtes Web-Framework, das in JavaScript geschrieben ist und in der Node.js-Laufzeitumgebung ausgeführt wird. Das Modul erklärt einige der wichtigsten Vorteile dieses Frameworks und zeigt, wie Sie Ihre Entwicklungsumgebung einrichten sowie häufige Aufgaben bei der Webentwicklung und Bereitstellung erledigen.

## Siehe auch

- [Node-Server ohne Framework](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework)
  - : Dieser Artikel zeigt, wie Sie mit reinem Node.js einen einfachen Server für statische Dateien erstellen, wenn Sie kein Framework verwenden möchten.
- [Server-MIME-Typen richtig konfigurieren](/de/docs/Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types)
  - : Es ist wichtig, Ihren Server so zu konfigurieren, dass er die richtigen {{Glossary("MIME_type", "MIME-Typen")}} (auch Medientypen oder Inhaltstypen genannt) an Browser sendet. So können Browser die Inhalte korrekt verarbeiten und anzeigen.
    Außerdem verhindert dies, dass sich schädliche Inhalte als harmlose Inhalte ausgeben.
- [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess)
  - : Mit Apache-.htaccess-Dateien können Benutzer die Verzeichnisse des Webservers konfigurieren, über die sie Kontrolle haben, ohne die Hauptkonfigurationsdatei zu ändern.
