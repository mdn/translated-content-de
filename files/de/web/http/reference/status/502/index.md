---
title: 502 Bad Gateway
slug: Web/HTTP/Reference/Status/502
l10n:
  sourceCommit: dd0fe980a26938d585691d1429c8a941fa6824ff
---

Der HTTP-Statuscode **`502 Bad Gateway`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass ein Server als Gateway oder {{Glossary("Proxy_server", "Proxy")}} fungierte und eine ungültige Antwort vom Upstream-Server erhalten hat.

Diese Antwort ähnelt einer {{HTTPStatus("500", "500 Internal Server Error")}}-Antwort in dem Sinne, dass es sich um eine generische "Auffanglösung" für Serverfehler handelt. Der Unterschied besteht darin, dass sie spezifisch für den Punkt in der Anfrageschleife ist, an dem der Fehler aufgetreten ist. Wenn der Ursprungsserver eine gültige HTTP-Fehlerantwort an das Gateway sendet, sollte diese Antwort an den Client weitergegeben werden, anstatt eines `502`, um den Grund des Fehlers transparent zu machen. Wenn der Proxy oder das Gateway keine HTTP-Antwort vom Ursprung erhalten hat, sendet es stattdessen einen {{HTTPStatus("504", "504 Gateway Timeout")}} an den Client.

Es gibt viele Ursachen für `502`-Fehler und das Beheben solcher Probleme erfordert wahrscheinlich eine Untersuchung durch Server-Eigentümer oder Administratoren. Ausnahmen sind Netzwerkfehler auf der Client-Seite, insbesondere wenn der Dienst für andere Besucher funktioniert und wenn Clients VPNs oder andere benutzerdefinierte Netzwerkkonfigurationen verwenden. In solchen Fällen sollten Clients Netzwerkeinstellungen, Firewall-Setup, Proxy-Einstellungen, DNS-Konfiguration usw. überprüfen.

## Status

```http
502 Bad Gateway
```

## Beispiele

### 502 Gateway-Fehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch stattdessen eine `502`-Antwort. Der Antwortinhalt enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Support-Seite für Besucher.

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 502 Bad Gateway
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>502 Bad Gateway</title>
</head>
<body>
  <h1>Bad Gateway</h1>
  <p>The server was unable to complete your request. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("504", "504 Gateway Timeout")}}
