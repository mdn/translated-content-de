---
title: Umleitungen in HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

**URL-Umleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP bietet eine spezielle Art von Antwort, die als **_HTTP-Redirect_** bezeichnet wird, für diese Operation.

Umleitungen erfüllen zahlreiche Ziele:

- Temporäre Umleitungen während Wartungsarbeiten oder Ausfallzeiten der Website
- Permanente Umleitungen, um bestehende Links/Bookmarks nach Änderung der URLs der Website, Fortschrittsseiten beim Hochladen einer Datei usw. zu bewahren

## Prinzip

Im HTTP-Protokoll wird eine Umleitung ausgelöst, indem ein Server eine spezielle _Redirect_-Antwort auf eine Anfrage sendet. Umleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Reference/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }}-Header, der die URL enthält, zu der umgeleitet werden soll.

Wenn Browser eine Umleitung empfangen, laden sie sofort die neue URL, die im `Location`-Header angegeben ist. Abgesehen von dem kleinen Leistungseinbruch durch eine zusätzliche Rundreise, bemerken Benutzer die Umleitung selten.

<!--
%%{init: { "sequence": { "wrap": true, "width":250, "noteAlign": "center", "messageAlign": "center" }} }%%

sequenceDiagram
    participant Client
    participant Server

    Note left of Client: Anfrage an Ressource
    Client->>Server: GET /doc HTTP/1.1
    Note right of Server: Ressource verschoben<br/>Antwort mit neuer Adresse
    Server->>Client: HTTP/1.1 301 Moved Permanently<br/>Location: /doc_new

    Note left of Client: Anfrage an Ressource an neuer Adresse
    Client->>Server: GET /doc_new HTTP/1.1
    Note right of Server: Rückgabe der Ressource
    Server->>Client: HTTP/1.1 200 OK
-->

