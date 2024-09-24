---
title: Konfiguration für Cross-Origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-Origin Resource Sharing (CORS) wird mit den Headern [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) und verwandten Headern gehandhabt. `Access-Control-Allow-Origin` definiert die nicht gleichen Ursprünge, die Anfragen an Seiten auf Ihrer Domain stellen dürfen (d.h. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [Same-Origin-Richtlinie](/de/docs/Web/Security/Same-origin_policy) durch Skripte initiierte Cross-Origin-HTTP-Anfragen. Es gibt mehrere Anwendungsfälle, die Cross-Origin-Skriptzugriff erfordern; zum Beispiel Content Delivery Networks (CDNs), die Hosting für JavaScript/CSS-Bibliotheken und öffentliche API-Endpunkte bereitstellen. Jedoch stellt der Cross-Origin-Zugriff ein erhebliches Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Nutzen Sie `Access-Control-Allow-Origin`, um die nicht gleichen Ursprünge zu definieren, die Anfragen an Seiten auf Ihrer Domain stellen dürfen.

Falls vorhanden, sollte `Access-Control-Allow-Origin` die minimale mögliche Anzahl von Ursprüngen und Ressourcen spezifizieren, damit Ihre Website funktioniert. Wenn Ihr Server beispielsweise sowohl eine Website als auch eine API bereitstellt, die für den Remote-`XMLHttpRequest`-Zugriff gedacht ist, sollten nur die API-Ressourcen den `Access-Control-Allow-Origin`-Header zurückgeben.

Wird `Access-Control-Allow-Origin` nicht angemessen festgelegt, können unbefugte Ursprünge die Inhalte jeder Seite Ihrer Website lesen. Dies kann besonders gefährlich sein, wenn diese Seiten in der Lage sind, Anmeldeinformationen zu senden, was Ihre Website potenziell für [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Angriffe anfällig macht.

Wenn ein Zugriff mit Anmeldeinformationen von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt ist, anstatt den [`Origin`](/de/docs/Web/HTTP/Headers/Origin)-Header zu spiegeln. Wenn öffentlicher, nicht anmeldepflichtiger Zugriff erforderlich ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den `Access-Control-Allow-Credentials`-Header weg. Andernfalls lassen Sie beide Header weg.

## Beispiele

Erlauben Sie jeder Seite, die Inhalte einer JavaScript-Bibliothek zu lesen:

```http
Access-Control-Allow-Origin: *
```

> [!NOTE]
> Diese Einstellung ist erforderlich, damit die [Subresource Integrity](/de/docs/Web/Security/Practical_implementation_guides/SRI) funktioniert.

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
- [CORS for Developers](https://w3c.github.io/webappsec-cors-for-developers/) von W3C (2016)
