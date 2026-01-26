---
title: "Content-Security-Policy: Direktive upgrade-insecure-requests"
short-title: upgrade-insecure-requests
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`upgrade-insecure-requests`** weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer, veralteter URLs haben, die umgeschrieben werden müssen.

Die `upgrade-insecure-requests`-Direktive stellt nicht sicher, dass Benutzer, die Ihre Website über Links von Drittanbieter-Websites besuchen, für die Hauptnavigation auf HTTPS aufgerüstet werden. Sie ersetzt daher nicht den {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})-Header, der weiterhin mit einem geeigneten `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht SSL-Stripping-Angriffen ausgesetzt sind.

## Syntax

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Beispiele

### Verwendung des HTTP-Headers

```http
Content-Security-Policy: upgrade-insecure-requests;
```

### Verwendung des HTML-Meta-Elements

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests" />
```

Mit dem obigen Header, der auf einer Domain wie example.com gesetzt ist, die von HTTP zu HTTPS migrieren möchte, werden nicht-navigierende unsichere Ressourcenanforderungen automatisch aufgerüstet (sowohl erst- als auch drittanbieter-Anfragen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage gestellt wird, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass die Anfrage fehlschlägt, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist, ohne dass ein Fallback zu HTTP erfolgt.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigationsaufrüstungen zu Ressourcen von Drittanbietern bringen ein signifikant höheres Potenzial für Brüche mit sich, diese werden nicht aufgerüstet:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Aufspüren unsicherer Anfragen

Mit Hilfe des Headers {{HTTPHeader("Content-Security-Policy-Report-Only")}} und der Direktive {{CSP("report-uri")}} können Sie eine erzwungene Richtlinie und eine gemeldete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise rüsten Sie immer noch unsichere Anfragen auf Ihrer sicheren Website auf, aber nur die Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}}-Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})-Header
- [Mixed content](/de/docs/Web/Security/Defenses/Mixed_content)
