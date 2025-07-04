---
title: Weiterleitungen in HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**URL-Weiterleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP hat eine spezielle Art von Antwort, genannt **_HTTP-Weiterleitung_**, für diesen Vorgang.

Weiterleitungen erfüllen zahlreiche Ziele:

- Temporäre Weiterleitungen während Wartungs- oder Ausfallzeiten der Website
- Permanente Weiterleitungen, um bestehende Links/Lesezeichen nach Änderung der URLs der Website zu bewahren, Fortschrittsseiten beim Hochladen einer Datei usw.

## Grundprinzip

In HTTP wird eine Weiterleitung ausgelöst, indem ein Server eine spezielle _Weiterleitungs_-Antwort auf eine Anfrage sendet. Weiterleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Reference/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }} Header, der die URL enthält, zu der weitergeleitet werden soll.

Wenn Browser eine Weiterleitung erhalten, laden sie sofort die neue URL, die im `Location` Header angegeben ist. Abgesehen von dem kleinen Leistungseinbruch durch eine zusätzliche Round-Trip-Anfrage bemerken Benutzer die Weiterleitung selten.

![Eine Anfrage, die vom Client an den Server gestellt wird. Der Server antwortet mit "301: dauerhaft verschoben" und der neuen URL für die Ressource. Der Client stellt eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Weiterleitungen, die in drei Kategorien unterteilt sind:

1. [Permanente Weiterleitungen](#permanente_weiterleitungen)
2. [Temporäre Weiterleitungen](#temporäre_weiterleitungen)
3. [Spezielle Weiterleitungen](#spezielle_weiterleitungen)

### Permanente Weiterleitungen

Diese Weiterleitungen sind dazu gedacht, dauerhaft zu bestehen. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet werden sollte und durch die neue ersetzt werden muss. Suchmaschinen-Robots, RSS-Reader und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Method-Handling                                                                                                                | Typischer Anwendungsfall                                        |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere können möglicherweise in {{HTTPMethod("GET")}} geändert werden. [1] | Umstrukturierung einer Website.                                 |
| `308` | `Permanent Redirect` | Methode und Body bleiben unverändert.                                                                                          | Umstrukturierung einer Website mit nicht-GET-Links/Operationen. |

\[1] Die Spezifikation beabsichtigte nicht, Method-Änderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde geschaffen, um die Ambiguität des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Temporäre Weiterleitungen

Manchmal kann auf die angeforderte Ressource nicht an ihrem kanonischen Speicherort zugegriffen werden, sondern an einem anderen Ort. In diesem Fall kann eine temporäre Weiterleitung verwendet werden.

Suchmaschinen-Robots und andere Crawler merken sich die neue, temporäre URL nicht. Temporäre Weiterleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Method-Handling                                                                                                                | Typischer Anwendungsfall                                                                                                                                                            |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere können möglicherweise in {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist aus unvorhergesehenen Gründen vorübergehend nicht verfügbar.                                                                                                       |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere _werden_ auf `GET` geändert (Body geht verloren).                   | Wird verwendet, um nach einer {{HTTPMethod("PUT")}} oder einer {{HTTPMethod("POST")}} weiterzuleiten, sodass das Aktualisieren der Ergebnissseite den Vorgang nicht erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Body bleiben unverändert                                                                                           | Die Webseite ist aus unvorhergesehenen Gründen vorübergehend nicht verfügbar. Besser als `302`, wenn auf der Website nicht-`GET`-Operationen verfügbar sind.                        |

\[2] Die Spezifikation beabsichtigte nicht, Method-Änderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde geschaffen, um die Ambiguität des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu beseitigen.

### Spezielle Weiterleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zur lokal zwischengespeicherten Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Weiterleitung: Der Body, der vom Browser als Webseite dargestellt wird, listet die möglichen Weiterleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                                                 |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `300` | `Multiple Choices` | Nicht viele: Die Auswahlmöglichkeiten werden in einer HTML-Seite im Body aufgelistet. Maschinell lesbare Auswahlmöglichkeiten werden ermutigt, als {{HTTPHeader("Link")}} Header mit `rel=alternate` gesendet zu werden. |
| `304` | `Not Modified`     | Wird für überprüfte konditionale Anfragen gesendet. Zeigt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                                                           |

## Alternative Möglichkeiten zur Spezifizierung von Weiterleitungen

HTTP-Weiterleitungen sind nicht der einzige Weg, um Weiterleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Weiterleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Weiterleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Weiterleitungen

HTTP-Weiterleitungen sind der beste Weg, um Weiterleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie ein {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Attribut, das im {{HTMLElement("head")}} der Seite auf `Refresh` gesetzt ist. Beim Anzeigen der Seite wird der Browser zur angegebenen URL gehen.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten sollte, bevor er auf die angegebene URL weiterleitet. Setzen Sie es immer auf `0` für Barrierefreiheit.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Inhalte verwendet werden.

### JavaScript-Weiterleitungen

Weiterleitungen in JavaScript werden durchgeführt, indem eine URL-Zeichenkette auf die [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft gesetzt wird und die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Weiterleitungen kann dies nicht bei allen Ressourcen funktionieren, und offensichtlich funktioniert dies nur auf Clients, die JavaScript ausführen. Auf der anderen Seite gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Weiterleitung nur auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Priorität

Mit drei Möglichkeiten, Weiterleitungen auszulösen, können mehrere Möglichkeiten gleichzeitig verwendet werden. Aber welche wird zuerst angewendet?

1. HTTP-Weiterleitungen werden immer zuerst ausgeführt – sie existieren, wenn noch nicht einmal eine übertragene Seite vorhanden ist.
2. Etwas überraschend werden JavaScript-Weiterleitungen als nächstes ausgeführt, vor HTML-Weiterleitungen. Dies liegt daran, dass die `<meta>`-Weiterleitung nach dem _vollständigen Laden_ der Seite erfolgt, was nach der Ausführung aller Skripte der Fall ist.
3. HTML-Weiterleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn es keine HTTP-Weiterleitungen oder JavaScript-Weiterleitungen gibt, die vor dem Laden der Seite ausgeführt wurden.
4. Wenn es irgendeine JavaScript-Weiterleitung gibt, die nach dem Laden der Seite passiert (zum Beispiel bei einem Klick auf einen Button), wird sie zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden weitergeleitet wurde.

Wenn möglich, verwenden Sie HTTP-Weiterleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Weiterleitungen hinzu. Wenn jemand die HTTP-Weiterleitungen ändert, aber vergisst, die HTML-Weiterleitungen zu ändern, werden die Weiterleitungen nicht mehr identisch sein, was eine Endlosschleife oder andere Albträume verursachen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Weiterleitungen, aber da die Leistung bei jeder Weiterleitung beeinträchtigt wird, sollte ihre Verwendung auf ein Minimum beschränkt werden.

### Domain-Alias

Idealerweise gibt es einen Ort und daher eine URL für jede Ressource. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiger Fall ist, wenn eine Website unter `www.example.com` zu finden ist, aber der Zugriff von `example.com` aus ebenfalls funktionieren sollte. Weiterleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie könnten auch von häufigen Synonymen oder häufigen Tippfehlern Ihrer Domains weiterleiten.
- Umzug in eine neue Domain
  - : Zum Beispiel wurde Ihr Unternehmen umbenannt, aber Sie möchten, dass bestehende Links oder Lesezeichen Sie auch unter dem neuen Namen finden.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website weitergeleitet.

### Links lebendig halten

Wenn Sie Websites umstrukturieren, ändern sich die URLs. Auch wenn Sie die Links Ihrer Website aktualisieren, um die neuen URLs zu entsprechen, haben Sie keine Kontrolle über die URLs, die von externen Ressourcen verwendet werden.

Sie möchten diese Links nicht brechen, da sie wertvolle Benutzer bringen und Ihrem SEO helfen, also richten Sie Weiterleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert für interne Links, aber versuchen Sie, interne Weiterleitungen zu vermeiden. Eine Weiterleitung hat einen signifikanten Leistungseinfluss (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie es vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen beheben.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Zustand des Servers und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

Typischerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}} Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, wird durch Drücken der Aktualisierungsschaltfläche die Anfrage erneut gesendet (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL zurücksenden, die die richtige Information enthält. Wenn die Aktualisierungsschaltfläche gedrückt wird, wird nur diese Seite erneut angezeigt, ohne dass die unsicheren Anfragen erneut ausgeführt werden.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die zur späteren Verarbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Weiterleitung, die auf eine Seite verweist, die angibt, dass die Aktion geplant wurde und möglicherweise über den Fortschritt informiert oder deren Abbruch ermöglicht.

## Konfiguration von Weiterleitungen auf gängigen Servern

### Apache

Weiterleitungen können entweder in der Serverkonfigurationsdatei oder in der `.htaccess`-Datei jedes Verzeichnisses eingerichtet werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul verfügt über `Redirect`- und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Weiterleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` weitergeleitet, ebenso wie alle Dateien oder Verzeichnisse darunter (`https://example.com/some-page` wird zu `https://www.example.com/some-page` weitergeleitet).

`RedirectMatch` tut dasselbe, aber nimmt einen {{Glossary("regular_expression", "regulären Ausdruck")}} zur Definition einer Sammlung betroffener URLs an:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/` Verzeichnis werden zu einer anderen Domain weitergeleitet.

Wenn Sie keine temporäre Weiterleitung wünschen, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Weiterleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann auch Weiterleitungen erstellen. Es ist flexibler, aber ein wenig komplexer.

### Nginx

In Nginx erstellen Sie einen spezifischen Serverblock für den Inhalt, den Sie weiterleiten möchten:

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

Um eine Weiterleitung auf ein Verzeichnis oder nur bestimmte Seiten anzuwenden, verwenden Sie die `rewrite`-Direktive:

```nginx
rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
```

### IIS

In IIS verwenden Sie das [`<httpRedirect>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpRedirect/)-Element, um Weiterleitungen zu konfigurieren.

## Weiterleitungsschleifen

Weiterleitungsschleifen treten auf, wenn zusätzliche Weiterleitungen auf die bereits gefolgte Weiterleitung folgen. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird und keine Seite jemals gefunden wird.

Meistens ist dies ein Serverproblem, und wenn der Server es erkennen kann, wird er eine {{HTTPStatus("500")}} `Internal Server Error` zurücksenden. Wenn Sie auf einen solchen Fehler stoßen, kurz nachdem Sie eine Serverkonfiguration geändert haben, handelt es sich wahrscheinlich um eine Weiterleitungsschleife.

Manchmal erkennt der Server sie nicht: Eine Weiterleitungsschleife kann über mehrere Server verteilt sein, die jeweils nicht das gesamte Bild haben. In diesem Fall werden Browser sie erkennen und eine Fehlermeldung anzeigen. Firefox zeigt an:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse auf eine Weise umleitet, die niemals beendet wird.

...während Chrome anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es tritt eine Beschädigung auf ihrer Seite auf, wie ein Cache- oder Cookie-Konflikt).

Es ist wichtig, Weiterleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig beeinträchtigen.

## Siehe auch

- [3XX-Weiterleitungen](/de/docs/Web/HTTP/Reference/Status#redirection_messages) Antwortstatuscodes
- {{HTTPHeader("Location")}} Header
- [`window.location`](/de/docs/Web/API/Window/location) Eigenschaft zur Weiterleitung mit JavaScript
