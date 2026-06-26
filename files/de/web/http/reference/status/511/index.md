---
title: 511 Network Authentication Required
slug: Web/HTTP/Reference/Status/511
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`511 Network Authentication Required`** [Serverfehler-Antwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Client sich authentifizieren muss, um Netzwerkzugang zu erhalten.
Dieser Status wird nicht von Ursprungsservern generiert, sondern von abfangenden {{Glossary("Proxy_server", "Proxies")}}, die den Zugang zu einem Netzwerk kontrollieren.

Netzwerkbetreiber erfordern manchmal eine Authentifizierung, die Annahme von Bedingungen oder andere Nutzerinteraktionen, bevor sie Zugang gewähren (zum Beispiel in einem Internetcafé oder an einem Flughafen).
Sie identifizieren oft Clients, die dies noch nicht getan haben, mithilfe ihrer Media Access Control (MAC)-Adressen.

## Status

```http
511 Network Authentication Required
```

## Beispiele

### 511-Antwort für eine GET-Anfrage

Im folgenden Beispiel versucht ein Client, auf eine Ressource in einem Netzwerk zuzugreifen.
Die Anfrage ist nicht authentifiziert, und ein Proxy sendet einen `511`-Statuscode, um den Besucher zur Anmeldung aufzufordern.
Der `511` stellt sicher, dass nicht-browserbasierte Clients die Antwort nicht als vom Ursprungsserver stammend interpretieren.
Browser werden nach 10 Sekunden automatisch über den {{HTMLelement("meta")}}-Tag umgeleitet oder durch Klicken auf den Link im Antwortkörper:

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
- {{Glossary("Proxy_server", "Proxyserver")}}
