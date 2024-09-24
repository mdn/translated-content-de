---
title: Server-MIME-Typen richtig konfigurieren
slug: Learn/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{LearnSidebar}}

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder bereitgestellt von Web-Servern oder Webanwendungen. Sie sollen einen Hinweis darauf geben, wie die Inhalte verarbeitet und angezeigt werden sollen.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für Klartext.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, wo eine Benutzeraktion erwartet wird.

Die Standardkonfigurationen von Servern variieren stark und setzen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien mit nicht definierten Inhalts-Typen.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie für unbekannte Inhalts-Typen einen MIME-Typ von `text/plain` oder `application/octet-stream` meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhalts-Typen.

[Nginx](https://nginx.org/) wird `text/plain` melden, wenn Sie keinen Standard-Inhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder den Webservern hinzugefügt werden, kann es vorkommen, dass Webadministratoren die neuen MIME-Typen nicht zur Konfiguration ihres Webservers hinzufügen. Dies ist eine bedeutende Quelle von Problemen für Benutzer von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen beachten.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser versuchen möglicherweise, den richtigen MIME-Typ zu _erraten_. Dies ermöglicht es, dass falsch konfigurierte Webserver und Anwendungen weiterhin für diese Browser funktionieren (aber nicht für andere Browser, die den Standard korrekt umsetzen). Abgesehen davon, dass dies die HTTP-Spezifikation verletzt, ist es aus einigen anderen wesentlichen Gründen eine schlechte Idee:

- Kontrollverlust

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Beispielsweise könnte eine auf Webentwickler ausgerichtete Website bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML zu verarbeiten und anzuzeigen oder als Quellcode. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhalts-Typen, wie ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen normalerweise dahingehend eingeschränkt, welche Aktionen ein Webbrowser ausführen wird, wenn dieser Inhalts-Typ bereitgestellt wird. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest ein Dialogfeld erscheinen lassen, das den Benutzer **fragt**, ob er die Datei herunterladen möchte.

## JavaScript Legacy-MIME-Typen

Wenn Sie nach Informationen über JavaScript-MIME-Typen suchen, könnten Sie auf mehrere MIME-Typen stoßen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen umfassen:

- `application/javascript`
- `application/ecmascript`
- `application/x-ecmascript`
- `application/x-javascript`
- `text/ecmascript`
- `text/javascript1.0`
- `text/javascript1.1`
- `text/javascript1.2`
- `text/javascript1.3`
- `text/javascript1.4`
- `text/javascript1.5`
- `text/x-ecmascript`
- `text/x-javascript`

Obwohl Browser möglicherweise alle diese alternativen MIME-Typen unterstützen, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Siehe [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/MIME_types) für weitere Informationen.

## Anleitung zur Bestimmung des zu setzenden MIME-Typs

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typwert zu ermitteln, der verwendet werden soll, um Ihre Inhalte bereitzustellen.

- Wenn Ihre Inhalte unter Verwendung von kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu sehen, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Sehen Sie im [MIME-Medientypen-Register von IANA](https://www.iana.org/assignments/media-types/media-types.xhtml) nach, das Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie nach der Dateierweiterung in [FILExt](https://filext.com/) oder im [Referenzverzeichnis für Dateierweiterungen](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verknüpft sind. Achten Sie genau darauf, da die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur durch einen Buchstaben unterscheiden.

## Anleitung zur Überprüfung des MIME-Typs empfangener Inhalte

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Extras > Seiteninformationen**, um den Inhaltstyp der von Ihnen aufgerufenen Seite zu erhalten.
  - Sie können auch zu **Extras > Web-Entwickler > Netzwerk** gehen und die Seite neu laden. Die Registerkarte Anfrage gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Durch Klicken auf eine Ressource wird Ihnen alle verfügbare Information inklusive des [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Headers der Seite angezeigt.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwicklertools** und wählen Sie die Registerkarte _Netzwerk_. Laden Sie die Seite neu und wählen Sie die Ressource, die Sie untersuchen möchten. Unter den Headern suchen Sie nach `Content-Type` und es wird der Inhaltstyp der Ressource gemeldet.

- Suchen Sie im Seitenquelltext nach einem `<meta>`-Element, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.

  - Laut den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste der registrierten [MIME-Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die zur Beschreibung der auf dem Web verwendeten Medientypen verwendet wird.

## Anleitung zur Konfiguration Ihres Servers, um die richtigen MIME-Typen zu senden

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den richtigen {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, überprüfen Sie den Abschnitt **_Medientypen und Zeichencodierungen_** von [Apache-Konfiguration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess) für Beispiele zu verschiedenen Dokumenttypen und deren entsprechenden MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein Äquivalent-Tool zu `.htaccess` hat, so dass alle Änderungen in die Hauptkonfigurationsdatei aufgenommen werden müssen.
- Wenn Sie ein serverseitiges Skript oder ein Framework zur Inhaltserzeugung verwenden, hängt die Art und Weise, den Inhaltstyp anzugeben, vom verwendeten Tool ab. Überprüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, besteht das gewünschte Ergebnis darin, einen Antwort-Header mit dem Namen {{httpheader("Content-Type")}} zu setzen, gefolgt von einem Doppelpunkt und einem Leerzeichen, gefolgt von einem MIME-Typ. Hochwertige Umgebungen erlauben es oft, solche Header beim Erstellen der Seite festzulegen. Beispielsweise könnten Sie in einer PHP-Umgebung den Antwort-Header für PDF-Ressourcen so setzen:

```php
header('Content-Type: application/pdf')
```

Es wird nicht funktionieren, wenn Sie stattdessen versuchen, ihn nur mit `header('application/pdf')` zu setzen.

## Verwandte Links

- [IANA | MIME-Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Migration von Apache .htaccess zu Nginx-Serverblock](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
