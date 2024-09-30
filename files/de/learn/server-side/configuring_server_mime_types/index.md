---
title: Server-MIME-Typen richtig konfigurieren
slug: Learn/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{LearnSidebar}}

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder die von Webservern oder Webanwendungen bereitgestellt werden. Sie sollen einen Hinweis darauf geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für reinen Text.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen vom Nutzer eine Aktion erwartet wird.

Standardkonfigurationen von Servern variieren stark und setzen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien ohne definierten Inhaltstyp.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) meldet `text/plain`, wenn Sie keinen Standardinhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, können Webadministratoren es versäumen, die neuen MIME-Typen in die Konfiguration ihres Webservers aufzunehmen. Dies ist eine Hauptursache für Probleme bei Benutzern von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann unerwartetes Verhalten verursachen.

Einige Webbrowser könnten versuchen, den korrekten MIME-Typ zu _erraten_. Dies ermöglicht fehlkonfigurierten Webservern und Anwendungen, für diese Browser weiterhin zu funktionieren (aber nicht für andere Browser, die den Standard korrekt implementieren). Abgesehen davon, dass die HTTP-Spezifikation verletzt wird, ist dies aus einigen weiteren wesentlichen Gründen eine schlechte Idee:

- Verlust der Kontrolle

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Ein Beispiel: Eine Website, die sich an Webentwickler richtet, möchte möglicherweise bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden, um die Dokumente entweder als HTML verarbeitet und angezeigt oder als Quellcode angezeigt zu bekommen. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhaltstypen, wie etwa ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen normalerweise eingeschränkt, was die Handlungen angeht, die ein Webbrowser durchführen wird, wenn er diesen Inhaltstyp erhält. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest ein Dialogfeld erscheinen lassen, **das den Benutzer fragt**, ob er die Datei herunterladen möchte.

## JavaScript Legacy MIME-Typen

Wenn Sie nach Informationen zu JavaScript-MIME-Typen suchen, könnten Sie auf mehrere MIME-Typen stoßen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen sind:

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

Obwohl Browser möglicherweise einige, alle oder sogar alle dieser alternativen MIME-Typen unterstützen, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Weitere Informationen finden Sie unter [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

## Wie man den zu setzenden MIME-Typ bestimmt

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typ-Wert zu bestimmen, der verwendet werden soll, um Ihre Inhalte bereitzustellen.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu erfahren, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Sehen Sie in IANAs [MIME Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml) nach, die Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie die Dateierweiterung in [FILExt](https://filext.com/) oder im [Verzeichnis der Dateierweiterungen](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verbunden sind. Achten Sie genau darauf, da die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur um einen einzigen Buchstaben unterscheiden.

## Wie man den MIME-Typ von empfangenen Inhalten prüft

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Tools > Seiteninformationen**, um den Inhaltstyp für die besuchte Seite zu erhalten.
  - Sie können auch zu **Tools > Web Developer > Network** gehen und die Seite neu laden. Das Anfrageregister gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen aufgelistet, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwickler-Tools** und wählen Sie den _Netzwerk_-Tab. Laden Sie die Seite neu und wählen Sie die Ressource, die Sie untersuchen möchten. Unter den Headern suchen Sie nach `Content-Type`, und er meldet den Inhaltstyp der Ressource.

- Suchen Sie in der Seitenquelle nach einem `<meta>`-Element, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.

  - Nach den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste registrierter [MIME-Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die verwendet wird, um die Medientypen zu beschreiben, die im Web verwendet werden.

## Wie man seinen Server einrichtet, um die korrekten MIME-Typen zu senden

Ziel ist es, Ihren Server so zu konfigurieren, dass er für jedes Dokument den korrekten {{HTTPHeader("Content-Type")}}-Header sendet.

- Wenn Sie den Apache-Webserver verwenden, schauen Sie im Abschnitt **_Media Types and Character Encodings_** von [Apache-Konfiguration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess) nach Beispielen für verschiedene Dokumenttypen und ihre entsprechenden MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein Tool equivalent zu `.htaccess` hat, sodass alle Änderungen in die Hauptkonfigurationsdatei eingehen.
- Wenn Sie ein serverseitiges Skript oder Framework zur Generierung von Inhalten verwenden, hängt die Angabe des Inhaltstyps von dem von Ihnen verwendeten Tool ab. Überprüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, müssen Sie sicherstellen, dass Sie einen Antwort-Header mit dem Namen {{httpheader("Content-Type")}} setzen, gefolgt von einem Doppelpunkt und einem Leerzeichen, gefolgt von einem MIME-Typ. Höhere Umgebungen erlauben es oft, solche Header beim Generieren der Seite zu setzen. Zum Beispiel könnten Sie in einer PHP-Umgebung den Antwort-Header für PDF-Ressourcen folgendermaßen setzen:

```php
header('Content-Type: application/pdf')
```

Zu versuchen, diesen stattdessen mit nur `header('application/pdf')` zu setzen, wird nicht funktionieren.

## Verwandte Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache .htaccess zu Nginx Server Block migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
