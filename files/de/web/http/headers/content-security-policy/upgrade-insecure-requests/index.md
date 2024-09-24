---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`upgrade-insecure-requests`**-Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als wären sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer, veralteter URLs haben, die umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests`-Direktive wird vor {{CSP("block-all-mixed-content")}} ausgewertet und wenn sie gesetzt ist, wird letztere effektiv zu einer No-Op. Es wird empfohlen, entweder diese oder jene Direktive zu setzen, aber nicht beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einem Redirect zu HTTP nicht erzwingen.

Die `upgrade-insecure-requests`-Direktive wird nicht sicherstellen, dass Benutzer, die Ihre Website über Links auf Drittanbieter-Websites besuchen, auf HTTPS für die Top-Level-Navigation umgestellt werden. Sie ersetzt daher nicht den {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})-Header, der weiterhin mit einem geeigneten `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht anfällig für SSL-Stripping-Angriffe sind.

## Syntax

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Beispiele

### Verwendung des HTTP-Headers

```http
Content-Security-Policy: upgrade-insecure-requests;
```

### Verwendung des HTML-meta-Elements

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests" />
```

Mit dem obigen Header, der auf einer Domain example.com gesetzt ist, die von HTTP zu HTTPS migrieren möchte, werden nicht-navigierende unsichere Ressourcenanforderungen automatisch hochgestuft (sowohl Erstanbieter- als auch Drittanbieter-Anforderungen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage gestellt wird, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass die Anfrage fehlschlägt, falls die gewünschte Ressource tatsächlich nicht über HTTPS verfügbar ist, ohne Rückfallmöglichkeit auf HTTP.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigations-Upgrades zu Drittanbieter-Ressourcen bergen ein wesentlich höheres Potenzial für Fehler, diese werden nicht hochgestuft:

```html
<a href="https://example.com/">Startseite</a>
<a href="http://not-example.com/">Startseite</a>
```

### Auffinden unsicherer Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-uri")}}-Direktive können Sie eine durchgesetzte und eine berichtete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise aktualisieren Sie weiterhin unsichere Anfragen auf Ihrer sicheren Site, aber die einzige Überwachungsrichtlinie wird verletzt und berichtet unsichere Ressourcen an Ihr Endpoint.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}}-Header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})-Header
- {{CSP("block-all-mixed-content")}}
- [Mixed content](/de/docs/Web/Security/Mixed_content)
