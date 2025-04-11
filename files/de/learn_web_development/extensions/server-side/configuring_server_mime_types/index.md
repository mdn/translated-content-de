---
title: Richtiges Konfigurieren von Server-MIME-Typen
slug: Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder die von Webservern oder Webanwendungen bereitgestellt werden. Sie sollen helfen, einen Hinweis darauf zu geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für einfachen Text.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Server-Standardkonfigurationen variieren stark und setzen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien mit keinem definierten Inhaltstyp.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen melden. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) wird `text/plain` melden, wenn Sie keinen Standardinhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder Webservern hinzugefügt werden, können Webadministratoren es versäumen, die neuen MIME-Typen in die Konfiguration ihres Webservers aufzunehmen. Dies ist eine Hauptquelle für Probleme bei Benutzern von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte meldet (einschließlich eines "Standardtyps" für unbekannte Inhalte), hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser könnten versuchen, den korrekten MIME-Typ _zu erraten_. Dadurch können falsch konfigurierte Webserver und Anwendungen weiterhin für diese Browser (aber nicht andere Browser, die den Standard korrekt implementieren) funktionieren. Abgesehen davon, dass dies gegen die HTTP-Spezifikation verstößt, ist dies aus einigen weiteren wichtigen Gründen keine gute Idee:

- Kontrollverlust

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Zum Beispiel könnte eine auf Webentwickler ausgerichtete Website bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML verarbeitet und angezeigt zu bekommen oder als Quellcode. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhaltstypen, wie z. B. ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen in der Regel hinsichtlich der Aktionen, die ein Webbrowser ausführt, wenn er diesen Inhaltstyp erhält, eingeschränkt. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest ein Dialogfeld anzeigen, in dem **der Benutzer gefragt wird**, ob er die Datei herunterladen möchte.

## JavaScript-Alt-MIME-Typen

Wenn Sie nach Informationen über JavaScript-MIME-Typen suchen, könnten Sie auf mehrere MIME-Typen stoßen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen sind:

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

Während Browser alle, einige oder keine dieser alternativen MIME-Typen unterstützen können, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Siehe [MIME-Typen (IANA-Medien-Typen)](/de/docs/Web/HTTP/Guides/MIME_types) für weitere Informationen.

## Anleitung zur Bestimmung des zu setzenden MIME-Typs

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typ-Wert zu ermitteln, der verwendet werden soll, um Ihre Inhalte bereitzustellen.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu sehen, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Schauen Sie in IANAs [MIME-Medien-Typen-Registry](https://www.iana.org/assignments/media-types/media-types.xhtml), die Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie nach der Dateierweiterung in [FILExt](https://filext.com/) oder im [Dateierweiterungen-Referenz](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verbunden sind. Achten Sie genau darauf, da die Anwendung mehrere MIME-Typen haben kann, die sich nur um einen Buchstaben unterscheiden.

## Anleitung zur Überprüfung des MIME-Typs empfangener Inhalte

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Extras > Seiteninformationen**, um den Inhaltstyp der von Ihnen aufgerufenen Seite zu erhalten.
  - Sie können auch zu **Extras > Webentwickler > Netzwerk** gehen und die Seite neu laden. Die Anforderungsregisterkarte gibt Ihnen eine Liste von allen Ressourcen zurück, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen angezeigt, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwicklertools** und wählen Sie den _Netzwerk_-Tab. Laden Sie die Seite erneut und wählen Sie die Ressource, die Sie inspizieren möchten. Unter Header suchen Sie nach `Content-Type`, und es wird der Inhaltstyp der Ressource angezeigt.

- Suchen Sie nach einem `<meta>`-Element im Seitenquelltext, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.

  - Laut den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste registrierter [MIME-Medien-Typen](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die verwendet wird, um die Medientypen zu beschreiben, die im Web verwendet werden.

## Anleitung zur Konfiguration Ihres Servers für das Senden der korrekten MIME-Typen

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den korrekten {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, überprüfen Sie den Abschnitt **_Medientypen und Zeichenkodierungen_** in [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess) für Beispiele zu verschiedenen Dokumenttypen und ihren entsprechenden MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein Äquivalent zu `.htaccess` hat, sodass alle Änderungen in die Hauptkonfigurationsdatei gehen.
- Wenn Sie ein serverseitiges Skript oder Framework zum Generieren von Inhalten verwenden, hängt die Möglichkeit, den Inhaltstyp anzugeben, von dem von Ihnen verwendeten Werkzeug ab. Prüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig von dem verwendeten Serversystem müssen Sie erreichen, dass ein Antwortheader mit dem Namen {{httpheader("Content-Type")}}, gefolgt von einem Doppelpunkt und einem Leerzeichen, gefolgt von einem MIME-Typ, gesetzt wird. Höhere Umgebungen ermöglichen oft, solche Header beim Generieren der Seite festzulegen. Zum Beispiel könnten Sie in einer PHP-Umgebung den Antwortheader für PDF-Ressourcen so festlegen:

```php
header('Content-Type: application/pdf')
```

Es reicht nicht aus, ihn stattdessen einfach mit `header('application/pdf')` zu setzen.

## Verwandte Links

- [IANA | MIME-Medien-Typen](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA Medien-Typen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache .htaccess nach Nginx Serverblock migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
