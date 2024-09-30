---
title: 510 Not Extended
slug: Web/HTTP/Status/510
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode für den **`510 Not Extended`** [Serverfehler](/de/docs/Web/HTTP/Status#server_error_responses) wird gesendet, wenn die Clientanfrage eine HTTP-Erweiterung erklärt ({{RFC("2774")}}), die zur Verarbeitung der Anfrage verwendet werden soll, aber die Erweiterung wird nicht unterstützt.

## Status

```http
510 Not Extended
```

## Beispiele

### Erweiterung nicht unterstützt

Im folgenden Beispiel sendet ein Client eine Anfrage mit einer im `C-MAN`-Header angegebenen obligatorischen Erweiterung.
Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf Basis von [Hop-by-Hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers) behandelt werden sollen.
Ein [Proxy](/de/docs/Glossary/Proxy_server) leitet die erweiterte Anfrage weiter, aber der {{HTTPHeader("Connection")}}-Header wird während der Übertragung entfernt.
Da der Ursprungsserver keine Informationen über die `M-GET`-Methode erhält, sendet er eine `510`-Antwort:

```http
M-GET /document HTTP/1.1
Host: example.com
C-Man: "http://www.example.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
