---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`504 Gateway Timeout`** [Serverfehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) zeigt an, dass der Server, der als Gateway oder {{Glossary("Proxy_server", "Proxy")}} fungiert, innerhalb der vorgesehenen Zeit keine Antwort vom vorgelagerten Server erhalten hat, um die Anfrage abzuschließen. Dies ist ähnlich wie bei einem {{HTTPStatus("502", "502 Bad Gateway")}}, außer dass in einem `504`-Status das Proxy oder Gateway keine HTTP-Antwort vom Ursprungserver innerhalb einer bestimmten Zeit erhalten hat.

Es gibt viele Ursachen für `504`-Fehler, und die Behebung solcher Probleme erfordert wahrscheinlich eine Untersuchung und Fehlerbehebung durch die Serveradministratoren, oder die Seite könnte zu einem späteren Zeitpunkt wieder funktionieren. Ausnahmen sind Netzwerkfehler auf der Clientseite, insbesondere wenn der Dienst für andere Besucher funktioniert und wenn Clients VPNs oder andere benutzerdefinierte Netzwerkeinstellungen verwenden. In solchen Fällen sollten Clients die Netzwerkeinstellungen, die Firewall-Konfiguration, die Proxy-Einstellungen, die DNS-Konfiguration usw. überprüfen.

## Status

```http
504 Gateway Timeout
```

## Beispiele

### 504 Gateway Timeout Antwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `504`-Antwort. Der Antwortkörper enthält eine Seite, die den Serverstatus beschreibt, sowie einen Link zu einer Support-Seite für Besucher.

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
