---
title: Eine typische HTTP-Sitzung
slug: Web/HTTP/Guides/Session
l10n:
  sourceCommit: 182692930243199b48e10dfc2cc43c51f9373aa2
---

In Client-Server-Protokollen wie HTTP bestehen Sitzungen aus drei Phasen:

1. Der Client stellt eine TCP-Verbindung her (oder die entsprechende Verbindung, wenn die Transportschicht nicht TCP ist).
2. Der Client sendet seine Anfrage und wartet auf die Antwort.
3. Der Server verarbeitet die Anfrage, sendet seine Antwort zurück, liefert einen Statuscode und die entsprechenden Daten.

Seit HTTP/1.1 wird die Verbindung nach Abschluss der dritten Phase nicht mehr geschlossen, und dem Client wird nun eine weitere Anfrage gewährt: Dies bedeutet, dass die zweite und dritte Phase nun beliebig oft durchgeführt werden können.

## Aufbau einer Verbindung

In Client-Server-Protokollen ist es der Client, der die Verbindung aufbaut. Eine Verbindung in HTTP zu öffnen, bedeutet, eine Verbindung in der zugrunde liegenden Transportschicht zu initiieren, normalerweise ist dies TCP.

Bei TCP ist der Standardport für einen HTTP-Server auf einem Computer Port 80. Es können auch andere Ports verwendet werden, wie 8000 oder 8080. Die URL einer abzurufenden Seite enthält sowohl den Domainnamen als auch die Portnummer, wobei letzteres weggelassen werden kann, wenn es 80 ist. Siehe [die URL-Referenz](/de/docs/Web/URI) für weitere Details.

> [!NOTE]
> Das Client-Server-Modell erlaubt es dem Server nicht, Daten an den Client zu senden, ohne dass eine explizite Anfrage dafür vorliegt. Verschiedene Web-APIs ermöglichen jedoch diesen Anwendungsfall, einschließlich der [Push-API](/de/docs/Web/API/Push_API), [Server-Sent Events](/de/docs/Web/API/Server-sent_events) und der [WebSockets-API](/de/docs/Web/API/WebSockets_API).

## Senden einer Client-Anfrage

Sobald die Verbindung hergestellt ist, kann der User-Agent die Anfrage senden (ein User-Agent ist typischerweise ein Webbrowser, kann aber auch etwas anderes sein, z.B. ein Crawler). Eine Client-Anfrage besteht aus Textanweisungen, die durch CRLF (Carriage Return, gefolgt von Line Feed) getrennt sind und in drei Blöcke unterteilt sind:

1. Die erste Zeile enthält eine Anfragemethode, gefolgt von ihren Parametern:
   - der Pfad des Dokuments als absolute URL ohne Protokoll oder Domainnamen
   - die HTTP-Protokollversion

2. Die nachfolgenden Zeilen stellen einen HTTP-Header dar, der dem Server Informationen darüber gibt, welche Art von Daten geeignet ist (zum Beispiel welche Sprache, welche MIME-Typen) oder sonstige Daten, die sein Verhalten beeinflussen (zum Beispiel keine Antwort senden, wenn sie bereits im Cache ist). Diese HTTP-Header bilden einen Block, der mit einer leeren Zeile endet.
3. Der letzte Block ist ein optionaler Datenblock, der möglicherweise weitere Daten enthält, die hauptsächlich von der POST-Methode verwendet werden.

### Beispielanfragen

Abrufen der Root-Seite von developer.mozilla.org (`https://developer.mozilla.org/`) und dem Server mitteilen, dass der User-Agent die Seite bevorzugt in Französisch erhalten möchte, falls möglich:

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr

```

Beachten Sie diese letzte leere Zeile, die den Datenblock vom Headerblock trennt. Da keine `Content-Length` in einem HTTP-Header angegeben ist, wird dieser Datenblock leer präsentiert, um das Ende der Header zu markieren und den Server zu ermöglichen, die Anfrage in dem Moment zu verarbeiten, in dem er diese leere Zeile erhält.

Zum Beispiel das Senden des Ergebnisses eines Formulars:

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### Anfragemethoden

HTTP definiert eine Reihe von [Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods), die angeben, welche Aktion auf eine Ressource durchgeführt werden soll. Obwohl sie auch Substantive sein können, werden diese Anfragemethoden manchmal als HTTP-Verben bezeichnet. Die gängigsten Anfragen sind `GET` und `POST`:

- Die {{HTTPMethod("GET")}}-Methode fordert eine Datenrepräsentation der angegebenen Ressource an. Anfragen, die `GET` verwenden, sollten nur Daten abrufen.
- Die {{HTTPMethod("POST")}}-Methode sendet Daten zu einem Server, damit dieser seinen Zustand ändern kann. Diese Methode wird oft für [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) verwendet.

## Struktur einer Serverantwort

Nachdem der verbundene Agent seine Anfrage gesendet hat, verarbeitet der Webserver diese und gibt letztlich eine Antwort zurück. Ähnlich wie eine Client-Anfrage wird eine Serverantwort aus Textanweisungen gebildet, die durch CRLF getrennt sind, jedoch in drei Blöcke unterteilt:

1. Die erste Zeile, die _Statuszeile_, besteht aus einer Anerkennung der verwendeten HTTP-Version, gefolgt von einem Antwortstatuscode (und seiner kurzen Bedeutung in menschenlesbarem Text).
2. Die nachfolgenden Zeilen stellen spezifische HTTP-Header dar, die dem Client Informationen über die gesendeten Daten geben (z. B. Typ, Datengröße, verwendetes Kompressionsverfahren, Hinweise zum Caching). Ähnlich dem Block von HTTP-Headern für eine Client-Anfrage bilden diese HTTP-Header einen Block, der mit einer leeren Zeile endet.
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
  <title>A basic webpage</title>
</head>
<body>
  <h1>Basic HTML webpage</h1>
  <p>Hello, world!</p>
</body>
</html>
```

Meldung, dass die angeforderte Ressource dauerhaft verschoben wurde:

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

Meldung, dass die angeforderte Ressource nicht existiert:

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

[HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status) zeigen an, ob eine spezifische HTTP-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert: Informationsantworten, erfolgreiche Antworten, Weiterleitungen, Client-Fehler und Server-Fehler.

- {{HTTPStatus(200)}}: OK. Die Anfrage war erfolgreich.
- {{HTTPStatus(301)}}: Moved Permanently. Dieser Antwortcode bedeutet, dass sich die URI der angeforderten Ressource geändert hat.
- {{HTTPStatus(404)}}: Not Found. Der Server kann die angeforderte Ressource nicht finden.

## Siehe auch

- [URLs](/de/docs/Web/URI)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
