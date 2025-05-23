---
title: "Content-Security-Policy: upgrade-insecure-requests-Direktive"
short-title: upgrade-insecure-requests
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`**-Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer veralteter URLs haben, die umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests`-Direktive wird vor {{CSP("block-all-mixed-content")}} ausgewertet, und wenn sie gesetzt ist, hat letztere effektiv keine Auswirkung. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, jedoch nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die dies nach einer Umleitung auf HTTP nicht erzwingen.

Die `upgrade-insecure-requests`-Direktive stellt nicht sicher, dass Benutzer, die Ihre Seite über Links auf Drittanbieterseiten besuchen, für die oberste Navigation auf HTTPS umgestellt werden. Daher ersetzt sie nicht den {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})-Header, der weiterhin mit einem geeigneten `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht anfällig für SSL-Stripping-Angriffe sind.

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

Mit dem obigen Header, der auf einer Domain example.com gesetzt ist, die von HTTP auf HTTPS migrieren möchte, werden unsichere Anfragen für nicht navigierende Ressourcen automatisch aktualisiert (Anfragen sowohl von Erstanbietern als auch von Drittanbietern).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden vor der Anforderung umgeschrieben, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass die Anforderung fehlschlägt, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist, ohne dass ein Fallback auf HTTP erfolgt.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigationsaktualisierungen zu Drittanbieter-Ressourcen bergen ein erheblich höheres Potenzial für Fehler, diese werden nicht aktualisiert:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Auffinden unsicherer Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-uri")}}-Direktive können Sie eine durchgesetzte Richtlinie und eine gemeldete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise aktualisieren Sie weiterhin unsichere Anfragen auf Ihrer sicheren Website, aber nur die Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}}-Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}})-Header
- {{CSP("block-all-mixed-content")}}
- [Mixed Content](/de/docs/Web/Security/Mixed_content)
