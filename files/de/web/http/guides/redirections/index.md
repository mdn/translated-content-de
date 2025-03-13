---
title: Umleitungen in HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

**URL-Umleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP hat eine spezielle Art von Antwort, genannt **_HTTP-Umleitung_**, für diese Operation.

Umleitungen erreichen zahlreiche Ziele:

- Temporäre Umleitungen während der Wartung oder Ausfallzeit der Website
- Permanente Umleitungen, um bestehende Links/Lesezeichen nach der Änderung der URLs der Website zu bewahren, Fortschrittsseiten beim Hochladen einer Datei, usw.

## Prinzip

Im HTTP wird die Umleitung durch einen Server ausgelöst, der eine spezielle _Umleitungsantwort_ auf eine Anfrage sendet. Umleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Reference/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }}-Header, der die URL zur Umleitung enthält.

Wenn Browser eine Umleitung erhalten, laden sie sofort die neue URL, die im `Location`-Header angegeben ist. Abgesehen von der kleinen Leistungseinbuße aufgrund eines zusätzlichen Round-Trips bemerken Benutzer die Umleitung selten.

<!--
%%{init: { "sequence": { "wrap": true, "width":250, "noteAlign": "center", "messageAlign": "center" }} }%%

sequenceDiagram
    participant Client
    participant Server

    Note left of Client: Anforderung der Ressource
    Client->>Server: GET /doc HTTP/1.1
    Note right of Server: Ressource verschoben<br>Antwort mit neuer Adresse
    Server->>Client: HTTP/1.1 301 Moved Permanently<br/>Location: /doc_new

    Note left of Client: Anforderung der Ressource an neuer Adresse
    Client->>Server: GET /doc_new HTTP/1.1
    Note right of Server: Rückgabe der Ressource
    Server->>Client: HTTP/1.1 200 OK
-->

