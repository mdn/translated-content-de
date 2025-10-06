---
title: Korrekte Konfiguration von MIME-Typen auf dem Server
short-title: Konfiguration des MIME-Typs auf dem Server
slug: Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: f85d2e26b062decf7a2bb9179c3a93003f4067a9
---

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder die von Webservern oder Webanwendungen bereitgestellt werden. Sie sollen einen Hinweis darauf geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für Klartext.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Die Standardeinstellungen von Servern variieren stark und legen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien ohne definierten Inhaltstyp fest.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) meldet `text/plain`, wenn Sie keinen Standard-Inhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, kann es passieren, dass Webadministratoren die neuen MIME-Typen nicht in die Konfiguration ihres Webservers aufnehmen. Dies ist eine Hauptursache für Probleme bei Benutzern von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser versuchen möglicherweise, den korrekten MIME-Typ zu _erraten_. Dies ermöglicht es falsch konfigurierten Webservern und Anwendungen, für diese Browser weiterhin zu funktionieren (aber nicht für andere Browser, die den Standard korrekt implementieren). Abgesehen davon, dass dies gegen die HTTP-Spezifikation verstößt, ist es aus einigen weiteren wichtigen Gründen eine schlechte Idee:

- Kontrollverlust
  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Zum Beispiel könnte eine für Webentwickler orientierte Webseite bestimmte HTML-Beispieldokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML anzuzeigen oder als Quellcode darzustellen. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit
  - : Einige Inhaltstypen, wie z.B. ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen in Bezug darauf, welche Aktionen ein Webbrowser bei diesem Inhaltstyp durchführt, normalerweise beschränkt. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest einen Dialog anzeigen, der **den Benutzer fragt**, ob er die Datei herunterladen möchte.

## JavaScript Legacy-MIME-Typen

Wenn Sie nach Informationen über JavaScript-MIME-Typen suchen, können Sie auf mehrere MIME-Typen stoßen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen sind:

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

Während Browser einige, alle oder keine dieser alternativen MIME-Typen unterstützen, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Siehe [MIME-Typen (IANA Medien-Typen)](/de/docs/Web/HTTP/Guides/MIME_types) für mehr Informationen.

## Anleitung zur Bestimmung des festzulegenden MIME-Typs

Es gibt mehrere Möglichkeiten, den richtigen MIME-Typ-Wert zu bestimmen, der verwendet werden soll, um Ihre Inhalte bereitzustellen.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu sehen, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Schauen Sie im [IANA-Register für MIME-Mediatypen](https://www.iana.org/assignments/media-types/media-types.xhtml) nach, das Informationen über alle registrierten MIME-Typen enthält.
- Suchen Sie nach der Dateierweiterung bei [FILExt](https://filext.com/) oder in der [Referenz für Dateierweiterungen](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verknüpft sind. Achten Sie genau darauf, da die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur um einen Buchstaben unterscheiden.

## Anleitung zur Überprüfung des MIME-Typs von empfangenem Inhalt

- In Firefox
  - Laden Sie die Datei und gehen Sie zu **Extras > Seiteninformationen**, um den Inhaltstyp für die von Ihnen aufgerufene Seite zu erhalten.
  - Sie können auch zu **Extras > Web-Entwickler > Netzwerk** gehen und die Seite neu laden. Die Registerkarte „Anfragen“ gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen angezeigt, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Headers der Seite.

- In Chrome
  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwickler-Tools** und wählen Sie die _Netzwerk_-Registerkarte. Laden Sie die Seite neu und wählen Sie die Ressource aus, die Sie inspizieren möchten. Suchen Sie unter den Headern nach `Content-Type` und es werden der Inhaltstyp der Ressource berichtet.

- Suchen Sie im Quelltext der Seite nach einem `<meta>`-Element, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.
  - Laut den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Header für den Content-Type vorhanden ist.

[IANA](https://www.iana.org/) führt eine Liste der registrierten [MIME-Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die verwendet wird, um die auf dem Web verwendeten Medientypen zu beschreiben.

## Anleitung zur Konfiguration Ihres Servers für die Bereitstellung der korrekten MIME-Typen

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den richtigen {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, überprüfen Sie den Abschnitt **_Medientypen und Zeichencodierungen_** in der [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess) für Beispiele verschiedener Dokumenttypen und ihrer entsprechenden MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein Äquivalent zu `.htaccess` hat, sodass alle Änderungen in der Hauptkonfigurationsdatei erfolgen.
- Wenn Sie ein Server-seitiges Skript oder Framework verwenden, um Inhalte zu generieren, hängt die Angabe des Inhaltstyps von dem von Ihnen verwendeten Tool ab. Prüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, müssen Sie erreichen, dass ein Antwort-Header mit dem Namen {{httpheader("Content-Type")}} gefolgt von einem Doppelpunkt und Leerzeichen sowie gefolgt vom MIME-Typ gesetzt wird. Hochrangige Umgebungen erlauben oft, solche Header beim Generieren der Seite festzulegen. Zum Beispiel könnten Sie in einer PHP-Umgebung den Antwort-Header für PDF-Ressourcen auf folgende Weise setzen:

```php
header('Content-Type: application/pdf')
```

Mit nur `header('application/pdf')` wird es nicht funktionieren.

## Verwandte Links

- [IANA | MIME-Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Apache vs Nginx: Praktische Erwägungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache .htaccess zu Nginx Server Block migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
