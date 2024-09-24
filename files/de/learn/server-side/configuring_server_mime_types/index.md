---
title: Richtiges Konfigurieren von MIME-Typen auf dem Server
slug: Learn/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{LearnSidebar}}

MIME-Typen beschreiben den Medientyp von Inhalten, sei es in E-Mails oder auf Webservern oder Webanwendungen bereitgestellt. Sie sollen einen Hinweis darauf geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für reinen Text.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Die Standardkonfigurationen von Servern variieren stark und setzen unterschiedliche _Standard_-MIME-Typen für Dateien ohne definierten Inhaltstyp.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) meldet `text/plain`, wenn Sie keinen Standardinhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, kann es vorkommen, dass Webadministratoren die neuen MIME-Typen nicht in die Konfiguration ihres Webservers aufnehmen. Dies ist eine Hauptursache für Probleme bei Benutzern von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser können versuchen, den richtigen MIME-Typ zu _raten_. Dies ermöglicht es, dass falsch konfigurierte Webserver und Anwendungen für diese Browser weiterhin funktionieren (aber nicht für andere Browser, die den Standard korrekt umsetzen). Abgesehen davon, dass dies die HTTP-Spezifikation verletzt, ist dies aus mehreren wichtigen Gründen eine schlechte Idee:

- Kontrollverlust

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Zum Beispiel könnte eine auf Webentwickler ausgerichtete Website bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML zu verarbeiten und anzuzeigen oder als Quellcode. Wenn der Browser den MIME-Typ rät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhaltstypen, wie ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen in Bezug auf die Aktionen, die ein Webbrowser bei deren Empfang ausführt, in der Regel eingeschränkt. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest einen Dialog erscheinen lassen, **der den Benutzer fragt**, ob er die Datei herunterladen möchte.

## JavaScript-Legacy-MIME-Typen

Bei der Suche nach Informationen über JavaScript-MIME-Typen stoßen Sie möglicherweise auf mehrere MIME-Typen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen sind:

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

Während Browser möglicherweise alle, einige oder keinen dieser alternativen MIME-Typen unterstützen, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Weitere Informationen finden Sie unter [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

## Wie man den zu setzenden MIME-Typ bestimmt

Es gibt mehrere Möglichkeiten, um den korrekten MIME-Typ-Wert zu bestimmen, der verwendet werden soll, um Ihre Inhalte bereitzustellen.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu sehen, welche MIME-Typen für die Anwendung gemeldet werden sollen.
- Schauen Sie im [MIME Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml) der IANA nach, der Informationen über alle registrierten MIME-Typen enthält.
- Suchen Sie die Dateierweiterung in [FILExt](https://filext.com/) oder der [Dateierweiterungsreferenz](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen dieser Erweiterung zugeordnet sind. Achten Sie genau darauf, da die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur um einen Buchstaben unterscheiden.

## Wie man den MIME-Typ von empfangenen Inhalten überprüft

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Extras > Seiteninformationen**, um den Inhaltstyp für die aufgerufene Seite zu erhalten.
  - Sie können auch zu **Extras > Webentwickler > Netzwerk** gehen und die Seite neu laden. Der Anforderungstab gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen aufgelistet, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwicklertools** und wählen Sie den _Netzwerk_-Tab. Laden Sie die Seite neu und wählen Sie die Ressource, die Sie untersuchen möchten. Unter den Headern finden Sie `Content-Type`, und es wird der Inhaltstyp der Ressource gemeldet.

- Suchen Sie im Seitenquelltext nach einem `<meta>`-Element, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.

  - Gemäß den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste registrierter [MIME-Medientypen](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Erweiterung von MIME-Typen, die dazu verwendet wird, die auf dem Web verwendeten Medientypen zu beschreiben.

## Wie Sie Ihren Server einrichten, um die korrekten MIME-Typen zu senden

Das Ziel ist, Ihren Server so zu konfigurieren, dass er für jedes Dokument den richtigen {{HTTPHeader("Content-Type")}}-Header sendet.

- Wenn Sie den Apache-Webserver verwenden, sehen Sie sich den Abschnitt **_Media Types and Character Encodings_** in [Apache Configuration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess) für Beispiele verschiedener Dokumenttypen und deren entsprechende MIME-Typen an.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein äquivalentes Tool wie `.htaccess` hat, daher werden alle Änderungen in der Hauptkonfigurationsdatei vorgenommen.
- Wenn Sie ein serverseitiges Skript oder Framework zur Inhaltserzeugung verwenden, hängt die Angabe des Inhaltstyps vom verwendeten Tool ab. Konsultieren Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, besteht der Effekt, den Sie erzielen müssen, darin, einen Antwort-Header mit dem Namen {{httpheader("Content-Type")}} zu setzen, gefolgt von einem Doppelpunkt und einem Leerzeichen, gefolgt von einem MIME-Typ. Hochrangige Umgebungen erlauben es oft, solche Header beim Generieren der Seite zu setzen. Zum Beispiel könnten Sie in einer PHP-Umgebung den Antwort-Header für PDF-Ressourcen so setzen:

```php
header('Content-Type: application/pdf')
```

Zu versuchen, es stattdessen mit nur `header('application/pdf')` zu setzen, wird nicht funktionieren.

## Verwandte Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache .htaccess zu Nginx-Serverblock migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
