---
title: 502 Bad Gateway
slug: Web/HTTP/Reference/Status/502
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`502 Bad Gateway`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) signalisiert, dass ein Server als Gateway oder {{Glossary("Proxy_server", "Proxy")}} fungierte und eine ungültige Antwort vom Upstream-Server erhalten hat.

Diese Antwort ist vergleichbar mit einer {{HTTPStatus("500", "500 Internal Server Error")}}-Antwort, in dem Sinne, dass es sich um einen generischen "Catch-All" für Serverfehler handelt.
Der Unterschied besteht darin, dass sie spezifisch für den Punkt in der Anfragereihe ist, an dem der Fehler aufgetreten ist.
Sendet der Ursprungsserver eine gültige HTTP-Fehlerantwort an das Gateway, sollte die Antwort dem Client übermittelt werden, anstatt einer `502`, um den Grund für den Fehlschlag transparent zu machen.
Wenn der Proxy oder das Gateway keine HTTP-Antwort vom Ursprung erhält, sendet es stattdessen einen {{HTTPStatus("504", "504 Gateway Timeout")}} an den Client.

Es gibt viele Ursachen für `502`-Fehler, und das Beheben solcher Probleme erfordert wahrscheinlich eine Untersuchung durch Serverbesitzer oder Administratoren.
Ausnahmen sind Netzwerkfehler auf der Client-Seite, insbesondere wenn der Dienst für andere Besucher funktioniert und Clients VPNs oder andere benutzerdefinierte Netzwerkeinstellungen verwenden.
In solchen Fällen sollten Clients die Netzwerkeinstellungen, Firewall-Konfiguration, Proxy-Einstellungen, DNS-Konfiguration etc. überprüfen.

## Status

```http
502 Bad Gateway
```

## Beispiele

### 502 Gateway-Fehlerantwort

Die folgende Anfrage versucht, eine Webseite abzurufen, erhält jedoch eine `502`-Antwort zurück.
Der Antwortkörper enthält eine Seite, die den Serverzustand beschreibt, mit einem Link zu einer Support-Seite für Besucher.

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
