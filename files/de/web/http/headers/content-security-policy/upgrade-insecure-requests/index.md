---
title: "CSP: upgrade-insecure-requests"
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
**`upgrade-insecure-requests`** Direktive weist Benutzeragenten an,
alle unsicheren URLs einer Website (d.h. über HTTP bereitgestellt) so zu behandeln,
als wären sie durch sichere URLs (d.h. über HTTPS bereitgestellt) ersetzt worden. Diese Direktive
ist für Websites gedacht, die eine große Anzahl unsicherer veralteter URLs haben, die
umgeschrieben werden müssen.

> [!NOTE]
> Die `upgrade-insecure-requests` Direktive wird vor der {{CSP("block-all-mixed-content")}} Direktive ausgewertet. Wenn sie gesetzt ist, ist letztere effektiv wirkungslos. Es wird empfohlen, entweder die eine oder die andere Direktive zu setzen, nicht jedoch beide, es sei denn, Sie möchten HTTPS auf älteren Browsern erzwingen, die es nach einer Umleitung zu HTTP nicht erzwingen.

Die `upgrade-insecure-requests` Direktive wird nicht sicherstellen, dass Benutzer, die Ihre Website über Links auf Websites Dritter besuchen, beim Top-Level-Navigation zu HTTPS aufgewertet werden. Daher ersetzt sie nicht den {{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS)) Header, der immer noch mit einem geeigneten `max-age` gesetzt werden sollte, um zu gewährleisten, dass Benutzer nicht Ziel von SSL-Stripping-Angriffen werden.

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

Mit dem oben genannten Header, der auf einer Domain example.com gesetzt ist und die von HTTP zu
HTTPS migrieren möchte, werden nicht-navigative unsichere Ressourcenanfragen automatisch
aufgewertet (sowohl Erst- als auch Drittanbieteranfragen).

```html
<img src="http://example.com/image.png" />
<img src="http://not-example.com/image.png" />
```

Diese URLs werden umgeschrieben, bevor die Anfrage gestellt wird, was bedeutet, dass keine unsicheren
Anfragen das Netzwerk erreichen. Beachten Sie, dass, wenn die angeforderte Ressource nicht tatsächlich
über HTTPS verfügbar ist, die Anfrage fehlschlägt, ohne auf HTTP zurückzufallen.

```html
<img src="https://example.com/image.png" />
<img src="https://not-example.com/image.png" />
```

Navigative Upgrades zu Drittanbieter-Resourcen bringen ein signifikant höheres Potenzial
für Ausfälle, diese werden nicht aufgewertet:

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Finden unsicherer Anfragen

Mit Hilfe des {{HTTPHeader("Content-Security-Policy-Report-Only")}} Headers und
der {{CSP("report-uri")}} Direktive können Sie eine erzwungene Richtlinie und eine gemeldete
Richtlinie wie folgt einrichten:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

Auf diese Weise rüsten Sie unsichere Anfragen auf Ihrer sicheren Website auf, aber nur die
Überwachungsrichtlinie wird verletzt und meldet unsichere Ressourcen an Ihren Endpunkt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} Header
- {{HTTPHeader("Strict-Transport-Security")}} ([HSTS](/de/docs/Glossary/HSTS)) Header
- {{CSP("block-all-mixed-content")}}
- [Gemischter Inhalt](/de/docs/Web/Security/Mixed_content)