![Eine Anfrage vom Client an den Server. Der Server antwortet mit "301: dauerhaft verschoben" und der neuen URL für die Ressource. Der Client sendet eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Umleitungen, die in drei Kategorien unterteilt sind:

1. [Permanente Umleitungen](#permanente_umleitungen)
2. [Temporäre Umleitungen](#temporäre_umleitungen)
3. [Besondere Umleitungen](#besondere_umleitungen)

### Permanente Umleitungen

Diese Umleitungen sind dazu gedacht, dauerhaft zu bestehen. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet und durch die neue ersetzt werden sollte. Suchmaschinen-Roboter, RSS-Reader und andere Crawler aktualisieren die ursprüngliche URL für die Ressource.

| Code  | Text                 | Methodenbehandlung                                                                                                             | Typischer Anwendungsfall                                          |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere können möglicherweise zu {{HTTPMethod("GET")}} geändert werden. [1] | Umstrukturierung einer Website.                                   |
| `308` | `Permanent Redirect` | Methode und Inhalt nicht geändert.                                                                                             | Umstrukturierung einer Website, mit Nicht-GET-Links/-Operationen. |

\[1] Die Spezifikation wollte keine Methodenänderungen zulassen, aber es gibt bestehende User-Agents, die ihre Methode ändern. {{HTTPStatus("308")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens beim Verwenden von Nicht-`GET`-Methoden zu beseitigen.

### Temporäre Umleitungen

Manchmal kann die angeforderte Ressource nicht von ihrem kanonischen Speicherort aus zugegriffen werden, aber sie kann von einem anderen Ort aus zugegriffen werden. In diesem Fall kann eine temporäre Umleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler speichern die neue, temporäre URL nicht. Temporäre Umleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Methodenbehandlung                                                                                                             | Typischer Anwendungsfall                                                                                                                                                                     |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere können möglicherweise zu {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                                                                |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere _werden geändert_ zu `GET` (Inhalt geht verloren).                  | Wird verwendet, um nach einer {{HTTPMethod("PUT")}}- oder einer {{HTTPMethod("POST")}}-Operation umzuleiten, sodass das Aktualisieren der Ergebnis-Seite die Operation nicht erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Inhalt nicht geändert.                                                                                             | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn auf der Webseite Nicht-`GET`-Operationen verfügbar sind.                                |

\[2] Die Spezifikation wollte keine Methodenänderungen zulassen, aber es gibt bestehende User-Agents, die ihre Methode ändern. {{HTTPStatus("307")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens beim Verwenden von Nicht-`GET`-Methoden zu beseitigen.

### Besondere Umleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite auf die lokal zwischengespeicherte Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Umleitung: Der Inhalt, der vom Browser als Webseite präsentiert wird, listet die möglichen Umleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                                                      |
| ----- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Auswahlmöglichkeiten sind in einer HTML-Seite im Inhalt aufgeführt. Maschinenlesbare Auswahlmöglichkeiten sollten ermutigt werden, als {{HTTPHeader("Link")}}-Header mit `rel=alternate` gesendet zu werden. |
| `304` | `Not Modified`     | Gesendet bei rekonditionierten bedingten Anfragen. Gibt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                                                                  |

## Alternative Möglichkeit zur Angabe von Umleitungen

HTTP-Umleitungen sind nicht die einzige Möglichkeit, Umleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Umleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Umleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Umleitungen

HTTP-Umleitungen sind der beste Weg, Umleitungen zu erstellen, aber manchmal hat man keine Kontrolle über den Server. In diesem Fall versuchen Sie, ein {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut auf `Refresh` im {{HTMLElement("head")}} der Seite zu setzen. Beim Anzeigen der Seite wird der Browser zur angegebenen URL wechseln.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor er zur angegebenen URL umleitet. Setzen Sie es immer auf `0`, um die Zugänglichkeit zu gewährleisten.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Umleitungen

Umleitungen in JavaScript werden durchgeführt, indem ein URL-String auf die [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft gesetzt wird, wodurch die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Umleitungen kann dies nicht bei allen Ressourcen funktionieren, und offensichtlich funktioniert dies nur bei Clients, die JavaScript ausführen. Auf der anderen Seite gibt es mehr Möglichkeiten: Zum Beispiel kann die Umleitung nur ausgelöst werden, wenn bestimmte Bedingungen erfüllt sind.

### Prioritätsreihenfolge

Mit drei Möglichkeiten, Umleitungen auszulösen, können mehrere gleichzeitig verwendet werden. Aber welche wird zuerst ausgeführt?

1. HTTP-Umleitungen werden immer zuerst ausgeführt - sie existieren, wenn nicht einmal eine übertragene Seite vorhanden ist.
2. Etwas überraschend werden JavaScript-Umleitungen als nächstes ausgeführt, vor HTML-Umleitungen. Dies liegt daran, dass die `<meta>`-Umleitung nach dem vollständigen Laden der Seite erfolgt, was erst nach der Ausführung aller Skripte geschieht.
3. HTML-Umleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn es keine HTTP-Umleitungen oder JavaScript-Umleitungen gibt, die vor dem Laden der Seite ausgeführt wurden.
4. Wenn es eine JavaScript-Umleitung gibt, die nach dem Laden der Seite erfolgt (zum Beispiel bei einem Mausklick), wird sie zuletzt ausgeführt, wenn die Seite nicht bereits von den vorherigen Methoden umgeleitet wurde.

Sofern möglich, verwenden Sie HTTP-Umleitungen und fügen Sie keine {{HTMLElement("meta")}}-Umleitungen hinzu. Wenn jemand die HTTP-Umleitungen ändert, aber vergisst, die HTML-Umleitungen zu ändern, sind die Umleitungen nicht mehr identisch, was zu einer Endlosschleife oder anderen Problemen führen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Umleitungen, aber da die Leistung bei jeder Umleitung beeinträchtigt wird, sollte ihre Verwendung auf ein Minimum beschränkt werden.

### Domain-Alias

Idealerweise gibt es einen Standort und damit eine URL für jede Ressource. Es gibt jedoch Gründe für alternative Namen einer Ressource:

- Die Reichweite Ihrer Website erweitern
  - : Ein häufiger Fall ist, wenn eine Website unter `www.example.com` betrieben wird, der Zugriff aber auch von `example.com` aus funktionieren soll. Umleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie könnten auch von häufigen Synonymen oder Tippfehlern Ihrer Domains umleiten.
- Umzug zu einer neuen Domain
  - : Zum Beispiel, Ihre Firma wurde umbenannt, aber Sie möchten, dass bestehende Links oder Bookmarks Sie weiterhin unter dem neuen Namen finden können.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zu der `https://`-Version Ihrer Website umgeleitet.

### Links am Leben erhalten

Wenn Sie Websites umstrukturieren, ändern sich URLs. Selbst wenn Sie die Links Ihrer Website aktualisieren, um den neuen URLs zu entsprechen, haben Sie keine Kontrolle über die URLs, die von externen Ressourcen verwendet werden.

Sie möchten diese Links nicht unterbrechen, da sie wertvolle Nutzer bringen und Ihrer SEO helfen, also richten Sie Umleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert für interne Links, aber versuchen Sie, interne Umleitungen zu vermeiden. Eine Umleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie dies vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen beheben.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Zustand des Servers und der Benutzer sollte sie nicht unabsichtlich erneut senden.

Typischerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, wird ein Drücken der Aktualisieren-Schaltfläche die Anfrage erneut senden (möglicherweise nach einer Bestätigungsnachricht).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL senden, die die richtigen Informationen enthält. Wenn die Aktualisieren-Schaltfläche gedrückt wird, wird nur diese Seite neu angezeigt, ohne die unsicheren Anfragen erneut auszulösen.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die zur späteren Verarbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Umleitung, die auf eine Seite verlinkt, die anzeigt, dass die Aktion geplant wurde, und eventuell Fortschritte darüber informiert oder es Ihnen ermöglicht, sie abzubrechen.

## Umleitungen in gängigen Servern konfigurieren

### Apache

Umleitungen können entweder in der Serverkonfigurationsdatei oder in der `.htaccess`-Datei jedes Verzeichnisses eingerichtet werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul verfügt über `Redirect` und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Umleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` umgeleitet, ebenso wie alle Dateien oder Verzeichnisse unter dieser (`https://example.com/some-page` wird zu `https://www.example.com/some-page` umgeleitet).

`RedirectMatch` tut dasselbe, nimmt aber einen {{Glossary("regular_expression", "regulären Ausdruck")}} an, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im Verzeichnis `images/` werden zu einer anderen Domain umgeleitet.

Wenn Sie keine temporäre Umleitung möchten, können Sie mit einem zusätzlichen Parameter (entweder dem zu verwendenden HTTP-Statuscode oder dem Schlüsselwort `permanent`) eine andere Umleitung einrichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann ebenfalls Umleitungen erstellen. Es ist flexibler, aber etwas komplexer.

### Nginx

In Nginx erstellen Sie einen spezifischen Serverblock für den Inhalt, den Sie umleiten möchten:

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

Um eine Umleitung auf ein Verzeichnis oder nur bestimmte Seiten anzuwenden, verwenden Sie die `rewrite`-Direktive:

```nginx
rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
```

### IIS

In IIS verwenden Sie das [`<httpRedirect>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpRedirect/)-Element, um Umleitungen zu konfigurieren.

## Umleitungsschleifen

Umleitungsschleifen treten auf, wenn zusätzliche Umleitungen der bereits gefolgten Umleitung folgen. Mit anderen Worten, es gibt eine Schleife, die nie beendet wird und keine Seite wird jemals gefunden.

Meistens ist dies ein Problem des Servers, und wenn der Server es erkennen kann, wird er eine {{HTTPStatus("500")}} `Internal Server Error`-Antwort senden. Wenn Sie auf einen solchen Fehler kurz nach der Änderung einer Serverkonfiguration stoßen, handelt es sich wahrscheinlich um eine Umleitungsschleife.

Manchmal wird der Server es nicht erkennen: Eine Umleitungsschleife kann sich über mehrere Server erstrecken, die jeweils kein vollständiges Bild haben. In diesem Fall werden es Browser erkennen und eine Fehlermeldung anzeigen. Firefox zeigt an:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse in einer Weise umleitet, die niemals endet.

…während Chrome anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es tritt eine Beschädigung auf seiner Seite auf, wie ein Cache- oder Cookie-Fehler).

Es ist wichtig, Umleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig zerstören.

## Siehe auch

- [3XX Umleitung](/de/docs/Web/HTTP/Reference/Status#redirection_messages) Antwortstatus
- {{HTTPHeader("Location")}}-Header
- [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft für Umleitung mit JavaScript
