---
title: Cross-Origin Resource Sharing (CORS)-Konfiguration
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Cross-Origin Resource Sharing (CORS) wird mit den Headern [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) und verwandten Headern behandelt. `Access-Control-Allow-Origin` definiert die nicht-identischen Ursprünge, die Anfragen an Seiten Ihrer Domain stellen dürfen (d.h. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [gleichen Ursprungsrichtlinie](/de/docs/Web/Security/Same-origin_policy) cross-origin HTTP-Anfragen, die durch Skripte initiiert werden. Es gibt mehrere Anwendungsfälle, die den Zugriff auf Skripte von verschiedenen Ursprüngen erfordern; zum Beispiel Content Delivery Networks (CDNs), die Hosting für JavaScript/CSS-Bibliotheken und öffentliche API-Endpunkte bereitstellen. Dennoch stellt der Zugriff von verschiedenen Ursprüngen ein großes Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Verwenden Sie `Access-Control-Allow-Origin`, um die nicht-identischen Ursprünge zu definieren, die Anfragen an Seiten Ihrer Domain stellen dürfen.

Wenn vorhanden, sollte `Access-Control-Allow-Origin` die kleinstmögliche Anzahl von Ursprüngen und Ressourcen festlegen, damit Ihre Website funktioniert. Zum Beispiel, wenn Ihr Server sowohl eine Website als auch eine API bereitstellt, die für Remote-`XMLHttpRequest`-Zugriffe gedacht ist, sollten nur die API-Ressourcen den `Access-Control-Allow-Origin`-Header zurückgeben.

Das Versäumnis, `Access-Control-Allow-Origin` angemessen festzulegen, erlaubt es nicht autorisierten Ursprüngen, die Inhalte einer beliebigen Seite auf Ihrer Website zu lesen. Dies kann besonders gefährlich sein, wenn diese Seiten in der Lage sind, Anmeldedaten zu senden, was Ihre Website potenziell für [CSRF](/de/docs/Web/Security/Practical_implementation_guides/CSRF_prevention)-Angriffe anfällig macht.

Wenn der Zugriff mit Anmeldedaten von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt wird und nicht den [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)-Header widerspiegelt. Wenn öffentlicher, nicht vorberechtigter Zugriff erforderlich ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den `Access-Control-Allow-Credentials`-Header weg. Andernfalls lassen Sie beide Header weg.

## Beispiele

Erlauben Sie jeder Seite, den Inhalt einer JavaScript-Bibliothek zu lesen:

```http
Access-Control-Allow-Origin: *
```

> [!NOTE]
> Diese Einstellung ist erforderlich, damit die [Subresource-Integrität](/de/docs/Web/Security/Practical_implementation_guides/SRI) funktioniert.

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
- [CORS für Entwickler](https://w3c.github.io/webappsec-cors-for-developers/) von W3C (2016)
