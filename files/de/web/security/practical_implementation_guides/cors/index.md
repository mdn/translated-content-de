---
title: Cross-Origin Resource Sharing (CORS) Konfiguration
short-title: Cross-Origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Cross-Origin Resource Sharing (CORS) wird mit Hilfe von [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) und verwandten Headern gehandhabt. `Access-Control-Allow-Origin` definiert die nicht gleichen Ursprünge, die berechtigt sind, Anfragen an Seiten auf Ihrer Domain zu senden (d.h. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) von Skripten initiierte Cross-Origin HTTP-Anfragen. Es gibt mehrere Anwendungsfälle, die einen Zugriff von skriptübergreifenden Quellen erfordern; zum Beispiel Content Delivery Networks (CDNs), die das Hosting für JavaScript/CSS-Bibliotheken und öffentliche API-Endpunkte bereitstellen. Jedoch stellt der Cross-Origin-Zugriff ein großes Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Verwenden Sie `Access-Control-Allow-Origin`, um die nicht gleichen Ursprünge zu definieren, die berechtigt sind, Anfragen an Seiten auf Ihrer Domain zu senden.

Wenn vorhanden, sollte `Access-Control-Allow-Origin` die minimale Anzahl an Ursprüngen und Ressourcen angeben, die für das Funktionieren Ihrer Website notwendig sind. Wenn Ihr Server beispielsweise sowohl eine Website als auch eine API bereitstellt, die für den entfernten `XMLHttpRequest`-Zugriff gedacht ist, sollten nur die API-Ressourcen den Header `Access-Control-Allow-Origin` zurückgeben.

Wenn `Access-Control-Allow-Origin` nicht korrekt gesetzt wird, können unautorisierte Ursprünge die Inhalte jeder Seite auf Ihrer Website lesen. Dies kann besonders gefährlich sein, wenn diese Seiten in der Lage sind, Anmeldeinformationen zu senden, wodurch Ihre Website potenziell [CSRF](/de/docs/Web/Security/Attacks/CSRF)-Angriffen ausgesetzt wird.

Wenn ein authentifizierter Zugriff von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt wird, anstatt den [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)-Header zu spiegeln. Wenn öffentlicher, nicht authentifizierter Zugriff erforderlich ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den Header `Access-Control-Allow-Credentials` weg. Andernfalls lassen Sie beide Header weg.

## Beispiele

Erlauben Sie jeder Website, den Inhalt einer JavaScript-Bibliothek zu lesen:

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
- [CORS for Developers](https://w3c.github.io/webappsec-cors-for-developers/) von W3C (2016)
