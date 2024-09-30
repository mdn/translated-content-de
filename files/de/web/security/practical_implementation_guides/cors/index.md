---
title: Cross-Origin Resource Sharing (CORS) Konfiguration
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-Origin Resource Sharing (CORS) wird mit Hilfe der Header [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) und verwandter Header gehandhabt. `Access-Control-Allow-Origin` definiert die nicht gleichartigen Ursprünge, die Anfragen an Seiten auf Ihrer Domain stellen dürfen (z. B. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [same-origin policy](/de/docs/Web/Security/Same-origin_policy) von Skripten initiierte, ursprungsübergreifende HTTP-Anfragen. Es gibt mehrere Anwendungsfälle, die den Zugriff auf ursprungsübergreifende Skripte erfordern; zum Beispiel Content Delivery Networks (CDNs), die Hosting für JavaScript/CSS-Bibliotheken und öffentliche API-Endpunkte bereitstellen. Ursprungsübergreifender Zugriff stellt jedoch ein erhebliches Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Verwenden Sie `Access-Control-Allow-Origin`, um die nicht gleichartigen Ursprünge zu definieren, die Anfragen an Seiten auf Ihrer Domain stellen dürfen.

Falls vorhanden, sollte `Access-Control-Allow-Origin` die kleinstmögliche Anzahl von Ursprüngen und Ressourcen spezifizieren, damit Ihre Website funktioniert. Wenn Ihr Server beispielsweise sowohl eine Website als auch eine API bereitstellt, die für den Remote-`XMLHttpRequest`-Zugang vorgesehen ist, sollten nur die API-Ressourcen den Header `Access-Control-Allow-Origin` zurückgeben.

Ein Versäumnis, `Access-Control-Allow-Origin` richtig zu setzen, ermöglicht unautorisierten Ursprüngen, die Inhalte jeder Seite auf Ihrer Website zu lesen. Dies kann besonders gefährlich sein, wenn diese Sites in der Lage sind, Anmeldedaten zu senden, was Ihre Seite potenziell [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Angriffen aussetzen könnte.

Wenn der Zugriff auf Anmeldedaten von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt ist, anstatt den Header [`Origin`](/de/docs/Web/HTTP/Headers/Origin) widerzuspiegeln. Wenn ungeprüfter öffentlicher Zugang erforderlich ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den Header `Access-Control-Allow-Credentials` weg. Andernfalls lassen Sie beide Header weg.

## Beispiele

Erlauben Sie jeder Site, die Inhalte einer JavaScript-Bibliothek zu lesen:

```http
Access-Control-Allow-Origin: *
```

> [!NOTE]
> Diese Einstellung ist erforderlich, damit die [Subresource integrity](/de/docs/Web/Security/Practical_implementation_guides/SRI) funktioniert.

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
