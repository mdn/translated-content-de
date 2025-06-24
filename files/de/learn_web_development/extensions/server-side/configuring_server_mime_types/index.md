---
title: Server-MIME-Typen richtig konfigurieren
slug: Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

MIME-Typen beschreiben den Medientyp von Inhalten, sei es in E-Mails oder von Webservern oder Webanwendungen bereitgestellt. Sie sollen einen Hinweis darauf geben, wie der Inhalt verarbeitet und angezeigt werden sollte.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für reinen Text.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Standardkonfigurationen von Servern variieren beträchtlich und setzen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien ohne definierten Inhaltstyp.

Versionen des Apache-Webservers **vor Version 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) meldet `text/plain`, wenn Sie keinen Standardinhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, können Webadministratoren versäumen, die neuen MIME-Typen in der Konfiguration ihres Webservers hinzuzufügen. Dies ist eine Hauptursache für Probleme bei Benutzern von Browsern, die die von Webservern und -anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen inkorrekten MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser können versuchen, den korrekten MIME-Typ _zu erraten_. Dies ermöglicht es, dass fehlerhaft konfigurierte Webserver und -anwendungen für diese Browser weiterhin funktionieren (aber nicht für andere Browser, die den Standard korrekt umsetzen). Abgesehen davon, dass dies gegen die HTTP-Spezifikation verstößt, ist dies aus verschiedenen wichtigen Gründen eine schlechte Idee:

- Kontrollverlust

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Beispielsweise könnte eine auf Webentwickler ausgerichtete Website bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden möchten, damit die Dokumente entweder als HTML verarbeitet und angezeigt oder als Quellcode betrachtet werden. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit
  - : Einige Inhaltstypen, wie ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen normalerweise dahingehend eingeschränkt, welche Aktionen ein Webbrowser beim Erhalt dieser Art von Inhalten ausführen wird. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest einen Dialog anzeigen, **der den Benutzer fragt**, ob er die Datei herunterladen möchte.

## JavaScript-Legacy-MIME-Typen

Wenn Sie nach Informationen zu JavaScript-MIME-Typen suchen, können Sie auf mehrere MIME-Typen stoßen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen sind:

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

Während Browser möglicherweise einige oder alle dieser alternativen MIME-Typen unterstützen, sollten Sie **lediglich** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzuzeigen.

> [!NOTE]
> Weitere Informationen finden Sie unter [MIME-Typen (IANA Medien-Typen)](/de/docs/Web/HTTP/Guides/MIME_types).

## Wie man den zu setzenden MIME-Typ bestimmt

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typ-Wert zu bestimmen, der zum Bereitstellen Ihres Inhalts verwendet werden soll.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu erfahren, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Schauen Sie im [MIME Media Types Registry von IANA](https://www.iana.org/assignments/media-types/media-types.xhtml) nach, das Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie die Dateierweiterung in [FILExt](https://filext.com/) oder im [File extensions reference](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verbunden sind. Achten Sie genau darauf, da die Anwendung mehrere MIME-Typen haben kann, die sich nur um einen Buchstaben unterscheiden.

## So überprüfen Sie den MIME-Typ von empfangenen Inhalten

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Tools > Page Info**, um den Inhaltstyp der von Ihnen aufgerufenen Seite zu erhalten.
  - Sie können auch zu **Tools > Web Developer > Network** gehen und die Seite neu laden. Die Anfragen-Registerkarte gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen aufgelistet, inklusive des [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **View > Developer > Developer Tools** und wählen Sie die _Network_-Registerkarte. Laden Sie die Seite neu und wählen Sie die Ressource, die Sie inspizieren möchten. Unter Headers suchen Sie nach `Content-Type`, und es wird der Inhaltstyp der Ressource gemeldet.

- Suchen Sie nach einem `<meta>`-Element im Seitenquelltext, das den MIME-Typ angibt, z. B. `<meta http-equiv="Content-Type" content="text/html">`.
  - Laut Standards sollte das `<meta>`-Element, das den MIME-Typ spezifiziert, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste der registrierten [MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die zur Beschreibung der auf dem Web verwendeten Medientypen verwendet wird.

## So richten Sie Ihren Server ein, um die korrekten MIME-Typen zu senden

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den korrekten {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, lesen Sie den Abschnitt **_Media Types and Character Encodings_** von [Apache Configuration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess) für Beispiele zu verschiedenen Dokumenttypen und deren zugehörigen MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein `.htaccess`-Equivalent-Tool hat, sodass alle Änderungen in der Hauptkonfigurationsdatei erfolgen.
- Wenn Sie ein serverseitiges Skript oder Framework verwenden, um Inhalte zu generieren, hängt die Methode zur Angabe des Inhaltstyps vom verwendeten Tool ab. Prüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, müssen Sie erreichen, dass ein Antwort-Header mit dem Namen {{httpheader("Content-Type")}}, gefolgt von einem Doppelpunkt und einem Leerzeichen sowie einem MIME-Typ, gesetzt wird. Hochrangige Umgebungen erlauben oft, solche Header beim Generieren der Seite zu setzen. Beispielsweise könnten Sie in einer PHP-Umgebung den Antwort-Header für PDF-Ressourcen so setzen:

```php
header('Content-Type: application/pdf')
```

Zu versuchen, ihn stattdessen mit nur `header('application/pdf')` zu setzen, wird nicht funktionieren.

## Verwandte Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA Medien-Typen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Migrate Apache .htaccess to Nginx server block](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
