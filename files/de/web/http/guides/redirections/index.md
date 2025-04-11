---
title: Umleitungen in HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

**URL-Umleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung mehr als eine URL-Adresse zu geben. HTTP hat eine spezielle Art von Antwort, bekannt als **_HTTP-Umleitung_**, für diese Operation.

Umleitungen erreichen zahlreiche Ziele:

- Temporäre Umleitungen während Wartungsarbeiten oder Ausfallzeiten der Website
- Permanente Umleitungen, um bestehende Links/Lesezeichen nach einer Änderung der URLs der Website zu erhalten, Fortschrittsseiten beim Hochladen einer Datei etc.

## Prinzip

Im HTTP wird eine Umleitung ausgelöst, indem ein Server eine spezielle _Umleitungs_-Antwort auf eine Anfrage sendet. Umleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Reference/Status), die mit `3` beginnen, sowie eine {{ httpheader("Location") }}-Header, der die URL enthält, auf die umgeleitet werden soll.

Wenn Browser eine Umleitung erhalten, laden sie die neue, im `Location`-Header angegebene URL sofort. Abgesehen von dem kleinen Leistungseinbruch durch eine zusätzliche Rundreise bemerken Benutzer die Umleitung selten.

![Eine Anfrage vom Client an den Server. Der Server antwortet mit "301:moved permanently" und der neuen URL für die Ressource. Der Client stellt eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Umleitungen, die in drei Kategorien sortiert sind:

1. [Permanente Umleitungen](#permanente_umleitungen)
2. [Temporäre Umleitungen](#temporäre_umleitungen)
3. [Spezielle Umleitungen](#spezielle_umleitungen)

### Permanente Umleitungen

Diese Umleitungen sollen für immer bestehen bleiben. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet werden sollte und durch die neue ersetzt werden soll. Suchmaschinen-Roboter, RSS-Reader und andere Crawler aktualisieren die ursprüngliche URL für die Ressource.

| Code  | Text                 | Methode gehandhabt                                                                                      | Typischer Anwendungsfall                                         |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können zu {{HTTPMethod("GET")}} geändert werden. [1] | Neustrukturierung einer Website.                                 |
| `308` | `Permanent Redirect` | Methode und Body nicht geändert.                                                                        | Neustrukturierung einer Website mit Nicht-GET-Links/Operationen. |

\[1] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde geschaffen, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Temporäre Umleitungen

Manchmal kann nicht auf die angeforderte Ressource an ihrem kanonischen Ort zugegriffen werden, aber sie kann von einem anderen Ort aus zugänglich gemacht werden. In diesem Fall kann eine temporäre Umleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler speichern die neue, temporäre URL nicht. Temporäre Umleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Methode gehandhabt                                                                                      | Typischer Anwendungsfall                                                                                                                                                            |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können zu {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist aus unvorhergesehenen Gründen vorübergehend nicht verfügbar.                                                                                                       |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden unverändert. Andere werden zu `GET` geändert (Body verloren).            | Wird nach einer {{HTTPMethod("PUT")}}- oder einer {{HTTPMethod("POST")}}-Operation verwendet, um zu vermeiden, dass ein Auffrischen der Ergebnisseite die Operation erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Body nicht geändert                                                                         | Die Webseite ist aus unvorhergesehenen Gründen vorübergehend nicht verfügbar. Besser als `302`, wenn auf der Website Nicht-`GET`-Operationen verfügbar sind.                        |

\[2] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde geschaffen, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Spezielle Umleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zur lokal zwischengespeicherten Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Umleitung: der Body, der vom Browser als Webseite präsentiert wird, listet die möglichen Umleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                                 |
| ----- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Auswahlmöglichkeiten sind in einer HTML-Seite im Body aufgelistet. Maschinenlesbare Auswahlmöglichkeiten sollten als {{HTTPHeader("Link")}}-Header mit `rel=alternate` gesendet werden. |
| `304` | `Not Modified`     | Wird für konditionale Neubewertungen gesendet. Gibt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                                                 |

## Alternative Wege zur Angabe von Umleitungen

HTTP-Umleitungen sind nicht die einzige Möglichkeit, Umleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Umleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Umleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Umleitungen

HTTP-Umleitungen sind der beste Weg, Umleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie es mit einem {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Attribut, das auf `Refresh` im {{HTMLElement("head")}} der Seite gesetzt ist. Beim Anzeigen der Seite wird der Browser zur angegebenen URL weitergeleitet.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor er zur angegebenen URL weiterleitet. Setzen Sie es immer auf `0`, um die Barrierefreiheit zu gewährleisten.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Inhaltstypen verwendet werden.

### JavaScript-Umleitungen

Umleitungen in JavaScript werden durchgeführt, indem eine URL-Zeichenkette der [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft zugewiesen wird und die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Umleitungen kann dies nicht auf alle Ressourcen angewendet werden, und offensichtlich funktioniert dies nur bei Clients, die JavaScript ausführen. Andererseits gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Umleitung nur dann auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Ausführung

Mit drei Möglichkeiten, Umleitungen auszulösen, können mehrere Wege gleichzeitig verwendet werden. Aber welche wird zuerst ausgeführt?

1. HTTP-Umleitungen werden immer zuerst ausgeführt - sie existieren, wenn noch nicht einmal eine Seite übertragen wurde.
2. Etwas überraschend ist, dass JavaScript-Umleitungen als nächstes ausgeführt werden, vor HTML-Umleitungen. Dies liegt daran, dass die `<meta>`-Umleitung erfolgt, nachdem die Seite _vollständig geladen_ ist, was nach der Ausführung aller Skripte geschieht.
3. HTML-Umleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn es keine HTTP-Umleitungen oder JavaScript-Umleitungen gab, die ausgeführt wurden, bevor die Seite geladen wurde.
4. Wenn es eine JavaScript-Umleitung gibt, die nach dem Laden der Seite erfolgt (zum Beispiel bei einem Klick auf eine Schaltfläche), wird sie zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden umgeleitet wurde.

Wenn möglich, verwenden Sie HTTP-Umleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Umleitungen hinzu. Wenn jemand die HTTP-Umleitungen ändert, aber vergisst, die HTML-Umleitungen zu ändern, sind die Umleitungen nicht mehr identisch, was zu einer Endlosschleife oder anderen Problemen führen kann.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Umleitungen, aber da die Leistung mit jeder Umleitung beeinträchtigt wird, sollte deren Verwendung auf ein Minimum beschränkt werden.

### Domain-Alias

Idealerweise gibt es für jede Ressource einen Ort und daher eine URL. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiger Fall ist, wenn eine Site unter `www.example.com` liegt, der Zugriff aber auch über `example.com` funktionieren sollte. Umleitungen von `example.com` nach `www.example.com` werden daher eingerichtet. Sie könnten auch von gängigen Synonymen oder häufigen Tippfehlern Ihrer Domains umleiten.
- Umzug auf eine neue Domain
  - : Beispielsweise wurde Ihre Firma umbenannt, aber Sie möchten, dass bestehende Links oder Lesezeichen Sie unter dem neuen Namen finden.
- Erzwingung von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website umgeleitet.

### Links am Leben erhalten

Wenn Sie Websites neu strukturieren, ändern sich die URLs. Auch wenn Sie die Links Ihrer Website aktualisieren, um sie mit den neuen URLs übereinstimmen zu lassen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht brechen, da sie wertvolle Benutzer bringen und Ihrem SEO helfen, sodass Sie Umleitungen von den alten URLs zu den neuen einrichten.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, versuchen Sie jedoch, interne Umleitungen zu vermeiden. Eine Umleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie dies vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen reparieren.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Status des Servers und der Nutzer sollte sie nicht unabsichtlich erneut senden.

Typischerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, wird durch Drücken der Aktualisieren-Schaltfläche die Anfrage erneut gesendet (möglicherweise nach einer Bestätigungsnachricht).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort an eine URL senden, die die richtigen Informationen enthalten wird. Wenn die Aktualisieren-Schaltfläche gedrückt wird, wird nur diese Seite angezeigt, ohne die unsicheren Anfragen erneut abzuspielen.

### Temporäre Antworten auf langwierige Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die für eine spätere Verarbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Umleitung, die auf eine Seite verweist, die angibt, dass die Aktion geplant wurde und möglicherweise über ihren Fortschritt informiert oder ihre Stornierung ermöglicht.

## Konfigurieren von Umleitungen auf gängigen Servern

### Apache

Umleitungen können entweder in der Server-Konfigurationsdatei oder in der `.htaccess` jeder Verzeichnisebene eingestellt werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul verfügt über `Redirect` und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Umleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` umgeleitet, ebenso wie alle darunterliegenden Dateien oder Verzeichnisse (`https://example.com/some-page` wird auf `https://www.example.com/some-page` umgeleitet).

`RedirectMatch` tut dasselbe, verwendet jedoch einen {{Glossary("regular_expression", "regulären Ausdruck")}}, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/`-Verzeichnis werden zu einer anderen Domain umgeleitet.

Wenn Sie keine temporäre Umleitung wünschen, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Umleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann ebenfalls Umleitungen erstellen. Es ist flexibler, aber etwas komplexer.

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

Umleitungsschleifen entstehen, wenn zusätzlich zu einer bereits verfolgten Umleitung weitere Umleitungen folgen. Mit anderen Worten existiert eine Schleife, die nie abgeschlossen wird und niemals eine Seite gefunden wird.

Meistens ist dies ein Serverproblem, und wenn der Server es erkennen kann, sendet er einen {{HTTPStatus("500")}} `Internal Server Error` zurück. Wenn Sie auf einen solchen Fehler kurz nach der Änderung einer Serverkonfiguration stoßen, handelt es sich wahrscheinlich um eine Umleitungsschleife.

Manchmal erkennt der Server es nicht: Eine Umleitungsschleife kann über mehrere Server hinweg gehen, die jeweils nicht das Gesamtbild haben. In diesem Fall erkennen es Browser und zeigen eine Fehlermeldung an. Firefox zeigt:

> Firefox hat festgestellt, dass der Server die Anfrage für diese Adresse auf eine Weise umleitet, die niemals endet.

...während Chrome anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer nicht viel unternehmen (es sei denn, eine Korrumpierung tritt auf seiner Seite auf, wie ein Missverhältnis zwischen Cache oder Cookies).

Es ist wichtig, Umleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig beeinträchtigen.

## Siehe auch

- [3XX-Umleitungs](/de/docs/Web/HTTP/Reference/Status#redirection_messages)-Antwortstatuscodes
- {{HTTPHeader("Location")}}-Header
- [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft für Umleitungen in JavaScript
