---
title: Weiterleitungen in HTTP
slug: Web/HTTP/Guides/Redirections
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

{{HTTPSidebar}}

**URL-Weiterleitung**, auch bekannt als _URL-Forwarding_, ist eine Technik, um mehreren URL-Adressen einer Seite, einem Formular, einer gesamten Website oder einer Webanwendung zuzuweisen. HTTP hat eine spezielle Art von Antwort, genannt **_HTTP-Weiterleitung_**, für diese Operation.

Weiterleitungen erreichen mehrere Ziele:

- Temporäre Weiterleitungen während der Wartung oder Ausfallzeiten der Website
- Permanente Weiterleitungen, um bestehende Links/Lesezeichen nach Änderungen der URLs der Website zu erhalten, Fortschrittsseiten beim Hochladen einer Datei, usw.

## Prinzip

In HTTP wird die Weiterleitung durch einen Server ausgelöst, der eine spezielle _Weiterleitungsantwort_ auf eine Anfrage sendet. Weiterleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Reference/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }} Header, der die URL enthält, zu der weitergeleitet werden soll.

Wenn Browser eine Weiterleitung erhalten, laden sie sofort die neue URL, die im `Location`-Header angegeben ist. Abgesehen von dem kleinen Leistungseinbruch durch eine zusätzliche Rundreise merken Benutzer selten etwas von der Weiterleitung.

