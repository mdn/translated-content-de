---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Reference/Status/506
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`506 Variant Also Negotiates`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) wird während der Inhaltsaushandlung zurückgegeben, wenn es eine rekursive Schleife im Prozess der Ressourcenauswahl gibt.

[Agentengesteuerte Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) ermöglicht es einem Client und einem Server gemeinsam zu entscheiden, welche Variante einer gegebenen Ressource am besten geeignet ist, wenn der Server mehrere Varianten hat. Ein Server sendet einen `506` Statuscode aufgrund einer Serverfehlkonfiguration, die zu zirkulären Referenzen bei der Erstellung von Antworten führt.

Der Mangel an Standardisierung dafür, wie Clients automatisch aus Antworten wählen, und die zusätzlichen Round-Trips, die die Client-Server-Interaktion verlangsamen, bedeuten, dass dieser Mechanismus selten verwendet wird. [Servergesteuerte Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) ist weitaus verbreiteter, wobei ein Server direkt die am besten geeignete Ressource für den Client basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.) auswählt.

## Status

```http
506 Variant Also Negotiates
```

## Beispiele

### Ressource mit Varianten

Im folgenden Beispiel fordert ein Client eine Seite in der `fr`-Lokalisierung mittels des {{HTTPHeader("Accept-Language")}} Headers an.
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

Aufgrund einer Serverfehlkonfiguration verweist die Variantenantwort für `fr` auf eine [Typkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps), die selbst eine transparente Aushandlung verursacht. Der Server kann diesen Zustand anhand des Vorhandenseins eines `TCN` Headers in einer Auswahlantwort erkennen, bevor sie gesendet wird:

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

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("300", "300 Multiple Choices")}}
- {{RFC("2295")}}
- [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Inhaltsaushandlung](https://httpd.apache.org/docs/2.4/content-negotiation.html) in der Apache HTTP Server-Dokumentation
- [Apache httpd `mod_negotiation.c` Quellcode](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691), der Bedingungen zeigt, die `HTTP_VARIANT_ALSO_VARIES` Antwort auslösen.
