---
title: 504 Gateway Timeout
slug: Web/HTTP/Reference/Status/504
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`504 Gateway Timeout`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Server, während er als Gateway oder {{Glossary("Proxy_server", "Proxy")}} dient, innerhalb der vorgegebenen Zeit keine Antwort vom Upstream-Server erhalten hat, um die Anfrage zu bearbeiten. Dies ähnelt einem {{HTTPStatus("502", "502 Bad Gateway")}}, außer dass bei einem `504`-Status der Proxy oder das Gateway innerhalb eines bestimmten Zeitraums keine HTTP-Antwort vom Ursprungsserver erhält.

Es gibt viele Ursachen für `504`-Fehler, und die Behebung solcher Probleme erfordert wahrscheinlich Untersuchungen und Debugging durch Server-Administratoren oder die Seite könnte zu einem späteren Zeitpunkt wieder funktionieren. Ausnahmen sind Netzwerkfehler der Clients, insbesondere wenn der Dienst für andere Besucher funktioniert und wenn Clients VPNs oder andere benutzerdefinierte Netzwerkeinstellungen verwenden. In solchen Fällen sollten Clients die Netzwerkeinstellungen, die Firewall-Einstellungen, die Proxy-Einstellungen, die DNS-Konfiguration usw. überprüfen.

## Status

```http
504 Gateway Timeout
```

## Beispiele

### 504 Gateway Timeout Antwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `504`-Antwort zurück. Der Antworttext enthält eine Seite, die den Serverzustand beschreibt, mit einem Link zu einer Support-Seite für Besucher.

```http
GET /highlights HTTP/1.1
Host: example.com
User-Agent: curl/8.6.0
Accept: */*
```

```http
HTTP/1.1 504 Gateway Timeout
Content-Type: text/html;
Content-Length: 123

<!doctype html>
<html lang="en">
<head>
  <title>504 Gateway Timeout</title>
</head>
<body>
  <h1>Gateway timeout</h1>
  <p>The server did not respond in time. Please try again later.</p>
  <p>If this problem persists, please <a href="https://example.com/support">contact support</a>.</p>
</body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes der Antworten](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
