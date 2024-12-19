---
title: Richtige Konfiguration der MIME-Typen des Servers
slug: Learn_web_development/Extensions/Server-side/Configuring_server_MIME_types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

MIME-Typen beschreiben den Medientyp von Inhalten, entweder in E-Mails oder die von Webservern bzw. Webanwendungen bereitgestellt werden. Sie sollen einen Hinweis geben, wie der Inhalt verarbeitet und angezeigt werden soll.

Beispiele für MIME-Typen:

- `text/html` für HTML-Dokumente.
- `text/plain` für einfachen Text.
- `text/css` für Cascading Style Sheets.
- `text/javascript` für JavaScript-Dateien.
- `text/markdown` für Markdown-Dateien.
- `application/octet-stream` für Binärdateien, bei denen eine Benutzeraktion erwartet wird.

Die Standardeinstellungen von Servern variieren stark und setzen unterschiedliche _Standard_-MIME-Typ-Werte für Dateien ohne definierten Inhaltstyp.

Versionen des Apache-Webservers **vor 2.2.7** waren so konfiguriert, dass sie einen MIME-Typ von `text/plain` oder `application/octet-stream` für unbekannte Inhaltstypen berichteten. Moderne Versionen von Apache berichten `none` für Dateien mit unbekannten Inhaltstypen.

