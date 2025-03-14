---
title: Weiterleitungen in HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

**URL-Weiterleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP hat für diese Operation eine spezielle Art von Antwort, die als **_HTTP-Weiterleitung_** bezeichnet wird.

Weiterleitungen erfüllen zahlreiche Ziele:

- Temporäre Weiterleitungen während der Website-Wartung oder Ausfallzeiten
- Permanente Weiterleitungen zur Beibehaltung bestehender Links/Lesezeichen nach Änderung der URLs der Website, Fortschrittsseiten beim Hochladen einer Datei usw.

## Prinzip

Im HTTP wird die Weiterleitung durch einen speziellen _Redirect_-Antwort des Servers auf eine Anfrage ausgelöst. Redirect-Antworten haben [Statuscodes](/de/docs/Web/HTTP/Reference/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }}-Header, der die URL enthält, zu der weitergeleitet werden soll.

Wenn Browser eine Weiterleitung erhalten, laden sie sofort die neue URL, die im `Location`-Header angegeben ist. Abgesehen von dem geringen Leistungseinbußen durch eine zusätzliche Runde bemerken Benutzer die Weiterleitung selten.

<!--
%%{init: { "sequence": { "wrap": true, "width":250, "noteAlign": "center", "messageAlign": "center" }} }%%

sequenceDiagram
    participant Client
    participant Server

    Note left of Client: Anfrage Ressource
    Client->>Server: GET /doc HTTP/1.1
    Note right of Server: Ressource verschoben<br>Antwort mit neuer Adresse
    Server->>Client: HTTP/1.1 301 Moved Permanently<br/>Location: /doc_new

    Note left of Client: Anforderung Ressource an neuer Adresse
    Client->>Server: GET /doc_new HTTP/1.1
    Note right of Server: Rücksendung Ressource
    Server->>Client: HTTP/1.1 200 OK
-->

