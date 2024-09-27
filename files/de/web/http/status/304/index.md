---
title: 304 Not Modified
slug: Web/HTTP/Status/304
l10n:
  sourceCommit: fcb01c3c48499529a7e846d1887a091433add073
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`304 Not Modified`** [Umleitungsantwort](/de/docs/Web/HTTP/Status#redirection_messages) zeigt an, dass keine Notwendigkeit besteht, die angeforderten Ressourcen erneut zu übertragen.

Dieser Antwortcode wird gesendet, wenn die Anfrage eine [bedingte](/de/docs/Web/HTTP/Conditional_requests) {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage mit einem {{HTTPHeader("If-None-Match")}}- oder einem {{HTTPHeader("If-Modified-Since")}}-Header ist und die Bedingung zu 'false' ausgewertet wird.
Er bestätigt, dass die vom Client zwischengespeicherte Ressource noch gültig ist und der Server eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der Ressource gesendet hätte, wenn die Bedingung zu 'true' ausgewertet worden wäre.

Die Antwort darf keinen Body enthalten und muss die Header einschließen, die in einer äquivalenten {{HTTPStatus("200")}}-Antwort gesendet worden wären, wie z.B.:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Vary")}}

> [!NOTE]
> Viele [Entwicklertools-Netzwerk-Panels](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) von Browsern erzeugen überflüssige Anfragen, die zu `304`-Antworten führen, damit der Zugriff auf den lokalen Cache für Entwickler sichtbar ist.

## Status

```http
304 Not Modified
```

## Beispiele

### 304 Antwort auf bedingte Anfragen

Die folgenden Beispiele zeigen {{HTTPMethod("GET")}}-Anfragen, die mit [curl](https://curl.se/) mit bedingten Anforderungs-Headern gemacht werden.
Das `--http1.1`-Flag wird verwendet, um das HTTP/1.1-Protokoll zur besseren Lesbarkeit zu erzwingen.

Die erste Anfrage verwendet eine `If-Modified-Since`-Bedingung mit einem zukünftigen Datum, dem 21. November 2050.
Diese muss zu `false` ausgewertet werden, da die Ressource nicht nach einer Zeit aktualisiert worden sein kann, die noch nicht eingetreten ist:

```bash
curl --http1.1 -I --header 'If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT' \
 https://developer.mozilla.org/en-US/
```

Dies führt zu der folgenden HTTP-Anfrage:

```http
GET /en-US/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-Modified-Since: Tue, 21 Nov 2050 08:00:00 GMT
```

Die Antwort wäre {{HTTPStatus("200", "200 OK")}} mit der aktuellen Version der Ressource, wenn die Ressource nach dem Zeitstempel im {{HTTPHeader("If-Modified-Since")}}-Header aktualisiert worden wäre.
Stattdessen erhalten wir eine `304`-Antwort, die die Header {{HTTPHeader("ETag")}}, {{HTTPHeader("Age")}} und {{HTTPHeader("Expires")}} enthält, die uns mitteilen, dass unsere zwischengespeicherte Version der Ressource noch aktuell ist:

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 09:52:35 GMT
Expires: Wed, 28 Aug 2024 10:01:53 GMT
Age: 3279
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

Führen Sie jetzt einen weiteren `curl`-Befehl unter Verwendung des `etag`-Werts aus der vorherigen Antwort mit der {{HTTPHeader("If-None-Match")}}-Bedingung aus (da dieses `etag` die aktuelle Version der Ressource auf dem Server ist, erwarten wir eine `304 Not Modified`-Antwort):

```bash
curl --http1.1 -I --header 'If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"' \
 https://developer.mozilla.org/en-US/
```

Dies führt zu der folgenden HTTP-Anfrage:

```http
GET /en-US/ HTTP/1.1
Host: developer.mozilla.org
User-Agent: curl/8.7.1
Accept: */*
If-None-Match: "b20a0973b226eeea30362acb81f9e0b3"
```

Da der `etag`-Wert zum Zeitpunkt der Anfrage übereinstimmt, scheitert der Entity-Tag an der Bedingung und eine `304`-Antwort wird zurückgegeben:

```http
HTTP/1.1 304 Not Modified
Date: Wed, 28 Aug 2024 10:36:35 GMT
Expires: Wed, 28 Aug 2024 11:02:17 GMT
Age: 662
ETag: "b20a0973b226eeea30362acb81f9e0b3"
Cache-Control: public, max-age=3600
Vary: Accept-Encoding
X-cache: hit
Alt-Svc: clear
```

## Spezifikationen

{{Specifications}}

## Kompatibilitätsnotizen

Das Verhalten von Browsern unterscheidet sich, wenn diese Antwort fälschlicherweise einen Body bei persistenten Verbindungen enthält.
Siehe {{HTTPStatus("204", "204 No Content")}} für weitere Details.

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
