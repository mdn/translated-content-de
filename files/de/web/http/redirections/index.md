---
title: Umleitungen in HTTP
slug: Web/HTTP/Redirections
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**URL-Weiterleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung mehr als eine URL-Adresse zu geben. HTTP hat eine spezielle Art von Antwort, genannt **_HTTP-Umleitung_**, für diesen Vorgang.

Umleitungen erfüllen zahlreiche Ziele:

- Temporäre Umleitungen während der Wartung oder Ausfallzeiten der Website
- Permanente Umleitungen, um bestehende Links/Lesezeichen nach Änderung der URLs der Website zu erhalten, Fortschrittsseiten beim Hochladen einer Datei usw.

## Prinzip

In HTTP wird die Umleitung durch einen speziellen _Umleitungs_antwort des Servers auf eine Anfrage ausgelöst. Umleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }} Header, der die Umleitungs-URL enthält.

Wenn Browser eine Umleitung erhalten, laden sie sofort die neue URL aus dem `Location`-Header. Abgesehen von dem kleinen Leistungseinbruch durch eine zusätzliche Round-Trip fällt den Nutzern die Umleitung selten auf.

<!--
%%{init: { "sequence": { "wrap": true, "width":250, "noteAlign": "center", "messageAlign": "center" }} }%%

sequenceDiagram
    participant Client
    participant Server

    Note left of Client: Anforderung der Ressource
    Client->>Server: GET /doc HTTP/1.1
    Note right of Server: Ressource verschoben<br>Antwort mit neuer Lokation
    Server->>Client: HTTP/1.1 301 Moved Permanently<br/>Location: /doc_new

    Note left of Client: Anforderung der Ressource an der neuen Lokation
    Client->>Server: GET /doc_new HTTP/1.1
    Note right of Server: Rückgabe der Ressource
    Server->>Client: HTTP/1.1 200 OK
-->