![Eine Anfrage vom Client an den Server. Der Server antwortet mit "301: moved permanently" und der neuen URL für die Ressource. Der Client stellt eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Weiterleitungen, die in drei Kategorien unterteilt werden:

1. [Permanente Weiterleitungen](#permanente_weiterleitungen)
2. [Temporäre Weiterleitungen](#temporäre_weiterleitungen)
3. [Besondere Weiterleitungen](#besondere_weiterleitungen)

### Permanente Weiterleitungen

Diese Weiterleitungen sollen für immer bestehen bleiben. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet werden sollte und durch die neue ersetzt werden muss. Suchmaschinen-Roboter, RSS-Leser und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Behandlungsweise der Methode                                                                            | Typischer Anwendungsfall                                         |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}} Methoden unverändert. Andere können zu {{HTTPMethod("GET")}} geändert werden. [1] | Neustrukturierung einer Website.                                 |
| `308` | `Permanent Redirect` | Methode und Inhalt nicht geändert.                                                                      | Neustrukturierung einer Website bei nicht-GET Links/Operationen. |

\[1] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde geschaffen, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von nicht-`GET` Methoden zu beseitigen.

### Temporäre Weiterleitungen

Manchmal kann die angeforderte Ressource nicht von ihrem kanonischen Standort aus zugänglich sein, aber sie kann von einem anderen Ort aus zugänglich sein. In diesem Fall kann eine temporäre Weiterleitung verwendet werden.

Suchmaschinen-Roboter und andere Crawler merken sich die neue, temporäre URL nicht. Temporäre Weiterleitungen werden auch beim Erstellen, Aktualisieren oder Löschen von Ressourcen verwendet, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Behandlungsweise der Methode                                                                            | Typischer Anwendungsfall                                                                                                                                                             |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `302` | `Found`              | {{HTTPMethod("GET")}} Methoden unverändert. Andere können zu {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist aus unvorhergesehenen Gründen vorübergehend nicht verfügbar.                                                                                                        |
| `303` | `See Other`          | {{HTTPMethod("GET")}} Methoden unverändert. Andere _geändert_ zu `GET` (Inhalt verloren).               | Wird verwendet, um nach einem {{HTTPMethod("PUT")}} oder einem {{HTTPMethod("POST")}} weiterzuleiten, damit das Aktualisieren der Ergebnis-Seite die Operation nicht erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Inhalt nicht geändert                                                                       | Die Webseite ist aus unvorhergesehenen Gründen vorübergehend nicht verfügbar. Besser als `302`, wenn auf der Website nicht-`GET`-Operationen verfügbar sind.                         |

\[2] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde geschaffen, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von nicht-`GET` Methoden zu beseitigen.

### Besondere Weiterleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zur lokal zwischengespeicherten Kopie um (die veraltet war), und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Weiterleitung: Der Browser zeigt den Körper als Webseite an, die möglichen Weiterleitungen auflistet, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                           |
| ----- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Auswahlmöglichkeiten werden in einer HTML-Seite im Körper aufgelistet. Maschinell lesbare Optionen sollten als {{HTTPHeader("Link")}} Header mit `rel=alternate` gesendet werden. |
| `304` | `Not Modified`     | Wird für validierte bedingte Anfragen gesendet. Gibt an, dass die gecachte Antwort noch frisch ist und verwendet werden kann.                                                                      |

## Alternative Möglichkeit der Spezifizierung von Weiterleitungen

HTTP-Weiterleitungen sind nicht der einzige Weg, um Weiterleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Weiterleitungen mit dem {{HTMLElement("meta")}} Element
2. JavaScript-Weiterleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Weiterleitungen

HTTP-Weiterleitungen sind der beste Weg, um Weiterleitungen zu erstellen, aber manchmal hat man keine Kontrolle über den Server. In diesem Fall versuchen Sie, ein {{HTMLElement("meta")}} Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Attribut, das auf `Refresh` im {{HTMLElement("head")}} der Seite gesetzt ist. Wenn die Seite angezeigt wird, wechselt der Browser zur angegebenen URL.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Reference/Elements/meta#content) Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor er zu der angegebenen URL weiterleitet. Setzen Sie es immer auf `0` zur Einhaltung der Barrierefreiheit.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Inhaltstypen verwendet werden.

### JavaScript-Weiterleitungen

Weiterleitungen in JavaScript werden durchgeführt, indem ein URL-String auf die [`window.location`](/de/docs/Web/API/Window/location) Eigenschaft gesetzt wird, um die neue Seite zu laden:

```js
window.location = "https://example.com/";
```

Wie HTML-Weiterleitungen können diese nicht für alle Ressourcen funktionieren, und natürlich werden sie nur auf Clients funktionieren, die JavaScript ausführen. Auf der anderen Seite gibt es mehr Möglichkeiten: zum Beispiel können Sie die Weiterleitung nur auslösen, wenn einige Bedingungen erfüllt sind.

### Prioritätsreihenfolge

Mit drei Möglichkeiten, Weiterleitungen auszulösen, können mehrere gleichzeitig verwendet werden. Aber welche wird zuerst angewendet?

1. HTTP-Weiterleitungen werden immer zuerst ausgeführt — sie existieren, wenn noch nicht einmal eine übertragene Seite vorhanden ist.
2. Etwas überraschend ist, dass JavaScript-Weiterleitungen als nächstes ausgeführt werden, vor HTML-Weiterleitungen. Dies liegt daran, dass die `<meta>` Weiterleitung nach dem vollständigen Laden der Seite erfolgt, nachdem alle Skripte ausgeführt wurden.
3. HTML-Weiterleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn keine HTTP-Weiterleitungen oder JavaScript-Weiterleitungen ausgeführt wurden, bevor die Seite geladen wurde.
4. Wenn es eine JavaScript-Weiterleitung gibt, die nach dem Laden der Seite passiert (zum Beispiel beim Klicken auf einen Button), wird diese zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden weitergeleitet wurde.

Wenn möglich, verwenden Sie HTTP-Weiterleitungen und fügen Sie keine {{HTMLElement("meta")}} Weiterleitungselemente hinzu. Wenn jemand die HTTP-Weiterleitungen ändert, aber vergisst, die HTML-Weiterleitungen zu ändern, sind die Weiterleitungen nicht mehr identisch, was eine Endlosschleife oder andere Probleme verursachen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Weiterleitungen, aber da die Leistung bei jeder Weiterleitung beeinträchtigt wird, sollte deren Nutzung auf ein Minimum beschränkt werden.

### Domain Aliasing

Idealerweise gibt es einen Standort, und damit eine URL, für jede Ressource. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiges Beispiel ist, wenn eine Seite unter `www.example.com` liegt, aber auch von `example.com` aus zugänglich sein sollte. Weiterleitungen für `example.com` zu `www.example.com` werden daher eingerichtet. Sie können auch von häufigen Synonymen oder häufigen Tippfehlern Ihrer Domains weiterleiten.
- Umzug zu einer neuen Domain
  - : Zum Beispiel wurde Ihr Unternehmen umbenannt, aber Sie möchten, dass bestehende Links oder Lesezeichen Sie immer noch unter dem neuen Namen finden.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://` Version Ihrer Seite werden auf die `https://` Version Ihrer Seite umgeleitet.

### Links am Leben halten

Wenn Sie Websites neu strukturieren, ändern sich URLs. Selbst wenn Sie die Links Ihrer Website aktualisieren, um den neuen URLs zu entsprechen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht unterbrechen, da sie wertvolle Benutzer bringen und Ihr SEO verbessern. Daher richten Sie Weiterleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, aber versuchen Sie, interne Weiterleitungen zu vermeiden. Eine Weiterleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie dies durch Korrektur interner Links vermeiden können, sollten Sie diese Links stattdessen korrigieren.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Zustand des Servers und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

Typischerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}} Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, löst ein Druck auf die Aktualisieren-Schaltfläche die Anfrage erneut aus (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other) Antwort für eine URL senden, die die richtigen Informationen enthält. Wenn die Aktualisieren-Schaltfläche gedrückt wird, wird nur diese Seite erneut angezeigt, ohne die unsicheren Anfragen erneut auszuführen.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}} Anfragen, die für eine spätere Verarbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other) Weiterleitung, die auf eine Seite verweist, die anzeigt, dass die Aktion geplant ist, und letztlich über den Fortschritt informiert oder die Möglichkeit bietet, diese abzubrechen.

