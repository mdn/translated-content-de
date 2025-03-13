---
title: Die korrekte Konfiguration von Server-MIME-Typen
slug: Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{LearnSidebar}}

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder die von Webservern oder Webanwendungen bereitgestellt werden. Sie sollen einen Hinweis darauf geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für Klartext.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Nutzeraktion erwartet wird.

Standardkonfigurationen von Servern variieren stark und setzen unterschiedliche _Standard_-MIME-Typen für Dateien ohne definierten Inhaltstyp fest.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie unbekannte Inhaltstypen mit einem MIME-Typ von `text/plain` oder `application/octet-stream` melden. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) wird `text/plain` melden, wenn Sie keinen Standardinhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu den Webservern hinzugefügt werden, kann es vorkommen, dass Webadministratoren die neuen MIME-Typen nicht in die Konfiguration ihres Webservers aufnehmen. Dies ist eine Hauptquelle von Problemen für Benutzer von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu kennen. Dies kann unerwartetes Verhalten verursachen.

Einige Webbrowser können versuchen, den korrekten MIME-Typ zu _erraten_. Dies ermöglicht es fehlkonfigurierten Webservern und Anwendungen, für diese Browser weiterhin zu funktionieren (aber nicht für andere Browser, die den Standard korrekt umsetzen). Abgesehen davon, dass dies gegen die HTTP-Spezifikation verstößt, ist es aus mehreren anderen wichtigen Gründen eine schlechte Idee:

- Kontrollverlust

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Zum Beispiel könnte eine Website, die sich an Webentwickler richtet, bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML verarbeitet und angezeigt oder als Quelltext dargestellt zu bekommen. Wenn der Browser den MIME-Typ erraten würde, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhaltstypen, wie ausführbare Programme, sind von Natur aus unsicher. Deshalb sind diese MIME-Typen in der Regel eingeschränkt, was die Aktionen betrifft, die ein Webbrowser bei diesem Inhaltstyp ausführen wird. Ein ausführbares Programm sollte nicht auf dem Computer des Nutzers ausgeführt werden und sollte mindestens einen Dialog erzeugen, der **den Nutzer fragt**, ob sie die Datei herunterladen möchten.

## JavaScript Legacy MIME-Typen

Wenn Sie nach Informationen über JavaScript MIME-Typen suchen, können Sie mehrere MIME-Typen begegnen, die auf JavaScript verweisen. Einige dieser MIME-Typen beinhalten:

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

Obwohl Browser möglicherweise einige oder alle dieser alternativen MIME-Typen unterstützen, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Weitere Informationen finden Sie unter [MIME types (IANA media types)](/de/docs/Web/HTTP/Guides/MIME_types).

## Anleitung zur Bestimmung des zu setzenden MIME-Typs

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typ-Wert zu bestimmen, der zum Bereitstellen Ihrer Inhalte verwendet werden soll.

- Wenn Ihr Inhalt mit kommerzieller Software erstellt wurde, lesen Sie die Dokumentation des Anbieters, um zu sehen, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Schauen Sie im [MIME Media Types-Register](https://www.iana.org/assignments/media-types/media-types.xhtml) von IANA nach, das Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie die Dateierweiterung bei [FILExt](https://filext.com/) oder im [File extensions reference](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verbunden sind. Achten Sie genau darauf, da die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur um einen Buchstaben unterscheiden.

## Anleitung zur Überprüfung des MIME-Typs empfangener Inhalte

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Werkzeuge > Seiteninformationen**, um den Inhaltstyp für die von Ihnen aufgerufene Seite zu erhalten.
  - Sie können auch zu **Werkzeuge > Web-Entwickler > Netzwerk** gehen und die Seite neu laden. Der Anfrage-Reiter gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen aufgelistet, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwicklertools** und wählen Sie den _Netzwerk_-Tab. Laden Sie die Seite neu und wählen Sie die Ressource, die Sie inspizieren möchten. Unter Headers suchen Sie nach `Content-Type`, und dieser wird den Inhaltstyp der Ressource melden.

- Suchen Sie nach einem `<meta>`-Element im Seitenquelltext, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.

  - Nach den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste der registrierten [MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die zur Beschreibung der auf dem Web verwendeten Medientypen verwendet wird.

## Anleitung zur Konfiguration Ihres Servers zur Übermittlung der korrekten MIME-Typen

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den korrekten {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, überprüfen Sie den Abschnitt **_Medientypen und Zeichencodierungen_** von [Apache Configuration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess) für Beispiele zu verschiedenen Dokumenttypen und ihren entsprechenden MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein Äquivalent zu `.htaccess` hat, sodass alle Änderungen in die Hauptkonfigurationsdatei gehen müssen.
- Wenn Sie ein serverseitiges Skript oder Framework zur Inhaltserzeugung verwenden, hängt die Art und Weise, wie Sie den Inhaltstyp bekanntgeben, vom verwendeten Tool ab. Überprüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, müssen Sie erreichen, dass ein Antwortheader mit dem Namen {{HTTPHeader("Content-Type")}} gesetzt wird, gefolgt von einem Doppelpunkt und einem Leerzeichen, gefolgt von einem MIME-Typ. Hochstufige Umgebungen erlauben oft, solche Header beim Generieren der Seite zu setzen. Zum Beispiel könnten Sie in einer PHP-Umgebung den Antwortheader für PDF-Ressourcen wie folgt setzen:

```php
header('Content-Type: application/pdf')
```

Der Versuch, ihn stattdessen nur mit `header('application/pdf')` zu setzen, wird nicht funktionieren.

## Verwandte Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME types (IANA media types)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Migrieren von Apache .htaccess zu Nginx-Serverblock](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
