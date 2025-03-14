---
title: Eine typische HTTP-Sitzung
slug: Web/HTTP/Guides/Session
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

In Client-Server-Protokollen, wie HTTP, bestehen Sitzungen aus drei Phasen:

1. Der Client baut eine TCP-Verbindung auf (oder die geeignete Verbindung, falls die Transportschicht nicht TCP ist).
2. Der Client sendet seine Anfrage und wartet auf die Antwort.
3. Der Server verarbeitet die Anfrage, sendet seine Antwort zurück, liefert einen Statuscode und die entsprechenden Daten.

Seit HTTP/1.1 wird die Verbindung nach Abschluss der dritten Phase nicht mehr geschlossen, und dem Client wird nun eine weitere Anfrage gewährt: das bedeutet, dass die zweite und dritte Phase jetzt beliebig oft durchgeführt werden können.

## Eine Verbindung aufbauen

In Client-Server-Protokollen ist es der Client, der die Verbindung herstellt. Eine Verbindung in HTTP zu öffnen bedeutet, eine Verbindung in der zugrunde liegenden Transportschicht zu initiieren, normalerweise ist dies TCP.

Bei TCP ist der Standardport für einen HTTP-Server auf einem Computer Port 80. Andere Ports können ebenfalls verwendet werden, wie 8000 oder 8080. Die URL einer abzurufenden Seite enthält sowohl den Domainnamen als auch die Portnummer, wobei letztere weggelassen werden kann, wenn sie 80 ist. Weitere Details finden Sie im [URL-Referenz](/de/docs/Web/URI).

> [!NOTE]
> Das Client-Server-Modell erlaubt es dem Server nicht, Daten an den Client zu senden, ohne dass dafür eine explizite Anfrage vorliegt. Allerdings ermöglichen verschiedene Web-APIs diesen Anwendungsfall, darunter die [Push API](/de/docs/Web/API/Push_API), [Sever-sent events](/de/docs/Web/API/Server-sent_events) und die [WebSockets API](/de/docs/Web/API/WebSockets_API).

## Eine Client-Anfrage senden

Sobald die Verbindung hergestellt ist, kann der User-Agent die Anfrage senden (ein User-Agent ist typischerweise ein Webbrowser, kann aber auch etwas anderes sein, z.B. ein Crawler). Eine Client-Anfrage besteht aus Textdirektiven, die durch CRLF (Wagenrücklauf, gefolgt von Zeilenumbruch) getrennt sind und in drei Blöcke unterteilt sind:

1. Die erste Zeile enthält eine Anfragemethode gefolgt von ihren Parametern:

   - den Pfad des Dokuments, als absolute URL ohne das Protokoll oder den Domainnamen
   - die HTTP-Protokollversion

2. Die nachfolgenden Zeilen stellen ein HTTP-Header dar, der dem Server Informationen darüber gibt, welcher Datentyp angemessen ist (z.B. welche Sprache, welche MIME-Typen), oder andere Daten, die sein Verhalten beeinflussen (z.B. keine Antwort senden, wenn sie bereits im Cache ist). Diese HTTP-Header bilden einen Block, der mit einer leeren Zeile endet.
3. Der letzte Block ist ein optionaler Datenblock, der weitere Daten enthalten kann, die hauptsächlich von der POST-Methode verwendet werden.

### Beispielanfragen

Abrufen der Hauptseite von developer.mozilla.org, (`https://developer.mozilla.org/`), und dem Server mitteilen, dass der User-Agent die Seite vorzugsweise in Französisch anzeigen möchte, falls möglich:

```http
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```

Beachten Sie die letzte leere Zeile, die den Datenblock vom Header-Block trennt. Da in einem HTTP-Header keine `Content-Length` angegeben ist, wird dieser Datenblock leer präsentiert, was das Ende der Header kennzeichnet und dem Server ermöglicht, die Anfrage in dem Moment zu verarbeiten, in dem er diese leere Zeile erhält.

Zum Beispiel das Absenden des Ergebnisses eines Formulars:

```http
POST /contact_form.php HTTP/1.1
Host: developer.mozilla.org
Content-Length: 64
Content-Type: application/x-www-form-urlencoded

name=Joe%20User&request=Send%20me%20one%20of%20your%20catalogue
```

### Anfragemethoden

HTTP definiert eine Reihe von [Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods), die die gewünschte Aktion angeben, die für eine Ressource durchgeführt werden soll. Auch wenn sie Substantive sein können, werden diese Anfragemethoden manchmal als HTTP-Verben bezeichnet. Die gebräuchlichsten Anfragen sind `GET` und `POST`:

- Die {{HTTPMethod("GET")}}-Methode fordert eine Datenrepräsentation der angegebenen Ressource an. Anfragen mit `GET` sollten nur Daten abrufen.
- Die {{HTTPMethod("POST")}}-Methode sendet Daten an einen Server, damit dieser seinen Zustand ändern kann. Diese Methode wird häufig für [HTML-Formulare](/de/docs/Learn_web_development/Extensions/Forms) verwendet.

## Struktur einer Serverantwort

Nachdem der verbundene Agent seine Anfrage gesendet hat, verarbeitet der Webserver diese und gibt letztendlich eine Antwort zurück. Ähnlich einer Client-Anfrage wird eine Serverantwort aus Textdirektiven gebildet, die durch CRLF getrennt und in drei Blöcke unterteilt sind:

1. Die erste Zeile, die _Statuszeile_, besteht aus einer Bestätigung der verwendeten HTTP-Version, gefolgt von einem Antwortstatuscode (und seiner kurzen lesbaren Bedeutung).
2. Die nachfolgenden Zeilen stellen spezifische HTTP-Header dar, die dem Client Informationen über die gesendeten Daten geben (z.B. Typ, Datengröße, verwendeter Komprimierungsalgorithmus, Hinweise zum Caching). Ähnlich wie der Block der HTTP-Header für eine Client-Anfrage, bilden diese HTTP-Header einen Block, der mit einer leeren Zeile endet.
3. Der letzte Block ist ein Datenblock, der die optionalen Daten enthält.

### Beispielantworten

Erfolgreiche Antwort einer Webseite:

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

Hinweis, dass die angeforderte Ressource dauerhaft verschoben wurde:

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

Hinweis, dass die angeforderte Ressource nicht existiert:

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

[HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status) geben an, ob eine bestimmte HTTP-Anfrage erfolgreich abgeschlossen wurde. Antworten werden in fünf Klassen gruppiert: informatorische Antworten, erfolgreiche Antworten, Umleitungen, Client-Fehler und Server-Fehler.

- {{HTTPStatus(200)}}: OK. Die Anfrage war erfolgreich.
- {{HTTPStatus(301)}}: Dauerhaft verschoben. Dieser Antwortcode bedeutet, dass sich die URI der angeforderten Ressource geändert hat.
- {{HTTPStatus(404)}}: Nicht gefunden. Der Server kann die angeforderte Ressource nicht finden.

## Siehe auch

- [URLs](/de/docs/Web/URI)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
