---
title: Umleitungen im HTTP
slug: Web/HTTP/Redirections
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

**URL-Umleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP hat eine spezielle Art von Antwort, die als **_HTTP-Umleitung_** bezeichnet wird, für diesen Vorgang.

Umleitungen erfüllen zahlreiche Ziele:

- Temporäre Umleitungen während der Wartung oder bei Ausfallzeiten der Website
- Permanente Umleitungen, um bestehende Links/Lesezeichen nach einer Änderung der URLs der Seite zu erhalten, Fortschrittsseiten beim Hochladen einer Datei usw.

## Prinzip

Im HTTP wird eine Umleitung durch einen Server ausgelöst, der eine spezielle _Umleitungs_-Antwort auf eine Anfrage sendet. Umleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Status), die mit `3` beginnen, und ein {{ httpheader("Location") }}-Header, der die URL enthält, zu der umgeleitet werden soll.

Wenn Browser eine Umleitung empfangen, laden sie sofort die neue URL, die im `Location`-Header bereitgestellt wird. Abgesehen von dem kleinen Leistungseinbruch durch eine zusätzliche Runde-Trips bemerken Benutzer die Umleitung selten.

![Eine Anfrage, die vom Client an den Server gestellt wird. Der Server antwortet mit "301: dauerhaft verschoben" und der neuen URL für die Ressource. Der Client stellt eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt mehrere Arten von Umleitungen, die in drei Kategorien unterteilt sind:

1. [Permanente Umleitungen](#permanente_umleitungen)
2. [Temporäre Umleitungen](#temporäre_umleitungen)
3. [Spezielle Umleitungen](#spezielle_umleitungen)

### Permanente Umleitungen

Diese Umleitungen sollen dauerhaft sein. Sie bedeuten, dass die ursprüngliche URL nicht mehr verwendet werden sollte und durch die neue ersetzt werden muss. Suchmaschinenroboter, RSS-Leser und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Umgang mit Methoden                                                                                                            | Typischer Anwendungsfall                                       |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere können möglicherweise in {{HTTPMethod("GET")}} geändert werden. [1] | Neuorganisation einer Website.                                 |
| `308` | `Permanent Redirect` | Methode und Inhalt bleiben unverändert.                                                                                        | Neuorganisation einer Website mit nicht-GET-Links/Operationen. |

\[1] Die Spezifikation wollte keine Methodenänderungen erlauben, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von nicht-`GET`-Methoden zu beseitigen.

### Temporäre Umleitungen

Manchmal kann die angeforderte Ressource nicht von ihrem kanonischen Ort aus aufgerufen werden, jedoch an einem anderen Ort. In diesem Fall kann eine temporäre Umleitung verwendet werden.

Suchmaschinenroboter und andere Crawler speichern die neue, temporäre URL nicht. Temporäre Umleitungen werden auch verwendet, wenn Ressourcen erstellt, aktualisiert oder gelöscht werden, um vorübergehende Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Umgang mit Methoden                                                                                                            | Typischer Anwendungsfall                                                                                                                                                  |
| ----- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere können möglicherweise in {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                                             |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden bleiben unverändert. Andere werden zu `GET` geändert (Inhalt verloren).                         | Wird verwendet, um nach einem {{HTTPMethod("PUT")}} oder {{HTTPMethod("POST")}} umzuleiten, damit das Aktualisieren der Ergebnisseite nicht die Operation erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Inhalt bleiben unverändert.                                                                                        | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn nicht-`GET`-Operationen verfügbar sind.                              |

\[2] Die Spezifikation wollte keine Methodenänderungen erlauben, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde erstellt, um die Mehrdeutigkeit des Verhaltens bei der Verwendung von nicht-`GET`-Methoden zu beseitigen.

### Spezielle Umleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zur lokal zwischengespeicherten Kopie um (die veraltet war), und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Umleitung: der Inhalt, der vom Browser als Webseite präsentiert wird, listet die möglichen Umleitungen auf und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                                                |
| ----- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Auswahlmöglichkeiten sind in einer HTML-Seite im Inhalt aufgelistet. Maschinenlesbare Auswahlmöglichkeiten werden empfohlen, als {{HTTPHeader("Link")}}-Header mit `rel=alternate` gesendet zu werden. |
| `304` | `Not Modified`     | Wird für neuvalidierte bedingte Anfragen gesendet. Gibt an, dass die zwischengespeicherte Antwort noch aktuell ist und verwendet werden kann.                                                                           |

## Alternative Möglichkeiten zur Angabe von Umleitungen

HTTP-Umleitungen sind nicht der einzige Weg, um Umleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Umleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Umleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Umleitungen

HTTP-Umleitungen sind die beste Methode, um Umleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie es mit einem {{HTMLElement("meta")}}-Element mit dessen [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut, das im {{HTMLElement("head")}} der Seite auf `Refresh` gesetzt ist. Beim Anzeigen der Seite wird der Browser zur angegebenen URL gehen.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor zur angegebenen URL umgeleitet wird. Setzen Sie es immer auf `0` für Barrierefreiheitseinhaltung.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Umleitungen

Umleitungen in JavaScript werden ausgeführt, indem ein URL-String in die [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft gesetzt wird, wodurch die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Umleitungen funktioniert dies nicht bei allen Ressourcen, und offensichtlich funktioniert es nur auf Clients, die JavaScript ausführen. Auf der anderen Seite gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Umleitung nur auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Priorität

Mit drei Möglichkeiten, Umleitungen auszulösen, können mehrere gleichzeitig verwendet werden. Aber welche wird zuerst angewendet?

1. HTTP-Umleitungen werden immer zuerst ausgeführt – es gibt sie, wenn noch nicht einmal eine übertragene Seite vorhanden ist.
2. Überraschenderweise werden JavaScript-Umleitungen als nächstes ausgeführt, vor HTML-Umleitungen. Dies liegt daran, dass die `<meta>`-Umleitung erfolgt, nachdem die Seite _vollständig geladen_ wurde, was nach allen ausgeführten Skripten ist.
3. HTML-Umleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn es vorher keine HTTP-Umleitungen oder JavaScript-Umleitungen gab.
4. Wenn es eine JavaScript-Umleitung gibt, die nach dem Laden der Seite erfolgt (zum Beispiel beim Klicken auf einen Button), wird sie zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden umgeleitet wurde.

Wenn möglich, verwenden Sie HTTP-Umleitungen und fügen Sie keine {{HTMLElement("meta")}}-Elementumleitungen hinzu. Wenn jemand die HTTP-Umleitungen ändert, aber vergisst, die HTML-Umleitungen zu ändern, werden die Umleitungen nicht mehr identisch sein, was eine Endlosschleife oder andere Albträume verursachen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Umleitungen, aber da die Leistung bei jeder Umleitung beeinträchtigt wird, sollte ihr Einsatz auf ein Minimum beschränkt werden.

### Domain-Alias

Idealerweise gibt es für jede Ressource einen Standort und damit eine URL. Es gibt jedoch Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiges Szenario ist, wenn eine Website unter `www.example.com` liegt, das Zugreifen von `example.com` jedoch ebenfalls funktionieren soll. Umleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie könnten auch von häufig verwendeten Synonymen oder häufigen Tippfehlern Ihrer Domains umleiten.
- Umzug auf eine neue Domain
  - : Zum Beispiel hat Ihr Unternehmen einen neuen Namen erhalten, aber Sie möchten, dass bestehende Links oder Lesezeichen weiterhin unter dem neuen Namen zu finden sind.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version umgeleitet.

### Links am Leben halten

Wenn Sie Websites neu strukturieren, ändern sich URLs. Auch wenn Sie die Links Ihrer Website aktualisieren, um den neuen URLs zu entsprechen, haben Sie keine Kontrolle über die von externen Quellen verwendeten URLs.

Sie möchten diese Links nicht brechen, da sie wertvolle Nutzer bringen und Ihr SEO unterstützen, daher richten Sie Umleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert für interne Links, aber versuchen Sie, interne Umleitungen zu vermeiden. Eine Umleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie dies vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen beheben.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Zustand des Servers und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

Typischerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, löst ein einfaches Drücken des Aktualisierungsbuttons die Anfrage erneut aus (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL senden, die die richtigen Informationen enthält. Wenn der Aktualisierungsbutton gedrückt wird, wird nur diese Seite erneut angezeigt, ohne die unsicheren Anfragen erneut auszuführen.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, beispielsweise {{HTTPMethod("DELETE")}}-Anfragen, die für späteres Processing geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Umleitung, die auf eine Seite verweist, die angibt, dass die Aktion geplant wurde und schließlich über ihren Fortschritt informiert oder das Abbrechen ermöglicht.

## Konfigurieren von Umleitungen in gängigen Servern

### Apache

Umleitungen können entweder in der Serverkonfigurationsdatei oder in der `.htaccess` jeder Verzeichnisebene eingerichtet werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul verfügt über `Redirect`- und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Umleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` umgeleitet, ebenso wie alle Dateien oder Verzeichnisse darunter (`https://example.com/some-page` wird zu `https://www.example.com/some-page` umgeleitet).

`RedirectMatch` macht dasselbe, verwendet jedoch einen {{Glossary("regular_expression", "regulären Ausdruck")}}, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/`-Verzeichnis werden zu einer anderen Domain umgeleitet.

Wenn Sie keine temporäre Umleitung wünschen, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das `permanent`-Schlüsselwort) verwendet werden, um eine andere Umleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann ebenfalls Umleitungen erstellen. Es ist flexibler, aber auch etwas komplexer.

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

Umleitungsschleifen entstehen, wenn weiteren Umleitungen gefolgt wird, nachdem bereits einer Umleitung gefolgt wurde. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird und keine Seite wird jemals gefunden.

Meistens handelt es sich um ein Serverproblem, und wenn der Server es erkennen kann, sendet er eine {{HTTPStatus("500")}} `Internal Server Error`-Antwort zurück. Wenn Sie kurz nach dem Ändern einer Serverkonfiguration auf einen solchen Fehler stoßen, handelt es sich wahrscheinlich um eine Umleitungsschleife.

Manchmal erkennt der Server es nicht: Eine Umleitungsschleife kann sich über mehrere Server erstrecken, die nichts vom gesamten Bild wissen. In diesem Fall erkennen die Browser es und zeigen eine Fehlermeldung an. Firefox zeigt:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse auf eine Weise umleitet, die niemals enden wird.

...während Chrome folgendes anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer wenig tun (es sei denn, es tritt eine Beschädigung auf, wie z.B. ein Cache- oder Cookie-Mismatch).

Es ist wichtig, Umleitungsschleifen zu vermeiden, da sie das Benutzererlebnis vollständig beeinträchtigen.

## Siehe auch

- [3XX Umleitungs](/de/docs/Web/HTTP/Status#redirection_messages) Antwortstatus
- {{HTTPHeader("Location")}}-Header
- [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft für Umleitungen mithilfe von JavaScript
