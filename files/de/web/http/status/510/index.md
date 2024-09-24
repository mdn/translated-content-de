---
title: 510 Nicht Erweitert
slug: Web/HTTP/Status/510
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode für den **`510 Nicht Erweitert`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) wird gesendet, wenn die Client-Anfrage eine HTTP-Erweiterung erklärt ({{RFC("2774")}}), die zur Verarbeitung der Anfrage verwendet werden soll, die Erweiterung jedoch nicht unterstützt wird.

## Status

```http
510 Not Extended
```

## Beispiele

### Erweiterung nicht unterstützt

Im folgenden Beispiel sendet ein Client eine Anfrage mit einer obligatorischen Erweiterung, die im `C-MAN`-Header spezifiziert ist.
Der {{HTTPHeader("Connection")}}-Header gibt an, dass diese Erweiterungen auf einer [hop-by-hop](/de/docs/Web/HTTP/Headers#hop-by-hop_headers)-Basis behandelt werden sollen.
Ein {{Glossary("Proxy_server", "Proxy")}} leitet die erweiterte Anfrage weiter, aber der {{HTTPHeader("Connection")}}-Header wird während der Übertragung entfernt.
Da der Ursprungsserver keine Informationen über die `M-GET`-Methode erhält, sendet er als Antwort einen `510`:

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

- [HTTP-Statuscodes für Antworten](/de/docs/Web/HTTP/Status)
