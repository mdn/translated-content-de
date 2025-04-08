---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 1359e749ed421c9b4a52361681edfb9235a6503e
---

{{HTTPSidebar}}

Die HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`** weist Benutzeragenten an, alle unsicheren URLs einer Seite (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Richtlinie ist für Websites vorgesehen, die eine große Anzahl unsicherer, veralteter URLs haben, die umgeschrieben werden müssen.

> [!NOTE]
> Die Direktive `upgrade-insecure-requests` wird vor
> {{CSP("block-all-mixed-content")}} ausgewertet, und wenn sie gesetzt ist, ist letzteres im Wesentlichen eine No-op. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, aber nicht beide, es sei denn, Sie möchten HTTPS bei älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

Die Direktive `upgrade-insecure-requests` stellt nicht sicher, dass Benutzer, die Ihre Seite über Links auf Websites Dritter besuchen, für die oberste Navigation auf HTTPS umgestellt werden, und ersetzt somit nicht den
{{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}) Header, der weiterhin mit einem geeigneten `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht Anfällig für SSL-Stripping-Angriffe sind.

## Syntax

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Beispiele

### Verwenden des HTTP-Headers

```http
Content-Security-Policy: upgrade-insecure-requests;
```

### Verwenden des HTML-Meta-Elements

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests" />
```

Mit dem obigen Header, der auf einer Domain example.com gesetzt ist, die von HTTP zu HTTPS migrieren möchte, werden nicht-navigierende unsichere Ressourcenanfragen automatisch aufgewertet (sowohl Erstanbieter- als auch Drittanbieteranfragen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage gestellt wird, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass die Anfrage fehlschlagen wird, ohne auf HTTP zurückzufallen, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigations-Upgrades zu Drittanbieter-Ressourcen bergen ein deutlich höheres Potential für Ausfälle, diese werden nicht aufgewertet:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Finden unsicherer Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}} Headers und der {{CSP("report-uri")}} Direktive können Sie eine durchgesetzte Richtlinie und eine berichtende Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise werden unsichere Anfragen auf Ihrer sicheren Seite dennoch aufgewertet, aber nur die Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}) Header
- {{CSP("block-all-mixed-content")}}
- [Gemischte Inhalte](/de/docs/Web/Security/Mixed_content)
