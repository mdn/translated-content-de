---
title: Eine typische HTTP-Sitzung
slug: Web/HTTP/Session
l10n:
  sourceCommit: 88467d31d2ad7bdfade8b38ec69f6702fee080d1
---

{{HTTPSidebar}}

In Client-Server-Protokollen wie HTTP bestehen Sitzungen aus drei Phasen:

1. Der Client stellt eine TCP-Verbindung her (oder die entsprechende Verbindung, wenn die Transportschicht nicht TCP ist).
2. Der Client sendet seine Anfrage und wartet auf die Antwort.
3. Der Server bearbeitet die Anfrage, sendet seine Antwort zurück, liefert einen Statuscode und die entsprechenden Daten.

Seit HTTP/1.1 wird die Verbindung nach Abschluss der dritten Phase nicht mehr geschlossen, und dem Client wird eine weitere Anfrage gewährt: Das bedeutet, dass die zweite und dritte Phase nun beliebig oft durchgeführt werden können.

## Eine Verbindung herstellen

In Client-Server-Protokollen ist es der Client, der die Verbindung herstellt. Das Öffnen einer Verbindung in HTTP bedeutet das Initiieren einer Verbindung in der darunter liegenden Transportschicht, in der Regel ist dies TCP.

Bei TCP ist der Standardport für einen HTTP-Server auf einem Computer der Port 80. Andere Ports können ebenfalls verwendet werden, wie 8000 oder 8080. Die URL einer abzurufenden Seite enthält sowohl den Domainnamen als auch die Portnummer, wobei letztere weggelassen werden kann, wenn sie 80 ist. Siehe [die URL-Referenz](/de/docs/Web/URI) für weitere Details.

> [!NOTE]
> Das Client-Server-Modell erlaubt es dem Server nicht, ohne eine explizite Anfrage Daten an den Client zu senden. Verschiedene Web-APIs ermöglichen jedoch diesen Anwendungsfall, darunter die [Push-API](/de/docs/Web/API/Push_API), [Server-sent events](/de/docs/Web/API/Server-sent_events) und die [WebSockets-API](/de/docs/Web/API/WebSockets_API).

## Eine Client-Anfrage senden

Sobald die Verbindung hergestellt ist, kann der User-Agent die Anfrage senden (ein User-Agent ist in der Regel ein Webbrowser, kann aber alles andere sein, zum Beispiel ein Crawler). Eine Client-Anfrage besteht aus Textanweisungen, die durch CRLF (Carriage Return, gefolgt von Line Feed) getrennt sind und in drei Blöcke unterteilt werden:

1. Die erste Zeile enthält eine Anfragemethode, gefolgt von ihren Parametern:

   - den Pfad des Dokuments als absolute URL ohne das Protokoll oder den Domainnamen
   - die HTTP-Protokollversion

2. Die folgenden Zeilen stellen einen HTTP-Header dar, der dem Server Informationen darüber gibt, welche Art von Daten angemessen ist (zum Beispiel, welche Sprache, welche MIME-Typen) oder andere Daten, die sein Verhalten ändern (zum Beispiel, keine Antwort senden, wenn sie bereits im Cache vorhanden ist). Diese HTTP-Header bilden einen Block, der mit einer leeren Zeile endet.
3. Der letzte Block ist ein optionaler Datenblock, der möglicherweise weitere Daten enthält, die hauptsächlich von der POST-Methode verwendet werden.

### Beispielanfragen

Abruf der Startseite von developer.mozilla.org, (`https://developer.mozilla.org/`), und dem Server mitteilen, dass der User-Agent die Seite vorzugsweise auf Französisch möchte, falls möglich:

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

Beachten Sie diese abschließende leere Zeile, die den Datenblock vom Headerblock trennt. Da keine `Content-Length` in einem HTTP-Header angegeben ist, wird dieser Datenblock leer dargestellt, was das Ende der Header markiert und dem Server ermöglicht, die Anfrage zu verarbeiten, sobald er diese leere Zeile erhält.

Zum Beispiel, das Ergebnis eines Formulars senden:

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### Anfragemethoden