## Konfigurieren von Weiterleitungen auf gängigen Servern

### Apache

Weiterleitungen können entweder in der Serverkonfigurationsdatei oder in der `.htaccess` Datei jedes Verzeichnisses eingerichtet werden.

Das Modul [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html) hat `Redirect` und `RedirectMatch` Direktiven, die standardmäßig {{HTTPStatus("302")}} Weiterleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` weitergeleitet, ebenso wie alle Dateien oder Verzeichnisse darunter (`https://example.com/some-page` wird zu `https://www.example.com/some-page` weitergeleitet).

`RedirectMatch` tut dasselbe, aber verwendet einen {{Glossary("regular_expression", "regulären Ausdruck")}}, um eine Sammlung von betroffenen URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/` Verzeichnis werden auf eine andere Domain umgeleitet.

Wenn Sie keine temporäre Weiterleitung möchten, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Weiterleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das Modul [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html) kann ebenfalls Weiterleitungen erstellen. Es ist flexibler, aber etwas komplexer.

### Nginx

In Nginx erstellen Sie einen spezifischen Serverblock für den Inhalt, den Sie umleiten möchten:

```nginx
server {
  listen 80;
  server_name example.com;
  return 301 $scheme://www.example.com$request_uri;
}
```

Um eine Weiterleitung auf ein Verzeichnis oder nur bestimmte Seiten anzuwenden, verwenden Sie die `rewrite` Direktive:

```nginx
rewrite ^/images/(.*)$ https://images.example.com/$1 redirect;
rewrite ^/images/(.*)$ https://images.example.com/$1 permanent;
```

### IIS

In IIS verwenden Sie das [`<httpRedirect>`](https://learn.microsoft.com/en-us/iis/configuration/system.webServer/httpRedirect/) Element, um Weiterleitungen zu konfigurieren.

## Weiterleitungsschleifen

Weiterleitungsschleifen treten auf, wenn zusätzliche Weiterleitungen derjenigen folgen, die bereits verfolgt wurde. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird und keine Seite jemals gefunden wird.

Meist ist dies ein Serverproblem, und wenn der Server es erkennen kann, sendet er eine {{HTTPStatus("500")}} `Internal Server Error` zurück. Wenn Sie einen solchen Fehler kurz nach der Änderung einer Serverkonfiguration erhalten, handelt es sich wahrscheinlich um eine Weiterleitungsschleife.

Manchmal erkennt der Server dies nicht: Eine Weiterleitungsschleife kann sich über mehrere Server erstrecken, von denen jeder nicht das vollständige Bild hat. In diesem Fall erkennen die Browser dies und zeigen eine Fehlermeldung an. Firefox zeigt:

> Firefox hat festgestellt, dass der Server die Anfrage für diese Adresse so umleitet, dass sie nie endet.

…während Chrome anzeigt:

> Diese Webseite hat eine Weiterleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es tritt eine Beschädigung auf seiner Seite auf, wie ein Cache- oder Cookies-Mismatch).

Es ist wichtig, Weiterleitungsschleifen zu vermeiden, da sie die Benutzererfahrung vollständig zerstören.

## Siehe auch

- [3XX Weiterleitungsantworten](/de/docs/Web/HTTP/Reference/Status#redirection_messages)
- {{HTTPHeader("Location")}} Header
- [`window.location`](/de/docs/Web/API/Window/location) Eigenschaft für Weiterleitungen mit JavaScript