[Nginx](https://nginx.org/) wird `text/plain` angeben, wenn Sie keinen Standard-Inhaltstyp definieren.

Wenn neue Inhaltstypen erfunden oder zu Webservern hinzugefügt werden, können Webadministratoren versäumen, die neuen MIME-Typen zur Konfiguration ihres Webservers hinzuzufügen. Dies ist eine Hauptquelle von Problemen für Benutzer von Browsern, die die von Webservern und -anwendungen berichteten MIME-Typen respektieren.

## Warum sind korrekte MIME-Typen wichtig?

Wenn ein Webserver oder eine Anwendung einen falschen MIME-Typ für Inhalte (einschließlich eines "Standardtyps" für unbekannte Inhalte) meldet, hat ein Webbrowser keine Möglichkeit, die Absichten des Autors zu erkennen. Dies kann unerwartetes Verhalten verursachen.

Einige Webbrowser können versuchen, den richtigen MIME-Typ zu _erraten_. Dies ermöglicht es falsch konfigurierten Webservern und -anwendungen, für diese Browser weiterhin zu funktionieren (jedoch nicht für andere Browser, die die Norm korrekt implementieren). Abgesehen davon, dass es gegen die HTTP-Spezifikation verstößt, ist dies aus einigen anderen wesentlichen Gründen eine schlechte Idee:

- Verlust der Kontrolle

  - : Wenn der Browser den gemeldeten MIME-Typ ignoriert, haben Webadministratoren und Autoren keine Kontrolle mehr darüber, wie ihre Inhalte verarbeitet werden sollen.

    Zum Beispiel könnte eine Website, die auf Webentwickler ausgerichtet ist, bestimmte Beispiel-HTML-Dokumente entweder als `text/html` oder `text/plain` senden wollen, um die Dokumente entweder als HTML verarbeiten und anzeigen zu lassen oder als Quellcode. Wenn der Browser den MIME-Typ errät, steht diese Option dem Autor nicht mehr zur Verfügung.

- Sicherheit

  - : Einige Inhaltstypen, wie ausführbare Programme, sind von Natur aus unsicher. Aus diesem Grund sind diese MIME-Typen in der Regel in Bezug darauf, welche Aktionen ein Webbrowser ausführen wird, wenn er diesen Typ von Inhalt erhält, eingeschränkt. Ein ausführbares Programm sollte nicht auf dem Computer des Benutzers ausgeführt werden und sollte zumindest einen Dialog auslösen, **der den Benutzer fragt**, ob er die Datei herunterladen möchte.

## JavaScript veraltete MIME-Typen

Beim Suchen nach Informationen über JavaScript-MIME-Typen könnten Sie auf mehrere MIME-Typen stoßen, die JavaScript referenzieren. Einige dieser MIME-Typen umfassen:

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

Während Browser möglicherweise jeden, einige oder alle dieser alternativen MIME-Typen unterstützen, sollten Sie **nur** `text/javascript` verwenden, um den MIME-Typ von JavaScript-Dateien anzugeben.

> [!NOTE]
> Siehe [MIME-Typen (IANA Medientypen)](/de/docs/Web/HTTP/MIME_types) für weitere Informationen.

## Anleitung zur Bestimmung des zu setzenden MIME-Typs

Es gibt mehrere Möglichkeiten, den korrekten MIME-Typ-Wert zu bestimmen, der verwendet werden soll, um Ihre Inhalte bereitzustellen.

- Wenn Ihr Inhalt mit kommerzieller Software erstellt wurde, lesen Sie die Dokumentation des Anbieters, um zu erfahren, welche MIME-Typen für die Anwendung gemeldet werden sollen.
- Schauen Sie im [MIME Media Types Registry](https://www.iana.org/assignments/media-types/media-types.xhtml) von IANA nach, das Informationen über alle registrierten MIME-Typen enthält.
- Suchen Sie nach der Dateierweiterung in [FILExt](https://filext.com/) oder in der [Referenz für Dateierweiterungen](https://www.file-extensions.org/), um zu sehen, welche MIME-Typen mit dieser Erweiterung verbunden sind. Achten Sie darauf, da die Anwendung möglicherweise mehrere MIME-Typen hat, die sich nur um einen Buchstaben unterscheiden.

## Anleitung zur Prüfung des MIME-Typs von empfangenen Inhalten

- In Firefox

  - Laden Sie die Datei und gehen Sie zu **Tools > Page Info**, um den Inhaltstyp der aufgerufenen Seite zu erhalten.
  - Sie können auch zu **Tools > Web Developer > Network** gehen und die Seite neu laden. Der Anfragetab gibt Ihnen eine Liste aller Ressourcen, die die Seite geladen hat. Wenn Sie auf eine Ressource klicken, werden alle verfügbaren Informationen aufgelistet, einschließlich des [`Content-Type`](/de/docs/Web/HTTP/Headers/Content-Type)-Headers der Seite.

- In Chrome

  - Laden Sie die Datei und gehen Sie zu **View > Developer > Developer Tools** und wählen Sie den _Network_-Tab. Laden Sie die Seite neu und wählen Sie die Ressource, die Sie prüfen möchten. Unter Headers suchen Sie nach `Content-Type`, und es wird der Inhaltstyp der Ressource gemeldet.

- Suchen Sie nach einem `<meta>`-Element im Seitenquelltext, das den MIME-Typ angibt, zum Beispiel `<meta http-equiv="Content-Type" content="text/html">`.

  - Laut den Standards sollte das `<meta>`-Element, das den MIME-Typ angibt, ignoriert werden, wenn ein Content-Type-Header verfügbar ist.

[IANA](https://www.iana.org/) führt eine Liste der registrierten [MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). Die [HTTP-Spezifikation](https://www.w3.org/Protocols/rfc2616/rfc2616.html) definiert eine Obermenge von MIME-Typen, die verwendet wird, um die Medientypen zu beschreiben, die im Web verwendet werden.

## Anleitung zur Konfiguration des Servers zur Übermittlung der korrekten MIME-Typen

Das Ziel ist es, Ihren Server so zu konfigurieren, dass er den korrekten {{HTTPHeader("Content-Type")}}-Header für jedes Dokument sendet.

- Wenn Sie den Apache-Webserver verwenden, schauen Sie im Abschnitt **_Medientypen und Zeichencodierungen_** der [Apache-Konfiguration: .htaccess](/de/docs/Learn_web_development/Extensions/Server-side/Apache_Configuration_htaccess) nach, um Beispiele für verschiedene Dokumenttypen und deren entsprechende MIME-Typen zu finden.
- Wenn Sie Nginx verwenden, beachten Sie, dass Nginx kein Äquivalent zu `.htaccess` hat, daher gehen alle Änderungen in die Hauptkonfigurationsdatei.
- Wenn Sie ein serverseitiges Skript oder Framework zur Generierung von Inhalten verwenden, hängt die Art des Inhaltstyps davon ab, welches Tool Sie verwenden. Überprüfen Sie die Dokumentation des Frameworks oder der Bibliothek.

Unabhängig davon, welches Serversystem Sie verwenden, müssen Sie erreichen, dass ein Antwort-Header mit dem Namen {{httpheader("Content-Type")}} gesetzt wird, gefolgt von einem Doppelpunkt und einem Leerzeichen, gefolgt von einem MIME-Typ. Hochstufige Umgebungen erlauben oft, solche Header zu setzen, wenn die Seite generiert wird. In einer PHP-Umgebung könnten Sie beispielsweise den Antwort-Header für PDF-Ressourcen wie folgt setzen:

```php
header('Content-Type: application/pdf')
```

Der Versuch, es stattdessen einfach mit `header('application/pdf')` zu setzen, wird nicht funktionieren.

## Verwandte Links

- [IANA | MIME Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml)
- [Hypertext Transfer Protocol — HTTP/1.1](https://www.w3.org/Protocols/rfc2616/rfc2616.html)
- [MIME-Typen (IANA Medientypen)](/de/docs/Web/HTTP/MIME_types)
- [Apache vs Nginx: Praktische Überlegungen](https://www.digitalocean.com/community/tutorials/apache-vs-nginx-practical-considerations)
- [Apache .htaccess zu Nginx-Serverblock migrieren](https://barryvanveen.nl/articles/56-migrate-apache-htaccess-to-nginx-server-block/)
