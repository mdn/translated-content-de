---
title: "Content-Security-Policy: upgrade-insecure-requests Direktive"
short-title: upgrade-insecure-requests
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`** Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer veralteter URLs haben, die umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests` Direktive wird vor
> {{CSP("block-all-mixed-content")}} ausgewertet, und wenn sie gesetzt ist, ist letztere effektiv wirkungslos. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, aber nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einer Umleitung auf HTTP nicht erzwingen.

Die `upgrade-insecure-requests` Direktive stellt nicht sicher, dass Benutzer, die Ihre Website über Links auf Websites Dritter besuchen, für die Top-Level-Navigation zu HTTPS hochgestuft werden. Sie ersetzt damit nicht den
{{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS", "HSTS")}}) Header, der weiterhin mit einem angemessenen `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht Opfer von SSL-Stripping-Angriffen werden.

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

Mit dem obigen Header, gesetzt auf einer Domain example.com, die von HTTP auf HTTPS umstellen möchte, werden nicht-navigierende unsichere Ressourcenanfragen automatisch hochgestuft (sowohl First-Party- als auch Third-Party-Anfragen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage gesendet wird, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass, wenn die angeforderte Ressource nicht tatsächlich über HTTPS verfügbar ist, die Anfrage fehlschlägt, ohne auf HTTP zurückzufallen.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigations-Upgrades für Drittanbieterressourcen bergen ein erheblich höheres Potenzial für Bruchstellen, diese werden nicht hochgestuft:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Unsichere Anfragen finden

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}} Headers und der {{CSP("report-uri")}} Direktive können Sie eine durchgesetzte Richtlinie und eine berichtete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise stufen Sie immer noch unsichere Anfragen auf Ihrer sicheren Website hoch, aber nur die Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

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
