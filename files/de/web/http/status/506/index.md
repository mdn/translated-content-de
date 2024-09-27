---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`506 Variant Also Negotiates`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) wird während der Transparenten Inhaltsverhandlung (TCN) zurückgegeben, wenn eine rekursive Schleife im Prozess der Ressourcenauswahl vorliegt.

Transparente Inhaltsverhandlung ermöglicht einem Client und Server gemeinsam zu entscheiden, welche Variante einer gegebenen Ressource die beste ist, wenn der Server mehrere Varianten hat. Ein Server sendet einen `506`-Statuscode aufgrund einer Serverfehlkonfiguration, die zu zirkulären Referenzen bei der Erstellung von Antworten führt.

Transparente Inhaltsverhandlung wird in den meisten modernen Browsern nicht unterstützt, aufgrund der Komplexität bei der Implementierung, des Mangels an Standardisierung, wie Clients automatisch aus Antworten wählen, und der zusätzlichen Round-Trips, die die Client-Server-Interaktion verlangsamen. [Servergesteuerte Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) ist weit häufiger, wobei ein Server direkt die am besten geeignete Ressource für den Client basierend auf den Anfrage-Headern ({{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}, etc.) auswählt.

## Status

```http
506 Variant Also Negotiates
```

## Spezifikationen

{{Specifications}}

## Beispiele

### Ressource mit Varianten

Im folgenden Beispiel fordert ein Client eine Seite im `fr`-Lokalisierung mit dem {{HTTPHeader("Accept-Language")}}-Header an. Dies kann mit curl durchgeführt werden:

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

Aufgrund einer Serverfehlkonfiguration verweist die Variantenantwort für `fr` auf eine [Typenkarte](https://httpd.apache.org/docs/trunk/mod/mod_negotiation.html#typemaps), die selbst eine transparente Verhandlung verursacht. Der Server könnte diesen Zustand durch das Vorhandensein eines `TCN`-Headers in einer Auswahlantwort erkennen, bevor diese gesendet wird:

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
- [Inhaltsverhandlung](https://httpd.apache.org/docs/2.4/content-negotiation.html) in der Dokumentation des Apache HTTP Servers
- [Apache httpd `mod_negotiation.c` Quelle](https://github.com/apache/httpd/blob/6a2433cb3fbc30c8a55f450a046e4b0f69e73143/modules/mappers/mod_negotiation.c#L2687-L2691), die Bedingungen zeigt, die eine `HTTP_VARIANT_ALSO_VARIES`-Antwort auslösen.
