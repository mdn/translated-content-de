---
title: 304 Not Modified
slug: Web/HTTP/Reference/Status/304
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`304 Not Modified`** [Redirection Response](/de/docs/Web/HTTP/Reference/Status#redirection_messages) gibt an, dass es nicht notwendig ist, die angeforderten Ressourcen erneut zu übertragen.

Dieser Antwortcode wird gesendet, wenn die Anfrage eine [bedingte](/de/docs/Web/HTTP/Guides/Conditional_requests) {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} Anfrage mit einem {{HTTPHeader("If-None-Match")}} oder einem {{HTTPHeader("If-Modified-Since")}} Header ist und die Bedingung als 'false' bewertet wird.
Es bestätigt, dass die vom Client zwischengespeicherte Ressource noch gültig ist und dass der Server eine {{HTTPStatus("200", "200 OK")}}-Antwort mit der Ressource gesendet hätte, wenn die Bedingung als 'true' bewertet worden wäre.
Siehe [HTTP-Caching](/de/docs/Web/HTTP/Guides/Caching) für weitere Informationen.

Die Antwort darf keinen Body enthalten und muss die Header beinhalten, die in einer entsprechenden {{HTTPStatus("200")}}-Antwort gesendet worden wären, wie zum Beispiel:

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

### 304-Antwort auf bedingte Anfragen

Die folgenden Beispiele zeigen {{HTTPMethod("GET")}}-Anfragen, die mit [curl](https://curl.se/) mit bedingten Anfrage-Headern durchgeführt werden.
Das `--http1.1`-Flag wird verwendet, um das HTTP/1.1-Protokoll der Lesbarkeit halber zu erzwingen.

Die erste Anfrage verwendet eine `If-Modified-Since`-Bedingung mit einem zukünftigen Datum, dem 21. November 2050.
Dies muss zu `false` bewertet werden, da die Ressource nicht nach einer Zeit aktualisiert worden sein kann, die noch nicht eingetreten ist:

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

Nun führen Sie einen weiteren `curl`-Befehl mit dem `etag`-Wert aus der vorherigen Antwort mit der {{HTTPHeader("If-None-Match")}}-Bedingung aus (da dieser `etag` die aktuelle Version der Ressource auf dem Server ist, erwarten wir eine `304 Not Modified`-Antwort):

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

Da der `etag`-Wert zum Zeitpunkt der Anfrage übereinstimmt, schlägt die Bedingung der Entity-Tag fehl, und es wird eine `304`-Antwort zurückgegeben:

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

Das Browserverhalten unterscheidet sich, wenn diese Antwort fälschlicherweise einen Body bei persistenten Verbindungen enthält.
Siehe {{HTTPStatus("204", "204 No Content")}} für weitere Details.

## Siehe auch

- [Umleitungen in HTTP](/de/docs/Web/HTTP/Guides/Redirections)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