![Eine Anfrage vom Client an den Server. Der Server antwortet mit "301:moved permanently" und der neuen URL für die Ressource. Der Client stellt eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt verschiedene Arten von Umleitungen, die in drei Kategorien unterteilt sind:

1. [Permanente Umleitungen](#permanente_umleitungen)
2. [Temporäre Umleitungen](#temporäre_umleitungen)
3. [Spezielle Umleitungen](#spezielle_umleitungen)

### Permanente Umleitungen

Diese Umleitungen sollen dauerhaft bestehen. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet und durch die neue ersetzt werden sollte. Suchmaschinen-Roboter, RSS-Reader und andere Crawler werden die ursprüngliche URL der Ressource aktualisieren.

| Code  | Text                   | Methodenumgang                                                                                             | Typischer Anwendungsfall                                     |
| ----- | ---------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| `301` | `Moved Permanently`    | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können, müssen aber nicht in {{HTTPMethod("GET")}} geändert werden. [1] | Reorganisation einer Website.                                |
| `308` | `Permanent Redirect`   | Methode und Body nicht geändert.                                                                          | Reorganisation einer Website mit nicht-GET-Links/Vorgängen.  |

\[1] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde erstellt, um die Verhaltensmehrdeutigkeit beim Verwenden von nicht-`GET`-Methoden zu beseitigen.

### Temporäre Umleitungen

Manchmal kann die angeforderte Ressource nicht von ihrem kanonischen Ort aus aufgerufen werden, aber sie ist von einem anderen Ort aus erreichbar. In diesem Fall kann eine temporäre Umleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler merken sich die neue, temporäre URL nicht. Temporäre Umleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um vorübergehende Fortschrittsseiten anzuzeigen.

| Code  | Text                   | Methodenumgang                                                                                               | Typischer Anwendungsfall                                                                                                                                   |
| ----- | ---------------------- | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`                | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können, müssen aber nicht in {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                              |
| `303` | `See Other`            | {{HTTPMethod("GET")}}-Methoden unverändert. Andere werden in `GET` geändert (Body verloren).                  | Wird verwendet, um nach einer {{HTTPMethod("PUT")}} oder einer {{HTTPMethod("POST")}} umzuleiten, sodass das Aktualisieren der Ergebnisseite die Operation nicht erneut auslöst. |
| `307` | `Temporary Redirect`   | Methode und Body nicht geändert                                                                              | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn auf der Website nicht-`GET`-Vorgänge verfügbar sind. |

\[2] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde erstellt, um die Verhaltensmehrdeutigkeit beim Verwenden von nicht-`GET`-Methoden zu beseitigen.

### Spezielle Umleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zu der lokal zwischengespeicherten Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Umleitung: Der Body, der vom Browser als Webseite präsentiert wird, listet die möglichen Umleitungen auf und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text                 | Typischer Anwendungsfall                                                                                                                                                 |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `300` | `Multiple Choices`   | Nicht viele: Die Auswahlmöglichkeiten werden in einer HTML-Seite im Body aufgelistet. Maschinenlesbare Auswahlmöglichkeiten sollten als {{HTTPHeader("Link")}} Headers mit `rel=alternate` gesendet werden. |
| `304` | `Not Modified`       | Wird für erneuerte bedingte Anfragen gesendet. Zeigt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                |

## Alternative Möglichkeiten zur Angabe von Umleitungen

HTTP-Umleitungen sind nicht der einzige Weg, Umleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Umleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Umleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Umleitungen

HTTP-Umleitungen sind der beste Weg, Umleitungen zu erstellen, aber manchmal hat man keine Kontrolle über den Server. In diesem Fall versuchen Sie ein {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut, das auf `Refresh` im {{HTMLElement("head")}} der Seite gesetzt ist. Beim Anzeigen der Seite wird der Browser zur angegebenen URL weitergeleitet.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor er zur angegebenen URL umleitet. Setzen Sie es immer auf `0`, um die Barrierefreiheit zu gewährleisten.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Umleitungen

Umleitungen in JavaScript werden durch Setzen einer URL-Zeichenfolge auf die {{domxref("window.location")}}-Eigenschaft ausgeführt, wodurch die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Umleitungen funktioniert dies nicht bei allen Ressourcen und offensichtlich funktioniert es nur bei Clients, die JavaScript ausführen. Auf der anderen Seite gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Umleitung nur dann auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Priorität

Mit drei Möglichkeiten, Umleitungen auszulösen, können mehrere gleichzeitig verwendet werden. Aber welche wird zuerst angewendet?

1. HTTP-Umleitungen werden immer zuerst ausgeführt – sie existieren, wenn noch keine übertragene Seite vorhanden ist.
2. Etwas überraschend erfolgt die JavaScript-Umleitung als Nächstes, vor den HTML-Umleitungen. Dies liegt daran, dass die `<meta>`-Umleitung nach dem vollständigen Laden der Seite erfolgt, also nachdem alle Skripte ausgeführt wurden.
3. HTML-Umleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn keine HTTP-Umleitungen oder JavaScript-Umleitungen vor dem Laden der Seite ausgeführt wurden.
4. Wenn es eine JavaScript-Umleitung gibt, die nach dem Laden der Seite erfolgt (zum Beispiel bei einem Klick auf eine Schaltfläche), wird sie zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden umgeleitet wurde.

Verwenden Sie nach Möglichkeit HTTP-Umleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Umleitungen hinzu. Wenn jemand die HTTP-Umleitungen ändert, aber vergisst, die HTML-Umleitungen zu ändern, sind die Umleitungen nicht mehr identisch, was zu einer Endlosschleife oder anderen Albträumen führen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Umleitungen, aber da die Leistung mit jeder Umleitung beeinträchtigt wird, sollte ihre Nutzung auf ein Minimum beschränkt werden.

### Domain-Aliasing

Idealerweise gibt es einen Standort und daher eine URL für jede Ressource. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiger Fall ist, dass eine Website unter `www.example.com` liegt, aber auch von `example.com` aus erreichbar sein soll. Umleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie könnten auch von allgemeinen Synonymen oder häufigen Tippfehlern Ihrer Domains umleiten.
- Umzug zu einer neuen Domain
  - : Zum Beispiel wurde Ihr Unternehmen umbenannt, aber Sie möchten, dass vorhandene Links oder Lesezeichen Sie auch unter dem neuen Namen finden.
- Erzwungene Verwendung von [HTTPS](/de/docs/Glossary/HTTPS)
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website umgeleitet.

### Erhaltung von Links

Wenn Sie Websites umstrukturieren, ändern sich URLs. Auch wenn Sie die Links Ihrer Website aktualisieren, um die neuen URLs zu matchen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht brechen, da sie wertvolle Nutzer bringen und Ihr SEO unterstützen. Daher richten Sie Umleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, aber versuchen Sie, interne Umleitungen zu vermeiden. Eine Umleitung hat einen erheblichen Leistungseinbruch (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie dies vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen beheben.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsicher")}}-Anfragen ändern den Zustand des Servers, und der Benutzer sollte diese nicht unbeabsichtigt erneut senden.

Normalerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage liefern, führt ein einfaches Drücken der Neuladen-Schaltfläche dazu, dass die Anfrage erneut gesendet wird (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL zurücksenden, welche die richtigen Informationen enthält. Wenn die Neuladen-Schaltfläche gedrückt wird, wird nur diese Seite erneut angezeigt, ohne die unsicheren Anfragen erneut auszuführen.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die für eine spätere Bearbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Weiterleitung, die auf eine Seite verweist, die anzeigt, dass die Aktion geplant wurde und gegebenenfalls über ihren Fortschritt informiert oder ermöglicht, sie abzubrechen.

## Konfiguration von Umleitungen in gängigen Servern

### Apache

Umleitungen können entweder in der Server-Konfigurationsdatei oder in der `.htaccess` jedes Verzeichnisses festgelegt werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul hat `Redirect`- und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}} Umleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` umgeleitet, ebenso wie alle darunter liegenden Dateien oder Verzeichnisse (`https://example.com/some-page` wird zu `https://www.example.com/some-page` umgeleitet).

`RedirectMatch` tut dasselbe, verwendet jedoch einen {{glossary("regulären Ausdruck")}}, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/`-Verzeichnis werden zu einer anderen Domain umgeleitet.

Wenn Sie keine temporäre Umleitung möchten, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Umleitung einzustellen:

```apacheconf
Redirect permanent / https://www.example.com
# … wirkt genauso wie:
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

In IIS verwenden Sie das [`<httpRedirect>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpRedirect/) Element, um Umleitungen zu konfigurieren.

## Umleitungsschleifen

Umleitungsschleifen treten auf, wenn zusätzliche Umleitungen derjenigen folgen, die bereits gefolgt wurde. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird und keine Seite jemals gefunden wird.

Meistens ist dies ein Serverproblem, und wenn der Server es erkennen kann, wird er einen {{HTTPStatus("500")}} `Internal Server Error` zurücksenden. Wenn Sie auf einen solchen Fehler stoßen, nachdem Sie die Serverkonfiguration geändert haben, handelt es sich wahrscheinlich um eine Umleitungsschleife.

Manchmal wird der Server es nicht erkennen: Eine Umleitungsschleife kann sich über mehrere Server erstrecken, die jeweils nicht das vollständige Bild haben. In diesem Fall werden Browser es erkennen und eine Fehlermeldung anzeigen. Firefox zeigt an:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse auf eine Weise umleitet, die niemals endet.

…während Chrome anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es tritt ein Korruptionsproblem auf seiner Seite auf, wie ein Cache- oder Cookie-Fehler).

Es ist wichtig, Umleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig beeinträchtigen.
