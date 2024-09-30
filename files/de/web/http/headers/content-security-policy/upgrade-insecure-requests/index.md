---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`**-Direktive weist Benutzeragenten an, alle unsicheren URLs einer Website (die über HTTP bereitgestellt werden) so zu behandeln, als ob sie durch sichere URLs (die über HTTPS bereitgestellt werden) ersetzt worden wären. Diese Direktive ist für Websites gedacht, die eine große Anzahl unsicherer veralteter URLs enthalten, die umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests`-Direktive wird vor
> {{CSP("block-all-mixed-content")}} ausgewertet, und wenn sie gesetzt ist, wird letztere effektiv zu einem
> No-Op. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, jedoch nicht beide, es sei denn, Sie möchten HTTPS in älteren Browsern erzwingen, die dies nach einer Umleitung zu HTTP nicht erzwingen.

Die `upgrade-insecure-requests`-Direktive stellt nicht sicher, dass Benutzer, die Ihre Seite über Links auf Websites Dritter besuchen, für die oberste Navigation auf HTTPS umgestellt werden. Daher ersetzt sie nicht den
{{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS))-Header, der weiterhin mit einem geeigneten `max-age` gesetzt werden sollte, um sicherzustellen, dass Benutzer nicht anfällig für SSL-Stripping-Angriffe sind.

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

Mit dem obigen Header, der auf einer Domain example.com gesetzt ist, die von HTTP auf HTTPS umsteigen möchte, werden nicht navigierende unsichere Ressourcenanforderungen automatisch aktualisiert (sowohl Erstanbieter- als auch Drittanbieteranfragen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden neu geschrieben, bevor die Anforderung gesendet wird, was bedeutet, dass keine unsicheren Anfragen das Netzwerk erreichen. Beachten Sie, dass, wenn die angeforderte Ressource tatsächlich nicht über HTTPS verfügbar ist, die Anfrage fehlschlägt, ohne dass auf HTTP zurückgefallen wird.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Die Navigations-Upgrades zu Ressourcen Dritter haben ein erheblich höheres Potenzial für Fehler und werden nicht aktualisiert:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Auffinden unsicherer Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Headers und der {{CSP("report-uri")}}-Direktive können Sie eine erzwungene Richtlinie und eine berichtete Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise aktualisieren Sie dennoch unsichere Anfragen auf Ihrer sicheren Seite, aber die einzige Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}}-Header
- {{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS))-Header
- {{CSP("block-all-mixed-content")}}
- [Gemischter Inhalt](/de/docs/Web/Security/Mixed_content)
