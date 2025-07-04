---
title: 502 Bad Gateway
slug: Web/HTTP/Reference/Status/502
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`502 Bad Gateway`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) bedeutet, dass ein Server als Gateway oder {{Glossary("Proxy_server", "Proxy")}} agierte und eine ungültige Antwort vom vorgelagerten Server erhielt.

Diese Antwort ähnelt einer {{HTTPStatus("500", "500 Internal Server Error")}}-Antwort insofern, als dass sie ein allgemeiner "Catch-Call" für Serverfehler ist. Der Unterschied besteht darin, dass sie spezifisch für den Punkt in der Anforderungskette ist, an dem der Fehler aufgetreten ist. Wenn der Ursprungsserver eine gültige HTTP-Fehlerantwort an das Gateway sendet, sollte die Antwort an den Client weitergeleitet werden, anstatt eine `502`, um den Grund des Fehlers transparent zu machen. Wenn der Proxy oder das Gateway keine HTTP-Antwort vom Ursprung erhalten hat, sendet es stattdessen eine {{HTTPStatus("504", "504 Gateway Timeout")}} an den Client.

Es gibt viele Ursachen für `502`-Fehler, und die Behebung solcher Probleme erfordert wahrscheinlich eine Untersuchung durch Serverbesitzer oder Administratoren. Ausnahmen sind Netzwerkfehler auf der Client-Seite, insbesondere wenn der Dienst für andere Besucher funktioniert und wenn Clients VPNs oder andere benutzerdefinierte Netzwerkkonfigurationen verwenden. In solchen Fällen sollten Clients ihre Netzwerkeinstellungen, Firewall-Konfigurationen, Proxy-Einstellungen, DNS-Konfigurationen usw. überprüfen.

## Status

```http
502 Bad Gateway
```

## Beispiele

### 502 Gateway-Fehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält aber eine `502`-Antwort. Der Antworttext enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Supportseite für Besucher.

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
