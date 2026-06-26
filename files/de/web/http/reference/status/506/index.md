---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Reference/Status/506
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`506 Variant Also Negotiates`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) wird während der Inhaltsverhandlung zurückgegeben, wenn es in dem Prozess der Ressourcenauswahl zu einer rekursiven Schleife kommt.

[Agentengesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#agent-driven_negotiation) ermöglicht es einem Client und Server, gemeinsam die beste Variante einer Ressource zu bestimmen, wenn der Server mehrere Varianten hat. Ein Server sendet einen `506`-Statuscode aufgrund von Server-Fehlkonfigurationen, die zu zirkulären Referenzen bei der Erstellung von Antworten führen.

Das Fehlen einer Standardisierung, wie Clients automatisch aus Antworten auswählen, und die zusätzlichen Round-Trips, die die Interaktion zwischen Client und Server verlangsamen, führen dazu, dass dieses Verfahren selten genutzt wird. [Servergesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) ist weit verbreiteter, wobei ein Server direkt die passendste Ressource für den Client basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.) wählt.

## Status

```http
506 Variant Also Negotiates
```

## Beispiele

### Ressource mit Varianten

Im folgenden Beispiel fordert ein Client eine Seite in der `fr` Lokalisierung mit dem {{HTTPHeader("Accept-Language")}} Header an. Dies kann mit curl durchgeführt werden:

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

Aufgrund einer Server-Fehlkonfiguration verweist die Variantenantwort für `fr` auf eine [Type Map](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps), die selbst zu einer transparenten Verhandlung führt. Der Server kann diesen Zustand durch das Vorhandensein eines `TCN` Headers in einer Auswahlantwort erkennen, bevor sie gesendet wird:

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
- [Content negotiation](/de/docs/Web/HTTP/Guides/Content_negotiation)
- [HTTP-Antwort-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) in der Apache HTTP Server-Dokumentation
- [Apache httpd `mod_negotiation.c` Quelle](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691), die Bedingungen zeigt, die `HTTP_VARIANT_ALSO_VARIES` Antwort auslösen.
