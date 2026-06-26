---
title: "URL: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URL/hostname
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft der [`URL`](/de/docs/Web/API/URL)-Schnittstelle ist eine Zeichenkette, die entweder den {{Glossary("domain_name", "Domain-Namen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} der URL enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft eine leere Zeichenkette, `""`. IPv4- und IPv6-Adressen werden normalisiert, zum Beispiel durch das Entfernen führender Nullen, und Domain-Namen werden in [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) konvertiert.

Diese Eigenschaft kann gesetzt werden, um den Hostnamen der URL zu ändern. Wenn das Schema der URL nicht [hierarchisch](https://www.rfc-editor.org/info/rfc3986/#section-1.2.3) ist (das der URL-Standard als "[besondere Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet), dann gibt es kein Konzept eines Hosts und das Setzen dieser Eigenschaft hat keinen Effekt.

## Wert

Eine Zeichenkette.

## Beispiele

```js
const url = new URL(
  "https://developer.mozilla.org/en-US/docs/Web/API/URL/hostname",
);
console.log(url.hostname); // Logs: 'developer.mozilla.org'

url.hostname = "你好.com";
console.log(url.hostname); // Logs: 'xn--6qq79v.com'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`URL`](/de/docs/Web/API/URL)-Schnittstelle, zu der es gehört.
