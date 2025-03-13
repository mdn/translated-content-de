---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`** Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer veralteter URLs haben, die umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests` Direktive wird vor
> {{CSP("block-all-mixed-content")}} ausgewertet, und wenn sie gesetzt ist, wird letztere effektiv zu einer No-Op. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, aber nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einer Umleitung auf HTTP nicht erzwingen.

Die `upgrade-insecure-requests` Direktive stellt nicht sicher, dass Benutzer, die Ihre Website über Links auf Websites Dritter besuchen, für die Top-Level-Navigation zu HTTPS hochgestuft werden. Sie ersetzt daher nicht den
{{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}) Header, der immer noch mit einem angemessenen `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht anfällig für SSL-Stripping-Angriffe sind.

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

Mit dem obigen Header, der auf einer Domain example.com gesetzt wird, die von HTTP auf HTTPS migrieren möchte, werden nicht-navigierende unsichere Ressourcenanforderungen automatisch hochgestuft (sowohl Erstanbieter- als auch Drittanbieteranfragen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage gestellt wird, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass die Anfrage fehlschlagen wird, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist, ohne auf HTTP zurückzufallen.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigationsaktualisierungen zu Drittanbieter-Ressourcen haben ein signifikant höheres Potenzial für Schäden und werden daher nicht aktualisiert:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Auffinden unsicherer Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}} Headers und der {{CSP("report-uri")}} Direktive können Sie eine durchgesetzte Richtlinie und eine gemeldete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise stufen Sie noch immer unsichere Anfragen auf Ihrer sicheren Seite hoch, aber die einzige überwachte Richtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}) Header
- {{CSP("block-all-mixed-content")}}
- [Mixed content](/de/docs/Web/Security/Mixed_content)
