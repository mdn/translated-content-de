---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`**-Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als ob sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden wären. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer, veralteter URLs haben, die umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests`-Direktive wird vor
> {{CSP("block-all-mixed-content")}} ausgewertet. Wenn sie gesetzt ist, wird letztere effektiv zu einem No-Op. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, aber nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

Die `upgrade-insecure-requests`-Direktive stellt nicht sicher, dass Benutzer, die Ihre Website über Links auf Drittanbieter-Websites besuchen, für die Top-Level-Navigation auf HTTPS aktualisiert werden. Sie ersetzt daher nicht den {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) Header, der weiterhin mit einem angemessenen `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht anfällig für SSL-Stripping-Angriffe sind.

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

Mit dem obigen Header, der auf einer Domain example.com gesetzt ist, die von HTTP auf HTTPS migrieren möchte, werden unsichere Ressourcenvorderungen automatisch aktualisiert (sowohl Anfragen von Erstanbietern als auch von Drittanbietern).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anforderung erfolgt, was bedeutet, dass keine unsicheren Anforderungen das Netzwerk erreichen. Beachten Sie, dass, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist, die Anforderung fehlschlägt, ohne auf HTTP zurückzufallen.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigations-Upgrades zu Drittanbieter-Ressourcen bergen ein deutlich höheres Risiko für Fehler, diese werden nicht aktualisiert:

```html
<a href="https://example.com/">Startseite</a>
<a href="http://not-example.com/">Startseite</a>
```

### Finden von unsicheren Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-uri")}}-Direktive können Sie eine durchgesetzte Richtlinie und eine Bericht-Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise aktualisieren Sie unsichere Anfragen auf Ihrer sicheren Website, aber die nur überwachte Richtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) Header
- {{CSP("block-all-mixed-content")}}
- [Gemischter Inhalt](/de/docs/Web/Security/Mixed_content)
