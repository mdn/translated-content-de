---
title: Konfiguration von Cross-Origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-Origin Resource Sharing (CORS) wird über die Header [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) und verwandte Header gehandhabt. `Access-Control-Allow-Origin` definiert die Nicht-Same-Origin-Anfragen, die berechtigt sind, Anfragen an Seiten auf Ihrer Domain zu stellen (z.B. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) von Skripten initiierte Cross-Origin HTTP-Anfragen. Es gibt mehrere Anwendungsfälle, die Cross-Origin-Zugriff erfordern, zum Beispiel Content Delivery Networks (CDNs), die JavaScript/CSS-Bibliotheken bereitstellen, und öffentliche API-Endpunkte. Jedoch stellt Cross-Origin-Zugriff ein großes Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Verwenden Sie `Access-Control-Allow-Origin`, um die Nicht-Same-Origin-Anfragen zu definieren, die berechtigt sind, Anfragen an Seiten auf Ihrer Domain zu stellen.

Wenn vorhanden, sollte `Access-Control-Allow-Origin` die kleinstmögliche Anzahl von Ursprüngen und Ressourcen angeben, die für die Funktion Ihrer Website erforderlich sind. Beispielsweise, wenn Ihr Server sowohl eine Website als auch eine API bereitstellt, die für den externen `XMLHttpRequest`-Zugriff gedacht ist, sollten nur die API-Ressourcen den `Access-Control-Allow-Origin`-Header zurückgeben.

Das Versäumnis, `Access-Control-Allow-Origin` angemessen zu setzen, ermöglicht es unautorisierten Ursprüngen, die Inhalte jeder Seite Ihrer Website zu lesen. Dies kann besonders gefährlich sein, wenn diese Seiten in der Lage sind, Anmeldeinformationen zu senden, was potenziell Ihre Website für [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Angriffe öffnen könnte.

Falls ein zugangsbeschränkter Zugriff von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt ist, anstatt den [`Origin`](/de/docs/Web/HTTP/Headers/Origin)-Header zu reflektieren. Wenn öffentlicher, nicht authentifizierter Zugriff erforderlich ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den `Access-Control-Allow-Credentials`-Header weg. Andernfalls lassen Sie beide Header weg.

## Beispiele

Erlauben Sie jeder Website, die Inhalte einer JavaScript-Bibliothek zu lesen:

```http
Access-Control-Allow-Origin: *
```

> [!NOTE]
> Diese Einstellung ist erforderlich, damit [Subresource Integrity](/de/docs/Web/Security/Practical_implementation_guides/SRI) funktioniert.

Erlauben Sie `https://random-dashboard.example.org`, die zurückgegebenen Ergebnisse einer API zu lesen:

```http
Access-Control-Allow-Origin: https://random-dashboard.example.org
```

## Siehe auch

- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [`Access-Control-Allow-Credentials`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)
- [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Headers)
- [`Access-Control-Allow-Methods`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Methods)
- [`Access-Control-Expose-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Expose-Headers)
- [`Access-Control-Max-Age`](/de/docs/Web/HTTP/Headers/Access-Control-Max-Age)
- [`Access-Control-Request-Headers`](/de/docs/Web/HTTP/Headers/Access-Control-Request-Headers)
- [`Access-Control-Request-Method`](/de/docs/Web/HTTP/Headers/Access-Control-Request-Method)
- [`Origin`](/de/docs/Web/HTTP/Headers/Origin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [CORS for Developers](https://w3c.github.io/webappsec-cors-for-developers/) from W3C (2016)