HTTP definiert eine Reihe von [Anfragemethoden](/de/docs/Web/HTTP/Methods), die die gewünschte Aktion angeben, die auf eine Ressource ausgeführt werden soll. Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als HTTP-Verben bezeichnet. Die am häufigsten verwendeten Anfragen sind `GET` und `POST`:

- Die {{HTTPMethod("GET")}}-Methode fordert eine Datenrepräsentation der angegebenen Ressource an. Anfragen mit `GET` sollten nur Daten abrufen.
- Die {{HTTPMethod("POST")}}-Methode sendet Daten an einen Server, um dessen Zustand zu ändern. Dies ist die Methode, die häufig für [HTML-Formulare](/de/docs/Learn/Forms) verwendet wird.

## Struktur einer Serverantwort

Nachdem der verbundene Agent seine Anfrage gesendet hat, verarbeitet der Webserver sie und gibt schließlich eine Antwort zurück. Ähnlich einer Client-Anfrage, ist eine Serverantwort aus Textanweisungen gebildet, getrennt durch CRLF, jedoch in drei Blöcke unterteilt:

1. Die erste Zeile, die _Statuszeile_, besteht aus einer Bestätigung der verwendeten HTTP-Version, gefolgt von einem Antwortstatuscode (und seiner kurzen Bedeutung in lesbarem Text).
2. Die nachfolgenden Zeilen repräsentieren spezifische HTTP-Header, die dem Client Informationen über die gesendeten Daten geben (zum Beispiel Typ, Datengröße, verwendeter Komprimierungsalgorithmus, Hinweise zum Zwischenspeichern). Ähnlich dem Block der HTTP-Header für eine Client-Anfrage bilden diese HTTP-Header einen Block, der mit einer leeren Zeile endet.
3. Der letzte Block ist ein Datenblock, der die optionalen Daten enthält.

### Beispielantworten

Erfolgreiche Webseitenantwort:

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 55743
Connection: keep-alive
Cache-Control: s-maxage=300, public, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:37:18 GMT
ETag: "2e77ad1dc6ab0b53a2996dfd4653c1c3"
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
Age: 7

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>A simple webpage</title>
</head>
<body>
  <h1>Simple HTML webpage</h1>
  <p>Hello, world!</p>
</body>
</html>
```

Benachrichtigung, dass die angeforderte Ressource dauerhaft verschoben wurde:

```http
HTTP/1.1 301 Moved Permanently
Server: Apache/2.4.37 (Red Hat)
Content-Type: text/html; charset=utf-8
Date: Thu, 06 Dec 2018 17:33:08 GMT
Location: https://developer.mozilla.org/ (this is the new link to the resource; it is expected that the user-agent will fetch it)
Keep-Alive: timeout=15, max=98
Accept-Ranges: bytes
Via: Moz-Cache-zlb05
Connection: Keep-Alive
Content-Length: 325 (the content contains a default page to display if the user-agent is not able to follow the link)

<!doctype html>… (contains a site-customized page helping the user to find the missing resource)
```

Benachrichtigung, dass die angeforderte Ressource nicht existiert:

```http
HTTP/1.1 404 Not Found
Content-Type: text/html; charset=utf-8
Content-Length: 38217
Connection: keep-alive
Cache-Control: no-cache, no-store, must-revalidate, max-age=0
Content-Language: en-US
Date: Thu, 06 Dec 2018 17:35:13 GMT
Expires: Thu, 06 Dec 2018 17:35:13 GMT
Server: meinheld/0.6.1
Strict-Transport-Security: max-age=63072000
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Vary: Accept-Encoding,Cookie
X-Cache: Error from cloudfront

<!doctype html>… (contains a site-customized page helping the user to find the missing resource)
```

### Antwortstatuscodes

[HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status) geben an, ob eine bestimmte HTTP-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert: Informationsantworten, erfolgreiche Antworten, Weiterleitungen, Clientfehler und Serverfehler.

- {{HTTPStatus(200)}}: OK. Die Anfrage war erfolgreich.
- {{HTTPStatus(301)}}: Moved Permanently. Dieser Antwortcode bedeutet, dass sich die URI der angeforderten Ressource geändert hat.
- {{HTTPStatus(404)}}: Not Found. Der Server kann die angeforderte Ressource nicht finden.

## Siehe auch

- [URLs](/de/docs/Web/URI)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
