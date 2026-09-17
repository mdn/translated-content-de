---
title: Korrekte Konfiguration von Server-MIME-Typen
short-title: Server MIME type config
slug: Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder wenn sie von Webservern oder Webanwendungen bereitgestellt werden. Sie sollen einen Hinweis darauf geben, wie die Inhalte verarbeitet und angezeigt werden sollten.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für Klartext.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Die Standardkonfigurationen von Servern unterscheiden sich stark und legen unterschiedliche _Standard_-MIME-Typwerte für Dateien ohne definierten Inhaltstyp fest.

Versionen des Apache Web Server **vor 2.2.7** waren so konfiguriert, dass sie für unbekannte Inhaltstypen einen MIME-Typ von `text/plain` oder `application/octet-stream` meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) meldet `text/plain`, wenn Sie keinen Standard-Inhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, versäumen Webadministratoren möglicherweise, die neuen MIME-Typen zur Konfiguration ihres Webservers hinzuzufügen. Dies ist eine wesentliche Ursache für Probleme bei Nutzern von Browsern, die die von Webservern und Anwendungen gemeldeten MIME-Typen beachten.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung für Inhalte einen falschen MIME-Typ meldet (einschließlich eines „Standardtyps“ für unbekannte Inhalte), kann ein Webbrowser die Absichten des Autors nicht erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser versuchen möglicherweise, den korrekten MIME-Typ zu _erraten_. Dadurch können falsch konfigurierte Webserver und Anwendungen in diesen Browsern weiterhin funktionieren (jedoch nicht in anderen Browsern, die den Standard korrekt implementieren). Abgesehen davon, dass dies gegen die HTTP-Spezifikation verstößt, ist dies aus einigen weiteren wichtigen Gründen keine gute Idee:

- Kontrollverlust
  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Beispielsweise möchte eine auf Webentwickler ausgerichtete Website bestimmte Beispiel-HTML-Dokumente möglicherweise entweder als `text/html` oder als `text/plain` senden, damit die Dokumente entweder als HTML verarbeitet und angezeigt oder als Quellcode dargestellt werden. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit
  - : Einige Inhaltstypen, etwa ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen normalerweise hinsichtlich der Aktionen eingeschränkt, die ein Webbrowser beim Erhalt von Inhalten dieses Typs ausführt. Ein ausführbares Programm sollte nicht auf dem Computer des Nutzers ausgeführt werden und sollte zumindest einen Dialog anzeigen, der den Nutzer **fragt**, ob die Datei heruntergeladen werden soll.

## Veraltete JavaScript-MIME-Typen

Bei der Suche nach Informationen über JavaScript-MIME-Typen sehen Sie möglicherweise mehrere MIME-Typen, die auf JavaScript verweisen. Zu diesen MIME-Typen gehören:

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

Obwohl Browser einen, einige oder alle dieser alternativen MIME-Typen unterstützen können, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Weitere Informationen finden Sie unter [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types).

## So bestimmen Sie den festzulegenden MIME-Typ

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typwert zu bestimmen, der zum Bereitstellen Ihrer Inhalte verwendet werden soll.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu erfahren, welche MIME-Typen für die Anwendung gemeldet werden sollten.
- Sehen Sie im [MIME-Medientypen-Register](https://www.iana.org/assignments/media-types) der IANA nach, das Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie die Dateierweiterung in [FILExt](https://filext.com/) oder der [Referenz für Dateierweiterungen](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verknüpft sind. Achten Sie genau darauf, da die Anwendung mehrere MIME-Typen haben kann, die sich nur durch einen Buchstaben unterscheiden.

## So überprüfen Sie den MIME-Typ empfangener Inhalte

- In Firefox
  - Laden Sie die Datei und wählen Sie **Extras > Seiteninformationen**, um den Inhaltstyp der aufgerufenen Seite zu erhalten.
  - Sie können auch **Extras > Web-Entwickler > Netzwerk** öffnen und die Seite neu laden. Der Request-Tab zeigt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen aufgeführt, einschließlich des Headers [`Content-Type`](/de/docs/Web/HTTP/Reference/Headers/Content-Type) der Seite.

- In Chrome
  - Laden Sie die Datei und wählen Sie **Ansicht > Entwickler > Entwicklertools** und dann den Tab _Network_. Laden Sie die Seite neu und wählen Sie die Ressource aus, die Sie untersuchen möchten. Suchen Sie unter den Headers nach `Content-Type`; dort wird der Inhaltstyp der Ressource angezeigt.

- Suchen Sie im Quellcode der Seite nach einem `<meta>`-Element, das den MIME-Typ angibt, beispielsweise `<meta http-equiv="Content-Type" content="text/html">`.
  - Laut den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

Die [IANA](https://www.iana.org/) führt eine Liste registrierter [MIME-Medientypen](https://www.iana.org/assignments/media-types). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die zur Beschreibung der im Web verwendeten Medientypen dient.

## So konfigurieren Sie Ihren Server, damit er die korrekten MIME-Typen sendet

Das Ziel besteht darin, Ihren Server so zu konfigurieren, dass er für jedes Dokument den korrekten Header {{HTTPHeader("Content-Type")}} sendet.

- Wenn Sie den Apache-Webserver verwenden, lesen Sie den Abschnitt **_Medientypen und Zeichenkodierungen_** in [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess), um Beispiele für verschiedene Dokumenttypen und ihre entsprechenden MIME-Typen zu erhalten.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein `.htaccess`-äquivalentes Werkzeug hat; daher werden alle Änderungen in die Hauptkonfigurationsdatei übernommen.
- Wenn Sie ein serverseitiges Skript oder Framework zur Erzeugung von Inhalten verwenden, hängt die Angabe des Inhaltstyps von dem verwendeten Werkzeug ab. Lesen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, müssen Sie einen Response-Header mit dem Namen {{httpheader("Content-Type")}} setzen, gefolgt von einem Doppelpunkt und Leerzeichen und anschließend einem MIME-Typ. Übergeordnete Umgebungen ermöglichen häufig das Setzen solcher Header beim Erzeugen der Seite. In einer PHP-Umgebung könnten Sie beispielsweise den Response-Header für PDF-Ressourcen folgendermaßen setzen:

```php
header('Content-Type: application/pdf')
```

Der Versuch, ihn stattdessen nur mit `header('application/pdf')` zu setzen, funktioniert nicht.

## Verwandte Links

- [IANA | MIME-Medientypen](https://www.iana.org/assignments/media-types)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA-Medientypen)](/de/docs/Web/HTTP/Guides/MIME_types)
- [Apache vs. Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache-.htaccess zu Nginx-Serverblock migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
