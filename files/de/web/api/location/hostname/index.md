---
title: "Standort: hostname-Eigenschaft"
short-title: hostname
slug: Web/API/Location/hostname
l10n:
  sourceCommit: 8cc63f7e6619446ea38f6a38c457a597a9af564b
---

{{ApiRef("URL API")}}

Die **`hostname`**-Eigenschaft des [`Location`](/de/docs/Web/API/Location)-Interfaces ist ein String, der entweder den {{Glossary("domain_name", "Domainnamen")}} oder die {{Glossary("IP_address", "IP-Adresse")}} der Standort-URL enthält. Wenn die URL keinen Hostnamen hat, enthält diese Eigenschaft einen leeren String, `""`. IPv4- und IPv6-Adressen werden normalisiert, z. B. durch das Entfernen führender Nullen, und Domainnamen werden in [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name) umgewandelt.

Weitere Informationen finden Sie unter [`URL.hostname`](/de/docs/Web/API/URL/hostname).

## Wert

Ein String.

## Beispiele

```js
console.log(window.location.hostname);
// developer.mozilla.org

const anchor = document.createElement("a");
anchor.href = "https://developer.mozilla.org:4097/";
console.log(anchor.hostname === "developer.mozilla.org");
// The port number is not included in hostname
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
