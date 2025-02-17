---
title: "URL: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/URL/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}} {{AvailableInWorkers}}

Die **`hostname`**-Eigenschaft des [`URL`](/de/docs/Web/API/URL)-Interfaces ist ein String, der entweder den {{Glossary("domain_name", "Domainnamen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} der URL enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IPv4- und IPv6-Adressen werden normalisiert, z. B. durch das Entfernen führender Nullen, und Domainnamen werden in [IDN](https://de.wikipedia.org/wiki/Internationalisierter_Domainname) umgewandelt.

Diese Eigenschaft kann gesetzt werden, um den Hostnamen der URL zu ändern. Wenn das Schema der URL nicht [hierarchisch](https://www.rfc-editor.org/rfc/rfc3986#section-1.2.3) ist (was der URL-Standard als "[Spezialschemata](https://url.spec.whatwg.org/#special-scheme)" bezeichnet), hat sie kein Konzept eines Hosts, und das Setzen dieser Eigenschaft zeigt keine Wirkung.

Der Hostname wird beim Setzen {{Glossary("Percent-encoding", "prozent-codiert")}}, aber beim Lesen nicht prozent-dekodiert.

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
