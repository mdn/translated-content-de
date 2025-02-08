---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
l10n:
  sourceCommit: dae4a066bdf3900056bb4e8e6af85f50e4d1fd71
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`506 Variant Also Negotiates`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) wird während der Inhaltsaushandlung zurückgegeben, wenn es eine rekursive Schleife im Prozess der Auswahl einer Ressource gibt.

[Agent-gesteuerte Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation#agent-driven_negotiation) ermöglicht es einem Client und einem Server, gemeinsam die beste Variante einer Ressource zu bestimmen, wenn der Server mehrere Varianten besitzt.
Ein Server sendet einen `506`-Statuscode aufgrund einer Server-Fehlkonfiguration, die zu zirkulären Referenzen bei der Erstellung von Antworten führt.

Ein Mangel an Standardisierung, wie Clients automatisch aus Antworten auswählen, sowie die zusätzlichen Round-Trips, die die Interaktion zwischen Client und Server verlangsamen, führen dazu, dass dieser Mechanismus selten verwendet wird.
[Server-gesteuerte Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weitaus häufiger, da der Server direkt die passendste Ressource für den Client basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.) auswählt.

## Status

```http
506 Variant Also Negotiates
```

## Beispiele

### Ressource mit Varianten

Im folgenden Beispiel fordert ein Client eine Seite in der Lokalisierung `fr` mithilfe des {{HTTPHeader("Accept-Language")}}-Headers an.
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

Aufgrund einer Server-Fehlkonfiguration verweist die Variantenantwort für `fr` auf eine [Type Map](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps), die selbst eine transparente Aushandlung verursacht.
Der Server kann diesen Zustand anhand der Präsenz eines `TCN`-Headers in einer Auswahlantwort erkennen, bevor diese gesendet wird:

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
- [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Content Negotiation](https://httpd.apache.org/docs/2.4/content-negotiation.html) in der Apache HTTP Server Dokumentation
- [Apache httpd `mod_negotiation.c` source](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691), die Bedingungen zeigt, die die `HTTP_VARIANT_ALSO_VARIES`-Antwort auslösen.
