---
title: 510 Not Extended
slug: Web/HTTP/Reference/Status/510
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`510 Not Extended`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) wird gesendet, wenn die Client-Anfrage eine HTTP-Erweiterung ({{RFC("2774")}}) deklariert, die zur Verarbeitung der Anfrage verwendet werden soll, aber die Erweiterung nicht unterstützt wird.

## Status

```http
510 Not Extended
```

## Beispiele

### Erweiterung nicht unterstützt

Im folgenden Beispiel sendet ein Client eine Anfrage mit einer obligatorischen Erweiterung, die im `C-MAN`-Header angegeben ist.
Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf einer [Hop-by-Hop](/de/docs/Web/HTTP/Reference/Headers#hop-by-hop_headers)-Basis behandelt werden sollen.
Ein {{Glossary("Proxy_server", "Proxy")}} leitet die erweiterte Anfrage weiter, aber der {{HTTPHeader("Connection")}}-Header wird während der Übertragung entfernt.
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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
