---
title: Server-MIME-Typen richtig konfigurieren
slug: Learn/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 6a01359152716aafd62878599603f6ce76a9a9bf
---

{{LearnSidebar}}

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder bereitgestellt von Webservern oder Webanwendungen. Sie sollen helfen, einen Hinweis darauf zu geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für Klartext.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Die Standardkonfigurationen von Servern variieren stark und setzen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien ohne definierten Inhaltstyp.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen meldeten. Moderne Versionen von Apache melden `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) meldet `text/plain`, wenn Sie keinen Standard-Inhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, können Webadministratoren es versäumen, die neuen MIME-Typen in ihre Webserverkonfiguration aufzunehmen. Dies ist eine Hauptquelle von Problemen für Benutzer von Browsern, die die von Webservern und -anwendungen gemeldeten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte (einschließlich eines „Standardtyps“ für unbekannte Inhalte) meldet, kann ein Webbrowser die Absichten des Autors nicht erkennen. Dies kann zu unerwartetem Verhalten führen.

Einige Webbrowser versuchen möglicherweise, den richtigen MIME-Typ zu _erraten_. Dadurch funktionieren fehlkonfigurierte Webserver und Anwendungen weiterhin für diese Browser (aber nicht für andere Browser, die den Standard korrekt umsetzen). Abgesehen davon, dass es gegen die HTTP-Spezifikation verstößt, ist dies aus ein paar anderen wichtigen Gründen eine schlechte Idee:

- Kontrollverlust

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Zum Beispiel könnte eine für Webentwickler orientierte Website bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML verarbeitet und angezeigt oder als Quellcode angezeigt zu bekommen. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhaltstypen, wie ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen normalerweise in Bezug auf die Aktionen eingeschränkt, die ein Webbrowser ausführt, wenn ihm dieser Inhaltstyp zugewiesen wird. Ein ausführbares Programm sollte nicht auf dem Computer des Nutzers gestartet werden und sollte zumindest einen Dialog auslösen, der den **Nutzer fragt**, ob er die Datei herunterladen möchte.

## JavaScript-Legacy-MIME-Typen

Wenn Sie nach Informationen zu JavaScript-MIME-Typen suchen, stoßen Sie möglicherweise auf verschiedene MIME-Typen, die sich auf JavaScript beziehen. Einige dieser MIME-Typen sind:

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

Obwohl Browser einige oder alle dieser alternativen MIME-Typen unterstützen können, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Siehe [MIME-Typen (IANA Medien-Typen)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) für weitere Informationen.

## Anleitung zur Bestimmung des MIME-Typs, der festgelegt werden soll

Es gibt verschiedene Möglichkeiten, den richtigen MIME-Typ-Wert zu bestimmen, der für die Bereitstellung Ihrer Inhalte verwendet werden soll.

- Wenn Ihre Inhalte mit kommerzieller Software erstellt wurden, lesen Sie die Dokumentation des Anbieters, um zu sehen, welche MIME-Typen für die Anwendung gemeldet werden sollen.
- Schauen Sie im [MIME Media Types registry](https://www.iana.org/assignments/media-types/media-types.xhtml) von IANA nach, das Informationen zu allen registrierten MIME-Typen enthält.
- Suchen Sie nach der Dateierweiterung in [FILExt](https://filext.com/) oder im [Referenzverzeichnis für Dateierweiterungen](https://www.file-extensions.org/), um zu sehen, mit welchen MIME-Typen diese Erweiterung verknüpft ist. Beachten Sie, dass die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur um einen Buchstaben unterscheiden.

## Anleitung zur Überprüfung des MIME-Typs empfangener Inhalte

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Extras > Seiteninformationen**, um den Inhaltstyp für die von Ihnen aufgerufene Seite zu erhalten.
  - Sie können auch zu **Extras > Webentwickler > Netzwerk** gehen und die Seite neu laden. Der Anfragetab gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Durch Klicken auf eine Ressource wird alle verfügbaren Informationen angezeigt, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **Ansicht > Entwickler > Entwicklertools** und wählen Sie den _Netzwerk_-Tab. Laden Sie die Seite erneut und wählen Sie die Ressource aus, die Sie untersuchen möchten. Suchen Sie unter Headers nach `Content-Type`, und er zeigt den Inhaltstyp der Ressource an.

- Suchen Sie im Quellcode der Seite nach einem `<meta>`-Element, das den MIME-Typ angibt, beispielsweise `<meta http-equiv="Content-Type" content="text/html">`.

  - Gemäß den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste registrierter [MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die verwendet wird, um die auf dem Web verwendeten Medientypen zu beschreiben.

## Anleitung zur Konfiguration Ihres Servers, um die richtigen MIME-Typen zu senden

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den korrekten {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, lesen Sie den Abschnitt **_Medientypen und Zeichencodierungen_** von [Apache-Konfiguration: .htaccess](/de/docs/Learn/Server-side/Apache_Configuration_htaccess) für Beispiele verschiedener Dokumententypen und ihrer entsprechenden MIME-Typen.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein .htaccess-Äquivalent hat, sodass alle Änderungen in die Hauptkonfigurationsdatei gehen.
- Wenn Sie ein serverseitiges Skript oder Framework zur Inhaltserzeugung verwenden, hängt die Art und Weise, wie der Inhaltstyp angegeben wird, von dem verwendeten Tool ab. Überprüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig von dem verwendeten Serversystem müssen Sie einen Antwortheader mit dem Namen {{httpheader("Content-Type")}} festlegen, gefolgt von einem Doppelpunkt und Leerzeichen, gefolgt von einem MIME-Typ. In Hochumgebungen können solche Header häufig beim Erzeugen der Seite gesetzt werden. Zum Beispiel in einer PHP-Umgebung könnte der Antwortheader für PDF-Ressourcen so gesetzt werden:

```php
header('Content-Type: application/pdf')
```

Ein Versuch, ihn stattdessen nur mit `header('application/pdf')` zu setzen, funktioniert nicht.

## Verwandte Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA Medien-Typen)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache .htaccess zu Nginx-Serverblock migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
