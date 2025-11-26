---
title: "Content-Security-Policy: upgrade-insecure-requests-Direktive"
short-title: upgrade-insecure-requests
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: e34a63d834d0d445073ef711537c6aeb7bd11ad5
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`**-Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer Legacy-URLs haben, die neu geschrieben werden müssen.

Die `upgrade-insecure-requests`-Direktive stellt nicht sicher, dass Benutzer, die Ihre Website über Links auf Drittanbieter-Websites besuchen, für die oberste Navigation auf HTTPS umgestellt werden. Daher ersetzt sie nicht den {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})-Header, der weiterhin mit einem geeigneten `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht Ziel von SSL-Stripping-Angriffen werden.

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

Mit dem oben genannten Header, der auf einer Domain example.com gesetzt ist, die von HTTP zu HTTPS migrieren möchte, werden nicht navigationsbezogene unsichere Ressourcenanforderungen automatisch aufgewertet (sowohl Erstanbieter- als auch Drittanbieteranforderungen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage erfolgt, was bedeutet, dass keine unsicheren Anforderungen das Netzwerk erreichen. Beachten Sie, dass, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist, die Anfrage fehlschlägt, ohne auf HTTP zurückzufallen.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigations-Upgrades zu Drittanbieterressourcen haben ein signifikant höheres Potenzial für Fehler, diese werden nicht aufgewertet:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Unsichere Anfragen finden

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-uri")}}-Direktive können Sie eine durchgesetzte Richtlinie und eine berichtete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise werten Sie weiterhin unsichere Anfragen auf Ihrer sicheren Website auf, aber nur die Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}) Header
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