![Eine Anfrage vom Client zum Server. Der Server antwortet mit "301: Dauerhaft verschoben" und der neuen URL für die Ressource. Der Client macht eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt verschiedene Arten von Umleitungen, die in drei Kategorien eingeteilt sind:

1. [Permanente Umleitungen](#permanente_umleitungen)
2. [Temporäre Umleitungen](#temporäre_umleitungen)
3. [Spezielle Umleitungen](#spezielle_umleitungen)

### Permanente Umleitungen

Diese Umleitungen sind für immer gedacht. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet werden sollte und durch die neue ersetzt werden muss. Suchmaschinen-Roboter, RSS-Leser und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Handhabung der Methode                                                                                                     | Typischer Anwendungsfall                                         |
| ----- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}} Methoden unverändert. Andere können oder können nicht auf {{HTTPMethod("GET")}} geändert werden. [1] | Umstrukturierung einer Website.                                  |
| `308` | `Permanent Redirect` | Methode und Inhalt nicht geändert.                                                                                         | Umstrukturierung einer Website, mit Nicht-GET-Links/Operationen. |

\[1] Die Spezifikation hatte nicht beabsichtigt, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde geschaffen, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Temporäre Umleitungen

Manchmal kann die angeforderte Ressource nicht von ihrem kanonischen Speicherort aus abgerufen werden, jedoch an einer anderen Stelle. In diesem Fall kann eine temporäre Umleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler merken sich die neue, temporäre URL nicht. Temporäre Umleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Handhabung der Methode                                                                                                     | Typischer Anwendungsfall                                                                                                                                                        |
| ----- | -------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}} Methoden unverändert. Andere können oder können nicht auf {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                                                   |
| `303` | `See Other`          | {{HTTPMethod("GET")}} Methoden unverändert. Andere werden _geändert_ zu `GET` (Inhalt verloren).                           | Wird verwendet, um nach einem {{HTTPMethod("PUT")}} oder einem {{HTTPMethod("POST")}} umzuleiten, damit das Aktualisieren der Ergebnisseite die Operation nicht erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Inhalt nicht geändert                                                                                          | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn Nicht-`GET`-Operationen auf der Seite verfügbar sind.                      |

\[2] Die Spezifikation hatte nicht beabsichtigt, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde geschaffen, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Spezielle Umleitungen

{{HTTPStatus("304")}} (Nicht geändert) leitet eine Seite zur lokal zwischengespeicherten Kopie um (die veraltet war), und {{HTTPStatus("300")}} (Mehrere Wahlmöglichkeiten) ist eine manuelle Umleitung: Der Körper, der vom Browser als Webseite dargestellt wird, listet die möglichen Umleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                                            |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Wahlmöglichkeiten werden in einer HTML-Seite im Körper aufgeführt. Maschinell lesbare Wahlmöglichkeiten werden ermutigt, als {{HTTPHeader("Link")}}-Header mit `rel=alternate` gesendet zu werden. |
| `304` | `Not Modified`     | Wird für erneut validierte bedingte Anfragen gesendet. Zeigt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                                                   |

## Alternative Möglichkeiten zur Angabe von Umleitungen

HTTP-Umleitungen sind nicht der einzige Weg, um Umleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Umleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Umleitungen über den [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Umleitungen

HTTP-Umleitungen sind der beste Weg, Umleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie es mit einem {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut auf `Refresh` im {{HTMLElement("head")}} der Seite. Beim Anzeigen der Seite wird der Browser zur angegebenen URL wechseln.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor zur angegebenen URL umgeleitet wird. Setzen Sie es immer auf `0` für Barrierefreiheit.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Umleitungen

Umleitungen in JavaScript werden ausgeführt, indem ein URL-String auf die [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft gesetzt wird, um die neue Seite zu laden:

```js
window.location = "https://example.com/";
```

Wie HTML-Umleitungen kann dies nicht auf alle Ressourcen angewendet werden, und offensichtlich funktioniert es nur bei Clients, die JavaScript ausführen. Andererseits gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Umleitung nur auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Rangfolge der Priorität

Mit drei Möglichkeiten, Umleitungen auszulösen, können mehrere gleichzeitig genutzt werden. Aber welche wird zuerst angewendet?

1. HTTP-Umleitungen werden immer zuerst ausgeführt — sie existieren, wenn es noch nicht einmal eine übertragene Seite gibt.
2. Überraschenderweise werden JavaScript-Umleitungen danach ausgeführt, noch vor HTML-Umleitungen. Das liegt daran, dass die `<meta>`-Umleitung nach dem _vollständig geladenen_ Zustand der Seite erfolgt, also nachdem alle Skripte ausgeführt wurden.
3. HTML-Umleitungen ({{HTMLElement("meta")}}) werden ausgeführt, falls keine HTTP- oder JavaScript-Umleitungen vor ausgeführt wurden, bevor die Seite geladen wurde.
4. Wenn es eine JavaScript-Umleitung gibt, die nach dem Laden der Seite erfolgt (zum Beispiel bei einem Button-Klick), wird sie zuletzt ausgeführt, falls die Seite nicht bereits durch die vorherigen Methoden umgeleitet wurde.

Wann immer möglich, verwenden Sie HTTP-Umleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Umleitungen hinzu. Wenn jemand die HTTP-Umleitungen ändert, aber vergisst, die HTML-Umleitungen zu ändern, werden die Umleitungen nicht mehr übereinstimmen, was zu einer Endlosschleife oder anderen Problemen führen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Umleitungen, aber da sich die Leistung mit jeder Umleitung verschlechtert, sollte ihr Einsatz auf ein Minimum beschränkt werden.

### Domain-Aliasing

Idealerweise gibt es einen Ort und damit eine URL für jede Ressource. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiger Fall ist, wenn eine Website bei `www.example.com` residiert, aber auch bei Zugriff auf `example.com` funktionieren soll. Umleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie könnten auch von häufigen Synonymen oder Tippfehlern Ihrer Domains umleiten.
- Umzug in eine neue Domäne
  - : Zum Beispiel wurde Ihr Unternehmen umbenannt, aber Sie möchten, dass bestehende Links oder Lesezeichen Sie weiterhin unter dem neuen Namen finden.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website umgeleitet.

### Links am Leben halten

Wenn Sie Websites umstrukturieren, ändern sich die URLs. Selbst wenn Sie die Links Ihrer Website aktualisieren, um den neuen URLs zu entsprechen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht unterbrechen, da sie wertvolle Benutzer bringen und Ihrem SEO helfen. Daher richten Sie Umleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, aber versuchen Sie, interne Umleitungen zu vermeiden. Eine Umleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage auftritt). Wenn Sie es vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen reparieren.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Zustand des Servers, und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

Normalerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}} anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, wird durch einfaches Drücken der Neuladen-Schaltfläche die Anfrage erneut gesendet (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL senden, die die richtigen Informationen enthält. Wenn die Neuladen-Schaltfläche gedrückt wird, wird nur diese Seite erneut angezeigt, ohne die unsicheren Anfragen erneut auszuführen.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die zur späteren Verarbeitung eingeplant sind. In diesem Fall ist die Antwort ein {{HTTPStatus("303")}} (See Other)-Umleitung, die auf eine Seite verweist, die anzeigt, dass die Aktion geplant wurde und eventuell über ihren Fortschritt informiert oder das Abbrechen ermöglicht.

## Konfigurieren von Umleitungen auf gängigen Servern

### Apache

Umleitungen können entweder in der Server-Konfigurationsdatei oder in der `.htaccess`-Datei jedes Verzeichnisses gesetzt werden.

Das Modul [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html) hat `Redirect`- und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Umleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` umgeleitet, ebenso wie alle Dateien oder Verzeichnisse darunter (`https://example.com/some-page` wird zu `https://www.example.com/some-page` umgeleitet)

`RedirectMatch` tut dasselbe, nimmt aber einen {{Glossary("regular_expression", "regulären Ausdruck")}}, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/`-Verzeichnis werden zu einer anderen Domain umgeleitet.

Wenn Sie keine temporäre Umleitung möchten, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Umleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das Modul [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) kann ebenfalls Umleitungen erstellen. Es ist flexibler, aber etwas komplexer.

### Nginx

In Nginx erstellen Sie einen speziellen Serverblock für den Inhalt, den Sie umleiten möchten:

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

Umleitungsschleifen treten auf, wenn zusätzliche Umleitungen auf die bereits gefolgte folgen. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird, und es wird nie eine Seite gefunden.

Meistens ist dies ein Serverproblem, und wenn der Server es erkennen kann, wird er eine {{HTTPStatus("500")}} `Interner Serverfehler` zurücksenden. Wenn Sie einen solchen Fehler kurz nach der Änderung einer Serverkonfiguration feststellen, handelt es sich wahrscheinlich um eine Umleitungsschleife.

Manchmal erkennt der Server es nicht: Eine Umleitungsschleife kann sich über mehrere Server erstrecken, die jeweils nicht das vollständige Bild haben. In diesem Fall werden es die Browser erkennen und eine Fehlermeldung anzeigen. Firefox zeigt:

> Firefox hat festgestellt, dass der Server die Anfrage für diese Adresse auf eine Art umleitet, die niemals endet.

…während Chrome anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer wenig machen (es sei denn, es tritt eine Korruption auf ihrer Seite auf, wie eine Cache- oder Cookie-Diskrepanz).

Es ist wichtig, Umleitungsschleifen zu vermeiden, da sie die Benutzererfahrung vollständig zerstören.

## Siehe auch

- [3XX-Umleitungsantwortstatus](/de/docs/Web/HTTP/Reference/Status#redirection_messages)
- {{HTTPHeader("Location")}}-Header
- [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft für Umleitung mit JavaScript
