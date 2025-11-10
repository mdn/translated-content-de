---
title: "URL: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URL/hostname
l10n:
  sourceCommit: 734ede6d63422fb22232b555b6c521bd8939ca5f
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der entweder den {{Glossary("domain_name", "Domainnamen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} der URL enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IPv4- und IPv6-Adressen werden normalisiert, zum Beispiel durch das Entfernen führender Nullen, und Domainnamen werden in [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) konvertiert.

Diese Eigenschaft kann festgelegt werden, um den Hostnamen der URL zu ändern. Wenn das Schema der URL nicht [hierarchisch](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) ist (was der URL-Standard als "[besondere Schemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet), dann hat es kein Hostkonzept und das Festlegen dieser Eigenschaft hat keine Wirkung.

## Wert

Ein String.

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

- Das [`URL`](/de/docs/Web/API/URL)-Interface, zu dem es gehört.
