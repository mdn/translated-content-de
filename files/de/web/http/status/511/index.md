---
title: 511 Netzwerk-Authentifizierung erforderlich
slug: Web/HTTP/Status/511
l10n:
  sourceCommit: f584f1b27f9f3b78c95122c560f5135866a87eb0
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`511 Netzwerk-Authentifizierung erforderlich`** [Server-Fehlerantwort](/de/docs/Web/HTTP/Status#server_error_responses) weist darauf hin, dass der Client authentifiziert werden muss, um Zugriff auf das Netzwerk zu erhalten. Dieser Status wird nicht von Ursprungsservern generiert, sondern von abfangenden {{Glossary("Proxy_server", "Proxies")}}, die den Zugriff auf ein Netzwerk kontrollieren.

Netzwerkbetreiber verlangen manchmal eine Authentifizierung, die Annahme von Bedingungen oder eine andere Benutzerinteraktion, bevor sie Zugang gewähren (zum Beispiel in einem Internetcafé oder an einem Flughafen). Sie identifizieren häufig Clients, die dies nicht getan haben, mittels deren Media Access Control (MAC)-Adressen.

## Status

```http
511 Network Authentication Required
```

## Beispiele

### 511-Antwort für eine GET-Anfrage

Im folgenden Beispiel versucht ein Client, auf eine Ressource in einem Netzwerk zuzugreifen. Die Anfrage ist nicht authentifiziert, und ein Proxy sendet einen `511`-Statuscode, um den Besucher aufzufordern, sich anzumelden. Der `511` stellt sicher, dass Nicht-Browser-Clients die Antwort nicht als von dem Ursprungsserver interpretieren. Browser werden automatisch nach 10 Sekunden über das {{HTMLelement("meta")}}-Tag weitergeleitet oder durch Klicken auf den Link im Antworttext:

```http
GET /document HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html>
  <head>
    <title>Network Authentication Required</title>
    <meta http-equiv="refresh" content="10; url=https://login.example.net/">
  </head>
  <body>
      <p>You need to <a href="https://login.example.net/">authenticate with the local network</a> in order to gain access.</p>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{Glossary("Proxy server")}}
