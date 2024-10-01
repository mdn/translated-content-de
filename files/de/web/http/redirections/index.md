---
title: Weiterleitungen in HTTP
slug: Web/HTTP/Redirections
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{HTTPSidebar}}

**URL-Weiterleitung**, auch bekannt als _URL-Weiterleitung_, ist eine Technik, um einer Seite, einem Formular, einer ganzen Website oder einer Webanwendung mehr als eine URL-Adresse zuzuweisen. HTTP verfügt über eine spezielle Art von Antwort, die als **_HTTP-Weiterleitung_** bezeichnet wird und für diese Operation verwendet wird.

Weiterleitungen erfüllen zahlreiche Ziele:

- Temporäre Weiterleitungen während der Wartung oder Ausfallzeiten einer Website
- Permanente Weiterleitungen, um bestehende Links/Lesezeichen zu bewahren, nachdem die URLs der Website geändert wurden, Fortschrittsseiten beim Hochladen einer Datei usw.

## Prinzip

In HTTP wird die Weiterleitung durch einen speziellen _Weiterleitungs_-Antwortcode des Servers ausgelöst. Weiterleitungsantworten haben [Statuscodes](/de/docs/Web/HTTP/Status), die mit `3` beginnen, und einen {{ httpheader("Location") }}-Header, der die URL enthält, zu der weitergeleitet werden soll.

Wenn Browser eine Weiterleitung erhalten, laden sie sofort die neue URL, die im `Location`-Header angegeben ist. Abgesehen vom kleinen Leistungseinbruch durch einen zusätzlichen Roundtrip bemerken Benutzer die Weiterleitung selten.

![Eine Anfrage vom Client zum Server. Der Server antwortet mit "301:moved permanently" und der neuen URL für die Ressource. Der Client macht eine GET-Anfrage für die neue URL, die vom Server mit einer 200 OK-Antwort zurückgegeben wird.](httpredirect.svg)

Es gibt verschiedene Arten von Weiterleitungen, die in drei Kategorien unterteilt werden:

