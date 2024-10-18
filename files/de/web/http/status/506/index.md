---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}

Der HTTP-Statuscode für den **`506 Variant Also Negotiates`** [Serverfehler](/de/docs/Web/HTTP/Status#server_error_responses) wird während der Inhaltsverhandlung zurückgegeben, wenn es eine rekursive Schleife im Prozess der Ressourcenauswahl gibt.

[Agenten-gesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation) ermöglicht es einem Client und einem Server, gemeinsam die beste Variante einer gegebenen Ressource zu bestimmen, wenn der Server mehrere Varianten hat.
Ein Server sendet einen `506`-Statuscode aufgrund einer Serverfehlkonfiguration, die zu zirkulären Referenzen bei der Erstellung von Antworten führt.

Aufgrund des Mangels an Standardisierung, wie Clients automatisch aus Antworten auswählen, und der zusätzlichen Round-Trips, die die Client-Server-Interaktion verlangsamen, wird dieser Mechanismus selten verwendet.
[Server-gesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weitaus häufiger, bei der der Server basierend auf den Anfrage-Headern des Clients ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, usw.) direkt die passendste Ressource auswählt.

## Status

```http
506 Variant Also Negotiates
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Ressource mit Varianten

Im folgenden Beispiel fordert ein Client eine Seite im `fr`-Lokalisierung mit dem {{HTTPHeader("Accept-Language")}}-Header an.
Dies kann mit curl durchgeführt werden:

```bash
curl  -H "Negotiate: trans" -H "Accept-Language: fr;" http://example.com/index
```

Dies erzeugt die folgende Anfrage:

```http
GET /index HTTP/1.1
Host: example.com
User-Agent: curl/8.7.1
Accept: */*
Negotiate: trans
Accept-Language: fr
```

Aufgrund einer Serverfehlkonfiguration verweist die Variante für `fr` auf eine [Typenkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps), die selbst eine transparente Verhandlung auslösen kann.
Der Server kann diesen Zustand erkennen, indem er in einer Auswahlantwort vor dem Senden das Vorhandensein eines `TCN`-Headers überprüft:

```http
HTTP/1.1 506 Variant Also Negotiates
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 233
TCN: list
Vary: negotiate,accept-language
Alternates: {"index.html.en" 1 {type text/html} {language en} {length 48}}, {"another-map.html.fr.map" 1 {type text/html} {language fr} {length 45}}}}

<html>
<head>
  <title>506 Variant Also Negotiates</title>
</head>
<body>
  <h1>Variant Also Negotiates</h1>
  <p>A variant for the requested resource is itself a negotiable resource. This indicates a configuration error.</p>
</body>
</html>
```

## Siehe auch

- {{HTTPStatus("300", "300 Multiple Choices")}}
- {{RFC("2295")}}
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Inhaltsverhandlung](https://httpd.apache.org/docs/2.4/content-negotiation.html) in der Apache HTTP Server-Dokumentation
- [Apache httpd `mod_negotiation.c` Source](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691), die Bedingungen zeigt, die eine `HTTP_VARIANT_ALSO_VARIES`-Antwort auslösen.
