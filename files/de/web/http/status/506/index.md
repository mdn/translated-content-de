---
title: 506 Variante verhandelt auch
slug: Web/HTTP/Status/506
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP **`506 Variante verhandelt auch`** [Serverfehler-Antwortstatuscode](/de/docs/Web/HTTP/Status#server_error_responses) wird während der Transparenten Inhaltsverhandlung (TCN) zurückgegeben, wenn es eine rekursive Schleife im Prozess der Ressourcenauswahl gibt.

Transparente Inhaltsverhandlung ermöglicht es einem Client und einem Server gemeinsam zu entscheiden, welches die beste Variante einer gegebenen Ressource ist, wenn der Server mehrere Varianten hat.
Ein Server sendet einen `506`-Statuscode aufgrund einer Fehlkonfiguration des Servers, die zu zirkulären Referenzen bei der Erstellung von Antworten führt.

Transparente Inhaltsverhandlung wird in den meisten modernen Browsern nicht unterstützt, aufgrund der Komplexität bei der Implementierung, des Mangels an Standardisierung, wie Clients automatisch aus Antworten wählen, und der zusätzlichen Round-Trips, die die Interaktion zwischen Client und Server verlangsamen.
[Servergesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weitaus häufiger, wobei ein Server direkt die am besten geeignete Ressource für den Client basierend auf den Anfrage-Headern auswählt ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.).

## Status

```http
506 Variant Also Negotiates
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Ressourcen mit Varianten

Im folgenden Beispiel fordert ein Client eine Seite in der `fr`-Lokalisierung unter Verwendung des {{HTTPHeader("Accept-Language")}} Headers an.
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

Aufgrund einer Fehlkonfiguration des Servers verweist die Variantenantwort für `fr` auf eine [Typkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps), die selbst dazu führt, dass eine transparente Verhandlung durchgeführt wird.
Der Server kann diesen Zustand durch das Vorhandensein eines `TCN` Headers in einer Auswahlantwort erkennen, bevor sie gesendet wird:

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
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) in der Apache HTTP Server-Dokumentation
- [Apache httpd `mod_negotiation.c` Quellcode](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691), der Bedingungen zeigt, die `HTTP_VARIANT_ALSO_VARIES` Antwort auslösen.
