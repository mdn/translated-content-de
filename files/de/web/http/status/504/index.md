---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`504 Gateway Timeout`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server, während er als Gateway oder [Proxy](/de/docs/Glossary/Proxy_server) agiert, keine rechtzeitige Antwort vom vorgelagerten Server erhalten hat, um die Anfrage abzuschließen.
Dies ähnelt einem {{HTTPStatus("502", "502 Bad Gateway")}}, mit dem Unterschied, dass bei einem `504`-Status der Proxy oder das Gateway innerhalb einer bestimmten Zeit keine HTTP-Antwort vom Ursprung erhalten hat.

Es gibt viele Ursachen für `504`-Fehler, und die Behebung solcher Probleme erfordert wahrscheinlich Untersuchung und Debugging durch Server-Administratoren, oder die Seite könnte später wieder funktionieren.
Ausnahmen sind Netzwerkfehler beim Client, insbesondere wenn der Dienst für andere Besucher funktioniert und wenn Clients VPNs oder andere benutzerdefinierte Netzwerksetups verwenden.
In solchen Fällen sollten Clients die Netzwerkeinstellungen, Firewall-Konfiguration, Proxy-Einstellungen, DNS-Konfiguration usw. überprüfen.

## Status

```http
504 Gateway Timeout
```

## Beispiele

### 504 Gateway Timeout Antwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch als Antwort einen `504`-Fehler.
Der Antwortinhalt enthält eine Seite, die den Serverstatus beschreibt, mit einem Link zu einer Support-Seite für Besucher.

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
