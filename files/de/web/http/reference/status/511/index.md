---
title: 511 Network Authentication Required
slug: Web/HTTP/Reference/Status/511
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`511 Network Authentication Required`** [Serverfehlerantwort](/de/docs/Web/HTTP/Reference/Status#server_error_responses) zeigt an, dass der Client authentifiziert werden muss, um Netzwerkzugang zu erhalten. Dieser Status wird nicht von Ursprungsservern generiert, sondern von abfangenden {{Glossary("Proxy_server", "Proxies")}}, die den Zugang zu einem Netzwerk kontrollieren.

Netzbetreiber verlangen manchmal eine Authentifizierung, die Annahme von Bedingungen oder andere Benutzerinteraktion, bevor der Zugang gewährt wird (zum Beispiel in einem Internetcafé oder am Flughafen). Sie identifizieren häufig Clients, die dies nicht getan haben, anhand ihrer Media Access Control (MAC)-Adressen.

## Status

```http
511 Network Authentication Required
```

## Beispiele

### 511 Antwort für eine GET-Anfrage

Im folgenden Beispiel versucht ein Client, auf eine Ressource in einem Netzwerk zuzugreifen. Die Anfrage ist nicht authentifiziert, und ein Proxy sendet einen `511`-Statuscode, um den Besucher zur Anmeldung zu bewegen. Der `511` gewährleistet, dass nicht-browserbasierte Clients die Antwort nicht als vom Ursprungsserver interpretieren. Browser werden automatisch über das {{HTMLelement("meta")}}-Tag nach 10 Sekunden umgeleitet oder durch Klicken auf den Link im Antwortkörper:

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

- [HTTP-Response-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{Glossary("Proxy_server", "Proxy-Server")}}
