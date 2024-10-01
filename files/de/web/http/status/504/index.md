---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`504 Gateway Timeout`** zeigt an, dass der Server, während er als Gateway oder {{Glossary("Proxy_server", "Proxy")}} agiert, keine rechtzeitige Antwort vom vorgelagerten Server erhalten hat, um die Anfrage abzuschließen. Dies ist ähnlich einem {{HTTPStatus("502", "502 Bad Gateway")}}, außer dass bei einem `504`-Status der Proxy oder das Gateway keine HTTP-Antwort vom Ursprung innerhalb einer bestimmten Zeit erhalten hat.

Es gibt viele Ursachen für `504`-Fehler, und die Behebung solcher Probleme erfordert wahrscheinlich die Untersuchung und das Debuggen durch Serveradministratoren, oder die Seite könnte zu einem späteren Zeitpunkt wieder funktionieren. Ausnahmen sind Netzwerkfehler auf der Client-Seite, insbesondere wenn der Dienst für andere Besucher funktioniert und wenn Clients VPNs oder andere benutzerdefinierte Netzwerkeinstellungen verwenden. In solchen Fällen sollten Clients Netzwerkeinstellungen, Firewall-Einrichtung, Proxy-Einstellungen, DNS-Konfiguration usw. überprüfen.

## Status

```http
504 Gateway Timeout
```

## Beispiele

### 504 Gateway Timeout-Antwort

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("502", "502 Bad Gateway")}}