![Eine Anfrage vom Client zum Server. Der Server antwortet mit "301:Moved Permanently" und der neuen URL für die Ressource. Der Client macht eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Weiterleitungen, die in drei Kategorien unterteilt sind:

1. [Permanente Weiterleitungen](#permanente_weiterleitungen)
2. [Temporäre Weiterleitungen](#temporäre_weiterleitungen)
3. [Besondere Weiterleitungen](#besondere_weiterleitungen)

### Permanente Weiterleitungen

Diese Weiterleitungen sollen für immer bestehen bleiben. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet und durch die neue ersetzt werden sollte. Suchmaschinen-Roboter, RSS-Reader und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Handhabung der Methode                                                                                                  | Typische Anwendungsfälle                                   |
| ----- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können geändert werden oder auch nicht in {{HTTPMethod("GET")}}. [1] | Neuordnung einer Website.                                  |
| `308` | `Permanent Redirect` | Methode und Inhalt nicht geändert.                                                                                      | Neuordnung einer Website, mit nicht-GET-Links/Operationen. |

\[1] Die Spezifikation beabsichtigte nicht, Methodenänderungen zu erlauben, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von nicht-`GET`-Methoden zu beseitigen.

### Temporäre Weiterleitungen

Manchmal kann auf die angeforderte Ressource nicht an ihrem kanonischen Speicherort zugegriffen werden, aber sie kann an einem anderen Ort zugänglich gemacht werden. In diesem Fall kann eine temporäre Weiterleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler merken sich die neue, temporäre URL nicht. Temporäre Weiterleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Handhabung der Methode                                                                                                  | Typische Anwendungsfälle                                                                                                                                                            |
| ----- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können geändert werden oder auch nicht in {{HTTPMethod("GET")}}. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                                                       |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden unverändert. Andere werden in `GET` geändert (Inhalt verloren).                          | Wird verwendet, um nach einem {{HTTPMethod("PUT")}} oder einem {{HTTPMethod("POST")}} weiterzuleiten, damit das Aktualisieren der Ergebnisseite nicht die Operation erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Inhalt nicht geändert                                                                                       | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn nicht-`GET`-Operationen auf der Seite verfügbar sind.                          |

\[2] Die Spezifikation beabsichtigte nicht, Methodenänderungen zu erlauben, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von nicht-`GET`-Methoden zu beseitigen.

### Besondere Weiterleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zur lokal zwischengespeicherten Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Weiterleitung: der Inhalt, der vom Browser als Webseite präsentiert wird, listet die möglichen Weiterleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typische Anwendungsfälle                                                                                                                                                                                          |
| ----- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: die Auswahlmöglichkeiten werden in einer HTML-Seite im Inhalt aufgelistet. Maschinengelesene Auswahlmöglichkeiten werden empfohlen, als {{HTTPHeader("Link")}}-Header mit `rel=alternate` zu senden. |
| `304` | `Not Modified`     | Wird für revalidierte bedingte Anfragen gesendet. Gibt an, dass die zwischengespeicherte Antwort noch aktuell ist und verwendet werden kann.                                                                      |

## Alternative Möglichkeit zur Spezifizierung von Weiterleitungen

HTTP-Weiterleitungen sind nicht der einzige Weg, um Weiterleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Weiterleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Weiterleitungen über den [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Weiterleitungen

HTTP-Weiterleitungen sind der beste Weg, um Weiterleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie ein {{HTMLElement("meta")}}-Element mit dem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut auf `Refresh` im {{HTMLElement("head")}} der Seite. Wenn die Seite angezeigt wird, wird der Browser zur angegebenen URL weitergeleitet.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten sollte, bevor zur angegebenen URL weitergeleitet wird. Stellen Sie es immer auf `0` für Barrierefreiheit.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Weiterleitungen

Weiterleitungen in JavaScript werden durchgeführt, indem ein URL-String auf die [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft gesetzt wird, wodurch die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Weiterleitungen funktionieren diese nicht bei allen Ressourcen, und offensichtlich wird dies nur bei Clients funktionieren, die JavaScript ausführen. Andererseits bieten sie mehr Möglichkeiten: Sie können die Weiterleitung beispielsweise nur dann auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Ausführung

Mit drei Möglichkeiten zur Auslösung von Weiterleitungen können mehrere Methoden gleichzeitig verwendet werden. Aber welche wird zuerst angewendet?

1. HTTP-Weiterleitungen werden immer zuerst ausgeführt – sie existieren, wenn es noch keine übertragene Seite gibt.
2. Etwas überraschend wird die JavaScript-Weiterleitung als nächstes ausgeführt, vor HTML-Weiterleitungen. Dies liegt daran, dass die `<meta>`-Weiterleitung stattfindet, nachdem die Seite _vollständig geladen_ wurde, also nachdem alle Skripte ausgeführt wurden.
3. HTML-Weiterleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn es keine HTTP-Weiterleitungen oder JavaScript-Weiterleitungen gab, die ausgeführt wurden, bevor die Seite geladen wurde.
4. Wenn es eine JavaScript-Weiterleitung gibt, die nach dem Laden der Seite stattfindet (zum Beispiel bei einem Klick auf einen Button), wird sie als letzte ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden weitergeleitet wurde.

Wann immer möglich, verwenden Sie HTTP-Weiterleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Weiterleitungen hinzu. Wenn jemand die HTTP-Weiterleitungen ändert, aber vergisst, die HTML-Weiterleitungen zu ändern, sind die Weiterleitungen nicht mehr identisch, was eine Endlosschleife oder andere Alpträume verursachen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Weiterleitungen, aber da die Leistung mit jeder Weiterleitung beeinträchtigt wird, sollte ihre Verwendung auf ein Minimum beschränkt werden.

### Domains-Aliasing

Idealerweise gibt es für jede Ressource einen Standort und somit eine URL. Es gibt jedoch Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiges Beispiel ist, wenn eine Website unter `www.example.com` residiert, aber auch der Zugriff von `example.com` funktionieren sollte. Weiterleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie können auch von gebräuchlichen Synonymen oder häufigen Tippfehlern Ihrer Domains weiterleiten.
- Umzug zu einer neuen Domain
  - : Zum Beispiel hat Ihr Unternehmen einen neuen Namen, Sie möchten jedoch, dass bestehende Links oder Lesezeichen Sie noch unter dem neuen Namen finden.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website weitergeleitet.

### Links am Leben halten

Beim Restrukturieren von Websites ändern sich URLs. Auch wenn Sie die Links Ihrer Website aktualisieren, um den neuen URLs zu entsprechen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht unterbrechen, da sie wertvolle Benutzer bringen und Ihr SEO unterstützen, sodass Sie Weiterleitungen von den alten URLs zu den neuen einrichten.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, versuchen Sie jedoch, interne Weiterleitungen zu vermeiden. Eine Weiterleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie es vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen reparieren.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen verändern den Zustand des Servers, und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

Normalerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, wird durch Drücken der Aktualisieren-Schaltfläche die Anfrage erneut gesendet (möglicherweise nach einer Bestätigungsnachricht).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL zurücksenden, die die richtigen Informationen enthält. Wenn die Aktualisieren-Schaltfläche gedrückt wird, wird nur diese Seite neu angezeigt, ohne die unsicheren Anfragen erneut abzuspielen.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, z. B. {{HTTPMethod("DELETE")}}-Anfragen, die für eine spätere Verarbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Weiterleitung, die zu einer Seite führt, die angibt, dass die Aktion geplant wurde, und möglicherweise über ihren Fortschritt informiert oder deren Abbruch ermöglicht.

## Konfiguration von Weiterleitungen auf gängigen Servern

### Apache

Weiterleitungen können entweder in der Server-Konfigurationsdatei oder in der `.htaccess` jeder Verzeichnisebene eingerichtet werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul hat Konfigurationen für `Redirect` und `RedirectMatch`, die standardmäßig {{HTTPStatus("302")}}-Weiterleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` weitergeleitet, ebenso alle darunter befindlichen Dateien oder Verzeichnisse (`https://example.com/some-page` wird zu `https://www.example.com/some-page` weitergeleitet).

`RedirectMatch` macht dasselbe, verwendet jedoch einen {{Glossary("regular_expression", "regulären Ausdruck")}}, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/`-Verzeichnis werden auf eine andere Domain umgeleitet.

Falls Sie keine temporäre Weiterleitung wünschen, kann ein zusätzliches Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Umleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann auch Weiterleitungen erstellen. Es ist flexibler, aber etwas komplexer.

### Nginx

In Nginx erstellen Sie einen spezifischen Serverblock für den Inhalt, den Sie weiterleiten möchten:

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

Um eine Weiterleitung auf ein Verzeichnis oder nur bestimmte Seiten anzuwenden, verwenden Sie die `rewrite`-Richtlinie:

```nginx
rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
```

### IIS

In IIS verwenden Sie das [`<httpRedirect>`](https://learn.microsoft.com/de-de/iis/configuration/system.webServer/httpRedirect/)-Element, um Weiterleitungen zu konfigurieren.

## Weiterleitungsschleifen

Weiterleitungsschleifen treten auf, wenn zusätzliche Weiterleitungen derjenigen folgen, die bereits gefolgt wurde. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird und keine Seite jemals gefunden wird.

Meistens handelt es sich dabei um ein Serverproblem, und wenn der Server es erkennen kann, sendet er eine {{HTTPStatus("500")}} `Internal Server Error`. Wenn Sie nach dem Ändern einer Serverkonfiguration schnell auf einen solchen Fehler stoßen, handelt es sich wahrscheinlich um eine Weiterleitungsschleife.

Manchmal erkennt der Server es nicht: Eine Weiterleitungsschleife kann sich über mehrere Server erstrecken, die nicht das gesamte Bild haben. In diesem Fall erkennen Browser es und zeigen eine Fehlermeldung an. Firefox zeigt an:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse auf eine Weise umleitet, die niemals endet.

…während Chrome anzeigt:

> Diese Webseite hat eine Weiterleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es liegt eine Beschädigung auf seiner Seite vor, wie eine Cache- oder Cookie-Diskrepanz).

Es ist wichtig, Weiterleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig zerstören.

## Siehe auch

- [3XX-Weiterleitungen](/de/docs/Web/HTTP/Reference/Status#redirection_messages) Statusantworten
- {{HTTPHeader("Location")}}-Header
- [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft für Weiterleitungen mit JavaScript
