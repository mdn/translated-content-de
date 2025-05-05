---
title: Cross-Origin Resource Sharing (CORS) Konfiguration
short-title: Cross-Origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Cross-Origin Resource Sharing (CORS) wird mithilfe von [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) und verwandten Headers gehandhabt. `Access-Control-Allow-Origin` definiert die Nicht-Gleicher-Ursprung (Non-Same-Origin), die berechtigt sind, Anfragen an Seiten auf Ihrer Domäne zu stellen (z.B. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) Cross-Origin HTTP-Anfragen, die durch Skripte initiiert werden. Es gibt mehrere Anwendungsfälle, die Cross-Origin-Skriptzugriff erfordern, zum Beispiel Content Delivery Networks (CDNs), die Hosting für JavaScript/CSS-Bibliotheken und öffentliche API Endpunkte bereitstellen. Allerdings stellt Cross-Origin-Zugriff ein großes Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Verwenden Sie `Access-Control-Allow-Origin`, um die Nicht-Gleicher-Ursprung zu definieren, die berechtigt sind, Anfragen an Seiten auf Ihrer Domäne zu stellen.

Wenn vorhanden, sollte `Access-Control-Allow-Origin` die geringstmögliche Anzahl von Ursprüngen und Ressourcen angeben, die für das Funktionieren Ihrer Seite nötig sind. Beispielsweise, wenn Ihr Server sowohl eine Website als auch eine API bereitstellt, die für den Remote-`XMLHttpRequest`-Zugriff vorgesehen ist, sollten nur die API-Ressourcen den `Access-Control-Allow-Origin` Header zurückgeben.

Wenn Sie `Access-Control-Allow-Origin` nicht richtig setzen, können unautorisierte Ursprünge die Inhalte jeder Seite auf Ihrer Website lesen. Dies kann besonders gefährlich sein, wenn diese Seiten in der Lage sind, Anmeldedaten zu senden, was Ihre Website für [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Angriffe anfällig machen könnte.

Wenn der Zugang mit Anmeldedaten von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt ist, anstatt den [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin) Header zu spiegeln. Wenn ein öffentlicher, nicht authentifizierter Zugang nötig ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den `Access-Control-Allow-Credentials` Header weg. Andernfalls lassen Sie beide Header weg.

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

- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Access-Control-Allow-Credentials`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials)
- [`Access-Control-Allow-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers)
- [`Access-Control-Allow-Methods`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Methods)
- [`Access-Control-Expose-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Expose-Headers)
- [`Access-Control-Max-Age`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Max-Age)
- [`Access-Control-Request-Headers`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Request-Headers)
- [`Access-Control-Request-Method`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Request-Method)
- [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [CORS für Entwickler](https://w3c.github.io/webappsec-cors-for-developers/) vom W3C (2016)
