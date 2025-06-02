---
title: Cross-Origin Resource Sharing (CORS)-Konfiguration
short-title: Cross-Origin Resource Sharing (CORS)
slug: Web/Security/Practical_implementation_guides/CORS
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

Cross-Origin Resource Sharing (CORS) wird mittels [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin) und verwandter Header gehandhabt. `Access-Control-Allow-Origin` definiert die nicht selben Ursprünge, die berechtigt sind, Anfragen an Seiten auf Ihrer Domain zu stellen (d.h. über [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`fetch()`](/de/docs/Web/API/Window/fetch)).

## Problem

Standardmäßig blockiert die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) von Skripten initiierte Cross-Origin-HTTP-Anfragen. Es gibt mehrere Anwendungsfälle, die den Zugriff von Skripten über Ursprungsgrenzen hinweg erfordern; zum Beispiel Content Delivery Networks (CDNs), die das Hosting für JavaScript/CSS-Bibliotheken und öffentliche API-Endpunkte bereitstellen. Jedoch stellt der Zugriff über Ursprungsgrenzen ein erhebliches Sicherheitsrisiko dar und muss sorgfältig kontrolliert werden.

## Lösung

Verwenden Sie `Access-Control-Allow-Origin`, um die nicht selben Ursprünge zu definieren, die berechtigt sind, Anfragen an Seiten auf Ihrer Domain zu stellen.

Falls vorhanden, sollte `Access-Control-Allow-Origin` die minimale Anzahl an Ursprüngen und Ressourcen spezifizieren, die für die Funktion Ihrer Seite notwendig sind. Zum Beispiel, wenn Ihr Server sowohl eine Webseite als auch eine API bereitstellt, die für Remote-`XMLHttpRequest`-Zugriffe bestimmt ist, sollten nur die API-Ressourcen den `Access-Control-Allow-Origin`-Header zurückgeben.

Wenn `Access-Control-Allow-Origin` nicht richtig eingestellt ist, können unautorisierte Ursprünge die Inhalte jeder Seite auf Ihrer Seite lesen. Dies kann besonders gefährlich sein, wenn diese Seiten in der Lage sind, Anmeldedaten zu senden, was Ihre Seite potentiell [CSRF](/de/docs/Web/Security/Attacks/CSRF)-Angriffen aussetzen könnte.

Falls ein beglaubigter Zugriff von bestimmten Ursprüngen erforderlich ist, stellen Sie sicher, dass `Access-Control-Allow-Origin` nur auf diese Ursprünge gesetzt ist und nicht den [`Origin`](/de/docs/Web/HTTP/Reference/Headers/Origin)-Header widerspiegelt. Falls ein öffentlicher nicht beglaubigter Zugriff erforderlich ist, setzen Sie `Access-Control-Allow-Origin` auf `*` und lassen Sie den `Access-Control-Allow-Credentials`-Header weg. Andernfalls lassen Sie beide Header weg.

## Beispiele

Erlauben Sie jeder Webseite, die Inhalte einer JavaScript-Bibliothek zu lesen:

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
- [CORS für Entwickler](https://w3c.github.io/webappsec-cors-for-developers/) von W3C (2016)