1. [Permanente Weiterleitungen](#permanente_weiterleitungen)
2. [Temporäre Weiterleitungen](#temporäre_weiterleitungen)
3. [Spezielle Weiterleitungen](#spezielle_weiterleitungen)

### Permanente Weiterleitungen

Diese Weiterleitungen sind dazu gedacht, für immer zu bestehen. Sie implizieren, dass die ursprüngliche URL nicht mehr verwendet werden sollte und durch die neue ersetzt werden muss. Suchmaschinenroboter, RSS-Leser und andere Crawler werden die ursprüngliche URL für die Ressource aktualisieren.

| Code  | Text                 | Methodenverarbeitung                                                                                                    | Typischer Anwendungsfall                                        |
| ----- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `301` | `Moved Permanently`  | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können möglicherweise auf {{HTTPMethod("GET")}} geändert werden. [1] | Umstrukturierung einer Website.                                 |
| `308` | `Permanent Redirect` | Methode und Körper nicht geändert.                                                                                      | Umstrukturierung einer Website mit Nicht-GET-Links/Operationen. |

\[1] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("308")}} wurde erstellt, um die Zweideutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu entfernen.

### Temporäre Weiterleitungen

Manchmal kann die angeforderte Ressource nicht von ihrem kanonischen Ort aus aufgerufen werden, aber sie kann von einem anderen Ort aus aufgerufen werden. In diesem Fall kann eine temporäre Weiterleitung verwendet werden.

Suchmaschinenroboter und andere Crawler speichern die neue, temporäre URL nicht. Temporäre Weiterleitungen werden auch verwendet, wenn Ressourcen erstellt, aktualisiert oder gelöscht werden, um temporäre Fortschrittsseiten anzuzeigen.

| Code  | Text                 | Methodenverarbeitung                                                                                                    | Typischer Anwendungsfall                                                                                                                                                  |
| ----- | -------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `302` | `Found`              | {{HTTPMethod("GET")}}-Methoden unverändert. Andere können möglicherweise auf {{HTTPMethod("GET")}} geändert werden. [2] | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar.                                                                                             |
| `303` | `See Other`          | {{HTTPMethod("GET")}}-Methoden unverändert. Andere _geändert_ zu `GET` (Körper verloren).                               | Verwendet zur Umleitung nach einer {{HTTPMethod("PUT")}} oder einer {{HTTPMethod("POST")}}, damit das Aktualisieren der Ergebnisseite die Operation nicht erneut auslöst. |
| `307` | `Temporary Redirect` | Methode und Körper nicht geändert.                                                                                      | Die Webseite ist vorübergehend aus unvorhergesehenen Gründen nicht verfügbar. Besser als `302`, wenn Nicht-`GET`-Operationen auf der Seite verfügbar sind.                |

\[2] Die Spezifikation beabsichtigte nicht, Methodenänderungen zuzulassen, aber es gibt bestehende Benutzeragenten, die ihre Methode ändern. {{HTTPStatus("307")}} wurde erstellt, um die Zweideutigkeit des Verhaltens bei der Verwendung von Nicht-`GET`-Methoden zu entfernen.

### Spezielle Weiterleitungen

{{HTTPStatus("304")}} (Not Modified) leitet eine Seite zur lokal zwischengespeicherten Kopie (die veraltet war) um, und {{HTTPStatus("300")}} (Multiple Choices) ist eine manuelle Umleitung: Der Körper, als Webseite vom Browser dargestellt, listet die möglichen Weiterleitungen auf, und der Benutzer klickt auf eine, um sie auszuwählen.

| Code  | Text               | Typischer Anwendungsfall                                                                                                                                                                                                  |
| ----- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `300` | `Multiple Choices` | Nicht viele: Die Auswahlmöglichkeiten werden in einer HTML-Seite im Körper aufgelistet. Maschinenlesbare Auswahlmöglichkeiten werden empfohlen, als {{HTTPHeader("Link")}}-Header mit `rel=alternate` gesendet zu werden. |
| `304` | `Not Modified`     | Wird für erneut validierte bedingte Anfragen gesendet. Zeigt an, dass die zwischengespeicherte Antwort noch frisch ist und verwendet werden kann.                                                                         |

## Alternative Methode zur Angabe von Weiterleitungen

HTTP-Weiterleitungen sind nicht der einzige Weg, um Weiterleitungen zu definieren. Es gibt zwei weitere:

1. HTML-Weiterleitungen mit dem {{HTMLElement("meta")}}-Element
2. JavaScript-Weiterleitungen über das [DOM](/de/docs/Web/API/Document_Object_Model)

### HTML-Weiterleitungen

HTTP-Weiterleitungen sind der beste Weg, um Weiterleitungen zu erstellen, aber manchmal haben Sie keine Kontrolle über den Server. In diesem Fall versuchen Sie ein {{HTMLElement("meta")}}-Element mit seinem [`http-equiv`](/de/docs/Web/HTML/Element/meta#http-equiv)-Attribut, das im {{HTMLElement("head")}} der Seite auf `Refresh` gesetzt ist. Beim Anzeigen der Seite wird der Browser zur angegebenen URL wechseln.

```html
<head>
  <meta http-equiv="Refresh" content="0; URL=https://example.com/" />
</head>
```

Das [`content`](/de/docs/Web/HTML/Element/meta#content)-Attribut sollte mit einer Zahl beginnen, die angibt, wie viele Sekunden der Browser warten soll, bevor zur angegebenen URL weitergeleitet wird. Stellen Sie es immer auf `0` ein, um die Barrierefreiheit zu gewährleisten.

Offensichtlich funktioniert diese Methode nur mit HTML und kann nicht für Bilder oder andere Arten von Inhalten verwendet werden.

### JavaScript-Weiterleitungen

Weiterleitungen in JavaScript werden durchgeführt, indem eine URL-Zeichenkette der [`window.location`](/de/docs/Web/API/Window/location)-Eigenschaft zugewiesen wird, wodurch die neue Seite geladen wird:

```js
window.location = "https://example.com/";
```

Wie HTML-Weiterleitungen können auch diese nicht auf alle Ressourcen angewendet werden, und offensichtlich wird dies nur auf Clients funktionieren, die JavaScript ausführen. Andererseits gibt es mehr Möglichkeiten: Zum Beispiel können Sie die Weiterleitung nur auslösen, wenn bestimmte Bedingungen erfüllt sind.

### Reihenfolge der Präzedenz

Mit drei Möglichkeiten, Weiterleitungen auszulösen, können zeitgleich mehrere Methoden verwendet werden. Aber welche wird zuerst angewendet?

1. HTTP-Weiterleitungen werden immer zuerst ausgeführt — sie existieren, wenn noch keine Seite übertragen wurde.
2. Etwas überraschend kommen dann JavaScript-Weiterleitungen vor HTML-Weiterleitungen. Dies liegt daran, dass die `<meta>`-Weiterleitung nach dem vollständigen Laden der Seite auftritt, was nach dem Ausführen aller Skripte ist.
3. HTML-Weiterleitungen ({{HTMLElement("meta")}}) werden ausgeführt, wenn keine vorherigen HTTP-Weiterleitungen oder JavaScript-Weiterleitungen ausgeführt wurden, bevor die Seite geladen wurde.
4. Wenn es JavaScript-Weiterleitungen gibt, die nach dem Laden der Seite ausgeführt werden (z. B. bei einem Klick auf einen Button), wird sie zuletzt ausgeführt, wenn die Seite nicht bereits durch die vorherigen Methoden weitergeleitet wurde.

Wenn möglich, verwenden Sie HTTP-Weiterleitungen und fügen Sie keine {{HTMLElement("meta")}}-Element-Weiterleitungen hinzu. Wenn jemand die HTTP-Weiterleitungen ändert, aber vergisst, die HTML-Weiterleitungen zu ändern, werden die Weiterleitungen nicht mehr identisch sein, was zu einer Endlosschleife oder anderen Problemen führen könnte.

## Anwendungsfälle

Es gibt zahlreiche Anwendungsfälle für Weiterleitungen, aber da bei jeder Weiterleitung die Leistung beeinträchtigt wird, sollte ihr Einsatz auf ein Minimum beschränkt werden.

### Domain-Aliasing

Idealerweise gibt es einen Ort und daher eine URL für jede Ressource. Aber es gibt Gründe für alternative Namen für eine Ressource:

- Erweiterung der Reichweite Ihrer Website
  - : Ein häufiger Fall ist, wenn eine Website unter `www.example.com` residiert, aber auch der Zugriff von `example.com` funktionieren soll. Weiterleitungen von `example.com` zu `www.example.com` werden daher eingerichtet. Sie können auch von gängigen Synonymen oder häufigen Tippfehlern Ihrer Domains umleiten.
- Umzug auf eine neue Domain
  - : Zum Beispiel wurde Ihr Unternehmen umbenannt, aber Sie möchten, dass bestehende Links oder Lesezeichen Sie unter dem neuen Namen noch finden.
- Erzwingen von {{Glossary("HTTPS", "HTTPS")}}
  - : Anfragen an die `http://`-Version Ihrer Website werden zur `https://`-Version Ihrer Website weitergeleitet.

### Links am Leben erhalten

Wenn Sie Websites umstrukturieren, ändern sich die URLs. Selbst wenn Sie die Links Ihrer Website aktualisieren, um die neuen URLs anzupassen, haben Sie keine Kontrolle über die von externen Ressourcen verwendeten URLs.

Sie möchten diese Links nicht brechen, da sie wertvolle Nutzer bringen und Ihre SEO verbessern, also richten Sie Weiterleitungen von den alten URLs zu den neuen ein.

> [!NOTE]
> Diese Technik funktioniert auch für interne Links, aber versuchen Sie, interne Weiterleitungen zu vermeiden. Eine Weiterleitung hat erhebliche Leistungskosten (da eine zusätzliche HTTP-Anfrage erfolgt). Wenn Sie es vermeiden können, indem Sie interne Links korrigieren, sollten Sie diese Links stattdessen reparieren.

### Temporäre Antworten auf unsichere Anfragen

{{Glossary("Safe/HTTP", "Unsichere")}} Anfragen ändern den Zustand des Servers, und der Benutzer sollte sie nicht unbeabsichtigt erneut senden.

Typischerweise möchten Sie nicht, dass Ihre Benutzer {{HTTPMethod("PUT")}}, {{HTTPMethod("POST")}} oder {{HTTPMethod("DELETE")}}-Anfragen erneut senden. Wenn Sie die Antwort als Ergebnis dieser Anfrage bereitstellen, wird durch einfaches Drücken der Aktualisierungstaste die Anfrage erneut gesendet (möglicherweise nach einer Bestätigungsmeldung).

In diesem Fall kann der Server eine {{HTTPStatus("303")}} (See Other)-Antwort für eine URL senden, die die richtigen Informationen enthält. Wenn die Aktualisierungstaste gedrückt wird, wird nur diese Seite erneut angezeigt, ohne dass die unsicheren Anfragen wiederholt werden.

### Temporäre Antworten auf lange Anfragen

Einige Anfragen benötigen möglicherweise mehr Zeit auf dem Server, wie {{HTTPMethod("DELETE")}}-Anfragen, die zur späteren Bearbeitung geplant sind. In diesem Fall ist die Antwort eine {{HTTPStatus("303")}} (See Other)-Weiterleitung, die auf eine Seite verweist, die angibt, dass die Aktion geplant wurde, und schließlich über ihren Fortschritt informiert oder es ermöglicht, sie abzubrechen.

## Konfigurieren von Weiterleitungen in gängigen Servern

### Apache

Weiterleitungen können entweder in der Serverkonfigurationsdatei oder in der `.htaccess` jeder Verzeichnisse eingerichtet werden.

Das [`mod_alias`](https://httpd.apache.org/docs/current/mod/mod_alias.html)-Modul verfügt über `Redirect`- und `RedirectMatch`-Direktiven, die standardmäßig {{HTTPStatus("302")}}-Weiterleitungen einrichten:

```apacheconf
<VirtualHost *:443>
  ServerName example.com
  Redirect / https://www.example.com
</VirtualHost>
```

Die URL `https://example.com/` wird zu `https://www.example.com/` weitergeleitet, ebenso wie alle Dateien oder Verzeichnisse darunter (`https://example.com/some-page` wird zu `https://www.example.com/some-page` weitergeleitet).

`RedirectMatch` macht dasselbe, übernimmt jedoch einen {{Glossary("regular_expression", "regulären Ausdruck")}}, um eine Sammlung betroffener URLs zu definieren:

```apacheconf
RedirectMatch ^/images/(.*)$ https://images.example.com/$1
```

Alle Dokumente im `images/`-Verzeichnis werden zu einer anderen Domain weitergeleitet.

Wenn Sie keine temporäre Weiterleitung wünschen, kann ein zusätzlicher Parameter (entweder der zu verwendende HTTP-Statuscode oder das Schlüsselwort `permanent`) verwendet werden, um eine andere Weiterleitung einzurichten:

```apacheconf
Redirect permanent / https://www.example.com
# …acts the same as:
Redirect 301 / https://www.example.com
```

Das [`mod_rewrite`](https://httpd.apache.org/docs/current/mod/mod_rewrite.html)-Modul kann ebenfalls Weiterleitungen erstellen. Es ist flexibler, aber etwas komplexer.

### Nginx

In Nginx erstellen Sie einen spezifischen Serverblock für die Inhalte, die Sie weiterleiten möchten:

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

Weiterleitungsschleifen treten auf, wenn zusätzliche Weiterleitungen derjenigen folgen, die bereits berücksichtigt wurde. Mit anderen Worten, es gibt eine Schleife, die niemals beendet wird, und keine Seite wird jemals gefunden.

Meistens ist dies ein Serverproblem, und wenn der Server es erkennen kann, wird er eine {{HTTPStatus("500")}} `Internal Server Error` zurücksenden. Wenn Sie kurz nach der Änderung einer Serverkonfiguration auf einen solchen Fehler stoßen, ist dies wahrscheinlich eine Weiterleitungsschleife.

Manchmal wird der Server es nicht erkennen: Eine Weiterleitungsschleife kann über mehrere Server verteilt sein, die jeweils nicht das vollständige Bild haben. In diesem Fall erkennen Browser es und zeigen eine Fehlermeldung an. Firefox zeigt an:

> Firefox hat erkannt, dass der Server die Anfrage für diese Adresse auf eine Weise umleitet, die nie beendet wird.

...während Chrome anzeigt:

> Diese Webseite hat eine Umleitungsschleife

In beiden Fällen kann der Benutzer nicht viel tun (es sei denn, es tritt auf seiner Seite eine Korruption auf, wie eine Diskrepanz der Cache- oder Cookie-Daten).

Es ist wichtig, Weiterleitungsschleifen zu vermeiden, da sie die Benutzererfahrung vollständig zerstören.
