---
title: 511 Network Authentication Required
slug: Web/HTTP/Reference/Status/511
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`511 Network Authentication Required`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Client sich authentifizieren muss, um Netzwerkzugriff zu erhalten.
Dieser Status wird nicht von Ursprungsservern generiert, sondern von abfangenden {{Glossary("Proxy_server", "Proxies")}}, die den Zugriff auf ein Netzwerk kontrollieren.

Netzwerkbetreiber erfordern manchmal eine Authentifizierung, die Akzeptanz von Bedingungen oder andere Benutzerinteraktionen, bevor sie Zugriff gewähren (zum Beispiel in einem Internetcafé oder am Flughafen).
Häufig identifizieren sie Clients, die dies noch nicht getan haben, mithilfe ihrer Media Access Control (MAC)-Adressen.

## Status

```http
511 Network Authentication Required
```

## Beispiele

### 511-Antwort für eine GET-Anfrage

Im folgenden Beispiel versucht ein Client auf eine Ressource in einem Netzwerk zuzugreifen.
Die Anfrage ist nicht authentifiziert, und ein Proxy sendet einen `511`-Statuscode, um den Besucher aufzufordern, sich anzumelden.
Der `511` stellt sicher, dass nicht-Browser-Clients die Antwort nicht als von dem Ursprungsserver kommend interpretieren.
Browser werden automatisch über das {{HTMLelement("meta")}}-Tag nach 10 Sekunden umgeleitet, oder indem der Link im Antworttext angeklickt wird:

```http
GET /document HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 511 Network Authentication Required
Content-Type: text/html

<html lang="en-US">
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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{Glossary("Proxy_server", "Proxy-Server")}}
